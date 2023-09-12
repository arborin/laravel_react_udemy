"use strict";
(() => {
var exports = {};
exports.id = 134;
exports.ids = [134,888];
exports.modules = {

/***/ 7840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fnews_preferredRegion_absolutePagePath_private_next_pages_2Fnews_js_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/news.js
var news_namespaceObject = {};
__webpack_require__.r(news_namespaceObject);
__webpack_require__.d(news_namespaceObject, {
  "default": () => (news)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(5244);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./pages/_document.js
var _document = __webpack_require__(6088);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_app.js
var _app = __webpack_require__(5035);
var _app_default = /*#__PURE__*/__webpack_require__.n(_app);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./pages/news.js

const News = ({ news })=>{
    console.log(news);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                children: "NEWS"
            }),
            news.map((n, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                    children: [
                        news.id,
                        " - ",
                        n.url
                    ]
                }, i))
        ]
    });
};
News.getInitialProps = async ()=>{
    let news;
    const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
    news = await res.json();
    return {
        news
    };
};
/* harmony default export */ const news = (News);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fnews&preferredRegion=&absolutePagePath=private-next-pages%2Fnews.js&absoluteAppPath=next%2Fdist%2Fpages%2F_app&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fnews_preferredRegion_absolutePagePath_private_next_pages_2Fnews_js_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(news_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(news_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(news_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(news_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(news_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(news_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(news_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(news_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(news_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(news_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(news_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/news",
        pathname: "/news",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: (_app_default()),
        Document: _document["default"]
    },
    userland: news_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [35,769,88], () => (__webpack_exec__(7840)));
module.exports = __webpack_exports__;

})();