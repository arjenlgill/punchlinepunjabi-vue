(function(t){function e(e){for(var n,i,c=e[0],a=e[1],u=e[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,i=1;i<r.length;i++){var a=r[i];0!==o[a]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},o={singletwo:0},s=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b95db":"42a60d3f","chunk-2d0f02b2":"e33c7533","chunk-2d213a6c":"9b624394","chunk-2d21a3d2":"93d210e8","chunk-2d22fd06":"eb821d43","chunk-9b0870e2":"723da5eb"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r=o[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=n);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,c.nc&&a.setAttribute("nonce",c.nc),a.src=i(t);var u=new Error;s=function(e){a.onerror=a.onload=null,clearTimeout(p);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",u.name="ChunkLoadError",u.type=n,u.request=s,r[1](u)}o[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var p=0;p<a.length;p++)e(a[p]);var l=u;s.push([6,"chunk-vendors","chunk-common"]),r()})({6:function(t,e,r){t.exports=r("6959")},6959:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function o(t,e,r,o,s,i){var c=Object(n["x"])("MobNav"),a=Object(n["x"])("Single"),u=Object(n["x"])("MoreMusic"),p=Object(n["x"])("Footer");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["h"])(c),Object(n["h"])(a,{img:this.post.img,postH1:this.post.postH1,postH2:this.post.postH2,postIntro:this.post.postIntro,lyricsOG:this.post.lyricsOG,lyricsTrans:this.post.lyricsTrans,postContent:this.post.postContent,lyrics:i.lyrics},null,8,["img","postH1","postH2","postIntro","lyricsOG","lyricsTrans","postContent","lyrics"]),Object(n["h"])(u),Object(n["h"])(p)],64)}r("d81d"),r("0481");var s=r("5b80"),i=r("df83"),c=r("8db1"),a=r("fd2d"),u=(r("78a7"),{name:"app",components:{MobNav:s["default"],Single:i["a"],MoreMusic:c["a"],Footer:a["a"]},data:function(){return{post:{img:r("cedb"),postH1:"AMANTEJ HUNDAL X SIGNATURE BY SB: 'Chorus'",postH2:"Chorus",postIntro:"",lyricsOG:["jatt ne tah zindagi che lehne aa nazaare","testOG","tedajfj"],lyricsTrans:["test2","test3","erjif"],lyricsSnippet:[],postContent:""}}},computed:{lyrics:function(){var t=this,e=this.post.lyricsOG.map((function(e,r){return[e,t.post.lyricsTrans[r]]}));return e.flat(1)}}});u.render=o;var p=u,l=r("a18c"),d=r("4360");"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/sw.js")})),Object(n["c"])(p).use(d["a"]).use(l["a"]).mount("#app")}});
//# sourceMappingURL=singletwo.b37a80c9.js.map