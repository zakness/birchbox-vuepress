# AsyncButton

[`AsyncButton`](/src/components/AsyncButton/index.js) is a button that performs an async action (re: promise) on click. When the action is in progress, `AsyncButton` is disabled and displays a pending message. When the action completes successfully, a success message is briefly displayed before switching back to the initial label. If the action fails, the initial label is displayed immediately. These message transitions are animated.

## Props

Prop|Type|Description|Default
---|---|---|---
authRequired|bool|Passed through to underlying `Clickable`. If `true` and user is logged out, displays the login modal and then performs the `onClick` action after logging in.|false
buttonStyle|string|One of the valid button styles.|default
isDelayed|bool|If `true`, does not display `labelPending` even if the action is pending. Use if `onClick` does something else before actually making an async request, like showing a modal.|false
isDisabled|bool|If true, prevents `onClick` from executing and applies custom disabled styling. `AsyncButton` is automatically disabled while the action is pending, so only set this to `true` if you want to disable it for another reason.|false
label|string|Label to display in the default state.|
labelPending|string|Label to display on click while the action is in progress. An animating ellipsis is appended to this label.|
labelSuccess|string|Label to display briefly when the action completes successfully.|
onClick|func|Thing to do on click. Must return a promise.|
trackingProps|obj|Event tracking props to be passed to the child Clickable component.|
