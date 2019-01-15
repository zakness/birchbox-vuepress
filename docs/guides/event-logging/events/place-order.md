[← Event Logging docs](/docs/guides/event-logging)

# Event: `place-order`

The `place-order` event is logged when the user successfully places an order. See [`logPlaceOrder`](/src/utils/logging/placeOrder.js) for exact logic.

## Event data

The `place-order` event is unique among events in that we do a lot of grouping and slicing of the data before it gets logged. This makes sense given we are a retailer: we want granular insight into what customers purchase. While _all_ of the following data is sent with every `place-order` event, we have split the reference table into chunks to aid in reading comprehension.

**Basic order data**

Prop|Type|Description|Example
---|---|---|---
orderCouponCode|string|Coupon/promo code used on the order.|`'EASYMAKEUP'`
orderCurrency|string|Order payment currency code.|`'GBP'`
orderHasMenProducts|bool|Does the order contain mens (grooming) products?|`false`
orderHasWomenProducts|bool|Does the order contain womens (beauty) products?|`true`
orderId|number|Order ID.|`111110429`
orderShippingAmount|string|Amount paid for shipping.|`'2.95'`
orderTaxAmount|string|Tax amount on the order.|`'4.32'`
orderTotalAmount|string|Total amount paid for the order.|`'28.88'`
orderTotalQuanity|number|Total quantity of all items.|`3`

**Billing address**

Prop|Type|Description|Example
---|---|---|---
orderCity|string|Billing address city.|`'Huntly'`
orderCountry|string|Billing address country code.|`'GB'`
orderPostCode|string|Billing address zip/postal code.|`'AB10AA'`
orderRegion|string|Billing address state/region.|`'Aberdeenshire'`

**Subscriber status**

Prop|Type|Description|Example
---|---|---|---
preOrderIsPastMenSubscriber|number|Was the user a past men (grooming) subscriber before placing this order? (`0` = no, `1` = yes)|`0`
preOrderIsPastWomenSubscriber|number|Was the user a past women (beauty) subscriber before placing this order? (`0` = no, `1` = yes)|`1`

**All items (products)**

Prop|Type|Description|Example
---|---|---|---
orderItemsDiscount|array[string]|Discount amount applied to each product in the order, if any.|`['0.00','0.00','0.00']`
orderItemsId|array[number]|The IDs of each product in the order.|`[21361,20078,1401]`
orderItemsName|array[string]|The names of each product in the order.|`['Spectrum Collections Marbleous Tulip Eye Contour Brush','Spectrum Collections Tapered Finishing Brush','My Birchbox - monthly rebillable, cancel at any time']`
orderItemsPrice|array[string]|The price of each product in the order.|`['4.99','7.99','12.95']`
orderItemsQuantity|array[number]|The quantity of each product in the order.|`[1,1,1]`
orderItemsSku|array[string]|The SKUs of each product in the order.|`['FS-SPEC-MARBC06-BRUSH','FS-SPEC-TAPFIN','BBW-Monthly-UK']`
orderItemsStore|array[number]|The Magento store ID of each product in the order (`1` = women, `4` = men).|`[1,1,1]`
orderItemsSubscriptionDuration|array[number]|The number of boxes of each subscription product in the order (`0` if not a subscription product).|`[0,0,1]`
orderItemsType|array[string]|The type of each product in the order (`'ecommerce'`, `'rebillable-subscription'`, or `'gift-subscription'`).|`['ecommerce','ecommerce','rebillable-subscription']`

**All shop (non-subscription) items**

Prop|Type|Description|Example
---|---|---|---
orderItemsIdEcommerce|array[number]|The IDs of each shop product in the order.|`[21361,20078]`
orderItemsStoreEcommerce|array[number]|The Magento store ID of each shop product in the order (`1` = women, `4` = men).|`[1,1]`
orderEcommerceAmount|string|The total price of all shop products in the order.|`'12.98'`
orderQtyEcommerce|string|The total quantity of all shop products in the order.|`2`
orderItemsSubscriptionDurationEcommerce|array[number]|Only applicable to subscription products, so will always be an array of `0`s.|`[0,0]`

