# AddressForm

[`AddressForm`](/src/components/Addresses/AddressForm/index.js) is a form that capture an address. Essentially wraps [AddressFields](/components/AddressFields.md) in a [Form](/components/Form.md) with submit and cancel buttons.

Not sure this is the right component for your use case? See [other address-related components](/guides/addresses.md).

## Props

Prop|Type|Description|Default
---|---|---|---
allowCancel|bool|Show the cancel button?|`true`
cancel|() => ?|Function executed when the cancel button is clicked.|
submit|({ address }) => Promise|Function that does something with the address data upon form submission.|
