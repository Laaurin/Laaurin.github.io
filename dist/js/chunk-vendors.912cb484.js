(self["webpackChunkmultiple_choice"]=self["webpackChunkmultiple_choice"]||[]).push([[998],{9662:function(e,t,n){"use strict";var i=n(614),r=n(6330),s=TypeError;e.exports=function(e){if(i(e))return e;throw s(r(e)+" is not a function")}},6077:function(e,t,n){"use strict";var i=n(614),r=String,s=TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw s("Can't set "+r(e)+" as a prototype")}},5787:function(e,t,n){"use strict";var i=n(7976),r=TypeError;e.exports=function(e,t){if(i(t,e))return e;throw r("Incorrect invocation")}},9670:function(e,t,n){"use strict";var i=n(111),r=String,s=TypeError;e.exports=function(e){if(i(e))return e;throw s(r(e)+" is not an object")}},3013:function(e){"use strict";e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){"use strict";var i,r,s,o=n(3013),a=n(9781),c=n(7854),l=n(614),u=n(111),h=n(2597),d=n(648),f=n(6330),p=n(8880),g=n(8052),m=n(7045),_=n(7976),y=n(9518),v=n(7674),w=n(5112),b=n(9711),E=n(9909),T=E.enforce,C=E.get,I=c.Int8Array,S=I&&I.prototype,k=c.Uint8ClampedArray,A=k&&k.prototype,N=I&&y(I),R=S&&y(S),O=Object.prototype,x=c.TypeError,D=w("toStringTag"),P=b("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=o&&!!v&&"Opera"!==d(c.opera),F=!1,U={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},V={BigInt64Array:8,BigUint64Array:8},j=function(e){if(!u(e))return!1;var t=d(e);return"DataView"===t||h(U,t)||h(V,t)},$=function(e){var t=y(e);if(u(t)){var n=C(t);return n&&h(n,L)?n[L]:$(t)}},q=function(e){if(!u(e))return!1;var t=d(e);return h(U,t)||h(V,t)},B=function(e){if(q(e))return e;throw x("Target is not a typed array")},z=function(e){if(l(e)&&(!v||_(N,e)))return e;throw x(f(e)+" is not a typed array constructor")},H=function(e,t,n,i){if(a){if(n)for(var r in U){var s=c[r];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(l){}}}R[e]&&!n||g(R,e,n?t:M&&S[e]||t,i)}},W=function(e,t,n){var i,r;if(a){if(v){if(n)for(i in U)if(r=c[i],r&&h(r,e))try{delete r[e]}catch(s){}if(N[e]&&!n)return;try{return g(N,e,n?t:M&&N[e]||t)}catch(s){}}for(i in U)r=c[i],!r||r[e]&&!n||g(r,e,t)}};for(i in U)r=c[i],s=r&&r.prototype,s?T(s)[L]=r:M=!1;for(i in V)r=c[i],s=r&&r.prototype,s&&(T(s)[L]=r);if((!M||!l(N)||N===Function.prototype)&&(N=function(){throw x("Incorrect invocation")},M))for(i in U)c[i]&&v(c[i],N);if((!M||!R||R===O)&&(R=N.prototype,M))for(i in U)c[i]&&v(c[i].prototype,R);if(M&&y(A)!==R&&v(A,R),a&&!h(R,D))for(i in F=!0,m(R,D,{configurable:!0,get:function(){return u(this)?this[P]:void 0}}),U)c[i]&&p(c[i],P,i);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:F&&P,aTypedArray:B,aTypedArrayConstructor:z,exportTypedArrayMethod:H,exportTypedArrayStaticMethod:W,getTypedArrayConstructor:$,isView:j,isTypedArray:q,TypedArray:N,TypedArrayPrototype:R}},7745:function(e,t,n){"use strict";var i=n(6244);e.exports=function(e,t){var n=0,r=i(t),s=new e(r);while(r>n)s[n]=t[n++];return s}},1318:function(e,t,n){"use strict";var i=n(5656),r=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,c=i(t),l=s(c),u=r(o,l);if(e&&n!=n){while(l>u)if(a=c[u++],a!=a)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},3658:function(e,t,n){"use strict";var i=n(9781),r=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=i&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(r(e)&&!o(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},1843:function(e,t,n){"use strict";var i=n(6244);e.exports=function(e,t){for(var n=i(e),r=new t(n),s=0;s<n;s++)r[s]=e[n-s-1];return r}},1572:function(e,t,n){"use strict";var i=n(6244),r=n(9303),s=RangeError;e.exports=function(e,t,n,o){var a=i(e),c=r(n),l=c<0?a+c:c;if(l>=a||l<0)throw s("Incorrect index");for(var u=new t(a),h=0;h<a;h++)u[h]=h===l?o:e[h];return u}},4326:function(e,t,n){"use strict";var i=n(1702),r=i({}.toString),s=i("".slice);e.exports=function(e){return s(r(e),8,-1)}},648:function(e,t,n){"use strict";var i=n(1694),r=n(614),s=n(4326),o=n(5112),a=o("toStringTag"),c=Object,l="Arguments"==s(function(){return arguments}()),u=function(e,t){try{return e[t]}catch(n){}};e.exports=i?s:function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=u(t=c(e),a))?n:l?s(t):"Object"==(i=s(t))&&r(t.callee)?"Arguments":i}},9920:function(e,t,n){"use strict";var i=n(2597),r=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=r(t),c=o.f,l=s.f,u=0;u<a.length;u++){var h=a[u];i(e,h)||n&&i(n,h)||c(e,h,l(t,h))}}},8544:function(e,t,n){"use strict";var i=n(7293);e.exports=!i((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},8880:function(e,t,n){"use strict";var i=n(9781),r=n(3070),s=n(9114);e.exports=i?function(e,t,n){return r.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){"use strict";e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},7045:function(e,t,n){"use strict";var i=n(6339),r=n(3070);e.exports=function(e,t,n){return n.get&&i(n.get,t,{getter:!0}),n.set&&i(n.set,t,{setter:!0}),r.f(e,t,n)}},8052:function(e,t,n){"use strict";var i=n(614),r=n(3070),s=n(6339),o=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,l=void 0!==a.name?a.name:t;if(i(n)&&s(n,l,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(u){}c?e[t]=n:r.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){"use strict";var i=n(7854),r=Object.defineProperty;e.exports=function(e,t){try{r(i,e,{value:t,configurable:!0,writable:!0})}catch(n){i[e]=t}return t}},9781:function(e,t,n){"use strict";var i=n(7293);e.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){"use strict";var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){"use strict";var i=n(7854),r=n(111),s=i.document,o=r(s)&&r(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},7207:function(e){"use strict";var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){"use strict";e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e){"use strict";e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){"use strict";var i,r,s=n(7854),o=n(8113),a=s.process,c=s.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(i=u.split("."),r=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(r=+i[1]))),e.exports=r},748:function(e){"use strict";e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){"use strict";var i=n(1702),r=Error,s=i("".replace),o=function(e){return String(r(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!r.prepareStackTrace)while(t--)e=s(e,a,"");return e}},2109:function(e,t,n){"use strict";var i=n(7854),r=n(1236).f,s=n(8880),o=n(8052),a=n(3072),c=n(9920),l=n(4705);e.exports=function(e,t){var n,u,h,d,f,p,g=e.target,m=e.global,_=e.stat;if(u=m?i:_?i[g]||a(g,{}):(i[g]||{}).prototype,u)for(h in t){if(f=t[h],e.dontCallGetSet?(p=r(u,h),d=p&&p.value):d=u[h],n=l(m?h:g+(_?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(u,h,f,e)}}},7293:function(e){"use strict";e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){"use strict";var i=n(7293);e.exports=!i((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){"use strict";var i=n(4374),r=Function.prototype.call;e.exports=i?r.bind(r):function(){return r.apply(r,arguments)}},6530:function(e,t,n){"use strict";var i=n(9781),r=n(2597),s=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=r(s,"name"),c=a&&"something"===function(){}.name,l=a&&(!i||i&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},5668:function(e,t,n){"use strict";var i=n(1702),r=n(9662);e.exports=function(e,t,n){try{return i(r(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(s){}}},1702:function(e,t,n){"use strict";var i=n(4374),r=Function.prototype,s=r.call,o=i&&r.bind.bind(s,s);e.exports=i?o:function(e){return function(){return s.apply(e,arguments)}}},5005:function(e,t,n){"use strict";var i=n(7854),r=n(614),s=function(e){return r(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(i[e]):i[e]&&i[e][t]}},8173:function(e,t,n){"use strict";var i=n(9662),r=n(8554);e.exports=function(e,t){var n=e[t];return r(n)?void 0:i(n)}},7854:function(e,t,n){"use strict";var i=function(e){return e&&e.Math==Math&&e};e.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},2597:function(e,t,n){"use strict";var i=n(1702),r=n(7908),s=i({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(r(e),t)}},3501:function(e){"use strict";e.exports={}},4664:function(e,t,n){"use strict";var i=n(9781),r=n(7293),s=n(317);e.exports=!i&&!r((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){"use strict";var i=n(1702),r=n(7293),s=n(4326),o=Object,a=i("".split);e.exports=r((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},9587:function(e,t,n){"use strict";var i=n(614),r=n(111),s=n(7674);e.exports=function(e,t,n){var o,a;return s&&i(o=t.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},2788:function(e,t,n){"use strict";var i=n(1702),r=n(614),s=n(5465),o=i(Function.toString);r(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},9909:function(e,t,n){"use strict";var i,r,s,o=n(4811),a=n(7854),c=n(111),l=n(8880),u=n(2597),h=n(5465),d=n(6200),f=n(3501),p="Object already initialized",g=a.TypeError,m=a.WeakMap,_=function(e){return s(e)?r(e):i(e,{})},y=function(e){return function(t){var n;if(!c(t)||(n=r(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var v=h.state||(h.state=new m);v.get=v.get,v.has=v.has,v.set=v.set,i=function(e,t){if(v.has(e))throw g(p);return t.facade=e,v.set(e,t),t},r=function(e){return v.get(e)||{}},s=function(e){return v.has(e)}}else{var w=d("state");f[w]=!0,i=function(e,t){if(u(e,w))throw g(p);return t.facade=e,l(e,w,t),t},r=function(e){return u(e,w)?e[w]:{}},s=function(e){return u(e,w)}}e.exports={set:i,get:r,has:s,enforce:_,getterFor:y}},3157:function(e,t,n){"use strict";var i=n(4326);e.exports=Array.isArray||function(e){return"Array"==i(e)}},4067:function(e,t,n){"use strict";var i=n(648);e.exports=function(e){var t=i(e);return"BigInt64Array"==t||"BigUint64Array"==t}},614:function(e,t,n){"use strict";var i=n(4154),r=i.all;e.exports=i.IS_HTMLDDA?function(e){return"function"==typeof e||e===r}:function(e){return"function"==typeof e}},4705:function(e,t,n){"use strict";var i=n(7293),r=n(614),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==u||n!=l&&(r(t)?i(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},l=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},8554:function(e){"use strict";e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){"use strict";var i=n(614),r=n(4154),s=r.all;e.exports=r.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:i(e)||e===s}:function(e){return"object"==typeof e?null!==e:i(e)}},1913:function(e){"use strict";e.exports=!1},2190:function(e,t,n){"use strict";var i=n(5005),r=n(614),s=n(7976),o=n(3307),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return r(t)&&s(t.prototype,a(e))}},6244:function(e,t,n){"use strict";var i=n(7466);e.exports=function(e){return i(e.length)}},6339:function(e,t,n){"use strict";var i=n(1702),r=n(7293),s=n(614),o=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,l=n(2788),u=n(9909),h=u.enforce,d=u.get,f=String,p=Object.defineProperty,g=i("".slice),m=i("".replace),_=i([].join),y=a&&!r((function(){return 8!==p((function(){}),"length",{value:8}).length})),v=String(String).split("String"),w=e.exports=function(e,t,n){"Symbol("===g(f(t),0,7)&&(t="["+m(f(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(r){}var i=h(e);return o(i,"source")||(i.source=_(v,"string"==typeof t?t:"")),e};Function.prototype.toString=w((function(){return s(this)&&d(this).source||l(this)}),"toString")},4758:function(e){"use strict";var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var i=+e;return(i>0?n:t)(i)}},6277:function(e,t,n){"use strict";var i=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:i(e)}},3070:function(e,t,n){"use strict";var i=n(9781),r=n(4664),s=n(3353),o=n(9670),a=n(4948),c=TypeError,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=i?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var i=u(e,t);i&&i[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:i[d],enumerable:h in n?n[h]:i[h],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(o(e),t=a(t),o(n),r)try{return l(e,t,n)}catch(i){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){"use strict";var i=n(9781),r=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),l=n(2597),u=n(4664),h=Object.getOwnPropertyDescriptor;t.f=i?h:function(e,t){if(e=a(e),t=c(t),u)try{return h(e,t)}catch(n){}if(l(e,t))return o(!r(s.f,e,t),e[t])}},8006:function(e,t,n){"use strict";var i=n(6324),r=n(748),s=r.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,s)}},5181:function(e,t){"use strict";t.f=Object.getOwnPropertySymbols},9518:function(e,t,n){"use strict";var i=n(2597),r=n(614),s=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),l=Object,u=l.prototype;e.exports=a?l.getPrototypeOf:function(e){var t=s(e);if(i(t,c))return t[c];var n=t.constructor;return r(n)&&t instanceof n?n.prototype:t instanceof l?u:null}},7976:function(e,t,n){"use strict";var i=n(1702);e.exports=i({}.isPrototypeOf)},6324:function(e,t,n){"use strict";var i=n(1702),r=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=i([].push);e.exports=function(e,t){var n,i=s(e),l=0,u=[];for(n in i)!r(a,n)&&r(i,n)&&c(u,n);while(t.length>l)r(i,n=t[l++])&&(~o(u,n)||c(u,n));return u}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,r=i&&!n.call({1:2},1);t.f=r?function(e){var t=i(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){"use strict";var i=n(5668),r=n(9670),s=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=i(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(o){}return function(n,i){return r(n),s(i),t?e(n,i):n.__proto__=i,n}}():void 0)},2140:function(e,t,n){"use strict";var i=n(6916),r=n(614),s=n(111),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&r(n=e.toString)&&!s(a=i(n,e)))return a;if(r(n=e.valueOf)&&!s(a=i(n,e)))return a;if("string"!==t&&r(n=e.toString)&&!s(a=i(n,e)))return a;throw o("Can't convert object to primitive value")}},3887:function(e,t,n){"use strict";var i=n(5005),r=n(1702),s=n(8006),o=n(5181),a=n(9670),c=r([].concat);e.exports=i("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},4488:function(e,t,n){"use strict";var i=n(8554),r=TypeError;e.exports=function(e){if(i(e))throw r("Can't call method on "+e);return e}},6200:function(e,t,n){"use strict";var i=n(2309),r=n(9711),s=i("keys");e.exports=function(e){return s[e]||(s[e]=r(e))}},5465:function(e,t,n){"use strict";var i=n(7854),r=n(3072),s="__core-js_shared__",o=i[s]||r(s,{});e.exports=o},2309:function(e,t,n){"use strict";var i=n(1913),r=n(5465);(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.0",mode:i?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){"use strict";var i=n(7392),r=n(7293),s=n(7854),o=s.String;e.exports=!!Object.getOwnPropertySymbols&&!r((function(){var e=Symbol();return!o(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},1400:function(e,t,n){"use strict";var i=n(9303),r=Math.max,s=Math.min;e.exports=function(e,t){var n=i(e);return n<0?r(n+t,0):s(n,t)}},4599:function(e,t,n){"use strict";var i=n(7593),r=TypeError;e.exports=function(e){var t=i(e,"number");if("number"==typeof t)throw r("Can't convert number to bigint");return BigInt(t)}},5656:function(e,t,n){"use strict";var i=n(8361),r=n(4488);e.exports=function(e){return i(r(e))}},9303:function(e,t,n){"use strict";var i=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:i(t)}},7466:function(e,t,n){"use strict";var i=n(9303),r=Math.min;e.exports=function(e){return e>0?r(i(e),9007199254740991):0}},7908:function(e,t,n){"use strict";var i=n(4488),r=Object;e.exports=function(e){return r(i(e))}},7593:function(e,t,n){"use strict";var i=n(6916),r=n(111),s=n(2190),o=n(8173),a=n(2140),c=n(5112),l=TypeError,u=c("toPrimitive");e.exports=function(e,t){if(!r(e)||s(e))return e;var n,c=o(e,u);if(c){if(void 0===t&&(t="default"),n=i(c,e,t),!r(n)||s(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){"use strict";var i=n(7593),r=n(2190);e.exports=function(e){var t=i(e,"string");return r(t)?t:t+""}},1694:function(e,t,n){"use strict";var i=n(5112),r=i("toStringTag"),s={};s[r]="z",e.exports="[object z]"===String(s)},1340:function(e,t,n){"use strict";var i=n(648),r=String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return r(e)}},6330:function(e){"use strict";var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){"use strict";var i=n(1702),r=0,s=Math.random(),o=i(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++r+s,36)}},3307:function(e,t,n){"use strict";var i=n(6293);e.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){"use strict";var i=n(9781),r=n(7293);e.exports=i&&r((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:function(e){"use strict";var t=TypeError;e.exports=function(e,n){if(e<n)throw t("Not enough arguments");return e}},4811:function(e,t,n){"use strict";var i=n(7854),r=n(614),s=i.WeakMap;e.exports=r(s)&&/native code/.test(String(s))},5112:function(e,t,n){"use strict";var i=n(7854),r=n(2309),s=n(2597),o=n(9711),a=n(6293),c=n(3307),l=i.Symbol,u=r("wks"),h=c?l["for"]||l:l&&l.withoutSetter||o;e.exports=function(e){return s(u,e)||(u[e]=a&&s(l,e)?l[e]:h("Symbol."+e)),u[e]}},7658:function(e,t,n){"use strict";var i=n(2109),r=n(7908),s=n(6244),o=n(3658),a=n(7207),c=n(7293),l=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=l||!u();i({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=r(this),n=s(t),i=arguments.length;a(n+i);for(var c=0;c<i;c++)t[n]=arguments[c],n++;return o(t,n),n}})},1439:function(e,t,n){"use strict";var i=n(1843),r=n(260),s=r.aTypedArray,o=r.exportTypedArrayMethod,a=r.getTypedArrayConstructor;o("toReversed",(function(){return i(s(this),a(this))}))},7585:function(e,t,n){"use strict";var i=n(260),r=n(1702),s=n(9662),o=n(7745),a=i.aTypedArray,c=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,u=r(i.TypedArrayPrototype.sort);l("toSorted",(function(e){void 0!==e&&s(e);var t=a(this),n=o(c(t),t);return u(n,e)}))},5315:function(e,t,n){"use strict";var i=n(1572),r=n(260),s=n(4067),o=n(9303),a=n(4599),c=r.aTypedArray,l=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();u("with",{with:function(e,t){var n=c(this),r=o(e),u=s(n)?a(t):+t;return i(n,l(n),r,u)}}["with"],!h)},2801:function(e,t,n){"use strict";var i=n(2109),r=n(7854),s=n(5005),o=n(9114),a=n(3070).f,c=n(2597),l=n(5787),u=n(9587),h=n(6277),d=n(3678),f=n(1060),p=n(9781),g=n(1913),m="DOMException",_=s("Error"),y=s(m),v=function(){l(this,w);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),i=new y(t,n),r=_(t);return r.name=m,a(i,"stack",o(1,f(r.stack,1))),u(i,this,v),i},w=v.prototype=y.prototype,b="stack"in _(m),E="stack"in new y(1,2),T=y&&p&&Object.getOwnPropertyDescriptor(r,m),C=!!T&&!(T.writable&&T.configurable),I=b&&!C&&!E;i({global:!0,constructor:!0,forced:g||I},{DOMException:I?v:y});var S=s(m),k=S.prototype;if(k.constructor!==S)for(var A in g||a(k,"constructor",o(1,S)),d)if(c(d,A)){var N=d[A],R=N.s;c(S,R)||a(S,R,o(6,N.c))}},6229:function(e,t,n){"use strict";var i=n(8052),r=n(1702),s=n(1340),o=n(8053),a=URLSearchParams,c=a.prototype,l=r(c.append),u=r(c["delete"]),h=r(c.forEach),d=r([].push),f=new a("a=1&a=2&b=3");f["delete"]("a",1),f["delete"]("b",void 0),f+""!=="a=2"&&i(c,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return u(this,e);var i=[];h(this,(function(e,t){d(i,{key:t,value:e})})),o(t,1);var r,a=s(e),c=s(n),f=0,p=0,g=!1,m=i.length;while(f<m)r=i[f++],g||r.key===a?(g=!0,u(this,r.key)):p++;while(p<m)r=i[p++],r.key===a&&r.value===c||l(this,r.key,r.value)}),{enumerable:!0,unsafe:!0})},7330:function(e,t,n){"use strict";var i=n(8052),r=n(1702),s=n(1340),o=n(8053),a=URLSearchParams,c=a.prototype,l=r(c.getAll),u=r(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||i(c,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return u(this,e);var i=l(this,e);o(t,1);var r=s(n),a=0;while(a<i.length)if(i[a++]===r)return!0;return!1}),{enumerable:!0,unsafe:!0})},2062:function(e,t,n){"use strict";var i=n(9781),r=n(1702),s=n(7045),o=URLSearchParams.prototype,a=r(o.forEach);i&&!("size"in o)&&s(o,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})},223:function(e,t,n){"use strict";n.d(t,{BH:function(){return I},DV:function(){return W},GJ:function(){return z},L:function(){return h},LL:function(){return F},P0:function(){return E},Pz:function(){return C},Sg:function(){return S},UI:function(){return G},US:function(){return c},Wl:function(){return $},Yr:function(){return x},ZR:function(){return M},aH:function(){return T},b$:function(){return R},cI:function(){return j},dS:function(){return oe},eu:function(){return P},g5:function(){return s},gK:function(){return se},gQ:function(){return ee},h$:function(){return u},hl:function(){return D},hu:function(){return r},m9:function(){return ce},ne:function(){return te},p$:function(){return f},pd:function(){return Z},q4:function(){return b},r3:function(){return H},ru:function(){return N},tV:function(){return d},uI:function(){return A},ug:function(){return ae},vZ:function(){return J},w1:function(){return O},w9:function(){return B},xO:function(){return Y},xb:function(){return K},z$:function(){return k},zd:function(){return X}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},r=function(e,t){if(!e)throw s(t)},s=function(e){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},a=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,o=s?e[r+1]:0,a=r+2<e.length,c=a?e[r+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length,o=s?n[e.charAt(r)]:0;++r;const a=r<e.length,c=a?n[e.charAt(r)]:64;++r;const u=r<e.length,h=u?n[e.charAt(r)]:64;if(++r,null==t||null==o||null==c||null==h)throw new l;const d=t<<2|o>>4;if(i.push(d),64!==c){const e=o<<4&240|c>>2;if(i.push(e),64!==h){const e=c<<6&192|h;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u=function(e){const t=o(e);return c.encodeByteArray(t,!0)},h=function(e){return u(e).replace(/\./g,"")},d=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function f(e){return p(void 0,e)}function p(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&g(n)&&(e[n]=p(e[n],t[n]));return e}function g(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=()=>m().__FIREBASE_DEFAULTS__,y=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},v=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&d(e[1]);return t&&JSON.parse(t)},w=()=>{try{return _()||y()||v()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},b=e=>{var t,n;return null===(n=null===(t=w())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},E=e=>{const t=b(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},T=()=>{var e;return null===(e=w())||void 0===e?void 0:e.config},C=e=>{var t;return null===(t=w())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[h(JSON.stringify(n)),h(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function A(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(k())}function N(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function R(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function O(){const e=k();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function x(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function D(){try{return"object"===typeof indexedDB}catch(e){return!1}}function P(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const L="FirebaseError";class M extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=L,Object.setPrototypeOf(this,M.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,F.prototype.create)}}class F{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?U(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new M(i,o,n);return a}}function U(e,t){return e.replace(V,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}const V=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){return JSON.parse(e)}function $(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=j(d(s[0])||""),n=j(d(s[1])||""),r=s[2],i=n["d"]||{},delete n["d"]}catch(s){}return{header:t,claims:n,data:i,signature:r}},B=function(e){const t=q(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},z=function(e){const t=q(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function W(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function K(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function G(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function J(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(Q(n)&&Q(s)){if(!J(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Q(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Y(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function X(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function Z(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(i=c^o&(a^c),r=1518500249):(i=o^a^c,r=1859775393):u<60?(i=o&a|c&(o|a),r=2400959708):(i=o^a^c,r=3395469782);const e=(s<<5|s>>>27)+i+l+r+n[u]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;while(i<t){if(0===s)while(i<=n)this.compress_(e,i),i+=this.blockSize;if("string"===typeof e){while(i<t)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else while(i<t)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[i]>>t&255,++n;return e}}function te(e,t){const n=new ne(e,t);return n.subscribe.bind(n)}class ne{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=ie(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=re),void 0===i.error&&(i.error=re),void 0===i.complete&&(i.complete=re);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function ie(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function re(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oe=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,r(i<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(i)-56320;s=65536+(t<<10)+n}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},ae=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ce(e){return e&&e._delegate?e._delegate:e}},1718:function(e,t,n){"use strict";n.r(t),n.d(t,{afterMain:function(){return E},afterRead:function(){return v},afterWrite:function(){return I},applyStyles:function(){return P},arrow:function(){return oe},auto:function(){return a},basePlacements:function(){return c},beforeMain:function(){return w},beforeRead:function(){return _},beforeWrite:function(){return T},bottom:function(){return r},clippingParents:function(){return h},computeStyles:function(){return de},createPopper:function(){return lt},createPopperBase:function(){return at},createPopperLite:function(){return ht},detectOverflow:function(){return De},end:function(){return u},eventListeners:function(){return ge},flip:function(){return Fe},hide:function(){return $e},left:function(){return o},main:function(){return b},modifierPhases:function(){return S},offset:function(){return ze},placements:function(){return m},popper:function(){return f},popperGenerator:function(){return ot},popperOffsets:function(){return We},preventOverflow:function(){return Je},read:function(){return y},reference:function(){return p},right:function(){return s},start:function(){return l},top:function(){return i},variationPlacements:function(){return g},viewport:function(){return d},write:function(){return C}});var i="top",r="bottom",s="right",o="left",a="auto",c=[i,r,s,o],l="start",u="end",h="clippingParents",d="viewport",f="popper",p="reference",g=c.reduce((function(e,t){return e.concat([t+"-"+l,t+"-"+u])}),[]),m=[].concat(c,[a]).reduce((function(e,t){return e.concat([t,t+"-"+l,t+"-"+u])}),[]),_="beforeRead",y="read",v="afterRead",w="beforeMain",b="main",E="afterMain",T="beforeWrite",C="write",I="afterWrite",S=[_,y,v,w,b,E,T,C,I];function k(e){return e?(e.nodeName||"").toLowerCase():null}function A(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function N(e){var t=A(e).Element;return e instanceof t||e instanceof Element}function R(e){var t=A(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function O(e){if("undefined"===typeof ShadowRoot)return!1;var t=A(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function x(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},r=t.elements[e];R(r)&&k(r)&&(Object.assign(r.style,n),Object.keys(i).forEach((function(e){var t=i[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))}function D(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var i=t.elements[e],r=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]),o=s.reduce((function(e,t){return e[t]="",e}),{});R(i)&&k(i)&&(Object.assign(i.style,o),Object.keys(r).forEach((function(e){i.removeAttribute(e)})))}))}}var P={name:"applyStyles",enabled:!0,phase:"write",fn:x,effect:D,requires:["computeStyles"]};function L(e){return e.split("-")[0]}var M=Math.max,F=Math.min,U=Math.round;function V(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function j(){return!/^((?!chrome|android).)*safari/i.test(V())}function $(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var i=e.getBoundingClientRect(),r=1,s=1;t&&R(e)&&(r=e.offsetWidth>0&&U(i.width)/e.offsetWidth||1,s=e.offsetHeight>0&&U(i.height)/e.offsetHeight||1);var o=N(e)?A(e):window,a=o.visualViewport,c=!j()&&n,l=(i.left+(c&&a?a.offsetLeft:0))/r,u=(i.top+(c&&a?a.offsetTop:0))/s,h=i.width/r,d=i.height/s;return{width:h,height:d,top:u,right:l+h,bottom:u+d,left:l,x:l,y:u}}function q(e){var t=$(e),n=e.offsetWidth,i=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:i}}function B(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&O(n)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function z(e){return A(e).getComputedStyle(e)}function H(e){return["table","td","th"].indexOf(k(e))>=0}function W(e){return((N(e)?e.ownerDocument:e.document)||window.document).documentElement}function K(e){return"html"===k(e)?e:e.assignedSlot||e.parentNode||(O(e)?e.host:null)||W(e)}function G(e){return R(e)&&"fixed"!==z(e).position?e.offsetParent:null}function J(e){var t=/firefox/i.test(V()),n=/Trident/i.test(V());if(n&&R(e)){var i=z(e);if("fixed"===i.position)return null}var r=K(e);O(r)&&(r=r.host);while(R(r)&&["html","body"].indexOf(k(r))<0){var s=z(r);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||t&&"filter"===s.willChange||t&&s.filter&&"none"!==s.filter)return r;r=r.parentNode}return null}function Q(e){var t=A(e),n=G(e);while(n&&H(n)&&"static"===z(n).position)n=G(n);return n&&("html"===k(n)||"body"===k(n)&&"static"===z(n).position)?t:n||J(e)||t}function Y(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function X(e,t,n){return M(e,F(t,n))}function Z(e,t,n){var i=X(e,t,n);return i>n?n:i}function ee(){return{top:0,right:0,bottom:0,left:0}}function te(e){return Object.assign({},ee(),e)}function ne(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var ie=function(e,t){return e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,te("number"!==typeof e?e:ne(e,c))};function re(e){var t,n=e.state,a=e.name,c=e.options,l=n.elements.arrow,u=n.modifiersData.popperOffsets,h=L(n.placement),d=Y(h),f=[o,s].indexOf(h)>=0,p=f?"height":"width";if(l&&u){var g=ie(c.padding,n),m=q(l),_="y"===d?i:o,y="y"===d?r:s,v=n.rects.reference[p]+n.rects.reference[d]-u[d]-n.rects.popper[p],w=u[d]-n.rects.reference[d],b=Q(l),E=b?"y"===d?b.clientHeight||0:b.clientWidth||0:0,T=v/2-w/2,C=g[_],I=E-m[p]-g[y],S=E/2-m[p]/2+T,k=X(C,S,I),A=d;n.modifiersData[a]=(t={},t[A]=k,t.centerOffset=k-S,t)}}function se(e){var t=e.state,n=e.options,i=n.element,r=void 0===i?"[data-popper-arrow]":i;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r),r))&&B(t.elements.popper,r)&&(t.elements.arrow=r)}var oe={name:"arrow",enabled:!0,phase:"main",fn:re,effect:se,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ae(e){return e.split("-")[1]}var ce={top:"auto",right:"auto",bottom:"auto",left:"auto"};function le(e,t){var n=e.x,i=e.y,r=t.devicePixelRatio||1;return{x:U(n*r)/r||0,y:U(i*r)/r||0}}function ue(e){var t,n=e.popper,a=e.popperRect,c=e.placement,l=e.variation,h=e.offsets,d=e.position,f=e.gpuAcceleration,p=e.adaptive,g=e.roundOffsets,m=e.isFixed,_=h.x,y=void 0===_?0:_,v=h.y,w=void 0===v?0:v,b="function"===typeof g?g({x:y,y:w}):{x:y,y:w};y=b.x,w=b.y;var E=h.hasOwnProperty("x"),T=h.hasOwnProperty("y"),C=o,I=i,S=window;if(p){var k=Q(n),N="clientHeight",R="clientWidth";if(k===A(n)&&(k=W(n),"static"!==z(k).position&&"absolute"===d&&(N="scrollHeight",R="scrollWidth")),c===i||(c===o||c===s)&&l===u){I=r;var O=m&&k===S&&S.visualViewport?S.visualViewport.height:k[N];w-=O-a.height,w*=f?1:-1}if(c===o||(c===i||c===r)&&l===u){C=s;var x=m&&k===S&&S.visualViewport?S.visualViewport.width:k[R];y-=x-a.width,y*=f?1:-1}}var D,P=Object.assign({position:d},p&&ce),L=!0===g?le({x:y,y:w},A(n)):{x:y,y:w};return y=L.x,w=L.y,f?Object.assign({},P,(D={},D[I]=T?"0":"",D[C]=E?"0":"",D.transform=(S.devicePixelRatio||1)<=1?"translate("+y+"px, "+w+"px)":"translate3d("+y+"px, "+w+"px, 0)",D)):Object.assign({},P,(t={},t[I]=T?w+"px":"",t[C]=E?y+"px":"",t.transform="",t))}function he(e){var t=e.state,n=e.options,i=n.gpuAcceleration,r=void 0===i||i,s=n.adaptive,o=void 0===s||s,a=n.roundOffsets,c=void 0===a||a,l={placement:L(t.placement),variation:ae(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ue(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ue(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var de={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:he,data:{}},fe={passive:!0};function pe(e){var t=e.state,n=e.instance,i=e.options,r=i.scroll,s=void 0===r||r,o=i.resize,a=void 0===o||o,c=A(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&l.forEach((function(e){e.addEventListener("scroll",n.update,fe)})),a&&c.addEventListener("resize",n.update,fe),function(){s&&l.forEach((function(e){e.removeEventListener("scroll",n.update,fe)})),a&&c.removeEventListener("resize",n.update,fe)}}var ge={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:pe,data:{}},me=(n(7658),{left:"right",right:"left",bottom:"top",top:"bottom"});function _e(e){return e.replace(/left|right|bottom|top/g,(function(e){return me[e]}))}var ye={start:"end",end:"start"};function ve(e){return e.replace(/start|end/g,(function(e){return ye[e]}))}function we(e){var t=A(e),n=t.pageXOffset,i=t.pageYOffset;return{scrollLeft:n,scrollTop:i}}function be(e){return $(W(e)).left+we(e).scrollLeft}function Ee(e,t){var n=A(e),i=W(e),r=n.visualViewport,s=i.clientWidth,o=i.clientHeight,a=0,c=0;if(r){s=r.width,o=r.height;var l=j();(l||!l&&"fixed"===t)&&(a=r.offsetLeft,c=r.offsetTop)}return{width:s,height:o,x:a+be(e),y:c}}function Te(e){var t,n=W(e),i=we(e),r=null==(t=e.ownerDocument)?void 0:t.body,s=M(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=M(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-i.scrollLeft+be(e),c=-i.scrollTop;return"rtl"===z(r||n).direction&&(a+=M(n.clientWidth,r?r.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function Ce(e){var t=z(e),n=t.overflow,i=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+i)}function Ie(e){return["html","body","#document"].indexOf(k(e))>=0?e.ownerDocument.body:R(e)&&Ce(e)?e:Ie(K(e))}function Se(e,t){var n;void 0===t&&(t=[]);var i=Ie(e),r=i===(null==(n=e.ownerDocument)?void 0:n.body),s=A(i),o=r?[s].concat(s.visualViewport||[],Ce(i)?i:[]):i,a=t.concat(o);return r?a:a.concat(Se(K(o)))}function ke(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ae(e,t){var n=$(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Ne(e,t,n){return t===d?ke(Ee(e,n)):N(t)?Ae(t,n):ke(Te(W(e)))}function Re(e){var t=Se(K(e)),n=["absolute","fixed"].indexOf(z(e).position)>=0,i=n&&R(e)?Q(e):e;return N(i)?t.filter((function(e){return N(e)&&B(e,i)&&"body"!==k(e)})):[]}function Oe(e,t,n,i){var r="clippingParents"===t?Re(e):[].concat(t),s=[].concat(r,[n]),o=s[0],a=s.reduce((function(t,n){var r=Ne(e,n,i);return t.top=M(r.top,t.top),t.right=F(r.right,t.right),t.bottom=F(r.bottom,t.bottom),t.left=M(r.left,t.left),t}),Ne(e,o,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function xe(e){var t,n=e.reference,a=e.element,c=e.placement,h=c?L(c):null,d=c?ae(c):null,f=n.x+n.width/2-a.width/2,p=n.y+n.height/2-a.height/2;switch(h){case i:t={x:f,y:n.y-a.height};break;case r:t={x:f,y:n.y+n.height};break;case s:t={x:n.x+n.width,y:p};break;case o:t={x:n.x-a.width,y:p};break;default:t={x:n.x,y:n.y}}var g=h?Y(h):null;if(null!=g){var m="y"===g?"height":"width";switch(d){case l:t[g]=t[g]-(n[m]/2-a[m]/2);break;case u:t[g]=t[g]+(n[m]/2-a[m]/2);break;default:}}return t}function De(e,t){void 0===t&&(t={});var n=t,o=n.placement,a=void 0===o?e.placement:o,l=n.strategy,u=void 0===l?e.strategy:l,g=n.boundary,m=void 0===g?h:g,_=n.rootBoundary,y=void 0===_?d:_,v=n.elementContext,w=void 0===v?f:v,b=n.altBoundary,E=void 0!==b&&b,T=n.padding,C=void 0===T?0:T,I=te("number"!==typeof C?C:ne(C,c)),S=w===f?p:f,k=e.rects.popper,A=e.elements[E?S:w],R=Oe(N(A)?A:A.contextElement||W(e.elements.popper),m,y,u),O=$(e.elements.reference),x=xe({reference:O,element:k,strategy:"absolute",placement:a}),D=ke(Object.assign({},k,x)),P=w===f?D:O,L={top:R.top-P.top+I.top,bottom:P.bottom-R.bottom+I.bottom,left:R.left-P.left+I.left,right:P.right-R.right+I.right},M=e.modifiersData.offset;if(w===f&&M){var F=M[a];Object.keys(L).forEach((function(e){var t=[s,r].indexOf(e)>=0?1:-1,n=[i,r].indexOf(e)>=0?"y":"x";L[e]+=F[n]*t}))}return L}function Pe(e,t){void 0===t&&(t={});var n=t,i=n.placement,r=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,u=void 0===l?m:l,h=ae(i),d=h?a?g:g.filter((function(e){return ae(e)===h})):c,f=d.filter((function(e){return u.indexOf(e)>=0}));0===f.length&&(f=d);var p=f.reduce((function(t,n){return t[n]=De(e,{placement:n,boundary:r,rootBoundary:s,padding:o})[L(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}function Le(e){if(L(e)===a)return[];var t=_e(e);return[ve(e),t,ve(t)]}function Me(e){var t=e.state,n=e.options,c=e.name;if(!t.modifiersData[c]._skip){for(var u=n.mainAxis,h=void 0===u||u,d=n.altAxis,f=void 0===d||d,p=n.fallbackPlacements,g=n.padding,m=n.boundary,_=n.rootBoundary,y=n.altBoundary,v=n.flipVariations,w=void 0===v||v,b=n.allowedAutoPlacements,E=t.options.placement,T=L(E),C=T===E,I=p||(C||!w?[_e(E)]:Le(E)),S=[E].concat(I).reduce((function(e,n){return e.concat(L(n)===a?Pe(t,{placement:n,boundary:m,rootBoundary:_,padding:g,flipVariations:w,allowedAutoPlacements:b}):n)}),[]),k=t.rects.reference,A=t.rects.popper,N=new Map,R=!0,O=S[0],x=0;x<S.length;x++){var D=S[x],P=L(D),M=ae(D)===l,F=[i,r].indexOf(P)>=0,U=F?"width":"height",V=De(t,{placement:D,boundary:m,rootBoundary:_,altBoundary:y,padding:g}),j=F?M?s:o:M?r:i;k[U]>A[U]&&(j=_e(j));var $=_e(j),q=[];if(h&&q.push(V[P]<=0),f&&q.push(V[j]<=0,V[$]<=0),q.every((function(e){return e}))){O=D,R=!1;break}N.set(D,q)}if(R)for(var B=w?3:1,z=function(e){var t=S.find((function(t){var n=N.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return O=t,"break"},H=B;H>0;H--){var W=z(H);if("break"===W)break}t.placement!==O&&(t.modifiersData[c]._skip=!0,t.placement=O,t.reset=!0)}}var Fe={name:"flip",enabled:!0,phase:"main",fn:Me,requiresIfExists:["offset"],data:{_skip:!1}};function Ue(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Ve(e){return[i,s,r,o].some((function(t){return e[t]>=0}))}function je(e){var t=e.state,n=e.name,i=t.rects.reference,r=t.rects.popper,s=t.modifiersData.preventOverflow,o=De(t,{elementContext:"reference"}),a=De(t,{altBoundary:!0}),c=Ue(o,i),l=Ue(a,r,s),u=Ve(c),h=Ve(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}var $e={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:je};function qe(e,t,n){var r=L(e),a=[o,i].indexOf(r)>=0?-1:1,c="function"===typeof n?n(Object.assign({},t,{placement:e})):n,l=c[0],u=c[1];return l=l||0,u=(u||0)*a,[o,s].indexOf(r)>=0?{x:u,y:l}:{x:l,y:u}}function Be(e){var t=e.state,n=e.options,i=e.name,r=n.offset,s=void 0===r?[0,0]:r,o=m.reduce((function(e,n){return e[n]=qe(n,t.rects,s),e}),{}),a=o[t.placement],c=a.x,l=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[i]=o}var ze={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Be};function He(e){var t=e.state,n=e.name;t.modifiersData[n]=xe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var We={name:"popperOffsets",enabled:!0,phase:"read",fn:He,data:{}};function Ke(e){return"x"===e?"y":"x"}function Ge(e){var t=e.state,n=e.options,a=e.name,c=n.mainAxis,u=void 0===c||c,h=n.altAxis,d=void 0!==h&&h,f=n.boundary,p=n.rootBoundary,g=n.altBoundary,m=n.padding,_=n.tether,y=void 0===_||_,v=n.tetherOffset,w=void 0===v?0:v,b=De(t,{boundary:f,rootBoundary:p,padding:m,altBoundary:g}),E=L(t.placement),T=ae(t.placement),C=!T,I=Y(E),S=Ke(I),k=t.modifiersData.popperOffsets,A=t.rects.reference,N=t.rects.popper,R="function"===typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,O="number"===typeof R?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),x=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if(k){if(u){var P,U="y"===I?i:o,V="y"===I?r:s,j="y"===I?"height":"width",$=k[I],B=$+b[U],z=$-b[V],H=y?-N[j]/2:0,W=T===l?A[j]:N[j],K=T===l?-N[j]:-A[j],G=t.elements.arrow,J=y&&G?q(G):{width:0,height:0},te=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ee(),ne=te[U],ie=te[V],re=X(0,A[j],J[j]),se=C?A[j]/2-H-re-ne-O.mainAxis:W-re-ne-O.mainAxis,oe=C?-A[j]/2+H+re+ie+O.mainAxis:K+re+ie+O.mainAxis,ce=t.elements.arrow&&Q(t.elements.arrow),le=ce?"y"===I?ce.clientTop||0:ce.clientLeft||0:0,ue=null!=(P=null==x?void 0:x[I])?P:0,he=$+se-ue-le,de=$+oe-ue,fe=X(y?F(B,he):B,$,y?M(z,de):z);k[I]=fe,D[I]=fe-$}if(d){var pe,ge="x"===I?i:o,me="x"===I?r:s,_e=k[S],ye="y"===S?"height":"width",ve=_e+b[ge],we=_e-b[me],be=-1!==[i,o].indexOf(E),Ee=null!=(pe=null==x?void 0:x[S])?pe:0,Te=be?ve:_e-A[ye]-N[ye]-Ee+O.altAxis,Ce=be?_e+A[ye]+N[ye]-Ee-O.altAxis:we,Ie=y&&be?Z(Te,_e,Ce):X(y?Te:ve,_e,y?Ce:we);k[S]=Ie,D[S]=Ie-_e}t.modifiersData[a]=D}}var Je={name:"preventOverflow",enabled:!0,phase:"main",fn:Ge,requiresIfExists:["offset"]};function Qe(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Ye(e){return e!==A(e)&&R(e)?Qe(e):we(e)}function Xe(e){var t=e.getBoundingClientRect(),n=U(t.width)/e.offsetWidth||1,i=U(t.height)/e.offsetHeight||1;return 1!==n||1!==i}function Ze(e,t,n){void 0===n&&(n=!1);var i=R(t),r=R(t)&&Xe(t),s=W(t),o=$(e,r,n),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(i||!i&&!n)&&(("body"!==k(t)||Ce(s))&&(a=Ye(t)),R(t)?(c=$(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):s&&(c.x=be(s))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function et(e){var t=new Map,n=new Set,i=[];function r(e){n.add(e.name);var s=[].concat(e.requires||[],e.requiresIfExists||[]);s.forEach((function(e){if(!n.has(e)){var i=t.get(e);i&&r(i)}})),i.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),i}function tt(e){var t=et(e);return S.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function nt(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function it(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var rt={placement:"bottom",modifiers:[],strategy:"absolute"};function st(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function ot(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,i=void 0===n?[]:n,r=t.defaultOptions,s=void 0===r?rt:r;return function(e,t,n){void 0===n&&(n=s);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},rt,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],a=!1,c={state:r,setOptions:function(n){var o="function"===typeof n?n(r.options):n;u(),r.options=Object.assign({},s,r.options,o),r.scrollParents={reference:N(e)?Se(e):e.contextElement?Se(e.contextElement):[],popper:Se(t)};var a=tt(it([].concat(i,r.options.modifiers)));return r.orderedModifiers=a.filter((function(e){return e.enabled})),l(),c.update()},forceUpdate:function(){if(!a){var e=r.elements,t=e.reference,n=e.popper;if(st(t,n)){r.rects={reference:Ze(t,Q(n),"fixed"===r.options.strategy),popper:q(n)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(e){return r.modifiersData[e.name]=Object.assign({},e.data)}));for(var i=0;i<r.orderedModifiers.length;i++)if(!0!==r.reset){var s=r.orderedModifiers[i],o=s.fn,l=s.options,u=void 0===l?{}:l,h=s.name;"function"===typeof o&&(r=o({state:r,options:u,name:h,instance:c})||r)}else r.reset=!1,i=-1}}},update:nt((function(){return new Promise((function(e){c.forceUpdate(),e(r)}))})),destroy:function(){u(),a=!0}};if(!st(e,t))return c;function l(){r.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,i=void 0===n?{}:n,s=e.effect;if("function"===typeof s){var a=s({state:r,name:t,instance:c,options:i}),l=function(){};o.push(a||l)}}))}function u(){o.forEach((function(e){return e()})),o=[]}return c.setOptions(n).then((function(e){!a&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var at=ot(),ct=[ge,We,de,P,ze,Fe,Je,oe,$e],lt=ot({defaultModifiers:ct}),ut=[ge,We,de,P],ht=ot({defaultModifiers:ut})},4870:function(e,t,n){"use strict";n.d(t,{Bj:function(){return s},Fl:function(){return He},IU:function(){return Re},Jd:function(){return C},PG:function(){return Se},SU:function(){return $e},Um:function(){return Te},WL:function(){return Be},X$:function(){return A},X3:function(){return Ne},XI:function(){return Ue},Xl:function(){return Oe},dq:function(){return Me},iH:function(){return Fe},j:function(){return S},lk:function(){return I},nZ:function(){return a},qj:function(){return Ee},qq:function(){return w},yT:function(){return Ae}});n(7658);var i=n(7139);let r;class s{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=r,!e&&r&&(this.index=(r.scopes||(r.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=r;try{return r=this,e()}finally{r=t}}else 0}on(){r=this}off(){r=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function o(e,t=r){t&&t.active&&t.effects.push(e)}function a(){return r}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},l=e=>(e.w&g)>0,u=e=>(e.n&g)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=g},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const r=t[i];l(r)&&!u(r)?r.delete(e):t[n++]=r,r.w&=~g,r.n&=~g}t.length=n}},f=new WeakMap;let p=0,g=1;const m=30;let _;const y=Symbol(""),v=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=_,t=E;while(e){if(e===this)return;e=e.parent}try{return this.parent=_,_=this,E=!0,g=1<<++p,p<=m?h(this):b(this),this.fn()}finally{p<=m&&d(this),g=1<<--p,_=this.parent,E=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let E=!0;const T=[];function C(){T.push(E),E=!1}function I(){const e=T.pop();E=void 0===e||e}function S(e,t,n){if(E&&_){let t=f.get(e);t||f.set(e,t=new Map);let i=t.get(n);i||t.set(n,i=c());const r=void 0;k(i,r)}}function k(e,t){let n=!1;p<=m?u(e)||(e.n|=g,n=!l(e)):n=!e.has(_),n&&(e.add(_),_.deps.push(e))}function A(e,t,n,r,s,o){const a=f.get(e);if(!a)return;let l=[];if("clear"===t)l=[...a.values()];else if("length"===n&&(0,i.kJ)(e)){const e=Number(r);a.forEach(((t,n)=>{("length"===n||n>=e)&&l.push(t)}))}else switch(void 0!==n&&l.push(a.get(n)),t){case"add":(0,i.kJ)(e)?(0,i.S0)(n)&&l.push(a.get("length")):(l.push(a.get(y)),(0,i._N)(e)&&l.push(a.get(v)));break;case"delete":(0,i.kJ)(e)||(l.push(a.get(y)),(0,i._N)(e)&&l.push(a.get(v)));break;case"set":(0,i._N)(e)&&l.push(a.get(y));break}if(1===l.length)l[0]&&N(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);N(c(e))}}function N(e,t){const n=(0,i.kJ)(e)?e:[...e];for(const i of n)i.computed&&R(i,t);for(const i of n)i.computed||R(i,t)}function R(e,t){(e!==_||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const O=(0,i.fY)("__proto__,__v_isRef,__isVue"),x=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(i.yk)),D=V(),P=V(!1,!0),L=V(!0),M=F();function F(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Re(this);for(let t=0,r=this.length;t<r;t++)S(n,"get",t+"");const i=n[t](...e);return-1===i||!1===i?n[t](...e.map(Re)):i}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){C();const n=Re(this)[t].apply(this,e);return I(),n}})),e}function U(e){const t=Re(this);return S(t,"has",e),t.hasOwnProperty(e)}function V(e=!1,t=!1){return function(n,r,s){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_isShallow"===r)return t;if("__v_raw"===r&&s===(e?t?ve:ye:t?_e:me).get(n))return n;const o=(0,i.kJ)(n);if(!e){if(o&&(0,i.RI)(M,r))return Reflect.get(M,r,s);if("hasOwnProperty"===r)return U}const a=Reflect.get(n,r,s);return((0,i.yk)(r)?x.has(r):O(r))?a:(e||S(n,"get",r),t?a:Me(a)?o&&(0,i.S0)(r)?a:a.value:(0,i.Kn)(a)?e?Ce(a):Ee(a):a)}}const j=q(),$=q(!0);function q(e=!1){return function(t,n,r,s){let o=t[n];if(ke(o)&&Me(o)&&!Me(r))return!1;if(!e&&(Ae(r)||ke(r)||(o=Re(o),r=Re(r)),!(0,i.kJ)(t)&&Me(o)&&!Me(r)))return o.value=r,!0;const a=(0,i.kJ)(t)&&(0,i.S0)(n)?Number(n)<t.length:(0,i.RI)(t,n),c=Reflect.set(t,n,r,s);return t===Re(s)&&(a?(0,i.aU)(r,o)&&A(t,"set",n,r,o):A(t,"add",n,r)),c}}function B(e,t){const n=(0,i.RI)(e,t),r=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&A(e,"delete",t,void 0,r),s}function z(e,t){const n=Reflect.has(e,t);return(0,i.yk)(t)&&x.has(t)||S(e,"has",t),n}function H(e){return S(e,"iterate",(0,i.kJ)(e)?"length":y),Reflect.ownKeys(e)}const W={get:D,set:j,deleteProperty:B,has:z,ownKeys:H},K={get:L,set(e,t){return!0},deleteProperty(e,t){return!0}},G=(0,i.l7)({},W,{get:P,set:$}),J=e=>e,Q=e=>Reflect.getPrototypeOf(e);function Y(e,t,n=!1,i=!1){e=e["__v_raw"];const r=Re(e),s=Re(t);n||(t!==s&&S(r,"get",t),S(r,"get",s));const{has:o}=Q(r),a=i?J:n?De:xe;return o.call(r,t)?a(e.get(t)):o.call(r,s)?a(e.get(s)):void(e!==r&&e.get(t))}function X(e,t=!1){const n=this["__v_raw"],i=Re(n),r=Re(e);return t||(e!==r&&S(i,"has",e),S(i,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Z(e,t=!1){return e=e["__v_raw"],!t&&S(Re(e),"iterate",y),Reflect.get(e,"size",e)}function ee(e){e=Re(e);const t=Re(this),n=Q(t),i=n.has.call(t,e);return i||(t.add(e),A(t,"add",e,e)),this}function te(e,t){t=Re(t);const n=Re(this),{has:r,get:s}=Q(n);let o=r.call(n,e);o||(e=Re(e),o=r.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,i.aU)(t,a)&&A(n,"set",e,t,a):A(n,"add",e,t),this}function ne(e){const t=Re(this),{has:n,get:i}=Q(t);let r=n.call(t,e);r||(e=Re(e),r=n.call(t,e));const s=i?i.call(t,e):void 0,o=t.delete(e);return r&&A(t,"delete",e,void 0,s),o}function ie(){const e=Re(this),t=0!==e.size,n=void 0,i=e.clear();return t&&A(e,"clear",void 0,void 0,n),i}function re(e,t){return function(n,i){const r=this,s=r["__v_raw"],o=Re(s),a=t?J:e?De:xe;return!e&&S(o,"iterate",y),s.forEach(((e,t)=>n.call(i,a(e),a(t),r)))}}function se(e,t,n){return function(...r){const s=this["__v_raw"],o=Re(s),a=(0,i._N)(o),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=s[e](...r),h=n?J:t?De:xe;return!t&&S(o,"iterate",l?v:y),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function oe(e){return function(...t){return"delete"!==e&&this}}function ae(){const e={get(e){return Y(this,e)},get size(){return Z(this)},has:X,add:ee,set:te,delete:ne,clear:ie,forEach:re(!1,!1)},t={get(e){return Y(this,e,!1,!0)},get size(){return Z(this)},has:X,add:ee,set:te,delete:ne,clear:ie,forEach:re(!1,!0)},n={get(e){return Y(this,e,!0)},get size(){return Z(this,!0)},has(e){return X.call(this,e,!0)},add:oe("add"),set:oe("set"),delete:oe("delete"),clear:oe("clear"),forEach:re(!0,!1)},i={get(e){return Y(this,e,!0,!0)},get size(){return Z(this,!0)},has(e){return X.call(this,e,!0)},add:oe("add"),set:oe("set"),delete:oe("delete"),clear:oe("clear"),forEach:re(!0,!0)},r=["keys","values","entries",Symbol.iterator];return r.forEach((r=>{e[r]=se(r,!1,!1),n[r]=se(r,!0,!1),t[r]=se(r,!1,!0),i[r]=se(r,!0,!0)})),[e,n,t,i]}const[ce,le,ue,he]=ae();function de(e,t){const n=t?e?he:ue:e?le:ce;return(t,r,s)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get((0,i.RI)(n,r)&&r in t?n:t,r,s)}const fe={get:de(!1,!1)},pe={get:de(!1,!0)},ge={get:de(!0,!1)};const me=new WeakMap,_e=new WeakMap,ye=new WeakMap,ve=new WeakMap;function we(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function be(e){return e["__v_skip"]||!Object.isExtensible(e)?0:we((0,i.W7)(e))}function Ee(e){return ke(e)?e:Ie(e,!1,W,fe,me)}function Te(e){return Ie(e,!1,G,pe,_e)}function Ce(e){return Ie(e,!0,K,ge,ye)}function Ie(e,t,n,r,s){if(!(0,i.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=be(e);if(0===a)return e;const c=new Proxy(e,2===a?r:n);return s.set(e,c),c}function Se(e){return ke(e)?Se(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function ke(e){return!(!e||!e["__v_isReadonly"])}function Ae(e){return!(!e||!e["__v_isShallow"])}function Ne(e){return Se(e)||ke(e)}function Re(e){const t=e&&e["__v_raw"];return t?Re(t):e}function Oe(e){return(0,i.Nj)(e,"__v_skip",!0),e}const xe=e=>(0,i.Kn)(e)?Ee(e):e,De=e=>(0,i.Kn)(e)?Ce(e):e;function Pe(e){E&&_&&(e=Re(e),k(e.dep||(e.dep=c())))}function Le(e,t){e=Re(e);const n=e.dep;n&&N(n)}function Me(e){return!(!e||!0!==e.__v_isRef)}function Fe(e){return Ve(e,!1)}function Ue(e){return Ve(e,!0)}function Ve(e,t){return Me(e)?e:new je(e,t)}class je{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Re(e),this._value=t?e:xe(e)}get value(){return Pe(this),this._value}set value(e){const t=this.__v_isShallow||Ae(e)||ke(e);e=t?e:Re(e),(0,i.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:xe(e),Le(this,e))}}function $e(e){return Me(e)?e.value:e}const qe={get:(e,t,n)=>$e(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return Me(r)&&!Me(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function Be(e){return Se(e)?e:new Proxy(e,qe)}class ze{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this._dirty=!0,this.effect=new w(e,(()=>{this._dirty||(this._dirty=!0,Le(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!i,this["__v_isReadonly"]=n}get value(){const e=Re(this);return Pe(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function He(e,t,n=!1){let r,s;const o=(0,i.mf)(e);o?(r=e,s=i.dG):(r=e.get,s=e.set);const a=new ze(r,s,o||!s,n);return a}},3396:function(e,t,n){"use strict";n.d(t,{$d:function(){return o},Cn:function(){return M},FN:function(){return yn},Fl:function(){return Fn},HY:function(){return Mt},JJ:function(){return lt},Ko:function(){return Ue},P$:function(){return re},Q6:function(){return ue},U2:function(){return oe},Uk:function(){return on},Us:function(){return Rt},Wm:function(){return tn},Y3:function(){return y},Y8:function(){return ee},YP:function(){return K},_:function(){return en},aZ:function(){return he},bv:function(){return Ce},dD:function(){return L},f3:function(){return ut},h:function(){return Un},iD:function(){return Kt},ic:function(){return Se},j4:function(){return Gt},kq:function(){return cn},nJ:function(){return ne},nK:function(){return le},uE:function(){return an},up:function(){return Pe},w5:function(){return F},wg:function(){return qt},wy:function(){return X}});n(7658);var i=n(4870),r=n(7139);function s(e,t,n,i){let r;try{r=i?e(...i):e()}catch(s){a(s,t,n)}return r}function o(e,t,n,i){if((0,r.mf)(e)){const o=s(e,t,n,i);return o&&(0,r.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const c=[];for(let r=0;r<e.length;r++)c.push(o(e[r],t,n,i));return c}function a(e,t,n,i=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const r=t.proxy,o=n;while(i){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,r,o))return;i=i.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,r,o])}c(e,n,r,i)}function c(e,t,n,i=!0){console.error(e)}let l=!1,u=!1;const h=[];let d=0;const f=[];let p=null,g=0;const m=Promise.resolve();let _=null;function y(e){const t=_||m;return e?t.then(this?e.bind(this):e):t}function v(e){let t=d+1,n=h.length;while(t<n){const i=t+n>>>1,r=S(h[i]);r<e?t=i+1:n=i}return t}function w(e){h.length&&h.includes(e,l&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(v(e.id),0,e),b())}function b(){l||u||(u=!0,_=m.then(A))}function E(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function T(e){(0,r.kJ)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?g+1:g)||f.push(e),b()}function C(e,t=(l?d+1:0)){for(0;t<h.length;t++){const e=h[t];e&&e.pre&&(h.splice(t,1),t--,e())}}function I(e){if(f.length){const e=[...new Set(f)];if(f.length=0,p)return void p.push(...e);for(p=e,p.sort(((e,t)=>S(e)-S(t))),g=0;g<p.length;g++)p[g]();p=null,g=0}}const S=e=>null==e.id?1/0:e.id,k=(e,t)=>{const n=S(e)-S(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function A(e){u=!1,l=!0,h.sort(k);r.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,I(e),l=!1,_=null,(h.length||f.length)&&A(e)}}function N(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||r.kT;let s=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in i){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:o}=i[e]||r.kT;o&&(s=n.map((e=>(0,r.HD)(e)?e.trim():e))),t&&(s=n.map(r.h5))}let l;let u=i[l=(0,r.hR)(t)]||i[l=(0,r.hR)((0,r._A)(t))];!u&&a&&(u=i[l=(0,r.hR)((0,r.rs)(t))]),u&&o(u,e,6,s);const h=i[l+"Once"];if(h){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,o(h,e,6,s)}}function R(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,r.mf)(e)){const i=e=>{const n=R(e,t,!0);n&&(c=!0,(0,r.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return o||c?((0,r.kJ)(o)?o.forEach((e=>a[e]=null)):(0,r.l7)(a,o),(0,r.Kn)(e)&&i.set(e,a),a):((0,r.Kn)(e)&&i.set(e,null),null)}function O(e,t){return!(!e||!(0,r.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,r.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,r.RI)(e,(0,r.rs)(t))||(0,r.RI)(e,t))}let x=null,D=null;function P(e){const t=x;return x=e,D=e&&e.type.__scopeId||null,t}function L(e){D=e}function M(){D=null}function F(e,t=x,n){if(!t)return e;if(e._n)return e;const i=(...n)=>{i._d&&Ht(-1);const r=P(t);let s;try{s=e(...n)}finally{P(r),i._d&&Ht(1)}return s};return i._n=!0,i._c=!0,i._d=!0,i}function U(e){const{type:t,vnode:n,proxy:i,withProxy:s,props:o,propsOptions:[c],slots:l,attrs:u,emit:h,render:d,renderCache:f,data:p,setupState:g,ctx:m,inheritAttrs:_}=e;let y,v;const w=P(e);try{if(4&n.shapeFlag){const e=s||i;y=ln(d.call(e,e,f,o,g,p,m)),v=u}else{const e=t;0,y=ln(e.length>1?e(o,{attrs:u,slots:l,emit:h}):e(o,null)),v=t.props?u:V(u)}}catch(E){jt.length=0,a(E,e,1),y=tn(Ut)}let b=y;if(v&&!1!==_){const e=Object.keys(v),{shapeFlag:t}=b;e.length&&7&t&&(c&&e.some(r.tR)&&(v=j(v,c)),b=sn(b,v))}return n.dirs&&(b=sn(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),y=b,P(w),y}const V=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,r.F7)(n))&&((t||(t={}))[n]=e[n]);return t},j=(e,t)=>{const n={};for(const i in e)(0,r.tR)(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function $(e,t,n){const{props:i,children:r,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!r&&!a||a&&a.$stable)||i!==o&&(i?!o||q(i,o,l):!!o);if(1024&c)return!0;if(16&c)return i?q(i,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==i[n]&&!O(l,n))return!0}}return!1}function q(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!O(n,s))return!0}return!1}function B({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const z=e=>e.__isSuspense;function H(e,t){t&&t.pendingBranch?(0,r.kJ)(e)?t.effects.push(...e):t.effects.push(e):T(e)}const W={};function K(e,t,n){return G(e,t,n)}function G(e,t,{immediate:n,deep:a,flush:c,onTrack:l,onTrigger:u}=r.kT){var h;const d=(0,i.nZ)()===(null==(h=_n)?void 0:h.scope)?_n:null;let f,p,g=!1,m=!1;if((0,i.dq)(e)?(f=()=>e.value,g=(0,i.yT)(e)):(0,i.PG)(e)?(f=()=>e,a=!0):(0,r.kJ)(e)?(m=!0,g=e.some((e=>(0,i.PG)(e)||(0,i.yT)(e))),f=()=>e.map((e=>(0,i.dq)(e)?e.value:(0,i.PG)(e)?Y(e):(0,r.mf)(e)?s(e,d,2):void 0))):f=(0,r.mf)(e)?t?()=>s(e,d,2):()=>{if(!d||!d.isUnmounted)return p&&p(),o(e,d,3,[y])}:r.dG,t&&a){const e=f;f=()=>Y(e())}let _,y=e=>{p=T.onStop=()=>{s(e,d,4)}};if(kn){if(y=r.dG,t?n&&o(t,d,3,[f(),m?[]:void 0,y]):f(),"sync"!==c)return r.dG;{const e=jn();_=e.__watcherHandles||(e.__watcherHandles=[])}}let v=m?new Array(e.length).fill(W):W;const b=()=>{if(T.active)if(t){const e=T.run();(a||g||(m?e.some(((e,t)=>(0,r.aU)(e,v[t]))):(0,r.aU)(e,v)))&&(p&&p(),o(t,d,3,[e,v===W?void 0:m&&v[0]===W?[]:v,y]),v=e)}else T.run()};let E;b.allowRecurse=!!t,"sync"===c?E=b:"post"===c?E=()=>Nt(b,d&&d.suspense):(b.pre=!0,d&&(b.id=d.uid),E=()=>w(b));const T=new i.qq(f,E);t?n?b():v=T.run():"post"===c?Nt(T.run.bind(T),d&&d.suspense):T.run();const C=()=>{T.stop(),d&&d.scope&&(0,r.Od)(d.scope.effects,T)};return _&&_.push(C),C}function J(e,t,n){const i=this.proxy,s=(0,r.HD)(e)?e.includes(".")?Q(i,e):()=>i[e]:e.bind(i,i);let o;(0,r.mf)(t)?o=t:(o=t.handler,n=t);const a=_n;En(this);const c=G(s,o.bind(i),n);return a?En(a):Tn(),c}function Q(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Y(e,t){if(!(0,r.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,i.dq)(e))Y(e.value,t);else if((0,r.kJ)(e))for(let n=0;n<e.length;n++)Y(e[n],t);else if((0,r.DM)(e)||(0,r._N)(e))e.forEach((e=>{Y(e,t)}));else if((0,r.PO)(e))for(const n in e)Y(e[n],t);return e}function X(e,t){const n=x;if(null===n)return e;const i=Pn(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=r.kT]=t[o];e&&((0,r.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&Y(n),s.push({dir:e,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c}))}return e}function Z(e,t,n,r){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const l=s[c];a&&(l.oldValue=a[c].value);let u=l.dir[r];u&&((0,i.Jd)(),o(u,n,8,[e.el,l,e,t]),(0,i.lk)())}}function ee(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ce((()=>{e.isMounted=!0})),ke((()=>{e.isUnmounting=!0})),e}const te=[Function,Array],ne={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:te,onEnter:te,onAfterEnter:te,onEnterCancelled:te,onBeforeLeave:te,onLeave:te,onAfterLeave:te,onLeaveCancelled:te,onBeforeAppear:te,onAppear:te,onAfterAppear:te,onAppearCancelled:te},ie={name:"BaseTransition",props:ne,setup(e,{slots:t}){const n=yn(),r=ee();let s;return()=>{const o=t.default&&ue(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==Ut){0,a=t,e=!0;break}}const c=(0,i.IU)(e),{mode:l}=c;if(r.isLeaving)return ae(a);const u=ce(a);if(!u)return ae(a);const h=oe(u,c,r,n);le(u,h);const d=n.subTree,f=d&&ce(d);let p=!1;const{getTransitionKey:g}=u.type;if(g){const e=g();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==Ut&&(!Qt(u,f)||p)){const e=oe(f,c,r,n);if(le(f,e),"out-in"===l)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,!1!==n.update.active&&n.update()},ae(a);"in-out"===l&&u.type!==Ut&&(e.delayLeave=(e,t,n)=>{const i=se(r,f);i[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},re=ie;function se(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function oe(e,t,n,i){const{appear:s,mode:a,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:_,onAppear:y,onAfterAppear:v,onAppearCancelled:w}=t,b=String(e.key),E=se(n,e),T=(e,t)=>{e&&o(e,i,9,t)},C=(e,t)=>{const n=t[1];T(e,t),(0,r.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},I={mode:a,persisted:c,beforeEnter(t){let i=l;if(!n.isMounted){if(!s)return;i=_||l}t._leaveCb&&t._leaveCb(!0);const r=E[b];r&&Qt(e,r)&&r.el._leaveCb&&r.el._leaveCb(),T(i,[t])},enter(e){let t=u,i=h,r=d;if(!n.isMounted){if(!s)return;t=y||u,i=v||h,r=w||d}let o=!1;const a=e._enterCb=t=>{o||(o=!0,T(t?r:i,[e]),I.delayedLeave&&I.delayedLeave(),e._enterCb=void 0)};t?C(t,[e,a]):a()},leave(t,i){const r=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return i();T(f,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,i(),T(n?m:g,[t]),t._leaveCb=void 0,E[r]===e&&delete E[r])};E[r]=e,p?C(p,[t,o]):o()},clone(e){return oe(e,t,n,i)}};return I}function ae(e){if(fe(e))return e=sn(e),e.children=null,e}function ce(e){return fe(e)?e.children?e.children[0]:void 0:e}function le(e,t){6&e.shapeFlag&&e.component?le(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ue(e,t=!1,n){let i=[],r=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Mt?(128&o.patchFlag&&r++,i=i.concat(ue(o.children,t,a))):(t||o.type!==Ut)&&i.push(null!=a?sn(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function he(e,t){return(0,r.mf)(e)?(()=>(0,r.l7)({name:e.name},t,{setup:e}))():e}const de=e=>!!e.type.__asyncLoader;const fe=e=>e.type.__isKeepAlive;RegExp,RegExp;function pe(e,t){return(0,r.kJ)(e)?e.some((e=>pe(e,t))):(0,r.HD)(e)?e.split(",").includes(t):!!(0,r.Kj)(e)&&e.test(t)}function ge(e,t){_e(e,"a",t)}function me(e,t){_e(e,"da",t)}function _e(e,t,n=_n){const i=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(be(t,i,n),n){let e=n.parent;while(e&&e.parent)fe(e.parent.vnode)&&ye(i,t,n,e),e=e.parent}}function ye(e,t,n,i){const s=be(t,e,i,!0);Ae((()=>{(0,r.Od)(i[t],s)}),n)}function ve(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function we(e){return 128&e.shapeFlag?e.ssContent:e}function be(e,t,n=_n,r=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;(0,i.Jd)(),En(n);const s=o(t,n,e,r);return Tn(),(0,i.lk)(),s});return r?s.unshift(a):s.push(a),a}}const Ee=e=>(t,n=_n)=>(!kn||"sp"===e)&&be(e,((...e)=>t(...e)),n),Te=Ee("bm"),Ce=Ee("m"),Ie=Ee("bu"),Se=Ee("u"),ke=Ee("bum"),Ae=Ee("um"),Ne=Ee("sp"),Re=Ee("rtg"),Oe=Ee("rtc");function xe(e,t=_n){be("ec",e,t)}const De="components";function Pe(e,t){return Me(De,e,!0,t)||e}const Le=Symbol.for("v-ndc");function Me(e,t,n=!0,i=!1){const s=x||_n;if(s){const n=s.type;if(e===De){const e=Ln(n,!1);if(e&&(e===t||e===(0,r._A)(t)||e===(0,r.kC)((0,r._A)(t))))return n}const o=Fe(s[e]||n[e],t)||Fe(s.appContext[e],t);return!o&&i?n:o}}function Fe(e,t){return e&&(e[t]||e[(0,r._A)(t)]||e[(0,r.kC)((0,r._A)(t))])}function Ue(e,t,n,i){let s;const o=n&&n[i];if((0,r.kJ)(e)||(0,r.HD)(e)){s=new Array(e.length);for(let n=0,i=e.length;n<i;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,r.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let i=0,r=n.length;i<r;i++){const r=n[i];s[i]=t(e[r],r,i,o&&o[i])}}else s=[];return n&&(n[i]=s),s}const Ve=e=>e?Cn(e)?Pn(e)||e.proxy:Ve(e.parent):null,je=(0,r.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ve(e.parent),$root:e=>Ve(e.root),$emit:e=>e.emit,$options:e=>Je(e),$forceUpdate:e=>e.f||(e.f=()=>w(e.update)),$nextTick:e=>e.n||(e.n=y.bind(e.proxy)),$watch:e=>J.bind(e)}),$e=(e,t)=>e!==r.kT&&!e.__isScriptSetup&&(0,r.RI)(e,t),qe={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:l,appContext:u}=e;let h;if("$"!==t[0]){const i=c[t];if(void 0!==i)switch(i){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if($e(s,t))return c[t]=1,s[t];if(o!==r.kT&&(0,r.RI)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,r.RI)(h,t))return c[t]=3,a[t];if(n!==r.kT&&(0,r.RI)(n,t))return c[t]=4,n[t];ze&&(c[t]=0)}}const d=je[t];let f,p;return d?("$attrs"===t&&(0,i.j)(e,"get",t),d(e)):(f=l.__cssModules)&&(f=f[t])?f:n!==r.kT&&(0,r.RI)(n,t)?(c[t]=4,n[t]):(p=u.config.globalProperties,(0,r.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:i,setupState:s,ctx:o}=e;return $e(s,t)?(s[t]=n,!0):i!==r.kT&&(0,r.RI)(i,t)?(i[t]=n,!0):!(0,r.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==r.kT&&(0,r.RI)(e,a)||$e(t,a)||(c=o[0])&&(0,r.RI)(c,a)||(0,r.RI)(i,a)||(0,r.RI)(je,a)||(0,r.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,r.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Be(e){return(0,r.kJ)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let ze=!0;function He(e){const t=Je(e),n=e.proxy,s=e.ctx;ze=!1,t.beforeCreate&&Ke(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:l,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:_,deactivated:y,beforeDestroy:v,beforeUnmount:w,destroyed:b,unmounted:E,render:T,renderTracked:C,renderTriggered:I,errorCaptured:S,serverPrefetch:k,expose:A,inheritAttrs:N,components:R,directives:O,filters:x}=t,D=null;if(h&&We(h,s,D),c)for(const i in c){const e=c[i];(0,r.mf)(e)&&(s[i]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,r.Kn)(t)&&(e.data=(0,i.qj)(t))}if(ze=!0,a)for(const i in a){const e=a[i],t=(0,r.mf)(e)?e.bind(n,n):(0,r.mf)(e.get)?e.get.bind(n,n):r.dG;0;const o=!(0,r.mf)(e)&&(0,r.mf)(e.set)?e.set.bind(n):r.dG,c=Fn({get:t,set:o});Object.defineProperty(s,i,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(l)for(const i in l)Ge(l[i],s,n,i);if(u){const e=(0,r.mf)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{lt(t,e[t])}))}function P(e,t){(0,r.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Ke(d,e,"c"),P(Te,f),P(Ce,p),P(Ie,g),P(Se,m),P(ge,_),P(me,y),P(xe,S),P(Oe,C),P(Re,I),P(ke,w),P(Ae,E),P(Ne,k),(0,r.kJ)(A))if(A.length){const t=e.exposed||(e.exposed={});A.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===r.dG&&(e.render=T),null!=N&&(e.inheritAttrs=N),R&&(e.components=R),O&&(e.directives=O)}function We(e,t,n=r.dG){(0,r.kJ)(e)&&(e=et(e));for(const s in e){const n=e[s];let o;o=(0,r.Kn)(n)?"default"in n?ut(n.from||s,n.default,!0):ut(n.from||s):ut(n),(0,i.dq)(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function Ke(e,t,n){o((0,r.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Ge(e,t,n,i){const s=i.includes(".")?Q(n,i):()=>n[i];if((0,r.HD)(e)){const n=t[e];(0,r.mf)(n)&&K(s,n)}else if((0,r.mf)(e))K(s,e.bind(n));else if((0,r.Kn)(e))if((0,r.kJ)(e))e.forEach((e=>Ge(e,t,n,i)));else{const i=(0,r.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,r.mf)(i)&&K(s,i,e)}else 0}function Je(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let l;return c?l=c:s.length||n||i?(l={},s.length&&s.forEach((e=>Qe(l,e,a,!0))),Qe(l,t,a)):l=t,(0,r.Kn)(t)&&o.set(t,l),l}function Qe(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&Qe(e,s,n,!0),r&&r.forEach((t=>Qe(e,t,n,!0)));for(const o in t)if(i&&"expose"===o);else{const i=Ye[o]||n&&n[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const Ye={data:Xe,props:it,emits:it,methods:nt,computed:nt,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:nt,directives:nt,watch:rt,provide:Xe,inject:Ze};function Xe(e,t){return t?e?function(){return(0,r.l7)((0,r.mf)(e)?e.call(this,this):e,(0,r.mf)(t)?t.call(this,this):t)}:t:e}function Ze(e,t){return nt(et(e),et(t))}function et(e){if((0,r.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function tt(e,t){return e?[...new Set([].concat(e,t))]:t}function nt(e,t){return e?(0,r.l7)(Object.create(null),e,t):t}function it(e,t){return e?(0,r.kJ)(e)&&(0,r.kJ)(t)?[...new Set([...e,...t])]:(0,r.l7)(Object.create(null),Be(e),Be(null!=t?t:{})):t}function rt(e,t){if(!e)return t;if(!t)return e;const n=(0,r.l7)(Object.create(null),e);for(const i in t)n[i]=tt(e[i],t[i]);return n}function st(){return{app:null,config:{isNativeTag:r.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ot=0;function at(e,t){return function(n,i=null){(0,r.mf)(n)||(n=(0,r.l7)({},n)),null==i||(0,r.Kn)(i)||(i=null);const s=st();const o=new Set;let a=!1;const c=s.app={_uid:ot++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:$n,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,r.mf)(e.install)?(o.add(e),e.install(c,...t)):(0,r.mf)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(r,o,l){if(!a){0;const u=tn(n,i);return u.appContext=s,o&&t?t(u,r):e(u,r,l),a=!0,c._container=r,r.__vue_app__=c,Pn(u.component)||u.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c},runWithContext(e){ct=c;try{return e()}finally{ct=null}}};return c}}let ct=null;function lt(e,t){if(_n){let n=_n.provides;const i=_n.parent&&_n.parent.provides;i===n&&(n=_n.provides=Object.create(i)),n[e]=t}else 0}function ut(e,t,n=!1){const i=_n||x;if(i||ct){const s=i?null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:ct._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,r.mf)(t)?t.call(i&&i.proxy):t}else 0}function ht(e,t,n,s=!1){const o={},a={};(0,r.Nj)(a,Yt,1),e.propsDefaults=Object.create(null),ft(e,t,o,a);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:(0,i.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function dt(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,l=(0,i.IU)(o),[u]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let i;ft(e,t,o,a)&&(h=!0);for(const s in l)t&&((0,r.RI)(t,s)||(i=(0,r.rs)(s))!==s&&(0,r.RI)(t,i))||(u?!n||void 0===n[s]&&void 0===n[i]||(o[s]=pt(u,l,s,void 0,e,!0)):delete o[s]);if(a!==l)for(const e in a)t&&(0,r.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let s=n[i];if(O(e.emitsOptions,s))continue;const c=t[s];if(u)if((0,r.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,r._A)(s);o[t]=pt(u,l,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,i.X$)(e,"set","$attrs")}function ft(e,t,n,s){const[o,a]=e.propsOptions;let c,l=!1;if(t)for(let i in t){if((0,r.Gg)(i))continue;const u=t[i];let h;o&&(0,r.RI)(o,h=(0,r._A)(i))?a&&a.includes(h)?(c||(c={}))[h]=u:n[h]=u:O(e.emitsOptions,i)||i in s&&u===s[i]||(s[i]=u,l=!0)}if(a){const t=(0,i.IU)(n),s=c||r.kT;for(let i=0;i<a.length;i++){const c=a[i];n[c]=pt(o,t,c,s[c],e,!(0,r.RI)(s,c))}}return l}function pt(e,t,n,i,s,o){const a=e[n];if(null!=a){const e=(0,r.RI)(a,"default");if(e&&void 0===i){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,r.mf)(e)){const{propsDefaults:r}=s;n in r?i=r[n]:(En(s),i=r[n]=e.call(null,t),Tn())}else i=e}a[0]&&(o&&!e?i=!1:!a[1]||""!==i&&i!==(0,r.rs)(n)||(i=!0))}return i}function gt(e,t,n=!1){const i=t.propsCache,s=i.get(e);if(s)return s;const o=e.props,a={},c=[];let l=!1;if(!(0,r.mf)(e)){const i=e=>{l=!0;const[n,i]=gt(e,t,!0);(0,r.l7)(a,n),i&&c.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!o&&!l)return(0,r.Kn)(e)&&i.set(e,r.Z6),r.Z6;if((0,r.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,r._A)(o[h]);mt(e)&&(a[e]=r.kT)}else if(o){0;for(const e in o){const t=(0,r._A)(e);if(mt(t)){const n=o[e],i=a[t]=(0,r.kJ)(n)||(0,r.mf)(n)?{type:n}:(0,r.l7)({},n);if(i){const e=vt(Boolean,i.type),n=vt(String,i.type);i[0]=e>-1,i[1]=n<0||e<n,(e>-1||(0,r.RI)(i,"default"))&&c.push(t)}}}}const u=[a,c];return(0,r.Kn)(e)&&i.set(e,u),u}function mt(e){return"$"!==e[0]}function _t(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function yt(e,t){return _t(e)===_t(t)}function vt(e,t){return(0,r.kJ)(t)?t.findIndex((t=>yt(t,e))):(0,r.mf)(t)&&yt(t,e)?0:-1}const wt=e=>"_"===e[0]||"$stable"===e,bt=e=>(0,r.kJ)(e)?e.map(ln):[ln(e)],Et=(e,t,n)=>{if(t._n)return t;const i=F(((...e)=>bt(t(...e))),n);return i._c=!1,i},Tt=(e,t,n)=>{const i=e._ctx;for(const s in e){if(wt(s))continue;const n=e[s];if((0,r.mf)(n))t[s]=Et(s,n,i);else if(null!=n){0;const e=bt(n);t[s]=()=>e}}},Ct=(e,t)=>{const n=bt(t);e.slots.default=()=>n},It=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,i.IU)(t),(0,r.Nj)(t,"_",n)):Tt(t,e.slots={})}else e.slots={},t&&Ct(e,t);(0,r.Nj)(e.slots,Yt,1)},St=(e,t,n)=>{const{vnode:i,slots:s}=e;let o=!0,a=r.kT;if(32&i.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,r.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,Tt(t,s)),a=t}else t&&(Ct(e,t),a={default:1});if(o)for(const r in s)wt(r)||r in a||delete s[r]};function kt(e,t,n,o,a=!1){if((0,r.kJ)(e))return void e.forEach(((e,i)=>kt(e,t&&((0,r.kJ)(t)?t[i]:t),n,o,a)));if(de(o)&&!a)return;const c=4&o.shapeFlag?Pn(o.component)||o.component.proxy:o.el,l=a?null:c,{i:u,r:h}=e;const d=t&&t.r,f=u.refs===r.kT?u.refs={}:u.refs,p=u.setupState;if(null!=d&&d!==h&&((0,r.HD)(d)?(f[d]=null,(0,r.RI)(p,d)&&(p[d]=null)):(0,i.dq)(d)&&(d.value=null)),(0,r.mf)(h))s(h,u,12,[l,f]);else{const t=(0,r.HD)(h),s=(0,i.dq)(h);if(t||s){const i=()=>{if(e.f){const n=t?(0,r.RI)(p,h)?p[h]:f[h]:h.value;a?(0,r.kJ)(n)&&(0,r.Od)(n,c):(0,r.kJ)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,r.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=l,(0,r.RI)(p,h)&&(p[h]=l)):s&&(h.value=l,e.k&&(f[e.k]=l))};l?(i.id=-1,Nt(i,n)):i()}else 0}}function At(){}const Nt=H;function Rt(e){return Ot(e)}function Ot(e,t){At();const n=(0,r.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=r.dG,insertStaticContent:m}=e,_=(e,t,n,i=null,r=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Qt(e,t)&&(i=X(e),K(e,r,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case Ft:y(e,t,n,i);break;case Ut:v(e,t,n,i);break;case Vt:null==e&&b(t,n,i,o);break;case Mt:P(e,t,n,i,r,s,o,a,c);break;default:1&h?k(e,t,n,i,r,s,o,a,c):6&h?L(e,t,n,i,r,s,o,a,c):(64&h||128&h)&&l.process(e,t,n,i,r,s,o,a,c,te)}null!=u&&r&&kt(u,e&&e.ref,s,t||e,!t)},y=(e,t,n,i)=>{if(null==e)s(t.el=l(t.children),n,i);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},v=(e,t,n,i)=>{null==e?s(t.el=u(t.children||""),n,i):t.el=e.el},b=(e,t,n,i)=>{[e.el,e.anchor]=m(e.children,t,n,i,e.el,e.anchor)},T=({el:e,anchor:t},n,i)=>{let r;while(e&&e!==t)r=p(e),s(e,n,i),e=r;s(t,n,i)},S=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},k=(e,t,n,i,r,s,o,a,c)=>{o=o||"svg"===t.type,null==e?A(t,n,i,r,s,o,a,c):O(e,t,r,s,o,a,c)},A=(e,t,n,i,o,l,u,h)=>{let f,p;const{type:g,props:m,shapeFlag:_,transition:y,dirs:v}=e;if(f=e.el=c(e.type,l,m&&m.is,m),8&_?d(f,e.children):16&_&&R(e.children,f,null,i,o,l&&"foreignObject"!==g,u,h),v&&Z(e,null,i,"created"),N(f,e,e.scopeId,u,i),m){for(const t in m)"value"===t||(0,r.Gg)(t)||a(f,t,null,m[t],l,e.children,i,o,Y);"value"in m&&a(f,"value",null,m.value),(p=m.onVnodeBeforeMount)&&fn(p,i,e)}v&&Z(e,null,i,"beforeMount");const w=(!o||o&&!o.pendingBranch)&&y&&!y.persisted;w&&y.beforeEnter(f),s(f,t,n),((p=m&&m.onVnodeMounted)||w||v)&&Nt((()=>{p&&fn(p,i,e),w&&y.enter(f),v&&Z(e,null,i,"mounted")}),o)},N=(e,t,n,i,r)=>{if(n&&g(e,n),i)for(let s=0;s<i.length;s++)g(e,i[s]);if(r){let n=r.subTree;if(t===n){const t=r.vnode;N(e,t,t.scopeId,t.slotScopeIds,r.parent)}}},R=(e,t,n,i,r,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?un(e[l]):ln(e[l]);_(null,c,t,n,i,r,s,o,a)}},O=(e,t,n,i,s,o,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||r.kT,g=t.props||r.kT;let m;n&&xt(n,!1),(m=g.onVnodeBeforeUpdate)&&fn(m,n,t,e),f&&Z(t,e,n,"beforeUpdate"),n&&xt(n,!0);const _=s&&"foreignObject"!==t.type;if(h?x(e.dynamicChildren,h,l,n,i,_,o):c||q(e,t,l,null,n,i,_,o,!1),u>0){if(16&u)D(l,t,p,g,n,i,s);else if(2&u&&p.class!==g.class&&a(l,"class",null,g.class,s),4&u&&a(l,"style",p.style,g.style,s),8&u){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const o=r[t],c=p[o],u=g[o];u===c&&"value"!==o||a(l,o,c,u,s,e.children,n,i,Y)}}1&u&&e.children!==t.children&&d(l,t.children)}else c||null!=h||D(l,t,p,g,n,i,s);((m=g.onVnodeUpdated)||f)&&Nt((()=>{m&&fn(m,n,t,e),f&&Z(t,e,n,"updated")}),i)},x=(e,t,n,i,r,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===Mt||!Qt(c,l)||70&c.shapeFlag)?f(c.el):n;_(c,l,u,null,i,r,s,o,!0)}},D=(e,t,n,i,s,o,c)=>{if(n!==i){if(n!==r.kT)for(const l in n)(0,r.Gg)(l)||l in i||a(e,l,n[l],null,c,t.children,s,o,Y);for(const l in i){if((0,r.Gg)(l))continue;const u=i[l],h=n[l];u!==h&&"value"!==l&&a(e,l,h,u,c,t.children,s,o,Y)}"value"in i&&a(e,"value",n.value,i.value)}},P=(e,t,n,i,r,o,a,c,u)=>{const h=t.el=e?e.el:l(""),d=t.anchor=e?e.anchor:l("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;g&&(c=c?c.concat(g):g),null==e?(s(h,n,i),s(d,n,i),R(t.children,n,d,r,o,a,c,u)):f>0&&64&f&&p&&e.dynamicChildren?(x(e.dynamicChildren,p,n,r,o,a,c),(null!=t.key||r&&t===r.subTree)&&Dt(e,t,!0)):q(e,t,n,d,r,o,a,c,u)},L=(e,t,n,i,r,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?r.ctx.activate(t,n,i,o,c):M(t,n,i,r,s,o,c):F(e,t,c)},M=(e,t,n,i,r,s,o)=>{const a=e.component=mn(e,i,r);if(fe(e)&&(a.ctx.renderer=te),An(a),a.asyncDep){if(r&&r.registerDep(a,V),!e.el){const e=a.subTree=tn(Ut);v(null,e,t,n)}}else V(a,e,t,n,r,s,o)},F=(e,t,n)=>{const i=t.component=e.component;if($(e,t,n)){if(i.asyncDep&&!i.asyncResolved)return void j(i,t,n);i.next=t,E(i.update),i.update()}else t.el=e.el,i.vnode=t},V=(e,t,n,s,o,a,c)=>{const l=()=>{if(e.isMounted){let t,{next:n,bu:i,u:s,parent:l,vnode:u}=e,h=n;0,xt(e,!1),n?(n.el=u.el,j(e,n,c)):n=u,i&&(0,r.ir)(i),(t=n.props&&n.props.onVnodeBeforeUpdate)&&fn(t,l,n,u),xt(e,!0);const d=U(e);0;const p=e.subTree;e.subTree=d,_(p,d,f(p.el),X(p),e,o,a),n.el=d.el,null===h&&B(e,d.el),s&&Nt(s,o),(t=n.props&&n.props.onVnodeUpdated)&&Nt((()=>fn(t,l,n,u)),o)}else{let i;const{el:c,props:l}=t,{bm:u,m:h,parent:d}=e,f=de(t);if(xt(e,!1),u&&(0,r.ir)(u),!f&&(i=l&&l.onVnodeBeforeMount)&&fn(i,d,t),xt(e,!0),c&&ie){const n=()=>{e.subTree=U(e),ie(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const i=e.subTree=U(e);0,_(null,i,n,s,e,o,a),t.el=i.el}if(h&&Nt(h,o),!f&&(i=l&&l.onVnodeMounted)){const e=t;Nt((()=>fn(i,d,e)),o)}(256&t.shapeFlag||d&&de(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&Nt(e.a,o),e.isMounted=!0,t=n=s=null}},u=e.effect=new i.qq(l,(()=>w(h)),e.scope),h=e.update=()=>u.run();h.id=e.uid,xt(e,!0),h()},j=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,dt(e,t.props,r,n),St(e,t.children,n),(0,i.Jd)(),C(),(0,i.lk)()},q=(e,t,n,i,r,s,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void H(l,h,n,i,r,s,o,a,c);if(256&f)return void z(l,h,n,i,r,s,o,a,c)}8&p?(16&u&&Y(l,r,s),h!==l&&d(n,h)):16&u?16&p?H(l,h,n,i,r,s,o,a,c):Y(l,r,s,!0):(8&u&&d(n,""),16&p&&R(h,n,i,r,s,o,a,c))},z=(e,t,n,i,s,o,a,c,l)=>{e=e||r.Z6,t=t||r.Z6;const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const i=t[f]=l?un(t[f]):ln(t[f]);_(e[f],i,n,null,s,o,a,c,l)}u>h?Y(e,s,o,!0,!1,d):R(t,n,i,s,o,a,c,l,d)},H=(e,t,n,i,s,o,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const i=e[u],r=t[u]=l?un(t[u]):ln(t[u]);if(!Qt(i,r))break;_(i,r,n,null,s,o,a,c,l),u++}while(u<=d&&u<=f){const i=e[d],r=t[f]=l?un(t[f]):ln(t[f]);if(!Qt(i,r))break;_(i,r,n,null,s,o,a,c,l),d--,f--}if(u>d){if(u<=f){const e=f+1,r=e<h?t[e].el:i;while(u<=f)_(null,t[u]=l?un(t[u]):ln(t[u]),n,r,s,o,a,c,l),u++}}else if(u>f)while(u<=d)K(e[u],s,o,!0),u++;else{const p=u,g=u,m=new Map;for(u=g;u<=f;u++){const e=t[u]=l?un(t[u]):ln(t[u]);null!=e.key&&m.set(e.key,u)}let y,v=0;const w=f-g+1;let b=!1,E=0;const T=new Array(w);for(u=0;u<w;u++)T[u]=0;for(u=p;u<=d;u++){const i=e[u];if(v>=w){K(i,s,o,!0);continue}let r;if(null!=i.key)r=m.get(i.key);else for(y=g;y<=f;y++)if(0===T[y-g]&&Qt(i,t[y])){r=y;break}void 0===r?K(i,s,o,!0):(T[r-g]=u+1,r>=E?E=r:b=!0,_(i,t[r],n,null,s,o,a,c,l),v++)}const C=b?Pt(T):r.Z6;for(y=C.length-1,u=w-1;u>=0;u--){const e=g+u,r=t[e],d=e+1<h?t[e+1].el:i;0===T[u]?_(null,r,n,d,s,o,a,c,l):b&&(y<0||u!==C[y]?W(r,n,d,2):y--)}}},W=(e,t,n,i,r=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void W(e.component.subTree,t,n,i);if(128&u)return void e.suspense.move(t,n,i);if(64&u)return void a.move(e,t,n,te);if(a===Mt){s(o,t,n);for(let e=0;e<l.length;e++)W(l[e],t,n,i);return void s(e.anchor,t,n)}if(a===Vt)return void T(e,t,n);const h=2!==i&&1&u&&c;if(h)if(0===i)c.beforeEnter(o),s(o,t,n),Nt((()=>c.enter(o)),r);else{const{leave:e,delayLeave:i,afterLeave:r}=c,a=()=>s(o,t,n),l=()=>{e(o,(()=>{a(),r&&r()}))};i?i(o,a,l):l()}else s(o,t,n)},K=(e,t,n,i=!1,r=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&kt(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,p=!de(e);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&fn(g,t,e),6&u)Q(e.component,n,i);else{if(128&u)return void e.suspense.unmount(n,i);f&&Z(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,r,te,i):l&&(s!==Mt||h>0&&64&h)?Y(l,t,n,!1,!0):(s===Mt&&384&h||!r&&16&u)&&Y(c,t,n),i&&G(e)}(p&&(g=o&&o.onVnodeUnmounted)||f)&&Nt((()=>{g&&fn(g,t,e),f&&Z(e,null,t,"unmounted")}),n)},G=e=>{const{type:t,el:n,anchor:i,transition:r}=e;if(t===Mt)return void J(n,i);if(t===Vt)return void S(e);const s=()=>{o(n),r&&!r.persisted&&r.afterLeave&&r.afterLeave()};if(1&e.shapeFlag&&r&&!r.persisted){const{leave:t,delayLeave:i}=r,o=()=>t(n,s);i?i(e.el,s,o):o()}else s()},J=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},Q=(e,t,n)=>{const{bum:i,scope:s,update:o,subTree:a,um:c}=e;i&&(0,r.ir)(i),s.stop(),o&&(o.active=!1,K(a,e,t,n)),c&&Nt(c,t),Nt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Y=(e,t,n,i=!1,r=!1,s=0)=>{for(let o=s;o<e.length;o++)K(e[o],t,n,i,r)},X=e=>6&e.shapeFlag?X(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&K(t._vnode,null,null,!0):_(t._vnode||null,e,t,null,null,null,n),C(),I(),t._vnode=e},te={p:_,um:K,m:W,r:G,mt:M,mc:R,pc:q,pbc:x,n:X,o:e};let ne,ie;return t&&([ne,ie]=t(te)),{render:ee,hydrate:ne,createApp:at(ee,ne)}}function xt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Dt(e,t,n=!1){const i=e.children,s=t.children;if((0,r.kJ)(i)&&(0,r.kJ)(s))for(let r=0;r<i.length;r++){const e=i[r];let t=s[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[r]=un(s[r]),t.el=e.el),n||Dt(e,t)),t.type===Ft&&(t.el=e.el)}}function Pt(e){const t=e.slice(),n=[0];let i,r,s,o,a;const c=e.length;for(i=0;i<c;i++){const c=e[i];if(0!==c){if(r=n[n.length-1],e[r]<c){t[i]=r,n.push(i);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Lt=e=>e.__isTeleport;const Mt=Symbol.for("v-fgt"),Ft=Symbol.for("v-txt"),Ut=Symbol.for("v-cmt"),Vt=Symbol.for("v-stc"),jt=[];let $t=null;function qt(e=!1){jt.push($t=e?null:[])}function Bt(){jt.pop(),$t=jt[jt.length-1]||null}let zt=1;function Ht(e){zt+=e}function Wt(e){return e.dynamicChildren=zt>0?$t||r.Z6:null,Bt(),zt>0&&$t&&$t.push(e),e}function Kt(e,t,n,i,r,s){return Wt(en(e,t,n,i,r,s,!0))}function Gt(e,t,n,i,r){return Wt(tn(e,t,n,i,r,!0))}function Jt(e){return!!e&&!0===e.__v_isVNode}function Qt(e,t){return e.type===t.type&&e.key===t.key}const Yt="__vInternal",Xt=({key:e})=>null!=e?e:null,Zt=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,r.HD)(e)||(0,i.dq)(e)||(0,r.mf)(e)?{i:x,r:e,k:t,f:!!n}:e:null);function en(e,t=null,n=null,i=0,s=null,o=(e===Mt?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Xt(t),ref:t&&Zt(t),scopeId:D,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:x};return c?(hn(l,n),128&o&&e.normalize(l)):n&&(l.shapeFlag|=(0,r.HD)(n)?8:16),zt>0&&!a&&$t&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&$t.push(l),l}const tn=nn;function nn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==Le||(e=Ut),Jt(e)){const i=sn(e,t,!0);return n&&hn(i,n),zt>0&&!a&&$t&&(6&i.shapeFlag?$t[$t.indexOf(e)]=i:$t.push(i)),i.patchFlag|=-2,i}if(Mn(e)&&(e=e.__vccOpts),t){t=rn(t);let{class:e,style:n}=t;e&&!(0,r.HD)(e)&&(t.class=(0,r.C_)(e)),(0,r.Kn)(n)&&((0,i.X3)(n)&&!(0,r.kJ)(n)&&(n=(0,r.l7)({},n)),t.style=(0,r.j5)(n))}const c=(0,r.HD)(e)?1:z(e)?128:Lt(e)?64:(0,r.Kn)(e)?4:(0,r.mf)(e)?2:0;return en(e,t,n,s,o,c,a,!0)}function rn(e){return e?(0,i.X3)(e)||Yt in e?(0,r.l7)({},e):e:null}function sn(e,t,n=!1){const{props:i,ref:s,patchFlag:o,children:a}=e,c=t?dn(i||{},t):i,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Xt(c),ref:t&&t.ref?n&&s?(0,r.kJ)(s)?s.concat(Zt(t)):[s,Zt(t)]:Zt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Mt?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&sn(e.ssContent),ssFallback:e.ssFallback&&sn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l}function on(e=" ",t=0){return tn(Ft,null,e,t)}function an(e,t){const n=tn(Vt,null,e);return n.staticCount=t,n}function cn(e="",t=!1){return t?(qt(),Gt(Ut,null,e)):tn(Ut,null,e)}function ln(e){return null==e||"boolean"===typeof e?tn(Ut):(0,r.kJ)(e)?tn(Mt,null,e.slice()):"object"===typeof e?un(e):tn(Ft,null,String(e))}function un(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:sn(e)}function hn(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if((0,r.kJ)(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),hn(e,n()),n._c&&(n._d=!0)))}{n=32;const i=t._;i||Yt in t?3===i&&x&&(1===x.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=x}}else(0,r.mf)(t)?(t={default:t,_ctx:x},n=32):(t=String(t),64&i?(n=16,t=[on(t)]):n=8);e.children=t,e.shapeFlag|=n}function dn(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=(0,r.C_)([t.class,i.class]));else if("style"===e)t.style=(0,r.j5)([t.style,i.style]);else if((0,r.F7)(e)){const n=t[e],s=i[e];!s||n===s||(0,r.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=i[e])}return t}function fn(e,t,n,i=null){o(e,t,7,[n,i])}const pn=st();let gn=0;function mn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||pn,a={uid:gn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new i.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gt(s,o),emitsOptions:R(s,o),emit:null,emitted:null,propsDefaults:r.kT,inheritAttrs:s.inheritAttrs,ctx:r.kT,data:r.kT,props:r.kT,attrs:r.kT,slots:r.kT,refs:r.kT,setupState:r.kT,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=N.bind(null,a),e.ce&&e.ce(a),a}let _n=null;const yn=()=>_n||x;let vn,wn,bn="__VUE_INSTANCE_SETTERS__";(wn=(0,r.E9)()[bn])||(wn=(0,r.E9)()[bn]=[]),wn.push((e=>_n=e)),vn=e=>{wn.length>1?wn.forEach((t=>t(e))):wn[0](e)};const En=e=>{vn(e),e.scope.on()},Tn=()=>{_n&&_n.scope.off(),vn(null)};function Cn(e){return 4&e.vnode.shapeFlag}let In,Sn,kn=!1;function An(e,t=!1){kn=t;const{props:n,children:i}=e.vnode,r=Cn(e);ht(e,n,r,t),It(e,i);const s=r?Nn(e,t):void 0;return kn=!1,s}function Nn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,i.Xl)(new Proxy(e.ctx,qe));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Dn(e):null;En(e),(0,i.Jd)();const c=s(o,e,0,[e.props,n]);if((0,i.lk)(),Tn(),(0,r.tI)(c)){if(c.then(Tn,Tn),t)return c.then((n=>{Rn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else Rn(e,c,t)}else On(e,t)}function Rn(e,t,n){(0,r.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,r.Kn)(t)&&(e.setupState=(0,i.WL)(t)),On(e,n)}function On(e,t,n){const s=e.type;if(!e.render){if(!t&&In&&!s.render){const t=s.template||Je(e).template;if(t){0;const{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,r.l7)((0,r.l7)({isCustomElement:n,delimiters:o},i),a);s.render=In(t,c)}}e.render=s.render||r.dG,Sn&&Sn(e)}En(e),(0,i.Jd)(),He(e),(0,i.lk)(),Tn()}function xn(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return(0,i.j)(e,"get","$attrs"),t[n]}}))}function Dn(e){const t=t=>{e.exposed=t||{}};return{get attrs(){return xn(e)},slots:e.slots,emit:e.emit,expose:t}}function Pn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,i.WL)((0,i.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in je?je[n](e):void 0},has(e,t){return t in e||t in je}}))}function Ln(e,t=!0){return(0,r.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Mn(e){return(0,r.mf)(e)&&"__vccOpts"in e}const Fn=(e,t)=>(0,i.Fl)(e,t,kn);function Un(e,t,n){const i=arguments.length;return 2===i?(0,r.Kn)(t)&&!(0,r.kJ)(t)?Jt(t)?tn(e,null,[t]):tn(e,t):tn(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Jt(n)&&(n=[n]),tn(e,t,n))}const Vn=Symbol.for("v-scx"),jn=()=>{{const e=ut(Vn);return e}};const $n="3.3.4"},9242:function(e,t,n){"use strict";n.d(t,{D2:function(){return we},G2:function(){return he},bM:function(){return de},e8:function(){return le},iM:function(){return ye},nr:function(){return ce},ri:function(){return Ce}});n(7658);var i=n(7139),r=n(3396),s=n(4870);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),l={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t?a.createElementNS(o,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&i&&null!=i.multiple&&r.setAttribute("multiple",i.multiple),r},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,r,s){const o=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling)){while(1)if(t.insertBefore(r.cloneNode(!0),n),r===s||!(r=r.nextSibling))break}else{c.innerHTML=i?`<svg>${e}</svg>`:e;const r=c.content;if(i){const e=r.firstChild;while(e.firstChild)r.appendChild(e.firstChild);r.removeChild(e)}t.insertBefore(r,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function u(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function h(e,t,n){const r=e.style,s=(0,i.HD)(n);if(n&&!s){if(t&&!(0,i.HD)(t))for(const e in t)null==n[e]&&f(r,e,"");for(const e in n)f(r,e,n[e])}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const d=/\s*!important$/;function f(e,t,n){if((0,i.kJ)(n))n.forEach((n=>f(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=m(e,t);d.test(n)?e.setProperty((0,i.rs)(r),n.replace(d,""),"important"):e[r]=n}}const p=["Webkit","Moz","ms"],g={};function m(e,t){const n=g[t];if(n)return n;let r=(0,i._A)(t);if("filter"!==r&&r in e)return g[t]=r;r=(0,i.kC)(r);for(let i=0;i<p.length;i++){const n=p[i]+r;if(n in e)return g[t]=n}return t}const _="http://www.w3.org/1999/xlink";function y(e,t,n,r,s){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(_,t.slice(6,t.length)):e.setAttributeNS(_,t,n);else{const r=(0,i.Pq)(t);null==n||r&&!(0,i.yA)(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function v(e,t,n,r,s,o,a){if("innerHTML"===t||"textContent"===t)return r&&a(r,s,o),void(e[t]=null==n?"":n);const c=e.tagName;if("value"===t&&"PROGRESS"!==c&&!c.includes("-")){e._value=n;const i="OPTION"===c?e.getAttribute("value"):e.value,r=null==n?"":n;return i!==r&&(e.value=r),void(null==n&&e.removeAttribute(t))}let l=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.yA)(n):null==n&&"string"===r?(n="",l=!0):"number"===r&&(n=0,l=!0)}try{e[t]=n}catch(u){0}l&&e.removeAttribute(t)}function w(e,t,n,i){e.addEventListener(t,n,i)}function b(e,t,n,i){e.removeEventListener(t,n,i)}function E(e,t,n,i,r=null){const s=e._vei||(e._vei={}),o=s[t];if(i&&o)o.value=i;else{const[n,a]=C(t);if(i){const o=s[t]=A(i,r);w(e,n,o,a)}else o&&(b(e,n,o,a),s[t]=void 0)}}const T=/(?:Once|Passive|Capture)$/;function C(e){let t;if(T.test(e)){let n;t={};while(n=e.match(T))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,i.rs)(e.slice(2));return[n,t]}let I=0;const S=Promise.resolve(),k=()=>I||(S.then((()=>I=0)),I=Date.now());function A(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.$d)(N(e,n.value),t,5,[e])};return n.value=e,n.attached=k(),n}function N(e,t){if((0,i.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const R=/^on[a-z]/,O=(e,t,n,r,s=!1,o,a,c,l)=>{"class"===t?u(e,r,s):"style"===t?h(e,n,r):(0,i.F7)(t)?(0,i.tR)(t)||E(e,t,n,r,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):x(e,t,r,s))?v(e,t,r,o,a,c,l):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),y(e,t,r,s))};function x(e,t,n,r){return r?"innerHTML"===t||"textContent"===t||!!(t in e&&R.test(t)&&(0,i.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!R.test(t)||!(0,i.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const D="transition",P="animation",L=(e,{slots:t})=>(0,r.h)(r.P$,j(e),t);L.displayName="Transition";const M={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},F=L.props=(0,i.l7)({},r.nJ,M),U=(e,t=[])=>{(0,i.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},V=e=>!!e&&((0,i.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function j(e){const t={};for(const i in e)i in M||(t[i]=e[i]);if(!1===e.css)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,g=$(s),m=g&&g[0],_=g&&g[1],{onBeforeEnter:y,onEnter:v,onEnterCancelled:w,onLeave:b,onLeaveCancelled:E,onBeforeAppear:T=y,onAppear:C=v,onAppearCancelled:I=w}=t,S=(e,t,n)=>{z(e,t?h:c),z(e,t?u:a),n&&n()},k=(e,t)=>{e._isLeaving=!1,z(e,d),z(e,p),z(e,f),t&&t()},A=e=>(t,n)=>{const i=e?C:v,s=()=>S(t,e,n);U(i,[t,s]),H((()=>{z(t,e?l:o),B(t,e?h:c),V(i)||K(t,r,m,s)}))};return(0,i.l7)(t,{onBeforeEnter(e){U(y,[e]),B(e,o),B(e,a)},onBeforeAppear(e){U(T,[e]),B(e,l),B(e,u)},onEnter:A(!1),onAppear:A(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>k(e,t);B(e,d),Y(),B(e,f),H((()=>{e._isLeaving&&(z(e,d),B(e,p),V(b)||K(e,r,_,n))})),U(b,[e,n])},onEnterCancelled(e){S(e,!1),U(w,[e])},onAppearCancelled(e){S(e,!0),U(I,[e])},onLeaveCancelled(e){k(e),U(E,[e])}})}function $(e){if(null==e)return null;if((0,i.Kn)(e))return[q(e.enter),q(e.leave)];{const t=q(e);return[t,t]}}function q(e){const t=(0,i.He)(e);return t}function B(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function z(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function H(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let W=0;function K(e,t,n,i){const r=e._endId=++W,s=()=>{r===e._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=G(e,t);if(!o)return i();const l=o+"end";let u=0;const h=()=>{e.removeEventListener(l,d),s()},d=t=>{t.target===e&&++u>=c&&h()};setTimeout((()=>{u<c&&h()}),a+1),e.addEventListener(l,d)}function G(e,t){const n=window.getComputedStyle(e),i=e=>(n[e]||"").split(", "),r=i(`${D}Delay`),s=i(`${D}Duration`),o=J(r,s),a=i(`${P}Delay`),c=i(`${P}Duration`),l=J(a,c);let u=null,h=0,d=0;t===D?o>0&&(u=D,h=o,d=s.length):t===P?l>0&&(u=P,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?D:P:null,d=u?u===D?s.length:c.length:0);const f=u===D&&/\b(transform|all)(,|$)/.test(i(`${D}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function J(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>Q(t)+Q(e[n]))))}function Q(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Y(){return document.body.offsetHeight}const X=new WeakMap,Z=new WeakMap,ee={name:"TransitionGroup",props:(0,i.l7)({},F,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,r.FN)(),i=(0,r.Y8)();let o,a;return(0,r.ic)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!re(o[0].el,n.vnode.el,t))return;o.forEach(te),o.forEach(ne);const i=o.filter(ie);Y(),i.forEach((e=>{const n=e.el,i=n.style;B(n,t),i.transform=i.webkitTransform=i.transitionDuration="";const r=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",r),n._moveCb=null,z(n,t))};n.addEventListener("transitionend",r)}))})),()=>{const c=(0,s.IU)(e),l=j(c);let u=c.tag||r.HY;o=a,a=t.default?(0,r.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,r.nK)(t,(0,r.U2)(t,l,i,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,r.nK)(t,(0,r.U2)(t,l,i,n)),X.set(t,t.el.getBoundingClientRect())}return(0,r.Wm)(u,null,a)}}};ee.props;function te(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function ne(e){Z.set(e,e.el.getBoundingClientRect())}function ie(e){const t=X.get(e),n=Z.get(e),i=t.left-n.left,r=t.top-n.top;if(i||r){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${i}px,${r}px)`,t.transitionDuration="0s",e}}function re(e,t,n){const i=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&i.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&i.classList.add(e))),i.style.display="none";const r=1===t.nodeType?t:t.parentNode;r.appendChild(i);const{hasTransform:s}=G(i);return r.removeChild(i),s}const se=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,i.kJ)(t)?e=>(0,i.ir)(t,e):t};function oe(e){e.target.composing=!0}function ae(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ce={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=se(s);const o=r||s.props&&"number"===s.props.type;w(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),o&&(r=(0,i.h5)(r)),e._assign(r)})),n&&w(e,"change",(()=>{e.value=e.value.trim()})),t||(w(e,"compositionstart",oe),w(e,"compositionend",ae),w(e,"change",ae))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},o){if(e._assign=se(o),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(r&&e.value.trim()===t)return;if((s||"number"===e.type)&&(0,i.h5)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}},le={deep:!0,created(e,t,n){e._assign=se(n),w(e,"change",(()=>{const t=e._modelValue,n=pe(e),r=e.checked,s=e._assign;if((0,i.kJ)(t)){const e=(0,i.hq)(t,n),o=-1!==e;if(r&&!o)s(t.concat(n));else if(!r&&o){const n=[...t];n.splice(e,1),s(n)}}else if((0,i.DM)(t)){const e=new Set(t);r?e.add(n):e.delete(n),s(e)}else s(ge(e,r))}))},mounted:ue,beforeUpdate(e,t,n){e._assign=se(n),ue(e,t,n)}};function ue(e,{value:t,oldValue:n},r){e._modelValue=t,(0,i.kJ)(t)?e.checked=(0,i.hq)(t,r.props.value)>-1:(0,i.DM)(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=(0,i.WV)(t,ge(e,!0)))}const he={created(e,{value:t},n){e.checked=(0,i.WV)(t,n.props.value),e._assign=se(n),w(e,"change",(()=>{e._assign(pe(e))}))},beforeUpdate(e,{value:t,oldValue:n},r){e._assign=se(r),t!==n&&(e.checked=(0,i.WV)(t,r.props.value))}},de={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const s=(0,i.DM)(t);w(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,i.h5)(pe(e)):pe(e)));e._assign(e.multiple?s?new Set(t):t:t[0])})),e._assign=se(r)},mounted(e,{value:t}){fe(e,t)},beforeUpdate(e,t,n){e._assign=se(n)},updated(e,{value:t}){fe(e,t)}};function fe(e,t){const n=e.multiple;if(!n||(0,i.kJ)(t)||(0,i.DM)(t)){for(let r=0,s=e.options.length;r<s;r++){const s=e.options[r],o=pe(s);if(n)(0,i.kJ)(t)?s.selected=(0,i.hq)(t,o)>-1:s.selected=t.has(o);else if((0,i.WV)(pe(s),t))return void(e.selectedIndex!==r&&(e.selectedIndex=r))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function pe(e){return"_value"in e?e._value:e.value}function ge(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const me=["ctrl","shift","alt","meta"],_e={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>me.some((n=>e[`${n}Key`]&&!t.includes(n)))},ye=(e,t)=>(n,...i)=>{for(let e=0;e<t.length;e++){const i=_e[t[e]];if(i&&i(n,t))return}return e(n,...i)},ve={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},we=(e,t)=>n=>{if(!("key"in n))return;const r=(0,i.rs)(n.key);return t.some((e=>e===r||ve[e]===r))?e(n):void 0};const be=(0,i.l7)({patchProp:O},l);let Ee;function Te(){return Ee||(Ee=(0,r.Us)(be))}const Ce=(...e)=>{const t=Te().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=Ie(e);if(!r)return;const s=t._component;(0,i.mf)(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Ie(e){if((0,i.HD)(e)){const t=document.querySelector(e);return t}return e}},7139:function(e,t,n){"use strict";n.d(t,{C_:function(){return X},DM:function(){return _},E9:function(){return z},F7:function(){return l},Gg:function(){return R},HD:function(){return b},He:function(){return q},Kj:function(){return v},Kn:function(){return T},NO:function(){return a},Nj:function(){return j},Od:function(){return d},PO:function(){return A},Pq:function(){return ee},RI:function(){return p},S0:function(){return N},W7:function(){return k},WV:function(){return ie},Z6:function(){return s},_A:function(){return D},_N:function(){return m},aU:function(){return U},dG:function(){return o},e1:function(){return W},fY:function(){return i},h5:function(){return $},hR:function(){return F},hq:function(){return re},ir:function(){return V},j5:function(){return K},kC:function(){return M},kJ:function(){return g},kT:function(){return r},l7:function(){return h},mf:function(){return w},rs:function(){return L},tI:function(){return C},tR:function(){return u},yA:function(){return te},yk:function(){return E},zw:function(){return se}});n(7658);function i(e,t){const n=Object.create(null),i=e.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const r={},s=[],o=()=>{},a=()=>!1,c=/^on[^a-z]/,l=e=>c.test(e),u=e=>e.startsWith("onUpdate:"),h=Object.assign,d=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},f=Object.prototype.hasOwnProperty,p=(e,t)=>f.call(e,t),g=Array.isArray,m=e=>"[object Map]"===S(e),_=e=>"[object Set]"===S(e),y=e=>"[object Date]"===S(e),v=e=>"[object RegExp]"===S(e),w=e=>"function"===typeof e,b=e=>"string"===typeof e,E=e=>"symbol"===typeof e,T=e=>null!==e&&"object"===typeof e,C=e=>T(e)&&w(e.then)&&w(e.catch),I=Object.prototype.toString,S=e=>I.call(e),k=e=>S(e).slice(8,-1),A=e=>"[object Object]"===S(e),N=e=>b(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,R=i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),O=e=>{const t=Object.create(null);return n=>{const i=t[n];return i||(t[n]=e(n))}},x=/-(\w)/g,D=O((e=>e.replace(x,((e,t)=>t?t.toUpperCase():"")))),P=/\B([A-Z])/g,L=O((e=>e.replace(P,"-$1").toLowerCase())),M=O((e=>e.charAt(0).toUpperCase()+e.slice(1))),F=O((e=>e?`on${M(e)}`:"")),U=(e,t)=>!Object.is(e,t),V=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},j=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},$=e=>{const t=parseFloat(e);return isNaN(t)?e:t},q=e=>{const t=b(e)?Number(e):NaN;return isNaN(t)?e:t};let B;const z=()=>B||(B="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const H="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",W=i(H);function K(e){if(g(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=b(i)?Y(i):K(i);if(r)for(const e in r)t[e]=r[e]}return t}return b(e)||T(e)?e:void 0}const G=/;(?![^(]*\))/g,J=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function Y(e){const t={};return e.replace(Q,"").split(G).forEach((e=>{if(e){const n=e.split(J);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function X(e){let t="";if(b(e))t=e;else if(g(e))for(let n=0;n<e.length;n++){const i=X(e[n]);i&&(t+=i+" ")}else if(T(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Z="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ee=i(Z);function te(e){return!!e||""===e}function ne(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=ie(e[i],t[i]);return n}function ie(e,t){if(e===t)return!0;let n=y(e),i=y(t);if(n||i)return!(!n||!i)&&e.getTime()===t.getTime();if(n=E(e),i=E(t),n||i)return e===t;if(n=g(e),i=g(t),n||i)return!(!n||!i)&&ne(e,t);if(n=T(e),i=T(t),n||i){if(!n||!i)return!1;const r=Object.keys(e).length,s=Object.keys(t).length;if(r!==s)return!1;for(const n in e){const i=e.hasOwnProperty(n),r=t.hasOwnProperty(n);if(i&&!r||!i&&r||!ie(e[n],t[n]))return!1}}return String(e)===String(t)}function re(e,t){return e.findIndex((e=>ie(e,t)))}const se=e=>b(e)?e:null==e?"":g(e)||T(e)&&(e.toString===I||!w(e.toString))?JSON.stringify(e,oe,2):String(e),oe=(e,t)=>t&&t.__v_isRef?oe(e,t.value):m(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:_(t)?{[`Set(${t.size})`]:[...t.values()]}:!T(t)||g(t)||A(t)?t:String(t)},5654:function(e,t,n){n(7658),
/*!
  * Bootstrap v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(t,i){e.exports=i(n(1718))}(0,(function(e){"use strict";function t(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e)for(const n in e)if("default"!==n){const i=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:()=>e[n]})}return t.default=e,Object.freeze(t)}const n=t(e),i=new Map,r={set(e,t,n){i.has(e)||i.set(e,new Map);const r=i.get(e);r.has(t)||0===r.size?r.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get(e,t){return i.has(e)&&i.get(e).get(t)||null},remove(e,t){if(!i.has(e))return;const n=i.get(e);n.delete(t),0===n.size&&i.delete(e)}},s=1e6,o=1e3,a="transitionend",c=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,((e,t)=>`#${CSS.escape(t)}`))),e),l=e=>null===e||void 0===e?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),u=e=>{do{e+=Math.floor(Math.random()*s)}while(document.getElementById(e));return e},h=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const i=Number.parseFloat(t),r=Number.parseFloat(n);return i||r?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*o):0},d=e=>{e.dispatchEvent(new Event(a))},f=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),p=e=>f(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?document.querySelector(c(e)):null,g=e=>{if(!f(e)||0===e.getClientRects().length)return!1;const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const t=e.closest("summary");if(t&&t.parentNode!==n)return!1;if(null===t)return!1}return t},m=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),_=e=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?_(e.parentNode):null},y=()=>{},v=e=>{e.offsetHeight},w=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,b=[],E=e=>{"loading"===document.readyState?(b.length||document.addEventListener("DOMContentLoaded",(()=>{for(const e of b)e()})),b.push(e)):e()},T=()=>"rtl"===document.documentElement.dir,C=e=>{E((()=>{const t=w();if(t){const n=e.NAME,i=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=i,e.jQueryInterface)}}))},I=(e,t=[],n=e)=>"function"===typeof e?e(...t):n,S=(e,t,n=!0)=>{if(!n)return void I(e);const i=5,r=h(t)+i;let s=!1;const o=({target:n})=>{n===t&&(s=!0,t.removeEventListener(a,o),I(e))};t.addEventListener(a,o),setTimeout((()=>{s||d(t)}),r)},k=(e,t,n,i)=>{const r=e.length;let s=e.indexOf(t);return-1===s?!n&&i?e[r-1]:e[0]:(s+=n?1:-1,i&&(s=(s+r)%r),e[Math.max(0,Math.min(s,r-1))])},A=/[^.]*(?=\..*)\.|.*/,N=/\..*/,R=/::\d+$/,O={};let x=1;const D={mouseenter:"mouseover",mouseleave:"mouseout"},P=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function L(e,t){return t&&`${t}::${x++}`||e.uidEvent||x++}function M(e){const t=L(e);return e.uidEvent=t,O[t]=O[t]||{},O[t]}function F(e,t){return function n(i){return W(i,{delegateTarget:e}),n.oneOff&&H.off(e,i.type,t),t.apply(e,[i])}}function U(e,t,n){return function i(r){const s=e.querySelectorAll(t);for(let{target:o}=r;o&&o!==this;o=o.parentNode)for(const a of s)if(a===o)return W(r,{delegateTarget:o}),i.oneOff&&H.off(e,r.type,t,n),n.apply(o,[r])}}function V(e,t,n=null){return Object.values(e).find((e=>e.callable===t&&e.delegationSelector===n))}function j(e,t,n){const i="string"===typeof t,r=i?n:t||n;let s=z(e);return P.has(s)||(s=e),[i,r,s]}function $(e,t,n,i,r){if("string"!==typeof t||!e)return;let[s,o,a]=j(t,n,i);if(t in D){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};o=e(o)}const c=M(e),l=c[a]||(c[a]={}),u=V(l,o,s?n:null);if(u)return void(u.oneOff=u.oneOff&&r);const h=L(o,t.replace(A,"")),d=s?U(e,n,o):F(e,o);d.delegationSelector=s?n:null,d.callable=o,d.oneOff=r,d.uidEvent=h,l[h]=d,e.addEventListener(a,d,s)}function q(e,t,n,i,r){const s=V(t[n],i,r);s&&(e.removeEventListener(n,s,Boolean(r)),delete t[n][s.uidEvent])}function B(e,t,n,i){const r=t[n]||{};for(const[s,o]of Object.entries(r))s.includes(i)&&q(e,t,n,o.callable,o.delegationSelector)}function z(e){return e=e.replace(N,""),D[e]||e}const H={on(e,t,n,i){$(e,t,n,i,!1)},one(e,t,n,i){$(e,t,n,i,!0)},off(e,t,n,i){if("string"!==typeof t||!e)return;const[r,s,o]=j(t,n,i),a=o!==t,c=M(e),l=c[o]||{},u=t.startsWith(".");if("undefined"===typeof s){if(u)for(const n of Object.keys(c))B(e,c,n,t.slice(1));for(const[n,i]of Object.entries(l)){const r=n.replace(R,"");a&&!t.includes(r)||q(e,c,o,i.callable,i.delegationSelector)}}else{if(!Object.keys(l).length)return;q(e,c,o,s,r?n:null)}},trigger(e,t,n){if("string"!==typeof t||!e)return null;const i=w(),r=z(t),s=t!==r;let o=null,a=!0,c=!0,l=!1;s&&i&&(o=i.Event(t,n),i(e).trigger(o),a=!o.isPropagationStopped(),c=!o.isImmediatePropagationStopped(),l=o.isDefaultPrevented());const u=W(new Event(t,{bubbles:a,cancelable:!0}),n);return l&&u.preventDefault(),c&&e.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function W(e,t={}){for(const[i,r]of Object.entries(t))try{e[i]=r}catch(n){Object.defineProperty(e,i,{configurable:!0,get(){return r}})}return e}function K(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!==typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function G(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}const J={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${G(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${G(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter((e=>e.startsWith("bs")&&!e.startsWith("bsConfig")));for(const i of n){let n=i.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),t[n]=K(e.dataset[i])}return t},getDataAttribute(e,t){return K(e.getAttribute(`data-bs-${G(t)}`))}};class Q{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const n=f(t)?J.getDataAttribute(t,"config"):{};return{...this.constructor.Default,..."object"===typeof n?n:{},...f(t)?J.getDataAttributes(t):{},..."object"===typeof e?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const[n,i]of Object.entries(t)){const t=e[n],r=f(t)?"element":l(t);if(!new RegExp(i).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${i}".`)}}}const Y="5.3.1";class X extends Q{constructor(e,t){super(),e=p(e),e&&(this._element=e,this._config=this._getConfig(t),r.set(this._element,this.constructor.DATA_KEY,this))}dispose(){r.remove(this._element,this.constructor.DATA_KEY),H.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){S(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return r.get(p(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"===typeof t?t:null)}static get VERSION(){return Y}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const Z=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return c(t)},ee={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter((e=>e.matches(t)))},parents(e,t){const n=[];let i=e.parentNode.closest(t);while(i)n.push(i),i=i.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;while(n){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;while(n){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(",");return this.find(t,e).filter((e=>!m(e)&&g(e)))},getSelectorFromElement(e){const t=Z(e);return t&&ee.findOne(t)?t:null},getElementFromSelector(e){const t=Z(e);return t?ee.findOne(t):null},getMultipleElementsFromSelector(e){const t=Z(e);return t?ee.find(t):[]}},te=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,i=e.NAME;H.on(document,n,`[data-bs-dismiss="${i}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),m(this))return;const r=ee.getElementFromSelector(this)||this.closest(`.${i}`),s=e.getOrCreateInstance(r);s[t]()}))},ne="alert",ie="bs.alert",re=`.${ie}`,se=`close${re}`,oe=`closed${re}`,ae="fade",ce="show";class le extends X{static get NAME(){return ne}close(){const e=H.trigger(this._element,se);if(e.defaultPrevented)return;this._element.classList.remove(ce);const t=this._element.classList.contains(ae);this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),H.trigger(this._element,oe),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=le.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}te(le,"close"),C(le);const ue="button",he="bs.button",de=`.${he}`,fe=".data-api",pe="active",ge='[data-bs-toggle="button"]',me=`click${de}${fe}`;class _e extends X{static get NAME(){return ue}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(pe))}static jQueryInterface(e){return this.each((function(){const t=_e.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}H.on(document,me,ge,(e=>{e.preventDefault();const t=e.target.closest(ge),n=_e.getOrCreateInstance(t);n.toggle()})),C(_e);const ye="swipe",ve=".bs.swipe",we=`touchstart${ve}`,be=`touchmove${ve}`,Ee=`touchend${ve}`,Te=`pointerdown${ve}`,Ce=`pointerup${ve}`,Ie="touch",Se="pen",ke="pointer-event",Ae=40,Ne={endCallback:null,leftCallback:null,rightCallback:null},Re={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Oe extends Q{constructor(e,t){super(),this._element=e,e&&Oe.isSupported()&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return Ne}static get DefaultType(){return Re}static get NAME(){return ye}dispose(){H.off(this._element,ve)}_start(e){this._supportPointerEvents?this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX):this._deltaX=e.touches[0].clientX}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),I(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=Ae)return;const t=e/this._deltaX;this._deltaX=0,t&&I(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(H.on(this._element,Te,(e=>this._start(e))),H.on(this._element,Ce,(e=>this._end(e))),this._element.classList.add(ke)):(H.on(this._element,we,(e=>this._start(e))),H.on(this._element,be,(e=>this._move(e))),H.on(this._element,Ee,(e=>this._end(e))))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===Se||e.pointerType===Ie)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const xe="carousel",De="bs.carousel",Pe=`.${De}`,Le=".data-api",Me="ArrowLeft",Fe="ArrowRight",Ue=500,Ve="next",je="prev",$e="left",qe="right",Be=`slide${Pe}`,ze=`slid${Pe}`,He=`keydown${Pe}`,We=`mouseenter${Pe}`,Ke=`mouseleave${Pe}`,Ge=`dragstart${Pe}`,Je=`load${Pe}${Le}`,Qe=`click${Pe}${Le}`,Ye="carousel",Xe="active",Ze="slide",et="carousel-item-end",tt="carousel-item-start",nt="carousel-item-next",it="carousel-item-prev",rt=".active",st=".carousel-item",ot=rt+st,at=".carousel-item img",ct=".carousel-indicators",lt="[data-bs-slide], [data-bs-slide-to]",ut='[data-bs-ride="carousel"]',ht={[Me]:qe,[Fe]:$e},dt={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},ft={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class pt extends X{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=ee.findOne(ct,this._element),this._addEventListeners(),this._config.ride===Ye&&this.cycle()}static get Default(){return dt}static get DefaultType(){return ft}static get NAME(){return xe}next(){this._slide(Ve)}nextWhenVisible(){!document.hidden&&g(this._element)&&this.next()}prev(){this._slide(je)}pause(){this._isSliding&&d(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?H.one(this._element,ze,(()=>this.cycle())):this.cycle())}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding)return void H.one(this._element,ze,(()=>this.to(e)));const n=this._getItemIndex(this._getActive());if(n===e)return;const i=e>n?Ve:je;this._slide(i,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&H.on(this._element,He,(e=>this._keydown(e))),"hover"===this._config.pause&&(H.on(this._element,We,(()=>this.pause())),H.on(this._element,Ke,(()=>this._maybeEnableCycle()))),this._config.touch&&Oe.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const n of ee.find(at,this._element))H.on(n,Ge,(e=>e.preventDefault()));const e=()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),Ue+this._config.interval))},t={leftCallback:()=>this._slide(this._directionToOrder($e)),rightCallback:()=>this._slide(this._directionToOrder(qe)),endCallback:e};this._swipeHelper=new Oe(this._element,t)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=ht[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=ee.findOne(rt,this._indicatorsElement);t.classList.remove(Xe),t.removeAttribute("aria-current");const n=ee.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(Xe),n.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;const n=this._getActive(),i=e===Ve,r=t||k(this._getItems(),n,i,this._config.wrap);if(r===n)return;const s=this._getItemIndex(r),o=t=>H.trigger(this._element,t,{relatedTarget:r,direction:this._orderToDirection(e),from:this._getItemIndex(n),to:s}),a=o(Be);if(a.defaultPrevented)return;if(!n||!r)return;const c=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(s),this._activeElement=r;const l=i?tt:et,u=i?nt:it;r.classList.add(u),v(r),n.classList.add(l),r.classList.add(l);const h=()=>{r.classList.remove(l,u),r.classList.add(Xe),n.classList.remove(Xe,u,l),this._isSliding=!1,o(ze)};this._queueCallback(h,n,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(Ze)}_getActive(){return ee.findOne(ot,this._element)}_getItems(){return ee.find(st,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return T()?e===$e?je:Ve:e===$e?Ve:je}_orderToDirection(e){return T()?e===je?$e:qe:e===je?qe:$e}static jQueryInterface(e){return this.each((function(){const t=pt.getOrCreateInstance(this,e);if("number"!==typeof e){if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}else t.to(e)}))}}H.on(document,Qe,lt,(function(e){const t=ee.getElementFromSelector(this);if(!t||!t.classList.contains(Ye))return;e.preventDefault();const n=pt.getOrCreateInstance(t),i=this.getAttribute("data-bs-slide-to");return i?(n.to(i),void n._maybeEnableCycle()):"next"===J.getDataAttribute(this,"slide")?(n.next(),void n._maybeEnableCycle()):(n.prev(),void n._maybeEnableCycle())})),H.on(window,Je,(()=>{const e=ee.find(ut);for(const t of e)pt.getOrCreateInstance(t)})),C(pt);const gt="collapse",mt="bs.collapse",_t=`.${mt}`,yt=".data-api",vt=`show${_t}`,wt=`shown${_t}`,bt=`hide${_t}`,Et=`hidden${_t}`,Tt=`click${_t}${yt}`,Ct="show",It="collapse",St="collapsing",kt="collapsed",At=`:scope .${It} .${It}`,Nt="collapse-horizontal",Rt="width",Ot="height",xt=".collapse.show, .collapse.collapsing",Dt='[data-bs-toggle="collapse"]',Pt={parent:null,toggle:!0},Lt={parent:"(null|element)",toggle:"boolean"};class Mt extends X{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const n=ee.find(Dt);for(const i of n){const e=ee.getSelectorFromElement(i),t=ee.find(e).filter((e=>e===this._element));null!==e&&t.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Pt}static get DefaultType(){return Lt}static get NAME(){return gt}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(xt).filter((e=>e!==this._element)).map((e=>Mt.getOrCreateInstance(e,{toggle:!1})))),e.length&&e[0]._isTransitioning)return;const t=H.trigger(this._element,vt);if(t.defaultPrevented)return;for(const o of e)o.hide();const n=this._getDimension();this._element.classList.remove(It),this._element.classList.add(St),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(St),this._element.classList.add(It,Ct),this._element.style[n]="",H.trigger(this._element,wt)},r=n[0].toUpperCase()+n.slice(1),s=`scroll${r}`;this._queueCallback(i,this._element,!0),this._element.style[n]=`${this._element[s]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const e=H.trigger(this._element,bt);if(e.defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,v(this._element),this._element.classList.add(St),this._element.classList.remove(It,Ct);for(const i of this._triggerArray){const e=ee.getElementFromSelector(i);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(St),this._element.classList.add(It),H.trigger(this._element,Et)};this._element.style[t]="",this._queueCallback(n,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Ct)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=p(e.parent),e}_getDimension(){return this._element.classList.contains(Nt)?Rt:Ot}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Dt);for(const t of e){const e=ee.getElementFromSelector(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){const t=ee.find(At,this._config.parent);return ee.find(e,this._config.parent).filter((e=>!t.includes(e)))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const n of e)n.classList.toggle(kt,!t),n.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return"string"===typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each((function(){const n=Mt.getOrCreateInstance(this,t);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}H.on(document,Tt,Dt,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();for(const t of ee.getMultipleElementsFromSelector(this))Mt.getOrCreateInstance(t,{toggle:!1}).toggle()})),C(Mt);const Ft="dropdown",Ut="bs.dropdown",Vt=`.${Ut}`,jt=".data-api",$t="Escape",qt="Tab",Bt="ArrowUp",zt="ArrowDown",Ht=2,Wt=`hide${Vt}`,Kt=`hidden${Vt}`,Gt=`show${Vt}`,Jt=`shown${Vt}`,Qt=`click${Vt}${jt}`,Yt=`keydown${Vt}${jt}`,Xt=`keyup${Vt}${jt}`,Zt="show",en="dropup",tn="dropend",nn="dropstart",rn="dropup-center",sn="dropdown-center",on='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',an=`${on}.${Zt}`,cn=".dropdown-menu",ln=".navbar",un=".navbar-nav",hn=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",dn=T()?"top-end":"top-start",fn=T()?"top-start":"top-end",pn=T()?"bottom-end":"bottom-start",gn=T()?"bottom-start":"bottom-end",mn=T()?"left-start":"right-start",_n=T()?"right-start":"left-start",yn="top",vn="bottom",wn={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},bn={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class En extends X{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=ee.next(this._element,cn)[0]||ee.prev(this._element,cn)[0]||ee.findOne(cn,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return wn}static get DefaultType(){return bn}static get NAME(){return Ft}toggle(){return this._isShown()?this.hide():this.show()}show(){if(m(this._element)||this._isShown())return;const e={relatedTarget:this._element},t=H.trigger(this._element,Gt,e);if(!t.defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(un))for(const e of[].concat(...document.body.children))H.on(e,"mouseover",y);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Zt),this._element.classList.add(Zt),H.trigger(this._element,Jt,e)}}hide(){if(m(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){const t=H.trigger(this._element,Wt,e);if(!t.defaultPrevented){if("ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))H.off(e,"mouseover",y);this._popper&&this._popper.destroy(),this._menu.classList.remove(Zt),this._element.classList.remove(Zt),this._element.setAttribute("aria-expanded","false"),J.removeDataAttribute(this._menu,"popper"),H.trigger(this._element,Kt,e)}}_getConfig(e){if(e=super._getConfig(e),"object"===typeof e.reference&&!f(e.reference)&&"function"!==typeof e.reference.getBoundingClientRect)throw new TypeError(`${Ft.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if("undefined"===typeof n)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=this._parent:f(this._config.reference)?e=p(this._config.reference):"object"===typeof this._config.reference&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=n.createPopper(e,this._menu,t)}_isShown(){return this._menu.classList.contains(Zt)}_getPlacement(){const e=this._parent;if(e.classList.contains(tn))return mn;if(e.classList.contains(nn))return _n;if(e.classList.contains(rn))return yn;if(e.classList.contains(sn))return vn;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains(en)?t?fn:dn:t?gn:pn}_detectNavbar(){return null!==this._element.closest(ln)}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"===typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(J.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...I(this._config.popperConfig,[e])}}_selectMenuItem({key:e,target:t}){const n=ee.find(hn,this._menu).filter((e=>g(e)));n.length&&k(n,t,e===zt,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=En.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(e.button===Ht||"keyup"===e.type&&e.key!==qt)return;const t=ee.find(an);for(const n of t){const t=En.getInstance(n);if(!t||!1===t._config.autoClose)continue;const i=e.composedPath(),r=i.includes(t._menu);if(i.includes(t._element)||"inside"===t._config.autoClose&&!r||"outside"===t._config.autoClose&&r)continue;if(t._menu.contains(e.target)&&("keyup"===e.type&&e.key===qt||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const s={relatedTarget:t._element};"click"===e.type&&(s.clickEvent=e),t._completeHide(s)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),n=e.key===$t,i=[Bt,zt].includes(e.key);if(!i&&!n)return;if(t&&!n)return;e.preventDefault();const r=this.matches(on)?this:ee.prev(this,on)[0]||ee.next(this,on)[0]||ee.findOne(on,e.delegateTarget.parentNode),s=En.getOrCreateInstance(r);if(i)return e.stopPropagation(),s.show(),void s._selectMenuItem(e);s._isShown()&&(e.stopPropagation(),s.hide(),r.focus())}}H.on(document,Yt,on,En.dataApiKeydownHandler),H.on(document,Yt,cn,En.dataApiKeydownHandler),H.on(document,Qt,En.clearMenus),H.on(document,Xt,En.clearMenus),H.on(document,Qt,on,(function(e){e.preventDefault(),En.getOrCreateInstance(this).toggle()})),C(En);const Tn="backdrop",Cn="fade",In="show",Sn=`mousedown.bs.${Tn}`,kn={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},An={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Nn extends Q{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return kn}static get DefaultType(){return An}static get NAME(){return Tn}show(e){if(!this._config.isVisible)return void I(e);this._append();const t=this._getElement();this._config.isAnimated&&v(t),t.classList.add(In),this._emulateAnimation((()=>{I(e)}))}hide(e){this._config.isVisible?(this._getElement().classList.remove(In),this._emulateAnimation((()=>{this.dispose(),I(e)}))):I(e)}dispose(){this._isAppended&&(H.off(this._element,Sn),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(Cn),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=p(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),H.on(e,Sn,(()=>{I(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(e){S(e,this._getElement(),this._config.isAnimated)}}const Rn="focustrap",On="bs.focustrap",xn=`.${On}`,Dn=`focusin${xn}`,Pn=`keydown.tab${xn}`,Ln="Tab",Mn="forward",Fn="backward",Un={autofocus:!0,trapElement:null},Vn={autofocus:"boolean",trapElement:"element"};class jn extends Q{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Un}static get DefaultType(){return Vn}static get NAME(){return Rn}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),H.off(document,xn),H.on(document,Dn,(e=>this._handleFocusin(e))),H.on(document,Pn,(e=>this._handleKeydown(e))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,H.off(document,xn))}_handleFocusin(e){const{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;const n=ee.focusableChildren(t);0===n.length?t.focus():this._lastTabNavDirection===Fn?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){e.key===Ln&&(this._lastTabNavDirection=e.shiftKey?Fn:Mn)}}const $n=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",qn=".sticky-top",Bn="padding-right",zn="margin-right";class Hn{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Bn,(t=>t+e)),this._setElementAttributes($n,Bn,(t=>t+e)),this._setElementAttributes(qn,zn,(t=>t-e))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Bn),this._resetElementAttributes($n,Bn),this._resetElementAttributes(qn,zn)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const i=this.getWidth(),r=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+i)return;this._saveInitialAttribute(e,t);const r=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,`${n(Number.parseFloat(r))}px`)};this._applyManipulationCallback(e,r)}_saveInitialAttribute(e,t){const n=e.style.getPropertyValue(t);n&&J.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=e=>{const n=J.getDataAttribute(e,t);null!==n?(J.removeDataAttribute(e,t),e.style.setProperty(t,n)):e.style.removeProperty(t)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){if(f(e))t(e);else for(const n of ee.find(e,this._element))t(n)}}const Wn="modal",Kn="bs.modal",Gn=`.${Kn}`,Jn=".data-api",Qn="Escape",Yn=`hide${Gn}`,Xn=`hidePrevented${Gn}`,Zn=`hidden${Gn}`,ei=`show${Gn}`,ti=`shown${Gn}`,ni=`resize${Gn}`,ii=`click.dismiss${Gn}`,ri=`mousedown.dismiss${Gn}`,si=`keydown.dismiss${Gn}`,oi=`click${Gn}${Jn}`,ai="modal-open",ci="fade",li="show",ui="modal-static",hi=".modal.show",di=".modal-dialog",fi=".modal-body",pi='[data-bs-toggle="modal"]',gi={backdrop:!0,focus:!0,keyboard:!0},mi={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class _i extends X{constructor(e,t){super(e,t),this._dialog=ee.findOne(di,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Hn,this._addEventListeners()}static get Default(){return gi}static get DefaultType(){return mi}static get NAME(){return Wn}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;const t=H.trigger(this._element,ei,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(ai),this._adjustDialog(),this._backdrop.show((()=>this._showElement(e))))}hide(){if(!this._isShown||this._isTransitioning)return;const e=H.trigger(this._element,Yn);e.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(li),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated()))}dispose(){H.off(window,Gn),H.off(this._dialog,Gn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Nn({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new jn({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const t=ee.findOne(fi,this._dialog);t&&(t.scrollTop=0),v(this._element),this._element.classList.add(li);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,H.trigger(this._element,ti,{relatedTarget:e})};this._queueCallback(n,this._dialog,this._isAnimated())}_addEventListeners(){H.on(this._element,si,(e=>{e.key===Qn&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())})),H.on(window,ni,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),H.on(this._element,ri,(e=>{H.one(this._element,ii,(t=>{this._element===e.target&&this._element===t.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(ai),this._resetAdjustments(),this._scrollBar.reset(),H.trigger(this._element,Zn)}))}_isAnimated(){return this._element.classList.contains(ci)}_triggerBackdropTransition(){const e=H.trigger(this._element,Xn);if(e.defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._element.style.overflowY;"hidden"===n||this._element.classList.contains(ui)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(ui),this._queueCallback((()=>{this._element.classList.remove(ui),this._queueCallback((()=>{this._element.style.overflowY=n}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;if(n&&!e){const e=T()?"paddingLeft":"paddingRight";this._element.style[e]=`${t}px`}if(!n&&e){const e=T()?"paddingRight":"paddingLeft";this._element.style[e]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const n=_i.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}H.on(document,oi,pi,(function(e){const t=ee.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),H.one(t,ei,(e=>{e.defaultPrevented||H.one(t,Zn,(()=>{g(this)&&this.focus()}))}));const n=ee.findOne(hi);n&&_i.getInstance(n).hide();const i=_i.getOrCreateInstance(t);i.toggle(this)})),te(_i),C(_i);const yi="offcanvas",vi="bs.offcanvas",wi=`.${vi}`,bi=".data-api",Ei=`load${wi}${bi}`,Ti="Escape",Ci="show",Ii="showing",Si="hiding",ki="offcanvas-backdrop",Ai=".offcanvas.show",Ni=`show${wi}`,Ri=`shown${wi}`,Oi=`hide${wi}`,xi=`hidePrevented${wi}`,Di=`hidden${wi}`,Pi=`resize${wi}`,Li=`click${wi}${bi}`,Mi=`keydown.dismiss${wi}`,Fi='[data-bs-toggle="offcanvas"]',Ui={backdrop:!0,keyboard:!0,scroll:!1},Vi={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class ji extends X{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Ui}static get DefaultType(){return Vi}static get NAME(){return yi}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;const t=H.trigger(this._element,Ni,{relatedTarget:e});if(t.defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||(new Hn).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Ii);const n=()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Ci),this._element.classList.remove(Ii),H.trigger(this._element,Ri,{relatedTarget:e})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const e=H.trigger(this._element,Oi);if(e.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Si),this._backdrop.hide();const t=()=>{this._element.classList.remove(Ci,Si),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new Hn).reset(),H.trigger(this._element,Di)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{"static"!==this._config.backdrop?this.hide():H.trigger(this._element,xi)},t=Boolean(this._config.backdrop);return new Nn({className:ki,isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?e:null})}_initializeFocusTrap(){return new jn({trapElement:this._element})}_addEventListeners(){H.on(this._element,Mi,(e=>{e.key===Ti&&(this._config.keyboard?this.hide():H.trigger(this._element,xi))}))}static jQueryInterface(e){return this.each((function(){const t=ji.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}H.on(document,Li,Fi,(function(e){const t=ee.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),m(this))return;H.one(t,Di,(()=>{g(this)&&this.focus()}));const n=ee.findOne(Ai);n&&n!==t&&ji.getInstance(n).hide();const i=ji.getOrCreateInstance(t);i.toggle(this)})),H.on(window,Ei,(()=>{for(const e of ee.find(Ai))ji.getOrCreateInstance(e).show()})),H.on(window,Pi,(()=>{for(const e of ee.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(e).position&&ji.getOrCreateInstance(e).hide()})),te(ji),C(ji);const $i=/^aria-[\w-]*$/i,qi={"*":["class","dir","id","lang","role",$i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Bi=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),zi=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Hi=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?!Bi.has(n)||Boolean(zi.test(e.nodeValue)):t.filter((e=>e instanceof RegExp)).some((e=>e.test(n)))};function Wi(e,t,n){if(!e.length)return e;if(n&&"function"===typeof n)return n(e);const i=new window.DOMParser,r=i.parseFromString(e,"text/html"),s=[].concat(...r.body.querySelectorAll("*"));for(const o of s){const e=o.nodeName.toLowerCase();if(!Object.keys(t).includes(e)){o.remove();continue}const n=[].concat(...o.attributes),i=[].concat(t["*"]||[],t[e]||[]);for(const t of n)Hi(t,i)||o.removeAttribute(t.nodeName)}return r.body.innerHTML}const Ki="TemplateFactory",Gi={allowList:qi,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Ji={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Qi={entry:"(string|element|function|null)",selector:"(string|element)"};class Yi extends Q{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return Gi}static get DefaultType(){return Ji}static get NAME(){return Ki}getContent(){return Object.values(this._config.content).map((e=>this._resolvePossibleFunction(e))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[i,r]of Object.entries(this._config.content))this._setContent(e,r,i);const t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},Qi)}_setContent(e,t,n){const i=ee.findOne(n,e);i&&(t=this._resolvePossibleFunction(t),t?f(t)?this._putElementInTemplate(p(t),i):this._config.html?i.innerHTML=this._maybeSanitize(t):i.textContent=t:i.remove())}_maybeSanitize(e){return this._config.sanitize?Wi(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return I(e,[this])}_putElementInTemplate(e,t){if(this._config.html)return t.innerHTML="",void t.append(e);t.textContent=e.textContent}}const Xi="tooltip",Zi=new Set(["sanitize","allowList","sanitizeFn"]),er="fade",tr="modal",nr="show",ir=".tooltip-inner",rr=`.${tr}`,sr="hide.bs.modal",or="hover",ar="focus",cr="click",lr="manual",ur="hide",hr="hidden",dr="show",fr="shown",pr="inserted",gr="click",mr="focusin",_r="focusout",yr="mouseenter",vr="mouseleave",wr={AUTO:"auto",TOP:"top",RIGHT:T()?"left":"right",BOTTOM:"bottom",LEFT:T()?"right":"left"},br={allowList:qi,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Er={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Tr extends X{constructor(e,t){if("undefined"===typeof n)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return br}static get DefaultType(){return Er}static get NAME(){return Xi}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),H.off(this._element.closest(rr),sr,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const e=H.trigger(this._element,this.constructor.eventName(dr)),t=_(this._element),n=(t||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!n)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(i),H.trigger(this._element,this.constructor.eventName(pr))),this._popper=this._createPopper(i),i.classList.add(nr),"ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))H.on(o,"mouseover",y);const s=()=>{H.trigger(this._element,this.constructor.eventName(fr)),!1===this._isHovered&&this._leave(),this._isHovered=!1};this._queueCallback(s,this.tip,this._isAnimated())}hide(){if(!this._isShown())return;const e=H.trigger(this._element,this.constructor.eventName(ur));if(e.defaultPrevented)return;const t=this._getTipElement();if(t.classList.remove(nr),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))H.off(i,"mouseover",y);this._activeTrigger[cr]=!1,this._activeTrigger[ar]=!1,this._activeTrigger[or]=!1,this._isHovered=null;const n=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),H.trigger(this._element,this.constructor.eventName(hr)))};this._queueCallback(n,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(er,nr),t.classList.add(`bs-${this.constructor.NAME}-auto`);const n=u(this.constructor.NAME).toString();return t.setAttribute("id",n),this._isAnimated()&&t.classList.add(er),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new Yi({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[ir]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(er)}_isShown(){return this.tip&&this.tip.classList.contains(nr)}_createPopper(e){const t=I(this._config.placement,[this,e,this._element]),i=wr[t.toUpperCase()];return n.createPopper(this._element,e,this._getPopperConfig(i))}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"===typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return I(e,[this._element])}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:e=>{this._getTipElement().setAttribute("data-popper-placement",e.state.placement)}}]};return{...t,...I(this._config.popperConfig,[t])}}_setListeners(){const e=this._config.trigger.split(" ");for(const t of e)if("click"===t)H.on(this._element,this.constructor.eventName(gr),this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e);t.toggle()}));else if(t!==lr){const e=t===or?this.constructor.eventName(yr):this.constructor.eventName(mr),n=t===or?this.constructor.eventName(vr):this.constructor.eventName(_r);H.on(this._element,e,this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusin"===e.type?ar:or]=!0,t._enter()})),H.on(this._element,n,this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusout"===e.type?ar:or]=t._element.contains(e.relatedTarget),t._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},H.on(this._element.closest(rr),sr,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=J.getDataAttributes(this._element);for(const n of Object.keys(t))Zi.has(n)&&delete t[n];return e={...t,..."object"===typeof e&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=!1===e.container?document.body:p(e.container),"number"===typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"===typeof e.title&&(e.title=e.title.toString()),"number"===typeof e.content&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[t,n]of Object.entries(this._config))this.constructor.Default[t]!==n&&(e[t]=n);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each((function(){const t=Tr.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}C(Tr);const Cr="popover",Ir=".popover-header",Sr=".popover-body",kr={...Tr.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Ar={...Tr.DefaultType,content:"(null|string|element|function)"};class Nr extends Tr{static get Default(){return kr}static get DefaultType(){return Ar}static get NAME(){return Cr}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Ir]:this._getTitle(),[Sr]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each((function(){const t=Nr.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}C(Nr);const Rr="scrollspy",Or="bs.scrollspy",xr=`.${Or}`,Dr=".data-api",Pr=`activate${xr}`,Lr=`click${xr}`,Mr=`load${xr}${Dr}`,Fr="dropdown-item",Ur="active",Vr='[data-bs-spy="scroll"]',jr="[href]",$r=".nav, .list-group",qr=".nav-link",Br=".nav-item",zr=".list-group-item",Hr=`${qr}, ${Br} > ${qr}, ${zr}`,Wr=".dropdown",Kr=".dropdown-toggle",Gr={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Jr={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Qr extends X{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Gr}static get DefaultType(){return Jr}static get NAME(){return Rr}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=p(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,"string"===typeof e.threshold&&(e.threshold=e.threshold.split(",").map((e=>Number.parseFloat(e)))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(H.off(this._config.target,Lr),H.on(this._config.target,Lr,jr,(e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const n=this._rootElement||window,i=t.offsetTop-this._element.offsetTop;if(n.scrollTo)return void n.scrollTo({top:i,behavior:"smooth"});n.scrollTop=i}})))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((e=>this._observerCallback(e)),e)}_observerCallback(e){const t=e=>this._targetLinks.get(`#${e.target.id}`),n=e=>{this._previousScrollData.visibleEntryTop=e.target.offsetTop,this._process(t(e))},i=(this._rootElement||document.documentElement).scrollTop,r=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const s of e){if(!s.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(s));continue}const e=s.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&e){if(n(s),!i)return}else r||e||n(s)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=ee.find(jr,this._config.target);for(const t of e){if(!t.hash||m(t))continue;const e=ee.findOne(decodeURI(t.hash),this._element);g(e)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,e))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(Ur),this._activateParents(e),H.trigger(this._element,Pr,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(Fr))ee.findOne(Kr,e.closest(Wr)).classList.add(Ur);else for(const t of ee.parents(e,$r))for(const e of ee.prev(t,Hr))e.classList.add(Ur)}_clearActiveClass(e){e.classList.remove(Ur);const t=ee.find(`${jr}.${Ur}`,e);for(const n of t)n.classList.remove(Ur)}static jQueryInterface(e){return this.each((function(){const t=Qr.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}))}}H.on(window,Mr,(()=>{for(const e of ee.find(Vr))Qr.getOrCreateInstance(e)})),C(Qr);const Yr="tab",Xr="bs.tab",Zr=`.${Xr}`,es=`hide${Zr}`,ts=`hidden${Zr}`,ns=`show${Zr}`,is=`shown${Zr}`,rs=`click${Zr}`,ss=`keydown${Zr}`,os=`load${Zr}`,as="ArrowLeft",cs="ArrowRight",ls="ArrowUp",us="ArrowDown",hs="Home",ds="End",fs="active",ps="fade",gs="show",ms="dropdown",_s=".dropdown-toggle",ys=".dropdown-menu",vs=":not(.dropdown-toggle)",ws='.list-group, .nav, [role="tablist"]',bs=".nav-item, .list-group-item",Es=`.nav-link${vs}, .list-group-item${vs}, [role="tab"]${vs}`,Ts='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Cs=`${Es}, ${Ts}`,Is=`.${fs}[data-bs-toggle="tab"], .${fs}[data-bs-toggle="pill"], .${fs}[data-bs-toggle="list"]`;class Ss extends X{constructor(e){super(e),this._parent=this._element.closest(ws),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),H.on(this._element,ss,(e=>this._keydown(e))))}static get NAME(){return Yr}show(){const e=this._element;if(this._elemIsActive(e))return;const t=this._getActiveElem(),n=t?H.trigger(t,es,{relatedTarget:e}):null,i=H.trigger(e,ns,{relatedTarget:t});i.defaultPrevented||n&&n.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){if(!e)return;e.classList.add(fs),this._activate(ee.getElementFromSelector(e));const n=()=>{"tab"===e.getAttribute("role")?(e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),H.trigger(e,is,{relatedTarget:t})):e.classList.add(gs)};this._queueCallback(n,e,e.classList.contains(ps))}_deactivate(e,t){if(!e)return;e.classList.remove(fs),e.blur(),this._deactivate(ee.getElementFromSelector(e));const n=()=>{"tab"===e.getAttribute("role")?(e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),H.trigger(e,ts,{relatedTarget:t})):e.classList.remove(gs)};this._queueCallback(n,e,e.classList.contains(ps))}_keydown(e){if(![as,cs,ls,us,hs,ds].includes(e.key))return;e.stopPropagation(),e.preventDefault();const t=this._getChildren().filter((e=>!m(e)));let n;if([hs,ds].includes(e.key))n=t[e.key===hs?0:t.length-1];else{const i=[cs,us].includes(e.key);n=k(t,e.target,i,!0)}n&&(n.focus({preventScroll:!0}),Ss.getOrCreateInstance(n).show())}_getChildren(){return ee.find(Cs,this._parent)}_getActiveElem(){return this._getChildren().find((e=>this._elemIsActive(e)))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const n of t)this._setInitialAttributesOnChild(n)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute("aria-selected",t),n!==e&&this._setAttributeIfNotExists(n,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const t=ee.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,t){const n=this._getOuterElement(e);if(!n.classList.contains(ms))return;const i=(e,i)=>{const r=ee.findOne(e,n);r&&r.classList.toggle(i,t)};i(_s,fs),i(ys,gs),n.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains(fs)}_getInnerElement(e){return e.matches(Cs)?e:ee.findOne(Cs,e)}_getOuterElement(e){return e.closest(bs)||e}static jQueryInterface(e){return this.each((function(){const t=Ss.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}))}}H.on(document,rs,Ts,(function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),m(this)||Ss.getOrCreateInstance(this).show()})),H.on(window,os,(()=>{for(const e of ee.find(Is))Ss.getOrCreateInstance(e)})),C(Ss);const ks="toast",As="bs.toast",Ns=`.${As}`,Rs=`mouseover${Ns}`,Os=`mouseout${Ns}`,xs=`focusin${Ns}`,Ds=`focusout${Ns}`,Ps=`hide${Ns}`,Ls=`hidden${Ns}`,Ms=`show${Ns}`,Fs=`shown${Ns}`,Us="fade",Vs="hide",js="show",$s="showing",qs={animation:"boolean",autohide:"boolean",delay:"number"},Bs={animation:!0,autohide:!0,delay:5e3};class zs extends X{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Bs}static get DefaultType(){return qs}static get NAME(){return ks}show(){const e=H.trigger(this._element,Ms);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Us);const t=()=>{this._element.classList.remove($s),H.trigger(this._element,Fs),this._maybeScheduleHide()};this._element.classList.remove(Vs),v(this._element),this._element.classList.add(js,$s),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this.isShown())return;const e=H.trigger(this._element,Ps);if(e.defaultPrevented)return;const t=()=>{this._element.classList.add(Vs),this._element.classList.remove($s,js),H.trigger(this._element,Ls)};this._element.classList.add($s),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(js),super.dispose()}isShown(){return this._element.classList.contains(js)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){H.on(this._element,Rs,(e=>this._onInteraction(e,!0))),H.on(this._element,Os,(e=>this._onInteraction(e,!1))),H.on(this._element,xs,(e=>this._onInteraction(e,!0))),H.on(this._element,Ds,(e=>this._onInteraction(e,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=zs.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}te(zs),C(zs);const Hs={Alert:le,Button:_e,Carousel:pt,Collapse:Mt,Dropdown:En,Modal:_i,Offcanvas:ji,Popover:Nr,ScrollSpy:Qr,Tab:Ss,Toast:zs,Tooltip:Tr};return Hs}))},89:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[i,r]of t)n[i]=r;return n}},7077:function(e,t,n){"use strict";n.d(t,{Jn:function(){return ge},qX:function(){return he},Xd:function(){return ue},Mq:function(){return _e},ZF:function(){return me},KN:function(){return ye}});n(7658);var i=n(7142),r=n(5168),s=n(223);n(2801);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(E(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),g.set(t,e),t}function _(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function v(e){y=e(y)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(T(this),t),E(h.get(this))}:function(...t){return E(e.apply(T(this),t))}:function(t,...n){const i=e.call(T(this),t,...n);return f.set(i,t.sort?t.sort():[t]),E(i)}}function b(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&_(e),o(e,l())?new Proxy(e,y):e)}function E(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=b(e);return t!==e&&(p.set(e,t),g.set(t,e)),t}const T=e=>g.get(e);function C(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=E(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(E(o.result),e.oldVersion,e.newVersion,E(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],k=new Map;function A(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=S.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!I.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return k.set(t,s),s}v((e=>({...e,get:(t,n,i)=>A(t,n)||e.get(t,n,i),has:(t,n)=>!!A(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(R(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function R(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const O="@firebase/app",x="0.9.15",D=new r.Yd("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",U="@firebase/app-check",V="@firebase/auth",j="@firebase/auth-compat",$="@firebase/database",q="@firebase/database-compat",B="@firebase/functions",z="@firebase/functions-compat",H="@firebase/installations",W="@firebase/installations-compat",K="@firebase/messaging",G="@firebase/messaging-compat",J="@firebase/performance",Q="@firebase/performance-compat",Y="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",ie="firebase",re="10.1.0",se="[DEFAULT]",oe={[O]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[U]:"fire-app-check",[F]:"fire-app-check-compat",[V]:"fire-auth",[j]:"fire-auth-compat",[$]:"fire-rtdb",[q]:"fire-rtdb-compat",[B]:"fire-fn",[z]:"fire-fn-compat",[H]:"fire-iid",[W]:"fire-iid-compat",[K]:"fire-fcm",[G]:"fire-fcm-compat",[J]:"fire-perf",[Q]:"fire-perf-compat",[Y]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[ie]:"fire-js-all"},ae=new Map,ce=new Map;function le(e,t){try{e.container.addComponent(t)}catch(n){D.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ue(e){const t=e.name;if(ce.has(t))return D.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())le(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new s.LL("app","Firebase",de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge=re;function me(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const r=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=r.name;if("string"!==typeof o||!o)throw fe.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw fe.create("no-options");const a=ae.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(r,a.config))return a;throw fe.create("duplicate-app",{appName:o})}const c=new i.H0(o);for(const i of ce.values())c.addComponent(i);const l=new pe(n,r,c);return ae.set(o,l),l}function _e(e=se){const t=ae.get(e);if(!t&&e===se&&(0,s.aH)())return me();if(!t)throw fe.create("no-app",{appName:e});return t}function ye(e,t,n){var r;let s=null!==(r=oe[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void D.warn(e.join(" "))}ue(new i.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ve="firebase-heartbeat-database",we=1,be="firebase-heartbeat-store";let Ee=null;function Te(){return Ee||(Ee=C(ve,we,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(be)}}}).catch((e=>{throw fe.create("idb-open",{originalErrorMessage:e.message})}))),Ee}async function Ce(e){try{const t=await Te(),n=await t.transaction(be).objectStore(be).get(Se(e));return n}catch(t){if(t instanceof s.ZR)D.warn(t.message);else{const e=fe.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});D.warn(e.message)}}}async function Ie(e,t){try{const n=await Te(),i=n.transaction(be,"readwrite"),r=i.objectStore(be);await r.put(t,Se(e)),await i.done}catch(n){if(n instanceof s.ZR)D.warn(n.message);else{const e=fe.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});D.warn(e.message)}}}function Se(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=1024,Ae=2592e6;class Ne{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Re();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Ae})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Re(),{heartbeatsToSend:t,unsentEntries:n}=Oe(this._heartbeatsCache.heartbeats),i=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Re(){const e=new Date;return e.toISOString().substring(0,10)}function Oe(e,t=ke){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),De(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),De(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class xe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ce(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function De(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(e){ue(new i.wA("platform-logger",(e=>new N(e)),"PRIVATE")),ue(new i.wA("heartbeat",(e=>new Ne(e)),"PRIVATE")),ye(O,x,e),ye(O,x,"esm2017"),ye("fire-js","")}Pe("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return l},wA:function(){return r}});var i=n(223);class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&s.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Yd:function(){return l},in:function(){return r}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i=[];var r;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=a[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}},7795:function(e,t,n){"use strict";n.d(t,{ZF:function(){return i.ZF}});var i=n(7077),r="firebase",s="10.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,i.KN)(r,s,"app")},3866:function(e,t,n){"use strict";n.d(t,{Xb:function(){return It},v0:function(){return Ui},Aj:function(){return Nt},e5:function(){return St},w7:function(){return Rt}});n(7658),n(6229),n(7330),n(2062);var i=n(223),r=n(7077);function s(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var o=n(5168),a=n(7142);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new i.LL("auth","Firebase",c()),h=new o.Yd("@firebase/auth");function d(e,...t){h.logLevel<=o["in"].WARN&&h.warn(`Auth (${r.Jn}): ${e}`,...t)}function f(e,...t){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${r.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw _(e,...t)}function g(e,...t){return _(e,...t)}function m(e,t,n){const r=Object.assign(Object.assign({},l()),{[t]:n}),s=new i.LL("auth","Firebase",r);return s.create(t,{appName:e.name})}function _(e,...t){if("string"!==typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return u.create(e,...t)}function y(e,t,...n){if(!e)throw _(t,...n)}function v(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function w(e,t){e||v(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function E(){return"http:"===T()||"https:"===T()}function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function I(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e,t){this.shortDelay=e,this.longDelay=t,w(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t){w(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},R=new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function x(e,t,n,r,s={}){return D(e,s,(async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),A.fetch()(L(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function D(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},N),t);try{const t=new M(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw F(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw F(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw F(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);p(e,a)}}catch(s){if(s instanceof i.ZR)throw s;p(e,"network-request-failed",{message:String(s)})}}async function P(e,t,n,i,r={}){const s=await x(e,t,n,i,r);return"mfaPendingCredential"in s&&p(e,"multi-factor-auth-required",{_serverResponse:s}),s}function L(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?k(e.config,r):`${e.config.apiScheme}://${r}`}class M{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(g(this.auth,"network-request-failed"))),R.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function F(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=g(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e,t){return x(e,"POST","/v1/accounts:delete",t)}async function V(e,t){return x(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t=!1){const n=(0,i.m9)(e),r=await n.getIdToken(t),s=B(r);y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:j(q(s.auth_time)),issuedAtTime:j(q(s.iat)),expirationTime:j(q(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function q(e){return 1e3*Number(e)}function B(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.tV)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function z(e){const t=B(e);return y(t,"internal-error"),y("undefined"!==typeof t.exp,"internal-error"),y("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.ZR&&W(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function W({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=j(this.lastLoginAt),this.creationTime=j(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e){var t;const n=e.auth,i=await e.getIdToken(),r=await H(e,V(n,{idToken:i}));y(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?X(s.providerUserInfo):[],a=Y(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new G(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function Q(e){const t=(0,i.m9)(e);await J(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Y(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function X(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e,t){const n=await D(e,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=L(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y("undefined"!==typeof e.idToken,"internal-error"),y("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):z(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await Z(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new ee;return n&&(y("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(y("string"===typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(y("number"===typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ee,this.toJSON())}_performRefresh(){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e,t){y("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ne{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new K(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new G(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await H(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $(this,e)}reload(){return Q(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ne(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await J(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await H(this,U(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,_=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:T}=t;y(v&&T,e,"internal-error");const C=ee.fromJSON(this.name,T);y("string"===typeof v,e,"internal-error"),te(u,e.name),te(h,e.name),y("boolean"===typeof w,e,"internal-error"),y("boolean"===typeof b,e,"internal-error"),te(d,e.name),te(f,e.name),te(p,e.name),te(g,e.name),te(m,e.name),te(_,e.name);const I=new ne({uid:v,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:C,createdAt:m,lastLoginAt:_});return E&&Array.isArray(E)&&(I.providerData=E.map((e=>Object.assign({},e)))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(e,t,n=!1){const i=new ee;i.updateFromServerResponse(t);const r=new ne({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await J(r),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=new Map;function re(e){w(e instanceof Function,"Expected a class definition");let t=ie.get(e);return t?(w(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ie.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const oe=se;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t,n){return`firebase:${e}:${t}:${n}`}class ce{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=ae(this.userKey,i.apiKey,r),this.fullPersistenceKey=ae("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ne._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ce(re(oe),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||re(oe);const s=ae(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){const n=ne._fromJSON(e,t);l!==r&&(o=n),r=l;break}}catch(c){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(c){}}))),new ce(r,e,n)):new ce(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(fe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ue(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ge(t))return"Blackberry";if(me(t))return"Webos";if(he(t))return"Safari";if((t.includes("chrome/")||de(t))&&!t.includes("edge/"))return"Chrome";if(pe(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ue(e=(0,i.z$)()){return/firefox\//i.test(e)}function he(e=(0,i.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function de(e=(0,i.z$)()){return/crios\//i.test(e)}function fe(e=(0,i.z$)()){return/iemobile/i.test(e)}function pe(e=(0,i.z$)()){return/android/i.test(e)}function ge(e=(0,i.z$)()){return/blackberry/i.test(e)}function me(e=(0,i.z$)()){return/webos/i.test(e)}function _e(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ye(e=(0,i.z$)()){var t;return _e(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function ve(){return(0,i.w1)()&&10===document.documentMode}function we(e=(0,i.z$)()){return _e(e)||pe(e)||me(e)||ge(e)||/windows phone/i.test(e)||fe(e)}function be(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e,t=[]){let n;switch(e){case"Browser":n=le((0,i.z$)());break;case"Worker":n=`${le((0,i.z$)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.Jn}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Te(e,t){return x(e,"GET","/v2/recaptchaConfig",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e){return void 0!==e&&void 0!==e.enterprise}class Ie{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function ke(e){return new Promise(((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=g("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",Se().appendChild(i)}))}function Ae(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Ne="https://www.google.com/recaptcha/enterprise.js?render=",Re="recaptcha-enterprise",Oe="NO_RECAPTCHA";class xe{constructor(e){this.type=Re,this.auth=Me(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Te(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new Ie(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function i(t,n,i){const r=window.grecaptcha;Ce(r)?r.enterprise.ready((()=>{r.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(Oe)}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{n(this.auth).then((n=>{if(!t&&Ce(window.grecaptcha))i(n,e,r);else{if("undefined"===typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));ke(Ne+n).then((()=>{i(n,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}}async function De(e,t,n,i=!1){const r=new xe(e);let s;try{s=await r.verify(n)}catch(a){s=await r.verify(n,!0)}const o=Object.assign({},t);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{const i=e(t);n(i)}catch(r){i(r)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fe(this),this.idTokenSubscription=new Fe(this),this.beforeStateQueue=new Pe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=re(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await ce.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===i||void 0===i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await J(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=I()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.m9)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(re(e))}))}async initializeRecaptchaConfig(){const e=await Te(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Ie(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){const e=new xe(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&re(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await ce.create(this,[re(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return y(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"===typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ee(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&d(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Me(e){return(0,i.m9)(e)}class Fe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)((e=>this.observer=e))}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e,t){const n=(0,r.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,i.vZ)(r,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const s=n.initialize({options:t});return s}function Ve(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(re);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null===t||void 0===t?void 0:t.popupRedirectResolver)}function je(e,t,n){const i=Me(e);y(i._canInitEmulator,i,"emulator-config-failed"),y(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null===n||void 0===n?void 0:n.disableWarnings),s=$e(t),{host:o,port:a}=qe(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||ze()}function $e(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function qe(e){const t=$e(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:Be(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Be(t)}}}function Be(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function ze(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return v("not implemented")}_getIdTokenResponse(e){return v("not implemented")}_linkToIdToken(e,t){return v("not implemented")}_getReauthenticationResolver(e){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function We(e,t){return x(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ke(e,t){return P(e,"POST","/v1/accounts:signInWithPassword",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ge(e,t){return P(e,"POST","/v1/accounts:signInWithEmailLink",O(e,t))}async function Je(e,t){return P(e,"POST","/v1/accounts:signInWithEmailLink",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends He{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Qe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Qe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await De(e,n,"signInWithPassword");return Ke(e,t)}return Ke(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await De(e,n,"signInWithPassword");return Ke(e,t)}return Promise.reject(t)}));case"emailLink":return Ge(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return We(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Je(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ye(e,t){return P(e,"POST","/v1/accounts:signInWithIdp",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="http://localhost";class Ze extends He{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=s(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Ze(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ye(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ye(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ye(e,t)}buildRequest(){const e={requestUri:Xe,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(e,t){return x(e,"POST","/v1/accounts:sendVerificationCode",O(e,t))}async function tt(e,t){return P(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,t))}async function nt(e,t){const n=await P(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,t));if(n.temporaryProof)throw F(e,"account-exists-with-different-credential",n);return n}const it={["USER_NOT_FOUND"]:"user-not-found"};async function rt(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return P(e,"POST","/v1/accounts:signInWithPhoneNumber",O(e,n),it)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends He{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new st({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new st({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return tt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return nt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return rt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new st({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function at(e){const t=(0,i.zd)((0,i.pd)(e))["link"],n=t?(0,i.zd)((0,i.pd)(t))["deep_link_id"]:null,r=(0,i.zd)((0,i.pd)(e))["deep_link_id"],s=r?(0,i.zd)((0,i.pd)(r))["link"]:null;return s||r||n||t||e}class ct{constructor(e){var t,n,r,s,o,a;const c=(0,i.zd)((0,i.pd)(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ot(null!==(r=c["mode"])&&void 0!==r?r:null);y(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=at(e);try{return new ct(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt{constructor(){this.providerId=lt.PROVIDER_ID}static credential(e,t){return Qe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ct.parseLink(t);return y(n,"argument-error"),Qe._fromEmailAndCode(e,n.code,n.tenantId)}}lt.PROVIDER_ID="password",lt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",lt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends ut{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt extends ht{constructor(){super("facebook.com")}static credential(e){return Ze._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return dt.credential(e.oauthAccessToken)}catch(t){return null}}}dt.FACEBOOK_SIGN_IN_METHOD="facebook.com",dt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft extends ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ze._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ft.credential(t,n)}catch(i){return null}}}ft.GOOGLE_SIGN_IN_METHOD="google.com",ft.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt extends ht{constructor(){super("github.com")}static credential(e){return Ze._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch(t){return null}}}pt.GITHUB_SIGN_IN_METHOD="github.com",pt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt extends ht{constructor(){super("twitter.com")}static credential(e,t){return Ze._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return gt.credential(t,n)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function mt(e,t){return P(e,"POST","/v1/accounts:signUp",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gt.TWITTER_SIGN_IN_METHOD="twitter.com",gt.PROVIDER_ID="twitter.com";class _t{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await ne._fromIdTokenResponse(e,n,i),s=yt(n),o=new _t({user:r,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=yt(n);return new _t({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function yt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt extends i.ZR{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,vt.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new vt(e,t,n,i)}}function wt(e,t,n,i){const r="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw vt._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bt(e,t,n=!1){const i=await H(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return _t._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Et(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await H(e,wt(i,r,t,e),n);y(s.idToken,i,"internal-error");const o=B(s.idToken);y(o,i,"internal-error");const{sub:a}=o;return y(e.uid===a,i,"user-mismatch"),_t._forOperation(e,r,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&p(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tt(e,t,n=!1){const i="signIn",r=await wt(e,i,t),s=await _t._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function Ct(e,t){return Tt(Me(e),t)}async function It(e,t,n){var i;const r=Me(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(i=r._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled){const e=await De(r,s,"signUpPassword");o=mt(r,e)}else o=mt(r,s).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await De(r,s,"signUpPassword");return mt(r,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),c=await _t._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function St(e,t,n){return Ct((0,i.m9)(e),lt.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(e,t,n,r){return(0,i.m9)(e).onIdTokenChanged(t,n,r)}function At(e,t,n){return(0,i.m9)(e).beforeAuthStateChanged(t,n)}function Nt(e,t,n,r){return(0,i.m9)(e).onAuthStateChanged(t,n,r)}function Rt(e){return(0,i.m9)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ot(e,t){return x(e,"POST","/v2/accounts/mfaEnrollment:start",O(e,t))}function xt(e,t){return x(e,"POST","/v2/accounts/mfaEnrollment:finalize",O(e,t))}function Dt(e,t){return x(e,"POST","/v2/accounts/mfaEnrollment:start",O(e,t))}function Pt(e,t){return x(e,"POST","/v2/accounts/mfaEnrollment:finalize",O(e,t))}new WeakMap;const Lt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Lt,"1"),this.storage.removeItem(Lt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){const e=(0,i.z$)();return he(e)||_e(e)}const Ut=1e3,Vt=10;class jt extends Mt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ft()&&be(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);ve()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Vt):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Ut)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jt.type="LOCAL";const $t=jt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Mt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qt.type="SESSION";const Bt=qt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Ht(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await zt(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wt(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht.receivers=[];class Kt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=Wt("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return window}function Jt(e){Gt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return"undefined"!==typeof Gt()["WorkerGlobalScope"]&&"function"===typeof Gt()["importScripts"]}async function Yt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Xt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Zt(){return Qt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en="firebaseLocalStorageDb",tn=1,nn="firebaseLocalStorage",rn="fbase_key";class sn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function on(e,t){return e.transaction([nn],t?"readwrite":"readonly").objectStore(nn)}function an(){const e=indexedDB.deleteDatabase(en);return new sn(e).toPromise()}function cn(){const e=indexedDB.open(en,tn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(nn,{keyPath:rn})}catch(i){n(i)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(nn)?t(n):(n.close(),await an(),t(await cn()))}))}))}async function ln(e,t,n){const i=on(e,!0).put({[rn]:t,value:n});return new sn(i).toPromise()}async function un(e,t){const n=on(e,!1).get(t),i=await new sn(n).toPromise();return void 0===i?null:i.value}function hn(e,t){const n=on(e,!0).delete(t);return new sn(n).toPromise()}const dn=800,fn=3;class pn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await cn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>fn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ht._getInstance(Zt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Yt(),!this.activeServiceWorker)return;this.sender=new Kt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Xt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cn();return await ln(e,Lt,"1"),await hn(e,Lt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ln(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>un(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>hn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=on(e,!1).getAll();return new sn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),dn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}pn.type="LOCAL";const gn=pn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(e,t){return x(e,"POST","/v2/accounts/mfaSignIn:start",O(e,t))}function _n(e,t){return x(e,"POST","/v2/accounts/mfaSignIn:finalize",O(e,t))}function yn(e,t){return x(e,"POST","/v2/accounts/mfaSignIn:finalize",O(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ae("rcb"),new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn="recaptcha";async function wn(e,t,n){var i;const r=await n.verify();try{let s;if(y("string"===typeof r,e,"argument-error"),y(n.type===vn,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){y("enroll"===t.type,e,"internal-error");const n=await Ot(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{y("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;y(n,e,"missing-multi-factor-info");const o=await mn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await et(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bn{constructor(e){this.providerId=bn.PROVIDER_ID,this.auth=Me(e)}verifyPhoneNumber(e,t){return wn(this.auth,e,(0,i.m9)(t))}static credential(e,t){return st._fromVerification(e,t)}static credentialFromResult(e){const t=e;return bn.credentialFromTaggedObject(t)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?st._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function En(e,t){return t?re(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn.PROVIDER_ID="phone",bn.PHONE_SIGN_IN_METHOD="phone";class Tn extends He{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ye(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ye(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ye(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Cn(e){return Tt(e.auth,new Tn(e),e.bypassAuthState)}function In(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),Et(n,new Tn(e),e.bypassAuthState)}async function Sn(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),bt(n,new Tn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cn;case"linkViaPopup":case"linkViaRedirect":return Sn;case"reauthViaPopup":case"reauthViaRedirect":return In;default:p(this.auth,"internal-error")}}resolve(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new S(2e3,1e4);class Nn extends kn{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Nn.currentPopupAction&&Nn.currentPopupAction.cancel(),Nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const e=Wt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,An.get())};e()}}Nn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rn="pendingRedirect",On=new Map;class xn extends kn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=On.get(this.auth._key());if(!e){try{const t=await Dn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}On.set(this.auth._key(),e)}return this.bypassAuthState||On.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Dn(e,t){const n=Mn(t),i=Ln(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}function Pn(e,t){On.set(e._key(),t)}function Ln(e){return re(e._redirectPersistence)}function Mn(e){return ae(Rn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(e,t,n=!1){const i=Me(e),r=En(i,t),s=new xn(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Un=6e5;class Vn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!qn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!$n(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(g(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Un&&this.cachedEventUids.clear(),this.cachedEventUids.has(jn(e))}saveEventToCache(e){this.cachedEventUids.add(jn(e)),this.lastProcessedEventTime=Date.now()}}function jn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function $n({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function qn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $n(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(e,t={}){return x(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hn=/^https?/;async function Wn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Bn(e);for(const i of t)try{if(Kn(i))return}catch(n){}p(e,"unauthorized-domain")}function Kn(e){const t=b(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Hn.test(n))return!1;if(zn.test(e))return i===e;const r=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=new S(3e4,6e4);function Jn(){const e=Gt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Qn(e){return new Promise(((t,n)=>{var i,r,s;function o(){Jn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Jn(),n(g(e,"network-request-failed"))},timeout:Gn.get()})}if(null===(r=null===(i=Gt().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Gt().gapi)||void 0===s?void 0:s.load)){const t=Ae("iframefcb");return Gt()[t]=()=>{gapi.load?o():n(g(e,"network-request-failed"))},ke(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Yn=null,e}))}let Yn=null;function Xn(e){return Yn=Yn||Qn(e),Yn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new S(5e3,15e3),ei="__/auth/iframe",ti="emulator/auth/iframe",ni={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ii=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ri(e){const t=e.config;y(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?k(t,ti):`https://${e.config.authDomain}/${ei}`,s={apiKey:t.apiKey,appName:e.name,v:r.Jn},o=ii.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.xO)(s).slice(1)}`}async function si(e){const t=await Xn(e),n=Gt().gapi;return y(n,e,"internal-error"),t.open({where:document.body,url:ri(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ni,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=g(e,"network-request-failed"),s=Gt().setTimeout((()=>{i(r)}),Zn.get());function o(){Gt().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ai=500,ci=600,li="_blank",ui="http://localhost";class hi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function di(e,t,n,r=ai,s=ci){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},oi),{width:r.toString(),height:s.toString(),top:o,left:a}),u=(0,i.z$)().toLowerCase();n&&(c=de(u)?li:n),ue(u)&&(t=t||ui,l.scrollbars="yes");const h=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(ye(u)&&"_self"!==c)return fi(t||"",c),new hi(null);const d=window.open(t||"",c,h);y(d,e,"popup-blocked");try{d.focus()}catch(f){}return new hi(d)}function fi(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi="__/auth/handler",gi="emulator/auth/handler",mi=encodeURIComponent("fac");async function _i(e,t,n,s,o,a){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:r.Jn,eventId:o};if(t instanceof ut){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof ht){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const i of Object.keys(l))void 0===l[i]&&delete l[i];const u=await e._getAppCheckToken(),h=u?`#${mi}=${encodeURIComponent(u)}`:"";return`${yi(e)}?${(0,i.xO)(l).slice(1)}${h}`}function yi({config:e}){return e.emulator?k(e,gi):`https://${e.authDomain}/${pi}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi="webStorageSupport";class wi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bt,this._completeRedirectFn=Fn,this._overrideRedirectResult=Pn}async _openPopup(e,t,n,i){var r;w(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=await _i(e,t,n,b(),i);return di(e,s,Wt())}async _openRedirect(e,t,n,i){await this._originValidation(e);const r=await _i(e,t,n,b(),i);return Jt(r),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await si(e),n=new Vn(e);return t.register("authEvent",(t=>{y(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const i=n.onEvent(t.authEvent);return{status:i?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(vi,{type:vi},(n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[vi];void 0!==r&&t(!!r),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Wn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||he()||_e()}}const bi=wi;class Ei{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return v("unexpected MultiFactorSessionType")}}}class Ti extends Ei{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ti(e)}_finalizeEnroll(e,t,n){return xt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return _n(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Ci{constructor(){}static assertion(e){return Ti._fromCredential(e)}}Ci.FACTOR_ID="phone";class Ii{static assertionForEnrollment(e,t){return Si._fromSecret(e,t)}static assertionForSignIn(e,t){return Si._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;y("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const i=await Dt(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return ki._fromStartTotpMfaEnrollmentResponse(i,n.user.auth)}}Ii.FACTOR_ID="totp";class Si extends Ei{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Si(t,void 0,e)}static _fromEnrollmentId(e,t){return new Si(t,e)}async _finalizeEnroll(e,t,n){return y("undefined"!==typeof this.secret,e,"argument-error"),Pt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){y(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return yn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class ki{constructor(e,t,n,i,r,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(e,t){return new ki(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let i=!1;return(Ai(e)||Ai(t))&&(i=!0),i&&(Ai(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Ai(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Ai(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Ni="@firebase/auth",Ri="1.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oi{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Di(e){(0,r.Xd)(new a.wA("auth",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;y(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ee(e)},l=new Le(i,r,s,c);return Ve(l,n),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const i=e.getProvider("auth-internal");i.initialize()}))),(0,r.Xd)(new a.wA("auth-internal",(e=>{const t=Me(e.getProvider("auth").getImmediate());return(e=>new Oi(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KN)(Ni,Ri,xi(e)),(0,r.KN)(Ni,Ri,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=300,Li=(0,i.Pz)("authIdTokenMaxAge")||Pi;let Mi=null;const Fi=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Li)return;const r=null===n||void 0===n?void 0:n.token;Mi!==r&&(Mi=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Ui(e=(0,r.Mq)()){const t=(0,r.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Ue(e,{popupRedirectResolver:bi,persistence:[gn,$t,Bt]}),s=(0,i.Pz)("authTokenSyncURL");if(s){const e=Fi(s);At(n,e,(()=>e(n.currentUser))),kt(n,(t=>e(t)))}const o=(0,i.q4)("auth");return o&&je(n,`http://${o}`),n}Di("Browser")},7130:function(e,t,n){"use strict";n(7658);var i=n(7077),r=n(7142),s=n(223),o=n(5168);const a="@firebase/database",c="1.0.1";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l="";function u(e){l=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,s.Wl)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,s.cI)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,s.r3)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},p=f("localStorage"),g=f("sessionStorage"),m=new o.Yd("@firebase/database"),_=function(){let e=1;return function(){return e++}}(),y=function(e){const t=(0,s.dS)(e),n=new s.gQ;n.update(t);const i=n.digest();return s.US.encodeByteArray(i)},v=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=v.apply(null,i):t+="object"===typeof i?(0,s.Wl)(i):i,t+=" "}return t};let w=null,b=!0;const E=function(e,t){(0,s.hu)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(m.logLevel=o["in"].VERBOSE,w=m.log.bind(m),t&&g.set("logging_enabled",!0)):"function"===typeof e?w=e:(w=null,g.remove("logging_enabled"))},T=function(...e){if(!0===b&&(b=!1,null===w&&!0===g.get("logging_enabled")&&E(!0)),w){const t=v.apply(null,e);w(t)}},C=function(e){return function(...t){T(e,...t)}},I=function(...e){const t="FIREBASE INTERNAL ERROR: "+v(...e);m.error(t)},S=function(...e){const t=`FIREBASE FATAL ERROR: ${v(...e)}`;throw m.error(t),new Error(t)},k=function(...e){const t="FIREBASE WARNING: "+v(...e);m.warn(t)},A=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&k("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},N=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},R=function(e){if((0,s.Yr)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},O="[MIN_NAME]",x="[MAX_NAME]",D=function(e,t){if(e===t)return 0;if(e===O||t===x)return-1;if(t===O||e===x)return 1;{const n=H(e),i=H(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},P=function(e,t){return e===t?0:e<t?-1:1},L=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,s.Wl)(t))},M=function(e){if("object"!==typeof e||null===e)return(0,s.Wl)(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=(0,s.Wl)(t[i]),n+=":",n+=M(e[t[i]]);return n+="}",n},F=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function U(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const V=function(e){(0,s.hu)(!N(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let r,o,a,c,l;0===e?(o=0,a=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),i),o=c+i,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-i-n))));const u=[];for(l=n;l;l-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);u.push(r?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(h.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},j=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},$=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};const q=new RegExp("^-?(0*)\\d{1,10}$"),B=-2147483648,z=2147483647,H=function(e){if(q.test(e)){const t=Number(e);if(t>=B&&t<=z)return t}return null},W=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw k("Exception was thrown by user callback.",e),t}),Math.floor(0))}},K=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},G=function(e,t){const n=setTimeout(e,t);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){k(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(T("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',k(e)}}class Y{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Y.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const X="5",Z="v",ee="s",te="r",ne="f",ie=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,re="ls",se="p",oe="ac",ae="websocket",ce="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le{constructor(e,t,n,i,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function ue(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function he(e,t,n){let i;if((0,s.hu)("string"===typeof t,"typeof type must == string"),(0,s.hu)("object"===typeof n,"typeof params must == object"),t===ae)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ce)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}ue(e)&&(n["ns"]=e.namespace);const r=[];return U(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,s.r3)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,s.p$)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe={},pe={};function ge(e){const t=e.toString();return fe[t]||(fe[t]=new de),fe[t]}function me(e,t){const n=e.toString();return pe[n]||(pe[n]=t()),pe[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&W((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="start",ve="close",we="pLPCommand",be="pRTLPCB",Ee="id",Te="pw",Ce="ser",Ie="cb",Se="seg",ke="ts",Ae="d",Ne="dframe",Re=1870,Oe=30,xe=Re-Oe,De=25e3,Pe=3e4;class Le{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=C(e),this.stats_=ge(t),this.urlFn=e=>(this.appCheckToken&&(e[oe]=this.appCheckToken),he(t,ce,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new _e(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Pe)),R((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Me(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ye)this.id=n,this.password=i;else{if(t!==ve)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[ye]="t",e[Ce]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Ie]=this.scriptTagHolder.uniqueCallbackIdentifier),e[Z]=X,this.transportSessionId&&(e[ee]=this.transportSessionId),this.lastSessionId&&(e[re]=this.lastSessionId),this.applicationId&&(e[se]=this.applicationId),this.appCheckToken&&(e[oe]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(e[te]=ne);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Le.forceAllow_=!0}static forceDisallow(){Le.forceDisallow_=!0}static isAvailable(){return!(0,s.Yr)()&&(!!Le.forceAllow_||!Le.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!j()&&!$())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,s.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,s.h$)(t),i=F(n,xe);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,s.Yr)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Ne]="t",n[Ee]=e,n[Te]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,s.Wl)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Me{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,s.Yr)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=_(),window[we+this.uniqueCallbackIdentifier]=e,window[be+this.uniqueCallbackIdentifier]=t,this.myIFrame=Me.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){T("frame writing exception"),r.stack&&T(r.stack),T(r)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||T("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ee]=this.myID,e[Te]=this.myPW,e[Ce]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Oe+n.length<=Re))break;{const e=this.pendingSegs.shift();n=n+"&"+Se+i+"="+e.seg+"&"+ke+i+"="+e.ts+"&"+Ae+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(De)),r=()=>{clearTimeout(i),n()};this.addTag(e,r)}addTag(e,t){(0,s.Yr)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{T("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=16384,Ue=45e3;let Ve=null;"undefined"!==typeof MozWebSocket?Ve=MozWebSocket:"undefined"!==typeof WebSocket&&(Ve=WebSocket);class je{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=C(this.connId),this.stats_=ge(t),this.connURL=je.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){const o={};return o[Z]=X,!(0,s.Yr)()&&"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(o[te]=ne),t&&(o[ee]=t),n&&(o[re]=n),i&&(o[oe]=i),r&&(o[se]=r),he(e,ae,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{let e;if((0,s.Yr)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${X}/${l}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/"},i=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];i&&(e["proxy"]={origin:i})}this.mySock=new Ve(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){je.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Ve&&!je.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,s.cI)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,s.hu)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,s.Wl)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=F(t,Fe);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(Ue))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}je.responsesRequiredToBeHealthy=2,je.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $e{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Le,je]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=je&&je["isAvailable"]();let n=t&&!je.previouslyFailed();if(e.webSocketOnly&&(t||k("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[je];else{const e=this.transports_=[];for(const t of $e.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);$e.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}$e.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qe=6e4,Be=5e3,ze=10240,He=102400,We="t",Ke="d",Ge="s",Je="r",Qe="e",Ye="o",Xe="a",Ze="n",et="p",tt="h";class nt{constructor(e,t,n,i,r,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=C("c:"+this.id+":"),this.transportManager_=new $e(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=G((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>He?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ze?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(We in e){const t=e[We];t===Xe?this.upgradeIfSecondaryHealthy_():t===Je?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Ye&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=L("t",e),n=L("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:et,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xe,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ze,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=L("t",e),n=L("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=L(We,e);if(Ke in e){const n=e[Ke];if(t===tt){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if(t===Ze){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ge?this.onConnectionShutdown_(n):t===Je?this.onReset_(n):t===Qe?I("Server Error: "+n):t===Ye?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):I("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),X!==n&&k("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),G((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(qe))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):G((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(Be))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:et,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,s.hu)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!n||n===i[r].context))return void i.splice(r,1)}validateEventType_(e){(0,s.hu)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends rt{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,s.uI)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new st}getInitialEvent(e){return(0,s.hu)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=32,at=768;class ct{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function lt(){return new ct("")}function ut(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ht(e){return e.pieces_.length-e.pieceNum_}function dt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ct(e.pieces_,t)}function ft(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function pt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function gt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function mt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ct(t,0)}function _t(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof ct)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ct(n,0)}function yt(e){return e.pieceNum_>=e.pieces_.length}function vt(e,t){const n=ut(e),i=ut(t);if(null===n)return t;if(n===i)return vt(dt(e),dt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function wt(e,t){if(ht(e)!==ht(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function bt(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(ht(e)>ht(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Et{constructor(e,t){this.errorPrefix_=t,this.parts_=gt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,s.ug)(this.parts_[n]);It(this)}}function Tt(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,s.ug)(t),It(e)}function Ct(e){const t=e.parts_.pop();e.byteLength_-=(0,s.ug)(t),e.parts_.length>0&&(e.byteLength_-=1)}function It(e){if(e.byteLength_>at)throw new Error(e.errorPrefix_+"has a key path longer than "+at+" bytes ("+e.byteLength_+").");if(e.parts_.length>ot)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ot+") or object contains a cycle "+St(e))}function St(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends rt{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new kt}getInitialEvent(e){return(0,s.hu)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=1e3,Nt=3e5,Rt=3e4,Ot=1.3,xt=3e4,Dt="server_kill",Pt=3;class Lt extends it{constructor(e,t,n,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Lt.nextPersistentConnectionId_++,this.log_=C("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=At,this.maxReconnectDelay_=Nt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!(0,s.Yr)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");kt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&st.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_((0,s.Wl)(r)),(0,s.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new s.BH,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),(0,s.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,s.hu)(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n},s="q";e.tag&&(r["q"]=t._queryObject,r["t"]=e.tag),r["h"]=e.hashFn(),this.sendRequest(s,r,(r=>{const s=r["d"],o=r["s"];Lt.warnOnListenWarnings_(s,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,s.r3)(e,"w")){const n=(0,s.DV)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();k(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,s.GJ)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,s.w9)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,s.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const r=this.removeListen_(n,i);r&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},s="n";i&&(r["q"]=n,r["t"]=i),this.sendRequest(s,r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s["h"]=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,s.Wl)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):I("Unrecognized action received from server: "+(0,s.Wl)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,s.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>xt&&(this.reconnectDelay_=At),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ot)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Lt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},l=function(e){(0,s.hu)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?T("getToken() completed but was canceled"):(T("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=c&&c.token,a=new nt(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{k(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Dt)}),r))}catch(I){this.log_("Failed to get token: "+I),o||(this.repoInfo_.nodeAdmin&&k(I),c())}}}interrupt(e){T("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){T("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,s.xb)(this.interruptReasons_)&&(this.reconnectDelay_=At,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>M(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new ct(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){T("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Pt&&(this.reconnectDelay_=Rt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){T("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Pt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,s.Yr)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+l.replace(/\./g,"-")]=1,(0,s.uI)()?e["framework.cordova"]=1:(0,s.b$)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=st.getInstance().currentlyOnline();return(0,s.xb)(this.interruptReasons_)&&e}}Lt.nextPersistentConnectionId_=0,Lt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Mt(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Mt(O,e),i=new Mt(O,t);return 0!==this.compare(n,i)}minPost(){return Mt.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ut;class Vt extends Ft{static get __EMPTY_NODE(){return Ut}static set __EMPTY_NODE(e){Ut=e}compare(e,t){return D(e.name,t.name)}isDefinedOn(e){throw(0,s.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Mt.MIN}maxPost(){return new Mt(x,Ut)}makePost(e,t){return(0,s.hu)("string"===typeof e,"KeyIndex indexValue must always be a string."),new Mt(e,Ut)}toString(){return".key"}}const jt=new Vt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;while(!e.isEmpty())if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class qt{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:qt.RED,this.left=null!=i?i:zt.EMPTY_NODE,this.right=null!=r?r:zt.EMPTY_NODE}copy(e,t,n,i,r){return new qt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return zt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return zt.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}qt.RED=!0,qt.BLACK=!1;class Bt{copy(e,t,n,i,r){return this}insert(e,t,n){return new qt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class zt{constructor(e,t=zt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new zt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,qt.BLACK,null,null))}remove(e){return new zt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $t(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new $t(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new $t(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new $t(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ht(e,t){return D(e.name,t.name)}function Wt(e,t){return D(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kt;function Gt(e){Kt=e}zt.EMPTY_NODE=new Bt;const Jt=function(e){return"number"===typeof e?"number:"+V(e):"string:"+e},Qt=function(e){if(e.isLeafNode()){const t=e.val();(0,s.hu)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,s.r3)(t,".sv"),"Priority must be a string or number.")}else(0,s.hu)(e===Kt||e.isEmpty(),"priority of unexpected type.");(0,s.hu)(e===Kt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Yt,Xt,Zt;class en{constructor(e,t=en.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,s.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Qt(this.priorityNode_)}static set __childrenNodeConstructor(e){Yt=e}static get __childrenNodeConstructor(){return Yt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new en(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:en.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return yt(e)?this:".priority"===ut(e)?this.priorityNode_:en.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:en.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ut(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,s.hu)(".priority"!==n||1===ht(e),".priority must be the last token in a path"),this.updateImmediateChild(n,en.__childrenNodeConstructor.EMPTY_NODE.updateChild(dt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?V(this.value_):this.value_,this.lazyHash_=y(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===en.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof en.__childrenNodeConstructor?-1:((0,s.hu)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=en.VALUE_TYPE_ORDER.indexOf(t),r=en.VALUE_TYPE_ORDER.indexOf(n);return(0,s.hu)(i>=0,"Unknown leaf type: "+t),(0,s.hu)(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function tn(e){Xt=e}function nn(e){Zt=e}en.VALUE_TYPE_ORDER=["object","boolean","number","string"];class rn extends Ft{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?D(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Mt.MIN}maxPost(){return new Mt(x,new en("[PRIORITY-POST]",Zt))}makePost(e,t){const n=Xt(e);return new Mt(t,new en("[PRIORITY-POST]",n))}toString(){return".priority"}}const sn=new rn,on=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){const t=e=>parseInt(Math.log(e)/on,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const cn=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new qt(a,o.node,qt.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=r(t,c),u=r(c+1,i);return o=e[c],a=n?n(o):o,new qt(a,o.node,qt.BLACK,l,u)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const l=r(s+1,a),u=e[s],h=n?n(u):u;c(new qt(h,u.node,i,null,l))},c=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,qt.BLACK):(a(i,qt.BLACK),a(i,qt.RED))}return s},o=new an(e.length),a=s(o);return new zt(i||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ln;const un={};class hn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,s.hu)(un&&sn,"ChildrenNode.ts has not been loaded"),ln=ln||new hn({".priority":un},{".priority":sn}),ln}get(e){const t=(0,s.DV)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof zt?t:null}hasIndex(e){return(0,s.r3)(this.indexSet_,e.toString())}addIndex(e,t){(0,s.hu)(e!==jt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Mt.Wrap);let o,a=r.getNext();while(a)i=i||e.isDefinedOn(a.node),n.push(a),a=r.getNext();o=i?cn(n,e.getCompare()):un;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=o,new hn(u,l)}addToIndexes(e,t){const n=(0,s.UI)(this.indexes_,((n,i)=>{const r=(0,s.DV)(this.indexSet_,i);if((0,s.hu)(r,"Missing index implementation for "+i),n===un){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Mt.Wrap);let s=i.getNext();while(s)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),cn(n,r.getCompare())}return un}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Mt(e.name,i))),r.insert(e,e.node)}}));return new hn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,s.UI)(this.indexes_,(n=>{if(n===un)return n;{const i=t.get(e.name);return i?n.remove(new Mt(e.name,i)):n}}));return new hn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn;class fn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Qt(this.priorityNode_),this.children_.isEmpty()&&(0,s.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return dn||(dn=new fn(new zt(Wt),null,hn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||dn}updatePriority(e){return this.children_.isEmpty()?this:new fn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?dn:t}}getChild(e){const t=ut(e);return null===t?this:this.getImmediateChild(t).getChild(dt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,s.hu)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Mt(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?dn:this.priorityNode_;return new fn(i,s,r)}}updateChild(e,t){const n=ut(e);if(null===n)return t;{(0,s.hu)(".priority"!==ut(e)||1===ht(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(dt(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(sn,((s,o)=>{t[s]=o.val(e),n++,r&&fn.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jt(this.getPriority().val())+":"),this.forEachChild(sn,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":y(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Mt(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Mt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Mt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Mt.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Mt.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gn?-1:0}withIndex(e){if(e===jt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new fn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===jt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(sn),n=t.getIterator(sn);let i=e.getNext(),r=n.getNext();while(i&&r){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===jt?null:this.indexMap_.get(e.toString())}}fn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class pn extends fn{constructor(){super(new zt(Wt),fn.EMPTY_NODE,hn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return fn.EMPTY_NODE}isEmpty(){return!1}}const gn=new pn;Object.defineProperties(Mt,{MIN:{value:new Mt(O,fn.EMPTY_NODE)},MAX:{value:new Mt(x,gn)}}),Vt.__EMPTY_NODE=fn.EMPTY_NODE,en.__childrenNodeConstructor=fn,Gt(gn),nn(gn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mn=!0;function _n(e,t=null){if(null===e)return fn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,s.hu)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new en(n,_n(t))}if(e instanceof Array||!mn){let n=fn.EMPTY_NODE;return U(e,((t,i)=>{if((0,s.r3)(e,t)&&"."!==t.substring(0,1)){const e=_n(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(_n(t))}{const n=[];let i=!1;const r=e;if(U(r,((e,t)=>{if("."!==e.substring(0,1)){const r=_n(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Mt(e,r)))}})),0===n.length)return fn.EMPTY_NODE;const s=cn(n,Ht,(e=>e.name),Wt);if(i){const e=cn(n,sn.getCompare());return new fn(s,_n(t),new hn({".priority":e},{".priority":sn}))}return new fn(s,_n(t),hn.Default)}}tn(_n);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yn extends Ft{constructor(e){super(),this.indexPath_=e,(0,s.hu)(!yt(e)&&".priority"!==ut(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?D(e.name,t.name):r}makePost(e,t){const n=_n(e),i=fn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Mt(t,i)}maxPost(){const e=fn.EMPTY_NODE.updateChild(this.indexPath_,gn);return new Mt(x,e)}toString(){return gt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Ft{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?D(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Mt.MIN}maxPost(){return Mt.MAX}makePost(e,t){const n=_n(e);return new Mt(t,n)}toString(){return".value"}}const wn=new vn;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(e){return{type:"value",snapshotNode:e}}function En(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Tn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Cn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function In(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=sn}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,s.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,s.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:O}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,s.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,s.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:x}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,s.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===sn}copy(){const e=new Sn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function kn(e){const t={};if(e.isDefault())return t;let n;if(e.index_===sn?n="$priority":e.index_===wn?n="$value":e.index_===jt?n="$key":((0,s.hu)(e.index_ instanceof yn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,s.Wl)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=(0,s.Wl)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+(0,s.Wl)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=(0,s.Wl)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+(0,s.Wl)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function An(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_),t["sin"]=!e.startAfterSet_),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_),t["ein"]=!e.endBeforeSet_),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==sn&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends it{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=C("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,s.hu)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Nn.getListenId_(e,n),a={};this.listens_[o]=a;const c=kn(e._queryParams);this.restRequest_(r+".json",c,((e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(r,c,!1,n),(0,s.DV)(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Nn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=kn(e._queryParams),n=e._path.toString(),i=new s.BH;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),r&&r.token&&(t["ac"]=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,s.xO)(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=(0,s.cI)(a.responseText)}catch(e){k("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&k("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.rootNode_=fn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(){return{value:null,children:new Map}}function xn(e,t,n){if(yt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=ut(t);e.children.has(i)||e.children.set(i,On());const r=e.children.get(i);t=dt(t),xn(r,t,n)}}function Dn(e,t,n){null!==e.value?n(t,e.value):Pn(e,((e,i)=>{const r=new ct(t.toString()+"/"+e);Dn(i,r,n)}))}function Pn(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&U(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=1e4,Fn=3e4,Un=3e5;class Vn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Ln(e);const n=Mn+(Fn-Mn)*Math.random();G(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;U(e,((e,i)=>{i>0&&(0,s.r3)(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),G(this.reportStats_.bind(this),Math.floor(2*Math.random()*Un))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jn;function $n(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function qn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Bn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(jn||(jn={}));class zn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=jn.ACK_USER_WRITE,this.source=$n()}operationForChild(e){if(yt(this.path)){if(null!=this.affectedTree.value)return(0,s.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ct(e));return new zn(lt(),t,this.revert)}}return(0,s.hu)(ut(this.path)===e,"operationForChild called for unrelated child."),new zn(dt(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hn{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=jn.OVERWRITE}operationForChild(e){return yt(this.path)?new Hn(this.source,lt(),this.snap.getImmediateChild(e)):new Hn(this.source,dt(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=jn.MERGE}operationForChild(e){if(yt(this.path)){const t=this.children.subtree(new ct(e));return t.isEmpty()?null:t.value?new Hn(this.source,lt(),t.value):new Wn(this.source,lt(),t)}return(0,s.hu)(ut(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wn(this.source,dt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(yt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ut(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(e,t,n,i){const r=[],s=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push(In(t.childName,t.snapshotNode))})),Jn(e,r,"child_removed",t,i,n),Jn(e,r,"child_added",t,i,n),Jn(e,r,"child_moved",s,i,n),Jn(e,r,"child_changed",t,i,n),Jn(e,r,"value",t,i,n),r}function Jn(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>Yn(e,t,n))),o.forEach((n=>{const i=Qn(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function Qn(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function Yn(e,t,n){if(null==t.childName||null==n.childName)throw(0,s.g5)("Should only compare child_ events.");const i=new Mt(t.childName,t.snapshotNode),r=new Mt(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(e,t){return{eventCache:e,serverCache:t}}function Zn(e,t,n,i){return Xn(new Kn(t,n,i),e.serverCache)}function ei(e,t,n,i){return Xn(e.eventCache,new Kn(t,n,i))}function ti(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ni(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ii;const ri=()=>(ii||(ii=new zt(P)),ii);class si{constructor(e,t=ri()){this.value=e,this.children=t}static fromObject(e){let t=new si(null);return U(e,((e,n)=>{t=t.set(new ct(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:lt(),value:this.value};if(yt(e))return null;{const n=ut(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(dt(e),t);if(null!=r){const e=_t(new ct(n),r.path);return{path:e,value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(yt(e))return this;{const t=ut(e),n=this.children.get(t);return null!==n?n.subtree(dt(e)):new si(null)}}set(e,t){if(yt(e))return new si(t,this.children);{const n=ut(e),i=this.children.get(n)||new si(null),r=i.set(dt(e),t),s=this.children.insert(n,r);return new si(this.value,s)}}remove(e){if(yt(e))return this.children.isEmpty()?new si(null):new si(null,this.children);{const t=ut(e),n=this.children.get(t);if(n){const i=n.remove(dt(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new si(null):new si(this.value,r)}return this}}get(e){if(yt(e))return this.value;{const t=ut(e),n=this.children.get(t);return n?n.get(dt(e)):null}}setTree(e,t){if(yt(e))return t;{const n=ut(e),i=this.children.get(n)||new si(null),r=i.setTree(dt(e),t);let s;return s=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new si(this.value,s)}}fold(e){return this.fold_(lt(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(_t(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,lt(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(yt(e))return null;{const i=ut(e),r=this.children.get(i);return r?r.findOnPath_(dt(e),_t(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,lt(),t)}foreachOnPath_(e,t,n){if(yt(e))return this;{this.value&&n(t,this.value);const i=ut(e),r=this.children.get(i);return r?r.foreachOnPath_(dt(e),_t(t,i),n):new si(null)}}foreach(e){this.foreach_(lt(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(_t(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.writeTree_=e}static empty(){return new oi(new si(null))}}function ai(e,t,n){if(yt(t))return new oi(new si(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=vt(r,t);return s=s.updateChild(o,n),new oi(e.writeTree_.set(r,s))}{const i=new si(n),r=e.writeTree_.setTree(t,i);return new oi(r)}}}function ci(e,t,n){let i=e;return U(n,((e,n)=>{i=ai(i,_t(t,e),n)})),i}function li(e,t){if(yt(t))return oi.empty();{const n=e.writeTree_.setTree(t,new si(null));return new oi(n)}}function ui(e,t){return null!=hi(e,t)}function hi(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(vt(n.path,t)):null}function di(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(sn,((e,n)=>{t.push(new Mt(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Mt(e,n.value))})),t}function fi(e,t){if(yt(t))return e;{const n=hi(e,t);return new oi(null!=n?new si(n):e.writeTree_.subtree(t))}}function pi(e){return e.writeTree_.isEmpty()}function gi(e,t){return mi(lt(),e.writeTree_,t)}function mi(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?((0,s.hu)(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=mi(_t(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(_t(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(e,t){return Vi(t,e)}function yi(e,t,n,i,r){(0,s.hu)(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=ai(e.visibleWrites,t,n)),e.lastWriteId=i}function vi(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function wi(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,s.hu)(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,o=!1,a=e.allWrites.length-1;while(r&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&bi(t,i.path)?r=!1:bt(i.path,t.path)&&(o=!0)),a--}if(r){if(o)return Ei(e),!0;if(i.snap)e.visibleWrites=li(e.visibleWrites,i.path);else{const t=i.children;U(t,(t=>{e.visibleWrites=li(e.visibleWrites,_t(i.path,t))}))}return!0}return!1}function bi(e,t){if(e.snap)return bt(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&bt(_t(e.path,n),t))return!0;return!1}function Ei(e){e.visibleWrites=Ci(e.allWrites,Ti,lt()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Ti(e){return e.visible}function Ci(e,t,n){let i=oi.empty();for(let r=0;r<e.length;++r){const o=e[r];if(t(o)){const e=o.path;let t;if(o.snap)bt(n,e)?(t=vt(n,e),i=ai(i,t,o.snap)):bt(e,n)&&(t=vt(e,n),i=ai(i,lt(),o.snap.getChild(t)));else{if(!o.children)throw(0,s.g5)("WriteRecord should have .snap or .children");if(bt(n,e))t=vt(n,e),i=ci(i,t,o.children);else if(bt(e,n))if(t=vt(e,n),yt(t))i=ci(i,lt(),o.children);else{const e=(0,s.DV)(o.children,ut(t));if(e){const n=e.getChild(dt(t));i=ai(i,lt(),n)}}}}}return i}function Ii(e,t,n,i,r){if(i||r){const s=fi(e.visibleWrites,t);if(!r&&pi(s))return n;if(r||null!=n||ui(s,lt())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(bt(e.path,t)||bt(t,e.path))},o=Ci(e.allWrites,s,t),a=n||fn.EMPTY_NODE;return gi(o,a)}return null}{const i=hi(e.visibleWrites,t);if(null!=i)return i;{const i=fi(e.visibleWrites,t);if(pi(i))return n;if(null!=n||ui(i,lt())){const e=n||fn.EMPTY_NODE;return gi(i,e)}return null}}}function Si(e,t,n){let i=fn.EMPTY_NODE;const r=hi(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(sn,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=fi(e.visibleWrites,t);return n.forEachChild(sn,((e,t)=>{const n=gi(fi(r,new ct(e)),t);i=i.updateImmediateChild(e,n)})),di(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}{const n=fi(e.visibleWrites,t);return di(n).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}}function ki(e,t,n,i,r){(0,s.hu)(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=_t(t,n);if(ui(e.visibleWrites,o))return null;{const t=fi(e.visibleWrites,o);return pi(t)?r.getChild(n):gi(t,r.getChild(n))}}function Ai(e,t,n,i){const r=_t(t,n),s=hi(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n)){const t=fi(e.visibleWrites,r);return gi(t,i.getNode().getImmediateChild(n))}return null}function Ni(e,t){return hi(e.visibleWrites,t)}function Ri(e,t,n,i,r,s,o){let a;const c=fi(e.visibleWrites,t),l=hi(c,lt());if(null!=l)a=l;else{if(null==n)return[];a=gi(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();while(c&&e.length<r)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}function Oi(){return{visibleWrites:oi.empty(),allWrites:[],lastWriteId:-1}}function xi(e,t,n,i){return Ii(e.writeTree,e.treePath,t,n,i)}function Di(e,t){return Si(e.writeTree,e.treePath,t)}function Pi(e,t,n,i){return ki(e.writeTree,e.treePath,t,n,i)}function Li(e,t){return Ni(e.writeTree,_t(e.treePath,t))}function Mi(e,t,n,i,r,s){return Ri(e.writeTree,e.treePath,t,n,i,r,s)}function Fi(e,t,n){return Ai(e.writeTree,e.treePath,t,n)}function Ui(e,t){return Vi(_t(e.treePath,t),e.writeTree)}function Vi(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,s.hu)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,s.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,Cn(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,Tn(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,En(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw(0,s.g5)("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Cn(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const qi=new $i;class Bi{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Kn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Fi(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ni(this.viewCache_),r=Mi(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(e,t){(0,s.hu)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,s.hu)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function Hi(e,t,n,i,r){const o=new ji;let a,c;if(n.type===jn.OVERWRITE){const l=n;l.source.fromUser?a=Ji(e,t,l.path,l.snap,i,r,o):((0,s.hu)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered()&&!yt(l.path),a=Gi(e,t,l.path,l.snap,i,r,c,o))}else if(n.type===jn.MERGE){const l=n;l.source.fromUser?a=Yi(e,t,l.path,l.children,i,r,o):((0,s.hu)(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered(),a=Zi(e,t,l.path,l.children,i,r,c,o))}else if(n.type===jn.ACK_USER_WRITE){const s=n;a=s.revert?nr(e,t,s.path,i,r,o):er(e,t,s.path,s.affectedTree,i,r,o)}else{if(n.type!==jn.LISTEN_COMPLETE)throw(0,s.g5)("Unknown operation type: "+n.type);a=tr(e,t,n.path,i,o)}const l=o.getChanges();return Wi(t,a,l),{viewCache:a,changes:l}}function Wi(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=ti(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(bn(ti(t)))}}function Ki(e,t,n,i,r,o){const a=t.eventCache;if(null!=Li(i,n))return t;{let c,l;if(yt(n))if((0,s.hu)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=ni(t),r=n instanceof fn?n:fn.EMPTY_NODE,s=Di(i,r);c=e.filter.updateFullNode(t.eventCache.getNode(),s,o)}else{const n=xi(i,ni(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const u=ut(n);if(".priority"===u){(0,s.hu)(1===ht(n),"Can't have a priority with additional path components");const r=a.getNode();l=t.serverCache.getNode();const o=Pi(i,n,r,l);c=null!=o?e.filter.updatePriority(r,o):a.getNode()}else{const s=dt(n);let h;if(a.isCompleteForChild(u)){l=t.serverCache.getNode();const e=Pi(i,n,a.getNode(),l);h=null!=e?a.getNode().getImmediateChild(u).updateChild(s,e):a.getNode().getImmediateChild(u)}else h=Fi(i,u,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),u,h,s,r,o):a.getNode()}}return Zn(t,c,a.isFullyInitialized()||yt(n),e.filter.filtersNodes())}}function Gi(e,t,n,i,r,s,o,a){const c=t.serverCache;let l;const u=o?e.filter:e.filter.getIndexedFilter();if(yt(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),e,null)}else{const e=ut(n);if(!c.isCompleteForPath(n)&&ht(n)>1)return t;const r=dt(n),s=c.getNode().getImmediateChild(e),o=s.updateChild(r,i);l=".priority"===e?u.updatePriority(c.getNode(),o):u.updateChild(c.getNode(),e,o,r,qi,null)}const h=ei(t,l,c.isFullyInitialized()||yt(n),u.filtersNodes()),d=new Bi(r,h,s);return Ki(e,h,n,r,d,a)}function Ji(e,t,n,i,r,s,o){const a=t.eventCache;let c,l;const u=new Bi(r,t,s);if(yt(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=Zn(t,l,!0,e.filter.filtersNodes());else{const r=ut(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),c=Zn(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=dt(n),l=a.getNode().getImmediateChild(r);let h;if(yt(s))h=i;else{const e=u.getCompleteChild(r);h=null!=e?".priority"===ft(s)&&e.getChild(mt(s)).isEmpty()?e:e.updateChild(s,i):fn.EMPTY_NODE}if(l.equals(h))c=t;else{const n=e.filter.updateChild(a.getNode(),r,h,s,u,o);c=Zn(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function Qi(e,t){return e.eventCache.isCompleteForChild(t)}function Yi(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,c)=>{const l=_t(n,i);Qi(t,ut(l))&&(a=Ji(e,a,l,c,r,s,o))})),i.foreach(((i,c)=>{const l=_t(n,i);Qi(t,ut(l))||(a=Ji(e,a,l,c,r,s,o))})),a}function Xi(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Zi(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=yt(n)?i:new si(null).setTree(n,i);const u=t.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),u=Xi(e,c,i);l=Gi(e,l,new ct(n),u,r,s,o,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),u=Xi(e,c,i);l=Gi(e,l,new ct(n),u,r,s,o,a)}})),l}function er(e,t,n,i,r,s,o){if(null!=Li(r,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(yt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Gi(e,t,n,c.getNode().getChild(n),r,s,a,o);if(yt(n)){let i=new si(null);return c.getNode().forEachChild(jt,((e,t)=>{i=i.set(new ct(e),t)})),Zi(e,t,n,i,r,s,a,o)}return t}{let l=new si(null);return i.foreach(((e,t)=>{const i=_t(n,e);c.isCompleteForPath(i)&&(l=l.set(e,c.getNode().getChild(i)))})),Zi(e,t,n,l,r,s,a,o)}}function tr(e,t,n,i,r){const s=t.serverCache,o=ei(t,s.getNode(),s.isFullyInitialized()||yt(n),s.isFiltered());return Ki(e,o,n,i,qi,r)}function nr(e,t,n,i,r,o){let a;if(null!=Li(i,n))return t;{const c=new Bi(i,t,r),l=t.eventCache.getNode();let u;if(yt(n)||".priority"===ut(n)){let n;if(t.serverCache.isFullyInitialized())n=xi(i,ni(t));else{const e=t.serverCache.getNode();(0,s.hu)(e instanceof fn,"serverChildren would be complete if leaf node"),n=Di(i,e)}u=e.filter.updateFullNode(l,n,o)}else{const r=ut(n);let s=Fi(i,r,t.serverCache);null==s&&t.serverCache.isCompleteForChild(r)&&(s=l.getImmediateChild(r)),u=null!=s?e.filter.updateChild(l,r,s,dt(n),c,o):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,fn.EMPTY_NODE,dt(n),c,o):l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=xi(i,ni(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=Li(i,lt()),Zn(t,u,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(e,t){const n=ni(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!yt(t)&&!n.getImmediateChild(ut(t)).isEmpty())?n.getChild(t):null}function rr(e,t,n,i){t.type===jn.MERGE&&null!==t.source.queryId&&((0,s.hu)(ni(e.viewCache_),"We should always have a full cache before handling merges"),(0,s.hu)(ti(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,o=Hi(e.processor_,r,t,n,i);return zi(e.processor_,o.viewCache),(0,s.hu)(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,sr(e,o.changes,o.viewCache.eventCache.getNode(),null)}function sr(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return Gn(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let or,ar;function cr(e){(0,s.hu)(!or,"__referenceConstructor has already been defined"),or=e}function lr(e,t,n,i){const r=t.source.queryId;if(null!==r){const o=e.views.get(r);return(0,s.hu)(null!=o,"SyncTree gave us an op for an invalid query."),rr(o,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(rr(s,t,n,i));return r}}function ur(e,t){let n=null;for(const i of e.views.values())n=n||ir(i,t);return n}function hr(e){(0,s.hu)(!ar,"__referenceConstructor has already been defined"),ar=e}class dr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new si(null),this.pendingWriteTree_=Oi(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function fr(e,t,n,i,r){return yi(e.pendingWriteTree_,t,n,i,r),r?wr(e,new Hn($n(),t,n)):[]}function pr(e,t,n=!1){const i=vi(e.pendingWriteTree_,t),r=wi(e.pendingWriteTree_,t);if(r){let t=new si(null);return null!=i.snap?t=t.set(lt(),!0):U(i.children,(e=>{t=t.set(new ct(e),!0)})),wr(e,new zn(i.path,t,n))}return[]}function gr(e,t,n){return wr(e,new Hn(qn(),t,n))}function mr(e,t,n){const i=si.fromObject(n);return wr(e,new Wn(qn(),t,i))}function _r(e,t,n,i){const r=Tr(e,i);if(null!=r){const i=Cr(r),s=i.path,o=i.queryId,a=vt(s,t),c=new Hn(Bn(o),a,n);return Ir(e,s,c)}return[]}function yr(e,t,n,i){const r=Tr(e,i);if(r){const i=Cr(r),s=i.path,o=i.queryId,a=vt(s,t),c=si.fromObject(n),l=new Wn(Bn(o),a,c);return Ir(e,s,l)}return[]}function vr(e,t,n){const i=!0,r=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=vt(e,t),r=ur(n,i);if(r)return r}));return Ii(r,t,s,n,i)}function wr(e,t){return br(t,e.syncPointTree_,null,_i(e.pendingWriteTree_,lt()))}function br(e,t,n,i){if(yt(e.path))return Er(e,t,n,i);{const r=t.get(lt());null==n&&null!=r&&(n=ur(r,lt()));let s=[];const o=ut(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=Ui(i,o);s=s.concat(br(a,c,e,t))}return r&&(s=s.concat(lr(r,e,i,n))),s}}function Er(e,t,n,i){const r=t.get(lt());null==n&&null!=r&&(n=ur(r,lt()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=Ui(i,t),c=e.operationForChild(t);c&&(s=s.concat(Er(c,r,o,a)))})),r&&(s=s.concat(lr(r,e,i,n))),s}function Tr(e,t){return e.tagToQueryMap.get(t)}function Cr(e){const t=e.indexOf("$");return(0,s.hu)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ct(e.substr(0,t))}}function Ir(e,t,n){const i=e.syncPointTree_.get(t);(0,s.hu)(i,"Missing sync point for query tag that we're tracking");const r=_i(e.pendingWriteTree_,t);return lr(i,n,r,null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Sr(t)}node(){return this.node_}}class kr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=_t(this.path_,e);return new kr(this.syncTree_,t)}node(){return vr(this.syncTree_,this.path_)}}const Ar=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},Nr=function(e,t,n){return e&&"object"===typeof e?((0,s.hu)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?Rr(e[".sv"],t,n):"object"===typeof e[".sv"]?Or(e[".sv"],t):void(0,s.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Rr=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,s.hu)(!1,"Unexpected server value: "+e)}},Or=function(e,t,n){e.hasOwnProperty("increment")||(0,s.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&(0,s.hu)(!1,"Unexpected increment value: "+i);const r=t.node();if((0,s.hu)(null!==r&&"undefined"!==typeof r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r,a=o.getValue();return"number"!==typeof a?i:a+i},xr=function(e,t,n,i){return Pr(t,new kr(n,e),i)},Dr=function(e,t,n){return Pr(e,new Sr(t),n)};function Pr(e,t,n){const i=e.getPriority().val(),r=Nr(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=Nr(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new en(s,_n(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new en(r))),i.forEachChild(sn,((e,i)=>{const r=Pr(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Mr(e,t){let n=t instanceof ct?t:new ct(t),i=e,r=ut(n);while(null!==r){const e=(0,s.DV)(i.node.children,r)||{children:{},childCount:0};i=new Lr(r,i,e),n=dt(n),r=ut(n)}return i}function Fr(e){return e.node.value}function Ur(e,t){e.node.value=t,Hr(e)}function Vr(e){return e.node.childCount>0}function jr(e){return void 0===Fr(e)&&!Vr(e)}function $r(e,t){U(e.node.children,((n,i)=>{t(new Lr(n,e,i))}))}function qr(e,t,n,i){n&&!i&&t(e),$r(e,(e=>{qr(e,t,!0,i)})),n&&i&&t(e)}function Br(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function zr(e){return new ct(null===e.parent?e.name:zr(e.parent)+"/"+e.name)}function Hr(e){null!==e.parent&&Wr(e.parent,e.name,e)}function Wr(e,t,n){const i=jr(n),r=(0,s.r3)(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Hr(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Hr(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=/[\[\].#$\/\u0000-\u001F\u007F]/,Gr=/[\[\].#$\u0000-\u001F\u007F]/,Jr=10485760,Qr=function(e){return"string"===typeof e&&0!==e.length&&!Kr.test(e)},Yr=function(e){return"string"===typeof e&&0!==e.length&&!Gr.test(e)},Xr=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Yr(e)},Zr=function(e,t,n){const i=n instanceof ct?new Et(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+St(i));if("function"===typeof t)throw new Error(e+"contains a function "+St(i)+" with contents = "+t.toString());if(N(t))throw new Error(e+"contains "+t.toString()+" "+St(i));if("string"===typeof t&&t.length>Jr/3&&(0,s.ug)(t)>Jr)throw new Error(e+"contains a string greater than "+Jr+" utf8 bytes "+St(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,r=!1;if(U(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!Qr(t)))throw new Error(e+" contains an invalid key ("+t+") "+St(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Tt(i,t),Zr(e,s,i),Ct(i)})),n&&r)throw new Error(e+' contains ".value" child '+St(i)+" in addition to actual children.")}},es=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Qr(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!Xr(n))throw new Error((0,s.gK)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ts{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ns(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||wt(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function is(e,t,n){ns(e,n),rs(e,(e=>bt(e,t)||bt(t,e)))}function rs(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){const s=r.path;t(s)?(ss(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function ss(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();w&&T("event: "+n.toString()),W(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="repo_interrupt",as=25;class cs{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ts,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=On(),this.transactionQueueTree_=new Lr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ls(e,t,n){if(e.stats_=ge(e.repoInfo_),e.forceRestClient_||K())e.server_=new Nn(e.repoInfo_,((t,n,i,r)=>{ds(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>fs(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,s.Wl)(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Lt(e.repoInfo_,t,((t,n,i,r)=>{ds(e,t,n,i,r)}),(t=>{fs(e,t)}),(t=>{ps(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=me(e.repoInfo_,(()=>new Vn(e.stats_,e.server_))),e.infoData_=new Rn,e.infoSyncTree_=new dr({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=gr(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),gs(e,"connected",!1),e.serverSyncTree_=new dr({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);is(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function us(e){const t=e.infoData_.getNode(new ct(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function hs(e){return Ar({timestamp:us(e)})}function ds(e,t,n,i,r){e.dataUpdateCount++;const o=new ct(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(r)if(i){const t=(0,s.UI)(n,(e=>_n(e)));a=yr(e.serverSyncTree_,o,t,r)}else{const t=_n(n);a=_r(e.serverSyncTree_,o,t,r)}else if(i){const t=(0,s.UI)(n,(e=>_n(e)));a=mr(e.serverSyncTree_,o,t)}else{const t=_n(n);a=gr(e.serverSyncTree_,o,t)}let c=o;a.length>0&&(c=Ts(e,o)),is(e.eventQueue_,c,a)}function fs(e,t){gs(e,"connected",t),!1===t&&_s(e)}function ps(e,t){U(t,((t,n)=>{gs(e,t,n)}))}function gs(e,t,n){const i=new ct("/.info/"+t),r=_n(n);e.infoData_.updateSnapshot(i,r);const s=gr(e.infoSyncTree_,i,r);is(e.eventQueue_,i,s)}function ms(e){return e.nextWriteId_++}function _s(e){vs(e,"onDisconnectEvents");const t=hs(e),n=On();Dn(e.onDisconnect_,lt(),((i,r)=>{const s=xr(i,r,e.serverSyncTree_,t);xn(n,i,s)}));let i=[];Dn(n,lt(),((t,n)=>{i=i.concat(gr(e.serverSyncTree_,t,n));const r=Ns(e,t);Ts(e,r)})),e.onDisconnect_=On(),is(e.eventQueue_,lt(),i)}function ys(e){e.persistentConnection_&&e.persistentConnection_.interrupt(os)}function vs(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),T(n,...t)}function ws(e,t,n){return vr(e.serverSyncTree_,t,n)||fn.EMPTY_NODE}function bs(e,t=e.transactionQueueTree_){if(t||As(e,t),Fr(t)){const n=Ss(e,t);(0,s.hu)(n.length>0,"Sending zero length transaction queue");const i=n.every((e=>0===e.status));i&&Es(e,zr(t),n)}else Vr(t)&&$r(t,(t=>{bs(e,t)}))}function Es(e,t,n){const i=n.map((e=>e.currentWriteId)),r=ws(e,t,i);let o=r;const a=r.hash();for(let u=0;u<n.length;u++){const e=n[u];(0,s.hu)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=vt(t,e.path);o=o.updateChild(i,e.currentOutputSnapshotRaw)}const c=o.val(!0),l=t;e.server_.put(l.toString(),c,(i=>{vs(e,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(pr(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();As(e,Mr(e.transactionQueueTree_,t)),bs(e,e.transactionQueueTree_),is(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)W(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{k("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Ts(e,t)}}),a)}function Ts(e,t){const n=Is(e,t),i=zr(n),r=Ss(e,n);return Cs(e,r,i),i}function Cs(e,t,n){if(0===t.length)return;const i=[];let r=[];const o=t.filter((e=>0===e.status)),a=o.map((e=>e.currentWriteId));for(let c=0;c<t.length;c++){const o=t[c],l=vt(n,o.path);let u,h=!1;if((0,s.hu)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)h=!0,u=o.abortReason,r=r.concat(pr(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=as)h=!0,u="maxretry",r=r.concat(pr(e.serverSyncTree_,o.currentWriteId,!0));else{const n=ws(e,o.path,a);o.currentInputSnapshot=n;const i=t[c].update(n.val());if(void 0!==i){Zr("transaction failed: Data returned ",i,o.path);let t=_n(i);const c="object"===typeof i&&null!=i&&(0,s.r3)(i,".priority");c||(t=t.updatePriority(n.getPriority()));const l=o.currentWriteId,u=hs(e),h=Dr(t,n,u);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=h,o.currentWriteId=ms(e),a.splice(a.indexOf(l),1),r=r.concat(fr(e.serverSyncTree_,o.path,h,o.currentWriteId,o.applyLocally)),r=r.concat(pr(e.serverSyncTree_,l,!0))}else h=!0,u="nodata",r=r.concat(pr(e.serverSyncTree_,o.currentWriteId,!0))}is(e.eventQueue_,n,r),r=[],h&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===u?i.push((()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot))):i.push((()=>t[c].onComplete(new Error(u),!1,null)))))}As(e,e.transactionQueueTree_);for(let s=0;s<i.length;s++)W(i[s]);bs(e,e.transactionQueueTree_)}function Is(e,t){let n,i=e.transactionQueueTree_;n=ut(t);while(null!==n&&void 0===Fr(i))i=Mr(i,n),t=dt(t),n=ut(t);return i}function Ss(e,t){const n=[];return ks(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function ks(e,t,n){const i=Fr(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);$r(t,(t=>{ks(e,t,n)}))}function As(e,t){const n=Fr(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Ur(t,n.length>0?n:void 0)}$r(t,(t=>{As(e,t)}))}function Ns(e,t){const n=zr(Is(e,t)),i=Mr(e.transactionQueueTree_,t);return Br(i,(t=>{Rs(e,t)})),Rs(e,i),qr(i,(t=>{Rs(e,t)})),n}function Rs(e,t){const n=Fr(t);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,s.hu)(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):((0,s.hu)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(pr(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Ur(t,void 0):n.length=o+1,is(e.eventQueue_,zr(t),r);for(let e=0;e<i.length;e++)W(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let e=n[r];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function xs(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):k(`Invalid query segment '${n}' in query '${e}'`)}return t}const Ds=function(e,t){const n=Ps(e),i=n.namespace;"firebase.com"===n.domain&&S(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||S("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||A();const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new le(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new ct(n.pathString)}},Ps=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",c=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=Os(e.substring(u,h)));const d=xs(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d["ns"])}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}},Ls="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";(function(){let e=0;const t=[]})();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ms{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return yt(this._path)?null:ft(this._path)}get ref(){return new Fs(this._repo,this._path)}get _queryIdentifier(){const e=An(this._queryParams),t=M(e);return"{}"===t?"default":t}get _queryObject(){return An(this._queryParams)}isEqual(e){if(e=(0,s.m9)(e),!(e instanceof Ms))return!1;const t=this._repo===e._repo,n=wt(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+pt(this._path)}}class Fs extends Ms{constructor(e,t){super(e,t,new Sn,!1)}get parent(){const e=mt(this._path);return null===e?null:new Fs(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}cr(Fs),hr(Fs);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Us="FIREBASE_DATABASE_EMULATOR_HOST",Vs={};let js=!1;function $s(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||S("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),T("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=Ds(s,r),l=c.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/"}[Us]),a?(o=!0,s=`http://${a}?ns=${l.namespace}`,c=Ds(s,r),l=c.repoInfo):o=!c.repoInfo.secure;const u=r&&o?new Y(Y.OWNER):new Q(e.name,e.options,t);es("Invalid Firebase Database URL",c),yt(c.path)||S("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Bs(l,e,u,new J(e.name,n));return new zs(h,e)}function qs(e,t){const n=Vs[t];n&&n[e.key]===e||S(`Database ${t}(${e.repoInfo_}) has already been deleted.`),ys(e),delete n[e.key]}function Bs(e,t,n,i){let r=Vs[t.name];r||(r={},Vs[t.name]=r);let s=r[e.toURLString()];return s&&S("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new cs(e,js,n,i),r[e.toURLString()]=s,s}class zs{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ls(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Fs(this._repo,lt())),this._rootInternal}_delete(){return null!==this._rootInternal&&(qs(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&S("Cannot call "+e+" on a deleted database.")}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hs(e){u(i.Jn),(0,i.Xd)(new r.wA("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return $s(n,i,r,t)}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(a,c,e),(0,i.KN)(a,c,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Lt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Hs()},4287:function(e,t,n){"use strict";n.d(t,{ET:function(){return rd},hJ:function(){return oh},oe:function(){return id},JU:function(){return ah},PL:function(){return td},ad:function(){return uh},IO:function(){return jh},pl:function(){return nd}});n(1439),n(7585),n(5315),n(7658),n(2801);var i,r=n(7077),s=n(7142),o=n(5168),a=n(223),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},l={},u=u||{},h=c||self;function d(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function f(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function p(e){return Object.prototype.hasOwnProperty.call(e,g)&&e[g]||(e[g]=++m)}var g="closure_uid_"+(1e9*Math.random()>>>0),m=0;function _(e,t,n){return e.call.apply(e.bind,arguments)}function y(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function v(e,t,n){return v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_:y,v.apply(null,arguments)}function w(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function b(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function E(){this.s=this.s,this.o=this.o}var T=0;E.prototype.s=!1,E.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==T)||p(this)},E.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const C=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function I(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function S(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(d(t)){const n=e.length||0,i=t.length||0;e.length=n+i;for(let r=0;r<i;r++)e[n+r]=t[r]}else e.push(t)}}function k(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",(()=>{}),t),h.removeEventListener("test",(()=>{}),t)}catch(n){}return e}();function N(e){return/^[\s\xa0]*$/.test(e)}function R(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function O(e){return-1!=R().indexOf(e)}function x(e){return x[" "](e),e}function D(e,t){var n=wi;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}x[" "]=function(){};var P,L,M=O("Opera"),F=O("Trident")||O("MSIE"),U=O("Edge"),V=U||F,j=O("Gecko")&&!(-1!=R().toLowerCase().indexOf("webkit")&&!O("Edge"))&&!(O("Trident")||O("MSIE"))&&!O("Edge"),$=-1!=R().toLowerCase().indexOf("webkit")&&!O("Edge");function q(){var e=h.document;return e?e.documentMode:void 0}e:{var B="",z=function(){var e=R();return j?/rv:([^\);]+)(\)|;)/.exec(e):U?/Edge\/([\d\.]+)/.exec(e):F?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):$?/WebKit\/(\S+)/.exec(e):M?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(z&&(B=z?z[1]:""),F){var H=q();if(null!=H&&H>parseFloat(B)){P=String(H);break e}}P=B}if(h.document&&F){var W=q();L=W||(parseInt(P,10)||void 0)}else L=void 0;var K=L;function G(e,t){if(k.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(j){e:{try{x(t.nodeName);var r=!0;break e}catch(s){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:J[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&G.$.h.call(this)}}b(G,k);var J={2:"touch",3:"pen",4:"mouse"};G.prototype.h=function(){G.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Q="closure_listenable_"+(1e6*Math.random()|0),Y=0;function X(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=r,this.key=++Y,this.fa=this.ia=!1}function Z(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ee(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function te(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function ne(e){const t={};for(const n in e)t[n]=e[n];return t}const ie="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function re(e,t){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)e[n]=i[n];for(let t=0;t<ie.length;t++)n=ie[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function se(e){this.src=e,this.g={},this.h=0}function oe(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=C(r,t);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Z(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ae(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==i)return r}return-1}se.prototype.add=function(e,t,n,i,r){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ae(e,t,i,r);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new X(t,this.src,s,!!i,r),t.ia=n,e.push(t)),t};var ce="closure_lm_"+(1e6*Math.random()|0),le={};function ue(e,t,n,i,r){if(i&&i.once)return fe(e,t,n,i,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ue(e,t[s],n,i,r);return null}return n=we(n),e&&e[Q]?e.O(t,n,f(i)?!!i.capture:!!i,r):he(e,t,n,!1,i,r)}function he(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=f(r)?!!r.capture:!!r,a=ye(e);if(a||(e[ce]=a=new se(e)),n=a.add(t,n,i,o,s),n.proxy)return n;if(i=de(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)A||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(me(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function de(){function e(n){return t.call(e.src,e.listener,n)}const t=_e;return e}function fe(e,t,n,i,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)fe(e,t[s],n,i,r);return null}return n=we(n),e&&e[Q]?e.P(t,n,f(i)?!!i.capture:!!i,r):he(e,t,n,!0,i,r)}function pe(e,t,n,i,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)pe(e,t[s],n,i,r);else i=f(i)?!!i.capture:!!i,n=we(n),e&&e[Q]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ae(s,n,i,r),-1<n&&(Z(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=ye(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ae(t,n,i,r)),(n=-1<e?t[e]:null)&&ge(n))}function ge(e){if("number"!==typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Q])oe(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(me(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=ye(t))?(oe(n,e),0==n.h&&(n.src=null,t[ce]=null)):Z(e)}}}function me(e){return e in le?le[e]:le[e]="on"+e}function _e(e,t){if(e.fa)e=!0;else{t=new G(t,this);var n=e.listener,i=e.la||e.src;e.ia&&ge(e),e=n.call(i,t)}return e}function ye(e){return e=e[ce],e instanceof se?e:null}var ve="__closure_events_fn_"+(1e9*Math.random()>>>0);function we(e){return"function"===typeof e?e:(e[ve]||(e[ve]=function(t){return e.handleEvent(t)}),e[ve])}function be(){E.call(this),this.i=new se(this),this.S=this,this.J=null}function Ee(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,"string"===typeof t)t=new k(t,e);else if(t instanceof k)t.target=t.target||e;else{var r=t;t=new k(i,e),re(t,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=Te(o,i,!0,t)&&r}if(o=t.g=e,r=Te(o,i,!0,t)&&r,r=Te(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)o=t.g=n[s],r=Te(o,i,!1,t)&&r}function Te(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&oe(e.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}b(be,E),be.prototype[Q]=!0,be.prototype.removeEventListener=function(e,t,n,i){pe(this,e,t,n,i)},be.prototype.N=function(){if(be.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Z(n[i]);delete t.g[e],t.h--}}this.J=null},be.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},be.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var Ce=h.JSON.stringify;class Ie{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Se(){var e=Pe;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ke{constructor(){this.h=this.g=null}add(e,t){const n=Ae.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Ae=new Ie((()=>new Ne),(e=>e.reset()));class Ne{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Re(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Oe(e){h.setTimeout((()=>{throw e}),0)}let xe,De=!1,Pe=new ke,Le=()=>{const e=h.Promise.resolve(void 0);xe=()=>{e.then(Me)}};var Me=()=>{for(var e;e=Se();){try{e.h.call(e.g)}catch(n){Oe(n)}var t=Ae;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}De=!1};function Fe(e,t){be.call(this),this.h=e||1,this.g=t||h,this.j=v(this.qb,this),this.l=Date.now()}function Ue(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function Ve(e,t,n){if("function"===typeof e)n&&(e=v(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=v(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function je(e){e.g=Ve((()=>{e.g=null,e.i&&(e.i=!1,je(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}b(Fe,be),i=Fe.prototype,i.ga=!1,i.T=null,i.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ee(this,"tick"),this.ga&&(Ue(this),this.start()))}},i.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.N=function(){Fe.$.N.call(this),Ue(this),delete this.g};class $e extends E{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:je(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qe(e){E.call(this),this.h=e,this.g={}}b(qe,E);var Be=[];function ze(e,t,n,i){Array.isArray(n)||(n&&(Be[0]=n.toString()),n=Be);for(var r=0;r<n.length;r++){var s=ue(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function He(e){ee(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ge(e)}),e),e.g={}}function We(){this.g=!0}function Ke(e,t,n,i,r,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o}))}function Ge(e,t,n,i,r,s,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Je(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Ye(e,n)+(i?" "+i:"")}))}function Qe(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Ye(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Ce(n)}catch(a){return t}}qe.prototype.N=function(){qe.$.N.call(this),He(this)},qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},We.prototype.Ea=function(){this.g=!1},We.prototype.info=function(){};var Xe={},Ze=null;function et(){return Ze=Ze||new be}function tt(e){k.call(this,Xe.Ta,e)}function nt(e){const t=et();Ee(t,new tt(t))}function it(e,t){k.call(this,Xe.STAT_EVENT,e),this.stat=t}function rt(e){const t=et();Ee(t,new it(t,e))}function st(e,t){k.call(this,Xe.Ua,e),this.size=t}function ot(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}Xe.Ta="serverreachability",b(tt,k),Xe.STAT_EVENT="statevent",b(it,k),Xe.Ua="timingevent",b(st,k);var at={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ct={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function lt(){}function ut(e){return e.h||(e.h=e.i())}function ht(){}lt.prototype.h=null;var dt,ft={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pt(){k.call(this,"d")}function gt(){k.call(this,"c")}function mt(){}function _t(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new qe(this),this.P=vt,e=V?125:void 0,this.V=new Fe(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new yt}function yt(){this.i=null,this.g="",this.h=!1}b(pt,k),b(gt,k),b(mt,lt),mt.prototype.g=function(){return new XMLHttpRequest},mt.prototype.i=function(){return{}},dt=new mt;var vt=45e3,wt={},bt={};function Et(e,t,n){e.L=1,e.v=zt(Vt(t)),e.s=n,e.S=!0,Tt(e,null)}function Tt(e,t){e.G=Date.now(),kt(e),e.A=Vt(e.v);var n=e.A,i=e.W;Array.isArray(i)||(i=[String(i)]),rn(n.i,"t",i),e.C=0,n=e.l.J,e.h=new yt,e.g=li(e.l,n?t:null,!e.s),0<e.O&&(e.M=new $e(v(e.Pa,e,e.g),e.O)),ze(e.U,e.g,"readystatechange",e.nb),t=e.I?ne(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),nt(),Ke(e.j,e.u,e.A,e.m,e.W,e.s)}function Ct(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function It(e,t,n){let i,r=!0;for(;!e.J&&e.C<n.length;){if(i=St(e,n),i==bt){4==t&&(e.o=4,rt(14),r=!1),Je(e.j,e.m,null,"[Incomplete Response]");break}if(i==wt){e.o=4,rt(15),Je(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}Je(e.j,e.m,i,null),xt(e,i)}Ct(e)&&i!=bt&&i!=wt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,rt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ti(t),t.M=!0,rt(11))):(Je(e.j,e.m,n,"[Invalid Chunked Response]"),Ot(e),Rt(e))}function St(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?bt:(n=Number(t.substring(n,i)),isNaN(n)?wt:(i+=1,i+n>t.length?bt:(t=t.slice(i,i+n),e.C=i+n,t)))}function kt(e){e.Y=Date.now()+e.P,At(e,e.P)}function At(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ot(v(e.lb,e),t)}function Nt(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function Rt(e){0==e.l.H||e.J||ri(e.l,e)}function Ot(e){Nt(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,Ue(e.V),He(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function xt(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||dn(n.i,e)))if(!e.K&&dn(n.i,e)&&3==n.H){try{var i=n.Ja.g.parse(t)}catch(l){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;ii(n),Wn(n)}ei(n),rt(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=ot(v(n.ib,n),6e3));if(1>=hn(n.i)&&n.oa){try{n.oa()}catch(l){}n.oa=void 0}}else oi(n,11)}else if((e.K||n.g==e)&&ii(n),!N(t))for(r=n.Ja.g.parse(t),t=0;t<r.length;t++){let l=r[t];if(n.V=l[0],l=l[1],2==n.H)if("c"==l[0]){n.K=l[1],n.pa=l[2];const t=l[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const r=l[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(i=1.5*u,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(fn(s,s.h),s.h=null))}if(i.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.Da=e,Bt(i.I,i.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=e;if(i.wa=ci(i,i.J?i.pa:null,i.Y),o.K){pn(i.i,o);var a=o,c=i.L;c&&a.setTimeout(c),a.B&&(Nt(a),kt(a)),i.g=o}else Zn(i);0<n.j.length&&Gn(n)}else"stop"!=l[0]&&"close"!=l[0]||oi(n,7);else 3==n.H&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?oi(n,7):Hn(n):"noop"!=l[0]&&n.h&&n.h.Aa(l),n.A=0)}nt(4)}catch(l){}}function Dt(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(d(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}function Pt(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(d(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}function Lt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(d(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Pt(e),i=Dt(e),r=i.length,s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}i=_t.prototype,i.setTimeout=function(e){this.P=e},i.nb=function(e){e=e.target;const t=this.M;t&&3==Un(e)?t.l():this.Pa(e)},i.Pa=function(e){try{if(e==this.g)e:{const u=Un(this.g);var t=this.g.Ia();const d=this.g.da();if(!(3>u)&&(3!=u||V||this.g&&(this.h.h||this.g.ja()||Vn(this.g)))){this.J||4!=u||7==t||nt(8==t||0>=d?3:2),Nt(this);var n=this.g.da();this.ca=n;t:if(Ct(this)){var i=Vn(this.g);e="";var r=i.length,s=4==Un(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ot(this),Rt(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Ge(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,rt(12),Ot(this),Rt(this);break e}Je(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xt(this,n)}this.S?(It(this,u,o),V&&this.i&&3==u&&(ze(this.U,this.V,"tick",this.mb),this.V.start())):(Je(this.j,this.m,o,null),xt(this,o)),4==u&&Ot(this),this.i&&!this.J&&(4==u?ri(this.l,this):(this.i=!1,kt(this)))}else jn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,rt(12)):(this.o=0,rt(13)),Ot(this),Rt(this)}}}catch(u){}},i.mb=function(){if(this.g){var e=Un(this.g),t=this.g.ja();this.C<t.length&&(Nt(this),It(this,e,t),this.i&&4!=e&&kt(this))}},i.cancel=function(){this.J=!0,Ot(this)},i.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Qe(this.j,this.A),2!=this.L&&(nt(),rt(17)),Ot(this),this.o=2,Rt(this)):At(this,this.Y-e)};var Mt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ft(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ut(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ut){this.h=e.h,jt(this,e.j),this.s=e.s,this.g=e.g,$t(this,e.m),this.l=e.l;var t=e.i,n=new Zt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),qt(this,n),this.o=e.o}else e&&(t=String(e).match(Mt))?(this.h=!1,jt(this,t[1]||"",!0),this.s=Ht(t[2]||""),this.g=Ht(t[3]||"",!0),$t(this,t[4]),this.l=Ht(t[5]||"",!0),qt(this,t[6]||"",!0),this.o=Ht(t[7]||"")):(this.h=!1,this.i=new Zt(null,this.h))}function Vt(e){return new Ut(e)}function jt(e,t,n){e.j=n?Ht(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function $t(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function qt(e,t,n){t instanceof Zt?(e.i=t,on(e.i,e.h)):(n||(t=Wt(t,Yt)),e.i=new Zt(t,e.h))}function Bt(e,t,n){e.i.set(t,n)}function zt(e){return Bt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ht(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Wt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Kt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Kt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Ut.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Wt(t,Gt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Wt(t,Gt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Wt(n,"/"==n.charAt(0)?Qt:Jt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Wt(n,Xt)),e.join("")};var Gt=/[#\/\?@]/g,Jt=/[#\?:]/g,Qt=/[#\?]/g,Yt=/[#\?@]/g,Xt=/#/g;function Zt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function en(e){e.g||(e.g=new Map,e.h=0,e.i&&Ft(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function tn(e,t){en(e),t=sn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function nn(e,t){return en(e),t=sn(e,t),e.g.has(t)}function rn(e,t,n){tn(e,t),0<n.length&&(e.i=null,e.g.set(sn(e,t),I(n)),e.h+=n.length)}function sn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function on(e,t){t&&!e.j&&(en(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(tn(this,t),rn(this,n,e))}),e)),e.j=t}i=Zt.prototype,i.add=function(e,t){en(this),this.i=null,e=sn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},i.forEach=function(e,t){en(this),this.g.forEach((function(n,i){n.forEach((function(n){e.call(t,n,i,this)}),this)}),this)},i.ta=function(){en(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const r=e[i];for(let e=0;e<r.length;e++)n.push(t[i])}return n},i.Z=function(e){en(this);let t=[];if("string"===typeof e)nn(this,e)&&(t=t.concat(this.g.get(sn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},i.set=function(e,t){return en(this),this.i=null,e=sn(this,e),nn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},i.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),e.push(r)}}return this.i=e.join("&")};var an=class{constructor(e,t){this.g=e,this.map=t}};function cn(e){this.l=e||ln,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ln=10;function un(e){return!!e.h||!!e.g&&e.g.size>=e.j}function hn(e){return e.h?1:e.g?e.g.size:0}function dn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function fn(e,t){e.g?e.g.add(t):e.h=t}function pn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function gn(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return I(e.i)}cn.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var mn=class{stringify(e){return h.JSON.stringify(e,void 0)}parse(e){return h.JSON.parse(e,void 0)}};function _n(){this.g=new mn}function yn(e,t,n){const i=n||"";try{Lt(e,(function(e,n){let r=e;f(e)&&(r=Ce(e)),t.push(i+n+"="+encodeURIComponent(r))}))}catch(r){throw t.push(i+"type="+encodeURIComponent("_badmap")),r}}function vn(e,t){const n=new We;if(h.Image){const i=new Image;i.onload=w(wn,n,i,"TestLoadImage: loaded",!0,t),i.onerror=w(wn,n,i,"TestLoadImage: error",!1,t),i.onabort=w(wn,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=w(wn,n,i,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}function wn(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch(s){}}function bn(e){this.l=e.fc||null,this.j=e.ob||!1}function En(e,t){be.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Tn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}b(bn,lt),bn.prototype.g=function(){return new En(this.l,this.j)},bn.prototype.i=function(e){return function(){return e}}({}),b(En,be);var Tn=0;function Cn(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function In(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Sn(e)}function Sn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}i=En.prototype,i.open=function(e,t){if(this.readyState!=Tn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Sn(this)},i.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||h).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,In(this)),this.readyState=Tn},i.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Sn(this)),this.g&&(this.readyState=3,Sn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cn(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},i.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?In(this):Sn(this),3==this.readyState&&Cn(this)}},i.Za=function(e){this.g&&(this.response=this.responseText=e,In(this))},i.Ya=function(e){this.g&&(this.response=e,In(this))},i.ka=function(){this.g&&In(this)},i.setRequestHeader=function(e,t){this.v.append(e,t)},i.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(En.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var kn=h.JSON.parse;function An(e){be.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Nn,this.L=this.M=!1}b(An,be);var Nn="",Rn=/^https?$/i,On=["POST","PUT"];function xn(e){return F&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Dn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Pn(e),Mn(e)}function Pn(e){e.F||(e.F=!0,Ee(e,"complete"),Ee(e,"error"))}function Ln(e){if(e.h&&"undefined"!=typeof u&&(!e.C[1]||4!=Un(e)||2!=e.da()))if(e.v&&4==Un(e))Ve(e.La,0,e);else if(Ee(e,"readystatechange"),4==Un(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===a){var r=String(e.I).match(Mt)[1]||null;!r&&h.self&&h.self.location&&(r=h.self.location.protocol.slice(0,-1)),i=!Rn.test(r?r.toLowerCase():"")}n=i}if(n)Ee(e,"complete"),Ee(e,"success");else{e.m=6;try{var s=2<Un(e)?e.g.statusText:""}catch(o){s=""}e.j=s+" ["+e.da()+"]",Pn(e)}}finally{Mn(e)}}}function Mn(e,t){if(e.g){Fn(e);const i=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Ee(e,"ready");try{i.onreadystatechange=r}catch(n){}}}function Fn(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function Un(e){return e.g?e.g.readyState:0}function Vn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Nn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Qi){return null}}function jn(e){const t={};e=(e.g&&2<=Un(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<e.length;i++){if(N(e[i]))continue;var n=Re(e[i]);const r=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=t[r]||[];t[r]=s,s.push(n)}te(t,(function(e){return e.join(", ")}))}function $n(e){let t="";return ee(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function qn(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=$n(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Bt(e,t,n))}function Bn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function zn(e){this.Ga=0,this.j=[],this.l=new We,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Bn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Bn("baseRetryDelayMs",5e3,e),this.hb=Bn("retryDelaySeedMs",1e4,e),this.eb=Bn("forwardChannelMaxRetries",2,e),this.xa=Bn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new cn(e&&e.concurrentRequestLimit),this.Ja=new _n,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Hn(e){if(Kn(e),3==e.H){var t=e.W++,n=Vt(e.I);if(Bt(n,"SID",e.K),Bt(n,"RID",t),Bt(n,"TYPE","terminate"),Yn(e,n),t=new _t(e,e.l,t),t.L=2,t.v=zt(Vt(n)),n=!1,h.navigator&&h.navigator.sendBeacon)try{n=h.navigator.sendBeacon(t.v.toString(),"")}catch(i){}!n&&h.Image&&((new Image).src=t.v,n=!0),n||(t.g=li(t.l,null),t.g.ha(t.v)),t.G=Date.now(),kt(t)}ai(e)}function Wn(e){e.g&&(ti(e),e.g.cancel(),e.g=null)}function Kn(e){Wn(e),e.u&&(h.clearTimeout(e.u),e.u=null),ii(e),e.i.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Gn(e){if(!un(e.i)&&!e.m){e.m=!0;var t=e.Na;xe||Le(),De||(xe(),De=!0),Pe.add(t,e),e.C=0}}function Jn(e,t){return!(hn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=t.F.concat(e.j),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=ot(v(e.Na,e,t),si(e,e.C)),e.C++,!0))}function Qn(e,t){var n;n=t?t.m:e.W++;const i=Vt(e.I);Bt(i,"SID",e.K),Bt(i,"RID",n),Bt(i,"AID",e.V),Yn(e,i),e.o&&e.s&&qn(i,e.o,e.s),n=new _t(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Xn(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),fn(e.i,n),Et(n,i,t)}function Yn(e,t){e.na&&ee(e.na,(function(e,n){Bt(t,n,e)})),e.h&&Lt({},(function(e,n){Bt(t,n,e)}))}function Xn(e,t,n){n=Math.min(e.j.length,n);var i=e.h?v(e.h.Va,e.h,e):null;e:{var r=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=r[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=r[a].g;const c=r[a].map;if(n-=t,0>n)t=Math.max(0,r[a].g-100),o=!1;else try{yn(c,e,"req"+n+"_")}catch(s){i&&i(c)}}if(o){i=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,i}function Zn(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;xe||Le(),De||(xe(),De=!0),Pe.add(t,e),e.A=0}}function ei(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=ot(v(e.Ma,e),si(e,e.A)),e.A++,!0)}function ti(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function ni(e){e.g=new _t(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=Vt(e.wa);Bt(t,"RID","rpc"),Bt(t,"SID",e.K),Bt(t,"AID",e.V),Bt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&Bt(t,"TO",e.qa),Bt(t,"TYPE","xmlhttp"),Yn(e,t),e.o&&e.s&&qn(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=zt(Vt(t)),n.s=null,n.S=!0,Tt(n,e)}function ii(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function ri(e,t){var n=null;if(e.g==t){ii(e),ti(e),e.g=null;var i=2}else{if(!dn(e.i,t))return;n=t.F,pn(e.i,t),i=1}if(0!=e.H)if(t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.G;var r=e.C;i=et(),Ee(i,new st(i,n)),Gn(e)}else Zn(e);else if(r=t.o,3==r||0==r&&0<t.ca||!(1==i&&Jn(e,t)||2==i&&ei(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:oi(e,5);break;case 4:oi(e,10);break;case 3:oi(e,6);break;default:oi(e,2)}}function si(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function oi(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var i=v(e.pb,e);n||(n=new Ut("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||jt(n,"https"),zt(n)),vn(n.toString(),i)}else rt(2);e.H=0,e.h&&e.h.za(t),ai(e),Kn(e)}function ai(e){if(e.H=0,e.ma=[],e.h){const t=gn(e.i);0==t.length&&0==e.j.length||(S(e.ma,t),S(e.ma,e.j),e.i.i.length=0,I(e.j),e.j.length=0),e.h.ya()}}function ci(e,t,n){var i=n instanceof Ut?Vt(n):new Ut(n);if(""!=i.g)t&&(i.g=t+"."+i.g),$t(i,i.m);else{var r=h.location;i=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new Ut(null);i&&jt(s,i),t&&(s.g=t),r&&$t(s,r),n&&(s.l=n),i=s}return n=e.F,t=e.Da,n&&t&&Bt(i,n,t),Bt(i,"VER",e.ra),Yn(e,i),i}function li(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new An(new bn({ob:!0})):new An(e.va),t.Oa(e.J),t}function ui(){}function hi(){if(F&&!(10<=Number(K)))throw Error("Environmental error: no available transport.")}function di(e,t){be.call(this),this.g=new zn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!N(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!N(t)&&(this.g.F=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new gi(this)}function fi(e){pt.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function pi(){gt.call(this),this.status=1}function gi(e){this.g=e}function mi(){this.blockSize=-1}function _i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function yi(e,t,n){n||(n=0);var i=Array(16);if("string"===typeof t)for(var r=0;16>r;++r)i[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];var s=e.g[3],o=t+(s^n&(r^s))+i[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(s^n&(r^s))+i[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(s^n&(r^s))+i[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(s^n&(r^s))+i[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(r^s&(n^r))+i[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(n^r))+i[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(n^r))+i[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(n^r))+i[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(n^r^s)+i[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^s)+i[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^s)+i[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^s)+i[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(r^(n|~s))+i[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~s))+i[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~s))+i[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~s))+i[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+s&4294967295}function vi(e,t){this.h=t;for(var n=[],i=!0,r=e.length-1;0<=r;r--){var s=0|e[r];i&&s==t||(n[r]=s,i=!1)}this.g=n}i=An.prototype,i.Oa=function(e){this.M=e},i.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():dt.g(),this.C=this.u?ut(this.u):ut(dt),this.g.onreadystatechange=v(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){return void Dn(this,s)}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!==typeof i.keys||"function"!==typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())n.set(e,i.get(e))}i=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),r=h.FormData&&e instanceof h.FormData,!(0<=C(On,t))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Fn(this),0<this.B&&((this.L=xn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=v(this.ua,this)):this.A=Ve(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Dn(this,s)}},i.ua=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ee(this,"timeout"),this.abort(8))},i.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ee(this,"complete"),Ee(this,"abort"),Mn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mn(this,!0)),An.$.N.call(this)},i.La=function(){this.s||(this.G||this.v||this.l?Ln(this):this.kb())},i.kb=function(){Ln(this)},i.isActive=function(){return!!this.g},i.da=function(){try{return 2<Un(this)?this.g.status:-1}catch(e){return-1}},i.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},i.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),kn(t)}},i.Ia=function(){return this.m},i.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},i=zn.prototype,i.ra=8,i.H=1,i.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const r=new _t(this,this.l,e);let s=this.s;if(this.U&&(s?(s=ne(s),re(s,this.U)):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var i=this.j[n];if(i="__data__"in i.map&&(i=i.map.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(t+=i,4096<t){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Xn(this,r,t),n=Vt(this.I),Bt(n,"RID",e),Bt(n,"CVER",22),this.F&&Bt(n,"X-HTTP-Session-Id",this.F),Yn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String($n(s)))+"&"+t:this.o&&qn(n,this.o,s)),fn(this.i,r),this.bb&&Bt(n,"TYPE","init"),this.P?(Bt(n,"$req",t),Bt(n,"SID","null"),r.aa=!0,Et(r,n,null)):Et(r,n,t),this.H=2}}else 3==this.H&&(e?Qn(this,e):0==this.j.length||un(this.i)||Qn(this))},i.Ma=function(){if(this.u=null,ni(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=ot(v(this.jb,this),e)}},i.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,rt(10),Wn(this),ni(this))},i.ib=function(){null!=this.v&&(this.v=null,Wn(this),ei(this),rt(19))},i.pb=function(e){e?(this.l.info("Successfully pinged google.com"),rt(2)):(this.l.info("Failed to ping google.com"),rt(1))},i.isActive=function(){return!!this.h&&this.h.isActive(this)},i=ui.prototype,i.Ba=function(){},i.Aa=function(){},i.za=function(){},i.ya=function(){},i.isActive=function(){return!0},i.Va=function(){},hi.prototype.g=function(e,t){return new di(e,t)},b(di,be),di.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;rt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=ci(e,null,e.Y),Gn(e)},di.prototype.close=function(){Hn(this.g)},di.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ce(e),e=n);t.j.push(new an(t.fb++,e)),3==t.H&&Gn(t)},di.prototype.N=function(){this.g.h=null,delete this.j,Hn(this.g),delete this.g,di.$.N.call(this)},b(fi,pt),b(pi,gt),b(gi,ui),gi.prototype.Ba=function(){Ee(this.g,"a")},gi.prototype.Aa=function(e){Ee(this.g,new fi(e))},gi.prototype.za=function(e){Ee(this.g,new pi)},gi.prototype.ya=function(){Ee(this.g,"b")},b(_i,mi),_i.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},_i.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,i=this.m,r=this.h,s=0;s<t;){if(0==r)for(;s<=n;)yi(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(i[r++]=e.charCodeAt(s++),r==this.blockSize){yi(this,i),r=0;break}}else for(;s<t;)if(i[r++]=e[s++],r==this.blockSize){yi(this,i),r=0;break}}this.h=r,this.i+=t},_i.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};var wi={};function bi(e){return-128<=e&&128>e?D(e,(function(e){return new vi([0|e],0>e?-1:0)})):new vi([0|e],0>e?-1:0)}function Ei(e){if(isNaN(e)||!isFinite(e))return Ii;if(0>e)return Ri(Ei(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=Ci;return new vi(t,0)}function Ti(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return Ri(Ti(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ei(Math.pow(t,8)),i=Ii,r=0;r<e.length;r+=8){var s=Math.min(8,e.length-r),o=parseInt(e.substring(r,r+s),t);8>s?(s=Ei(Math.pow(t,s)),i=i.R(s).add(Ei(o))):(i=i.R(n),i=i.add(Ei(o)))}return i}var Ci=4294967296,Ii=bi(0),Si=bi(1),ki=bi(16777216);function Ai(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Ni(e){return-1==e.h}function Ri(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new vi(n,~e.h).add(Si)}function Oi(e,t){return e.add(Ri(t))}function xi(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Di(e,t){this.g=e,this.h=t}function Pi(e,t){if(Ai(t))throw Error("division by zero");if(Ai(e))return new Di(Ii,Ii);if(Ni(e))return t=Pi(Ri(e),t),new Di(Ri(t.g),Ri(t.h));if(Ni(t))return t=Pi(e,Ri(t)),new Di(Ri(t.g),t.h);if(30<e.g.length){if(Ni(e)||Ni(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Si,i=t;0>=i.X(e);)n=Li(n),i=Li(i);var r=Mi(n,1),s=Mi(i,1);for(i=Mi(i,2),n=Mi(n,2);!Ai(i);){var o=s.add(i);0>=o.X(e)&&(r=r.add(n),s=o),i=Mi(i,1),n=Mi(n,1)}return t=Oi(e,r.R(t)),new Di(r,t)}for(r=Ii;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=Ei(n),o=s.R(t);Ni(o)||0<o.X(e);)n-=i,s=Ei(n),o=s.R(t);Ai(s)&&(s=Si),r=r.add(s),e=Oi(e,o)}return new Di(r,e)}function Li(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new vi(n,e.h)}function Mi(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,r=[],s=0;s<i;s++)r[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new vi(r,e.h)}i=vi.prototype,i.ea=function(){if(Ni(this))return-Ri(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:Ci+i)*t,t*=Ci}return e},i.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Ai(this))return"0";if(Ni(this))return"-"+Ri(this).toString(e);for(var t=Ei(Math.pow(e,6)),n=this,i="";;){var r=Pi(n,t).g;n=Oi(n,r.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=r,Ai(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},i.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},i.X=function(e){return e=Oi(this,e),Ni(e)?-1:Ai(e)?0:1},i.abs=function(){return Ni(this)?Ri(this):this},i.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,r=0;r<=t;r++){var s=i+(65535&this.D(r))+(65535&e.D(r)),o=(s>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new vi(n,-2147483648&n[n.length-1]?-1:0)},i.R=function(e){if(Ai(this)||Ai(e))return Ii;if(Ni(this))return Ni(e)?Ri(this).R(Ri(e)):Ri(Ri(this).R(e));if(Ni(e))return Ri(this.R(Ri(e)));if(0>this.X(ki)&&0>e.X(ki))return Ei(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<e.g.length;r++){var s=this.D(i)>>>16,o=65535&this.D(i),a=e.D(r)>>>16,c=65535&e.D(r);n[2*i+2*r]+=o*c,xi(n,2*i+2*r),n[2*i+2*r+1]+=s*c,xi(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,xi(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,xi(n,2*i+2*r+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new vi(n,0)},i.gb=function(e){return Pi(this,e).h},i.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new vi(n,this.h&e.h)},i.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new vi(n,this.h|e.h)},i.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new vi(n,this.h^e.h)},hi.prototype.createWebChannel=hi.prototype.g,di.prototype.send=di.prototype.u,di.prototype.open=di.prototype.m,di.prototype.close=di.prototype.close,at.NO_ERROR=0,at.TIMEOUT=8,at.HTTP_ERROR=6,ct.COMPLETE="complete",ht.EventType=ft,ft.OPEN="a",ft.CLOSE="b",ft.ERROR="c",ft.MESSAGE="d",be.prototype.listen=be.prototype.O,An.prototype.listenOnce=An.prototype.P,An.prototype.getLastError=An.prototype.Sa,An.prototype.getLastErrorCode=An.prototype.Ia,An.prototype.getStatus=An.prototype.da,An.prototype.getResponseJson=An.prototype.Wa,An.prototype.getResponseText=An.prototype.ja,An.prototype.send=An.prototype.ha,An.prototype.setWithCredentials=An.prototype.Oa,_i.prototype.digest=_i.prototype.l,_i.prototype.reset=_i.prototype.reset,_i.prototype.update=_i.prototype.j,vi.prototype.add=vi.prototype.add,vi.prototype.multiply=vi.prototype.R,vi.prototype.modulo=vi.prototype.gb,vi.prototype.compare=vi.prototype.X,vi.prototype.toNumber=vi.prototype.ea,vi.prototype.toString=vi.prototype.toString,vi.prototype.getBits=vi.prototype.D,vi.fromNumber=Ei,vi.fromString=Ti;var Fi=l.createWebChannelTransport=function(){return new hi},Ui=l.getStatEventTarget=function(){return et()},Vi=l.ErrorCode=at,ji=l.EventType=ct,$i=l.Event=Xe,qi=l.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Bi=l.FetchXmlHttpFactory=bn,zi=l.WebChannel=ht,Hi=l.XhrIo=An,Wi=l.Md5=_i,Ki=l.Integer=vi;const Gi="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ji.UNAUTHENTICATED=new Ji(null),Ji.GOOGLE_CREDENTIALS=new Ji("google-credentials-uid"),Ji.FIRST_PARTY=new Ji("first-party-uid"),Ji.MOCK_USER=new Ji("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Qi="10.1.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=new o.Yd("@firebase/firestore");function Xi(){return Yi.logLevel}function Zi(e,...t){if(Yi.logLevel<=o["in"].DEBUG){const n=t.map(nr);Yi.debug(`Firestore (${Qi}): ${e}`,...n)}}function er(e,...t){if(Yi.logLevel<=o["in"].ERROR){const n=t.map(nr);Yi.error(`Firestore (${Qi}): ${e}`,...n)}}function tr(e,...t){if(Yi.logLevel<=o["in"].WARN){const n=t.map(nr);Yi.warn(`Firestore (${Qi}): ${e}`,...n)}}function nr(e){if("string"==typeof e)return e;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(e="Unexpected state"){const t=`FIRESTORE (${Qi}) INTERNAL ASSERTION FAILED: `+e;throw er(t),new Error(t)}function rr(e,t){e||ir()}function sr(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ar extends a.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ur{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ji.UNAUTHENTICATED)))}shutdown(){}}class hr{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class dr{constructor(e){this.t=e,this.currentUser=Ji.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new cr;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new cr,e.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const t=r;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{Zi("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Zi("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new cr)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Zi("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(rr("string"==typeof t.accessToken),new lr(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return rr(null===e||"string"==typeof e),new Ji(e)}}class fr{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Ji.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class pr{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new fr(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Ji.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class gr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mr{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&Zi("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,Zi("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const i=e=>{Zi("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>i(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?i(e):Zi("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(rr("string"==typeof e.token),this.R=e.token,new gr(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _r(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=_r(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function vr(e,t){return e<t?-1:e>t?1:0}function wr(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class br{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ar(or.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ar(or.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ar(or.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ar(or.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return br.fromMillis(Date.now())}static fromDate(e){return br.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new br(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?vr(this.nanoseconds,e.nanoseconds):vr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Er(e)}static min(){return new Er(new br(0,0))}static max(){return new Er(new br(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,t,n){void 0===t?t=0:t>e.length&&ir(),void 0===n?n=e.length-t:n>e.length-t&&ir(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Tr.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Tr?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),r=t.get(i);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Cr extends Tr{construct(e,t,n){return new Cr(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ar(or.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Cr(t)}static emptyPath(){return new Cr([])}}const Ir=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Sr extends Tr{construct(e,t,n){return new Sr(e,t,n)}static isValidIdentifier(e){return Ir.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Sr.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Sr(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(0===n.length)throw new ar(or.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new ar(or.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ar(or.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(s=!s,i++):"."!==t||s?(n+=t,i++):(r(),i++)}if(r(),s)throw new ar(or.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Sr(t)}static emptyPath(){return new Sr([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.path=e}static fromPath(e){return new kr(Cr.fromString(e))}static fromName(e){return new kr(Cr.fromString(e).popFirst(5))}static empty(){return new kr(Cr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Cr.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Cr.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new kr(new Cr(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}Ar.UNKNOWN_ID=-1;function Nr(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=Er.fromTimestamp(1e9===i?new br(n+1,0):new br(n,i));return new Or(r,kr.empty(),t)}function Rr(e){return new Or(e.readTime,e.key,-1)}class Or{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Or(Er.min(),kr.empty(),-1)}static max(){return new Or(Er.max(),kr.empty(),-1)}}function xr(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=kr.comparator(e.documentKey,t.documentKey),0!==n?n:vr(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(e){if(e.code!==or.FAILED_PRECONDITION||e.message!==Dr)throw e;Zi("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ir(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Mr(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Mr?t:Mr.resolve(t)}catch(e){return Mr.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Mr.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Mr.reject(t)}static resolve(e){return new Mr(((t,n)=>{t(e)}))}static reject(e){return new Mr(((t,n)=>{n(e)}))}static waitFor(e){return new Mr(((t,n)=>{let i=0,r=0,s=!1;e.forEach((e=>{++i,e.next((()=>{++r,s&&r===i&&t()}),(e=>n(e)))})),s=!0,r===i&&t()}))}static or(e){let t=Mr.resolve(!1);for(const n of e)t=t.next((e=>e?Mr.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}static mapArray(e,t){return new Mr(((n,i)=>{const r=e.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===r&&n(s)}),(e=>i(e)))}}))}static doWhile(e,t){return new Mr(((n,i)=>{const r=()=>{!0===e()?t().next((()=>{r()}),i):n()};r()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ur{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}function Vr(e){return null==e}function jr(e){return 0===e&&1/e==-1/0}function $r(e){return"number"==typeof e&&Number.isInteger(e)&&!jr(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ur.ae=-1;const qr=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Br=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],zr=Br;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hr(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Wr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Kr(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,t){this.comparator=e,this.root=t||Qr.EMPTY}insert(e,t){return new Gr(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Qr.BLACK,null,null))}remove(e){return new Gr(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qr.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jr(this.root,e,this.comparator,!0)}}class Jr{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qr{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Qr.RED,this.left=null!=i?i:Qr.EMPTY,this.right=null!=r?r:Qr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new Qr(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Qr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return Qr.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ir();if(this.right.isRed())throw ir();const e=this.left.check();if(e!==this.right.check())throw ir();return e+(this.isRed()?0:1)}}Qr.EMPTY=null,Qr.RED=!0,Qr.BLACK=!1,Qr.EMPTY=new class{constructor(){this.size=0}get key(){throw ir()}get value(){throw ir()}get color(){throw ir()}get left(){throw ir()}get right(){throw ir()}copy(e,t,n,i,r){return this}insert(e,t,n){return new Qr(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yr{constructor(e){this.comparator=e,this.data=new Gr(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xr(this.data.getIterator())}getIteratorFrom(e){return new Xr(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Yr))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Yr(this.comparator);return t.data=e,t}}class Xr{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zr{constructor(e){this.fields=e,e.sort(Sr.comparator)}static empty(){return new Zr([])}unionWith(e){let t=new Yr(Sr.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Zr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return wr(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ts{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new es("Invalid base64 string: "+e):e}}(e);return new ts(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ts(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return vr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ts.EMPTY_BYTE_STRING=new ts("");const ns=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function is(e){if(rr(!!e),"string"==typeof e){let t=0;const n=ns.exec(e);if(rr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:rs(e.seconds),nanos:rs(e.nanos)}}function rs(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ss(e){return"string"==typeof e?ts.fromBase64String(e):ts.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function as(e){const t=e.mapValue.fields.__previous_value__;return os(t)?as(t):t}function cs(e){const t=is(e.mapValue.fields.__local_write_time__.timestampValue);return new br(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t,n,i,r,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class us{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new us("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof us&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ds(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?os(e)?4:Ss(e)?9007199254740991:10:ir()}function fs(e,t){if(e===t)return!0;const n=ds(e);if(n!==ds(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return cs(e).isEqual(cs(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=is(e.timestampValue),i=is(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return ss(e.bytesValue).isEqual(ss(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return rs(e.geoPointValue.latitude)===rs(t.geoPointValue.latitude)&&rs(e.geoPointValue.longitude)===rs(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return rs(e.integerValue)===rs(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=rs(e.doubleValue),i=rs(t.doubleValue);return n===i?jr(n)===jr(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return wr(e.arrayValue.values||[],t.arrayValue.values||[],fs);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(Hr(n)!==Hr(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!fs(n[r],i[r])))return!1;return!0}(e,t);default:return ir()}}function ps(e,t){return void 0!==(e.values||[]).find((e=>fs(e,t)))}function gs(e,t){if(e===t)return 0;const n=ds(e),i=ds(t);if(n!==i)return vr(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return vr(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=rs(e.integerValue||e.doubleValue),i=rs(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return ms(e.timestampValue,t.timestampValue);case 4:return ms(cs(e),cs(t));case 5:return vr(e.stringValue,t.stringValue);case 6:return function(e,t){const n=ss(e),i=ss(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let r=0;r<n.length&&r<i.length;r++){const e=vr(n[r],i[r]);if(0!==e)return e}return vr(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=vr(rs(e.latitude),rs(t.latitude));return 0!==n?n:vr(rs(e.longitude),rs(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let r=0;r<n.length&&r<i.length;++r){const e=gs(n[r],i[r]);if(e)return e}return vr(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===hs.mapValue&&t===hs.mapValue)return 0;if(e===hs.mapValue)return 1;if(t===hs.mapValue)return-1;const n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const e=vr(i[o],s[o]);if(0!==e)return e;const t=gs(n[i[o]],r[s[o]]);if(0!==t)return t}return vr(i.length,s.length)}(e.mapValue,t.mapValue);default:throw ir()}}function ms(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return vr(e,t);const n=is(e),i=is(t),r=vr(n.seconds,i.seconds);return 0!==r?r:vr(n.nanos,i.nanos)}function _s(e){return ys(e)}function ys(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=is(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return ss(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return kr.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=ys(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const r of t)i?i=!1:n+=",",n+=`${r}:${ys(e.fields[r])}`;return n+"}"}(e.mapValue):ir()}function vs(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ws(e){return!!e&&"integerValue"in e}function bs(e){return!!e&&"arrayValue"in e}function Es(e){return!!e&&"nullValue"in e}function Ts(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Cs(e){return!!e&&"mapValue"in e}function Is(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Wr(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Is(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Is(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ss(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ks{constructor(e){this.value=e}static empty(){return new ks({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Cs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Is(t)}setAll(e){let t=Sr.emptyPath(),n={},i=[];e.forEach(((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=Is(e):i.push(r.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());Cs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fs(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Cs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Wr(t,((t,n)=>e[t]=n));for(const i of n)delete e[i]}clone(){return new ks(Is(this.value))}}function As(e){const t=[];return Wr(e.fields,((e,n)=>{const i=new Sr([e]);if(Cs(n)){const e=As(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new Zr(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ns{constructor(e,t,n,i,r,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Ns(e,0,Er.min(),Er.min(),Er.min(),ks.empty(),0)}static newFoundDocument(e,t,n,i){return new Ns(e,1,t,Er.min(),n,i,0)}static newNoDocument(e,t){return new Ns(e,2,t,Er.min(),Er.min(),ks.empty(),0)}static newUnknownDocument(e,t){return new Ns(e,3,t,Er.min(),Er.min(),ks.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Er.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ks.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ks.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Er.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ns&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ns(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t){this.position=e,this.inclusive=t}}function Os(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],o=e.position[r];if(i=s.field.isKeyField()?kr.comparator(kr.fromName(o.referenceValue),n.key):gs(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function xs(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!fs(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ps(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{}class Ms extends Ls{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new zs(e,t,n):"array-contains"===t?new Gs(e,n):"in"===t?new Js(e,n):"not-in"===t?new Qs(e,n):"array-contains-any"===t?new Ys(e,n):new Ms(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Hs(e,n):new Ws(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(gs(t,this.value)):null!==t&&ds(this.value)===ds(t)&&this.matchesComparison(gs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ir()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Fs extends Ls{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Fs(e,t)}matches(e){return Us(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le((e=>e.isInequality()));return null!==e?e.field:null}le(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Us(e){return"and"===e.op}function Vs(e){return js(e)&&Us(e)}function js(e){for(const t of e.filters)if(t instanceof Fs)return!1;return!0}function $s(e){if(e instanceof Ms)return e.field.canonicalString()+e.op.toString()+_s(e.value);if(Vs(e))return e.filters.map((e=>$s(e))).join(",");{const t=e.filters.map((e=>$s(e))).join(",");return`${e.op}(${t})`}}function qs(e,t){return e instanceof Ms?function(e,t){return t instanceof Ms&&e.op===t.op&&e.field.isEqual(t.field)&&fs(e.value,t.value)}(e,t):e instanceof Fs?function(e,t){return t instanceof Fs&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,i)=>e&&qs(n,t.filters[i])),!0)}(e,t):void ir()}function Bs(e){return e instanceof Ms?function(e){return`${e.field.canonicalString()} ${e.op} ${_s(e.value)}`}(e):e instanceof Fs?function(e){return e.op.toString()+" {"+e.getFilters().map(Bs).join(" ,")+"}"}(e):"Filter"}class zs extends Ms{constructor(e,t,n){super(e,t,n),this.key=kr.fromName(n.referenceValue)}matches(e){const t=kr.comparator(e.key,this.key);return this.matchesComparison(t)}}class Hs extends Ms{constructor(e,t){super(e,"in",t),this.keys=Ks("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ws extends Ms{constructor(e,t){super(e,"not-in",t),this.keys=Ks("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ks(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>kr.fromName(e.referenceValue)))}class Gs extends Ms{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return bs(t)&&ps(t.arrayValue,this.value)}}class Js extends Ms{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ps(this.value.arrayValue,t)}}class Qs extends Ms{constructor(e,t){super(e,"not-in",t)}matches(e){if(ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ps(this.value.arrayValue,t)}}class Ys extends Ms{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!bs(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>ps(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,t=null,n=[],i=[],r=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.he=null}}function Zs(e,t=null,n=[],i=[],r=null,s=null,o=null){return new Xs(e,t,n,i,r,s,o)}function eo(e){const t=sr(e);if(null===t.he){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>$s(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Vr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>_s(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>_s(e))).join(",")),t.he=e}return t.he}function to(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Ps(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!qs(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!xs(e.startAt,t.startAt)&&xs(e.endAt,t.endAt)}function no(e){return kr.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class io{constructor(e,t=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function ro(e,t,n,i,r,s,o,a){return new io(e,t,n,i,r,s,o,a)}function so(e){return new io(e)}function oo(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function ao(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function co(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function lo(e){return null!==e.collectionGroup}function uo(e){const t=sr(e);if(null===t.Pe){t.Pe=[];const e=co(t),n=ao(t);if(null!==e&&null===n)e.isKeyField()||t.Pe.push(new Ds(e)),t.Pe.push(new Ds(Sr.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.Pe.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Ds(Sr.keyField(),e))}}}return t.Pe}function ho(e){const t=sr(e);if(!t.Ie)if("F"===t.limitType)t.Ie=Zs(t.path,t.collectionGroup,uo(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const r of uo(t)){const t="desc"===r.dir?"asc":"desc";e.push(new Ds(r.field,t))}const n=t.endAt?new Rs(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Rs(t.startAt.position,t.startAt.inclusive):null;t.Ie=Zs(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t.Ie}function fo(e,t){t.getFirstInequalityField(),co(e);const n=e.filters.concat([t]);return new io(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function po(e,t,n){return new io(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function go(e,t){return to(ho(e),ho(t))&&e.limitType===t.limitType}function mo(e){return`${eo(ho(e))}|lt:${e.limitType}`}function _o(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Bs(e))).join(", ")}]`),Vr(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>_s(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>_s(e))).join(",")),`Target(${t})`}(ho(e))}; limitType=${e.limitType})`}function yo(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):kr.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of uo(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const i=Os(e,t,n);return e.inclusive?i<=0:i<0}(e.startAt,uo(e),t))&&!(e.endAt&&!function(e,t,n){const i=Os(e,t,n);return e.inclusive?i>=0:i>0}(e.endAt,uo(e),t))}(e,t)}function vo(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function wo(e){return(t,n)=>{let i=!1;for(const r of uo(e)){const e=bo(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}function bo(e,t,n){const i=e.field.isKeyField()?kr.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?gs(i,r):ir()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return ir()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Wr(this.inner,((t,n)=>{for(const[i,r]of n)e(i,r)}))}isEmpty(){return Kr(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=new Gr(kr.comparator);function Co(){return To}const Io=new Gr(kr.comparator);function So(...e){let t=Io;for(const n of e)t=t.insert(n.key,n);return t}function ko(e){let t=Io;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Ao(){return Ro()}function No(){return Ro()}function Ro(){return new Eo((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Oo=new Gr(kr.comparator),xo=new Yr(kr.comparator);function Do(...e){let t=xo;for(const n of e)t=t.add(n);return t}const Po=new Yr(vr);function Lo(){return Po}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jr(t)?"-0":t}}function Fo(e){return{integerValue:""+e}}function Uo(e,t){return $r(t)?Fo(t):Mo(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this._=void 0}}function jo(e,t,n){return e instanceof Bo?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&os(t)&&(t=as(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof zo?Ho(e,t):e instanceof Wo?Ko(e,t):function(e,t){const n=qo(e,t),i=Jo(n)+Jo(e.Te);return ws(n)&&ws(e.Te)?Fo(i):Mo(e.serializer,i)}(e,t)}function $o(e,t,n){return e instanceof zo?Ho(e,t):e instanceof Wo?Ko(e,t):n}function qo(e,t){return e instanceof Go?function(e){return ws(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class Bo extends Vo{}class zo extends Vo{constructor(e){super(),this.elements=e}}function Ho(e,t){const n=Qo(t);for(const i of e.elements)n.some((e=>fs(e,i)))||n.push(i);return{arrayValue:{values:n}}}class Wo extends Vo{constructor(e){super(),this.elements=e}}function Ko(e,t){let n=Qo(t);for(const i of e.elements)n=n.filter((e=>!fs(e,i)));return{arrayValue:{values:n}}}class Go extends Vo{constructor(e,t){super(),this.serializer=e,this.Te=t}}function Jo(e){return rs(e.integerValue||e.doubleValue)}function Qo(e){return bs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof zo&&t instanceof zo||e instanceof Wo&&t instanceof Wo?wr(e.elements,t.elements,fs):e instanceof Go&&t instanceof Go?fs(e.Te,t.Te):e instanceof Bo&&t instanceof Bo}(e.transform,t.transform)}class Xo{constructor(e,t){this.version=e,this.transformResults=t}}class Zo{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Zo}static exists(e){return new Zo(void 0,e)}static updateTime(e){return new Zo(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ea(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ta{}function na(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new da(e.key,Zo.none()):new aa(e.key,e.data,Zo.none());{const n=e.data,i=ks.empty();let r=new Yr(Sr.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),r=r.add(e)}return new ca(e.key,i,new Zr(r.toArray()),Zo.none())}}function ia(e,t,n){e instanceof aa?function(e,t,n){const i=e.value.clone(),r=ua(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof ca?function(e,t,n){if(!ea(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=ua(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(la(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function ra(e,t,n,i){return e instanceof aa?function(e,t,n,i){if(!ea(e.precondition,t))return n;const r=e.value.clone(),s=ha(e.fieldTransforms,i,t);return r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,n,i):e instanceof ca?function(e,t,n,i){if(!ea(e.precondition,t))return n;const r=ha(e.fieldTransforms,i,t),s=t.data;return s.setAll(la(e)),s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,i):function(e,t,n){return ea(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function sa(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),r=qo(i.transform,e||null);null!=r&&(null===n&&(n=ks.empty()),n.set(i.field,r))}return n||null}function oa(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&wr(e,t,((e,t)=>Yo(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class aa extends ta{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ca extends ta{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function la(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function ua(e,t,n){const i=new Map;rr(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],o=s.transform,a=t.data.field(s.field);i.set(s.field,$o(o,a,n[r]))}return i}function ha(e,t,n){const i=new Map;for(const r of e){const e=r.transform,s=n.data.field(r.field);i.set(r.field,jo(e,s,t))}return i}class da extends ta{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fa extends ta{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const t=this.mutations[i];t.key.isEqual(e.key)&&ia(t,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ra(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ra(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=No();return this.mutations.forEach((i=>{const r=e.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=t.has(i.key)?null:o;const a=na(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(Er.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Do())}isEqual(e){return this.batchId===e.batchId&&wr(this.mutations,e.mutations,((e,t)=>oa(e,t)))&&wr(this.baseMutations,e.baseMutations,((e,t)=>oa(e,t)))}}class ga{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){rr(e.mutations.length===n.length);let i=function(){return Oo}();const r=e.mutations;for(let s=0;s<r.length;s++)i=i.insert(r[s].key,n[s].version);return new ga(e,t,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _a{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ya,va;function wa(e){switch(e){default:return ir();case or.CANCELLED:case or.UNKNOWN:case or.DEADLINE_EXCEEDED:case or.RESOURCE_EXHAUSTED:case or.INTERNAL:case or.UNAVAILABLE:case or.UNAUTHENTICATED:return!1;case or.INVALID_ARGUMENT:case or.NOT_FOUND:case or.ALREADY_EXISTS:case or.PERMISSION_DENIED:case or.FAILED_PRECONDITION:case or.ABORTED:case or.OUT_OF_RANGE:case or.UNIMPLEMENTED:case or.DATA_LOSS:return!0}}function ba(e){if(void 0===e)return er("GRPC error has no .code"),or.UNKNOWN;switch(e){case ya.OK:return or.OK;case ya.CANCELLED:return or.CANCELLED;case ya.UNKNOWN:return or.UNKNOWN;case ya.DEADLINE_EXCEEDED:return or.DEADLINE_EXCEEDED;case ya.RESOURCE_EXHAUSTED:return or.RESOURCE_EXHAUSTED;case ya.INTERNAL:return or.INTERNAL;case ya.UNAVAILABLE:return or.UNAVAILABLE;case ya.UNAUTHENTICATED:return or.UNAUTHENTICATED;case ya.INVALID_ARGUMENT:return or.INVALID_ARGUMENT;case ya.NOT_FOUND:return or.NOT_FOUND;case ya.ALREADY_EXISTS:return or.ALREADY_EXISTS;case ya.PERMISSION_DENIED:return or.PERMISSION_DENIED;case ya.FAILED_PRECONDITION:return or.FAILED_PRECONDITION;case ya.ABORTED:return or.ABORTED;case ya.OUT_OF_RANGE:return or.OUT_OF_RANGE;case ya.UNIMPLEMENTED:return or.UNIMPLEMENTED;case ya.DATA_LOSS:return or.DATA_LOSS;default:return ir()}}(va=ya||(ya={}))[va.OK=0]="OK",va[va.CANCELLED=1]="CANCELLED",va[va.UNKNOWN=2]="UNKNOWN",va[va.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",va[va.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",va[va.NOT_FOUND=5]="NOT_FOUND",va[va.ALREADY_EXISTS=6]="ALREADY_EXISTS",va[va.PERMISSION_DENIED=7]="PERMISSION_DENIED",va[va.UNAUTHENTICATED=16]="UNAUTHENTICATED",va[va.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",va[va.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",va[va.ABORTED=10]="ABORTED",va[va.OUT_OF_RANGE=11]="OUT_OF_RANGE",va[va.UNIMPLEMENTED=12]="UNIMPLEMENTED",va[va.INTERNAL=13]="INTERNAL",va[va.UNAVAILABLE=14]="UNAVAILABLE",va[va.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ea{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ta}static getOrCreateInstance(){return null===Ta&&(Ta=new Ea),Ta}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let Ta=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=new Ki([4294967295,4294967295],0);function Sa(e){const t=Ca().encode(e),n=new Wi;return n.update(t),new Uint8Array(n.digest())}function ka(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Ki([n,i],0),new Ki([r,s],0)]}class Aa{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Na(`Invalid padding: ${t}`);if(n<0)throw new Na(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Na(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Na(`Invalid padding when bitmap length is 0: ${t}`);this.de=8*e.length-t,this.Ae=Ki.fromNumber(this.de)}Re(e,t,n){let i=e.add(t.multiply(Ki.fromNumber(n)));return 1===i.compare(Ia)&&(i=new Ki([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.de)return!1;const t=Sa(e),[n,i]=ka(t);for(let r=0;r<this.hashCount;r++){const e=this.Re(n,i,r);if(!this.Ve(e))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),s=new Aa(r,i,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.de)return;const t=Sa(e),[n,i]=ka(t);for(let r=0;r<this.hashCount;r++){const e=this.Re(n,i,r);this.me(e)}}me(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Na extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,t,n,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Oa.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ra(Er.min(),i,new Gr(vr),Co(),Do())}}class Oa{constructor(e,t,n,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Oa(n,t,Do(),Do(),Do())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t,n,i){this.fe=e,this.removedTargetIds=t,this.key=n,this.ge=i}}class Da{constructor(e,t){this.targetId=e,this.pe=t}}class Pa{constructor(e,t,n=ts.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class La{constructor(){this.ye=0,this.we=Ua(),this.Se=ts.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return 0!==this.ye}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=Do(),t=Do(),n=Do();return this.we.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:ir()}})),new Oa(this.Se,this.be,e,t,n)}xe(){this.De=!1,this.we=Ua()}Oe(e,t){this.De=!0,this.we=this.we.insert(e,t)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class Ma{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=Co(),this.$e=Fa(),this.Ue=new Gr(vr)}We(e){for(const t of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(t,e.ge):this.ze(t,e.key,e.ge);for(const t of e.removedTargetIds)this.ze(t,e.key,e.ge)}je(e){this.forEachTarget(e,(t=>{const n=this.He(t);switch(e.state){case 0:this.Je(t)&&n.Fe(e.resumeToken);break;case 1:n.Le(),n.ve||n.xe(),n.Fe(e.resumeToken);break;case 2:n.Le(),n.ve||this.removeTarget(t);break;case 3:this.Je(t)&&(n.ke(),n.Fe(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),n.Fe(e.resumeToken));break;default:ir()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qe.forEach(((e,n)=>{this.Je(n)&&t(n)}))}Ze(e){var t,n;const i=e.targetId,r=e.pe.count,s=this.Xe(i);if(s){const o=s.target;if(no(o))if(0===r){const e=new kr(o.path);this.ze(i,e,Ns.newNoDocument(e,Er.min()))}else rr(1===r);else{const s=this.et(i);if(s!==r){const r=this.tt(e,s);if(0!==r.status){this.Ye(i);const e=2===r.status?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,e)}null===(t=Ea.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n,i){var r,s,o,a,c,l;const u={localCacheCount:n,existenceFilterCount:i.count},h=i.unchangedNames;return h&&(u.bloomFilter={applied:0===e,hashCount:null!==(r=null==h?void 0:h.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(a=null===(o=null===(s=null==h?void 0:h.bits)||void 0===s?void 0:s.bitmap)||void 0===o?void 0:o.length)&&void 0!==a?a:0,padding:null!==(l=null===(c=null==h?void 0:h.bits)||void 0===c?void 0:c.padding)&&void 0!==l?l:0},t&&(u.bloomFilter.mightContain=t)),u}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r.status,null!==(n=r.nt)&&void 0!==n?n:null,s,e.pe))}}}}tt(e,t){const{unchangedNames:n,count:i}=e.pe;if(!n||!n.bits)return{status:1};const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=ss(r).toUint8Array()}catch(e){if(e instanceof es)return tr("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw e}try{c=new Aa(a,s,o)}catch(e){return tr(e instanceof Na?"BloomFilter error: ":"Applying bloom filter failed: ",e),{status:1}}const l=e=>{const t=this.qe.rt();return c.mightContain(`projects/${t.projectId}/databases/${t.database}/documents/${e}`)};return 0===c.de?{status:1}:{status:i===t-this.it(e.targetId,l)?0:2,nt:l}}it(e,t){const n=this.qe.getRemoteKeysForTarget(e);let i=0;return n.forEach((n=>{t(n.path.canonicalString())||(this.ze(e,n,null),i++)})),i}st(e){const t=new Map;this.Qe.forEach(((n,i)=>{const r=this.Xe(i);if(r){if(n.current&&no(r.target)){const t=new kr(r.target.path);null!==this.Ke.get(t)||this.ot(i,t)||this.ze(i,t,Ns.newNoDocument(t,e))}n.Ce&&(t.set(i,n.Me()),n.xe())}}));let n=Do();this.$e.forEach(((e,t)=>{let i=!0;t.forEachWhile((e=>{const t=this.Xe(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(i=!1,!1)})),i&&(n=n.add(e))})),this.Ke.forEach(((t,n)=>n.setReadTime(e)));const i=new Ra(e,t,this.Ue,this.Ke,n);return this.Ke=Co(),this.$e=Fa(),this.Ue=new Gr(vr),i}Ge(e,t){if(!this.Je(e))return;const n=this.ot(e,t.key)?2:0;this.He(e).Oe(t.key,n),this.Ke=this.Ke.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e))}ze(e,t,n){if(!this.Je(e))return;const i=this.He(e);this.ot(e,t)?i.Oe(t,1):i.Ne(t),this.$e=this.$e.insert(t,this._t(t).delete(e)),n&&(this.Ke=this.Ke.insert(t,n))}removeTarget(e){this.Qe.delete(e)}et(e){const t=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let t=this.Qe.get(e);return t||(t=new La,this.Qe.set(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Yr(vr),this.$e=this.$e.insert(e,t)),t}Je(e){const t=null!==this.Xe(e);return t||Zi("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.Qe.get(e);return t&&t.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new La),this.qe.getRemoteKeysForTarget(e).forEach((t=>{this.ze(e,t,null)}))}ot(e,t){return this.qe.getRemoteKeysForTarget(e).has(t)}}function Fa(){return new Gr(kr.comparator)}function Ua(){return new Gr(kr.comparator)}const Va=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),ja=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),$a=(()=>{const e={and:"AND",or:"OR"};return e})();class qa{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ba(e,t){return e.useProto3Json||Vr(t)?t:{value:t}}function za(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ha(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Wa(e,t){return za(e,t.toTimestamp())}function Ka(e){return rr(!!e),Er.fromTimestamp(function(e){const t=is(e);return new br(t.seconds,t.nanos)}(e))}function Ga(e,t){return function(e){return new Cr(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Ja(e){const t=Cr.fromString(e);return rr(yc(t)),t}function Qa(e,t){return Ga(e.databaseId,t.path)}function Ya(e,t){const n=Ja(t);if(n.get(1)!==e.databaseId.projectId)throw new ar(or.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ar(or.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new kr(tc(n))}function Xa(e,t){return Ga(e.databaseId,t)}function Za(e){const t=Ja(e);return 4===t.length?Cr.emptyPath():tc(t)}function ec(e){return new Cr(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function tc(e){return rr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function nc(e,t,n){return{name:Qa(e,t),fields:n.value.mapValue.fields}}function ic(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:ir()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(rr(void 0===t||"string"==typeof t),ts.fromBase64String(t||"")):(rr(void 0===t||t instanceof Uint8Array),ts.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?or.UNKNOWN:ba(e.code);return new ar(t,e.message||"")}(o);n=new Pa(i,r,s,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=Ya(e,i.document.name),s=Ka(i.document.updateTime),o=i.document.createTime?Ka(i.document.createTime):Er.min(),a=new ks({mapValue:{fields:i.document.fields}}),c=Ns.newFoundDocument(r,s,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];n=new xa(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=Ya(e,i.document),s=i.readTime?Ka(i.readTime):Er.min(),o=Ns.newNoDocument(r,s),a=i.removedTargetIds||[];n=new xa([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=Ya(e,i.document),s=i.removedTargetIds||[];n=new xa([],s,r,null)}else{if(!("filter"in t))return ir();{t.filter;const e=t.filter;e.targetId;const{count:i=0,unchangedNames:r}=e,s=new _a(i,r),o=e.targetId;n=new Da(o,s)}}return n}function rc(e,t){let n;if(t instanceof aa)n={update:nc(e,t.key,t.value)};else if(t instanceof da)n={delete:Qa(e,t.key)};else if(t instanceof ca)n={update:nc(e,t.key,t.data),updateMask:_c(t.fieldMask)};else{if(!(t instanceof fa))return ir();n={verify:Qa(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Bo)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof zo)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Wo)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Go)return{fieldPath:t.field.canonicalString(),increment:n.Te};throw ir()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Wa(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:ir()}(e,t.precondition)),n}function sc(e,t){return e&&e.length>0?(rr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Ka(e.updateTime):Ka(t);return n.isEqual(Er.min())&&(n=Ka(t)),new Xo(n,e.transformResults||[])}(e,t)))):[]}function oc(e,t){return{documents:[Xa(e,t.path)]}}function ac(e,t){const n={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(n.parent=Xa(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Xa(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(e){if(0!==e.length)return mc(Fs.create(e,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:pc(e.field),direction:hc(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Ba(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function cc(e){let t=Za(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){rr(1===i);const e=n.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=uc(e);return t instanceof Fs&&Vs(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map((e=>function(e){return new Ds(gc(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Vr(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Rs(n,t)}(n.startAt));let l=null;return n.endAt&&(l=function(e){const t=!e.before,n=e.values||[];return new Rs(n,t)}(n.endAt)),ro(t,r,o,s,a,"F",c,l)}function lc(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ir()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function uc(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=gc(e.unaryFilter.field);return Ms.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=gc(e.unaryFilter.field);return Ms.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=gc(e.unaryFilter.field);return Ms.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=gc(e.unaryFilter.field);return Ms.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ir()}}(e):void 0!==e.fieldFilter?function(e){return Ms.create(gc(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ir()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Fs.create(e.compositeFilter.filters.map((e=>uc(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ir()}}(e.compositeFilter.op))}(e):ir()}function hc(e){return Va[e]}function dc(e){return ja[e]}function fc(e){return $a[e]}function pc(e){return{fieldPath:e.canonicalString()}}function gc(e){return Sr.fromServerFormat(e.fieldPath)}function mc(e){return e instanceof Ms?function(e){if("=="===e.op){if(Ts(e.value))return{unaryFilter:{field:pc(e.field),op:"IS_NAN"}};if(Es(e.value))return{unaryFilter:{field:pc(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ts(e.value))return{unaryFilter:{field:pc(e.field),op:"IS_NOT_NAN"}};if(Es(e.value))return{unaryFilter:{field:pc(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pc(e.field),op:dc(e.op),value:e.value}}}(e):e instanceof Fs?function(e){const t=e.getFilters().map((e=>mc(e)));return 1===t.length?t[0]:{compositeFilter:{op:fc(e.op),filters:t}}}(e):ir()}function _c(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function yc(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t,n,i,r=Er.min(),s=Er.min(),o=ts.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new vc(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new vc(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e){this.ct=e}}function bc(e){const t=cc({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?po(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(rs(e.integerValue));else if("doubleValue"in e){const n=rs(e.doubleValue);isNaN(n)?this.Et(t,13):(this.Et(t,15),jr(n)?t.dt(0):t.dt(n))}else if("timestampValue"in e){const n=e.timestampValue;this.Et(t,20),"string"==typeof n?t.At(n):(t.At(`${n.seconds||""}`),t.dt(n.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(ss(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Et(t,45),t.dt(n.latitude||0),t.dt(n.longitude||0)}else"mapValue"in e?Ss(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):ir()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){const n=e.fields||{};this.Et(t,55);for(const i of Object.keys(n))this.Rt(i,t),this.It(n[i],t)}wt(e,t){const n=e.values||[];this.Et(t,50);for(const i of n)this.It(i,t)}gt(e,t){this.Et(t,37),kr.fromName(e).path.forEach((e=>{this.Et(t,60),this.St(e,t)}))}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}Ec.bt=new Ec;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tc{constructor(){this.sn=new Cc}addToCollectionParentIndex(e,t){return this.sn.add(t),Mr.resolve()}getCollectionParents(e,t){return Mr.resolve(this.sn.getEntries(t))}addFieldIndex(e,t){return Mr.resolve()}deleteFieldIndex(e,t){return Mr.resolve()}getDocumentsMatchingTarget(e,t){return Mr.resolve(null)}getIndexType(e,t){return Mr.resolve(0)}getFieldIndexes(e,t){return Mr.resolve([])}getNextCollectionGroupToUpdate(e){return Mr.resolve(null)}getMinOffset(e,t){return Mr.resolve(Or.min())}getMinOffsetFromCollectionGroup(e,t){return Mr.resolve(Or.min())}updateCollectionGroup(e,t,n){return Mr.resolve()}updateIndexEntries(e,t){return Mr.resolve()}}class Cc{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new Yr(Cr.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new Yr(Cr.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Ic{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Ic(e,Ic.DEFAULT_COLLECTION_PERCENTILE,Ic.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ic.DEFAULT_COLLECTION_PERCENTILE=10,Ic.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ic.DEFAULT=new Ic(41943040,Ic.DEFAULT_COLLECTION_PERCENTILE,Ic.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ic.DISABLED=new Ic(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sc{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Sc(0)}static On(){return new Sc(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kc{constructor(){this.changes=new Eo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ns.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Mr.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ac{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&ra(n.mutation,e,Zr.empty(),br.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Do()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Do()){const i=Ao();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((e=>{let t=So();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Ao();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Do())))}populateOverlays(e,t,n){const i=[];return n.forEach((e=>{t.has(e)||i.push(e)})),this.documentOverlayCache.getOverlays(e,i).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,i){let r=Co();const s=Ro(),o=function(){return Ro()}();return t.forEach(((e,t)=>{const o=n.get(t.key);i.has(t.key)&&(void 0===o||o.mutation instanceof ca)?r=r.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),ra(o.mutation,t,o.mutation.getFieldMask(),br.now())):s.set(t.key,Zr.empty())})),this.recalculateAndSaveOverlays(e,r).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Ac(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Ro();let i=new Gr(((e,t)=>e-t)),r=Do();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const r of e)r.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Zr.empty();o=r.applyToLocalView(s,o),n.set(e,o);const a=(i.get(r.batchId)||Do()).add(e);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,l=No();c.forEach((e=>{if(!r.has(e)){const i=na(t.get(e),n.get(e));null!==i&&l.set(e,i),r=r.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,l))}return Mr.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return kr.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):lo(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-r.size):Mr.resolve(Ao());let o=-1,a=r;return s.next((t=>Mr.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(t)?Mr.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,r))).next((()=>this.computeViews(e,a,t,Do()))).next((e=>({batchId:o,changes:ko(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new kr(t)).next((e=>{let t=So();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const i=t.collectionGroup;let r=So();return this.indexManager.getCollectionParents(e,i).next((s=>Mr.forEach(s,(s=>{const o=function(e,t){return new io(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(i));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{r=r.insert(e,t)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(e,t,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i)))).next((e=>{i.forEach(((t,n)=>{const i=n.getKey();null===e.get(i)&&(e=e.insert(i,Ns.newInvalidDocument(i)))}));let n=So();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&ra(s.mutation,r,Zr.empty(),br.now()),yo(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,t){return Mr.resolve(this.ar.get(t))}saveBundleMetadata(e,t){return this.ar.set(t.id,function(e){return{id:e.id,version:e.version,createTime:Ka(e.createTime)}}(t)),Mr.resolve()}getNamedQuery(e,t){return Mr.resolve(this.ur.get(t))}saveNamedQuery(e,t){return this.ur.set(t.name,function(e){return{name:e.name,query:bc(e.bundledQuery),readTime:Ka(e.readTime)}}(t)),Mr.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(){this.overlays=new Gr(kr.comparator),this.cr=new Map}getOverlay(e,t){return Mr.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Ao();return Mr.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,i)=>{this.ht(e,t,i)})),Mr.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.cr.get(n);return void 0!==i&&(i.forEach((e=>this.overlays=this.overlays.remove(e))),this.cr.delete(n)),Mr.resolve()}getOverlaysForCollection(e,t,n){const i=Ao(),r=t.length+1,s=new kr(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===r&&e.largestBatchId>n&&i.set(e.getKey(),e)}return Mr.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let r=new Gr(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=Ao(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Ao(),a=r.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=i)break;return Mr.resolve(o)}ht(e,t,n){const i=this.overlays.get(n.key);if(null!==i){const e=this.cr.get(i.largestBatchId).delete(n.key);this.cr.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new ma(t,n));let r=this.cr.get(t);void 0===r&&(r=Do(),this.cr.set(t,r)),this.cr.set(t,r.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(){this.lr=new Yr(Dc.hr),this.Pr=new Yr(Dc.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,t){const n=new Dc(e,t);this.lr=this.lr.add(n),this.Pr=this.Pr.add(n)}Tr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Er(new Dc(e,t))}dr(e,t){e.forEach((e=>this.removeReference(e,t)))}Ar(e){const t=new kr(new Cr([])),n=new Dc(t,e),i=new Dc(t,e+1),r=[];return this.Pr.forEachInRange([n,i],(e=>{this.Er(e),r.push(e.key)})),r}Rr(){this.lr.forEach((e=>this.Er(e)))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const t=new kr(new Cr([])),n=new Dc(t,e),i=new Dc(t,e+1);let r=Do();return this.Pr.forEachInRange([n,i],(e=>{r=r.add(e.key)})),r}containsKey(e){const t=new Dc(e,0),n=this.lr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Dc{constructor(e,t){this.key=e,this.mr=t}static hr(e,t){return kr.comparator(e.key,t.key)||vr(e.mr,t.mr)}static Ir(e,t){return vr(e.mr,t.mr)||kr.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gr=1,this.pr=new Yr(Dc.hr)}checkEmpty(e){return Mr.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){const r=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new pa(r,t,n,i);this.mutationQueue.push(s);for(const o of i)this.pr=this.pr.add(new Dc(o.key,r)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Mr.resolve(s)}lookupMutationBatch(e,t){return Mr.resolve(this.yr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.wr(n),r=i<0?0:i;return Mr.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Mr.resolve(0===this.mutationQueue.length?-1:this.gr-1)}getAllMutationBatches(e){return Mr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Dc(t,0),i=new Dc(t,Number.POSITIVE_INFINITY),r=[];return this.pr.forEachInRange([n,i],(e=>{const t=this.yr(e.mr);r.push(t)})),Mr.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Yr(vr);return t.forEach((e=>{const t=new Dc(e,0),i=new Dc(e,Number.POSITIVE_INFINITY);this.pr.forEachInRange([t,i],(e=>{n=n.add(e.mr)}))})),Mr.resolve(this.Sr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let r=n;kr.isDocumentKey(r)||(r=r.child(""));const s=new Dc(new kr(r),0);let o=new Yr(vr);return this.pr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.mr)),!0)}),s),Mr.resolve(this.Sr(o))}Sr(e){const t=[];return e.forEach((e=>{const n=this.yr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){rr(0===this.br(t.batchId,"removed")),this.mutationQueue.shift();let n=this.pr;return Mr.forEach(t.mutations,(i=>{const r=new Dc(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.pr=n}))}Cn(e){}containsKey(e,t){const n=new Dc(t,0),i=this.pr.firstAfterOrEqual(n);return Mr.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,Mr.resolve()}br(e,t){return this.wr(e)}wr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}yr(e){const t=this.wr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e){this.Dr=e,this.docs=function(){return new Gr(kr.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),r=i?i.size:0,s=this.Dr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Mr.resolve(n?n.document.mutableCopy():Ns.newInvalidDocument(t))}getEntries(e,t){let n=Co();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Ns.newInvalidDocument(e))})),Mr.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let r=Co();const s=t.path,o=new kr(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||xr(Rr(o),n)<=0||(i.has(o.key)||yo(t,o))&&(r=r.insert(o.key,o.mutableCopy()))}return Mr.resolve(r)}getAllFromCollectionGroup(e,t,n,i){ir()}vr(e,t){return Mr.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Mc(this)}getSize(e){return Mr.resolve(this.size)}}class Mc extends kc{constructor(e){super(),this.sr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.sr.addEntry(e,i)):this.sr.removeEntry(n)})),Mr.waitFor(t)}getFromCache(e,t){return this.sr.getEntry(e,t)}getAllFromCache(e,t){return this.sr.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e){this.persistence=e,this.Cr=new Eo((e=>eo(e)),to),this.lastRemoteSnapshotVersion=Er.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new xc,this.targetCount=0,this.Or=Sc.xn()}forEachTarget(e,t){return this.Cr.forEach(((e,n)=>t(n))),Mr.resolve()}getLastRemoteSnapshotVersion(e){return Mr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Mr.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),Mr.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Fr&&(this.Fr=t),Mr.resolve()}Ln(e){this.Cr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Or=new Sc(t),this.highestTargetId=t),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,t){return this.Ln(t),this.targetCount+=1,Mr.resolve()}updateTargetData(e,t){return this.Ln(t),Mr.resolve()}removeTargetData(e,t){return this.Cr.delete(t.target),this.Mr.Ar(t.targetId),this.targetCount-=1,Mr.resolve()}removeTargets(e,t,n){let i=0;const r=[];return this.Cr.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Cr.delete(s),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)})),Mr.waitFor(r).next((()=>i))}getTargetCount(e){return Mr.resolve(this.targetCount)}getTargetData(e,t){const n=this.Cr.get(t)||null;return Mr.resolve(n)}addMatchingKeys(e,t,n){return this.Mr.Tr(t,n),Mr.resolve()}removeMatchingKeys(e,t,n){this.Mr.dr(t,n);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((t=>{r.push(i.markPotentiallyOrphaned(e,t))})),Mr.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Mr.Ar(t),Mr.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Mr.Vr(t);return Mr.resolve(n)}containsKey(e,t){return Mr.resolve(this.Mr.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,t){this.Nr={},this.overlays={},this.Br=new Ur(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new Fc(this),this.indexManager=new Tc,this.remoteDocumentCache=function(e){return new Lc(e)}((e=>this.referenceDelegate.qr(e))),this.serializer=new wc(t),this.Qr=new Rc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Oc,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Nr[e.toKey()];return n||(n=new Pc(t,this.referenceDelegate),this.Nr[e.toKey()]=n),n}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,t,n){Zi("MemoryPersistence","Starting transaction:",e);const i=new Vc(this.Br.next());return this.referenceDelegate.Kr(),n(i).next((e=>this.referenceDelegate.$r(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Ur(e,t){return Mr.or(Object.values(this.Nr).map((n=>()=>n.containsKey(e,t))))}}class Vc extends Pr{constructor(e){super(),this.currentSequenceNumber=e}}class jc{constructor(e){this.persistence=e,this.Wr=new xc,this.Gr=null}static zr(e){return new jc(e)}get jr(){if(this.Gr)return this.Gr;throw ir()}addReference(e,t,n){return this.Wr.addReference(n,t),this.jr.delete(n.toString()),Mr.resolve()}removeReference(e,t,n){return this.Wr.removeReference(n,t),this.jr.add(n.toString()),Mr.resolve()}markPotentiallyOrphaned(e,t){return this.jr.add(t.toString()),Mr.resolve()}removeTarget(e,t){this.Wr.Ar(t.targetId).forEach((e=>this.jr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.jr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Kr(){this.Gr=new Set}$r(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Mr.forEach(this.jr,(n=>{const i=kr.fromPath(n);return this.Hr(e,i).next((e=>{e||t.removeEntry(i,Er.min())}))})).next((()=>(this.Gr=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hr(e,t).next((e=>{e?this.jr.delete(t.toString()):this.jr.add(t.toString())}))}qr(e){return 0}Hr(e,t){return Mr.or([()=>Mr.resolve(this.Wr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ur(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $c{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Li=n,this.ki=i}static qi(e,t){let n=Do(),i=Do();for(const r of t.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new $c(e,t.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(){this.Qi=!1}initialize(e,t){this.Ki=e,this.indexManager=t,this.Qi=!0}getDocumentsMatchingQuery(e,t,n,i){return this.$i(e,t).next((r=>r||this.Ui(e,t,i,n))).next((n=>n||this.Wi(e,t)))}$i(e,t){if(oo(t))return Mr.resolve(null);let n=ho(t);return this.indexManager.getIndexType(e,n).next((i=>0===i?null:(null!==t.limit&&1===i&&(t=po(t,null,"F"),n=ho(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const r=Do(...i);return this.Ki.getDocuments(e,r).next((i=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Gi(t,i);return this.zi(t,s,r,n.readTime)?this.$i(e,po(t,null,"F")):this.ji(e,s,t,n)}))))})))))}Ui(e,t,n,i){return oo(t)||i.isEqual(Er.min())?this.Wi(e,t):this.Ki.getDocuments(e,n).next((r=>{const s=this.Gi(t,r);return this.zi(t,s,n,i)?this.Wi(e,t):(Xi()<=o["in"].DEBUG&&Zi("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_o(t)),this.ji(e,s,t,Nr(i,-1)))}))}Gi(e,t){let n=new Yr(wo(e));return t.forEach(((t,i)=>{yo(e,i)&&(n=n.add(i))})),n}zi(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Wi(e,t){return Xi()<=o["in"].DEBUG&&Zi("QueryEngine","Using full collection scan to execute query:",_o(t)),this.Ki.getDocumentsMatchingQuery(e,t,Or.min())}ji(e,t,n,i){return this.Ki.getDocumentsMatchingQuery(e,n,i).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t,n,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new Gr(vr),this.Yi=new Eo((e=>eo(e)),to),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(n)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Nc(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}}function zc(e,t,n,i){return new Bc(e,t,n,i)}async function Hc(e,t){const n=sr(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.mutationQueue.getAllMutationBatches(e).next((r=>(i=r,n.es(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const r=[],s=[];let o=Do();for(const e of i){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({ts:e,removedBatchIds:r,addedBatchIds:s})))}))}))}function Wc(e,t){const n=sr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),r=n.Xi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const r=n.batch,s=r.keys();let o=Mr.resolve();return s.forEach((e=>{o=o.next((()=>i.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);rr(null!==s),t.version.compareTo(s)<0&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,r)))}(n,e,t,r).next((()=>r.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Do();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,i)))}))}function Kc(e){const t=sr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.kr.getLastRemoteSnapshotVersion(e)))}function Gc(e,t){const n=sr(e),i=t.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Xi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const o=[];t.targetChanges.forEach(((s,a)=>{const c=r.get(a);if(!c)return;o.push(n.kr.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.kr.addMatchingKeys(e,s.addedDocuments,a))));let l=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?l=l.withResumeToken(ts.EMPTY_BYTE_STRING,Er.min()).withLastLimboFreeSnapshotVersion(Er.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,i)),r=r.insert(a,l),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,l,s)&&o.push(n.kr.updateTargetData(e,l))}));let a=Co(),c=Do();if(t.documentUpdates.forEach((i=>{t.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))})),o.push(Jc(e,s,t.documentUpdates).next((e=>{a=e.ns,c=e.rs}))),!i.isEqual(Er.min())){const t=n.kr.getLastRemoteSnapshotVersion(e).next((t=>n.kr.setTargetsMetadata(e,e.currentSequenceNumber,i)));o.push(t)}return Mr.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ji=r,e)))}function Jc(e,t,n){let i=Do(),r=Do();return n.forEach((e=>i=i.add(e))),t.getEntries(e,i).next((e=>{let i=Co();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),s.isNoDocument()&&s.version.isEqual(Er.min())?(t.removeEntry(n,s.readTime),i=i.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),i=i.insert(n,s)):Zi("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{ns:i,rs:r}}))}function Qc(e,t){const n=sr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Yc(e,t){const n=sr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let i;return n.kr.getTargetData(e,t).next((r=>r?(i=r,Mr.resolve(i)):n.kr.allocateTargetId(e).next((r=>(i=new vc(t,r,"TargetPurposeListen",e.currentSequenceNumber),n.kr.addTargetData(e,i).next((()=>i)))))))})).then((e=>{const i=n.Ji.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}async function Xc(e,t,n){const i=sr(e),r=i.Ji.get(t),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,(e=>i.persistence.referenceDelegate.removeTarget(e,r)))}catch(e){if(!Fr(e))throw e;Zi("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.Ji=i.Ji.remove(t),i.Yi.delete(r.target)}function Zc(e,t,n){const i=sr(e);let r=Er.min(),s=Do();return i.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const i=sr(e),r=i.Yi.get(n);return void 0!==r?Mr.resolve(i.Ji.get(r)):i.kr.getTargetData(t,n)}(i,e,ho(t)).next((t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,i.kr.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>i.Hi.getDocumentsMatchingQuery(e,t,n?r:Er.min(),n?s:Do()))).next((e=>(el(i,vo(t),e),{documents:e,ss:s})))))}function el(e,t,n){let i=e.Zi.get(t)||Er.min();n.forEach(((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)})),e.Zi.set(t,i)}class tl{constructor(){this.activeTargetIds=Lo()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nl{constructor(){this.Hs=new tl,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,t,n){this.Js[e]=t}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new tl,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{Ys(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){Zi("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){Zi("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sl=null;function ol(){return null===sl?sl=function(){return 268435456+Math.round(2147483648*Math.random())}():sl++,"0x"+sl.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const al={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="WebChannelConnection";class ul extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.To=t+"://"+e.host,this.Eo=`projects/${n}/databases/${i}`,this.Ao="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get Ro(){return!1}Vo(e,t,n,i,r){const s=ol(),o=this.mo(e,t);Zi("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(a,i,r),this.po(e,o,a,n).then((t=>(Zi("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw tr("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}yo(e,t,n,i,r,s){return this.Vo(e,t,n,i,r)}fo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}mo(e,t){const n=al[e];return`${this.To}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,t,n,i){const r=ol();return new Promise(((s,o)=>{const a=new Hi;a.setWithCredentials(!0),a.listenOnce(ji.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Vi.NO_ERROR:const t=a.getResponseJson();Zi(ll,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(t)),s(t);break;case Vi.TIMEOUT:Zi(ll,`RPC '${e}' ${r} timed out`),o(new ar(or.DEADLINE_EXCEEDED,"Request time out"));break;case Vi.HTTP_ERROR:const n=a.getStatus();if(Zi(ll,`RPC '${e}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(or).indexOf(t)>=0?t:or.UNKNOWN}(t.status);o(new ar(e,t.message))}else o(new ar(or.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ar(or.UNAVAILABLE,"Connection failed."));break;default:ir()}}finally{Zi(ll,`RPC '${e}' ${r} completed.`)}}));const c=JSON.stringify(i);Zi(ll,`RPC '${e}' ${r} sending request:`,i),a.send(t,"POST",c,n,15)}))}wo(e,t,n){const i=ol(),r=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Fi(),o=Ui(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new Bi({})),this.fo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const l=r.join("");Zi(ll,`Creating RPC '${e}' stream ${i}: ${l}`,a);const u=s.createWebChannel(l,a);let h=!1,d=!1;const f=new cl({so:t=>{d?Zi(ll,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(h||(Zi(ll,`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),Zi(ll,`RPC '${e}' stream ${i} sending:`,t),u.send(t))},oo:()=>u.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(u,zi.EventType.OPEN,(()=>{d||Zi(ll,`RPC '${e}' stream ${i} transport opened.`)})),p(u,zi.EventType.CLOSE,(()=>{d||(d=!0,Zi(ll,`RPC '${e}' stream ${i} transport closed`),f.Po())})),p(u,zi.EventType.ERROR,(t=>{d||(d=!0,tr(ll,`RPC '${e}' stream ${i} transport errored:`,t),f.Po(new ar(or.UNAVAILABLE,"The operation could not be completed")))})),p(u,zi.EventType.MESSAGE,(t=>{var n;if(!d){const r=t.data[0];rr(!!r);const s=r,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Zi(ll,`RPC '${e}' stream ${i} received error:`,o);const t=o.status;let n=function(e){const t=ya[e];if(void 0!==t)return ba(t)}(t),r=o.message;void 0===n&&(n=or.INTERNAL,r="Unknown error status: "+t+" with message "+o.message),d=!0,f.Po(new ar(n,r)),u.close()}else Zi(ll,`RPC '${e}' stream ${i} received:`,r),f.Io(r)}})),p(o,$i.STAT_EVENT,(t=>{t.stat===qi.PROXY?Zi(ll,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===qi.NOPROXY&&Zi(ll,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{f.ho()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(e){return new qa(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,t,n=1e3,i=1.5,r=6e4){this.ii=e,this.timerId=t,this.So=n,this.bo=i,this.Do=r,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const t=Math.floor(this.vo+this.Oo()),n=Math.max(0,Date.now()-this.Fo),i=Math.max(0,t-n);i>0&&Zi("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,(()=>(this.Fo=Date.now(),e()))),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){null!==this.Co&&(this.Co.skipDelay(),this.Co=null)}cancel(){null!==this.Co&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t,n,i,r,s,o,a){this.ii=e,this.Bo=n,this.Lo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new fl(e,t)}$o(){return 1===this.state||5===this.state||this.Uo()}Uo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&null===this.qo&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,(()=>this.jo())))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,t){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,4!==e?this.Ko.reset():t&&t.code===or.RESOURCE_EXHAUSTED?(er(t.toString()),er("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):t&&t.code===or.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(t)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),t=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.ko===t&&this.e_(e,n)}),(t=>{e((()=>{const e=new ar(or.UNKNOWN,"Fetching auth token failed: "+t.message);return this.t_(e)}))}))}e_(e,t){const n=this.Xo(this.ko);this.stream=this.n_(e,t),this.stream._o((()=>{n((()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,(()=>(this.Uo()&&(this.state=3),Promise.resolve()))),this.listener._o())))})),this.stream.uo((e=>{n((()=>this.t_(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Wo(){this.state=5,this.Ko.xo((async()=>{this.state=0,this.start()}))}t_(e){return Zi("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.ko===e?t():(Zi("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class gl extends pl{constructor(e,t,n,i,r,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,s),this.serializer=r}n_(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Ko.reset();const t=ic(this.serializer,e),n=function(e){if(!("targetChange"in e))return Er.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Er.min():t.readTime?Ka(t.readTime):Er.min()}(e);return this.listener.r_(t,n)}i_(e){const t={};t.database=ec(this.serializer),t.addTarget=function(e,t){let n;const i=t.target;if(n=no(i)?{documents:oc(e,i)}:{query:ac(e,i)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Ha(e,t.resumeToken);const i=Ba(e,t.expectedCount);null!==i&&(n.expectedCount=i)}else if(t.snapshotVersion.compareTo(Er.min())>0){n.readTime=za(e,t.snapshotVersion.toTimestamp());const i=Ba(e,t.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,e);const n=lc(this.serializer,e);n&&(t.labels=n),this.Ho(t)}s_(e){const t={};t.database=ec(this.serializer),t.removeTarget=e,this.Ho(t)}}class ml extends pl{constructor(e,t,n,i,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,s),this.serializer=r,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(rr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const t=sc(e.writeResults,e.commitTime),n=Ka(e.commitTime);return this.listener.u_(n,t)}return rr(!e.writeResults||0===e.writeResults.length),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=ec(this.serializer),this.Ho(e)}a_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>rc(this.serializer,e)))};this.Ho(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new ar(or.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,t,n){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.Vo(e,t,n,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===or.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ar(or.UNKNOWN,e.toString())}))}yo(e,t,n,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.yo(e,t,n,r,s,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===or.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ar(or.UNKNOWN,e.toString())}))}terminate(){this.h_=!0}}class yl{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){0===this.T_&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve()))))}m_(e){"Online"===this.state?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,"Online"===e&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(er(t),this.d_=!1):Zi("OnlineStateTracker",t)}f_(){null!==this.E_&&(this.E_.cancel(),this.E_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=r,this.S_.Ys((e=>{n.enqueueAndForget((async()=>{Al(this)&&(Zi("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=sr(e);t.y_.add(4),await bl(t),t.b_.set("Unknown"),t.y_.delete(4),await wl(t)}(this))}))})),this.b_=new yl(n,i)}}async function wl(e){if(Al(e))for(const t of e.w_)await t(!0)}async function bl(e){for(const t of e.w_)await t(!1)}function El(e,t){const n=sr(e);n.p_.has(t.targetId)||(n.p_.set(t.targetId,t),kl(n)?Sl(n):Wl(n).Uo()&&Cl(n,t))}function Tl(e,t){const n=sr(e),i=Wl(n);n.p_.delete(t),i.Uo()&&Il(n,t),0===n.p_.size&&(i.Uo()?i.zo():Al(n)&&n.b_.set("Unknown"))}function Cl(e,t){if(e.D_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Er.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Wl(e).i_(t)}function Il(e,t){e.D_.Be(t),Wl(e).s_(t)}function Sl(e){e.D_=new Ma({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.p_.get(t)||null,rt:()=>e.datastore.serializer.databaseId}),Wl(e).start(),e.b_.A_()}function kl(e){return Al(e)&&!Wl(e).$o()&&e.p_.size>0}function Al(e){return 0===sr(e).y_.size}function Nl(e){e.D_=void 0}async function Rl(e){e.p_.forEach(((t,n)=>{Cl(e,t)}))}async function Ol(e,t){Nl(e),kl(e)?(e.b_.m_(t),Sl(e)):e.b_.set("Unknown")}async function xl(e,t,n){if(e.b_.set("Online"),t instanceof Pa&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.p_.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.p_.delete(i),e.D_.removeTarget(i))}(e,t)}catch(n){Zi("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Dl(e,n)}else if(t instanceof xa?e.D_.We(t):t instanceof Da?e.D_.Ze(t):e.D_.je(t),!n.isEqual(Er.min()))try{const t=await Kc(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.D_.st(t);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=e.p_.get(i);r&&e.p_.set(i,r.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const i=e.p_.get(t);if(!i)return;e.p_.set(t,i.withResumeToken(ts.EMPTY_BYTE_STRING,i.snapshotVersion)),Il(e,t);const r=new vc(i.target,t,n,i.sequenceNumber);Cl(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Zi("RemoteStore","Failed to raise snapshot:",t),await Dl(e,t)}}async function Dl(e,t,n){if(!Fr(t))throw t;e.y_.add(1),await bl(e),e.b_.set("Offline"),n||(n=()=>Kc(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Zi("RemoteStore","Retrying IndexedDB access"),await n(),e.y_.delete(1),await wl(e)}))}function Pl(e,t){return t().catch((n=>Dl(e,n,t)))}async function Ll(e){const t=sr(e),n=Kl(t);let i=t.g_.length>0?t.g_[t.g_.length-1].batchId:-1;for(;Ml(t);)try{const e=await Qc(t.localStore,i);if(null===e){0===t.g_.length&&n.zo();break}i=e.batchId,Fl(t,e)}catch(e){await Dl(t,e)}Ul(t)&&Vl(t)}function Ml(e){return Al(e)&&e.g_.length<10}function Fl(e,t){e.g_.push(t);const n=Kl(e);n.Uo()&&n.__&&n.a_(t.mutations)}function Ul(e){return Al(e)&&!Kl(e).$o()&&e.g_.length>0}function Vl(e){Kl(e).start()}async function jl(e){Kl(e).l_()}async function $l(e){const t=Kl(e);for(const n of e.g_)t.a_(n.mutations)}async function ql(e,t,n){const i=e.g_.shift(),r=ga.from(i,t,n);await Pl(e,(()=>e.remoteSyncer.applySuccessfulWrite(r))),await Ll(e)}async function Bl(e,t){t&&Kl(e).__&&await async function(e,t){if(function(e){return wa(e)&&e!==or.ABORTED}(t.code)){const n=e.g_.shift();Kl(e).Go(),await Pl(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Ll(e)}}(e,t),Ul(e)&&Vl(e)}async function zl(e,t){const n=sr(e);n.asyncQueue.verifyOperationInProgress(),Zi("RemoteStore","RemoteStore received new credentials");const i=Al(n);n.y_.add(3),await bl(n),i&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.y_.delete(3),await wl(n)}async function Hl(e,t){const n=sr(e);t?(n.y_.delete(2),await wl(n)):t||(n.y_.add(2),await bl(n),n.b_.set("Unknown"))}function Wl(e){return e.v_||(e.v_=function(e,t,n){const i=sr(e);return i.P_(),new gl(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{_o:Rl.bind(null,e),uo:Ol.bind(null,e),r_:xl.bind(null,e)}),e.w_.push((async t=>{t?(e.v_.Go(),kl(e)?Sl(e):e.b_.set("Unknown")):(await e.v_.stop(),Nl(e))}))),e.v_}function Kl(e){return e.C_||(e.C_=function(e,t,n){const i=sr(e);return i.P_(),new ml(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{_o:jl.bind(null,e),uo:Bl.bind(null,e),c_:$l.bind(null,e),u_:ql.bind(null,e)}),e.w_.push((async t=>{t?(e.C_.Go(),await Ll(e)):(await e.C_.stop(),e.g_.length>0&&(Zi("RemoteStore",`Stopping write stream with ${e.g_.length} pending writes`),e.g_=[]))}))),e.C_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Gl{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,i,r){const s=Date.now()+n,o=new Gl(e,t,s,i,r);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ar(or.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jl(e,t){if(er("AsyncQueue",`${t}: ${e}`),Fr(e))return new ar(or.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e){this.comparator=e?(t,n)=>e(t,n)||kr.comparator(t.key,n.key):(e,t)=>kr.comparator(e.key,t.key),this.keyedMap=So(),this.sortedSet=new Gr(this.comparator)}static emptySet(e){return new Ql(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ql))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Ql;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(){this.F_=new Gr(kr.comparator)}track(e){const t=e.doc.key,n=this.F_.get(t);n?0!==e.type&&3===n.type?this.F_=this.F_.insert(t,e):3===e.type&&1!==n.type?this.F_=this.F_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.F_=this.F_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.F_=this.F_.remove(t):1===e.type&&2===n.type?this.F_=this.F_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.F_=this.F_.insert(t,{type:2,doc:e.doc}):ir():this.F_=this.F_.insert(t,e)}M_(){const e=[];return this.F_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Xl{constructor(e,t,n,i,r,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,i,r){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Xl(e,t,Ql.emptySet(t),s,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&go(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(){this.x_=void 0,this.listeners=[]}}class eu{constructor(){this.queries=new Eo((e=>mo(e)),go),this.onlineState="Unknown",this.O_=new Set}}async function tu(e,t){const n=sr(e),i=t.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new Zl),r)try{s.x_=await n.onListen(i)}catch(e){const n=Jl(e,`Initialization of query '${_o(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,s),s.listeners.push(t),t.N_(n.onlineState),s.x_&&t.B_(s.x_)&&su(n)}async function nu(e,t){const n=sr(e),i=t.query;let r=!1;const s=n.queries.get(i);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function iu(e,t){const n=sr(e);let i=!1;for(const r of t){const e=r.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.B_(r)&&(i=!0);t.x_=r}}i&&su(n)}function ru(e,t,n){const i=sr(e),r=i.queries.get(t);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(t)}function su(e){e.O_.forEach((e=>{e.next()}))}class ou{constructor(e,t,n){this.query=e,this.L_=t,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=n||{}}B_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Xl(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),t=!0):this.K_(e,this.onlineState)&&(this.U_(e),t=!0),this.q_=e,t}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let t=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),t=!0),t}K_(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.W_||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Q_(e){if(e.docChanges.length>0)return!0;const t=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}U_(e){e=Xl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class au{constructor(e){this.key=e}}class cu{constructor(e){this.key=e}}class lu{constructor(e,t){this.query=e,this.X_=t,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=Do(),this.mutatedKeys=Do(),this.na=wo(e),this.ra=new Ql(this.na)}get ia(){return this.X_}sa(e,t){const n=t?t.oa:new Yl,i=t?t.ra:this.ra;let r=t?t.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((e,t)=>{const l=i.get(e),u=yo(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this._a(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.na(u,a)>0||c&&this.na(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),r=d?r.add(e):r.delete(e)):(s=s.delete(e),r=r.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),r=r.delete(e.key),n.track({type:1,doc:e})}return{ra:s,oa:n,zi:o,mutatedKeys:r}}_a(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const r=e.oa.M_();r.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ir()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.na(e.doc,t.doc))),this.aa(n);const s=t?this.ua():[],o=0===this.ta.size&&this.current?1:0,a=o!==this.ea;return this.ea=o,0!==r.length||a?{snapshot:new Xl(this.query,e.ra,i,r,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),ca:s}:{ca:s}}N_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Yl,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach((e=>this.X_=this.X_.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.X_=this.X_.delete(e))),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=Do(),this.ra.forEach((e=>{this.la(e.key)&&(this.ta=this.ta.add(e.key))}));const t=[];return e.forEach((e=>{this.ta.has(e)||t.push(new cu(e))})),this.ta.forEach((n=>{e.has(n)||t.push(new au(n))})),t}ha(e){this.X_=e.ss,this.ta=Do();const t=this.sa(e.documents);return this.applyChanges(t,!0)}Pa(){return Xl.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,0===this.ea,this.hasCachedResults)}}class uu{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class hu{constructor(e){this.key=e,this.Ia=!1}}class du{constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Ta={},this.Ea=new Eo((e=>mo(e)),go),this.da=new Map,this.Aa=new Set,this.Ra=new Gr(kr.comparator),this.Va=new Map,this.ma=new xc,this.fa={},this.ga=new Map,this.pa=Sc.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return!0===this.ya}}async function fu(e,t){const n=xu(e);let i,r;const s=n.Ea.get(t);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.Pa();else{const e=await Yc(n.localStore,ho(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,r=await pu(n,t,i,"current"===s,e.resumeToken),n.isPrimaryClient&&El(n.remoteStore,e)}return r}async function pu(e,t,n,i,r){e.wa=(t,n,i)=>async function(e,t,n,i){let r=t.view.sa(n);r.zi&&(r=await Zc(e.localStore,t.query,!1).then((({documents:e})=>t.view.sa(e,r))));const s=i&&i.targetChanges.get(t.targetId),o=t.view.applyChanges(r,e.isPrimaryClient,s);return Su(e,t.targetId,o.ca),o.snapshot}(e,t,n,i);const s=await Zc(e.localStore,t,!0),o=new lu(t,s.ss),a=o.sa(s.documents),c=Oa.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState,r),l=o.applyChanges(a,e.isPrimaryClient,c);Su(e,n,l.ca);const u=new uu(t,n,o);return e.Ea.set(t,u),e.da.has(n)?e.da.get(n).push(t):e.da.set(n,[t]),l.snapshot}async function gu(e,t){const n=sr(e),i=n.Ea.get(t),r=n.da.get(i.targetId);if(r.length>1)return n.da.set(i.targetId,r.filter((e=>!go(e,t)))),void n.Ea.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Xc(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Tl(n.remoteStore,i.targetId),Cu(n,i.targetId)})).catch(Lr)):(Cu(n,i.targetId),await Xc(n.localStore,i.targetId,!0))}async function mu(e,t,n){const i=Du(e);try{const e=await function(e,t){const n=sr(e),i=br.now(),r=t.reduce(((e,t)=>e.add(t.key)),Do());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Co(),c=Do();return n.Xi.getEntries(e,r).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((r=>{s=r;const o=[];for(const e of t){const t=sa(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new ca(e.key,t,As(t.value.mapValue),Zo.exists(!0)))}return n.mutationQueue.addMutationBatch(e,i,o,t)})).next((t=>{o=t;const i=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:ko(s)})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.fa[e.currentUser.toKey()];i||(i=new Gr(vr)),i=i.insert(t,n),e.fa[e.currentUser.toKey()]=i}(i,e.batchId,n),await Nu(i,e.changes),await Ll(i.remoteStore)}catch(e){const t=Jl(e,"Failed to persist write");n.reject(t)}}async function _u(e,t){const n=sr(e);try{const e=await Gc(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const i=n.Va.get(t);i&&(rr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.Ia=!0:e.modifiedDocuments.size>0?rr(i.Ia):e.removedDocuments.size>0&&(rr(i.Ia),i.Ia=!1))})),await Nu(n,e,t)}catch(e){await Lr(e)}}function yu(e,t,n){const i=sr(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.Ea.forEach(((n,i)=>{const r=i.view.N_(t);r.snapshot&&e.push(r.snapshot)})),function(e,t){const n=sr(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const r of n.listeners)r.N_(t)&&(i=!0)})),i&&su(n)}(i.eventManager,t),e.length&&i.Ta.r_(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function vu(e,t,n){const i=sr(e);i.sharedClientState.updateQueryState(t,"rejected",n);const r=i.Va.get(t),s=r&&r.key;if(s){let e=new Gr(kr.comparator);e=e.insert(s,Ns.newNoDocument(s,Er.min()));const n=Do().add(s),r=new Ra(Er.min(),new Map,new Gr(vr),e,n);await _u(i,r),i.Ra=i.Ra.remove(s),i.Va.delete(t),Au(i)}else await Xc(i.localStore,t,!1).then((()=>Cu(i,t,n))).catch(Lr)}async function wu(e,t){const n=sr(e),i=t.batch.batchId;try{const e=await Wc(n.localStore,t);Tu(n,i,null),Eu(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Nu(n,e)}catch(e){await Lr(e)}}async function bu(e,t,n){const i=sr(e);try{const e=await function(e,t){const n=sr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(rr(null!==t),i=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,i))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(i.localStore,t);Tu(i,t,n),Eu(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await Nu(i,e)}catch(n){await Lr(n)}}function Eu(e,t){(e.ga.get(t)||[]).forEach((e=>{e.resolve()})),e.ga.delete(t)}function Tu(e,t,n){const i=sr(e);let r=i.fa[i.currentUser.toKey()];if(r){const e=r.get(t);e&&(n?e.reject(n):e.resolve(),r=r.remove(t)),i.fa[i.currentUser.toKey()]=r}}function Cu(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.da.get(t))e.Ea.delete(i),n&&e.Ta.Sa(i,n);e.da.delete(t),e.isPrimaryClient&&e.ma.Ar(t).forEach((t=>{e.ma.containsKey(t)||Iu(e,t)}))}function Iu(e,t){e.Aa.delete(t.path.canonicalString());const n=e.Ra.get(t);null!==n&&(Tl(e.remoteStore,n),e.Ra=e.Ra.remove(t),e.Va.delete(n),Au(e))}function Su(e,t,n){for(const i of n)i instanceof au?(e.ma.addReference(i.key,t),ku(e,i)):i instanceof cu?(Zi("SyncEngine","Document no longer in limbo: "+i.key),e.ma.removeReference(i.key,t),e.ma.containsKey(i.key)||Iu(e,i.key)):ir()}function ku(e,t){const n=t.key,i=n.path.canonicalString();e.Ra.get(n)||e.Aa.has(i)||(Zi("SyncEngine","New document in limbo: "+n),e.Aa.add(i),Au(e))}function Au(e){for(;e.Aa.size>0&&e.Ra.size<e.maxConcurrentLimboResolutions;){const t=e.Aa.values().next().value;e.Aa.delete(t);const n=new kr(Cr.fromString(t)),i=e.pa.next();e.Va.set(i,new hu(n)),e.Ra=e.Ra.insert(n,i),El(e.remoteStore,new vc(ho(so(n.path)),i,"TargetPurposeLimboResolution",Ur.ae))}}async function Nu(e,t,n){const i=sr(e),r=[],s=[],o=[];i.Ea.isEmpty()||(i.Ea.forEach(((e,a)=>{o.push(i.wa(a,t,n).then((e=>{if((e||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){r.push(e);const t=$c.qi(a.targetId,e);s.push(t)}})))})),await Promise.all(o),i.Ta.r_(r),await async function(e,t){const n=sr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Mr.forEach(t,(t=>Mr.forEach(t.Li,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>Mr.forEach(t.ki,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!Fr(e))throw e;Zi("LocalStore","Failed to update sequence numbers: "+e)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.Ji.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.Ji=n.Ji.insert(e,r)}}}(i.localStore,s))}async function Ru(e,t){const n=sr(e);if(!n.currentUser.isEqual(t)){Zi("SyncEngine","User change. New user:",t.toKey());const e=await Hc(n.localStore,t);n.currentUser=t,function(e,t){e.ga.forEach((e=>{e.forEach((e=>{e.reject(new ar(or.CANCELLED,t))}))})),e.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Nu(n,e.ts)}}function Ou(e,t){const n=sr(e),i=n.Va.get(t);if(i&&i.Ia)return Do().add(i.key);{let e=Do();const i=n.da.get(t);if(!i)return e;for(const t of i){const i=n.Ea.get(t);e=e.unionWith(i.view.ia)}return e}}function xu(e){const t=sr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=_u.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ou.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=vu.bind(null,t),t.Ta.r_=iu.bind(null,t.eventManager),t.Ta.Sa=ru.bind(null,t.eventManager),t}function Du(e){const t=sr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=wu.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=bu.bind(null,t),t}class Pu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=dl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return zc(this.persistence,new qc,e.initialUser,this.serializer)}createPersistence(e){return new Uc(jc.zr,this.serializer)}createSharedClientState(e){return new nl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Lu{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>yu(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ru.bind(null,this.syncEngine),await Hl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new eu}()}createDatastore(e){const t=dl(e.databaseInfo.databaseId),n=function(e){return new ul(e)}(e.databaseInfo);return function(e,t,n,i){return new _l(e,t,n,i)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,i,r){return new vl(e,t,n,i,r)}(this.localStore,this.datastore,e.asyncQueue,(e=>yu(this.syncEngine,e,0)),function(){return rl.v()?new rl:new il}())}createSyncEngine(e,t){return function(e,t,n,i,r,s,o){const a=new du(e,t,n,i,r,s);return o&&(a.ya=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=sr(e);Zi("RemoteStore","RemoteStore shutting down."),t.y_.add(5),await bl(t),t.S_.shutdown(),t.b_.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):er("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fu{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Ji.UNAUTHENTICATED,this.clientId=yr.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Zi("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Zi("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ar(or.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Jl(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Uu(e,t){e.asyncQueue.verifyOperationInProgress(),Zi("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await Hc(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Vu(e,t){e.asyncQueue.verifyOperationInProgress();const n=await $u(e);Zi("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener((e=>zl(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>zl(t.remoteStore,n))),e._onlineComponents=t}function ju(e){return"FirebaseError"===e.name?e.code===or.FAILED_PRECONDITION||e.code===or.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function $u(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Zi("FirestoreClient","Using user provided OfflineComponentProvider");try{await Uu(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!ju(n))throw n;tr("Error using user provided cache. Falling back to memory cache: "+n),await Uu(e,new Pu)}}else Zi("FirestoreClient","Using default OfflineComponentProvider"),await Uu(e,new Pu);return e._offlineComponents}async function qu(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Zi("FirestoreClient","Using user provided OnlineComponentProvider"),await Vu(e,e._uninitializedComponentsProvider._online)):(Zi("FirestoreClient","Using default OnlineComponentProvider"),await Vu(e,new Lu))),e._onlineComponents}function Bu(e){return qu(e).then((e=>e.syncEngine))}async function zu(e){const t=await qu(e),n=t.eventManager;return n.onListen=fu.bind(null,t.syncEngine),n.onUnlisten=gu.bind(null,t.syncEngine),n}function Hu(e,t,n={}){const i=new cr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,r){const s=new Mu({next:n=>{t.enqueueAndForget((()=>nu(e,o))),n.fromCache&&"server"===i.source?r.reject(new ar(or.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:e=>r.reject(e)}),o=new ou(n,s,{includeMetadataChanges:!0,W_:!0});return tu(e,o)}(await zu(e),e.asyncQueue,t,n,i))),i.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wu(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Ku=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(e,t,n){if(!n)throw new ar(or.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ju(e,t,n,i){if(!0===t&&!0===i)throw new ar(or.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Qu(e){if(!kr.isDocumentKey(e))throw new ar(or.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Yu(e){if(kr.isDocumentKey(e))throw new ar(or.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Xu(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ir()}function Zu(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ar(or.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xu(e);throw new ar(or.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eh{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new ar(or.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ar(or.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ju("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wu(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new ar(or.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new ar(or.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new ar(or.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class th{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new eh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ar(or.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ar(or.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new eh(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ur;switch(e.type){case"firstParty":return new pr(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new ar(or.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ku.get(e);t&&(Zi("ComponentProvider","Removing Datastore"),Ku.delete(e),t.terminate())}(this),Promise.resolve()}}function nh(e,t,n,i={}){var r;const s=(e=Zu(e,th))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&tr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=Ji.MOCK_USER;else{t=(0,a.Sg)(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new ar(or.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ji(s)}e._authCredentials=new hr(new lr(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new ih(this.firestore,e,this._query)}}class rh{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sh(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rh(this.firestore,e,this._key)}}class sh extends ih{constructor(e,t,n){super(e,t,so(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rh(this.firestore,null,new kr(e))}withConverter(e){return new sh(this.firestore,e,this._path)}}function oh(e,t,...n){if(e=(0,a.m9)(e),Gu("collection","path",t),e instanceof th){const i=Cr.fromString(t,...n);return Yu(i),new sh(e,null,i)}{if(!(e instanceof rh||e instanceof sh))throw new ar(or.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Cr.fromString(t,...n));return Yu(i),new sh(e.firestore,null,i)}}function ah(e,t,...n){if(e=(0,a.m9)(e),1===arguments.length&&(t=yr.V()),Gu("doc","path",t),e instanceof th){const i=Cr.fromString(t,...n);return Qu(i),new rh(e,null,new kr(i))}{if(!(e instanceof rh||e instanceof sh))throw new ar(or.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Cr.fromString(t,...n));return Qu(i),new rh(e.firestore,e instanceof sh?e.converter:null,new kr(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ch{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new fl(this,"async_queue_retry"),this.Xa=()=>{const e=hl();e&&Zi("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Ko.No()};const e=hl();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const t=hl();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise((()=>{}));const t=new cr;return this.tu((()=>this.za&&this.Ya?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Ga.push(e),this.nu())))}async nu(){if(0!==this.Ga.length){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!Fr(e))throw e;Zi("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo((()=>this.nu()))}}tu(e){const t=this.Wa.then((()=>(this.Ja=!0,e().catch((e=>{this.Ha=e,this.Ja=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw er("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Ja=!1,e))))));return this.Wa=t,t}enqueueAfterDelay(e,t,n){this.eu(),this.Za.indexOf(e)>-1&&(t=0);const i=Gl.createAndSchedule(this,e,t,n,(e=>this.ru(e)));return this.ja.push(i),i}eu(){this.Ha&&ir()}verifyOperationInProgress(){}async iu(){let e;do{e=this.Wa,await e}while(e!==this.Wa)}su(e){for(const t of this.ja)if(t.timerId===e)return!0;return!1}ou(e){return this.iu().then((()=>{this.ja.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.ja)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.iu()}))}_u(e){this.Za.push(e)}ru(e){const t=this.ja.indexOf(e);this.ja.splice(t,1)}}class lh extends th{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=function(){return new ch}(),this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||dh(this),this._firestoreClient.terminate()}}function uh(e,t){const n="object"==typeof e?e:(0,r.Mq)(),i="string"==typeof e?e:t||"(default)",s=(0,r.qX)(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const e=(0,a.P0)("firestore");e&&nh(s,...e)}return s}function hh(e){return e._firestoreClient||dh(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function dh(e){var t,n,i;const r=e._freezeSettings(),s=function(e,t,n,i){return new ls(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Wu(i.experimentalLongPollingOptions),i.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new Fu(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=r.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fh{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fh(ts.fromBase64String(e))}catch(e){throw new ar(or.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new fh(ts.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ar(or.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Sr(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gh{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ar(or.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ar(or.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return vr(this._lat,e._lat)||vr(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=/^__.*__$/;class yh{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new ca(e,this.data,this.fieldMask,t,this.fieldTransforms):new aa(e,this.data,t,this.fieldTransforms)}}function vh(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ir()}}class wh{constructor(e,t,n,i,r,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.au(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new wh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.cu({path:n,hu:!1});return i.Pu(e),i}Iu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.cu({path:n,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return xh(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(0===e.length)throw this.Eu("Document fields must not be empty");if(vh(this.uu)&&_h.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class bh{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||dl(e)}Ru(e,t,n,i=!1){return new wh({uu:e,methodName:t,Au:n,path:Sr.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Eh(e){const t=e._freezeSettings(),n=dl(e._databaseId);return new bh(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Th(e,t,n,i,r,s={}){const o=e.Ru(s.merge||s.mergeFields?2:0,t,n,r);Ah("Data must be an object, but it was:",o,i);const a=Sh(i,o);let c,l;if(s.merge)c=new Zr(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const i of s.mergeFields){const r=Nh(t,i,n);if(!o.contains(r))throw new ar(or.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Dh(e,r)||e.push(r)}c=new Zr(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new yh(new ks(a),c,l)}function Ch(e,t,n,i=!1){return Ih(n,e.Ru(i?4:3,t))}function Ih(e,t){if(kh(e=(0,a.m9)(e)))return Ah("Unsupported field value:",t,e),Sh(e,t);if(e instanceof gh)return function(e,t){if(!vh(t.uu))throw t.Eu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Eu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.hu&&4!==t.uu)throw t.Eu("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const r of e){let e=Ih(r,t.Tu(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Uo(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=br.fromDate(e);return{timestampValue:za(t.serializer,n)}}if(e instanceof br){const n=new br(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:za(t.serializer,n)}}if(e instanceof mh)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof fh)return{bytesValue:Ha(t.serializer,e._byteString)};if(e instanceof rh){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.Eu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ga(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Eu(`Unsupported field value: ${Xu(e)}`)}(e,t)}function Sh(e,t){const n={};return Kr(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Wr(e,((e,i)=>{const r=Ih(i,t.lu(e));null!=r&&(n[e]=r)})),{mapValue:{fields:n}}}function kh(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof br||e instanceof mh||e instanceof fh||e instanceof rh||e instanceof gh)}function Ah(e,t,n){if(!kh(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const i=Xu(n);throw"an object"===i?t.Eu(e+" a custom object"):t.Eu(e+" "+i)}}function Nh(e,t,n){if((t=(0,a.m9)(t))instanceof ph)return t._internalPath;if("string"==typeof t)return Oh(e,t);throw xh("Field path arguments must be of type string or ",e,!1,void 0,n)}const Rh=new RegExp("[~\\*/\\[\\]]");function Oh(e,t,n){if(t.search(Rh)>=0)throw xh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ph(...t.split("."))._internalPath}catch(b){throw xh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function xh(e,t,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new ar(or.INVALID_ARGUMENT,a+e+c)}function Dh(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new rh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Lh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Mh("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Lh extends Ph{data(){return super.data()}}function Mh(e,t){return"string"==typeof t?Oh(e,t):t instanceof ph?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new ar(or.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uh{}class Vh extends Uh{}function jh(e,t,...n){let i=[];t instanceof Uh&&i.push(t),i=i.concat(n),function(e){const t=e.filter((e=>e instanceof qh)).length,n=e.filter((e=>e instanceof $h)).length;if(t>1||t>0&&n>0)throw new ar(or.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i);for(const r of i)e=r._apply(e);return e}class $h extends Vh{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new $h(e,t,n)}_apply(e){const t=this._parse(e);return Hh(e._query,t),new ih(e.firestore,e.converter,fo(e._query,t))}_parse(e){const t=Eh(e.firestore),n=function(e,t,n,i,r,s,o){let a;if(r.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new ar(or.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){zh(o,s);const t=[];for(const n of o)t.push(Bh(i,e,n));a={arrayValue:{values:t}}}else a=Bh(i,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||zh(o,s),a=Ch(n,t,o,"in"===s||"not-in"===s);return Ms.create(r,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}class qh extends Uh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new qh(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Fs.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const i=t.getFlattenedFilters();for(const r of i)Hh(n,r),n=fo(n,r)}(e._query,t),new ih(e.firestore,e.converter,fo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function Bh(e,t,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new ar(or.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lo(t)&&-1!==n.indexOf("/"))throw new ar(or.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(Cr.fromString(n));if(!kr.isDocumentKey(i))throw new ar(or.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return vs(e,new kr(i))}if(n instanceof rh)return vs(e,n._key);throw new ar(or.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xu(n)}.`)}function zh(e,t){if(!Array.isArray(e)||0===e.length)throw new ar(or.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Hh(e,t){if(t.isInequality()){const n=co(e),i=t.field;if(null!==n&&!n.isEqual(i))throw new ar(or.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${i.toString()}'`);const r=ao(e);null!==r&&Wh(e,i,r)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new ar(or.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ar(or.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Wh(e,t,n){if(!n.isEqual(t))throw new ar(or.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Kh{convertValue(e,t="none"){switch(ds(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rs(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ir()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Wr(e,((e,i)=>{n[e]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new mh(rs(e.latitude),rs(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=as(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(cs(e));default:return null}}convertTimestamp(e){const t=is(e);return new br(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Cr.fromString(e);rr(yc(n));const i=new us(n.get(1),n.get(3)),r=new kr(n.popFirst(5));return i.isEqual(t)||er(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jh{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qh extends Ph{constructor(e,t,n,i,r,s){super(e,t,n,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Yh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Mh("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Yh extends Qh{data(e={}){return super.data(e)}}class Xh{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Jh(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Yh(this._firestore,this._userDataWriter,n.key,n,new Jh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ar(or.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const i=new Yh(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Jh(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const i=new Yh(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Jh(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let r=-1,s=-1;return 0!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Zh(t.type),doc:i,oldIndex:r,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Zh(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ir()}}class ed extends Kh{constructor(e){super(),this.firestore=e}convertBytes(e){return new fh(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new rh(this.firestore,null,t)}}function td(e){e=Zu(e,ih);const t=Zu(e.firestore,lh),n=hh(t),i=new ed(t);return Fh(e._query),Hu(n,e._query).then((n=>new Xh(t,i,e,n)))}function nd(e,t,n){e=Zu(e,rh);const i=Zu(e.firestore,lh),r=Gh(e.converter,t,n);return sd(i,[Th(Eh(i),"setDoc",e._key,r,null!==e.converter,n).toMutation(e._key,Zo.none())])}function id(e){return sd(Zu(e.firestore,lh),[new da(e._key,Zo.none())])}function rd(e,t){const n=Zu(e.firestore,lh),i=ah(e),r=Gh(e.converter,t);return sd(n,[Th(Eh(e.firestore),"addDoc",i._key,r,null!==e.converter,{}).toMutation(i._key,Zo.exists(!1))]).then((()=>i))}function sd(e,t){return function(e,t){const n=new cr;return e.asyncQueue.enqueueAndForget((async()=>mu(await Bu(e),t,n))),n.promise}(hh(e),t)}!function(e,t=!0){!function(e){Qi=e}(r.Jn),(0,r.Xd)(new s.wA("firestore",((e,{instanceIdentifier:n,options:i})=>{const r=e.getProvider("app").getImmediate(),s=new lh(new dr(e.getProvider("auth-internal")),new mr(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ar(or.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new us(e.options.projectId,t)}(r,n),r);return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(Gi,"4.1.0",e),(0,r.KN)(Gi,"4.1.0","esm2017")}()},2483:function(e,t,n){"use strict";n.d(t,{PO:function(){return V},p7:function(){return tt}});n(7658);var i=n(3396),r=n(4870);
/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const i in t){const r=t[i];n[i]=u(r)?r.map(e):e(r)}return n}const l=()=>{},u=Array.isArray;const h=/\/$/,d=e=>e.replace(h,"");function f(e,t,n="/"){let i,r={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),r=e(s)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=b(null!=i?i:t,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function g(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function m(e,t,n){const i=t.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&_(t.matched[i],n.matched[r])&&y(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function _(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function y(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!v(e[n],t[n]))return!1;return!0}function v(e,t){return u(e)?w(e,t):u(t)?w(t,e):e===t}function w(e,t){return u(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function b(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/"),r=i[i.length-1];".."!==r&&"."!==r||i.push("");let s,o,a=n.length-1;for(s=0;s<i.length;s++)if(o=i[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var E,T;(function(e){e["pop"]="pop",e["push"]="push"})(E||(E={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(T||(T={}));function C(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),d(e)}const I=/^[^#]+#/;function S(e,t){return e.replace(I,"#")+t}function k(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const A=()=>({left:window.pageXOffset,top:window.pageYOffset});function N(e){let t;if("el"in e){const n=e.el,i="string"===typeof n&&n.startsWith("#");0;const r="string"===typeof n?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=k(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function R(e,t){const n=history.state?history.state.position-t:-1;return n+e}const O=new Map;function x(e,t){O.set(e,t)}function D(e){const t=O.get(e);return O.delete(e),t}let P=()=>location.protocol+"//"+location.host;function L(e,t){const{pathname:n,search:i,hash:r}=t,s=e.indexOf("#");if(s>-1){let t=r.includes(e.slice(s))?e.slice(s).length:1,n=r.slice(t);return"/"!==n[0]&&(n="/"+n),g(n,"")}const o=g(n,e);return o+i+r}function M(e,t,n,i){let r=[],s=[],o=null;const c=({state:s})=>{const a=L(e,location),c=n.value,l=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else i(a);r.forEach((e=>{e(n.value,c,{delta:u,type:E.pop,direction:u?u>0?T.forward:T.back:T.unknown})}))};function l(){o=n.value}function u(e){r.push(e);const t=()=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:A()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function F(e,t,n,i=!1,r=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:r?A():null}}function U(e){const{history:t,location:n}=window,i={value:L(e,n)},r={value:t.state};function s(i,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+i:P()+e+i;try{t[o?"replaceState":"pushState"](s,"",c),r.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}function o(e,n){const o=a({},t.state,F(r.value.back,e,r.value.forward,!0),n,{position:r.value.position});s(e,o,!0),i.value=e}function c(e,n){const o=a({},r.value,t.state,{forward:e,scroll:A()});s(o.current,o,!0);const c=a({},F(i.value,e,null),{position:o.position+1},n);s(e,c,!1),i.value=e}return r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:i,state:r,push:c,replace:o}}function V(e){e=C(e);const t=U(e),n=M(e,t.state,t.location,t.replace);function i(e,t=!0){t||n.pauseListeners(),history.go(e)}const r=a({location:"",base:e,go:i,createHref:S.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function j(e){return"string"===typeof e||e&&"object"===typeof e}function $(e){return"string"===typeof e||"symbol"===typeof e}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},B=Symbol("");var z;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(z||(z={}));function H(e,t){return a(new Error,{type:e,[B]:!0},t)}function W(e,t){return e instanceof Error&&B in e&&(null==t||!!(e.type&t))}const K="[^/]+?",G={sensitive:!1,strict:!1,start:!0,end:!0},J=/[.+*?^${}()[\]/\\]/g;function Q(e,t){const n=a({},G,t),i=[];let r=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(r+="/");for(let t=0;t<a.length;t++){const i=a[t];let o=40+(n.sensitive?.25:0);if(0===i.type)t||(r+="/"),r+=i.value.replace(J,"\\$&"),o+=40;else if(1===i.type){const{value:e,repeatable:n,optional:c,regexp:l}=i;s.push({name:e,repeatable:n,optional:c});const u=l||K;if(u!==K){o+=10;try{new RegExp(`(${u})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+h.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),r+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===u&&(o+=-50)}e.push(o)}i.push(e)}if(n.strict&&n.end){const e=i.length-1;i[e][i[e].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function c(e){const t=e.match(o),n={};if(!t)return null;for(let i=1;i<t.length;i++){const e=t[i]||"",r=s[i-1];n[r.name]=e&&r.repeatable?e.split("/"):e}return n}function l(t){let n="",i=!1;for(const r of e){i&&n.endsWith("/")||(n+="/"),i=!1;for(const e of r)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(u(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=u(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);r.length<2&&(n.endsWith("/")?n=n.slice(0,-1):i=!0)}n+=l}}return n||"/"}return{re:o,score:i,keys:s,parse:c,stringify:l}}function Y(e,t){let n=0;while(n<e.length&&n<t.length){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function X(e,t){let n=0;const i=e.score,r=t.score;while(n<i.length&&n<r.length){const e=Y(i[n],r[n]);if(e)return e;n++}if(1===Math.abs(r.length-i.length)){if(Z(i))return 1;if(Z(r))return-1}return r.length-i.length}function Z(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ee={type:0,value:""},te=/[a-zA-Z0-9_]/;function ne(e){if(!e)return[[]];if("/"===e)return[[ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a,c=0,l="",u="";function h(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:"("===a?n=2:te.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else i=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function ie(e,t,n){const i=Q(ne(e.path),n);const r=a(i,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf===!t.record.aliasOf&&t.children.push(r),r}function re(e,t){const n=[],i=new Map;function r(e){return i.get(e)}function s(e,n,i){const r=!i,c=oe(e);c.aliasOf=i&&i.record;const h=ue(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},c,{components:i?i.record.components:c.components,path:e,aliasOf:i?i.record:c}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,i="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&i+a)}if(f=ie(t,n,h),i?i.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),r&&e.name&&!ce(f)&&o(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)s(e[t],f,i&&i.children[t])}i=i||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&u(f)}return p?()=>{o(p)}:l}function o(e){if($(e)){const t=i.get(e);t&&(i.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&i.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function c(){return n}function u(e){let t=0;while(t<n.length&&X(e,n[t])>=0&&(e.record.path!==n[t].record.path||!he(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ce(e)&&i.set(e.record.name,e)}function h(e,t){let r,s,o,c={};if("name"in e&&e.name){if(r=i.get(e.name),!r)throw H(1,{location:e});0,o=r.record.name,c=a(se(t.params,r.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&se(e.params,r.keys.map((e=>e.name)))),s=r.stringify(c)}else if("path"in e)s=e.path,r=n.find((e=>e.re.test(s))),r&&(c=r.parse(s),o=r.record.name);else{if(r=t.name?i.get(t.name):n.find((e=>e.re.test(t.path))),!r)throw H(1,{location:e,currentLocation:t});o=r.record.name,c=a({},t.params,e.params),s=r.stringify(c)}const l=[];let u=r;while(u)l.unshift(u.record),u=u.parent;return{name:o,path:s,params:c,matched:l,meta:le(l)}}return t=ue({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:r}}function se(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function oe(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ae(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ae(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]="object"===typeof n?n[i]:n;return t}function ce(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function le(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function ue(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function he(e,t){return t.children.some((t=>t===e||he(e,t)))}const de=/#/g,fe=/&/g,pe=/\//g,ge=/=/g,me=/\?/g,_e=/\+/g,ye=/%5B/g,ve=/%5D/g,we=/%5E/g,be=/%60/g,Ee=/%7B/g,Te=/%7C/g,Ce=/%7D/g,Ie=/%20/g;function Se(e){return encodeURI(""+e).replace(Te,"|").replace(ye,"[").replace(ve,"]")}function ke(e){return Se(e).replace(Ee,"{").replace(Ce,"}").replace(we,"^")}function Ae(e){return Se(e).replace(_e,"%2B").replace(Ie,"+").replace(de,"%23").replace(fe,"%26").replace(be,"`").replace(Ee,"{").replace(Ce,"}").replace(we,"^")}function Ne(e){return Ae(e).replace(ge,"%3D")}function Re(e){return Se(e).replace(de,"%23").replace(me,"%3F")}function Oe(e){return null==e?"":Re(e).replace(pe,"%2F")}function xe(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function De(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],i=(n?e.slice(1):e).split("&");for(let r=0;r<i.length;++r){const e=i[r].replace(_e," "),n=e.indexOf("="),s=xe(n<0?e:e.slice(0,n)),o=n<0?null:xe(e.slice(n+1));if(s in t){let e=t[s];u(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Pe(e){let t="";for(let n in e){const i=e[n];if(n=Ne(n),null==i){void 0!==i&&(t+=(t.length?"&":"")+n);continue}const r=u(i)?i.map((e=>e&&Ae(e))):[i&&Ae(i)];r.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Le(e){const t={};for(const n in e){const i=e[n];void 0!==i&&(t[n]=u(i)?i.map((e=>null==e?null:""+e)):null==i?i:""+i)}return t}const Me=Symbol(""),Fe=Symbol(""),Ue=Symbol(""),Ve=Symbol(""),je=Symbol("");function $e(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function qe(e,t,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise(((o,a)=>{const c=e=>{!1===e?a(H(4,{from:n,to:t})):e instanceof Error?a(e):j(e)?a(H(2,{from:t,to:e})):(s&&i.enterCallbacks[r]===s&&"function"===typeof e&&s.push(e),o())},l=e.call(i&&i.instances[r],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch((e=>a(e)))}))}function Be(e,t,n,i){const r=[];for(const s of e){0;for(const e in s.components){let a=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(ze(a)){const o=a.__vccOpts||a,c=o[t];c&&r.push(qe(c,n,i,s,e))}else{let c=a();0,r.push((()=>c.then((r=>{if(!r)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=o(r)?r.default:r;s.components[e]=a;const c=a.__vccOpts||a,l=c[t];return l&&qe(l,n,i,s,e)()}))))}}}return r}function ze(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function He(e){const t=(0,i.f3)(Ue),n=(0,i.f3)(Ve),s=(0,i.Fl)((()=>t.resolve((0,r.SU)(e.to)))),o=(0,i.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,i=e[t-1],r=n.matched;if(!i||!r.length)return-1;const o=r.findIndex(_.bind(null,i));if(o>-1)return o;const a=Qe(e[t-2]);return t>1&&Qe(i)===a&&r[r.length-1].path!==a?r.findIndex(_.bind(null,e[t-2])):o})),a=(0,i.Fl)((()=>o.value>-1&&Je(n.params,s.value.params))),c=(0,i.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&y(n.params,s.value.params)));function u(n={}){return Ge(n)?t[(0,r.SU)(e.replace)?"replace":"push"]((0,r.SU)(e.to)).catch(l):Promise.resolve()}return{route:s,href:(0,i.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:u}}const We=(0,i.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:He,setup(e,{slots:t}){const n=(0,r.qj)(He(e)),{options:s}=(0,i.f3)(Ue),o=(0,i.Fl)((()=>({[Ye(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:(0,i.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),Ke=We;function Ge(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Je(e,t){for(const n in t){const i=t[n],r=e[n];if("string"===typeof i){if(i!==r)return!1}else if(!u(r)||r.length!==i.length||i.some(((e,t)=>e!==r[t])))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=(0,i.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,i.f3)(je),o=(0,i.Fl)((()=>e.route||s.value)),c=(0,i.f3)(Fe,0),l=(0,i.Fl)((()=>{let e=(0,r.SU)(c);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),u=(0,i.Fl)((()=>o.value.matched[l.value]));(0,i.JJ)(Fe,(0,i.Fl)((()=>l.value+1))),(0,i.JJ)(Me,u),(0,i.JJ)(je,o);const h=(0,r.iH)();return(0,i.YP)((()=>[h.value,u.value,e.name]),(([e,t,n],[i,r,s])=>{t&&(t.instances[n]=e,r&&r!==t&&e&&e===i&&(t.leaveGuards.size||(t.leaveGuards=r.leaveGuards),t.updateGuards.size||(t.updateGuards=r.updateGuards))),!e||!t||r&&_(t,r)&&i||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=o.value,s=e.name,c=u.value,l=c&&c.components[s];if(!l)return Ze(n.default,{Component:l,route:r});const d=c.props[s],f=d?!0===d?r.params:"function"===typeof d?d(r):d:null,p=e=>{e.component.isUnmounted&&(c.instances[s]=null)},g=(0,i.h)(l,a({},f,t,{onVnodeUnmounted:p,ref:h}));return Ze(n.default,{Component:g,route:r})||g}}});function Ze(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Xe;function tt(e){const t=re(e.routes,e),n=e.parseQuery||De,o=e.stringifyQuery||Pe,h=e.history;const d=$e(),g=$e(),_=$e(),y=(0,r.XI)(q);let v=q;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=c.bind(null,(e=>""+e)),b=c.bind(null,Oe),T=c.bind(null,xe);function C(e,n){let i,r;return $(e)?(i=t.getRecordMatcher(e),r=n):r=e,t.addRoute(r,i)}function I(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function S(){return t.getRoutes().map((e=>e.record))}function k(e){return!!t.getRecordMatcher(e)}function O(e,i){if(i=a({},i||y.value),"string"===typeof e){const r=f(n,e,i.path),s=t.resolve({path:r.path},i),o=h.createHref(r.fullPath);return a(r,s,{params:T(s.params),hash:xe(r.hash),redirectedFrom:void 0,href:o})}let r;if("path"in e)r=a({},e,{path:f(n,e.path,i.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];r=a({},e,{params:b(t)}),i.params=b(i.params)}const s=t.resolve(r,i),c=e.hash||"";s.params=w(T(s.params));const l=p(o,a({},e,{hash:ke(c),path:s.path})),u=h.createHref(l);return a({fullPath:l,hash:c,query:o===Pe?Le(e.query):e.query||{}},s,{redirectedFrom:void 0,href:u})}function P(e){return"string"===typeof e?f(n,e,y.value.path):a({},e)}function L(e,t){if(v!==e)return H(8,{from:t,to:e})}function M(e){return V(e)}function F(e){return M(a(P(e),{replace:!0}))}function U(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let i="function"===typeof n?n(e):n;return"string"===typeof i&&(i=i.includes("?")||i.includes("#")?i=P(i):{path:i},i.params={}),a({query:e.query,hash:e.hash,params:"path"in i?{}:e.params},i)}}function V(e,t){const n=v=O(e),i=y.value,r=e.state,s=e.force,c=!0===e.replace,l=U(n);if(l)return V(a(P(l),{state:"object"===typeof l?a({},r,l.state):r,force:s,replace:c}),t||n);const u=n;let h;return u.redirectedFrom=t,!s&&m(o,i,n)&&(h=H(16,{to:u,from:i}),ie(i,i,!0,!1)),(h?Promise.resolve(h):z(u,i)).catch((e=>W(e)?W(e,2)?e:ne(e):ee(e,u,i))).then((e=>{if(e){if(W(e,2))return V(a({replace:c},P(e.to),{state:"object"===typeof e.to?a({},r,e.to.state):r,force:s}),t||u)}else e=G(u,i,!0,c,r);return K(u,i,e),e}))}function j(e,t){const n=L(e,t);return n?Promise.reject(n):Promise.resolve()}function B(e){const t=ae.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function z(e,t){let n;const[i,r,s]=nt(e,t);n=Be(i.reverse(),"beforeRouteLeave",e,t);for(const a of i)a.leaveGuards.forEach((i=>{n.push(qe(i,e,t))}));const o=j.bind(null,e,t);return n.push(o),le(n).then((()=>{n=[];for(const i of d.list())n.push(qe(i,e,t));return n.push(o),le(n)})).then((()=>{n=Be(r,"beforeRouteUpdate",e,t);for(const i of r)i.updateGuards.forEach((i=>{n.push(qe(i,e,t))}));return n.push(o),le(n)})).then((()=>{n=[];for(const i of s)if(i.beforeEnter)if(u(i.beforeEnter))for(const r of i.beforeEnter)n.push(qe(r,e,t));else n.push(qe(i.beforeEnter,e,t));return n.push(o),le(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Be(s,"beforeRouteEnter",e,t),n.push(o),le(n)))).then((()=>{n=[];for(const i of g.list())n.push(qe(i,e,t));return n.push(o),le(n)})).catch((e=>W(e,8)?e:Promise.reject(e)))}function K(e,t,n){_.list().forEach((i=>B((()=>i(e,t,n)))))}function G(e,t,n,i,r){const o=L(e,t);if(o)return o;const c=t===q,l=s?history.state:{};n&&(i||c?h.replace(e.fullPath,a({scroll:c&&l&&l.scroll},r)):h.push(e.fullPath,r)),y.value=e,ie(e,t,n,c),ne()}let J;function Q(){J||(J=h.listen(((e,t,n)=>{if(!ce.listening)return;const i=O(e),r=U(i);if(r)return void V(a(r,{replace:!0}),i).catch(l);v=i;const o=y.value;s&&x(R(o.fullPath,n.delta),A()),z(i,o).catch((e=>W(e,12)?e:W(e,2)?(V(e.to,i).then((e=>{W(e,20)&&!n.delta&&n.type===E.pop&&h.go(-1,!1)})).catch(l),Promise.reject()):(n.delta&&h.go(-n.delta,!1),ee(e,i,o)))).then((e=>{e=e||G(i,o,!1),e&&(n.delta&&!W(e,8)?h.go(-n.delta,!1):n.type===E.pop&&W(e,20)&&h.go(-1,!1)),K(i,o,e)})).catch(l)})))}let Y,X=$e(),Z=$e();function ee(e,t,n){ne(e);const i=Z.list();return i.length?i.forEach((i=>i(e,t,n))):console.error(e),Promise.reject(e)}function te(){return Y&&y.value!==q?Promise.resolve():new Promise(((e,t)=>{X.add([e,t])}))}function ne(e){return Y||(Y=!e,Q(),X.list().forEach((([t,n])=>e?n(e):t())),X.reset()),e}function ie(t,n,r,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const c=!r&&D(R(t.fullPath,0))||(o||!r)&&history.state&&history.state.scroll||null;return(0,i.Y3)().then((()=>a(t,n,c))).then((e=>e&&N(e))).catch((e=>ee(e,t,n)))}const se=e=>h.go(e);let oe;const ae=new Set,ce={currentRoute:y,listening:!0,addRoute:C,removeRoute:I,hasRoute:k,getRoutes:S,resolve:O,options:e,push:M,replace:F,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:d.add,beforeResolve:g.add,afterEach:_.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",Ke),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,r.SU)(y)}),s&&!oe&&y.value===q&&(oe=!0,M(h.location).catch((e=>{0})));const n={};for(const r in q)Object.defineProperty(n,r,{get:()=>y.value[r],enumerable:!0});e.provide(Ue,t),e.provide(Ve,(0,r.Um)(n)),e.provide(je,y);const i=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(v=q,J&&J(),J=null,y.value=q,oe=!1,Y=!1),i()}}};function le(e){return e.reduce(((e,t)=>e.then((()=>B(t)))),Promise.resolve())}return ce}function nt(e,t){const n=[],i=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>_(e,s)))?i.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>_(e,a)))||r.push(a))}return[n,i,r]}}}]);
//# sourceMappingURL=chunk-vendors.912cb484.js.map