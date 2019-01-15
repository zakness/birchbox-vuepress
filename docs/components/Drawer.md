# Drawer

[`Drawer`](/src/components/Drawer/index.js) is a controlled component for rendering content in a full-height container that slides in from the side of the screen.

## Props

Prop|Type|Description|Default
----|----|----|----
close|func|Required. Calling this should set the external open state to `false`.|
closeOnBreakpointChange|bool|Close the drawer if the breakpoint changes?|`true`
color|string|The drawer’s background color|`colorWhite`
didClose|func|Optional. Called after the drawer closes.|
displayStyle|oneOf(fixed, absolute)|The CSS `position` value of the Drawer container.|`absolute`
isOpen|bool|Required. Whether or not the Drawer is visible.|
side|oneOf(left, right)|The side of the screen to which the Drawer is anchored.|`right`

## Notes

- When the Drawer is shown, it fully covers its container with a dimmed pane. Clicking this pane will close the Drawer.
- When the Drawer is hidden, it renders `null` (after the animation completes)
- In wide, the Drawer has a fixed width. In narrow, it is `100vw - 40px`.
- The Drawer is controlled because by its nature it must be openable via actions outside of itself.

## Examples

- [RefineDrawer](/src/views/catalog/components/RefineDrawer/index.js) - Product filter UI in catalog views (wide only)
- [CartFlyout](/src/components/CartFlyout/index.js) - Wide cart UI
- [DevMenu](/src/components/DevMenu/index.js) - Menu with links to /dev views
