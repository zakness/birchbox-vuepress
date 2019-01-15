# Dropdown

[`Dropdown`](/src/components/Dropdown/index.js) is a control that shows a relatively-positioned dropdown component (usually a menu) on click and/or hover.

## Props

Prop|Type|Description|Default
---|---|---|---
chevronColor|string\|func(isActive:bool):string|The chevron icon color. If `chevronColor` is a function, it is passed the Dropdown’s `isActive` state (`isOpen` or `isHovering`), and is expected to return a color string.|colorNeutral1F
className|string\|func(isOpen:bool):string|ClassName to pass to the control. If `className` is a function, it is passed the Dropdown’s `isOpen` state and is expected to return a string.|
closeOnScroll|bool|Close the dropdown when the user scrolls the window|false
dropdownClassName|string|ClassName to pass to the dropdown that is expanded on click.|
getDropdownPosition|func(controlRect):object|Required. Returns the dropdown positioning object. See [Positioning the dropdown](#positioning-the-dropdown) section below.|
isHoverable|bool|Whether or not the dropdown is triggered by hovering|false
isOpen|bool|Whether or not the dropdown is open. Use if you want to control the Dropdown state externally|
label|node\|HTML string\|func(isActive:bool)|Control label. Can be string, node, or function. If `label` is a function, it is passed the Dropdown’s `isActive` state (`isOpen` or `isHovering`), and is expected to return a string or node.|
onOpenChange|func(isOpen:bool)|Triggered right after the dropdown opens or closes|
to|object\|string|If set, control will navigate to this location on click|
trackingProps|object|This object is merged into the default [click event](/docs/guides/event-logging/events/click.md) data.|

## Positioning the dropdown

When the `Dropdown` control is activated it will position its child component using the `top`, `right`, `bottom`, `left`, and `overlap` keys from the object returned by the `getDropdownPosition` prop. `getDropdownPosition` is passed a reference to the control [`Rect`](/docs/utils/Rect.md) so it can be used in the position calculations. The positioning origin coordinates are the top-left corner of the control.

This example positions the dropdown directly below the control, aligning the dropdown and control’s right edges:

```jsx
<Dropdown
  label='My Menu'
  getDropdownPosition={(controlRect) => ({ top: controlRect.height, right: 0 })}
>
  <ul>
    <li>Menu Item 1</li>
    <li>Menu Item 2</li>
    <li>Menu Item 3</li>
  </ul>
</Dropdown>
```

If the dropdown’s position intersects the control, the default behavior is for the control to be rendered on top. If you want the dropdown to be rendered on top of the control instead, set `overlap` to `true`:

```jsx
<Dropdown
  label='My Menu'
  getDropdownPosition={(controlRect) => ({ top: controlRect.height - 5, right: 0, overlap: true })}
>
  <div>This dropdown element will cover the bottom 5px of the control</div>
</Dropdown>
```

## Passing state and methods to the dropdown child component

Sometimes the dropdown needs to do or know things typically controlled by its parent. For example, perhaps the dropdown contains a Clickable that should close the dropdown on click. Another example is the dropdown having its own state that needs to be reset if the dropdown closes.

To pass props to the dropdown child, declare `Dropdown`’s child as a function. This function will receive an object with the `close` method and `isOpen` state as arguments.

```jsx
<Dropdown>
  {({ close, isOpen }) => <div>
    {items.map((item) =>
      <div key={item.key} onClick={close}>{item.label}</div>
    )}
  </div>}
</Dropdown>
```

N.B.: Dropdowns will automatically close when the browser location changes.
