(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{210:function(t,e,n){"use strict";n.r(e);var o=n(0),_=Object(o.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("p",[t._v("The primary examples of these components are "),n("router-link",{attrs:{to:"/components/Clickable.html"}},[n("code",[t._v("Clickable")])]),t._v(", "),n("router-link",{attrs:{to:"/components/Button.html"}},[n("code",[t._v("Button")])]),t._v(", and "),n("router-link",{attrs:{to:"/components/Link.html"}},[n("code",[t._v("Link")])]),t._v(". Read the docs for each of those components to see how you can pass extra click event data if you need to.")],1),t._v(" "),n("p",[t._v("Using these components (and others like them) helps us consolidate the logic for click logging and keeps our data more consistent.")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),n("p",[n("strong",[n("router-link",{attrs:{to:"/components/Clickable.html"}},[n("code",[t._v("Clickable")])]),t._v(" and "),n("router-link",{attrs:{to:"/components/Button.html"}},[n("code",[t._v("Button")])]),t._v(" components")],1)]),t._v(" "),t._m(7),t._v(" "),n("p",[n("strong",[n("router-link",{attrs:{to:"/components/Link.html"}},[n("code",[t._v("Link")])]),t._v(" component")],1)]),t._v(" "),t._m(8),t._v(" "),n("p",[n("strong",[n("router-link",{attrs:{to:"/components/Carousel.html"}},[n("code",[t._v("Carousel")])]),t._v(" component")],1)]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"/guides/event-logging"}},[this._v("← Event Logging docs")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"event-click"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-click","aria-hidden":"true"}},[this._v("#")]),this._v(" Event: "),e("code",[this._v("click")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A "),e("code",[this._v("click")]),this._v(" event is logged when the user clicks or taps on an element.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"components-that-log-clicks-for-you"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#components-that-log-clicks-for-you","aria-hidden":"true"}},[this._v("#")]),this._v(" Components that log clicks for you")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Clicking is one of if not the most common types of user interactions. Thus, there are a few base components that have click logging built in, removing the need to manually call "),e("code",[this._v("log")]),this._v(" in every click handler.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"event-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Event data")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("Default event data is added on a per-component basis as detailed below:")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("Prop")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Description")]),t._v(" "),n("th",[t._v("Default")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("mod")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("The module (area or component) of the site housing the clicked element.")]),t._v(" "),n("td",[n("code",[t._v("'site-content'")])])]),t._v(" "),n("tr",[n("td",[t._v("title")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("Text representing the clicked element.")]),t._v(" "),n("td",[t._v("Clicked element’s "),n("code",[t._v("innerText")]),t._v(", or "),n("code",[t._v("[non-text content]")]),t._v(" if falsey")])]),t._v(" "),n("tr",[n("td",[t._v("type")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("The type of clicked element.")]),t._v(" "),n("td",[n("code",[t._v("'button'")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("Prop")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Description")]),t._v(" "),n("th",[t._v("Default")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("mod")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("The module (area or component) of the site housing the clicked element.")]),t._v(" "),n("td",[n("code",[t._v("'site-content'")])])]),t._v(" "),n("tr",[n("td",[t._v("id")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("The link URL (yes it’s a weird name for it).")]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("title")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("Text representing the clicked element.")]),t._v(" "),n("td",[t._v("Clicked element’s "),n("code",[t._v("innerText")]),t._v(", or "),n("code",[t._v("[non-text content]")]),t._v(" if falsey")])]),t._v(" "),n("tr",[n("td",[t._v("type")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("The type of clicked element.")]),t._v(" "),n("td",[n("code",[t._v("'link'")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("Carousel")]),this._v(" component logs "),e("code",[this._v("click")]),this._v(" events on the left and right arrows.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("Prop")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Description")]),t._v(" "),n("th",[t._v("Default")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("mod")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("The module (area or component) of the site housing the clicked element.")]),t._v(" "),n("td",[n("code",[t._v("'carousel'")])])]),t._v(" "),n("tr",[n("td",[t._v("action")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("The result of clicking the arrow: "),n("code",[t._v("'move-back'")]),t._v(" or "),n("code",[t._v("'move-forward'")])]),t._v(" "),n("td")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[e("a",{attrs:{href:"/src/components/ProductThumb/index.js"}},[e("code",[this._v("ProductThumb")])]),this._v(" component")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("ProductThumb")]),this._v(" component logs click-throughs, that is, if the user clicks on a link within ProductThumb that sends them to the PDP.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("Prop")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Description")]),t._v(" "),n("th",[t._v("Default")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("mod")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("The module (area or component) of the site housing the clicked element.")]),t._v(" "),n("td",[n("code",[t._v("'product-thumb'")])])]),t._v(" "),n("tr",[n("td",[t._v("productId")]),t._v(" "),n("td",[t._v("number")]),t._v(" "),n("td",[t._v("The Product ID.")]),t._v(" "),n("td")])])])}],!1,null,null,null);_.options.__file="click.md";e.default=_.exports}}]);