**All women shop items**

Prop|Type|Description|Example
---|---|---|---
orderItemsIdWomenEcommerce|array[number]|The IDs of each women shop product in the order.|`[21361,20078]`
orderItemsStoreWomenEcommerce|array[number]|The Magento store ID of each women shop product in the order (should be all `1`s).|`[1,1]`
orderWomenEcommerceAmount|string|The total price of all women shop products in the order.|`'12.98'`
orderQtyWomenEcommerce|number|The total quantity of all women shop products in the order.|`2`
orderItemsSubscriptionDurationWomenEcommerce|array[number]|Only applicable to subscription products, so will always be an array of `0`s.|`[0,0]`

**All men shop items**

Prop|Type|Description|Example
---|---|---|---
orderItemsIdMenEcommerce|array[number]|The IDs of each men shop product in the order.|`[]`
orderItemsStoreMenEcommerce|array[number]|The Magento store ID of each men shop product in the order (should be all `4`s).|`[]`
orderMenEcommerceAmount|string|The total price of all men shop products in the order.|`'0.00'`
orderQtyMenEcommerce|number|The total quantity of all men shop products in the order.|`0`
orderItemsSubscriptionDurationMenEcommerce|array[number]|Only applicable to subscription products, so will always be an array of `0`s.|`[]`

**All subscription (rebillable and gift) items**

Prop|Type|Description|Example
---|---|---|---
orderItemsIdSubscriptions|array[number]|The IDs of each subscription product in the order.|`[1401]`
orderItemsStoreSubscriptions|array[number]|The Magento store ID of each subscription product in the order (`1` = women, `4` = men).|`[1]`
orderSubscriptionsAmount|string|The total price of all subscription products in the order.|`'12.95'`
orderQtySubscriptions|number|The total quantity of all subscription products in the order.|`1`
orderItemsSubscriptionDurationSubscriptions|array[number]|The number of boxes of each subscription product in the order.|`[1]`

**All women subscription items**

Prop|Type|Description|Example
---|---|---|---
orderItemsIdWomenSubscriptions|array[number]|The IDs of each women subscription product in the order.|`[1401]`
orderItemsStoreWomenSubscriptions|array[number]|The Magento store ID of each women subscription product in the order (should be all `1`s).|`[1]`
orderWomenSubscriptionsAmount|string|The total price of all women subscription products in the order.|`'12.95'`
orderQtyWomenSubscriptions|number|The total quantity of all women subscription products in the order.|`1`
orderItemsSubscriptionDurationWomenSubscriptions|array[number]|The number of boxes of each women subscription product in the order.|`[1]`

**All men subscription items**

Prop|Type|Description|Example
---|---|---|---
orderItemsIdMenSubscriptions|array[number]|The IDs of each men subscription product in the order.|`[]`
orderItemsStoreMenSubscriptions|array[number]|The Magento store ID of each men subscription product in the order (should be all `4`s).|`[]`
orderMenSubscriptionsAmount|string|The total price of all men subscription products in the order.|`'0.00'`
orderQtyMenSubscriptions|number|The total quantity of all men subscription products in the order.|`0`
orderItemsSubscriptionDurationMenSubscriptions|array[number]|The number of boxes of each men subscription product in the order.|`[]`

**All rebillable subscription items**

Prop|Type|Description|Example
---|---|---|---
orderItemsIdRebillableSubscriptions|array[number]|The IDs of each rebillable subscription product in the order.|`[1401]`
orderItemsStoreRebillableSubscriptions|array[number]|The Magento store ID of each rebillable subscription product in the order (`1` = women, `4` = men).|`[1]`
orderRebillableSubscriptionsAmount|number|The total price of all rebillable subscription products in the order.|`'12.95'`
orderQtyRebillableSubscriptions|number|The total quantity of all rebillable subscription products in the order.|`1`
orderItemsSubscriptionDurationRebillableSubscriptions|array[number]|The number of boxes of each rebillable subscription product in the order.|`[1]`

