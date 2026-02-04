// ============================================================
// §34i LERN-APP - ANWENDUNGSLOGIK
// Mit Prüfungssimulator für realistische Prüfungsvorbereitung
// ============================================================

const APP_VERSION = '2.0.0';

// ========================================
// FIREBASE SYNC MANAGER
// ========================================
const FirebaseSync = {
    userId: null,
    isEnabled: false,
    isApplyingRemote: false,
    lastCloudUpdate: null,
    syncCodeKey: '34i-sync-code',

    async init() {
        // Sync-Code hat Vorrang vor Auto-User-ID
        const syncCode = localStorage.getItem(this.syncCodeKey);
        if (syncCode) {
            this.userId = 'code_' + this.normalizeSyncCode(syncCode);
        } else {
            this.userId = localStorage.getItem('34i-user-id');
            if (!this.userId) {
                this.userId = 'user_' + Math.random().toString(36).substr(2, 9) + Date.now();
                localStorage.setItem('34i-user-id', this.userId);
            }
        }

        // Prüfe ob Firebase verfügbar ist
        if (window.firebaseReady && window.firebaseDB) {
            this.isEnabled = true;
            await this.loadFromCloud();
            this.setupRealtimeSync();
            console.log('✅ Cloud-Sync aktiviert');
        } else {
            console.log('📱 Nur lokale Speicherung aktiv');
        }
    },
    
    normalizeSyncCode(value) {
        return (value || '')
            .toString()
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '')
            .slice(0, 32);
    },

    async loadFromCloud() {
        if (!this.isEnabled) return;

        try {
            const { getDoc, doc } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
            const docRef = doc(window.firebaseDB, 'users', this.userId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const cloudData = docSnap.data();
                this.applyRemoteState(cloudData);
                console.log('☁️ Daten aus Cloud geladen');
            } else {
                // Kein Cloud-Dokument vorhanden -> lokale Daten hochladen
                this.saveToCloud();
            }
        } catch (error) {
            console.warn('Cloud-Sync Fehler:', error);
        }
    },

    async saveToCloud() {
        if (!this.isEnabled) return;
        if (this.isApplyingRemote) return;

        try {
            const { setDoc, doc } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
            const docRef = doc(window.firebaseDB, 'users', this.userId);
            await setDoc(docRef, {
                learned: State.learned,
                bestScore: State.bestScore,
                examResults: State.examResults,
                totalQuizzesTaken: State.totalQuizzesTaken,
                lastUpdated: State.lastUpdated
            });
            console.log('☁️ In Cloud gespeichert');
        } catch (error) {
            console.warn('Cloud-Sync Fehler:', error);
        }
    },

    setupRealtimeSync() {
        // Realtime-Listener für Änderungen von anderen Geräten/Tabs
        this.subscribeToCloud();

        // Fallback: vor dem Schließen nochmal speichern
        window.addEventListener('beforeunload', () => {
            this.saveToCloud();
        });

        // Bei Rückkehr in den Tab kurz nachziehen
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                this.loadFromCloud();
            }
        });
    },

    async subscribeToCloud() {
        if (!this.isEnabled) return;

        try {
            const { onSnapshot, doc } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
            const docRef = doc(window.firebaseDB, 'users', this.userId);

            onSnapshot(docRef, (docSnap) => {
                if (!docSnap.exists()) return;
                const cloudData = docSnap.data();
                this.applyRemoteState(cloudData);
            });
        } catch (error) {
            console.warn('Cloud-Realtime Fehler:', error);
        }
    },

    applyRemoteState(cloudData) {
        if (!cloudData) return;

        const cloudUpdated = cloudData.lastUpdated || null;
        const localUpdated = State.lastUpdated || null;

        if (cloudUpdated && this.lastCloudUpdate === cloudUpdated) return;

        const cloudTime = cloudUpdated ? new Date(cloudUpdated).getTime() : 0;
        const localTime = localUpdated ? new Date(localUpdated).getTime() : 0;

        if (cloudTime >= localTime) {
            this.isApplyingRemote = true;
            State.learned = cloudData.learned || [];
            State.bestScore = cloudData.bestScore || 0;
            State.examResults = cloudData.examResults || [];
            State.totalQuizzesTaken = cloudData.totalQuizzesTaken || 0;
            State.lastUpdated = cloudUpdated || new Date().toISOString();
            State.saveLocalOnly();
            Stats.update();
            if (document.getElementById('profile-view')?.classList.contains('active')) {
                Profile.update();
            }
            this.isApplyingRemote = false;
        } else {
            // Lokale Daten sind neuer -> hochschreiben
            this.saveToCloud();
        }

        this.lastCloudUpdate = cloudUpdated;
    }
};

