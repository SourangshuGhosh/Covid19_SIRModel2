(this.webpackJsonpmiasto=this.webpackJsonpmiasto||[]).push([[0],{11:function(e,t,a){e.exports={lineChart:"LineChart_lineChart__1YIFO",labelY:"LineChart_labelY__3CF0E",labelX:"LineChart_labelX__L30Wm"}},22:function(e,t,a){e.exports=a(28)},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(14),r=a.n(o),s=(a(27),a(1)),l=a(6),c=a(2),u=a(3),m=a.n(u),h=a(15),p=a(16),f=a(9),d=a(18),b=a(20),v=a(12),E=a(17),g=a.n(E),k=a(5),y=a.n(k);function _(e,t){for(var a,n,i,o=e.length,r=o-t,s=_.swaps;o-- >r;)i=o+1,n=e[a=Math.floor(Math.random()*i)],e[a]=e[o],e[o]=n,s.push(o),s.push(a);for(var l=e.slice(r);t--;)o=s.pop(),a=s.pop(),n=e[o],e[o]=e[a],e[a]=n;return l}function S(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e}function O(e){var t=Math.random(),a=0;for(var n in e){var i=Object(c.a)(e[n],2),o=i[0],r=i[1];if(t<=(a+=o))return r}}function w(e,t,a){return Math.min(Math.max(a,e),t-50)}function j(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function C(){}_.swaps=[];var I={house:"\ud83c\udfe0",hospital:"\ud83c\udfe5",temple:"\ud83d\udd4d",station:"\ud83d\ude8c",supermarket:"\ud83d\uded2"};function R(e){var t,a=e.layout,n=e.node,o=e.width,r=e.height,l=e.type,c=e.venue,u=e.onNodeClick,m=void 0===u?C:u,h=a[n.id],p="translate(\n    ".concat(w(h.x,o,7),",\n    ").concat(w(h.y,r,30),"\n  )"),f=g()((t={},Object(s.a)(t,y.a.node,!0),Object(s.a)(t,y.a[l],!0),Object(s.a)(t,y.a[c],!0),Object(s.a)(t,y.a.suspectible,0===n.state),Object(s.a)(t,y.a.sick,1===n.state),Object(s.a)(t,y.a.recovered,2===n.state),Object(s.a)(t,y.a.dead,3===n.state),Object(s.a)(t,y.a.locked,n.locked),t));return i.a.createElement("g",{key:"".concat(n.id,"-Node"),id:n.id,transform:p},"venue"===n.type?i.a.createElement("text",{className:f,onClick:m(n.id),x:-8,y:7,fontSize:16},I[n.venue]):3===n.state?i.a.createElement("text",{onClick:m(n.id),x:-8,y:7,fontSize:16},"\ud83d\udc80"):i.a.createElement("circle",{className:f,r:5,stroke:0,onClick:m(n.id),fill:"black"}),!1,n.locked&&i.a.createElement("circle",{r:40,fill:"none",stroke:"gray",strokeWidth:2}))}var A=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).handleTick=n.handleTick.bind(Object(f.a)(n)),n.setCurrent=n.setCurrent.bind(Object(f.a)(n)),n.state={current:null,layout:e.nodes.reduce((function(e,t){return e[t.id]={x:0,y:0},e}),{})},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentWillMount",value:function(){this.runForceSimulation(),this.simulation.on("tick",this.handleTick)}},{key:"componentWillUnmount",value:function(){this.simulation.on("tick",null)}},{key:"componentWillReceiveProps",value:function(e){this.props.tick!==e.tick&&this.updateForceSimulation()}},{key:"updateForceSimulation",value:function(){this.simulation.alpha(.2).restart(),this.simulation.nodes(this.props.nodes),this.simulation.force("link").links(this.props.edges)}},{key:"shouldComponentUpdate",value:function(e,t){return e.tick!==t.tick}},{key:"runForceSimulation",value:function(){var e=this.props,t=e.nodes,a=e.edges;(this.simulation=Object(v.c)(t).force("link",Object(v.b)().id((function(e){return e.id}))).force("collide",Object(v.a)((function(){return 1})).iterations(1).radius(9))).force("link").links(a).distance(25)}},{key:"handleTick",value:function(){var e=this.simulation,t=this.state.layout,a={};e.nodes().map((function(e){a[e.id]=e})),this.setState({layout:Object(l.a)({},t,{},a)})}},{key:"setCurrent",value:function(e){var t=this;return function(){t.setState({current:e})}}},{key:"render",value:function(){var e=this,t=this.props,a=t.nodes,n=(t.edges,t.width),o=t.height,r=t.onNodeClick,s=this.state,l=s.layout,c=s.current;return i.a.createElement("svg",{width:n,ref:function(t){return e.svgRef=t},height:o,style:{shapeRendering:"geometricPrecision"}},a.map((function(e,t){return i.a.createElement(R,Object.assign({key:t,node:e,layout:l,current:c,width:n,height:o,onNodeClick:r},e))})))}}]),a}(n.Component);A.defaultProps={width:900,height:600,nodes:[],edges:[]};var N=a(19),x=a(11),M=a.n(x);function T(e,t,a,n){return e.slice(Math.max(e.length-n,0)).reduce((function(e,n,i){return e.concat("".concat(i*t,", ").concat(-n*a))}),[]).join(" ")}function D(e){var t=e.width,a=e.height,n=e.xOffset,o=void 0===n?10:n,r=e.yOffset,s=void 0===r?17:r,l=e.data,c=void 0===l?[]:l,u=e.maxXEntries,m=void 0===u?100:u,h=a-50,p=Math.max.apply(Math,[h].concat(Object(N.a)(c.reduce((function(e,t){var a=t.points;return e.concat(a)}),[])))),f=h/p;return i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:M.a.labelY},"population \u2192"),i.a.createElement("svg",{className:M.a.lineChart,width:t,height:a},i.a.createElement("g",{transform:"scale(1, ".concat(f,"), translate(0, ").concat((a-30)/f,")")},c.map((function(e,t){var a=e.points,n=e.color;return i.a.createElement("g",{key:"line-".concat(t),transform:"translate(".concat(o+5,", ").concat(1+s,")")},i.a.createElement("polyline",{points:T(a,2.5,1,m),stroke:n,fill:"transparent",strokeWidth:2}))})))),i.a.createElement("span",{className:M.a.labelX},"days since the first case \u2192"))}var P=a(4),W=a.n(P);function L(e){var t=e.simulationState,a=e.onSettingChange,n=e.onRestartButtonClick;return i.a.createElement("div",{className:W.a.container},i.a.createElement("div",{className:W.a.form},i.a.createElement("label",null,"Initial sick agents",i.a.createElement("br",null),i.a.createElement("input",{type:"range",onChange:a("initialSickAgents"),value:t.initialSickAgents,min:0,max:10})," ",i.a.createElement("span",{className:W.a.value},t.initialSickAgents)),i.a.createElement("label",null,"Agents per building ",i.a.createElement("br",null),i.a.createElement("input",{type:"range",onChange:a("agentsPerHouse"),value:t.agentsPerHouse,min:1,max:10})," ",i.a.createElement("span",{className:W.a.value},t.agentsPerHouse)),i.a.createElement("label",null,"Houses ",i.a.createElement("br",null),i.a.createElement("input",{type:"range",onChange:a("houses"),value:t.houses,min:0,max:100})," ",i.a.createElement("span",{className:W.a.value},t.houses)),i.a.createElement("label",null,"Bus stations ",i.a.createElement("br",null),i.a.createElement("input",{type:"range",onChange:a("busStations"),value:t.busStations,min:0,max:10})," ",i.a.createElement("span",{className:W.a.value},t.busStations)),i.a.createElement("label",null,"Hospitals ",i.a.createElement("br",null),i.a.createElement("input",{type:"range",onChange:a("hospitals"),value:t.hospitals,min:0,max:10})," ",i.a.createElement("span",{className:W.a.value},t.hospitals)),i.a.createElement("label",null,"Supermarkets ",i.a.createElement("br",null),i.a.createElement("input",{type:"range",onChange:a("supermarkets"),value:t.supermarkets,min:0,max:10})," ",i.a.createElement("span",{className:W.a.value},t.supermarkets)),i.a.createElement("label",null,"Temples ",i.a.createElement("br",null),i.a.createElement("input",{type:"range",onChange:a("temples"),value:t.temples,min:0,max:10})," ",i.a.createElement("span",{className:W.a.value},t.temples))),i.a.createElement("div",{className:W.a.footer},i.a.createElement("button",{onClick:n},"Restart the simulation")))}var H,G,B=a(10),U=(H={},Object(s.a)(H,0,[[1,0]]),Object(s.a)(H,2,[[1,2]]),Object(s.a)(H,1,[[.995,1],[.004,2],[.001,3]]),Object(s.a)(H,3,[[1,3]]),H),F=(G={},Object(s.a)(G,0,[[.3,1],[.7,0]]),Object(s.a)(G,2,[[1,2]]),Object(s.a)(G,1,[[1,1]]),Object(s.a)(G,3,[[1,3]]),G);function K(e,t){var a=e.location.split("-"),n=Object(c.a)(a,1)[0];if("house"===n&&Math.random()<.9)return"stay";var i,o=t[n];return(i=o)[Math.floor(Math.random()*i.length)]}function q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:600;S(e);for(var a=100,n=e.filter((function(e){return"venue"===e.type})),i=n.length,o=0;o<i;o++){var r=n[o],s=Math.floor(o/(t/a))+1,l=Math.floor(o%(t/a))+1,c=s*a,u=l*a;r.fx=c,r.fy=u}return e}var V=[{name:"house",members:function(e){return e.agentsPerHouse},isRoot:!0,count:function(e){return e.houses}},{name:"temple",count:function(e){return e.temples}},{name:"hospital",count:function(e){return e.hospitals}},{name:"supermarket",count:function(e){return e.supermarkets}},{name:"station",count:function(e){return e.busStations}}],Y={house:["supermarket","station","hospital","house","house","house","house","house","house","house","house"],supermarket:["base","base","base","supermarket"],hospital:["hospital","base","base","base"],station:["supermarket","base","base","base","temple"],temple:["supermarket","base","base","base"]};function z(e){var t=[],a=[];V.forEach((function(n){for(var i=n.name,o=n.members,r=(n.isRoot,n.count),s=(n.alignment,0),l=0;s<r(e);s++,l++){var c="".concat(i,"-").concat(s);if(t.push({type:"venue",venue:i,id:c,size:1}),o)for(var u=0;u<o(e);u++,l++){var m="".concat(i,"-").concat(s,"-").concat(u);t.push({type:"agent",location:c,base:c,id:m,size:1,state:0}),a.push({source:m,target:c})}}}));var n,i=_(t.filter((function(e){return"agent"===e.type})),e.initialSickAgents),o=Object(B.a)(i);try{for(o.s();!(n=o.n()).done;){n.value.state=1}}catch(r){o.e(r)}finally{o.f()}return{nodes:q(t),edges:a}}function X(e,t,a){V.find((function(e){return e.isRoot}));return t.filter((function(e){return"agent"===e.type})).forEach((function(e,n){var i,o=K(e,Y),r=e.location.split("-");Object(c.a)(r,1)[0]===o||"base"===o&&e.location===e.base||"stay"===o||3!==e.state&&Z(t,a,e,"base"===o?t.find((function(t){return t.id===e.base})):(i=e,t.filter((function(e){return e.venue===o})).reduce((function(e,t){return j(i,t)<j(i,e)?t:e}))))})),{nodes:t=function(e,t){var a,n=Object(B.a)(e);try{var i=function(){var n=a.value;if("agent"!==n.type)return"continue";var i=e.find((function(e){var t=e.id;return n.location===t}));t.filter((function(e){return e.target.id===i.id})).map((function(e){return e.source})).forEach((function(e){e.id!==n.id&&(1===n.state&&(e.state=O(F[e.state])),e.state=O(U[e.state]))}))};for(n.s();!(a=n.n()).done;)i()}catch(o){n.e(o)}finally{n.f()}}(t,a),edges:a,state:Object(l.a)({},e,{tick:e.tick+1})}}function Z(e,t,a,n){var i=e.find((function(e){return e.id===a.location}));if(!n.locked&&!i.locked){t.map((function(e){e.source.id===a.id&&(e.target=n)}));a.location=n.id}}var J={tick:0,agentsPerHouse:9,houses:42,busStations:1,hospitals:1,supermarkets:3,temples:1,initialSickAgents:1},Q=z(J);var $=function(){var e=Object(n.useState)(J),t=Object(c.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(Q.nodes),u=Object(c.a)(r,2),h=u[0],p=u[1],f=Object(n.useState)(Q.edges),d=Object(c.a)(f,2),b=d[0],v=d[1],E=Object(n.useState)([]),g=Object(c.a)(E,2),k=g[0],y=g[1],_=Object(n.useState)([]),S=Object(c.a)(_,2),O=S[0],w=S[1],j=Object(n.useState)([]),C=Object(c.a)(j,2),I=C[0],R=C[1],N=Object(n.useState)(!0),x=Object(c.a)(N,2),M=x[0],T=x[1],P=Object(n.useRef)(null);return function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){if(!M){var e=X(a,h,b),t=(e.nodes,e.edges,e.state);o(t),y(k.concat(h.filter((function(e){return 1===e.state})).length)),w(O.concat(h.filter((function(e){return 2===e.state})).length)),R(I.concat(h.filter((function(e){return 3===e.state})).length))}}),1e3),Object(n.useEffect)((function(){T(!1)}),[M]),i.a.createElement("div",{className:m.a.container},i.a.createElement("div",{className:m.a.header},i.a.createElement("h3",null,"Simulating coronavirus with the SIR model"),i.a.createElement("h2",null,"An experiment to analyse how a virus spread over a community")),i.a.createElement("div",{className:m.a.simulation},!M&&i.a.createElement(A,{width:110*Math.round(h.filter((function(e){return"venue"===e.type})).length/6),height:700,tick:a.tick,nodes:h,edges:b,onNodeClick:function(e){return function(){var t=h.find((function(t){var a=t.id;return e===a}));"venue"===t.type&&(t.locked=!t.locked)}},ref:P})),i.a.createElement("div",{className:m.a.section},i.a.createElement("div",{className:m.a.stats},i.a.createElement("h3",null,"Stats"),i.a.createElement("div",{className:m.a.population},"POPULATION: ",h.filter((function(e){return"agent"===e.type})).length," ",i.a.createElement("br",null),"DEAD: ",h.filter((function(e){return 3===e.state})).length," ",i.a.createElement("br",null),"RECOVERED: ",h.filter((function(e){return 2===e.state})).length," ",i.a.createElement("br",null),"SICK: ",h.filter((function(e){return 1===e.state})).length," ",i.a.createElement("br",null)),i.a.createElement(D,{width:300,height:270,data:[{color:"red",points:k},{color:"green",points:O},{color:"black",points:I}]})),i.a.createElement("div",{className:m.a.simulationSettings},i.a.createElement("h3",null,"Settings"),i.a.createElement("div",{className:m.a.simulationInfo},"Click on a building on the map to make it quarantined."),i.a.createElement(L,{simulationState:a,onSettingChange:function(e){return function(t){o(Object(l.a)({},a,Object(s.a)({},e,t.target.value)))}},onRestartButtonClick:function(){var e=z(a),t=e.nodes,n=e.edges;T(!0),p(t),v(n),R([]),w([]),y([]),o(Object(l.a)({},a,{tick:0}))}}))),i.a.createElement("div",{className:m.a.pageInfo},i.a.createElement("div",{className:m.a.section},i.a.createElement("h1",null,"What is this?"),i.a.createElement("p",null,"This is a simulation of how a virus spread of the population. The simulation is heavily inspired by the SIR model. SIR is a technique used to simplify the mathematical modelling of infectious disase."),i.a.createElement("p",null,"In the SIR model, we have three different states of each agent (a person). The first state is",i.a.createElement("i",null," SUSPECTIBLE"),", second one is ",i.a.createElement("i",null," SICK"),", and the last one is",i.a.createElement("i",null," RECOVERED"),". We have also a ",i.a.createElement("i",null," DEAD")," state in this simulation."),i.a.createElement("h1",null,"How does it work?"),i.a.createElement("p",null,"Every agent starts with the `SUSPECTIBLE` state in the simulation, except a few of them. Some of the agents are on the `SICK` state at the very beginning. Over the time, sick agents spread the virus to rest of the population and the other agents get sick as well. After the infection, they switch into a recovered or a dead state based on some probabilistic values."),i.a.createElement("p",null,"The probabilistic values are defined in a markov-chain concept. Markov chain is a stochastic model to describe a sequence of possible events that can occur in the future."),i.a.createElement("h1",null,"How does a probabilistic model look like?"),i.a.createElement("p",null,"We're using a markov graph to define a probabilistic transition. We can simply say that markov chain is a graph of all the possible state transitions of an individual node."),i.a.createElement("div",{style:{height:600}},i.a.createElement("iframe",{style:{position:"absolute",border:0,marginLeft:"-4em"},width:970,height:650,src:"https://fatiherikli.github.io/markov-chain-demo/index-en.html"})),i.a.createElement("p",null,"In a infectious disaese case, we can use markov chains to define the probabilistic chain of an person to be inftected, to be recovered, or to be dead. Furthermore, we can also define the possible travel route of an agent by using the same technique."),i.a.createElement("h1",null,"How can we define a probabilistic model of an infecitious disease?"),i.a.createElement("p",null,"As I previously mentioned, we can use the SIR model to set up the simulation, and we can use markov chains to define probabilistic model of an infectious disaese."),i.a.createElement("p",{style:{fontWeight:"bold"}},"I would like to give a disclaimer that, I'm just an open-source developer who loves building data visualizations and simulations, I don't have a background of Epidemiology or other related stuff. Please don't take my assumptions seriously."),i.a.createElement("p",null,"Here's the state transition map of an agent over the time."),i.a.createElement("pre",null,"const SIR_TRANSITION_STATE = {\n  [SUSPECTIBLE]: [\n    [1, SUSPECTIBLE],\n  ],\n  [RECOVERED]: [\n    [1, RECOVERED],\n  ],\n  [SICK]: [\n    [0.995, SICK],\n    [0.004, RECOVERED],\n    [0.001, DEAD],\n  ],\n  [DEAD]: [\n    [1, DEAD],\n  ],\n};"),i.a.createElement("p",null,"Simulation's clock ticks on each second. On each tick, all the agents are subject to that transition map. As you can see on that object, we have defined states as keys, and possible values of that specific state. For example, a suspectible person will be always suspectible, there's no any state change for that state, yet. But for a sick agent, there are two more possible states different than it's actual state. So the options are; staying as sick until the next state transition, being recovered, or being dead. The values defined before the next state is the probabilistic value."),i.a.createElement("pre",null,"const DISEASE_SPREAD_TRANSITION = {\n  [SUSPECTIBLE]: [\n    [0.3, SICK],\n    [0.7, SUSPECTIBLE],\n  ],\n  [RECOVERED]: [\n    [1, RECOVERED],\n  ],\n  [SICK]: [\n    [1, SICK],\n  ],\n  [DEAD]: [\n    [1, DEAD],\n  ],\n};"),i.a.createElement("p",null,"The previous transition map was for a person who has no any interaction with a sick person. When an agent meets with a sick person, the possibility of getting sick is different. As you can see on this map, a suspectible person will get sick by the possibility of %30."),i.a.createElement("p",null,"Question: In that map, people who already recovered from the virus develop an immunity and don't get sick again. How could we define the probabilistic map if the disease was super infectious and people who recovered don't gain any immunity?"),i.a.createElement("h2",null,"Other simulations"),i.a.createElement("p",null,"If you liked that stuff, you can explore other simulations that I created in the past."),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"https://fatiherikli.github.io/post-truth/"},"Post-truth: How a disinformation spreads over a community")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://fatiherikli.github.io/language-evolution-simulation/"},"Language-evolution: Simulation of the evolution of languages")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://fatiherikli.github.io/crowd-simulation/"},"Crowd-of-istanbul: Crowd simulation of Istanbul streets"))),i.a.createElement("br",null),i.a.createElement("h1",null,"I would like to discover more"),i.a.createElement("p",null,"This is an MIT-licensed open-source project, you can find the source code on github. Feel free to copy, use or modify it for your own simulations."),i.a.createElement("p",null,i.a.createElement("a",{href:"https://github.com/SourangshuGhosh/Covid19_SIRModel2"},"https://github.com/SourangshuGhosh/Covid19_SIRModel2")),i.a.createElement("p",{style:{marginBottom:"4em"}},"Thanks for reading this article, and stay safe! ",i.a.createElement("br",null)," ",i.a.createElement("a",{href:"https://sourangshu.github.io"},"My personal Web page")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,a){e.exports={container:"App_container__1MQN3",header:"App_header__3ZZ1n",simulationContainer:"App_simulationContainer__23iFm",simulation:"App_simulation__1Y9Gr",section:"App_section__1OL6S",simulationSettings:"App_simulationSettings__txA-R",stats:"App_stats__2fMs7",population:"App_population__3MVPW",simulationInfo:"App_simulationInfo__1KRFk",pageInfo:"App_pageInfo__2E9cf"}},4:function(e,t,a){e.exports={container:"SimulationSettings_container__vY4rL",form:"SimulationSettings_form__E6YUW",value:"SimulationSettings_value__1sPd7",footer:"SimulationSettings_footer__1GRqa"}},5:function(e,t,a){e.exports={node:"Graph_node__2LUmU",venue:"Graph_venue__1yeeL",hospital:"Graph_hospital__2-HM5",teatr:"Graph_teatr__3zcOH",station:"Graph_station__3oWAU",supermarket:"Graph_supermarket__x5o1m",suspectible:"Graph_suspectible__qkWqd",dead:"Graph_dead__aGtk-",sick:"Graph_sick__2ig0f",recovered:"Graph_recovered__3crc2",lockedSymbol:"Graph_lockedSymbol__1OEeZ"}}},[[22,1,2]]]);
//# sourceMappingURL=main.54c0ab46.chunk.js.map
