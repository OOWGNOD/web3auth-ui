/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 931:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(272);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(609);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* devanagari */\n@font-face {\n    font-family: \"Poppins\";\n    font-style: normal;\n    font-weight: 600;\n    src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z11lFd2JQEl8qw.woff2) format(\"woff2\");\n    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;\n}\n/* latin-ext */\n@font-face {\n    font-family: \"Poppins\";\n    font-style: normal;\n    font-weight: 600;\n    src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1JlFd2JQEl8qw.woff2) format(\"woff2\");\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n    font-family: \"Poppins\";\n    font-style: normal;\n    font-weight: 600;\n    src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2) format(\"woff2\");\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC,\n        U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* latin-ext */\n@font-face {\n    font-family: \"DM Sans\";\n    font-style: normal;\n    font-weight: 400;\n    src: url(https://fonts.gstatic.com/s/dmsans/v6/rP2Hp2ywxg089UriCZ2IHTWEBlwu8Q.woff2) format(\"woff2\");\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n    font-family: \"DM Sans\";\n    font-style: normal;\n    font-weight: 400;\n    src: url(https://fonts.gstatic.com/s/dmsans/v6/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2) format(\"woff2\");\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC,\n        U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* Modal */\n#w3a-network-modal {\n    --bg1: #ffffff;\n    --bg2: #f9f9fb;\n    --text-color1: #a2a5b5;\n    --text-color2: #5c6c7f;\n\n    --text-header: \"Poppins\", Helvetica, sans-serif;\n    --text-body: \"DM Sans\", Helvetica, sans-serif;\n\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    padding: 15px;\n    color: var(--text-color1);\n    font-family: var(--text-body);\n    background: black;\n}\n\n#w3a-network-modal button.w3a-button {\n    background-color: #ffffff;\n    border: 1px solid #f3f3f4;\n    box-shadow: none;\n    box-sizing: border-box;\n    border-radius: 24px;\n    height: 48px;\n    width: 100%;\n    padding: 8px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: var(--text-body);\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    color: #b7b8bd;\n    cursor: pointer;\n}\n\n#w3a-network-modal .w3a-switch-network {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: #f9f9fb;\n    box-sizing: border-box;\n    border-radius: 10px;\n    width: 375px;\n    padding: 20px;\n    font-family: var(--text-body);\n}\n\n#w3a-network-modal .w3a-switch-network__title {\n    font-family: var(--text-header);\n    font-size: 20px;\n    color: var(--text-color2);\n    margin-bottom: 16px;\n    text-align: center;\n}\n\n#w3a-network-modal .w3a-switch-network__link {\n    font-size: 12px;\n    color: #b7b8bd;\n    background-color: #fff;\n    height: 24px;\n    border-radius: 12px;\n    padding: 4px 16px;\n}\n\n#w3a-network-modal .w3a-switch-network__connect {\n    display: flex;\n    margin: 40px auto 0;\n}\n\n#w3a-network-modal .w3a-switch-network__connect > div {\n    text-align: center;\n    font-size: 10px;\n    color: var(--text-color2);\n}\n\n.w3a-switch-network__connect-divider {\n    margin-top: 20px;\n}\n\n#w3a-network-modal .w3a-switch-network__logo {\n    background: #ffffff;\n    box-shadow: 2px 2px 12px rgba(3, 100, 255, 0.05);\n    border-radius: 50%;\n    width: 58px;\n    height: 58px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto 6px;\n}\n\n#w3a-network-modal .w3a-switch-network__logo img {\n    width: 34px;\n    height: 34px;\n}\n\n#w3a-network-modal .w3a-switch-network__buttons {\n    display: flex;\n    column-gap: 16px;\n    width: 100%;\n    margin-top: 60px;\n}\n\n#w3a-network-modal .w3a-button.w3a-button--primary {\n    background-color: #0364ff;\n    color: #fff;\n}\n", "",{"version":3,"sources":["webpack://./css/network.css"],"names":[],"mappings":"AAAA,eAAe;AACf;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,0GAA0G;IAC1G,mHAAmH;AACvH;AACA,cAAc;AACd;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,0GAA0G;IAC1G,mHAAmH;AACvH;AACA,UAAU;AACV;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,uGAAuG;IACvG;8DAC0D;AAC9D;;AAEA,cAAc;AACd;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,oGAAoG;IACpG,mHAAmH;AACvH;AACA,UAAU;AACV;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,iGAAiG;IACjG;8DAC0D;AAC9D;;AAEA,UAAU;AACV;IACI,cAAc;IACd,cAAc;IACd,sBAAsB;IACtB,sBAAsB;;IAEtB,+CAA+C;IAC/C,6CAA6C;;IAE7C,eAAe;IACf,MAAM;IACN,OAAO;IACP,YAAY;IACZ,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,aAAa;IACb,yBAAyB;IACzB,6BAA6B;IAC7B,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,gBAAgB;IAChB,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,6BAA6B;IAC7B,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,mBAAmB;IACnB,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,+BAA+B;IAC/B,eAAe;IACf,yBAAyB;IACzB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,sBAAsB;IACtB,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,gDAAgD;IAChD,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,WAAW;AACf","sourcesContent":["/* devanagari */\n@font-face {\n    font-family: \"Poppins\";\n    font-style: normal;\n    font-weight: 600;\n    src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z11lFd2JQEl8qw.woff2) format(\"woff2\");\n    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;\n}\n/* latin-ext */\n@font-face {\n    font-family: \"Poppins\";\n    font-style: normal;\n    font-weight: 600;\n    src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1JlFd2JQEl8qw.woff2) format(\"woff2\");\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n    font-family: \"Poppins\";\n    font-style: normal;\n    font-weight: 600;\n    src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2) format(\"woff2\");\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC,\n        U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* latin-ext */\n@font-face {\n    font-family: \"DM Sans\";\n    font-style: normal;\n    font-weight: 400;\n    src: url(https://fonts.gstatic.com/s/dmsans/v6/rP2Hp2ywxg089UriCZ2IHTWEBlwu8Q.woff2) format(\"woff2\");\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n    font-family: \"DM Sans\";\n    font-style: normal;\n    font-weight: 400;\n    src: url(https://fonts.gstatic.com/s/dmsans/v6/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2) format(\"woff2\");\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC,\n        U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* Modal */\n#w3a-network-modal {\n    --bg1: #ffffff;\n    --bg2: #f9f9fb;\n    --text-color1: #a2a5b5;\n    --text-color2: #5c6c7f;\n\n    --text-header: \"Poppins\", Helvetica, sans-serif;\n    --text-body: \"DM Sans\", Helvetica, sans-serif;\n\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    padding: 15px;\n    color: var(--text-color1);\n    font-family: var(--text-body);\n    background: black;\n}\n\n#w3a-network-modal button.w3a-button {\n    background-color: #ffffff;\n    border: 1px solid #f3f3f4;\n    box-shadow: none;\n    box-sizing: border-box;\n    border-radius: 24px;\n    height: 48px;\n    width: 100%;\n    padding: 8px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: var(--text-body);\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    color: #b7b8bd;\n    cursor: pointer;\n}\n\n#w3a-network-modal .w3a-switch-network {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: #f9f9fb;\n    box-sizing: border-box;\n    border-radius: 10px;\n    width: 375px;\n    padding: 20px;\n    font-family: var(--text-body);\n}\n\n#w3a-network-modal .w3a-switch-network__title {\n    font-family: var(--text-header);\n    font-size: 20px;\n    color: var(--text-color2);\n    margin-bottom: 16px;\n    text-align: center;\n}\n\n#w3a-network-modal .w3a-switch-network__link {\n    font-size: 12px;\n    color: #b7b8bd;\n    background-color: #fff;\n    height: 24px;\n    border-radius: 12px;\n    padding: 4px 16px;\n}\n\n#w3a-network-modal .w3a-switch-network__connect {\n    display: flex;\n    margin: 40px auto 0;\n}\n\n#w3a-network-modal .w3a-switch-network__connect > div {\n    text-align: center;\n    font-size: 10px;\n    color: var(--text-color2);\n}\n\n.w3a-switch-network__connect-divider {\n    margin-top: 20px;\n}\n\n#w3a-network-modal .w3a-switch-network__logo {\n    background: #ffffff;\n    box-shadow: 2px 2px 12px rgba(3, 100, 255, 0.05);\n    border-radius: 50%;\n    width: 58px;\n    height: 58px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto 6px;\n}\n\n#w3a-network-modal .w3a-switch-network__logo img {\n    width: 34px;\n    height: 34px;\n}\n\n#w3a-network-modal .w3a-switch-network__buttons {\n    display: flex;\n    column-gap: 16px;\n    width: 100%;\n    margin-top: 60px;\n}\n\n#w3a-network-modal .w3a-button.w3a-button--primary {\n    background-color: #0364ff;\n    color: #fff;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 354:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(272);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(609);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* devanagari */\n@font-face {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z11lFd2JQEl8qw.woff2) format(\"woff2\");\n  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;\n}\n/* latin-ext */\n@font-face {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1JlFd2JQEl8qw.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,\n    U+2215, U+FEFF, U+FFFD;\n}\n\n/* latin-ext */\n@font-face {\n  font-family: \"DM Sans\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/dmsans/v6/rP2Hp2ywxg089UriCZ2IHTWEBlwu8Q.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \"DM Sans\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/dmsans/v6/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,\n    U+2215, U+FEFF, U+FFFD;\n}\n\n/* Modal */\n#w3a-modal {\n  --bg1: #0f1222;\n  --bg2: #24262e;\n  --text-color1: #d3d3d4;\n  --text-color2: #ffffff;\n\n  --text-header: \"Poppins\", Helvetica, sans-serif;\n  --text-body: \"DM Sans\", Helvetica, sans-serif;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  padding: 15px;\n  background: rgba(33, 33, 33, 0.46);\n  color: var(--text-color1);\n  font-family: var(--text-body);\n}\n\n#w3a-modal.w3a-modal--hidden {\n  display: none;\n}\n\n#w3a-modal p,\n#w3a-modal form,\n#w3a-modal button {\n  margin: 0;\n  padding: 0;\n}\n\n#w3a-modal .w3a-modal__inner {\n  width: 100%;\n  max-width: 375px;\n  overflow: hidden;\n  border-radius: 6px;\n  position: relative;\n  max-height: 95%;\n  overflow-y: auto;\n  opacity: 0;\n  transition: 200ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transform-origin: center center;\n  min-height: 350px;\n}\n\n#w3a-modal .w3a-modal__inner.w3a-modal__inner--active {\n  opacity: 1;\n  transition: 200ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transform-origin: center center;\n}\n\n#w3a-modal .w3a-modal__header {\n  padding: 25px 34px;\n  background: var(--bg1);\n  box-shadow: 0px 4px 28px rgba(3, 100, 255, 0.05);\n  position: relative;\n}\n#w3a-modal .w3a-modal__content {\n  padding: 30px 34px;\n  background: var(--bg2);\n}\n#w3a-modal .w3a-modal__footer {\n  padding: 16px 34px;\n  background: var(--bg1);\n}\n\n/* SPINNER */\n/* Loader */\n#w3a-modal .w3a-modal__loader {\n  background: var(--bg2);\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n}\n\n#w3a-modal .w3a-modal__loader.w3a-modal__loader--hidden {\n  display: none;\n}\n\n#w3a-modal .w3a-modal__loader-content {\n  text-align: center;\n  margin-bottom: 80px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n#w3a-modal .w3a-modal__loader-info {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0 30px;\n}\n\n#w3a-modal .w3a-spinner-label {\n  margin-top: 10px;\n  font-size: 16px;\n  font-weight: 500;\n  color: #0364ff;\n}\n\n#w3a-modal .w3a-spinner-message {\n  margin-top: 10px;\n  font-size: 16px;\n}\n#w3a-modal .w3a-spinner-message:first-letter {\n  text-transform: capitalize;\n}\n#w3a-modal .w3a-spinner-message.w3a-spinner-message--error {\n  color: #fb4a61;\n}\n\n#w3a-modal button.w3a-logout {\n  background: none;\n  border: 0;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 30px;\n  cursor: pointer;\n  margin-top: 20px;\n  color: #0364ff;\n}\n\n#w3a-modal .w3a-spinner-power {\n  margin-top: auto;\n  font-size: 12px;\n  line-height: 1.2em;\n  color: #b7b8bd;\n}\n#w3a-modal .w3a-spinner-power > img {\n  height: 32px;\n  width: auto;\n  display: inline;\n}\n\n#w3a-modal .w3a-spinner {\n  display: inline-block;\n  position: relative;\n  background-color: #0364ff;\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  background: conic-gradient(transparent, #0364ff);\n  animation: rotate 1s linear infinite;\n}\n\n#w3a-modal .w3a-spinner__mask,\n#w3a-modal .w3a-spinner__head {\n  content: \"\";\n  position: absolute;\n  border-radius: 50%;\n}\n\n#w3a-modal .w3a-spinner__mask {\n  width: 50px;\n  height: 50px;\n  top: 5px;\n  left: 5px;\n  background-color: var(--bg2);\n}\n\n#w3a-modal .w3a-spinner__head {\n  height: 5px;\n  width: 5px;\n  background-color: #0364ff;\n  top: 0;\n  left: 26px;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotateZ(0);\n  }\n  to {\n    transform: rotateZ(360deg);\n  }\n}\n\n\n/* Header */\n#w3a-modal .w3a-header {\n  display: flex;\n  color: var(--text-color2);\n  align-items: center;\n}\n#w3a-modal .w3a-header__logo {\n  height: auto;\n  width: 40px;\n  margin-right: 16px;\n}\n#w3a-modal .w3a-header__title {\n  font-family: var(--text-header);\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 1.5em;\n}\n#w3a-modal p.w3a-header__subtitle {\n  font-size: 14px;\n  line-height: 1.5em;\n  font-weight: 400;\n}\n#w3a-modal button.w3a-header__button {\n  cursor: pointer;\n  position: absolute;\n  background: none;\n  padding: 0;\n  border: 0;\n  top: 20px;\n  right: 26px;\n}\n\n/* BODY */\n#w3a-modal .w3a-group {\n  margin-bottom: 24px;\n}\n#w3a-modal .w3a-group:last-child {\n  margin-bottom: 0;\n}\n\n#w3a-modal .w3a-group.w3a-group--hidden,\n#w3a-modal .w3a-group.w3a-group--social-hidden,\n#w3a-modal .w3a-group.w3a-group--email-hidden,\n#w3a-modal .w3a-group.w3a-group--ext-wallet-hidden {\n  display: none;\n}\n\n#w3a-modal .w3a-group:not(.w3a-group--hidden):not(:last-child),\n#w3a-modal .w3a-group:not(.w3a-group--social-hidden):not(:last-child),\n#w3a-modal .w3a-group:not(.w3a-group--email-hidden):not(:last-child),\n#w3a-modal .w3a-group:not(.w3a-group--ext-wallet-hidden):not(:last-child) {\n  border-bottom: 0.5px solid #5c6c7f;\n  padding-bottom: 24px;\n}\n\n#w3a-modal div.w3a-group__title {\n  font-family: var(--text-header);\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.5em;\n  margin-bottom: 8px;\n}\n\n/* Adapter List */\n#w3a-modal ul.w3a-adapter-list {\n  display: flex;\n  align-items: center;\n  padding: 0;\n  margin: 0;\n  gap: 16px;\n  overflow-y: hidden;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n  max-height: 500px;\n  transition: max-height 0.4s ease-in;\n}\n\n#w3a-modal ul.w3a-adapter-list.w3a-adapter-list--shrink {\n  max-height: 48px;\n  transition: max-height 0.4s ease-out;\n}\n\n#w3a-modal ul.w3a-adapter-list.w3a-adapter-list--hidden {\n  display: none;\n}\n\n#w3a-modal li.w3a-adapter-item {\n  list-style: none;\n  margin-bottom: 30px;\n}\n\n#w3a-modal .w3a-adapter-item--hide {\n  display: none;\n}\n\n#w3a-modal .w3a-adapter-item__label {\n  font-size: 12px;\n  color: #5c6c7f;\n  text-align: center;\n  margin: 8px 0 0 !important;\n  text-transform: capitalize;\n  position: absolute;\n  transform: translate(-6px);\n  width: 60px;\n}\n\n/* Buttons */\n#w3a-modal button.w3a-button {\n  background-color: #2f3136;\n  border: 1px solid #404145;\n  box-sizing: border-box;\n  box-shadow: 2px 2px 12px rgba(3, 100, 255, 0.05);\n  border-radius: 24px;\n  height: 48px;\n  width: 100%;\n  padding: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--text-body);\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--text-color2);\n  cursor: pointer;\n}\n\n#w3a-modal button.w3a-button:hover {\n  background: #595857;\n}\n\n#w3a-modal button.w3a-button:active {\n  background: #6f717a;\n}\n\n#w3a-modal button.w3a-button:disabled {\n  background: #27282d;\n  color: #6f717a;\n}\n\n#w3a-modal button.w3a-button:focus-visible {\n  outline: 1px solid #daf0ff;\n  outline-offset: -1px;\n}\n\n#w3a-modal button.w3a-button--icon {\n  width: 48px;\n}\n\n#w3a-modal button.w3a-button--left {\n  justify-content: start;\n  padding: 8px 16px;\n}\n\n#w3a-modal button.w3a-button--left > img {\n  height: 30px;\n  width: auto;\n}\n\n#w3a-modal button.w3a-button--left > div.w3a-button__name {\n  max-width: 180px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-transform: capitalize;\n}\n\n#w3a-modal button.w3a-button--left > div.w3a-button__note {\n  margin-left: 8px;\n  color: #b7b8bd;\n  margin-left: auto;\n}\n\n#w3a-modal .w3a-button__image {\n  max-width: 100%;\n  max-height: 100%;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;\n}\n\n#w3a-modal button.w3a-button.w3a-button--rotate .w3a-button__image {\n  transform: rotate(180deg);\n}\n\n#w3a-modal .w3a-button--left .w3a-button__image {\n  margin-right: 12px;\n}\n\n#w3a-modal button.w3a-button-expand {\n  height: unset;\n  width: auto;\n  margin-left: auto;\n  font-size: 12px;\n  margin-top: 16px;\n  display: flex;\n  border: 8px;\n  color: var(--text-color2);\n  align-items: center;\n  cursor: pointer;\n  border-radius: 12px;\n  cursor: pointer;\n  padding: 0 10px 0 8px;\n  background: transparent;\n}\n\n#w3a-modal button.w3a-button-expand svg {\n  width: 12px;\n  height: auto;\n  margin-right: 4px;\n}\n\n#w3a-modal .w3a-external-toggle {\n  display: block;\n}\n\n#w3a-modal .w3a-external-toggle.w3a-external-toggle--hidden {\n  display: none;\n}\n\n#w3a-modal .w3a-external-container {\n  display: block;\n  margin-bottom: 34px;\n}\n\n#w3a-modal .w3a-external-container.w3a-external-container--hidden {\n  display: none;\n}\n\n#w3a-modal .w3a-external-group {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n\n#w3a-modal .w3a-external-group__left {\n  flex-grow: 1;\n}\n\n#w3a-modal button.w3a-external-back {\n  background: none;\n  border: 0;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 30px;\n  cursor: pointer;\n  color: var(--text-color1);\n}\n\n#w3a-modal .w3a-external-back:focus-visible {\n  outline: 1px solid #daf0ff;\n}\n\n#w3a-modal .w3a-external-back .w3a-group__title {\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n\n#w3a-modal .w3a-external-loader {\n  display: flex;\n  justify-content: center;\n}\n\n#w3a-modal .w3a-wallet-connect {\n  display: block;\n  text-align: center;\n  margin-bottom: 16px;\n}\n\n#w3a-modal .w3a-wallet-connect.w3a-wallet-connect--hidden {\n  display: none;\n}\n\n#w3a-modal .w3a-wallet-connect__container {\n  background: #ffffff;\n  border-radius: 10px;\n  color: var(--text-color1);\n  font-size: 10px;\n  width: fit-content;\n  margin: auto;\n  min-width: 250px;\n  padding: 16px 12px;\n}\n\n#w3a-modal .w3a-wallet-connect__container-desktop,\n#w3a-modal .w3a-wallet-connect__container-android {\n  margin: auto;\n}\n\n#w3a-modal .w3a-wallet-connect__container-btn-group {\n  display: flex;\n  gap: 18px;\n}\n\n#w3a-modal .w3a-wallet-connect__container-ios {\n  display: flex;\n  grid-gap: 30px 20px;\n  padding: 0 0 28px;\n  box-sizing: border-box;\n  flex-wrap: wrap;\n}\n\n#w3a-modal .w3a-wallet-connect-qr {\n  margin: 16px 16px;\n  padding: inherit;\n}\n\n#w3a-modal .w3a-wallet-connect__container-android a {\n  text-decoration: none;\n}\n\n#w3a-modal .w3a-wallet-connect__container-android .w3a-button {\n  background-color: rgb(64, 153, 255) !important;\n  color: #ffffff !important;\n  height: auto;\n  font-size: 14px;\n  padding: 8px 16px;\n  width: auto;\n  margin: auto;\n}\n\n#w3a-modal .w3a-wallet-connect__logo > img {\n  text-align: center;\n  width: 115px;\n  margin-bottom: 16px;\n}\n\n/* Text Field */\n#w3a-modal .w3a-text-field {\n  background: #393938;\n  border: 1px solid #27282d;\n  box-sizing: border-box;\n  box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.4);\n  border-radius: 24px;\n  padding: 0 28px;\n  height: 48px;\n  width: 100%;\n  font-family: var(--text-body);\n  font-size: 16px;\n  color: var(--text-color2);\n  margin-bottom: 16px;\n}\n\n#w3a-modal .w3a-text-field:active {\n  background: #0f1222;\n}\n\n#w3a-modal .w3a-text-field:focus-visible {\n  outline: 1px solid #daf0ff;\n  outline-offset: -1px;\n}\n\n/* Footer Components */\n#w3a-modal .w3a-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 10px;\n  line-height: 150%;\n  color: var(--text-color2);\n}\n\n#w3a-modal .w3a-footer__links {\n  padding: 0;\n  margin: 0;\n}\n\n#w3a-modal .w3a-footer__links a {\n  color: var(--text-color1);\n  text-decoration: none;\n}\n\n#w3a-modal .w3a-footer__links a:focus-visible {\n  outline: 1px solid #daf0ff;\n}\n\n#w3a-modal .w3a-footer__links span {\n  margin: 0 2px;\n}\n\n#w3a-modal .w3a-footer__secured {\n  text-align: right;\n  color: #b7b8bd;\n}\n#w3a-modal .w3a-footer__secured > img {\n  height: 14px;\n  width: auto;\n}\n\n/* Loader Bridge */\n#w3a-modal .w3a-modal__loader-bridge {\n  display: flex;\n  margin-bottom: 14px;\n}\n\n#w3a-modal .w3a-modal__loader-bridge-message span {\n  text-transform: capitalize;\n}\n\n#w3a-modal .w3a-modal__loader-app-logo {\n  display: flex;\n  padding: 8px;\n}\n\n#w3a-modal .w3a-modal__loader-app-logo img {\n  width: 64px;\n  height: auto;\n}\n\n#w3a-modal .w3a-modal__loader-adapter img {\n  width: 84px;\n  height: auto;\n}\n\n#w3a-modal .w3a-modal__connector {\n  display: flex;\n  align-items: center;\n}\n\n.w3a-modal__connector-beat {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.w3a-modal__connector-beat div {\n  position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #808080;\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n\n.w3a-modal__connector-beat div:nth-child(1) {\n  left: 8px;\n  animation: beat1 2.4s infinite;\n}\n\n.w3a-modal__connector-beat div:nth-child(2) {\n  left: 8px;\n  animation: beat2 2.4s infinite;\n}\n\n.w3a-modal__connector-beat div:nth-child(3) {\n  left: 8px;\n  animation: beat3 2.4s infinite;\n}\n\n.w3a-modal__connector-beat div:nth-child(4) {\n  left: 32px;\n  animation: beat4 2.4s infinite;\n}\n\n.w3a-modal__connector-beat div:nth-child(5) {\n  left: 56px;\n  animation: beat5 2.4s infinite;\n}\n\n@keyframes beat1 {\n  0% {\n    transform: scale(0);\n  }\n\n  25% {\n    transform: scale(0);\n  }\n\n  50% {\n    transform: scale(1);\n  }\n\n  75% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(0);\n  }\n}\n\n@keyframes beat2 {\n  0% {\n    transform: scale(0);\n  }\n\n  25% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: translate(24px, 0);\n  }\n\n  75% {\n    transform: translate(0, 0);\n  }\n\n  100% {\n    transform: translate(0, 0) scale(0);\n  }\n}\n\n@keyframes beat3 {\n  0% {\n    transform: translate(0, 0);\n  }\n\n  25% {\n    transform: translate(24px, 0);\n  }\n\n  50% {\n    transform: translate(48px, 0);\n  }\n\n  75% {\n    transform: translate(24px, 0);\n  }\n\n  100% {\n    transform: translate(0, 0);\n  }\n}\n\n@keyframes beat4 {\n  0% {\n    transform: translate(0, 0);\n  }\n\n  25% {\n    transform: translate(24px, 0);\n  }\n\n  50% {\n    transform: translate(24px, 0) scale(0);\n  }\n\n  75% {\n    transform: translate(24px, 0) scale(1);\n  }\n\n  100% {\n    transform: translate(0, 0);\n  }\n}\n\n@keyframes beat5 {\n  0% {\n    transform: scale(1);\n  }\n\n  25% {\n    transform: scale(0);\n  }\n\n  50% {\n    transform: scale(0);\n  }\n\n  75% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\n/* LIGHT MODE */\n#w3a-modal.w3a-modal--light {\n  --bg1: #ffffff;\n  --bg2: #f9f9fb;\n  --text-color1: #a2a5b5;\n  --text-color2: #5c6c7f;\n}\n\n#w3a-modal .w3a-group:not(.w3a-group--hidden):not(:last-child),\n#w3a-modal .w3a-group:not(.w3a-group--social-hidden):not(:last-child),\n#w3a-modal .w3a-group:not(.w3a-group--email-hidden):not(:last-child),\n#w3a-modal .w3a-group:not(.w3a-group--ext-wallet-hidden):not(:last-child) {\n  border-bottom: 0.5px solid #b7b8bd;\n  padding-bottom: 24px;\n}\n\n#w3a-modal.w3a-modal--light button.w3a-button {\n  background-color: #ffffff;\n  border: 1px solid #f3f3f4;\n  box-shadow: none;\n  color: #595857;\n}\n\n#w3a-modal.w3a-modal--light button.w3a-button:disabled {\n  color: #b7b8bd;\n}\n\n#w3a-modal.w3a-modal--light button.w3a-button:focus-visible {\n  outline: 1px solid #0f1222;\n}\n\n#w3a-modal.w3a-modal--light .w3a-text-field {\n  background: #ffffff;\n  border: 1px solid #ffffff;\n  box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.1);\n  color: #b7b8bd;\n}\n\n#w3a-modal.w3a-modal--light .w3a-text-field:active {\n  color: #0f1222;\n  outline: 1px solid #0f1222;\n}\n\n#w3a-modal.w3a-modal--light .w3a-text-field:focus-visible {\n  color: #0f1222;\n  outline: 1px solid #0f1222;\n}\n\n#w3a-modal.w3a-modal--light .w3a-footer__links a:focus-visible {\n  outline: 1px solid #0f1222;\n}\n\n#w3a-modal.w3a-modal--light .w3a-external-back:focus-visible {\n  outline: 1px solid #0f1222;\n}\n", "",{"version":3,"sources":["webpack://./css/web3auth.css"],"names":[],"mappings":"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","sourcesContent":["/* devanagari */\n@font-face {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z11lFd2JQEl8qw.woff2) format(\"woff2\");\n  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;\n}\n/* latin-ext */\n@font-face {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1JlFd2JQEl8qw.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,\n    U+2215, U+FEFF, U+FFFD;\n}\n\n/* latin-ext */\n@font-face {\n  font-family: \"DM Sans\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/dmsans/v6/rP2Hp2ywxg089UriCZ2IHTWEBlwu8Q.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \"DM Sans\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/dmsans/v6/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,\n    U+2215, U+FEFF, U+FFFD;\n}\n\n/* Modal */\n#w3a-modal {\n  --bg1: #0f1222;\n  --bg2: #24262e;\n  --text-color1: #d3d3d4;\n  --text-color2: #ffffff;\n\n  --text-header: \"Poppins\", Helvetica, sans-serif;\n  --text-body: \"DM Sans\", Helvetica, sans-serif;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  padding: 15px;\n  background: rgba(33, 33, 33, 0.46);\n  color: var(--text-color1);\n  font-family: var(--text-body);\n}\n\n#w3a-modal.w3a-modal--hidden {\n  display: none;\n}\n\n#w3a-modal p,\n#w3a-modal form,\n#w3a-modal button {\n  margin: 0;\n  padding: 0;\n}\n\n#w3a-modal .w3a-modal__inner {\n  width: 100%;\n  max-width: 375px;\n  overflow: hidden;\n  border-radius: 6px;\n  position: relative;\n  max-height: 95%;\n  overflow-y: auto;\n  opacity: 0;\n  transition: 200ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transform-origin: center center;\n  min-height: 350px;\n}\n\n#w3a-modal .w3a-modal__inner.w3a-modal__inner--active {\n  opacity: 1;\n  transition: 200ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transform-origin: center center;\n}\n\n#w3a-modal .w3a-modal__header {\n  padding: 25px 34px;\n  background: var(--bg1);\n  box-shadow: 0px 4px 28px rgba(3, 100, 255, 0.05);\n  position: relative;\n}\n#w3a-modal .w3a-modal__content {\n  padding: 30px 34px;\n  background: var(--bg2);\n}\n#w3a-modal .w3a-modal__footer {\n  padding: 16px 34px;\n  background: var(--bg1);\n}\n\n/* SPINNER */\n/* Loader */\n#w3a-modal .w3a-modal__loader {\n  background: var(--bg2);\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n}\n\n#w3a-modal .w3a-modal__loader.w3a-modal__loader--hidden {\n  display: none;\n}\n\n#w3a-modal .w3a-modal__loader-content {\n  text-align: center;\n  margin-bottom: 80px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n#w3a-modal .w3a-modal__loader-info {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0 30px;\n}\n\n#w3a-modal .w3a-spinner-label {\n  margin-top: 10px;\n  font-size: 16px;\n  font-weight: 500;\n  color: #0364ff;\n}\n\n#w3a-modal .w3a-spinner-message {\n  margin-top: 10px;\n  font-size: 16px;\n}\n#w3a-modal .w3a-spinner-message:first-letter {\n  text-transform: capitalize;\n}\n#w3a-modal .w3a-spinner-message.w3a-spinner-message--error {\n  color: #fb4a61;\n}\n\n#w3a-modal button.w3a-logout {\n  background: none;\n  border: 0;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 30px;\n  cursor: pointer;\n  margin-top: 20px;\n  color: #0364ff;\n}\n\n#w3a-modal .w3a-spinner-power {\n  margin-top: auto;\n  font-size: 12px;\n  line-height: 1.2em;\n  color: #b7b8bd;\n}\n#w3a-modal .w3a-spinner-power > img {\n  height: 32px;\n  width: auto;\n  display: inline;\n}\n\n#w3a-modal .w3a-spinner {\n  display: inline-block;\n  position: relative;\n  background-color: #0364ff;\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  background: conic-gradient(transparent, #0364ff);\n  animation: rotate 1s linear infinite;\n}\n\n#w3a-modal .w3a-spinner__mask,\n#w3a-modal .w3a-spinner__head {\n  content: \"\";\n  position: absolute;\n  border-radius: 50%;\n}\n\n#w3a-modal .w3a-spinner__mask {\n  width: 50px;\n  height: 50px;\n  top: 5px;\n  left: 5px;\n  background-color: var(--bg2);\n}\n\n#w3a-modal .w3a-spinner__head {\n  height: 5px;\n  width: 5px;\n  background-color: #0364ff;\n  top: 0;\n  left: 26px;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotateZ(0);\n  }\n  to {\n    transform: rotateZ(360deg);\n  }\n}\n\n\n/* Header */\n#w3a-modal .w3a-header {\n  display: flex;\n  color: var(--text-color2);\n  align-items: center;\n}\n#w3a-modal .w3a-header__logo {\n  height: auto;\n  width: 40px;\n  margin-right: 16px;\n}\n#w3a-modal .w3a-header__title {\n  font-family: var(--text-header);\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 1.5em;\n}\n#w3a-modal p.w3a-header__subtitle {\n  font-size: 14px;\n  line-height: 1.5em;\n  font-weight: 400;\n}\n#w3a-modal button.w3a-header__button {\n  cursor: pointer;\n  position: absolute;\n  background: none;\n  padding: 0;\n  border: 0;\n  top: 20px;\n  right: 26px;\n}\n\n/* BODY */\n#w3a-modal .w3a-group {\n  margin-bottom: 24px;\n}\n#w3a-modal .w3a-group:last-child {\n  margin-bottom: 0;\n}\n\n#w3a-modal .w3a-group.w3a-group--hidden,\n#w3a-modal .w3a-group.w3a-group--social-hidden,\n#w3a-modal .w3a-group.w3a-group--email-hidden,\n#w3a-modal .w3a-group.w3a-group--ext-wallet-hidden {\n  display: none;\n}\n\n#w3a-modal .w3a-group:not(.w3a-group--hidden):not(:last-child),\n#w3a-modal .w3a-group:not(.w3a-group--social-hidden):not(:last-child),\n#w3a-modal .w3a-group:not(.w3a-group--email-hidden):not(:last-child),\n#w3a-modal .w3a-group:not(.w3a-group--ext-wallet-hidden):not(:last-child) {\n  border-bottom: 0.5px solid #5c6c7f;\n  padding-bottom: 24px;\n}\n\n#w3a-modal div.w3a-group__title {\n  font-family: var(--text-header);\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.5em;\n  margin-bottom: 8px;\n}\n\n/* Adapter List */\n#w3a-modal ul.w3a-adapter-list {\n  display: flex;\n  align-items: center;\n  padding: 0;\n  margin: 0;\n  gap: 16px;\n  overflow-y: hidden;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n  max-height: 500px;\n  transition: max-height 0.4s ease-in;\n}\n\n#w3a-modal ul.w3a-adapter-list.w3a-adapter-list--shrink {\n  max-height: 48px;\n  transition: max-height 0.4s ease-out;\n}\n\n#w3a-modal ul.w3a-adapter-list.w3a-adapter-list--hidden {\n  display: none;\n}\n\n#w3a-modal li.w3a-adapter-item {\n  list-style: none;\n  margin-bottom: 30px;\n}\n\n#w3a-modal .w3a-adapter-item--hide {\n  display: none;\n}\n\n#w3a-modal .w3a-adapter-item__label {\n  font-size: 12px;\n  color: #5c6c7f;\n  text-align: center;\n  margin: 8px 0 0 !important;\n  text-transform: capitalize;\n  position: absolute;\n  transform: translate(-6px);\n  width: 60px;\n}\n\n/* Buttons */\n#w3a-modal button.w3a-button {\n  background-color: #2f3136;\n  border: 1px solid #404145;\n  box-sizing: border-box;\n  box-shadow: 2px 2px 12px rgba(3, 100, 255, 0.05);\n  border-radius: 24px;\n  height: 48px;\n  width: 100%;\n  padding: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--text-body);\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--text-color2);\n  cursor: pointer;\n}\n\n#w3a-modal button.w3a-button:hover {\n  background: #595857;\n}\n\n#w3a-modal button.w3a-button:active {\n  background: #6f717a;\n}\n\n#w3a-modal button.w3a-button:disabled {\n  background: #27282d;\n  color: #6f717a;\n}\n\n#w3a-modal button.w3a-button:focus-visible {\n  outline: 1px solid #daf0ff;\n  outline-offset: -1px;\n}\n\n#w3a-modal button.w3a-button--icon {\n  width: 48px;\n}\n\n#w3a-modal button.w3a-button--left {\n  justify-content: start;\n  padding: 8px 16px;\n}\n\n#w3a-modal button.w3a-button--left > img {\n  height: 30px;\n  width: auto;\n}\n\n#w3a-modal button.w3a-button--left > div.w3a-button__name {\n  max-width: 180px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-transform: capitalize;\n}\n\n#w3a-modal button.w3a-button--left > div.w3a-button__note {\n  margin-left: 8px;\n  color: #b7b8bd;\n  margin-left: auto;\n}\n\n#w3a-modal .w3a-button__image {\n  max-width: 100%;\n  max-height: 100%;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;\n}\n\n#w3a-modal button.w3a-button.w3a-button--rotate .w3a-button__image {\n  transform: rotate(180deg);\n}\n\n#w3a-modal .w3a-button--left .w3a-button__image {\n  margin-right: 12px;\n}\n\n#w3a-modal button.w3a-button-expand {\n  height: unset;\n  width: auto;\n  margin-left: auto;\n  font-size: 12px;\n  margin-top: 16px;\n  display: flex;\n  border: 8px;\n  color: var(--text-color2);\n  align-items: center;\n  cursor: pointer;\n  border-radius: 12px;\n  cursor: pointer;\n  padding: 0 10px 0 8px;\n  background: transparent;\n}\n\n#w3a-modal button.w3a-button-expand svg {\n  width: 12px;\n  height: auto;\n  margin-right: 4px;\n}\n\n#w3a-modal .w3a-external-toggle {\n  display: block;\n}\n\n#w3a-modal .w3a-external-toggle.w3a-external-toggle--hidden {\n  display: none;\n}\n\n#w3a-modal .w3a-external-container {\n  display: block;\n  margin-bottom: 34px;\n}\n\n#w3a-modal .w3a-external-container.w3a-external-container--hidden {\n  display: none;\n}\n\n#w3a-modal .w3a-external-group {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n\n#w3a-modal .w3a-external-group__left {\n  flex-grow: 1;\n}\n\n#w3a-modal button.w3a-external-back {\n  background: none;\n  border: 0;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 30px;\n  cursor: pointer;\n  color: var(--text-color1);\n}\n\n#w3a-modal .w3a-external-back:focus-visible {\n  outline: 1px solid #daf0ff;\n}\n\n#w3a-modal .w3a-external-back .w3a-group__title {\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n\n#w3a-modal .w3a-external-loader {\n  display: flex;\n  justify-content: center;\n}\n\n#w3a-modal .w3a-wallet-connect {\n  display: block;\n  text-align: center;\n  margin-bottom: 16px;\n}\n\n#w3a-modal .w3a-wallet-connect.w3a-wallet-connect--hidden {\n  display: none;\n}\n\n#w3a-modal .w3a-wallet-connect__container {\n  background: #ffffff;\n  border-radius: 10px;\n  color: var(--text-color1);\n  font-size: 10px;\n  width: fit-content;\n  margin: auto;\n  min-width: 250px;\n  padding: 16px 12px;\n}\n\n#w3a-modal .w3a-wallet-connect__container-desktop,\n#w3a-modal .w3a-wallet-connect__container-android {\n  margin: auto;\n}\n\n#w3a-modal .w3a-wallet-connect__container-btn-group {\n  display: flex;\n  gap: 18px;\n}\n\n#w3a-modal .w3a-wallet-connect__container-ios {\n  display: flex;\n  grid-gap: 30px 20px;\n  padding: 0 0 28px;\n  box-sizing: border-box;\n  flex-wrap: wrap;\n}\n\n#w3a-modal .w3a-wallet-connect-qr {\n  margin: 16px 16px;\n  padding: inherit;\n}\n\n#w3a-modal .w3a-wallet-connect__container-android a {\n  text-decoration: none;\n}\n\n#w3a-modal .w3a-wallet-connect__container-android .w3a-button {\n  background-color: rgb(64, 153, 255) !important;\n  color: #ffffff !important;\n  height: auto;\n  font-size: 14px;\n  padding: 8px 16px;\n  width: auto;\n  margin: auto;\n}\n\n#w3a-modal .w3a-wallet-connect__logo > img {\n  text-align: center;\n  width: 115px;\n  margin-bottom: 16px;\n}\n\n/* Text Field */\n#w3a-modal .w3a-text-field {\n  background: #393938;\n  border: 1px solid #27282d;\n  box-sizing: border-box;\n  box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.4);\n  border-radius: 24px;\n  padding: 0 28px;\n  height: 48px;\n  width: 100%;\n  font-family: var(--text-body);\n  font-size: 16px;\n  color: var(--text-color2);\n  margin-bottom: 16px;\n}\n\n#w3a-modal .w3a-text-field:active {\n  background: #0f1222;\n}\n\n#w3a-modal .w3a-text-field:focus-visible {\n  outline: 1px solid #daf0ff;\n  outline-offset: -1px;\n}\n\n/* Footer Components */\n#w3a-modal .w3a-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 10px;\n  line-height: 150%;\n  color: var(--text-color2);\n}\n\n#w3a-modal .w3a-footer__links {\n  padding: 0;\n  margin: 0;\n}\n\n#w3a-modal .w3a-footer__links a {\n  color: var(--text-color1);\n  text-decoration: none;\n}\n\n#w3a-modal .w3a-footer__links a:focus-visible {\n  outline: 1px solid #daf0ff;\n}\n\n#w3a-modal .w3a-footer__links span {\n  margin: 0 2px;\n}\n\n#w3a-modal .w3a-footer__secured {\n  text-align: right;\n  color: #b7b8bd;\n}\n#w3a-modal .w3a-footer__secured > img {\n  height: 14px;\n  width: auto;\n}\n\n/* Loader Bridge */\n#w3a-modal .w3a-modal__loader-bridge {\n  display: flex;\n  margin-bottom: 14px;\n}\n\n#w3a-modal .w3a-modal__loader-bridge-message span {\n  text-transform: capitalize;\n}\n\n#w3a-modal .w3a-modal__loader-app-logo {\n  display: flex;\n  padding: 8px;\n}\n\n#w3a-modal .w3a-modal__loader-app-logo img {\n  width: 64px;\n  height: auto;\n}\n\n#w3a-modal .w3a-modal__loader-adapter img {\n  width: 84px;\n  height: auto;\n}\n\n#w3a-modal .w3a-modal__connector {\n  display: flex;\n  align-items: center;\n}\n\n.w3a-modal__connector-beat {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.w3a-modal__connector-beat div {\n  position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #808080;\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n\n.w3a-modal__connector-beat div:nth-child(1) {\n  left: 8px;\n  animation: beat1 2.4s infinite;\n}\n\n.w3a-modal__connector-beat div:nth-child(2) {\n  left: 8px;\n  animation: beat2 2.4s infinite;\n}\n\n.w3a-modal__connector-beat div:nth-child(3) {\n  left: 8px;\n  animation: beat3 2.4s infinite;\n}\n\n.w3a-modal__connector-beat div:nth-child(4) {\n  left: 32px;\n  animation: beat4 2.4s infinite;\n}\n\n.w3a-modal__connector-beat div:nth-child(5) {\n  left: 56px;\n  animation: beat5 2.4s infinite;\n}\n\n@keyframes beat1 {\n  0% {\n    transform: scale(0);\n  }\n\n  25% {\n    transform: scale(0);\n  }\n\n  50% {\n    transform: scale(1);\n  }\n\n  75% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(0);\n  }\n}\n\n@keyframes beat2 {\n  0% {\n    transform: scale(0);\n  }\n\n  25% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: translate(24px, 0);\n  }\n\n  75% {\n    transform: translate(0, 0);\n  }\n\n  100% {\n    transform: translate(0, 0) scale(0);\n  }\n}\n\n@keyframes beat3 {\n  0% {\n    transform: translate(0, 0);\n  }\n\n  25% {\n    transform: translate(24px, 0);\n  }\n\n  50% {\n    transform: translate(48px, 0);\n  }\n\n  75% {\n    transform: translate(24px, 0);\n  }\n\n  100% {\n    transform: translate(0, 0);\n  }\n}\n\n@keyframes beat4 {\n  0% {\n    transform: translate(0, 0);\n  }\n\n  25% {\n    transform: translate(24px, 0);\n  }\n\n  50% {\n    transform: translate(24px, 0) scale(0);\n  }\n\n  75% {\n    transform: translate(24px, 0) scale(1);\n  }\n\n  100% {\n    transform: translate(0, 0);\n  }\n}\n\n@keyframes beat5 {\n  0% {\n    transform: scale(1);\n  }\n\n  25% {\n    transform: scale(0);\n  }\n\n  50% {\n    transform: scale(0);\n  }\n\n  75% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\n/* LIGHT MODE */\n#w3a-modal.w3a-modal--light {\n  --bg1: #ffffff;\n  --bg2: #f9f9fb;\n  --text-color1: #a2a5b5;\n  --text-color2: #5c6c7f;\n}\n\n#w3a-modal .w3a-group:not(.w3a-group--hidden):not(:last-child),\n#w3a-modal .w3a-group:not(.w3a-group--social-hidden):not(:last-child),\n#w3a-modal .w3a-group:not(.w3a-group--email-hidden):not(:last-child),\n#w3a-modal .w3a-group:not(.w3a-group--ext-wallet-hidden):not(:last-child) {\n  border-bottom: 0.5px solid #b7b8bd;\n  padding-bottom: 24px;\n}\n\n#w3a-modal.w3a-modal--light button.w3a-button {\n  background-color: #ffffff;\n  border: 1px solid #f3f3f4;\n  box-shadow: none;\n  color: #595857;\n}\n\n#w3a-modal.w3a-modal--light button.w3a-button:disabled {\n  color: #b7b8bd;\n}\n\n#w3a-modal.w3a-modal--light button.w3a-button:focus-visible {\n  outline: 1px solid #0f1222;\n}\n\n#w3a-modal.w3a-modal--light .w3a-text-field {\n  background: #ffffff;\n  border: 1px solid #ffffff;\n  box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.1);\n  color: #b7b8bd;\n}\n\n#w3a-modal.w3a-modal--light .w3a-text-field:active {\n  color: #0f1222;\n  outline: 1px solid #0f1222;\n}\n\n#w3a-modal.w3a-modal--light .w3a-text-field:focus-visible {\n  color: #0f1222;\n  outline: 1px solid #0f1222;\n}\n\n#w3a-modal.w3a-modal--light .w3a-footer__links a:focus-visible {\n  outline: 1px solid #0f1222;\n}\n\n#w3a-modal.w3a-modal--light .w3a-external-back:focus-visible {\n  outline: 1px solid #0f1222;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 609:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 272:
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 883:
/***/ ((module, exports, __webpack_require__) => {


    var refs = 0;
    var css = __webpack_require__(931);
    var insertCss = __webpack_require__(177);
    var content = typeof css === 'string' ? [[module.id, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ 403:
/***/ ((module, exports, __webpack_require__) => {


    var refs = 0;
    var css = __webpack_require__(354);
    var insertCss = __webpack_require__(177);
    var content = typeof css === 'string' ? [[module.id, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ 177:
/***/ ((module) => {

"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */



var inserted = {};

function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode("0x" + p1);
  }));
}

function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(id);

      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

function insertCss(styles, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$replace = _ref.replace,
      replace = _ref$replace === void 0 ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === void 0 ? false : _ref$prepend,
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;

  var ids = [];

  for (var i = 0; i < styles.length; i++) {
    var _styles$i = styles[i],
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];
    var id = "" + prefix + moduleId + "-" + i;
    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;
    var elem = document.getElementById(id);
    var create = false;

    if (!elem) {
      create = true;
      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;

    if (sourceMap && typeof btoa === 'function') {
      cssText += "\n/*# sourceMappingURL=data:application/json;base64," + b64EncodeUnicode(JSON.stringify(sourceMap)) + "*/";
      cssText += "\n/*# sourceURL=" + sourceMap.file + "?" + id + "*/";
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;
//# sourceMappingURL=insertCss.js.map


/***/ }),

/***/ 837:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(497),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 322:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(837);
} else {}


/***/ }),

/***/ 497:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "LOGIN_MODAL_EVENTS": () => (/* reexport */ LOGIN_MODAL_EVENTS),
  "MODAL_STATUS": () => (/* reexport */ MODAL_STATUS),
  "NetworkSwitch": () => (/* reexport */ NetworkSwitch),
  "OPENLOGIN_PROVIDERS": () => (/* reexport */ OPENLOGIN_PROVIDERS),
  "default": () => (/* reexport */ LoginModal),
  "getAdapterSocialLogins": () => (/* reexport */ getAdapterSocialLogins),
  "getNetworkIconId": () => (/* reexport */ getNetworkIconId),
  "validateImageUrl": () => (/* reexport */ validateImageUrl)
});

;// CONCATENATED MODULE: external "@toruslabs/openlogin"
const openlogin_namespaceObject = require("@toruslabs/openlogin");
;// CONCATENATED MODULE: ./src/config.ts

var OPENLOGIN_PROVIDERS = Object.values(openlogin_namespaceObject.LOGIN_PROVIDER).filter(function (x) {
  return x !== openlogin_namespaceObject.LOGIN_PROVIDER.WEBAUTHN && x !== openlogin_namespaceObject.LOGIN_PROVIDER.JWT;
});
;// CONCATENATED MODULE: ./src/interfaces.ts
var LOGIN_MODAL_EVENTS = {
  INIT_EXTERNAL_WALLETS: "INIT_EXTERNAL_WALLETS",
  LOGIN: "LOGIN",
  DISCONNECT: "DISCONNECT",
  MODAL_VISIBILITY: "MODAL_VISIBILITY"
};
var MODAL_STATUS = {
  INITIALIZED: "initialized",
  CONNECTED: "connected",
  CONNECTING: "connecting",
  ERRORED: "errored"
};
;// CONCATENATED MODULE: external "@babel/runtime/helpers/asyncToGenerator"
const asyncToGenerator_namespaceObject = require("@babel/runtime/helpers/asyncToGenerator");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_namespaceObject);
;// CONCATENATED MODULE: external "@babel/runtime/helpers/createClass"
const createClass_namespaceObject = require("@babel/runtime/helpers/createClass");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_namespaceObject);
;// CONCATENATED MODULE: external "@babel/runtime/helpers/classCallCheck"
const classCallCheck_namespaceObject = require("@babel/runtime/helpers/classCallCheck");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_namespaceObject);
;// CONCATENATED MODULE: external "@babel/runtime/helpers/assertThisInitialized"
const assertThisInitialized_namespaceObject = require("@babel/runtime/helpers/assertThisInitialized");
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_namespaceObject);
;// CONCATENATED MODULE: external "@babel/runtime/helpers/inherits"
const inherits_namespaceObject = require("@babel/runtime/helpers/inherits");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_namespaceObject);
;// CONCATENATED MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
const possibleConstructorReturn_namespaceObject = require("@babel/runtime/helpers/possibleConstructorReturn");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_namespaceObject);
;// CONCATENATED MODULE: external "@babel/runtime/helpers/getPrototypeOf"
const getPrototypeOf_namespaceObject = require("@babel/runtime/helpers/getPrototypeOf");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_namespaceObject);
;// CONCATENATED MODULE: external "@babel/runtime/helpers/defineProperty"
const defineProperty_namespaceObject = require("@babel/runtime/helpers/defineProperty");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_namespaceObject);
;// CONCATENATED MODULE: external "@babel/runtime/regenerator"
const regenerator_namespaceObject = require("@babel/runtime/regenerator");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_namespaceObject);
// EXTERNAL MODULE: ./css/web3auth.css
var web3auth = __webpack_require__(403);
;// CONCATENATED MODULE: external "@toruslabs/openlogin-jrpc"
const openlogin_jrpc_namespaceObject = require("@toruslabs/openlogin-jrpc");
;// CONCATENATED MODULE: external "@web3auth/base"
const base_namespaceObject = require("@web3auth/base");
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
;// CONCATENATED MODULE: external "@babel/runtime/helpers/slicedToArray"
const slicedToArray_namespaceObject = require("@babel/runtime/helpers/slicedToArray");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_namespaceObject);
;// CONCATENATED MODULE: external "lodash.clonedeep"
const external_lodash_clonedeep_namespaceObject = require("lodash.clonedeep");
var external_lodash_clonedeep_default = /*#__PURE__*/__webpack_require__.n(external_lodash_clonedeep_namespaceObject);
;// CONCATENATED MODULE: external "lodash.merge"
const external_lodash_merge_namespaceObject = require("lodash.merge");
var external_lodash_merge_default = /*#__PURE__*/__webpack_require__.n(external_lodash_merge_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(497);
;// CONCATENATED MODULE: ./src/context/ThemeContext.tsx

var ThemedContext = /*#__PURE__*/(0,external_react_.createContext)({
  isDark: true // default value
});
;// CONCATENATED MODULE: ./assets/icons/circle-arrow-left.svg
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgCircleArrowLeft = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 24,
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm5-10h-6.586l2.293-2.293-1.414-1.414L6.586 12l4.707 4.707 1.414-1.414L10.414 13H17v-2Z",
  fill: "#D3D3D4"
})));

