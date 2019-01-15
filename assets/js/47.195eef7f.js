(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{269:function(t,e,r){"use strict";r.r(e);var s=r(0),o=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._m(1),t._v(" displays products in a "),r("router-link",{attrs:{to:"/components/Carousel.html"}},[t._v("Carousel")]),t._v(".")],1),t._v(" "),t._m(2),t._v(" "),r("table",[t._m(3),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("dotsType")]),t._v(" "),r("td",[t._v("oneOf")]),t._v(" "),r("td",[t._v("See "),r("router-link",{attrs:{to:"/components/Carousel.html"}},[t._v("Carousel dotsType")])],1),t._v(" "),r("td")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9)])]),t._v(" "),t._m(10),t._v(" "),r("p",[t._v("To enforce design consistency ProductCarousel supports different layouts that each control multiple properties:")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"productcarousel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#productcarousel","aria-hidden":"true"}},[this._v("#")]),this._v(" ProductCarousel")])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"/src/components/ProductCarousel/ProductCarousel/index.js"}},[e("code",[this._v("ProductCarousel")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[this._v("#")]),this._v(" Props")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Prop")]),this._v(" "),e("th",[this._v("Type")]),this._v(" "),e("th",[this._v("Description")]),this._v(" "),e("th",[this._v("Default")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("excludeId")]),this._v(" "),e("td",[this._v("number")]),this._v(" "),e("td",[this._v("Product ID to omit from the list.")]),this._v(" "),e("td")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("layout")]),t._v(" "),r("td",[t._v("oneOf("),r("code",[t._v("boxed|centered")]),t._v(")")]),t._v(" "),r("td",[t._v("See below for layout definitions.")]),t._v(" "),r("td",[t._v("boxed")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("limit")]),t._v(" "),r("td",[t._v("number")]),t._v(" "),r("td",[t._v("Number of products to show, regardless of the length of "),r("code",[t._v("productIds")])]),t._v(" "),r("td",[t._v("12")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("productIds")]),this._v(" "),e("td",[this._v("arrayOf(number)")]),this._v(" "),e("td",[this._v("Pool of product IDs to render")]),this._v(" "),e("td")])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("productsDidChange")]),this._v(" "),e("td",[this._v("func(pids)")]),this._v(" "),e("td",[this._v("Passed an array of the product IDs that are rendered. Fired whenever it changes (even on mount). See usage note below.")]),this._v(" "),e("td")])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("renderThumbFooter")]),this._v(" "),e("td",[this._v("func(id):node")]),this._v(" "),e("td",[this._v("The returned component is rendered at the bottom of each ProductThumb with an enforced height of "),e("code",[this._v("heightControlAdaptive")])]),this._v(" "),e("td")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"layouts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#layouts","aria-hidden":"true"}},[this._v("#")]),this._v(" Layouts")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("strong",[t._v("boxed")]),t._v(": ProductThumbs are 75% width with "),r("code",[t._v("adaptiveGutterLeft")]),t._v(" margin and "),r("code",[t._v("borderNeutralF1")]),t._v(" border. The ProductThumbs are rendered with their "),r("code",[t._v("vertical")]),t._v(" layout.")]),t._v(" "),r("li",[r("strong",[t._v("centered")]),t._v(": ProductThumbs are full width with "),r("code",[t._v("adaptiveGutter")]),t._v(" padding. The ProductThumbs are rendered with their "),r("code",[t._v("centered")]),t._v(" layout.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In order to achieve the full-bleed effect of the "),e("code",[this._v("boxed")]),this._v(" layout, all ProductCarousels are assumed to be rendered edge-to-edge. In other words, they control their own horizontal spacing (gutters).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"bad-products"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bad-products","aria-hidden":"true"}},[this._v("#")]),this._v(" Bad Products")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Products whose data cannot be loaded are filtered out using ProductThumb’s "),e("code",[this._v("onLoadFailure")]),this._v(" prop. When this happens, products are filled in from the "),e("code",[this._v("productIds")]),this._v(" array until we’ve reached "),e("code",[this._v("limit")]),this._v(" products again.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"productsdidchange-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#productsdidchange-usage","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("productsDidChange")]),this._v(" Usage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you care about what products are rendered (and so pass in a value for "),e("code",[this._v("productsDidChange")]),this._v(") you must always render ProductCarousel to the DOM so that it can execute that callback. For example, if you want to hide the carousel (or its parent component) when there are no products, you must hide the component (via "),e("code",[this._v("utilStyles.hide")]),this._v(" perhaps) rather than rendering "),e("code",[this._v("null")]),this._v(".")])}],!1,null,null,null);o.options.__file="ProductCarousel.md";e.default=o.exports}}]);