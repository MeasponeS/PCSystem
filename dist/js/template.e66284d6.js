(function(e){function t(t){for(var r,a,i=t[0],l=t[1],c=t[2],p=0,f=[];p<i.length;p++)a=i[p],o[a]&&f.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(f.length)f.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={template:0},u=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=l;u.push([17,"chunk-vendors","chunk-common"]),n()})({17:function(e,t,n){e.exports=n("3c97")},"38e6":function(e,t,n){},"3c97":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"item"},[n("div",{staticClass:"player",staticStyle:{width:"400px"}},[n("video-player",{ref:"videoPlayer",staticClass:"vjs-custom-skin",attrs:{options:e.playerOptions}})],1)])])},u=[],a=(n("cadf"),n("551c"),n("097d"),n("451f"),n("d6d3")),i=(n("fda2"),{data:function(){return{playerOptions:{width:"784",autoplay:!1,muted:!1,language:"en",playbackRates:[.7,1,1.5,2],sources:[{type:"video/mp4",src:"http://vjs.zencdn.net/v/oceans.mp4"}]}}},mounted:function(){},computed:{},methods:{},components:{videoPlayer:a["videoPlayer"]}}),l=i,c=n("2877"),s=Object(c["a"])(l,o,u,!1,null,null,null);s.options.__file="Index.vue";var p=s.exports;n("38e6"),n("b7f1"),n("b419");new r["default"]({render:function(e){return e(p)}}).$mount("#app")}});
//# sourceMappingURL=template.e66284d6.js.map