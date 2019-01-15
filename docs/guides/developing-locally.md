# Developing on your local machine

## Environment Dependencies

- [Node.js](https://nodejs.org/en/download/) v6.6.0
- [yarn](https://yarnpkg.com/lang/en/docs/install/)

## Installation

Clone repo and install external dependencies:

```sh
git clone git@github.com:/birchbox/bernard_black && cd bernard_black
yarn
```

## Running app server

```
TARGET=[com|es|uk] yarn run start
```

Site now available at `localhost:3000` using staging backend.

## Running app server with a built webpack bundle (no hot reloading)

```
TARGET=[com|es|uk] yarn run start-bundle
```

Site now available at `localhost:3000` using staging backend.

## Chrome extensions

Install these so you can debug React and Redux in-browser.

- [React Developer Tools](https://github.com/facebook/react-devtools)
- [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension)

## Adding dependencies

```sh
yarn add ...
```

Consult yarn [docs](https://yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison) for specific options

## Other development scripts

Scripts are defined in [`package.json`](/package.json).

* `yarn run clean` - clean the dist directory
* `yarn run lint` - run [ESlint](http://eslint.org/) and [stylelint](https://github.com/stylelint/stylelint) on src directory
* `yarn run test` - alias for lint (for now)
* `TARGET=? yarn run check-entry-chunk-size` - runs build-production and outputs the gzipped file size of app.js
* `TARGET=? yarn run bundle-stats` - runs build-production and outputs the bundle stats json to be [analyzed](https://webpack.js.org/guides/code-splitting/#bundle-analysis)
* `TARGET=? yarn run build-local` - builds a webpack bundle in production mode on a local machine
