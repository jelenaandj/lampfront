(this.webpackJsonplampfront=this.webpackJsonplampfront||[]).push([[0],{47:function(e,t,a){e.exports=a(62)},52:function(e,t,a){},53:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),o=(a(52),a(6)),u=(a(53),a(54),a(16)),i=a(7),s=a(34),m=a(44),p=function(){return!!localStorage.getItem("jwt")&&localStorage.getItem("jwt")},d=a(8);function E(){var e=Object(u.g)(),t=Object(n.useContext)(_).cart;return r.a.createElement("div",{className:"navbar"},r.a.createElement(m.a,{sticky:"top",expand:"lg",variant:"light",bg:"light",style:{width:"100%",height:"130px"}},r.a.createElement(s.a,{className:"mr-auto"},r.a.createElement(i.b,{to:"/about"},r.a.createElement("li",null,"About")),r.a.createElement(i.b,{to:"/products"},r.a.createElement("li",null,"Products")),r.a.createElement(i.b,{to:"/contact"},r.a.createElement("li",null,"Contact"))),r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:"lamplogo.webp",alt:"img",style:{width:"70px",height:"50px"}}),r.a.createElement("h3",null,"Lamp ",r.a.createElement("br",null)," Shop")),r.a.createElement(s.a,{className:"nav"},p()?r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{style:{marginRight:"10px"},to:"/cart"},r.a.createElement("li",null,r.a.createElement("img",{src:"cart.png",alt:"img",style:{width:"40px"}}),r.a.createElement("label",{style:{color:"red",fontWeight:"bold",fontSize:"smaller"}},null!==t&&void 0!==t?t.length:""))),r.a.createElement(d.a,{variant:"outline-danger",onClick:function(t){localStorage.removeItem("jwt"),e.push("/")},style:{height:"50px"}},"Log out")):r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{to:"/login"},r.a.createElement("li",null,"Log in")),r.a.createElement(i.b,{to:"/register"},r.a.createElement("li",null,"Register"))))))}var f=a(40),h=a(41);function b(){return r.a.createElement("div",null,r.a.createElement(f.a,{fluid:!0},r.a.createElement(h.a,null,r.a.createElement("h1",null,"ABOUT US"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus ad aliquam deleniti voluptatem. Pariatur, impedit! Animi consectetur, nam nihil dolores repellendus explicabo suscipit quo doloremque numquam nemo vitae ullam!"))))}var g="https://lamp-shop.herokuapp.com",v=function(e,t){return fetch("".concat(g).concat("/api/user/login"),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()}))},y=function(e,t){return fetch("".concat(g).concat("/api/user").concat("/update"),{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8","auth-token":e},body:JSON.stringify({cart:t})}).then((function(e){return e.json()}))};function j(e){var t=e.product,a=t.name,n=t.picture,c=t.price,l=t._id,o=t.sale;return r.a.createElement("div",{className:"product-box"},r.a.createElement(i.b,{to:"/products/".concat(l),style:{color:"black",textDecoration:"none"}},r.a.createElement("div",{className:"product"},r.a.createElement("img",{className:"product-img",src:n,alt:"img"}),r.a.createElement("div",null,r.a.createElement("p",null,a),r.a.createElement("p",null,"Current price: ",c,"$"),r.a.createElement("p",{style:{color:"red"}},o?"".concat(o,"% discount"):"")))))}function O(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){fetch("".concat(g).concat("/api/products")).then((function(e){return e.json()})).then((function(e){l(e.data)}))}),[]),r.a.createElement("div",{className:"product-list"},e.location.sale?c.filter((function(e){return e.sale})).map((function(e){return r.a.createElement(j,{product:e,key:e._id})})):c.map((function(e){return r.a.createElement(j,{product:e,key:e._id})})))}function C(){return r.a.createElement("div",null,r.a.createElement("h1",null,"contact"),r.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, dolore magni? Veritatis dicta corporis impedit repudiandae quam illum accusantium aperiam autem maiores consequatur, explicabo unde quas repellendus laboriosam natus. Debitis!"))}var w=a(45);function x(e){var t=e.match,a=Object(n.useState)(""),c=Object(o.a)(a,2),l=c[0],u=c[1],s=p(),m=Object(n.useContext)(_),E=m.cart,f=m.setCart;Object(n.useEffect)((function(){(function(e){return fetch("".concat(g).concat("/api/products","/").concat(e)).then((function(e){return e.json()}))})(t.params.id).then((function(e){u(e.data)}))}),[]);var h=l.name,b=l.description,v=l._id,j=l.price,O=l.sale;return r.a.createElement("div",{className:"productDets"},r.a.createElement("img",{src:l.picture,alt:"img",className:"dets-img"}),r.a.createElement("div",{className:"details"},r.a.createElement("p",null,h),r.a.createElement("p",{style:{color:"red"}},O?"".concat(O,"% discount"):""," "),r.a.createElement("p",null,"Current price: ",j,"$"),r.a.createElement("p",null,b),r.a.createElement("div",null,p()?r.a.createElement(d.a,{variant:"success",onClick:function(e){if(null!==E&&void 0!==E){var t=Object(w.a)(E);t.push({_id:v,name:h,price:j}),f(t),y(s,t)}e.preventDefault()}},"Put in cart"):r.a.createElement(d.a,{variant:"light",type:"submit"},"Put in cart"),r.a.createElement(d.a,{variant:"primary",style:{margin:"2%"},type:"submit"},r.a.createElement(i.b,{to:"/cart",style:{color:"white",textDecoration:"none"}},"Check out")))))}var S=a(33),k=a.n(S),N=a(42),I=a(5);function T(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(),i=Object(o.a)(l,2),s=i[0],m=i[1],p=Object(u.g)(),E=function(){var e=Object(N.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v(a,s).then((function(e){var t;console.log(e),!1===e.success?alert(e.message):(t=e.token,localStorage.setItem("jwt",t),p.push("/products"))}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"login"},r.a.createElement(I.a,{onSubmit:function(e){return e.preventDefault()}},r.a.createElement(I.a.Group,{controlId:"formBasicEmail"},r.a.createElement(I.a.Label,null,"Email address"),r.a.createElement(I.a.Control,{type:"email",placeholder:"Enter email",onInput:function(e){c(e.target.value)}})),r.a.createElement(I.a.Group,{controlId:"formBasicPassword"},r.a.createElement(I.a.Label,null,"Password"),r.a.createElement(I.a.Control,{type:"password",placeholder:"Password",onInput:function(e){m(e.target.value)}})),r.a.createElement(d.a,{variant:"primary",type:"submit",onClick:E},"Log in")))}var L=a(46);function P(e){var t=e.component,a=Object(L.a)(e,["component"]);return r.a.createElement("div",null,r.a.createElement(u.b,Object.assign({},a,{render:function(e){return p()?r.a.createElement(t,e):r.a.createElement(u.a,{to:"/login"})}})))}function G(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(),i=Object(o.a)(l,2),s=i[0],m=i[1],p=Object(n.useState)(),E=Object(o.a)(p,2),f=E[0],h=E[1],b=Object(n.useState)(),v=Object(o.a)(b,2),y=v[0],j=v[1],O=Object(u.g)();return r.a.createElement("div",{className:"register"},r.a.createElement(I.a,null,r.a.createElement(I.a.Group,null,r.a.createElement(I.a.Label,null,"Username"),r.a.createElement(I.a.Control,{type:"text",placeholder:"Enter username",onInput:function(e){c(e.target.value)}})),r.a.createElement(I.a.Group,{controlId:"formBasicEmail"},r.a.createElement(I.a.Label,null,"Email address"),r.a.createElement(I.a.Control,{type:"email",placeholder:"Enter email",onInput:function(e){m(e.target.value)}})),r.a.createElement(I.a.Group,{controlId:"formBasicPassword"},r.a.createElement(I.a.Label,null,"Password"),r.a.createElement(I.a.Control,{type:"password",placeholder:"Password",onInput:function(e){h(e.target.value)}})),r.a.createElement(I.a.Group,{controlId:"formBasicPassword"},r.a.createElement(I.a.Label,null,"Confirm password"),r.a.createElement(I.a.Control,{type:"password",placeholder:"Confirm password",onInput:function(e){j(e.target.value)}})),r.a.createElement(d.a,{variant:"primary",type:"submit",onClick:function(e){if(e.preventDefault(),y===f)try{(t={name:a,email:s,password:f},fetch("".concat(g).concat("/api/user/register"),{headers:{"Content-Type":"application/json; charset=UTF-8"},method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()}))).then((function(e){!1===e.success&&alert(e.message)})),O.push("/login")}catch(n){alert(n.message)}else alert("Password does not match Confirm password");var t}},"Register")))}var D=a(21);function F(){return r.a.createElement("div",{className:"home"},r.a.createElement(D.a,{className:"text-center"},r.a.createElement(D.a.Body,null,r.a.createElement(D.a.Title,null,"NEW"),r.a.createElement(D.a.Text,null,"Check out our products on sale."),r.a.createElement(d.a,{variant:"info"},r.a.createElement(i.b,{to:{pathname:"/products",sale:"true"},style:{color:"white",textDecoration:"none"}},"HERE")))))}var B=a(43);function U(e){var t=Object(n.useContext)(_),a=t.cart,c=t.setCart,l=e.product,o=l.name,u=l.price,i=l._id,s=e.index,m=e.token,p=e.setDeleted;return r.a.createElement(B.a,{className:"cart-table",striped:!0,bordered:!0,hover:!0},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"#",s+1),r.a.createElement("td",null,"name: ",o),r.a.createElement("td",null,"1 pc"),r.a.createElement("td",null,u,"$"),r.a.createElement("td",{style:{backgroundColor:"white",textAlign:"center"}},r.a.createElement(d.a,{variant:"outline-danger",onClick:function(e){if(0!==a.length){var t=a.find((function(e){return e._id===i})),n=a.indexOf(t);n>-1&&(a.splice(n,1),c(a),y(m,a),p(!0))}}},"x")))))}var A=a(19);function q(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],l=0,u=p(),i=Object(n.useContext)(_),s=i.cart,m=i.setCart,E=Object(n.useState)(),f=Object(o.a)(E,2),h=f[0],b=f[1],v=Object(n.useState)(),y=Object(o.a)(v,2),j=y[0],O=y[1],C=Object(n.useState)(),w=Object(o.a)(C,2),x=w[0],S=w[1],k=Object(n.useState)(),N=Object(o.a)(k,2),T=N[0],L=N[1],P=Object(n.useState)(),G=Object(o.a)(P,2),D=G[0],F=G[1];Object(n.useEffect)((function(){(function(e){return fetch("".concat(g).concat("/api/user"),{method:"GET",headers:{"Content-Type":"application/json; charset=UTF-8","auth-token":e}}).then((function(e){return e.json()}))})(u).then((function(e){return m(e.data.cart)}))}),[a]),null!==s&&void 0!==s&&(void 0!==a&&!1!==a&&c(!1),s.forEach((function(e){return l+=e.price})));return r.a.createElement("div",{className:"cart-div"},r.a.createElement("div",null,void 0!==s&&s.length>0&&r.a.createElement(I.a,{className:"form-div",style:{width:"70%",marginLeft:"100px"}},r.a.createElement(I.a.Row,null,r.a.createElement(I.a.Group,{as:A.a,onChange:function(e){return b(e.target.value)},controlId:"validationCustom01"},r.a.createElement(I.a.Label,null,"Full name"),r.a.createElement(I.a.Control,{placeholder:"Full name"}))),r.a.createElement(I.a.Group,{onChange:function(e){return O(e.target.value)},controlId:"formGridAddress1"},r.a.createElement(I.a.Label,null,"Address"),r.a.createElement(I.a.Control,{placeholder:"1234 Main St"})),r.a.createElement(I.a.Row,null,r.a.createElement(I.a.Group,{onChange:function(e){return S(e.target.value)},as:A.a,controlId:"formGridCity"},r.a.createElement(I.a.Label,null,"Country and city"),r.a.createElement(I.a.Control,null)),r.a.createElement(I.a.Group,{onChange:function(e){return L(e.target.value)},as:A.a,controlId:"formGridZip"},r.a.createElement(I.a.Label,null,"Zip"),r.a.createElement(I.a.Control,null))),r.a.createElement(I.a.Group,{onChange:function(e){return F(!!e.target)},id:"formGridCheckbox"},r.a.createElement(I.a.Check,{type:"checkbox",label:"Subscribe to our newsletter and stay updated"})))),r.a.createElement("div",{className:"cart-map"},null!==s&&void 0!==s?s.map((function(e,t){return r.a.createElement(U,{product:e,setDeleted:c,token:u,key:t,index:t})})):"",r.a.createElement("div",null,"Total: ",l,"$"),r.a.createElement(d.a,{variant:"success",type:"submit",onClick:function(e){if(void 0===s||s.length<1)return alert("cart is empty");try{console.log(h),function(e,t,a,n,r,c,l){return fetch("".concat(g).concat("/api/orders"),{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8","auth-token":e},body:JSON.stringify({name:t,address:a,countryCity:n,zip:r,newsletter:c,cart:l})}).then((function(e){return e.json()}))}(u,h,j,x,T,D,s).then((function(e){if(!1===e.success)return alert(e.message);alert(e.message),function(e){return fetch("".concat(g).concat("/api/user/delete"),{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8","auth-token":e}}).then((function(e){return e.json()}))}(u).then((function(e){console.log(e),m(e.data),!1===e.success&&alert(e.message)}))}))}catch(t){alert("Order has not been made, try again")}}},"Buy")))}function J(){return r.a.createElement("div",null,r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",component:F}),r.a.createElement(u.b,{exact:!0,path:"/about",component:b}),r.a.createElement(u.b,{exact:!0,path:"/products",component:O}),r.a.createElement(u.b,{path:"/products/:id",component:x}),r.a.createElement(u.b,{path:"/contact",component:C}),r.a.createElement(u.b,{path:"/login",component:T}),r.a.createElement(u.b,{path:"/register",component:G}),r.a.createElement(P,{path:"/cart",component:q})))}function R(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"\xa9 LampShop by J.A"))}var _=r.a.createContext();var $=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a={cart:t[0],setCart:t[1]};return r.a.createElement(i.a,{basename:"/lampfront"},r.a.createElement("div",{className:"App"},r.a.createElement(_.Provider,{value:a},r.a.createElement(E,null),r.a.createElement(J,null),r.a.createElement(R,null))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.c0fced60.chunk.js.map