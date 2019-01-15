# RatingStars

[`RatingStars`](/src/components/RatingStars/index.js) is an [adapted](/docs/enhancers/Adapter.md) component representing a product’s rating. Renders 5 stars plus an optional review count and other text.

## Props

Prop|Type|Description|Default
---|---|---|---
classname|string|Passed through.|
count|number|Number of reviews.|
rating|number|Average product rating.|
showCount|bool|Whether or not to show the count|`true`
size|number or oneOf(small, medium, large)|Size of the stars and text. Sometimes we want it a little bigger on wide screens. Also accepts a numerical value which has no effect on the rating text size. |small
suffix|string|Optional text to display after the count (or after the stars if `showCount` is `false`).|
url|string|If set, clicking this component will go to this url.|
