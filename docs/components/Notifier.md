# Notifier

[`Notifier`](/src/components/Notifier/index.js) is a container for notifications. Notifier is a singleton; To display or hide notifications, use the `addNotification` and `removeNotification` actions from `actions/notifications`. New notifications will slide down from the top of the screen and push any existing notifications down. Notifications can be dismissed by tapping the close icon or swiping horizontally. The topmost notification can also be dismissed by swiping up.

## `addNotification`

`addNotification` is passed a single data object with the following props:

Prop|Type|Description|Default
----|----|----|----
media|`{ type, props }`|Optional media to be displayed to the left of the message. `type` determines the component to render, passing `props` through.|
message|string|The notification text|
replace|bool|If `true`, any notifications with the same tag are removed when this one is added.|`false`
showOnce|bool|If `true`, the dismissed message will not display again until a user starts a new session.
timeout|'short'\|'medium'\|'long'\|number|If set, notification will automatically dismiss after `timeout` milliseconds. If 'short', uses `CONFIG.messageTimeoutShort` (and similarly for the other constants).|
tag|string|Optional. Allows removing multiple notifications with the same tag.|
title|string|The notification title|
type|`success|error`|Determines color scheme|`success`

### Media types

- `image` → `<Image />`
- that’s it for now
- maybe we’ll add `icon` later

### Example

Here’s an example for a successful add to cart notification:

```jsx
import { addNotification } from 'actions/notifications'

addNotification({
  timeout: 'medium',
  message: 'Atelier Cologne Soap added to your cart.',
  media: {
    type: 'image',
    props: {
      src: 'https://static.birchbox.com/shop/media/catalog/...',
      ratio: 'circle',
    },
  },
})
```

## `removeNotification`

`removeNotification` is passed a single options object with the following props:

Prop|Type|Description
----|----|----
key|string|Removes notification with the specified `key`.
tag|string|Removes notifications with the specified `tag`.

### Example

Here’s an example for removing one or more notifications via tag:

```jsx
import { removeNotification } from 'actions/notifications'

removeNotification({ tag: 'foo' })
```
