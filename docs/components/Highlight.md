# Highlight

[`Highlight`](/src/components/Highlight/index.js) is a component that visually highlights its children with one of several SVG backgrounds.

## Usage

```jsx
<div>I want to emphasize <Highlight type='squiggle'>this phrase</Highlight>.</div>
```

## Props

Option | Type | Default | Description
------ | ---- | ------- | -----------
type | string | `'straight'` | Type of highlight (see all at <https://www.staging.birchbox.com/dev/highlights?enableBernard=true>). Most types will take the height of their children and scale the width accordingly. `'straight'` and `'plain'` will take both the height and the width of their children.
fill | string (css color) | `colorGreenNeon` | Color name from styles/variables.css
alignment | string | `'left'` | alignment of highlight relative to its children. Must be one of `'left'`, `'right'`, or `'center'`
className | string || CSS class applied to the Highlight wrapper
svgClassName | string || CSS class applied to the Highlight SVG element