/* harmony default export */ const circle_arrow_left = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IjI0IC8gYXJyb3dzIC8gY2lyY2xlLWFycm93LWxlZnQiPgo8cGF0aCBpZD0iaWNvbiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAyM0M1LjkyNDg3IDIzIDEgMTguMDc1MSAxIDEyQzEgNS45MjQ4NyA1LjkyNDg3IDEgMTIgMUMxOC4wNzUxIDEgMjMgNS45MjQ4NyAyMyAxMkMyMyAxOC4wNzUxIDE4LjA3NTEgMjMgMTIgMjNaTTEyIDIxQzE2Ljk3MDYgMjEgMjEgMTYuOTcwNiAyMSAxMkMyMSA3LjAyOTQ0IDE2Ljk3MDYgMyAxMiAzQzcuMDI5NDQgMyAzIDcuMDI5NDQgMyAxMkMzIDE2Ljk3MDYgNy4wMjk0NCAyMSAxMiAyMVpNMTcgMTFIMTAuNDE0MkwxMi43MDcxIDguNzA3MTFMMTEuMjkyOSA3LjI5Mjg5TDYuNTg1NzkgMTJMMTEuMjkyOSAxNi43MDcxTDEyLjcwNzEgMTUuMjkyOUwxMC40MTQyIDEzSDE3VjExWiIgZmlsbD0iI0QzRDNENCIvPgo8L2c+Cjwvc3ZnPgo=");
;// CONCATENATED MODULE: ./assets/icons/close.svg
var close_path;
function close_extends() { close_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return close_extends.apply(this, arguments); }

