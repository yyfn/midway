"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3619],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(t),u=r,v=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return t?a.createElement(v,l(l({ref:n},s),{},{components:t})):a.createElement(v,l({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2807:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],p={},o="\u9759\u6001\u7f51\u7ad9\u6258\u7ba1",c={unversionedId:"serverless/migrate_static",id:"serverless/migrate_static",title:"\u9759\u6001\u7f51\u7ad9\u6258\u7ba1",description:"\u6b64\u65b9\u6848\u9002\u7528\u4e8e\u7eaf\u524d\u7aef\u9879\u76ee\uff08React\u3001vue \u7b49\uff09\u6258\u7ba1\u5230 Serverless \u5e73\u53f0\uff08\u963f\u91cc\u4e91\uff0c\u817e\u8baf\u4e91\u7b49\uff09\u3002",source:"@site/docs/serverless/migrate_static.md",sourceDirName:"serverless",slug:"/serverless/migrate_static",permalink:"/en/docs/serverless/migrate_static",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/serverless/migrate_static.md",tags:[],version:"current",frontMatter:{},sidebar:"serverless",previous:{title:"Egg \u5e94\u7528\u8fc1\u79fb",permalink:"/en/docs/serverless/migrate_egg"},next:{title:"Serverless \u89e6\u53d1\u5668 POST \u60c5\u51b5\u5dee\u5f02",permalink:"/en/docs/serverless/serverless_post_difference"}},s=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",children:[],level:2},{value:"\u53ef\u9009\u914d\u7f6e",id:"\u53ef\u9009\u914d\u7f6e",children:[{value:"\u4fee\u6539\u6258\u7ba1\u76ee\u5f55",id:"\u4fee\u6539\u6258\u7ba1\u76ee\u5f55",children:[],level:3},{value:"\u4fee\u6539\u6258\u7ba1\u524d\u7f00",id:"\u4fee\u6539\u6258\u7ba1\u524d\u7f00",children:[],level:3},{value:"\u914d\u7f6e 404 \u9875\u9762",id:"\u914d\u7f6e-404-\u9875\u9762",children:[],level:3},{value:"rewrite \u8def\u7531",id:"rewrite-\u8def\u7531",children:[],level:3},{value:"\u4fee\u6539\u90e8\u7f72\u7684\u51fd\u6570\u540d",id:"\u4fee\u6539\u90e8\u7f72\u7684\u51fd\u6570\u540d",children:[],level:3}],level:2}],m={toc:s};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u9759\u6001\u7f51\u7ad9\u6258\u7ba1"},"\u9759\u6001\u7f51\u7ad9\u6258\u7ba1"),(0,i.kt)("p",null,"\u6b64\u65b9\u6848\u9002\u7528\u4e8e\u7eaf\u524d\u7aef\u9879\u76ee\uff08React\u3001vue \u7b49\uff09\u6258\u7ba1\u5230 Serverless \u5e73\u53f0\uff08\u963f\u91cc\u4e91\uff0c\u817e\u8baf\u4e91\u7b49\uff09\u3002"),(0,i.kt)("p",null,"\u5e38\u89c1\u7684\u573a\u666f\u6709\u6258\u7ba1\u516c\u53f8\u5b98\u7f51\uff0c\u4e2a\u4eba\u4e3b\u9875\uff0c\u535a\u5ba2\u7b49\u3002"),(0,i.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,i.kt)("p",null,"\u5728\u4efb\u610f\u7684\u9759\u6001\u9879\u76ee\u4e0b\u52a0\u5165\u4e0b\u9762\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"f.yml")," \uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-static-demo       ## \u5e94\u7528\u53d1\u5e03\u5230\u4e91\u5e73\u53f0\u7684\u540d\u5b57\n\nprovider:\n  name: aliyun                ## \u53d1\u5e03\u7684\u4e91\u5e73\u53f0\uff0caliyun\uff0ctencent \u7b49\n\ndeployType: \n  type: static\n  version: 3.0.0\n\npackage:\n  include:\n    - build                   ## \u9700\u8981\u62f7\u8d1d\u7684\u76ee\u5f55\n  exclude:\n    - package-lock.json       ## \u5ffd\u7565 package-lock.json \u6587\u4ef6\n\ncustom:\n  customDomain:\n    domainName: auto          ## \u81ea\u52a8\u751f\u6210\u57df\u540d\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6709\u65f6\u5019 package-lock.json \u6587\u4ef6\u4f1a\u9020\u6210\u90e8\u7f72\u5305\u8fc7\u5927\uff08\u5c06 dev \u4f9d\u8d56\u6253\u5165\uff09\u3002"))),(0,i.kt)("p",null,"\u52a0\u5165 dev \u4f9d\u8d56 ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/cli"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "devDependencies": {\n    "@midwayjs/cli": "^1.2.36"\n    ...\n  },\n  "scripts": {\n    "deploy": "npm run build && midway-bin deploy --skipBuild"\n  }\n}\n')),(0,i.kt)("p",null,"\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run deploy")," \u5373\u53ef\u3002"),(0,i.kt)("p",null,"\u6216\u8005\u4f7f\u7528\u4e0d\u540c\u7684 npm \u5305\u52a0\u901f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "scripts": {\n    "deploy": "npm run build && midway-bin deploy --skipBuild --npm=cnpm",\n    ...\n  }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8fd9\u91cc\u4f7f\u7528 --skipBuild \u53c2\u6570\u662f\u4e3a\u4e86\u8df3\u8fc7\u51fd\u6570\u7684\u6784\u5efa\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run build")," \u5bf9\u63a5\u524d\u7aef\u7684\u6784\u5efa\u547d\u4ee4\u3002"))),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4f1a\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," \u76ee\u5f55\u4f5c\u4e3a\u6258\u7ba1\u6839\u76ee\u5f55\uff0c\u8bbf\u95ee ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," \u8def\u7531\u65f6\uff0c\u4f1a\u81ea\u52a8\u67e5\u627e ",(0,i.kt)("inlineCode",{parentName:"p"},"/index.html"),"\u3002"),(0,i.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/=> /index.html"),(0,i.kt)("li",{parentName:"ul"},"/api/ => /api/index.html")),(0,i.kt)("h2",{id:"\u53ef\u9009\u914d\u7f6e"},"\u53ef\u9009\u914d\u7f6e"),(0,i.kt)("p",null,"\u9664\u4e86\u9ed8\u8ba4\u914d\u7f6e\u5916\uff0c\u6211\u4eec\u53ef\u4ee5\u5bf9\u9759\u6001\u7f51\u7ad9\u505a\u4e00\u4e9b\u989d\u5916\u7684\u914d\u7f6e\u3002"),(0,i.kt)("h3",{id:"\u4fee\u6539\u6258\u7ba1\u76ee\u5f55"},"\u4fee\u6539\u6258\u7ba1\u76ee\u5f55"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-static-demo      ## \u5e94\u7528\u53d1\u5e03\u5230\u4e91\u5e73\u53f0\u7684\u540d\u5b57\n\nprovider:\n  name: aliyun               ## \u53d1\u5e03\u7684\u4e91\u5e73\u53f0\uff0caliyun\uff0ctencent \u7b49\n\ndeployType:\n  type: static\n  version: 3.0.0\n  config:\n    rootDir: public          ## \u6258\u7ba1\u76ee\u5f55\u53d8\u4e3a public\n\npackage:\n  include: public            ## \u9700\u8981\u62f7\u8d1d\u7684\u76ee\u5f55\uff0c\u968f\u7740\u914d\u7f6e\u7684\u6258\u7ba1\u76ee\u5f55\u4e3a\u53d8\n")),(0,i.kt)("h3",{id:"\u4fee\u6539\u6258\u7ba1\u524d\u7f00"},"\u4fee\u6539\u6258\u7ba1\u524d\u7f00"),(0,i.kt)("p",null,"\u6709\u65f6\u5019\u90e8\u7f72\u9700\u8981\u7edf\u4e00\u7684\u8def\u7531\u524d\u7f00\uff0c\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/*")," \u8fd9\u6837\u7684\u5f62\u5f0f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-static-demo      ## \u5e94\u7528\u53d1\u5e03\u5230\u4e91\u5e73\u53f0\u7684\u540d\u5b57\n\nprovider:\n  name: aliyun               ## \u53d1\u5e03\u7684\u4e91\u5e73\u53f0\uff0caliyun\uff0ctencent \u7b49\n\ndeployType:\n  type: static\n  version: 3.0.0\n  config:\n    prefix: /api\n\npackage:\n  include: build\n")),(0,i.kt)("p",null,"\u8fd9\u6837\u6240\u6709\u7684 /",(0,i.kt)("em",{parentName:"p"}," \u90fd\u4f1a\u53d8\u6210 /api/"),"\u3002"),(0,i.kt)("h3",{id:"\u914d\u7f6e-404-\u9875\u9762"},"\u914d\u7f6e 404 \u9875\u9762"),(0,i.kt)("p",null,"\u666e\u901a\u7684\u8def\u7531\u662f\u6839\u636e\u6258\u7ba1\u7684\u76ee\u5f55\u7ed3\u6784\u548c\u6587\u4ef6\u6765\u7684\u3002\u5982\u679c\u8bbf\u95ee\u5230\u4e0d\u5b58\u5728\u7684\u6587\u4ef6\uff0c\u5219\u4f1a\u8fd4\u56de 404\u3002\u6211\u4eec\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a 404 \u9875\u9762\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-static-demo      ## \u5e94\u7528\u53d1\u5e03\u5230\u4e91\u5e73\u53f0\u7684\u540d\u5b57\n\nprovider:\n  name: aliyun               ## \u53d1\u5e03\u7684\u4e91\u5e73\u53f0\uff0caliyun\uff0ctencent \u7b49\n\ndeployType:\n  type: static\n  version: 3.0.0\n  config:\n    notFoundUrl: /404.html\n\npackage:\n  include: build\n")),(0,i.kt)("h3",{id:"rewrite-\u8def\u7531"},"rewrite \u8def\u7531"),(0,i.kt)("p",null,"\u6709\u65f6\u5019\uff0c\u6211\u4eec\u5e0c\u671b\u5c06\u4e00\u4e9b\u7279\u5b9a\u7684\u8def\u7531\uff0c\u90fd\u8bbf\u95ee\u5230\u7279\u5b9a\u7684\u6587\u4ef6\u4e0a\uff0c\u6bd4\u5982\u5c06\u6240\u6709\u7684\u8def\u7531\u8bf7\u6c42\uff0c\u90fd\u8f6c\u5411\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"/index.html"),"\uff0c\u7136\u540e\u8ba9\u524d\u7aef\u8def\u7531\u5904\u7406\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-static-demo       ## \u5e94\u7528\u53d1\u5e03\u5230\u4e91\u5e73\u53f0\u7684\u540d\u5b57\n\nprovider:\n  name: aliyun                ## \u53d1\u5e03\u7684\u4e91\u5e73\u53f0\uff0caliyun\uff0ctencent \u7b49\n\ndeployType:\n  type: static\n  version: 3.0.0\n  config:\n    rewrite:\n        /(.*): /index.html\n\npackage:\n  include: build\n")),(0,i.kt)("p",null,"\u6b64 rewrite \u53ef\u4ee5\u5199\u591a\u4e2a\uff0c\u89c4\u5219\u540c ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/koajs/rewrite"},"koa-rewrite"),"\u3002\n\u200b"),(0,i.kt)("p",null,"\u5982\u679c\u8981\u6392\u9664\u67d0\u4e9b\u76ee\u5f55\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"@not")," \u53d6\u53cd\u8bed\u6cd5\u3002\n\u200b"),(0,i.kt)("p",null,"\u6bd4\u5982\uff0c\u6392\u9664 static \u76ee\u5f55\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"deployType:\n  type: static\n  version: 3.0.0\n  config:\n    rootDir: build\n    rewrite:\n      '@not /static/(.*)': /index.html\n")),(0,i.kt)("h3",{id:"\u4fee\u6539\u90e8\u7f72\u7684\u51fd\u6570\u540d"},"\u4fee\u6539\u90e8\u7f72\u7684\u51fd\u6570\u540d"),(0,i.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 name \u5b57\u6bb5\u3002\n\u200b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-static-demo      ## \u5e94\u7528\u53d1\u5e03\u5230\u4e91\u5e73\u53f0\u7684\u540d\u5b57\n\nprovider:\n  name: aliyun               ## \u53d1\u5e03\u7684\u4e91\u5e73\u53f0\uff0caliyun\uff0ctencent \u7b49\n\ndeployType:\n    type: static\n  version: 3.0.0\n  name: app_idx              ## \u51fd\u6570\u540d\n\npackage:\n  include: public            ## \u9700\u8981\u62f7\u8d1d\u7684\u76ee\u5f55\uff0c\u968f\u7740\u914d\u7f6e\u7684\u6258\u7ba1\u76ee\u5f55\u4e3a\u53d8\n")))}d.isMDXComponent=!0}}]);