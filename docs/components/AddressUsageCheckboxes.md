# AddressUsageCheckboxes

[`AddressUsageCheckboxes`](/src/components/Addresses/AddressUsageCheckboxes/index.js) is a group of checkboxes that represent how an address is used by the system. For example for subscription shipping or default shop billing. Uses [`Form2Beta`](/docs/components/Form.md) paradigms. This component is typically used with [AddressFields](/docs/components/AddressFields.md).

Not sure this is the right component for your use case? See [other address-related components](/docs/guides/addresses.md).

## Props

Prop|Type|Description|Default
---|---|---|---
initialData|object|Address usage object (see shape below) representing how the address is currently used. These values cannot be unchecked.|
fieldProps|arrayOf(fieldProps)|Field props. Typically passed down from parent `Form`.|
onChange|(data) => ?|Handles changes to field data. Typically passed down from parent `Form`.|

## Address usage shape

```jsx
{
  isDefaultShipping: false,
  isDefaultBilling: false,
  isWomensSubscriptionShipping: true,
  isWomensSubscriptionBilling: false,
  isMensSubscriptionShipping: true,
  isMensSubscriptionBilling: false,
}
```

## Example implementation

- [MyAccountView/AddressForm](/src/views/account/MyAccountView/AddressDetails/AddressForm/index.js) — An address form for editing a user’s saved address.
