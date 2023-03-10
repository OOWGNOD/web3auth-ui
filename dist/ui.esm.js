import { LOGIN_PROVIDER } from '@toruslabs/openlogin';
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _createClass from '@babel/runtime/helpers/createClass';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { SafeEventEmitter } from '@toruslabs/openlogin-jrpc';
import { log, ADAPTER_STATUS, WALLET_ADAPTERS, ADAPTER_EVENTS, BaseNetworkSwitch } from '@web3auth/base';
import { render } from 'react-dom';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import cloneDeep from 'lodash.clonedeep';
import deepmerge from 'lodash.merge';
import { createContext, useEffect, memo, useState, useMemo, useContext, useCallback } from 'react';
import bowser from 'bowser';
import QRCode from 'react-qr-code';
import classNames from 'classnames';

var OPENLOGIN_PROVIDERS = Object.values(LOGIN_PROVIDER).filter(function (x) {
  return x !== LOGIN_PROVIDER.WEBAUTHN && x !== LOGIN_PROVIDER.JWT;
});

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

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "/* devanagari */\n@font-face {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z11lFd2JQEl8qw.woff2) format(\"woff2\");\n  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;\n}\n/* latin-ext */\n@font-face {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1JlFd2JQEl8qw.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,\n    U+2215, U+FEFF, U+FFFD;\n}\n\n/* latin-ext */\n@font-face {\n  font-family: \"DM Sans\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/dmsans/v6/rP2Hp2ywxg089UriCZ2IHTWEBlwu8Q.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \"DM Sans\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/dmsans/v6/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,\n    U+2215, U+FEFF, U+FFFD;\n}\n\n/* Modal */\n#w3a-modal {\n  --bg1: #0f1222;\n  --bg2: #24262e;\n  --text-color1: #d3d3d4;\n  --text-color2: #ffffff;\n\n  --text-header: \"Poppins\", Helvetica, sans-serif;\n  --text-body: \"DM Sans\", Helvetica, sans-serif;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  padding: 15px;\n  background: rgba(33, 33, 33, 0.46);\n  color: var(--text-color1);\n  font-family: var(--text-body);\n}\n\n#w3a-modal.w3a-modal--hidden {\n  display: none;\n}\n\n#w3a-modal p,\n#w3a-modal form,\n#w3a-modal button {\n  margin: 0;\n  padding: 0;\n}\n\n#w3a-modal .w3a-modal__inner {\n  width: 100%;\n  max-width: 375px;\n  overflow: hidden;\n  border-radius: 6px;\n  position: relative;\n  max-height: 95%;\n  overflow-y: auto;\n  opacity: 0;\n  transition: 200ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transform-origin: center center;\n  min-height: 350px;\n}\n\n#w3a-modal .w3a-modal__inner.w3a-modal__inner--active {\n  opacity: 1;\n  transition: 200ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transform-origin: center center;\n}\n\n#w3a-modal .w3a-modal__header {\n  padding: 25px 34px;\n  background: var(--bg1);\n  box-shadow: 0px 4px 28px rgba(3, 100, 255, 0.05);\n  position: relative;\n}\n#w3a-modal .w3a-modal__content {\n  padding: 30px 34px;\n  background: var(--bg2);\n}\n#w3a-modal .w3a-modal__footer {\n  padding: 16px 34px;\n  background: var(--bg1);\n}\n\n/* SPINNER */\n/* Loader */\n#w3a-modal .w3a-modal__loader {\n  background: var(--bg2);\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n}\n\n#w3a-modal .w3a-modal__loader.w3a-modal__loader--hidden {\n  display: none;\n}\n\n#w3a-modal .w3a-modal__loader-content {\n  text-align: center;\n  margin-bottom: 80px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n#w3a-modal .w3a-modal__loader-info {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0 30px;\n}\n\n#w3a-modal .w3a-spinner-label {\n  margin-top: 10px;\n  font-size: 16px;\n  font-weight: 500;\n  color: #0364ff;\n}\n\n#w3a-modal .w3a-spinner-message {\n  margin-top: 10px;\n  font-size: 16px;\n}\n#w3a-modal .w3a-spinner-message:first-letter {\n  text-transform: capitalize;\n}\n#w3a-modal .w3a-spinner-message.w3a-spinner-message--error {\n  color: #fb4a61;\n}\n\n#w3a-modal button.w3a-logout {\n  background: none;\n  border: 0;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 30px;\n  cursor: pointer;\n  margin-top: 20px;\n  color: #0364ff;\n}\n\n#w3a-modal .w3a-spinner-power {\n  margin-top: auto;\n  font-size: 12px;\n  line-height: 1.2em;\n  color: #b7b8bd;\n}\n#w3a-modal .w3a-spinner-power > img {\n  height: 32px;\n  width: auto;\n  display: inline;\n}\n\n#w3a-modal .w3a-spinner {\n  display: inline-block;\n  position: relative;\n  background-color: #0364ff;\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  background: conic-gradient(transparent, #0364ff);\n  animation: rotate 1s linear infinite;\n}\n\n#w3a-modal .w3a-spinner__mask,\n#w3a-modal .w3a-spinner__head {\n  content: \"\";\n  position: absolute;\n  border-radius: 50%;\n}\n\n#w3a-modal .w3a-spinner__mask {\n  width: 50px;\n  height: 50px;\n  top: 5px;\n  left: 5px;\n  background-color: var(--bg2);\n}\n\n#w3a-modal .w3a-spinner__head {\n  height: 5px;\n  width: 5px;\n  background-color: #0364ff;\n  top: 0;\n  left: 26px;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotateZ(0);\n  }\n  to {\n    transform: rotateZ(360deg);\n  }\n}\n\n\n/* Header */\n#w3a-modal .w3a-header {\n  display: flex;\n  color: var(--text-color2);\n  align-items: center;\n}\n#w3a-modal .w3a-header__logo {\n  height: auto;\n  width: 40px;\n  margin-right: 16px;\n}\n#w3a-modal .w3a-header__title {\n  font-family: var(--text-header);\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 1.5em;\n}\n#w3a-modal p.w3a-header__subtitle {\n  font-size: 14px;\n  line-height: 1.5em;\n  font-weight: 400;\n}\n#w3a-modal button.w3a-header__button {\n  cursor: pointer;\n  position: absolute;\n  background: none;\n  padding: 0;\n  border: 0;\n  top: 20px;\n  right: 26px;\n}\n\n/* BODY */\n#w3a-modal .w3a-group {\n  margin-bottom: 24px;\n}\n#w3a-modal .w3a-group:last-child {\n  margin-bottom: 0;\n}\n\n#w3a-modal .w3a-group.w3a-group--hidden,\n#w3a-modal .w3a-group.w3a-group--social-hidden,\n#w3a-modal .w3a-group.w3a-group--email-hidden,\n#w3a-modal .w3a-group.w3a-group--ext-wallet-hidden {\n  display: none;\n}\n\n#w3a-modal .w3a-group:not(.w3a-group--hidden):not(:last-child),\n#w3a-modal .w3a-group:not(.w3a-group--social-hidden):not(:last-child),\n#w3a-modal .w3a-group:not(.w3a-group--email-hidden):not(:last-child),\n#w3a-modal .w3a-group:not(.w3a-group--ext-wallet-hidden):not(:last-child) {\n  border-bottom: 0.5px solid #5c6c7f;\n  padding-bottom: 24px;\n}\n\n#w3a-modal div.w3a-group__title {\n  font-family: var(--text-header);\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.5em;\n  margin-bottom: 8px;\n}\n\n/* Adapter List */\n#w3a-modal ul.w3a-adapter-list {\n  display: flex;\n  align-items: center;\n  padding: 0;\n  margin: 0;\n  gap: 16px;\n  overflow-y: hidden;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n  max-height: 500px;\n  transition: max-height 0.4s ease-in;\n}\n\n#w3a-modal ul.w3a-adapter-list.w3a-adapter-list--shrink {\n  max-height: 48px;\n  transition: max-height 0.4s ease-out;\n}\n\n#w3a-modal ul.w3a-adapter-list.w3a-adapter-list--hidden {\n  display: none;\n}\n\n#w3a-modal li.w3a-adapter-item {\n  list-style: none;\n  margin-bottom: 30px;\n}\n\n#w3a-modal .w3a-adapter-item--hide {\n  display: none;\n}\n\n#w3a-modal .w3a-adapter-item__label {\n  font-size: 12px;\n  color: #5c6c7f;\n  text-align: center;\n  margin: 8px 0 0 !important;\n  text-transform: capitalize;\n  position: absolute;\n  transform: translate(-6px);\n  width: 60px;\n}\n\n/* Buttons */\n#w3a-modal button.w3a-button {\n  background-color: #2f3136;\n  border: 1px solid #404145;\n  box-sizing: border-box;\n  box-shadow: 2px 2px 12px rgba(3, 100, 255, 0.05);\n  border-radius: 24px;\n  height: 48px;\n  width: 100%;\n  padding: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--text-body);\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  color: var(--text-color2);\n  cursor: pointer;\n}\n\n#w3a-modal button.w3a-button:hover {\n  background: #595857;\n}\n\n#w3a-modal button.w3a-button:active {\n  background: #6f717a;\n}\n\n#w3a-modal button.w3a-button:disabled {\n  background: #27282d;\n  color: #6f717a;\n}\n\n#w3a-modal button.w3a-button:focus-visible {\n  outline: 1px solid #daf0ff;\n  outline-offset: -1px;\n}\n\n#w3a-modal button.w3a-button--icon {\n  width: 48px;\n}\n\n#w3a-modal button.w3a-button--left {\n  justify-content: start;\n  padding: 8px 16px;\n}\n\n#w3a-modal button.w3a-button--left > img {\n  height: 30px;\n  width: auto;\n}\n\n#w3a-modal button.w3a-button--left > div.w3a-button__name {\n  max-width: 180px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-transform: capitalize;\n}\n\n#w3a-modal button.w3a-button--left > div.w3a-button__note {\n  margin-left: 8px;\n  color: #b7b8bd;\n  margin-left: auto;\n}\n\n#w3a-modal .w3a-button__image {\n  max-width: 100%;\n  max-height: 100%;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;\n}\n\n#w3a-modal button.w3a-button.w3a-button--rotate .w3a-button__image {\n  transform: rotate(180deg);\n}\n\n#w3a-modal .w3a-button--left .w3a-button__image {\n  margin-right: 12px;\n}\n\n#w3a-modal button.w3a-button-expand {\n  height: unset;\n  width: auto;\n  margin-left: auto;\n  font-size: 12px;\n  margin-top: 16px;\n  display: flex;\n  border: 8px;\n  color: var(--text-color2);\n  align-items: center;\n  cursor: pointer;\n  border-radius: 12px;\n  cursor: pointer;\n  padding: 0 10px 0 8px;\n  background: transparent;\n}\n\n#w3a-modal button.w3a-button-expand svg {\n  width: 12px;\n  height: auto;\n  margin-right: 4px;\n}\n\n#w3a-modal .w3a-external-toggle {\n  display: block;\n}\n\n#w3a-modal .w3a-external-toggle.w3a-external-toggle--hidden {\n  display: none;\n}\n\n#w3a-modal .w3a-external-container {\n  display: block;\n  margin-bottom: 34px;\n}\n\n#w3a-modal .w3a-external-container.w3a-external-container--hidden {\n  display: none;\n}\n\n#w3a-modal .w3a-external-group {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n\n#w3a-modal .w3a-external-group__left {\n  flex-grow: 1;\n}\n\n#w3a-modal button.w3a-external-back {\n  background: none;\n  border: 0;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 30px;\n  cursor: pointer;\n  color: var(--text-color1);\n}\n\n#w3a-modal .w3a-external-back:focus-visible {\n  outline: 1px solid #daf0ff;\n}\n\n#w3a-modal .w3a-external-back .w3a-group__title {\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n\n#w3a-modal .w3a-external-loader {\n  display: flex;\n  justify-content: center;\n}\n\n#w3a-modal .w3a-wallet-connect {\n  display: block;\n  text-align: center;\n  margin-bottom: 16px;\n}\n\n#w3a-modal .w3a-wallet-connect.w3a-wallet-connect--hidden {\n  display: none;\n}\n\n#w3a-modal .w3a-wallet-connect__container {\n  background: #ffffff;\n  border-radius: 10px;\n  color: var(--text-color1);\n  font-size: 10px;\n  width: fit-content;\n  margin: auto;\n  min-width: 250px;\n  padding: 16px 12px;\n}\n\n#w3a-modal .w3a-wallet-connect__container-desktop,\n#w3a-modal .w3a-wallet-connect__container-android {\n  margin: auto;\n}\n\n#w3a-modal .w3a-wallet-connect__container-btn-group {\n  display: flex;\n  gap: 18px;\n}\n\n#w3a-modal .w3a-wallet-connect__container-ios {\n  display: flex;\n  grid-gap: 30px 20px;\n  padding: 0 0 28px;\n  box-sizing: border-box;\n  flex-wrap: wrap;\n}\n\n#w3a-modal .w3a-wallet-connect-qr {\n  margin: 16px 16px;\n  padding: inherit;\n}\n\n#w3a-modal .w3a-wallet-connect__container-android a {\n  text-decoration: none;\n}\n\n#w3a-modal .w3a-wallet-connect__container-android .w3a-button {\n  background-color: rgb(64, 153, 255) !important;\n  color: #ffffff !important;\n  height: auto;\n  font-size: 14px;\n  padding: 8px 16px;\n  width: auto;\n  margin: auto;\n}\n\n#w3a-modal .w3a-wallet-connect__logo > img {\n  text-align: center;\n  width: 115px;\n  margin-bottom: 16px;\n}\n\n/* Text Field */\n#w3a-modal .w3a-text-field {\n  background: #393938;\n  border: 1px solid #27282d;\n  box-sizing: border-box;\n  box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.4);\n  border-radius: 24px;\n  padding: 0 28px;\n  height: 48px;\n  width: 100%;\n  font-family: var(--text-body);\n  font-size: 16px;\n  color: var(--text-color2);\n  margin-bottom: 16px;\n}\n\n#w3a-modal .w3a-text-field:active {\n  background: #0f1222;\n}\n\n#w3a-modal .w3a-text-field:focus-visible {\n  outline: 1px solid #daf0ff;\n  outline-offset: -1px;\n}\n\n/* Footer Components */\n#w3a-modal .w3a-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 10px;\n  line-height: 150%;\n  color: var(--text-color2);\n}\n\n#w3a-modal .w3a-footer__links {\n  padding: 0;\n  margin: 0;\n}\n\n#w3a-modal .w3a-footer__links a {\n  color: var(--text-color1);\n  text-decoration: none;\n}\n\n#w3a-modal .w3a-footer__links a:focus-visible {\n  outline: 1px solid #daf0ff;\n}\n\n#w3a-modal .w3a-footer__links span {\n  margin: 0 2px;\n}\n\n#w3a-modal .w3a-footer__secured {\n  text-align: right;\n  color: #b7b8bd;\n}\n#w3a-modal .w3a-footer__secured > img {\n  height: 14px;\n  width: auto;\n}\n\n/* Loader Bridge */\n#w3a-modal .w3a-modal__loader-bridge {\n  display: flex;\n  margin-bottom: 14px;\n}\n\n#w3a-modal .w3a-modal__loader-bridge-message span {\n  text-transform: capitalize;\n}\n\n#w3a-modal .w3a-modal__loader-app-logo {\n  display: flex;\n  padding: 8px;\n}\n\n#w3a-modal .w3a-modal__loader-app-logo img {\n  width: 64px;\n  height: auto;\n}\n\n#w3a-modal .w3a-modal__loader-adapter img {\n  width: 84px;\n  height: auto;\n}\n\n#w3a-modal .w3a-modal__connector {\n  display: flex;\n  align-items: center;\n}\n\n.w3a-modal__connector-beat {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.w3a-modal__connector-beat div {\n  position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #808080;\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n\n.w3a-modal__connector-beat div:nth-child(1) {\n  left: 8px;\n  animation: beat1 2.4s infinite;\n}\n\n.w3a-modal__connector-beat div:nth-child(2) {\n  left: 8px;\n  animation: beat2 2.4s infinite;\n}\n\n.w3a-modal__connector-beat div:nth-child(3) {\n  left: 8px;\n  animation: beat3 2.4s infinite;\n}\n\n.w3a-modal__connector-beat div:nth-child(4) {\n  left: 32px;\n  animation: beat4 2.4s infinite;\n}\n\n.w3a-modal__connector-beat div:nth-child(5) {\n  left: 56px;\n  animation: beat5 2.4s infinite;\n}\n\n@keyframes beat1 {\n  0% {\n    transform: scale(0);\n  }\n\n  25% {\n    transform: scale(0);\n  }\n\n  50% {\n    transform: scale(1);\n  }\n\n  75% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(0);\n  }\n}\n\n@keyframes beat2 {\n  0% {\n    transform: scale(0);\n  }\n\n  25% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: translate(24px, 0);\n  }\n\n  75% {\n    transform: translate(0, 0);\n  }\n\n  100% {\n    transform: translate(0, 0) scale(0);\n  }\n}\n\n@keyframes beat3 {\n  0% {\n    transform: translate(0, 0);\n  }\n\n  25% {\n    transform: translate(24px, 0);\n  }\n\n  50% {\n    transform: translate(48px, 0);\n  }\n\n  75% {\n    transform: translate(24px, 0);\n  }\n\n  100% {\n    transform: translate(0, 0);\n  }\n}\n\n@keyframes beat4 {\n  0% {\n    transform: translate(0, 0);\n  }\n\n  25% {\n    transform: translate(24px, 0);\n  }\n\n  50% {\n    transform: translate(24px, 0) scale(0);\n  }\n\n  75% {\n    transform: translate(24px, 0) scale(1);\n  }\n\n  100% {\n    transform: translate(0, 0);\n  }\n}\n\n@keyframes beat5 {\n  0% {\n    transform: scale(1);\n  }\n\n  25% {\n    transform: scale(0);\n  }\n\n  50% {\n    transform: scale(0);\n  }\n\n  75% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\n/* LIGHT MODE */\n#w3a-modal.w3a-modal--light {\n  --bg1: #ffffff;\n  --bg2: #f9f9fb;\n  --text-color1: #a2a5b5;\n  --text-color2: #5c6c7f;\n}\n\n#w3a-modal .w3a-group:not(.w3a-group--hidden):not(:last-child),\n#w3a-modal .w3a-group:not(.w3a-group--social-hidden):not(:last-child),\n#w3a-modal .w3a-group:not(.w3a-group--email-hidden):not(:last-child),\n#w3a-modal .w3a-group:not(.w3a-group--ext-wallet-hidden):not(:last-child) {\n  border-bottom: 0.5px solid #b7b8bd;\n  padding-bottom: 24px;\n}\n\n#w3a-modal.w3a-modal--light button.w3a-button {\n  background-color: #ffffff;\n  border: 1px solid #f3f3f4;\n  box-shadow: none;\n  color: #595857;\n}\n\n#w3a-modal.w3a-modal--light button.w3a-button:disabled {\n  color: #b7b8bd;\n}\n\n#w3a-modal.w3a-modal--light button.w3a-button:focus-visible {\n  outline: 1px solid #0f1222;\n}\n\n#w3a-modal.w3a-modal--light .w3a-text-field {\n  background: #ffffff;\n  border: 1px solid #ffffff;\n  box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.1);\n  color: #b7b8bd;\n}\n\n#w3a-modal.w3a-modal--light .w3a-text-field:active {\n  color: #0f1222;\n  outline: 1px solid #0f1222;\n}\n\n#w3a-modal.w3a-modal--light .w3a-text-field:focus-visible {\n  color: #0f1222;\n  outline: 1px solid #0f1222;\n}\n\n#w3a-modal.w3a-modal--light .w3a-footer__links a:focus-visible {\n  outline: 1px solid #0f1222;\n}\n\n#w3a-modal.w3a-modal--light .w3a-external-back:focus-visible {\n  outline: 1px solid #0f1222;\n}\n";
styleInject(css_248z$1);

