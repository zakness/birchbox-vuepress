# Developing on dev containers

On dev containers, Tech Ops has built a `node-app` CLI for managing the node server. The process is run in a separate environment, so you cannot run the [`package.json`](/package.json) scripts directly like you can when [developing locally](/docs/guides/developing-locally.md).

Each target (com, es, uk) runs in a separate dev container.

## App URL

```sh
https://app.USER.dev.birchbox.TLD
```

## Repo location

```sh
cd ~/unit/TLD.birchbox.app/repo
```

## Issue commands to node app

```sh
node-app -c [start, stop, restart, check]
```

Note that when the server is restarted, it takes up to a minute to rebuild the app and begin handling requests again.

## Update or reinstall dependencies

```sh
node-app -c [update, reinstall]
```
`update` will run `npm install` and restart the server. `reinstall` does the same, but deletes the `node_modules` directory first.

## Use staging APIs

By default the node app will use your dev container’s APIs. If you want to use staging instead, use the `API_ENV` environment variable:

```sh
API_ENV=staging node-app -c restart
```

## Node server logs

```sh
cd ~/unit/TLD.birchbox.app/log/node-app
tail current
```
