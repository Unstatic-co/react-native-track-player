"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3694],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(o),m=r,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return o?n.createElement(y,i(i({ref:t},s),{},{components:o})):n.createElement(y,i({ref:t},s))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},9786:function(e,t,o){o.r(t),o.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],c={sidebar_position:6},l="iOS Category (ios-only)",p={unversionedId:"api/constants/ios-category",id:"version-3.1/api/constants/ios-category",title:"iOS Category (ios-only)",description:"All iOS Category types are made available through the named export IOSCategory:",source:"@site/versioned_docs/version-3.1/api/constants/ios-category.md",sourceDirName:"api/constants",slug:"/api/constants/ios-category",permalink:"/docs/api/constants/ios-category",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/versioned_docs/version-3.1/api/constants/ios-category.md",tags:[],version:"3.1",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"app",previous:{title:"Pitch Algorithm (ios-only)",permalink:"/docs/api/constants/pitch-algorithm"},next:{title:"iOS Category Mode (ios-only)",permalink:"/docs/api/constants/ios-category-mode"}},s={},u=[{value:"<code>Playback</code>",id:"playback",level:2},{value:"<code>PlayAndRecord</code>",id:"playandrecord",level:2},{value:"<code>MultiRoute</code>",id:"multiroute",level:2},{value:"<code>Ambient</code>",id:"ambient",level:2},{value:"<code>SoloAmbient</code>",id:"soloambient",level:2},{value:"<code>Record</code>",id:"record",level:2}],d={toc:u};function m(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ios-category-ios-only"},"iOS Category (ios-only)"),(0,a.kt)("p",null,"All iOS Category types are made available through the named export ",(0,a.kt)("inlineCode",{parentName:"p"},"IOSCategory"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { IOSCategory } from 'react-native-track-player';\n")),(0,a.kt)("h2",{id:"playback"},(0,a.kt)("inlineCode",{parentName:"h2"},"Playback")),(0,a.kt)("p",null,"The category for playing recorded music or other sounds that are central to the\nsuccessful use of your app."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/avfaudio/avaudiosession/category/1616509-playback"},"See the Apple Docs")),(0,a.kt)("h2",{id:"playandrecord"},(0,a.kt)("inlineCode",{parentName:"h2"},"PlayAndRecord")),(0,a.kt)("p",null,"The category for recording (input) and playback (output) of audio, such as for a\nVoice over Internet Protocol (VoIP) app."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/avfaudio/avaudiosession/category/1616568-playandrecord"},"See the Apple Docs")),(0,a.kt)("h2",{id:"multiroute"},(0,a.kt)("inlineCode",{parentName:"h2"},"MultiRoute")),(0,a.kt)("p",null,"The category for routing distinct streams of audio data to different output\ndevices at the same time."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/avfaudio/avaudiosession/category/1616484-multiroute"},"See the Apple Docs")," "),(0,a.kt)("h2",{id:"ambient"},(0,a.kt)("inlineCode",{parentName:"h2"},"Ambient")),(0,a.kt)("p",null,"The category for an app in which sound playback is nonprimary \u2014 that is, your\napp also works with the sound turned off."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/avfaudio/avaudiosession/category/1616560-ambient"},"See the Apple Docs")),(0,a.kt)("h2",{id:"soloambient"},(0,a.kt)("inlineCode",{parentName:"h2"},"SoloAmbient")),(0,a.kt)("p",null,"The default audio session category."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/avfaudio/avaudiosession/category/1616488-soloambient"},"See the Apple Docs")),(0,a.kt)("h2",{id:"record"},(0,a.kt)("inlineCode",{parentName:"h2"},"Record")),(0,a.kt)("p",null,"The category for recording audio while also silencing playback audio."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/avfaudio/avaudiosession/category/1616451-record"},"See the Apple Docs")))}m.isMDXComponent=!0}}]);