**All women rebillable subscription items**

Prop|Type|Description|Example
---|---|---|---
orderItemsIdWomenRebillableSubscriptions|array[number]|The IDs of each women rebillable subscription product in the order.|`[1401]`
orderItemsStoreWomenRebillableSubscriptions|array[number]|The Magento store ID of each women rebillable subscription product in the order (should be all `1`s).|`[1]`
orderWomenRebillableSubscriptionsAmount|string|The total price of all women rebillable subscription products in the order.|`'12.95'`
orderQtyWomenRebillableSubscriptions|number|The total quantity of all women rebillable subscription products in the order.|`1`
orderItemsSubscriptionDurationWomenRebillableSubscriptions|array[number]|The number of boxes of each women rebillable subscription product in the order.|`[1]`

**All men rebillable subscription items**

Prop|Type|Description|Example
---|---|---|---
orderItemsIdMenRebillableSubscriptions|array[number]|The IDs of each men rebillable subscription product in the order.|`[]`
orderItemsStoreMenRebillableSubscriptions|array[number]|The Magento store ID of each men rebillable subscription product in the order (should be all `4`s).|`[]`
orderMenRebillableSubscriptionsAmount|string|The total price of all men rebillable subscription products in the order.|`'0.00'`
orderQtyMenRebillableSubscriptions|number|The total quantity of all men rebillable subscription products in the order.|`0`
orderItemsSubscriptionDurationMenRebillableSubscriptions|array[number]|The number of boxes of each men rebillable subscription product in the order.|`[]`

**All gift subscription items**

Prop|Type|Description|Example
---|---|---|---
orderItemsIdGiftSubscriptions|array[number]|The IDs of each gift subscription product in the order.|`[]`
orderItemsStoreGiftSubscriptions|array[number]|The Magento store ID of each gift subscription product in the order (`1` = women, `4` = men).|`[]`
orderGiftSubscriptionsAmount|string|The total price of all gift subscription products in the order.|`'0.00'`
orderQtyGiftSubscriptions|number|The total quantity of all gift subscription products in the order.|`0`
orderItemsSubscriptionDurationGiftSubscriptions|array[number]|The number of boxes of each gift subscription product in the order.|`[]`

**All women gift subscription items**

Prop|Type|Description|Example
---|---|---|---
orderItemsIdWomenGiftSubscriptions|array[number]|The IDs of each women gift subscription product in the order.|`[]`
orderItemsStoreWomenGiftSubscriptions|array[number]|The Magento store ID of each women gift subscription product in the order (should be all `1`s).|`[]`
orderWomenGiftSubscriptionsAmount|string|The total price of all women gift subscription products in the order.|`'0.00'`
orderQtyWomenGiftSubscriptions|number|The total quantity of all women gift subscription products in the order.|`0`
orderItemsSubscriptionDurationWomenGiftSubscriptions|array[number]|The number of boxes of each women gift subscription product in the order.|`[]`

**All men gift subscription items**

Prop|Type|Description|Example
---|---|---|---
orderItemsIdMenGiftSubscriptions|array[number]|The IDs of each men gift subscription product in the order.|`[]`
orderItemsStoreMenGiftSubscriptions|array[number]|The Magento store ID of each men gift subscription product in the order (should be all `4`s).|`[]`
orderMenGiftSubscriptionsAmount|string|The total price of all men gift subscription products in the order.|`'0.00'`
orderQtyMenGiftSubscriptions|number|The total quantity of all men gift subscription products in the order.|`0`
orderItemsSubscriptionDurationMenGiftSubscriptions|array[number]|The number of boxes of each men gift subscription product in the order.|`[]`
