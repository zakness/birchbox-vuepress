# canHover

The [`canHover`](/src/utils/canHover.js) util provides a way to target JS or CSS code based on whether or not the client device supports hover interactions as defined by the [`hover` media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover).

In JS this flag is a reliable way to ensure that critical interactions that key off hover can use alternate logic on devices that don’t support it. For example, a dropdown control may show its menu on hover and do something else on click, while on a touch device it must show its menu on tap.

In CSS this flag is important because many touch devices that don’t support hovering are not good about ignoring hover rules. For example, tapping a link in Mobile Safari will apply any `:hover` styles defined for that element and will not remove them until another element is tapped.

## JS Example

In JS, simply import the `canHover` boolean from `utils/canHover`:

```jsx
import canHover from 'utils/canHover'

<div
  onMouseEnter={() => {
    if (canHover) {
      this.setState({ isHovering: true })
    }
  }}
  onMouseLeave={() => {
    if (canHover) {
      this.setState({ isHovering: false })
    }
  }}
/>
```

## CSS Example

In CSS, use the `.canHover` global class to scope styles to hover-capable devices (this class is added to the `<html>` tag on app load):

```css
@value colorNeutralF1 from 'styles/variables.css';

.menuItem {
  composes: copy12 from 'styles/typography.css';
  padding: 4px 8px;
}

:global(.canHover) .menuItem:hover {
  background-color: colorNeutralF1;
}
```
