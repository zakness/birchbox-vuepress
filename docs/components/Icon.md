# Icon

[`Icon`](/src/components/Icon/index.js) is a component that displays SVG icons. 

## Sizing

Icon scaled by width or height, depending on which prop is supplied. If both or neither are supplied and `responsive` is `false`, then the default height applies.

## Props

Prop|Type|Description|Default
---|---|---|---
className|string|Passed through to svg wrapper div.|
color|`string` or `func(isHovering:bool):string`|Primary icon color. If a function, it is passed the current hovering state and should return a color string.|`'colorNeutral1F'`
color2|`string` or `func(isHovering:bool):string`|Secondary icon color. If a function, it is passed the current hovering state and should return a color string.|
height|number|Icon height (pixels)|18
icon|string|Icon name from components/Icons/index.js
responsive|bool|Should Icon stretch to fill its parent’s width? (Ignores width/height props)|false
width|number|Icon width (pixels)|
