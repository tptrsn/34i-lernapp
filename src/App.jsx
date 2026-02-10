import React, { useState, useEffect } from 'react';
import './App.css';
import AppData from './data/appData.js';
import KreditsachbearbeiterData from './data/kreditsachbearbeiterData.js';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeView, setActiveView] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [openChapters, setOpenChapters] = useState({});

  // Flashcards state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [flashcardMode, setFlashcardMode] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNavigation = (view) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleChapter = (chapterId) => {
    setOpenChapters(prev => ({
      ...prev,
      [chapterId]: !prev[chapterId]
    }));
  };

  const startFlashcards = (mode) => {
    setFlashcardMode(mode);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const nextCard = () => {
    if (currentCardIndex < AppData.cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    } else {
      setFlashcardMode(null);
    }
  };

  const previousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  };

  const filteredChapters = AppData.chapters.filter(chapter =>
    searchQuery === '' ||
    chapter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chapter.sections.some(section =>
      section.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🏡</span>
            <span className="logo-text">FinanzAkademie</span>
          </div>
          <button className="profile-btn" onClick={() => handleNavigation('profil')}>
            <span className="profile-avatar">TM</span>
          </button>
        </div>
      </header>

      {/* Main Content - Home View */}
      {activeView === 'home' && (
        <>
          <section className={`hero ${isVisible ? 'visible' : ''}`}>
            <div className="hero-decoration"></div>
            <h1 className="hero-title">
              Dein Weg zum<br />
              <span className="hero-title-accent">Finanzierungs-Profi</span>
            </h1>
            <p className="hero-subtitle">
              Lerne für die §34i Sachkundeprüfung und die Position als Kreditsachbearbeiter bei HYPOVISION.
            </p>

            <div className="progress-card">
              <div className="progress-header">
                <div>
                  <div className="progress-label">Lernmaterial</div>
                  <div className="progress-stats">Vollständiger §34i Rahmenplan</div>
                </div>
                <div className="progress-ring">
                  <svg width="60" height="60">
                    <circle cx="30" cy="30" r="26" fill="none" stroke="var(--surface-light)" strokeWidth="6"/>
                  </svg>
                  <div className="progress-ring-text">✓</div>
                </div>
              </div>
              <div className="progress-details">
                <div className="progress-detail-item">
                  <span className="progress-detail-value">{AppData.chapters.length}</span>
                  <span className="progress-detail-label">Kapitel</span>
                </div>
                <div className="progress-divider"></div>
                <div className="progress-detail-item">
                  <span className="progress-detail-value">{AppData.cards.length}</span>
                  <span className="progress-detail-label">Karteikarten</span>
                </div>
                <div className="progress-divider"></div>
                <div className="progress-detail-item">
                  <span className="progress-detail-value">240</span>
                  <span className="progress-detail-label">UE</span>
                </div>
              </div>
            </div>
          </section>

          <section className="section today-section">
            <div className="section-header">
              <h2 className="section-title">Schnellstart</h2>
              <span className="section-badge">§34i GewO</span>
            </div>

            <div className="today-card">
              <div className="today-card-header">
                <span className="today-module-tag">DIHK Rahmenplan</span>
                <span className="today-type">240 UE</span>
              </div>
              <h3 className="today-title">Kundenberatung - Erstes Kapitel</h3>
              <div className="today-meta">
                <span className="today-duration">⏱ 60 Unterrichtseinheiten</span>
              </div>
              <button className="today-btn" onClick={() => handleNavigation('lernen')}>
                <span>Jetzt lernen</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="today-card-decoration"></div>
            </div>
          </section>

          <section className="section modules-section">
            <div className="section-header">
              <h2 className="section-title">Lernbereiche</h2>
            </div>

            <div className="modules-grid">
              <div
                className="module-card"
                onClick={() => handleNavigation('lernen')}
                style={{ cursor: 'pointer' }}
              >
                <div className="module-card-header">
                  <div className="module-icon" style={{ background: 'var(--primary)' }}>
                    📖
                  </div>
                  <div className="module-lessons">{AppData.chapters.length} Kapitel</div>
                </div>
                <h3 className="module-title">§34i Lerninhalte</h3>
                <div className="module-topics">
                  <span className="module-topic">Kundenberatung</span>
                  <span className="module-topic">Finanzierung</span>
                  <span className="module-topic">Rechtliche Grundlagen</span>
                </div>
                <div className="module-progress-container">
                  <div className="module-progress-bar">
                    <div className="module-progress-fill" style={{ width: '0%', background: 'var(--primary)' }}></div>
                  </div>
                  <span className="module-progress-text">0%</span>
                </div>
                <button className="module-btn">Starten</button>
              </div>

              <div
                className="module-card"
                onClick={() => handleNavigation('karten')}
                style={{ cursor: 'pointer' }}
              >
                <div className="module-card-header">
                  <div className="module-icon" style={{ background: 'var(--accent-warm)' }}>
                    🃏
                  </div>
                  <div className="module-lessons">{AppData.cards.length} Karten</div>
                </div>
                <h3 className="module-title">Karteikarten</h3>
                <div className="module-topics">
                  <span className="module-topic">Prüfungswissen</span>
                  <span className="module-topic">Definitionen</span>
                </div>
                <div className="module-progress-container">
                  <div className="module-progress-bar">
                    <div className="module-progress-fill" style={{ width: '0%', background: 'var(--accent-warm)' }}></div>
                  </div>
                  <span className="module-progress-text">0%</span>
                </div>
                <button className="module-btn">Starten</button>
              </div>

              <div
                className="module-card"
                onClick={() => handleNavigation('kreditsachbearbeiter')}
                style={{ cursor: 'pointer' }}
              >
                <div className="module-card-header">
                  <div className="module-icon" style={{ background: 'var(--accent-gold)' }}>
                    💼
                  </div>
                  <div className="module-lessons">Praxiswissen</div>
                </div>
                <h3 className="module-title">Kreditsachbearbeiter</h3>
                <div className="module-topics">
                  <span className="module-topic">HYPOVISION</span>
                  <span className="module-topic">Backoffice</span>
                </div>
                <div className="module-progress-container">
                  <div className="module-progress-bar">
                    <div className="module-progress-fill" style={{ width: '0%', background: 'var(--accent-gold)' }}></div>
                  </div>
                  <span className="module-progress-text">Neu</span>
                </div>
                <button className="module-btn">Starten</button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Learning Content View */}
      {activeView === 'lernen' && (
        <section className="section" style={{ paddingTop: '100px', minHeight: '80vh' }}>
          <div className="section-header">
            <h2 className="section-title">§34i Lerninhalte</h2>
          </div>

          <input
            type="text"
            className="search-input"
            placeholder="🔍 Suche nach Themen..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ marginBottom: '24px' }}
          />

          <div className="chapters-container">
            {filteredChapters.map((chapter) => (
              <div
                key={chapter.id}
                className={`chapter ${openChapters[chapter.id] ? 'open' : ''}`}
              >
                <div className="chapter-header" onClick={() => toggleChapter(chapter.id)}>
                  <div className="chapter-title">{chapter.title}</div>
                  <div className="chapter-meta">
                    <span className="chapter-hours">{chapter.hours} UE</span>
                    <span className="chapter-toggle">{openChapters[chapter.id] ? '▲' : '▼'}</span>
                  </div>
                </div>
                {openChapters[chapter.id] && (
                  <div className="chapter-content">
                    {chapter.sections.map((section) => (
                      <div key={section.id} className="section">
                        <div className="section-title">
                          <span className="section-number">{section.id}</span>
                          {section.title}
                        </div>
                        <div
                          dangerouslySetInnerHTML={{ __html: section.content }}
                          style={{ lineHeight: '1.8' }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Flashcards View */}
      {activeView === 'karten' && (
        <section className="section" style={{ paddingTop: '100px', minHeight: '80vh' }}>
          <div className="section-header">
            <h2 className="section-title">Karteikarten - {AppData.cards.length} Karten</h2>
          </div>

          {!flashcardMode ? (
            <div className="mode-grid">
              <div className="mode-card" onClick={() => startFlashcards('all')}>
                <div className="mode-icon">📚</div>
                <h3>Alle Karten</h3>
                <p>{AppData.cards.length} Karteikarten</p>
              </div>
              <div className="mode-card" onClick={() => startFlashcards('random')}>
                <div className="mode-icon">🎲</div>
                <h3>Zufällig üben</h3>
                <p>Gemischte Reihenfolge</p>
              </div>
            </div>
          ) : (
            <div>
              <button
                className="btn btn-secondary"
                onClick={() => setFlashcardMode(null)}
                style={{ marginBottom: '20px' }}
              >
                ← Zurück zur Übersicht
              </button>

              <div className="quiz-header" style={{ background: 'var(--surface)', padding: '16px', borderRadius: '12px', marginBottom: '24px' }}>
                <span className="quiz-progress">
                  Karte {currentCardIndex + 1} / {AppData.cards.length}
                </span>
                <span className="quiz-category">{AppData.cards[currentCardIndex].cat}</span>
              </div>

              <div className="flashcard-container">
                <div
                  className={`flashcard ${isFlipped ? 'flipped' : ''}`}
                  onClick={flipCard}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="flashcard-face flashcard-front">
                    <div className="flashcard-label">Frage</div>
                    <div className="flashcard-content">{AppData.cards[currentCardIndex].f}</div>
                    <div className="flashcard-hint">👆 Zum Umdrehen tippen</div>
                  </div>
                  <div className="flashcard-face flashcard-back">
                    <div className="flashcard-label">Antwort</div>
                    <div className="flashcard-content" style={{ whiteSpace: 'pre-line' }}>
                      {AppData.cards[currentCardIndex].b}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flashcard-controls">
                <button
                  className="fc-btn"
                  onClick={previousCard}
                  disabled={currentCardIndex === 0}
                  style={{ opacity: currentCardIndex === 0 ? 0.5 : 1, cursor: currentCardIndex === 0 ? 'not-allowed' : 'pointer' }}
                >
                  ← Zurück
                </button>
                <button className="fc-btn" onClick={flipCard}>
                  🔄 Umdrehen
                </button>
                <button
                  className="fc-btn know"
                  onClick={nextCard}
                >
                  {currentCardIndex === AppData.cards.length - 1 ? 'Beenden' : 'Weiter →'}
                </button>
              </div>
            </div>
          )}
        </section>
      )}

      {/* Kreditsachbearbeiter View */}
      {activeView === 'kreditsachbearbeiter' && (
        <section className="section" style={{ paddingTop: '100px', minHeight: '80vh' }}>
          <div className="section-header">
            <h2 className="section-title">Kreditsachbearbeiter (m/w/d)</h2>
            <span className="section-badge">HYPOVISION</span>
          </div>

          <div className="today-card" style={{ marginBottom: '24px' }}>
            <div className="today-card-header">
              <span className="today-module-tag">Vollzeit • Kassel, Hessen</span>
              <span className="today-type">Backoffice</span>
            </div>
            <h3 className="today-title">Professionelle Kreditsachbearbeitung</h3>
            <div className="today-meta">
              <span className="today-duration">⏱ {KreditsachbearbeiterData.chapters.reduce((sum, ch) => sum + ch.hours, 0)} Unterrichtsstunden</span>
            </div>
            <div className="today-card-decoration"></div>
          </div>

          <div style={{ padding: '0 20px', marginBottom: '24px' }}>
            <div className="content-block">
              <h4>Hauptaufgaben als Kreditsachbearbeiter:</h4>
              <ul>
                <li><strong>Konditionsvergleich:</strong> Bankangebote analysieren und bewerten</li>
                <li><strong>Angebotsanalyse:</strong> Beste Finanzierungslösung für den Kunden finden</li>
                <li><strong>Antragsbearbeitung:</strong> Vollständige Unterlagen zusammenstellen und prüfen</li>
                <li><strong>Bankenkommunikation:</strong> Professionelle Zusammenarbeit mit Finanzierungspartnern</li>
                <li><strong>Dokumentation:</strong> Lückenlose Bearbeitung bis zur Auszahlung</li>
              </ul>
            </div>

            <div className="progress-card" style={{ marginTop: '20px' }}>
              <div className="progress-header">
                <div>
                  <div className="progress-label">Lernmaterial</div>
                  <div className="progress-stats">Vollständiger Praxisleitfaden</div>
                </div>
                <div className="progress-ring">
                  <svg width="60" height="60">
                    <circle cx="30" cy="30" r="26" fill="none" stroke="var(--surface-light)" strokeWidth="6"/>
                  </svg>
                  <div className="progress-ring-text">{KreditsachbearbeiterData.chapters.length}</div>
                </div>
              </div>
              <div className="progress-details">
                <div className="progress-detail-item">
                  <span className="progress-detail-value">{KreditsachbearbeiterData.chapters.length}</span>
                  <span className="progress-detail-label">Module</span>
                </div>
                <div className="progress-divider"></div>
                <div className="progress-detail-item">
                  <span className="progress-detail-value">{KreditsachbearbeiterData.chapters.reduce((sum, ch) => sum + ch.sections.length, 0)}</span>
                  <span className="progress-detail-label">Lektionen</span>
                </div>
                <div className="progress-divider"></div>
                <div className="progress-detail-item">
                  <span className="progress-detail-value">{KreditsachbearbeiterData.chapters.reduce((sum, ch) => sum + ch.hours, 0)}</span>
                  <span className="progress-detail-label">UE</span>
                </div>
              </div>
            </div>
          </div>

          <div className="chapters-container">
            {KreditsachbearbeiterData.chapters.map((chapter) => (
              <div
                key={chapter.id}
                className={`chapter ${openChapters[chapter.id] ? 'open' : ''}`}
              >
                <div className="chapter-header" onClick={() => toggleChapter(chapter.id)}>
                  <div className="chapter-title">
                    <span style={{ marginRight: '10px' }}>{chapter.icon}</span>
                    {chapter.title}
                  </div>
                  <div className="chapter-meta">
                    <span className="chapter-hours">{chapter.hours} UE</span>
                    <span className="chapter-toggle">{openChapters[chapter.id] ? '▲' : '▼'}</span>
                  </div>
                </div>
                {openChapters[chapter.id] && (
                  <div className="chapter-content">
                    {chapter.sections.map((section) => (
                      <div key={section.id} className="section">
                        <div className="section-title">
                          <span className="section-number">{section.id}</span>
                          {section.title}
                        </div>
                        <div
                          dangerouslySetInnerHTML={{ __html: section.content }}
                          style={{ lineHeight: '1.8' }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Prüfung View */}
      {activeView === 'pruefung' && (
        <section className="section" style={{ paddingTop: '100px', minHeight: '80vh', textAlign: 'center' }}>
          <div className="section-header">
            <h2 className="section-title">Prüfungsvorbereitung</h2>
          </div>
          <div style={{ padding: '40px 20px' }}>
            <div style={{ fontSize: '64px', marginBottom: '24px' }}>🎓</div>
            <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--text-primary)' }}>
              IHK-Sachkundeprüfung §34i
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '400px', margin: '0 auto 32px' }}>
              Bereite dich optimal auf die Sachkundeprüfung vor. Mit {AppData.chapters.length} Kapiteln und {AppData.cards.length} Karteikarten nach DIHK Rahmenplan.
            </p>
          </div>
        </section>
      )}

      {/* Profil View */}
      {activeView === 'profil' && (
        <section className="section" style={{ paddingTop: '100px', minHeight: '80vh' }}>
          <div className="section-header">
            <h2 className="section-title">Mein Profil</h2>
          </div>
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <div style={{ fontSize: '80px', marginBottom: '16px' }}>🎓</div>
            <h3 style={{ fontSize: '24px', marginBottom: '8px', color: 'var(--text-primary)' }}>
              Lernender
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
              §34i Sachkundeprüfung + Kreditsachbearbeiter
            </p>
            <div className="progress-card" style={{ maxWidth: '500px', margin: '0 auto' }}>
              <div className="progress-details">
                <div className="progress-detail-item">
                  <span className="progress-detail-value">{AppData.chapters.length}</span>
                  <span className="progress-detail-label">Kapitel</span>
                </div>
                <div className="progress-divider"></div>
                <div className="progress-detail-item">
                  <span className="progress-detail-value">{AppData.cards.length}</span>
                  <span className="progress-detail-label">Karten</span>
                </div>
                <div className="progress-divider"></div>
                <div className="progress-detail-item">
                  <span className="progress-detail-value">240</span>
                  <span className="progress-detail-label">UE</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button
          className={`nav-item ${activeView === 'home' ? 'active' : ''}`}
          onClick={() => handleNavigation('home')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Start</span>
        </button>
        <button
          className={`nav-item ${activeView === 'lernen' ? 'active' : ''}`}
          onClick={() => handleNavigation('lernen')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Lernen</span>
        </button>
        <button
          className={`nav-item ${activeView === 'karten' ? 'active' : ''}`}
          onClick={() => handleNavigation('karten')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <span>Karten</span>
        </button>
        <button
          className={`nav-item ${activeView === 'profil' ? 'active' : ''}`}
          onClick={() => handleNavigation('profil')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <span>Profil</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
