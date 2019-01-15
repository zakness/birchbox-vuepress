(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{169:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),s("p",[t._v("It would! Unfortunately since "),s("code",[t._v("getVerticalRoutes")]),t._v(" needs to return multiple elements (and React 15 Components can only return a single element or "),s("code",[t._v("null")]),t._v(") we must define it as a function for now. We can make it a Component when we upgrade to React 16, which supports "),s("a",{attrs:{href:"https://reactjs.org/docs/react-component.html#fragments",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fragments"),s("OutboundLink")],1),t._v(".")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"/guides/routing"}},[this._v("← Routing docs")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"getverticalroutes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getverticalroutes","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v("getVerticalRoutes")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("a",{attrs:{href:"/src/components/Routing/getVerticalRoutes/index.js"}},[s("code",[t._v("getVerticalRoutes")])]),t._v(" is a convenience method for defining routes for a single view that should be rendered at "),s("code",[t._v("/women")]),t._v(" and "),s("code",[t._v("/men")]),t._v(" subroutes in "),s("code",[t._v("COM")]),t._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Take "),s("code",[t._v("ShopView")]),t._v(" for example. In "),s("code",[t._v("ES")]),t._v(", "),s("code",[t._v("ShopView")]),t._v(" is rendered at "),s("code",[t._v("/tienda")]),t._v(". In "),s("code",[t._v("UK")]),t._v(", "),s("code",[t._v("ShopView")]),t._v(" is rendered at "),s("code",[t._v("/shop")]),t._v(". But in "),s("code",[t._v("COM")]),t._v(", "),s("code",[t._v("ShopView")]),t._v(" is rendered at "),s("code",[t._v("/shop/women")]),t._v(" and "),s("code",[t._v("/shop/men")]),t._v(". Furthermore, in "),s("code",[t._v("COM")]),t._v(", "),s("code",[t._v("/shop")]),t._v(" should redirect to "),s("code",[t._v("/shop/women")]),t._v(" or "),s("code",[t._v("/shop/men")]),t._v(" depending on the UI vertical.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("With "),e("code",[this._v("getVerticalRoutes")]),this._v(", you can define this sort of route config once instead of three times.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"method-signature"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#method-signature","aria-hidden":"true"}},[this._v("#")]),this._v(" Method signature")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("getVerticalRoutes(options) => array<ViewRoute>\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("options")]),this._v(" shape:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Key")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Default")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("pathBase")]),t._v(" "),s("td",[t._v("string|(vertical) => string")]),t._v(" "),s("td",[t._v("If a string it should be the base of the path to which "),s("code",[t._v("/<vertical>")]),t._v(" will be appended in "),s("code",[t._v("COM")]),t._v(" (or just the actual path in "),s("code",[t._v("ES")]),t._v(" and "),s("code",[t._v("UK")]),t._v("). If a function, it will be passed the vertical and should return the correct path. Typically the function form is used, as it maps directly to the ones defined in the "),s("a",{attrs:{href:"/src/constants/urls-com.js"}},[s("code",[t._v("URLS")])]),t._v(" constants.")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("pathSuffix")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("Other path segment(s) to be appended after "),s("code",[t._v("/<vertical>")]),t._v(".")]),t._v(" "),s("td",[s("code",[t._v("''")])])]),t._v(" "),s("tr",[s("td",[t._v("redirect")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",[t._v("If "),s("code",[t._v("true")]),t._v(", the base path will redirect to one of the vertical subroutes. Switch this off if you don’t want this ‘vertical default’ feature.")]),t._v(" "),s("td",[s("code",[t._v("true")])])]),t._v(" "),s("tr",[s("td",[t._v("requireAuth")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",[t._v("If "),s("code",[t._v("true")]),t._v(", wraps "),s("code",[t._v("children")]),t._v(" in "),s("a",{attrs:{href:"/src/components/RouteHooks/RequireAuth.js"}},[s("code",[t._v("RequireAuth")])]),t._v(". Useful if you want the vertical redirect to be based on the user’s preferred vertical, for example for subscription-related routes.")]),t._v(" "),s("td",[s("code",[t._v("false")])])]),t._v(" "),s("tr",[s("td",[t._v("children")]),t._v(" "),s("td",[t._v("node")]),t._v(" "),s("td",[t._v("The children that each "),s("code",[t._v("ViewRoute")]),t._v(" will render")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("...props")]),t._v(" "),s("td",[t._v("various")]),t._v(" "),s("td",[t._v("Other props that get passed directly to each "),s("code",[t._v("ViewRoute")])]),t._v(" "),s("td")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"why-isn’t-this-a-component"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#why-isn’t-this-a-component","aria-hidden":"true"}},[this._v("#")]),this._v(" Why isn’t this a Component?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Using "),e("code",[this._v("getVerticalRoutes")]),this._v(" inside route configs is a bit awkward. Wouldn’t it be better to have something like this?")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("VerticalViewRoutes")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("pathBase")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URLS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shopHome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PageViewDispatcher")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n    ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ShopView")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("PageViewDispatcher")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("VerticalViewRoutes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="getVerticalRoutes.md";e.default=n.exports}}]);