# QuantityControl

[`QuantityControl`](/src/components/QuantityControl/index.js) renders plus/minus buttons for incrementing/decrementing product quantity (usually used in conjunction with AddToCart).

## Props

Prop|Type|Description|Default
---|---|---|---
cartMax|number|Max quantity of this product that can exist in ones cart.|50
id|number|Product id (used to check current cart quantity).|
max|number|Max value at which the quantity can no longer be increased. Ignores current cart quantities (you shouldn’t set this unless you know what you’re doing).|
showLabel|bool|Display a label in between controls indicating quantity of the product currently in cart.|false
onChange|func(1\|-1)|Fired when plus or minus button is clicked.|
quantity|number|The current quantity value.|1
