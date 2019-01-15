# Clickable

Use [`Clickable`](/src/components/Clickable/index.js) to provide `onClick` functionality to a tag or basic component. Use it instead of adding the `onClick` prop to DOM elements directly.

## Props

Prop|Type|Description|Default
---|---|---|---
children|`node` or `func({ isHovering:bool }):node`|Clickable children. If a function, it is passed the current hovering state and should return a valid React child.|
className|string|Passed through.|
disabled|bool|If true, prevents `onClick` from executing and applies `disabled` styling|false
onClick|func|Thing to do on click|
onHoverChange|func(hovering:bool)|Triggered with `true` when mouse enters element, `false` when mouse leaves|
trackingProps|obj|This object is merged into the default [click event](/docs/guides/event-logging/events/click.md) data.|
