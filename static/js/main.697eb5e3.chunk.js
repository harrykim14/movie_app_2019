(this.webpackJsonpmovie_app_2019=this.webpackJsonpmovie_app_2019||[]).push([[0],{32:function(e,a,t){e.exports=t(62)},55:function(e,a,t){},56:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(23),i=t.n(s),c=t(28),o=t(1);var m=function(){return r.a.createElement("span",null,"About this page: I built it beacause I love movies.")},l=t(10),u=t.n(l),v=t(24),p=t(25),_=t(26),d=t(31),g=t(30),E=t(27),y=t.n(E);t(55);var f=function(e){var a=e.year,t=e.title,n=e.summary,s=e.medium_cover_image,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:t,title:t}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},t),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"},i.map((function(e,a){return r.a.createElement("li",{className:"genres__genre",key:a},e)}))),r.a.createElement("p",{className:"movie__summary"},n.slice(0,180),"...")))},h=(t(56),function(e){Object(d.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(v.a)(u.a.mark((function a(){var t,n;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=a.sent,n=t.data.data.movies,e.setState({movies:n,isLoading:!1}),console.log({movies:n});case 6:case"end":return a.stop()}}),a)}))),e}return Object(_.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"},a?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(f,{key:e.id,medium_cover_image:e.medium_cover_image,id:e.id,year:e.year,title:e.title,summary:e.summary,genres:e.genres})}))))}}]),t}(r.a.Component));var b=function(){return r.a.createElement(c.a,null,r.a.createElement(o.a,{path:"/",component:h}),r.a.createElement(o.a,{path:"/about",component:m}))};i.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.697eb5e3.chunk.js.map