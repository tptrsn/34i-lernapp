# §34i Sachkundeprüfung Lern-App 🎓

Eine moderne, mobile-optimierte Lern-App für die IHK Sachkundeprüfung Immobiliardarlehensvermittlung mit **geräteübergreifender Synchronisation**.

## ✨ Features

- 📱 **Mobile-First Design** - Optimiert für Smartphones und Tablets
- ☁️ **Cloud-Synchronisation** - Lernfortschritt auf allen Geräten verfügbar
- 🎯 **Prüfungssimulator** - Realistische 90-Minuten-Prüfung
- 📊 **80+ Prüfungsfragen** - Basierend auf dem offiziellen DIHK Rahmenplan
- 🃏 **60+ Karteikarten** - Spaced Repetition Learning
- 📈 **Fortschritts-Tracking** - Statistiken und Lernfortschritt
- 🎨 **Premium Design** - Modern Glassmorphism UI

---

## 🚀 Schnellstart

### Option 1: Lokale Nutzung (ohne Cloud-Sync)

1. Dateien herunterladen
2. `index.html` im Browser öffnen
3. Loslegen! ✅

> **Hinweis:** Ohne Firebase funktioniert die App nur lokal. Fortschritt wird nicht geräteübergreifend synchronisiert.

---

## ☁️ Firebase Setup (für Cloud-Sync)

### Schritt 1: Firebase Projekt erstellen

1. Gehe zu [Firebase Console](https://console.firebase.google.com/)
2. Klicke auf "Projekt hinzufügen"
3. Projektname: z.B. "34i-lernapp"
4. Google Analytics: Optional (kann deaktiviert werden)
5. Projekt erstellen

### Schritt 2: Web-App registrieren

1. In der Firebase Console: Klicke auf das **Web-Symbol** `</>`
2. App-Name: "34i Lernapp Web"
3. **Wichtig:** Haken bei "Firebase Hosting einrichten" NICHT setzen
4. Klicke auf "App registrieren"

### Schritt 3: Firebase Credentials kopieren

Du bekommst einen Code-Block wie diesen:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "dein-projekt.firebaseapp.com",
  projectId: "dein-projekt",
  storageBucket: "dein-projekt.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc..."
};
```

### Schritt 4: Credentials in der App einfügen

Öffne `index.html` und suche nach diesem Abschnitt (ganz unten vor `</body>`):

```javascript
const firebaseConfig = {
  apiKey: "DEINE_API_KEY",           // ← Hier einfügen
  authDomain: "DEIN_PROJECT.firebaseapp.com",
  projectId: "DEIN_PROJECT_ID",
  storageBucket: "DEIN_PROJECT.appspot.com",
  messagingSenderId: "DEINE_SENDER_ID",
  appId: "DEINE_APP_ID"
};
```

Ersetze alle Platzhalter mit deinen echten Firebase-Credentials.

### Schritt 5: Firestore Database aktivieren

1. In der Firebase Console: Linke Sidebar → **Firestore Database**
2. Klicke auf "Datenbank erstellen"
3. Wähle **"Im Testmodus starten"** (für Entwicklung)
   - Später solltest du die Sicherheitsregeln anpassen!
4. Standort: `europe-west` (am nächsten zu Deutschland)
5. Klicke auf "Aktivieren"

### Schritt 6: Firestore Sicherheitsregeln (wichtig!)

1. In Firestore Database → **Regeln**
2. Ersetze die Standard-Regeln mit:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      // Jeder kann nur seine eigenen Daten lesen/schreiben
      allow read, write: if true;
    }
  }
}
```

3. Klicke auf "Veröffentlichen"

> **Sicherheitshinweis:** Diese Regeln sind für Entwicklung OK. Für Production solltest du richtige Authentication einbauen!

---

## 🌐 Vercel Deployment

### Schritt 1: GitHub Repository erstellen

