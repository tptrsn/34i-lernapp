// ============================================================
// §34i SACHKUNDEPRÜFUNG - VOLLSTÄNDIGE PRÜFUNGSRELEVANTE DATEN
// Basierend auf dem offiziellen DIHK Rahmenplan
// ============================================================

const AppData = {

// ========================================
// KAPITEL MIT VOLLSTÄNDIGEM LERNINHALT
// ========================================
chapters: [
{
    id: 1,
    title: "1. Kundenberatung (60 UE)",
    hours: 60,
    sections: [
        {
            id: "1.1",
            title: "Serviceerwartungen des Kunden",
            content: `
<div class="content-block">
<h4>Was erwartet der Kunde von einem Immobiliardarlehensvermittler?</h4>
<ul>
<li><strong>Kundenorientiertes Verhalten</strong> – Der Kunde steht im Mittelpunkt, nicht das Produkt</li>
<li><strong>Qualifizierte Beratung</strong> – Fachkompetenz, aktuelle Marktkenntnisse, individuelle Lösungen</li>
<li><strong>Dauerhafte Betreuung</strong> – Nicht nur beim Abschluss, sondern über die gesamte Laufzeit</li>
<li><strong>Persönliche Serviceleistungen</strong> – Über Vertragsbestandteile hinaus</li>
<li><strong>Transparenz</strong> – Offene Kommunikation über Kosten und Risiken</li>
</ul>
</div>

<div class="important-box">
<div class="label">⚠️ Kernaufgabe - Prüfungsrelevant!</div>
<p>Die Finanzierungsberatung dient dem <strong>Schutz des Kunden vor Überschuldung</strong>. Der Vermittler muss die Tragfähigkeit der Finanzierung sorgfältig prüfen!</p>
</div>`
        },
        {
            id: "1.2",
            title: "Besuchsvorbereitung und Kundenkontakte",
            content: `
<div class="content-block">
<h4>Professionelle Besuchsvorbereitung</h4>
<ul>
<li><strong>Terminplanung</strong> – Ausreichend Zeit einplanen</li>
<li><strong>Unterlagen zusammenstellen</strong> – Produktinfos, Rechenbeispiele, Formulare</li>
<li><strong>Objektinformationen</strong> – Exposé, Grundbuchauszug wenn bekannt</li>
<li><strong>Kundendaten prüfen</strong> – Frühere Kontakte, bestehende Verträge</li>
<li><strong>Auf den Kunden einstellen</strong> – Alter, Familiensituation, Vorkenntnisse</li>
</ul>
</div>

<div class="content-block">
<h4>Kontaktwege</h4>
<div class="table-wrapper">
<table>
<tr><th>Kontaktweg</th><th>Vorteile</th><th>Zu beachten</th></tr>
<tr><td><strong>Brief</strong></td><td>Seriös, keine Einwilligung nötig</td><td>Langsam, teuer</td></tr>
<tr><td><strong>Telefon</strong></td><td>Direkt, persönlich</td><td>Einwilligung bei Werbung!</td></tr>
<tr><td><strong>E-Mail</strong></td><td>Schnell, dokumentierbar</td><td>Einwilligung (DSGVO)</td></tr>
<tr><td><strong>Persönlich</strong></td><td>Beste Beratungsqualität</td><td>Nur mit Termin!</td></tr>
</table>
</div>
</div>

<div class="important-box">
<div class="label">⚠️ UWG beachten</div>
<p><strong>Cold Calls sind verboten!</strong> Unaufgeforderte Werbeanrufe bei Verbrauchern ohne Einwilligung verstoßen gegen das UWG. Bußgelder bis 300.000 €!</p>
</div>`
        },
        {
            id: "1.3",
            title: "Das Kundengespräch",
            content: `
<div class="content-block">
<h4>Phasen des Kundengesprächs</h4>
<ul>
<li><strong>1. Gesprächseröffnung</strong> – Begrüßung, Vorstellung, Atmosphäre schaffen</li>
<li><strong>2. Bedarfsermittlung</strong> – Situation verstehen, Fragen stellen</li>
<li><strong>3. Beratung</strong> – Lösungen vorstellen, Vor-/Nachteile erklären</li>
<li><strong>4. Einwandbehandlung</strong> – Bedenken ernst nehmen</li>
<li><strong>5. Abschluss</strong> – Zusammenfassung, Entscheidung</li>
<li><strong>6. Nachbereitung</strong> – Dokumentation, Folgetermine</li>
</ul>
</div>

<div class="def-box">
<div class="term">Aktives Zuhören</div>
<div class="meaning">Gesprächstechnik: Durch Nachfragen, Zusammenfassen und Bestätigen zeigen, dass man verstanden hat. Wichtig für Vertrauensaufbau!</div>
</div>

<div class="content-block">
<h4>Ethische Grundsätze</h4>
<ul>
<li><strong>Ehrlichkeit</strong> – Keine falschen Versprechungen, Risiken benennen</li>
<li><strong>Transparenz</strong> – Alle Kosten offenlegen</li>
<li><strong>Kundeninteresse</strong> – Das passende, nicht das provisionsstarke Produkt</li>
<li><strong>Diskretion</strong> – Vertrauliche Behandlung aller Daten</li>
</ul>
</div>`
        },
        {
            id: "1.4",
            title: "Kundenbetreuung nach Vertragsabschluss",
            content: `
<div class="content-block">
<h4>Serviceleistungen während der Laufzeit</h4>
<ul>
<li><strong>Gesetzesänderungen</strong> – Über neue Förderungen informieren</li>
<li><strong>Erreichbarkeit</strong> – Ansprechpartner bei Fragen sein</li>
<li><strong>Veränderungen</strong> – Beratung bei Arbeitslosigkeit, Scheidung etc.</li>
<li><strong>Prolongationsberatung</strong> – 6-12 Monate vor Ablauf aktiv werden</li>
<li><strong>Cross-Selling</strong> – Weitere Bedarfe erkennen und ansprechen</li>
</ul>
</div>

<div class="important-box">
<div class="label">💡 Tipp</div>
<p>Langfristige Kundenbeziehungen sind wertvoller als Einzelabschlüsse. Zufriedene Kunden empfehlen weiter!</p>
</div>`
        }
    ]
},
{
    id: 2,
    title: "2. Rechtliche Grundlagen (70 UE)",
    hours: 70,
    sections: [
        {
            id: "2.1",
            title: "Rechtsfähigkeit und Geschäftsfähigkeit",
            content: `
<div class="def-box">
<div class="term">Rechtsfähigkeit</div>
<div class="meaning">Fähigkeit, Träger von Rechten und Pflichten zu sein. <strong>Jeder Mensch ab Geburt</strong> ist rechtsfähig (§1 BGB).</div>
</div>

<div class="def-box">
<div class="term">Geschäftsfähigkeit</div>
<div class="meaning">Fähigkeit, Rechtsgeschäfte selbstständig wirksam abzuschließen. Altersabhängig!</div>
</div>

<div class="content-block">
<h4>Stufen der Geschäftsfähigkeit</h4>
<div class="table-wrapper">
<table>
<tr><th>Alter</th><th>Status</th><th>Rechtsfolge</th></tr>
<tr><td><strong>Unter 7</strong></td><td>Geschäftsunfähig</td><td>Alle Rechtsgeschäfte nichtig (§104, 105 BGB)</td></tr>
<tr><td><strong>7-17</strong></td><td>Beschränkt geschäftsfähig</td><td>Nur mit Eltern-Einwilligung (§107 BGB)</td></tr>
<tr><td><strong>Ab 18</strong></td><td>Voll geschäftsfähig</td><td>Alle Verträge selbstständig möglich</td></tr>
</table>
</div>
</div>

<div class="important-box">
<div class="label">⚠️ Prüfungsrelevant</div>
<p>Darlehensvertrag mit 17-Jährigem ist <strong>schwebend unwirksam</strong> bis zur Genehmigung durch die Eltern! Ohne Genehmigung: unwirksam.</p>
</div>`
        },
        {
            id: "2.2",
            title: "Das Grundbuch",
            content: `
<div class="def-box">
<div class="term">Grundbuch</div>
<div class="meaning">Öffentliches Register beim Amtsgericht. Dokumentiert alle Rechtsverhältnisse an Grundstücken.</div>
</div>

<div class="content-block">
<h4>Aufbau des Grundbuchs</h4>
<div class="table-wrapper">
<table>
<tr><th>Teil</th><th>Inhalt</th></tr>
<tr><td><strong>Aufschrift</strong></td><td>Amtsgericht, Blattnummer</td></tr>
<tr><td><strong>Bestandsverzeichnis</strong></td><td>Flurstück, Größe, Lage</td></tr>
<tr><td><strong>Abteilung I</strong></td><td>Eigentümer</td></tr>
<tr><td><strong>Abteilung II</strong></td><td>Lasten und Beschränkungen (Wegerechte, Wohnrechte, Vormerkungen)</td></tr>
<tr><td><strong>Abteilung III</strong></td><td>Grundpfandrechte (Hypotheken, Grundschulden)</td></tr>
</table>
</div>
</div>

<div class="def-box">
<div class="term">Öffentlicher Glaube des Grundbuchs</div>
<div class="meaning">Man darf auf die Richtigkeit der Eintragungen vertrauen (§892 BGB). Gutgläubiger Erwerb wird geschützt!</div>
</div>

<div class="content-block">
<h4>Wichtige Eintragungen Abteilung II</h4>
<ul>
<li><strong>Auflassungsvormerkung</strong> – Sichert Käufer vor Weiterverkauf</li>
<li><strong>Wegerecht</strong> – Recht, über fremdes Grundstück zu gehen</li>
<li><strong>Wohnrecht</strong> – Recht, in der Immobilie zu wohnen</li>
<li><strong>Nießbrauch</strong> – Recht auf Nutzung und Erträge</li>
<li><strong>Erbbaurecht</strong> – Recht, auf fremdem Grund zu bauen</li>
</ul>
</div>

<div class="example-box">
<div class="label">📌 Rangfolge bei Zwangsversteigerung</div>
<p>Abteilung III:
1. Grundschuld 200.000€ (Bank A)
2. Grundschuld 50.000€ (Bank B)

Bei Erlös 180.000€: Bank A bekommt alles, Bank B geht leer aus!</p>
</div>`
        },
        {
            id: "2.3",
            title: "§34i GewO - Erlaubnispflicht",
            content: `
<div class="def-box">
<div class="term">§34i GewO</div>
<div class="meaning">Regelt die Erlaubnispflicht für Immobiliardarlehensvermittler seit 21.3.2016.</div>
</div>

<div class="content-block">
<h4>Voraussetzungen für die Erlaubnis</h4>
<ul>
<li><strong>1. Zuverlässigkeit</strong> – Keine einschlägigen Vorstrafen</li>
<li><strong>2. Geordnete Vermögensverhältnisse</strong> – Nicht überschuldet, kein Insolvenzverfahren</li>
<li><strong>3. Berufshaftpflichtversicherung</strong> – Mindestens 460.000€ je Schadensfall, 750.000€ p.a.</li>
<li><strong>4. Sachkundenachweis</strong> – Diese Prüfung!</li>
</ul>
</div>

<div class="important-box">
<div class="label">⚠️ Wichtig</div>
<p>Auch <strong>Angestellte</strong>, die an der Vermittlung mitwirken, brauchen den Sachkundenachweis! Registrierungspflicht bei zuständiger IHK.</p>
</div>

<div class="content-block">
<h4>Gleichgestellte Abschlüsse</h4>
<ul>
<li>Bankkaufmann/-frau</li>
<li>Sparkassenkaufmann/-frau</li>
<li>Immobilienkaufmann/-frau</li>
<li>Fachwirt für Finanzberatung (IHK)</li>
<li>Geprüfter Bankfachwirt (IHK)</li>
</ul>
</div>

<div class="content-block">
<h4>Vermittler vs. Honorarberater</h4>
<div class="table-wrapper">
<table>
<tr><th>Vermittler (§34i Abs. 1)</th><th>Honorar-Berater (§34i Abs. 5)</th></tr>
<tr><td>Provision von Bank</td><td>Honorar vom Kunden</td></tr>
<tr><td>Darf vermitteln + beraten</td><td>Nur beraten, nicht vermitteln</td></tr>
<tr><td>§655a BGB</td><td>§655e BGB</td></tr>
</table>
</div>
</div>`
        },
        {
            id: "2.4",
            title: "Informationspflichten und ESIS",
            content: `
<div class="content-block">
<h4>Vorvertragliche Informationspflichten (§491a BGB)</h4>
<ul>
<li><strong>Statusinfos</strong> – Name, Anschrift, Registernummer, IHK</li>
<li><strong>Vergütung</strong> – Provision oder Honorar? Höhe?</li>
<li><strong>Produktinfos</strong> – ESIS-Merkblatt (Art. 247 §13 EGBGB)</li>
<li><strong>Beratungsstatus</strong> – Vermittler oder gebundener Vermittler?</li>
</ul>
</div>

<div class="def-box">
<div class="term">ESIS-Merkblatt</div>
<div class="meaning">Europäisches Standardisiertes Merkblatt. Muss VOR Vertragsschluss ausgehändigt werden. Enthält: Zinsen, Raten, Gesamtkosten, Widerrufsrecht, Folgen bei Zahlungsverzug.</div>
</div>

<div class="important-box">
<div class="label">⚠️ 7-Tage-Bedenkzeit</div>
<p>Das Angebot muss mindestens 7 Tage bindend sein (§491a Abs. 3 BGB)! Kunde muss Zeit haben, Angebote zu vergleichen.</p>
</div>

<div class="content-block">
<h4>Pflicht zur Beratungsdokumentation (§511 BGB)</h4>
<ul>
<li>Dokumentation der Kundenwünsche und -bedürfnisse</li>
<li>Beratungsgrundlage aufzeigen</li>
<li>Empfehlung begründen</li>
<li>Aufbewahrung: Mindestens 5 Jahre</li>
</ul>
</div>`
        },
        {
            id: "2.5",
            title: "Geldwäschegesetz (GwG)",
            content: `
<div class="def-box">
<div class="term">Geldwäschegesetz</div>
<div class="meaning">Verpflichtet Vermittler zu Maßnahmen gegen Geldwäsche und Terrorismusfinanzierung.</div>
</div>

<div class="content-block">
<h4>Pflichten nach GwG</h4>
<ul>
<li><strong>Identifizierungspflicht</strong> – Ausweis prüfen und kopieren</li>
<li><strong>Sorgfaltspflichten</strong> – Geschäftsbeziehung überwachen</li>
<li><strong>Verdachtsmeldung</strong> – An FIU (Financial Intelligence Unit) melden</li>
<li><strong>Dokumentation</strong> – 5 Jahre aufbewahren</li>
<li><strong>Schulung</strong> – Mitarbeiter regelmäßig schulen</li>
</ul>
</div>

<div class="content-block">
<h4>Wann identifizieren?</h4>
<ul>
<li>Bei neuer Geschäftsbeziehung</li>
<li>Bei Transaktionen ab 15.000€</li>
<li>Bei Verdacht auf Geldwäsche (unabhängig vom Betrag)</li>
<li>Bei Zweifeln an früherer Identifizierung</li>
</ul>
</div>

<div class="important-box">
<div class="label">⚠️ Straftat</div>
<p>Geldwäsche ist eine Straftat! Vermittler haben eine wichtige Rolle bei der Prävention. Verdachtsfälle MÜSSEN gemeldet werden.</p>
</div>`
        },
        {
            id: "2.6",
            title: "Widerrufsrecht",
            content: `
<div class="def-box">
<div class="term">Widerrufsrecht bei Immobiliardarlehen</div>
<div class="meaning">Verbraucher kann innerhalb von <strong>14 Tagen</strong> ohne Angabe von Gründen widerrufen (§495 BGB).</div>
</div>

<div class="content-block">
<h4>Beginn der Widerrufsfrist</h4>
<p>Die Frist beginnt erst, wenn:</p>
<ul>
<li>Der Vertrag geschlossen wurde UND</li>
<li>Alle Pflichtangaben gemacht wurden UND</li>
<li>Die Widerrufsbelehrung übergeben wurde</li>
</ul>
</div>

<div class="important-box">
<div class="label">⚠️ Fehlerhafte Widerrufsbelehrung</div>
<p>Ist die Belehrung fehlerhaft, beginnt die Frist NICHT zu laufen. Vertrag kann dann noch Jahre später widerrufen werden ("Widerrufsjoker")!

Maximale Widerrufsfrist: 12 Monate und 14 Tage nach Vertragsschluss (bei fehlerhafter Belehrung).</p>
</div>

<div class="example-box">
<div class="label">📌 Folgen des Widerrufs</div>
<p>Bei Widerruf:
• Darlehen muss zurückgezahlt werden
• Bereits gezahlte Zinsen werden erstattet
• Vorfälligkeitsentschädigung entfällt
• Nutzungsersatz kann anfallen</p>
</div>`
        },
        {
            id: "2.7",
            title: "Datenschutz (DSGVO)",
            content: `
<div class="content-block">
<h4>Grundsätze der DSGVO</h4>
<ul>
<li><strong>Rechtmäßigkeit</strong> – Datenverarbeitung nur mit Rechtsgrundlage</li>
<li><strong>Zweckbindung</strong> – Nur für festgelegten Zweck nutzen</li>
<li><strong>Datenminimierung</strong> – Nur notwendige Daten erheben</li>
<li><strong>Richtigkeit</strong> – Daten aktuell halten</li>
<li><strong>Speicherbegrenzung</strong> – Nicht länger als nötig speichern</li>
<li><strong>Integrität</strong> – Schutz vor unbefugtem Zugriff</li>
</ul>
</div>

<div class="important-box">
<div class="label">⚠️ Hohe Bußgelder</div>
<p>Verstöße gegen DSGVO können mit bis zu 20 Mio. € oder 4% des weltweiten Jahresumsatzes geahndet werden!</p>
</div>

<div class="content-block">
<h4>Rechte der Betroffenen</h4>
<ul>
<li>Recht auf Auskunft</li>
<li>Recht auf Berichtigung</li>
<li>Recht auf Löschung ("Recht auf Vergessenwerden")</li>
<li>Recht auf Datenübertragbarkeit</li>
<li>Widerspruchsrecht</li>
</ul>
</div>

<div class="content-block">
<h4>Datensicherheit und Verschwiegenheit</h4>
<ul>
<li><strong>Vertraulichkeit</strong> - Kundendaten nur für den Beratungszweck nutzen</li>
<li><strong>Technische und organisatorische Maßnahmen (TOM)</strong> - Zugriffsschutz, Passwörter, Backups</li>
<li><strong>Verschwiegenheitspflicht</strong> - Keine Weitergabe an Dritte ohne Einwilligung</li>
</ul>
</div>`
        },
        {
            id: "2.8",
            title: "Vertragsrecht & Immobilienerwerb",
            content: `
<div class="content-block">
<h4>Verpflichtungs- und Verfügungsgeschäft</h4>
<ul>
<li><strong>Verpflichtungsgeschäft</strong> - z.B. Kaufvertrag (Pflichten werden begründet)</li>
<li><strong>Verfügungsgeschäft</strong> - z.B. Eigentumsübertragung im Grundbuch</li>
<li>Beide Rechtsgeschäfte sind rechtlich getrennt (Trennungsprinzip)</li>
</ul>
</div>

<div class="content-block">
<h4>Immobilienkauf</h4>
<ul>
<li><strong>Notarielle Beurkundung</strong> ist Pflicht (§311b BGB)</li>
<li><strong>Auflassung</strong> = Einigung über Eigentumsübergang</li>
<li><strong>Auflassungsvormerkung</strong> schützt den Käufer vor Zwischenverfügungen</li>
</ul>
</div>

<div class="content-block">
<h4>Rechte an Immobilien</h4>
<ul>
<li><strong>Eigentum</strong> am Grundstück</li>
<li><strong>Erbbaurecht</strong> und <strong>Wohnungseigentum (WEG)</strong></li>
<li><strong>Dienstbarkeiten</strong> (z.B. Wegerecht, Wohnrecht, Nießbrauch)</li>
<li><strong>Nicht eingetragene Lasten</strong> - z.B. Baulasten, öffentlich-rechtliche Beschränkungen</li>
</ul>
</div>

<div class="important-box">
<div class="label">⚠️ Rangfolge</div>
<p>Die Rangfolge im Grundbuch bestimmt, wer im Verwertungsfall zuerst bedient wird. Rangänderungen sind nur mit Zustimmung möglich.</p>
</div>`
        },
        {
            id: "2.9",
            title: "Verbraucherkreditrecht & Immobiliar-Darlehen",
            content: `
<div class="content-block">
<h4>Verbraucherkreditrecht</h4>
<ul>
<li>Schutzvorschriften für Verbraucher im BGB</li>
<li>Pflichtangaben im Vertrag (Zins, Effektivzins, Laufzeit, Raten, Sicherheiten)</li>
<li>Widerrufsrecht und klare Informationen</li>
</ul>
</div>

<div class="content-block">
<h4>Immobiliar-Verbraucherdarlehensvertrag</h4>
<ul>
<li>Spezielle Anforderungen bei grundpfandrechtlich gesicherten Darlehen</li>
<li><strong>Angemessene Erläuterungen</strong> zur Tragfähigkeit und zu Risiken</li>
<li><strong>Kreditwürdigkeitsprüfung</strong> zwingend vor Abschluss</li>
<li>7-Tage-Bedenkzeit vor Annahme</li>
</ul>
</div>

<div class="important-box">
<div class="label">💡 Prüfungsfokus</div>
<p>Immobiliar-Verbraucherdarlehen unterliegen besonderen Informations- und Beratungspflichten. Ziel: Schutz vor Überschuldung.</p>
</div>`
        },
        {
            id: "2.10",
            title: "Verbraucherschutz & Wettbewerbsrecht",
            content: `
<div class="content-block">
<h4>Verbraucherschutz</h4>
<ul>
<li>Transparente Beratung und Dokumentation</li>
<li>Hinweise auf Risiken und Folgekosten</li>
<li>Schlichtungsstellen/Ombudsmann als außergerichtliche Streitbeilegung</li>
</ul>
</div>

<div class="content-block">
<h4>Wettbewerbsrecht (UWG)</h4>
<ul>
<li><strong>Keine irreführende Werbung</strong> (Zinsen, Kosten, Vorteile müssen stimmen)</li>
<li><strong>Kein Druckverkauf</strong> und keine aggressiven Geschäftspraktiken</li>
<li>Cold Calls nur mit ausdrücklicher Einwilligung</li>
</ul>
</div>`
        },
        {
            id: "2.11",
            title: "Aufsicht, Berufsorganisationen & EU-Binnenmarkt",
            content: `
<div class="content-block">
<h4>Zuständige Stellen</h4>
<ul>
<li><strong>IHK</strong> - Erlaubnis und Register für Vermittler (§34i GewO)</li>
<li><strong>BaFin</strong> - Aufsicht über Banken und Kreditinstitute</li>
</ul>
</div>

<div class="content-block">
<h4>Berufsorganisationen</h4>
<ul>
<li>Berufsverbände (z.B. AfW) unterstützen bei Weiterbildung und Standards</li>
<li>Arbeitnehmervertretungen (z.B. Betriebsrat) bei Beschäftigten</li>
</ul>
</div>

<div class="content-block">
<h4>EU-Binnenmarkt</h4>
<ul>
<li><strong>Dienstleistungsfreiheit</strong> und <strong>Niederlassungsfreiheit</strong></li>
<li>Grenzüberschreitende Tätigkeit mit Anzeige- und Registrierungspflichten</li>
</ul>
</div>`
        }
    ]
},
{
    id: 3,
    title: "3. Finanzierung und Kreditprodukte (110 UE)",
    hours: 110,
    sections: [
        {
            id: "3.0",
            title: "3.0 Markt und wirtschaftliche Grundlagen",
            content: `
<div class="content-block">
<h4>Markt der Immobilien- und Baufinanzierung</h4>
<ul>
<li><strong>Kreditgeber</strong> - Banken, Sparkassen, Bausparkassen, Versicherer</li>
<li><strong>Kreditvermittler</strong> - freie Vermittler, gebundene Vermittler</li>
<li><strong>Immobilienmärkte</strong> - Angebot, Nachfrage, Preisbildung</li>
<li><strong>Kreditmärkte</strong> - Zinsniveau und Konditionen</li>
</ul>
</div>

<div class="content-block">
<h4>Einflussfaktoren auf Zinsen</h4>
<ul>
<li>Geld- und Notenbankpolitik</li>
<li>Konjunkturzyklen und Inflation</li>
<li>Kapitalmarkt und Risikoprämien</li>
</ul>
</div>

<div class="content-block">
<h4>Steuerliche Aspekte (Überblick)</h4>
<ul>
<li>Grunderwerbsteuer</li>
<li>Absetzbarkeit bei Vermietung (Zinsen, Werbungskosten)</li>
<li>Keine steuerliche Absetzbarkeit bei Eigennutzung</li>
</ul>
</div>`
        },
        {
            id: "3.0.1",
            title: "3.1 Finanzierungsanlässe und Finanzierungsbedarf",
            content: `
<div class="content-block">
<h4>Typische Finanzierungsanlässe</h4>
<ul>
<li>Kauf einer Immobilie</li>
<li>Bau oder Neubau</li>
<li>Modernisierung und Sanierung</li>
<li>Umschuldung/Anschlussfinanzierung</li>
</ul>
</div>

<div class="content-block">
<h4>Finanzierungsbedarf - Bestandteile</h4>
<ul>
<li><strong>Direkte Kosten</strong> - Kaufpreis oder Baukosten</li>
<li><strong>Direkte Nebenkosten</strong> - Grunderwerbsteuer, Notar, Grundbuch, Makler</li>
<li><strong>Indirekte Nebenkosten</strong> - Bereitstellungszinsen, Disagio</li>
<li><strong>Eigenmittel</strong> und <strong>Fremdmittel</strong></li>
</ul>
</div>

<div class="important-box">
<div class="label">💡 Praxis</div>
<p>Ein Finanzierungsplan zeigt klar: Kosten, Eigenkapital, Darlehensbedarf und monatliche Rate.</p>
</div>`
        },
        {
            id: "3.1",
            title: "3.2 Kreditprodukte (Darlehensarten)",
            content: `
<div class="def-box">
<div class="term">Annuitätendarlehen</div>
<div class="meaning">Häufigste Form! Rate bleibt konstant (Zins + Tilgung). Tilgungsanteil steigt, Zinsanteil sinkt über die Zeit.</div>
</div>

<div class="example-box">
<div class="label">📌 Rechenbeispiel</div>
<p>Darlehen: 200.000€
Sollzins: 4% p.a.
Anfangstilgung: 2% p.a.

Jahresrate = 200.000 × (4% + 2%) = 12.000€
Monatsrate = 1.000€

Im 1. Jahr: 8.000€ Zinsen, 4.000€ Tilgung
Im 2. Jahr: 7.840€ Zinsen, 4.160€ Tilgung (wegen geringerer Restschuld)</p>
</div>

<div class="formula-box">
<div class="formula">Annuität = Darlehensbetrag × (Zinssatz + Tilgungssatz)</div>
<div class="explanation">Für Monatsrate durch 12 teilen</div>
</div>

<div class="def-box">
<div class="term">Zinszahlungsdarlehen (endfällig)</div>
<div class="meaning">Nur Zinsen werden während der Laufzeit gezahlt, komplette Tilgung am Ende. Oft mit Tilgungsersatz (Lebensversicherung, Bausparvertrag, Fondssparplan).</div>
</div>

<div class="def-box">
<div class="term">Forward-Darlehen</div>
<div class="meaning">Zinssicherung für zukünftige Anschlussfinanzierung (Vorlaufzeit bis 60 Monate). Forward-Aufschlag ca. 0,01-0,03% pro Monat Vorlaufzeit.</div>
</div>

<div class="example-box">
<div class="label">📌 Forward-Darlehen Beispiel</div>
<p>Aktuelle Zinsen: 3,5%
Vorlaufzeit: 24 Monate
Forward-Aufschlag: 0,02% × 24 = 0,48%
Forward-Zins: 3,5% + 0,48% = 3,98%

Lohnt sich, wenn Zinsen voraussichtlich über 3,98% steigen!</p>
</div>

<div class="def-box">
<div class="term">Bauspardarlehen</div>
<div class="meaning">Darlehen aus Bausparvertrag nach Zuteilung. Feste Zinsen für gesamte Laufzeit. Zwei Phasen: Ansparphase und Darlehensphase.</div>
</div>

<div class="content-block">
<h4>Weitere Darlehensarten</h4>
<div class="table-wrapper">
<table>
<tr><th>Art</th><th>Beschreibung</th><th>Besonderheit</th></tr>
<tr><td>Tilgungsdarlehen</td><td>Gleichbleibende Tilgung, sinkende Rate</td><td>Anfangs hohe Belastung</td></tr>
<tr><td>Cap-Darlehen</td><td>Variabler Zins mit Obergrenze</td><td>Schutz vor starken Zinsanstiegen</td></tr>
<tr><td>KfW-Darlehen</td><td>Staatlich gefördert, zinsgünstig</td><td>Antrag über Hausbank</td></tr>
<tr><td>Policendarlehen</td><td>Mit Lebensversicherung als Tilgungsersatz</td><td>Steuerlich relevant</td></tr>
</table>
</div>
</div>`
        },
        {
            id: "3.2",
            title: "3.3 Finanzierungsbedarf & Erwerbsnebenkosten",
            content: `
<div class="content-block">
<h4>Erwerbsnebenkosten (ca. 10-15% des Kaufpreises!)</h4>
<div class="table-wrapper">
<table>
<tr><th>Kostenart</th><th>Höhe</th><th>Bemerkung</th></tr>
<tr><td><strong>Grunderwerbsteuer</strong></td><td>3,5% - 6,5%</td><td>Je nach Bundesland</td></tr>
<tr><td><strong>Notarkosten</strong></td><td>ca. 1,0% - 1,5%</td><td>Inkl. Beurkundung</td></tr>
<tr><td><strong>Grundbuchkosten</strong></td><td>ca. 0,5%</td><td>Eintragung Eigentümer</td></tr>
<tr><td><strong>Maklercourtage</strong></td><td>3% - 7%</td><td>Käufer/Verkäufer teilen</td></tr>
</table>
</div>
</div>

<div class="example-box">
<div class="label">📌 Beispiel Nordrhein-Westfalen</div>
<p>Kaufpreis: 300.000€

Grunderwerbsteuer (6,5%): 19.500€
Notar (1,5%): 4.500€
Grundbuch (0,5%): 1.500€
Makler (3,57% geteilt): 5.355€

<strong>Nebenkosten gesamt: 30.855€</strong> (ca. 10,3%)

<strong>Gesamtaufwand: 330.855€</strong></p>
</div>

<div class="content-block">
<h4>Grunderwerbsteuer nach Bundesländern (Stand 2024)</h4>
<div class="table-wrapper">
<table>
<tr><th>Satz</th><th>Bundesländer</th></tr>
<tr><td>3,5%</td><td>Bayern, Sachsen</td></tr>
<tr><td>5,0%</td><td>Baden-Württemberg, Hamburg, Niedersachsen, Sachsen-Anhalt</td></tr>
<tr><td>6,0%</td><td>Berlin, Bremen, Hessen, Rheinland-Pfalz</td></tr>
<tr><td>6,5%</td><td>Brandenburg, NRW, Saarland, Schleswig-Holstein, Thüringen</td></tr>
</table>
</div>
</div>

<div class="important-box">
<div class="label">💡 Eigenkapital-Empfehlung</div>
<p><strong>Mindestens Nebenkosten aus Eigenkapital!</strong> (10-15% des Kaufpreises)

Besser: 20-30% des Kaufpreises als Eigenkapital

Mehr EK = Bessere Zinsen + Niedrigerer Beleihungsauslauf!</p>
</div>`
        },
        {
            id: "3.3",
            title: "3.8 Kreditsicherheiten: Grundschuld und Hypothek",
            content: `
<div class="def-box">
<div class="term">Grundschuld</div>
<div class="meaning"><strong>Abstrakt</strong> = nicht an bestimmte Forderung gebunden, wiederverwendbar. Standard bei Banken! Bleibt auch nach Tilgung des Darlehens bestehen.</div>
</div>

<div class="def-box">
<div class="term">Hypothek</div>
<div class="meaning"><strong>Akzessorisch</strong> = streng an Forderung gebunden, erlischt automatisch mit vollständiger Tilgung der Schuld. In der Praxis kaum noch verwendet.</div>
</div>

<div class="content-block">
<h4>Vergleich Grundschuld vs. Hypothek</h4>
<div class="table-wrapper">
<table>
<tr><th>Merkmal</th><th>Grundschuld</th><th>Hypothek</th></tr>
<tr><td>Bindung an Forderung</td><td>Nein (abstrakt)</td><td>Ja (akzessorisch)</td></tr>
<tr><td>Wiederverwendbar</td><td>Ja</td><td>Nein</td></tr>
<tr><td>Bei Tilgung</td><td>Bleibt bestehen</td><td>Erlischt automatisch</td></tr>
<tr><td>Übertragung</td><td>Einfach möglich</td><td>Nur mit Forderung</td></tr>
<tr><td>Praxisrelevanz</td><td><strong>Standard (>95%)</strong></td><td>Sehr selten (<5%)</td></tr>
</table>
</div>
</div>

<div class="def-box">
<div class="term">Zweckerklärung (Sicherungszweckerklärung)</div>
<div class="meaning">Vertrag zwischen Bank und Eigentümer: Regelt, welche Forderungen durch die Grundschuld gesichert werden. Nur schuldrechtlich wirksam, nicht im Grundbuch eingetragen.</div>
</div>

<div class="content-block">
<h4>Formen der Grundschuld</h4>
<ul>
<li><strong>Briefgrundschuld</strong> – Mit Grundschuldbrief (häufiger)</li>
<li><strong>Buchgrundschuld</strong> – Ohne Brief, nur Eintragung im Grundbuch</li>
<li><strong>Eigentümergrundschuld</strong> – Grundschuld zugunsten des Eigentümers</li>
<li><strong>Gesamtgrundschuld</strong> – Über mehrere Grundstücke</li>
</ul>
</div>

<div class="example-box">
<div class="label">📌 Kosten Grundschuldbestellung</div>
<p>Grundschuld: 200.000€

Notar: ca. 0,2% = 400€
Grundbuchamt: ca. 0,2% = 400€

<strong>Gesamt: ca. 800€</strong>

Bei Löschung später: nochmals ca. 400€</p>
</div>`
        },
        {
            id: "3.3.1",
            title: "3.8 Weitere Kreditsicherheiten",
            content: `
<div class="content-block">
<h4>Weitere Sicherheiten</h4>
<ul>
<li><strong>Abtretung</strong> von Forderungen (z.B. Gehalt, Mieteinnahmen)</li>
<li><strong>Bürgschaft</strong> (privat oder bankseitig)</li>
<li><strong>Sicherungsübereignung</strong> beweglicher Sachen</li>
<li><strong>Lebensversicherung</strong> als Tilgungsersatz/Sicherheit</li>
</ul>
</div>

<div class="important-box">
<div class="label">💡 Merke</div>
<p>Sicherheiten reduzieren das Risiko der Bank und können Konditionen verbessern.</p>
</div>`
        },
        {
            id: "3.4",
            title: "3.4 Konditionsvergleich & Zinsbindung",
            content: `
<div class="def-box">
<div class="term">Sollzinssatz</div>
<div class="meaning">Reiner Zinssatz ohne Nebenkosten. Wird für die Zinsberechnung verwendet.</div>
</div>

<div class="def-box">
<div class="term">Effektiver Jahreszins</div>
<div class="meaning">Gesamtkosten pro Jahr in %, inkl. Nebenkosten wie Bearbeitungsgebühren (nicht mehr zulässig), Disagio. Ermöglicht Vergleich verschiedener Angebote! Wichtigste Vergleichsgröße.</div>
</div>

<div class="content-block">
<h4>Was gehört zum Effektivzins?</h4>
<ul>
<li>✓ Sollzinssatz</li>
<li>✓ Disagio (Damnum)</li>
<li>✓ Vermittlungsgebühren (wenn verpflichtend)</li>
<li>✓ Kontoführungsgebühren</li>
<li>✗ NICHT: Bereitstellungszinsen</li>
<li>✗ NICHT: Schätzkosten</li>
<li>✗ NICHT: Notar-/Grundbuchkosten</li>
<li>✗ NICHT: Versicherungen</li>
</ul>
</div>

<div class="content-block">
<h4>Zinsbindung</h4>
<div class="table-wrapper">
<table>
<tr><th>Dauer</th><th>Vorteile</th><th>Nachteile</th></tr>
<tr><td><strong>5 Jahre</strong></td><td>Niedrigster Zins, Flexibilität</td><td>Hohes Zinsänderungsrisiko</td></tr>
<tr><td><strong>10 Jahre</strong></td><td>Häufigste Wahl, guter Kompromiss</td><td>Mittleres Risiko</td></tr>
<tr><td><strong>15-20 Jahre</strong></td><td>Planungssicherheit, Schutz vor Zinsanstieg</td><td>Höherer Zins, wenig Flexibilität</td></tr>
<tr><td><strong>Variabel</strong></td><td>Jederzeit kündbar, aktuell niedrig</td><td>Sehr hohes Zinsänderungsrisiko</td></tr>
</table>
</div>
</div>

<div class="important-box">
<div class="label">⚠️ §489 BGB - Sonderkündigungsrecht</div>
<p><strong>Nach 10 Jahren</strong> ab Vollauszahlung kann JEDES Darlehen mit 6 Monaten Kündigungsfrist gekündigt werden - <strong>OHNE Vorfälligkeitsentschädigung!</strong>

Gilt auch bei längerer Zinsbindung (z.B. 15 oder 20 Jahre)!</p>
</div>

<div class="def-box">
<div class="term">Beleihungsauslauf</div>
<div class="meaning">Formel: (Darlehenssumme / Beleihungswert) × 100%

Je niedriger der Beleihungsauslauf, desto besser der Zinssatz!</div>
</div>

<div class="example-box">
<div class="label">📌 Beleihungsauslauf Beispiel</div>
<p>Beleihungswert: 250.000€
Darlehenssumme: 200.000€

Beleihungsauslauf = 200.000 / 250.000 = 80%

<strong>Zinsstaffelung:</strong>
Bis 60% (1a-Hypothek): z.B. 3,5%
60-80% (1b): z.B. 3,7%
Über 80%: z.B. 4,0% oder Ablehnung</p>
</div>

<div class="content-block">
<h4>Tilgungssatz</h4>
<p>Je höher die Anfangstilgung, desto:</p>
<ul>
<li>✓ Kürzer die Laufzeit</li>
<li>✓ Geringer die Gesamtzinskosten</li>
<li>✓ Schneller die Schuldenfreiheit</li>
<li>✗ Höher die monatliche Rate</li>
</ul>
<p><strong>Empfehlung:</strong> Mindestens 2%, besser 3-4% Anfangstilgung in Niedrigzinsphasen!</p>
</div>`
        },
        {
            id: "3.4.1",
            title: "3.5 Zinsrechnung & Finanzierungsplan",
            content: `
<div class="content-block">
<h4>Grundformel Zinsrechnung</h4>
<p><strong>Zinsen = Kapital × Zinssatz × Zeit</strong></p>
</div>

<div class="example-box">
<div class="label">📌 Beispiel</div>
<p>100.000€ Darlehen, 4% p.a., 1 Jahr:<br>
Zinsen = 100.000 × 0,04 × 1 = 4.000€</p>
</div>

<div class="content-block">
<h4>Tilgungsfreie Anlaufjahre</h4>
<ul>
<li>In den ersten Monaten/Jahren nur Zinsen</li>
<li>Reduziert kurzfristig die Rate</li>
<li>Erhöht langfristig die Gesamtkosten</li>
</ul>
</div>

<div class="content-block">
<h4>Finanzierungsplan</h4>
<ul>
<li>Gesamtkosten des Vorhabens</li>
<li>Eigenkapitalanteil</li>
<li>Darlehensbedarf und Rate</li>
<li>Reserve für Unvorhergesehenes</li>
</ul>
</div>`
        },
        {
            id: "3.5",
            title: "3.7 Kreditwürdigkeitsprüfung",
            content: `
<div class="content-block">
<h4>Die drei Säulen der Kreditprüfung</h4>
<ul>
<li><strong>1. Kreditfähigkeit</strong> – Geschäftsfähigkeit (mindestens 18 Jahre)</li>
<li><strong>2. Persönliche Kreditwürdigkeit</strong> – Schufa-Score, Zahlungshistorie, Zuverlässigkeit</li>
<li><strong>3. Materielle Kreditwürdigkeit</strong> – Einkommen, Vermögen, Haushaltsrechnung</li>
</ul>
</div>

<div class="def-box">
<div class="term">Haushaltsrechnung</div>
<div class="meaning">Gegenüberstellung von Einnahmen und Ausgaben.

Formel: Einnahmen - Ausgaben = Frei verfügbares Einkommen

Dieses muss ausreichen für: Kreditrate + Sicherheitspuffer (ca. 20-30%)</div>
</div>

<div class="example-box">
<div class="label">📌 Haushaltsrechnung Beispiel</div>
<p><strong>Einnahmen (Netto):</strong>
Gehalt Ehemann: 3.000€
Gehalt Ehefrau: 2.000€
Kindergeld (2 Kinder): 500€
<strong>Summe: 5.500€</strong>

<strong>Ausgaben:</strong>
Miete/Warmmiete: 0€ (Eigentum)
Lebenshaltung (4 Pers.): 1.200€
Auto, Versicherungen: 500€
Strom, Telefon: 200€
Sonstiges: 300€
<strong>Summe: 2.200€</strong>

<strong>Frei verfügbar: 3.300€</strong>

Mögliche Rate (mit Puffer): ca. 2.500€/Monat</p>
</div>

<div class="content-block">
<h4>Schufa-Auskunft</h4>
<p>Die Schufa speichert:</p>
<ul>
<li>Laufende Kredite und Kreditkarten</li>
<li>Konten und Girokonten</li>
<li>Zahlungsstörungen (Mahnungen, Inkasso)</li>
<li>Insolvenzverfahren</li>
<li>Eidesstattliche Versicherungen</li>
</ul>
<p><strong>Schufa-Score:</strong> 0-100, je höher desto besser. Ab ca. 97,5% = sehr gut</p>
</div>

<div class="important-box">
<div class="label">⚠️ Gesetzliche Pflicht</div>
<p>Nach §505a BGB und §18a KWG <strong>MUSS</strong> die Bank die Kreditwürdigkeit prüfen!

Bei negativer Prognose: Darlehen muss abgelehnt werden (Schutz vor Überschuldung).</p>
</div>`
        },
        {
            id: "3.6.1",
            title: "3.6 Finanzierungsantrag & Auszahlungsvoraussetzungen",
            content: `
<div class="content-block">
<h4>Finanzierungsantrag</h4>
<ul>
<li>Finanzierungsplan und Haushaltsrechnung</li>
<li>Objektunterlagen (Exposé, Grundbuch, Lageplan)</li>
<li>Einkommens- und Vermögensnachweise</li>
</ul>
</div>

<div class="content-block">
<h4>Auszahlungsvoraussetzungen</h4>
<ul>
<li>Auflassungsvormerkung eingetragen</li>
<li>Lastenfreistellung geklärt</li>
<li>Versicherungsnachweise (z.B. Gebäudeversicherung)</li>
<li>Bei Neubau: Baugenehmigung, Baufortschritt</li>
</ul>
</div>`
        },
        {
            id: "3.6",
            title: "3.9 Beleihungsprüfung / Wertermittlung",
            content: `
<div class="def-box">
<div class="term">Verkehrswert</div>
<div class="meaning">Marktwert der Immobilie. Preis, der im gewöhnlichen Geschäftsverkehr erzielt werden kann.</div>
</div>

<div class="def-box">
<div class="term">Beleihungswert</div>
<div class="meaning">Wert, den die Bank für die Kreditvergabe ansetzt. Vorsichtige Schätzung, meist 10-20% unter Verkehrswert. Langfristig nachhaltig erzielbarer Wert.</div>
</div>

<div class="content-block">
<h4>Wertermittlungsverfahren</h4>
<div class="table-wrapper">
<table>
<tr><th>Verfahren</th><th>Anwendung</th><th>Methode</th></tr>
<tr><td><strong>Vergleichswert</strong></td><td>ETW, Reihenhäuser</td><td>Vergleich mit ähnlichen verkauften Objekten</td></tr>
<tr><td><strong>Sachwert</strong></td><td>Eigengenutzte EFH</td><td>Bodenwert + Gebäudewert (Herstellungskosten - Alter)</td></tr>
<tr><td><strong>Ertragswert</strong></td><td>Vermietete Objekte</td><td>Kapitalisierte Mieteinnahmen</td></tr>
</table>
</div>
</div>

<div class="content-block">
<h4>Beleihungsgrenzen</h4>
<ul>
<li><strong>1a-Darlehen:</strong> Bis 60% des Beleihungswerts - beste Konditionen, niedrigstes Risiko</li>
<li><strong>1b-Darlehen:</strong> 60-80% - etwas höherer Zins, mittleres Risiko</li>
<li><strong>Darüber:</strong> 80-100% - nur bei sehr guter Bonität, deutlich höherer Zins oder Ablehnung</li>
</ul>
</div>

<div class="example-box">
<div class="label">📌 Wertermittlung Beispiel</div>
<p>Eigengenutzte Eigentumswohnung:

<strong>Verkehrswert:</strong> 300.000€
(laut Gutachter/Vergleichswertverfahren)

<strong>Beleihungswert:</strong> 260.000€
(ca. 87% vom Verkehrswert, Sicherheitsabschlag)

<strong>Finanzierung:</strong>
Kaufpreis + Nebenkosten: 330.000€
Eigenkapital: 80.000€
Darlehensbedarf: 250.000€

<strong>Beleihungsauslauf:</strong>
250.000 / 260.000 = 96%
→ Über 80%, schlechtere Konditionen oder Ablehnung</p>
</div>`
        },
        {
            id: "3.7",
            title: "3.11 Risiken der Finanzierung",
            content: `
<div class="content-block">
<h4>1. Zinsänderungsrisiko</h4>
<p>Risiko steigender Zinsen nach Ablauf der Zinsbindung.</p>
</div>

<div class="example-box">
<div class="label">📌 Zinsänderungsrisiko Beispiel</div>
<p><strong>Ursprüngliche Finanzierung:</strong>
Darlehenssumme: 250.000€
Zinssatz: 2,0%
Tilgung: 2,0%
Monatsrate: 833€

Nach 10 Jahren:
Restschuld: ca. 180.000€
<strong>Neuer Zinssatz: 5,0%</strong>
Tilgung: 2,0%
<strong>Neue Monatsrate: 1.050€</strong>

<strong>Mehrbelastung: +217€/Monat (+26%!)</strong></p>
</div>

<div class="content-block">
<h4>2. Lebensrisiken (Persönliche Risiken)</h4>
<ul>
<li><strong>Arbeitslosigkeit / Verdienstausfall</strong> – Keine Raten mehr zahlbar</li>
<li><strong>Krankheit / Berufsunfähigkeit</strong> – Einkommensausfall</li>
<li><strong>Tod des Hauptverdieners</strong> – Familie kann Raten nicht zahlen</li>
<li><strong>Scheidung</strong> – Streit um Immobilie, wer zahlt?</li>
<li><strong>Unerwartete Renovierungen</strong> – Zusätzliche Kosten (Dach, Heizung)</li>
</ul>
</div>

<div class="content-block">
<h4>3. Objektrisiken</h4>
<ul>
<li>Baumängel, versteckte Schäden</li>
<li>Wertverlust der Immobilie</li>
<li>Änderung der Lage (Verkehrsanbindung, Nachbarschaft)</li>
<li>Elementarschäden (Hochwasser, Sturm)</li>
</ul>
</div>

<div class="content-block">
<h4>Absicherungsmöglichkeiten</h4>
<div class="table-wrapper">
<table>
<tr><th>Risiko</th><th>Absicherung</th></tr>
<tr><td>Tod</td><td>Risikolebensversicherung (Höhe = Darlehenssumme)</td></tr>
<tr><td>Berufsunfähigkeit</td><td>Berufsunfähigkeitsversicherung (Rente = Kreditrate)</td></tr>
<tr><td>Arbeitslosigkeit</td><td>Arbeitslosenversicherung (selten), Rücklagen</td></tr>
<tr><td>Zinsanstieg</td><td>Lange Zinsbindung (15-20 Jahre), Forward-Darlehen</td></tr>
<tr><td>Schnelle Tilgung</td><td>Hohe Anfangstilgung (3-4%), Sondertilgungen</td></tr>
<tr><td>Gebäudeschäden</td><td>Wohngebäudeversicherung, Elementarversicherung</td></tr>
</table>
</div>
</div>

<div class="important-box">
<div class="label">💡 Goldene Regel</div>
<p><strong>Finanzierung muss auch in schlechten Zeiten tragbar sein!</strong>

Sicherheitspuffer einplanen:
• Liquiditätsreserve (3-6 Monatsgehälter)
• Instandhaltungsrückstellung (1% Immobilienwert/Jahr)
• Rate max. 40% des Nettohaushaltseinkommens</p>
</div>`
        },
        {
            id: "3.8",
            title: "3.12 Beendigung und Staatliche Förderungen",
            content: `
<div class="def-box">
<div class="term">Vorfälligkeitsentschädigung (VFE)</div>
<div class="meaning">Entschädigung an Bank bei vorzeitiger Rückzahlung vor Ende der Zinsbindung. Ausgleich für entgangene Zinsen.</div>
</div>

<div class="content-block">
<h4>Berechnung der VFE (vereinfacht)</h4>
<p>Bank vergleicht:</p>
<ul>
<li>Zinsen, die sie noch bekommen hätte</li>
<li>Zinsen, die sie bei Wiederanlage bekommt</li>
<li>Differenz = VFE (kann mehrere tausend Euro betragen!)</li>
</ul>
</div>

<div class="content-block">
<h4>Wann KEINE VFE?</h4>
<ul>
<li>✓ Kündigung nach 10 Jahren (§489 BGB)</li>
<li>✓ Bei variablem Zinssatz (3 Monate Kündigungsfrist)</li>
<li>✓ Bei fehlerhafter Widerrufsbelehrung</li>
<li>✓ Bei Verkauf der Immobilie in Ausnahmefällen (berechtigtes Interesse)</li>
<li>✗ Ansonsten: VFE fällig!</li>
</ul>
</div>

<div class="content-block">
<h4>Prolongation vs. Umschuldung</h4>
<div class="table-wrapper">
<table>
<tr><th>Merkmal</th><th>Prolongation</th><th>Umschuldung</th></tr>
<tr><td><strong>Definition</strong></td><td>Verlängerung bei gleicher Bank</td><td>Wechsel zu anderer Bank</td></tr>
<tr><td><strong>Aufwand</strong></td><td>Gering, keine neuen Unterlagen</td><td>Hoch, wie neue Finanzierung</td></tr>
<tr><td><strong>Kosten</strong></td><td>Keine</td><td>Grundbuchkosten (ca. 0,2%)</td></tr>
<tr><td><strong>Kondition</strong></td><td>Evtl. schlechter (Hausbank-Bonus weg)</td><td>Oft bessere Konditionen</td></tr>
<tr><td><strong>Zeitaufwand</strong></td><td>1-2 Wochen</td><td>4-8 Wochen</td></tr>
</table>
</div>
</div>

<div class="important-box">
<div class="label">💡 Tipp</div>
<p><strong>6-12 Monate vor Ablauf der Zinsbindung:</strong>

• Angebote von mindestens 3 Banken einholen
• Prolongationsangebot der Hausbank prüfen
• Vergleichen und verhandeln
• Umschuldung lohnt meist ab 0,2% Zinsvorteil</p>
</div>

<div class="content-block">
<h4>Staatliche Förderungen</h4>
<div class="table-wrapper">
<table>
<tr><th>Förderung</th><th>Wer?</th><th>Was?</th></tr>
<tr><td><strong>KfW 124</strong></td><td>Alle</td><td>Wohneigentum, bis 100.000€, zinsgünstig</td></tr>
<tr><td><strong>KfW 261</strong></td><td>Alle</td><td>Energieeffizient bauen, bis 150.000€ + Zuschuss</td></tr>
<tr><td><strong>Wohn-Riester</strong></td><td>Riester-Berechtigte</td><td>175€ Grundzulage/Jahr + Kinderzulage</td></tr>
<tr><td><strong>Wohnungsbauprämie</strong></td><td>Bis 35.000€ EK</td><td>10% auf max. 700€/Jahr (ledig)</td></tr>
<tr><td><strong>VL-Bausparen</strong></td><td>Arbeitnehmer</td><td>9% Zulag auf vermögenswirksame Leistungen</td></tr>
</table>
</div>
</div>

<div class="important-box">
<div class="label">⚠️ KfW-Antrag</div>
<p><strong>VOR Beginn des Vorhabens beantragen!</strong>

• Antrag über Hausbank
• Bank leitet durch (durchleitendes Institut)
• KfW prüft und bewilligt
• Auszahlung über Hausbank
• KfW haftet, nicht Hausbank</p>
</div>`
        },
        {
            id: "3.10",
            title: "3.10 Koppelungsgeschäfte und Nebenleistungen",
            content: `
<div class="content-block">
<h4>Koppelungsgeschäfte</h4>
<ul>
<li>Verknüpfung von Darlehen mit Nebenprodukten (z.B. Versicherung)</li>
<li>Nur zulässig, wenn transparent und im Kundeninteresse</li>
<li>Unzulässig, wenn Darlehen nur bei Abschluss eines anderen Produkts gewährt wird</li>
</ul>
</div>

<div class="important-box">
<div class="label">⚠️ Merke</div>
<p>Nebenleistungen müssen klar ausgewiesen und getrennt bewertbar sein.</p>
</div>`
        }
    ]
},
{
    id: 4,
    title: "4. Immobilienpraxis & Finanzierung (50 UE)",
    hours: 50,
    sections: [
        {
            id: "4.1",
            title: "Kaufprozess & Notarablauf",
            content: `
<div class="content-block">
<h4>Typischer Ablauf beim Immobilienkauf</h4>
<ol>
<li><strong>Objektprüfung</strong> - Exposé, Grundbuch, Lage, Zustand</li>
<li><strong>Finanzierungsprüfung</strong> - Haushaltsrechnung, Bankzusage</li>
<li><strong>Notartermin</strong> - Kaufvertrag wird beurkundet (§311b BGB)</li>
<li><strong>Auflassungsvormerkung</strong> - Sicherung des Käufers in Abt. II</li>
<li><strong>Kaufpreisfälligkeit</strong> - Wenn alle Voraussetzungen erfüllt sind</li>
<li><strong>Übergang Nutzen/Lasten</strong> - Meist bei Kaufpreiszahlung</li>
<li><strong>Eigentumsumschreibung</strong> - Eintragung in Abt. I</li>
</ol>
</div>

<div class="important-box">
<div class="label">⚠️ Prüfungsfokus</div>
<p>Ohne notarielle Beurkundung ist der Grundstückskaufvertrag <strong>nichtig</strong>. Die Auflassungsvormerkung schützt den Käufer vor Zwischenverfügungen.</p>
</div>
`
        },
        {
            id: "4.2",
            title: "WEG, Teilungserklärung & Sondereigentum",
            content: `
<div class="def-box">
<div class="term">Wohnungseigentum (WEG)</div>
<div class="meaning">Sondereigentum an einer Wohnung + Miteigentumsanteil am Gemeinschaftseigentum.</div>
</div>

<div class="content-block">
<h4>Wichtige Begriffe</h4>
<ul>
<li><strong>Sondereigentum</strong> - Wohnung, ggf. Keller/PKW-Stellplatz</li>
<li><strong>Gemeinschaftseigentum</strong> - Dach, Fassade, Treppenhaus, Tragwerk</li>
<li><strong>Sondernutzungsrecht</strong> - Exklusives Nutzungsrecht (z.B. Garten)</li>
<li><strong>Teilungserklärung</strong> - Regelt Aufteilung und Nutzungsrechte</li>
<li><strong>Hausgeld</strong> - Monatliche Vorauszahlung für Betriebskosten</li>
<li><strong>Instandhaltungsrücklage</strong> - Reserve für Reparaturen</li>
</ul>
</div>

<div class="important-box">
<div class="label">💡 Merksatz</div>
<p>WEG = <strong>Wohnung</strong> + <strong>Anteil am Gemeinschaftseigentum</strong>. Die Teilungserklärung ist die "Verfassung" der Eigentümergemeinschaft.</p>
</div>
`
        },
        {
            id: "4.3",
            title: "Sicherheiten & Grundpfandrechte (Vertiefung)",
            content: `
<div class="content-block">
<h4>Grundpfandrechte in der Praxis</h4>
<ul>
<li><strong>Briefgrundschuld</strong> - Übertragung durch Brief + Abtretung</li>
<li><strong>Buchgrundschuld</strong> - Nur durch Grundbucheintragung</li>
<li><strong>Eigentümergrundschuld</strong> - Nach Tilgung möglich</li>
</ul>
</div>

<div class="content-block">
<h4>Sicherungsabrede (Zweckerklärung)</h4>
<p>Regelt, <strong>welche Forderungen</strong> durch die Grundschuld gesichert werden. Nur schuldrechtlich zwischen Bank und Eigentümer.</p>
</div>

<div class="content-block">
<h4>Rangrücktritt & Rangänderung</h4>
<ul>
<li><strong>Rangrücktritt</strong> - Bessere Rangstelle für neue Bank</li>
<li><strong>Rangänderung</strong> - Änderung der Rangfolge im Grundbuch</li>
<li><strong>Wichtig</strong> - Bestimmt die Reihenfolge der Befriedigung im Verwertungsfall</li>
</ul>
</div>
`
        },
        {
            id: "4.4",
            title: "Unterlagen für die Baufinanzierung",
            content: `
<div class="content-block">
<h4>Typische Unterlagen (Auswahl)</h4>
<ul>
<li><strong>Persönliche Daten</strong> - Ausweis, Selbstauskunft</li>
<li><strong>Einkommen</strong> - Gehaltsnachweise, Steuerbescheide</li>
<li><strong>Objekt</strong> - Exposé, Grundbuchauszug, Lageplan</li>
<li><strong>Bei Neubau</strong> - Baupläne, Baubeschreibung, Kostenaufstellung</li>
<li><strong>Absicherung</strong> - Versicherungsnachweise (z.B. Gebäudeversicherung)</li>
</ul>
</div>

<div class="important-box">
<div class="label">⚠️ Prüfungsrelevant</div>
<p>Die Bank prüft <strong>Kreditwürdigkeit</strong> und <strong>Werthaltigkeit</strong> der Sicherheit. Vollständige Unterlagen beschleunigen die Zusage.</p>
</div>
`
        },
        {
            id: "4.5",
            title: "Haushaltsrechnung & Kapitaldienstfähigkeit",
            content: `
<div class="content-block">
<h4>Grundformel</h4>
<p><strong>Einnahmen - Ausgaben = frei verfügbarer Betrag</strong></p>
</div>

<div class="content-block">
<h4>Praxis-Tipps</h4>
<ul>
<li>Lebenshaltungskosten realistisch ansetzen</li>
<li>Sicherheitszuschlag von 20-30% einplanen</li>
<li>Rücklagen für Instandhaltung berücksichtigen</li>
<li>Kapitaldienst darf das Budget nicht überlasten</li>
</ul>
</div>

<div class="example-box">
<div class="label">📌 Beispiel</div>
<p>Einnahmen 3.500€ - Ausgaben 2.000€ = 1.500€ frei.  
Davon max. 40% für die Rate -> 600€.</p>
</div>
`
        }
    ]
}
],

// Fortsetzung folgt im nächsten Teil...

// ========================================
// QUIZ-FRAGEN (Erweitert auf 80+ Fragen)
// Alle prüfungsrelevant nach DIHK-Rahmenplan
// ========================================
quiz: [
    // Rechtliche Grundlagen
    {cat:"Recht",q:"Ab welchem Alter ist man voll geschäftsfähig?",a:["16 Jahre","18 Jahre","21 Jahre","14 Jahre"],c:1,e:"Volle Geschäftsfähigkeit ab 18 Jahren (§2 BGB). Unter 7: geschäftsunfähig, 7-17: beschränkt geschäftsfähig."},
    {cat:"Recht",q:"In welcher Abteilung des Grundbuchs stehen Grundschulden?",a:["Abteilung I","Abteilung II","Abteilung III","Bestandsverzeichnis"],c:2,e:"Abteilung III enthält Grundpfandrechte (Hypotheken und Grundschulden). Abt. I = Eigentümer, Abt. II = Lasten/Beschränkungen."},
    {cat:"Recht",q:"Was bedeutet der 'öffentliche Glaube' des Grundbuchs?",a:["Das Grundbuch ist öffentlich einsehbar","Man darf auf die Richtigkeit der Eintragungen vertrauen","Nur Behörden dürfen eintragen","Das Grundbuch wird von der Kirche geführt"],c:1,e:"§892 BGB: Gutgläubiger Erwerber wird geschützt, selbst wenn die Eintragung falsch war. Man darf auf die Richtigkeit vertrauen."},
    {cat:"Recht",q:"Was ist KEINE Voraussetzung für die Erlaubnis nach §34i GewO?",a:["Sachkundenachweis","Berufshaftpflichtversicherung","5 Jahre Berufserfahrung","Geordnete Vermögensverhältnisse"],c:2,e:"Berufserfahrung ist KEINE Voraussetzung. Nötig sind: Sachkunde, Berufshaftpflicht (mind. 460.000€), geordnete Vermögensverhältnisse, persönliche Zuverlässigkeit."},
    {cat:"Recht",q:"Wie lange ist die Widerrufsfrist bei Immobiliardarlehen?",a:["7 Tage","14 Tage","30 Tage","Es gibt kein Widerrufsrecht"],c:1,e:"14 Tage ab Vertragsschluss UND ordnungsgemäßer Widerrufsbelehrung (§495 BGB). Bei fehlerhafter Belehrung läuft die Frist nicht!"},
    {cat:"Recht",q:"Was regelt das Geldwäschegesetz (GwG)?",a:["Die Höhe der Provision","Identifizierungs- und Sorgfaltspflichten","Die Zinsobergrenze","Die Ausbildungsinhalte"],c:1,e:"GwG verpflichtet zur Kundenidentifizierung (Ausweiskontrolle) und Sorgfaltspflichten gegen Geldwäsche und Terrorismusfinanzierung."},
    {cat:"Recht",q:"Ein Grundstückskaufvertrag ohne Notar ist...",a:["Gültig mit Zustimmung beider Parteien","Nichtig","Schwebend unwirksam","Anfechtbar"],c:1,e:"Grundstückskaufverträge bedürfen der notariellen Beurkundung (§311b BGB). Ohne Notar: nichtig, also von Anfang an unwirksam."},
    {cat:"Recht",q:"Was enthält Abteilung II des Grundbuchs?",a:["Eigentümer","Lasten und Beschränkungen","Grundpfandrechte","Flurstücksnummer"],c:1,e:"Abteilung II: Lasten und Beschränkungen wie Wegerechte, Wohnrechte, Nießbrauch, Vormerkungen, Verfügungsbeschränkungen."},
    {cat:"Recht",q:"Wie hoch muss die Berufshaftpflicht nach §34i GewO mindestens sein?",a:["100.000€ je Schadensfall","250.000€ je Schadensfall","460.000€ je Schadensfall","1.000.000€ je Schadensfall"],c:2,e:"Mindestens 460.000€ je Schadensfall, 750.000€ für alle Schadensfälle eines Jahres (§34i Abs. 2 GewO)."},
    {cat:"Recht",q:"Welches Recht steht in Abteilung III des Grundbuchs?",a:["Wegerecht","Nießbrauch","Grundschuld","Vorkaufsrecht"],c:2,e:"Abteilung III: Grundpfandrechte (Hypotheken und Grundschulden). Wegerecht, Nießbrauch und Vorkaufsrecht stehen in Abteilung II."},
    
    // Finanzierung und Produkte
    {cat:"Finanzierung",q:"Was ist ein Annuitätendarlehen?",a:["Darlehen mit jährlich steigenden Raten","Darlehen mit gleichbleibender Rate aus Zins und Tilgung","Darlehen ohne Tilgung","Darlehen nur für Gewerbetreibende"],c:1,e:"Bei Annuitätendarlehen bleibt die Rate (Annuität) konstant. Der Tilgungsanteil steigt, der Zinsanteil sinkt im Zeitverlauf."},
    {cat:"Finanzierung",q:"Was ist ein Forward-Darlehen?",a:["Darlehen ohne Zinsen","Zinssicherung für künftige Anschlussfinanzierung","Darlehen nur für Neubau","Darlehen mit täglicher Zinsanpassung"],c:1,e:"Forward-Darlehen sichert heute die Zinsen für eine Anschlussfinanzierung in bis zu 60 Monaten. Forward-Aufschlag: ca. 0,01-0,03% pro Monat."},
    {cat:"Finanzierung",q:"Hauptunterschied zwischen Grundschuld und Hypothek?",a:["Kein Unterschied","Grundschuld ist nicht an die Forderung gebunden","Hypothek ist flexibler","Grundschuld gibt es nur in Bayern"],c:1,e:"Grundschuld ist abstrakt (nicht an Forderung gebunden), wiederverwendbar. Hypothek ist akzessorisch (streng an Forderung gebunden), erlischt mit Schuld."},
    {cat:"Finanzierung",q:"Was ist der Beleihungsauslauf?",a:["Die Zeit bis zur Auszahlung","Das Verhältnis Darlehen zu Beleihungswert in %","Die Darlehenslaufzeit","Die monatliche Rate"],c:1,e:"Beleihungsauslauf = (Darlehenssumme / Beleihungswert) × 100%. Je niedriger, desto bessere Konditionen. Bis 60% = 1a-Hypothek."},
    {cat:"Finanzierung",q:"Nach wie vielen Jahren besteht ein Kündigungsrecht nach §489 BGB?",a:["5 Jahre","10 Jahre","15 Jahre","Es besteht nie ein Kündigungsrecht"],c:1,e:"Nach 10 Jahren ab Vollauszahlung kann JEDES Darlehen mit 6 Monaten Frist gekündigt werden - OHNE Vorfälligkeitsentschädigung (§489 BGB)!"},
    {cat:"Finanzierung",q:"Was ist eine Vorfälligkeitsentschädigung?",a:["Eine Belohnung für schnelle Tilgung","Entschädigung an Bank bei vorzeitiger Rückzahlung","Die erste Rate des Darlehens","Ein Rabatt für Neukunden"],c:1,e:"Entschädigung an die Bank für entgangene Zinsen bei vorzeitiger vollständiger Rückzahlung vor Ende der Zinsbindung."},
    {cat:"Finanzierung",q:"Welches Wertermittlungsverfahren bei vermieteten Objekten?",a:["Vergleichswertverfahren","Sachwertverfahren","Ertragswertverfahren","Indexverfahren"],c:2,e:"Ertragswertverfahren bei vermieteten Objekten, da die Mieteinnahmen im Vordergrund stehen. Kapitalisierung der Mieten über Laufzeit."},
    {cat:"Finanzierung",q:"Was gehört zu den Erwerbsnebenkosten beim Immobilienkauf?",a:["Nur der Kaufpreis","Grunderwerbsteuer, Notar, Grundbuch, Makler","Nur die Grunderwerbsteuer","Es fallen keine Nebenkosten an"],c:1,e:"Nebenkosten ca. 10-15%: Grunderwerbsteuer (3,5-6,5%), Notar (1-1,5%), Grundbuchkosten (0,5%), ggf. Maklercourtage (3-7%, geteilt)."},
    {cat:"Finanzierung",q:"Was ist der effektive Jahreszins?",a:["Der tägliche Zinssatz","Die Gesamtkosten pro Jahr in Prozent","Der reine Sollzins","Der Zinssatz nach Steuern"],c:1,e:"Effektivzins enthält Sollzins + Nebenkosten (z.B. Disagio, Gebühren). Wichtigste Vergleichsgröße! NICHT enthalten: Bereitstellungszinsen, Notar, Schätzkosten."},
    {cat:"Finanzierung",q:"Was prüft die Kreditwürdigkeitsprüfung?",a:["Nur das Einkommen","Kreditfähigkeit, persönliche und materielle Würdigkeit","Nur die Schufa","Nur den Immobilienwert"],c:1,e:"Geprüft werden: 1. Kreditfähigkeit (Geschäftsfähigkeit), 2. Persönliche Würdigkeit (Schufa, Zuverlässigkeit), 3. Materielle Würdigkeit (Einkommen, Haushaltsrechnung)."},
    {cat:"Finanzierung",q:"Was ist ein 1a-Darlehen?",a:["Das erste Darlehen eines Kunden","Beleihung bis 60% des Beleihungswerts","Darlehen nur für Neubau","Darlehen mit kürzester Laufzeit"],c:1,e:"1a-Darlehen = Beleihung bis 60% des Beleihungswerts. Niedrigstes Risiko für die Bank, daher beste Zinsen und Konditionen."},
    
    // Kundenberatung
    {cat:"Beratung",q:"Was ist die Kernaufgabe der Finanzierungsberatung?",a:["Möglichst viele Verträge abschließen","Schutz des Kunden vor Überschuldung","Schnelle Abwicklung","Verkauf von Zusatzprodukten"],c:1,e:"Die Finanzierungsberatung dient dem Schutz des Kunden vor Überschuldung! Tragfähigkeit der Finanzierung muss geprüft werden (§511 BGB)."},
    {cat:"Beratung",q:"Was ist 'aktives Zuhören'?",a:["Besonders laut zuhören","Durch Nachfragen zeigen, dass man verstanden hat","Den Kunden unterbrechen","Alles mitschreiben"],c:1,e:"Aktives Zuhören: Gesprächstechnik durch Nachfragen, Zusammenfassen und Bestätigen Verständnis zeigen. Wichtig für Vertrauensaufbau!"},
    {cat:"Beratung",q:"Sind Cold Calls (unaufgeforderte Werbeanrufe) erlaubt?",a:["Ja, immer erlaubt","Nein, nur mit vorheriger Einwilligung","Nur an Werktagen","Einmal pro Monat erlaubt"],c:1,e:"Cold Calls sind bei Verbrauchern VERBOTEN! Werbeanrufe nur mit vorheriger ausdrücklicher Einwilligung des Kunden (UWG). Bußgeld bis 300.000€!"},
    {cat:"Beratung",q:"Was ist das ESIS-Merkblatt?",a:["Ein Werbeflyer","Ein standardisiertes Informationsblatt zum Darlehen","Der Vertragsentwurf","Die Schufa-Auskunft"],c:1,e:"ESIS = Europäisches Standardisiertes Informationsblatt. Muss VOR Vertragsschluss übergeben werden. Enthält: Zinsen, Raten, Gesamtkosten, Widerrufsrecht (Art. 247 §13 EGBGB)."},
    
    // Weitere Finanzierungsfragen
    {cat:"Finanzierung",q:"Was ist ein Zinszahlungsdarlehen?",a:["Darlehen mit steigenden Zinsen","Nur Zinsen während Laufzeit, Tilgung am Ende (endfällig)","Darlehen ohne Zinsen","Darlehen mit täglicher Tilgung"],c:1,e:"Endfälliges Darlehen: Nur Zinsen werden gezahlt, Tilgung erfolgt komplett am Ende (oft mit Tilgungsersatz wie LV oder Bausparvertrag)."},
    {cat:"Finanzierung",q:"Welche staatlichen Förderungen gibt es für Wohneigentum?",a:["Nur Steuererleichterungen","KfW-Darlehen, Wohnungsbauprämie, Wohn-Riester","Nur Baukindergeld","Keine Förderungen"],c:1,e:"KfW-Darlehen (zinsgünstig), Wohnungsbauprämie (10% auf max. 700€/Jahr), Wohn-Riester (175€ Grundzulage + Kinderzulagen), VL-Zuschuss (9%)."},
    {cat:"Finanzierung",q:"Was bedeutet Prolongation?",a:["Vorzeitige Kündigung des Darlehens","Verlängerung der Finanzierung bei gleicher Bank","Umschuldung zu anderer Bank","Erhöhung der Tilgung"],c:1,e:"Prolongation = Verlängerung des auslaufenden Darlehens bei derselben Bank. Meist einfacher, aber ggf. schlechtere Konditionen als bei Umschuldung."},
    {cat:"Finanzierung",q:"Was ist eine Haushaltsrechnung?",a:["Die Stromrechnung","Gegenüberstellung von Einnahmen und Ausgaben","Die Grundsteuer","Die Nebenkostenabrechnung"],c:1,e:"Haushaltsrechnung: Einnahmen - Ausgaben = Frei verfügbares Einkommen. Prüft, ob die Kreditrate dauerhaft tragbar ist (Kapitaldienstfähigkeit)."},
    
    // Erweiterte Rechtsfragen
    {cat:"Recht",q:"Wann beginnt die Widerrufsfrist NICHT zu laufen?",a:["Nach 7 Tagen automatisch","Bei fehlerhafter oder fehlender Widerrufsbelehrung","Nach der Unterschrift","Bei Online-Abschluss"],c:1,e:"Bei fehlerhafter oder fehlender Widerrufsbelehrung beginnt die 14-Tage-Frist nicht! Maximale Widerrufsfrist dann: 12 Monate + 14 Tage."},
    {cat:"Recht",q:"Wer führt das Grundbuch in Deutschland?",a:["Der Notar","Das Amtsgericht (Grundbuchamt)","Das Finanzamt","Die Bank"],c:1,e:"Das Grundbuch wird beim zuständigen Amtsgericht (Grundbuchamt) geführt. Öffentliches Register für alle Grundstücke."},
    {cat:"Recht",q:"Was muss in die ESIS-Informationen VOR Vertragsschluss?",a:["Nur der Zinssatz","Zinsen, Raten, Gesamtkosten, Widerrufsrecht, Folgen bei Zahlungsverzug","Nur die Vertragslaufzeit","Nur die Bankverbindung"],c:1,e:"ESIS muss enthalten: Zinsen (Soll- und Effektivzins), Raten, Gesamtkosten, Widerrufsrecht, Vertragslaufzeit, Folgen bei Zahlungsverzug (Art. 247 §13 EGBGB)."},
    {cat:"Recht",q:"Wie lange müssen Beratungsdokumentationen aufbewahrt werden?",a:["1 Jahr","3 Jahre","5 Jahre","10 Jahre"],c:2,e:"Beratungsdokumentationen müssen mindestens 5 Jahre aufbewahrt werden (§511 Abs. 2 BGB). Beweislast liegt beim Vermittler!"},
    {cat:"Recht",q:"Ab welchem Betrag muss bei Geldwäscheverdacht identifiziert werden?",a:["5.000€","10.000€","15.000€","Unabhängig vom Betrag bei Verdacht"],c:3,e:"Bei Verdacht auf Geldwäsche muss IMMER identifiziert werden, unabhängig vom Betrag! Bei Geschäftsbeziehung grundsätzlich, bei Transaktion ab 15.000€."},
    
    // Praxis-Fragen Finanzierung
    {cat:"Finanzierung",q:"Was passiert mit dem Tilgungsanteil bei einem Annuitätendarlehen im Zeitverlauf?",a:["Bleibt konstant","Steigt kontinuierlich","Sinkt kontinuierlich","Schwankt zufällig"],c:1,e:"Der Tilgungsanteil steigt kontinuierlich, weil bei gleicher Rate und sinkender Restschuld weniger Zinsen anfallen. Mehr Geld geht in die Tilgung."},
    {cat:"Finanzierung",q:"Welche Mindest-Anfangstilgung wird in Niedrigzinsphasen empfohlen?",a:["1%","2-3%","5%","10%"],c:1,e:"In Niedrigzinsphasen wird mindestens 2%, besser 3-4% Anfangstilgung empfohlen. Sonst dauert die Entschuldung sehr lange (bei 1% ca. 50+ Jahre!)."},
    {cat:"Finanzierung",q:"Was versteht man unter Tilgungsersatz?",a:["Ersatzweise Tilgung durch Dritte","Alternative Tilgung durch Sparvertrag (LV, Bausparvertrag)","Aussetzung der Tilgung","Tilgung nur in geraden Jahren"],c:1,e:"Tilgungsersatz: Statt laufender Tilgung wird in einen Sparvertrag (Lebensversicherung, Bausparvertrag, Fonds) eingezahlt, der am Ende das Darlehen tilgt."},
    {cat:"Finanzierung",q:"Was bedeutet Disagio (Damnum)?",a:["Ein Aufschlag auf den Zinssatz","Ein Abschlag vom Auszahlungsbetrag","Eine Gebühr für Sondertilgungen","Eine Versicherungsprämie"],c:1,e:"Disagio = Abschlag vom Auszahlungsbetrag (z.B. 5% Disagio: Bei 100.000€ Darlehen werden nur 95.000€ ausgezahlt). Senkt nominal den Zins, erhöht aber Effektivzins."},
    {cat:"Finanzierung",q:"Welcher Anteil des Nettohaushaltseinkommens sollte max. für die Kreditrate verwendet werden?",a:["20%","40%","60%","80%"],c:1,e:"Faustregel: Maximal 40% des Nettohaushaltseinkommens für die Kreditrate. Sicherheitspuffer für unerwartete Ausgaben wichtig!"},
    
    // KfW und Förderung
    {cat:"Finanzierung",q:"Wann muss ein KfW-Darlehen beantragt werden?",a:["Nach Fertigstellung","VOR Beginn des Vorhabens","Während der Bauphase","Nach dem ersten Jahr"],c:1,e:"KfW-Darlehen müssen VOR Beginn des Vorhabens (vor Vertragsabschluss mit Bauunternehmen) beantragt werden! Antrag über die Hausbank."},
    {cat:"Finanzierung",q:"Was ist die Wohn-Riester Grundzulage pro Jahr?",a:["100€","175€","300€","500€"],c:1,e:"Wohn-Riester: 175€ Grundzulage pro Jahr + 185€/300€ Kinderzulage (je nach Geburtsjahr des Kindes). Eigenleistung erforderlich."},
    {cat:"Finanzierung",q:"Wie hoch ist die Wohnungsbauprämie?",a:["5% auf max. 500€","10% auf max. 700€ (ledig)","15% auf max. 1.000€","20% auf max. 2.000€"],c:1,e:"Wohnungsbauprämie: 10% auf maximal 700€/Jahr (ledig) bzw. 1.400€ (verheiratet). Einkommensgrenze: 35.000€ (ledig) bzw. 70.000€ (verheiratet)."},
    
    // Risiken und Absicherung
    {cat:"Finanzierung",q:"Welche Versicherung sichert bei Tod die Restschuld ab?",a:["Lebensversicherung","Risikolebensversicherung","Berufsunfähigkeitsversicherung","Restschuldversicherung"],c:1,e:"Risikolebensversicherung zahlt bei Tod des Versicherten die vereinbarte Summe (idealerweise = Darlehenssumme). Günstig, aber ohne Sparanteil."},
    {cat:"Finanzierung",q:"Was sind Elementarschäden?",a:["Schäden durch normale Abnutzung","Schäden durch Naturgewalten (Hochwasser, Erdrutsch, Lawinen)","Schäden durch Einbruch","Schäden durch Feuer"],c:1,e:"Elementarschäden: Schäden durch Naturgewalten wie Hochwasser, Starkregen, Erdrutsch, Schneedruck, Lawinen. Nicht in normaler Gebäudeversicherung! Extra Police nötig."},
    {cat:"Finanzierung",q:"Welches Risiko besteht bei variabler Verzinsung?",a:["Keine Risiken","Sehr hohes Zinsänderungsrisiko","Die Rate ist zu hoch","Die Laufzeit ist zu lang"],c:1,e:"Variable Verzinsung: Zins wird regelmäßig angepasst (z.B. alle 3 Monate). Vorteil: Flexibel kündbar. Nachteil: Sehr hohes Zinsänderungsrisiko!"},
    
    // Vertiefung Grundbuch
    {cat:"Recht",q:"Was ist eine Auflassungsvormerkung?",a:["Vormerkung für Auflösung des Grundstücks","Sicherung des Käufers gegen Weiterverkauf","Vormerkung für Lasteneintragung","Vormerkung für Löschung"],c:1,e:"Auflassungsvormerkung sichert den Käufer: Das Grundstück kann nicht anderweitig verkauft oder belastet werden. Eintragung in Abteilung II."},
    {cat:"Recht",q:"Was ist der Unterschied zwischen Verkehrswert und Beleihungswert?",a:["Kein Unterschied","Verkehrswert = Marktwert, Beleihungswert = vorsichtigere Schätzung","Beleihungswert ist immer höher","Verkehrswert gilt nur für Gewerbe"],c:1,e:"Verkehrswert = aktueller Marktwert. Beleihungswert = vorsichtig geschätzter Wert für Kreditsicherheit (meist 10-20% niedriger), langfristig nachhaltig erzielbar."},
    {cat:"Recht",q:"Was ist ein Nießbrauch?",a:["Ein Recht zu bauen","Ein Recht auf Nutzung und Erträge einer Immobilie","Ein Recht zur Bebauung","Ein Recht zum Verkauf"],c:1,e:"Nießbrauch: Recht, eine Immobilie zu nutzen und Erträge daraus zu ziehen (z.B. zu bewohnen oder zu vermieten), ohne Eigentümer zu sein. Eintragung in Abteilung II."},
    {cat:"Recht",q:"Was ist ein Erbbaurecht?",a:["Recht zu erben","Recht auf Bauantrag","Recht, auf fremdem Grund ein Bauwerk zu errichten","Recht auf Abbruch"],c:2,e:"Erbbaurecht: Veräußerliches und vererbliches Recht, auf fremdem Grund ein Bauwerk zu haben. Grundstücksgleiches Recht, eigenes Grundbuch. Typische Laufzeit: 99 Jahre."},
    
    // Vertiefte Finanzierungsfragen
    {cat:"Finanzierung",q:"Was ist der Unterschied zwischen Sollzins und Effektivzins?",a:["Kein Unterschied","Sollzins = reiner Zins, Effektivzins = inkl. Nebenkosten","Effektivzins ist immer niedriger","Sollzins gilt nur für Gewerbe"],c:1,e:"Sollzins = reiner Zinssatz für Zinsberechnung. Effektivzins = Gesamtkosten p.a. inkl. Nebenkosten (Disagio etc.). Effektivzins ist die wichtigere Vergleichsgröße!"},
    {cat:"Finanzierung",q:"Was sind Bereitstellungszinsen?",a:["Zinsen für die Bereitstellung der Immobilie","Zinsen für nicht abgerufene Darlehensbeträge","Zinsen für die Bearbeitung","Zinsen für Sondertilgungen"],c:1,e:"Bereitstellungszinsen: Zinsen auf noch nicht abgerufene Teile des Darlehens (typisch bei Neubau). Meist 0,15-0,25% pro Monat nach bereitstellungszinsfreier Zeit (oft 6-12 Monate)."},
    {cat:"Finanzierung",q:"Was versteht man unter Prolongation?",a:["Vorzeitige Kündigung","Anschlussfinanzierung bei der gleichen Bank","Umschuldung zu anderer Bank","Tilgungserhöhung"],c:1,e:"Prolongation = Anschlussfinanzierung bei derselben Bank nach Ablauf der Zinsbindung. Einfacher als Umschuldung, aber oft schlechtere Konditionen. Vergleichen lohnt sich!"},
    {cat:"Finanzierung",q:"Wann ist eine Umschuldung sinnvoll?",a:["Nie","Wenn andere Bank deutlich bessere Konditionen bietet (ab ca. 0,2% Zinsvorteil)","Immer nach 5 Jahren","Nur bei Verkauf"],c:1,e:"Umschuldung lohnt meist ab ca. 0,2% Zinsvorteil zur Hausbank. Grund: Kosten für Grundbuchumschreibung (ca. 0,2% des Darlehens) müssen sich amortisieren."},
    
    // Beratungspflichten
    {cat:"Beratung",q:"Was muss in der Beratungsdokumentation enthalten sein?",a:["Nur der Vertragsabschluss","Kundenwünsche, Beratungsgrundlage, Empfehlung mit Begründung","Nur die Produktinformationen","Nur die Provision"],c:1,e:"§511 BGB: Dokumentation muss enthalten: Kundenwünsche und -bedürfnisse, Beratungsgrundlage, Empfehlung mit Begründung. Aufbewahrung 5 Jahre!"},
    {cat:"Beratung",q:"Wie lange muss ein Angebot mindestens bindend sein?",a:["1 Tag","3 Tage","7 Tage","14 Tage"],c:2,e:"Das Angebot muss mindestens 7 Tage bindend sein (§491a Abs. 3 BGB). Kunde soll Zeit haben, Angebote zu vergleichen (Bedenkzeit)."},
    {cat:"Beratung",q:"Was ist bei der Haushaltsrechnung zu beachten?",a:["Nur Einkommen zählt","Einnahmen - Ausgaben, Puffer für Unvorhergesehenes einplanen","Nur Fixkosten zählen","Sonderzahlungen werden nicht berücksichtigt"],c:1,e:"Haushaltsrechnung: Alle regelmäßigen Einnahmen minus alle Ausgaben. Wichtig: Puffer für unerwartete Ausgaben einplanen (ca. 20-30% der freien Mittel)."},
    
    // Zusätzliche Vertiefungen
    {cat:"Finanzierung",q:"Was ist eine Gesamtgrundschuld?",a:["Die Summe aller Grundschulden","Eine Grundschuld über mehrere Grundstücke des gleichen Eigentümers","Eine Grundschuld für mehrere Banken","Eine sehr hohe Grundschuld"],c:1,e:"Gesamtgrundschuld erstreckt sich über mehrere Grundstücke des gleichen Eigentümers. Sichert ein Darlehen durch mehrere Objekte."},
    {cat:"Finanzierung",q:"Was ist eine Zweckerklärung?",a:["Erklärung des Verwendungszwecks des Darlehens","Schuldrechtliche Vereinbarung, welche Forderungen durch Grundschuld gesichert werden","Begründung für Kreditablehnung","Vereinbarung über Sondertilgungen"],c:1,e:"Zweckerklärung (Sicherungszweckerklärung): Schuldrechtlicher Vertrag, der regelt, welche Forderungen durch die Grundschuld gesichert werden. Nur zwischen Bank und Eigentümer."},
    {cat:"Finanzierung",q:"Welche Versicherung zahlt bei Berufsunfähigkeit?",a:["Lebensversicherung","Berufsunfähigkeitsversicherung","Unfallversicherung","Krankenversicherung"],c:1,e:"Berufsunfähigkeitsversicherung zahlt eine monatliche Rente bei Berufsunfähigkeit (meist ab 50%). Wichtig zur Absicherung der Kreditrate!"},
    {cat:"Finanzierung",q:"Was ist ein Cap-Darlehen?",a:["Darlehen mit festem Zinssatz","Darlehen mit variablem Zinssatz und Zinsobergrenze","Darlehen ohne Zinsen","Darlehen mit Mindestzins"],c:1,e:"Cap-Darlehen: Variabler Zinssatz mit Obergrenze (Cap). Schutz vor starken Zinsanstiegen, aber meist etwas teurer als normaler variabler Zins."},
    
    // Vertiefte Rechtsfragen
    {cat:"Recht",q:"Wann erlischt eine Hypothek automatisch?",a:["Nach 10 Jahren","Bei vollständiger Tilgung der gesicherten Forderung","Nie","Nach Verkauf der Immobilie"],c:1,e:"Hypothek ist akzessorisch (streng an Forderung gebunden) und erlischt automatisch bei vollständiger Tilgung. Wird dann zur Eigentümergrundschuld."},
    {cat:"Recht",q:"Was ist eine Briefgrundschuld?",a:["Grundschuld die per Brief beantragt wurde","Grundschuld mit Grundschuldbrief als Urkunde","Grundschuld ohne Eintragung","Grundschuld die per Post verschickt wird"],c:1,e:"Briefgrundschuld: Mit Grundschuldbrief als Urkunde. Übertragung durch Übergabe des Briefes + Abtretungserklärung. Häufigste Form."},
    {cat:"Recht",q:"Welche Grundbuchabteilung zeigt den Eigentümer?",a:["Aufschrift","Bestandsverzeichnis","Abteilung I","Abteilung II"],c:2,e:"Abteilung I des Grundbuchs zeigt den oder die Eigentümer des Grundstücks mit Angabe von Name, Geburtsdatum und Anteil."},
    {cat:"Recht",q:"Was bedeutet Rang bei Grundpfandrechten?",a:["Die Größe der Grundschuld","Die Reihenfolge der Befriedigung bei Zwangsversteigerung","Das Alter der Grundschuld","Die Zinshöhe"],c:1,e:"Rang bestimmt die Reihenfolge der Befriedigung bei Zwangsversteigerung. Rangstelle 1 wird zuerst befriedigt, Rangstelle 2 nur aus verbleibendem Erlös etc."},
    
    // Praxisfälle
    {cat:"Finanzierung",q:"Kunde hat 300.000€ Kaufpreis + 30.000€ Nebenkosten. Bei 80.000€ Eigenkapital, wie hoch ist das benötigte Darlehen?",a:["220.000€","250.000€","300.000€","330.000€"],c:1,e:"Gesamtkosten: 300.000€ + 30.000€ = 330.000€. Minus Eigenkapital 80.000€ = 250.000€ Darlehensbedarf."},
    {cat:"Finanzierung",q:"Bei 200.000€ Darlehen, 4% Zinsen, 2% Tilgung - wie hoch ist die Jahresrate?",a:["8.000€","10.000€","12.000€","14.000€"],c:2,e:"Jahresrate = Darlehen × (Zinssatz + Tilgungssatz) = 200.000 × (4% + 2%) = 200.000 × 6% = 12.000€. Monatsrate: 1.000€."},
    {cat:"Finanzierung",q:"Was ist bei einer Grunderwerbsteuer von 6% auf 300.000€ Kaufpreis zu zahlen?",a:["3.000€","6.000€","18.000€","30.000€"],c:2,e:"Grunderwerbsteuer = Kaufpreis × Steuersatz = 300.000€ × 6% = 18.000€. Fällig direkt nach Kauf, vor Eigentumsübertragung."},
    
    // Zusätzliche wichtige Fragen
    {cat:"Recht",q:"Wie wird gegen eine Entscheidung nach GwG vorgegangen?",a:["Klage beim Amtsgericht","Meldung an FIU (Financial Intelligence Unit)","Beschwerde bei IHK","Gar nicht"],c:1,e:"Verdachtsfälle nach Geldwäschegesetz werden an die FIU (Financial Intelligence Unit) beim Zoll gemeldet. Keine Benachrichtigung des Kunden!"},
    {cat:"Beratung",q:"Was darf ein Honorar-Immobiliardarlehenberater NICHT tun?",a:["Beraten","Darlehen vermitteln","Beratungsprotokoll erstellen","Vergleiche anstellen"],c:1,e:"Honorarberater (§34i Abs. 5 GewO) darf NUR beraten gegen Honorar vom Kunden, aber NICHT vermitteln oder abschließen. Strenge Trennung!"},
    {cat:"Finanzierung",q:"Welche KfW-Programmnummer ist für Wohneigentumskauf?",a:["KfW 124","KfW 153","KfW 270","KfW 300"],c:0,e:"KfW 124 (Wohneigentumsprogramm): Für Kauf oder Bau von selbstgenutztem Wohneigentum. Bis 100.000€ pro Vorhaben, zinsgünstig."},
    {cat:"Finanzierung",q:"Was ist der Unterschied zwischen Sollzinsbindung und Vertragslaufzeit?",a:["Kein Unterschied","Sollzinsbindung = Zeitraum fester Zinsen, Vertragslaufzeit = bis zur vollständigen Tilgung","Beides ist gleich lang","Sollzinsbindung ist immer länger"],c:1,e:"Sollzinsbindung = Zeitraum, in dem Zinssatz fest ist (z.B. 10 Jahre). Vertragslaufzeit = gesamte Zeit bis vollständige Tilgung (oft 25-35 Jahre). Nach Zinsbindung: Prolongation oder Umschuldung."},
    
    // Immobilienpraxis & WEG
    {cat:"Recht",q:"Was regelt die Teilungserklärung?",a:["Nur den Kaufpreis","Die Aufteilung in Sonder- und Gemeinschaftseigentum","Die Höhe des Darlehens","Die Maklerprovision"],c:1,e:"Die Teilungserklärung legt die Aufteilung in Sondereigentum, Gemeinschaftseigentum und Sondernutzungsrechte fest. Grundlage für WEG."},
    {cat:"Recht",q:"Was ist Sondereigentum?",a:["Das gesamte Gebäude","Die Wohnung (ggf. mit Keller/Stellplatz)","Nur das Dach","Das Treppenhaus"],c:1,e:"Sondereigentum ist der alleinige Eigentumsbereich (Wohnung, ggf. Keller/PKW-Stellplatz). Dach und Tragwerk sind Gemeinschaftseigentum."},
    {cat:"Recht",q:"Was bedeutet Sondernutzungsrecht?",a:["Recht zum Verkauf","Alleine Nutzung bestimmter Flächen (z.B. Garten)","Recht auf Mieteinnahmen","Recht auf Umbau ohne Zustimmung"],c:1,e:"Sondernutzungsrecht = exklusives Nutzungsrecht an Gemeinschaftsflächen (z.B. Garten oder Stellplatz), bleibt aber Gemeinschaftseigentum."},
    {cat:"Recht",q:"Was ist ein Rangrücktritt?",a:["Löschung einer Grundschuld","Vereinbarung, dass eine neue Grundschuld im Rang vorgeht","Erhöhung der Zinsbindung","Wechsel des Eigentümers"],c:1,e:"Rangrücktritt: Bestehende Grundschuld tritt im Rang zurück, damit eine neue Finanzierung den besseren Rang bekommt."},
    
    // Kaufprozess & Unterlagen
    {cat:"Recht",q:"Wann wird der Kaufpreis fällig?",a:["Sofort bei Unterschrift","Nach Notartermin und wenn die Voraussetzungen erfüllt sind","Erst nach Eigentumsumschreibung","Nach 12 Monaten"],c:1,e:"Kaufpreisfälligkeit tritt ein, wenn die vertraglich vereinbarten Voraussetzungen vorliegen (z.B. Auflassungsvormerkung, Lastenfreistellung)."},
    {cat:"Recht",q:"Was bedeutet Eigentumsumschreibung?",a:["Übergang von Nutzen und Lasten","Eintragung des neuen Eigentümers in Abteilung I","Eintrag der Grundschuld in Abteilung III","Löschung der Vormerkung"],c:1,e:"Eigentumsumschreibung = Eintragung des neuen Eigentümers in Abteilung I des Grundbuchs."},
    {cat:"Finanzierung",q:"Welche Unterlagen sind bei Neubau typisch?",a:["Nur der Kaufvertrag","Baupläne, Baubeschreibung, Kostenaufstellung","Nur die Schufa-Auskunft","Nur der Grundbuchauszug"],c:1,e:"Bei Neubau werden u.a. Baupläne, Baubeschreibung und Kostenaufstellung benötigt, zusätzlich zu persönlichen Unterlagen."},
    
    // Haushaltsrechnung & Tragfähigkeit
    {cat:"Finanzierung",q:"Was bedeutet Kapitaldienstfähigkeit?",a:["Nur die Fähigkeit, Zinsen zu zahlen","Fähigkeit, Zinsen und Tilgung dauerhaft zu leisten","Die Höhe der Grundschuld","Die Laufzeit des Darlehens"],c:1,e:"Kapitaldienstfähigkeit beschreibt, ob der Kunde die laufende Rate (Zins + Tilgung) dauerhaft aus dem Haushaltsüberschuss zahlen kann."},
    {cat:"Finanzierung",q:"Was ist beim Hausgeld zu beachten?",a:["Es zählt nicht in der Haushaltsrechnung","Es umfasst Betriebskosten und Instandhaltungsrücklage","Es wird nur einmal gezahlt","Es ersetzt die Kreditrate"],c:1,e:"Hausgeld enthält laufende Betriebskosten und anteilige Rücklagen. Es muss in der Haushaltsrechnung berücksichtigt werden."},
    
    // Förderungen
    {cat:"Beratung",q:"Wann muss ein KfW-Antrag gestellt werden?",a:["Nach Beginn des Vorhabens","Vor Beginn des Vorhabens über die Hausbank","Direkt beim Notar","Erst nach Eigentumsumschreibung"],c:1,e:"KfW-Anträge müssen VOR Beginn des Vorhabens über die Hausbank gestellt werden. Nachträgliche Anträge sind nicht möglich."},
    
    // Vertragsrecht & Immobilienerwerb
    {cat:"Recht",q:"Was beschreibt das Trennungsprinzip?",a:["Kaufvertrag und Eigentumsübertragung sind rechtlich getrennt","Der Notar trennt Käufer und Verkäufer","Die Bank trennt Zins und Tilgung","Die Grundschuld ist vom Grundbuch getrennt"],c:0,e:"Trennungsprinzip: Verpflichtungsgeschäft (Kaufvertrag) und Verfügungsgeschäft (Eigentumsübertragung) sind rechtlich getrennt."},
    {cat:"Recht",q:"Welche Last ist in der Regel NICHT im Grundbuch eingetragen?",a:["Wegerecht","Nießbrauch","Baulast","Grundschuld"],c:2,e:"Baulasten sind öffentlich-rechtliche Verpflichtungen und stehen meist im Baulastenverzeichnis, nicht im Grundbuch."},
    
    // Verbraucherkreditrecht
    {cat:"Recht",q:"Was ist ein Immobiliar-Verbraucherdarlehensvertrag?",a:["Darlehen nur für Gewerbeimmobilien","Verbraucherdarlehen, das durch Grundpfandrechte gesichert ist","Jeder Ratenkredit","Nur KfW-Darlehen"],c:1,e:"Immobiliar-Verbraucherdarlehen: Verbraucherdarlehen, das durch Grundpfandrechte gesichert ist oder dem Immobilienerwerb dient. Besondere Pflichten!" },
    {cat:"Beratung",q:"Was gehört zu den besonderen Pflichten bei Immobiliar-Verbraucherdarlehen?",a:["Keine Beratungspflichten","Angemessene Erläuterungen und Kreditwürdigkeitsprüfung","Nur schriftliche Werbung","Nur Abschluss über Notar"],c:1,e:"Es bestehen besondere Informations- und Beratungspflichten, inklusive angemessener Erläuterungen und zwingender Kreditwürdigkeitsprüfung."},
    
    // Markt & Finanzierung
    {cat:"Finanzierung",q:"Was zählt zu indirekten Erwerbsnebenkosten?",a:["Kaufpreis","Bereitstellungszinsen und Disagio","Notar und Grundbuch","Maklercourtage"],c:1,e:"Indirekte Nebenkosten sind z.B. Bereitstellungszinsen und Disagio (Damnum)."},
    {cat:"Finanzierung",q:"Welche Institution steuert durch Geldpolitik das allgemeine Zinsniveau wesentlich mit?",a:["IHK","Notenbank (EZB)","Grundbuchamt","Schufa"],c:1,e:"Die Notenbank (EZB) beeinflusst das allgemeine Zinsniveau durch ihre Geldpolitik."},
    
    // Aufsicht & Verbraucherschutz
    {cat:"Recht",q:"Wer ist für die Aufsicht über Immobiliardarlehensvermittler nach §34i zuständig?",a:["BaFin","IHK","Finanzamt","Bundesbank"],c:1,e:"Zuständig ist die IHK (Erlaubnis und Register). Banken unterliegen der BaFin-Aufsicht."},
    {cat:"Beratung",q:"Was ist eine Schlichtungsstelle?",a:["Eine Werbungseinheit","Außergerichtliche Streitbeilegung (Ombudsmann)","Ein Teil des Grundbuchs","Ein Sondertilgungskonto"],c:1,e:"Schlichtungsstellen dienen der außergerichtlichen Streitbeilegung, z.B. über Ombudsmannverfahren."},
    
    // Koppelungsgeschäfte
    {cat:"Beratung",q:"Wann ist ein Koppelungsgeschäft unzulässig?",a:["Wenn das Nebenprodukt freiwillig ist","Wenn das Darlehen nur bei Abschluss eines Nebenprodukts gewährt wird","Wenn die Nebenleistung transparent ist","Wenn die Nebenleistung günstiger ist"],c:1,e:"Unzulässig ist es, wenn der Kredit nur bei Abschluss eines weiteren Produkts (z.B. Versicherung) gewährt wird."},
],

// ========================================
// KARTEIKARTEN (Erweitert auf 60+ Karten)
// ========================================
cards: [
    // Grundlegende Definitionen
    {f:"Was ist ein Annuitätendarlehen?",b:"Darlehen mit gleichbleibender Rate (Annuität) aus Zins + Tilgung.\n\nTilgungsanteil steigt ↑\nZinsanteil sinkt ↓\n\nHäufigste Darlehensform in Deutschland!",cat:"Finanzierung"},
    {f:"Was bedeutet §34i GewO?",b:"Erlaubnispflicht für Immobiliardarlehensvermittler seit 21.3.2016.\n\n4 Voraussetzungen:\n✓ Sachkunde (IHK-Prüfung)\n✓ Berufshaftpflicht (460.000€)\n✓ Geordnete Vermögensverhältnisse\n✓ Persönliche Zuverlässigkeit\n\nRegistrierung bei IHK erforderlich!",cat:"Recht"},
    {f:"Aufbau des Grundbuchs?",b:"Aufschrift: Amtsgericht, Blattnummer\n\nBestandsverzeichnis: Grundstücksbeschreibung (Lage, Größe, Flurstück)\n\nAbteilung I: Eigentümer\nAbteilung II: Lasten & Beschränkungen\nAbteilung III: Grundpfandrechte (Hypotheken, Grundschulden)",cat:"Recht"},
    {f:"Grundschuld vs. Hypothek?",b:"GRUNDSCHULD:\n• Abstrakt (nicht an Forderung gebunden)\n• Wiederverwendbar\n• Bleibt nach Tilgung bestehen\n• Standard bei Banken (>95%)\n\nHYPOTHEK:\n• Akzessorisch (streng an Forderung gebunden)\n• Erlischt mit Tilgung\n• In Praxis sehr selten (<5%)",cat:"Finanzierung"},
    {f:"Was ist der Beleihungsauslauf?",b:"Formel:\n(Darlehenssumme / Beleihungswert) × 100%\n\nBeispiel:\n200.000€ Darlehen / 250.000€ Beleihungswert = 80%\n\nFaustregel:\nBis 60% = beste Konditionen (1a-Hypothek)\n60-80% = mittlere Konditionen (1b)\nÜber 80% = schlechtere Konditionen oder Ablehnung",cat:"Finanzierung"},
    {f:"Kündigungsrecht §489 BGB?",b:"Nach 10 Jahren ab Vollauszahlung:\n\nKündigung mit 6 Monaten Frist möglich\n\n→ OHNE Vorfälligkeitsentschädigung!\n\nGilt auch bei längerer Zinsbindung!\n(z.B. auch bei 15 oder 20 Jahren Zinsbindung)",cat:"Recht"},
    {f:"Was ist die Vorfälligkeitsentschädigung?",b:"Entschädigung an Bank bei vorzeitiger vollständiger Rückzahlung vor Ende der Zinsbindung.\n\nAusgleich für entgangene Zinsen.\n\nKEINE VFE bei:\n✓ Kündigung nach 10 Jahren (§489 BGB)\n✓ Variablem Zinssatz\n✓ Fehlerhafter Widerrufsbelehrung\n\nKann mehrere 10.000€ betragen!",cat:"Finanzierung"},
    {f:"Was ist ein Forward-Darlehen?",b:"Zinssicherung für ZUKÜNFTIGE Anschlussfinanzierung.\n\n• Vorlaufzeit: bis 60 Monate\n• Forward-Aufschlag: ca. 0,01-0,03% pro Monat\n\nZweck: Absicherung gegen steigende Zinsen\n\nBeispiel:\nAktuell 3%, 24 Monate Forward\n= 3% + (24 × 0,02%) = 3,48%",cat:"Finanzierung"},
    
    // Erwerbsnebenkosten
    {f:"Erwerbsnebenkosten beim Immobilienkauf?",b:"Ca. 10-15% des Kaufpreises!\n\n✓ Grunderwerbsteuer: 3,5-6,5%\n  (je nach Bundesland)\n✓ Notar: ca. 1,0-1,5%\n✓ Grundbuch: ca. 0,5%\n✓ Makler: 3-7% (Käufer/Verkäufer teilen seit 2020)\n\nBeispiel 300.000€: ca. 30.000-45.000€ Nebenkosten!",cat:"Finanzierung"},
    {f:"Grunderwerbsteuer in Bayern?",b:"Bayern und Sachsen: 3,5%\n(niedrigste Sätze in Deutschland)\n\nAndere Bundesländer:\n5,0%: BW, HH, NI, SA\n6,0%: BE, HB, HE, RP\n6,5%: BB, NRW, SL, SH, TH\n\nFällig: Nach Kaufvertragsabschluss,\nVOR Eigentumsübergang!",cat:"Finanzierung"},
    
    // Kreditprüfung
    {f:"Kreditwürdigkeitsprüfung - Die 3 Säulen?",b:"1. KREDITFÄHIGKEIT\n   Geschäftsfähigkeit (ab 18 Jahre)\n   Rechtsfähigkeit\n\n2. PERSÖNLICHE KREDITWÜRDIGKEIT\n   Schufa-Score, Zahlungshistorie\n   Zuverlässigkeit\n\n3. MATERIELLE KREDITWÜRDIGKEIT\n   Einkommen, Haushaltsrechnung\n   Vermögen, Kapitaldienstfähigkeit\n\nPflicht nach §505a BGB + §18a KWG!",cat:"Finanzierung"},
    {f:"Was ist der Effektivzins?",b:"Gesamtkosten des Kredits pro Jahr in %\n\nEnthält:\n✓ Sollzins\n✓ Disagio/Damnum\n✓ Pflicht-Nebenkosten\n\nNICHT enthalten:\n✗ Bereitstellungszinsen\n✗ Schätzkosten\n✗ Notar-/Grundbuchkosten\n✗ Versicherungen\n\nWichtigste Vergleichsgröße für Angebote!",cat:"Finanzierung"},
    
    // Wertermittlung
    {f:"Wertermittlungsverfahren im Überblick?",b:"VERGLEICHSWERTVERFAHREN\n→ ETW, Reihenhäuser\n→ Vergleich mit ähnlich verkauften Objekten\n\nSACHWERTVERFAHREN\n→ Eigengenutzte EFH\n→ Bodenwert + Gebäudewert\n\nERTRAGSWERTVERFAHREN\n→ Vermietete Objekte\n→ Kapitalisierte Mieteinnahmen",cat:"Finanzierung"},
    {f:"Verkehrswert vs. Beleihungswert?",b:"VERKEHRSWERT:\n• Aktueller Marktwert\n• Erzielbarer Verkaufspreis\n• Von Gutachter ermittelt\n\nBELEIHUNGSWERT:\n• Vorsichtige Bankschätzung\n• Langfristig nachhaltig erzielbar\n• Meist 10-20% unter Verkehrswert\n• Basis für Kreditentscheidung\n\nBeispiel: VW 300.000€ → BW 260.000€",cat:"Finanzierung"},
    
    // ESIS und Informationspflichten
    {f:"Was ist das ESIS-Merkblatt?",b:"Europäisches Standardisiertes Informationsblatt\n\nMuss VOR Vertragsschluss übergeben werden!\n\nInhalt:\n✓ Zinsen (Soll + Effektiv)\n✓ Raten (Höhe, Anzahl)\n✓ Gesamtkosten\n✓ Widerrufsrecht\n✓ Folgen bei Zahlungsverzug\n\nZweck: Vergleichbarkeit + Transparenz\n(Art. 247 §13 EGBGB)",cat:"Recht"},
    {f:"7-Tage-Bedenkzeit nach BGB?",b:"Das Finanzierungsangebot muss mindestens 7 Tage bindend sein!\n\n§491a Abs. 3 BGB\n\nKunde soll Zeit haben:\n✓ Angebote zu vergleichen\n✓ Sich beraten zu lassen\n✓ Zu prüfen und zu überlegen\n\nVerstöße können zur Unwirksamkeit führen!",cat:"Recht"},
    
    // Widerrufsrecht
    {f:"Widerrufsrecht bei Immobiliendarlehen?",b:"Frist: 14 Tage\n\nBeginn NUR wenn:\n✓ Vertrag geschlossen UND\n✓ Alle Pflichtangaben gemacht UND\n✓ Widerrufsbelehrung übergeben\n\nOhne Angabe von Gründen!\n\nBei fehlerhafter Belehrung:\nFrist läuft NICHT → bis zu 12 Monate + 14 Tage möglich (\"Widerrufsjoker\")",cat:"Recht"},
    
    // Geldwäsche
    {f:"Geldwäschegesetz - Pflichten?",b:"Pflichten des Vermittlers:\n\n✓ IDENTIFIZIERUNG (Ausweis prüfen + kopieren)\n✓ Sorgfaltspflichten\n✓ Verdachtsmeldung an FIU\n✓ Dokumentation 5 Jahre\n✓ Mitarbeiterschulung\n\nWann identifizieren?\n• Neue Geschäftsbeziehung\n• Transaktion ab 15.000€\n• Bei Verdacht (immer!)",cat:"Recht"},
    
    // Staatliche Förderungen
    {f:"Staatliche Förderungen Überblick?",b:"KfW-DARLEHEN\n→ Zinsgünstig für Kauf, Bau, Energieeffizienz\n→ Bis 100.000-150.000€\n\nWOHN-RIESTER\n→ 175€ Grundzulage/Jahr\n→ + 185€/300€ Kinderzulage\n\nWOHNUNGSBAUPRÄMIE\n→ 10% auf max. 700€/Jahr\n\nVL-ZUSCHUSS (Bausparen)\n→ 9% auf vermögenswirksame Leistungen",cat:"Finanzierung"},
    {f:"KfW-Darlehen Antrag - Wann?",b:"WICHTIG: VOR Beginn des Vorhabens!\n\n1. Finanzierungszusage einholen\n2. KfW-Antrag über Hausbank stellen\n3. KfW bewilligt\n4. DANN erst Bauvertrag/Kauf!\n\nNachträglicher Antrag: NICHT möglich!\n\nDurchleitendes Institut: Hausbank\nRisiko trägt: KfW, nicht Hausbank",cat:"Finanzierung"},
    
    // Risiken
    {f:"Zinsänderungsrisiko - Beispiel?",b:"AUSGANGSSITUATION:\n250.000€, Zins 2%, Tilg. 2%\nMonatsrate: 833€\n\nNACH 10 JAHREN:\nRestschuld: 180.000€\nNeuer Zins: 5%, Tilg. 2%\nNeue Rate: 1.050€\n\nMehrbelastung: +217€/Monat\nDas sind +26%!\n\nAbsicherung: Lange Zinsbindung,\nhohe Tilgung, Forward-Darlehen",cat:"Finanzierung"},
    {f:"Lebensrisiken bei Finanzierung?",b:"PERSÖNLICHE RISIKEN:\n✗ Arbeitslosigkeit\n✗ Krankheit\n✗ Berufsunfähigkeit\n✗ Tod des Hauptverdieners\n✗ Scheidung\n✗ Einkommensausfall\n\nABSICHERUNG:\n✓ Risikolebensversicherung\n✓ Berufsunfähigkeitsversicherung\n✓ Liquiditätsreserve (3-6 Monatsgehälter)\n✓ Sicherheitspuffer bei Haushaltsrechnung",cat:"Finanzierung"},
    
    // Prolongation und Umschuldung
    {f:"Prolongation vs. Umschuldung?",b:"PROLONGATION:\n• Gleiche Bank, Verlängerung\n• Einfach, keine Kosten\n• Evtl. schlechtere Konditionen\n• 1-2 Wochen\n\nUMSCHULDUNG:\n• Andere Bank, neuer Vertrag\n• Mehr Aufwand, Grundbuchkosten (0,2%)\n• Oft bessere Konditionen\n• 4-8 Wochen\n\nFaustregel: Umschuldung lohnt ab 0,2% Zinsvorteil!",cat:"Finanzierung"},
    
    // Haushaltsrechnung
    {f:"Haushaltsrechnung - Was ist das?",b:"Gegenüberstellung:\nEinnahmen - Ausgaben = Frei verfügbar\n\nPrüfung der Kapitaldienstfähigkeit:\nKann Kunde die Rate dauerhaft zahlen?\n\nFaustregel:\n✓ Max. 40% des Nettoeinkommens für Rate\n✓ Sicherheitspuffer 20-30% einplanen\n✓ Unvorhergesehenes berücksichtigen\n\nPflicht: §505a BGB, §18a KWG",cat:"Finanzierung"},
    
    // Spezielle Darlehensarten
    {f:"Was ist ein Zinszahlungsdarlehen?",b:"Endfälliges Darlehen:\n\n• Während Laufzeit: Nur Zinsen zahlen\n• Am Ende: Komplette Tilgung auf einmal\n\nMeist mit Tilgungsersatz:\n→ Lebensversicherung\n→ Bausparvertrag\n→ Fondssparplan\n\nVorteil: Steuerlich interessant bei Vermietung\nNachteil: Zinsbelastung bleibt hoch",cat:"Finanzierung"},
    {f:"Was ist ein Bauspardarlehen?",b:"Darlehen aus Bausparvertrag\n\n2 PHASEN:\n1. Ansparphase (bis Zuteilung)\n   Sparen + Guthabenzinsen\n\n2. Darlehensphase (nach Zuteilung)\n   Sehr niedriger, fester Zins\n   Für gesamte Laufzeit garantiert\n\nVorteil: Zinssicherheit\nNachteil: Lange Wartezeit, Gebühren",cat:"Finanzierung"},
    {f:"Was ist ein Cap-Darlehen?",b:"Darlehen mit variablem Zins + Obergrenze\n\nVariabler Zins ABER:\nMaximaler Zinssatz festgelegt (Cap)\n\nBeispiel:\nAktuell 3%, Cap bei 5%\n→ Zins kann steigen, aber max. auf 5%\n\nVorteil: Schutz vor starken Zinsanstiegen\nNachteil: Etwas teurer als normaler variabler Zins",cat:"Finanzierung"},
    
    // Besondere Rechte und Pflichten
    {f:"Öffentlicher Glaube des Grundbuchs?",b:"§892 BGB:\n\nMan darf auf RICHTIGKEIT der Grundbucheintragungen vertrauen!\n\nGutgläubiger Erwerber wird geschützt.\n\nSelbst wenn Eintragung falsch:\n→ Gutgläubiger Erwerb möglich\n\nAusnahme:\nBösgläubigkeit (Käufer wusste um Fehler)",cat:"Recht"},
    {f:"Rangfolge im Grundbuch?",b:"Reihenfolge der Befriedigung bei Zwangsversteigerung:\n\nRang 1 wird ZUERST befriedigt\nRang 2 nur aus Rest\nRang 3 nur aus weiterem Rest\n...\n\nBestimmt durch:\nOrt (Abteilung)\nZeit (Datum der Eintragung)\n\nÄnderung möglich durch:\nRangänderung, Rangrücktritt",cat:"Recht"},
    {f:"Was ist eine Zweckerklärung?",b:"Sicherungszweckerklärung:\n\nSchuldrechtlicher Vertrag zwischen Bank und Eigentümer\n\nRegelt: Welche Forderungen durch die Grundschuld gesichert werden\n\nWichtig:\n✗ NICHT im Grundbuch eingetragen\n✓ Nur zwischen Parteien wirksam\n\nBei abstracter Grundschuld essentiell!",cat:"Finanzierung"},
    
    // Besicherung
    {f:"1a-Darlehen - Was ist das?",b:"Beleihung bis 60% des Beleihungswerts\n\nNiedrigstes Risiko für Bank\n→ Beste Konditionen für Kunde!\n\nBeispiel:\nBeleihungswert: 250.000€\n1a bis: 150.000€ (60%)\n\nAb 60-80%: 1b-Darlehen\n(etwas schlechtere Konditionen)\n\nÜber 80%: Deutlich schlechtere Konditionen\noder Ablehnung",cat:"Finanzierung"},
    {f:"Arten von Grundschulden?",b:"BRIEFGRUNDSCHULD:\n✓ Mit Grundschuldbrief\n✓ Übertragung: Brief + Abtretung\n✓ Häufigste Form\n\nBUCHGRUNDSCHULD:\n✓ Ohne Brief\n✓ Nur Grundbucheintragung\n\nEIGENTÜMERGRUNDSCHULD:\n✓ Zugunsten des Eigentümers\n✓ Entsteht z.B. nach Tilgung einer Hypothek",cat:"Recht"},
    
    // Weitere wichtige Begriffe
    {f:"Was ist ein Disagio (Damnum)?",b:"Abschlag vom Auszahlungsbetrag\n\nBeispiel:\n100.000€ Darlehen, 5% Disagio\n→ Auszahlung nur 95.000€\n→ Rückzahlung: 100.000€\n\nZweck:\n✓ Senkt nominalen Zinssatz\n✗ Erhöht Effektivzins!\n\nSteuerlich:\nBei Vermietung sofort absetzbar\nBei Eigennutzung nicht absetzbar",cat:"Finanzierung"},
    {f:"Was sind Bereitstellungszinsen?",b:"Zinsen auf NICHT abgerufene Darlehensbeträge\n\nTypisch bei Neubau (teilweise Abruf)\n\nHöhe: ca. 0,15-0,25% pro Monat\n\nBereitstellungszinsfreie Zeit:\nMeist 6-12 Monate\n\nDanach: Zinsen auf nicht abgerufenen Rest\n\nTIPP: Bei Neubau genau planen!",cat:"Finanzierung"},
    {f:"Schufa-Score - Was bedeutet das?",b:"Score-Wert: 0-100%\nJe höher, desto besser!\n\nÜber 97,5%: Sehr gut\n95-97,5%: Gut\n90-95%: Befriedigend\nUnter 90%: Problematisch\n\nSpeichert:\n• Laufende Kredite\n• Konten, Kreditkarten\n• Zahlungsstörungen\n• Insolvenzen\n\nWichtig für Kreditentscheidung!",cat:"Finanzierung"},
    
    // Versicherungen
    {f:"Risikolebensversicherung zur Absicherung?",b:"Bei Tod: Auszahlung der Versicherungssumme\n\nHöhe: Idealerweise = Darlehenssumme\n\nZweck: Familie kann Darlehen ablösen\n\nVorteile:\n✓ Sehr günstig\n✓ Hohe Absicherung\n✓ Flexible Laufzeit\n\nNachteil:\n✗ Kein Sparanteil\n✗ Bei Überleben: kein Geld zurück",cat:"Finanzierung"},
    {f:"Wohngebäudeversicherung - Was deckt sie ab?",b:"STANDARDDECKUNG:\n✓ Feuer\n✓ Leitungswasser\n✓ Sturm/Hagel\n\nNICHT standardmäßig:\n✗ Elementarschäden!\n\nELEMENTARSCHÄDEN (Extra Police nötig):\n• Hochwasser\n• Starkregen\n• Erdrutsch\n• Schneedruck\n• Lawinen\n\nBank fordert oft Versicherungsnachweis!",cat:"Finanzierung"},
    
    // Beratung
    {f:"Cold Calls - Erlaubt oder verboten?",b:"VERBOTEN!\n\nUnaufgeforderte Werbeanrufe bei Verbrauchern ohne vorherige Einwilligung sind unzulässig!\n\nVerstoß gegen UWG §7 Abs. 2 Nr. 2\n\nBußgeld: Bis 300.000€!\n\nErlaubt nur:\n✓ Mit ausdrücklicher Einwilligung\n✓ Bei bestehendem Kundenverhältnis\n  (für ähnliche Angebote)",cat:"Beratung"},
    {f:"Aktives Zuhören - Was ist das?",b:"Gesprächstechnik für bessere Kommunikation\n\nTECHNIKEN:\n✓ Nachfragen stellen\n✓ Zusammenfassen\n✓ Bestätigen\n✓ Paraphrasieren\n✓ Offene Fragen\n\nZEIGT:\n• Ich habe verstanden\n• Ich interessiere mich\n• Ich nehme Sie ernst\n\nWichtig für Vertrauensaufbau!",cat:"Beratung"},
    {f:"Beratungsdokumentation - Was muss rein?",b:"Pflichtangaben nach §511 BGB:\n\n✓ Kundenwünsche und -bedürfnisse\n✓ Beratungsgrundlage\n✓ Empfehlung mit Begründung\n✓ Warum passt das Produkt?\n✓ Datum und Unterschrift\n\nAufbewahrung: 5 Jahre!\n\nBeweislast: Beim Vermittler!\n\nBei Fehlen: Schadensersatzansprüche möglich",cat:"Beratung"},
    
    // Rahmenplan-Ergänzungen
    {f:"Trennungsprinzip (Kaufrecht)?",b:"Verpflichtungsgeschäft und Verfügungsgeschäft sind getrennt.\n\nBeispiel:\n• Kaufvertrag (Pflichten)\n• Eigentumsübertragung im Grundbuch",cat:"Recht"},
    {f:"Immobiliar-Verbraucherdarlehen?",b:"Verbraucherdarlehen, das durch Grundpfandrechte gesichert ist oder dem Erwerb/Erhalt einer Immobilie dient.\n\nBesondere Pflichten:\n• Angemessene Erläuterungen\n• Kreditwürdigkeitsprüfung\n• Transparente Informationen",cat:"Recht"},
    {f:"Indirekte Erwerbsnebenkosten?",b:"Kosten, die nicht direkt im Kaufpreis enthalten sind.\n\nBeispiele:\n• Bereitstellungszinsen\n• Disagio (Damnum)",cat:"Finanzierung"},
    {f:"Einfluss auf Zinsniveau?",b:"Wichtige Faktoren:\n• Geld- und Notenbankpolitik (EZB)\n• Konjunktur und Inflation\n• Kapitalmarkt und Risikoprämien",cat:"Finanzierung"},
    {f:"Aufsicht über Vermittler?",b:"IHK erteilt Erlaubnis und führt Register.\n\nBanken unterliegen der BaFin-Aufsicht.",cat:"Recht"},
    {f:"Schlichtungsstelle (Ombudsmann)?",b:"Außergerichtliche Streitbeilegung bei Konflikten zwischen Kunde und Anbieter.\n\nZiel: schnelle, kostengünstige Lösung.",cat:"Beratung"},
    {f:"Koppelungsgeschäft - Wann unzulässig?",b:"Wenn das Darlehen nur bei Abschluss eines Nebenprodukts gewährt wird.\n\nNebenleistungen müssen transparent und getrennt bewertbar sein.",cat:"Beratung"},
    {f:"Finanzierungsplan - Inhalt?",b:"Übersicht über:\n• Gesamtkosten\n• Eigenkapital\n• Darlehensbedarf\n• Rate und Puffer",cat:"Finanzierung"},
    
    // Zusätzliche Vertiefung
    {f:"Tilgungsdarlehen - Was ist das?",b:"Darlehen mit gleichbleibender TILGUNG\n(nicht gleichbleibende Rate!)\n\nFolge:\n• Rate sinkt kontinuierlich\n• Anfangs sehr hohe Belastung\n• Gegen Ende: niedrige Belastung\n\nHeute selten, meist bei:\n• Gewerbefinanzierung\n• Öffentlichen Darlehen\n\nPrivat: Annuitätendarlehen häufiger",cat:"Finanzierung"},
    {f:"Was ist ein Policendarlehen?",b:"Endfälliges Darlehen mit Lebensversicherung als Tilgungsersatz\n\nFunktion:\n• Während Laufzeit: Nur Zinsen zahlen\n• Parallel: LV-Beiträge zahlen\n• Am Ende: LV tilgt Darlehen\n\nVorteil (früher):\n✓ Steuerlich absetzbar\n\nNachteil:\n✗ Heute steuerlich nicht mehr interessant\n✗ Oft schlechte LV-Renditen",cat:"Finanzierung"},
    {f:"Was ist eine Gesamtgrundschuld?",b:"Grundschuld über MEHRERE Grundstücke\ndes gleichen Eigentümers\n\nEin Darlehen wird durch mehrere Objekte gesichert\n\nVorteil:\n✓ Bessere Besicherung\n✓ Höherer Kreditbetrag möglich\n✓ Bessere Konditionen\n\nNachteil:\n✗ Verkauf einzelner Objekte erschwert\n✗ Teilweise Löschung kompliziert",cat:"Finanzierung"},
    {f:"Was ist ein Erbbaurecht?",b:"Veräußerliches und vererbliches Recht,\nauf fremdem Grund ein Bauwerk zu haben\n\nLaufzeit: Meist 99 Jahre\n\nGegen: Erbbauzins an Grundstückseigentümer\n\nEigenes Grundbuch!\nGrundstücksgleiche Rechte\n\nVorteil: Günstiger als Grundstückskauf\nNachteil: Zeitlich begrenzt, Erbbauzins",cat:"Recht"},
    {f:"Was ist ein Nießbrauch?",b:"Recht auf Nutzung und Erträge einer Immobilie\n\nBerechtigung:\n✓ Bewohnen\n✓ Vermieten (Miete behalten)\n✓ Nutzen\n\nABER: Kein Eigentum!\n\nTypisch bei:\n• Schenkung an Kinder\n• Eltern behalten Nießbrauch\n• Lebenslanges Wohnrecht\n\nEintragung: Abteilung II\nNicht übertragbar, höchstpersönlich",cat:"Recht"},
    {f:"Auflassungsvormerkung - Was ist das?",b:"Sicherung des Käufers im Grundbuch\n\nEintragung in Abteilung II\n\nSchutz vor:\n✗ Weiterverkauf an Dritte\n✗ Zusätzlichen Belastungen\n✗ Verfügungsbeschränkungen\n\nZeitpunkt:\nNach Kaufvertragsabschluss,\nVOR Kaufpreiszahlung\n\nLöschung:\nNach Eigentumsübertragung",cat:"Recht"},
    
    // Immobilienpraxis & WEG
    {f:"Teilungserklärung - Wofür?",b:"Regelt die Aufteilung in:\n\n• Sondereigentum\n• Gemeinschaftseigentum\n• Sondernutzungsrechte\n\nGrundlage der WEG. Enthält Lagepläne, Miteigentumsanteile und Nutzungsregeln.",cat:"Recht"},
    {f:"Sondereigentum vs. Gemeinschaftseigentum?",b:"SONDEREIGENTUM:\n• Wohnung, ggf. Keller/Stellplatz\n\nGEMEINSCHAFTSEIGENTUM:\n• Dach, Fassade, Treppenhaus, Tragwerk\n\nMerksatz: Alles, was für Bestand und Sicherheit nötig ist, bleibt Gemeinschaftseigentum.",cat:"Recht"},
    {f:"Sondernutzungsrecht - Beispiel?",b:"Exklusives Nutzungsrecht an Gemeinschaftsflächen.\n\nBeispiele:\n• Gartenfläche\n• Außenstellplatz\n• Dachterrasse\n\nBleibt Gemeinschaftseigentum, wird aber alleine genutzt.",cat:"Recht"},
    {f:"Hausgeld - Was ist enthalten?",b:"Monatliche Vorauszahlung in der WEG.\n\nEnthält:\n• Betriebskosten\n• Verwalterkosten\n• Instandhaltungsrücklage (anteilig)\n\nMuss in der Haushaltsrechnung berücksichtigt werden!",cat:"Finanzierung"},
    {f:"Kaufpreisfälligkeit - Voraussetzungen?",b:"Kaufpreis wird fällig, wenn u.a.:\n\n✓ Auflassungsvormerkung eingetragen\n✓ Lastenfreistellung gesichert\n✓ Genehmigungen/Verzichtserklärungen vorliegen\n\nDann erfolgt Zahlungsaufforderung durch Notar.",cat:"Recht"},
    {f:"Übergang von Nutzen und Lasten?",b:"Zeitpunkt, ab dem der Käufer:\n\n• Nutzungen erhält (Mieten, Besitz)\n• Kosten/Lasten trägt (Steuern, Hausgeld)\n\nMeist: mit Kaufpreiszahlung.",cat:"Recht"},
    {f:"Rangrücktritt - Wozu?",b:"Bestehende Grundschuld tritt im Rang zurück,\n\n-> neue Bank erhält besseren Rang\n-> wichtig für Anschlussfinanzierung/Umschuldung\n\nErhöht die Werthaltigkeit der neuen Sicherheit.",cat:"Recht"},
    {f:"Kapitaldienstfähigkeit - Bedeutung?",b:"Fähigkeit, Zins + Tilgung dauerhaft zu zahlen.\n\nPrüfung via Haushaltsrechnung:\nEinnahmen - Ausgaben = Rate tragbar?\n\nPflichtprüfung nach §505a BGB.",cat:"Finanzierung"},
    {f:"Unterlagen bei Neubau - Auswahl?",b:"Typisch erforderlich:\n\n• Baupläne und Baubeschreibung\n• Kostenaufstellung\n• Lageplan/Flurkarte\n• Eigenkapitalnachweise\n• Versicherungsnachweise",cat:"Finanzierung"},
    {f:"Eigentumsumschreibung - Was heißt das?",b:"Eintragung des neuen Eigentümers in Abteilung I.\n\nErst damit ist der Käufer rechtlich Eigentümer.\n\nErfolgt nach Kaufpreiszahlung und Erfüllung aller Voraussetzungen.",cat:"Recht"},
    
    // Noch mehr Vertiefung
    {f:"Sondertilgung - Was ist das?",b:"Außerplanmäßige zusätzliche Tilgung\n\nVorteile:\n✓ Schnellere Schuldenfreiheit\n✓ Weniger Gesamtzinsen\n✓ Kürzere Laufzeit ODER\n✓ Niedrigere Rate\n\nMeist im Vertrag:\n5-10% der Darlehenssumme p.a. kostenfrei\n\nOhne Vereinbarung:\nBank kann VFE verlangen!\n\nEinfluss auf Konditionen:\nEtwas höherer Zins",cat:"Finanzierung"},
    {f:"Was ist die Zwischenfinanzierung?",b:"Kurzfristiges Darlehen zur Überbrückung\n\nTypische Fälle:\n• Verkauf alte Immobilie läuft noch\n• Bausparguthaben noch nicht zuteilungsreif\n• Erbschaft steht an\n\nMeist:\n• 6-24 Monate Laufzeit\n• Nur Zinsen während Laufzeit\n• Endfällige Tilgung\n• Höherer Zinssatz\n\nNach Mittelzufluss: Ablösung",cat:"Finanzierung"},
    {f:"Wohn-Riester - Wie funktioniert das?",b:"Eigenheimrente mit staatlicher Förderung\n\nFÖRDERUNG:\n175€ Grundzulage/Jahr\n+ 185€/300€ Kinderzulage (je Geburtsjahr)\n+ Steuervorteile\n\nVerwendung:\n✓ Kaufen, Bauen\n✓ Entschuldung\n✓ Barrierereduzierung\n\nNACHTEIL:\n✗ Nachgelagerte Besteuerung (in Rente)\n✗ Kompliziert\n✗ Bei Verkauf: Förderung zurückzahlen",cat:"Finanzierung"},
    {f:"Wohnungsbauprämie - Wer bekommt sie?",b:"10% auf max. 700€/Jahr (ledig)\n= 70€ Prämie\n\n10% auf max. 1.400€/Jahr (verheiratet)\n= 140€ Prämie\n\nEINKOMMENSGRENZE:\n35.000€ (ledig)\n70.000€ (verheiratet)\n\nNutzung:\nFür Wohneigentum\nMind. 7 Jahre Sperrfrist!\n\nAntrag: Über Bausparkasse",cat:"Finanzierung"},
    {f:"Arbeitnehmersparzulage - Was ist das?",b:"Staatliche Förderung auf vermögenswirksame Leistungen (VL)\n\nBei Bausparen:\n9% auf max. 470€/Jahr\n= 43€ Zulage\n\nEinkommensgrenze:\n17.900€ (ledig)\n35.800€ (verheiratet)\n\nVoraussetzung:\n✓ Arbeitnehmer\n✓ VL vom Arbeitgeber\n✓ Bausparen mind. 6 Jahre\n\nAntrag: Mit Steuererklärung",cat:"Finanzierung"},
    {f:"Variable Verzinsung - Vor- und Nachteile?",b:"VORTEILE:\n✓ Oft aktuell niedrig\n✓ Jederzeit kündbar (3 Monate)\n✓ Flexibel\n✓ Bei fallenden Zinsen: Vorteil\n\nNACHTEILE:\n✗ SEHR hohes Zinsänderungsrisiko!\n✗ Rate kann stark steigen\n✗ Keine Planungssicherheit\n✗ Bei steigenden Zinsen: Nachteil\n\nFÜR WEN?\nKurze Restlaufzeit, sichere Einkommen",cat:"Finanzierung"},
    {f:"Lange vs. kurze Zinsbindung?",b:"LANGE ZINSBINDUNG (15-20 Jahre):\n+ Planungssicherheit\n+ Schutz vor Zinsanstieg\n- Höherer Zins\n- Wenig flexibel\n\nKURZE ZINSBINDUNG (5 Jahre):\n+ Niedrigster Zins\n+ Flexibler\n- Hohes Zinsänderungsrisiko\n- Unsichere Zukunft\n\nEMPFEHLUNG:\nIn Niedrigzinsphase: Lang binden!\nIn Hochzinsphase: Kurz binden!",cat:"Finanzierung"},
]

}; // Ende AppData
