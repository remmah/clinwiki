webpackJsonp([7],{"./app/components/AuthButton/index.js":function(e,t,n){"use strict";var r=n("./node_modules/react/react.js"),o=(n.n(r),n("./node_modules/react-bootstrap/es/index.js")),i=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,u=arguments.length-3;if(n||0===u||(n={}),n&&i)for(var a in i)void 0===n[a]&&(n[a]=i[a]);else n||(n=i||{});if(1===u)n.children=o;else if(u>1){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),u=function(e){return e.loggedIn?i("div",{style:{marginTop:"10px"}},void 0,i(o.i,{title:e.user&&e.user.email||"",id:"loggedIn"},void 0,i(o.j,{onClick:function(){return e.router.push("/profile")}},void 0,"Profile"),i(o.j,{onClick:function(){return e.router.push("/logout")}},void 0,"Log Out"))):i("div",{style:{marginTop:"10px"}},void 0,i(o.f,{href:"/login-signup",style:{marginRight:"10px"}},void 0,"Login | Signup"))};t.a=u},"./app/containers/Profile/actions.js":function(e,t,n){"use strict";var r=n("./app/utils/client.js"),o=n("./app/containers/Profile/constants.js");n.d(t,"a",function(){return i});var i=function(e){return function(t){return r.a.patch("/users.json",t).then(e({type:o.b}))}}},"./app/containers/Profile/constants.js":function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var r="app/Profile/DEFAULT_ACTION",o="app/Profile/PROFILE_SUBMIT_ACTION"},"./app/containers/Profile/index.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e){var t=e.id,n=e.label,r=e.help,o=u(e,["id","label","help"]);return _(y.a,{controlId:t},void 0,_(y.b,{},void 0,n),c.a.createElement(y.c,o),r&&_(y.d,{},void 0,r))}function s(e){return{submitProfile:n.i(g.a)(e)}}Object.defineProperty(t,"__esModule",{value:!0});var l=n("./node_modules/react/react.js"),c=n.n(l),f=n("./node_modules/react-redux/lib/index.js"),p=(n.n(f),n("./node_modules/react-helmet/lib/Helmet.js")),d=n.n(p),y=n("./node_modules/react-bootstrap/es/index.js"),h=n("./node_modules/reselect/es/index.js"),m=n("./app/components/AuthButton/index.js"),T=n("./app/containers/App/selectors.js"),b=n("./app/containers/Profile/selectors.js"),g=n("./app/containers/Profile/actions.js");n.d(t,"Profile",function(){return j});var v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,u=arguments.length-3;if(n||0===u||(n={}),n&&i)for(var a in i)void 0===n[a]&&(n[a]=i[a]);else n||(n=i||{});if(1===u)n.children=o;else if(u>1){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),A=_("h1",{},void 0,"Not logged in!"),S=_(y.e,{md:8},void 0,_("h1",{},void 0,_("a",{href:"/"},void 0,"Clinwiki"))),P=_(y.f,{type:"submit"},void 0,"Submit"),j=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.firstName=n.props.Auth.user.first_name,n.lastName=n.props.Auth.user.last_name,n.defaultQueryString=n.props.Auth.user.default_query_string,n.currentPassword=null,n.onProfileSubmit=n.onProfileSubmit.bind(n),n.onChangeFirstName=n.onChangeFirstName.bind(n),n.onChangeLastName=n.onChangeLastName.bind(n),n.onChangeDefaultQueryString=n.onChangeDefaultQueryString.bind(n),n}return i(t,e),E(t,[{key:"onChangeFirstName",value:function(e){this.firstName=e.target.value}},{key:"onChangeLastName",value:function(e){this.lastName=e.target.value}},{key:"onChangeDefaultQueryString",value:function(e){this.defaultQueryString=e.target.value}},{key:"onProfileSubmit",value:function(e){var t=this;e.persist(),e.preventDefault(),this.props.submitProfile({id:this.props.Auth.user.id,first_name:this.firstName,last_name:this.lastName,default_query_string:this.defaultQueryString}).then(function(){return t.props.router.push("/")})}},{key:"render",value:function(){return this.props.Auth&&this.props.Auth.loggedIn?_("div",{},void 0,_(d.a,{title:"Profile",meta:[{name:"description",content:"Profile Page"}]}),_(y.g,{id:"clinwiki-header",className:""},void 0,S,_(y.e,{md:4,className:"text-right"},void 0,c.a.createElement(m.a,v({},this.props.Auth,{router:this.props.router})))),_(y.g,{},void 0,_(y.e,{md:6,mdOffset:4},void 0,_(y.h,{onSubmit:this.onProfileSubmit},void 0,_(a,{id:"first_name",type:"text",label:"First Name",placeholder:"Enter Your First Name",defaultValue:this.props.Auth.user.first_name,onChange:this.onChangeFirstName}),_(a,{id:"last_name",type:"text",label:"Last Name",placeholder:"Enter Your Last Name",defaultValue:this.props.Auth.user.last_name,onChange:this.onChangeLastName}),_(a,{id:"default_query_string",type:"text",label:"Default Query",defaultValue:this.props.Auth.user.default_query_string,onChange:this.onChangeDefaultQueryString,placeholder:"Enter A Default Query"}),P)))):A}}]),t}(c.a.Component);j.defaultProps={Auth:{loggedIn:!1}};var O=n.i(h.b)({Profile:n.i(b.a)(),Auth:n.i(T.b)()});t.default=n.i(f.connect)(O,s)(j)},"./app/containers/Profile/selectors.js":function(e,t,n){"use strict";var r=n("./node_modules/reselect/es/index.js"),o=function(){return function(e){return e.get("profile")}},i=function(){return n.i(r.a)(o(),function(e){return e.toJS()})};t.a=i},"./node_modules/deep-equal/index.js":function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,c;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(s(e))return!!s(t)&&(e=u.call(e),t=u.call(t),l(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var f=a(e),p=a(t)}catch(e){return!1}if(f.length!=p.length)return!1;for(f.sort(),p.sort(),i=f.length-1;i>=0;i--)if(f[i]!=p[i])return!1;for(i=f.length-1;i>=0;i--)if(c=f[i],!l(e[c],t[c],n))return!1;return typeof e==typeof t}var u=Array.prototype.slice,a=n("./node_modules/deep-equal/lib/keys.js"),s=n("./node_modules/deep-equal/lib/is_arguments.js"),l=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},"./node_modules/deep-equal/lib/is_arguments.js":function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},"./node_modules/deep-equal/lib/keys.js":function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},"./node_modules/react-helmet/lib/Helmet.js":function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.__esModule=!0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=n("./node_modules/react/react.js"),f=r(c),p=n("./node_modules/react-side-effect/lib/index.js"),d=r(p),y=n("./node_modules/deep-equal/index.js"),h=r(y),m=n("./node_modules/object-assign/index.js"),T=r(m),b=n("./node_modules/react-helmet/lib/HelmetConstants.js"),g=n("./node_modules/react-helmet/lib/PlainComponent.js"),v=r(g),E="data-react-helmet",_=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},A=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r[t])return r[t]}return null},S=function(e){var t=A(e,"title"),n=A(e,"titleTemplate");if(n&&t)return n.replace(/%s/g,function(){return t});var r=A(e,"defaultTitle");return t||r||""},P=function(e){return A(e,"onChangeClientState")||function(){}},j=function(e){return e.filter(function(e){return"undefined"!=typeof e[b.TAG_NAMES.HTML]}).map(function(e){return e[b.TAG_NAMES.HTML]}).reduce(function(e,t){return l({},e,t)},{})},O=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[b.TAG_NAMES.BASE]}).map(function(e){return e[b.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],u=i.toLowerCase();if(e.indexOf(u)!==-1)return t.concat(n)}return t},[])},w=function(e,t,n){var r={},o=n.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),u=0;u<i.length;u++){var a=i[u],s=a.toLowerCase();t.indexOf(s)===-1||n===b.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===b.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),t.indexOf(a)===-1||a!==b.TAG_PROPERTIES.INNER_HTML&&a!==b.TAG_PROPERTIES.CSS_TEXT||(n=a)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),u=0;u<i.length;u++){var a=i[u],s=(0,T.default)({},r[a],o[a]);r[a]=s}return e},[]).reverse();return o},N=function(e){document.title=e||document.title},C=function(e){for(var t=document.getElementsByTagName("html")[0],n=t.getAttribute(E),r=n?n.split(","):[],o=[].concat(r),i=Object.keys(e),u=0;u<i.length;u++){var a=i[u],s=e[a]||"";t.setAttribute(a,s),r.indexOf(a)===-1&&r.push(a);var l=o.indexOf(a);l!==-1&&o.splice(l,1)}for(var c=o.length-1;c>=0;c--)t.removeAttribute(o[c]);r.length===o.length?t.removeAttribute(E):t.setAttribute(E,r.join(","))},M=function(e,t){var n=document.head||document.querySelector("head"),r=n.querySelectorAll(e+"["+E+"]"),o=Array.prototype.slice.call(r),i=[],u=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if("innerHTML"===r)n.innerHTML=t.innerHTML;else if("cssText"===r)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var a="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,a)}n.setAttribute(E,"true"),o.some(function(e,t){return u=t,n.isEqualNode(e)})?o.splice(u,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},R=function(e){for(var t=Object.keys(e),n="",r=0;r<t.length;r++){var o=t[r],i="undefined"!=typeof e[o]?o+'="'+e[o]+'"':""+o;n+=i+" "}return n.trim()},x=function(e,t){var n="<"+e+" "+E+'="true">'+_(t)+"</"+e+">";return n},k=function(e,t){var n=t.map(function(t){var n=Object.keys(t).filter(function(e){return!("innerHTML"===e||"cssText"===e)}).map(function(e){if("undefined"==typeof t[e])return e;var n=_(t[e]);return e+'="'+n+'"'}).join(" ").trim(),r=t.innerHTML||t.cssText||"",o=[b.TAG_NAMES.NOSCRIPT,b.TAG_NAMES.SCRIPT,b.TAG_NAMES.STYLE].indexOf(e)===-1;return"<"+e+" "+E+'="true" '+n+(o?"/>":">"+r+"</"+e+">")}).join("");return n},I=function(e,t){var n=[f.default.createElement(b.TAG_NAMES.TITLE,a({key:t},E,!0),t)];return n},L=function(e,t){var n=t.map(function(t,n){var r=a({key:n},E,!0);return Object.keys(t).forEach(function(e){var n=b.REACT_TAG_MAP[e]||e;if("innerHTML"===n||"cssText"===n){var o=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:o}}else r[n]=t[e]}),f.default.createElement(e,r)});return n},G=function(e,t){switch(e){case b.TAG_NAMES.TITLE:return{toComponent:function(){return I(e,t)},toString:function(){return x(e,t)}};case b.TAG_NAMES.HTML:return{toComponent:function(){return t},toString:function(){return R(t)}};default:return{toComponent:function(){return L(e,t)},toString:function(){return k(e,t)}}}},H=function(e){var t=e.htmlAttributes,n=e.title,r=e.baseTag,o=e.metaTags,i=e.linkTags,u=e.scriptTags,a=e.noscriptTags,s=e.styleTags;return{htmlAttributes:G(b.TAG_NAMES.HTML,t),title:G(b.TAG_NAMES.TITLE,n),base:G(b.TAG_NAMES.BASE,r),meta:G(b.TAG_NAMES.META,o),link:G(b.TAG_NAMES.LINK,i),script:G(b.TAG_NAMES.SCRIPT,u),noscript:G(b.TAG_NAMES.NOSCRIPT,a),style:G(b.TAG_NAMES.STYLE,s)}},q=function(e){var t=function(t){function n(){return o(this,n),i(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,t),s(n,[{key:"shouldComponentUpdate",value:function(e){return!(0,h.default)(this.props,e)}},{key:"render",value:function(){return f.default.createElement(e,this.props)}}],[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component);return t.propTypes={htmlAttributes:f.default.PropTypes.object,title:f.default.PropTypes.string,defaultTitle:f.default.PropTypes.string,titleTemplate:f.default.PropTypes.string,base:f.default.PropTypes.object,meta:f.default.PropTypes.arrayOf(f.default.PropTypes.object),link:f.default.PropTypes.arrayOf(f.default.PropTypes.object),script:f.default.PropTypes.arrayOf(f.default.PropTypes.object),noscript:f.default.PropTypes.arrayOf(f.default.PropTypes.object),style:f.default.PropTypes.arrayOf(f.default.PropTypes.object),onChangeClientState:f.default.PropTypes.func},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=H({htmlAttributes:[],title:"",baseTag:[],metaTags:[],linkTags:[],scriptTags:[],noscriptTags:[],styleTags:[]})),t},t},D=function(e){return{htmlAttributes:j(e),title:S(e),baseTag:O([b.TAG_PROPERTIES.HREF],e),metaTags:w(b.TAG_NAMES.META,[b.TAG_PROPERTIES.NAME,b.TAG_PROPERTIES.CHARSET,b.TAG_PROPERTIES.HTTPEQUIV,b.TAG_PROPERTIES.PROPERTY],e),linkTags:w(b.TAG_NAMES.LINK,[b.TAG_PROPERTIES.REL,b.TAG_PROPERTIES.HREF],e),scriptTags:w(b.TAG_NAMES.SCRIPT,[b.TAG_PROPERTIES.SRC,b.TAG_PROPERTIES.INNER_HTML],e),noscriptTags:w(b.TAG_NAMES.NOSCRIPT,[b.TAG_PROPERTIES.INNER_HTML],e),styleTags:w(b.TAG_NAMES.STYLE,[b.TAG_PROPERTIES.CSS_TEXT],e),onChangeClientState:P(e)}},U=function(e){var t=e.htmlAttributes,n=e.title,r=e.baseTag,o=e.metaTags,i=e.linkTags,u=e.scriptTags,a=e.noscriptTags,s=e.styleTags,l=e.onChangeClientState;C(t),N(n);var c={baseTag:M(b.TAG_NAMES.BASE,r),metaTags:M(b.TAG_NAMES.META,o),linkTags:M(b.TAG_NAMES.LINK,i),scriptTags:M(b.TAG_NAMES.SCRIPT,u),noscriptTags:M(b.TAG_NAMES.NOSCRIPT,a),styleTags:M(b.TAG_NAMES.STYLE,s)},f={},p={};Object.keys(c).forEach(function(e){var t=c[e],n=t.newTags,r=t.oldTags;n.length&&(f[e]=n),r.length&&(p[e]=c[e].oldTags)}),l(e,f,p)},F=(0,d.default)(D,U,H);t.default=q(F(v.default)),e.exports=t.default},"./node_modules/react-helmet/lib/HelmetConstants.js":function(e,t){t.__esModule=!0;t.TAG_NAMES={HTML:"htmlAttributes",TITLE:"title",BASE:"base",META:"meta",LINK:"link",SCRIPT:"script",NOSCRIPT:"noscript",STYLE:"style"},t.TAG_PROPERTIES={NAME:"name",CHARSET:"charset",HTTPEQUIV:"http-equiv",REL:"rel",HREF:"href",PROPERTY:"property",SRC:"src",INNER_HTML:"innerHTML",CSS_TEXT:"cssText"},t.REACT_TAG_MAP={charset:"charSet","http-equiv":"httpEquiv"}},"./node_modules/react-helmet/lib/PlainComponent.js":function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n("./node_modules/react/react.js"),l=r(s),c=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),a(t,[{key:"render",value:function(){return null}}]),t}(l.default.Component);t.default=c,e.exports=t.default},"./node_modules/react-side-effect/lib/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n("./node_modules/react/react.js"),s=r(a),l=n("./node_modules/react-side-effect/node_modules/fbjs/lib/ExecutionEnvironment.js"),c=r(l),f=n("./node_modules/react-side-effect/node_modules/fbjs/lib/shallowEqual.js"),p=r(f);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(l){function f(){y=e(d.map(function(e){return e.props})),h.canUseDOM?t(y):n&&(y=n(y))}if("function"!=typeof l)throw new Error("Expected WrappedComponent to be a React component.");var d=[],y=void 0,h=function(e){function t(){o(this,t),e.apply(this,arguments)}return i(t,e),t.peek=function(){return y},t.rewind=function(){if(t.canUseDOM)throw new Error("You may ony call rewind() on the server. Call peek() to read the current state.");var e=y;return y=void 0,d=[],e},t.prototype.shouldComponentUpdate=function(e){return!p.default(e,this.props)},t.prototype.componentWillMount=function(){d.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=d.indexOf(this);d.splice(e,1),f()},t.prototype.render=function(){return s.default.createElement(l,this.props)},u(t,null,[{key:"displayName",value:"SideEffect("+r(l)+")",enumerable:!0},{key:"canUseDOM",value:c.default.canUseDOM,enumerable:!0}]),t}(a.Component);return h}}},"./node_modules/react-side-effect/node_modules/fbjs/lib/ExecutionEnvironment.js":function(e,t,n){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};e.exports=o},"./node_modules/react-side-effect/node_modules/fbjs/lib/shallowEqual.js":function(e,t,n){"use strict";function r(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var i=o.bind(t),u=0;u<n.length;u++)if(!i(n[u])||e[n[u]]!==t[n[u]])return!1;return!0}var o=Object.prototype.hasOwnProperty;e.exports=r}});