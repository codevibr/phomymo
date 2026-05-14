# Changelog

This is a lightweight changelog for this personal fork. Changes are grouped by date instead of formal version numbers for now.

## 2026-05-14

- Added multiline QR data editing so formatted JSON and other structured text can be pasted into QR codes without losing line breaks.
- Added a regression test covering multiline QR data entry.
- Added Docker support with a Dockerfile that builds a static Nginx image from the GitHub source.
- Added Docker Compose support for running the app behind a local or reverse-proxied deployment.
- Updated Docker, Compose, and package metadata to point at `https://github.com/codevibr/phomymo.git`.
- Added MIT license metadata and a NOTICE file preserving attribution to the upstream Phomymo project.
- Added an SVG favicon for cleaner browser tabs and homelab bookmarks.
- Added startup behavior that shows saved labels from Chrome local storage before opening a blank label.
- Added a New Blank Label action in the load dialog for intentionally starting fresh.
- Added regression coverage for the saved-label startup chooser and blank-label action.