var ThemedContext = /*#__PURE__*/createContext({
  isDark: true // default value
});

var CircleArrowLeft = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20id%3D%2224%20%2F%20arrows%20%2F%20circle-arrow-left%22%3E%3Cpath%20id%3D%22icon%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12%2023C5.92487%2023%201%2018.0751%201%2012C1%205.92487%205.92487%201%2012%201C18.0751%201%2023%205.92487%2023%2012C23%2018.0751%2018.0751%2023%2012%2023ZM12%2021C16.9706%2021%2021%2016.9706%2021%2012C21%207.02944%2016.9706%203%2012%203C7.02944%203%203%207.02944%203%2012C3%2016.9706%207.02944%2021%2012%2021ZM17%2011H10.4142L12.7071%208.70711L11.2929%207.29289L6.58579%2012L11.2929%2016.7071L12.7071%2015.2929L10.4142%2013H17V11Z%22%20fill%3D%22%23D3D3D4%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var Close = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M13.4142%2012L19.7782%2018.364L18.364%2019.7782L12%2013.4143L5.63604%2019.7782L4.22183%2018.364L10.5858%2012L4.22183%205.63608L5.63604%204.22187L12%2010.5858L18.364%204.22187L19.7782%205.63608L13.4142%2012Z%22%20fill%3D%22%23DFDFDF%22%2F%3E%3C%2Fsvg%3E";

