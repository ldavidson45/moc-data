(this["webpackJsonpmoc-data"]=this["webpackJsonpmoc-data"]||[]).push([[0],{102:function(e,t,a){},104:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(50),l=a.n(s),i=a(51),c=a(1),o=(a(102),a(33)),m=a(7),d=a.n(m),u=a(14),h=a(9),p=a(10),b=a(2),_=a(12),f=a(11),g=(a(104),a(22)),v=a.n(g),E="https://api.propublica.org/congress/v1/",y={"X-API-Key":"hWpFMQ9PjckHcjhhIAVMpBjxcCoNsogdQScvfMnp"};function k(){return N.apply(this,arguments)}function N(){return(N=Object(u.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(E,"116/senate/members.json?in_office=true"),{headers:y});case 2:return t=e.sent,e.next=5,v.a.get("".concat(E,"116/house/members.json?in_office=true"),{headers:y});case 5:return a=e.sent,e.next=8,t.data.results[0].members;case 8:return e.t0=e.sent,e.next=11,a.data.results[0].members;case 11:return e.t1=e.sent,n={senate:e.t0,house:e.t1},e.abrupt("return",n);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){switch(e){case"R":return"Republican";case"D":return"Democrat";case"ID":return"Independent";default:return}}function w(e){return M.apply(this,arguments)}function M(){return(M=Object(u.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.api_uri,e.next=3,v.a.get(a,{headers:y});case 3:return n=e.sent,e.next=6,n.data.results[0];case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=["Sort By:","Age: Young to Old","Age: Old to Young","Missed Votes Count","Most Votes Against Party","Most Votes With Party"];function S(e,t){switch(t.target.value){case"Age: Young to Old":return e.sort((function(e,t){return I(e)-I(t)}));case"Age: Old to Young":return e.sort((function(e,t){return I(t)-I(e)}));case"Missed Votes Count":return e.sort((function(e,t){return t.missed_votes-e.missed_votes}));case"Most Votes Against Party":return e.sort((function(e,t){return t.votes_against_party_pct-e.votes_against_party_pct}));case"Most Votes With Party":return e.sort((function(e,t){return t.votes_with_party_pct-e.votes_with_party_pct}));default:return e.sort((function(e,t){return e-t}))}}function I(e){var t=(new Date-new Date(e.date_of_birth))/31536e6;return Math.floor(t)||""}a(122);var j=function(e){Object(_.a)(a,e);var t=Object(f.a)(a);function a(e){return Object(h.a)(this,a),t.call(this,e)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.loading?"loading visible":"loading hidden"},r.a.createElement("div",{className:"loading__spinner"},r.a.createElement("svg",{viewBox:"0 0 83.736137 83.716446"},r.a.createElement("g",{transform:"translate(-54.564819,-111.98972)",id:"layer1"},r.a.createElement("path",{strokeLinecap:"round","path-effect":"#path-effect839",id:"path837",d:"m 61.232142,153.45833 c 0.124999,-10.86399 5.606582,-21.53865 14.363096,-27.97024 5.38797,-3.95742 11.923327,-6.33322 18.594879,-6.7596 6.671553,-0.42638 13.456233,1.09816 19.303953,4.33786 5.84771,3.23969 10.73822,8.18336 13.91433,14.06585 3.17611,5.88249 4.62682,12.68346 4.12731,19.34994 -0.53365,7.12219 -3.29882,14.06107 -7.80996,19.59822 -4.51114,5.53715 -10.74795,9.64766 -17.61531,11.60977 -6.867353,1.9621 -14.334349,1.76696 -21.08985,-0.55115 -6.755501,-2.31811 -12.769104,-6.74877 -16.984876,-12.51398",fill:"none",stroke:"#000000",strokeWidth:"13"})))),r.a.createElement("p",null,"Loading..."))}}]),a}(n.Component),A=(a(123),{AL:"Alabama",AK:"Alaska",AS:"American Samoa",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",CT:"Connecticut",DE:"Delaware",DC:"District Of Columbia",FM:"Federated States Of Micronesia",FL:"Florida",GA:"Georgia",GU:"Guam",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MH:"Marshall Islands",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",MP:"Northern Mariana Islands",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PW:"Palau",PA:"Pennsylvania",PR:"Puerto Rico",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VI:"Virgin Islands",VA:"Virginia",WA:"Washington",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming"}),L=function(e){Object(_.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={fullName:"".concat(e.short_title," ").concat(e.first_name," ").concat(e.last_name),description:"".concat(O(e.party)," from ").concat(A[e.state]),loading:!0,imageLoaded:!1},n.imageUrl=n.imageUrl.bind(Object(b.a)(n)),n.toggleLoading=n.toggleLoading.bind(Object(b.a)(n)),n.cardImg=r.a.createRef(),n.setImageSize=n.setImageSize.bind(Object(b.a)(n)),n}return Object(p.a)(a,[{key:"toggleLoading",value:function(){this.setState({imageLoaded:!0,loading:!1},this.setImageSize)}},{key:"imageUrl",value:function(){return"https://theunitedstates.io/images/congress/original/".concat(this.props.id,".jpg")}},{key:"setImageSize",value:function(){var e=this.cardImg.current||{},t=e.height,a=void 0===t?0:t,n=e.width,r=void 0===n?0:n,s={visibility:this.state.imageLoaded?"visible":"hidden",width:"100%",height:"auto"};return a&&r&&a/r<1&&(s.width="auto",s.height="100%"),s}},{key:"render",value:function(){return r.a.createElement("div",{className:"member-card member-card--"+this.props.party,tabIndex:"0"},r.a.createElement("div",null,r.a.createElement("div",{className:"member-card__image-wrapper"},r.a.createElement("img",{ref:this.cardImg,style:this.setImageSize(),onLoad:this.toggleLoading,className:"member-card__image",src:this.imageUrl(),alt:this.state.fullName})),r.a.createElement("div",{className:"member-name"},r.a.createElement("p",{className:"member-name__first"},this.props.short_title," ",this.props.first_name),r.a.createElement("p",{className:"member-name__last"},this.props.last_name),r.a.createElement("p",{className:"member-name__subtitle"},this.state.description))))}}]),a}(r.a.Component);L.defaultProps={id:"",first_name:"",last_name:"",short_title:"",in_office:!0,state:"",party:""};var x=L,D=(a(48),a(16));var R=function(e){var t=e.data,a=Math.min(300,300)/2-5,n=D.e("#donutChart").append("svg").attr("viewBox","0 0 ".concat(300," ").concat(300)).attr("height","100%").append("g").attr("transform","translate(150,150)"),s=D.d().domain(t).range(e.colors||["black","white"]),l=D.c().value((function(e){return e.value}))(D.b(t)),i=D.a().innerRadius(.4*a).outerRadius(.9*a);return n.selectAll("item").data(l).enter().append("path").attr("d",i).attr("fill",(function(e){return s(e.data.key)})).attr("height","100%").attr("stroke","black").style("stroke-width","2px").style("opacity",.7),r.a.createElement("div",{className:"d3-container"},r.a.createElement("div",{id:"donutChart",key:e.data.a}))},W=function(e){Object(_.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={committees:[]},n.modalWrapper=r.a.createRef(),n.handleClick=n.handleClick.bind(Object(b.a)(n)),n.escFunction=n.escFunction.bind(Object(b.a)(n)),n.committees=n.committees.bind(Object(b.a)(n)),n.modalClose=r.a.createRef(),n}return Object(p.a)(a,[{key:"committees",value:function(){var e=this.props.selectedMember&&this.props.selectedMember.roles&&this.props.selectedMember.roles[0].committees||[];return e.map((function(e){return r.a.createElement("li",{key:e.code},e.name)}))}},{key:"handleClick",value:function(e){e.target===this.modalWrapper.current&&this.props.toggleModal()}},{key:"escFunction",value:function(e){27===e.keyCode&&this.props.toggleModal()}},{key:"componentDidUpdate",value:function(e){this.props.modalIsOpen?document.addEventListener("keyup",this.escFunction,!1):document.removeEventListener("keyup",this.escFunction,!1),e.modalIsOpen||this.props.modalLoading||this.modalClose.current.focus()}},{key:"render",value:function(){var e=this.props.selectedMember||{},t=this.props.modalLoading?r.a.createElement("div",null," Loading"):r.a.createElement("div",{className:"modal__content"},r.a.createElement("div",{className:"modal__header"},r.a.createElement("h3",{className:"modal__title"},e.short_title," ",e.first_name," ",e.last_name),r.a.createElement("div",null,r.a.createElement("button",{ref:this.modalClose,className:"button-wrapper modal__close-button",onClick:this.props.toggleModal,"aria-label":"close"},"X"))),r.a.createElement("table",{className:"details"},r.a.createElement("tbody",null,r.a.createElement("tr",{className:"details__item"},r.a.createElement("td",{className:"details__label"},"State"),r.a.createElement("td",null,e.state)),r.a.createElement("tr",{className:"details__item"},r.a.createElement("td",{className:"details__label"},"Party"),r.a.createElement("td",null,e.party)),r.a.createElement("tr",{className:"details__item"},r.a.createElement("td",{className:"details__label"},"Age"),r.a.createElement("td",null,I(e))),e.leadership_role&&r.a.createElement("tr",{className:"details__item"},r.a.createElement("td",{className:"details__label"},"Leadership Role"),r.a.createElement("td",null,e.leadership_role||"N/A")),r.a.createElement("tr",{className:"details__item"},r.a.createElement("td",{className:"details__label"},"Committees"),r.a.createElement("td",null,r.a.createElement("ul",{className:"details__committees-list"},this.committees()))),r.a.createElement("tr",{className:"details__item"},r.a.createElement("td",{className:"details__label"},"Next Election Year"),r.a.createElement("td",null,e.next_election)),r.a.createElement("tr",{className:"details__item"},r.a.createElement("td",{className:"details__label"},"Missed Votes"),r.a.createElement("td",null,"".concat(e.missed_votes," of ").concat(e.total_votes," \n\t\t\t\t\t\t\t\ttotal votes"))),r.a.createElement("tr",null,r.a.createElement("td",{className:"details__committees-list"},"% Votes along party line"),r.a.createElement("td",null,r.a.createElement("div",{className:"details__chart--party"},r.a.createElement(R,{data:{a:e.votes_with_party_pct,b:e.votes_against_party_pct}}),r.a.createElement("div",null,r.a.createElement("p",null,e.votes_with_party_pct,"% with party"),r.a.createElement("p",null,e.votes_against_party_pct,"% against party"))))),r.a.createElement("tr",{className:"details__item"},r.a.createElement("td",{className:"details__label"},"Social Media"),r.a.createElement("td",null,e.twitter_account&&r.a.createElement("a",{href:"https://twitter.com/"+e.twitter_account,target:"_blank",rel:"noopener noreferrer","aria-label":"twitter account"},r.a.createElement("img",{className:"details__icon",src:"https://image.flaticon.com/icons/svg/1384/1384017.svg",alt:""})),e.facebook_account&&r.a.createElement("a",{href:"https://www.facebook.com/"+e.facebook_account,target:"_blank",rel:"noopener noreferrer","aria-label":"facebook page"},r.a.createElement("img",{className:"details__icon",alt:"",src:"https://image.flaticon.com/icons/svg/1384/1384005.svg"})),e.youtube_account&&r.a.createElement("a",{href:"https://www.youtube.com/c/"+e.youtube_account,target:"_blank",rel:"noopener noreferrer","aria-label":"youtube channel"},r.a.createElement("img",{className:"details__icon",src:"https://image.flaticon.com/icons/svg/1384/1384012.svg",alt:""})))),r.a.createElement("tr",null,r.a.createElement("td",{className:"details__label"},"Contact"),r.a.createElement("td",null,r.a.createElement("ul",null,r.a.createElement("li",null,e.office),r.a.createElement("li",null,e.phone),r.a.createElement("li",null,r.a.createElement("a",{href:e.url,target:"_blank"},"Website"))))),r.a.createElement("tr",null,r.a.createElement("td",null,"Other Links"),r.a.createElement("td",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.fec.gov/data/candidate/"+e.fec_candidate_id,target:"_blank",rel:"noopener noreferrer"},"FEC Data")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.govtrack.us/congress/members/"+e.first_name+"_"+e.last_name+"/"+e.govtrack_id,target:"_blank",rel:"noopener noreferrer"},"Govtrack"))))))));return r.a.createElement("div",{className:"modal__wrapper ".concat(this.props.modalIsOpen?"visible":"hidden"),ref:this.modalWrapper,role:"dialog","aria-modal":"true",onClick:this.handleClick},r.a.createElement("div",{className:"modal"},t))}}]),a}(r.a.Component),V=function(e){Object(_.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={members:[],modalIsOpen:!1,modalLoading:!0,loading:!0,selectedMember:{},chamber:"Sen."},n.toggleModal=n.toggleModal.bind(Object(b.a)(n)),n.handleOpen=n.handleOpen.bind(Object(b.a)(n)),n.clearMemberSelection=n.clearMemberSelection.bind(Object(b.a)(n)),n.handleSort=n.handleSort.bind(Object(b.a)(n)),n.setChamber=n.setChamber.bind(Object(b.a)(n)),n.isTabSelected=n.isTabSelected.bind(Object(b.a)(n)),n.tabButtonClasses=n.tabButtonClasses.bind(Object(b.a)(n)),n.listItemsByChamber=n.listItemsByChamber.bind(Object(b.a)(n)),n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:return t=e.sent,e.t0=this,e.next=6,t;case 6:e.t1=e.sent,e.t2={members:e.t1,loading:!1},e.t0.setState.call(e.t0,e.t2);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"toggleModal",value:function(){this.setState({modalIsOpen:!this.state.modalIsOpen},this.clearMemberSelection)}},{key:"isTabSelected",value:function(e){return e===this.state.chamber}},{key:"tabButtonClasses",value:function(e){var t=this.isTabSelected(e)?"members-list__tab--active":"";return"members-list__tab ".concat(t," button-wrapper ")}},{key:"clearMemberSelection",value:function(){this.state.modalIsOpen||this.setState({selectedMember:void 0})}},{key:"handleOpen",value:function(){var e=Object(u.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(13!==t.keyCode&&"click"!==t.type){e.next=5;break}return e.next=3,w(a);case 3:n=e.sent,this.setState({selectedMember:Object(o.a)(Object(o.a)({},a),n),modalIsOpen:!this.state.modalIsOpen},this.setState({modalLoading:!1}));case 5:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"handleSort",value:function(){var e=Object(u.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={house:S(this.state.members.house,t),senate:S(this.state.members.senate,t)},this.setState({members:a});case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setChamber",value:function(e){this.setState({chamber:e})}},{key:"listItemsByChamber",value:function(e){var t=this;return this.state.members[e].map((function(e,a){return r.a.createElement("li",{onClick:function(a){t.handleOpen(a,e)},onKeyDown:function(a){return t.handleOpen(a,e)},key:a+e.id},r.a.createElement(x,Object.assign({},e,{key:e.id})))}))}},{key:"render",value:function(){var e,t,a=this;this.state.members.senate&&this.state.members.house&&(e=this.listItemsByChamber("senate"),t=this.listItemsByChamber("house"));var n=C.map((function(e){return r.a.createElement("option",{name:e,key:e},e)}));return r.a.createElement("div",{className:"members-list__wrapper"},r.a.createElement("div",{className:"members-list__header"},r.a.createElement("h1",null,"Members Of Congress")),r.a.createElement("div",{className:"members-list__tabs"},r.a.createElement("div",{className:"members-list__tabs--button-container"},r.a.createElement("button",{onClick:function(){a.setChamber("Sen.")},className:this.tabButtonClasses("Sen."),name:"Sen.","aria-pressed":this.isTabSelected("Sen.")},"Senate"),r.a.createElement("button",{onClick:function(){a.setChamber("Rep.")},className:this.tabButtonClasses("Rep."),name:"Rep.","aria-pressed":this.isTabSelected("Rep.")},"House")),r.a.createElement("div",{className:"members-list__sort-dropdown"},r.a.createElement("select",{name:"sort-by",onInput:this.handleSort},n))),r.a.createElement("div",{className:"members-list__container"},r.a.createElement(j,{loading:this.state.loading}),r.a.createElement("ul",{className:"members-list ".concat(this.isTabSelected("Sen.")?"":"members-list--hidden")},e),r.a.createElement("ul",{className:"members-list ".concat(this.isTabSelected("Rep.")?"":"members-list--hidden")},t)),r.a.createElement(W,{modalIsOpen:this.state.modalIsOpen,toggleModal:this.toggleModal,modalLoading:this.state.modalLoading,selectedMember:this.state.selectedMember}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(c.a,{path:"/",component:V})));l.a.render(B,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,t,a){},97:function(e,t,a){e.exports=a(129)}},[[97,1,2]]]);
//# sourceMappingURL=main.c181cb1e.chunk.js.map