// ========================================
// STATE MANAGEMENT
// ========================================
const State = {
    learned: JSON.parse(localStorage.getItem('34i-learned') || '[]'),
    bestScore: parseInt(localStorage.getItem('34i-best') || '0'),
    examResults: JSON.parse(localStorage.getItem('34i-exam-results') || '[]'),
    totalQuizzesTaken: parseInt(localStorage.getItem('34i-quizzes-taken') || '0'),
    lastUpdated: localStorage.getItem('34i-last-updated') || null,

    save() {
        this.lastUpdated = new Date().toISOString();
        this.saveLocalOnly();

        // Cloud-Sync
        FirebaseSync.saveToCloud();
    },

    saveLocalOnly() {
        localStorage.setItem('34i-learned', JSON.stringify(this.learned));
        localStorage.setItem('34i-best', this.bestScore.toString());
        localStorage.setItem('34i-exam-results', JSON.stringify(this.examResults));
        localStorage.setItem('34i-quizzes-taken', this.totalQuizzesTaken.toString());
        if (this.lastUpdated) {
            localStorage.setItem('34i-last-updated', this.lastUpdated);
        }
    },

    addExamResult(score, totalQuestions, timeSpent) {
        this.examResults.push({
            date: new Date().toISOString(),
            score: score,
            totalQuestions: totalQuestions,
            timeSpent: timeSpent,
            passed: score >= 50
        });
        // Nur letzte 10 Ergebnisse speichern
        if (this.examResults.length > 10) {
            this.examResults = this.examResults.slice(-10);
        }
        this.save();
    }
};

// ========================================
// NAVIGATION
// ========================================
const Navigation = {
    init() {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => this.switchView(item.dataset.view));
        });
    },

    switchView(view) {
        // Update navigation
        document.querySelectorAll('.nav-item').forEach(t => t.classList.remove('active'));
        const activeNav = document.querySelector(`.nav-item[data-view="${view}"]`);
        if (activeNav) activeNav.classList.add('active');

        // Update views
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        const activeView = document.getElementById(`${view}-view`);
        if (activeView) activeView.classList.add('active');

        // Bei Wechsel zur Lernansicht: Suche zurücksetzen
        if (view === 'learn') {
            const searchInput = document.getElementById('searchInput');
            if (searchInput) searchInput.value = '';
            document.querySelectorAll('.section').forEach(s => s.style.display = 'block');
        }

        // Update profile when switching to profile view
        if (view === 'profile') {
            Profile.update();
        }

        // Update home stats
        if (view === 'home') {
            Stats.update();
        }
    }
};

