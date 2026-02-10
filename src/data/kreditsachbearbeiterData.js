// Kreditsachbearbeiter Lerninhalte - HYPOVISION Backoffice
export const KreditsachbearbeiterData = {
  chapters: [
    {
      id: "ks-1",
      title: "Konditionsvergleich & Angebotsanalyse",
      hours: 20,
      icon: "📊",
      sections: [
        {
          id: "1.1",
          title: "Zinssätze richtig verstehen",
          content: `
            <div class="def-box">
              <div class="term">Sollzins vs. Effektivzins</div>
              <div class="meaning">
                <strong>Sollzins (Nominalzins):</strong> Der reine Kreditzins ohne Nebenkosten<br/><br/>
                <strong>Effektivzins:</strong> Beinhaltet alle Kosten (Bearbeitungsgebühren, Disagio, etc.) -
                entscheidend für den Vergleich!
              </div>
            </div>

            <h4>Wichtige Zinsarten im Überblick:</h4>
            <ul>
              <li><strong>Sollzins (gebunden):</strong> Fest vereinbarter Zins für die Zinsbindungsfrist</li>
              <li><strong>Sollzins (variabel):</strong> Kann sich während der Laufzeit ändern</li>
              <li><strong>Effektivzins:</strong> Vergleichsgröße nach PAngV (Preisangabenverordnung)</li>
              <li><strong>Bereitstellungszins:</strong> Für nicht abgerufene Darlehensbeträge (ca. 0,25% p.M.)</li>
              <li><strong>Forward-Aufschlag:</strong> Zuschlag bei Forward-Darlehen (Vorlaufzeit)</li>
            </ul>

            <div class="example-box">
              <div class="label">Praxisbeispiel Zinsvergleich</div>
              <p>
Darlehenssumme: 300.000 €
Sollzins Bank A: 3,50% p.a. + 1% Disagio
Sollzins Bank B: 3,65% p.a. ohne Disagio

Effektivzins Bank A: 3,74% p.a.
Effektivzins Bank B: 3,65% p.a.

➜ Bank B ist trotz höherem Sollzins günstiger!
              </p>
            </div>

            <h4>Faktoren die den Zinssatz beeinflussen:</h4>
            <ul>
              <li>Bonität des Kunden (Schufa-Score, Einkommensnachweis)</li>
              <li>Beleihungsauslauf (LTV = Loan-to-Value)</li>
              <li>Zinsbindungsfrist (5, 10, 15, 20, 25 Jahre)</li>
              <li>Objektart und Nutzung (Eigennutzung vs. Vermietung)</li>
              <li>Eigenkapitalquote</li>
              <li>Tilgungshöhe</li>
            </ul>
          `
        },
        {
          id: "1.2",
          title: "Systematischer Konditionenvergleich",
          content: `
            <h4>5-Schritte-Methode für professionellen Konditionsvergleich:</h4>

            <div class="important-box">
              <div class="label">Schritt 1: Eckdaten erfassen</div>
              <p>
                • Darlehenssumme<br/>
                • Objektwert / Kaufpreis<br/>
                • Eigenkapital<br/>
                • Gewünschte Zinsbindung<br/>
                • Tilgungssatz<br/>
                • Sondertilgungswunsch<br/>
                • Auszahlungstermin
              </p>
            </div>

            <div class="important-box">
              <div class="label">Schritt 2: Bankanfragen strukturieren</div>
              <p>
                • Mindestens 3-5 Banken anfragen<br/>
                • Einheitliche Anfrageparameter nutzen<br/>
                • Deadline für Angebote setzen (48-72h)<br/>
                • Dokumentation aller Anfragen
              </p>
            </div>

            <div class="important-box">
              <div class="label">Schritt 3: Angebote vergleichen</div>
              <p>
                <strong>Zu vergleichende Kriterien:</strong><br/>
                ✓ Effektivzins (Hauptkriterium)<br/>
                ✓ Sollzins<br/>
                ✓ Anfängliche Tilgung<br/>
                ✓ Sondertilgungsmöglichkeiten<br/>
                ✓ Tilgungssatzwechsel<br/>
                ✓ Bereitstellungszinsfreie Zeit<br/>
                ✓ Bearbeitungsgebühren<br/>
                ✓ Wertermittlungskosten
              </p>
            </div>

            <div class="important-box">
              <div class="label">Schritt 4: Gesamtkostenbetrachtung</div>
              <p>
                Nicht nur den Zins betrachten!<br/><br/>
                • Gesamtaufwand über Zinsbindung berechnen<br/>
                • Restschuld nach Zinsbindung vergleichen<br/>
                • Flexibilität bewerten (Sondertilgung, Tilgungswechsel)<br/>
                • Bereitstellungszinsen einkalkulieren
              </p>
            </div>

            <div class="important-box">
              <div class="label">Schritt 5: Dokumentation & Empfehlung</div>
              <p>
                • Konditionsübersicht erstellen<br/>
                • Top 2-3 Angebote herausarbeiten<br/>
                • Empfehlung mit Begründung<br/>
                • Kundenverständliche Aufbereitung
              </p>
            </div>

            <div class="example-box">
              <div class="label">Excel-Vorlage Konditionsvergleich</div>
              <p>
Wichtige Spalten in der Vergleichstabelle:

1. Bank / Institut
2. Sollzins p.a.
3. Effektivzins p.a.
4. Zinsbindung (Jahre)
5. Tilgungssatz (%)
6. Sondertilgung (% p.a.)
7. Tilgungssatzwechsel (Ja/Nein)
8. Bereitstellungszinsfreie Zeit (Monate)
9. Bereitstellungszins (% p.M.)
10. Bearbeitungsgebühr (€)
11. Wertermittlungskosten (€)
12. Monatsrate (€)
13. Restschuld nach Zinsbindung (€)
14. Gesamtaufwand Zinsbindung (€)
              </p>
            </div>
          `
        },
        {
          id: "1.3",
          title: "Scoring und Risikoklassen",
          content: `
            <h4>Bonitätseinstufung verstehen:</h4>

            <div class="def-box">
              <div class="term">Schufa-Score</div>
              <div class="meaning">
                Numerischer Wert (0-100%), der die Ausfallwahrscheinlichkeit angibt.<br/>
                Je höher der Score, desto besser die Bonität.
              </div>
            </div>

            <h4>Score-Bereiche und ihre Bedeutung:</h4>
            <ul>
              <li><strong>95-100%:</strong> Sehr geringe Ausfallwahrscheinlichkeit (Top-Bonität)</li>
              <li><strong>90-95%:</strong> Geringe Ausfallwahrscheinlichkeit (Gute Bonität)</li>
              <li><strong>80-90%:</strong> Zufriedenstellend bis erhöhte Ausfallwahrscheinlichkeit</li>
              <li><strong>50-80%:</strong> Deutlich erhöhte Ausfallwahrscheinlichkeit</li>
              <li><strong>Unter 50%:</strong> Kritische Ausfallwahrscheinlichkeit</li>
            </ul>

            <div class="important-box">
              <div class="label">Einflussfaktoren auf den Score</div>
              <p>
                <strong>Positiv:</strong><br/>
                ✓ Regelmäßiges Einkommen<br/>
                ✓ Unbefristetes Arbeitsverhältnis<br/>
                ✓ Lange Wohndauer<br/>
                ✓ Keine negativen Einträge<br/>
                ✓ Bestehende, gut bediente Kredite<br/><br/>

                <strong>Negativ:</strong><br/>
                ✗ Negative Schufa-Einträge<br/>
                ✗ Häufige Kreditanfragen<br/>
                ✗ Zahlungsausfälle<br/>
                ✗ Insolvenzen<br/>
                ✗ Viele Kreditkarten/Konten
              </p>
            </div>

            <h4>Bankinternes Scoring:</h4>
            <p>Zusätzlich zur Schufa nutzen Banken eigene Bewertungssysteme:</p>
            <ul>
              <li>Haushaltsüberschussrechnung</li>
              <li>Beleihungsauslauf (LTV = Loan-to-Value)</li>
              <li>Eigenkapitalquote</li>
              <li>Schulden-zu-Einkommen-Verhältnis (Debt-to-Income DTI)</li>
              <li>Objektqualität und Lage</li>
            </ul>

            <div class="example-box">
              <div class="label">Praxisbeispiel Risikoklassifizierung</div>
              <p>
Kunde A:
• Schufa-Score: 97%
• Unbefristete Anstellung, 5 Jahre Betriebszugehörigkeit
• Nettoeinkommen: 4.500 €/Monat
• Eigenkapital: 25%
• LTV: 75%

➜ Risikoklasse A - Beste Konditionen

Kunde B:
• Schufa-Score: 88%
• Befristete Anstellung (noch 2 Jahre)
• Nettoeinkommen: 3.200 €/Monat
• Eigenkapital: 10%
• LTV: 90%

➜ Risikoklasse C - Konditionen mit Aufschlag
              </p>
            </div>

            <div class="def-box">
              <div class="term">Beleihungsauslauf (LTV - Loan-to-Value)</div>
              <div class="meaning">
                LTV = (Darlehenssumme ÷ Beleihungswert) × 100%<br/><br/>

                <strong>Beleihungsgrenzen:</strong><br/>
                • bis 60% LTV: Beste Konditionen (1A-Bereich)<br/>
                • bis 80% LTV: Gute Konditionen (1B-Bereich)<br/>
                • bis 90% LTV: Konditionen mit Aufschlag<br/>
                • über 90% LTV: Deutlicher Aufschlag oder Ablehnung
              </div>
            </div>
          `
        },
        {
          id: "1.4",
          title: "Angebotsanalyse und -bewertung",
          content: `
            <h4>Qualitative Angebotsbewertung:</h4>

            <div class="important-box">
              <div class="label">Checkliste Angebotsqualität</div>
              <p>
                <strong>1. Zinssicherheit:</strong><br/>
                ✓ Zinsbindung passend zum Kundenwunsch?<br/>
                ✓ Ist der Zins marktgerecht?<br/>
                ✓ Zinsbindung vs. aktuelles Zinsniveau<br/><br/>

                <strong>2. Flexibilität:</strong><br/>
                ✓ Sondertilgungsmöglichkeiten (mind. 5% p.a.)<br/>
                ✓ Tilgungssatzwechsel möglich?<br/>
                ✓ Anpassung der Monatsrate<br/><br/>

                <strong>3. Auszahlungskonditionen:</strong><br/>
                ✓ Bereitstellungszinsfreie Zeit (mind. 3 Monate)<br/>
                ✓ Teilauszahlungen möglich?<br/>
                ✓ Auszahlungskurs (100% oder Disagio?)<br/><br/>

                <strong>4. Zusatzkosten:</strong><br/>
                ✓ Bearbeitungsgebühren?<br/>
                ✓ Wertermittlungskosten?<br/>
                ✓ Kontoeröffnungsgebühren?<br/><br/>

                <strong>5. Bankensicherheit:</strong><br/>
                ✓ Bonität der Bank (Rating)<br/>
                ✓ Einlagensicherung<br/>
                ✓ Stabilität des Instituts
              </p>
            </div>

            <h4>Quantitative Bewertungskriterien:</h4>

            <div class="example-box">
              <div class="label">Kostenvergleichsrechnung</div>
              <p>
Beispiel: 300.000 € Darlehen, 10 Jahre Zinsbindung, 2% Tilgung

<strong>Angebot Bank A:</strong>
Sollzins: 3,50% | Effektivzins: 3,57%
Monatsrate: 1.375 €
Restschuld nach 10 Jahren: 238.450 €
Gesamtaufwand (Zinsen): 126.550 €

<strong>Angebot Bank B:</strong>
Sollzins: 3,45% | Effektivzins: 3,58%
Monatsrate: 1.362,50 €
Restschuld nach 10 Jahren: 237.200 €
Gesamtaufwand (Zinsen): 126.500 €
+ Bearbeitungsgebühr: 1.500 €

<strong>➜ Fazit:</strong> Trotz niedrigerem Sollzins ist Bank A
aufgrund fehlender Bearbeitungsgebühr wirtschaftlich
minimal besser (Ersparnis ca. 1.450 € über 10 Jahre).
              </p>
            </div>

            <h4>Soft-Facts in der Bewertung:</h4>
            <ul>
              <li><strong>Bearbeitungsgeschwindigkeit:</strong> Wie schnell reagiert die Bank?</li>
              <li><strong>Kommunikation:</strong> Ist die Bank gut erreichbar?</li>
              <li><strong>Digitalisierung:</strong> Online-Unterlagenverwaltung möglich?</li>
              <li><strong>Erfahrung:</strong> Wie oft haben wir mit der Bank gearbeitet?</li>
              <li><strong>Problemlösung:</strong> Wie flexibel ist die Bank bei Sonderfällen?</li>
            </ul>

            <div class="def-box">
              <div class="term">Empfehlung aussprechen</div>
              <div class="meaning">
                Nach der Analyse immer eine klare Empfehlung mit Begründung:<br/><br/>

                "Ich empfehle Angebot Bank XY, weil:<br/>
                • Niedrigster Effektivzins im Vergleich<br/>
                • 10% Sondertilgung inklusive<br/>
                • 6 Monate bereitstellungszinsfrei<br/>
                • Keine Zusatzkosten<br/>
                • Schnelle Bearbeitungszeit (Erfahrungswert)<br/>
                • Gesamtersparnis gegenüber zweitbestem Angebot: ca. 3.400 €"
              </div>
            </div>
          `
        }
      ]
    },
    {
      id: "ks-2",
      title: "Finanzierungsstrukturen & Darlehensarten",
      hours: 25,
      icon: "🏗️",
      sections: [
        {
          id: "2.1",
          title: "Annuitätendarlehen - Der Klassiker",
          content: `
            <div class="def-box">
              <div class="term">Annuitätendarlehen</div>
              <div class="meaning">
                Die häufigste Darlehensform in Deutschland.<br/>
                Gleichbleibende monatliche Rate (Annuität) über die gesamte Zinsbindung.<br/>
                Die Rate setzt sich zusammen aus Zins und Tilgung - mit zunehmender Laufzeit
                sinkt der Zinsanteil, der Tilgungsanteil steigt.
              </div>
            </div>

            <h4>Funktionsweise im Detail:</h4>
            <ul>
              <li><strong>Konstante Monatsrate:</strong> Zins + Tilgung = gleiche Rate jeden Monat</li>
              <li><strong>Tilgungsverrechnung:</strong> Sofortige Tilgung senkt Restschuld</li>
              <li><strong>Tilgungsprogression:</strong> Tilgungsanteil steigt automatisch</li>
              <li><strong>Planungssicherheit:</strong> Kunde weiß genau, was er zahlt</li>
            </ul>

            <div class="example-box">
              <div class="label">Annuitätenrechnung Beispiel</div>
              <p>
Darlehenssumme: 250.000 €
Sollzins: 3,5% p.a.
Anfängliche Tilgung: 2% p.a.
➜ Gesamtrate: 5,5% p.a.

<strong>Monatsrate berechnen:</strong>
250.000 € × 5,5% ÷ 12 = 1.145,83 € / Monat

<strong>Entwicklung Jahr 1:</strong>
Monat 1:
- Zinsen: 729,17 € (250.000 × 3,5% ÷ 12)
- Tilgung: 416,67 €
- Restschuld: 249.583,33 €

Monat 2:
- Zinsen: 727,96 € (249.583,33 × 3,5% ÷ 12)
- Tilgung: 417,87 €
- Restschuld: 249.165,46 €

➜ Tilgungsanteil steigt jeden Monat automatisch!
              </p>
            </div>

            <h4>Vor- und Nachteile:</h4>
            <div class="important-box">
              <div class="label">Vorteile</div>
              <p>
                ✓ Planungssicherheit durch konstante Rate<br/>
                ✓ Automatische Tilgungssteigerung<br/>
                ✓ Übersichtliche Kalkulation<br/>
                ✓ Standardprodukt mit besten Konditionen
              </p>
            </div>

            <div class="important-box">
              <div class="label">Nachteile</div>
              <p>
                ✗ Bei niedrigem Tilgungssatz lange Laufzeit<br/>
                ✗ Hohe Restschuld bei kurzer Zinsbindung<br/>
                ✗ Zinsrisiko nach Zinsbindungsende
              </p>
            </div>

            <h4>Empfehlung für den Kunden:</h4>
            <p>Das Annuitätendarlehen eignet sich für:</p>
            <ul>
              <li>Kunden mit regelmäßigem Einkommen</li>
              <li>Wunsch nach Planungssicherheit</li>
              <li>Standardfall ohne Besonderheiten</li>
              <li>Eigennutzung der Immobilie</li>
            </ul>

            <div class="def-box">
              <div class="term">Wichtig: Tilgungshöhe beraten</div>
              <div class="meaning">
                <strong>Faustregel:</strong> Mind. 2% anfängliche Tilgung empfehlen<br/>
                <strong>Besser:</strong> 3% bei aktuell niedrigen Zinsen<br/>
                <strong>Optimal:</strong> So hoch wie finanziell tragbar<br/><br/>

                Bei 1% Tilgung dauert es ca. 50 Jahre bis zur Entschuldung!<br/>
                Bei 3% Tilgung nur noch ca. 25 Jahre.
              </div>
            </div>
          `
        },
        {
          id: "2.2",
          title: "Tilgungsdarlehen & Volltilger",
          content: `
            <h4>Tilgungsdarlehen (Abzahlungsdarlehen):</h4>

            <div class="def-box">
              <div class="term">Tilgungsdarlehen</div>
              <div class="meaning">
                Konstante Tilgungsrate + sinkende Zinsen = sinkende Gesamtrate<br/>
                Der Tilgungsanteil bleibt gleich, nur die Zinsen sinken mit der Restschuld.
              </div>
            </div>

            <div class="example-box">
              <div class="label">Tilgungsdarlehen Beispiel</div>
              <p>
Darlehenssumme: 200.000 €
Laufzeit: 20 Jahre (240 Monate)
Sollzins: 3,5% p.a.
Monatliche Tilgung: 833,33 € (200.000 ÷ 240)

<strong>Monat 1:</strong>
- Tilgung: 833,33 €
- Zinsen: 583,33 € (200.000 × 3,5% ÷ 12)
- Gesamtrate: 1.416,66 €

<strong>Monat 120 (nach 10 Jahren):</strong>
- Tilgung: 833,33 € (gleichbleibend!)
- Zinsen: 291,67 € (100.000 × 3,5% ÷ 12)
- Gesamtrate: 1.125,00 €

➜ Gesamtrate sinkt kontinuierlich!
              </p>
            </div>

            <h4>Vor- und Nachteile:</h4>
            <ul>
              <li><strong>Vorteil:</strong> Schnellere Entschuldung, geringere Gesamtzinsbelastung</li>
              <li><strong>Vorteil:</strong> Kalkulatorisch einfach</li>
              <li><strong>Nachteil:</strong> Hohe Anfangsbelastung</li>
              <li><strong>Nachteil:</strong> Weniger flexibel als Annuitätendarlehen</li>
            </ul>

            <div style="height: 30px;"></div>

            <h4>Volltilgerdarlehen:</h4>

            <div class="def-box">
              <div class="term">Volltilgerdarlehen</div>
              <div class="meaning">
                Spezielle Form des Annuitätendarlehens:<br/>
                Die Tilgung ist so berechnet, dass das Darlehen am Ende
                der Zinsbindung <strong>vollständig zurückgezahlt</strong> ist.<br/><br/>

                <strong>Vorteil:</strong> Oft Zinsrabatt von 0,1% - 0,3%<br/>
                <strong>Nachteil:</strong> Höhere monatliche Belastung
              </div>
            </div>

            <div class="example-box">
              <div class="label">Volltilger-Rechnung</div>
              <p>
Darlehenssumme: 300.000 €
Zinsbindung: 15 Jahre
Sollzins: 3,2% (statt 3,5% - Rabatt: 0,3%)

<strong>Berechnung der nötigen Tilgung:</strong>
Bei 3,2% Zins über 15 Jahre:
➜ Erforderliche Tilgung: ca. 5,05% p.a.
➜ Monatsrate: 2.062,50 €

<strong>Vergleich Standard-Annuität (2% Tilgung):</strong>
Sollzins: 3,5% (kein Rabatt)
Tilgung: 2%
Monatsrate: 1.375 €
Restschuld nach 15 Jahren: ca. 215.000 €

<strong>Fazit Volltilger:</strong>
+ Keine Restschuld
+ Zinsrabatt gespart
+ Planungssicherheit
- Höhere monatliche Belastung (687,50 € mehr)
              </p>
            </div>

            <h4>Wann Volltilger empfehlen?</h4>
            <ul>
              <li>Kunde hat ausreichend hohes Einkommen</li>
              <li>Wunsch nach vollständiger Schuldenfreiheit</li>
              <li>Absicherung gegen Zinsrisiko</li>
              <li>Immobilie wird bis zur Rente abbezahlt sein</li>
              <li>Keine flexibilität bei der Rate nötig</li>
            </ul>

            <div class="important-box">
              <div class="label">Achtung: Belastung prüfen!</div>
              <p>
                Volltilger nur empfehlen, wenn Haushaltsüberschuss ausreichend ist!<br/><br/>
                <strong>Faustregel:</strong><br/>
                Nach Abzug aller Kosten inkl. Kreditrate sollten mind. 500-700 €
                pro Person im Haushalt als Puffer verbleiben.
              </p>
            </div>
          `
        },
        {
          id: "2.3",
          title: "Bauspardarlehen & KfW-Förderung",
          content: `
            <h4>Bauspardarlehen:</h4>

            <div class="def-box">
              <div class="term">Bausparvertrag + Bauspardarlehen</div>
              <div class="meaning">
                Zweiphasiges Finanzierungsmodell:<br/>
                1. <strong>Ansparphase:</strong> Bausparsumme ansparen (mind. 40-50%)<br/>
                2. <strong>Darlehensphase:</strong> Günstiges Bauspardarlehen über Restbetrag
              </div>
            </div>

            <h4>Funktionsweise im Überblick:</h4>
            <ul>
              <li><strong>Bausparsumme:</strong> Z.B. 100.000 € vereinbart</li>
              <li><strong>Ansparphase:</strong> Kunde spart z.B. 40.000 € an (40% Regelsparguthaben)</li>
              <li><strong>Zuteilung:</strong> Wenn Mindestsparguthaben + Bewertungszahl erreicht</li>
              <li><strong>Bauspardarlehen:</strong> 60.000 € zu festem, günstigem Zins</li>
            </ul>

            <div class="example-box">
              <div class="label">Bauspar-Modell in der Praxis</div>
              <p>
<strong>Variante A: Sofortfinanzierung</strong>
Kaufpreis Immobilie: 350.000 €
Eigenkapital: 50.000 €
Finanzierungsbedarf: 300.000 €

Konstruktion:
1. Bankvorausdarlehen: 300.000 € (zinstilgungsfrei)
2. Bausparvertrag: 300.000 € Bausparsumme
3. Kunde bespart Bausparvertrag monatlich
4. Nach Zuteilung (z.B. 7 Jahre): Ablösung Vorausdarlehen

<strong>Variante B: Kombinationsfinanzierung</strong>
1. Bankdarlehen: 200.000 € (klassisches Annuitätendarlehen)
2. Bausparvertrag: 100.000 € für spätere Anschlussfinanzierung

➜ Sichert heute schon Zinssatz für Anschlussfinanzierung!
              </p>
            </div>

            <h4>Vor- und Nachteile Bausparen:</h4>
            <div class="important-box">
              <div class="label">Vorteile</div>
              <p>
                ✓ Zinssicherheit über gesamte Laufzeit<br/>
                ✓ Planungssicherheit<br/>
                ✓ Staatliche Förderung möglich (Wohnungsbauprämie)<br/>
                ✓ Flexibel einsetzbar
              </p>
            </div>

            <div class="important-box">
              <div class="label">Nachteile</div>
              <p>
                ✗ Lange Ansparphase<br/>
                ✗ Abschlussgebühr (ca. 1% der Bausparsumme)<br/>
                ✗ Bei Niedrigzinsen oft unattraktiv<br/>
                ✗ Komplex in der Beratung
              </p>
            </div>

            <div style="height: 30px;"></div>

            <h4>KfW-Förderung (Kreditanstalt für Wiederaufbau):</h4>

            <div class="def-box">
              <div class="term">KfW-Förderdarlehen</div>
              <div class="meaning">
                Staatlich geförderte Darlehen zu vergünstigten Konditionen<br/>
                für energieeffizientes Bauen, Sanieren und Wohnungskauf.
              </div>
            </div>

            <h4>Wichtige KfW-Programme für Immobilienfinanzierung:</h4>

            <div class="content-block">
              <h4>KfW 124 - Wohneigentumsprogramm</h4>
              <ul>
                <li>Für Kauf/Bau selbstgenutzter Immobilien</li>
                <li>Max. 100.000 € pro Wohneinheit</li>
                <li>Zinsvergünstigung gegenüber Markt</li>
                <li>1-5 tilgungsfreie Anlaufjahre möglich</li>
              </ul>
            </div>

            <div class="content-block">
              <h4>KfW 297/298 - Klimafreundlicher Neubau</h4>
              <ul>
                <li>Für energieeffiziente Neubauten</li>
                <li>Max. 150.000 € je Wohneinheit</li>
                <li>Anforderung: Effizienzhaus-Standard (z.B. EH 40)</li>
                <li>Attraktive Zinssätze + Tilgungszuschüsse möglich</li>
              </ul>
            </div>

            <div class="content-block">
              <h4>KfW 261 - Wohngebäude Kredit (Sanierung)</h4>
              <ul>
                <li>Für energetische Sanierung</li>
                <li>Max. 150.000 € je Wohneinheit</li>
                <li>Tilgungszuschüsse bis zu 45% möglich</li>
                <li>Je besser die Energieeffizienz, desto höher die Förderung</li>
              </ul>
            </div>

            <div class="example-box">
              <div class="label">KfW-Kombinationsfinanzierung</div>
              <p>
Kaufpreis Neubau (Effizienzhaus 40): 450.000 €
Eigenkapital: 90.000 €
Finanzierungsbedarf: 360.000 €

<strong>Optimale Struktur:</strong>
1. KfW 297: 150.000 € (max. Betrag, günstigster Zins)
2. Bankdarlehen: 210.000 € (Restfinanzierung)

<strong>Vorteil:</strong>
• KfW-Zins: z.B. 2,5% (unter Marktzins)
• Bank-Zins: z.B. 3,6% (normal)
• Mischzins effektiv: ca. 3,2%
• Zinsersparnis über 10 Jahre: ca. 8.000 €

➜ Immer prüfen, ob KfW-Förderung in Frage kommt!
              </p>
            </div>

            <div class="important-box">
              <div class="label">Wichtig für die Antragstellung</div>
              <p>
                <strong>KfW-Darlehen werden über Hausbank beantragt!</strong><br/><br/>

                • Antrag VOR Baubeginn/Kaufvertragsunterzeichnung<br/>
                • Energieberater für Effizienzhaus-Bestätigung<br/>
                • Längere Bearbeitungszeit einplanen (4-6 Wochen)<br/>
                • Kombination mit Bankdarlehen abstimmen<br/>
                • Grundschuldbestellung koordinieren
              </p>
            </div>
          `
        },
        {
          id: "2.4",
          title: "Forward-Darlehen & Anschlussfinanzierung",
          content: `
            <div class="def-box">
              <div class="term">Forward-Darlehen</div>
              <div class="meaning">
                Ein Forward-Darlehen sichert heute schon den Zinssatz für eine
                zukünftige Anschlussfinanzierung.<br/><br/>

                <strong>Vorlaufzeit:</strong> Bis zu 66 Monate im Voraus möglich<br/>
                <strong>Forward-Aufschlag:</strong> Ca. 0,01-0,03% pro Monat Vorlaufzeit
              </div>
            </div>

            <h4>Wann ist ein Forward-Darlehen sinnvoll?</h4>
            <ul>
              <li>Aktuelle Zinsen sind niedrig</li>
              <li>Zinsanstieg wird erwartet</li>
              <li>Zinsbindung läuft in 12-60 Monaten aus</li>
              <li>Kunde wünscht Planungssicherheit</li>
              <li>Restschuld ist noch signifikant</li>
            </ul>

            <div class="example-box">
              <div class="label">Forward-Kalkulation</div>
              <p>
<strong>Ausgangssituation:</strong>
Restschuld in 36 Monaten: 250.000 €
Aktueller Marktzins (10J Zinsbindung): 3,2%
Forward-Aufschlag: 0,02% × 36 Monate = 0,72%
Forward-Zinssatz: 3,92%

<strong>Vergleichsrechnung:</strong>

<strong>Szenario 1: Forward jetzt abschließen</strong>
Zinssatz: 3,92%
Zinsen über 10 Jahre: ca. 98.000 €

<strong>Szenario 2: In 3 Jahren zum Marktzins</strong>
Angenommener Marktzins dann: 4,5%
Zinsen über 10 Jahre: ca. 112.500 €

<strong>➜ Ersparnis durch Forward: ca. 14.500 €</strong>

<strong>Break-Even-Punkt:</strong>
Forward lohnt sich, wenn Marktzins in 3 Jahren
über 3,92% liegt.
              </p>
            </div>

            <h4>Forward-Strategie:</h4>
            <div class="important-box">
              <div class="label">Beratungsansatz Forward-Darlehen</div>
              <p>
                <strong>12-24 Monate vorher:</strong><br/>
                • Zinsentwicklung beobachten<br/>
                • Kundengespräch führen<br/>
                • Erste Angebote einholen<br/><br/>

                <strong>Forward-Aufschlag akzeptabel wenn:</strong><br/>
                • Erwarteter Zinsanstieg > Forward-Aufschlag<br/>
                • Kunde Sicherheit über Spekulation stellt<br/>
                • Planungssicherheit wichtiger als Optimierung<br/><br/>

                <strong>Faustregel:</strong><br/>
                Bis 30 Monate Vorlaufzeit: Forward meist lohnend<br/>
                Über 48 Monate Vorlaufzeit: Nur bei eindeutiger Zinswende
              </p>
            </div>

            <div style="height: 30px;"></div>

            <h4>Anschlussfinanzierung optimal gestalten:</h4>

            <h4>3 Optionen für die Anschlussfinanzierung:</h4>

            <div class="content-block">
              <h4>Option 1: Prolongation (Verlängerung bei derselben Bank)</h4>
              <ul>
                <li><strong>Vorteil:</strong> Einfach, keine neuen Unterlagen</li>
                <li><strong>Vorteil:</strong> Keine Grundschuldabtretung nötig</li>
                <li><strong>Nachteil:</strong> Oft nicht die besten Konditionen</li>
                <li><strong>Nachteil:</strong> Keine Vergleichsmöglichkeit</li>
              </ul>
            </div>

            <div class="content-block">
              <h4>Option 2: Umschuldung (Wechsel zu anderer Bank)</h4>
              <ul>
                <li><strong>Vorteil:</strong> Konditionenvergleich möglich</li>
                <li><strong>Vorteil:</strong> Oft bessere Zinsen</li>
                <li><strong>Nachteil:</strong> Grundschuldabtretung nötig (Kosten ca. 0,2-0,5%)</li>
                <li><strong>Nachteil:</strong> Neuer Antragsprozess</li>
              </ul>
            </div>

            <div class="content-block">
              <h4>Option 3: Forward-Darlehen (s.o.)</h4>
              <ul>
                <li><strong>Vorteil:</strong> Zinssicherheit frühzeitig</li>
                <li><strong>Vorteil:</strong> Bei steigenden Zinsen optimal</li>
                <li><strong>Nachteil:</strong> Forward-Aufschlag</li>
                <li><strong>Nachteil:</strong> Keine Flexibilität mehr</li>
              </ul>
            </div>

            <div class="example-box">
              <div class="label">Umschuldung: Wann lohnt es sich?</div>
              <p>
Restschuld: 200.000 €
Prolongationsangebot Hausbank: 3,8%
Umschuldungsangebot neue Bank: 3,4%
Zinsersparnis: 0,4% = 800 € pro Jahr

<strong>Kosten Umschuldung:</strong>
Grundschuldabtretung: ca. 600 € (Notar + Grundbuch)
Wertermittlung neue Bank: ca. 300 €
Gesamt: ca. 900 €

<strong>Break-Even:</strong> Nach 13 Monaten
<strong>Ersparnis über 10 Jahre:</strong> ca. 7.100 €

➜ Umschuldung lohnt sich bereits ab 0,2% Zinsdifferenz!
              </p>
            </div>

            <div class="important-box">
              <div class="label">Timing ist entscheidend</div>
              <p>
                <strong>Fristen beachten:</strong><br/>
                • Bank muss Prolongationsangebot 3 Monate vor Ende senden<br/>
                • Kunde hat bis 3 Monate vor Ende Sonderkündigungsrecht<br/>
                • Früh genug Vergleichsangebote einholen!<br/><br/>

                <strong>Empfehlung:</strong><br/>
                6-9 Monate vor Zinsbindungsende aktiv werden!
              </p>
            </div>
          `
        }
      ]
    },
    {
      id: "ks-3",
      title: "Dokumentation & Antragsbearbeitung",
      hours: 15,
      icon: "📄",
      sections: [
        {
          id: "3.1",
          title: "Vollständige Unterlagenprüfung",
          content: `
            <h4>Checkliste erforderliche Unterlagen:</h4>

            <div class="important-box">
              <div class="label">Persönliche Unterlagen (Darlehensnehmer)</div>
              <p>
                <strong>Identifikation:</strong><br/>
                ✓ Personalausweis oder Reisepass (Kopie)<br/>
                ✓ Meldebescheinigung (bei abweichender Anschrift)<br/><br/>

                <strong>Einkommensnachweise:</strong><br/>
                ✓ Letzte 3 Gehaltsabrechnungen<br/>
                ✓ Letzter Einkommensteuerbescheid<br/>
                ✓ Bei Selbstständigen: BWA, Bilanz, GuV der letzten 3 Jahre<br/>
                ✓ Bei Rentnern: Rentenbescheid<br/>
                ✓ Nebeneinkünfte (Mieteinnahmen, Kapitalerträge)<br/><br/>

                <strong>Vermögensnachweise:</strong><br/>
                ✓ Kontoauszüge (3 Monate) - für Eigenkapitalnachweis<br/>
                ✓ Depot-/Sparverträge<br/>
                ✓ Lebensversicherungen (bei Einsatz)<br/><br/>

                <strong>Verbindlichkeiten:</strong><br/>
                ✓ Bestehende Darlehensverträge<br/>
                ✓ Leasingverträge<br/>
                ✓ Kreditkarten-Limits<br/>
                ✓ Unterhaltsverpflichtungen
              </p>
            </div>

            <div class="important-box">
              <div class="label">Objektunterlagen</div>
              <p>
                <strong>Bei Kauf:</strong><br/>
                ✓ Kaufvertrag oder notarieller Kaufvertragsentwurf<br/>
                ✓ Flurkarte / Lageplan<br/>
                ✓ Grundbuchauszug (nicht älter als 3 Monate)<br/>
                ✓ Baubeschreibung / Objektbeschreibung<br/>
                ✓ Wohnflächenberechnung<br/>
                ✓ Energieausweis<br/>
                ✓ Fotos (Außen- und Innenansichten)<br/>
                ✓ Teilungserklärung (bei Eigentumswohnung)<br/>
                ✓ Hausgeldabrechnungen letzte 3 Jahre (bei ETW)<br/><br/>

                <strong>Bei Neubau zusätzlich:</strong><br/>
                ✓ Baubeschreibung<br/>
                ✓ Bauzeichnungen / Grundrisse<br/>
                ✓ Baugenehmigung<br/>
                ✓ Kostenaufstellung<br/>
                ✓ Bauträgervertrag oder Architektenvertrag<br/><br/>

                <strong>Bei Sanierung zusätzlich:</strong><br/>
                ✓ Kostenvoranschläge der Handwerker<br/>
                ✓ Sanierungskonzept<br/>
                ✓ Energieberater-Bescheinigung (für KfW)
              </p>
            </div>

            <div class="example-box">
              <div class="label">Schnellcheck Unterlagenvollständigkeit</div>
              <p>
<strong>Ampelsystem für Unterlagenprüfung:</strong>

🟢 <strong>Grün (Vollständig):</strong>
• Alle Unterlagen vorhanden
• Qualität ausreichend
• Aktuell (nicht älter als 3 Monate)
➜ Antrag kann eingereicht werden

🟡 <strong>Gelb (Fast vollständig):</strong>
• 1-2 Unterlagen fehlen
• Nachreichung möglich
• Bank akzeptiert bedingten Antrag
➜ Antrag mit Nachforderung einreichen

🔴 <strong>Rot (Unvollständig):</strong>
• Mehr als 2 wichtige Unterlagen fehlen
• Qualität unzureichend
• Unterlagen veraltet
➜ Kein Antrag möglich, Komplettierung erforderlich
              </p>
            </div>

            <h4>Digitale Unterlagenverwaltung:</h4>
            <ul>
              <li><strong>Dokumentenordner:</strong> Pro Kunde strukturierter Ordner anlegen</li>
              <li><strong>Dateinamen:</strong> Einheitliche Benennung (z.B. "Kunde_Name_Gehalt_2024-01")</li>
              <li><strong>Versionierung:</strong> Bei Updates alte Versionen kennzeichnen</li>
              <li><strong>Checkliste:</strong> Digital abhaken, was vorhanden ist</li>
              <li><strong>Datenschutz:</strong> Verschlüsselung beachten!</li>
            </ul>

            <div class="def-box">
              <div class="term">Unterlagen-Qualitätsprüfung</div>
              <div class="meaning">
                Nicht nur auf Vollständigkeit, auch auf Qualität achten:<br/><br/>

                ✓ Sind alle Seiten lesbar?<br/>
                ✓ Sind Dokumente aktuell?<br/>
                ✓ Sind offizielle Stempel vorhanden?<br/>
                ✓ Sind Kopien vollständig (keine abgeschnittenen Ränder)?<br/>
                ✓ Stimmen die Daten überein (Name, Adresse)?<br/>
                ✓ Sind Änderungen/Korrekturen sichtbar? (dann Original nachfordern)
              </div>
            </div>
          `
        },
        {
          id: "3.2",
          title: "Bonitätsprüfung durchführen",
          content: `
            <h4>Haushaltsüberschussrechnung:</h4>

            <div class="def-box">
              <div class="term">Haushaltsüberschussrechnung</div>
              <div class="meaning">
                Berechnung des verfügbaren Einkommens nach Abzug aller Lebenshaltungskosten
                und bestehenden Verpflichtungen.<br/><br/>

                <strong>Formel:</strong><br/>
                Nettoeinkommen - Lebenshaltungskosten - Bestehende Verbindlichkeiten =
                Verfügbares Einkommen für Kreditrate
              </div>
            </div>

            <div class="example-box">
              <div class="label">Haushaltsrechnung Beispiel</div>
              <p>
<strong>Familie, 2 Erwachsene, 2 Kinder</strong>

<strong>Einnahmen:</strong>
Nettoeinkommen Person 1: 3.200 €
Nettoeinkommen Person 2: 2.100 €
Kindergeld (2 Kinder): 500 €
<strong>Summe Einnahmen: 5.800 €</strong>

<strong>Ausgaben:</strong>
Lebenshaltungskosten (Pauschale):
- Erwachsene: 2 × 800 € = 1.600 €
- Kinder: 2 × 400 € = 800 €

Bestehende Verbindlichkeiten:
- PKW-Kredit: 350 €
- Hausrat-Versicherungen: 150 €

<strong>Summe Ausgaben: 2.900 €</strong>

<strong>Verfügbar für Immobilienfinanzierung:</strong>
5.800 € - 2.900 € = <strong>2.900 €/Monat</strong>

<strong>Empfohlene max. Kreditrate:</strong>
2.900 € - 500 € (Sicherheitspuffer) = <strong>2.400 € max.</strong>
              </p>
            </div>

            <h4>Pauschalen für Lebenshaltungskosten:</h4>
            <table>
              <tr>
                <th>Haushaltsgröße</th>
                <th>Pauschale Bank (ca.)</th>
              </tr>
              <tr>
                <td>1 Erwachsener</td>
                <td>800 - 1.000 €</td>
              </tr>
              <tr>
                <td>2 Erwachsene</td>
                <td>1.600 - 1.800 €</td>
              </tr>
              <tr>
                <td>+ je Kind</td>
                <td>+ 300 - 400 €</td>
              </tr>
              <tr>
                <td>Beispiel: 2 Erw. + 2 Kinder</td>
                <td>2.400 - 2.600 €</td>
              </tr>
            </table>

            <div class="important-box">
              <div class="label">Achtung: Bankspezifische Unterschiede</div>
              <p>
                Jede Bank hat eigene Pauschalen!<br/><br/>

                • Konservative Banken: Höhere Pauschalen = weniger Spielraum<br/>
                • Aggressive Banken: Niedrigere Pauschalen = mehr Spielraum<br/><br/>

                <strong>Tipp:</strong> Bei knapper Kalkulation Bank mit moderaten
                Pauschalen wählen!
              </p>
            </div>

            <div style="height: 30px;"></div>

            <h4>Debt-to-Income Ratio (DTI):</h4>

            <div class="def-box">
              <div class="term">DTI - Schulden-Einkommen-Verhältnis</div>
              <div class="meaning">
                DTI = (Monatliche Kreditrate ÷ Monatliches Bruttoeinkommen) × 100%<br/><br/>

                <strong>Faustregeln:</strong><br/>
                • Bis 30% DTI: Sehr gut<br/>
                • 30-40% DTI: Gut (Standard)<br/>
                • 40-50% DTI: Grenzwertig<br/>
                • Über 50% DTI: Kritisch, oft Ablehnung
              </div>
            </div>

            <div class="example-box">
              <div class="label">DTI-Berechnung</div>
              <p>
<strong>Beispiel 1:</strong>
Bruttoeinkommen: 5.000 €/Monat
Geplante Kreditrate: 1.500 €/Monat
DTI = 1.500 ÷ 5.000 = 30%
➜ <strong>Gut, im grünen Bereich</strong>

<strong>Beispiel 2:</strong>
Bruttoeinkommen: 4.000 €/Monat
Geplante Kreditrate: 1.800 €/Monat
DTI = 1.800 ÷ 4.000 = 45%
➜ <strong>Grenzwertig, ggf. problematisch</strong>
              </p>
            </div>

            <h4>Schufa-Abfrage und -Bewertung:</h4>
            <ul>
              <li><strong>Schufa-Auskunft einholen:</strong> Mit Einwilligung des Kunden</li>
              <li><strong>Score prüfen:</strong> Idealerweise über 95%</li>
              <li><strong>Einträge analysieren:</strong> Negative Einträge im Detail prüfen</li>
              <li><strong>Bei negativen Einträgen:</strong> Erklärung vom Kunden einholen</li>
              <li><strong>Kleinere Einträge:</strong> Oft Bagatellen, die geklärt werden können</li>
            </ul>

            <div class="important-box">
              <div class="label">Umgang mit negativen Schufa-Einträgen</div>
              <p>
                <strong>Offene Forderungen:</strong><br/>
                • Ursache klären mit Kunde<br/>
                • Wenn möglich vor Antragstellung begleichen<br/>
                • Löschung beantragen nach Begleichung<br/><br/>

                <strong>Alte Einträge:</strong><br/>
                • Nach 3 Jahren werden Einträge gelöscht<br/>
                • Ggf. abwarten bis zur Löschung<br/><br/>

                <strong>Bei kritischem Score:</strong><br/>
                • Höheres Eigenkapital kompensiert<br/>
                • Zweiter Darlehensnehmer mit guter Bonität<br/>
                • Bürgschaft prüfen
              </p>
            </div>
          `
        },
        {
          id: "3.3",
          title: "Objektbewertung verstehen",
          content: `
            <h4>Wertermittlungsverfahren der Banken:</h4>

            <div class="def-box">
              <div class="term">Beleihungswert</div>
              <div class="meaning">
                Der Beleihungswert ist der Wert, den die Bank für die Immobilie ansetzt.<br/>
                Er liegt meist <strong>10-20% unter dem Marktwert</strong>, da die Bank vorsichtig kalkuliert.
              </div>
            </div>

            <h4>Die 3 Wertermittlungsverfahren:</h4>

            <div class="content-block">
              <h4>1. Vergleichswertverfahren</h4>
              <p>Wird bei <strong>Eigentumswohnungen</strong> und <strong>Häusern in Standardlagen</strong> angewendet.</p>
              <ul>
                <li>Vergleich mit ähnlichen Objekten in der Umgebung</li>
                <li>Basis: Verkaufspreise vergleichbarer Immobilien</li>
                <li>Anpassung nach Lage, Zustand, Größe</li>
              </ul>

              <div class="example-box">
                <div class="label">Beispiel Vergleichswertverfahren</div>
                <p>
Objekt: 3-Zi-ETW, 85 qm, Baujahr 2010, guter Zustand
Vergleichsobjekt 1: 80 qm, gleiche Lage: 3.800 €/qm
Vergleichsobjekt 2: 90 qm, gleiche Lage: 3.700 €/qm
Vergleichsobjekt 3: 85 qm, ähnliche Lage: 3.900 €/qm

➜ Durchschnitt: ca. 3.800 €/qm
➜ Marktwert: 85 qm × 3.800 € = 323.000 €
➜ Beleihungswert Bank: ca. 290.000 € (90% vom Marktwert)
                </p>
              </div>
            </div>

            <div class="content-block">
              <h4>2. Ertragswertverfahren</h4>
              <p>Wird bei <strong>vermieteten Objekten</strong> angewendet.</p>
              <ul>
                <li>Kapitalisierung der zukünftigen Mieteinnahmen</li>
                <li>Berücksichtigung von Bewirtschaftungskosten</li>
                <li>Diskontierung auf den heutigen Wert</li>
              </ul>

              <div class="example-box">
                <div class="label">Beispiel Ertragswertverfahren</div>
                <p>
Mehrfamilienhaus, 4 Wohnungen
Jahresnettomiete (warm): 48.000 €
Bewirtschaftungskosten: 12.000 €/Jahr
Reinertrag: 36.000 €/Jahr

Kapitalisierungszinssatz: 5%
Ertragswert = 36.000 € ÷ 5% = 720.000 €

➜ Beleihungswert Bank: ca. 650.000 € (Sicherheitsabschlag)
                </p>
              </div>
            </div>

            <div class="content-block">
              <h4>3. Sachwertverfahren</h4>
              <p>Wird bei <strong>Spezialimmobilien</strong> oder wenn keine Vergleichsobjekte vorhanden sind.</p>
              <ul>
                <li>Bodenwert + Gebäudewert (Herstellungskosten - Abschreibung)</li>
                <li>Wird bei individuellen Immobilien angewendet</li>
                <li>Auch bei Neubauten relevant</li>
              </ul>

              <div class="example-box">
                <div class="label">Beispiel Sachwertverfahren</div>
                <p>
Einfamilienhaus, individuell geplant
Grundstück: 600 qm × 400 €/qm = 240.000 €
Gebäude: 180 qm Wohnfläche × 2.000 €/qm = 360.000 €
Gesamt (Neuwert): 600.000 €
Alterswertminderung (10 Jahre, 1%/Jahr): - 36.000 €

Sachwert: 564.000 €
➜ Beleihungswert Bank: ca. 500.000 € (Sicherheitsabschlag)
                </p>
              </div>
            </div>

            <h4>Einflussfaktoren auf den Beleihungswert:</h4>

            <div class="important-box">
              <div class="label">Faktoren die den Wert steigern</div>
              <p>
                ✓ Top-Lage (Stadt, gute Infrastruktur)<br/>
                ✓ Gepflegter Zustand<br/>
                ✓ Moderne Ausstattung<br/>
                ✓ Energieeffizienz (niedriger Energieausweis)<br/>
                ✓ Gute Verkehrsanbindung<br/>
                ✓ Keller, Garage, Balkon<br/>
                ✓ Neuwertig (bis 10 Jahre)
              </p>
            </div>

            <div class="important-box">
              <div class="label">Faktoren die den Wert senken</div>
              <p>
                ✗ Schlechte Lage (ländlich, keine Infrastruktur)<br/>
                ✗ Sanierungsbedarf<br/>
                ✗ Veraltete Ausstattung<br/>
                ✗ Hoher Energieverbrauch<br/>
                ✗ Lärmbelästigung (Straße, Flughafen)<br/>
                ✗ Altlasten (z.B. Asbest)<br/>
                ✗ Hohes Alter (über 50 Jahre ohne Sanierung)
              </p>
            </div>

            <h4>Was tun bei Wertabschlag der Bank?</h4>

            <div class="important-box">
              <div class="label">Strategien bei zu niedrigem Beleihungswert</div>
              <p>
                <strong>Option 1: Mehr Eigenkapital</strong><br/>
                Differenz zwischen Kaufpreis und Beleihungswert durch EK ausgleichen<br/><br/>

                <strong>Option 2: Zweitgutachten</strong><br/>
                Bei deutlicher Abweichung unabhängiges Gutachten in Auftrag geben<br/><br/>

                <strong>Option 3: Bankwechsel</strong><br/>
                Andere Bank wählen, die den Wert höher ansetzt<br/><br/>

                <strong>Option 4: Nachverhandeln</strong><br/>
                Mit Verkäufer über Kaufpreissenkung verhandeln
              </p>
            </div>

            <div class="example-box">
              <div class="label">Praxisfall Wertabschlag</div>
              <p>
<strong>Situation:</strong>
Kaufpreis: 400.000 €
Eigenkapital: 80.000 € (20%)
Gewünschter Kredit: 320.000 €

<strong>Problem:</strong>
Beleihungswert Bank: nur 350.000 €
Max. Beleihung (80% LTV): 280.000 €
Fehlbetrag: 40.000 €

<strong>Lösung:</strong>
1. Eigenkapital aufstocken auf 120.000 € ODER
2. Mit Verkäufer Kaufpreis auf 360.000 € senken ODER
3. Andere Bank mit höherem Beleihungswert finden

➜ In der Praxis: Kombination aus 1 und 2 anstreben
              </p>
            </div>
          `
        },
        {
          id: "3.4",
          title: "Darlehenszusage und Auszahlung",
          content: `
            <h4>Der Weg zur Darlehenszusage:</h4>

            <div class="important-box">
              <div class="label">Prozess Antrag bis Zusage</div>
              <p>
                <strong>1. Antragstellung (Tag 0):</strong><br/>
                • Vollständige Unterlagen einreichen<br/>
                • Antragsformular ausfüllen<br/>
                • Selbstauskunft des Kunden<br/><br/>

                <strong>2. Formale Prüfung (Tag 1-3):</strong><br/>
                • Vollständigkeitsprüfung<br/>
                • Plausibilitätsprüfung<br/>
                • Nachforderung fehlender Unterlagen<br/><br/>

                <strong>3. Bonitätsprüfung (Tag 3-7):</strong><br/>
                • Schufa-Abfrage<br/>
                • Einkommensprüfung<br/>
                • Haushaltsüberschussrechnung<br/><br/>

                <strong>4. Objektprüfung (Tag 5-14):</strong><br/>
                • Wertermittlung durch Gutachter<br/>
                • Objektbesichtigung (ggf.)<br/>
                • Beleihungswertfeststellung<br/><br/>

                <strong>5. Kreditentscheidung (Tag 14-21):</strong><br/>
                • Votum der Kreditabteilung<br/>
                • Festlegung der Konditionen<br/>
                • Erstellung Darlehensvertrag<br/><br/>

                <strong>6. Darlehenszusage (Tag 21):</strong><br/>
                • Zusage mit Bedingungen<br/>
                • Vertragsunterlagen
              </p>
            </div>

            <div class="example-box">
              <div class="label">Typische Bearbeitungszeiten</div>
              <p>
<strong>Standardfall:</strong>
• Vollständige Unterlagen
• Gute Bonität
• Standardimmobilie
➜ Zusage nach 2-3 Wochen

<strong>Komplexer Fall:</strong>
• Selbstständige
• Denkmalgeschützte Immobilie
• Mehrere Banken
➜ Zusage nach 4-6 Wochen

<strong>Eilfall:</strong>
• Express-Service (Aufpreis!)
• Vereinfachte Prüfung
• Top-Bonität
➜ Zusage nach 5-7 Tagen

<strong>Tipp:</strong> Immer genug Zeitpuffer einplanen!
Bei Kaufvertrag mind. 4 Wochen bis Notartermin.
              </p>
            </div>

            <h4>Darlehenszusage prüfen:</h4>

            <div class="important-box">
              <div class="label">Checkliste Zusage-Prüfung</div>
              <p>
                ✓ Darlehenssumme korrekt?<br/>
                ✓ Zinssatz wie angeboten?<br/>
                ✓ Zinsbindung richtig?<br/>
                ✓ Tilgungssatz vereinbart?<br/>
                ✓ Sondertilgung enthalten?<br/>
                ✓ Bereitstellungszinsen akzeptabel?<br/>
                ✓ Auszahlungsvoraussetzungen erfüllbar?<br/>
                ✓ Grundschuldbetrag korrekt?<br/>
                ✓ Versicherungen erforderlich? (Welche?)<br/>
                ✓ Befristete Zusage (bis wann gültig?)
              </p>
            </div>

            <h4>Bedingungen in der Zusage:</h4>
            <ul>
              <li><strong>Grundschuldbestellung:</strong> Muss im 1. Rang erfolgen</li>
              <li><strong>Risikolebensversicherung:</strong> Oft bei hoher Beleihung gefordert</li>
              <li><strong>Gebäudeversicherung:</strong> Immer erforderlich, Bank als Begünstigter</li>
              <li><strong>Nachweis Eigenkapital:</strong> Kontoauszüge zur Auszahlung</li>
              <li><strong>Kaufpreiszahlung:</strong> Erst nach Grundbucheintrag</li>
            </ul>

            <div style="height: 30px;"></div>

            <h4>Auszahlungsprozess:</h4>

            <div class="def-box">
              <div class="term">Auszahlung in Tranchen</div>
              <div class="meaning">
                Bei Neubauten erfolgt die Auszahlung nach Baufortschritt:<br/><br/>

                Nach MaBV (Makler- und Bauträgerverordnung):<br/>
                1. Nach Beginn Erdarbeiten: 30%<br/>
                2. Nach Rohbau: 28%<br/>
                3. Nach Dach: 8%<br/>
                4. Nach Fenstern/Türen: 10%<br/>
                5. Nach Innenausbau: 12%<br/>
                6. Nach Bezugsfertigkeit: 7%<br/>
                7. Nach Abnahme: 5%
              </div>
            </div>

            <div class="important-box">
              <div class="label">Auszahlungsvoraussetzungen</div>
              <p>
                <strong>Vor Auszahlung muss vorliegen:</strong><br/>
                • Unterschriebener Darlehensvertrag<br/>
                • Notarieller Kaufvertrag<br/>
                • Grundschuldbestellungsurkunde<br/>
                • Eintragungsbewilligung Grundschuld<br/>
                • Gebäudeversicherung (Nachweis)<br/>
                • Eigenkapital ist eingezahlt<br/><br/>

                <strong>Bank zahlt aus an:</strong><br/>
                • Notaranderkonto (bei Kauf)<br/>
                • Direkt an Verkäufer nach Grundbucheintrag<br/>
                • Bei Neubau: Nach Baufortschritt
              </p>
            </div>

            <div class="example-box">
              <div class="label">Zeitplan Kaufabwicklung</div>
              <p>
<strong>Woche 1-3: Finanzierungsantrag</strong>
• Unterlagen zusammenstellen
• Banken anfragen
• Angebote vergleichen

<strong>Woche 4-6: Darlehenszusage</strong>
• Bank entscheidet
• Prüfung der Zusage
• Annahme der Konditionen

<strong>Woche 7: Notartermin</strong>
• Kaufvertrag unterschreiben
• Grundschuldbestellung

<strong>Woche 8-10: Grundbucheintrag</strong>
• Antrag beim Grundbuchamt
• Eintragung Grundschuld
• Auflassungsvormerkung

<strong>Woche 11-12: Auszahlung</strong>
• Bank zahlt an Notar/Verkäufer
• Schlüsselübergabe
• Eigenkapital wird verrechnet

➜ <strong>Gesamt: ca. 3 Monate vom Antrag bis zum Einzug</strong>
              </p>
            </div>

            <div class="important-box">
              <div class="label">Wichtig: Bereitstellungszinsen vermeiden</div>
              <p>
                <strong>Problem:</strong><br/>
                Wenn Auszahlung verzögert, fallen Bereitstellungszinsen an
                (ca. 0,25% pro Monat = 3% p.a.!)<br/><br/>

                <strong>Lösung:</strong><br/>
                • Bereitstellungszinsfreie Zeit nutzen (meist 3-6 Monate)<br/>
                • Auszahlung zeitnah planen<br/>
                • Bei Neubau: Baufortschritt realistisch einschätzen<br/>
                • Evtl. bereitstellungszinsfreie Zeit verlängern (gegen Aufpreis)
              </p>
            </div>
          `
        }
      ]
    },
    {
      id: "ks-4",
      title: "Bank- und Partnernetzwerke",
      hours: 10,
      icon: "🏦",
      sections: [
        {
          id: "4.1",
          title: "Bankenlandschaft Deutschland",
          content: `
            <h4>Übersicht Bankgruppen:</h4>

            <div class="content-block">
              <h4>1. Privatbanken / Geschäftsbanken</h4>
              <ul>
                <li><strong>Deutsche Bank:</strong> Größte deutsche Privatbank</li>
                <li><strong>Commerzbank:</strong> Zweitgrößte Privatbank</li>
                <li><strong>HypoVereinsbank (UniCredit):</strong> Italienische Muttergesellschaft</li>
                <li><strong>Postbank (Deutsche Bank):</strong> Filialbank mit breitem Netz</li>
              </ul>
              <p><strong>Merkmale:</strong> Renditeorientiert, oft höhere Zinsen, schnelle Entscheidungen</p>
            </div>

            <div class="content-block">
              <h4>2. Sparkassen</h4>
              <ul>
                <li>Ca. 370 Sparkassen in Deutschland (regional organisiert)</li>
                <li>Öffentlich-rechtlich (gehören Städten/Gemeinden)</li>
                <li>Größte: Hamburger Sparkasse, Berliner Sparkasse, Frankfurter Sparkasse</li>
              </ul>
              <p><strong>Merkmale:</strong> Regionalbank, persönlicher Service, oft gute Konditionen für Bestandskunden</p>
            </div>

            <div class="content-block">
              <h4>3. Genossenschaftsbanken (Volks- und Raiffeisenbanken)</h4>
              <ul>
                <li>Ca. 700 Volksbanken und Raiffeisenbanken</li>
                <li>Genossenschaftlich organisiert (Mitglieder = Kunden)</li>
                <li>DZ Bank als Zentralbank</li>
              </ul>
              <p><strong>Merkmale:</strong> Regionale Verwurzelung, Mitgliederförderung, solide Konditionen</p>
            </div>

            <div class="content-block">
              <h4>4. Spezialbanken für Baufinanzierung</h4>
              <ul>
                <li><strong>Münchener Hypothekenbank:</strong> Spezialist für Baufinanzierung</li>
                <li><strong>Allianz Baufinanzierung:</strong> Versicherungskonzern</li>
                <li><strong>Interhyp / Dr. Klein:</strong> Vermittler mit eigenen Bankprodukten</li>
                <li><strong>ING:</strong> Direktbank mit günstigen Online-Konditionen</li>
                <li><strong>Comdirect:</strong> Online-Baufinanzierung</li>
              </ul>
              <p><strong>Merkmale:</strong> Oft beste Konditionen, reine Baufinanzierung, Online-Abwicklung</p>
            </div>

            <div class="content-block">
              <h4>5. Bausparkassen</h4>
              <ul>
                <li><strong>Schwäbisch Hall:</strong> Marktführer</li>
                <li><strong>Wüstenrot:</strong> Traditionell stark</li>
                <li><strong>LBS (Landesbausparkassen):</strong> Sparkassen-Verbund</li>
                <li><strong>BHW:</strong> Postbank-Tochter</li>
              </ul>
              <p><strong>Merkmale:</strong> Bausparverträge, Forward-Sicherung, Kombination mit Bankdarlehen</p>
            </div>

            <div class="content-block">
              <h4>6. KfW-Bank (Kreditanstalt für Wiederaufbau)</h4>
              <ul>
                <li>Staatsbank des Bundes</li>
                <li>Förderkredite für energieeffizientes Bauen/Sanieren</li>
                <li>Antragstellung über Hausbank</li>
              </ul>
              <p><strong>Merkmale:</strong> Günstige Förderzinsen, Tilgungszuschüsse, an Auflagen gebunden</p>
            </div>

            <div class="example-box">
              <div class="label">Bankauswahl nach Kundentyp</div>
              <p>
<strong>Top-Bonität, hohe Darlehenssumme:</strong>
➜ Spezialbanken (Münchener Hyp, Interhyp)
Grund: Beste Konditionen, schnelle Bearbeitung

<strong>Durchschnittliche Bonität, Standardfall:</strong>
➜ Sparkasse oder Volksbank (Hausbank)
Grund: Persönlicher Ansprechpartner, moderate Konditionen

<strong>Selbstständige, komplexer Fall:</strong>
➜ Privatbanken oder spezialisierte Vermittler
Grund: Flexible Prüfung, Erfahrung mit Sonderfällen

<strong>Energieeffizientes Bauen:</strong>
➜ KfW + Hausbank
Grund: Fördermittel + Zinsrabatt
              </p>
            </div>

            <h4>Bankrating und Konditionen:</h4>

            <div class="important-box">
              <div class="label">Einflussfaktoren auf Bankkonditionen</div>
              <p>
                <strong>Günstigere Konditionen bei:</strong><br/>
                ✓ Online-Banken (keine Filialen = Kostenvorteil)<br/>
                ✓ Spezialbanken (nur Baufinanzierung)<br/>
                ✓ Hoher Beleihung bis 60% LTV<br/>
                ✓ Top-Bonität<br/>
                ✓ Lange Zinsbindung (10-15 Jahre)<br/><br/>

                <strong>Höhere Konditionen bei:</strong><br/>
                ✗ Filialbanken (Personal- und Filialkosten)<br/>
                ✗ Universalbanken (Quersubventionierung)<br/>
                ✗ Hoher Beleihung über 80% LTV<br/>
                ✗ Schwächere Bonität<br/>
                ✗ Kurze Zinsbindung (5 Jahre)
              </p>
            </div>
          `
        },
        {
          id: "4.2",
          title: "Zusammenarbeit mit Banken optimieren",
          content: `
            <h4>Professionelle Bankkommunikation:</h4>

            <div class="important-box">
              <div class="label">Do's in der Bankkommunikation</div>
              <p>
                ✓ <strong>Vollständige Unterlagen:</strong> Erspart Rückfragen und beschleunigt<br/>
                ✓ <strong>Strukturierte Anfrage:</strong> Einheitliches Template nutzen<br/>
                ✓ <strong>Klare Deadline:</strong> "Bitte Angebot bis [Datum]"<br/>
                ✓ <strong>Persönlicher Kontakt:</strong> Fester Ansprechpartner bei Bank<br/>
                ✓ <strong>Regelmäßige Updates:</strong> Bei Änderungen sofort informieren<br/>
                ✓ <strong>Feedback geben:</strong> Auch wenn Angebot nicht gewählt wurde<br/>
                ✓ <strong>Professionalität:</strong> Höflich, sachlich, zuverlässig
              </p>
            </div>

            <div class="important-box">
              <div class="label">Don'ts in der Bankkommunikation</div>
              <p>
                ✗ <strong>Unvollständige Unterlagen:</strong> Verzögert Prozess massiv<br/>
                ✗ <strong>Parallele Anfragen offenlegen:</strong> Schwächt Verhandlungsposition<br/>
                ✗ <strong>Druck ausüben:</strong> "Wenn nicht billiger, gehe ich woanders hin"<br/>
                ✗ <strong>Ständig wechselnde Ansprechpartner:</strong> Ineffizient<br/>
                ✗ <strong>Unklare Kundensituation:</strong> Bank muss nachfragen<br/>
                ✗ <strong>Ghosting:</strong> Nach Angebot nicht mehr melden
              </p>
            </div>

            <h4>Standardisiertes Anfrage-Template:</h4>

            <div class="example-box">
              <div class="label">E-Mail Vorlage Bankanfrage</div>
              <p>
Betreff: Finanzierungsanfrage - [Kundenname] - [Objektadresse]

Sehr geehrte/r [Ansprechpartner],

für unseren Kunden [Name] möchten wir eine Baufinanzierung anfragen.

<strong>ECKDATEN:</strong>
Objektart: [Einfamilienhaus/ETW/MFH]
Objektwert: [Betrag] €
Darlehenssumme: [Betrag] €
Eigenkapital: [Betrag] € ([X]%)
Beleihungsauslauf: [X]%

<strong>DARLEHENSNEHMER:</strong>
Alter: [X] Jahre
Beruf: [Beschäftigung]
Nettoeinkommen: [Betrag] €/Monat
Schufa-Score: [X]%

<strong>GEWÜNSCHTE KONDITIONEN:</strong>
Zinsbindung: [X] Jahre
Anfängliche Tilgung: [X]%
Sondertilgung: mind. [X]% p.a.
Auszahlungstermin: [Datum/in X Monaten]

Vollständige Unterlagen finden Sie im Anhang.
Wir freuen uns auf Ihr Angebot bis zum [Datum].

Mit freundlichen Grüßen
[Name]
HYPOVISION Backoffice
              </p>
            </div>

            <h4>Netzwerkpflege:</h4>

            <ul>
              <li><strong>Feste Ansprechpartner:</strong> Bei jeder Bank 1-2 Hauptkontakte aufbauen</li>
              <li><strong>Regelmäßiger Austausch:</strong> Auch ohne konkreten Anlass (Marktlage, Konditionen)</li>
              <li><strong>Persönliche Treffen:</strong> Mind. 2x pro Jahr vor Ort</li>
              <li><strong>Feedback-Kultur:</strong> Lob und konstruktive Kritik kommunizieren</li>
              <li><strong>Transparenz:</strong> Ehrlich über Volumina und Erfolgsquoten</li>
              <li><strong>Loyalität zeigen:</strong> Nicht nur bei günstigsten Konditionen anfragen</li>
            </ul>

            <div class="important-box">
              <div class="label">Verhandlungstipps mit Banken</div>
              <p>
                <strong>1. Konkurrenz erwähnen (subtil):</strong><br/>
                "Wir prüfen parallel noch 2 weitere Angebote."<br/>
                Nicht: "Bank X ist günstiger!"<br/><br/>

                <strong>2. Volumen als Argument:</strong><br/>
                "Wir vermitteln ca. 20-30 Finanzierungen pro Jahr in Ihrem Haus."<br/><br/>

                <strong>3. Gesamtpaket betonen:</strong><br/>
                "Uns ist nicht nur der Zins wichtig, auch Service und Flexibilität."<br/><br/>

                <strong>4. Kompromisse anbieten:</strong><br/>
                "Bei 0,1% weniger Zins können wir auf Tilgungssatzwechsel verzichten."<br/><br/>

                <strong>5. Best-Case-Szenario aufzeigen:</strong><br/>
                "Bei guten Konditionen können wir Ihnen weitere Kunden vermitteln."
              </p>
            </div>

            <h4>Qualität statt Quantität:</h4>

            <div class="def-box">
              <div class="term">Die optimale Bankauswahl</div>
              <div class="meaning">
                <strong>5-7 Kernbanken</strong> intensiv pflegen ist besser als 20 Banken oberflächlich kennen.<br/><br/>

                Empfohlenes Bank-Portfolio:<br/>
                • 2 Spezialbanken (beste Konditionen)<br/>
                • 1-2 Regionalbanken (Sparkasse/Volksbank)<br/>
                • 1 Privatbank (für Spezialfälle)<br/>
                • 1 Bausparkasse (für Kombis)<br/>
                • KfW (über Hausbank)
              </div>
            </div>

            <div class="example-box">
              <div class="label">Beispiel Anfragestrategie</div>
              <p>
<strong>Standardfall (gute Bonität, bis 80% LTV):</strong>
1. Anfrage bei 2 Spezialbanken (beste Konditionen erwartet)
2. Anfrage bei 1 Hausbank (Benchmark)
➜ 3 Angebote vergleichen

<strong>Grenzfall (schwächere Bonität oder 90% LTV):</strong>
1. Anfrage bei 3 Spezialbanken
2. Anfrage bei 2 Regionalbanken
➜ 5 Angebote vergleichen (höhere Ablehnungsquote einkalkulieren)

<strong>Komplexfall (Selbstständige, Sonderimmobilie):</strong>
1. Anfrage bei spezialisierten Vermittlern
2. Anfrage bei 2 Privatbanken
3. Anfrage bei Hausbank
➜ Breites Netz, individuelle Prüfung wichtig
              </p>
            </div>
          `
        },
        {
          id: "4.3",
          title: "Produktanbieter und Kooperationspartner",
          content: `
            <h4>Wichtige Partner im Finanzierungsprozess:</h4>

            <div class="content-block">
              <h4>1. Versicherungsmakler / Versicherer</h4>
              <ul>
                <li><strong>Risikolebensversicherung:</strong> Oft Bedingung bei hoher Beleihung</li>
                <li><strong>Wohngebäudeversicherung:</strong> Pflicht für Kreditauszahlung</li>
                <li><strong>Restschuldversicherung:</strong> Optional (meist nicht empfehlenswert)</li>
              </ul>
              <p><strong>Wichtig:</strong> Gute Kooperation mit Versicherungsmaklern aufbauen für schnelle Abwicklung</p>
            </div>

            <div class="content-block">
              <h4>2. Sachverständige / Gutachter</h4>
              <ul>
                <li>Objektbewertung für Banken</li>
                <li>Beleihungswertgutachten</li>
                <li>Baumängel-Gutachten bei Altbauten</li>
              </ul>
              <p><strong>Tipp:</strong> Liste mit empfohlenen Gutachtern führen (nach Regionen)</p>
            </div>

            <div class="content-block">
              <h4>3. Notare</h4>
              <ul>
                <li>Kaufvertragsabwicklung</li>
                <li>Grundschuldbestellung</li>
                <li>Koordination Grundbuchamt</li>
              </ul>
              <p><strong>Zusammenarbeit:</strong> Enger Austausch für zeitgerechte Auszahlung wichtig</p>
            </div>

            <div class="content-block">
              <h4>4. Energieberater</h4>
              <ul>
                <li>Für KfW-Förderung zwingend erforderlich</li>
                <li>Effizienzhaus-Bestätigung</li>
                <li>Sanierungsfahrplan erstellen</li>
              </ul>
              <p><strong>Netzwerk:</strong> Kontakte zu zertifizierten KfW-Energieberatern aufbauen</p>
            </div>

            <div class="content-block">
              <h4>5. Immobilienmakler</h4>
              <ul>
                <li>Potenzielle Kunden (Käufer)</li>
                <li>Objektinformationen</li>
                <li>Schnellere Kaufabwicklung durch gute Vorbereitung</li>
              </ul>
              <p><strong>Win-Win:</strong> Makler profitiert von schneller Finanzierung, wir von qualifizierten Leads</p>
            </div>

            <div class="important-box">
              <div class="label">Netzwerkpflege mit Partnern</div>
              <p>
                <strong>Regelmäßiger Austausch:</strong><br/>
                • Quartalsweise Treffen mit Key-Partnern<br/>
                • Gegenseitige Empfehlungen<br/>
                • Informationsaustausch über Marktsituation<br/><br/>

                <strong>Qualitätssicherung:</strong><br/>
                • Feedback zu Zusammenarbeit<br/>
                • Reaktionszeiten dokumentieren<br/>
                • Alternative Partner als Backup<br/><br/>

                <strong>Kundennutzen:</strong><br/>
                • One-Stop-Shop für Kunden<br/>
                • Schnellere Abwicklung<br/>
                • Bessere Konditionen durch Volumen
              </p>
            </div>

            <h4>Digitale Tools und Plattformen:</h4>

            <div class="example-box">
              <div class="label">Nützliche Tools für Kreditsachbearbeitung</div>
              <p>
<strong>1. Vergleichsrechner:</strong>
• Check24 (für Vorab-Recherche)
• Interhyp-Rechner
• Dr. Klein Rechner
➜ Schneller Marktüberblick

<strong>2. Dokumentenmanagement:</strong>
• Dropbox / Google Drive (verschlüsselt!)
• Bankspezifische Upload-Portale
• Digitale Signatur (DocuSign)
➜ Papierlose Abwicklung

<strong>3. CRM-System:</strong>
• Kundenkontakte verwalten
• Wiedervorlagen setzen
• Pipeline-Management
➜ Professionelle Kundenbetreuung

<strong>4. Konditionsabfrage-Tools:</strong>
• Europace (Vermittlerplattform)
• Finmas
➜ Schnelle Bankanfragen parallel

<strong>5. Tilgungsrechner:</strong>
• Excel-Vorlagen
• Online-Rechner der Banken
➜ Kundenpräsentationen erstellen
              </p>
            </div>

            <h4>Aufbau eines Partner-Netzwerks:</h4>

            <div class="important-box">
              <div class="label">5 Schritte zum starken Netzwerk</div>
              <p>
                <strong>Schritt 1: Recherche</strong><br/>
                • Wer sind die relevanten Player in der Region?<br/>
                • Recherche über Google, Branchenverzeichnisse<br/>
                • Empfehlungen von Kollegen einholen<br/><br/>

                <strong>Schritt 2: Erstkontakt</strong><br/>
                • Persönliche Vorstellung (Mail + Anruf)<br/>
                • Leistungsspektrum präsentieren<br/>
                • Gemeinsamkeiten identifizieren<br/><br/>

                <strong>Schritt 3: Testlauf</strong><br/>
                • Ersten gemeinsamen Fall bearbeiten<br/>
                • Qualität und Reaktionszeit prüfen<br/>
                • Feedback-Gespräch führen<br/><br/>

                <strong>Schritt 4: Vertiefen</strong><br/>
                • Regelmäßige Zusammenarbeit<br/>
                • Bevorzugte Behandlung aushandeln<br/>
                • Konditionen optimieren<br/><br/>

                <strong>Schritt 5: Pflegen</strong><br/>
                • Kontinuierlicher Austausch<br/>
                • Gegenseitige Weiterempfehlungen<br/>
                • Langfristige Partnerschaft
              </p>
            </div>

            <div class="example-box">
              <div class="label">Erfolgsmessung Partnerschaften</div>
              <p>
<strong>KPIs für Partner-Bewertung:</strong>

<strong>Versicherer:</strong>
• Reaktionszeit auf Anfragen (Ziel: < 24h)
• Annahme-Quote (Ziel: > 95%)
• Preis-Leistungs-Verhältnis
• Servicequalität

<strong>Gutachter:</strong>
• Bearbeitungszeit (Ziel: < 10 Tage)
• Bewertungsgenauigkeit
• Bankenakzeptanz der Gutachten
• Kosten

<strong>Notare:</strong>
• Terminverfügbarkeit
• Bearbeitungsgeschwindigkeit
• Gebühren (Orientierung: GONotI)
• Kommunikationsqualität

➜ Jährliche Bewertung aller Partner und ggf. Wechsel
              </p>
            </div>
          `
        },
        {
          id: "4.4",
          title: "Marktentwicklung und Trends",
          content: `
            <h4>Zinsentwicklung verstehen und beobachten:</h4>

            <div class="def-box">
              <div class="term">Einflussfaktoren auf Bauzinsen</div>
              <div class="meaning">
                <strong>Hauptfaktor: EZB-Leitzins</strong><br/>
                Die Europäische Zentralbank (EZB) bestimmt mit dem Leitzins das Zinsniveau.<br/><br/>

                <strong>Weitere Faktoren:</strong><br/>
                • Inflation (hoch = höhere Zinsen)<br/>
                • Wirtschaftswachstum (stark = höhere Zinsen)<br/>
                • Staatsanleihen (Rendite 10-jährige Bundesanleihen als Indikator)<br/>
                • Angebot und Nachfrage am Kreditmarkt<br/>
                • Bankenliquidität
              </div>
            </div>

            <h4>Wichtige Indikatoren beobachten:</h4>

            <div class="important-box">
              <div class="label">Informationsquellen für Zinsentwicklung</div>
              <p>
                <strong>Tägliche Checks:</strong><br/>
                ✓ Rendite 10-jährige Bundesanleihen (Leitzins-Indikator)<br/>
                ✓ FMH-Index (Durchschnitt Bauzinsen Deutschland)<br/>
                ✓ Interhyp Bauzinsen-Ticker<br/><br/>

                <strong>Wöchentliche Updates:</strong><br/>
                ✓ EZB-Sitzungen und Statements<br/>
                ✓ Inflationszahlen<br/>
                ✓ Banken-Konditionsänderungen<br/><br/>

                <strong>Monatliche Analysen:</strong><br/>
                ✓ Marktberichte Interhyp / Dr. Klein<br/>
                ✓ Statistisches Bundesamt (Immobilienpreise)<br/>
                ✓ Bundesbank-Berichte
              </p>
            </div>

            <div class="example-box">
              <div class="label">Historische Zinsentwicklung (Richtwerte)</div>
              <p>
<strong>2000-2008: Vor Finanzkrise</strong>
• Bauzinsen: 5-6% p.a.
• Stabile Wirtschaft, normales Zinsniveau

<strong>2009-2014: Nach Finanzkrise</strong>
• Bauzinsen: 3-4% p.a.
• EZB senkt Leitzins zur Wirtschaftsstimulation

<strong>2015-2021: Niedrigzinsphase</strong>
• Bauzinsen: 1-2% p.a.
• Historische Tiefststände

<strong>2022-2024: Zinswende</strong>
• Bauzinsen: 3-4,5% p.a.
• Inflation und EZB-Zinserhöhungen

<strong>2025+: Stabilisierung (Prognose)</strong>
• Bauzinsen: 3,5-4% p.a.
• Rückkehr zur "neuen Normalität"
              </p>
            </div>

            <h4>Immobilienmarkt-Trends:</h4>

            <div class="content-block">
              <h4>Aktuelle Entwicklungen (Stand 2025)</h4>
              <ul>
                <li><strong>Preiskorrektur:</strong> Nach Jahren des Booms leichte Preisrückgänge in Metropolen</li>
                <li><strong>Landflucht-Umkehr:</strong> Home-Office macht ländliche Regionen attraktiver</li>
                <li><strong>Energetische Sanierung:</strong> EU-Gebäuderichtlinie erhöht Sanierungsdruck</li>
                <li><strong>Nachhaltige Finanzierung:</strong> Grüne Baudarlehen mit Zinsvorteilen</li>
                <li><strong>Demografie:</strong> Babyboomer verkaufen, Millennials kaufen</li>
              </ul>
            </div>

            <div class="important-box">
              <div class="label">Beratungsansatz je nach Marktsituation</div>
              <p>
                <strong>Steigendes Zinsniveau:</strong><br/>
                • Forward-Darlehen aktiv anbieten<br/>
                • Lange Zinsbindungen empfehlen (15-20 Jahre)<br/>
                • Schnelle Entscheidungen fördern<br/><br/>

                <strong>Fallendes Zinsniveau:</strong><br/>
                • Kurze Zinsbindungen in Betracht ziehen (5-10 Jahre)<br/>
                • Abwarten kann sich lohnen<br/>
                • Variable Zinsen als Alternative<br/><br/>

                <strong>Stabiles Zinsniveau:</strong><br/>
                • Fokus auf Tilgungshöhe und Flexibilität<br/>
                • 10-jährige Zinsbindung als Standard<br/>
                • Individuelle Kundensituation entscheidet
              </p>
            </div>

            <h4>Regulatorische Änderungen:</h4>

            <div class="content-block">
              <h4>Wichtige Gesetze und Vorschriften</h4>
              <ul>
                <li><strong>Wohnimmobilienkreditrichtlinie (WIKR):</strong> Strengere Kreditvergabeprüfung</li>
                <li><strong>EU-Gebäudeenergiegesetz (GEG):</strong> Energiestandards für Neubauten</li>
                <li><strong>EU-Taxonomie:</strong> Nachhaltigkeitskriterien für Finanzprodukte</li>
                <li><strong>Grunderwerbsteuer:</strong> Länderweise unterschiedlich (3,5% - 6,5%)</li>
                <li><strong>KfW-Förderung:</strong> Regelmäßige Programmanpassungen</li>
              </ul>
            </div>

            <div class="important-box">
              <div class="label">Weiterbildung und Marktbeobachtung</div>
              <p>
                <strong>Tägliche Routine (15 Min.):</strong><br/>
                • Bauzinsen-Check (FMH, Interhyp)<br/>
                • News-Scan (Immobilienwirtschaft)<br/><br/>

                <strong>Wöchentlich (30 Min.):</strong><br/>
                • Fachzeitschriften lesen (IVD, Haufe)<br/>
                • Webinare/Schulungen der Banken<br/><br/>

                <strong>Monatlich (2 Std.):</strong><br/>
                • Marktberichte analysieren<br/>
                • Austausch mit Kollegen<br/>
                • Strategieanpassung<br/><br/>

                <strong>Jährlich:</strong><br/>
                • Fachseminare besuchen<br/>
                • Netzwerk-Events<br/>
                • Zertifizierungen erneuern
              </p>
            </div>

            <div class="example-box">
              <div class="label">Prognose-Szenarien für Kundenberatung</div>
              <p>
<strong>Szenario 1: Weiter steigende Zinsen (pessimistisch)</strong>
• Bauzinsen in 12 Monaten: 4,5-5%
• Empfehlung: Jetzt finanzieren, lange Zinsbindung

<strong>Szenario 2: Stabile Zinsen (realistisch)</strong>
• Bauzinsen in 12 Monaten: 3,5-4%
• Empfehlung: Standard-Zinsbindung (10 Jahre), keine Eile

<strong>Szenario 3: Sinkende Zinsen (optimistisch)</strong>
• Bauzinsen in 12 Monaten: 2,5-3%
• Empfehlung: Kurze Zinsbindung oder abwarten

➜ Transparent mit Kunden besprechen, Entscheidung liegt beim Kunden
              </p>
            </div>

            <div class="def-box">
              <div class="term">Wichtig: Keine Garantien geben!</div>
              <div class="meaning">
                Zinsprognosen sind <strong>nie sicher</strong>.<br/>
                Immer deutlich machen: "Nach aktueller Einschätzung..." oder
                "Experten gehen davon aus..."<br/><br/>

                <strong>Absicherung:</strong><br/>
                Dokumentieren, dass Kunde über Zinsrisiko aufgeklärt wurde.<br/>
                Kunde entscheidet selbst über Zinsbindung und Zeitpunkt.
              </div>
            </div>
          `
        }
      ]
    }
  ]
};

export default KreditsachbearbeiterData;
