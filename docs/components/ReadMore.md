# ReadMore

[`ReadMore`](/src/components/ReadMore/index.js) is a component that can hide a body of text beyond a given number of lines. Also allows the user to toggle between collapsed and expanded states.

## Props

Prop|Type|Description|Default
---|---|---|---
className|string|CSS classname provided to wrap the content|
defaultExapnded|bool|Default expanded state|false
maxLines|number|Maximum number of lines to show when the text is collapsed|4
toggle|node or function(expanded, toggleExpanded)|Function or component to display as the toggle cta. If a function is provided it receives 2 parameters, `expanded` is the current expanded state of the component, `toggleExpanded` is the method used to toggle the expanded state.|
