(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{6834:function(e,n,t){"use strict";t.d(n,"a",function(){return g});var r=t(52),a=t(5),i=t(0),c=t.n(i),o=t(28),l=t(20),u=t(171);function d(){var e=Object(a.a)(["\n  padding-top: 0.2rem;\n  display: inline-block;\n"]);return d=function(){return e},e}function s(){var e=Object(a.a)(["\n  margin-left: 0.5rem;\n  align-self: stretch;\n  flex: 1 1 auto;\n"]);return s=function(){return e},e}function f(){var e=Object(a.a)(["\n  margin: ",";\n  min-width: ",";\n  flex: 0 0 auto;\n  text-align: right;\n"]);return f=function(){return e},e}function m(){var e=Object(a.a)(["\n  display: flex;\n"]);return m=function(){return e},e}var v=o.default.div(m());v.displayName="IconLineWrap";var b=o.default.div(f(),function(e){var n=e.labelMargin;return void 0===n?"0.5rem 0.2rem 0 auto":n},function(e){var n=e.labelWidth,t=void 0===n?0:n,r=e.labelWidthUnits;return t+(void 0===r?l.d.DefaultSizeUnit:r)}),h=o.default.div(s()),p=o.default.div(d());h.displayName="IconLineChildren";var g=function(e){var n,t=e.icon,a=e.label,i=e.labelWidth,o=e.labelWidthUnits,d=e.labelMargin,s=e.children,f=Object(r.a)(e,["icon","label","labelWidth","labelWidthUnits","labelMargin","children"]);return t&&(n="string"===typeof t?c.a.createElement(u.a,{iconName:t,color:l.a.greyDark}):c.a.createElement(t,{nativeColor:l.a.greyDark})),c.a.createElement(v,f,c.a.createElement(b,{labelWidth:i,labelWidthUnits:o,labelMargin:d},n,a?c.a.createElement(p,null,a):null),c.a.createElement(h,null,s))}},6835:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var r=t(69),a=t(0),i=t.n(a),c=t(6842),o=t(82),l=function(e){var n=e.mutationName,t=e.children,a=Object(o.b)().user;return Object(r.useObserver)(function(){return a.canMutate(n)?i.a.createElement(i.a.Fragment,null,t):i.a.createElement(c.a,null,"No access to mutation ".concat(n))})}},6837:function(e,n,t){"use strict";t.d(n,"a",function(){return u});var r=t(57),a=t(0),i=t.n(a),c=t(6871),o=t(20),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.a)({},e,{control:function(n,t){var a=t.selectProps,i=a.width,c=a.minWidth,l=Object(r.a)({},n,{border:"1px solid ".concat(o.a.greyMiddle),margin:o.d.MarginAroundFormComponents,width:void 0!==i?"".concat(i,"rem"):"100%",minWidth:void 0!==c?"".concat(c,"rem"):"8rem"});return e.control?e.control(l,t):l},menu:function(n,t){var a=t.selectProps.width,i=Object(r.a)({},n,{zIndex:20,color:o.a.black,width:void 0!==a?"".concat(a,"rem"):"100%"});return e.menu?e.menu(i,t):i},valueContainer:function(n,t){var a=t.selectProps.maxHeight,i=Object(r.a)({},n,{maxHeight:void 0!==a?"".concat(a,"rem"):"100%",overflowY:void 0!==a?"scroll":"hidden"});return e.valueContainer?e.valueContainer(i,t):i}})};function u(e){return i.a.createElement(c.b,Object.assign({},e,{styles:l(e.styles)}))}},6841:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var r=t(69),a=t(0),i=t.n(a),c=t(6842),o=t(82),l=function(e){var n=e.queryName,t=e.children,a=Object(o.b)().user;return Object(r.useObserver)(function(){return a.canQuery(n)?i.a.createElement(i.a.Fragment,null,t):i.a.createElement(c.a,null,"No access to query ".concat(n))})}},6842:function(e,n,t){"use strict";t.d(n,"a",function(){return r});t(0);var r=function(e){e.children;return null}},6843:function(e,n,t){"use strict";t.d(n,"a",function(){return m});var r=t(5),a=t(0),i=t.n(a),c=t(28),o=t(6850),l=t(20);function u(){var e=Object(r.a)(["\n  height: 100%;\n"]);return u=function(){return e},e}function d(){var e=Object(r.a)(["\n  position: fixed;\n  bottom: 0.5rem;\n  width: ",";\n  left: ",";\n  top: ",";\n"]);return d=function(){return e},e}var s=c.default.div(d(),function(e){return void 0!==e.widthInColumns?"calc(("+e.widthInColumns+" * 6.22vw) - "+l.d.LayoutGridCellMargin+")":"calc(100vh - (2 * "+l.d.LayoutGridCellMargin+"))"},function(e){return void 0!==e.column?"calc(("+e.column+" * 6.22vw) + "+l.d.LayoutGridCellMargin+")":l.d.LayoutGridCellMargin},function(e){return void 0!==e.row?"calc(("+e.row+" * 3.9375rem) + "+l.d.LayoutGridCellMargin+")":"calc(3.9375rem + "+l.d.LayoutGridCellMargin+")"}),f=c.default.div(u()),m=function(e){var n=e.children,t=e.row,r=void 0===t?1:t,a=e.column,c=void 0===a?0:a,l=e.widthInColumns,u=void 0===l?16:l,d=e.withScrollArea,m=void 0!==d&&d,v=e.scrollAreaId;return i.a.createElement(s,{column:c,row:r,widthInColumns:u,withScrollArea:m},m?i.a.createElement(o.a,{id:v},n):i.a.createElement(f,null,n))}},6845:function(e,n,t){"use strict";t.d(n,"a",function(){return d});var r=t(5),a=t(0),i=t.n(a),c=t(28),o=t(20);function l(){var e=Object(r.a)(["\n  border-top: 1px solid ",";\n  margin: 0.25rem 0rem;\n"]);return l=function(){return e},e}var u=c.default.div(l(),o.a.greyLight),d=function(e){var n=e.visible;return void 0===n||n?i.a.createElement(u,null):null}},6847:function(e,n,t){"use strict";t.d(n,"a",function(){return f});var r=t(5),a=t(97),i=t(6893),c=t(0),o=t.n(c),l=t(28),u=t(34);function d(){var e=Object(r.a)(["\n  ","\n\n  color: ",";\n\n  &.interactive {\n    cursor: pointer;\n  }\n\n  &.invalid {\n    border: 1px red solid;\n  }\n\n  > div {\n    margin: 0.5rem 0.6rem;\n    display: inline-block;\n  }\n\n  > div.active {\n    font-weight: bolder;\n    text-decoration: underline;\n  }\n"]);return d=function(){return e},e}var s=l.default.div(d(),function(e){return""},function(e){var n=e.textColor;return n||"inherit"}),f=function(e){var n=e.items,t=e.formatItem,r=void 0===t?u.a.prop("displayName"):t,c=e.isMulti,l=void 0!==c&&c,d=e.isClearable,f=void 0!==d&&d,m=e.isInvalid,v=void 0!==m&&m,b=e.selectedItem,h=e.selectedItems,p=e.onSingleSelection,g=e.onMultiSelection,E=e.textColor,O=1===n.length,j=function(e){return 1!==n.length&&(l&&Array.isArray(h)?u.a.contains(e,h):u.a.equals(b,e))},y=function(e){O||(null===e?l&&g?g([]):p&&p(null):l&&g?j(e)?g(Array.isArray(h)?u.a.without([e],h):[e]):g(Array.isArray(h)?u.a.concat(h,[e]):[]):p&&p(e))};return o.a.createElement(s,{className:Object(i.cn)({invalid:v,interactive:!O}),textColor:E},f&&o.a.createElement("div",{className:Object(i.cn)({active:!(l?Array.isArray(h)&&h.length>0:null!==b&&void 0!==b)}),onClick:function(){y(null)}},o.a.createElement(a.Trans,{id:"optionselector.clear-filter"})),n.map(function(e,n){var t=r(e);return o.a.createElement("div",{key:n,className:Object(i.cn)({active:j(e)}),onClick:function(){y(e)}},t)}))}},6849:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var r=t(19),a=t(0),i=t.n(a),c=t(82);function o(e){var n=Object(c.b)().user;i.a.useEffect(function(){return Object(r.autorun)(function(){n.isReady&&n.hasSingleBranch&&e(n.branches[0])})})}},6850:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t(5);function a(){var e=Object(r.a)(["\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  height: 100%;\n"]);return a=function(){return e},e}var i=t(28).default.div(a())},6851:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var r=t(5),a=t(28);function i(){var e=Object(r.a)(["\n  position: absolute;\n  ",";\n  ",";\n"]);return i=function(){return e},e}var c=Object(a.default)("div")(i(),function(e){var n=e.position,t=void 0===n?"BottomRight":n;return"BottomLeft"===t||"TopLeft"===t?"left: 0":"right: 0"},function(e){var n=e.position,t=void 0===n?"BottomRight":n;return"BottomRight"===t||"BottomLeft"===t?"bottom: 0":"top: 0"})},6852:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(82),c=t(34),o=t(6857),l=t(52),u=t(6847),d=t(20),s=function(e){var n=e.branches,t=e.selectedBranch,r=e.selectedBranches,i=e.textColor,c=void 0===i?d.a.black:i,o=Object(l.a)(e,["branches","selectedBranch","selectedBranches","textColor"]);return a.a.createElement(u.a,Object.assign({items:n,selectedItem:t,selectedItems:r,textColor:c,formatItem:function(e){return a.a.createElement("span",{title:e.brand.name},e.name)}},o))};t.d(n,"a",function(){return f});var f=function(e){var n=e.breakpoint,t=void 0===n?3:n,r=e.selectedBranches,l=void 0===r?[]:r,u=e.isMulti,d=void 0!==u&&u,f=e.isClearable,m=void 0===f||f,v=e.hideWhenSingleBranch,b=void 0!==v&&v,h=e.textColor,p=e.onSelectionChange,g=e.onSelectionClear,E=e.getDropdownProps,O=void 0===E?function(){return{}}:E,j=Object(i.b)().user,y=function(e){return l.includes(e.id)},C={textColor:h,isClearable:m,isMulti:d,branches:j.branches,selectedBranch:j.branches.find(y),selectedBranches:j.branches.filter(y),onSingleSelection:function(e){null===e&&g?g():null!==e&&p&&p([e.id],[e])},onMultiSelection:function(e){0===e.length&&g?g():e.length&&p&&p(e.map(c.a.prop("id")),e)}};return j.hasSingleBranch&&b?null:j.branches.length<t?a.a.createElement(s,C):a.a.createElement(o.a,Object.assign({},C,O()))}},6857:function(e,n,t){"use strict";var r=t(57),a=t(52),i=t(97),c=t(0),o=t.n(c),l=t(5);function u(){var e=Object(l.a)(["\n  cursor: ",";\n"]);return u=function(){return e},e}var d=t(28).default.div(u(),function(e){var n=e.cursor;return void 0===n?"default":n}),s=function(e){var n=e.branch,t=e.onClick,r=e.short,a=void 0!==r&&r,i=e.showBrand,c=void 0===i||i;return o.a.createElement(d,{cursor:"pointer",onClick:t},a?n.name.substr(0,8):o.a.createElement(o.a.Fragment,null,o.a.createElement("span",null,n.name),c&&o.a.createElement("span",null," [".concat(n.brand.name,"]"))))},f=t(6837),m=t(34),v=t(43),b=t(20);t.d(n,"a",function(){return p});var h=function(e){var n=e.getStyles,t=e.innerProps,r=t.ref,c=Object(a.a)(t,["ref"]);return o.a.createElement("div",Object.assign({},c,{ref:r,style:n("clearIndicator",e)}),o.a.createElement("div",{style:{padding:"0px 5px"}},o.a.createElement(i.Trans,{id:"All"})))},p=function(e){var n=e.branches,t=e.selectedBranch,i=e.onSingleSelection,c=e.selectedBranches,l=e.onMultiSelection,u=Object(a.a)(e,["branches","selectedBranch","onSingleSelection","selectedBranches","onMultiSelection"]);return o.a.createElement(f.a,Object.assign({value:u.isMulti?c:t,placeholder:u.isMulti?v.b._("Filter branches..."):v.b._("Select a branch"),maxHeight:b.d.ButtonHeight,options:n,getOptionValue:m.a.prop("id"),formatOptionLabel:function(e){return o.a.createElement(s,{branch:e})},filterOption:function(e,n){return e.data.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())},closeMenuOnSelect:!u.isMulti,components:{ClearIndicator:h},styles:{clearIndicator:function(e){return Object(r.a)({},e,{cursor:"pointer"})}},onChange:function(e){u.isMulti&&l&&Array.isArray(e)&&l(e),!u.isMulti&&i&&(Array.isArray(e)?i(m.a.head(e)||null):i(e||null))}},u))}},6865:function(e,n,t){"use strict";t.d(n,"a",function(){return p});var r=t(5),a=t(104),i=t(84),c=t(72),o=t(199),l=t(0),u=t.n(l),d=t(28),s=t(6874),f=t(20);function m(){var e=Object(r.a)(["\n  background: ",";\n  border: 2px solid ",";\n  width: 0.6rem;\n  height: 0.6rem;\n  border-radius: 0.7rem;\n  position: absolute;\n"]);return m=function(){return e},e}function v(){var e=Object(r.a)(["\n  padding: 0.2rem 0.3rem 0.1rem 0.3rem;\n"]);return v=function(){return e},e}var b=Object(o.a)(v()),h=d.default.div(m(),f.a.white,f.a.greyMiddle),p=function(e){var n=e.deliverAt,t=e.deliveredAt,r=e.isCancelled,o=void 0!==r&&r,l=e.isDelayed,d=void 0!==l&&l,f=e.onClick,m=!(t||o),v=Object(i.useTimer)({interval:i.MINUTE,enabled:m}),p=s.a.UNKNOWN;if(o)return u.a.createElement(s.b,{variant:p,className:b},u.a.createElement(a.e,null));if(!n)return u.a.createElement(s.b,{variant:p},"\u2754");var g=Object(c.differenceInMinutes)(n,t||v);return p=g>20?s.a.NORMAL:g>0?s.a.WARNING:s.a.CRITICAL,u.a.createElement(u.a.Fragment,null,d&&u.a.createElement(h,null),u.a.createElement(s.b,{minutes:g,variant:p,onClick:f}))}},6866:function(e,n,t){"use strict";t.d(n,"a",function(){return u});var r=t(52),a=t(0),i=t.n(a),c=t(83),o=t(6835),l=t(6841),u=function(e){var n=e.route,t=e.component,u=e.canQuery,d=e.canMutate,s=Object(r.a)(e,["route","component","canQuery","canMutate"]),f=n?i.a.createElement(c.b,{to:n},Object(a.createElement)(t)):Object(a.createElement)(t);return u&&(f=i.a.createElement(l.a,{queryName:u},f)),d&&(f=i.a.createElement(o.a,{mutationName:d},f)),i.a.createElement("div",s,f)}},6867:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t(5);function a(){var e=Object(r.a)(["\n  color: inherit;\n  text-decoration-color: rgba(0, 0, 0, 0.08);\n  &:hover {\n    text-decoration-color: rgba(0, 0, 0, 0.5);\n  }\n  &:visited {\n    text-decoration-color: rgba(0, 0, 0, 0.08);\n  }\n"]);return a=function(){return e},e}var i=t(28).default.a(a())},6874:function(e,n,t){"use strict";t.d(n,"a",function(){return a}),t.d(n,"b",function(){return k});var r,a,i=t(197),c=t(5),o=t(199),l=t(0),u=t.n(l),d=t(28),s=t(20);function f(){var e=Object(c.a)(["\n  cursor: pointer;\n"]);return f=function(){return e},e}function m(){var e=Object(c.a)(["\n  font-size: 1.7rem;\n  font-weight: bold;\n"]);return m=function(){return e},e}function v(){var e=Object(c.a)(["\n  font-size: 0.8rem;\n"]);return v=function(){return e},e}function b(){var e=Object(c.a)(["\n    background: ",";\n  "]);return b=function(){return e},e}function h(){var e=Object(c.a)(["\n    background: ",";\n    color: ",";\n    font-weight: bold;\n  "]);return h=function(){return e},e}function p(){var e=Object(c.a)(["\n    background: ",";\n  "]);return p=function(){return e},e}function g(){var e=Object(c.a)([""]);return g=function(){return e},e}function E(){var e=Object(c.a)(["\n  height: 2rem;\n  line-height: 2rem;\n  width: 2rem;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 1px solid white;\n  color: ",";\n  background: ",";\n  text-align: center;\n  font-family: 'Open Sans', sans-serif;\n"]);return E=function(){return e},e}!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.CRITICAL=1]="CRITICAL",e[e.WARNING=2]="WARNING",e[e.NORMAL=3]="NORMAL"}(a||(a={}));var O=d.default.div(E(),s.a.white,s.a.greyMiddle),j=(r={},Object(i.a)(r,a.UNKNOWN,Object(d.default)(O)(g())),Object(i.a)(r,a.CRITICAL,Object(d.default)(O)(p(),s.a.red)),Object(i.a)(r,a.WARNING,Object(d.default)(O)(h(),s.a.orange,s.a.black)),Object(i.a)(r,a.NORMAL,Object(d.default)(O)(b(),s.a.green)),r),y=Object(o.a)(v()),C=Object(o.a)(m()),w=Object(o.a)(f()),k=function(e){var n=e.minutes,t=e.className,r=e.children,i=e.variant,c=e.onClick,l=j[i],d=r,s=["animated"];return void 0!==n&&((n>99||n<-9)&&s.push(y),n<-99?(d="\u2012",s.push(C)):d=n.toString()),c&&s.push(w),u.a.createElement(l,{key:n,onClick:c,className:o.b.apply(void 0,[t,{heartBeat:i===a.CRITICAL&&n>0,pulse:i===a.WARNING}].concat(s))},d)}},6875:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t(0),a=t.n(r),i=function(e){var n=e.customer;return n?a.a.createElement("span",null,"".concat(n.lastName?"".concat(n.firstName," ").concat(n.lastName):n.defaultPhone?n.defaultPhone.phone:"")):a.a.createElement("i",null,"unknown")}},6887:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t(69),a=t(191);function i(e){Object(r.useDisposable)(function(){return Object(a.b)(e)})}},6888:function(e,n,t){"use strict";t.d(n,"a",function(){return b});var r=t(5),a=t(0),i=t.n(a),c=t(28),o=t(6845),l=t(6834),u=t(43),d=t(20);function s(){var e=Object(r.a)(["\n  color: ",";\n  margin-left: 0.5rem;\n"]);return s=function(){return e},e}function f(){var e=Object(r.a)(["\n  color: ",";\n"]);return f=function(){return e},e}var m=c.default.span(f(),d.a.orange),v=c.default.span(s(),d.a.greyDark),b=function(e){var n=e.note,t=e.previousNote;return n||t?i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,null),i.a.createElement(l.a,{icon:"note",labelMargin:"0"},i.a.createElement(m,null,n||u.b._("Without note").toLocaleLowerCase()),i.a.createElement(v,null,t))):null}},6890:function(e,n,t){"use strict";var r=t(5),a=t(97),i=t(151),c=t.n(i),o=t(0),l=t.n(o),u=t(347),d=t(28),s=t(41),f=t(248),m=t(20),v=t(6875),b=t(6865),h=t(171);function p(){var e=Object(r.a)(["\n  display: inline-block;\n  position: absolute;\n  right: 3.8rem;\n  top: 0;\n"]);return p=function(){return e},e}var g=d.default.div(p()),E=function(e){return l.a.createElement(g,null,l.a.createElement(h.a,{iconName:"star",color:m.a.orange}))};function O(){var e=Object(r.a)(["\n  font-style: italic;\n  color: ",";\n"]);return O=function(){return e},e}function j(){var e=Object(r.a)(["\n  padding: 0.3rem 0.6rem;\n  display: inline-block;\n  border-top-left-radius: ",";\n  background-color: ",";\n  color: ",";\n"]);return j=function(){return e},e}function y(){var e=Object(r.a)(["\n  color: ",";\n"]);return y=function(){return e},e}function C(){var e=Object(r.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0.1rem;\n    right: -0.3rem;\n    left: 0.9rem;\n    bottom: 0.3rem;\n    border-top: 2px solid ",";\n    transform: rotate(13deg);\n    transform-origin: 0% 0%;\n    opacity: 0.7;\n  }\n"]);return C=function(){return e},e}function w(){var e=Object(r.a)(["\n  flex: 0 0 3.5rem;\n  text-align: right;\n  position: relative;\n"]);return w=function(){return e},e}function k(){var e=Object(r.a)(["\n  flex: 1 0;\n  padding: 0 0 0 0.5rem;\n"]);return k=function(){return e},e}function N(){var e=Object(r.a)(["\n  flex: 1 0;\n  padding: 0 0 0 0.5rem;\n"]);return N=function(){return e},e}function x(){var e=Object(r.a)(["\n  flex: 0 0 2rem;\n"]);return x=function(){return e},e}function A(){var e=Object(r.a)(["\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  padding: 0.4rem;\n"]);return A=function(){return e},e}function I(){var e=Object(r.a)(["\n  text-align: left;\n  cursor: pointer;\n  &:hover {\n    background-color: ",";\n  }\n  &:active {\n    background-color: ",";\n  }\n"]);return I=function(){return e},e}t.d(n,"b",function(){return P}),t.d(n,"a",function(){return U});var M=Object(d.default)(u.Element)(I(),c()(m.a.turquoise).alpha(.05).string(),c()(m.a.turquoise).alpha(.2).string()),S=d.default.div(A()),T=d.default.div(x()),L=d.default.div(N()),B=d.default.div(k()),R=d.default.div(w()),D=d.default.div(C(),m.a.orange),F=d.default.div(y(),m.a.orange),P=d.default.div(j(),m.c.Card,m.a.green,m.a.white),W=d.default.div(O(),m.a.violet),U=function(e){var n=e.order,t=e.isCancelled,r=e.showBranch,i=e.onClick;return l.a.createElement(M,{onClick:i,name:"order-".concat(n.id)},r&&l.a.createElement(P,null,n.companyBranch.name),l.a.createElement(S,null,l.a.createElement(T,null,l.a.createElement(b.a,{deliverAt:n.deliverAt?new Date(n.deliverAt):null,deliveredAt:n.deliveredAt?new Date(n.deliveredAt):null,isCancelled:t,isDelayed:null!==n.delayedDeliveryTime})),l.a.createElement(L,null,n.deliveryType&&n.deliveryType.enum===s.a.Pickup?l.a.createElement(W,null,l.a.createElement(a.Trans,{id:"To pickup"})):Object(f.a)(n.address)),l.a.createElement(B,null,l.a.createElement(v.a,{customer:n.customer})),l.a.createElement(R,null,n.isPriority&&l.a.createElement(E,null),n.totalSum.formattedValue,n.isPaidWithCard&&l.a.createElement(l.a.Fragment,null,l.a.createElement(D,null),l.a.createElement(F,null,l.a.createElement(a.Trans,{id:"Paid"}))))))}},6894:function(e,n,t){var r={"./cs.svg":6895,"./de.svg":6896,"./en.svg":6897,"./pl.svg":6898,"./sk.svg":6899};function a(e){var n=i(e);return t(n)}function i(e){var n=r[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=6894},6900:function(e,n,t){var r={"./logo-doveze.svg":6901,"./logo-gopay.svg":6902,"./logo-mastercard.svg":6903,"./logo-visa.svg":6904};function a(e){var n=i(e);return t(n)}function i(e){var n=r[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=6900},6962:function(e,n,t){"use strict";t.d(n,"a",function(){return d});var r=t(69),a=t(0),i=t.n(a),c=t(82),o=t(6849),l=t(6852),u=t(20),d=function(){var e=Object(c.b)().order;return Object(o.a)(function(n){e.list.setBranchFilter([n.id])}),Object(r.useObserver)(function(){return i.a.createElement(l.a,{selectedBranches:Array.from(e.list.branches),onSelectionChange:function(n){e.list.setBranchFilter(n)},onSelectionClear:e.list.clearBranchFilter,textColor:u.a.turquoise,isMulti:!0,isClearable:!1,hideWhenSingleBranch:!0})})}},7994:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(76),c=t(115),o=t(5),l=t(28),u=t(41),d=t(43),s=t(341),f=t(6843),m=t(6866),v=t(20),b=t(6962),h=t(97),p=t(69),g=t(82),E=t(34),O=t(6867),j=t(248),y=t(6875),C=t(6865),w=t(6890),k=t(6851),N=t(6845),x=t(6888),A=t(104),I=t(6834);function M(){var e=Object(o.a)(["\n  color: ",";\n  font-weight: bold;\n  display: inline-block;\n  margin-left: 0.3rem;\n"]);return M=function(){return e},e}function S(){var e=Object(o.a)(["\n  color: ",";\n"]);return S=function(){return e},e}var T=l.default.span(S(),v.a.greyDark),L=l.default.div(M(),v.a.black),B=function(e){switch(e.deliverType){case"DELIVER_UNTIL":return a.a.createElement(T,null,a.a.createElement(h.Trans,{id:"Deliver until"}));case"DELIVER_AT_SPECIFIC_TIME":return a.a.createElement(T,null,a.a.createElement(h.Trans,{id:"Deliver at"}));case"PERSONAL":return a.a.createElement(T,null,a.a.createElement(h.Trans,{id:"Personal pickup at"}));default:return null}},R=function(e){var n=e.deliverTime,t=e.deliverType;return a.a.createElement(I.a,{icon:A.a,labelMargin:"0"},a.a.createElement(B,{deliverType:t}),n&&a.a.createElement(L,null,Object(j.f)(n)))},D=t(98);function F(){var e=Object(o.a)(["\n  background: ",";\n  border-radius: 50%;\n  margin: 0;\n  width: 70%;\n  height: 70%;\n  overflow: auto;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n"]);return F=function(){return e},e}function P(){var e=Object(o.a)(["\n  background: ",";\n  border: 2px solid ",";\n  width: 2.1rem;\n  height: 2.1rem;\n  position: relative;\n  border-radius: 50%;\n  margin-bottom: ",";\n"]);return P=function(){return e},e}var W=l.default.div(P(),v.a.white,v.a.green,v.d.Small),U=l.default.div(F(),v.a.green),_=function(e){var n=e.isChecked,t=e.onClick;return a.a.createElement(W,{onClick:t},n&&a.a.createElement(U,null))};function G(){var e=Object(o.a)(["\n  flex: 1 0;\n  color: ",";\n  margin-top: 0.35rem;\n"]);return G=function(){return e},e}function z(){var e=Object(o.a)(["\n  flex: 0 0 4.1rem;\n  font-size: ",";\n  color: ",";\n  margin-top: 0.35rem;\n"]);return z=function(){return e},e}function q(){var e=Object(o.a)(["\n  flex: 0 0 2.4rem;\n"]);return q=function(){return e},e}function K(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  ",";\n"]);return K=function(){return e},e}function H(){var e=Object(o.a)(["\n  margin-top: -0.8rem;\n"]);return H=function(){return e},e}var V=Object(l.css)(H()),Q=l.default.div(K(),function(e){return e.isFirstSidedish&&V}),J=l.default.div(q()),Y=l.default.div(z(),v.b.CompactCardBig,v.a.black),X=l.default.div(G(),v.a.greyMiddle),Z=function(e){var n=e.recipeId,t=e.code,r=e.label,i=e.isDone,c=e.isCheckable,o=e.isFirstSidedish,l=void 0!==o&&o,d=Object(u.G)(),s=Object(D.a)(d,1)[0];return a.a.createElement(Q,{isFirstSidedish:l},a.a.createElement(J,null,c&&a.a.createElement(_,{isChecked:i,onClick:function(){n&&s({recipeId:n,state:i?u.k.Preparing:u.k.Cooked})}})),a.a.createElement(Y,null,t),a.a.createElement(X,null,r))},$=function(e){var n=e.orderWares,t=e.isCheckable;return a.a.createElement("div",null,n.map(function(e){return a.a.createElement(r.Fragment,{key:e.id},a.a.createElement(Z,{recipeId:e.id,code:e.recipe.code,label:e.recipe.nameLabel,isDone:e.orderRecipeState.enum===u.k.Cooked,isCheckable:t}),a.a.createElement(a.a.Fragment,null,e.sidedishes.map(function(n,r){return a.a.createElement(Z,{key:"".concat(e.id,"-").concat(n.id),recipeId:n.id,code:"+".concat(n.recipe.code),label:n.recipe.nameLabel,isDone:!1,isCheckable:!1,isFirstSidedish:0===r&&t})})))}))},ee=t(6835),ne=t(145),te=function(e){var n=e.orderId,t=Object(u.K)(),r=Object(D.a)(t,1)[0];return a.a.createElement(ee.a,{mutationName:"addOrderState"},a.a.createElement(ne.a,{iconName:"keyboard_arrow_right",width:v.d.ButtonHeight+v.d.DefaultSizeUnit,color:v.a.green,onClick:function(){r({orderId:n,state:u.m.InProduce})}}))},re=t(171);function ae(){var e=Object(o.a)(["\n  display: inline-block;\n  position: absolute;\n  right: 0.2rem;\n  top: 0.2rem;\n  z-index: 5;\n"]);return ae=function(){return e},e}var ie=l.default.div(ae()),ce=function(e){return a.a.createElement(ie,null,a.a.createElement(re.a,{iconName:"star",color:v.a.orange}))};function oe(){var e=Object(o.a)(["\n  padding: 0 0.2rem 0.1rem 0.2rem;\n  position: relative;\n"]);return oe=function(){return e},e}var le=l.default.div(oe()),ue=function(e){var n=e.order;return a.a.createElement(le,null,a.a.createElement(N.a,null),n.isPriority&&a.a.createElement(ce,null),a.a.createElement($,{orderWares:n.items,isCheckable:n.orderStateCategory===u.l.Preparing||n.orderStateCategory===u.l.ReadyToDeliver}),a.a.createElement(N.a,null),a.a.createElement(R,{deliverTime:n.deliverAt,deliverType:n.deliveryType&&n.deliveryType.enum===u.a.Pickup?"PERSONAL":"DELIVER_UNTIL"}),a.a.createElement(x.a,{note:n.note,previousNote:n.previousNote}),n.orderStateCategory===u.l.NewOrders&&a.a.createElement(k.a,{position:"BottomRight"},a.a.createElement(te,{orderId:n.id})))};function de(){var e=Object(o.a)(["\n  font-style: italic;\n"]);return de=function(){return e},e}function se(){var e=Object(o.a)(["\n  flex: 1 0;\n  padding: 0 0 0 0.5rem;\n"]);return se=function(){return e},e}function fe(){var e=Object(o.a)(["\n  flex: 1 0;\n  padding: 0 0 0 0.5rem;\n"]);return fe=function(){return e},e}function me(){var e=Object(o.a)(["\n  flex: 0 0 1.8rem;\n"]);return me=function(){return e},e}function ve(){var e=Object(o.a)(["\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  padding: 0.2rem;\n  color: ",";\n"]);return ve=function(){return e},e}function be(){var e=Object(o.a)(["\n  font-size: ",";\n  background-color: ",";\n  color: ",";\n  border-radius: ",";\n  margin-bottom: ",";\n  margin-right: ",";\n  position: relative;\n"]);return be=function(){return e},e}var he=l.default.div(be(),v.b.CompactCard,v.a.white,v.a.greyDarkest,v.c.Card,v.d.Middle,v.d.Middle),pe=l.default.div(ve(),v.a.greyMiddle),ge=l.default.div(me()),Ee=l.default.div(fe()),Oe=l.default.div(se()),je=l.default.div(de()),ye=function(e){var n=e.order,t=e.showBranch;return a.a.createElement(he,null,t&&a.a.createElement(w.b,null,n.companyBranch.name),a.a.createElement(pe,null,a.a.createElement(ge,null,a.a.createElement(C.a,{deliverAt:n.deliverAt?new Date(n.deliverAt):null,deliveredAt:n.deliveredAt?new Date(n.deliveredAt):null,isCancelled:!1,isDelayed:null!==n.delayedDeliveryTime})),a.a.createElement(Ee,null,n.deliveryType&&n.deliveryType.enum===u.a.Pickup?a.a.createElement(je,null,a.a.createElement(h.Trans,{id:"To pickup"})):Object(j.a)(n.address)),a.a.createElement(Oe,null,a.a.createElement(y.a,{customer:n.customer}),a.a.createElement("br",null),n.customer&&n.customer.defaultPhone?a.a.createElement(O.a,{href:"tel:".concat(n.customer.defaultPhone.phone.toString().replace("/ /g",""))},n.customer.defaultPhone.phone):null)),a.a.createElement(ue,{order:n}))},Ce=t(112),we=t(6887),ke=[u.l.NewOrders,u.l.Preparing,u.l.ReadyToDeliver],Ne=a.a.createContext({loading:!0,noFilter:!0,orders:[]}),xe=Ce.RM.sortWith([Ce.RM.descend(Ce.RM.prop("isPriority")),Ce.RM.ascend(Ce.RM.either(Ce.RM.prop("deliverAt"),Ce.RM.prop("createdAt")))]),Ae=Object(p.observer)(function(e){var n=Object(g.b)().order,t=!n.list.hasBranchFilter,r=Object(u.W)({branches:n.list.branchesFilter,categories:ke},{skip:t}),i=r.data,c=r.loading,o=r.updateQuery,l=r.refetch;return Object(we.a)(l),Object(u.wb)({branches:n.list.branchesFilter,categories:ke.concat(u.l.Finished)},{skip:t,onSubscriptionData:function(e){var n=e.subscriptionData.data;n&&o(function(e){return function(e,n){var t=e.updatedOrder.order;if(!t)return n;if(!ke.includes(t.orderStateCategory))return{orders:n.orders.filter(function(e){return e.id!==t.id})};var r=!1,a=n.orders.map(function(e){return e.id===t.id?(r=!0,t):e});r||a.unshift(t);return{orders:a}}(n,e)})}}),a.a.createElement(Ne.Provider,{value:{loading:c,noFilter:t,orders:c?[]:xe(i.orders)}},e.children)});function Ie(){var e=Object(o.a)(["\n  margin: 0 0.5rem;\n"]);return Ie=function(){return e},e}var Me=l.default.div(Ie()),Se=Object(p.observer)(function(e){var n=e.category,t=Object(g.b)().order,r=a.a.useContext(Ne),i=r.loading,c=r.noFilter,o=r.orders;if(c)return a.a.createElement(Me,null,a.a.createElement(h.Trans,{id:"Select a branch"}));if(i)return a.a.createElement(Me,null,a.a.createElement(h.Trans,{id:"Loading"}));var l=o.filter(E.a.propEq("orderStateCategory",n));if(0===l.length)switch(n){case u.l.NewOrders:return a.a.createElement(Me,null,a.a.createElement(h.Trans,{id:"No new orders"}));case u.l.Preparing:return a.a.createElement(Me,null,a.a.createElement(h.Trans,{id:"No orders to prepare"}));case u.l.ReadyToDeliver:return a.a.createElement(Me,null,a.a.createElement(h.Trans,{id:"No orders to deliver"}));default:return a.a.createElement(Me,null,a.a.createElement(h.Trans,{id:"No orders"}))}return a.a.createElement(a.a.Fragment,null,l.map(function(e){return a.a.createElement(ye,{key:e.id,order:e,showBranch:t.list.branchesFilter.length>1})}))});function Te(){var e=Object(o.a)(["\n  border: 1px solid ",";\n  width: 1px;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: -0.5rem;\n"]);return Te=function(){return e},e}var Le=l.default.div(Te(),v.a.white),Be=function(){return a.a.createElement(Ae,null,a.a.createElement(f.a,{withScrollArea:!0,row:1,widthInColumns:5},a.a.createElement(Se,{category:u.l.NewOrders})),a.a.createElement(f.a,{withScrollArea:!0,row:1,column:5,widthInColumns:6},a.a.createElement(Se,{category:u.l.Preparing}),a.a.createElement(Le,null)),a.a.createElement(f.a,{withScrollArea:!0,row:1,column:11,widthInColumns:5},a.a.createElement(Se,{category:u.l.ReadyToDeliver}),a.a.createElement(Le,null)),a.a.createElement(s.a,{pageTitle:d.b._("Kitchen"),useBackButton:!0,layouts:[{i:"filter",x:4,y:0,w:10,h:1}]},a.a.createElement(m.a,{key:"filter",component:function(){return a.a.createElement(b.a,null)}})))};t.d(n,"KitchenRoutes",function(){return Re});var Re=function(e){var n=e.match;return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.Switch,null,a.a.createElement(c.a,{exact:!0,path:n.path,component:Be})))};n.default=Re}}]);
//# sourceMappingURL=179.3fe0c3de.chunk.js.map