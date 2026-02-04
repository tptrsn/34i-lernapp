# 🚀 Deployment Guide - §34i Lernapp

## Schnellstart: 3 einfache Schritte

### 1️⃣ Firebase Setup (5 Minuten)

1. **Gehe zu:** https://console.firebase.google.com/
2. **Klicke:** "Projekt hinzufügen"
3. **Name:** `34i-lernapp` (oder beliebig)
4. **Analytics:** Nein (deaktivieren)
5. **Warte** bis Projekt erstellt ist

#### Firestore aktivieren:

1. **Linke Sidebar** → "Firestore Database"
2. **"Datenbank erstellen"**
3. **Testmodus** wählen
4. **Standort:** `europe-west3`
5. **Aktivieren**

#### Sicherheitsregeln setzen:

Gehe zu **Regeln** und ersetze mit:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if true;
    }
  }
}
```

Klicke auf **"Veröffentlichen"**

#### Web-App registrieren:

1. **Firebase Console** → Klicke auf **`</>`** (Web-Symbol)
2. **App-Name:** "Lernapp Web"
3. **NICHT** "Firebase Hosting einrichten" ankreuzen
4. **"App registrieren"**
5. **Kopiere die Config:**

```javascript
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

6. **Öffne:** `index.html`
7. **Suche** nach `const firebaseConfig = {`
8. **Ersetze** die Platzhalter-Werte mit deinen echten Werten

✅ **Firebase ist fertig!**

---

### 2️⃣ GitHub Repository erstellen (2 Minuten)

#### Terminal öffnen im Projekt-Ordner:

```bash
# Git initialisieren
git init

# Alle Dateien hinzufügen
git add .

# Commit erstellen
git commit -m "Initial commit"
```

#### Auf GitHub:

1. Gehe zu: https://github.com/new
2. **Repository Name:** `34i-lernapp`
3. **Visibility:** Public oder Private
4. **NICHT** "Initialize with README" ankreuzen
5. **Create repository**

#### Repository verbinden:

**WICHTIG:** Ersetze `DEIN-USERNAME` mit deinem GitHub-Benutzernamen!

```bash
git remote add origin https://github.com/DEIN-USERNAME/34i-lernapp.git
git branch -M main
git push -u origin main
```

✅ **Code ist auf GitHub!**

---

### 3️⃣ Vercel Deployment (1 Minute)

1. **Gehe zu:** https://vercel.com/signup
2. **Sign up** mit GitHub-Account
3. **Klicke:** "Add New... → Project"
4. **Import** dein `34i-lernapp` Repository
5. **Settings:**
   - Framework Preset: **Other**
   - Alle anderen Felder: **Leer lassen**
6. **Klicke:** "Deploy" 🚀

⏱️ **Warte ~30 Sekunden...**

✅ **FERTIG!** Deine App ist live!

**URL:** z.B. `https://34i-lernapp.vercel.app`

---

## 📱 App auf Handy installieren

### Android:

1. Öffne die Vercel-URL in **Chrome**
2. Tippe **⋮** (Menü)
3. **"Zum Startbildschirm hinzufügen"**

### iOS:

1. Öffne die Vercel-URL in **Safari**
2. Tippe **Teilen-Symbol**
3. **"Zum Home-Bildschirm"**

---

## 🔧 Updates deployen

Wenn du Änderungen machst:

```bash
git add .
git commit -m "Update: Beschreibung der Änderung"
git push
```

Vercel deployt **automatisch** jede Änderung!

---

## ⚠️ Häufige Probleme

### "Firebase is not defined"

**Lösung:** Firebase Config in `index.html` noch nicht ersetzt.

### "Permission denied" in Firestore

**Lösung:** Sicherheitsregeln in Firebase Console überprüfen.

### App lädt nicht auf Handy

**Lösung:**
1. Prüfe ob https:// URL (nicht http://)
2. Cache leeren
3. Seite neu laden

### Fortschritt wird nicht synchronisiert

**Lösung:**
1. Browser Console öffnen (F12)
2. Schaue nach Fehlermeldungen
3. Prüfe Internet-Verbindung
4. Firestore muss aktiviert sein

---

## 🎯 Fertig!

Deine App ist jetzt:
- ☁️ **Live** im Internet
- 📱 **Installierbar** als PWA
- 🔄 **Synchronisiert** auf allen Geräten
- 🚀 **Automatisch deployed** bei Updates

**Viel Erfolg beim Lernen! 🎓**
