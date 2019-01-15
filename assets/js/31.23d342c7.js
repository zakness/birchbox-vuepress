(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{244:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),e("p",[e("strong",[t._v("Note:")]),t._v(" Row is "),e("router-link",{attrs:{to:"/enhancers/Adapter.html"}},[t._v("adapted")]),t._v(", so you can specify breakpoint value objects as any of these props. Useful when the Col distribution should change across breakpoints.")],1),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),e("p",[e("strong",[t._v("ProTip!")]),t._v(" Since Row’s props are "),e("router-link",{attrs:{to:"/enhancers/Adapter.html"}},[t._v("adapted")]),t._v(", you can easily specify this for narrow only with "),e("code",[t._v("stacked='narrowOnly'")]),t._v(".")],1),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),e("p",[e("strong",[t._v("Note:")]),t._v(" Col is "),e("router-link",{attrs:{to:"/enhancers/Adapter.html"}},[t._v("adapted")]),t._v(", so you can specify breakpoint value objects as any of these props. Useful when the Col distribution should change across breakpoints.")],1),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),e("p",[t._v("CSS Grid is pretty sexy, but unfortunately some browsers (IE, Safari 10) don’t support it yet. Since they would need a flexbox fallback anyway, we just implemented a flexbox-based version to be used by all browsers. In the future when we can drop support for the incompatible browsers we can perhaps migrate to a CSS Grid implementation.")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"gridlayout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gridlayout","aria-hidden":"true"}},[this._v("#")]),this._v(" GridLayout")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("code",[t._v("GridLayout")]),t._v(" provides two components — "),e("a",{attrs:{href:"/src/components/GridLayout/Row.js"}},[e("code",[t._v("<Row>")])]),t._v(" and "),e("a",{attrs:{href:"/src/components/GridLayout/Col/index.js"}},[e("code",[t._v("<Col>")])]),t._v(" — for laying out components on our "),e("a",{attrs:{href:"/src/utils/grid.js"}},[t._v("grid")]),t._v(". It connects to the "),e("code",[t._v("grid")]),t._v(" redux state to get the grid config and uses flexbox features to align and size content appropriately.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"basic-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic Example")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To align components to the grid, render a "),s("code",[this._v("<Row>")]),this._v(" and then wrap each item in a "),s("code",[this._v("<Col>")]),this._v(":")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-jsx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-jsx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Row"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Col "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'components/GridLayout'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Row")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  ")]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Col")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("span")]),e("span",{pre:!0,attrs:{class:"token script language-javascript"}},[e("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("Something")]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Col")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  ")]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Col")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("span")]),e("span",{pre:!0,attrs:{class:"token script language-javascript"}},[e("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("AnotherThing")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Col")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  ")]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Col")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("Last thing")]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Col")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n")]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Row")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("See the "),s("code",[this._v("/dev/grid")]),this._v(" page for more examples.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"row-props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#row-props","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("<Row>")]),this._v(" props")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"classname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#classname","aria-hidden":"true"}},[this._v("#")]),this._v(" className")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("PropTypes.string\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Passed through to the wrapping div. Do not override "),s("code",[this._v("display")]),this._v(", "),s("code",[this._v("flex-*")]),this._v(", or horizontal "),s("code",[this._v("margin")]),this._v(" style values, as those are necessary to make the layout work.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"columncount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#columncount","aria-hidden":"true"}},[this._v("#")]),this._v(" columnCount")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("PropTypes.number\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("The total number of columns in the Row. Used to calculate the child Cols’ "),e("code",[t._v("flex-basis")]),t._v(" values. When a Row is a direct child of a Col, the Col will inject its "),e("code",[t._v("span")]),t._v(" value as "),e("code",[t._v("columnCount")]),t._v(" on the Row. If this prop is omitted, the "),e("code",[t._v("grid.columnCount")]),t._v(" redux value will be used.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"justify"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#justify","aria-hidden":"true"}},[this._v("#")]),this._v(" justify")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("PropTypes.oneOf([ 'left', 'right', 'center' ])\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If the child Cols do not span the full width of the Row, use this prop to align the group of cols to the left, right, or center (uses "),s("code",[this._v("justify-content")]),this._v(" to achieve this).")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Default: "),s("code",[this._v("left")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"stacked"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stacked","aria-hidden":"true"}},[this._v("#")]),this._v(" stacked")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("PropTypes.bool\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Set to "),s("code",[this._v("true")]),this._v(" if you want each Col to stack on top of each other (with the grid gutter width margin between them). When stacked, the Cols’ "),s("code",[this._v("span")]),this._v(" prop is ignored and each Col takes up the full width of the Row.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Default: "),s("code",[this._v("false")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"col-props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#col-props","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("<Col>")]),this._v(" props")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"classname-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#classname-2","aria-hidden":"true"}},[this._v("#")]),this._v(" className")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("PropTypes.string\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Passed through to the div. Do not override "),s("code",[this._v("flex-*")]),this._v(", or horizontal "),s("code",[this._v("padding")]),this._v(" style values, as those are necessary to make the layout work.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"columncount-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#columncount-2","aria-hidden":"true"}},[this._v("#")]),this._v(" columnCount")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("PropTypes.number\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The total number of columns in the parent Row. Used to calculate the Col’s "),s("code",[this._v("flex-basis")]),this._v(" value. This is automatically injected by "),s("code",[this._v("Row")]),this._v(", so you wont want to mess with it.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"gutterwidth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gutterwidth","aria-hidden":"true"}},[this._v("#")]),this._v(" gutterWidth")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("PropTypes.number\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The width of the grid’s gutters. This is automatically injected by "),s("code",[this._v("Row")]),this._v(", so you wont want to mess with it.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"span"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#span","aria-hidden":"true"}},[this._v("#")]),this._v(" span")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("PropTypes.number\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("How many columns Col should span. If "),s("code",[this._v("span")]),this._v(" is undefined, Col will stretch to fill the available space. If multiple Cols under a single Row have undefined "),s("code",[this._v("span")]),this._v("s, the space is distributed evenly among them (uses "),s("code",[this._v("flex-grow")]),this._v(" to achieve this).")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("ProTip!")]),this._v(" If you want all your Cols to have the same width, just omit the "),s("code",[this._v("span")]),this._v(" prop on all of them.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"no-css-grid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#no-css-grid","aria-hidden":"true"}},[this._v("#")]),this._v(" No CSS Grid?")])}],!1,null,null,null);n.options.__file="GridLayout.md";s.default=n.exports}}]);