const SvgClose = props => /*#__PURE__*/React.createElement("svg", close_extends({
  width: 24,
  height: 24,
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), close_path || (close_path = /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "m13.414 12 6.364 6.364-1.414 1.414L12 13.414l-6.364 6.364-1.414-1.414L10.586 12 4.222 5.636l1.414-1.414L12 10.586l6.364-6.364 1.414 1.414L13.414 12Z",
  fill: "#DFDFDF"
})));

/* harmony default export */ const icons_close = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy40MTQyIDEyTDE5Ljc3ODIgMTguMzY0TDE4LjM2NCAxOS43NzgyTDEyIDEzLjQxNDNMNS42MzYwNCAxOS43NzgyTDQuMjIxODMgMTguMzY0TDEwLjU4NTggMTJMNC4yMjE4MyA1LjYzNjA4TDUuNjM2MDQgNC4yMjE4N0wxMiAxMC41ODU4TDE4LjM2NCA0LjIyMTg3TDE5Ljc3ODIgNS42MzYwOEwxMy40MTQyIDEyWiIgZmlsbD0iI0RGREZERiIvPgo8L3N2Zz4K");
;// CONCATENATED MODULE: ./assets/icons/expand.svg
var expand_path;
function expand_extends() { expand_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return expand_extends.apply(this, arguments); }

