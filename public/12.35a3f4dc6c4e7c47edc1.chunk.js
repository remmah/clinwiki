webpackJsonp([12],{"./app/containers/StudyPage/TagsSection/index.js":function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=o("./node_modules/lodash/lodash.js"),i=o.n(s),u=o("./node_modules/react/index.js"),p=o.n(u),l=o("./node_modules/prop-types/index.js"),d=(o.n(l),o("./node_modules/styled-components/dist/styled-components.browser.es.js")),f=o("./node_modules/react-bootstrap/es/index.js"),c=o("./node_modules/react-fontawesome/lib/index.js"),h=o.n(c),m=o("./app/components/LoadingPane/index.js"),y=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,n,r){var a=t&&t.defaultProps,s=arguments.length-3;if(o||0===s||(o={}),o&&a)for(var i in a)void 0===o[i]&&(o[i]=a[i]);else o||(o=a||{});if(1===s)o.children=r;else if(s>1){for(var u=Array(s),p=0;p<s;p++)u[p]=arguments[p+3];o.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),b=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),g=d.default.div.withConfig({displayName:"TagsSection__TagsWrapper"})([".remove-col {text-align: right;}"]),v=y(m.a,{}),_=y("tr",{id:"no-tags-found"},void 0,y("td",{colSpan:2},void 0,y("b",{},void 0,"No tags for this study."))),w=y("thead",{},void 0,y("tr",{},void 0,y("th",{},void 0,"Tags"),y("td",{}))),T=function(e){function t(e){n(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.onTagRemove=o.onTagRemove.bind(o),o.onTagSubmit=o.onTagSubmit.bind(o),o.changeNewTag=o.changeNewTag.bind(o),o.newTag="",o}return a(t,e),b(t,[{key:"onTagRemove",value:function(e,t){e.persist(),e.preventDefault(),this.props.loggedIn?this.props.removeTag(this.props.StudyPage.study.nct_id,t):this.props.onAnonymousClick()}},{key:"onTagSubmit",value:function(e){e.persist(),e.preventDefault(),this.props.loggedIn?(this.props.submitTag(this.props.StudyPage.study.nct_id,this.newTag),this.textInput.value=""):this.props.onAnonymousClick()}},{key:"changeNewTag",value:function(e){this.newTag=e.target.value}},{key:"render",value:function(){var e=this;if(!i.a.get(this.props,"StudyPage.study"))return v;var t=i.a.get(this.props,"StudyPage.study.tags"),o=void 0;return o=t?t.map(function(t){return y("tr",{className:"tag-row tag-row-"+t.replace(" ","-")},t,y("th",{className:"tag-value"},void 0,t),y("td",{className:"remove-col"},void 0,y(h.a,{id:"remove-tag-"+t.replace(" ","-"),className:"remove",name:"remove",style:{cursor:"pointer",color:"#cc1111"},onClick:function(o){return e.onTagRemove(o,t)}})))}):_,y(f.Grid,{},void 0,y(g,{},void 0,y(f.Row,{},void 0,y(f.Col,{md:6},void 0,y(f.Table,{condensed:!0,striped:!0},void 0,w,y("tbody",{},void 0,o))),y(f.Col,{md:3,mdOffset:3},void 0,y(f.Form,{id:"add-tag-form",inline:!0,onSubmit:this.onSubmit,className:"tagInput pull-right"},void 0,y(f.FormGroup,{controlId:"formInlineTag"},void 0,y(f.FormControl,{type:"text",inputRef:function(t){e.textInput=t},onFocus:this.onFocus,onChange:this.changeNewTag,onKeyPress:function(t){13===t.charCode&&e.onTagSubmit(t)},placeholder:"add a tag"}),y(f.Button,{id:"submit-tag",type:"submit",onClick:function(t){return e.onTagSubmit(t)}},void 0,"Add Tag")))))))}}]),t}(p.a.Component);t.default=T},"./node_modules/react-fontawesome/lib/index.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},p=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o("./node_modules/react/index.js"),d=n(l),f=o("./node_modules/react-fontawesome/node_modules/prop-types/index.js"),c=n(f),h=o("./node_modules/react-fontawesome/lib/screen-reader-styles.js"),m=n(h),y=function(e){function t(){a(this,t);var e=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.displayName="FontAwesome",e}return i(t,e),p(t,[{key:"render",value:function(){var e=this.props,t=e.border,o=e.cssModule,n=e.className,a=e.fixedWidth,s=e.flip,i=e.inverse,p=e.name,l=e.pulse,f=e.rotate,c=e.size,h=e.spin,y=e.stack,b=e.tag,g=void 0===b?"span":b,v=e.ariaLabel,_=r(e,["border","cssModule","className","fixedWidth","flip","inverse","name","pulse","rotate","size","spin","stack","tag","ariaLabel"]),w=[];return o?(w.push(o.fa),w.push(o["fa-"+p]),c&&w.push(o["fa-"+c]),h&&w.push(o["fa-spin"]),l&&w.push(o["fa-pulse"]),t&&w.push(o["fa-border"]),a&&w.push(o["fa-fw"]),i&&w.push(o["fa-inverse"]),s&&w.push(o["fa-flip-"+s]),f&&w.push(o["fa-rotate-"+f]),y&&w.push(o["fa-stack-"+y])):(w.push("fa"),w.push("fa-"+p),c&&w.push("fa-"+c),h&&w.push("fa-spin"),l&&w.push("fa-pulse"),t&&w.push("fa-border"),a&&w.push("fa-fw"),i&&w.push("fa-inverse"),s&&w.push("fa-flip-"+s),f&&w.push("fa-rotate-"+f),y&&w.push("fa-stack-"+y)),n&&w.push(n),d.default.createElement(g,u({},_,{"aria-hidden":!0,className:w.join(" ")}),v?d.default.createElement("span",{style:m.default},v):null)}}]),t}(d.default.Component);y.propTypes={ariaLabel:c.default.string,border:c.default.bool,className:c.default.string,cssModule:c.default.object,fixedWidth:c.default.bool,flip:c.default.oneOf(["horizontal","vertical"]),inverse:c.default.bool,name:c.default.string.isRequired,pulse:c.default.bool,rotate:c.default.oneOf([90,180,270]),size:c.default.oneOf(["lg","2x","3x","4x","5x"]),spin:c.default.bool,stack:c.default.oneOf(["1x","2x"]),tag:c.default.string},t.default=y,e.exports=t.default},"./node_modules/react-fontawesome/lib/screen-reader-styles.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={position:"absolute",width:"1px",height:"1px",padding:"0px",margin:"-1px",overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",border:"0px"},e.exports=t.default},"./node_modules/react-fontawesome/node_modules/prop-types/factoryWithThrowingShims.js":function(e,t,o){"use strict";function n(){}var r=o("./node_modules/react-fontawesome/node_modules/prop-types/lib/ReactPropTypesSecret.js");e.exports=function(){function e(e,t,o,n,a,s){if(s!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return o.checkPropTypes=n,o.PropTypes=o,o}},"./node_modules/react-fontawesome/node_modules/prop-types/index.js":function(e,t,o){e.exports=o("./node_modules/react-fontawesome/node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/react-fontawesome/node_modules/prop-types/lib/ReactPropTypesSecret.js":function(e,t,o){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}});