# Yu Shi — personal website

A static portfolio with a Pokémon-inspired pixel aesthetic, research publications, and contact links. Hosted on GitHub Pages at [rain-sy.github.io](https://rain-sy.github.io/).

## Local preview

No build or package installation is required. From the repository root:

```sh
python -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765` in a browser.

## Editing

- `index.html`: profile, research interests, publications, and contact information.
- `assets/styles.css`: colors, pixel borders, and responsive layouts.
- `assets/site.js`: saved day/night preference and footer year. The content and navigation also work without JavaScript.
- `assets/pixel-world.svg`: hand-drawn pixel landscape and Pikachu companion.
- `assets/pgsr-window-tracery.gif` and `assets/pgsr-teaser.png`: original visual results from [PGSR](https://github.com/Rain-sy/PGSR/tree/main/assets). The publication preview uses the Window tracery comparison; reduced-motion preferences display the static teaser instead. Images are copied unchanged.
- `404.html`: matching not-found page. Uses root-relative assets so nested missing URLs work on GitHub Pages.

Google Fonts supplies Inter, IBM Plex Mono, and Press Start 2P; system fallbacks are defined if fonts cannot load.
