(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{254:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Truncation is done by converting the content to a "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/NodeList",target:"_blank",rel:"noopener noreferrer"}},[t._v("NodeList"),a("OutboundLink")],1),t._v(" and trimming nodes, so while HTML tags "),a("em",[t._v("are")]),t._v(" preserved, more complex HTML might produce unexpected results.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"truncatehtml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#truncatehtml","aria-hidden":"true"}},[this._v("#")]),this._v(" TruncateHtml")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"/src/components/TruncateHtml/index.js"}},[e("code",[this._v("TruncateHtml")])]),this._v(" ensures content is limited to a specified number of lines of text or pixel height when rendered. Content must be plain text or HTML string.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If truncated, "),e("code",[this._v("…")]),this._v(" is appended to the end of the content. If truncation cannot be completed successfully, the original content is rendered unchanged.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Prop")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("after")]),t._v(" "),a("td",[t._v("HTML string")]),t._v(" "),a("td",[t._v("HTML content that will be rendered un-truncated after the main content.")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("before")]),t._v(" "),a("td",[t._v("HTML string")]),t._v(" "),a("td",[t._v("HTML content that will be rendered un-truncated before the main content.")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("className")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("Passed through.")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("content")]),t._v(" "),a("td",[t._v("HTML string")]),t._v(" "),a("td",[t._v("HTML content that may be truncated.")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("maxHeight")]),t._v(" "),a("td",[t._v("number (px)")]),t._v(" "),a("td",[t._v("Truncate the content until the element is this height or shorter. Takes precedence over "),a("code",[t._v("maxLines")]),t._v(".")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("maxLines")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("Truncate the content to this many lines of text.")]),t._v(" "),a("td",[a("code",[t._v("1")])])]),t._v(" "),a("tr",[a("td",[t._v("preserveWords")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[t._v("If "),a("code",[t._v("true")]),t._v(", truncates at whitespace. If "),a("code",[t._v("false")]),t._v(", truncates one character at a time.")]),t._v(" "),a("td",[a("code",[t._v("false")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TruncateHtml")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("before")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Results for ‘"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("after")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("’"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("Beauty Protector Beauty Cream Body Lotion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("maxLines")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Results "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" ‘Beauty "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Protector Beauty…’  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'---------------------'")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="TruncateHtml.md";e.default=n.exports}}]);