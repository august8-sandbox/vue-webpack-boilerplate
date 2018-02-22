webpackJsonp([0],{162:function(e,t,s){"use strict";function a(e){s(181)}Object.defineProperty(t,"__esModule",{value:!0});var r=s(175),n=s.n(r);for(var i in r)"default"!==i&&function(e){s.d(t,e,function(){return r[e]})}(i);var u=s(183),o=s(32),c=a,l=Object(o.a)(n.a,u.a,u.b,!1,c,"data-v-666cb58c",null);t.default=l.exports},165:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"BasePagination",props:{page:{type:Number,required:!0},perPage:{type:Number,required:!0},items:{type:Array,required:!0}},methods:{showPage:function(e){this.$emit("page",e)}}}},166:function(e,t,s){"use strict";function a(e){s(167)}Object.defineProperty(t,"__esModule",{value:!0});var r=s(165),n=s.n(r);for(var i in r)"default"!==i&&function(e){s.d(t,e,function(){return r[e]})}(i);var u=s(169),o=s(32),c=a,l=Object(o.a)(n.a,u.a,u.b,!1,c,null,null);t.default=l.exports},167:function(e,t,s){var a=s(168);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=s(18).default;r("54f2646f",a,!0,{})},168:function(e,t,s){t=e.exports=s(17)(!1),t.push([e.i,".pagination{padding-top:30px}",""])},169:function(e,t,s){"use strict";s.d(t,"a",function(){return a}),s.d(t,"b",function(){return r});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.items.length?s("b-pagination",{attrs:{total:e.items.length,current:e.page,order:"is-centered","per-page":e.perPage},on:{change:e.showPage}}):e._e()},r=[]},170:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(34),n=a(r),i=s(35),u=a(i),o=s(69),c=a(o),l=s(19),d=s(33);t.default={computed:(0,c.default)({},(0,l.mapState)("Auth",["token"])),methods:{requestStart:function(){this.errorMessage="",this.items=[],this.isLoading=!0},search:function(){function e(e){return t.apply(this,arguments)}var t=(0,u.default)(n.default.mark(function e(t){var s,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,this.requestStart(),!this.token){e.next=8;break}return e.next=5,d.Xhr.getWithToken(t,a,this.token);case 5:e.t0=e.sent,e.next=11;break;case 8:return e.next=10,d.Xhr.getWithoutToken(t,a);case 10:e.t0=e.sent;case 11:s=e.t0,this.success(s),e.next=18;break;case 15:e.prev=15,e.t1=e.catch(0),this.error(e.t1);case 18:return e.prev=18,this.requestEnd(),e.finish(18);case 21:case"end":return e.stop()}},e,this,[[0,15,18,21]])}));return e}(),success:function(e){this.items=e.data.items,this.page=1},error:function(e){switch(e.response.status){case 401:this.errorMessage="Required (re)authentication";break;case 403:this.errorMessage="API rate limit exceeded";break;default:this.errorMessage=e.response.data.errorMessage}},requestEnd:function(){this.isLoading=!1}}}},171:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{page:1}},computed:{itemsInPage:function(){var e=(this.page-1)*this.perPage;return this.items.slice(e,e+this.perPage)}},methods:{setPage:function(e){this.page=e}}}},175:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(33),n=s(68),i=a(n),u=s(166),o=a(u),c=s(170),l=a(c),d=s(171),f=a(d);t.default={name:"SearchUserPage",components:{BaseButton:i.default,BasePagination:o.default},mixins:[l.default,f.default],data:function(){return{query:"",errorMessage:"",items:[],perPage:8,isLoading:!1}},methods:{searchUser:function(){this.isLoading||this.search(r.URL.FETCH_USERS,this.searchOptions())},searchOptions:function(){return{params:{q:this.query}}}}}},181:function(e,t,s){var a=s(182);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=s(18).default;r("1573f248",a,!0,{})},182:function(e,t,s){t=e.exports=s(17)(!1),t.push([e.i,".image img[data-v-666cb58c]{border-radius:15px}",""])},183:function(e,t,s){"use strict";s.d(t,"a",function(){return a}),s.d(t,"b",function(){return r});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"section"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-4 is-offset-4"},[s("b-field",{attrs:{position:"is-centered"}},[s("b-input",{attrs:{placeholder:"Find a user...",expanded:"expanded",type:"search",icon:"search"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchUser(t)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),s("p",{staticClass:"control"},[s("base-button",{attrs:{classes:["button","is-primary",{"is-loading":e.isLoading}]},on:{onClick:e.searchUser}},[e._v("Search")])],1)],1)],1)]),e.errorMessage?[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-4 is-offset-4"},[s("b-message",{attrs:{title:"Error",type:"is-danger",closable:!1}},[e._v(e._s(e.errorMessage))])],1)])]:e._e(),e._l(e.itemsInPage,function(t){return s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-6 is-offset-3"},[s("div",{staticClass:"media"},[s("figure",{staticClass:"media-left"},[s("p",{staticClass:"image is-32x32"},[s("img",{attrs:{src:t.avatar_url}})])]),s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[s("a",{attrs:{href:t.html_url,target:"_blank"}},[e._v(e._s(t.login))])])])])])])}),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-6 is-offset-3"},[s("base-pagination",{attrs:{page:e.page,perPage:e.perPage,items:e.items},on:{page:e.setPage}})],1)])],2)},r=[]}});