_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"/0+H":function(e,t,s){"use strict";t.__esModule=!0,t.isInAmpMode=r,t.useAmp=function(){return r(i.default.useContext(n.AmpStateContext))};var c,i=(c=s("q1tI"))&&c.__esModule?c:{default:c},n=s("lwAK");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,s=void 0!==t&&t,c=e.hybrid,i=void 0!==c&&c,n=e.hasQuery,r=void 0!==n&&n;return s||i&&r}},"20a2":function(e,t,s){e.exports=s("nOHt")},"8Kt/":function(e,t,s){"use strict";s("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var c,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var s={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var n=c?Object.getOwnPropertyDescriptor(e,i):null;n&&(n.get||n.set)?Object.defineProperty(s,i,n):s[i]=e[i]}s.default=e,t&&t.set(e,s);return s}(s("q1tI")),n=(c=s("Xuae"))&&c.__esModule?c:{default:c},r=s("lwAK"),a=s("FYa8"),o=s("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function j(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var s=i.default.Children.toArray(t.props.children);return e.concat(s)}),[]).reduce(j,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,s=new Set,c={};return function(i){var n=!0,r=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){r=!0;var a=i.key.slice(i.key.indexOf("$")+1);e.has(a)?n=!1:e.add(a)}switch(i.type){case"title":case"base":t.has(i.type)?n=!1:t.add(i.type);break;case"meta":for(var o=0,l=m.length;o<l;o++){var d=m[o];if(i.props.hasOwnProperty(d))if("charSet"===d)s.has(d)?n=!1:s.add(d);else{var j=i.props[d],h=c[d]||new Set;"name"===d&&r||!h.has(j)?(h.add(j),c[d]=h):n=!1}}}return n}}()).reverse().map((function(e,t){var s=e.key||t;return i.default.cloneElement(e,{key:s})}))}function p(e){var t=e.children,s=(0,i.useContext)(r.AmpStateContext),c=(0,i.useContext)(a.HeadManagerContext);return i.default.createElement(n.default,{reduceComponentsToState:h,headManager:c,inAmpMode:(0,o.isInAmpMode)(s)},t)}p.rewind=function(){};var u=p;t.default=u},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,s){var c=s("WkPL");e.exports=function(e){if(Array.isArray(e))return c(e)}},RIqP:function(e,t,s){var c=s("Ijbi"),i=s("EbDI"),n=s("ZhPi"),r=s("Bnag");e.exports=function(e){return c(e)||i(e)||n(e)||r()}},Xuae:function(e,t,s){"use strict";var c=s("RIqP"),i=s("lwsE"),n=s("W8MJ"),r=(s("PJYZ"),s("7W2i")),a=s("a1gu"),o=s("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,c=o(e);if(t){var i=o(this).constructor;s=Reflect.construct(c,arguments,i)}else s=c.apply(this,arguments);return a(this,s)}}t.__esModule=!0,t.default=void 0;var d=s("q1tI"),j=function(e){r(s,e);var t=l(s);function s(e){var n;return i(this,s),(n=t.call(this,e))._hasHeadManager=void 0,n.emitChange=function(){n._hasHeadManager&&n.props.headManager.updateHead(n.props.reduceComponentsToState(c(n.props.headManager.mountedInstances),n.props))},n._hasHeadManager=n.props.headManager&&n.props.headManager.mountedInstances,n}return n(s,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),s}(d.Component);t.default=j},g4pe:function(e,t,s){e.exports=s("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}},lwAK:function(e,t,s){"use strict";var c;t.__esModule=!0,t.AmpStateContext=void 0;var i=((c=s("q1tI"))&&c.__esModule?c:{default:c}).default.createContext({});t.AmpStateContext=i},vpA2:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/work/productFilms",function(){return s("yHPg")}])},yHPg:function(e,t,s){"use strict";s.r(t);var c=s("nKUr"),i=s("g4pe"),n=s.n(i),r=s("20a2"),a=s.n(r);t.default=function(){return Object(c.jsxs)("div",{children:[Object(c.jsxs)(n.a,{children:[Object(c.jsx)("meta",{charSet:"UTF-8"}),Object(c.jsx)("meta",{name:"title",content:"Work - TVC"}),Object(c.jsx)("meta",{name:"description",content:"small screen official website"}),Object(c.jsx)("meta",{name:"keywords",content:"small screen"}),Object(c.jsx)("meta",{name:"author",content:"small screen webmasters"}),Object(c.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),Object(c.jsx)("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"}),Object(c.jsx)("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"})]}),Object(c.jsx)("div",{className:"color_band"}),Object(c.jsxs)("nav",{className:"navbar",role:"navigation",children:[Object(c.jsx)("a",{className:"navbar-brand pull-right",href:"#",children:Object(c.jsx)("img",{src:"/img/logo.png",className:"logo"})}),Object(c.jsx)("div",{className:"navbar-header",children:Object(c.jsxs)("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#myNavbar",children:[Object(c.jsx)("span",{className:"sr-only",children:"Toggle navigation"}),Object(c.jsx)("span",{className:"icon-bar"}),Object(c.jsx)("span",{className:"icon-bar"}),Object(c.jsx)("span",{className:"icon-bar"})]})}),Object(c.jsx)("div",{className:"collapse navbar-collapse",id:"myNavbar",children:Object(c.jsxs)("ul",{className:"nav navbar-nav",children:[Object(c.jsx)("li",{className:"active",children:Object(c.jsx)("a",{href:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/#clients",children:"Clients"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/#work",children:"Work"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/team",children:"Team"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/#about",children:"About"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/#contact",children:"Contact"})})]})})]}),Object(c.jsx)("section",{className:"tvc-wrapper portfolio-wrapper",children:Object(c.jsxs)("div",{id:"video-gallery",className:"video-gallery-container container-fluid",children:[Object(c.jsxs)("div",{className:"section-header",children:[Object(c.jsx)("div",{className:"title",children:"Institutional"}),Object(c.jsxs)("div",{className:"seperator",children:[Object(c.jsx)("img",{src:"/img/ss_colour_band.png"}),Object(c.jsx)("div",{className:"play"})]})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-md-6 col-sm-6",children:Object(c.jsxs)("div",{className:"lightvideo",onClick:function(){return a.a.push("/work/productFilms/mofpi")},children:[Object(c.jsx)("img",{src:"/img/work/productFilms/mofpi.jpg"}),Object(c.jsxs)("div",{className:"description",children:[Object(c.jsx)("h1",{children:"Ministry of Food Processing"}),Object(c.jsx)("h3",{children:"Digital film highlighting the Ministry\u2019s policy and initiatives to enhance the competitiveness of food processing businesses in the unorganised sector."}),Object(c.jsx)("img",{className:"play-icon",src:"../img/play-button.png"})]})]})}),Object(c.jsx)("div",{className:"col-md-6 col-sm-6",children:Object(c.jsxs)("div",{className:"lightvideo",onClick:function(){return a.a.push("/work/productFilms/ncw")},children:[Object(c.jsx)("img",{src:"/img/work/productFilms/ncw.jpg"}),Object(c.jsxs)("div",{className:"description",children:[Object(c.jsx)("h1",{children:"National Commission of Women"}),Object(c.jsx)("h3",{children:"An advocacy film encouraging women to speak up and seek help in cases of domestic violence."}),Object(c.jsx)("img",{className:"play-icon",src:"../img/play-button.png"})]})]})}),Object(c.jsx)("div",{className:"col-md-6 col-sm-6",children:Object(c.jsxs)("div",{className:"lightvideo",onClick:function(){return a.a.push("/work/productFilms/farishte")},children:[Object(c.jsx)("img",{src:"/img/work/productFilms/farishte.jpg"}),Object(c.jsxs)("div",{className:"description",children:[Object(c.jsx)("h1",{children:"Delhi Government"}),Object(c.jsx)("h3",{children:"Short case studies of beneficiaries of a scheme that helps accident victims by paying their hospital bills and also rewards good samaritans who help accident victims."}),Object(c.jsx)("img",{className:"play-icon",src:"../img/play-button.png"})]})]})}),Object(c.jsx)("div",{className:"col-md-6 col-sm-6",children:Object(c.jsxs)("div",{className:"lightvideo",onClick:function(){return a.a.push("/work/productFilms/harmoni")},children:[Object(c.jsx)("img",{src:"/img/work/productFilms/harmoni.jpg"}),Object(c.jsxs)("div",{className:"description",children:[Object(c.jsx)("h1",{children:"Delhi Legislative Assembly"}),Object(c.jsx)("h3",{children:"TVC for spreading awareness of the legal consequences of forwarding unsolicited and unverified social media posts."}),Object(c.jsx)("img",{className:"play-icon",src:"../img/play-button.png"})]})]})}),Object(c.jsx)("div",{className:"col-md-6 col-sm-6",children:Object(c.jsxs)("div",{className:"lightvideo",onClick:function(){return a.a.push("/work/productFilms/corona")},children:[Object(c.jsx)("img",{src:"/img/work/productFilms/corona.jpg"}),Object(c.jsxs)("div",{className:"description",children:[Object(c.jsx)("h1",{children:"Delhi Government"}),Object(c.jsx)("h3",{children:"TVC created for spreading awareness of COVID and steps to take in the event of infection."}),Object(c.jsx)("img",{className:"play-icon",src:"../img/play-button.png"})]})]})}),Object(c.jsx)("div",{className:"col-md-6 col-sm-6",children:Object(c.jsxs)("div",{className:"lightvideo",onClick:function(){return a.a.push("/work/productFilms/dengue")},children:[Object(c.jsx)("img",{src:"/img/work/productFilms/dengue.jpg"}),Object(c.jsxs)("div",{className:"description",children:[Object(c.jsx)("h1",{children:"Delhi Government"}),Object(c.jsx)("h3",{children:"A call to action TVC on how people of Delhi can help in stopping the spread of Dengue."}),Object(c.jsx)("img",{className:"play-icon",src:"../img/play-button.png"})]})]})}),Object(c.jsx)("div",{className:"col-md-6 col-sm-6",children:Object(c.jsxs)("div",{className:"lightvideo",onClick:function(){return a.a.push("/work/productFilms/ev")},children:[Object(c.jsx)("img",{src:"/img/work/productFilms/ev.jpg"}),Object(c.jsxs)("div",{className:"description",children:[Object(c.jsx)("h1",{children:"Delhi Government"}),Object(c.jsx)("h3",{children:"TVC to spread awareness of Delhi Government policy to encourage adoption of EVs."}),Object(c.jsx)("img",{className:"play-icon",src:"../img/play-button.png"})]})]})}),Object(c.jsx)("div",{className:"col-md-6 col-sm-6",children:Object(c.jsxs)("div",{className:"lightvideo",onClick:function(){return a.a.push("/work/productFilms/parali")},children:[Object(c.jsx)("img",{src:"/img/work/productFilms/parali.jpg"}),Object(c.jsxs)("div",{className:"description",children:[Object(c.jsx)("h1",{children:"Delhi Government"}),Object(c.jsx)("h3",{children:"TVC to highlight the steps taken by the Delhi Government to end stubble burning by farmers that leads to high levels of pollution in Delhi."}),Object(c.jsx)("img",{className:"play-icon",src:"../img/play-button.png"})]})]})}),Object(c.jsx)("div",{className:"col-md-6 col-sm-6",children:Object(c.jsxs)("div",{className:"lightvideo",onClick:function(){return a.a.push("/work/productFilms/vigyan")},children:[Object(c.jsx)("img",{src:"/img/work/productFilms/vigyan.jpg"}),Object(c.jsxs)("div",{className:"description",children:[Object(c.jsx)("h1",{children:"Vigyan Prasar"}),Object(c.jsx)("h3",{children:"A documentary on the Government of India\u2019s  Quantum Mission and its role in protecting India\u2019s access to future technologies from cryptography to quantum computing."}),Object(c.jsx)("img",{className:"play-icon",src:"../img/play-button.png"})]})]})}),Object(c.jsx)("div",{className:"col-md-6 col-sm-6",children:Object(c.jsxs)("div",{className:"lightvideo",onClick:function(){return a.a.push("/work/productFilms/fauji")},children:[Object(c.jsx)("img",{src:"/img/work/productFilms/fauji.jpg"}),Object(c.jsxs)("div",{className:"description",children:[Object(c.jsx)("h1",{children:"Ministry of Defence"}),Object(c.jsx)("h3",{children:"A TV series for the Dept of Resettlement showcasing the post-retirement options and help available to armed forces personnel to set up a business."}),Object(c.jsx)("img",{className:"play-icon",src:"../img/play-button.png"})]})]})}),Object(c.jsx)("div",{className:"col-md-6 col-sm-6",children:Object(c.jsxs)("div",{className:"lightvideo",onClick:function(){return a.a.push("/work/productFilms/yoga_day")},children:[Object(c.jsx)("img",{src:"/img/work/productFilms/yoga_day.jpg"}),Object(c.jsxs)("div",{className:"description",children:[Object(c.jsx)("h1",{children:"Ministry of External Affairs"}),Object(c.jsx)("h3",{children:"A film for the Ministry of External Affairs to promote International Yoga Day."}),Object(c.jsx)("img",{className:"play-icon",src:"../img/play-button.png"})]})]})}),Object(c.jsx)("div",{className:"col-md-6 col-sm-6",children:Object(c.jsxs)("div",{className:"lightvideo",onClick:function(){return a.a.push("/work/productFilms/track_man")},children:[Object(c.jsx)("img",{src:"/img/work/productFilms/track_man.jpg"}),Object(c.jsxs)("div",{className:"description",children:[Object(c.jsx)("h1",{children:"Indian Railways"}),Object(c.jsx)("h3",{children:"A short film on railway gangmen and the critical nature of their work for the safety of passengers."}),Object(c.jsx)("img",{className:"play-icon",src:"../img/play-button.png"})]})]})}),Object(c.jsx)("div",{className:"col-md-6 col-sm-6",children:Object(c.jsxs)("div",{className:"lightvideo",onClick:function(){return a.a.push("/work/productFilms/dri")},children:[Object(c.jsx)("img",{src:"/img/work/productFilms/dri.jpg"}),Object(c.jsxs)("div",{className:"description",children:[Object(c.jsx)("h1",{children:"Department of Revenue Intelligence"}),Object(c.jsx)("h3",{children:"A film created for DRI\u2019s anniversary celebrations speaking about the objectives, and culture of this elite organisation as told by its former directors of operations."}),Object(c.jsx)("img",{className:"play-icon",src:"../img/play-button.png"})]})]})}),Object(c.jsx)("div",{className:"col-md-6 col-sm-6",children:Object(c.jsxs)("div",{className:"lightvideo",onClick:function(){return a.a.push("/work/productFilms/music")},children:[Object(c.jsx)("img",{src:"/img/work/productFilms/music.jpg"}),Object(c.jsxs)("div",{className:"description",children:[Object(c.jsx)("h1",{children:"Breakthrough.Org"}),Object(c.jsx)("h3",{children:"A music video created to encourage men to participate in housework."}),Object(c.jsx)("img",{className:"play-icon",src:"../img/play-button.png"})]})]})}),Object(c.jsx)("div",{className:"col-md-6 col-sm-6",children:Object(c.jsxs)("div",{className:"lightvideo",onClick:function(){return a.a.push("/work/productFilms/ignore")},children:[Object(c.jsx)("img",{src:"/img/work/productFilms/ignore.jpg"}),Object(c.jsxs)("div",{className:"description",children:[Object(c.jsx)("h1",{children:"Breakthrough.Org"}),Object(c.jsx)("h3",{children:"A TVC encouraging people to step forward and intervene when they see an incident of sexual harassment."}),Object(c.jsx)("img",{className:"play-icon",src:"../img/play-button.png"})]})]})}),Object(c.jsx)("div",{className:"col-md-6 col-sm-6",children:Object(c.jsxs)("div",{className:"lightvideo",onClick:function(){return a.a.push("/work/productFilms/phfi")},children:[Object(c.jsx)("img",{src:"/img/work/productFilms/phfi.jpg"}),Object(c.jsxs)("div",{className:"description",children:[Object(c.jsx)("h1",{children:"Public Health Foundation of India"}),Object(c.jsx)("h3",{children:"A set of short case study films on innovations in the field of public health."}),Object(c.jsx)("img",{className:"play-icon",src:"../img/play-button.png"})]})]})}),Object(c.jsx)("div",{className:"col-md-6 col-sm-6",children:Object(c.jsxs)("div",{className:"lightvideo",onClick:function(){return a.a.push("/work/productFilms/chpp")},children:[Object(c.jsx)("img",{src:"/img/work/productFilms/chpp.jpg"}),Object(c.jsxs)("div",{className:"description",children:[Object(c.jsx)("h1",{children:"Save the Children"}),Object(c.jsx)("h3",{children:"Two films were created with the objective of encouraging people to sign up as organ donors."}),Object(c.jsx)("img",{className:"play-icon",src:"../img/play-button.png"})]})]})}),Object(c.jsx)("div",{className:"col-md-6 col-sm-6",children:Object(c.jsxs)("div",{className:"lightvideo",onClick:function(){return a.a.push("/work/productFilms/organ_donation")},children:[Object(c.jsx)("img",{src:"/img/work/productFilms/organ_donation.jpg"}),Object(c.jsxs)("div",{className:"description",children:[Object(c.jsx)("h1",{children:"Organ Donation"}),Object(c.jsx)("h3",{children:"Two films were created for Organ, with the objective to encourage people to sign up as an organ donor. One film was from the perspective of the relatives of organ donors and another from the perspective of organ receivers."}),Object(c.jsx)("img",{className:"play-icon",src:"../img/play-button.png"})]})]})})]})]})})]})}}},[["vpA2",0,2,1]]]);