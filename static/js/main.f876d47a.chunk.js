(this["webpackJsonpreact-ecommerce-coderhouse"]=this["webpackJsonpreact-ecommerce-coderhouse"]||[]).push([[0],{104:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),o=a.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(17),l=a(13),m=a(136),s=a(139),u=a(141),p=a(70),d=a.n(p),g=Object(m.a)((function(e){return{container:{textAlign:"center"},title:{marginBottom:e.spacing(2)},subTitle:{marginBottom:e.spacing(2)},button:{marginBottom:e.spacing(3)},textDecorationNone:{textDecoration:"none",color:"inherit"}}}));function f(e){var t=e.productNotFound,a=void 0!==t&&t,n=e.categoryNotFoundOrHasNoneItems,r=void 0!==n&&n,o=g();return i.a.createElement("div",{className:o.container},i.a.createElement(s.a,{className:o.title,variant:"h3",component:"h1"},"\xa1Buscamos! ",i.a.createElement("br",null)," pero ",i.a.createElement("br",null)," sin \xe9xito"),a?i.a.createElement(s.a,{className:o.subTitle,variant:"h4",component:"h2"},"Producto no encontrado"):"",r?i.a.createElement(s.a,{className:o.subTitle,variant:"h4",component:"h2"},"Categor\xeda no encontrada o no quedan productos"):"",i.a.createElement(c.b,{to:"/",className:o.textDecorationNone},i.a.createElement(u.a,{className:o.button,variant:"outlined",color:"primary",href:"/",component:"div"},"Volver a la P\xe1gina Principal")),i.a.createElement("br",null),i.a.createElement("img",{className:o.img,src:d.a,width:"300px",height:"300px",alt:"Representaci\xf3n ilustrada del error 404"}))}var E=a(11),b=a(19),h=a(54),v=(a(100),h.initializeApp({apiKey:"AIzaSyD15LELYspIFtIQNMAsreCT63D-idJL94Q",authDomain:"react-ecommerce-coder.firebaseapp.com",databaseURL:"https://react-ecommerce-coder.firebaseio.com",projectId:"react-ecommerce-coder",storageBucket:"react-ecommerce-coder.appspot.com",messagingSenderId:"364674500372",appId:"1:364674500372:web:a3d61c2f5920bda621e401",measurementId:"364674500372"}));function x(){return h.firestore(v)}var y=x(),N=h;function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n=y.collection("categorias").where("categoryName","==",e).get();n.then((function(e){if(e.size>0){var n=e.docs.map((function(e){return e.id}))[0],i=y.collection("categorias").doc(n);y.collection("productos").where("category","==",i).get().then((function(e){var a=e.docs.map((function(e){return Object(b.a)(Object(b.a)({},e.data()),{},{id:e.id})}));t(a)})).catch((function(e){a(e)}))}})).catch((function(e){a(e)}))}var j=a(147),O=a(142),I=a(143),k=a(144),T=a(145),w=a(146),B=Object(m.a)((function(e){return{root:{maxWidth:245,height:380,position:"relative"},media:{},cardActions:{position:"absolute",bottom:0,width:"94%",justifyContent:"space-between"},textDecorationNone:{textDecoration:"none",color:"inherit"}}}));function D(e){var t=e.className,a=e.image,n=e.name,r=e.description,o=e.price,l=e.uniqueProductUrlName,m=B();return i.a.createElement("div",{className:t},i.a.createElement(O.a,{className:m.root},i.a.createElement(c.b,{to:"/productos/"+l,className:m.textDecorationNone},i.a.createElement(I.a,null,i.a.createElement(k.a,{component:"img",image:a,alt:n,title:n}),i.a.createElement(T.a,null,i.a.createElement(s.a,{gutterBottom:!0,variant:"h6",component:"h2"},n),i.a.createElement(s.a,{variant:"body2",color:"textSecondary",component:"p"},r)))),i.a.createElement(w.a,{className:m.cardActions},i.a.createElement(s.a,{variant:"subtitle1",color:"textPrimary",component:"p"},"$",o),i.a.createElement(u.a,{className:m.linkToItemPage,size:"small",color:"primary"},i.a.createElement(c.b,{to:"/productos/"+l,className:m.textDecorationNone},"Ver producto")))))}var P=Object(m.a)((function(e){return{container:{display:"flex",flexDirection:"row",flexWrap:"wrap",maxHeight:350},item:{marginRight:e.spacing(1),marginBottom:e.spacing(1)}}}));function L(e){var t=e.items,a=P();return i.a.createElement("div",{className:a.container},i.a.createElement(j.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},t.map((function(e){var t=e.id,n=e.name,r=e.shortSpecs,o=e.image,c=e.price,l=e.uniqueProductUrlName;return i.a.createElement(D,{className:a.item,key:t,name:n,description:r,image:o,price:c,uniqueProductUrlName:l})}))))}var A=a(74),S=a.n(A);function W(e){var t=e.gifHeight,a={display:"flex",margin:"auto",height:void 0===t?50:t};return i.a.createElement("img",{src:S.a,style:a,alt:"Cargando p\xe1gina..."})}var q=Object(m.a)((function(e){return{sectionTitles:{textAlign:"center",margin:e.spacing(2)}}}));function M(){var e=q(),t=i.a.useState([]),a=Object(E.a)(t,2),n=a[0],r=a[1],o=i.a.useState(!0),c=Object(E.a)(o,2),l=c[0],m=c[1];return i.a.useEffect((function(){C("Ladrillos",r)}),[]),i.a.useEffect((function(){m(!1)}),[n]),i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{className:e.sectionTitles,variant:"h5",component:"div"},"Ladrillos"),l?i.a.createElement(W,null):i.a.createElement(L,{items:n}))}var F=a(8),Q=a(86),R=a(155),z=a(157),V=(a(104),Object(m.a)((function(e){return{container:{display:"flex",flexDirection:"column",padding:e.spacing(2)},quantityMinMax:{display:"flex",justifyContent:"space-between",color:"#0DC143"},min:{marginRight:e.spacing(2)},max:{marginLeft:e.spacing(2)},inputQuantity:{display:"block",marginLeft:"auto",marginRight:"auto",marginTop:-30,textAlign:"center",maxWidth:60},slider:{display:"block",maxWidth:"90%",marginTop:e.spacing(2),marginLeft:"auto",marginRight:"auto"},buttonContainer:{marginTop:e.spacing(2),display:"flex"},deleteCartButton:Object(F.a)({flexBasis:"60%",marginLeft:e.spacing(1)},e.breakpoints.only("md"),{wordSpacing:15e4})}}))),H={center:{textAlign:"center"}};function U(e){var t=e.initialValue,a=e.minValue,r=e.maxValue,o=e.onCartItemAdded,c=e.onCartItemDeleted,l=e.onQuantityChange,m=Object(n.useState)(t),p=Object(E.a)(m,2),d=p[0],g=p[1],f=V();return Object(n.useEffect)((function(){"function"===typeof l&&l(d)}),[d]),i.a.createElement("div",{className:f.container},i.a.createElement(s.a,{className:f.quantityMinMax,variant:"caption",component:"div"},i.a.createElement("span",{className:f.min},"Min: ",a),i.a.createElement("span",{className:f.max},"Max: ",r)),i.a.createElement(R.a,{className:f.inputQuantity,inputProps:{style:H.center,step:1,min:a,max:r,type:"number"},onBlur:function(){d<a?g(a):d>r&&g(r)},value:d,onChange:function(e){g(""===e.target.value?0:Number(e.target.value))}}),i.a.createElement(z.a,{className:f.slider,value:"number"===typeof d?d:0,min:a,max:r,step:1,valueLabelDisplay:"auto",onChange:function(e,t){g(t)}}),i.a.createElement("div",{className:f.buttonContainer},i.a.createElement(u.a,{variant:"outlined",color:"primary",fullWidth:!0,onClick:function(){"function"===typeof o&&o(d)}},"Al carrito"),i.a.createElement(u.a,{className:f.deleteCartButton,variant:"outlined",color:"secondary",fullWidth:!0,onClick:function(){"function"===typeof c&&c()}},"Eliminar item")))}var $=a(44),G={totalItemQuantity:0,items:[]},J=Object(n.createContext)(G),K=function(){return Object(n.useContext)(J)};function Y(e){var t=e.initialValue,a=void 0===t?G:t,r=e.children,o=Object(n.useState)(a),c=Object(E.a)(o,2),l=c[0],m=c[1];function s(e){var t=l.items.filter((function(t){return t.id===e}));return{itemExists:t.length>0,existingItem:t,cartItemsWithoutThisItem:l.items.filter((function(t){return t.id!==e}))}}return Object(n.useEffect)((function(){}),[]),Object(n.useEffect)((function(){}),[l]),i.a.createElement(J.Provider,{value:{cart:l,addItem:function(e){var t=e.id,a=e.quantity,n=e.minProducts,i=e.maxProducts,r=s(t),o=r.itemExists,c=r.existingItem,u=r.cartItemsWithoutThisItem,p=a,d=l.items.length+1,g=l.totalItemQuantity;o&&(g-=c[0].quantity,d=c[0].order),p>i&&(p=i),p<n&&(p=n);var f={totalItemQuantity:g+p,items:[].concat(Object($.a)(u),[Object(b.a)(Object(b.a)({},e),{},{order:d,quantity:p})])};m(f)},checkIfCartItemExists:s,deleteCartItem:function(e){var t=s(e),a=t.itemExists,n=t.existingItem,i=t.cartItemsWithoutThisItem;a&&m({totalItemQuantity:l.totalItemQuantity-n[0].quantity,items:Object($.a)(i)})},deleteAllCartItems:function(){m(G)},isCartEmpty:function(){return 0===l.totalItemQuantity},totalCartPrice:function(){return l.items.reduce((function(e,t){return e+t.quantity*t.price}),0)}}},r)}var Z=Object(m.a)((function(e){var t;return{root:{flexGrow:1},gridContainer:{margin:0,width:"100% !important"},paper:{display:"relative",margin:e.spacing(2),textAlign:"center"},paperBottom:(t={marginTop:e.spacing(2)},Object(F.a)(t,e.breakpoints.only("sm"),{marginLeft:e.spacing(6),marginRight:e.spacing(6)}),Object(F.a)(t,e.breakpoints.up("md"),{marginTop:e.spacing(-1.8)}),Object(F.a)(t,e.breakpoints.up("lg"),{marginTop:e.spacing(3.1)}),t),itemImg:{maxWidth:"100%",maxHeight:400},productName:{padding:e.spacing(1),minHeight:98},paddingTop:{padding:e.spacing(1)},description:Object(F.a)({textAlign:"center",padding:e.spacing(3)+"px !important",marginTop:e.spacing(2)},e.breakpoints.up("md"),{padding:e.spacing(5)+"px !important",paddingTop:e.spacing(1)+"px !important",textAlign:"left"}),itemDescriptionTitle:{marginBottom:e.spacing(2)},buyContainer:{display:"flex",justifyContent:"center"},buyButton:{marginTop:e.spacing(2),marginBottom:e.spacing(2),width:"80%",maxHeight:36}}}));function X(e){var t=e.item,a=t.id,r=t.name,o=t.price,c=t.shortSpecs,l=t.description,m=t.image,p=t.minProducts,d=t.maxProducts,g=Object(n.useState)(p),f=Object(E.a)(g,2),h=f[0],v=f[1],x=K(),y=x.addItem,N=x.deleteCartItem,C=(0,x.checkIfCartItemExists)(a),O=C.itemExists,I=C.existingItem,k=Z();return i.a.createElement("div",{className:k.root},i.a.createElement(j.a,{className:k.gridContainer,container:!0,spacing:1},i.a.createElement(j.a,{item:!0,xs:12,md:8},i.a.createElement(Q.a,{className:k.paper,elevation:3},i.a.createElement("img",{src:m,className:k.itemImg,alt:"Imagen de "+r}))),i.a.createElement(j.a,{item:!0,xs:12,md:4},i.a.createElement("div",{className:k.paper,elevation:3},i.a.createElement(s.a,{className:k.productName,variant:"h4",component:"h2"},r),i.a.createElement(s.a,{className:k.paddingTop,variant:"subtitle1",component:"div"},c),i.a.createElement(s.a,{className:k.paddingTop,variant:"subtitle1",component:"div"},"Precio Unitario",i.a.createElement("br",null),i.a.createElement("strong",null,o))),i.a.createElement(Q.a,{className:k.paperBottom,elevation:3},i.a.createElement(U,{initialValue:p,minValue:p,maxValue:d,onQuantityChange:function(e){v(e)},onCartItemAdded:function(e){var a=Object(b.a)(Object(b.a)({},t),{},{quantity:e});O&&(a=Object(b.a)(Object(b.a)({},t),{},{quantity:e+I[0].quantity})),y(a)},onCartItemDeleted:function(){N(a)}}))),i.a.createElement(j.a,{item:!0,xs:12,md:8,className:k.description},i.a.createElement(s.a,{className:k.itemDescriptionTitle,variant:"h5",component:"h3"},"Descipci\xf3n del producto"),l),i.a.createElement(j.a,{item:!0,xs:12,md:4,className:k.buyContainer},i.a.createElement(u.a,{className:k.buyButton,variant:"contained",color:"primary"},"Comprar ",h))))}function _(){var e=Object(l.g)().id,t=i.a.useState([]),a=Object(E.a)(t,2),n=a[0],r=a[1];return i.a.useEffect((function(){x().collection("productos").where("uniqueProductUrlName","==",e).get().then((function(e){e.size>0&&r(e.docs.map((function(e){return Object(b.a)(Object(b.a)({},e.data()),{},{id:e.id})})))}))}),[]),i.a.createElement(i.a.Fragment,null,n.length>0?i.a.createElement(X,{item:n[0]}):i.a.createElement(f,{productNotFound:!0}))}var ee=a(150),te=a(148),ae=a(78),ne=a.n(ae),ie=a(108),re=a(149),oe=a(77),ce=a.n(oe),le=a(76),me=a.n(le),se=a(75),ue=a.n(se),pe=Object(m.a)((function(e){var t,a;return{paper:{marginBottom:e.spacing(2)},itemCartProduct:{},image:{display:"block",marginLeft:"auto",marginRight:"auto",height:80},titleAndDescription:Object(F.a)({},e.breakpoints.down("sm"),{borderLeft:"2px solid "+e.palette.divider,paddingLeft:e.spacing(2)}),itemCartCountContainer:(t={borderLeft:"2px solid "+e.palette.divider,maxWidth:150},Object(F.a)(t,e.breakpoints.down("sm"),{paddingTop:e.spacing(1)}),Object(F.a)(t,e.breakpoints.only("sm"),{borderLeft:"none"}),Object(F.a)(t,e.breakpoints.up("sm"),{maxWidth:"none",display:"flex",justifyContent:"center",alignItems:"center"}),t),deleteItemButtonContainer:{display:"flex",justifyContent:"center",alignItems:"center"},itemPriceContainer:(a={borderLeft:"2px solid "+e.palette.divider,paddingLeft:e.spacing(2)},Object(F.a)(a,e.breakpoints.only("sm"),{paddingTop:e.spacing(2.5)}),Object(F.a)(a,e.breakpoints.up("md"),{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingTop:0}),a),price:{fontWeight:"bold"},totalItemPrice:Object(F.a)({fontWeight:"bold"},e.breakpoints.down("sm"),{marginLeft:e.spacing(.6)}),itemCountInputs:{display:"flex",justifyContent:"space-between"},remove:{},inputField:{textAlign:"center"},add:{}}})),de={textAlignCenter:{textAlign:"center",width:80}};function ge(e){var t=e.item,a=t.id,n=t.name,r=t.price,o=t.shortSpecs,c=t.image,l=t.quantity,m=t.minProducts,u=t.maxProducts,p=pe(),d=i.a.useState(l),g=Object(E.a)(d,2),f=g[0],h=g[1],v=K(),x=v.deleteCartItem,y=v.addItem;i.a.useEffect((function(){y(Object(b.a)(Object(b.a)({},t),{},{quantity:f}))}),[f]);return i.a.createElement(Q.a,{elevation:3,className:p.paper},i.a.createElement(ie.a,null,i.a.createElement(j.a,{container:!0,spacing:1},i.a.createElement(j.a,{container:!0,item:!0,xs:11,className:p.itemCartProduct},i.a.createElement(j.a,{item:!0,xs:12,sm:5,md:2},i.a.createElement("img",{className:p.image,src:c,alt:"imagen del producto ".concat(n)})),i.a.createElement(j.a,{item:!0,xs:12,sm:7,md:4,className:p.titleAndDescription},i.a.createElement(s.a,{variant:"h6"},n),i.a.createElement(s.a,{variant:"subtitle1"},o)),i.a.createElement(j.a,{item:!0,xs:12,sm:5,md:3,className:p.itemCartCountContainer},i.a.createElement("div",{className:p.itemCountInputs},i.a.createElement(re.a,{className:p.remove,onClick:function(){h(f-1)},disabled:f<=m},i.a.createElement(ue.a,null)),i.a.createElement("div",{className:p.inputField},i.a.createElement(R.a,{className:p.inputQuantity,inputProps:{style:de.textAlignCenter,step:1,min:m,max:u,type:"number"},onBlur:function(){f<m?h(m):f>u&&h(u)},value:f,onChange:function(e){h(""===e.target.value?0:Number(e.target.value))}})),i.a.createElement(re.a,{className:p.add,onClick:function(){h(f+1)},disabled:f>=u},i.a.createElement(me.a,null)))),i.a.createElement(j.a,{item:!0,xs:12,sm:7,md:3,className:p.itemPriceContainer},i.a.createElement("span",null,"x ",i.a.createElement("span",{className:p.price},"$",r)," c/u ="),i.a.createElement("span",{className:p.totalItemPrice},"$",(l*r).toLocaleString()))),i.a.createElement(j.a,{item:!0,xs:1,className:p.deleteItemButtonContainer},i.a.createElement(re.a,{color:"secondary",onClick:function(){x(a)}},i.a.createElement(ce.a,null))))))}var fe=Object(m.a)((function(e){var t;return{container:{marginTop:e.spacing(2)},titleContainer:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginBottom:e.spacing(2)},info:{padding:e.spacing(1),textAlign:"center"},title:Object(F.a)({display:"block"},e.breakpoints.up("md"),{display:"inline"}),quantities:(t={display:"inline-flex"},Object(F.a)(t,e.breakpoints.up("md"),{paddingLeft:e.spacing(3)}),Object(F.a)(t,"fontSize",16),t),deleteCartButton:Object(F.a)({marginTop:"auto",marginBottom:"auto",height:50},e.breakpoints.up("xs"),{marginLeft:e.spacing(1.5)}),emptyCartPaper:{marginTop:e.spacing(2),padding:e.spacing(3)},textDecorationNone:{textDecoration:"none",color:"inherit"},total:{marginTop:e.spacing(3),textAlign:"right"},toCheckoutButton:{marginTop:e.spacing(2)}}}));function Ee(){var e=fe(),t=K(),a=t.cart,n=t.deleteAllCartItems,r=t.totalCartPrice,o=t.isCartEmpty,l=i.a.createElement(Q.a,{elevation:5,className:e.emptyCartPaper},"\xa1El carrito est\xe1 vac\xedo!",i.a.createElement("br",null)," ",i.a.createElement("br",null),i.a.createElement(c.b,{to:"/",className:e.textDecorationNone},i.a.createElement(u.a,{variant:"outlined",color:"primary",component:"div"},"Volver a la P\xe1gina Principal"))),m=i.a.createElement("div",{className:e.total},i.a.createElement(s.a,{variant:"h6",color:"primary"},"Total: $",i.a.createElement("strong",null,r().toLocaleString())),i.a.createElement(c.b,{to:"/checkout",className:e.textDecorationNone},i.a.createElement(u.a,{className:e.toCheckoutButton,variant:"contained",size:"small",color:"primary"},"Proceder al Checkout")));return i.a.createElement(ee.a,{maxWidth:"md",className:e.container},i.a.createElement("div",{className:e.titleContainer},i.a.createElement(s.a,{className:e.info,variant:"h5",component:"h1"},i.a.createElement("span",{className:e.title},i.a.createElement("strong",null,"Carrito de compras")),i.a.createElement("div",{className:e.quantities,variant:"subtitle1"},"Total items: ",a.totalItemQuantity)),i.a.createElement(u.a,{className:e.deleteCartButton,variant:"outlined",color:"secondary",endIcon:i.a.createElement(ne.a,null),onClick:function(){return n()}},"Borrar carrito")),i.a.createElement(te.a,null,o()?l:i.a.createElement(i.a.Fragment,null,a.items.sort((function(e,t){return e.order-t.order})).map((function(e){return i.a.createElement(ge,{key:e.order,item:e})})),m)))}var be=Object(m.a)((function(e){return{title:{marginTop:e.spacing(5),marginBottom:e.spacing(5)},sendOrderButton:{marginTop:e.spacing(5)}}}));function he(){var e=K(),t=e.cart,a=e.totalCartPrice,n=e.isCartEmpty,r=be(),o=i.a.useState(!1),c=Object(E.a)(o,2),m=c[0],p=c[1],d=i.a.useState(""),g=Object(E.a)(d,2),f=g[0],b=g[1],h=i.a.useState(""),v=Object(E.a)(h,2),x=v[0],C=v[1],O=i.a.useState(""),I=Object(E.a)(O,2),k=I[0],T=I[1],w=i.a.useState(""),B=Object(E.a)(w,2),D=B[0],P=B[1];if(n())return i.a.createElement(l.a,{to:"/"});return i.a.createElement(i.a.Fragment,null,m?"\xa1Orden enviada exitosamente!":i.a.createElement(ee.a,{maxWidth:"md"},i.a.createElement(s.a,{className:r.title,variant:"h4",component:"h1",color:"initial"},"Finalizar Compra - Generaci\xf3n de orden"),i.a.createElement(j.a,{container:!0,spacing:1},i.a.createElement(j.a,{item:!0,xs:12,md:6},i.a.createElement(R.a,{name:"nombres",type:"text",value:f,onChange:function(e){return b(e.target.value)},label:"Nombres",variant:"outlined",fullWidth:!0})),i.a.createElement(j.a,{item:!0,xs:12,md:6},i.a.createElement(R.a,{name:"apellidos",type:"text",value:x,onChange:function(e){return C(e.target.value)},label:"Apellidos",variant:"outlined",fullWidth:!0})),i.a.createElement(j.a,{item:!0,xs:12,md:6},i.a.createElement(R.a,{name:"email",type:"text",value:k,onChange:function(e){return T(e.target.value)},label:"E-Mail",variant:"outlined",fullWidth:!0})),i.a.createElement(j.a,{item:!0,xs:12,md:6},i.a.createElement(R.a,{name:"telefono",type:"number",value:D,onChange:function(e){return P(e.target.value)},label:"Tel\xe9fono",variant:"outlined",fullWidth:!0}))),i.a.createElement(u.a,{className:r.sendOrderButton,variant:"contained",color:"primary",fullWidth:!0,onClick:function(){!function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},r={buyer:e,items:t,date:N.firestore.Timestamp.fromDate(new Date),totalCartPrice:a},o=y.collection("ordenes");o.add(r).then((function(e){var t=e.id;n(t)})).catch((function(e){i(e)}))}({name:f,surname:x,email:k,phone:D},Object($.a)(t.items.map((function(e){return{id:e.id,quantity:e.quantity}}))),a(),(function(){p(!0)}))}},"enviar orden")))}var ve=a(12),xe=a(156),ye=a(151),Ne=a(84),Ce=a(152),je=a(153),Oe=a(154),Ie=a(83),ke=a.n(Ie),Te=a(80),we=a.n(Te),Be=a(79),De=a.n(Be),Pe=a(82),Le=a.n(Pe),Ae=a(81),Se=a.n(Ae),We=Object(m.a)((function(e){var t;return{textDecorationNoneDFlex:{textDecoration:"none",color:"inherit",display:"flex"},textDecorationNone:{textDecoration:"none",color:"inherit"},grow:{flexGrow:1},brandLogo:{marginTop:e.spacing(.5),marginRight:e.spacing(2)},search:Object(F.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(ve.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(ve.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%",maxHeight:"39px"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto",marginTop:"auto",marginBottom:"auto"}),searchIcon:Object(F.a)({padding:e.spacing(0,1.4),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},e.breakpoints.only("sm"),{marginLeft:"-30px"}),inputRoot:{color:"inherit"},inputInput:(t={padding:e.spacing(1.5,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},Object(F.a)(t,e.breakpoints.only("sm"),{paddingLeft:"1em"}),Object(F.a)(t,e.breakpoints.up("md"),{width:"22ch","&:focus":{width:"28ch"}}),t),sectionDesktop:Object(F.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobileMenuTrigger:Object(F.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),categoriesContainer:{marginLeft:e.spacing(1.5),height:"100%",marginTop:"auto",marginBottom:"auto"},categoriesIcon:{verticalAlign:"middle",marginRight:e.spacing(1)},navBarOffset:e.mixins.toolbar}}));function qe(){var e=We(),t=K().cart,a=i.a.useState([{categoryName:"Cargando categor\xedas..."}]),n=Object(E.a)(a,2),r=n[0],o=n[1],l=i.a.useState(null),m=Object(E.a)(l,2),p=m[0],d=m[1],g=i.a.useState(null),f=Object(E.a)(g,2),h=f[0],v=f[1];i.a.useEffect((function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},a=y.collection("categorias").get();a.then((function(t){if(t.size>0){var a=t.docs.map((function(e){return Object(b.a)({},e.data())}));e(a)}})).catch((function(e){t(e)}))}(o)}),[]);var x=Boolean(h),N=Boolean(p),C=function(e){v(e.currentTarget)},j=function(){d(null)},O=i.a.createElement("div",{className:e.search},i.a.createElement("div",{className:e.searchIcon},i.a.createElement(De.a,null)),i.a.createElement(xe.a,{placeholder:"Buscar productos...",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})),I=i.a.createElement(re.a,{"aria-label":"carrito de compras",color:"inherit"},i.a.createElement(ye.a,{badgeContent:t.totalItemQuantity,color:"secondary",showZero:!0,max:9999},i.a.createElement(we.a,null))),k=i.a.createElement(Ne.a,{id:"primary-search-account-menu",anchorEl:h,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:x,onClose:function(){v(null),j()}},r.map((function(t){var a=t.categoryName,n=t.categoryNumber;return i.a.createElement(c.b,{key:n,to:"/categorias/".concat(a),className:e.textDecorationNone},i.a.createElement(Ce.a,null,a))}))),T=i.a.createElement(u.a,{"aria-label":"men\xfa de categor\xedas disponibles","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",className:e.categoriesContainer},i.a.createElement(Se.a,{className:e.categoriesIcon})," ",i.a.createElement("span",null,"Categor\xedas")),w=i.a.createElement(Ne.a,{anchorEl:p,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:N,onClose:j},i.a.createElement(Ce.a,null,O),i.a.createElement(Ce.a,{onClick:C},T),i.a.createElement("hr",null),i.a.createElement(c.b,{to:"/carrito",className:e.textDecorationNone},i.a.createElement(Ce.a,null,I,i.a.createElement("p",null,"Carrito"))));return i.a.createElement("div",{className:e.grow},i.a.createElement(je.a,null,i.a.createElement(Oe.a,null,i.a.createElement(c.b,{to:"/",className:e.textDecorationNoneDFlex},i.a.createElement(Le.a,{className:e.brandLogo}),i.a.createElement(s.a,{variant:"h6",noWrap:!0},"Material E-Commerce")),i.a.createElement("div",{className:e.grow}),i.a.createElement("div",{className:e.sectionDesktop},O,i.a.createElement(c.b,{to:"/carrito",className:e.textDecorationNone},I),i.a.createElement("div",{onClick:C},T)),i.a.createElement("div",{className:e.sectionMobileMenuTrigger},i.a.createElement(re.a,{"aria-label":"ver m\xe1s","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){d(e.currentTarget)},color:"inherit"},i.a.createElement(ke.a,null))))),w,k,i.a.createElement("div",{className:e.navBarOffset}))}function Me(){var e=Object(l.g)().name,t=i.a.useState([]),a=Object(E.a)(t,2),n=a[0],r=a[1];return i.a.useEffect((function(){C(e,r)}),[e]),i.a.createElement(i.a.Fragment,null,n.length>0?i.a.createElement(L,{items:n}):i.a.createElement(f,{categoryNotFoundOrHasNoneItems:!0}))}var Fe=function(){return i.a.createElement(c.a,null,i.a.createElement(Y,null,i.a.createElement(qe,null),i.a.createElement(l.d,null,i.a.createElement(l.b,{exact:!0,path:"/",component:M}),i.a.createElement(l.b,{exact:!0,path:"/carrito",component:Ee}),i.a.createElement(l.b,{exact:!0,path:"/checkout",component:he}),i.a.createElement(l.b,{path:"/productos/:id",component:_}),i.a.createElement(l.b,{path:"/categorias/:name",component:Me}),i.a.createElement(l.b,{exact:!0,path:"/admin"}),i.a.createElement(l.b,{component:f}))))};a(106);o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,t,a){e.exports=a.p+"static/media/404.c0a4937e.png"},74:function(e,t,a){e.exports=a.p+"static/media/Loading.829ae23f.gif"},91:function(e,t,a){e.exports=a(107)}},[[91,1,2]]]);
//# sourceMappingURL=main.f876d47a.chunk.js.map