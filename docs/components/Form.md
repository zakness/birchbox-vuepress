# Form2Beta Form

[`Form`](/src/components/Form2Beta/Form/index.js) is a form component used to provide form data and functionality to child components.

Familiar with the concepts? [Skip down to the props section.](#props)

## Data management

The `Form` component owns the data in its `state` object. For simple forms, the data shape is a flat object with key/value pairs where the keys correspond to field names:

```jsx
{
  streetAddress1: '28 E 28th St',
  streetAddress2: '',
  city: 'New York',
  ...
}
```

For more complex forms where it is desirable to group fields, the data shape can contain nested objects. In this case, the field names are the dot-notation paths we all know and love:

```jsx
{
  shipping: {
    streetAddress1: '433 W Broadway', // this field’s name is 'shipping.streetAddress1'
    streetAddress2: '',
    city: 'New York',
    ...
  },
  billing: {
    streetAddress1: '28 E 28th St', // this field’s name is 'billing.streetAddress1'
    streetAddress2: '',
    city: 'New York',
    ...
  }
}
```

`Form` passes the data and an `onChange` callback down to its child components via the [function-as-child idiom](https://medium.com/merrickchristensen/function-as-child-components-5f3920a9ace9). Fields are expected to get their value from this data and fire `onChange` when the user updates it. This means that all field components are [controlled](https://facebook.github.io/react/docs/forms.html#controlled-components).

The `onChange` callback expects its argument to be an object with field name/value pairs. This means we can use the same callback for capturing single and multiple field value changes at once.

Here’s a simplified snippet showing how `TextInput` manages data:

```jsx
render () {
  const { name, value } = this.props
  return <input type='text' name={name} value={value} onChange={this.onChange} />
}

onChange (e) {
  // Object with name/value pair. Also note we’re not exposing the DOM event.
  // Fields should hide that complexity from consumers — they are just vessels for data.
  const newData = { [this.props.name]: e.target.value }
  this.props.onChange(newData)
}
```

## Field definitions and client-side validation

`Form2Beta` uses a top-down approach to defining fields. This means that the `Form` knows upfront what all the fields are, their user-facing labels, and their validation rules. This is achieved using the `fieldDefinitions` prop, which is an array of field definition objects (or a function that returns such an array — more on that below).

**Field definition shape**

Prop|Type|Description|Default
---|---|---|---
label|string|The user-facing label for the field.|
name|string|The key (or path) used for the field in the `Form` data.|
validators|arrayOf(validator)\|(data) => arrayOf(validators)|Any validators to execute against the field value. If a function, it is passed the current data and should return a list of validators. See [validator docs](/utils/validators.md) for more info.|
requiredMessage | string(label) => message | Sets a custom required message for the specific field | `validators -> nonEmpty.message()`
isOptional|bool\|(data) => bool|Can the field be empty upon submission? A kind of special-case validator. If a function, it is passed the current data. This is useful for fields whose necessity is determined by other field values.|`false`

Field definitions are used for **validation**. When the form is submitted, the `fieldDefinitions` array is traversed and the `validators` are run against the data. If any validation fails, their messages are appended to a list of errors which is then displayed to the user via notification. Fields are referred to in error messages by their `label`.

Field definitions are also used for **rendering fields**. Rather than defining names and labels in two places, `fieldDefinitions` are parsed and passed down to children via `fieldProps`. See [Child function argument props](#child-function-argument-props) below.

Field definitions can be **dynamic**. In other words, `fieldDefinitions` can change throughout the life of the `Form` component. For example, a user updating a payment method may switch between using an existing billing address and entering a new one. In this case the component that renders `Form` will change the array passed to the `fieldDefinitions` prop. Another example is a user switching the country of an address from one that has regions to one that does not (US to PR, for instance). In this case, `fieldDefinitions` would be a function that accepts the form data as an argument and returns a field definition array based on the country value. In either of these cases, the Form data will privately hold on to all values the user entered (to prevent data loss) but only pass down the values for the fields currently in the `fieldDefinitions` array.

## Data massaging

Data can be massaged two different ways: synchronously every time data changes via the `normalizeData` prop and asynchronously before submission via the `onBeforeSubmit` prop.

`normalizeData` is useful for accurately diffing data when the user triggers a change. It also helps consumers of the data by ensuring a consistent shape. For example, you may want to remove a key completely if its value is falsey. Finally, it is useful for providing default values, if necessary.

`onBeforeSubmit` is useful for performing a last minute transformation of the data before it gets sent wherever it needs to go. For example, verifying an address via Smarty Streets may end up changing the address data.

## Async errors

If either the `onBeforeSubmit` or `onSubmit` Promises reject with a value, we consider that value to be an error (or array of errors) and display them to the user via notification. If you want to get really fancy, you can structure your errors such that they will correspond with fields and cause the fields to have invalid styling.

**Error shape**

Prop|Type|Description
---|---|---
name|string|Matches the name in `fieldDefinitions`.
message|string|Error message.

## Props

Prop|Type|Description|Default
---|---|---|---
children|(form) => Component|`Form` only accepts a child function, which is passed an object with several `Form` instance methods and variables. See [Child function argument props](#child-function-argument-props) below.|
className|string|Style applied to the container div.|
fieldDefinitions|arrayOf(fieldDef) \| (data) => arrayOf(fieldDef)|List of objects that define what fields the form will have and how they will be validated. If `fieldDefinitions` can change depending on Form data, this prop can be a function that accepts the data and returns an array of field definitions. See [Field definitions](##field-definitions-and-client-side-validation) above.|
formatErrors|(array) => string|Formats errors into a notification string. If `undefined`, up to three errors are shown, one per line. In the case of four or more errors, they are consolidated into a generic message with an error count.|
initialData|obj|Initial data object.|`{}`
isSubmitOnEnter|bool| Make form available to submit pressing "ENTER" key (e.keyCode===13)| true
normalizeData|(obj) => obj|Transforms data into a canonical form. Used for equality comparisons, sanitization, and default values.|`_.identity`
onBeforeSubmit|(data) => Promise(data\|undefined)|Hook for performing an async action before submitting. If defined, it must return a Promise that resolves with a new data object (or `undefined` if it is not transforming the data). If the Promise is rejected, form submission is aborted and we notify any errors.|
onSubmit|(data) => Promise|Function that performs the desired submit action. If the Promise is rejected, submission is aborted and we notify any errors.|
onSuccessRedirect|location\|string|Location to go to after successful submission. Use `{ pathname: ':goback' }` to go back.|
resetAfterSubmit|bool|Reset the form data to `initialData` after successful submission?|`false`

## Child function argument props

Prop|Type|Description|Default
---|---|---|---
data|object|The current form data, limited to fields found in `fieldDefinitions`.|`{}`
fieldProps|arrayOf(fieldProps)|A list of props objects for each field. You can think of it as augmented `fieldDefinitions`. See shape below.|
onChange|(data) => ?|Function that is passed a slice of the data to update. Usually attached to components that handle user input but can be fired at any point in order to update the form data.|
reset|() => ?|Resets the form data to `initialData`.|
submit|(data) => Promise|The submit method. Typically assigned to the `onClick` prop of a submit button.|

**`fieldProps` shape**

Prop|Type|Description|Default
---|---|---|---
isInvalid|bool|Is the field currently invalid?\*|`false`
isOptional|bool|Can the field be empty upon submission? Per Product Design, if a field is optional, we should be appending “ (optional)” to the label when rendering the field.|`false`
label|string|The user-facing label for the field.|
name|string|The key (or path) used for the field in the `Form` data.|
value|any|The field’s current value.|
...|any|Other props from any [validators’ `fieldProps` prop](/utils/validators.md).|

\* *We ask ‘is invalid?’ rather than the more intuitive ‘is valid?’ because by default fields are not validated but should appear valid, thus asking ‘is valid?’ before submission causes [Heisenberg](https://en.wikipedia.org/wiki/Uncertainty_principle) to spin in his grave.*

## Example implementations

- [views/account/ResetPasswordView] (/src/views/account/ResetPasswordView/index.js) — A simple form to get you started with the minimal wiring up that's required.
- [components/AddressForm](/src/components/Addresses/AddressForm/index.js) — A generic address form for capturing basic address data.
- [CheckoutView/AddNewCreditCard](/src/views/checkout/CheckoutView/AddNewCreditCard/index.js) — Choosing to use a new credit card in checkout.

## Why ‘beta’?

The plan is to have `components/Form2Beta` replace `components/Form`, but that is a ways off. It’s considered ‘beta’ because the API is not stable, it’s lacking some features, and not all field components are at parity with existing ones. Once `Form2Beta` powers more of the forms on the site, we can drop the ‘beta’ moniker. Once it powers most of the forms, we can make the push to replace `components/Form`.
