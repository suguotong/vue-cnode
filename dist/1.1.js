webpackJsonp([1],{4:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(9),r=i(o);e["default"]={load:r["default"]}},5:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function o(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return{components:f["default"],store:s["default"],vuex:{getters:{user:function(t){return t.user},state:function(e){return e[t]}},actions:(0,l["default"])(t)},created:function(){this.state.path!=this.$route.path&&this.RESET(this.$route.path)},ready:function(){window.scrollTo(this.scrollX,this.scrollY)},beforeDestroy:function(){this.LEAVE()}}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var r=a(13),s=i(r),n=a(12),l=i(n),d=a(4),f=i(d);e["default"]=o},6:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{state:{type:Number,"default":0,validator:function(t){return[-1,0,1].indexOf(t)>-1}},tip:{type:String,"default":"正在加载中"}}}},7:function(t,e,a){e=t.exports=a(1)(),e.push([t.id,".data-load .msg[_v-3a59f034]{line-height:70px;text-align:center;font-size:14px}.data-load-true[_v-3a59f034]{margin:20px auto;position:relative;-webkit-animation:rotate-forever 1s infinite linear;animation:rotate-forever 1s infinite linear;height:30px;width:30px;border:4px solid #2962ff;border-right-color:transparent;border-radius:50%}.data-load-true .msg[_v-3a59f034]{display:none}@-webkit-keyframes rotate-forever{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-forever{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},8:function(t,e){t.exports=' <div class=data-load :class="{\'data-load-true\' : state == 0}" _v-3a59f034=""> <div class=msg _v-3a59f034="">{{tip}}</div> </div> '},9:function(t,e,a){var i,o;a(10),i=a(6),o=a(8),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},10:function(t,e,a){var i=a(7);"string"==typeof i&&(i=[[t.id,i,""]]);a(2)(i,{});i.locals&&(t.exports=i.locals)},44:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(11),r=i(o),s=a(5),n=i(s),l="userView";e["default"]={mixins:[(0,n["default"])(l)],created:function(){this.state.tabIndex||this.ADD_CUSTOM_KEY({tabIndex:0})},data:function(){return this.state},route:{data:function(t){var e=this,a=t.from;"主题详情"!=a.title&&this.SET_CUSTOM_KEY({tabIndex:0});var i=this.$route.params.loginname;r["default"].get("/api/v1/user/"+i,{},function(t){var a=t.data;a?e.GET_DATA_VIEW(a):e.GET_DATA_ERROR({loadTip:"用户不存在"})},this.GET_DATA_ERROR)}},methods:{setIndex:function(t){this.SET_CUSTOM_KEY({tabIndex:t})}}}},50:function(t,e,a){e=t.exports=a(1)(),e.push([t.id,".user .user-bg[_v-4f405a64],.user .user-bg img[_v-4f405a64]{width:100%}.user .headimg[_v-4f405a64]{overflow:hidden;position:relative;z-index:2;margin-top:-42px;border-radius:50%;border:1px solid #d5d5d5;background:#fff}.user .headimg .pic[_v-4f405a64]{overflow:hidden;width:80px;height:80px;margin:2px;border-radius:50%}.user .headimg .pic img[_v-4f405a64]{width:100%;height:200%}.user .name[_v-4f405a64]{margin:20px 10px;font-size:30px;font-weight:500;color:#000}.user .score[_v-4f405a64]{width:100%;font-size:12px}.user .score div[_v-4f405a64]{padding:10px}.tab-nav[_v-4f405a64]{border-bottom:1px solid #eee;box-shadow:0 0 5px #d5d5d5;background:#fff}.tab-nav li[_v-4f405a64]{line-height:38px;text-align:center;border-right:1px solid #eee;font-size:16px;color:#000}.tab-nav li[_v-4f405a64]:last-of-type{border:none}.tab-nav li.on[_v-4f405a64]{color:#2962ff}.list li[_v-4f405a64]{padding:10px;height:50px;border-bottom:1px solid #eee;background:#fff}.list li .head .pic[_v-4f405a64]{overflow:hidden;width:24px;height:24px;border-radius:50%}.list li .main[_v-4f405a64]{padding-left:10px;color:inherit}.list li .main .con[_v-4f405a64]{padding:0 5px;line-height:30px;font-size:13px}.list li .main .line[_v-4f405a64]{line-height:20px}.list li .main .name[_v-4f405a64]{color:#4e4e4e}.list li .main time[_v-4f405a64]{font-size:12px;color:#b3b3b3}",""])},66:function(t,e,a){t.exports=a.p+"user-bg.png"},68:function(t,e,a){t.exports=' <template v-if="loadState > 0"> <div class=user flex="dir:top cross:center" _v-4f405a64=""> <div class=user-bg _v-4f405a64=""> <img src='+a(66)+' alt="" _v-4f405a64=""> </div> <div class=headimg _v-4f405a64=""> <div class=pic _v-4f405a64=""> <img :src=view.avatar_url alt="" _v-4f405a64=""> </div> </div> <div class=name _v-4f405a64="">{{view.loginname}}</div> <div class=score flex=main:justify _v-4f405a64=""> <div _v-4f405a64="">积分：{{view.score}}</div> <div _v-4f405a64="">注册于：{{view.create_at | formatDate}}</div> </div> </div> <ul class=tab-nav flex=box:mean _v-4f405a64=""> <li :class="{on: state.tabIndex == 0}" v-on:click=setIndex(0) _v-4f405a64="">回复</li> <li :class="{on: state.tabIndex == 1}" v-on:click=setIndex(1) _v-4f405a64="">主题</li> </ul> <ul class=list :style="{display: state.tabIndex == 0 ? \'block\' : \'none\'}" _v-4f405a64=""> <li flex=box:first v-for="item in view.recent_replies" track-by=id _v-4f405a64=""> <a class=head v-link="`/user/${item.author.loginname}`" _v-4f405a64=""> <div class=pic _v-4f405a64=""> <img :src=item.author.avatar_url alt="" _v-4f405a64=""> </div> </a> <a v-link="`/topic/${item.id}`" class=main flex="dir:top box:first" _v-4f405a64=""> <div class=line flex=box:last _v-4f405a64=""> <div class=name _v-4f405a64="">{{item.author.loginname}}</div> <time _v-4f405a64="">{{item.last_reply_at | formatDate}}</time> </div> <div class=con _v-4f405a64="">{{item.title}}</div> </a> </li> </ul> <ul class=list :style="{display: state.tabIndex == 1 ? \'block\' : \'none\'}" _v-4f405a64=""> <li flex=box:first v-for="item in view.recent_topics" track-by=id _v-4f405a64=""> <a class=head v-link="`/user/${item.author.loginname}`" _v-4f405a64=""> <div class=pic _v-4f405a64=""> <img :src=item.author.avatar_url alt="" _v-4f405a64=""> </div> </a> <a v-link="`/topic/${item.id}`" class=main flex="dir:top box:first" _v-4f405a64=""> <div class=line flex=box:last _v-4f405a64=""> <div class=name _v-4f405a64="">{{item.author.loginname}}</div> <time _v-4f405a64="">{{item.last_reply_at | formatDate}}</time> </div> <div class=con _v-4f405a64="">{{item.title}}</div> </a> </li> </ul> </template> <load v-else="" :tip=loadTip :state=loadState _v-4f405a64=""></load> '},83:function(t,e,a){var i,o;a(85),i=a(44),o=a(68),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},85:function(t,e,a){var i=a(50);"string"==typeof i&&(i=[[t.id,i,""]]);a(2)(i,{});i.locals&&(t.exports=i.locals)}});