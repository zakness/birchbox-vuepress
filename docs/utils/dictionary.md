# Dictionaries

Dictionaries are groups of translatable phrases that tend to be used together. A Dictionary is created by wrapping a phrase object in the globally-provided `dictionary` function. Dictionaries live in the `dictionary/` directory for their specific language.

## Basic usage

```jsx
// src/dictionary/en/color.js

export default dictionary('color', {
  PICK_A_COLOR: 'Pick a color',
})
```
```jsx
// src/components/ColorPicker.js

import colorDict from 'dictionary/color'

const ColorPicker = (props) =>
  <div>{colorDict('PICK_A_COLOR')}: <input type='text' name='color' /></div>
```

Notice the language dir is omitted from the `import` statement (i.e. `dictionary/color` rather than `dictionary/en/color`). This is mapped to the correct module at build time by webpack.

## Variable replacement and pluralization

Variable replacement is done using `%{...}` syntax. Pluralization is done by defining the phrase as a two-item array rather than a string. The first array item is the singular form, the second is the plural form. The correct form is chosen by passing a special `count` variable to the translate function. See the [API](#api) below for more examples.

```jsx
const addonsDict = dictionary('addons', {
  ADDON_RESERVED: [
    'This product is shipping with your %{month} Box.',
    '%{count} of these are shipping with your %{month} Box.',
  ],
})

addonsDict('ADDON_RESERVED', { count: 1, month: 'February' }) // → This product is shipping with your February Box.
addonsDict('ADDON_RESERVED', { count: 3, month: 'February' }) // → 3 of these are shipping with your February Box.
```

When `%{count}` is included in the phrase, it is automatically formatted with the correct thousands separator for the current locale.

## Extending dictionaries

Let’s say we have a `color` dictionary that has several phrases. The `en` and `es` phrases are completely different, but we want to overwrite one `en` phrase in `en_gb`. Here’s what that would look like:

```jsx
// src/dictionary/en_gb/color.js

import en from 'dictionary/en/color'

export default en.extend({
  PICK_A_COLOR: 'Pick a colour',
})
```

The `extend` function creates a whole new dictionary and deep-merges the new phrases into it.

Notice that in this case we have to use the full import path `dictionary/en/color`, because we explicitly want the `en` version.

## Phrase arrays

Sometimes you may want to define a list of phrases. You could use indexed keys, i.e. `ITEM_1`, `ITEM_2`, `ITEM_3`, but that is kludgy and hard to deal with when the length of the list varies. With array literals being reserved for plural forms, the best option is to define your phrase list as a single `\n`-delimited string and use the dictionary `split` method to transform it into an array:

```jsx
const myDict = dictionary('example', {
  ITEMS: `
    This method is very useful\n
    when you have\n
    bulleted lists.\n
  `,
})
myDict.split('ITEMS')
// → [ 'This method is very useful', 'when you have', 'bulleted lists.' ]
```

## Missing keys

If a dictionary is called with a missing key, the key itself is returned and a console error is thrown. This loud failure is meant to facilitate identifying missing translations quickly.

```jsx
subsDict('MISSING_KEY')
// → MISSING_KEY
```

If you expect a key to be missing sometimes and thus do not consider it a failure case, use the less-strict `get` method. This will return `''` if the key is missing.

```jsx
subsDict.get('MISSING_KEY')
// → ''
```

## API

### `dictionary(fileName:string, phrases:object):Dictionary`

Accepts a `fileName` string and `phrases` object and returns a `Dictionary`-type object. `fileName` should be the name of the file the dictionary lives in (for example, if the file is `src/dictionary/en/product.js`, `fileName` should be `product`). This will help identifying strings that need translating when in [debug mode](#visual-debugging).

Example:

```jsx
const phrases = {
  HELLO: 'Hello world',
}

export default dictionary('example', phrases)
```

### `Dictionary(key:string[, variables:object | count:number]):string`

Accepts a `key` and optional arg and returns the appropriate value string. If the `key` does not have a value, `key` is returned.

Basic example:

```jsx
const myDict = dictionary('example', { HELLO: 'Hello world' })
myDict('HELLO') // → 'Hello world'
```

Example with variable replacement:

```jsx
const myDict = dictionary('example', { HELLO: 'Hi %{name}' })
myDict('HELLO', { name: 'Daruk' }) // → 'Hi Daruk'
```

Example with different plural forms based on `count`:

```jsx
const myDict = dictionary('example', { HELLO: [ 'Hey you!', 'Hey all %{count} of you!' ] })
myDict('HELLO', 1) // → 'Hey you!'
myDict('HELLO', 1000) // → 'Hey all 1,000 of you!'
myDict('HELLO', { count: 1000 }) // → 'Hey all 1,000 of you!'
```

Example with nested phrases:

```jsx
const myDict = dictionary('example', { HELLO: { WORLD: 'Hello world' } })
myDict('HELLO.WORLD') // → 'Hello world'
```

Example with a missing key:

```jsx
const myDict = dictionary('example', { HELLO: 'Hello world'  })
myDict('GOODBYE') // → 'GOODBYE'
```

### `Dictionary.get(key:string[, variables:object | count:number]):string`

Same as `Dictionary(...)`, but returns `''` if the key is missing.

Example with a missing key:

```jsx
const myDict = dictionary('example', { HELLO: 'Hello world'  })
myDict.get('GOODBYE') // → ''
```

### `Dictionary.split(key:string[, variables:object | count:number]):array`

Splits the phrase at `key` on `\n`, trims each item, and returns a compact string array.

```jsx
const myDict = dictionary('example', {
  ITEMS: `
    This method is very useful\n
    when you have\n
    bulleted lists.\n
  `,
})
myDict.split('ITEMS')
// → [ 'This method is very useful', 'when you have', 'bulleted lists.' ]
```

### `Dictionary.extend(phrases:object):Dictionary`

Accepts additional `phrases` to extend onto an existing dictionary. Returns a new `Dictionary` object without modifying the calling one. Extending is done using a deep-merge.

Basic example:

```jsx
const usDict = dictionary('example', { HELLO: 'Hello world', PICK_A_COLOR: 'Pick a color' })
const ukDict = usDict.extend({ PICK_A_COLOR: 'Pick a colour' })
ukDict('HELLO') // → 'Hello world'
ukDict('PICK_A_COLOR') // → 'Pick a colour'
usDict('PICK_A_COLOR') // → 'Pick a color'
```

Nested keys example:

```jsx
const usDict = dictionary('example', { HELLO: 'Hello world', PICK: { COLOR: 'Pick a color' } })
const ukDict = usDict.extend({ pick: { color: 'Pick a colour' } })
ukDict('HELLO') // → 'Hello world'
ukDict('PICK.COLOR') // → 'Pick a colour'
```

## Visual debugging

If you want to see where translations are coming from when viewing the website, you can activate ‘dictionary debug mode’. To do this, enter the following in the browser console and then refresh:

```jsx
sessionStorage.setItem('debugDictionary', true)
```

While in this mode, an identifying token will be appended to any phrases that are translated with a `dictionary`. The token takes the form `[fileName.PHRASE_KEY]`. This should be enough information to locate the phrase in the codebase and modify the value in any language.

Example:

```jsx
import productDict from 'dictionary/product'

productDict('ADD_TO_CART')
// → Add to Cart [product.ADD_TO_CART]
```

This means the phrase can be found at the `ADD_TO_CART` key in the dictionary at `src/dictionary/LANG/product.js`.

If `split` is used to render a list of phrases, each item in the list will have a token plus the item index:

```jsx
exampleDict.split('ITEMS')
// → [ 'Item 1 [example.ITEMS][0]', 'Item 2 [example.ITEMS][1]' ]
```

To exit debug mode, either close the tab or enter the following in the browser console and then refresh:

```jsx
sessionStorage.removeItem('debugDictionary')
```

## Under the hood

We use [polyglot](https://github.com/airbnb/polyglot.js) as our translation engine because it is very lightweight and does only what we need. However, its pluralization syntax is a little wonky, so we massage it to make it better. As a side note, if we end up modifying it heavily we may consider just rolling our own engine using it as inspiration.
