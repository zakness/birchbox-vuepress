# ButtonGroup

[`ButtonGroup`](/src/components/ButtonGroup/index.js) wraps multiple `Button`-like or `TextInput` components and does the following:
- Collapses their sides & borders by setting the `buttonGroup` prop
- Makes sure they are equal width via flex-basis (you can override this with the `equalize` prop)

```jsx
<ButtonGroup>
  <Button preset='primaryStroke' onClick={...}>Cancel</Button>
  <Button preset='primary' onClick={...}>Continue</Button>
</ButtonGroup>

<ButtonGroup equalize={false}>
  <TextInput label='Email Address' />
  <Button preset='primary' onClick={...}>Submit</Button>
</ButtonGroup>
```

**Width**

By default `ButtonGroup` will use the children’s content width for sizing. If you would prefer to fill the container, set the `fullWidth` prop to `true`.

*Note: In the Non-Evo wide breakpoint, `ButtonGroup`’s width is based on the old `widthButtonPairStandard` value (since button styles from `button.css` are all full-width).*

**Stacking**

Sometimes, especially on some mobile devices, the children do not quite fit side-by-side. When this happens you should set the `stacked` prop to `true` to have the children stacked on top of each other. When stacked, the children’s abutting sides are *not* collapsed like they are when side-by-side.

```jsx
// Now Continue is on top of Cancel in the narrow breakpoint
<ButtonGroup stacked={props.isBreakpointNarrow}>
  <Button preset='primaryStroke' onClick={...}>Cancel</Button>
  <Button preset='primary' onClick={...}>Continue</Button>
</ButtonGroup>
```

This uses `flex-direction: column-reverse` so the right-most button will appear on top.
