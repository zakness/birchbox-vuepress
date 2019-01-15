# PaymentUsageCheckboxes

[`PaymentUsageCheckboxes`](/src/components/Payment/PaymentUsageCheckboxes/index.js) is a group of checkboxes that represent how a payment profile is used by the system. For example for subscription billing. Uses [`Form2Beta`](/docs/components/Form.md) paradigms. This component is typically used with [CreditCardFields](/docs/components/CreditCardFields.md).

## Props

Prop|Type|Description|Default
---|---|---|---
initialData|object|Payment usage object (see shape below) representing how the payment profile is currently used. These values cannot be unchecked.|
fieldProps|arrayOf(fieldProps)|Field props. Typically passed down from parent `Form`.|
onChange|(data) => ?|Handles changes to field data. Typically passed down from parent `Form`.|

## Payment usage shape

```jsx
{
  isWomensSubscriptionBilling: false,
  isMensSubscriptionBilling: false,
}
```

## Example implementation

- [MyAccountView/PaymentForm](/src/views/account/MyAccountView/PaymentDetails/PaymentForm/index.js) — A form for editing or creating a payment profile.
