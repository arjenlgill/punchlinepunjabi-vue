if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,d,a)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(d.map((s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}}))).then((e=>{const s=a(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-be54262f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"about.html",revision:"9f6431ab7bb93d2ca769284856403c94"},{url:"css/chunk-common.89cfe36a.bb4ffb6a.css",revision:"bb4ffb6ac55c3cb993120dfab9035daf"},{url:"css/chunk-common.89cfe36a.css",revision:"9a9ae115acfdd2fe31685c77b282ae6f"},{url:"dictionary.html",revision:"65b8306b7bf8c0a9c5d3efc11dfcb7f3"},{url:"features.html",revision:"66d5a9ad09b7e0ed6de65acb25df25e2"},{url:"index.html",revision:"b0765a6084c5683c05c4057a128777b7"},{url:"js/about.26449d5d.js",revision:"247058d31d134d0f22129c34fd850ea7"},{url:"js/chunk-2d0b95db.42a60d3f.js",revision:"f11e784eca93fe2d637377278354cbfd"},{url:"js/chunk-2d0f02b2.e33c7533.js",revision:"f780ad34118bcb26cc85628deb8a0d16"},{url:"js/chunk-2d213a6c.9b624394.js",revision:"3600a9730cf7fb936533fe7786ca4878"},{url:"js/chunk-2d21a3d2.93d210e8.js",revision:"8aa046ebbefec71eb4b075e2ac220ab4"},{url:"js/chunk-2d22fd06.eb821d43.js",revision:"3aa827a12d2a909124aae571ff2463ee"},{url:"js/chunk-9b0870e2.723da5eb.js",revision:"fbcbb1c79162c582e0e9c88c279a4dc5"},{url:"js/chunk-common.6bdd7f1a.js",revision:"a5a36b0b6fd4972d0ec1d28224643b80"},{url:"js/chunk-vendors.0165d87b.js",revision:"28a1d4d1f143b203da0f9063ea2f662e"},{url:"js/dictionary.ad16fecd.js",revision:"232fd8e078ebfdded3381a0984f09a24"},{url:"js/features.d0539a04.js",revision:"d667a89dc67a48e15ea2cf9a2dd4f2d6"},{url:"js/index.38809963.js",revision:"afd96fdecd19a8563e0c49f7840a067b"},{url:"js/playlists.f023dbc1.js",revision:"09d6322ed2a9182811f86c04e8614a4d"},{url:"js/singleone.d2318bdf.js",revision:"2d170da431324874645c23219d1fde3e"},{url:"playlists.html",revision:"28a0853e4e0c0db84b88b55824a2a987"},{url:"single.html",revision:"67dc8f8fe61af756716904a1cf9f6773"},{url:"singleone.html",revision:"5fae9aef546279f53c5af012387a97bf"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.registerRoute(/\.(?:png|jpg|jpeg|svg|json)$/,new e.StaleWhileRevalidate,"GET")}));
//# sourceMappingURL=sw.js.map
