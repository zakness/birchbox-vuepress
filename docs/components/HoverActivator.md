# HoverActivator

[`HoverActivator`](/src/components/HoverActivator/index.js) is a component that provides logic for showing and hiding DOM elements (‘targets’) when the user hovers their mouse over other elements (‘sources’). The key benefit of `HoverActivator` is that it allows for more ergonomic mouse movements — the user can move their mouse between source and target elements in a straight(ish) line without the developer having to do something hacky with element sizes and/or positions.

`HoverActivator`’s core logic is based on [jQuery-menu-aim](https://github.com/kamens/jQuery-menu-aim). Essentially it listens to `mousemove` events and, based on the movement trajectory and the source and target positions, determines whether or not the user is heading towards the target.

See [Use Cases](#use-cases) for real-world examples that necessitated `HoverActivator`.

## Props

Prop|Type|Description|Default
---|---|---|---
getActiveKey|func|Returns the key that identifies the active target, or a falsey value if there is no active target. If there is only one target, its key should be truthy.|
isEnabled|bool|Whether or not `HoverActivator` should react to mouse movements|`true`
onActiveKeyChange|func(key)|Called when mouse movements trigger an activation or deactivation of a target. If activating, passes the target’s key (defaults to `true`). If deactivating, passes `null`.|
targetAlignment|oneOf(Rect.ALIGNMENT)|How `targetRect` is positioned relative to the source. See [`Rect` docs](/utils/Rect.md)|
targetRect|[`Rect`](/utils/Rect.md)|The target `Rect`|
debugId|string|If set, logs `HoverActivator` actions to the console. **Do not use in production.** |

## Making it work

In order for `HoverActivator` to work it must be hooked up to the source and target elements. This is achieved by passing references to the following `HoverActivator` instance methods to its children via a child render function:

### `handleSourceHoverChange(hovering:bool[, key:primitive])`

Call this with `hovering=true` when the mouse enters the source element, `hovering=false` when the mouse leaves. Pass `key` if the source is one of many, so that the proper target can be activated/deactivated.

### `handleTargetHoverChange(hovering:bool)`

Call this with `hovering=true` when the mouse enters the target element, `hovering=false` when the mouse leaves.

### Example

```jsx
import Clickable from 'components/Clickable'
import HoverActivator from 'components/HoverActivator'

import { absolute, hide } from 'styles/utilities.css'

class MyComp extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isActivated: false }
    autobind(this, 'renderChildren')
  }

  render () {
    const { sourceRect, targetRect } = this.state // see Rect docs for how to calculate these
    return <HoverActivator
      getActiveKey={() => this.state.isActivated}
      onActiveKeyChange{(key) => this.setState({ isActivated: key })}
      targetRect={targetRect}
      targetAlignment={sourceRect.getRelativeAlignment(targetRect)}
    >
      {this.renderChildren}
    </HoverActivator>
  }

  renderChildren({ handleSourceHoverChange, handleTargetHoverChange }) {
    return <div>
      <Clickable onHoverChange={handleSourceHoverChange}>source</Clickable>
      <div
        className={this.state.isActivated ? absolute : hide}
        // Note the use of _.partial: We do not want to overwrite the 'this'
        // binding of these methods, since they should point to the
        // HoverActivator component instance.
        onMouseEnter={_.partial(handleTargetHoverChange, true)}
        onMouseLeave={_.partial(handleTargetHoverChange, false)}
      >
        target
      </div>
    </div>
  }
}
```

## Use Cases

### Use Case 1: Dropdown

```
   A
.--------.
| button |
'--------'   B
.----------------.
|                |
|      menu      |
|                |
'----------------'
```

In the case of a dropdown, we want to show `menu` (target) when the user hovers over `button` (source). We also want to hide `menu` if the user passes over `button` heading away from `menu` (point `A`) and *not* hide `menu` if the user heads towards `menu` (point `B`).

### Use Case 2: Menu with Submenu

```
  .-------------------.---------------------.
  | A  menu item 1    |                     |
  |                   |                     | C
D |    menu item 2    |      submenu 1      |
  |                   |                     |
  |    menu item 3    |        B            |
  '-------------------'---------------------'
```

In the case of a menu with submenus, we want to show the submenu (target) corresponding to the appropriate menu item (source). We also do not want to show the wrong submenu if the user happens to pass over a different menu item on their way to the submenu (this could happen if the user goes from point `A` to `B` in the diagram above). We also want to hide the submenu if the user moves off of it (point `C`) or moves away from it right after showing it (point `D`).