const SvgExpand = props => /*#__PURE__*/React.createElement("svg", expand_extends({
  width: 24,
  height: 24,
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), expand_path || (expand_path = /*#__PURE__*/React.createElement("path", {
  d: "M12.1 15.678a1.027 1.027 0 0 1-1.493 0L4.988 9.732C4.37 9.077 4.834 8 5.734 8h11.237c.901 0 1.365 1.077.747 1.731l-5.619 5.947Z",
  fill: "#B7B8BD"
})));

/* harmony default export */ const expand = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjA5OTEgMTUuNjc4NUMxMS42OTQgMTYuMTA3MiAxMS4wMTE5IDE2LjEwNzIgMTAuNjA2OCAxNS42Nzg1TDQuOTg4MjggOS43MzEzNkM0LjM2OTg4IDkuMDc2OCA0LjgzMzkzIDggNS43MzQ0MSA4TDE2Ljk3MTUgOEMxNy44NzIgOCAxOC4zMzYgOS4wNzY4IDE3LjcxNzYgOS43MzEzNkwxMi4wOTkxIDE1LjY3ODVaIiBmaWxsPSIjQjdCOEJEIi8+Cjwvc3ZnPgo=");
;// CONCATENATED MODULE: ./assets/icons/expand-light.svg
var expand_light_path;
function expand_light_extends() { expand_light_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return expand_light_extends.apply(this, arguments); }

const SvgExpandLight = props => /*#__PURE__*/React.createElement("svg", expand_light_extends({
  width: 24,
  height: 24,
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), expand_light_path || (expand_light_path = /*#__PURE__*/React.createElement("path", {
  d: "M12.1 15.678a1.027 1.027 0 0 1-1.493 0L4.988 9.732C4.37 9.077 4.834 8 5.734 8h11.237c.901 0 1.365 1.077.747 1.731l-5.619 5.947Z",
  fill: "#FFF"
})));

/* harmony default export */ const expand_light = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjA5OTEgMTUuNjc4NUMxMS42OTQgMTYuMTA3MiAxMS4wMTE5IDE2LjEwNzIgMTAuNjA2OCAxNS42Nzg1TDQuOTg4MjggOS43MzEzNkM0LjM2OTg4IDkuMDc2OCA0LjgzMzkzIDggNS43MzQ0MSA4TDE2Ljk3MTUgOEMxNy44NzIgOCAxOC4zMzYgOS4wNzY4IDE3LjcxNzYgOS43MzEzNkwxMi4wOTkxIDE1LjY3ODVaIiBmaWxsPSIjRkZGRkZGIi8+Cjwvc3ZnPgo=");
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(322);
;// CONCATENATED MODULE: ./src/components/Icon.tsx





var icons = {
  "arrow-left": {
    image: circle_arrow_left
  },
  close: {
    image: icons_close
  },
  "expand-light": {
    image: expand_light
  },
  expand: {
    image: expand
  }
};
function Icon(props) {
  var iconName = props.iconName,
    _props$height = props.height,
    height = _props$height === void 0 ? "auto" : _props$height,
    _props$width = props.width,
    width = _props$width === void 0 ? "auto" : _props$width;
  return icons[iconName] ? /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    height: height,
    width: width,
    src: icons[iconName].image,
    alt: iconName
  }) : null;
}
;// CONCATENATED MODULE: ./src/components/Image.tsx