// ========================================
// PROFILE MANAGER
// ========================================
const Profile = {
    update() {
        // User ID
        const userIdEl = document.getElementById('userIdDisplay');
        if (userIdEl) {
            const syncCode = localStorage.getItem(FirebaseSync.syncCodeKey);
            if (syncCode) {
                userIdEl.textContent = 'Sync-Code: ' + syncCode;
            } else {
                userIdEl.textContent = FirebaseSync.userId ? FirebaseSync.userId.substring(0, 12) + '...' : '-';
            }
        }

        // Stats
        const cardsEl = document.getElementById('profileCardsLearned');
        const quizzesEl = document.getElementById('profileQuizzesTaken');
        const scoreEl = document.getElementById('profileBestScore');
        const examsEl = document.getElementById('profileExamsTaken');

        if (cardsEl) cardsEl.textContent = State.learned.length;
        if (quizzesEl) quizzesEl.textContent = State.totalQuizzesTaken;
        if (scoreEl) scoreEl.textContent = State.bestScore + '%';
        if (examsEl) examsEl.textContent = State.examResults.length;

        // Exam History
        this.updateExamHistory();
    },
    
    setSyncCode() {
        const input = document.getElementById('syncCodeInput');
        if (!input) return;
        const raw = input.value.trim();
        if (!raw) {
            alert('Bitte einen Sync-Code eingeben.');
            return;
        }
        const normalized = FirebaseSync.normalizeSyncCode(raw);
        if (!normalized) {
            alert('Sync-Code ist ungueltig. Bitte nur Buchstaben/Zahlen nutzen.');
            return;
        }
        localStorage.setItem(FirebaseSync.syncCodeKey, normalized);
        alert('Sync-Code gesetzt. Die App wird neu geladen.');
        window.location.reload();
    },
    
    generateSyncCode() {
        const input = document.getElementById('syncCodeInput');
        if (!input) return;
        const random = Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 6);
        const normalized = FirebaseSync.normalizeSyncCode(random);
        input.value = normalized;
    },
    
    clearSyncCode() {
        if (!confirm('Sync-Code wirklich loeschen? Dann wird lokal synchronisiert.')) {
            return;
        }
        localStorage.removeItem(FirebaseSync.syncCodeKey);
        alert('Sync-Code geloescht. Die App wird neu geladen.');
        window.location.reload();
    },

    updateExamHistory() {
        const historyEl = document.getElementById('examHistory');
        if (!historyEl) return;

        if (State.examResults.length === 0) {
            historyEl.innerHTML = '<p class="empty-state">Noch keine Prüfungen absolviert</p>';
            return;
        }

        const historyHTML = State.examResults.slice().reverse().map((exam) => {
            const date = new Date(exam.date);
            const dateStr = date.toLocaleDateString('de-DE', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
            const timeStr = date.toLocaleTimeString('de-DE', {
                hour: '2-digit',
                minute: '2-digit'
            });
            const statusIcon = exam.passed ? '✅' : '❌';

            return `
                <div class="stat-item">
                    <span class="stat-item-label">${statusIcon} ${dateStr} ${timeStr}</span>
                    <span class="stat-item-value">${exam.score}%</span>
                </div>
            `;
        }).join('');

        historyEl.innerHTML = historyHTML;
    },

    exportData() {
        const data = {
            userId: FirebaseSync.userId,
            learned: State.learned,
            bestScore: State.bestScore,
            examResults: State.examResults,
            totalQuizzesTaken: State.totalQuizzesTaken,
            exportDate: new Date().toISOString()
        };

        const dataStr = JSON.stringify(data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `34i-lernfortschritt-${Date.now()}.json`;
        link.click();
        URL.revokeObjectURL(url);

        alert('✅ Daten wurden exportiert!');
    },

    resetProgress() {
        if (!confirm('⚠️ Wirklich den gesamten Lernfortschritt zurücksetzen?\n\nDies kann nicht rückgängig gemacht werden!')) {
            return;
        }

        if (!confirm('Bist du dir sicher? Alle Daten werden gelöscht!')) {
            return;
        }

        State.learned = [];
        State.bestScore = 0;
        State.examResults = [];
        State.totalQuizzesTaken = 0;
        State.save();

        Stats.update();
        this.update();

        alert('✅ Fortschritt wurde zurückgesetzt');
    }
};

// ========================================
// LEARNING CONTENT
// ========================================
const Learning = {
    init() {
        this.render();
        this.setupSearch();
    },

    render() {
        const container = document.getElementById('chaptersContainer');
        container.innerHTML = AppData.chapters.map(chapter => `
            <div class="chapter" id="chapter-${chapter.id}">
                <div class="chapter-header" onclick="Learning.toggle(${chapter.id})">
                    <span class="chapter-title">${chapter.title}</span>
                    <div class="chapter-meta">
                        <span class="chapter-hours">${chapter.hours} UE</span>
                        <span class="chapter-toggle">▼</span>
                    </div>
                </div>
                <div class="chapter-content">
                    ${chapter.sections.map(section => `
                        <div class="section" id="section-${section.id}">
                            <div class="section-title">
                                <span class="section-number">${section.id}</span>
                                ${section.title}
                            </div>
                            ${section.content}
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    },

    toggle(id) {
        const chapter = document.getElementById(`chapter-${id}`);
        chapter.classList.toggle('open');
    },

    setupSearch() {
        let searchTimeout;
        document.getElementById('searchInput').addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                const query = e.target.value.toLowerCase().trim();

                if (query.length === 0) {
                    // Alle anzeigen
                    document.querySelectorAll('.section').forEach(section => {
                        section.style.display = 'block';
                    });
                    document.querySelectorAll('.chapter').forEach(c => c.classList.remove('open'));
                } else {
                    // Suchen
                    let hasResults = false;
                    document.querySelectorAll('.section').forEach(section => {
                        const text = section.textContent.toLowerCase();
                        if (text.includes(query)) {
                            section.style.display = 'block';
                            section.closest('.chapter').classList.add('open');
                            hasResults = true;
                        } else {
                            section.style.display = 'none';
                        }
                    });
                }
            }, 300);
        });
    }
};

