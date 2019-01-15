# Separator

[`Separator`](/src/components/Separator/index.js) is a styled `<div>` that renders as a vertical or horizontal line.

**Note:** Separator is [adapted](/docs/enhancers/Adapter.md), so you can specify breakpoint value objects as any of its props.

## Example

```jsx
<Separator
  color={{ wide: 'colorNeutral9F' }}
  length={{ wide: unit16 }}
  margin={{ narrow: `${unit12} ${unit24}` }}
  orientation={{ narrow: 'horizontal', wide: 'vertical' }}
/>
```

## Props

### className
```
PropTypes.string
```
Passed through. The rest of the props try to account for most use cases, so ideally this is only necessary for complex cases.

### color
```
PropTypes.string
```
The color of the line. Can be a hex code, color variable name, or theme color name.

Defaults to `colorNeutralCD`.

### length
```
PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
```
How long should the line be? If number, it’s converted to `px`.

There is no default, so horizontal lines will extend the length of their container.

### margin
```
PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
```
Value for the CSS `margin` property. This could also be achieved using `className`, but adding margins is a very common use case.

### thickness
```
PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
```
How thick should the line be? If number, it’s converted to `px`.

Defaults to `1`.

### orientation
```
PropTypes.oneOf([ 'vertical', 'horizontal' ])
```
Is the line vertical or horizontal?

Defaults to `horizontal`.
