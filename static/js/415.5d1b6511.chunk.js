"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{1687:function(n,r,t){t.d(r,{NA:function(){return u},SK:function(){return f},_k:function(){return s},oT:function(){return l},zK:function(){return p}});var e=t(5861),a=t(7757),i=t.n(a),c=t(5294),o="7fef7aef972e83dc66426cc863bb7bbf";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,e.Z)(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day?api_key=".concat(o));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,e.Z)(i().mark((function n(r){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?query=".concat(r,"&api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(i().mark((function n(r){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(r,"?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(i().mark((function n(r){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(r,"/credits?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(i().mark((function n(r){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},213:function(n,r,t){t.d(r,{D:function(){return s}});var e,a=t(168),i=t(5867),c=t(184),o=i.ZP.b(e||(e=(0,a.Z)(["\n  margin-left: 64px;\n  font-size: 24px;\n  color: red;\n"]))),s=function(n){var r=n.children;return(0,c.jsx)(o,{children:r})}},854:function(n,r,t){t.d(r,{a:function(){return i}});var e=t(8881),a=t(184),i=function(){return(0,a.jsx)("div",{style:{marginLeft:"50%"},children:(0,a.jsx)(e.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"MagnifyingGlass-loading",wrapperStyle:{},wrapperClass:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64"})})}},3174:function(n,r,t){t.d(r,{M:function(){return g}});var e,a,i,c,o,s=t(168),u=t(5867),p=t(1087),f=u.ZP.ul(e||(e=(0,s.Z)(["\n  margin-left: 30px;\n  margin-top: 30px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  list-style: none;\n  padding: 0;\n"]))),l=u.ZP.li(a||(a=(0,s.Z)(["\n  width: 200px;\n"]))),d=u.ZP.p(i||(i=(0,s.Z)(["\n  font-size: 18px;\n  margin-top: 12px;\n  color: #fff;\n  font-weight: 700;\n  text-align: center;\n  background-color: #2c3e50;\n  padding: 8px;\n  border-radius: 8px;\n  border: 2px solid #3498db;\n"]))),h=u.ZP.img(c||(c=(0,s.Z)(["\n  height: 300px;\n  width: 100%;\n  border-radius: 10px;\n"]))),v=(0,u.ZP)(p.rU)(o||(o=(0,s.Z)(["\n  text-decoration: none;\n  color: #111;\n  transition: transform 0.3s ease-in-out;\n\n  &:hover {\n    transform: scale(1.05);\n  }\n"]))),x=t(184),g=function(n){var r=n.movies,t=n.location;return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(f,{children:r.map((function(n){return(0,x.jsx)(l,{children:(0,x.jsxs)(v,{to:"/movies/".concat(n.id),state:{from:t},children:[(0,x.jsx)(h,{src:n.poster_path?"https://image.tmdb.org/t/p/w500".concat(n.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:"",width:160}),(0,x.jsx)(d,{children:n.title})]})},n.id)}))})})}},5415:function(n,r,t){t.r(r),t.d(r,{default:function(){return h}});var e=t(5861),a=t(9439),i=t(7757),c=t.n(i),o=t(1687),s=t(2791),u=t(3174),p=t(7689),f=t(854),l=t(213),d=t(184);function h(){var n=(0,s.useState)(!1),r=(0,a.Z)(n,2),t=r[0],i=r[1],h=(0,s.useState)(!1),v=(0,a.Z)(h,2),x=v[0],g=v[1],m=(0,s.useState)([]),w=(0,a.Z)(m,2),Z=w[0],b=w[1],y=(0,p.TH)();return(0,s.useEffect)((function(){i(!0);var n=function(){var n=(0,e.Z)(c().mark((function n(){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o._k)();case 3:t=n.sent,b(null!==(r=t.results)&&void 0!==r?r:[]),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),g(!0);case 10:return n.prev=10,i(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,d.jsxs)(d.Fragment,{children:[Z.length>0&&(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{style:{marginLeft:60},children:"Trending Today"}),(0,d.jsx)(u.M,{movies:Z,location:y})]}),x&&(0,d.jsx)(l.D,{children:"Errors! Please try again!"}),t&&(0,d.jsx)(f.a,{})]})}}}]);
//# sourceMappingURL=415.5d1b6511.chunk.js.map