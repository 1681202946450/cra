(self.webpackChunkcr_a_5759=self.webpackChunkcr_a_5759||[]).push([[179],{"./.storybook/preview.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return _storybook_preview}});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),theme_default=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!./src/global/theme-default.less"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(theme_default.Z,options),theme_default.Z&&theme_default.Z.locals&&theme_default.Z.locals;var _storybook_preview={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[8].use[2]!./src/global/theme-default.less":function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,":root {\n  --fgdm-radius-s: 4px;\n  --fgdm-radius-m: 8px;\n  --fgdm-radius-l: 12px;\n  --fgdm-font-size-1: 9px;\n  --fgdm-font-size-2: 10px;\n  --fgdm-font-size-3: 11px;\n  --fgdm-font-size-4: 12px;\n  --fgdm-font-size-5: 13px;\n  --fgdm-font-size-6: 14px;\n  --fgdm-font-size-7: 15px;\n  --fgdm-font-size-8: 16px;\n  --fgdm-font-size-9: 17px;\n  --fgdm-font-size-10: 18px;\n  --fgdm-color-primary: #1677ff;\n  --fgdm-color-success: #00b578;\n  --fgdm-color-warning: #ff8f1f;\n  --fgdm-color-danger: #ff3141;\n  --fgdm-color-strong: #E93332;\n  --fgdm-color-secondary: #999999;\n  --fgdm-color-text: #333333;\n  --fgdm-color-text-secondary: #666666;\n  --fgdm-color-weak: #999999;\n  --fgdm-color-light: #cccccc;\n  --fgdm-color-border: #eeeeee;\n  --fgdm-color-background: #ffffff;\n  --fgdm-color-white: #ffffff;\n  --fgdm-color-box: #f5f5f5;\n  --fgdm-color-text-light-solid: var(--fgdm-color-white);\n  --fgdm-color-text-dark-solid: #000000;\n  --fgdm-color-fill-content: var(--fgdm-color-box);\n  --fgdm-font-size-main: var(--fgdm-font-size-5);\n  --fgdm-font-family: PingFangSC-Medium;\n  --fgdm-border-color: var(--fgdm-color-border);\n}\n","",{version:3,sources:["webpack://./src/global/theme-default.less"],names:[],mappings:"AAAA;EAEI,oBAAA;EACA,oBAAA;EACA,qBAAA;EAEA,uBAAA;EACA,wBAAA;EACA,wBAAA;EACA,wBAAA;EACA,wBAAA;EACA,wBAAA;EACA,wBAAA;EACA,wBAAA;EACA,wBAAA;EACA,yBAAA;EAGA,6BAAA;EACA,6BAAA;EACA,6BAAA;EACA,4BAAA;EACA,4BAAA;EACA,+BAAA;EAEA,0BAAA;EACA,oCAAA;EACA,0BAAA;EACA,2BAAA;EACA,4BAAA;EACA,gCAAA;EAIA,2BAAA;EACA,yBAAA;EAEA,sDAAA;EACA,qCAAA;EACA,gDAAA;EAEA,8CAAA;EAEA,qCAAA;EAGA,6CAAA;AAZJ",sourcesContent:[":root {\n    // Currently internal variables:\n    --fgdm-radius-s: 4px;\n    --fgdm-radius-m: 8px;\n    --fgdm-radius-l: 12px;\n  \n    --fgdm-font-size-1: 9px;\n    --fgdm-font-size-2: 10px;\n    --fgdm-font-size-3: 11px;\n    --fgdm-font-size-4: 12px;\n    --fgdm-font-size-5: 13px;\n    --fgdm-font-size-6: 14px;\n    --fgdm-font-size-7: 15px;\n    --fgdm-font-size-8: 16px;\n    --fgdm-font-size-9: 17px;\n    --fgdm-font-size-10: 18px;\n  \n    // variables should be exposed to users:\n    --fgdm-color-primary: #1677ff;\n    --fgdm-color-success: #00b578;\n    --fgdm-color-warning: #ff8f1f;\n    --fgdm-color-danger: #ff3141;\n    --fgdm-color-strong: #E93332;\n    --fgdm-color-secondary: #999999;\n    \n    --fgdm-color-text: #333333;\n    --fgdm-color-text-secondary: #666666;\n    --fgdm-color-weak: #999999;\n    --fgdm-color-light: #cccccc;\n    --fgdm-color-border: #eeeeee;\n    --fgdm-color-background: #ffffff;\n  \n    // Deprecated. We use `--fgdm-color-text-light-solid` in code\n    // but keep here for compatible\n    --fgdm-color-white: #ffffff;\n    --fgdm-color-box: #f5f5f5;\n  \n    --fgdm-color-text-light-solid: var(--fgdm-color-white);\n    --fgdm-color-text-dark-solid: #000000;\n    --fgdm-color-fill-content: var(--fgdm-color-box);\n  \n    --fgdm-font-size-main: var(--fgdm-font-size-5);\n  \n    --fgdm-font-family: PingFangSC-Medium;\n  \n    // The variables below are deprecated and only exist for backward compatibility:\n    --fgdm-border-color: var(--fgdm-color-border);\n  }\n  "],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"./src/components lazy recursive ^\\.\\/.*$ include: (?:\\/src\\/components(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":function(module){function webpackEmptyAsyncContext(req){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=function(){return[]},webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id="./src/components lazy recursive ^\\.\\/.*$ include: (?:\\/src\\/components(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackEmptyAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./components/button/button.stories":["./src/components/button/button.stories.tsx",582,229],"./components/button/button.stories.tsx":["./src/components/button/button.stories.tsx",582,229]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((function(){return __webpack_require__(id)}))}webpackAsyncContext.keys=function(){return Object.keys(map)},webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"./storybook-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var dist=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNEL_POSTMESSAGE_namespaceObject=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,external_STORYBOOK_MODULE_CHANNEL_WEBSOCKET_namespaceObject=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__;const importers=[async path=>{if(!/^\.[\\/](?:src\/components(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(17);return __webpack_require__("./src/components lazy recursive ^\\.\\/.*$ include: (?:\\/src\\/components(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNEL_POSTMESSAGE_namespaceObject.createChannel)({page:"preview"});if(external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===dist.global.CONFIG_TYPE){const serverChannel=(0,external_STORYBOOK_MODULE_CHANNEL_WEBSOCKET_namespaceObject.createChannel)({});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setServerChannel(serverChannel),window.__STORYBOOK_SERVER_CHANNEL__=serverChannel}const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/preview.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-styling/dist/preview.mjs"),__webpack_require__("./.storybook/preview.ts")])})},"@storybook/channels":function(module){"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":function(module){"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":function(module){"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/preview-api":function(module){"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},function(__webpack_require__){__webpack_require__.O(0,[198],(function(){return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);