function Image_Image(props) {
  var imageId = props.imageId,
    _props$height = props.height,
    height = _props$height === void 0 ? "auto" : _props$height,
    _props$width = props.width,
    width = _props$width === void 0 ? "auto" : _props$width;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
    src: "https://images.web3auth.io/".concat(imageId, ".svg"),
    height: height,
    width: width,
    alt: imageId
  });
}
;// CONCATENATED MODULE: ./src/components/AdapterLoader.tsx








var DEFAULT_LOGO_URL = "https://images.web3auth.io/web3auth-logo.svg";
var closeIcon = /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
  iconName: "close"
});
function DetailedLoader(props) {
  var adapter = props.adapter,
    _props$appLogo = props.appLogo,
    appLogo = _props$appLogo === void 0 ? DEFAULT_LOGO_URL : _props$appLogo,
    message = props.message,
    modalStatus = props.modalStatus,
    onClose = props.onClose;
  var web3authIcon = /*#__PURE__*/(0,jsx_runtime.jsx)(Image_Image, {
    imageId: "web3auth"
  });
  var providerIcon = /*#__PURE__*/(0,jsx_runtime.jsx)(Image_Image, {
    imageId: "login-".concat(adapter)
  });
  (0,external_react_.useEffect)(function () {
    base_namespaceObject.log.debug("adapter loader re-rendering");
    if (modalStatus === MODAL_STATUS.CONNECTED) {
      setTimeout(function () {
        onClose();
      }, 3000);
    }
  }, [modalStatus, onClose]);
  return modalStatus !== MODAL_STATUS.INITIALIZED ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "w3ajs-modal-loader w3a-modal__loader",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "w3a-modal__loader-content",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "w3a-modal__loader-info",
        children: [modalStatus === MODAL_STATUS.CONNECTING && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "w3a-modal__loader-bridge",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "w3a-modal__loader-app-logo",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                src: appLogo,
                alt: ""
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "w3a-modal__connector",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "w3a-modal__connector-beat",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {})]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "w3a-modal__loader-adapter",
              children: providerIcon
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "w3a-modal__loader-bridge-message",
              children: ["Verify on your ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                children: adapter
              }), " account to continue"]
            })
          })]
        }), modalStatus === base_namespaceObject.ADAPTER_STATUS.CONNECTED && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "w3ajs-modal-loader__message w3a-spinner-message",
          children: message
        }), modalStatus === base_namespaceObject.ADAPTER_STATUS.ERRORED && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "w3ajs-modal-loader__message w3a-spinner-message w3a-spinner-message--error",
          children: message
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "w3a-spinner-power",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: "Self-custodial login by"
        }), web3authIcon]
      })]
    }), (modalStatus === base_namespaceObject.ADAPTER_STATUS.CONNECTED || modalStatus === base_namespaceObject.ADAPTER_STATUS.ERRORED) && /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
      type: "button",
      className: "w3a-header__button w3ajs-loader-close-btn",
      onClick: onClose,
      children: closeIcon
    })]
  }) : null;
}
;// CONCATENATED MODULE: ./src/components/Loader.tsx







var Loader_closeIcon = /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
  iconName: "close"
});
function Loader(props) {
  var message = props.message,
    modalStatus = props.modalStatus,
    label = props.label,
    onClose = props.onClose,
    _props$canEmit = props.canEmit,
    canEmit = _props$canEmit === void 0 ? true : _props$canEmit;
  var web3authIcon = /*#__PURE__*/(0,jsx_runtime.jsx)(Image_Image, {
    imageId: "web3auth"
  });
  (0,external_react_.useEffect)(function () {
    base_namespaceObject.log.debug("loader re-rendering");
    if (modalStatus === MODAL_STATUS.CONNECTED && canEmit) {
      setTimeout(function () {
        onClose();
      }, 3000);
    }
  }, [canEmit, modalStatus, onClose]);
  return modalStatus !== MODAL_STATUS.INITIALIZED ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "w3ajs-modal-loader w3a-modal__loader",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "w3a-modal__loader-content",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "w3a-modal__loader-info",
        children: [modalStatus === MODAL_STATUS.CONNECTING && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "w3ajs-modal-loader__spinner w3a-spinner",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "w3a-spinner__head"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "w3a-spinner__mask"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "w3ajs-modal-loader__label w3a-spinner-label",
          children: label
        }), modalStatus === base_namespaceObject.ADAPTER_STATUS.CONNECTED && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "w3ajs-modal-loader__message w3a-spinner-message",
          children: message
        }), modalStatus === base_namespaceObject.ADAPTER_STATUS.ERRORED && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "w3ajs-modal-loader__message w3a-spinner-message w3a-spinner-message--error",
          children: message
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "w3a-spinner-power",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: "Self-custodial login by"
        }), web3authIcon]
      })]
    }), (modalStatus === base_namespaceObject.ADAPTER_STATUS.CONNECTED || modalStatus === base_namespaceObject.ADAPTER_STATUS.ERRORED) && /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
      type: "button",
      className: "w3a-header__button w3ajs-loader-close-btn",
      onClick: onClose,
      children: Loader_closeIcon
    })]
  }) : null;
}
;// CONCATENATED MODULE: external "bowser"
const external_bowser_namespaceObject = require("bowser");
var external_bowser_default = /*#__PURE__*/__webpack_require__.n(external_bowser_namespaceObject);
;// CONCATENATED MODULE: external "react-qr-code"
const external_react_qr_code_namespaceObject = require("react-qr-code");
var external_react_qr_code_default = /*#__PURE__*/__webpack_require__.n(external_react_qr_code_namespaceObject);
;// CONCATENATED MODULE: ./src/components/WalletConnect.tsx







var walletConnectIcon = /*#__PURE__*/(0,jsx_runtime.jsx)(Image_Image, {
  imageId: "wallet-connect",
  width: "114px"
});
function formatIOSMobile(params) {
  var encodedUri = encodeURIComponent(params.uri);
  if (params.universalLink) {
    return "".concat(params.universalLink, "/wc?uri=").concat(encodedUri);
  }
  if (params.deepLink) {
    return "".concat(params.deepLink).concat(params.deepLink.endsWith(":") ? "//" : "/", "wc?uri=").concat(encodedUri);
  }
  return "";
}
function formatMobileRegistryEntry(entry, walletConnectUri, os) {
  var platform = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "mobile";
  var universalLink = entry[platform].universal || "";
  var deepLink = entry[platform].native || "";
  return {
    name: entry.name || "",
    logo: entry.logo || "",
    universalLink: universalLink,
    deepLink: deepLink,
    href: os === (external_bowser_default()).OS_MAP.iOS ? formatIOSMobile({
      uri: walletConnectUri,
      universalLink: universalLink,
      deepLink: deepLink
    }) : walletConnectUri
  };
}
function formatMobileRegistry(registry, walletConnectUri, os) {
  var platform = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "mobile";
  return Object.values(registry).filter(function (entry) {
    return !!entry[platform].universal || !!entry[platform].native;
  }).map(function (entry) {
    return formatMobileRegistryEntry(entry, walletConnectUri, os, platform);
  });
}
function WalletConnect(props) {
  var walletConnectUri = props.walletConnectUri,
    wcAdapters = props.wcAdapters;
  var _useState = (0,external_react_.useState)([]),
    _useState2 = slicedToArray_default()(_useState, 2),
    links = _useState2[0],
    setLinks = _useState2[1];
  var deviceDetails = (0,external_react_.useMemo)(function () {
    var browser = external_bowser_default().getParser(window.navigator.userAgent);
    return {
      platform: browser.getPlatformType(),
      os: browser.getOSName()
    };
  }, []);
  (0,external_react_.useEffect)(function () {
    if (deviceDetails.platform === (external_bowser_default()).PLATFORMS_MAP.mobile) {
      var mobileLinks = formatMobileRegistry(wcAdapters, walletConnectUri, deviceDetails.os, deviceDetails.platform);
      setLinks(mobileLinks);
    }
  }, [wcAdapters, deviceDetails.os, deviceDetails.platform, walletConnectUri]);

  // TODO: show only wcAdapters of current chain
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "w3ajs-wallet-connect w3a-wallet-connect",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "w3ajs-wallet-connect__container w3a-wallet-connect__container".concat(deviceDetails.os === (external_bowser_default()).OS_MAP.Android ? " w3a-wallet-connect__container--android" : ""),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "w3a-wallet-connect__logo",
        children: walletConnectIcon
      }), deviceDetails.platform === (external_bowser_default()).PLATFORMS_MAP.desktop ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "w3a-wallet-connect__container-desktop",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: "Scan QR code with a WalletConnect-compatible wallet"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "w3ajs-wallet-connect-qr w3a-wallet-connect-qr",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)((external_react_qr_code_default()), {
            size: 200,
            value: walletConnectUri
          })
        })]
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "w3a-wallet-connect__container-btn-group",
        children: links.map(function (link) {
          return deviceDetails.os === (external_bowser_default()).OS_MAP.iOS ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "w3a-wallet-connect__container-ios",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
              href: link.href,
              rel: "noopener noreferrer",
              target: "_blank",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("button", {
                type: "button",
                className: "w3a-button w3a-button--icon",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  src: link.logo,
                  height: "auto",
                  width: "auto",
                  alt: "login-".concat(link.name)
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
                className: "w3a-adapter-item__label",
                children: link.name
              })]
            }, link.name)
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "w3a-wallet-connect__container-android",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              href: link.href,
              rel: "noopener noreferrer",
              target: "_blank",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
                type: "button",
                className: "w3a-button",
                children: "Connect"
              })
            }, link.name)
          });
        })
      })]
    })
  });
}
/* harmony default export */ const components_WalletConnect = (/*#__PURE__*/(0,external_react_.memo)(WalletConnect));
;// CONCATENATED MODULE: ./src/components/ExternalWallets.tsx










