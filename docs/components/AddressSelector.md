# AddressSelector

[`AddressSelector`](/src/components/Addresses/AddressSelector/index.js) toggles between [AddressFields](/components/AddressFields.md) (enter new address) and [AddressList](/components/AddressList.md) (existing addresses).

Not sure this is the right component for your use case? See [other address-related components](/guides/addresses.md).

## Props

Prop|Type|Description|Default
---|---|---|---
addresses|arrayOf(address)|List of existing addresses.|`[]`
data|object|Address object (see shape below).|`{}`
descriptor|string|What do we call this? For example, ‘Billing address’.|
fieldProps|arrayOf(fieldProps)|Field props. Typically passed down from parent `Form`.|
onChange|(data) => ?|Handles changes to field data. Typically passed down from parent `Form`.|
titleClassName|string|Styling of the title.|*Internal style*
toggleAddressForm|() => ?|Function called when the user clicks on the toggling link.|

The component switches between its two modes by checking the existing of a field named `existingAddressId` in `fieldProps`. The idea is that `toggleAddressForm` will set `fieldProps` to either just `existingAddressId` or all the field definitions needed by `AddressFields`.

## Example implementation

- [CheckoutView/AddNewCreditCard](/src/views/checkout/CheckoutView/AddNewCreditCard/index.js) — Choosing to use a new credit card in checkout.
