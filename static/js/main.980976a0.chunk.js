(this["webpackJsonpreact-ecommerce-coderhouse"]=this["webpackJsonpreact-ecommerce-coderhouse"]||[]).push([[0],{104:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),o=a.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(18),l=a(13),m=a(136),s=a(139),u=a(141),p=a(70),d=a.n(p),g=Object(m.a)((function(e){return{container:{textAlign:"center"},title:{marginBottom:e.spacing(2)},subTitle:{marginBottom:e.spacing(2)},button:{marginBottom:e.spacing(3)},textDecorationNone:{textDecoration:"none",color:"inherit"}}}));function f(e){var t=e.productNotFound,a=void 0!==t&&t,n=e.categoryNotFoundOrHasNoneItems,i=void 0!==n&&n,o=g();return r.a.createElement("div",{className:o.container},r.a.createElement(s.a,{className:o.title,variant:"h3",component:"h1"},"\xa1Buscamos! ",r.a.createElement("br",null)," pero ",r.a.createElement("br",null)," sin \xe9xito"),a?r.a.createElement(s.a,{className:o.subTitle,variant:"h4",component:"h2"},"Producto no encontrado"):"",i?r.a.createElement(s.a,{className:o.subTitle,variant:"h4",component:"h2"},"Categor\xeda no encontrada o no quedan productos"):"",r.a.createElement(c.b,{to:"/",className:o.textDecorationNone},r.a.createElement(u.a,{className:o.button,variant:"outlined",color:"primary",href:"/",component:"div"},"Volver a la P\xe1gina Principal")),r.a.createElement("br",null),r.a.createElement("img",{className:o.img,src:d.a,width:"300px",height:"300px",alt:"Representaci\xf3n ilustrada del error 404"}))}var E=a(10),b=a(16),h=a(54),v=(a(100),h.initializeApp({apiKey:"AIzaSyD15LELYspIFtIQNMAsreCT63D-idJL94Q",authDomain:"react-ecommerce-coder.firebaseapp.com",databaseURL:"https://react-ecommerce-coder.firebaseio.com",projectId:"react-ecommerce-coder",storageBucket:"react-ecommerce-coder.appspot.com",messagingSenderId:"364674500372",appId:"1:364674500372:web:a3d61c2f5920bda621e401",measurementId:"364674500372"}));function x(){return h.firestore(v)}var y=x(),N=h;var C=a(147),j=a(142),O=a(143),I=a(144),k=a(145),T=a(146),w=Object(m.a)((function(e){return{root:{maxWidth:245,height:400,position:"relative"},media:{},cardActions:{position:"absolute",bottom:0,width:"94%",justifyContent:"space-between"},textDecorationNone:{textDecoration:"none",color:"inherit"}}}));function B(e){var t=e.className,a=e.image,n=e.name,i=e.description,o=e.price,l=e.uniqueProductUrlName,m=w();return r.a.createElement("div",{className:t},r.a.createElement(j.a,{className:m.root},r.a.createElement(c.b,{to:"/productos/"+l,className:m.textDecorationNone},r.a.createElement(O.a,null,r.a.createElement(I.a,{component:"img",image:a,alt:n,title:n}),r.a.createElement(k.a,null,r.a.createElement(s.a,{gutterBottom:!0,variant:"h6",component:"h2"},n),r.a.createElement(s.a,{variant:"body2",color:"textSecondary",component:"p"},i)))),r.a.createElement(T.a,{className:m.cardActions},r.a.createElement(s.a,{variant:"subtitle1",color:"textPrimary",component:"p"},"$",o),r.a.createElement(u.a,{className:m.linkToItemPage,size:"small",color:"primary"},r.a.createElement(c.b,{to:"/productos/"+l,className:m.textDecorationNone},"Ver producto")))))}var D=Object(m.a)((function(e){return{container:{display:"flex",flexDirection:"row",flexWrap:"wrap",maxHeight:350},item:{marginRight:e.spacing(1),marginBottom:e.spacing(1)}}}));function P(e){var t=e.items,a=D();return r.a.createElement("div",{className:a.container},r.a.createElement(C.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},t.map((function(e){var t=e.id,n=e.name,i=e.shortSpecs,o=e.image,c=e.price,l=e.uniqueProductUrlName;return r.a.createElement(B,{className:a.item,key:t,name:n,description:i,image:o,price:c,uniqueProductUrlName:l})}))))}var L=a(74),S=a.n(L);function A(e){var t=e.gifHeight,a={display:"flex",margin:"auto",height:void 0===t?50:t};return r.a.createElement("img",{src:S.a,style:a,alt:"Cargando p\xe1gina..."})}var W=Object(m.a)((function(e){return{sectionTitles:{textAlign:"center",margin:e.spacing(2)}}}));function q(){var e=W(),t=r.a.useState([]),a=Object(E.a)(t,2),n=a[0],i=a[1],o=r.a.useState(!0),c=Object(E.a)(o,2),l=c[0],m=c[1];return r.a.useEffect((function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},a=y.collection("productos").where("selledQuantity",">",4e4).orderBy("selledQuantity","desc").get();a.then((function(t){if(t.size>0){var a=t.docs.map((function(e){return Object(b.a)(Object(b.a)({},e.data()),{},{id:e.id})}));e(a)}})).catch((function(e){t(e)}))}(i)}),[]),r.a.useEffect((function(){m(!1)}),[n]),r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{className:e.sectionTitles,variant:"h5",component:"div"},"Productos m\xe1s vendidos (+40.000 ventas)"),l?r.a.createElement(A,null):r.a.createElement(P,{items:n}))}var F=a(8),M=a(86),Q=a(155),R=a(157),z=(a(104),Object(m.a)((function(e){return{container:{display:"flex",flexDirection:"column",padding:e.spacing(2)},quantityMinMax:{display:"flex",justifyContent:"space-between",color:"#0DC143"},min:{marginRight:e.spacing(2)},max:{marginLeft:e.spacing(2)},inputQuantity:{display:"block",marginLeft:"auto",marginRight:"auto",marginTop:-30,textAlign:"center",maxWidth:60},slider:{display:"block",maxWidth:"90%",marginTop:e.spacing(2),marginLeft:"auto",marginRight:"auto"},buttonContainer:{marginTop:e.spacing(2),display:"flex"},deleteCartButton:Object(F.a)({flexBasis:"60%",marginLeft:e.spacing(1)},e.breakpoints.only("md"),{wordSpacing:15e4})}}))),V={center:{textAlign:"center"}};function H(e){var t=e.initialValue,a=e.minValue,i=e.maxValue,o=e.onCartItemAdded,c=e.onCartItemDeleted,l=e.onQuantityChange,m=Object(n.useState)(t),p=Object(E.a)(m,2),d=p[0],g=p[1],f=z();return Object(n.useEffect)((function(){"function"===typeof l&&l(d)}),[d]),r.a.createElement("div",{className:f.container},r.a.createElement(s.a,{className:f.quantityMinMax,variant:"caption",component:"div"},r.a.createElement("span",{className:f.min},"Min: ",a),r.a.createElement("span",{className:f.max},"Max: ",i)),r.a.createElement(Q.a,{className:f.inputQuantity,inputProps:{style:V.center,step:1,min:a,max:i,type:"number"},onBlur:function(){d<a?g(a):d>i&&g(i)},value:d,onChange:function(e){g(""===e.target.value?0:Number(e.target.value))}}),r.a.createElement(R.a,{className:f.slider,value:"number"===typeof d?d:0,min:a,max:i,step:1,valueLabelDisplay:"auto",onChange:function(e,t){g(t)}}),r.a.createElement("div",{className:f.buttonContainer},r.a.createElement(u.a,{variant:"outlined",color:"primary",fullWidth:!0,onClick:function(){"function"===typeof o&&o(d)}},"Al carrito"),r.a.createElement(u.a,{className:f.deleteCartButton,variant:"outlined",color:"secondary",fullWidth:!0,onClick:function(){"function"===typeof c&&c()}},"Eliminar item")))}var U=a(44),$={totalItemQuantity:0,items:[]},G=Object(n.createContext)($),J=function(){return Object(n.useContext)(G)};function K(e){var t=e.initialValue,a=void 0===t?$:t,i=e.children,o=Object(n.useState)(a),c=Object(E.a)(o,2),l=c[0],m=c[1];function s(e){var t=l.items.filter((function(t){return t.id===e}));return{itemExists:t.length>0,existingItem:t,cartItemsWithoutThisItem:l.items.filter((function(t){return t.id!==e}))}}return Object(n.useEffect)((function(){}),[]),Object(n.useEffect)((function(){}),[l]),r.a.createElement(G.Provider,{value:{cart:l,addItem:function(e){var t=e.id,a=e.quantity,n=e.minProducts,r=e.maxProducts,i=s(t),o=i.itemExists,c=i.existingItem,u=i.cartItemsWithoutThisItem,p=a,d=l.items.length+1,g=l.totalItemQuantity;o&&(g-=c[0].quantity,d=c[0].order),p>r&&(p=r),p<n&&(p=n);var f={totalItemQuantity:g+p,items:[].concat(Object(U.a)(u),[Object(b.a)(Object(b.a)({},e),{},{order:d,quantity:p})])};m(f)},checkIfCartItemExists:s,deleteCartItem:function(e){var t=s(e),a=t.itemExists,n=t.existingItem,r=t.cartItemsWithoutThisItem;a&&m({totalItemQuantity:l.totalItemQuantity-n[0].quantity,items:Object(U.a)(r)})},deleteAllCartItems:function(){m($)},isCartEmpty:function(){return 0===l.totalItemQuantity},totalCartPrice:function(){return l.items.reduce((function(e,t){return e+t.quantity*t.price}),0)}}},i)}var Y=Object(m.a)((function(e){var t;return{root:{flexGrow:1},gridContainer:{margin:0,width:"100% !important"},paper:{display:"relative",margin:e.spacing(2),textAlign:"center"},paperBottom:(t={marginTop:e.spacing(2)},Object(F.a)(t,e.breakpoints.only("sm"),{marginLeft:e.spacing(6),marginRight:e.spacing(6)}),Object(F.a)(t,e.breakpoints.up("md"),{marginTop:e.spacing(-1.8)}),Object(F.a)(t,e.breakpoints.up("lg"),{marginTop:e.spacing(3.1)}),t),itemImg:{maxWidth:"100%",maxHeight:400},productName:{padding:e.spacing(1),minHeight:98},paddingTop:{padding:e.spacing(1)},description:Object(F.a)({textAlign:"center",padding:e.spacing(3)+"px !important",marginTop:e.spacing(2)},e.breakpoints.up("md"),{padding:e.spacing(5)+"px !important",paddingTop:e.spacing(1)+"px !important",textAlign:"left"}),itemDescriptionTitle:{marginBottom:e.spacing(2)},buyContainer:{display:"flex",justifyContent:"center"},buyButton:{marginTop:e.spacing(2),marginBottom:e.spacing(2),width:"80%",maxHeight:36}}}));function Z(e){var t=e.item,a=t.id,i=t.name,o=t.price,c=t.shortSpecs,m=t.description,p=t.image,d=t.minProducts,g=t.maxProducts,f=Object(n.useState)(d),h=Object(E.a)(f,2),v=h[0],x=h[1],y=Object(n.useState)(!1),N=Object(E.a)(y,2),j=N[0],O=N[1],I=J(),k=I.addItem,T=I.deleteCartItem,w=(0,I.checkIfCartItemExists)(a),B=w.itemExists,D=w.existingItem,P=Y(),L=function(e){var a=Object(b.a)(Object(b.a)({},t),{},{quantity:e});B&&(a=Object(b.a)(Object(b.a)({},t),{},{quantity:e+D[0].quantity})),k(a)};return r.a.createElement(r.a.Fragment,null,j?r.a.createElement(l.a,{to:"/carrito"}):"",r.a.createElement("div",{className:P.root},r.a.createElement(C.a,{className:P.gridContainer,container:!0,spacing:1},r.a.createElement(C.a,{item:!0,xs:12,md:8},r.a.createElement(M.a,{className:P.paper,elevation:3},r.a.createElement("img",{src:p,className:P.itemImg,alt:"Imagen de "+i}))),r.a.createElement(C.a,{item:!0,xs:12,md:4},r.a.createElement("div",{className:P.paper,elevation:3},r.a.createElement(s.a,{className:P.productName,variant:"h4",component:"h2"},i),r.a.createElement(s.a,{className:P.paddingTop,variant:"subtitle1",component:"div"},c),r.a.createElement(s.a,{className:P.paddingTop,variant:"subtitle1",component:"div"},"Precio Unitario",r.a.createElement("br",null),r.a.createElement("strong",null,o))),r.a.createElement(M.a,{className:P.paperBottom,elevation:3},r.a.createElement(H,{initialValue:d,minValue:d,maxValue:g,onQuantityChange:function(e){x(e)},onCartItemAdded:L,onCartItemDeleted:function(){T(a)}}))),r.a.createElement(C.a,{item:!0,xs:12,md:8,className:P.description},r.a.createElement(s.a,{className:P.itemDescriptionTitle,variant:"h5",component:"h3"},"Descipci\xf3n del producto"),m),r.a.createElement(C.a,{item:!0,xs:12,md:4,className:P.buyContainer},r.a.createElement(u.a,{className:P.buyButton,variant:"contained",color:"primary",onClick:function(){L(v),O(!0)}},"Comprar ",v)))))}function X(){var e=Object(l.g)().id,t=r.a.useState([]),a=Object(E.a)(t,2),n=a[0],i=a[1];return r.a.useEffect((function(){x().collection("productos").where("uniqueProductUrlName","==",e).get().then((function(e){e.size>0&&i(e.docs.map((function(e){return Object(b.a)(Object(b.a)({},e.data()),{},{id:e.id})})))}))}),[]),r.a.createElement(r.a.Fragment,null,n.length>0?r.a.createElement(Z,{item:n[0]}):r.a.createElement(f,{productNotFound:!0}))}var _=a(150),ee=a(148),te=a(78),ae=a.n(te),ne=a(108),re=a(149),ie=a(77),oe=a.n(ie),ce=a(76),le=a.n(ce),me=a(75),se=a.n(me),ue=Object(m.a)((function(e){var t,a;return{paper:{marginBottom:e.spacing(2)},itemCartProduct:{},image:{display:"block",marginLeft:"auto",marginRight:"auto",height:80},titleAndDescription:Object(F.a)({},e.breakpoints.down("sm"),{borderLeft:"2px solid "+e.palette.divider,paddingLeft:e.spacing(2)}),itemCartCountContainer:(t={borderLeft:"2px solid "+e.palette.divider,maxWidth:150},Object(F.a)(t,e.breakpoints.down("sm"),{paddingTop:e.spacing(1)}),Object(F.a)(t,e.breakpoints.only("sm"),{borderLeft:"none"}),Object(F.a)(t,e.breakpoints.up("sm"),{maxWidth:"none",display:"flex",justifyContent:"center",alignItems:"center"}),t),deleteItemButtonContainer:{display:"flex",justifyContent:"center",alignItems:"center"},itemPriceContainer:(a={borderLeft:"2px solid "+e.palette.divider,paddingLeft:e.spacing(2)},Object(F.a)(a,e.breakpoints.only("sm"),{paddingTop:e.spacing(2.5)}),Object(F.a)(a,e.breakpoints.up("md"),{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingTop:0}),a),price:{fontWeight:"bold"},totalItemPrice:Object(F.a)({fontWeight:"bold"},e.breakpoints.down("sm"),{marginLeft:e.spacing(.6)}),itemCountInputs:{display:"flex",justifyContent:"space-between"},remove:{},inputField:{textAlign:"center"},add:{}}})),pe={textAlignCenter:{textAlign:"center",width:80}};function de(e){var t=e.item,a=t.id,n=t.name,i=t.price,o=t.shortSpecs,c=t.image,l=t.quantity,m=t.minProducts,u=t.maxProducts,p=ue(),d=r.a.useState(l),g=Object(E.a)(d,2),f=g[0],h=g[1],v=J(),x=v.deleteCartItem,y=v.addItem;r.a.useEffect((function(){y(Object(b.a)(Object(b.a)({},t),{},{quantity:f}))}),[f]);return r.a.createElement(M.a,{elevation:3,className:p.paper},r.a.createElement(ne.a,null,r.a.createElement(C.a,{container:!0,spacing:1},r.a.createElement(C.a,{container:!0,item:!0,xs:11,className:p.itemCartProduct},r.a.createElement(C.a,{item:!0,xs:12,sm:5,md:2},r.a.createElement("img",{className:p.image,src:c,alt:"imagen del producto ".concat(n)})),r.a.createElement(C.a,{item:!0,xs:12,sm:7,md:4,className:p.titleAndDescription},r.a.createElement(s.a,{variant:"h6"},n),r.a.createElement(s.a,{variant:"subtitle1"},o)),r.a.createElement(C.a,{item:!0,xs:12,sm:5,md:3,className:p.itemCartCountContainer},r.a.createElement("div",{className:p.itemCountInputs},r.a.createElement(re.a,{className:p.remove,onClick:function(){h(f-1)},disabled:f<=m},r.a.createElement(se.a,null)),r.a.createElement("div",{className:p.inputField},r.a.createElement(Q.a,{className:p.inputQuantity,inputProps:{style:pe.textAlignCenter,step:1,min:m,max:u,type:"number"},onBlur:function(){f<m?h(m):f>u&&h(u)},value:f,onChange:function(e){h(""===e.target.value?0:Number(e.target.value))}})),r.a.createElement(re.a,{className:p.add,onClick:function(){h(f+1)},disabled:f>=u},r.a.createElement(le.a,null)))),r.a.createElement(C.a,{item:!0,xs:12,sm:7,md:3,className:p.itemPriceContainer},r.a.createElement("span",null,"x ",r.a.createElement("span",{className:p.price},"$",i)," c/u ="),r.a.createElement("span",{className:p.totalItemPrice},"$",(l*i).toLocaleString()))),r.a.createElement(C.a,{item:!0,xs:1,className:p.deleteItemButtonContainer},r.a.createElement(re.a,{color:"secondary",onClick:function(){x(a)}},r.a.createElement(oe.a,null))))))}var ge=Object(m.a)((function(e){var t;return{container:{marginTop:e.spacing(2)},titleContainer:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginBottom:e.spacing(2)},info:{padding:e.spacing(1),textAlign:"center"},title:Object(F.a)({display:"block"},e.breakpoints.up("md"),{display:"inline"}),quantities:(t={display:"inline-flex"},Object(F.a)(t,e.breakpoints.up("md"),{paddingLeft:e.spacing(3)}),Object(F.a)(t,"fontSize",16),t),deleteCartButton:Object(F.a)({marginTop:"auto",marginBottom:"auto",height:50},e.breakpoints.up("xs"),{marginLeft:e.spacing(1.5)}),emptyCartPaper:{marginTop:e.spacing(2),padding:e.spacing(3)},textDecorationNone:{textDecoration:"none",color:"inherit"},total:{marginTop:e.spacing(3),textAlign:"right"},toCheckoutButton:{marginTop:e.spacing(2)}}}));function fe(){var e=ge(),t=J(),a=t.cart,n=t.deleteAllCartItems,i=t.totalCartPrice,o=t.isCartEmpty,l=r.a.createElement(M.a,{elevation:5,className:e.emptyCartPaper},"\xa1El carrito est\xe1 vac\xedo!",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(c.b,{to:"/",className:e.textDecorationNone},r.a.createElement(u.a,{variant:"outlined",color:"primary",component:"div"},"Volver a la P\xe1gina Principal"))),m=r.a.createElement("div",{className:e.total},r.a.createElement(s.a,{variant:"h6",color:"primary"},"Total: $",r.a.createElement("strong",null,i().toLocaleString())),r.a.createElement(c.b,{to:"/checkout",className:e.textDecorationNone},r.a.createElement(u.a,{className:e.toCheckoutButton,variant:"contained",size:"small",color:"primary"},"Proceder al Checkout")));return r.a.createElement(_.a,{maxWidth:"md",className:e.container},r.a.createElement("div",{className:e.titleContainer},r.a.createElement(s.a,{className:e.info,variant:"h5",component:"h1"},r.a.createElement("span",{className:e.title},r.a.createElement("strong",null,"Carrito de compras")),r.a.createElement("div",{className:e.quantities,variant:"subtitle1"},"Total items: ",a.totalItemQuantity)),r.a.createElement(u.a,{className:e.deleteCartButton,variant:"outlined",color:"secondary",endIcon:r.a.createElement(ae.a,null),onClick:function(){return n()}},"Borrar carrito")),r.a.createElement(ee.a,null,o()?l:r.a.createElement(r.a.Fragment,null,a.items.sort((function(e,t){return e.order-t.order})).map((function(e){return r.a.createElement(de,{key:e.order,item:e})})),m)))}var Ee=Object(m.a)((function(e){return{title:{marginTop:e.spacing(5),marginBottom:e.spacing(5)},sendOrderButton:{marginTop:e.spacing(5)}}}));function be(){var e=J(),t=e.cart,a=e.totalCartPrice,n=e.isCartEmpty,i=e.deleteAllCartItems,o=Ee(),c=r.a.useState(!1),m=Object(E.a)(c,2),p=m[0],d=m[1],g=r.a.useState(""),f=Object(E.a)(g,2),b=f[0],h=f[1],v=r.a.useState(""),x=Object(E.a)(v,2),j=x[0],O=x[1],I=r.a.useState(""),k=Object(E.a)(I,2),T=k[0],w=k[1],B=r.a.useState(""),D=Object(E.a)(B,2),P=D[0],L=D[1],S=r.a.useState(""),A=Object(E.a)(S,2),W=A[0],q=A[1];if(n())return r.a.createElement(l.a,{to:"/"});var F=function(){return T===P&&T&&j&&b&&W};return r.a.createElement(r.a.Fragment,null,p?"\xa1Orden enviada exitosamente! Redireccionandote al inicio en 5 segundos...":r.a.createElement(_.a,{maxWidth:"md"},r.a.createElement(s.a,{className:o.title,variant:"h4",component:"h1",color:"initial"},"Finalizar Compra - Generaci\xf3n de orden"),r.a.createElement(C.a,{container:!0,spacing:1},r.a.createElement(C.a,{item:!0,xs:12,md:6},r.a.createElement(Q.a,{name:"nombres",type:"text",value:b,onChange:function(e){return h(e.target.value)},label:"Nombres",variant:"outlined",fullWidth:!0})),r.a.createElement(C.a,{item:!0,xs:12,md:6},r.a.createElement(Q.a,{name:"apellidos",type:"text",value:j,onChange:function(e){return O(e.target.value)},label:"Apellidos",variant:"outlined",fullWidth:!0})),r.a.createElement(C.a,{item:!0,xs:12,md:6},r.a.createElement(Q.a,{name:"email",type:"text",value:T,onChange:function(e){return w(e.target.value)},label:"E-Mail",variant:"outlined",fullWidth:!0})),r.a.createElement(C.a,{item:!0,xs:12,md:6},r.a.createElement(Q.a,{name:"email",type:"text",value:P,onChange:function(e){return L(e.target.value)},label:"E-Mail",variant:"outlined",fullWidth:!0})),r.a.createElement(C.a,{item:!0,xs:12,md:12},r.a.createElement(Q.a,{name:"telefono",type:"number",value:W,onChange:function(e){return q(e.target.value)},label:"Tel\xe9fono",variant:"outlined",fullWidth:!0})),F()?r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),"\xa1Puedes pedir tu orden!"):r.a.createElement(r.a.Fragment,null," ",r.a.createElement("br",null),"El correo debe ser el mismo y todos los datos son obligatorios.")),r.a.createElement(u.a,{className:o.sendOrderButton,variant:"contained",color:"primary",fullWidth:!0,onClick:function(){!function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},i={buyer:e,items:t,date:N.firestore.Timestamp.fromDate(new Date),totalCartPrice:a},o=y.collection("ordenes");o.add(i).then((function(e){var t=e.id;n(t)})).catch((function(e){r(e)}))}({name:b,surname:j,email:T,phone:W},Object(U.a)(t.items.map((function(e){return{id:e.id,quantity:e.quantity}}))),a(),(function(){d(!0)})),setTimeout((function(){i()}),5200)},disabled:!F()},"enviar orden")))}var he=a(12),ve=a(156),xe=a(151),ye=a(84),Ne=a(152),Ce=a(153),je=a(154),Oe=a(83),Ie=a.n(Oe),ke=a(80),Te=a.n(ke),we=a(79),Be=a.n(we),De=a(82),Pe=a.n(De),Le=a(81),Se=a.n(Le),Ae=Object(m.a)((function(e){var t;return{textDecorationNoneDFlex:{textDecoration:"none",color:"inherit",display:"flex"},textDecorationNone:{textDecoration:"none",color:"inherit"},grow:{flexGrow:1},brandLogo:{marginTop:e.spacing(.5),marginRight:e.spacing(2)},search:Object(F.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(he.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(he.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%",maxHeight:"39px"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto",marginTop:"auto",marginBottom:"auto"}),searchIcon:Object(F.a)({padding:e.spacing(0,1.4),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},e.breakpoints.only("sm"),{marginLeft:"-30px"}),inputRoot:{color:"inherit"},inputInput:(t={padding:e.spacing(1.5,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},Object(F.a)(t,e.breakpoints.only("sm"),{paddingLeft:"1em"}),Object(F.a)(t,e.breakpoints.up("md"),{width:"22ch","&:focus":{width:"28ch"}}),t),sectionDesktop:Object(F.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobileMenuTrigger:Object(F.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),categoriesContainer:{marginLeft:e.spacing(1.5),height:"100%",marginTop:"auto",marginBottom:"auto"},categoriesIcon:{verticalAlign:"middle",marginRight:e.spacing(1)},navBarOffset:e.mixins.toolbar}}));function We(){var e=Ae(),t=J().cart,a=r.a.useState([{categoryName:"Cargando categor\xedas..."}]),n=Object(E.a)(a,2),i=n[0],o=n[1],l=r.a.useState(null),m=Object(E.a)(l,2),p=m[0],d=m[1],g=r.a.useState(null),f=Object(E.a)(g,2),h=f[0],v=f[1];r.a.useEffect((function(){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},a=y.collection("categorias").get();a.then((function(t){if(t.size>0){var a=t.docs.map((function(e){return Object(b.a)({},e.data())}));e(a)}})).catch((function(e){t(e)}))}(o)}),[]);var x=Boolean(h),N=Boolean(p),C=function(e){v(e.currentTarget)},j=function(){d(null)},O=r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(Be.a,null)),r.a.createElement(ve.a,{placeholder:"Buscar productos...",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})),I=r.a.createElement(re.a,{"aria-label":"carrito de compras",color:"inherit"},r.a.createElement(xe.a,{badgeContent:t.totalItemQuantity,color:"secondary",showZero:!0,max:9999},r.a.createElement(Te.a,null))),k=r.a.createElement(ye.a,{id:"primary-search-account-menu",anchorEl:h,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:x,onClose:function(){v(null),j()}},i.map((function(t){var a=t.categoryName,n=t.categoryNumber;return r.a.createElement(c.b,{key:"link "+n,to:"/categorias/".concat(a),className:e.textDecorationNone},r.a.createElement(Ne.a,{key:n},a))}))),T=r.a.createElement(u.a,{"aria-label":"men\xfa de categor\xedas disponibles","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",className:e.categoriesContainer},r.a.createElement(Se.a,{className:e.categoriesIcon})," ",r.a.createElement("span",null,"Categor\xedas")),w=r.a.createElement(ye.a,{anchorEl:p,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:N,onClose:j},r.a.createElement(Ne.a,null,O),r.a.createElement(Ne.a,{onClick:C},T),r.a.createElement("hr",null),r.a.createElement(c.b,{to:"/carrito",className:e.textDecorationNone},r.a.createElement(Ne.a,null,I,r.a.createElement("p",null,"Carrito"))));return r.a.createElement("div",{className:e.grow},r.a.createElement(Ce.a,null,r.a.createElement(je.a,null,r.a.createElement(c.b,{to:"/",className:e.textDecorationNoneDFlex},r.a.createElement(Pe.a,{className:e.brandLogo}),r.a.createElement(s.a,{variant:"h6",noWrap:!0},"Material E-Commerce")),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionDesktop},O,r.a.createElement(c.b,{to:"/carrito",className:e.textDecorationNone},I),r.a.createElement("div",{onClick:C},T)),r.a.createElement("div",{className:e.sectionMobileMenuTrigger},r.a.createElement(re.a,{"aria-label":"ver m\xe1s","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){d(e.currentTarget)},color:"inherit"},r.a.createElement(Ie.a,null))))),w,k,r.a.createElement("div",{className:e.navBarOffset}))}var qe={categorieTitle:{textAlign:"center",marginTop:20,marginBottom:20}};function Fe(){var e=Object(l.g)().name,t=r.a.useState([]),a=Object(E.a)(t,2),n=a[0],i=a[1],o=r.a.useState(!0),c=Object(E.a)(o,2),m=c[0],u=c[1];return r.a.useEffect((function(){!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n=y.collection("categorias").where("categoryName","==",e).get();n.then((function(e){if(e.size>0){var n=e.docs.map((function(e){return e.id}))[0],r=y.collection("categorias").doc(n);y.collection("productos").where("category","==",r).get().then((function(e){var a=e.docs.map((function(e){return Object(b.a)(Object(b.a)({},e.data()),{},{id:e.id})}));t(a)})).catch((function(e){a(e)}))}})).catch((function(e){a(e)}))}(e,i)}),[e]),r.a.useEffect((function(){n!==[]&&u(!1)}),[n]),r.a.createElement(r.a.Fragment,null,m?r.a.createElement(A,null):n.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{style:qe.categorieTitle,variant:"h4",color:"initial"},"Categor\xeda: ",e),r.a.createElement(P,{items:n})):r.a.createElement(f,{categoryNotFoundOrHasNoneItems:!0}))}function Me(){}var Qe=function(){return r.a.createElement(c.a,null,r.a.createElement(K,null,r.a.createElement(We,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:q}),r.a.createElement(l.b,{exact:!0,path:"/carrito",component:fe}),r.a.createElement(l.b,{exact:!0,path:"/checkout",component:be}),r.a.createElement(l.b,{path:"/productos/:id",component:X}),r.a.createElement(l.b,{path:"/categorias/:name",component:Fe}),r.a.createElement(l.b,{path:"/busqueda/:searchquery",component:Me}),r.a.createElement(l.b,{exact:!0,path:"/admin"}),r.a.createElement(l.b,{component:f}))))};a(106);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,t,a){e.exports=a.p+"static/media/404.c0a4937e.png"},74:function(e,t,a){e.exports=a.p+"static/media/Loading.829ae23f.gif"},91:function(e,t,a){e.exports=a(107)}},[[91,1,2]]]);
//# sourceMappingURL=main.980976a0.chunk.js.map