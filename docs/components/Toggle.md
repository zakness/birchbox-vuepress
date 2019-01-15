# Toggle

[`Toggle`](/src/components/Toggle/index.js) is a component that looks like an iOS-inspired switch.

## Props

Prop|Type|Description|Default
---|---|---|---
checked|bool|Switched on? Use if Toggle is controlled|
defaultChecked|bool|Start switched on? Use if Toggle is not controlled|false
height|number|Height in pixels, will scale appropriately.|30
label|string|Optional label to display to the right of the switch|
onClick|func(bool)|Fired when clicked with the new checked value|
optionLabel | object{ key: 'string' } | Label Options for switch on/off states ex: `{ on: 'YES', off: 'NO' }`
