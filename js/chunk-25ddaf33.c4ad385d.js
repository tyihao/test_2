(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25ddaf33"],{"014b":function(t,e,n){"use strict";var r=n("e53d"),i=n("07e3"),o=n("8e60"),a=n("63b6"),c=n("9138"),s=n("ebfd").KEY,f=n("294c"),u=n("dbdb"),l=n("45f2"),p=n("62a0"),b=n("5168"),d=n("ccb9"),h=n("6718"),v=n("47ee"),g=n("9003"),y=n("e4ae"),m=n("f772"),O=n("36c3"),x=n("1bc3"),w=n("aebd"),S=n("a159"),j=n("0395"),P=n("bf0b"),k=n("d9f6"),E=n("c3a1"),F=P.f,_=k.f,C=j.f,D=r.Symbol,N=r.JSON,I=N&&N.stringify,z="prototype",$=b("_hidden"),A=b("toPrimitive"),B={}.propertyIsEnumerable,L=u("symbol-registry"),T=u("symbols"),J=u("op-symbols"),M=Object[z],V="function"==typeof D,K=r.QObject,W=!K||!K[z]||!K[z].findChild,q=o&&f(function(){return 7!=S(_({},"a",{get:function(){return _(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=F(M,e);r&&delete M[e],_(t,e,n),r&&t!==M&&_(M,e,r)}:_,G=function(t){var e=T[t]=S(D[z]);return e._k=t,e},H=V&&"symbol"==typeof D.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof D},Y=function(t,e,n){return t===M&&Y(J,e,n),y(t),e=x(e,!0),y(n),i(T,e)?(n.enumerable?(i(t,$)&&t[$][e]&&(t[$][e]=!1),n=S(n,{enumerable:w(0,!1)})):(i(t,$)||_(t,$,w(1,{})),t[$][e]=!0),q(t,e,n)):_(t,e,n)},Q=function(t,e){y(t);var n,r=v(e=O(e)),i=0,o=r.length;while(o>i)Y(t,n=r[i++],e[n]);return t},R=function(t,e){return void 0===e?S(t):Q(S(t),e)},U=function(t){var e=B.call(this,t=x(t,!0));return!(this===M&&i(T,t)&&!i(J,t))&&(!(e||!i(this,t)||!i(T,t)||i(this,$)&&this[$][t])||e)},X=function(t,e){if(t=O(t),e=x(e,!0),t!==M||!i(T,e)||i(J,e)){var n=F(t,e);return!n||!i(T,e)||i(t,$)&&t[$][e]||(n.enumerable=!0),n}},Z=function(t){var e,n=C(O(t)),r=[],o=0;while(n.length>o)i(T,e=n[o++])||e==$||e==s||r.push(e);return r},tt=function(t){var e,n=t===M,r=C(n?J:O(t)),o=[],a=0;while(r.length>a)!i(T,e=r[a++])||n&&!i(M,e)||o.push(T[e]);return o};V||(D=function(){if(this instanceof D)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===M&&e.call(J,n),i(this,$)&&i(this[$],t)&&(this[$][t]=!1),q(this,t,w(1,n))};return o&&W&&q(M,t,{configurable:!0,set:e}),G(t)},c(D[z],"toString",function(){return this._k}),P.f=X,k.f=Y,n("6abf").f=j.f=Z,n("355d").f=U,n("9aa9").f=tt,o&&!n("b8e3")&&c(M,"propertyIsEnumerable",U,!0),d.f=function(t){return G(b(t))}),a(a.G+a.W+a.F*!V,{Symbol:D});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)b(et[nt++]);for(var rt=E(b.store),it=0;rt.length>it;)h(rt[it++]);a(a.S+a.F*!V,"Symbol",{for:function(t){return i(L,t+="")?L[t]:L[t]=D(t)},keyFor:function(t){if(!H(t))throw TypeError(t+" is not a symbol!");for(var e in L)if(L[e]===t)return e},useSetter:function(){W=!0},useSimple:function(){W=!1}}),a(a.S+a.F*!V,"Object",{create:R,defineProperty:Y,defineProperties:Q,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),N&&a(a.S+a.F*(!V||f(function(){var t=D();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))})),"JSON",{stringify:function(t){var e,n,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(n=e=r[1],(m(e)||void 0!==t)&&!H(t))return g(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!H(e))return e}),r[1]=e,I.apply(N,r)}}),D[z][A]||n("35e8")(D[z],A,D[z].valueOf),l(D,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},"0395":function(t,e,n){var r=n("36c3"),i=n("6abf").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?c(t):i(r(t))}},"0e8f":function(t,e,n){"use strict";n("db6d");var r=n("e8f2");e["a"]=Object(r["a"])("flex")},"132d":function(t,e,n){"use strict";n("44dc");var r,i=n("b64a"),o=n("2b0e"),a=o["a"].extend({name:"sizeable",props:{large:Boolean,medium:Boolean,size:{type:[Number,String]},small:Boolean,xLarge:Boolean}}),c=n("6a18"),s=n("80d2"),f=n("58df"),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function l(t){return["fas","far","fal","fab"].some(function(e){return t.includes(e)})}(function(t){t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(r||(r={}));var p=Object(f["a"])(i["a"],a,c["a"]).extend({name:"v-icon",props:{disabled:Boolean,left:Boolean,right:Boolean},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(s["k"])(this,t)},getSize:function(){var t={small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(s["j"])(t).find(function(e){return t[e]});return e&&r[e]||Object(s["a"])(this.size)},getDefaultData:function(){var t={staticClass:"v-icon",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.$listeners.click||this.$listeners["!click"],"v-icon--right":this.right},attrs:u({"aria-hidden":!0},this.$attrs),on:this.$listeners};return t},applyColors:function(t){t.class=u({},t.class,this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var n=[],r=this.getDefaultData(),i="material-icons",o=t.indexOf("-"),a=o<=-1;a?n.push(t):(i=t.slice(0,o),l(i)&&(i="")),r.class[i]=!0,r.class[t]=!a;var c=this.getSize();return c&&(r.style={fontSize:c}),this.applyColors(r),e("i",r,n)},renderSvgIcon:function(t,e){var n=this.getDefaultData();n.class["v-icon--is-component"]=!0;var r=this.getSize();r&&(n.style={fontSize:r,height:r}),this.applyColors(n);var i=t.component;return n.props=t.props,n.nativeOn=n.on,e(i,n)}},render:function(t){var e=this.getIcon();return"string"===typeof e?this.renderFontIcon(e,t):this.renderSvgIcon(e,t)}});e["a"]=o["a"].extend({name:"v-icon",$_wrapperFor:p,functional:!0,render:function(t,e){var n=e.data,r=e.children,i="";return n.domProps&&(i=n.domProps.textContent||n.domProps.innerHTML||i,delete n.domProps.textContent,delete n.domProps.innerHTML),t(p,n,i?[i]:r)}})},"268f":function(t,e,n){t.exports=n("fde4")},"32a6":function(t,e,n){var r=n("241e"),i=n("c3a1");n("ce7e")("keys",function(){return function(t){return i(r(t))}})},"355d":function(t,e){e.f={}.propertyIsEnumerable},"44dc":function(t,e,n){},"454f":function(t,e,n){n("46a7");var r=n("584a").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"46a7":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"47ee":function(t,e,n){var r=n("c3a1"),i=n("9aa9"),o=n("355d");t.exports=function(t){var e=r(t),n=i.f;if(n){var a,c=n(t),s=o.f,f=0;while(c.length>f)s.call(t,a=c[f++])&&e.push(a)}return e}},6718:function(t,e,n){var r=n("e53d"),i=n("584a"),o=n("b8e3"),a=n("ccb9"),c=n("d9f6").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:a.f(t)})}},"6abf":function(t,e,n){var r=n("e6f3"),i=n("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},"85f2":function(t,e,n){t.exports=n("454f")},"8aae":function(t,e,n){n("32a6"),t.exports=n("584a").Object.keys},9003:function(t,e,n){var r=n("6b4c");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},a4bb:function(t,e,n){t.exports=n("8aae")},a523:function(t,e,n){"use strict";n("db6d");var r=n("e8f2");e["a"]=Object(r["a"])("container")},a722:function(t,e,n){"use strict";n("db6d");var r=n("e8f2");e["a"]=Object(r["a"])("layout")},bf0b:function(t,e,n){var r=n("355d"),i=n("aebd"),o=n("36c3"),a=n("1bc3"),c=n("07e3"),s=n("794b"),f=Object.getOwnPropertyDescriptor;e.f=n("8e60")?f:function(t,e){if(t=o(t),e=a(e,!0),s)try{return f(t,e)}catch(n){}if(c(t,e))return i(!r.f.call(t,e),t[e])}},bf90:function(t,e,n){var r=n("36c3"),i=n("bf0b").f;n("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return i(r(t),e)}})},ccb9:function(t,e,n){e.f=n("5168")},ce7e:function(t,e,n){var r=n("63b6"),i=n("584a"),o=n("294c");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",a)}},cebc:function(t,e,n){"use strict";var r=n("268f"),i=n.n(r),o=n("e265"),a=n.n(o),c=n("a4bb"),s=n.n(c),f=n("85f2"),u=n.n(f);function l(t,e,n){return e in t?u()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=s()(n);"function"===typeof a.a&&(r=r.concat(a()(n).filter(function(t){return i()(n,t).enumerable}))),r.forEach(function(e){l(t,e,n[e])})}return t}n.d(e,"a",function(){return p})},e265:function(t,e,n){t.exports=n("ed33")},ebfd:function(t,e,n){var r=n("62a0")("meta"),i=n("f772"),o=n("07e3"),a=n("d9f6").f,c=0,s=Object.isExtensible||function(){return!0},f=!n("294c")(function(){return s(Object.preventExtensions({}))}),u=function(t){a(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!s(t))return"F";if(!e)return"E";u(t)}return t[r].i},p=function(t,e){if(!o(t,r)){if(!s(t))return!0;if(!e)return!1;u(t)}return t[r].w},b=function(t){return f&&d.NEED&&s(t)&&!o(t,r)&&u(t),t},d=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:b}},ed33:function(t,e,n){n("014b"),t.exports=n("584a").Object.getOwnPropertySymbols},f5bd:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-xl":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[t._t("default")],2),t._l(t.paginatedArticles,function(e,r){return n("feed-card",{key:e.title,attrs:{size:t.layout[r],value:e}})})],2),n("v-layout",{attrs:{"align-center":""}},[n("v-flex",{attrs:{xs3:""}},[1!==t.page?n("base-btn",{staticClass:"ml-0",attrs:{title:"Previous page",square:""},on:{click:function(e){t.page--}}},[n("v-icon",[t._v("mdi-chevron-left")])],1):t._e()],1),n("v-flex",{attrs:{xs6:"","text-xs-center":"",subheading:""}},[t._v("\n      PAGE "+t._s(t.page)+" OF "+t._s(t.pages)+"\n    ")]),n("v-flex",{attrs:{xs3:"","text-xs-right":""}},[t.pages>1&&t.page<t.pages?n("base-btn",{staticClass:"mr-0",attrs:{title:"Next page",square:""},on:{click:function(e){t.page++}}},[n("v-icon",[t._v("mdi-chevron-right")])],1):t._e()],1)],1)],1)},i=[],o=n("cebc"),a=n("2f62"),c={name:"Feed",components:{FeedCard:function(){return n.e("chunk-0dac5c00").then(n.bind(null,"eb3a"))}},data:function(){return{layout:[2,2,1,2,2,3,3,3,3,3,3],page:1}},computed:Object(o["a"])({},Object(a["d"])(["articles"]),{pages:function(){return Math.ceil(this.articles.length/11)},paginatedArticles:function(){var t=11*(this.page-1),e=11*this.page;return this.articles.slice(t,e)}}),watch:{page:function(){window.scrollTo(0,0)}}},s=c,f=n("2877"),u=n("6544"),l=n.n(u),p=n("a523"),b=n("0e8f"),d=n("132d"),h=n("a722"),v=Object(f["a"])(s,r,i,!1,null,null,null);e["default"]=v.exports;l()(v,{VContainer:p["a"],VFlex:b["a"],VIcon:d["a"],VLayout:h["a"]})},fde4:function(t,e,n){n("bf90");var r=n("584a").Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=chunk-25ddaf33.c4ad385d.js.map