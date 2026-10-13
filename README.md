# Driftwood — Open Road Club

Ein kleines, installierbares Fahrspiel für iPhone und Desktop. Die Insel Cedar Cove lässt sich frei erkunden: Münzen einsammeln, Hindernissen ausweichen und Autos in der Garage freischalten.

## Spielen

Die Seite kann direkt über GitHub Pages veröffentlicht werden. Die enthaltene GitHub-Action veröffentlicht automatisch bei jedem Push auf `main`. Im Repository unter **Settings → Pages** als Quelle **GitHub Actions** auswählen. Nach dem ersten erfolgreichen Lauf ist das Spiel unter `https://<konto>.github.io/<repository>/` erreichbar.

Für die lokale Vorschau reicht ein statischer Webserver, zum Beispiel `python -m http.server 8000`; anschließend `http://localhost:8000` öffnen. Service Worker und Installation benötigen HTTPS oder localhost.

## iPhone

Den GitHub-Pages-Link in Safari öffnen und über **Teilen → Zum Home-Bildschirm** installieren. Querformat wird für die Fahrt empfohlen. Touch-Steuerung: links lenken, rechts bremsen und beschleunigen. Auf Desktop: WASD oder Pfeiltasten, `G` öffnet die Garage.

Münzen, gekaufte Autos und Auswahl werden lokal im Browser gespeichert. Das Spiel enthält ein kleines Offline-App-Shell-Caching; der erste Aufruf muss online erfolgen.