function ExternalWallet(props) {
  var hideExternalWallets = props.hideExternalWallets,
    handleExternalWalletClick = props.handleExternalWalletClick,
    _props$config = props.config,
    config = _props$config === void 0 ? {} : _props$config,
    walletConnectUri = props.walletConnectUri,
    showBackButton = props.showBackButton,
    modalStatus = props.modalStatus,
    wcAdapters = props.wcAdapters;
  var _useState = (0,external_react_.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    isLoaded = _useState2[0],
    setIsLoaded = _useState2[1];
  (0,external_react_.useEffect)(function () {
    var _config$WALLET_ADAPTE;
    base_namespaceObject.log.debug("loaded external wallets", config, walletConnectUri);
    var wcAvailable = (((_config$WALLET_ADAPTE = config[base_namespaceObject.WALLET_ADAPTERS.WALLET_CONNECT_V1]) === null || _config$WALLET_ADAPTE === void 0 ? void 0 : _config$WALLET_ADAPTE.showOnModal) || false) !== false;
    if (wcAvailable && !walletConnectUri) {
      handleExternalWalletClick({
        adapter: base_namespaceObject.WALLET_ADAPTERS.WALLET_CONNECT_V1
      });
    } else if (Object.keys(config).length > 0) {
      setIsLoaded(true);
    }
  }, [config, handleExternalWalletClick, walletConnectUri]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "w3ajs-external-wallet w3a-group",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "w3a-external-container w3ajs-external-container",
      children: [showBackButton && /*#__PURE__*/(0,jsx_runtime.jsxs)("button", {
        type: "button",
        className: "w3a-external-back w3ajs-external-back",
        onClick: hideExternalWallets,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
          iconName: "arrow-left"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "w3a-group__title",
          children: "Back"
        })]
      }), !isLoaded && /*#__PURE__*/(0,jsx_runtime.jsx)(Loader, {
        modalStatus: MODAL_STATUS.CONNECTING,
        canEmit: false
      }), Object.keys(config).map(function (adapter) {
        if (adapter === base_namespaceObject.WALLET_ADAPTERS.WALLET_CONNECT_V1 || adapter === base_namespaceObject.WALLET_ADAPTERS.WALLET_CONNECT_V2) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(components_WalletConnect, {
            walletConnectUri: walletConnectUri,
            wcAdapters: wcAdapters
          }, adapter);
        }
        return null;
      }), modalStatus === MODAL_STATUS.INITIALIZED && /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
        className: "w3a-adapter-list w3ajs-wallet-adapters",
        children: Object.keys(config).map(function (adapter) {
          var _config$adapter;
          if (adapter === base_namespaceObject.WALLET_ADAPTERS.WALLET_CONNECT_V1 || adapter === base_namespaceObject.WALLET_ADAPTERS.WALLET_CONNECT_V2) {
            return null;
          }
          // if (allKeys.length - 1 === index && isOthersLoading) setOthersLoading(false);
          var providerIcon = /*#__PURE__*/(0,jsx_runtime.jsx)(Image_Image, {
            imageId: "login-".concat(adapter)
          });
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
            className: "w3a-adapter-item",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("button", {
              type: "button",
              onClick: function onClick() {
                return handleExternalWalletClick({
                  adapter: adapter
                });
              },
              className: "w3a-button w3a-button--icon",
              children: providerIcon
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
              className: "w3a-adapter-item__label",
              children: ((_config$adapter = config[adapter]) === null || _config$adapter === void 0 ? void 0 : _config$adapter.label) || adapter
            })]
          }, adapter);
        })
      })]
    })
  });
}
;// CONCATENATED MODULE: ./src/components/Footer.tsx




function Footer(props) {
  var version = props.version;
  var web3authIcon = /*#__PURE__*/(0,jsx_runtime.jsx)(Image_Image, {
    imageId: "web3auth",
    height: "14px",
    width: "auto"
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "w3a-modal__footer",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "w3a-footer",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "w3a-footer__links",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://docs.web3auth.io/legal/terms-and-conditions",
            children: "Terms of use"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            children: "|"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://docs.web3auth.io/legal/privacy-policy",
            children: "Privacy policy"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          children: version
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "w3a-footer__secured",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: "Self-custodial login by"
        }), web3authIcon]
      })]
    })
  });
}
/* harmony default export */ const components_Footer = (/*#__PURE__*/(0,external_react_.memo)(Footer));
;// CONCATENATED MODULE: ./src/components/Header.tsx






var Header_DEFAULT_LOGO_URL = "https://images.web3auth.io/web3auth-logo.svg";
function Header(props) {
  var _useContext = (0,external_react_.useContext)(ThemedContext),
    isDark = _useContext.isDark;
  var _props$appLogo = props.appLogo,
    appLogo = _props$appLogo === void 0 ? Header_DEFAULT_LOGO_URL : _props$appLogo,
    onClose = props.onClose;
  var web3authIcon = /*#__PURE__*/(0,jsx_runtime.jsx)(Image_Image, {
    imageId: "web3auth".concat(isDark ? "-light" : "")
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "w3a-modal__header",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "w3a-header",
      children: [appLogo ? /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
        className: "w3a-header__logo",
        src: appLogo,
        alt: ""
      }) : web3authIcon, /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "w3a-header__title",
          children: "Sign in"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          className: "w3a-header__subtitle",
          children: "Select one of the following to continue"
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
      type: "button",
      onClick: onClose,
      className: "w3a-header__button w3ajs-close-btn",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
        iconName: "close"
      })
    })]
  });
}
var memoizedHeader = /*#__PURE__*/(0,external_react_.memo)(Header, function (prevProps, nextProps) {
  if (prevProps.appLogo !== nextProps.appLogo) {
    return true;
  }
  return false;
});
memoizedHeader.displayName = "Header";
/* harmony default export */ const components_Header = (memoizedHeader);
;// CONCATENATED MODULE: ./src/components/SocialLoginEmail.tsx




