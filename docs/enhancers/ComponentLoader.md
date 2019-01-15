# ComponentLoader

[`ComponentLoader`](/src/enhancers/ComponentLoader/index.js) is a wrapper around [Loadable](https://github.com/thejameskyle/react-loadable) that provides features and a clean syntax for dynamically importing components via [import()](https://webpack.js.org/api/module-methods/#import-), a.k.a. [code splitting](https://webpack.js.org/guides/code-splitting/#dynamic-imports). By default, ComponentLoader sets a [MaskContainer](src/components/MaskContainer/index.js) as Loadable’s [LoadingComponent](https://github.com/thejameskyle/react-loadable/blob/master/README.md#creating-a-great-loading-component).

> NB: `ComponentLoader` is a global module in the Bernard Black application.

## API

ComponentLoader accepts [all options that Loadable accepts](https://github.com/thejameskyle/react-loadable/blob/master/README.md#loadable), plus an additional `maskContainerProps` option for passing props to the MaskContainer LoadingComponent.

```jsx
const MyComponent = ComponentLoader({
  loader: () => import('path/to/MyComponent'), // required
  maskContainerProps: { minHeight: 0 }, // optional
  ... // other react-loadable options
})

// react-loadable will pass any props to the component once it loads
const MyView = (props) =>
  <MyComponent foo={props.foo} />
```

## Example Usage

Load a component and show a MaskContainer if it takes more than 200ms (the default [delay](https://github.com/thejameskyle/react-loadable/blob/master/README.md#avoiding-flash-of-loading-component)) to load:

```jsx
const MyComponent = ComponentLoader({
  loader: () => import('path/to/MyComponent'),
})
```

Load a component without ever showing MaskContainer (useful for components that are not necessarily visible on mount, like [Notifier](src/components/Notifier/index.js)):

```jsx
const MyComponent = ComponentLoader({
  loader: () => import('path/to/MyComponent'),
  loading: null,
})
```

See the [react-loadable guide](https://github.com/thejameskyle/react-loadable/blob/master/README.md#------------guide) for a more in-depth look at how this works.
