# CreditCardFields

[`CreditCardFields`](/src/components/Payment/CreditCardFields/index.js) is a group of four fields that capture a credit card. Uses [`Form2Beta`](/docs/components/Form.md) paradigms.

## Props

Prop|Type|Description|Default
---|---|---|---
fieldProps|arrayOf(fieldProps)|Field props. Typically passed down from parent `Form`.|
namePrefix|string|Dot-notated prefix for the credit card field names. Used if the credit card fields are nested in the form data.|
onChange|(data) => ?|Handles changes to field data. Typically passed down from parent `Form`.|
onCreditCardNumberFocus|() => ?|Called when the user focuses the credit card number field.|

## Credit card shape

```jsx
{
  creditCardNumber: '4100500000000000',
  expirationMonth: '02',
  expirationYear: '19',
  cvv: '031',
}
```

## Example implementation

- [CheckoutView/AddNewCreditCard](/src/views/checkout/CheckoutView/AddNewCreditCard/index.js) — Choosing to use a new credit card in checkout.