function SocialLoginEmail(props) {
  var handleSocialLoginClick = props.handleSocialLoginClick,
    adapter = props.adapter,
    MetamaskLogin = props.MetamaskLogin;
  var _useState = (0,external_react_.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    isValidEmail = _useState2[0],
    setIsValidEmail = _useState2[1];
  var handleEmailSubmit = function handleEmailSubmit(e) {
    e.preventDefault();
    var email = e.target[0].value;
    if (email) handleSocialLoginClick({
      adapter: adapter,
      loginParams: {
        loginProvider: "email_passwordless",
        login_hint: email
      }
    });
  };
  var handleEmailChange = function handleEmailChange(e) {
    var email = e.target.value;
    var emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    setIsValidEmail(!!emailValid);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "w3ajs-email-passwordless w3a-group w3a-group--email",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "w3a-group__title",
      children: "EMAIL"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
      className: "w3ajs-email-passwordless-form",
      onSubmit: function onSubmit(e) {
        return handleEmailSubmit(e);
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", {
        className: "w3a-text-field",
        type: "email",
        name: "email",
        required: true,
        placeholder: "Email",
        onChange: function onChange(e) {
          return handleEmailChange(e);
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        disabled: !isValidEmail,
        className: "w3a-button",
        type: "submit",
        children: "Continue with Email"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(MetamaskLogin, {})]
  });
}
;// CONCATENATED MODULE: external "classnames"
const external_classnames_namespaceObject = require("classnames");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
;// CONCATENATED MODULE: ./src/components/SocialLogins.tsx








var hasLightIcons = ["apple", "github"];
function SocialLogins(props) {
  var _useState = (0,external_react_.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    canShowMore = _useState2[0],
    setCanShowMore = _useState2[1];
  var _props$socialLoginsCo = props.socialLoginsConfig,
    socialLoginsConfig = _props$socialLoginsCo === void 0 ? {
      loginMethods: {},
      loginMethodsOrder: [],
      adapter: ""
    } : _props$socialLoginsCo,
    handleSocialLoginClick = props.handleSocialLoginClick;
  var _useContext = (0,external_react_.useContext)(ThemedContext),
    isDark = _useContext.isDark;
  var _useState3 = (0,external_react_.useState)(false),
    _useState4 = slicedToArray_default()(_useState3, 2),
    isExpanded = _useState4[0],
    setIsExpanded = _useState4[1];

  // Too small a function to use `useCallback`
  var expandClickHandler = function expandClickHandler() {
    setIsExpanded(!isExpanded);
  };
  (0,external_react_.useEffect)(function () {
    var maxOptions = Object.keys(socialLoginsConfig.loginMethods).filter(function (loginMethodKey) {
      return socialLoginsConfig.loginMethods[loginMethodKey].showOnModal;
    });
    setCanShowMore(maxOptions.length > 5);
  }, [socialLoginsConfig.loginMethods]);
  var adapterListClass = external_classnames_default()("w3a-adapter-list", "w3ajs-socials-adapters", !isExpanded ? " w3a-adapter-list--shrink" : "");
  var adapterButtonClass = external_classnames_default()("w3a-button-expand", "w3ajs-button-expand", isExpanded ? "w3a-button--rotate" : "");
  var adapterExpandText = isExpanded ? "View less options" : "View more options";
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "w3ajs-social-logins w3a-group",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "w3a-group__title",
      children: "CONTINUE WITH"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
      className: adapterListClass,
      children: Object.keys(socialLoginsConfig.loginMethods).map(function (method) {
        var providerIcon = /*#__PURE__*/(0,jsx_runtime.jsx)(Image_Image, {
          imageId: "login-".concat(method).concat(isDark && hasLightIcons.includes(method) ? "-light" : "")
        });
        if (socialLoginsConfig.loginMethods[method].showOnModal === false || method === "webauthn" || method === "jwt" || method === "email_passwordless") {
          return null;
        }
        var orderIndex = socialLoginsConfig.loginMethodsOrder.indexOf(method) + 1;
        var order = orderIndex || Object.keys(socialLoginsConfig.loginMethods).length + 1;
        return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "w3a-adapter-item",
          style: {
            order: order
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
            type: "button",
            onClick: function onClick() {
              return handleSocialLoginClick({
                adapter: socialLoginsConfig.adapter,
                loginParams: {
                  loginProvider: method
                }
              });
            },
            className: "w3a-button w3a-button--icon",
            children: providerIcon
          })
        }, method);
      })
    }), canShowMore && /*#__PURE__*/(0,jsx_runtime.jsxs)("button", {
      type: "button",
      className: adapterButtonClass,
      style: {
        display: "flex"
      },
      onClick: expandClickHandler,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Icon, {
        iconName: "expand".concat(isDark ? "-light" : "")
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "w3ajs-button-expand-text",
        children: adapterExpandText
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/Modal.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

















base_namespaceObject.log.enableAll();
function Modal(props) {
  var _modalState$socialLog3, _modalState$socialLog6, _modalState$socialLog7;
  var _useContext = (0,external_react_.useContext)(ThemedContext),
    isDark = _useContext.isDark;
  var _useState = (0,external_react_.useState)(["w3a-modal__inner"]),
    _useState2 = slicedToArray_default()(_useState, 2),
    modalTransitionClasses = _useState2[0],
    setModalTransitionClasses = _useState2[1];
  var _useState3 = (0,external_react_.useState)({
      externalWalletsVisibility: false,
      status: MODAL_STATUS.INITIALIZED,
      hasExternalWallets: false,
      externalWalletsInitialized: false,
      modalVisibility: false,
      modalVisibilityDelayed: false,
      postLoadingMessage: "",
      walletConnectUri: "",
      socialLoginsConfig: {
        loginMethods: {},
        loginMethodsOrder: [],
        adapter: ""
      },
      externalWalletsConfig: {},
      detailedLoaderAdapter: "",
      showExternalWalletsOnly: false,
      wcAdapters: []
    }),
    _useState4 = slicedToArray_default()(_useState3, 2),
    modalState = _useState4[0],
    setModalState = _useState4[1];
  var stateListener = props.stateListener,
    appLogo = props.appLogo,
    version = props.version,
    handleSocialLoginClick = props.handleSocialLoginClick,
    handleExternalWalletClick = props.handleExternalWalletClick,
    handleShowExternalWallets = props.handleShowExternalWallets,
    closeModal = props.closeModal,
    MetamaskLogin = props.MetamaskLogin;
  var DETAILED_ADAPTERS = [base_namespaceObject.WALLET_ADAPTERS.PHANTOM, base_namespaceObject.WALLET_ADAPTERS.METAMASK];
  (0,external_react_.useEffect)(function () {
    stateListener.emit("MOUNTED");
    stateListener.on("STATE_UPDATED", function (newModalState) {
      base_namespaceObject.log.debug("state updated", newModalState);
      setModalState(function (prevState) {
        var mergedState = external_lodash_clonedeep_default()(external_lodash_merge_default()(prevState, newModalState));
        return mergedState;
      });
    });
  }, [stateListener]);
  (0,external_react_.useEffect)(function () {
    var timeOutId;
    if (modalState.modalVisibility) {
      setModalState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          modalVisibilityDelayed: modalState.modalVisibility
        });
      });
      timeOutId = window.setTimeout(function () {
        setModalTransitionClasses(["w3a-modal__inner", modalState.modalVisibility ? "w3a-modal__inner--active" : ""]);
        // hide external wallets, if modal is closing, so that it will show social login screen on reopen.
      }, 100);
    } else {
      setModalTransitionClasses(["w3a-modal__inner", modalState.modalVisibility ? "w3a-modal__inner--active" : ""]);
      // hide external wallets, if modal is closing, so that it will show social login screen on reopen.

      timeOutId = window.setTimeout(function () {
        setModalState(function (prevState) {
          return _objectSpread(_objectSpread({}, prevState), {}, {
            modalVisibilityDelayed: modalState.modalVisibility
          });
        });
      }, 250);
    }
    return function () {
      clearTimeout(timeOutId);
    };
  }, [modalState.modalVisibility]);
  var onCloseLoader = (0,external_react_.useCallback)(function () {
    if (modalState.status === MODAL_STATUS.CONNECTED) {
      closeModal();
    }
    if (modalState.status === MODAL_STATUS.ERRORED) {
      setModalState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          modalVisibility: true,
          status: MODAL_STATUS.INITIALIZED
        });
      });
    }
  }, [closeModal, modalState.status]);
  var preHandleExternalWalletClick = function preHandleExternalWalletClick(params) {
    var adapter = params.adapter;
    if (DETAILED_ADAPTERS.includes(adapter)) setModalState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        detailedLoaderAdapter: adapter
      });
    });else if (adapter !== base_namespaceObject.WALLET_ADAPTERS.WALLET_CONNECT_V1) setModalState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        detailedLoaderAdapter: ""
      });
    });
    handleExternalWalletClick(params);
  };
  var preHandleSocialWalletClick = function preHandleSocialWalletClick(params) {
    setModalState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        detailedLoaderAdapter: ""
      });
    });
    handleSocialLoginClick(params);
  };
  var externalWalletButton = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "w3ajs-external-wallet w3a-group",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "w3a-external-toggle w3ajs-external-toggle",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "w3a-group__title",
        children: "EXTERNAL WALLET"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        type: "button",
        className: "w3a-button w3ajs-external-toggle__button",
        onClick: function onClick() {
          handleShowExternalWallets(modalState.externalWalletsInitialized);
          setModalState(function (prevState) {
            return _objectSpread(_objectSpread({}, prevState), {}, {
              externalWalletsVisibility: true
            });
          });
        },
        children: "Connect with Wallet"
      })]
    })
  });
  var areSocialLoginsVisible = (0,external_react_.useMemo)(function () {
    var _modalState$socialLog, _modalState$socialLog2;
    if (modalState.showExternalWalletsOnly) return false;
    if (Object.keys(((_modalState$socialLog = modalState.socialLoginsConfig) === null || _modalState$socialLog === void 0 ? void 0 : _modalState$socialLog.loginMethods) || {}).length === 0) return false;
    var isAnySocialLoginVisible = Object.entries(((_modalState$socialLog2 = modalState.socialLoginsConfig) === null || _modalState$socialLog2 === void 0 ? void 0 : _modalState$socialLog2.loginMethods) || {}).some(function (_ref) {
      var _ref2 = slicedToArray_default()(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];
      return k !== openlogin_namespaceObject.LOGIN_PROVIDER.EMAIL_PASSWORDLESS && v.showOnModal !== false;
    });
    if (isAnySocialLoginVisible) return true;
    return false;
  }, [modalState.showExternalWalletsOnly, (_modalState$socialLog3 = modalState.socialLoginsConfig) === null || _modalState$socialLog3 === void 0 ? void 0 : _modalState$socialLog3.loginMethods]);
  base_namespaceObject.log.info("modal state", modalState, areSocialLoginsVisible);
  var isEmailPassworedlessLoginVisible = (0,external_react_.useMemo)(function () {
    var _modalState$socialLog4, _modalState$socialLog5;
    return (_modalState$socialLog4 = modalState.socialLoginsConfig) === null || _modalState$socialLog4 === void 0 ? void 0 : (_modalState$socialLog5 = _modalState$socialLog4.loginMethods[openlogin_namespaceObject.LOGIN_PROVIDER.EMAIL_PASSWORDLESS]) === null || _modalState$socialLog5 === void 0 ? void 0 : _modalState$socialLog5.showOnModal;
  }, [(_modalState$socialLog6 = modalState.socialLoginsConfig) === null || _modalState$socialLog6 === void 0 ? void 0 : _modalState$socialLog6.loginMethods]);
  var modalClassName = "w3a-modal ".concat(isDark ? "" : " w3a-modal--light");
  return modalState.modalVisibilityDelayed && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    id: "w3a-modal",
    className: modalClassName,
    style: {
      display: "flex"
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: modalTransitionClasses.join(" "),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Header, {
        onClose: closeModal,
        appLogo: appLogo
      }), modalState.status !== MODAL_STATUS.INITIALIZED ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "w3a-modal__content w3ajs-content",
        children: modalState.detailedLoaderAdapter ? /*#__PURE__*/(0,jsx_runtime.jsx)(DetailedLoader, {
          onClose: onCloseLoader,
          appLogo: appLogo,
          modalStatus: modalState.status,
          message: modalState.postLoadingMessage,
          adapter: modalState.detailedLoaderAdapter
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Loader, {
          onClose: onCloseLoader,
          modalStatus: modalState.status,
          message: modalState.postLoadingMessage
        })
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "w3a-modal__content w3ajs-content",
        children: (areSocialLoginsVisible || isEmailPassworedlessLoginVisible) && !modalState.externalWalletsVisibility ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [areSocialLoginsVisible ? /*#__PURE__*/(0,jsx_runtime.jsx)(SocialLogins, {
            handleSocialLoginClick: function handleSocialLoginClick(params) {
              return preHandleSocialWalletClick(params);
            },
            socialLoginsConfig: modalState.socialLoginsConfig
          }) : null, isEmailPassworedlessLoginVisible && /*#__PURE__*/(0,jsx_runtime.jsx)(SocialLoginEmail, {
            adapter: (_modalState$socialLog7 = modalState.socialLoginsConfig) === null || _modalState$socialLog7 === void 0 ? void 0 : _modalState$socialLog7.adapter,
            handleSocialLoginClick: function handleSocialLoginClick(params) {
              return preHandleSocialWalletClick(params);
            },
            MetamaskLogin: MetamaskLogin
          }), modalState.hasExternalWallets && externalWalletButton]
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(ExternalWallet, {
          modalStatus: modalState.status,
          showBackButton: areSocialLoginsVisible,
          handleExternalWalletClick: function handleExternalWalletClick(params) {
            return preHandleExternalWalletClick(params);
          },
          walletConnectUri: modalState.walletConnectUri,
          wcAdapters: modalState.wcAdapters,
          config: modalState.externalWalletsConfig,
          hideExternalWallets: function hideExternalWallets() {
            return setModalState(function (prevState) {
              return _objectSpread(_objectSpread({}, prevState), {}, {
                externalWalletsVisibility: false
              });
            });
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Footer, {
        version: version
      })]
    })
  });
}
;// CONCATENATED MODULE: ./src/loginModal.tsx









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var loginModal_DEFAULT_LOGO_URL = "https://images.web3auth.io/web3auth-logo.svg";
function createWrapper() {
  var wrapper = document.createElement("section");
  wrapper.setAttribute("id", "w3a-container");
  document.body.appendChild(wrapper);
  return wrapper;
}
var LoginModal = /*#__PURE__*/function (_SafeEventEmitter) {
  inherits_default()(LoginModal, _SafeEventEmitter);
  var _super = _createSuper(LoginModal);
  function LoginModal(_ref) {
    var _this;
    var appLogo = _ref.appLogo,
      version = _ref.version,
      adapterListener = _ref.adapterListener,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? "light" : _ref$theme,
      _ref$displayErrorsOnM = _ref.displayErrorsOnModal,
      displayErrorsOnModal = _ref$displayErrorsOnM === void 0 ? true : _ref$displayErrorsOnM,
      MetamaskLogin = _ref.MetamaskLogin;
    classCallCheck_default()(this, LoginModal);
    _this = _super.call(this);
    defineProperty_default()(assertThisInitialized_default()(_this), "appLogo", void 0);
    defineProperty_default()(assertThisInitialized_default()(_this), "version", void 0);
    defineProperty_default()(assertThisInitialized_default()(_this), "isDark", void 0);
    defineProperty_default()(assertThisInitialized_default()(_this), "stateEmitter", void 0);
    defineProperty_default()(assertThisInitialized_default()(_this), "displayErrorsOnModal", true);
    defineProperty_default()(assertThisInitialized_default()(_this), "MetamaskLogin", void 0);
    defineProperty_default()(assertThisInitialized_default()(_this), "initModal", /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var darkState;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              darkState = {
                isDark: _this.isDark
              };
              return _context.abrupt("return", new Promise(function (resolve) {
                _this.stateEmitter.once("MOUNTED", function () {
                  base_namespaceObject.log.info("rendered");
                  _this.setState({
                    status: MODAL_STATUS.INITIALIZED
                  });
                  return resolve();
                });
                (0,external_react_dom_namespaceObject.render)( /*#__PURE__*/(0,jsx_runtime.jsx)(ThemedContext.Provider, {
                  value: darkState,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(Modal, {
                    closeModal: _this.closeModal,
                    stateListener: _this.stateEmitter,
                    handleShowExternalWallets: function handleShowExternalWallets(externalWalletsInitialized) {
                      return _this.handleShowExternalWallets(externalWalletsInitialized);
                    },
                    handleExternalWalletClick: function handleExternalWalletClick(params) {
                      return _this.handleExternalWalletClick(params);
                    },
                    handleSocialLoginClick: function handleSocialLoginClick(params) {
                      return _this.handleSocialLoginClick(params);
                    },
                    appLogo: _this.appLogo,
                    version: _this.version,
                    MetamaskLogin: _this.MetamaskLogin
                  })
                }), createWrapper());
              }));
            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    defineProperty_default()(assertThisInitialized_default()(_this), "addSocialLogins", function (adapter, loginMethods, loginMethodsOrder) {
      _this.setState({
        socialLoginsConfig: {
          adapter: adapter,
          loginMethods: loginMethods,
          loginMethodsOrder: loginMethodsOrder
        }
      });
      base_namespaceObject.log.info("addSocialLogins", adapter, loginMethods, loginMethodsOrder);
    });
    defineProperty_default()(assertThisInitialized_default()(_this), "addWalletLogins", function (externalWalletsConfig, options) {
      _this.setState({
        externalWalletsConfig: externalWalletsConfig,
        externalWalletsInitialized: true,
        showExternalWalletsOnly: !!(options !== null && options !== void 0 && options.showExternalWalletsOnly),
        externalWalletsVisibility: true
      });
    });
    defineProperty_default()(assertThisInitialized_default()(_this), "open", function () {
      _this.setState({
        modalVisibility: true
      });
      _this.emit(LOGIN_MODAL_EVENTS.MODAL_VISIBILITY, true);
    });
    defineProperty_default()(assertThisInitialized_default()(_this), "closeModal", function () {
      _this.setState({
        modalVisibility: false,
        externalWalletsVisibility: false
      });
      _this.emit(LOGIN_MODAL_EVENTS.MODAL_VISIBILITY, false);
    });
    defineProperty_default()(assertThisInitialized_default()(_this), "initExternalWalletContainer", function () {
      _this.setState({
        hasExternalWallets: true
      });
    });
    defineProperty_default()(assertThisInitialized_default()(_this), "handleShowExternalWallets", function (status) {
      _this.emit(LOGIN_MODAL_EVENTS.INIT_EXTERNAL_WALLETS, {
        externalWalletsInitialized: status
      });
    });
    defineProperty_default()(assertThisInitialized_default()(_this), "handleExternalWalletClick", function (params) {
      base_namespaceObject.log.info("external wallet clicked", params);
      var adapter = params.adapter;
      _this.emit(LOGIN_MODAL_EVENTS.LOGIN, {
        adapter: adapter
      });
    });
    defineProperty_default()(assertThisInitialized_default()(_this), "handleSocialLoginClick", function (params) {
      base_namespaceObject.log.info("social login clicked", params);
      var adapter = params.adapter,
        loginParams = params.loginParams;
      _this.emit(LOGIN_MODAL_EVENTS.LOGIN, {
        adapter: adapter,
        loginParams: {
          loginProvider: loginParams.loginProvider,
          login_hint: loginParams.login_hint
        }
      });
    });
    defineProperty_default()(assertThisInitialized_default()(_this), "setState", function (newState) {
      _this.stateEmitter.emit("STATE_UPDATED", newState);
    });
    defineProperty_default()(assertThisInitialized_default()(_this), "updateWalletConnect", function (walletConnectUri, wcAdapters) {
      if (!walletConnectUri) return;
      _this.setState({
        walletConnectUri: walletConnectUri,
        wcAdapters: wcAdapters
      });
    });
    defineProperty_default()(assertThisInitialized_default()(_this), "handleAdapterData", function (adapterData) {
      if (adapterData.adapterName === base_namespaceObject.WALLET_ADAPTERS.WALLET_CONNECT_V1) {
        var walletConnectData = adapterData.data;
        _this.updateWalletConnect(walletConnectData.uri, walletConnectData.extensionAdapters);
      }
    });
    defineProperty_default()(assertThisInitialized_default()(_this), "subscribeCoreEvents", function (listener) {
      listener.on(base_namespaceObject.ADAPTER_EVENTS.CONNECTING, function (data) {
        base_namespaceObject.log.info("connecting with adapter", data);
        // don't show loader in case of wallet connect, because currently it listens for incoming for incoming
        // connections without any user interaction.
        if ((data === null || data === void 0 ? void 0 : data.adapter) !== base_namespaceObject.WALLET_ADAPTERS.WALLET_CONNECT_V1 && (data === null || data === void 0 ? void 0 : data.adapter) !== base_namespaceObject.WALLET_ADAPTERS.WALLET_CONNECT_V2) {
          // const provider = data?.loginProvider || "";

          _this.setState({
            status: MODAL_STATUS.CONNECTING
          });
        }
      });
      listener.on(base_namespaceObject.ADAPTER_EVENTS.CONNECTED, function (data) {
        base_namespaceObject.log.debug("connected with adapter", data);
        // only show success if not being reconnected again.
        if (!data.reconnected) {
          _this.setState({
            status: MODAL_STATUS.CONNECTED,
            modalVisibility: true,
            postLoadingMessage: "You are connected with your account"
          });
        } else {
          _this.setState({
            status: MODAL_STATUS.CONNECTED
          });
        }
      });
      listener.on(base_namespaceObject.ADAPTER_EVENTS.ERRORED, function (error) {
        base_namespaceObject.log.error("error", error, error.message);
        if (error.code === 5000) {
          if (_this.displayErrorsOnModal) _this.setState({
            modalVisibility: true,
            postLoadingMessage: error.message || "Something went wrong!",
            status: MODAL_STATUS.ERRORED
          });else _this.setState({
            modalVisibility: false
          });
        } else {
          _this.setState({
            modalVisibility: true,
            status: MODAL_STATUS.INITIALIZED
          });
        }
      });
      listener.on(base_namespaceObject.ADAPTER_EVENTS.DISCONNECTED, function () {
        _this.setState({
          status: MODAL_STATUS.INITIALIZED,
          externalWalletsVisibility: false
        });
        // this.toggleMessage("");
      });

      listener.on(base_namespaceObject.ADAPTER_EVENTS.ADAPTER_DATA_UPDATED, function (adapterData) {
        _this.handleAdapterData(adapterData);
      });
    });
    _this.appLogo = appLogo || loginModal_DEFAULT_LOGO_URL;
    _this.version = version;
    _this.isDark = theme === "dark";
    _this.stateEmitter = new openlogin_jrpc_namespaceObject.SafeEventEmitter();
    _this.displayErrorsOnModal = displayErrorsOnModal;
    _this.subscribeCoreEvents(adapterListener);
    _this.MetamaskLogin = MetamaskLogin;
    return _this;
  }
  return createClass_default()(LoginModal);
}(openlogin_jrpc_namespaceObject.SafeEventEmitter);

// EXTERNAL MODULE: ./css/network.css
var network = __webpack_require__(883);
;// CONCATENATED MODULE: ./src/utils.ts



function utils_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function utils_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? utils_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : utils_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var getAdapterSocialLogins = function getAdapterSocialLogins(adapterName, adapter) {
  var loginMethodsConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var finalLoginMethodsConfig = {};
  if (adapterName === base_namespaceObject.WALLET_ADAPTERS.OPENLOGIN) {
    OPENLOGIN_PROVIDERS.forEach(function (loginMethod) {
      var currentLoginMethodConfig = loginMethodsConfig[loginMethod] || {
        name: loginMethod,
        showOnMobile: true,
        showOnModal: true,
        showOnDesktop: true
      };
      finalLoginMethodsConfig[loginMethod] = utils_objectSpread({}, currentLoginMethodConfig);
    });
    base_namespaceObject.log.debug("OpenLogin login method ui config", finalLoginMethodsConfig);
  } else {
    throw new Error("".concat(adapterName, " is not a valid adapter"));
  }
  return finalLoginMethodsConfig;
};
function validateImageUrl(_x) {
  return _validateImageUrl.apply(this, arguments);
}
function _validateImageUrl() {
  _validateImageUrl = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(url) {
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              var img = new Image();
              img.src = url;
              if (img.complete) {
                resolve(true);
              } else {
                img.addEventListener("load", function () {
                  resolve(true);
                });
                img.addEventListener("error", function () {
                  reject();
                });
              }
            }));
          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _validateImageUrl.apply(this, arguments);
}
function getNetworkIconId(_x2) {
  return _getNetworkIconId.apply(this, arguments);
}
function _getNetworkIconId() {
  _getNetworkIconId = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee2(ticker) {
    var fallbackId, url, isValid;
    return regenerator_default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            fallbackId = "network-default";
            if (ticker) {
              _context2.next = 3;
              break;
            }
            return _context2.abrupt("return", fallbackId);
          case 3:
            _context2.prev = 3;
            url = "https://images.web3auth.io/network-".concat(ticker.toLowerCase(), ".svg");
            _context2.next = 7;
            return validateImageUrl(url);
          case 7:
            isValid = _context2.sent;
            if (!isValid) {
              _context2.next = 10;
              break;
            }
            return _context2.abrupt("return", "network-".concat(ticker.toLowerCase()));
          case 10:
            return _context2.abrupt("return", fallbackId);
          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](3);
            return _context2.abrupt("return", fallbackId);
          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 13]]);
  }));
  return _getNetworkIconId.apply(this, arguments);
}
;// CONCATENATED MODULE: ./src/components/AddNetwork.tsx






