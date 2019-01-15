# Collapse

[`Collapse`](/src/components/Collapse/Collapse/index.js) is an [adapted](/enhancers/Adapter.md) collapsible component with a highly-customizable header and content. If you have a group of `Collapse`s and want to ensure only one is expanded at a time, wrap them in [`Accordion`](#accordion).

Prop|Type|Description|Default
---|---|---|---
children|`node` or `func({ isExpanded:bool, collapse:func, expand:func, toggle:func }):node`|Single content element that is expanded or collapsed. If a function, it is passed the current expanded state and instance methods and should return a node.|
className|`string` or `func(isExpanded:bool):string`|Style applied to the container element. If a function, it is passed the current expanded state and should return a string.|
collapseKey|`string`|Optional. Inside a controlled `Accordion`, `Collapse`s are collapsed unless their `collapseKey` is equal to the `Accordion`’s `expandedKey`. See [`Accordion` docs](#accordion).|
contentPosition|`oneOf(static, absolute)`|If `static`, the content is part of the normal document flow. If `absolute`, it is positioned absolutely below the header.|`static`
disabled|bool|Disable the header (clicking does nothing)?|false
header|`node` or `func({ isExpanded:bool, collapse:func, expand:func, toggle:func }):node` or `bool`|Completely replace the header element. If a node, it will be wrapped in `Clickable` and toggle the expanded state on click. If a function, it is passed the current expanded state and instance methods and should return a node. If `false`, `Collapse` is rendered without a header.|
headerClassName|`string` or `func(isExpanded:bool):string`|Style applied to the header element. If a function, it is passed the current expanded state and should return a string. Ignored if `header` prop is a function.|
icon|`node` or `func(isExpanded:bool):node` or `oneOf(chevron, plus)`|If a string, uses one of the standard icon configs. If a function, it is passed the expanded state and should return a node.|`chevron`
iconClassName|`string` or `func(isExpanded:bool):string`|Style applied to the icon’s container element. If a function, it is passed the current expanded state and should return a string.|
iconWidth|`number`|Width of standard icon|13
isDefaultExpanded|`bool`|The initial expanded state. Use if you want to let user interactions control the expanded state entirely.|`true`
isExpanded|`bool`|The current expanded state. Use if you want to control the expanded state. `Accordion` will set this prop on all its child `Collapse`s.|
label|`string` or `node` or `func(isExpanded:bool):string|node`|The main display area of the header, next to the icon. If a function, it is passed the current expanded state and should return a string or node.|
labelClassName|`string` or `func(isExpanded:bool):string`|Style applied to the label’s container element. If a function, it is passed the current expanded state and should return a string.|
onChange|`func(isExpanded:bool)`|Fired when `Collapse`’s expanded state changes due to user interaction.|

## Customization and usage

**Header**

`Collapse`’s header element is highly customizable. You can style or replace the header in the following ways (listed in increasing powerfulness):

- Use one of the standard icon types by passing an accepted string to the `icon` prop.
- Apply styles to the label, icon, and/or entire header using `labelClassName`, `iconClassName`, and `headerClassName` props. For example, you may want to change the label’s font via `labelClassName` or add horizontal padding via `headerClassName`. If these styles depend on the expanded state, just pass a function that accepts a bool and returns a string.
- Replace the label or icon components by passing a node to the `label` or `icon` props. If these components depend on the expanded state, just pass a function that accepts a bool and returns a node (and/or a string in `label`’s case).
- Replace the entire header by passing a node to the `header` prop. If you need total control over the header, pass a function and use the supplied state and method arguments to return an interactive node.
- Remove the header by passing `false` to the `header` prop. This effectively gives you a container that can expand and collapse.

**Content**

If content components need to handle user interactions affect `Collapse` state, you can pass a function that returns the content as the child of `Collapse`. This function supplies the expanded state and instances methods as args to be used by child component props. For example, you may want to collapse on click.

```jsx
<Collapse>
  {({ collapse }) => <div>
    <Clickable onClick={collapse}>Done</Clickable>
  </div>}
</Collapse>
```

# Accordion

Wrap multiple `Collapse`s in [`Accordion`](/src/components/Collapse/Accordion/index.js) if you want to ensure that only one of them can be expanded at a time.

Prop|Type|Description|Default
---|---|---|---
className|string|Passed through to wrapper div.|
disabled|bool|Disable the `Collapse` headers (clicking does nothing)?|false
expandedKey|string|Key of currently expanded `Collapse`. Use if you want to control the `Accordion` state.|
defaultExpandedKey|string|Key of initially-expanded `Collapse`. Use if you want to let user actions control the `Accordion` state.|
onChange|`func(expandedKey:string)`|Fired when the expanded state changes and passed the current `expandedKey` or `null` if nothing is expanded.|

If `collapseKey` is omitted on children, their index is used. For example, the following are equivalent:

```jsx
<Accordion expandedKey='foo'>
  <Collapse />
  <Collapse collapseKey='foo' />
  <Collapse />
</Accordion>

<Accordion expandedKey='1'>
  <Collapse />
  <Collapse />
  <Collapse />
</Accordion>
```
