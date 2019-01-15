# Addresses

Addresses are an integral part of the Birchbox experience, as they would be for any retail business. Each user can have multiple addresses. Addresses can be tied to a subscription (as in, the address we will ship the box to), a credit card (as a billing address), both, or neither. Also keep in mind that we support multiple countries’s address types, which can complicate the logic significantly.

## Address Components

- Use [Address](/docs/components/Address.md) if you want to display an address.
- Use [AddressFields](/docs/components/AddressFields.md) if you want to capture an address *along with other data* in a form.
- Use [AddressForm](/docs/components/AddressForm.md) if you want to only capture an address (i.e. submit & cancel buttons included).
- Use [AddressList](/docs/components/AddressList.md) if you want to pick from a list of existing addresses.
- Use [AddressSelector](/docs/components/AddressSelector.md) if you want to toggle between `AddressList` and `AddressFields`.
- Use [AddressUsageCheckboxes](/docs/components/AddressSelector.md) for editing how an address is used by the system. For example for subscription shipping or default shop billing. Typically used with AddressFields.

## Address Utils

- Use [`verifyAddress`](/docs/utils/verifyAddress.md) to verify an address with Smarty Streets before saving.
