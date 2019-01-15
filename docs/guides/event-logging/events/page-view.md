[← Event Logging docs](/guides/event-logging)

# Event: `page-view`

The `page-view` event is logged when the user views a page. That is, [when a view mounts](/guides/routing/navigation-event.md). See [`logger` middleware source](/src/middleware/logger/index.js) for exact logic.

Every time `page-view` is logged, the [`view` event](/guides/event-logging/events/view.md) is logged as well.

## Extending event data

To send more data with a `page-view` event, pass the data to the `logParams` prop on the [`PageViewDispatcher`](/components/PageViewDispatcher.md) that wraps your view. See [Writing a Route Hook](/guides/routing/writing-routehook.md) for an example.

## Event data

_Event data is added on a per-page basis as detailed below:_

**Brand pages**

The following data is added on Brand pages. See [`BrandViewLoader`](/src/views/catalog/BrandView/BrandViewLoader.js) for exact logic.

Prop|Type|Description|Example
---|---|---|---
brandId|string|Stringified brand ID.|`'11375'`

**Category pages**

The following data is added on Category pages. See [`CategoryViewLoader`](/src/views/catalog/CategoryView/CategoryViewLoader.js) for exact logic.

Prop|Type|Description|Example
---|---|---|---
categoryId|string|Stringified category ID.|`'11375'`
categorySlug|string|Category’s Magento slug.|`'/shop/makeup/cheek/cheek-sets-palettes'`
categoryTitle|string|Taxonomical category title, if any. Not necessarily _this_ category’s title. Confusing, I know. See [`loadCategoryTaxonomy`](/src/data/catalog.js).|`'Cheek'`
departmentTitle|string|Taxonomical department title. See [`loadCategoryTaxonomy`](/src/data/catalog.js).|`'Makeup'`
title|string|Category title.|`'Cheek Sets & Palettes'`
subCategoryTitle|string|Taxonomical subcategory title, if any. See [`loadCategoryTaxonomy`](/src/data/catalog.js).|`'Cheek Sets & Palettes'`

**GWP Category pages**

The following data is added on GWP Category pages. See [`GwpCategoryViewLoader`](/src/views/catalog/GwpCategoryView/GwpCategoryViewLoader.js) for exact logic.

Prop|Type|Description|Example
---|---|---|---
categoryId|string|Stringified category ID.|`'11375'`
categorySlug|string|Category’s Magento slug.|`'/shop/makeup/cheek/cheek-sets-palettes'`
title|string|Category title.|`'Cheek Sets & Palettes'`

**Checkout page (GTM only)**

The following data is added on the checkout page (but only when sending to GTM). See [`triggerTagManager` source code](/src/utils/logging/tagManager.js) for exact logic.

Prop|Type|Description|Example
---|---|---|---
orderItemsId|array[string]|Stringified Cart product IDs|`['26283','33033']`
orderItemsName|array[string]|Cart product names|`['Benefit Cosmetics 24-Hr Brow Setter Gel','Laura Geller New York Fortifying Lashes Eyelash Primer']`
orderItemsPrice|array[string]|Cart product prices|`['24.00','22.00']`
orderItemsQuantity|array[number]|Cart product quantities|`[1,1]`

**Checkout Confirmation page (GTM only)**

The following data is added on the Checkout Confirmation page (but only when sending to GTM). See [`triggerTagManager` source code](/src/utils/logging/tagManager.js) for exact logic.

Prop|Type|Description|Example
---|---|---|---
orderItemsId|array[string]|Stringified last order product IDs|`['26283','33033']`

**PDP and Product Review pages**

The following data is added on pages displaying a single product like PDPs and product review pages. See [`ProductViewLoader`](/src/components/RouteHooks/ProductViewLoader.js) for exact logic.

Prop|Type|Description|Example
---|---|---|---
brandId|string|Stringified product’s brand ID|`'917'`
brandName|string|Brand’s title|`'Amika'`
categoryTitle|string|Taxonomical category title, if any. See [`loadProductTaxonomy`](/src/data/catalog.js). |`'Cheek'`
departmentTitle|string|Taxonomical department title. See [`loadProductTaxonomy`](/src/data/catalog.js).|`'Makeup'`
productId|string|Stringified product ID|`'12345'`
productValue|string|Product price|`19.99`
subCategoryTitle|string|Taxonomical subcategory title, if any. See [`loadProductTaxonomy`](/src/data/catalog.js).|`'Cheek Sets & Palettes'`

**Search results page**

The following data is added on the search results page. See [`SearchViewLoader`](/src/views/catalog/SearchView/SearchViewLoader.js) for exact logic.

Prop|Type|Description|Example
---|---|---|---
searchTerm|string|Search term|`'the best shampoo'`
