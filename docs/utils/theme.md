# Theme

_**NOTE** These docs are out of date and will be updated before Site Evo launch_

## JS: utils/theme [DEPRECATED]

*These JavaScript utils are deprecated and will be phased out. If you need theme data, use styled-components or `connect` your Component to redux.*

_**Why deprecate these?**_

*By using one of these methods in a Component render method, you are declaring that the Component depends on theme data but are not passing that data as props. Therefore, if the theme changes, the Component will **not** re-render with the proper theme values unless a render happens to be triggered at the same time for another reason. In other words, using these utils breaks the [pure contract](https://reactjs.org/docs/components-and-props.html#props-are-read-only) React expects every Component to have with its props.*

### `getThemeColor(vertical*)`

If `vertical` is not set, returns the `minorColorDark` hex code for the current theme.

If `vertical` is set, returns the `minorColorDark` hex code for that vertical’s theme. Currently only used in the subscription cancel and upgrade flows to accommodate dual subscribers.

### `getThemeNavTextColor()`

Returns the color name value of the current theme’s navigation text color. This is necessary because the men’s nav has light text on a dark background while the women’s nav has the opposite.

## CSS: styles/theme.css [DEPRECATED]

*These CSS classes are deprecated and will be phased out. If you need theme values in CSS, use styled-components (preferred) or pass a redux-theme-backed style object to the element’s `style` prop.*

_**Why deprecate these?**_

*CSS Modules rely on styling information being defined at compile time. Since theme data will (eventually) come from an admin endpoint, we cannot rely on having the theme values defined in code. The reason these classes are still around is because we have not yet built the theme admin and thus must hardcode theme data in the mean time.*

### Usage

Add these non-composable theme-specific classes to your Component.

The styles are defined by scoping selectors to the `rootClassName` of the theme:

```css
:global(.themeWomen) .themeColor {
  color: accentWomen;
}

:global(.themeMen) .themeColor {
  color: accentMen;
}

:global(.themeMen.mes) .themeColor {
  color: accentMes;
}
```

While the Site Evo project is underway, evo-specific styles can be defined by adding the `.evo` and `.<target>` global selectors:

```css
:global(.themeWomen.evo.com) .themeColor {
  color: accentComWomenEvo;
}

:global(.themeWomen.evo.uk) .themeColor {
  color: accentUkWomenEvo;
}

:global(.themeWomen.evo.es) .themeColor {
  color: accentEsWomenEvo;
}
```
