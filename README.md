# Star Wars

A guide to Star Wars characters: choose a side to change the color theme, browse the characters page by page, open one for details and films, search by name and keep a list of favorites. Built in November 2021 as a learning project.

**Live demo:** [react-star-wars-coral.vercel.app](https://react-star-wars-coral.vercel.app)

## Features

- "Choose your side" home page: Light Side, Dark Side or Han Solo changes the header color, the page background and the logo icon.
- Paginated people list with portraits, where the Prev and Next links change the `?page=` query parameter.
- Character page with height, mass, hair, skin and eye color, birth year, gender and the films sorted by episode, plus a Go Back button.
- Search by name with a 400 ms debounce, a loading spinner, a clear button and a "No results" state.
- Favorites: a button on the character page adds or removes the character, the list is saved in `localStorage`, and the header counter goes up to "9+".
- Error screens: a 404 page for unknown paths and API 404 responses, a 500 screen and a generic error screen. The Not Found and Fail menu items open the 404 page and the 500 screen.
- Burger menu below 700 px.

## Tech stack

- **Framework:** React 17
- **State:** Redux 4, React Redux 7, Redux Thunk 2, React context for the theme
- **Data:** Axios 0.24
- **Routing:** React Router 6
- **Styling:** SCSS with CSS modules (Dart Sass 1), CSS custom properties for the themes
- **Tooling:** Create React App 4 with react-app-rewired 2, ESLint 7 (Airbnb), Stylelint 14, Prettier 2
- **Hosting:** Vercel

## Getting started

You need Node.js 14 or 16 and Yarn 1. The API needs no key.

```bash
git clone https://github.com/androfficial/react-star-wars.git
cd react-star-wars
yarn install
yarn start
```

The app opens at http://localhost:3000.

## Scripts

| Command | Description |
| --- | --- |
| `yarn start` | Starts the development server through react-app-rewired |
| `yarn build` | Builds the production bundle into `build/`; it sets `CI=false`, so ESLint warnings do not fail the build on CI servers |
| `yarn eslint` | Lints `.js` and `.jsx` files |
| `yarn eslint:fix` | Lints `.js` and `.jsx` files and fixes what it can |
| `yarn stylelint` | Lints the SCSS files in `src/styles` |
| `yarn stylelint:fix` | Lints the SCSS files in `src/styles` and fixes what it can |
| `yarn format` | Checks formatting with Prettier |
| `yarn format:fix` | Formats the files with Prettier |

## Project structure

```text
src/
  assets/       images, icons and backgrounds
  components/   App, Header, Card, Button, Navigation, Preloader, ErrorMessage, NotFound and others
  constants/    API root and portrait host
  context/      ThemeProvider: current side and favorite check
  hoc/          withErrorApi: error screens for failed API calls
  hooks/        useQueryParams
  pages/        Home, People, Person, Search, Favorites and Fail
  redux/        store, actions and reducers for people, person and favorites
  services/     character ID and portrait URLs, theme variables, mobile detection
  styles/       global SCSS, theme variables and the style module
  utils/        Axios API client and localStorage helpers
```

## Notes

- Characters come from `swapi.py4e.com`, a mirror of the Star Wars API, and portraits from the swapi-gallery mirror of the former Star Wars Visual Guide images.
- `config-overrides.js` adds import aliases such as `@components` and `@redux` through react-app-rewire-alias, which the ESLint import resolver mirrors, and runs Stylelint through stylelint-webpack-plugin in development.
- A `store.subscribe` listener writes the favorites to `localStorage`. The chosen side is not saved.
