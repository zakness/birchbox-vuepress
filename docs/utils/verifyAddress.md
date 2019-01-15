# verifyAddress

In the US, we validate addresses using [Smarty Streets](`https://smartystreets.com`). This cuts down on invalid addresses making their way to fulfillment at the warehouse.

Use [`verifyAddress`](/src/components/Addresses/verifyAddress.js) in a [`Form`](/docs/components/Form.md) `onBeforeSubmit` to verify an address with Smarty Streets before submitting.
