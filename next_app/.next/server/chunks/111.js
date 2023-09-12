"use strict";
exports.id = 111;
exports.ids = [111];
exports.modules = {

/***/ 4111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Nav.js


const Nav = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "my-nav",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: "/",
                children: "Home"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: "/about",
                children: "About"
            })
        ]
    });
};
/* harmony default export */ const components_Nav = (Nav);

;// CONCATENATED MODULE: ./components/Layout.js


const Layout = ({ mainTitle, footer, children })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(components_Nav, {}),
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                children: mainTitle
            }),
            /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
            children,
            /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
            footer
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);


/***/ })

};
;