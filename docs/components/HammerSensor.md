# HammerSensor

[`HammerSensor`](/src/components/HammerSensor/index.js) is a component wrapper around the `Hammer` global supplied by [Hammer.js](http://hammerjs.github.io/getting-started/). Use it to handle gesture events like pan and swipe. This implementation is heavily influenced by [React-HammerJS](https://github.com/JedWatson/react-hammerjs).

## Event handling

Just add handlers for whatever events you want to capture:

```jsx
const Component = (props) => {
  const handlePan = (evt) => console.log(evt)
  return <HammerSensor onPan={handlePan}>
    <div>Pan me, bro</div>
  </HammerSensor>
}
```

Check the `handlerToEvent` object in the `HammerSensor` source code for a list of all supported event props.

See the [Hammer Event object API](http://hammerjs.github.io/api/#event-object) for details on the object passed to all handlers.

### Direction

`Hammer` uses integer constants to represent event directions. These have been copied onto the `HammerSensor` class and can be efficiently compared using [bitwise operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators):

```jsx
const { LEFT, RIGHT } = HammerSensor.DIRECTION
if (event.direction & (LEFT | RIGHT)) {
  // we horizontal, baby!
}
```

See the [Hammer Constants API](http://hammerjs.github.io/api/#constants) for all direction values. Note that `HammerSensor` groups directions on a `DIRECTION` object while `Hammer` does not (i.e. `HammerSensor.DIRECTION.RIGHT` vs `Hammer.DIRECTION_RIGHT`).


## Troubleshooting

### Pinch and/or rotate doesn’t work!

Hammer does not listen for `pinch` and `rotate` events by default because they block scrolling. If you want to handle these events, you must explicitly enable them via the `options` prop:

```jsx
<HammerSensor onPinch={...} options={{ recognizers: { pinch: { enable: true } } }}>
  <div>Ouchies!</div>
</HammerSensor>
```

### I can’t vertically swipe or pan!

Vertical swipe and pan are disabled by default because they block scrolling. If you want to enable them, set the `vertical` prop to `true`:

```jsx
<HammerSensor onSwipe={...} vertical> // Did You Know? This is shorthand for vertical={true}
  <div>Up, up, and away!</div>
</HammerSensor>
```

### My events work initially and then stop working sometimes!

Check to see if you’re updating HammerSensor’s direct child component as a result of gesture handling. If React is re-rendering this component, it might throw Hammer’s calculations out of whack. The fix is to keep the direct child relatively constant.

```jsx
// Bad! HammerSensor is listening to events on that div, which gets transformed on swipe!
<HammerSensor onSwipe={(e) => this.setState({ offset: e.deltaX })}>
  <Motion style={{ offset: spring(this.state.offset) }}>
    {({ offset }) => (
      <div style={{ transform: `translate3d(${offset}%, 0, 0)` }}>
        {stuff}
      </div>
    )}
  </Motion>
</HammerSensor>

// Fixed with a buffer div that doesn’t get transformed.
<HammerSensor onSwipe={...}>
  <div>
    <Motion style={...}>
      ...
    </Motion>
  </div>
</HammerSensor>
```

### None of my events work!

It’s probably the browser’s fault. Try toggling mobile device emulation, closing and reopening DevTools, or opening a fresh tab.
