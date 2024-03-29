<h1 align="center">Weather App</h1>

<p align="center">
  <img src="frontend/public/logo192.png" width="120px" height="120px" />
</p>

<p align="center">
  <img src="https://github.com/cristian-azocar/weather-app/actions/workflows/test-frontend.yaml/badge.svg">
  <img src="https://github.com/cristian-azocar/weather-app/actions/workflows/test-backend.yaml/badge.svg">
</p>

<hr />

**Weather App** is a React + Node.js application I made to learn new technologies, and of course, for fun. I think that getting your hands dirty is the quickest way to learn new things.

The website is basically an interactive map that shows the current weather of a selected place. Behind the scenes, it takes the coordinates (longitude and latitude) of the location and sends them to an external API to get the data.

**View a live version of the website [here](https://cristian-azocar.github.io/weather-app)**.

## What is included in this application?

- Monorepo with both frontend and backend projects.
- All code strongly-typed with [Typescript](https://www.typescriptlang.org/).
- Frontend built with [React](https://reactjs.org).
  - Bootstraped using [Create React App](https://github.com/facebook/create-react-app).
  - [Material-UI](https://material-ui.com/) and [CSS-in-JS](https://cssinjs.org/) to style the components.
  - Fetch data using [React Query](https://react-query.tanstack.com).
- Backend built with [Node.js](https://nodejs.org) and [Express](https://github.com/expressjs/express).
  - Hot-reload with [Nodemon](https://nodemon.io).
  - Cache layer using [Redis](https://redis.io/).
  - Request validations using [joi](https://joi.dev).
- Good and clean code practices using [ESLint](https://eslint.org/) (based on [Airbnb configuration](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)), [Prettier](https://prettier.io/) and [EditorConfig](https://editorconfig.org/).
- Both backend and frontend [dockerized](https://www.docker.com), and [docker-compose](https://docs.docker.com/compose/) to quickly mount the environment.
- Continuous integration and deployment with [GitHub Actions](https://github.com/features/actions).
  - Run unit tests on every push using [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/).
  - Auto-deploy when pushing to `master`.

## External resources

This app uses two external resources to work properly:

- [Leaflet](https://leafletjs.com): an open-source library to display interactive maps.
- [OpenWeather](https://openweathermap.org/): provides APIs to get weather forecasts.

## Backend endpoints

The backend includes the following endpoints:

| Endpoint     | Method | Description                                |
| ------------ | ------ | ------------------------------------------ |
| /api/weather | GET    | Gets the weather given a coordinate        |
| /api/health  | GET    | Gets the health information of the backend |

## Getting started

### Prerequisites

You need to have installed the following:

- Git
- Node.js
- Docker (only needed if you want to run the containers)

### Installing

There's two ways to install and run the project:

- Manually: this option requires more manual steps (install dependencies, install and configure Redis, set environment variables, etc) and so it's not advisable to do it this way.
- Using Docker: this is the recommended option as it's by far the easiest and quickest way to get the project running. The installation will focus on this option.

Clone the repository:
```
git clone https://github.com/cristian-azocar/weather-app.git
```

Install the dependencies:
```
cd weather-app
npm install --prefix backend
npm install --prefix frontend
```

Configure the OpenWeather API key by creating a file called `.env` at the root of the `backend` folder with the following content:
```
WEATHER_API_KEY=(your api key goes here)
```

Run the application using Docker Compose:
```
docker-compose up
```
Note: if you want to run the containers in the background, use the `-d` flag (e.g. `docker-compose up -d`).

## Continuous integration and deployment with GitHub Actions

The project is configured to use GitHub Actions as a CI/CD service. The files located in `.github/workflows` instructs GitHub to execute two actions:

- Run unit tests on every push, so that way we ensure that all the pushed code is stable and bug-free (or as bug-free as possible). The repository is also configured to prevent merging a pull request if the tests hasn't passed.
- Auto-deploy on every push to `master`, either by directly pushing to the branch or by merging a pull request.

The application is deployed in two platforms: [GitHub Pages](https://pages.github.com) for the frontend, and [Heroku](https://www.heroku.com) for the backend.
