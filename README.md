<h1 align="center">Weather App</h1>

<p align="center">
  <img src="frontend/public/logo192.png" width="120px" height="120px" />
</p>

<hr />

**Weather App** is a React + Node.js application I made to learn new technologies, and of course, for fun. I think that getting your hands dirty is the quickest way to learn new things.

**View a live version of the website [here](https://cristian-azocar.github.io/weather-app)**.

## What is included in this application?
- Monorepo with both frontend and backend projects.
- All code strongly-typed with [Typescript](https://www.typescriptlang.org/).
- Frontend built with [React](https://reactjs.org).
  - Bootstraped using [Create React App](https://github.com/facebook/create-react-app).
  - [Material-UI](https://material-ui.com/) and [CSS-in-JS](https://cssinjs.org/) to style the components.
- Backend built with [Node.js](https://nodejs.org) and [Express](https://github.com/expressjs/express).
  - Hot-reload with [Nodemon](https://nodemon.io).
  - Cache layer using [Redis](https://redis.io/).
  - Request validations using [joi](https://joi.dev).
- Good and clean code practices using [ESLint](https://eslint.org/) (based on [Airbnb configuration](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)), [Prettier](https://prettier.io/) and [EditorConfig](https://editorconfig.org/).
- Both backend and frontend [dockerized](https://www.docker.com), and [docker-compose](https://docs.docker.com/compose/) to quickly mount the environment.
- Automatic deploy using [GitHub Actions](https://github.com/features/actions).

## External resources
This app uses two external resources to work properly:
- [Leaflet](https://leafletjs.com): an open-source library to display interactive maps.
- [OpenWeather](https://openweathermap.org/): provides APIs to get weather forecasts.

## TODO
- Create unit tests.
- Create a health endpoint.
- Add `Husky`.
- Run unit tests using `Github Actions`.
- <strike>Create a welcome dialog.</strike>
- Move API Key to `.env.local` file and delete it from `docker-compose`.
- <strike>Add deployment of backend in `Github Actions`.</strike>
- Display text in english and spanish.
- Add `app-module-path`.
- Document the API using the `OpenAPI` specification and `Swagger`.