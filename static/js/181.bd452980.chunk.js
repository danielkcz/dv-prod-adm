(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{6843:function(e,n,t){"use strict";t.d(n,"a",function(){return m});var r=t(5),a=t(0),o=t.n(a),i=t(28),c=t(6850),u=t(20);function l(){var e=Object(r.a)(["\n  height: 100%;\n"]);return l=function(){return e},e}function d(){var e=Object(r.a)(["\n  position: fixed;\n  bottom: 0.5rem;\n  width: ",";\n  left: ",";\n  top: ",";\n"]);return d=function(){return e},e}var f=i.default.div(d(),function(e){return void 0!==e.widthInColumns?"calc(("+e.widthInColumns+" * 6.22vw) - "+u.d.LayoutGridCellMargin+")":"calc(100vh - (2 * "+u.d.LayoutGridCellMargin+"))"},function(e){return void 0!==e.column?"calc(("+e.column+" * 6.22vw) + "+u.d.LayoutGridCellMargin+")":u.d.LayoutGridCellMargin},function(e){return void 0!==e.row?"calc(("+e.row+" * 3.9375rem) + "+u.d.LayoutGridCellMargin+")":"calc(3.9375rem + "+u.d.LayoutGridCellMargin+")"}),s=i.default.div(l()),m=function(e){var n=e.children,t=e.row,r=void 0===t?1:t,a=e.column,i=void 0===a?0:a,u=e.widthInColumns,l=void 0===u?16:u,d=e.withScrollArea,m=void 0!==d&&d,b=e.scrollAreaId;return o.a.createElement(f,{column:i,row:r,widthInColumns:l,withScrollArea:m},m?o.a.createElement(c.a,{id:b},n):o.a.createElement(s,null,n))}},6844:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var r=t(5);function a(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: ",";\n"]);return a=function(){return e},e}var o=t(28).default.div(a(),function(e){var n=e.justify;return void 0===n?"space-between":n})},6846:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var r=t(5);function a(){var e=Object(r.a)(["\n  height: ",";\n"]);return a=function(){return e},e}var o=t(28).default.div(a(),function(e){var n=e.size,t=void 0===n?1:n,r=e.sizeUnit,a=void 0===r?"rem":r;return"".concat(t).concat(a)});o.displayName="VerticalGap"},6850:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var r=t(5);function a(){var e=Object(r.a)(["\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  height: 100%;\n"]);return a=function(){return e},e}var o=t(28).default.div(a())},6873:function(e,n,t){"use strict";t.d(n,"a",function(){return s}),t.d(n,"b",function(){return m});var r=t(98),a=t(6856),o=t(6831),i=t.n(o),c=t(6961),u=t(0),l=t.n(u),d=t(20),f=(l.a.createContext(null),["places"]),s=function(e){var n=e.model,t=e.children,o=l.a.useState(!1),i=Object(r.a)(o,2),u=i[0],s=i[1],m={streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1};return l.a.createElement(a.LoadScript,{id:"script-loader",googleMapsApiKey:"AIzaSyAMytFvlKm4fxw8LCcMHofNDHcrJ8ibOTY",language:"cz",region:"CS",libraries:f,version:"weekly",onLoad:function(){return s(!0)}},u?l.a.createElement(c.a,null,function(){return l.a.createElement(a.GoogleMap,{zoom:n.zoom,center:n.center,onCenterChanged:n.updatePosition,onZoomChanged:n.updateZoom,onLoad:n.setMapRef,options:m,mapContainerStyle:{borderRadius:d.c.Card,overflow:"hidden",height:"100%"}},t)}):null)};function m(){var e=Object(u.useContext)(i.a);if(!e)throw new Error("Trying to useGoogleMap, but BaseMap is missing in the tree");return e}},6910:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var r=t(5),a=t(28),o=t(20);function i(){var e=Object(r.a)(["\n  color: ",";\n  font-weight: lighter;\n  font-size: 1.2rem;\n  margin: 0.8rem 0 0.8rem 0.3rem;\n"]);return i=function(){return e},e}var c=a.default.h2(i(),o.a.greyLight)},6914:function(e,n,t){"use strict";t.d(n,"a",function(){return h});var r=t(57),a=t(52),o=t(62),i=t(66),c=t(74),u=t(73),l=t(75),d=t(0),f=t.n(d),s=t(6832),m=t(34),b=t(43),v=t(6837),h=function(e){function n(){var e,t;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(c.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(a)))).validate=function(e){return t.props.isRequired&&!e?b.b._("{0} must be selected",{0:t.props.validatioName}):null},t}return Object(l.a)(n,e),Object(i.a)(n,[{key:"getControlProps",value:function(e){var n=this.props,t=n.isMulti,r=n.options,a=n.getOptionValue,o=n.defaultValue,i=e.value||o;if(t){var c=Array.isArray(i)?function(e){return i.includes(a(e))}:m.a.F;return{value:Array.isArray(r)?r.filter(c):[],onChange:function(n){e.setValue(n.map(a))}}}return{value:i&&r.find(function(e){return a(e)===i}),onChange:function(n){e.setValue(a(n))}}}},{key:"render",value:function(){var e=this,n=this.props,t=n.field,o=n.fieldIsPure,i=void 0!==o&&o,c=(n.isRequired,n.defaultValue,Object(a.a)(n,["field","fieldIsPure","isRequired","defaultValue"]));return f.a.createElement(s.Field,{field:t,validate:this.validate,pure:i},function(n){return f.a.createElement(v.a,Object.assign({},e.getControlProps(n),{onFocus:function(){return n.setTouched(!0)},styles:{control:function(e){return Boolean(n.error)?Object(r.a)({},e,{borderColor:"red"}):e}}},c))})}}]),n}(f.a.Component);h.defaultProps={validatioName:"Value",getItemId:m.a.prop("id")}},6915:function(e,n,t){"use strict";t.d(n,"a",function(){return f});var r=t(5),a=t(0),o=t.n(a),i=t(6877),c=t(28),u=t(171);function l(){var e=Object(r.a)(["\n  padding: 1rem 0.4rem;\n  cursor: grab;\n"]);return l=function(){return e},e}var d=c.default.div(l()),f=Object(i.SortableHandle)(function(){return o.a.createElement(d,null,o.a.createElement(u.a,{iconName:"reorder"}))})},6922:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var r=t(0),a=function(e){return Object(r.useEffect)(function(){e.isShow&&(window.confirm(e.confirmText)?e.onConfirm():e.onCancel())},[e.isShow]),null}},7993:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(76),i=t(200),c=t(43),u=t(341),l=t(6843),d=t(21),f=t.n(d),s=t(35),m=t(98),b=t(5),v=t(19),h=t(69),p=t(6832),g=t(360),E=t(28),O=t(6835),j=t(195),y=t(6922),w=t(340),C=t(82),z=t(41),x=t(45),k=t(34),S=t(198),F=t(6870),B=t(20),P=t(84);function I(){return Object(P.useRouterContext)().match.params.zoneId}function Z(){var e=Object(C.b)(),n=e.user,t=e.zone,r=Object(P.useRouterContext)().history,a=function(e){return"".concat("/settings/zones","/").concat(e)};return{getRouteToZone:a,routeToZoneEdit:function(e){t.map.panToZone(e),n.canQuery("zone")&&r.push(a(e))},routeToZoneList:function(){r.push("/settings/zones")}}}var L=t(97),M=t(6911),R=t(6838),_=t(6840),A=t(6834),T=t(6860);function D(){var e=Object(b.a)(["\n  border-left: 3px solid #707070;\n  width: 3px;\n  position: relative;\n  left: -2rem;\n  height: 4rem;\n  float: left;\n  margin: -0.5rem 0 0 0;\n"]);return D=function(){return e},e}function N(){var e=Object(b.a)(["\n  position: relative;\n  left: 4rem;\n  top: -0.3rem;\n  width: 3rem;\n"]);return N=function(){return e},e}function V(){var e=Object(b.a)(["\n  position: relative;\n  left: 8rem;\n  top: 0rem;\n"]);return V=function(){return e},e}function G(){var e=Object(b.a)(["\n  color: ",";\n"]);return G=function(){return e},e}function q(){var e=Object(b.a)(["\n  width: 3rem;\n  position: relative;\n  z-index: 4;\n"]);return q=function(){return e},e}function H(){var e=Object(b.a)(["\n  min-width: 2rem;\n  display: inline-block;\n"]);return H=function(){return e},e}var U=E.default.div(H()),W=Object(E.default)(R.a)(q()),J=Object(E.default)(W)(G(),B.a.blue),K=E.default.div(V()),Y=E.default.div(N()),$=E.default.div(D()),Q=function(e){if("number"===typeof e)return null;var n=e.trim();return n.length&&Number.isNaN(Number.parseFloat(n))?c.b._("Must be number"):null},X=a.a.forwardRef(function(e,n){var t=e.field,r=e.label,o=e.isDeliveryPrice,i=e.autoFocus,c=void 0!==i&&i;return o?a.a.createElement(K,null,a.a.createElement($,null),a.a.createElement(U,null,r),a.a.createElement(J,{field:t,validate:Q,ref:n})):a.a.createElement(Y,null,a.a.createElement(W,{field:t,validate:Q,autoFocus:c}))}),ee=t(147),ne=t(57),te=t(6914),re=t(201),ae=t(507);function oe(){var e=Object(b.a)(["\n  background-color: ",";\n  color: ",";\n  width: 6rem;\n  padding: 0.4rem 1rem;\n  margin: 0;\n  height: 100%;\n"]);return oe=function(){return e},e}var ie=E.default.div(oe(),function(e){return e.color},B.a.white),ce=Object(re.a)(ae.a),ue=function(e){var n=e.field,t=void 0===n?"zoneColor.id":n;return a.a.createElement(ce,{render:function(e){var n=e.zoneColors;return a.a.createElement(te.a,{field:t,fieldIsPure:!0,options:Object(ee.a)(n),width:8,styles:{option:function(e){return Object(ne.a)({},e,{padding:0,margin:0})},menu:function(e){return Object(ne.a)({},e,{width:"8rem",maxWidth:"8rem"})}},defaultValue:k.a.head(n),getOptionValue:k.a.prop("id"),formatOptionLabel:function(e){return a.a.createElement(ie,{color:e.color},e.code)}})}})},le=t(145),de=t(6839);function fe(){var e=Object(b.a)(["\n  margin: 0 0 0 1rem;\n"]);return fe=function(){return e},e}function se(){var e=Object(b.a)(["\n  width: 3rem;\n  position: relative;\n  z-index: 4;\n"]);return se=function(){return e},e}function me(){var e=Object(b.a)(["\n  width: 3rem;\n  display: inline-block;\n"]);return me=function(){return e},e}var be=E.default.div(me()),ve=Object(E.default)(de.a)(se()),he=E.default.div(fe()),pe=function(e){var n=e.label,t=e.display;return a.a.createElement(he,null,a.a.createElement(be,null,n),a.a.createElement(ve,{disabled:!0,placeholder:t}))};function ge(){var e=Object(b.a)(["\n  position: relative;\n  top: -7rem;\n  left: 16rem;\n  height: 0;\n"]);return ge=function(){return e},e}function Ee(){var e=Object(b.a)(["\n  position: relative;\n  top: -6rem;\n"]);return Ee=function(){return e},e}var Oe=E.default.div(Ee()),je=E.default.div(ge()),ye=function(e){var n=e.fieldApi;return a.a.createElement(a.a.Fragment,null,n.values.map(function(e,t,o){return a.a.createElement(r.Fragment,{key:t},a.a.createElement(X,{label:"za",isDeliveryPrice:!0,field:[t,"price","value"]}),t===o.length-1?a.a.createElement(pe,{display:"\u221e",label:"do"}):a.a.createElement(X,{field:[t,"toPrice","value"],autoFocus:!0}),o.length>1&&a.a.createElement(je,null,a.a.createElement(F.a,{onDelete:function(){return n.removeValue("",t)}})))}),a.a.createElement(p.FormApi,{render:function(e){return a.a.createElement(Oe,null,a.a.createElement(le.a,{disabled:e.submitting,width:B.d.ButtonHeight+B.d.DefaultSizeUnit,iconName:"add_circle",onClick:function(){return n.addValue("",{price:{value:0},toPrice:{value:0}})}}))}}))};function we(){var e=Object(b.a)(["\n  color: ",";\n  padding-bottom: 0.2rem;\n"]);return we=function(){return e},e}function Ce(){var e=Object(b.a)(["\n  margin: ",";\n  color: ",";\n"]);return Ce=function(){return e},e}var ze=E.default.div(Ce(),B.d.Middle,B.a.black),xe=E.default.div(we(),B.a.greyDark),ke=function(e){return a.a.createElement(ze,null,a.a.createElement(A.a,{icon:"label"},a.a.createElement(R.a,{field:"name",validate:Object(T.b)(c.b._("Zone name"))})),a.a.createElement(A.a,{icon:"color_lens"},a.a.createElement(ue,null)),a.a.createElement(M.a,{field:"enabled",name:"enabled",label:c.b._("Is active").toLocaleLowerCase()}),a.a.createElement(L.Trans,{id:"<0>Delivery cost</0><1>according order total cost</1>",components:[a.a.createElement(_.a,{margin:"0.5rem 0 0 0"}),a.a.createElement(xe,null)]}),a.a.createElement(X,{field:"minimalOrderPrice.value"}),a.a.createElement(p.NestedField,{field:"priceRangeRules",component:ye}))},Se=t(6848),Fe=t(6844),Be=function(e){var n=e.isSubmitting,t=e.isModified,r=e.onGoBack,o=e.onSave;return a.a.createElement(Fe.a,null,a.a.createElement(Se.a,{widthGrowIndex:.4,padding:"0"},a.a.createElement(le.a,{color:B.a.greyMiddle,onClick:r,text:c.b._("Back"),disabled:n})),a.a.createElement(Se.a,{widthGrowIndex:.4,padding:"0"},a.a.createElement(O.a,{mutationName:"updateZone"},a.a.createElement(le.a,{color:B.a.green,text:c.b._("Save zone"),onClick:o,disabled:n||!t}))))},Pe=t(6);function Ie(){var e=Object(b.a)(["\n  query GZones($branchesId: [ID!]!) {\n    zones(companyBranches: $branchesId) {\n      ...FZone\n    }\n  }\n  ","\n"]);return Ie=function(){return e},e}var Ze=t.n(Pe)()(Ie(),z.h),Le=Object(re.a)(Ze),Me=a.a.createContext(null),Re=Object(h.observer)(function(e){var n=e.children,t=Object(C.b)().zone,r=t.branches.filter(t.branchFilterPredicate);return 0===r.length?a.a.createElement(Me.Provider,{value:[]},n):a.a.createElement(Le,{fetchPolicy:"cache-and-network",variables:{branchesId:r.map(k.a.prop("id"))},renderLoading:!1,render:function(e,t){var r=e.zones,o=t.loading;return a.a.createElement(Me.Provider,{value:o?null:r},n)}})}),_e=function(){return Object(r.useContext)(Me)};function Ae(){var e=Object(b.a)(["\n  width: ",";\n  margin-top: ",";\n"]);return Ae=function(){return e},e}var Te=E.default.div(Ae(),B.d.ButtonHeight+B.d.DefaultSizeUnit,B.d.Middle),De=function(){var e=I(),n=_e(),t=Object(C.b)().zone,o=Z().routeToZoneList,i=Object(r.useState)(!1),u=Object(m.a)(i,2),l=u[0],d=u[1],b=Object(r.useRef)(null),E=Object(S.a)(),B=E.enqueueError,P=E.enqueueSuccess,L=Object(z.R)(),M=Object(m.a)(L,1)[0],R=Object(r.useCallback)(function(){var n=Object(s.a)(f.a.mark(function n(r){return f.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=5;break}return n.next=3,M(t.getZoneVariables(e,r));case 3:n.sent&&(d(!1),o(),P(c.b._("Zone has been updated")));case 5:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}(),[e]),_=Object(r.useCallback)(Object(s.a)(f.a.mark(function n(){return f.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=3;break}return n.next=3,t.destroyZone(e);case 3:o();case 4:case"end":return n.stop()}},n)})),[e]);Object(h.useDisposable)(function(){return Object(v.reaction)(function(){return null!==t.map.currentZonePoints},d)}),a.a.useEffect(function(){n&&0===n.length&&(B(c.b._("Requested zone wasn't found")),o())},[n]);var A=e&&n&&n.find(k.a.propEq("id",e))||null;return a.a.useEffect(function(){t.map.clearZonePoints()},[A]),A?a.a.createElement(p.Form,{defaultValues:A,onChange:function(e){Object(x.b)("zone form change",e.values),d(!0)},onSubmit:R,render:function(e){return b.current=e,a.a.createElement(j.a,{padding:0},a.a.createElement(Be,{isSubmitting:e.submitting,isModified:l,onSave:e.submitForm,onGoBack:o}),a.a.createElement(ke,null),a.a.createElement(O.a,{mutationName:"destroyZone"},a.a.createElement(Te,null,a.a.createElement(F.a,{disabled:e.submitting,confirmText:c.b._("Remove zone {0}?",{0:A.name}),onDelete:_}))),a.a.createElement(g.b,{when:l},function(e){var n=e.isShow,t=e.handleOk,r=e.handleCancel;return a.a.createElement(y.a,{isShow:n,confirmText:c.b._("Do you want to cancel changes for the zone?"),onConfirm:t,onCancel:r})}))}}):a.a.createElement(w.a,{text:c.b._("Loading form...")})},Ne=t(6873),Ve=t(6856),Ge=t(106);function qe(){var e=Object(b.a)(["\n    background-color: ",";\n    color: ",";\n  "]);return qe=function(){return e},e}function He(){var e=Object(b.a)(["\n  "," font-size: 1.3rem;\n  white-space: nowrap;\n  padding: 0.2rem 0.5rem;\n"]);return He=function(){return e},e}var Ue=E.default.div(He(),function(e){var n=e.isActive;return Object(E.css)(qe(),n?B.a.green:B.a.greyLight,n?B.a.white:B.a.greyDark)}),We=function(e){var n=e.branch,t=e.isActive,r=void 0===t||t;return a.a.createElement(Ve.OverlayView,{getPixelPositionOffset:function(e,n){return{x:-e/2,y:-n/2}},mapPaneName:Ve.OverlayView.MARKER_LAYER,position:Object(Ge.b)(n.gps)},a.a.createElement(Ue,{isActive:r},n.name))};var Je=function(e){var n=a.a.useCallback(function(n){e.onFocus&&(n.stop(),e.onFocus())},[e.onFocus]),t=e.points,r=e.color,o=e.priority;return a.a.createElement(Ve.Polygon,{path:t.map(Ge.b),options:{fillColor:r,fillOpacity:.3,strokeWeight:0,zIndex:5e3-o},editable:!1,draggable:!1,onDblClick:n})},Ke=function(e){var n=a.a.useRef(null),t=a.a.useRef([]),r=a.a.useCallback(function(){if(n.current){var t=n.current.getPath();e.onChange(t.getArray().map(Ge.c))}},[e.onChange]),o=a.a.useCallback(function(e){n.current=e;var a=e.getPath();t.current.push(a.addListener("set_at",r),a.addListener("insert_at",r),a.addListener("remove_at",r))},[]),i=a.a.useCallback(function(){e.onClear(),t.current.forEach(function(e){return e.remove()}),n.current=null},[]),c=e.points,u=e.color;return a.a.createElement(Ve.Polygon,{path:c.map(Ge.b),options:{fillColor:u,fillOpacity:.6,strokeWeight:2,zIndex:1e4},editable:!0,draggable:!0,onDragEnd:r,onLoad:o,onUnmount:i})};function Ye(){return Object(C.b)().zone}var $e=function(){var e=Ye(),n=I(),t=_e(),o=Z().routeToZoneEdit,i=e.branches.filter(e.branchFilterPredicate),c=function(n){return!e.hasBranchFilter||n===e.branchFilterId};a.a.useEffect(function(){return Object(v.autorun)(function(){e.branch&&e.map.isReady&&e.map.panToBranch(e.branch)})},[]);var u=Object(r.useCallback)(function(e){return a.a.createElement(We,{key:"branch".concat(e.id),branch:e,isActive:c(e.id)})},[]);return a.a.createElement(Ne.a,{model:e.map},t&&t.map(function(t){var r={key:"zone".concat(t.id),points:t.geoPolygon,priority:t.priority,color:c(t.companyBranch.id)&&t.enabled?t.zoneColor.color:B.a.greyMiddle};return t.id===n?a.a.createElement(Ke,Object.assign({},r,{onChange:e.map.updateZonePoints,onClear:e.map.clearZonePoints})):a.a.createElement(Je,Object.assign({},r,{onFocus:function(){c(t.companyBranch.id)&&o(t.id)}}))}),i&&i.map(u))},Qe=t(6850),Xe=Object(h.observer)(function(e){var n=e.children;return Object(C.b)().user.hasSingleBranch?null:n}),en=t(6849),nn=Object(h.observer)(function(){var e=Ye(),n=Z().routeToZoneEdit;return a.a.createElement(le.a,{text:e.hasBranchFilter?c.b._("Create zone for branch"):c.b._("Select branch to create zone"),onClick:function(){return e.createZone(n)},disabled:!e.hasBranchFilter,color:B.a.turquoise,textNextToIcon:!0,height:B.d.ButtonHeight+B.d.DefaultSizeUnit,iconName:"add_circle"})}),tn=t(6995),rn=t(6910),an=t(480),on=t(473),cn=t(88),un=t(474),ln=t(162),dn=t(475),fn=t(479),sn=t(476),mn=t(6877),bn=t(6915),vn=t(338);function hn(){var e=Object(b.a)(["\n  height: ",";\n"]);return hn=function(){return e},e}function pn(){var e=Object(b.a)(["\n  font-size: 0.875rem;\n"]);return pn=function(){return e},e}function gn(){var e=Object(b.a)(["\n  font-size: 1.125rem;\n  margin-top: 0.2rem;\n"]);return gn=function(){return e},e}var En=E.default.div(gn()),On=E.default.div(pn()),jn=Object(E.default)(Fe.a)(hn(),B.d.ButtonHeight+B.d.DefaultSizeUnit),yn=Object(mn.SortableElement)(function(e){var n=e.zone,t=e.branch,r=e.onEdit;return a.a.createElement(j.a,{key:n.id,padding:0,color:n.enabled?n.zoneColor.color:B.a.greyMiddle,onClick:r},a.a.createElement(jn,null,a.a.createElement(Se.a,{fixedWidth:!0,padding:"0 0.5rem 0 0"},a.a.createElement(vn.a,null,a.a.createElement(le.a,{iconName:"mode_edit"}))),a.a.createElement(Se.a,{widthGrowIndex:1},a.a.createElement(En,null,n.name," [P".concat(n.priority,"]")),a.a.createElement(On,null,t.name)),a.a.createElement(Se.a,{padding:"0"},a.a.createElement(bn.a,null))))});function wn(){var e=Object(b.a)(["\n  margin-top: 0.5rem;\n  cursor: arrow;\n"]);return wn=function(){return e},e}var Cn=Object(mn.SortableContainer)(E.default.div(wn())),zn=an.a([on.a(cn.a(["companyBranch","name"])),un.a(ln.a("priority"))]),xn=dn.a(function(e){return e.companyBranch.id}),kn=function(e){var n,t,o=e.branches,i=e.zones,c=e.zoneModel,u=e.onZoneEdit,l=function(e,n){return a.a.createElement(yn,{key:e.id,zone:e,branch:o.find(fn.a("id",e.companyBranch.id)),index:n,collection:e.companyBranch.id,onEdit:function(){return u(e.id)}})};if(1===o.length){var d=zn(i);n=d.map(l),t=function(e){var n=e.oldIndex,t=e.newIndex,r=d[n];c.changeZonePriority(r,n,t)}}else{var f=sn.a(zn,xn(i));n=o.map(function(e){var n=f[e.id];return n?function(e,n){return a.a.createElement(r.Fragment,{key:e.id},a.a.createElement(rn.a,null,e.name),n.map(l))}(e,n):null}),t=function(e){var n=e.oldIndex,t=e.newIndex,r=e.collection,a=f[r][n];c.changeZonePriority(a,n,t)}}return a.a.createElement(Cn,{useDragHandle:!0,lockAxis:"y",onSortEnd:t},n)},Sn=function(){var e=_e(),n=Ye(),t=Z().routeToZoneEdit;return null===e?a.a.createElement(tn.a,{primaryOpacity:.2,secondaryOpacity:.2}):null===n.brand?a.a.createElement(rn.a,null,a.a.createElement(L.Trans,{id:"Select brand to see its zones"})):a.a.createElement(kn,{zoneModel:n,zones:e.filter(n.zoneFilterPredicate),branches:n.root.user.filterBranches(n.branchFilterPredicate),onZoneEdit:t})},Fn=t(6846),Bn=t(6857),Pn=function(e){var n=e.branches,t=e.selectedBranch,r=e.onSelection,o=e.autoFocus;return a.a.createElement(Bn.a,{placeholder:c.b._("Select branch"),branches:n,selectedBranch:t,onSingleSelection:r,formatOptionLabel:k.a.prop("name"),isClearable:!0,autoFocus:o})},In=t(6837),Zn=function(e){var n=e.brands,t=e.selectedBrand,r=e.onSelection;return a.a.createElement(In.a,{placeholder:c.b._("Select brand"),options:n,value:t,formatOptionLabel:k.a.prop("name"),getOptionValue:k.a.prop("id"),getOptionLabel:k.a.prop("name"),isClearable:!0,isSearchable:!0,onChange:function(e){return r(e)},autoFocus:!0})},Ln=Object(h.observer)(function(){var e=Object(C.b)(),n=e.user,t=e.zone,r=n.branches,o=a.a.useCallback(function(e){return null===e?[]:n.branches.filter(k.a.pathEq(["brand","id"],e.id))},[]);if(a.a.useEffect(function(){return Object(v.autorun)(function(){1===r.length&&t.setBranchFilter(k.a.head(r))})},[]),r.length<=1)return null;var i=1===n.brands.length?k.a.head(n.brands):null;return i&&t.setBrandFilter(i,o(t.brand)),a.a.createElement(a.a.Fragment,null,!i&&a.a.createElement(Zn,{brands:n.brands,selectedBrand:t.brand,onSelection:function(e){null===e?t.clearBrandFilter():t.setBrandFilter(e,o(e))}}),!i&&a.a.createElement(Fn.a,null),a.a.createElement(Pn,{branches:o(t.brand),selectedBranch:t.branch,autoFocus:Boolean(i),onSelection:function(e){e?t.setBranchFilter(e):t.clearBranchFilter()}}))});function Mn(){var e=Object(b.a)(["\n  flex: 1 1 0;\n  min-height: 0;\n"]);return Mn=function(){return e},e}function Rn(){var e=Object(b.a)(["\n  flex: 0 0 auto;\n"]);return Rn=function(){return e},e}function _n(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]);return _n=function(){return e},e}var An=E.default.div(_n()),Tn=E.default.div(Rn()),Dn=E.default.div(Mn()),Nn=a.a.memo(function(){var e=Object(C.b)().zone;return Object(en.a)(function(n){e.setBranchFilter(n)}),a.a.createElement(An,null,a.a.createElement(Tn,null,a.a.createElement(Xe,null,a.a.createElement(j.a,null,a.a.createElement(Ln,null))),a.a.createElement(O.a,{mutationName:"createZone"},a.a.createElement(nn,null))),a.a.createElement(Dn,null,a.a.createElement(Qe.a,null,a.a.createElement(Sn,null))))}),Vn=function(e){var n=e.match,t=Boolean(n.params.zoneId);return a.a.createElement(Re,null,a.a.createElement(u.a,{pageTitle:c.b._("Delivery zones"),useBackButton:!0,backRoute:"/settings"}),a.a.createElement(l.a,{widthInColumns:6,column:10,withScrollArea:t},t?a.a.createElement(De,null):a.a.createElement(Nn,null)),a.a.createElement(l.a,{widthInColumns:10},a.a.createElement($e,null)))};t.d(n,"ZoneMenuRoutes",function(){return Gn});var Gn=function(){var e=Z().getRouteToZone;return a.a.createElement(o.Switch,null,a.a.createElement(o.Route,{path:e(":zoneId?"),component:Vn}),a.a.createElement(o.Route,{component:i.a}))};n.default=Gn}}]);
//# sourceMappingURL=181.bd452980.chunk.js.map