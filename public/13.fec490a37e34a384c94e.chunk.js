webpackJsonp([13],{"../../../users/eric/documents/hg/cw/cw-app/app/containers/StudyPage/TagsSection/index.js":function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=o("../../../users/eric/documents/hg/cw/cw-app/node_modules/lodash/lodash.js"),i=o.n(a),u=o("../../../users/eric/documents/hg/cw/cw-app/node_modules/react/index.js"),c=o.n(u),p=o("../../../users/eric/documents/hg/cw/cw-app/node_modules/prop-types/index.js"),d=(o.n(p),o("../../../users/eric/documents/hg/cw/cw-app/node_modules/styled-components/dist/styled-components.browser.es.js")),l=o("../../../users/eric/documents/hg/cw/cw-app/node_modules/react-bootstrap/es/index.js"),f=o("../../../users/eric/documents/hg/cw/cw-app/node_modules/react-fontawesome/lib/index.js"),h=o.n(f),m=o("../../../users/eric/documents/hg/cw/cw-app/app/components/LoadingPane/index.js"),g=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,n,r){var s=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&s)for(var i in s)void 0===o[i]&&(o[i]=s[i]);else o||(o=s||{});if(1===a)o.children=r;else if(a>1){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+3];o.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),y=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),b=d.a.div.withConfig({displayName:"TagsSection__TagsWrapper"})([".remove-col {text-align: right;}"]),w=g(m.a,{}),v=g("tr",{id:"no-tags-found"},void 0,g("td",{colSpan:2},void 0,g("b",{},void 0,"No tags for this study."))),_=g("thead",{},void 0,g("tr",{},void 0,g("th",{},void 0,"Tags"),g("td",{}))),T=function(e){function t(e){n(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.onTagRemove=o.onTagRemove.bind(o),o.onTagSubmit=o.onTagSubmit.bind(o),o.changeNewTag=o.changeNewTag.bind(o),o.newTag="",o}return s(t,e),y(t,[{key:"onTagRemove",value:function(e,t){e.persist(),e.preventDefault(),this.props.loggedIn?this.props.removeTag(this.props.StudyPage.study.nct_id,t):this.props.onAnonymousClick()}},{key:"onTagSubmit",value:function(e){e.persist(),e.preventDefault(),this.props.loggedIn?(this.props.submitTag(this.props.StudyPage.study.nct_id,this.newTag),this.textInput.value=""):this.props.onAnonymousClick()}},{key:"changeNewTag",value:function(e){this.newTag=e.target.value}},{key:"render",value:function(){var e=this;if(!i.a.get(this.props,"StudyPage.study"))return w;var t=i.a.get(this.props,"StudyPage.study.tags"),o=void 0;return o=t?t.map(function(t){return g("tr",{className:"tag-row tag-row-"+t.replace(" ","-")},t,g("th",{className:"tag-value"},void 0,t),g("td",{className:"remove-col"},void 0,g(h.a,{id:"remove-tag-"+t.replace(" ","-"),className:"remove",name:"remove",style:{cursor:"pointer",color:"#cc1111"},onClick:function(o){return e.onTagRemove(o,t)}})))}):v,g(l.k,{},void 0,g(b,{},void 0,g(l.u,{},void 0,g(l.e,{md:6},void 0,g(l.v,{condensed:!0,striped:!0},void 0,_,g("tbody",{},void 0,o))),g(l.e,{md:3,mdOffset:3},void 0,g(l.h,{id:"add-tag-form",inline:!0,onSubmit:this.onSubmit,className:"tagInput pull-right"},void 0,g(l.j,{controlId:"formInlineTag"},void 0,g(l.i,{type:"text",inputRef:function(t){e.textInput=t},onFocus:this.onFocus,onChange:this.changeNewTag,onKeyPress:function(t){13===t.charCode&&e.onTagSubmit(t)},placeholder:"add a tag"}),g(l.b,{id:"submit-tag",type:"submit",onClick:function(t){return e.onTagSubmit(t)}},void 0,"Add Tag")))))))}}]),t}(c.a.Component);t.default=T},"../../../users/eric/documents/hg/cw/cw-app/node_modules/react-fontawesome/lib/index.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),p=o("../../../users/eric/documents/hg/cw/cw-app/node_modules/react/index.js"),d=n(p),l=o("../../../users/eric/documents/hg/cw/cw-app/node_modules/react-fontawesome/node_modules/prop-types/index.js"),f=n(l),h=o("../../../users/eric/documents/hg/cw/cw-app/node_modules/react-fontawesome/lib/screen-reader-styles.js"),m=n(h),g=function(e){function t(){s(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.displayName="FontAwesome",e}return i(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.border,o=e.cssModule,n=e.className,s=e.fixedWidth,a=e.flip,i=e.inverse,c=e.name,p=e.pulse,l=e.rotate,f=e.size,h=e.spin,g=e.stack,y=e.tag,b=void 0===y?"span":y,w=e.ariaLabel,v=r(e,["border","cssModule","className","fixedWidth","flip","inverse","name","pulse","rotate","size","spin","stack","tag","ariaLabel"]),_=[];return o?(_.push(o.fa),_.push(o["fa-"+c]),f&&_.push(o["fa-"+f]),h&&_.push(o["fa-spin"]),p&&_.push(o["fa-pulse"]),t&&_.push(o["fa-border"]),s&&_.push(o["fa-fw"]),i&&_.push(o["fa-inverse"]),a&&_.push(o["fa-flip-"+a]),l&&_.push(o["fa-rotate-"+l]),g&&_.push(o["fa-stack-"+g])):(_.push("fa"),_.push("fa-"+c),f&&_.push("fa-"+f),h&&_.push("fa-spin"),p&&_.push("fa-pulse"),t&&_.push("fa-border"),s&&_.push("fa-fw"),i&&_.push("fa-inverse"),a&&_.push("fa-flip-"+a),l&&_.push("fa-rotate-"+l),g&&_.push("fa-stack-"+g)),n&&_.push(n),d.default.createElement(b,u({},v,{"aria-hidden":!0,className:_.join(" ")}),w?d.default.createElement("span",{style:m.default},w):null)}}]),t}(d.default.Component);g.propTypes={ariaLabel:f.default.string,border:f.default.bool,className:f.default.string,cssModule:f.default.object,fixedWidth:f.default.bool,flip:f.default.oneOf(["horizontal","vertical"]),inverse:f.default.bool,name:f.default.string.isRequired,pulse:f.default.bool,rotate:f.default.oneOf([90,180,270]),size:f.default.oneOf(["lg","2x","3x","4x","5x"]),spin:f.default.bool,stack:f.default.oneOf(["1x","2x"]),tag:f.default.string},t.default=g,e.exports=t.default},"../../../users/eric/documents/hg/cw/cw-app/node_modules/react-fontawesome/lib/screen-reader-styles.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={position:"absolute",width:"1px",height:"1px",padding:"0px",margin:"-1px",overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",border:"0px"},e.exports=t.default},"../../../users/eric/documents/hg/cw/cw-app/node_modules/react-fontawesome/node_modules/prop-types/factoryWithThrowingShims.js":function(e,t,o){"use strict";function n(){}var r=o("../../../users/eric/documents/hg/cw/cw-app/node_modules/react-fontawesome/node_modules/prop-types/lib/ReactPropTypesSecret.js");e.exports=function(){function e(e,t,o,n,s,a){if(a!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return o.checkPropTypes=n,o.PropTypes=o,o}},"../../../users/eric/documents/hg/cw/cw-app/node_modules/react-fontawesome/node_modules/prop-types/index.js":function(e,t,o){e.exports=o("../../../users/eric/documents/hg/cw/cw-app/node_modules/react-fontawesome/node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../users/eric/documents/hg/cw/cw-app/node_modules/react-fontawesome/node_modules/prop-types/lib/ReactPropTypesSecret.js":function(e,t,o){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}});