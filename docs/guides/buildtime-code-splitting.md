# Build-time Code Splitting

## Build Flags

The following build-specific variables are processed during build time and can be used to replace or exclude code from particular builds.

Variable|Type|Description
---|---|---
`_ENVIRONMENT_`|string|The app environment. One of 'development', 'staging', or 'production'
`_PRODUCTION_`|bool|`_ENVIRONMENT_` === 'production'
`_STAGING_`|bool|`_ENVIRONMENT_` === 'staging'
`_DEVELOPMENT_`|bool|`_ENVIRONMENT_` === 'development'
`_TARGET_`|string|The app target. One of 'com', 'es', or 'uk'
`_COM_`|bool|`_TARGET_` === 'com'
`_ES_`|bool|`_TARGET_` === 'es'
`_UK_`|bool|`_TARGET_` === 'uk'

## Build-specific imports

You can use `-ENVIRONMENT` or `-TARGET` patterns in import statements to import a build-specific version of a module.

For example, we only want to include dev routes in the `development` and `staging` environments. So, we create a special `production` version of the `routes.js` file and then use the `-ENVIRONMENT` pattern to import the correct one:

```sh
src/views/dev/routes-production.js    # exports a no-op
src/views/dev/routes.js               # exports the full set of dev routes
```
```jsx
import devRoutes from 'views/dev/routes-ENVIRONMENT'
```

Behind the scenes, [`NormalModuleReplacementPlugin`](https://webpack.js.org/plugins/normal-module-replacement-plugin/) replaces the request for `views/dev/routes-ENVIRONMENT` with `views/dev/routes-${process.env.ENV}`. If it can’t find one for the specific environment, it looks for a file without the `-ENVIRONMENT` pattern. The same logic applies for `-TARGET`.