var Expand = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12.0991%2015.6785C11.694%2016.1072%2011.0119%2016.1072%2010.6068%2015.6785L4.98828%209.73136C4.36988%209.0768%204.83393%208%205.73441%208L16.9715%208C17.872%208%2018.336%209.0768%2017.7176%209.73136L12.0991%2015.6785Z%22%20fill%3D%22%23B7B8BD%22%2F%3E%3C%2Fsvg%3E";

var ExpandLight = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12.0991%2015.6785C11.694%2016.1072%2011.0119%2016.1072%2010.6068%2015.6785L4.98828%209.73136C4.36988%209.0768%204.83393%208%205.73441%208L16.9715%208C17.872%208%2018.336%209.0768%2017.7176%209.73136L12.0991%2015.6785Z%22%20fill%3D%22%23FFFFFF%22%2F%3E%3C%2Fsvg%3E";

var icons = {
  "arrow-left": {
    image: CircleArrowLeft
  },
  close: {
    image: Close
  },
  "expand-light": {
    image: ExpandLight
  },
  expand: {
    image: Expand
  }
};
function Icon(props) {
  var iconName = props.iconName,
    _props$height = props.height,
    height = _props$height === void 0 ? "auto" : _props$height,
    _props$width = props.width,
    width = _props$width === void 0 ? "auto" : _props$width;
  return icons[iconName] ? jsx("img", {
    height: height,
    width: width,
    src: icons[iconName].image,
    alt: iconName
  }) : null;
}

function Image$1(props) {
  var imageId = props.imageId,
    _props$height = props.height,
    height = _props$height === void 0 ? "auto" : _props$height,
    _props$width = props.width,
    width = _props$width === void 0 ? "auto" : _props$width;
  return jsx("img", {
    src: "https://images.web3auth.io/".concat(imageId, ".svg"),
    height: height,
    width: width,
    alt: imageId
  });
}

