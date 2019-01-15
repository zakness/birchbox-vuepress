(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{245:function(t,a,n){"use strict";n.r(a);var s=n(0),e=Object(s.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._m(1),t._v(" is a wrapper around "),n("a",{attrs:{href:"https://github.com/thejameskyle/react-loadable",target:"_blank",rel:"noopener noreferrer"}},[t._v("Loadable"),n("OutboundLink")],1),t._v(" that provides features and a clean syntax for dynamically importing components via "),n("a",{attrs:{href:"https://webpack.js.org/api/module-methods/#import-",target:"_blank",rel:"noopener noreferrer"}},[t._v("import()"),n("OutboundLink")],1),t._v(", a.k.a. "),n("a",{attrs:{href:"https://webpack.js.org/guides/code-splitting/#dynamic-imports",target:"_blank",rel:"noopener noreferrer"}},[t._v("code splitting"),n("OutboundLink")],1),t._v(". By default, ComponentLoader sets a "),n("a",{attrs:{href:"src/components/MaskContainer/index.js"}},[t._v("MaskContainer")]),t._v(" as Loadable’s "),n("a",{attrs:{href:"https://github.com/thejameskyle/react-loadable/blob/master/README.md#creating-a-great-loading-component",target:"_blank",rel:"noopener noreferrer"}},[t._v("LoadingComponent"),n("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("ComponentLoader accepts "),n("a",{attrs:{href:"https://github.com/thejameskyle/react-loadable/blob/master/README.md#loadable",target:"_blank",rel:"noopener noreferrer"}},[t._v("all options that Loadable accepts"),n("OutboundLink")],1),t._v(", plus an additional "),n("code",[t._v("maskContainerProps")]),t._v(" option for passing props to the MaskContainer LoadingComponent.")]),t._v(" "),t._m(4),t._m(5),t._v(" "),n("p",[t._v("Load a component and show a MaskContainer if it takes more than 200ms (the default "),n("a",{attrs:{href:"https://github.com/thejameskyle/react-loadable/blob/master/README.md#avoiding-flash-of-loading-component",target:"_blank",rel:"noopener noreferrer"}},[t._v("delay"),n("OutboundLink")],1),t._v(") to load:")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),n("p",[t._v("See the "),n("a",{attrs:{href:"https://github.com/thejameskyle/react-loadable/blob/master/README.md#------------guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-loadable guide"),n("OutboundLink")],1),t._v(" for a more in-depth look at how this works.")])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"componentloader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#componentloader","aria-hidden":"true"}},[this._v("#")]),this._v(" ComponentLoader")])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{attrs:{href:"/src/enhancers/ComponentLoader/index.js"}},[a("code",[this._v("ComponentLoader")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("NB: "),a("code",[this._v("ComponentLoader")]),this._v(" is a global module in the Bernard Black application.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-jsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MyComponent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ComponentLoader")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  loader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path/to/MyComponent'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// required")]),t._v("\n  maskContainerProps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" minHeight"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// optional")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// other react-loadable options")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// react-loadable will pass any props to the component once it loads")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("MyView")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MyComponent")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("foo")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Example Usage")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-jsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MyComponent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ComponentLoader")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  loader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path/to/MyComponent'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Load a component without ever showing MaskContainer (useful for components that are not necessarily visible on mount, like "),a("a",{attrs:{href:"src/components/Notifier/index.js"}},[this._v("Notifier")]),this._v("):")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-jsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MyComponent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ComponentLoader")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  loader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path/to/MyComponent'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  loading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="ComponentLoader.md";a.default=e.exports}}]);