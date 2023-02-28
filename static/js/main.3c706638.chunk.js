(this["webpackJsonpreact-redux-toolkit-task"]=this["webpackJsonpreact-redux-toolkit-task"]||[]).push([[0],{14:function(t,e,c){t.exports={button:"CartButton_button__3JNXg",badge:"CartButton_badge__2_mdx"}},17:function(t,e,c){t.exports={card:"Card_card__1qeJ3"}},18:function(t,e,c){t.exports={cart:"Cart_cart__3w1Sz"}},21:function(t,e,c){t.exports={header:"MainHeader_header__1oXhY"}},22:function(t,e,c){t.exports={products:"Products_products__f0uyN"}},29:function(t,e,c){},36:function(t,e,c){"use strict";c.r(e);var i=c(16),n=c.n(i),r=(c(29),c(17)),a=c.n(r),s=c(0),o=function(t){return Object(s.jsx)("section",{className:"".concat(a.a.card," ").concat(t.className?t.className:""),children:t.children})},d=c(18),u=c.n(d),l=c(5),j=c.n(l),b=c(3),m=c(6),x=Object(m.b)({name:"Cart",initialState:{items:[],totalQuantity:0},reducers:{addItemToCart:function(t,e){var c=e.payload,i=c.id,n=c.title,r=c.price;if(function(t,e){return t.some((function(t){return t.id===e}))}(t.items,i))h(t,i,1);else{var a={id:i,title:n,quantity:1,totalPrice:r,price:r};t.items.push(a),t.totalQuantity+=a.quantity}},removeItemFromCart:function(t,e){h(t,e.payload,-1)}}});function h(t,e,c){t.items.forEach((function(i){if(i.id===e){if(1===i.quantity&&-1===c)return function(t,e){t.items=t.items.filter((function(t){return t.id!==e}))}(t,e),void(t.totalQuantity+=c);i.quantity+=c,i.totalPrice=i.quantity*i.price,t.totalQuantity+=c}}))}var O=x.actions,p=x,_=c(1),f=function(t){var e=t.item,c=e.id,i=e.title,n=e.quantity,r=e.total,a=e.price,o=Object(b.b)(),d=O.addItemToCart,u=O.removeItemFromCart,l=function(t){o(t?d({id:c}):u(c))};return Object(s.jsxs)("li",{className:j.a.item,children:[Object(s.jsxs)("header",{children:[Object(s.jsx)("h3",{children:i}),Object(s.jsxs)("div",{className:j.a.price,children:["$",r.toFixed(2)," ",Object(s.jsxs)("span",{className:j.a.itemprice,children:["($",a.toFixed(2),"/item)"]})]})]}),Object(s.jsxs)("div",{className:j.a.details,children:[Object(s.jsxs)("div",{className:j.a.quantity,children:["x ",Object(s.jsx)("span",{children:n})]}),Object(s.jsxs)("div",{className:j.a.actions,children:[Object(s.jsx)("button",{onClick:function(){return l(!1)},children:"-"}),Object(s.jsx)("button",{onClick:function(){return l(!0)},children:"+"})]})]})]})},y=Object(_.memo)(f),C=function(t){var e=Object(b.c)((function(t){return t.ui})).cartIsVisible,c=void 0!==e&&e,i=Object(b.c)((function(t){return t.cart})).items;if(c)return Object(s.jsxs)(o,{className:u.a.cart,children:[Object(s.jsx)("h2",{children:"Your Shopping Cart"}),Object(s.jsx)("ul",{children:i.map((function(t){return Object(s.jsx)(y,{item:{id:t.id,title:t.title,quantity:t.quantity,total:t.totalPrice,price:t.price}},t.id)}))})]})},v=c(14),I=c.n(v),N=Object(m.b)({name:"Ui",initialState:{cartIsVisible:!1},reducers:{toggle:function(t){t.cartIsVisible=!t.cartIsVisible}}}),k=N.actions,q=N,g=function(t){var e=Object(b.c)((function(t){return t.cart})).totalQuantity,c=Object(b.b)(),i=k.toggle;return Object(s.jsxs)("button",{className:I.a.button,onClick:function(){c(i())},children:[Object(s.jsx)("span",{children:"My Cart"}),Object(s.jsx)("span",{className:I.a.badge,children:e})]})},P=c(21),F=c.n(P),T=function(t){return Object(s.jsxs)("header",{className:F.a.header,children:[Object(s.jsx)("h1",{children:"ReduxToolkitTask"}),Object(s.jsx)("nav",{children:Object(s.jsx)("ul",{children:Object(s.jsx)("li",{children:Object(s.jsx)(g,{})})})})]})},Q=function(t){return Object(s.jsxs)(_.Fragment,{children:[Object(s.jsx)(T,{}),Object(s.jsx)("main",{children:t.children})]})},B=c(8),S=c.n(B),w=function(t){var e=t.id,c=t.title,i=t.price,n=t.description,r=Object(b.b)(),a=O.addItemToCart;O.removeItemFromCart;return Object(s.jsx)("li",{className:S.a.item,children:Object(s.jsxs)(o,{children:[Object(s.jsxs)("header",{children:[Object(s.jsx)("h3",{children:c}),Object(s.jsxs)("div",{className:S.a.price,children:["$",i.toFixed(2)]})]}),Object(s.jsx)("p",{children:n}),Object(s.jsx)("div",{className:S.a.actions,children:Object(s.jsx)("button",{onClick:function(){r(a({id:e,title:c,price:i}))},children:"Add to Cart"})})]})})},J=c(22),V=c.n(J),Y=function(t){return Object(s.jsxs)("section",{className:V.a.products,children:[Object(s.jsx)("h2",{children:"Buy your favorite products"}),Object(s.jsxs)("ul",{children:[Object(s.jsx)(w,{id:1,title:"Book",price:7,description:"Choose this book!"}),Object(s.jsx)(w,{id:2,title:"Toy",price:100,description:"Nice toy for a dog!"})]})]})},E=Object(m.a)({reducer:{ui:q.reducer,cart:p.reducer}});var X=function(){return Object(s.jsx)(b.a,{store:E,children:Object(s.jsxs)(Q,{children:[Object(s.jsx)(C,{}),Object(s.jsx)(Y,{})]})})};n.a.createRoot(document.getElementById("root")).render(Object(s.jsx)(X,{}))},5:function(t,e,c){t.exports={item:"CartItem_item__4mEic",details:"CartItem_details__1_uz2",quantity:"CartItem_quantity__1-XG0",price:"CartItem_price__t_SQ3",itemprice:"CartItem_itemprice__3wsc9",actions:"CartItem_actions__25eGY"}},8:function(t,e,c){t.exports={item:"ProductItem_item__O4TYj",price:"ProductItem_price__2UHA3",actions:"ProductItem_actions__2ptPq"}}},[[36,1,2]]]);
//# sourceMappingURL=main.3c706638.chunk.js.map