var DEFAULT_LOGO_URL$2 = "https://images.web3auth.io/web3auth-logo.svg";
var closeIcon$1 = jsx(Icon, {
  iconName: "close"
});
function DetailedLoader(props) {
  var adapter = props.adapter,
    _props$appLogo = props.appLogo,
    appLogo = _props$appLogo === void 0 ? DEFAULT_LOGO_URL$2 : _props$appLogo,
    message = props.message,
    modalStatus = props.modalStatus,
    onClose = props.onClose;
  var web3authIcon = jsx(Image$1, {
    imageId: "web3auth"
  });
  var providerIcon = jsx(Image$1, {
    imageId: "login-".concat(adapter)
  });
  useEffect(function () {
    log.debug("adapter loader re-rendering");
    if (modalStatus === MODAL_STATUS.CONNECTED) {
      setTimeout(function () {
        onClose();
      }, 3000);
    }
  }, [modalStatus, onClose]);
  return modalStatus !== MODAL_STATUS.INITIALIZED ? jsxs("div", {
    className: "w3ajs-modal-loader w3a-modal__loader",
    children: [jsxs("div", {
      className: "w3a-modal__loader-content",
      children: [jsxs("div", {
        className: "w3a-modal__loader-info",
        children: [modalStatus === MODAL_STATUS.CONNECTING && jsxs(Fragment, {
          children: [jsxs("div", {
            className: "w3a-modal__loader-bridge",
            children: [jsx("div", {
              className: "w3a-modal__loader-app-logo",
              children: jsx("img", {
                src: appLogo,
                alt: ""
              })
            }), jsx("div", {
              className: "w3a-modal__connector",
              children: jsxs("div", {
                className: "w3a-modal__connector-beat",
                children: [jsx("div", {}), jsx("div", {}), jsx("div", {}), jsx("div", {}), jsx("div", {})]
              })
            }), jsx("div", {
              className: "w3a-modal__loader-adapter",
              children: providerIcon
            })]
          }), jsx("div", {
            children: jsxs("div", {
              className: "w3a-modal__loader-bridge-message",
              children: ["Verify on your ", jsx("span", {
                children: adapter
              }), " account to continue"]
            })
          })]
        }), modalStatus === ADAPTER_STATUS.CONNECTED && jsx("div", {
          className: "w3ajs-modal-loader__message w3a-spinner-message",
          children: message
        }), modalStatus === ADAPTER_STATUS.ERRORED && jsx("div", {
          className: "w3ajs-modal-loader__message w3a-spinner-message w3a-spinner-message--error",
          children: message
        })]
      }), jsxs("div", {
        className: "w3a-spinner-power",
        children: [jsx("div", {
          children: "Self-custodial login by"
        }), web3authIcon]
      })]
    }), (modalStatus === ADAPTER_STATUS.CONNECTED || modalStatus === ADAPTER_STATUS.ERRORED) && jsx("button", {
      type: "button",
      className: "w3a-header__button w3ajs-loader-close-btn",
      onClick: onClose,
      children: closeIcon$1
    })]
  }) : null;
}

var closeIcon = jsx(Icon, {
  iconName: "close"
});
function Loader(props) {
  var message = props.message,
    modalStatus = props.modalStatus,
    label = props.label,
    onClose = props.onClose,
    _props$canEmit = props.canEmit,
    canEmit = _props$canEmit === void 0 ? true : _props$canEmit;
  var web3authIcon = jsx(Image$1, {
    imageId: "web3auth"
  });
  useEffect(function () {
    log.debug("loader re-rendering");
    if (modalStatus === MODAL_STATUS.CONNECTED && canEmit) {
      setTimeout(function () {
        onClose();
      }, 3000);
    }
  }, [canEmit, modalStatus, onClose]);
  return modalStatus !== MODAL_STATUS.INITIALIZED ? jsxs("div", {
    className: "w3ajs-modal-loader w3a-modal__loader",
    children: [jsxs("div", {
      className: "w3a-modal__loader-content",
      children: [jsxs("div", {
        className: "w3a-modal__loader-info",
        children: [modalStatus === MODAL_STATUS.CONNECTING && jsxs("div", {
          className: "w3ajs-modal-loader__spinner w3a-spinner",
          children: [jsx("div", {
            className: "w3a-spinner__head"
          }), jsx("div", {
            className: "w3a-spinner__mask"
          })]
        }), jsx("div", {
          className: "w3ajs-modal-loader__label w3a-spinner-label",
          children: label
        }), modalStatus === ADAPTER_STATUS.CONNECTED && jsx("div", {
          className: "w3ajs-modal-loader__message w3a-spinner-message",
          children: message
        }), modalStatus === ADAPTER_STATUS.ERRORED && jsx("div", {
          className: "w3ajs-modal-loader__message w3a-spinner-message w3a-spinner-message--error",
          children: message
        })]
      }), jsxs("div", {
        className: "w3a-spinner-power",
        children: [jsx("div", {
          children: "Self-custodial login by"
        }), web3authIcon]
      })]
    }), (modalStatus === ADAPTER_STATUS.CONNECTED || modalStatus === ADAPTER_STATUS.ERRORED) && jsx("button", {
      type: "button",
      className: "w3a-header__button w3ajs-loader-close-btn",
      onClick: onClose,
      children: closeIcon
    })]
  }) : null;
}

