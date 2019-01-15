(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{176:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"promise-middleware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#promise-middleware","aria-hidden":"true"}},[t._v("#")]),t._v(" promise middleware")]),t._v(" "),e("p",[e("a",{attrs:{href:"/src/middleware/promise/index.js"}},[e("code",[t._v("promise")]),t._v(" middleware")]),t._v(" takes a single action backed by a promise and splits it into multiple actions that correspond to the state changes of the underlying promise.")]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("p",[t._v("Add a property named "),e("code",[t._v("promise")]),t._v(" to an action and populate it with a promise.")]),t._v(" "),e("div",{staticClass:"language-jsx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-jsx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("loadRegions")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'REGIONS_LOAD'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  promise"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadRegionsData")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("When this action is taken the following things will occur:")]),t._v(" "),e("ol",[e("li",[t._v("An action with the signature "),e("code",[t._v("{ type: `@@REMOTE/${type}_REQUEST`, data }")]),t._v(" will be dispatched")]),t._v(" "),e("li",[t._v("The promise will be executed")]),t._v(" "),e("li")]),t._v(" "),e("p",[t._v("a. On promise success an action with the signature "),e("code",[t._v("{ type: `@@REMOTE/${type}_SUCCESS`, data }")]),t._v(" will be dispatched\nb. Or on promise failure an action with the signature "),e("code",[t._v("{ type: `@@REMOTE/${type}_FAILURE`, data }")]),t._v(" will be dispatched")])])}],!1,null,null,null);n.options.__file="promise.md";a.default=n.exports}}]);