(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(42)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),i=(a(29),a(16)),s=a(5),o=a(6),u=a(8),m=a(7),h=a(13),d=a(9),p=(a(30),a(10)),f=(a(31),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("ul",{className:"list__container"},e.map(function(e){return r.a.createElement(p.b,{className:"links",key:e.id,to:"/card/".concat(e.id)},r.a.createElement("li",{className:"card__container",key:e.id},r.a.createElement("p",{className:"character-name__list"},e.name),r.a.createElement("div",{className:"photo__container"},r.a.createElement("img",{className:"photo__list",src:e.image,alt:e.name})),e.house?r.a.createElement("p",{className:"character-house__list"},"House: ".concat(e.house)):r.a.createElement("p",{className:"character-house__list"},"House: without a House")))}))}}]),t}(r.a.Component)),E=(a(40),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onChangeName,a=e.inputValueName;return r.a.createElement("div",{className:"filter__container"},r.a.createElement("label",{htmlFor:"filter-name",className:"hidden"},"Escribe un personaje"),r.a.createElement("input",{className:"filter__input",id:"filter-name",type:"text",placeholder:"Hermione Granger",value:a,onChange:t}))}}]),t}(r.a.Component)),b=a(11),N=(a(41),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.match,a=e.data,n=t.params.cardId,c=a.find(function(e){return e.id===parseInt(n)});return console.log(c),r.a.createElement("article",{className:"detailCard"},r.a.createElement("div",{className:"detailCard__container"},r.a.createElement("img",{src:c.image,alt:c.name,className:"photo__detail"}),r.a.createElement("p",{className:"name__detail"},c.name),r.a.createElement("p",null,"Date of Birth: ".concat(c.dateOfBirth)),c.house?r.a.createElement("p",null,"House: ".concat(c.house)):r.a.createElement("p",null,"House: ".concat(c.name," does not have a house")),r.a.createElement("p",null,"Patronus: ".concat(c.patronus)),c.alive?r.a.createElement("p",null,"".concat(c.name," is alive at the end of the saga!")):r.a.createElement("p",null,"".concat(c.name," is dead at the end of the saga")," "),r.a.createElement(p.b,{className:"back",to:"/"},"Back")))}}]),t}(r.a.Component)),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={data:[],isFetching:!0,filters:{byName:""}},a.getData=a.getData.bind(Object(h.a)(a)),a.handleInputFilterName=a.handleInputFilterName.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;fetch("http://hp-api.herokuapp.com/api/characters").then(function(e){return e.json()}).then(function(t){var a=t.map(function(e,t){return Object(i.a)({},e,{id:t+1})});e.setState({data:a,isFetching:!1})})}},{key:"handleInputFilterName",value:function(e){var t=e.target.value;this.setState(function(e){return Object(i.a)({},e.filters,{filters:{byName:t}})})}},{key:"getFilteredList",value:function(){var e=this;return this.state.data.filter(function(t){return!!t.name.toLowerCase().includes(e.state.filters.byName.toLowerCase())})}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.isFetching;return r.a.createElement("div",{className:"general__container"},r.a.createElement("header",null,r.a.createElement("h1",{className:"title"},"It's LeviOsa not LeviosA")),n?r.a.createElement("p",null,"Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",render:function(){return r.a.createElement("main",null,r.a.createElement(E,{onChangeName:e.handleInputFilterName,inputValueName:e.state.filters.byName}),r.a.createElement(f,{data:e.getFilteredList()}))}}),r.a.createElement(b.a,{path:"/card/:cardId",render:function(e){return r.a.createElement(N,{match:e.match,data:a})}}))),r.a.createElement("footer",{className:"footer__container"},r.a.createElement("p",{className:"title__footer"},"Harry Potter Cards"),r.a.createElement("p",{className:"author"},"Libertad Pozos"),r.a.createElement("p",{className:"year__footer"},"2019")))}}]),t}(r.a.Component);l.a.render(r.a.createElement(p.a,null,r.a.createElement(_,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.9bbbb72a.chunk.js.map