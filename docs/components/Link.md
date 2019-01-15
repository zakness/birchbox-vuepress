# Link

[`Link`](/src/components/Link/index.js) is an `<a>` connected to React Router. Use whenever you want to navigate to another view on click.

## Note

This component is imported globally by Webpack, so an ```import Link``` statement is redundant.

## Props

Prop|Type|Description|Default
---|---|---|---
children|`node` or `func({ isHovering:bool }):node`|Link children. If a function, it is passed the current hovering state and should return a valid React child.|
colorPair|array| Two colorNames for link's underline states, default and hover respectively | [ 'majorColorDark', 'majorColorLight' ]
disabled|bool|If disabled, component is given `25%` opacity and is not clickable.|false
decorate|bool|If true, adds the default `<a>` styling.|false
to|oneOf(string, object)|URL (string) to navigate to, or a [location descriptor](https://github.com/ReactTraining/history/blob/master/docs/Glossary.md#locationdescriptor) (object). If the URL string starts with `//`, client-side routing is bypassed|
onClick|func(event:object)|Perform an action before triggering URL change. Cancel default `Link` behavior by calling `event.preventDefault()` (also cancels default `<a>` behavior).|
onHoverChange|func(hovering:bool)|Triggered with `true` when mouse enters element, `false` when mouse leaves|
trackingProps|object|This object is merged into the default [click event](/guides/event-logging/events/click.md) data.|
