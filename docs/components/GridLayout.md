# GridLayout

`GridLayout` provides two components — [`<Row>`](/src/components/GridLayout/Row.js) and [`<Col>`](/src/components/GridLayout/Col/index.js) — for laying out components on our [grid](/src/utils/grid.js). It connects to the `grid` redux state to get the grid config and uses flexbox features to align and size content appropriately.

## Basic Example

To align components to the grid, render a `<Row>` and then wrap each item in a `<Col>`:

```jsx
import { Row, Col } from 'components/GridLayout'

<Row>
  <Col span={4}>Something</Col>
  <Col span={5}><AnotherThing /></Col>
  <Col>Last thing</Col>
</Row>
```

See the `/dev/grid` page for more examples.

## `<Row>` props

**Note:** Row is [adapted](/enhancers/Adapter.md), so you can specify breakpoint value objects as any of these props. Useful when the Col distribution should change across breakpoints.

### className
```
PropTypes.string
```
Passed through to the wrapping div. Do not override `display`, `flex-*`, or horizontal `margin` style values, as those are necessary to make the layout work.

### columnCount
```
PropTypes.number
```
The total number of columns in the Row. Used to calculate the child Cols’ `flex-basis` values. When a Row is a direct child of a Col, the Col will inject its `span` value as `columnCount` on the Row. If this prop is omitted, the `grid.columnCount` redux value will be used.

### justify
```
PropTypes.oneOf([ 'left', 'right', 'center' ])
```
If the child Cols do not span the full width of the Row, use this prop to align the group of cols to the left, right, or center (uses `justify-content` to achieve this).

Default: `left`

### stacked
```
PropTypes.bool
```
Set to `true` if you want each Col to stack on top of each other (with the grid gutter width margin between them). When stacked, the Cols’ `span` prop is ignored and each Col takes up the full width of the Row.

**ProTip!** Since Row’s props are [adapted](/enhancers/Adapter.md), you can easily specify this for narrow only with `stacked='narrowOnly'`.

Default: `false`

## `<Col>` props

**Note:** Col is [adapted](/enhancers/Adapter.md), so you can specify breakpoint value objects as any of these props. Useful when the Col distribution should change across breakpoints.

### className
```
PropTypes.string
```
Passed through to the div. Do not override `flex-*`, or horizontal `padding` style values, as those are necessary to make the layout work.

### columnCount
```
PropTypes.number
```
The total number of columns in the parent Row. Used to calculate the Col’s `flex-basis` value. This is automatically injected by `Row`, so you wont want to mess with it.

### gutterWidth
```
PropTypes.number
```
The width of the grid’s gutters. This is automatically injected by `Row`, so you wont want to mess with it.

### span
```
PropTypes.number
```
How many columns Col should span. If `span` is undefined, Col will stretch to fill the available space. If multiple Cols under a single Row have undefined `span`s, the space is distributed evenly among them (uses `flex-grow` to achieve this).

**ProTip!** If you want all your Cols to have the same width, just omit the `span` prop on all of them.

## No CSS Grid?

CSS Grid is pretty sexy, but unfortunately some browsers (IE, Safari 10) don’t support it yet. Since they would need a flexbox fallback anyway, we just implemented a flexbox-based version to be used by all browsers. In the future when we can drop support for the incompatible browsers we can perhaps migrate to a CSS Grid implementation.
