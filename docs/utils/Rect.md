# Rect

[`Rect`](/src/utils/Rect.js) is a class that represents a rectangle of discrete, immutable size and provides utility methods for performing calculations related to that rectangle. It’s especially useful for representing and comparing the size and position of DOM elements without having to constantly query the DOM.

`Rect` uses a coordinate system with an upper-left origin (same as browsers).

## Instantiation

A `Rect` can be created in one of two ways:

**From four points:**

```jsx
const rect = new Rect({ top: 0, right: 10, bottom: 10, left: 0 })
```

**From DOM node:**

```jsx
const rect = Rect.fromNode(node)
```

See [Measuring DOM Nodes](#measuring-dom-nodes) for tips on making sure the node is measurable.

## Static Properties & Methods

### `Rect.ALIGNMENT`

The `ALIGNMENT` constants describe the position of a `Rect` relative to another one. Values are:

```
ALIGNMENT.RIGHT ALIGNMENT.LEFT ALIGNMENT.ABOVE ALIGNMENT.BELOW
```

These values can be compared in a bitwise fashion.

### `Rect.fromNode(node:DomNode):Rect`

As mentioned above, creates a `Rect` from a DOM node.

## Instance Properties

Name|Type|Description
----|----|-----------
top|number|Top edge of the rectangle
left|number|Left edge of the rectangle
bottom|number|Bottom edge of the rectangle
right|number|Right edge of the rectangle
width|number|Width of the rectangle
height|number|Height of the rectangle
midpoint|`{ x, y }`|Rectangle’s midpoint

All properties are set at instantiation and should be treated as immutable.

## Instance Methods

### `containsRect(rect:{ top, right, bottom, left }):boolean`

Returns whether or not this Rect contains `rect`. Note that `rect` could be an instance of `Rect` or just an object with `top`, `right`, `bottom`, and `left` properties.

### `containsPoint(point:{ x, y }):boolean`

Returns whether or not this Rect contains `point`.

### `getRelativeAlignment(rect:{ top, right, bottom, left }):Rect.ALIGNMENT`

Returns an [`ALIGNMENT` constant](#rect-alignment) describing how `rect` is positioned relative to this one.

### `hasSize():boolean`

Returns `true` if both `this.width` and `this.height` are non-zero, `false` otherwise.

### `isEqual(rect:{ top, right, bottom, left }):boolean`

Returns whether or not `rect` has the same edges as this one.

## Measuring DOM Nodes

When creating a `Rect` from a DOM node inside a React component, remember that the node needs to be rendered and painted before it can be properly measured. It is recommended that you use the `onNextFrame` util when the component mounts or updates to be sure the node is measured correctly:

```jsx
import { onNextFrame } from 'utils/dom'

class MyComp extends React.Component {
  constructor (props) {
    super(props)
    this.state = { rect: null }
    autobind(this, 'measureRect')
    this.componentDidMount =
    this.componentDidUpdate =
    this.measureRect
  }

  measureRect () {
    onNextFrame(() => {
      const rect = Rect.fromNode(this.node)
      if (!rect.isEqual(this.state.rect)) {
        this.setState({ rect })
      }
    })
  }

  render () {
    const isMeasured = !!this.state.rect
    return <div ref={(node) => this.node = node}>
      {!isMeasured && 'Please wait, painting...'}
      {isMeasured && `I am ${this.state.rect.height}px high`}
    </div>
  }
}
```
