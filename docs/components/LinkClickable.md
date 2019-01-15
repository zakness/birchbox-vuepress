# LinkClickable

Use [`LinkClickable`](/src/components/LinkClickable/index.js) if you want a `Clickable` that looks like a `Link`.

## Props

Prop|Type|Description|Default
---|---|---|---
children|`node`|LinkClickable children|
className|string|Passed through.|
colorPair|array| Two colorNames for link's underline states, default and hover respectively | [ 'majorColorDark', 'majorColorLight' ]
disabled|bool|If true, prevents `onClick` from executing and applies `disabled` styling|false
decorate|bool|If true, adds the default `<a>` styling.|false
onClick|func|Thing to do on click|
onHoverChange|func(hovering:bool)|Triggered with `true` when mouse enters element, `false` when mouse leaves|
trackingProps|obj|This object is merged into the default [click event](/docs/guides/event-logging/events/click.md) data.|
