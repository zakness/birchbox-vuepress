# ScrollNav

[`ScrollNav`](/src/components/ScrollNav/index.js) is a component that renders an overlaid a vertical navigation bar. Users can click or pan along the nav items to scroll to specific child components. ScrollNav identifies these children by looking for the `scrollKey` prop.

## Props

Prop|Type|Description|Default
---|---|---|---
className|string|Passed through.|

ScrollNav makes the following modifications to passed-in style and children:
- Any children with a truthy `scrollKey` prop will be wrapped by `RefWrapper`
- ScrollNav enforces `position:relative` if `className` or `style` props do not provide positioning
- ScrollNav enforces `overflow:hidden`

## Example

```css
.scroller {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
```
```jsx
<ScrollNav className={styles.scroller}>
  <ul scrollKey='A'>
    <li>Ayres</li>
    <li>Air Repair</li>
  </ul>
  <ul scrollKey='B'>
    <li>Balance Me</li>
    <li>Beauty Protector</li>
  </ul>
  <ul scrollKey='C'>
    ...
    <ul scrollKey='C-sub'>
      // nesting scrollKeys works too
    </ul>
  </ul>
</ScrollNav>
```