// ========================================
// QUIZ MODULE (Trainingsmodus)
// ========================================
const Quiz = {
    questions: [],
    currentIndex: 0,
    correct: 0,
    answered: false,
    mode: 'practice', // 'practice' oder 'exam'

    start(mode) {
        this.mode = 'practice';
        let questions = [...AppData.quiz];

        // Shuffle questions
        for (let i = questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }

        // Select number based on mode
        const count = mode === 'quick' ? 10 : mode === 'full' ? 30 : questions.length;
        this.questions = questions.slice(0, count);
        this.currentIndex = 0;
        this.correct = 0;
        this.answered = false;

        // Show quiz
        document.getElementById('quizSetup').style.display = 'none';
        document.getElementById('quizActive').style.display = 'block';
        document.getElementById('quizResults').style.display = 'none';
        document.getElementById('qTotal').textContent = this.questions.length;

        this.showQuestion();
    },

    showQuestion() {
        const q = this.questions[this.currentIndex];
        document.getElementById('qNum').textContent = this.currentIndex + 1;
        document.getElementById('qCategory').textContent = q.cat;
        document.getElementById('qText').textContent = q.q;

        // Shuffle answers
        const answers = q.a.map((a, i) => ({text: a, index: i}));
        for (let i = answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [answers[i], answers[j]] = [answers[j], answers[i]];
        }

        document.getElementById('qAnswers').innerHTML = answers.map((answer) =>
            `<button class="answer-btn" onclick="Quiz.check(${answer.index})">${answer.text}</button>`
        ).join('');

        document.getElementById('qExplanation').classList.remove('show');
        document.getElementById('nextBtn').classList.remove('show');
        this.answered = false;
    },

    check(selected) {
        if (this.answered) return;
        this.answered = true;

        const q = this.questions[this.currentIndex];
        const buttons = document.querySelectorAll('.answer-btn');

        buttons.forEach((btn, i) => {
            btn.classList.add('disabled');
            const btnText = btn.textContent;
            // Find which answer index this button represents
            const answerIndex = q.a.findIndex(a => a === btnText);

            if (answerIndex === q.c) {
                btn.classList.add('correct');
            } else if (answerIndex === selected) {
                btn.classList.add('wrong');
            }
        });

        if (selected === q.c) {
            this.correct++;
        }

        document.getElementById('qExpText').textContent = q.e;
        document.getElementById('qExplanation').classList.add('show');
        document.getElementById('nextBtn').classList.add('show');
    },

    next() {
        this.currentIndex++;
        if (this.currentIndex >= this.questions.length) {
            this.showResults();
        } else {
            this.showQuestion();
        }
    },

    showResults() {
        const score = Math.round((this.correct / this.questions.length) * 100);

        document.getElementById('quizActive').style.display = 'none';
        document.getElementById('quizResults').style.display = 'block';

        document.getElementById('finalScore').textContent = score + '%';
        document.getElementById('correctCount').textContent = this.correct;
        document.getElementById('wrongCount').textContent = this.questions.length - this.correct;

        let text = '';
        if (score >= 80) {
            text = '🎉 Hervorragend! Du bist bestens vorbereitet!';
        } else if (score >= 60) {
            text = '👍 Gut gemacht! Weiter so!';
        } else if (score >= 50) {
            text = '✓ Bestanden! Aber noch Luft nach oben.';
        } else {
            text = '📚 Noch etwas üben! Du schaffst das!';
        }
        document.getElementById('resultText').textContent = text;

        // Save best score
        if (score > State.bestScore) {
            State.bestScore = score;
            State.save();
        }

        State.totalQuizzesTaken++;
        State.save();
        Stats.update();
    },

    reset() {
        document.getElementById('quizSetup').style.display = 'block';
        document.getElementById('quizResults').style.display = 'none';
    },

    end() {
        document.getElementById('quizSetup').style.display = 'block';
        document.getElementById('quizActive').style.display = 'none';
    }
};

