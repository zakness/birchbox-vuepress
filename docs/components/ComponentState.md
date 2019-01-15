# ComponentState

Too lazy to make your component a class, just so it can have state? Good news! [`ComponentState`](/src/components/ComponentState/index.js) will provide basic state management for you without all that `constructor` rigmarole.

`ComponentState` will handle cancelling any state updates that are invoked after the component has been unmounted, natch.

## Usage

```jsx
<ComponentState initialState={{ foo: 'bar' }}>
  {({ state, setState }) =>
    <div onClick={() => setState({ foo: 'nobar' })}>
      {state.foo}
    </div>
  }
<ComponentState/>
```

## Props

Prop|Type|Description|Default
---|---|---|---
initialState|object|Initial state data|`{}`

## Child function arguments

Prop|Type|Description
---|---|---
setState|function|Behaves the same as the traditional [setState()](https://reactjs.org/docs/react-component.html#setstate) method, but does not support a callback argument.
state|object|The current state of the component