function AddNetwork(props) {
  var chainConfig = props.chainConfig,
    appOrigin = props.appOrigin,
    onAddNetwork = props.onAddNetwork,
    onCancelNetwork = props.onCancelNetwork;
  var _useState = (0,external_react_.useState)(true),
    _useState2 = slicedToArray_default()(_useState, 2),
    showModal = _useState2[0],
    setShowModal = _useState2[1];
  var _useState3 = (0,external_react_.useState)("network-default"),
    _useState4 = slicedToArray_default()(_useState3, 2),
    networkIconId = _useState4[0],
    setNetworkIconId = _useState4[1];
  (0,external_react_.useEffect)(function () {
    getNetworkIconId(chainConfig.ticker).then(function (id) {
      return setNetworkIconId(id);
    }).catch(function () {});
  }, [chainConfig.ticker]);
  return showModal && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    id: "w3a-modal-network",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "w3a-switch-network",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "w3a-switch-network__title",
        children: "This site is requesting to add Network"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          className: "w3a-switch-network__link",
          href: appOrigin,
          children: appOrigin
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "w3a-switch-network__connect",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "w3a-switch-network__logo",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Image_Image, {
              imageId: networkIconId
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: chainConfig.displayName
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "w3a-switch-network__buttons",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("button", {
          type: "button",
          className: "w3a-button",
          onClick: function onClick() {
            setShowModal(false);
            onCancelNetwork();
          },
          children: "Cancel"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
          type: "button",
          className: "w3a-button w3a-button--primary",
          onClick: function onClick() {
            setShowModal(false);
            onAddNetwork(chainConfig.chainId);
          },
          children: "Proceed"
        })]
      })]
    })
  });
}
/* harmony default export */ const components_AddNetwork = (AddNetwork);
;// CONCATENATED MODULE: ./src/components/SwitchNetwork.tsx






function SwitchNetwork(props) {
  var currentChainConfig = props.currentChainConfig,
    newChainConfig = props.newChainConfig,
    appOrigin = props.appOrigin,
    onSwitchNetwork = props.onSwitchNetwork,
    onCancelNetwork = props.onCancelNetwork;
  var _useState = (0,external_react_.useState)(true),
    _useState2 = slicedToArray_default()(_useState, 2),
    showModal = _useState2[0],
    setShowModal = _useState2[1];
  var _useState3 = (0,external_react_.useState)("network-default"),
    _useState4 = slicedToArray_default()(_useState3, 2),
    fromNetworkIconId = _useState4[0],
    setFromNetworkIconId = _useState4[1];
  var _useState5 = (0,external_react_.useState)("network-default"),
    _useState6 = slicedToArray_default()(_useState5, 2),
    toNetworkIconId = _useState6[0],
    setToNetworkIconId = _useState6[1];
  (0,external_react_.useEffect)(function () {
    getNetworkIconId(currentChainConfig.ticker).then(function (id) {
      return setFromNetworkIconId(id);
    }).catch(function () {});
    getNetworkIconId(newChainConfig.ticker).then(function (id) {
      return setToNetworkIconId(id);
    }).catch(function () {});
  }, [currentChainConfig.chainId, currentChainConfig.ticker, newChainConfig.chainId, newChainConfig.ticker]);
  return showModal && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    id: "w3a-modal-network",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "w3a-switch-network",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "w3a-switch-network__title",
        children: "This site is requesting to switch Network"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          className: "w3a-switch-network__link",
          href: appOrigin,
          children: appOrigin
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "w3a-switch-network__connect",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "w3a-switch-network__logo",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Image_Image, {
              imageId: fromNetworkIconId
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: "From:"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: currentChainConfig.displayName
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "w3a-switch-network__connect-divider",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Image_Image, {
              imageId: "network-arrow"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "w3a-switch-network__logo",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Image_Image, {
              imageId: toNetworkIconId
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: "To:"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: newChainConfig.displayName
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "w3a-switch-network__buttons",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("button", {
          type: "button",
          className: "w3a-button",
          onClick: function onClick() {
            setShowModal(false);
            onCancelNetwork();
          },
          children: "Cancel"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
          type: "button",
          className: "w3a-button w3a-button--primary",
          onClick: function onClick() {
            setShowModal(false);
            onSwitchNetwork(currentChainConfig.chainId, newChainConfig.chainId);
          },
          children: "Proceed"
        })]
      })]
    })
  });
}
/* harmony default export */ const components_SwitchNetwork = (SwitchNetwork);
;// CONCATENATED MODULE: ./src/networkSwitch.tsx







function networkSwitch_createSuper(Derived) { var hasNativeReflectConstruct = networkSwitch_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }
function networkSwitch_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/* eslint-disable class-methods-use-this */






function networkSwitch_createWrapper(id) {
  var element = document.getElementById(id || "w3a-network-container");
  if (element) return element;
  var wrapper = document.createElement("section");
  wrapper.setAttribute("id", id || "w3a-network-container");
  document.body.appendChild(wrapper);
  return wrapper;
}
var NetworkSwitch = /*#__PURE__*/function (_BaseNetworkSwitch) {
  inherits_default()(NetworkSwitch, _BaseNetworkSwitch);
  var _super = networkSwitch_createSuper(NetworkSwitch);
  function NetworkSwitch() {
    classCallCheck_default()(this, NetworkSwitch);
    return _super.apply(this, arguments);
  }
  createClass_default()(NetworkSwitch, [{
    key: "addNetwork",
    value: function () {
      var _addNetwork = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(params) {
        var chainConfig, appOrigin;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                chainConfig = params.chainConfig, appOrigin = params.appOrigin;
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  var addNetworkCallback = function addNetworkCallback() {
                    return resolve(true);
                  };
                  var cancelCallback = function cancelCallback() {
                    return reject(new Error("User cancelled request for adding new network"));
                  };
                  (0,external_react_dom_namespaceObject.render)( /*#__PURE__*/(0,jsx_runtime.jsx)(components_AddNetwork, {
                    appOrigin: appOrigin,
                    chainConfig: chainConfig,
                    onAddNetwork: addNetworkCallback,
                    onCancelNetwork: cancelCallback
                  }), networkSwitch_createWrapper("w3a-add-network-container"));
                }));
              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function addNetwork(_x) {
        return _addNetwork.apply(this, arguments);
      }
      return addNetwork;
    }()
  }, {
    key: "switchNetwork",
    value: function () {
      var _switchNetwork = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee2(params) {
        var currentChainConfig, appOrigin, newChainConfig;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                currentChainConfig = params.currentChainConfig, appOrigin = params.appOrigin, newChainConfig = params.newChainConfig;
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  var switchNetworkCallback = function switchNetworkCallback() {
                    return resolve(true);
                  };
                  var cancelCallback = function cancelCallback() {
                    return reject(new Error("User cancelled request for adding new network"));
                  };
                  (0,external_react_dom_namespaceObject.render)( /*#__PURE__*/(0,jsx_runtime.jsx)(components_SwitchNetwork, {
                    appOrigin: appOrigin,
                    currentChainConfig: currentChainConfig,
                    newChainConfig: newChainConfig,
                    onSwitchNetwork: switchNetworkCallback,
                    onCancelNetwork: cancelCallback
                  }), networkSwitch_createWrapper("w3a-switch-network-container"));
                }));
              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      function switchNetwork(_x2) {
        return _switchNetwork.apply(this, arguments);
      }
      return switchNetwork;
    }()
  }, {
    key: "cancel",
    value: function cancel() {}
  }]);
  return NetworkSwitch;
}(base_namespaceObject.BaseNetworkSwitch);
;// CONCATENATED MODULE: ./src/index.ts





})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=ui.cjs.js.map