// ========================================
// PRÜFUNGSSIMULATOR (Realistischer Modus)
// ========================================
const ExamSimulator = {
    questions: [],
    currentIndex: 0,
    correct: 0,
    answers: [], // Speichert alle Antworten
    startTime: null,
    timeLimit: 90, // 90 Minuten für echte Prüfung
    timerInterval: null,

    start() {
        // Hole alle Fragen und shuffle
        let questions = [...AppData.quiz];
        for (let i = questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }

        // Realistische Prüfung: Alle Fragen
        this.questions = questions;
        this.currentIndex = 0;
        this.correct = 0;
        this.answers = new Array(questions.length).fill(null);
        this.startTime = Date.now();

        // UI Setup
        document.getElementById('quizSetup').style.display = 'none';
        document.getElementById('quizActive').style.display = 'block';
        document.getElementById('quizResults').style.display = 'none';

        // Timer starten
        this.startTimer();

        // Question Navigator erstellen
        this.updateQuestionNavigator();
        this.showQuestion();
    },

    startTimer() {
        this.updateTimerDisplay();
        this.timerInterval = setInterval(() => {
            this.updateTimerDisplay();

            // Automatisch beenden wenn Zeit abgelaufen
            const elapsed = Math.floor((Date.now() - this.startTime) / 1000 / 60);
            if (elapsed >= this.timeLimit) {
                this.finish();
            }
        }, 1000);
    },

    updateTimerDisplay() {
        const elapsed = Math.floor((Date.now() - this.startTime) / 1000 / 60);
        const remaining = this.timeLimit - elapsed;
        const hours = Math.floor(remaining / 60);
        const mins = remaining % 60;

        const timerEl = document.getElementById('examTimer');
        if (timerEl) {
            timerEl.textContent = `Zeit: ${hours}:${mins.toString().padStart(2, '0')}`;

            if (remaining <= 10) {
                timerEl.style.color = 'var(--danger)';
            } else if (remaining <= 30) {
                timerEl.style.color = 'var(--warning)';
            }
        }
    },

    updateQuestionNavigator() {
        const navigator = document.getElementById('questionNavigator');
        if (!navigator) return;

        navigator.innerHTML = `
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin: 16px 0;">
                ${this.questions.map((_, i) => `
                    <button
                        class="nav-dot ${i === this.currentIndex ? 'active' : ''} ${this.answers[i] !== null ? 'answered' : ''}"
                        onclick="ExamSimulator.jumpToQuestion(${i})"
                        style="width: 32px; height: 32px; border-radius: 50%; border: 2px solid var(--border-color); background: ${this.answers[i] !== null ? 'var(--primary)' : 'transparent'}; color: var(--text-primary); font-size: 0.8rem;"
                    >${i + 1}</button>
                `).join('')}
            </div>
        `;
    },

    showQuestion() {
        const q = this.questions[this.currentIndex];
        document.getElementById('qNum').textContent = this.currentIndex + 1;
        document.getElementById('qTotal').textContent = this.questions.length;
        document.getElementById('qCategory').textContent = q.cat;
        document.getElementById('qText').textContent = q.q;

        // Im Prüfungsmodus KEINE Erklärungen während der Prüfung!
        document.getElementById('qExplanation').style.display = 'none';

        // Antworten anzeigen (nicht shufflen im Prüfungsmodus für Konsistenz)
        document.getElementById('qAnswers').innerHTML = q.a.map((answer, i) =>
            `<button
                class="answer-btn ${this.answers[this.currentIndex] === i ? 'selected' : ''}"
                onclick="ExamSimulator.selectAnswer(${i})"
                style="${this.answers[this.currentIndex] === i ? 'border-color: var(--primary); background: rgba(79, 195, 247, 0.2);' : ''}"
            >${answer}</button>`
        ).join('');

        // Navigation buttons
        const nextBtn = document.getElementById('nextBtn');
        nextBtn.textContent = this.currentIndex === this.questions.length - 1 ? 'Prüfung beenden' : 'Weiter →';
        nextBtn.classList.add('show');
        nextBtn.onclick = () => this.nextOrFinish();

        this.updateQuestionNavigator();
    },

    selectAnswer(index) {
        this.answers[this.currentIndex] = index;
        this.showQuestion(); // Refresh um selected state zu zeigen
    },

    jumpToQuestion(index) {
        this.currentIndex = index;
        this.showQuestion();
    },

    nextOrFinish() {
        if (this.currentIndex === this.questions.length - 1) {
            // Bestätigung vor Beenden
            if (confirm(`Möchten Sie die Prüfung jetzt beenden?\n\nBeantwortet: ${this.answers.filter(a => a !== null).length}/${this.questions.length}`)) {
                this.finish();
            }
        } else {
            this.currentIndex++;
            this.showQuestion();
        }
    },

    finish() {
        clearInterval(this.timerInterval);

        // Auswerten
        this.correct = 0;
        const wrongQuestions = [];

        this.questions.forEach((q, i) => {
            if (this.answers[i] === q.c) {
                this.correct++;
            } else if (this.answers[i] !== null) {
                wrongQuestions.push({
                    question: q.q,
                    yourAnswer: q.a[this.answers[i]],
                    correctAnswer: q.a[q.c],
                    explanation: q.e,
                    category: q.cat
                });
            }
        });

        const score = Math.round((this.correct / this.questions.length) * 100);
        const timeSpent = Math.floor((Date.now() - this.startTime) / 1000 / 60);
        const passed = score >= 50; // IHK Prüfung: 50% zum Bestehen

        // Ergebnis speichern
        State.addExamResult(score, this.questions.length, timeSpent);

        // Detaillierte Ergebnisse anzeigen
        this.showDetailedResults(score, timeSpent, passed, wrongQuestions);
    },

    showDetailedResults(score, timeSpent, passed, wrongQuestions) {
        document.getElementById('quizActive').style.display = 'none';

        const resultsContainer = document.getElementById('quizResults');
        resultsContainer.style.display = 'block';

        const unanswered = this.answers.filter(a => a === null).length;

        resultsContainer.innerHTML = `
            <div class="results-container">
                <div class="results-score" style="color: ${passed ? 'var(--success)' : 'var(--danger)'}">${score}%</div>
                <div class="results-text" style="font-size: 1.3rem; font-weight: 600; margin-bottom: 10px;">
                    ${passed ? '✓ BESTANDEN!' : '✗ NICHT BESTANDEN'}
                </div>
                <div style="color: var(--text-secondary); margin-bottom: 30px;">
                    ${passed ? 'Glückwunsch! Sie haben die Prüfung bestanden!' : 'Leider nicht bestanden. Weiter üben!'}
                </div>

                <div class="results-details">
                    <div class="result-item correct">
                        <div class="value">${this.correct}</div>
                        <div class="label">Richtig</div>
                    </div>
                    <div class="result-item wrong">
                        <div class="value">${this.questions.length - this.correct - unanswered}</div>
                        <div class="label">Falsch</div>
                    </div>
                    <div class="result-item" style="text-align: center;">
                        <div class="value" style="color: var(--text-secondary)">${unanswered}</div>
                        <div class="label">Nicht beantwortet</div>
                    </div>
                </div>

                <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 12px; margin: 20px 0; font-size: 0.9rem;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; color: var(--text-secondary);">
                        <div>⏱️ Benötigte Zeit: <strong>${timeSpent} Min.</strong></div>
                        <div>📊 Gesamt: <strong>${this.questions.length} Fragen</strong></div>
                        <div>✓ Bestehensgrenze: <strong>50%</strong></div>
                        <div>📈 Ihr Ergebnis: <strong>${score}%</strong></div>
                    </div>
                </div>

                ${wrongQuestions.length > 0 ? `
                    <details style="background: rgba(255,255,255,0.03); padding: 16px; border-radius: 12px; margin: 20px 0;">
                        <summary style="cursor: pointer; font-weight: 600; color: var(--primary); margin-bottom: 12px;">
                            📋 Falsch beantwortete Fragen anzeigen (${wrongQuestions.length})
                        </summary>
                        <div style="max-height: 400px; overflow-y: auto; padding-right: 8px;">
                            ${wrongQuestions.map((wq, i) => `
                                <div style="background: rgba(244, 67, 54, 0.1); padding: 12px; border-radius: 8px; margin: 12px 0; border-left: 3px solid var(--danger);">
                                    <div style="font-weight: 600; color: var(--danger); font-size: 0.85rem; margin-bottom: 8px;">${wq.category}</div>
                                    <div style="font-weight: 600; margin-bottom: 8px; font-size: 0.95rem;">${wq.question}</div>
                                    <div style="color: #e57373; margin-bottom: 4px; font-size: 0.9rem;">✗ Ihre Antwort: ${wq.yourAnswer}</div>
                                    <div style="color: #81c784; margin-bottom: 8px; font-size: 0.9rem;">✓ Richtig: ${wq.correctAnswer}</div>
                                    <div style="color: var(--text-secondary); font-size: 0.85rem; font-style: italic; padding: 8px; background: rgba(0,0,0,0.2); border-radius: 4px;">
                                        💡 ${wq.explanation}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </details>
                ` : ''}

                <div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;">
                    <button class="btn btn-primary" onclick="Quiz.reset()">Neue Prüfung</button>
                    <button class="btn btn-secondary" onclick="ExamSimulator.showStatistics()">Statistiken</button>
                </div>
            </div>
        `;
    },

    showStatistics() {
        const results = State.examResults;
        if (results.length === 0) {
            alert('Noch keine Prüfungsergebnisse vorhanden.');
            return;
        }

        const avgScore = Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length);
        const passedCount = results.filter(r => r.passed).length;
        const bestScore = Math.max(...results.map(r => r.score));

        const resultsContainer = document.getElementById('quizResults');
        resultsContainer.innerHTML = `
            <div class="results-container">
                <h2 style="color: var(--primary); margin-bottom: 20px;">📊 Ihre Prüfungsstatistiken</h2>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px; margin: 20px 0;">
                    <div style="background: rgba(79, 195, 247, 0.1); padding: 16px; border-radius: 12px; text-align: center;">
                        <div style="font-size: 2rem; font-weight: bold; color: var(--primary);">${results.length}</div>
                        <div style="color: var(--text-secondary); font-size: 0.9rem;">Prüfungen</div>
                    </div>
                    <div style="background: rgba(76, 175, 80, 0.1); padding: 16px; border-radius: 12px; text-align: center;">
                        <div style="font-size: 2rem; font-weight: bold; color: var(--success);">${passedCount}</div>
                        <div style="color: var(--text-secondary); font-size: 0.9rem;">Bestanden</div>
                    </div>
                    <div style="background: rgba(255, 193, 7, 0.1); padding: 16px; border-radius: 12px; text-align: center;">
                        <div style="font-size: 2rem; font-weight: bold; color: var(--warning);">${avgScore}%</div>
                        <div style="color: var(--text-secondary); font-size: 0.9rem;">Durchschnitt</div>
                    </div>
                    <div style="background: rgba(156, 39, 176, 0.1); padding: 16px; border-radius: 12px; text-align: center;">
                        <div style="font-size: 2rem; font-weight: bold; color: #ce93d8;">${bestScore}%</div>
                        <div style="color: var(--text-secondary); font-size: 0.9rem;">Bestes Ergebnis</div>
                    </div>
                </div>

                <div style="background: rgba(255,255,255,0.03); padding: 16px; border-radius: 12px; margin: 20px 0;">
                    <h3 style="color: var(--primary); margin-bottom: 12px; font-size: 1.1rem;">Letzte Prüfungen</h3>
                    <div style="max-height: 300px; overflow-y: auto;">
                        ${results.slice().reverse().map((r, i) => `
                            <div style="padding: 12px; margin: 8px 0; background: rgba(255,255,255,0.05); border-radius: 8px; border-left: 3px solid ${r.passed ? 'var(--success)' : 'var(--danger)'};">
                                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                                    <div>
                                        <span style="font-weight: 600; color: ${r.passed ? 'var(--success)' : 'var(--danger)'};">${r.score}%</span>
                                        <span style="color: var(--text-secondary); font-size: 0.85rem; margin-left: 8px;">
                                            ${new Date(r.date).toLocaleDateString('de-DE')}
                                        </span>
                                    </div>
                                    <div style="display: flex; gap: 12px; font-size: 0.85rem; color: var(--text-secondary);">
                                        <span>${r.totalQuestions} Fragen</span>
                                        <span>${r.timeSpent} Min.</span>
                                        <span>${r.passed ? '✓' : '✗'}</span>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <button class="btn btn-primary" onclick="Quiz.reset()">Zurück</button>
            </div>
        `;
    }
};

// ========================================
// FLASHCARDS MODULE
// ========================================
const Flashcards = {
    cards: [],
    currentIndex: 0,

    start(mode) {
        let cards = [...AppData.cards];

        if (mode === 'new') {
            cards = cards.filter(c => !State.learned.includes(c.f));
        } else if (mode === 'review') {
            cards = cards.filter(c => State.learned.includes(c.f));
        }

        if (cards.length === 0) {
            alert(mode === 'new' ? 'Alle Karten bereits gelernt! 🎉' : 'Noch keine Karten gelernt.');
            return;
        }

        // Shuffle
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }

        this.cards = cards;
        this.currentIndex = 0;

        document.getElementById('fcSetup').style.display = 'none';
        document.getElementById('fcActive').style.display = 'block';
        document.getElementById('fcTotal').textContent = cards.length;

        this.show();
    },

    show() {
        if (this.currentIndex >= this.cards.length) {
            this.end();
            return;
        }

        const card = this.cards[this.currentIndex];
        document.getElementById('fcNum').textContent = this.currentIndex + 1;
        document.getElementById('fcCategory').textContent = card.cat;
        document.getElementById('fcFront').textContent = card.f;
        document.getElementById('fcBack').textContent = card.b;
        document.getElementById('flashcard').classList.remove('flipped');
    },

    flip() {
        document.getElementById('flashcard').classList.toggle('flipped');
    },

    mark(known) {
        const card = this.cards[this.currentIndex];

        if (known && !State.learned.includes(card.f)) {
            State.learned.push(card.f);
            State.save();
        } else if (!known && State.learned.includes(card.f)) {
            // Wenn "Nochmal" geklickt, aus gelernten entfernen
            State.learned = State.learned.filter(f => f !== card.f);
            State.save();
        }

        this.next();
    },

    skip() {
        this.next();
    },

    next() {
        this.currentIndex++;

        if (this.currentIndex >= this.cards.length) {
            alert('Alle Karten durchgearbeitet! 🎉');
            this.end();
        } else {
            this.show();
        }

        Stats.update();
    },

    end() {
        document.getElementById('fcSetup').style.display = 'block';
        document.getElementById('fcActive').style.display = 'none';
        Stats.update();
    }
};

// ========================================
// STATISTICS
// ========================================
const Stats = {
    update() {
        const total = AppData.cards.length;
        const learned = State.learned.length;
        const progress = Math.round((learned / total) * 100);

        // Update all progress displays
        const progressEls = document.querySelectorAll('#totalProgress');
        progressEls.forEach(el => el.textContent = progress + '%');

        const cardsEls = document.querySelectorAll('#cardsLearned');
        cardsEls.forEach(el => el.textContent = learned);

        const scoreEls = document.querySelectorAll('#quizScore');
        scoreEls.forEach(el => el.textContent = State.bestScore > 0 ? State.bestScore + '%' : '–');

        // Exams taken
        const examsTakenEl = document.getElementById('examsTaken');
        if (examsTakenEl) {
            examsTakenEl.textContent = State.examResults.length;
        }

        // Update flashcard counts
        const fcAllCount = document.getElementById('fcAllCount');
        const fcNewCount = document.getElementById('fcNewCount');
        const fcReviewCount = document.getElementById('fcReviewCount');

        if (fcAllCount) fcAllCount.textContent = total + ' Karten';
        if (fcNewCount) fcNewCount.textContent = (total - learned) + ' Karten';
        if (fcReviewCount) fcReviewCount.textContent = learned + ' Karten';
    }
};

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', async () => {
    console.log('🎓 §34i Lern-App v' + APP_VERSION + ' gestartet');
    console.log('📊 Prüfungsrelevante Fragen:', AppData.quiz.length);
    console.log('🃏 Karteikarten:', AppData.cards.length);

    // Firebase Sync initialisieren
    await FirebaseSync.init();

    Navigation.init();
    Learning.init();
    Stats.update();

    // Service Worker registrieren (falls manifest.json vorhanden)
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(() => {
            // Ignore errors if no SW
        });
    }
});

// Export für Debugging
window.AppDebug = {
    state: State,
    quiz: Quiz,
    exam: ExamSimulator,
    cards: Flashcards,
    data: AppData
};