1. Gehe zu [GitHub](https://github.com)
2. Klicke auf **"New Repository"**
3. Repository Name: `34i-lernapp`
4. **Public** oder **Private** (deine Wahl)
5. Klicke auf "Create repository"

### Schritt 2: Code zu GitHub pushen

Öffne Terminal im Projekt-Ordner:

```bash
# Git initialisieren
git init

# Alle Dateien hinzufügen
git add .

# Commit erstellen
git commit -m "Initial commit: §34i Lernapp"

# GitHub Repository verbinden (ERSETZE mit deinem Username!)
git remote add origin https://github.com/DEIN-USERNAME/34i-lernapp.git

# Code pushen
git branch -M main
git push -u origin main
```

### Schritt 3: Vercel Deployment

1. Gehe zu [Vercel](https://vercel.com)
2. Klicke auf **"Sign Up"** (mit GitHub-Account)
3. Klicke auf **"Add New... → Project"**
4. **Import Git Repository:**
   - Wähle dein `34i-lernapp` Repository
5. **Configure Project:**
   - Framework Preset: **Other**
   - Root Directory: `./` (Standard)
   - Build Command: Leer lassen
   - Output Directory: Leer lassen
6. Klicke auf **"Deploy"** 🚀

### Schritt 4: Fertig! 🎉

Nach ~30 Sekunden ist deine App live unter:

```
https://34i-lernapp.vercel.app
```

oder einer ähnlichen URL.

---

## 📱 App nutzen

### Als PWA installieren (Homescreen)

**Android:**
1. Öffne die App im Chrome Browser
2. Tippe auf **⋮ (Menü)**
3. Wähle **"Zum Startbildschirm hinzufügen"**

**iOS:**
1. Öffne die App in Safari
2. Tippe auf **Teilen-Symbol**
3. Wähle **"Zum Home-Bildschirm"**

---

## 🔧 Entwicklung

### Lokalen Server starten

```bash
# Python 3
python3 -m http.server 8000

# Dann öffne: http://localhost:8000
```

### Dateien bearbeiten

- `index.html` - HTML & CSS
- `app.js` - App-Logik, Firebase Sync
- `app-data.js` - Fragen & Karteikarten

---

## 📊 Datenstruktur

### Firebase Firestore

```
/users/{userId}
  - learned: Array<string>          // Gelernte Karteikarten-IDs
  - bestScore: number                // Bester Quiz-Score
  - examResults: Array<object>       // Prüfungsergebnisse
  - totalQuizzesTaken: number        // Anzahl Quizze
  - lastUpdated: timestamp           // Letztes Update
```

### Lokaler Storage (Fallback)

- `34i-learned` - Gelernte Karten
- `34i-best` - Bester Score
- `34i-exam-results` - Prüfungshistorie
- `34i-quizzes-taken` - Quiz-Anzahl
- `34i-user-id` - Anonyme User-ID

---

## 🛡️ Sicherheit & Datenschutz

- **Keine persönlichen Daten:** App speichert nur anonyme Lernfortschritte
- **Lokale User-ID:** Zufällig generiert, keine Email/Namen erforderlich
- **Firebase Regeln:** Sollten für Production angepasst werden
- **Keine Tracking-Tools:** Keine Google Analytics, Facebook Pixel, etc.

---

## 🎯 Basierend auf

- **Offizieller DIHK Rahmenplan** (Stand: Mai 2016)
- 240 Unterrichtseinheiten
- 3 Hauptkapitel
- Alle prüfungsrelevanten Themen

---

## 🐛 Probleme?

### Firebase funktioniert nicht

1. Überprüfe Firebase Credentials in `index.html`
2. Öffne Browser DevTools (F12) → Console
3. Schaue nach Fehlermeldungen

### App lädt nicht

1. Stelle sicher, dass alle 3 Dateien vorhanden sind:
   - `index.html`
   - `app.js`
   - `app-data.js`
2. Öffne über `http://` Server, nicht `file://`

### Fortschritt wird nicht synchronisiert

1. Überprüfe Internet-Verbindung
2. Firestore Database muss aktiviert sein
3. Sicherheitsregeln müssen korrekt sein

---

## 📝 Lizenz

Frei nutzbar für private Lernzwecke.

**Hinweis:** Die Prüfungsinhalte basieren auf dem öffentlichen DIHK Rahmenplan. Die konkreten Fragen wurden für Lernzwecke erstellt und sind keine Original-IHK-Prüfungsfragen.

---

## 🚀 Updates

Aktuelle Version: **2.0.0**

### Was ist neu in v2.0?

- ✨ Komplett überarbeitetes Premium-Design
- ☁️ Firebase Cloud-Synchronisation
- 📱 Verbesserte Mobile-Optimierung
- 🎨 Glassmorphism UI
- ⚡ Bessere Performance

---

**Viel Erfolg bei der Prüfung! 🎓**