var walletConnectIcon = jsx(Image$1, {
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
    href: os === bowser.OS_MAP.iOS ? formatIOSMobile({
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
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    links = _useState2[0],
    setLinks = _useState2[1];
  var deviceDetails = useMemo(function () {
    var browser = bowser.getParser(window.navigator.userAgent);
    return {
      platform: browser.getPlatformType(),
      os: browser.getOSName()
    };
  }, []);
  useEffect(function () {
    if (deviceDetails.platform === bowser.PLATFORMS_MAP.mobile) {
      var mobileLinks = formatMobileRegistry(wcAdapters, walletConnectUri, deviceDetails.os, deviceDetails.platform);
      setLinks(mobileLinks);
    }
  }, [wcAdapters, deviceDetails.os, deviceDetails.platform, walletConnectUri]);
  // TODO: show only wcAdapters of current chain
  return jsx("div", {
    className: "w3ajs-wallet-connect w3a-wallet-connect",
    children: jsxs("div", {
      className: "w3ajs-wallet-connect__container w3a-wallet-connect__container".concat(deviceDetails.os === bowser.OS_MAP.Android ? " w3a-wallet-connect__container--android" : ""),
      children: [jsx("div", {
        className: "w3a-wallet-connect__logo",
        children: walletConnectIcon
      }), deviceDetails.platform === bowser.PLATFORMS_MAP.desktop ? jsxs("div", {
        className: "w3a-wallet-connect__container-desktop",
        children: [jsx("div", {
          children: "Scan QR code with a WalletConnect-compatible wallet"
        }), jsx("div", {
          className: "w3ajs-wallet-connect-qr w3a-wallet-connect-qr",
          children: jsx(QRCode, {
            size: 200,
            value: walletConnectUri
          })
        })]
      }) : jsx("div", {
        className: "w3a-wallet-connect__container-btn-group",
        children: links.map(function (link) {
          return deviceDetails.os === bowser.OS_MAP.iOS ? jsx("div", {
            className: "w3a-wallet-connect__container-ios",
            children: jsxs("a", {
              href: link.href,
              rel: "noopener noreferrer",
              target: "_blank",
              children: [jsx("button", {
                type: "button",
                className: "w3a-button w3a-button--icon",
                children: jsx("img", {
                  src: link.logo,
                  height: "auto",
                  width: "auto",
                  alt: "login-".concat(link.name)
                })
              }), jsx("p", {
                className: "w3a-adapter-item__label",
                children: link.name
              })]
            }, link.name)
          }) : jsx("div", {
            className: "w3a-wallet-connect__container-android",
            children: jsx("a", {
              href: link.href,
              rel: "noopener noreferrer",
              target: "_blank",
              children: jsx("button", {
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
var WalletConnect$1 = /*#__PURE__*/memo(WalletConnect);

function ExternalWallet(props) {
  var hideExternalWallets = props.hideExternalWallets,
    handleExternalWalletClick = props.handleExternalWalletClick,
    _props$config = props.config,
    config = _props$config === void 0 ? {} : _props$config,
    walletConnectUri = props.walletConnectUri,
    showBackButton = props.showBackButton,
    modalStatus = props.modalStatus,
    wcAdapters = props.wcAdapters;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoaded = _useState2[0],
    setIsLoaded = _useState2[1];
  useEffect(function () {
    var _config$WALLET_ADAPTE;
    log.debug("loaded external wallets", config, walletConnectUri);
    var wcAvailable = (((_config$WALLET_ADAPTE = config[WALLET_ADAPTERS.WALLET_CONNECT_V1]) === null || _config$WALLET_ADAPTE === void 0 ? void 0 : _config$WALLET_ADAPTE.showOnModal) || false) !== false;
    if (wcAvailable && !walletConnectUri) {
      handleExternalWalletClick({
        adapter: WALLET_ADAPTERS.WALLET_CONNECT_V1
      });
    } else if (Object.keys(config).length > 0) {
      setIsLoaded(true);
    }
  }, [config, handleExternalWalletClick, walletConnectUri]);
  return jsx("div", {
    className: "w3ajs-external-wallet w3a-group",
    children: jsxs("div", {
      className: "w3a-external-container w3ajs-external-container",
      children: [showBackButton && jsxs("button", {
        type: "button",
        className: "w3a-external-back w3ajs-external-back",
        onClick: hideExternalWallets,
        children: [jsx(Icon, {
          iconName: "arrow-left"
        }), jsx("div", {
          className: "w3a-group__title",
          children: "Back"
        })]
      }), !isLoaded && jsx(Loader, {
        modalStatus: MODAL_STATUS.CONNECTING,
        canEmit: false
      }), Object.keys(config).map(function (adapter) {
        if (adapter === WALLET_ADAPTERS.WALLET_CONNECT_V1 || adapter === WALLET_ADAPTERS.WALLET_CONNECT_V2) {
          return jsx(WalletConnect$1, {
            walletConnectUri: walletConnectUri,
            wcAdapters: wcAdapters
          }, adapter);
        }
        return null;
      }), modalStatus === MODAL_STATUS.INITIALIZED && jsx("ul", {
        className: "w3a-adapter-list w3ajs-wallet-adapters",
        children: Object.keys(config).map(function (adapter) {
          var _config$adapter;
          if (adapter === WALLET_ADAPTERS.WALLET_CONNECT_V1 || adapter === WALLET_ADAPTERS.WALLET_CONNECT_V2) {
            return null;
          }
          // if (allKeys.length - 1 === index && isOthersLoading) setOthersLoading(false);
          var providerIcon = jsx(Image$1, {
            imageId: "login-".concat(adapter)
          });
          return jsxs("li", {
            className: "w3a-adapter-item",
            children: [jsx("button", {
              type: "button",
              onClick: function onClick() {
                return handleExternalWalletClick({
                  adapter: adapter
                });
              },
              className: "w3a-button w3a-button--icon",
              children: providerIcon
            }), jsx("p", {
              className: "w3a-adapter-item__label",
              children: ((_config$adapter = config[adapter]) === null || _config$adapter === void 0 ? void 0 : _config$adapter.label) || adapter
            })]
          }, adapter);
        })
      })]
    })
  });
}

function Footer(props) {
  var version = props.version;
  var web3authIcon = jsx(Image$1, {
    imageId: "web3auth",
    height: "14px",
    width: "auto"
  });
  return jsx("div", {
    className: "w3a-modal__footer",
    children: jsxs("div", {
      className: "w3a-footer",
      children: [jsxs("div", {
        children: [jsxs("div", {
          className: "w3a-footer__links",
          children: [jsx("a", {
            href: "https://docs.web3auth.io/legal/terms-and-conditions",
            children: "Terms of use"
          }), jsx("span", {
            children: "|"
          }), jsx("a", {
            href: "https://docs.web3auth.io/legal/privacy-policy",
            children: "Privacy policy"
          })]
        }), jsx("p", {
          children: version
        })]
      }), jsxs("div", {
        className: "w3a-footer__secured",
        children: [jsx("div", {
          children: "Self-custodial login by"
        }), web3authIcon]
      })]
    })
  });
}
var Footer$1 = /*#__PURE__*/memo(Footer);

var DEFAULT_LOGO_URL$1 = "https://images.web3auth.io/web3auth-logo.svg";
function Header(props) {
  var _useContext = useContext(ThemedContext),
    isDark = _useContext.isDark;
  var _props$appLogo = props.appLogo,
    appLogo = _props$appLogo === void 0 ? DEFAULT_LOGO_URL$1 : _props$appLogo,
    onClose = props.onClose;
  var web3authIcon = jsx(Image$1, {
    imageId: "web3auth".concat(isDark ? "-light" : "")
  });
  return jsxs("div", {
    className: "w3a-modal__header",
    children: [jsxs("div", {
      className: "w3a-header",
      children: [appLogo ? jsx("img", {
        className: "w3a-header__logo",
        src: appLogo,
        alt: ""
      }) : web3authIcon, jsxs("div", {
        children: [jsx("div", {
          className: "w3a-header__title",
          children: "Sign in"
        }), jsx("p", {
          className: "w3a-header__subtitle",
          children: "Select one of the following to continue"
        })]
      })]
    }), jsx("button", {
      type: "button",
      onClick: onClose,
      className: "w3a-header__button w3ajs-close-btn",
      children: jsx(Icon, {
        iconName: "close"
      })
    })]
  });
}
var memoizedHeader = /*#__PURE__*/memo(Header, function (prevProps, nextProps) {
  if (prevProps.appLogo !== nextProps.appLogo) {
    return true;
  }
  return false;
});
memoizedHeader.displayName = "Header";

function SocialLoginEmail(props) {
  var handleSocialLoginClick = props.handleSocialLoginClick,
    adapter = props.adapter,
    MetamaskLogin = props.MetamaskLogin;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
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
  return jsxs("div", {
    className: "w3ajs-email-passwordless w3a-group w3a-group--email",
    children: [jsx("div", {
      className: "w3a-group__title",
      children: "EMAIL"
    }), jsxs("form", {
      className: "w3ajs-email-passwordless-form",
      onSubmit: function onSubmit(e) {
        return handleEmailSubmit(e);
      },
      children: [jsx("input", {
        className: "w3a-text-field",
        type: "email",
        name: "email",
        required: true,
        placeholder: "Email",
        onChange: function onChange(e) {
          return handleEmailChange(e);
        }
      }), jsx("button", {
        disabled: !isValidEmail,
        className: "w3a-button",
        type: "submit",
        children: "Continue with Email"
      })]
    }), jsx(MetamaskLogin, {})]
  });
}

var hasLightIcons = ["apple", "github"];
function SocialLogins(props) {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    canShowMore = _useState2[0],
    setCanShowMore = _useState2[1];
  var _props$socialLoginsCo = props.socialLoginsConfig,
    socialLoginsConfig = _props$socialLoginsCo === void 0 ? {
      loginMethods: {},
      loginMethodsOrder: [],
      adapter: ""
    } : _props$socialLoginsCo,
    handleSocialLoginClick = props.handleSocialLoginClick;
  var _useContext = useContext(ThemedContext),
    isDark = _useContext.isDark;
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isExpanded = _useState4[0],
    setIsExpanded = _useState4[1];
  // Too small a function to use `useCallback`
  var expandClickHandler = function expandClickHandler() {
    setIsExpanded(!isExpanded);
  };
  useEffect(function () {
    var maxOptions = Object.keys(socialLoginsConfig.loginMethods).filter(function (loginMethodKey) {
      return socialLoginsConfig.loginMethods[loginMethodKey].showOnModal;
    });
    setCanShowMore(maxOptions.length > 5);
  }, [socialLoginsConfig.loginMethods]);
  var adapterListClass = classNames("w3a-adapter-list", "w3ajs-socials-adapters", !isExpanded ? " w3a-adapter-list--shrink" : "");
  var adapterButtonClass = classNames("w3a-button-expand", "w3ajs-button-expand", isExpanded ? "w3a-button--rotate" : "");
  var adapterExpandText = isExpanded ? "View less options" : "View more options";
  return jsxs("div", {
    className: "w3ajs-social-logins w3a-group",
    children: [jsx("div", {
      className: "w3a-group__title",
      children: "CONTINUE WITH"
    }), jsx("ul", {
      className: adapterListClass,
      children: Object.keys(socialLoginsConfig.loginMethods).map(function (method) {
        var providerIcon = jsx(Image$1, {
          imageId: "login-".concat(method).concat(isDark && hasLightIcons.includes(method) ? "-light" : "")
        });
        if (socialLoginsConfig.loginMethods[method].showOnModal === false || method === "webauthn" || method === "jwt" || method === "email_passwordless") {
          return null;
        }
        var orderIndex = socialLoginsConfig.loginMethodsOrder.indexOf(method) + 1;
        var order = orderIndex || Object.keys(socialLoginsConfig.loginMethods).length + 1;
        return jsx("li", {
          className: "w3a-adapter-item",
          style: {
            order: order
          },
          children: jsx("button", {
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
    }), canShowMore && jsxs("button", {
      type: "button",
      className: adapterButtonClass,
      style: {
        display: "flex"
      },
      onClick: expandClickHandler,
      children: [jsx(Icon, {
        iconName: "expand".concat(isDark ? "-light" : "")
      }), jsx("span", {
        className: "w3ajs-button-expand-text",
        children: adapterExpandText
      })]
    })]
  });
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
log.enableAll();
function Modal(props) {
  var _modalState$socialLog3, _modalState$socialLog6, _modalState$socialLog7;
  var _useContext = useContext(ThemedContext),
    isDark = _useContext.isDark;
  var _useState = useState(["w3a-modal__inner"]),
    _useState2 = _slicedToArray(_useState, 2),
    modalTransitionClasses = _useState2[0],
    setModalTransitionClasses = _useState2[1];
  var _useState3 = useState({
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
    _useState4 = _slicedToArray(_useState3, 2),
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
  var DETAILED_ADAPTERS = [WALLET_ADAPTERS.PHANTOM, WALLET_ADAPTERS.METAMASK];
  useEffect(function () {
    stateListener.emit("MOUNTED");
    stateListener.on("STATE_UPDATED", function (newModalState) {
      log.debug("state updated", newModalState);
      setModalState(function (prevState) {
        var mergedState = cloneDeep(deepmerge(prevState, newModalState));
        return mergedState;
      });
    });
  }, [stateListener]);
  useEffect(function () {
    var timeOutId;
    if (modalState.modalVisibility) {
      setModalState(function (prevState) {
        return _objectSpread$1(_objectSpread$1({}, prevState), {}, {
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
          return _objectSpread$1(_objectSpread$1({}, prevState), {}, {
            modalVisibilityDelayed: modalState.modalVisibility
          });
        });
      }, 250);
    }
    return function () {
      clearTimeout(timeOutId);
    };
  }, [modalState.modalVisibility]);
  var onCloseLoader = useCallback(function () {
    if (modalState.status === MODAL_STATUS.CONNECTED) {
      closeModal();
    }
    if (modalState.status === MODAL_STATUS.ERRORED) {
      setModalState(function (prevState) {
        return _objectSpread$1(_objectSpread$1({}, prevState), {}, {
          modalVisibility: true,
          status: MODAL_STATUS.INITIALIZED
        });
      });
    }
  }, [closeModal, modalState.status]);
  var preHandleExternalWalletClick = function preHandleExternalWalletClick(params) {
    var adapter = params.adapter;
    if (DETAILED_ADAPTERS.includes(adapter)) setModalState(function (prevState) {
      return _objectSpread$1(_objectSpread$1({}, prevState), {}, {
        detailedLoaderAdapter: adapter
      });
    });else if (adapter !== WALLET_ADAPTERS.WALLET_CONNECT_V1) setModalState(function (prevState) {
      return _objectSpread$1(_objectSpread$1({}, prevState), {}, {
        detailedLoaderAdapter: ""
      });
    });
    handleExternalWalletClick(params);
  };
  var preHandleSocialWalletClick = function preHandleSocialWalletClick(params) {
    setModalState(function (prevState) {
      return _objectSpread$1(_objectSpread$1({}, prevState), {}, {
        detailedLoaderAdapter: ""
      });
    });
    handleSocialLoginClick(params);
  };
  var externalWalletButton = jsx("div", {
    className: "w3ajs-external-wallet w3a-group",
    children: jsxs("div", {
      className: "w3a-external-toggle w3ajs-external-toggle",
      children: [jsx("div", {
        className: "w3a-group__title",
        children: "EXTERNAL WALLET"
      }), jsx("button", {
        type: "button",
        className: "w3a-button w3ajs-external-toggle__button",
        onClick: function onClick() {
          handleShowExternalWallets(modalState.externalWalletsInitialized);
          setModalState(function (prevState) {
            return _objectSpread$1(_objectSpread$1({}, prevState), {}, {
              externalWalletsVisibility: true
            });
          });
        },
        children: "Connect with Wallet"
      })]
    })
  });
  var areSocialLoginsVisible = useMemo(function () {
    var _modalState$socialLog, _modalState$socialLog2;
    if (modalState.showExternalWalletsOnly) return false;
    if (Object.keys(((_modalState$socialLog = modalState.socialLoginsConfig) === null || _modalState$socialLog === void 0 ? void 0 : _modalState$socialLog.loginMethods) || {}).length === 0) return false;
    var isAnySocialLoginVisible = Object.entries(((_modalState$socialLog2 = modalState.socialLoginsConfig) === null || _modalState$socialLog2 === void 0 ? void 0 : _modalState$socialLog2.loginMethods) || {}).some(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];
      return k !== LOGIN_PROVIDER.EMAIL_PASSWORDLESS && v.showOnModal !== false;
    });
    if (isAnySocialLoginVisible) return true;
    return false;
  }, [modalState.showExternalWalletsOnly, (_modalState$socialLog3 = modalState.socialLoginsConfig) === null || _modalState$socialLog3 === void 0 ? void 0 : _modalState$socialLog3.loginMethods]);
  log.info("modal state", modalState, areSocialLoginsVisible);
  var isEmailPassworedlessLoginVisible = useMemo(function () {
    var _modalState$socialLog4, _modalState$socialLog5;
    return (_modalState$socialLog4 = modalState.socialLoginsConfig) === null || _modalState$socialLog4 === void 0 ? void 0 : (_modalState$socialLog5 = _modalState$socialLog4.loginMethods[LOGIN_PROVIDER.EMAIL_PASSWORDLESS]) === null || _modalState$socialLog5 === void 0 ? void 0 : _modalState$socialLog5.showOnModal;
  }, [(_modalState$socialLog6 = modalState.socialLoginsConfig) === null || _modalState$socialLog6 === void 0 ? void 0 : _modalState$socialLog6.loginMethods]);
  var modalClassName = "w3a-modal ".concat(isDark ? "" : " w3a-modal--light");
  return modalState.modalVisibilityDelayed && jsx("div", {
    id: "w3a-modal",
    className: modalClassName,
    style: {
      display: "flex"
    },
    children: jsxs("div", {
      className: modalTransitionClasses.join(" "),
      children: [jsx(memoizedHeader, {
        onClose: closeModal,
        appLogo: appLogo
      }), modalState.status !== MODAL_STATUS.INITIALIZED ? jsx("div", {
        className: "w3a-modal__content w3ajs-content",
        children: modalState.detailedLoaderAdapter ? jsx(DetailedLoader, {
          onClose: onCloseLoader,
          appLogo: appLogo,
          modalStatus: modalState.status,
          message: modalState.postLoadingMessage,
          adapter: modalState.detailedLoaderAdapter
        }) : jsx(Loader, {
          onClose: onCloseLoader,
          modalStatus: modalState.status,
          message: modalState.postLoadingMessage
        })
      }) : jsx("div", {
        className: "w3a-modal__content w3ajs-content",
        children: (areSocialLoginsVisible || isEmailPassworedlessLoginVisible) && !modalState.externalWalletsVisibility ? jsxs(Fragment, {
          children: [areSocialLoginsVisible ? jsx(SocialLogins, {
            handleSocialLoginClick: function handleSocialLoginClick(params) {
              return preHandleSocialWalletClick(params);
            },
            socialLoginsConfig: modalState.socialLoginsConfig
          }) : null, isEmailPassworedlessLoginVisible && jsx(SocialLoginEmail, {
            adapter: (_modalState$socialLog7 = modalState.socialLoginsConfig) === null || _modalState$socialLog7 === void 0 ? void 0 : _modalState$socialLog7.adapter,
            handleSocialLoginClick: function handleSocialLoginClick(params) {
              return preHandleSocialWalletClick(params);
            },
            MetamaskLogin: MetamaskLogin
          }), modalState.hasExternalWallets && externalWalletButton]
        }) : jsx(ExternalWallet, {
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
              return _objectSpread$1(_objectSpread$1({}, prevState), {}, {
                externalWalletsVisibility: false
              });
            });
          }
        })
      }), jsx(Footer$1, {
        version: version
      })]
    })
  });
}

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var DEFAULT_LOGO_URL = "https://images.web3auth.io/web3auth-logo.svg";
function createWrapper$1() {
  var wrapper = document.createElement("section");
  wrapper.setAttribute("id", "w3a-container");
  document.body.appendChild(wrapper);
  return wrapper;
}
var LoginModal = /*#__PURE__*/function (_SafeEventEmitter) {
  _inherits(LoginModal, _SafeEventEmitter);
  var _super = _createSuper$1(LoginModal);
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
    _classCallCheck(this, LoginModal);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "appLogo", void 0);
    _defineProperty(_assertThisInitialized(_this), "version", void 0);
    _defineProperty(_assertThisInitialized(_this), "isDark", void 0);
    _defineProperty(_assertThisInitialized(_this), "stateEmitter", void 0);
    _defineProperty(_assertThisInitialized(_this), "displayErrorsOnModal", true);
    _defineProperty(_assertThisInitialized(_this), "MetamaskLogin", void 0);
    _defineProperty(_assertThisInitialized(_this), "initModal", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var darkState;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              darkState = {
                isDark: _this.isDark
              };
              return _context.abrupt("return", new Promise(function (resolve) {
                _this.stateEmitter.once("MOUNTED", function () {
                  log.info("rendered");
                  _this.setState({
                    status: MODAL_STATUS.INITIALIZED
                  });
                  return resolve();
                });
                render(jsx(ThemedContext.Provider, {
                  value: darkState,
                  children: jsx(Modal, {
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
                }), createWrapper$1());
              }));
            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    _defineProperty(_assertThisInitialized(_this), "addSocialLogins", function (adapter, loginMethods, loginMethodsOrder) {
      _this.setState({
        socialLoginsConfig: {
          adapter: adapter,
          loginMethods: loginMethods,
          loginMethodsOrder: loginMethodsOrder
        }
      });
      log.info("addSocialLogins", adapter, loginMethods, loginMethodsOrder);
    });
    _defineProperty(_assertThisInitialized(_this), "addWalletLogins", function (externalWalletsConfig, options) {
      _this.setState({
        externalWalletsConfig: externalWalletsConfig,
        externalWalletsInitialized: true,
        showExternalWalletsOnly: !!(options !== null && options !== void 0 && options.showExternalWalletsOnly),
        externalWalletsVisibility: true
      });
    });
    _defineProperty(_assertThisInitialized(_this), "open", function () {
      _this.setState({
        modalVisibility: true
      });
      _this.emit(LOGIN_MODAL_EVENTS.MODAL_VISIBILITY, true);
    });
    _defineProperty(_assertThisInitialized(_this), "closeModal", function () {
      _this.setState({
        modalVisibility: false,
        externalWalletsVisibility: false
      });
      _this.emit(LOGIN_MODAL_EVENTS.MODAL_VISIBILITY, false);
    });
    _defineProperty(_assertThisInitialized(_this), "initExternalWalletContainer", function () {
      _this.setState({
        hasExternalWallets: true
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleShowExternalWallets", function (status) {
      _this.emit(LOGIN_MODAL_EVENTS.INIT_EXTERNAL_WALLETS, {
        externalWalletsInitialized: status
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleExternalWalletClick", function (params) {
      log.info("external wallet clicked", params);
      var adapter = params.adapter;
      _this.emit(LOGIN_MODAL_EVENTS.LOGIN, {
        adapter: adapter
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleSocialLoginClick", function (params) {
      log.info("social login clicked", params);
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
    _defineProperty(_assertThisInitialized(_this), "setState", function (newState) {
      _this.stateEmitter.emit("STATE_UPDATED", newState);
    });
    _defineProperty(_assertThisInitialized(_this), "updateWalletConnect", function (walletConnectUri, wcAdapters) {
      if (!walletConnectUri) return;
      _this.setState({
        walletConnectUri: walletConnectUri,
        wcAdapters: wcAdapters
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleAdapterData", function (adapterData) {
      if (adapterData.adapterName === WALLET_ADAPTERS.WALLET_CONNECT_V1) {
        var walletConnectData = adapterData.data;
        _this.updateWalletConnect(walletConnectData.uri, walletConnectData.extensionAdapters);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "subscribeCoreEvents", function (listener) {
      listener.on(ADAPTER_EVENTS.CONNECTING, function (data) {
        log.info("connecting with adapter", data);
        // don't show loader in case of wallet connect, because currently it listens for incoming for incoming
        // connections without any user interaction.
        if ((data === null || data === void 0 ? void 0 : data.adapter) !== WALLET_ADAPTERS.WALLET_CONNECT_V1 && (data === null || data === void 0 ? void 0 : data.adapter) !== WALLET_ADAPTERS.WALLET_CONNECT_V2) {
          // const provider = data?.loginProvider || "";
          _this.setState({
            status: MODAL_STATUS.CONNECTING
          });
        }
      });
      listener.on(ADAPTER_EVENTS.CONNECTED, function (data) {
        log.debug("connected with adapter", data);
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
      listener.on(ADAPTER_EVENTS.ERRORED, function (error) {
        log.error("error", error, error.message);
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
      listener.on(ADAPTER_EVENTS.DISCONNECTED, function () {
        _this.setState({
          status: MODAL_STATUS.INITIALIZED,
          externalWalletsVisibility: false
        });
        // this.toggleMessage("");
      });

      listener.on(ADAPTER_EVENTS.ADAPTER_DATA_UPDATED, function (adapterData) {
        _this.handleAdapterData(adapterData);
      });
    });
    _this.appLogo = appLogo || DEFAULT_LOGO_URL;
    _this.version = version;
    _this.isDark = theme === "dark";
    _this.stateEmitter = new SafeEventEmitter();
    _this.displayErrorsOnModal = displayErrorsOnModal;
    _this.subscribeCoreEvents(adapterListener);
    _this.MetamaskLogin = MetamaskLogin;
    return _this;
  }
  return _createClass(LoginModal);
}(SafeEventEmitter);

var css_248z = "/* devanagari */\n@font-face {\n    font-family: \"Poppins\";\n    font-style: normal;\n    font-weight: 600;\n    src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z11lFd2JQEl8qw.woff2) format(\"woff2\");\n    unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;\n}\n/* latin-ext */\n@font-face {\n    font-family: \"Poppins\";\n    font-style: normal;\n    font-weight: 600;\n    src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1JlFd2JQEl8qw.woff2) format(\"woff2\");\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n    font-family: \"Poppins\";\n    font-style: normal;\n    font-weight: 600;\n    src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2) format(\"woff2\");\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC,\n        U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* latin-ext */\n@font-face {\n    font-family: \"DM Sans\";\n    font-style: normal;\n    font-weight: 400;\n    src: url(https://fonts.gstatic.com/s/dmsans/v6/rP2Hp2ywxg089UriCZ2IHTWEBlwu8Q.woff2) format(\"woff2\");\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n    font-family: \"DM Sans\";\n    font-style: normal;\n    font-weight: 400;\n    src: url(https://fonts.gstatic.com/s/dmsans/v6/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2) format(\"woff2\");\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC,\n        U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* Modal */\n#w3a-network-modal {\n    --bg1: #ffffff;\n    --bg2: #f9f9fb;\n    --text-color1: #a2a5b5;\n    --text-color2: #5c6c7f;\n\n    --text-header: \"Poppins\", Helvetica, sans-serif;\n    --text-body: \"DM Sans\", Helvetica, sans-serif;\n\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    padding: 15px;\n    color: var(--text-color1);\n    font-family: var(--text-body);\n    background: black;\n}\n\n#w3a-network-modal button.w3a-button {\n    background-color: #ffffff;\n    border: 1px solid #f3f3f4;\n    box-shadow: none;\n    box-sizing: border-box;\n    border-radius: 24px;\n    height: 48px;\n    width: 100%;\n    padding: 8px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: var(--text-body);\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    color: #b7b8bd;\n    cursor: pointer;\n}\n\n#w3a-network-modal .w3a-switch-network {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: #f9f9fb;\n    box-sizing: border-box;\n    border-radius: 10px;\n    width: 375px;\n    padding: 20px;\n    font-family: var(--text-body);\n}\n\n#w3a-network-modal .w3a-switch-network__title {\n    font-family: var(--text-header);\n    font-size: 20px;\n    color: var(--text-color2);\n    margin-bottom: 16px;\n    text-align: center;\n}\n\n#w3a-network-modal .w3a-switch-network__link {\n    font-size: 12px;\n    color: #b7b8bd;\n    background-color: #fff;\n    height: 24px;\n    border-radius: 12px;\n    padding: 4px 16px;\n}\n\n#w3a-network-modal .w3a-switch-network__connect {\n    display: flex;\n    margin: 40px auto 0;\n}\n\n#w3a-network-modal .w3a-switch-network__connect > div {\n    text-align: center;\n    font-size: 10px;\n    color: var(--text-color2);\n}\n\n.w3a-switch-network__connect-divider {\n    margin-top: 20px;\n}\n\n#w3a-network-modal .w3a-switch-network__logo {\n    background: #ffffff;\n    box-shadow: 2px 2px 12px rgba(3, 100, 255, 0.05);\n    border-radius: 50%;\n    width: 58px;\n    height: 58px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto 6px;\n}\n\n#w3a-network-modal .w3a-switch-network__logo img {\n    width: 34px;\n    height: 34px;\n}\n\n#w3a-network-modal .w3a-switch-network__buttons {\n    display: flex;\n    column-gap: 16px;\n    width: 100%;\n    margin-top: 60px;\n}\n\n#w3a-network-modal .w3a-button.w3a-button--primary {\n    background-color: #0364ff;\n    color: #fff;\n}\n";
styleInject(css_248z);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var getAdapterSocialLogins = function getAdapterSocialLogins(adapterName, adapter) {
  var loginMethodsConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var finalLoginMethodsConfig = {};
  if (adapterName === WALLET_ADAPTERS.OPENLOGIN) {
    OPENLOGIN_PROVIDERS.forEach(function (loginMethod) {
      var currentLoginMethodConfig = loginMethodsConfig[loginMethod] || {
        name: loginMethod,
        showOnMobile: true,
        showOnModal: true,
        showOnDesktop: true
      };
      finalLoginMethodsConfig[loginMethod] = _objectSpread({}, currentLoginMethodConfig);
    });
    log.debug("OpenLogin login method ui config", finalLoginMethodsConfig);
  } else {
    throw new Error("".concat(adapterName, " is not a valid adapter"));
  }
  return finalLoginMethodsConfig;
};
function validateImageUrl(_x) {
  return _validateImageUrl.apply(this, arguments);
}
function _validateImageUrl() {
  _validateImageUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(url) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
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
  _getNetworkIconId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(ticker) {
    var fallbackId, url, isValid;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
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

function AddNetwork(props) {
  var chainConfig = props.chainConfig,
    appOrigin = props.appOrigin,
    onAddNetwork = props.onAddNetwork,
    onCancelNetwork = props.onCancelNetwork;
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    showModal = _useState2[0],
    setShowModal = _useState2[1];
  var _useState3 = useState("network-default"),
    _useState4 = _slicedToArray(_useState3, 2),
    networkIconId = _useState4[0],
    setNetworkIconId = _useState4[1];
  useEffect(function () {
    getNetworkIconId(chainConfig.ticker).then(function (id) {
      return setNetworkIconId(id);
    }).catch(function () {});
  }, [chainConfig.ticker]);
  return showModal && jsx("div", {
    id: "w3a-modal-network",
    children: jsxs("div", {
      className: "w3a-switch-network",
      children: [jsx("div", {
        className: "w3a-switch-network__title",
        children: "This site is requesting to add Network"
      }), jsx("div", {
        children: jsx("a", {
          className: "w3a-switch-network__link",
          href: appOrigin,
          children: appOrigin
        })
      }), jsx("div", {
        className: "w3a-switch-network__connect",
        children: jsxs("div", {
          children: [jsx("div", {
            className: "w3a-switch-network__logo",
            children: jsx(Image$1, {
              imageId: networkIconId
            })
          }), jsx("div", {
            children: jsx("div", {
              children: chainConfig.displayName
            })
          })]
        })
      }), jsxs("div", {
        className: "w3a-switch-network__buttons",
        children: [jsx("button", {
          type: "button",
          className: "w3a-button",
          onClick: function onClick() {
            setShowModal(false);
            onCancelNetwork();
          },
          children: "Cancel"
        }), jsx("button", {
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

function SwitchNetwork(props) {
  var currentChainConfig = props.currentChainConfig,
    newChainConfig = props.newChainConfig,
    appOrigin = props.appOrigin,
    onSwitchNetwork = props.onSwitchNetwork,
    onCancelNetwork = props.onCancelNetwork;
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    showModal = _useState2[0],
    setShowModal = _useState2[1];
  var _useState3 = useState("network-default"),
    _useState4 = _slicedToArray(_useState3, 2),
    fromNetworkIconId = _useState4[0],
    setFromNetworkIconId = _useState4[1];
  var _useState5 = useState("network-default"),
    _useState6 = _slicedToArray(_useState5, 2),
    toNetworkIconId = _useState6[0],
    setToNetworkIconId = _useState6[1];
  useEffect(function () {
    getNetworkIconId(currentChainConfig.ticker).then(function (id) {
      return setFromNetworkIconId(id);
    }).catch(function () {});
    getNetworkIconId(newChainConfig.ticker).then(function (id) {
      return setToNetworkIconId(id);
    }).catch(function () {});
  }, [currentChainConfig.chainId, currentChainConfig.ticker, newChainConfig.chainId, newChainConfig.ticker]);
  return showModal && jsx("div", {
    id: "w3a-modal-network",
    children: jsxs("div", {
      className: "w3a-switch-network",
      children: [jsx("div", {
        className: "w3a-switch-network__title",
        children: "This site is requesting to switch Network"
      }), jsx("div", {
        children: jsx("a", {
          className: "w3a-switch-network__link",
          href: appOrigin,
          children: appOrigin
        })
      }), jsxs("div", {
        className: "w3a-switch-network__connect",
        children: [jsxs("div", {
          children: [jsx("div", {
            className: "w3a-switch-network__logo",
            children: jsx(Image$1, {
              imageId: fromNetworkIconId
            })
          }), jsxs("div", {
            children: [jsx("div", {
              children: "From:"
            }), jsx("div", {
              children: currentChainConfig.displayName
            })]
          })]
        }), jsx("div", {
          children: jsx("div", {
            className: "w3a-switch-network__connect-divider",
            children: jsx(Image$1, {
              imageId: "network-arrow"
            })
          })
        }), jsxs("div", {
          children: [jsx("div", {
            className: "w3a-switch-network__logo",
            children: jsx(Image$1, {
              imageId: toNetworkIconId
            })
          }), jsxs("div", {
            children: [jsx("div", {
              children: "To:"
            }), jsx("div", {
              children: newChainConfig.displayName
            })]
          })]
        })]
      }), jsxs("div", {
        className: "w3a-switch-network__buttons",
        children: [jsx("button", {
          type: "button",
          className: "w3a-button",
          onClick: function onClick() {
            setShowModal(false);
            onCancelNetwork();
          },
          children: "Cancel"
        }), jsx("button", {
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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function createWrapper(id) {
  var element = document.getElementById(id || "w3a-network-container");
  if (element) return element;
  var wrapper = document.createElement("section");
  wrapper.setAttribute("id", id || "w3a-network-container");
  document.body.appendChild(wrapper);
  return wrapper;
}
var NetworkSwitch = /*#__PURE__*/function (_BaseNetworkSwitch) {
  _inherits(NetworkSwitch, _BaseNetworkSwitch);
  var _super = _createSuper(NetworkSwitch);
  function NetworkSwitch() {
    _classCallCheck(this, NetworkSwitch);
    return _super.apply(this, arguments);
  }
  _createClass(NetworkSwitch, [{
    key: "addNetwork",
    value: function () {
      var _addNetwork = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(params) {
        var chainConfig, appOrigin;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
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
                  render(jsx(AddNetwork, {
                    appOrigin: appOrigin,
                    chainConfig: chainConfig,
                    onAddNetwork: addNetworkCallback,
                    onCancelNetwork: cancelCallback
                  }), createWrapper("w3a-add-network-container"));
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
      var _switchNetwork = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(params) {
        var currentChainConfig, appOrigin, newChainConfig;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
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
                  render(jsx(SwitchNetwork, {
                    appOrigin: appOrigin,
                    currentChainConfig: currentChainConfig,
                    newChainConfig: newChainConfig,
                    onSwitchNetwork: switchNetworkCallback,
                    onCancelNetwork: cancelCallback
                  }), createWrapper("w3a-switch-network-container"));
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
}(BaseNetworkSwitch);

export { LOGIN_MODAL_EVENTS, MODAL_STATUS, NetworkSwitch, OPENLOGIN_PROVIDERS, LoginModal as default, getAdapterSocialLogins, getNetworkIconId, validateImageUrl };
//# sourceMappingURL=ui.esm.js.map
