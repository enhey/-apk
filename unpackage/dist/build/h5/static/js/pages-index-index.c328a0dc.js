(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{1359:function(t,e,a){"use strict";a("26e9"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"Hello",leaves:null,loop:null,studentInfo:null}},onShow:function(){this.leaves=uni.getStorageSync("todaySchoolLeaves"),this.leaves.reverse(),console.log(this.leaves)},onBackPress:function(t){return"navigateBack"!==t.from&&(this.onreturn(),!0)},methods:{onreturn:function(){uni.redirectTo({url:"./index"})},addLeave:function(){uni.navigateTo({url:"../addLeave/addLeave"})},clearAll:function(){uni.showModal({title:"提示",content:"确定要删除所有记录吗？",success:function(t){t.confirm&&(uni.setStorageSync("todaySchoolLeaves",null),this.leaves=null,uni.reLaunch({url:"../index/index"}))}})},getStateStyle:function(t){return"color:#A0A9B6;"},clickContent:function(t){console.log(this.leaves[t]),uni.setStorageSync("currLeaves",this.leaves[t]),uni.setStorageSync("currIndex",t),uni.navigateTo({url:"../viewLeaves/viewLeaves",animationType:"none"})},touchStart:function(){var t=this;clearTimeout(this.loop),this.loop=setTimeout((function(){t.studentInfo=uni.getStorageSync("studentInfo"),""==t.studentInfo||null==t.studentInfo||void 0==t.studentInfo?(uni.showToast({title:"扫码前需先设置个人信息",duration:2e3,icon:"none"}),uni.navigateTo({url:"../addStudentInfo/addStudentInfo"})):uni.scanCode({success:function(t){console.log(t.result),uni.navigateTo({url:"../checkSuccess/checkSuccess"})}})}),700)},touchEnd:function(){clearTimeout(this.loop)},getDateStyle:function(t){if(t%2!=0)return"color:#F59A12;"}}};e.default=n},"211f":function(t,e,a){"use strict";a.r(e);var n=a("9194"),i=a("c474");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("f95e");var s,c=a("f0c5"),l=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"30b2baeb",null,!1,n["a"],s);e["default"]=l.exports},"23d2":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-30b2baeb]{background-color:#fff}.container[data-v-30b2baeb]{padding:%?20?%;padding-left:%?0?%;padding-right:%?0?%;font-size:%?22?%;line-height:%?24?%}\n\n/*上方手机状态栏 通栏 */.status_bar[data-v-30b2baeb]{height:%?0?%;width:100%;background-color:#545454}.top_view[data-v-30b2baeb]{height:0;width:100%;position:fixed;background-color:#fff;top:0;z-index:999}\n\n/*导航 */.nav[data-v-30b2baeb]{position:fixed;width:100%;height:%?70?%;background:#fff;border-bottom:%?1?% solid #efefef;z-index:9999}.nav-left[data-v-30b2baeb]{padding-top:%?34?%;margin-left:%?28?%}.nav-left uni-image[data-v-30b2baeb]{width:%?20?%;height:%?20?%}.nav-title[data-v-30b2baeb]{font-weight:450;font-size:%?33?%;letter-spacing:%?1.5?%;position:absolute;left:calc(50% - %?78?%);top:%?52?%}.nav-title uni-image[data-v-30b2baeb]{width:%?48?%;height:%?50?%;position:relative;top:%?14?%;left:%?-4?%}.nav-right[data-v-30b2baeb]{position:absolute;right:%?36?%;top:%?35?%;font-size:%?33?%;color:#41e0eb}.tab-box[data-v-30b2baeb]{position:relative;width:100%;height:%?20?%;top:%?90?%;background:#fff;border-bottom:%?1?% solid #efefef;z-index:999}.check-left[data-v-30b2baeb]{position:absolute;width:50%;height:%?20?%;text-align:center;font-size:%?30?%;color:#3399fe;top:%?-10?%;left:%?60?%}.check-right[data-v-30b2baeb]{position:absolute;width:50%;height:%?20?%;text-align:center;font-size:%?30?%;color:#b0b1b5;right:%?10?%;top:%?-10?%}.check-on[data-v-30b2baeb]{position:absolute;height:%?28?%;width:%?80?%;font-weight:500;color:#3399fe;border-bottom:%?3?% solid #3399fe}.main[data-v-30b2baeb]{position:relative;top:%?90?%}.main-bottom-tips[data-v-30b2baeb]{text-align:center;margin-top:%?30?%;font-size:%?24?%;padding-bottom:%?115?%;color:#a7afba}.main-top-tips[data-v-30b2baeb]{width:100%;height:%?45?%;background-color:#fe9900;text-align:center;color:#fff;font-size:%?24?%;line-height:%?45?%;position:relative}.main-top-tips-image1[data-v-30b2baeb]{width:%?15?%;height:%?15?%;position:absolute;top:%?9?%;left:calc(50% - %?120?%)}.main-top-tips-image2[data-v-30b2baeb]{width:%?22?%;height:%?20?%;position:absolute;top:%?6?%}.main-content[data-v-30b2baeb]{padding-top:%?24?%;padding-bottom:%?22?%;padding-left:%?22?%;padding-right:%?22?%;background-color:#fff;border-bottom:%?1?% solid #f1f2f4}.main-content-title[data-v-30b2baeb]{font-size:%?17?%;display:inline-block;color:#464c5c}.main-content-date[data-v-30b2baeb]{font-size:%?27?%;float:right;color:#9ea8b4}.main-content-startDate[data-v-30b2baeb]{font-size:%?26?%;color:#a1a9b4;margin-top:%?10?%}.main-content-state[data-v-30b2baeb]{margin-top:%?8?%;font-size:%?26?%}.bottom-btn[data-v-30b2baeb]{position:fixed;bottom:%?0?%;background-color:#3399fe;width:100%;height:%?85?%;color:#fff;text-align:center;line-height:%?85?%;font-size:%?32?%}body.?%PAGE?%[data-v-30b2baeb]{background-color:#fff}",""]),t.exports=e},9194:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"status_bar"},[n("v-uni-view",{staticClass:"top_view"})],1),n("v-uni-view",{staticClass:"nav"},[n("v-uni-view",{staticClass:"nav-left"},[n("v-uni-image",{attrs:{src:a("fe5f")}})],1),n("v-uni-view",{staticClass:"nav-title"},[n("v-uni-image",{attrs:{src:a("af00")}}),t._v("辅导猫")],1),n("v-uni-view",{staticClass:"nav-right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearAll.apply(void 0,arguments)},touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchStart.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchEnd.apply(void 0,arguments)}}},[t._v("反馈")])],1),n("v-uni-view",{staticClass:"tab-box"},[n("v-uni-view",{staticClass:"check-left"},[n("v-uni-view",{staticClass:"check-on"},[t._v("请假记录")])],1),n("v-uni-view",{staticClass:"check-right"},[t._v("无需审批记录")])],1),n("v-uni-view",{staticClass:"main"},[n("v-uni-view",{staticClass:"main-top-tips"},[n("v-uni-image",{staticClass:"main-top-tips-image1",attrs:{src:a("9589")}}),t._v("为何不能请假？")],1),t._l(t.leaves,(function(e,a){return n("v-uni-view",{staticClass:"main-content",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickContent(a)}}},[n("v-uni-view",{staticClass:"main-content-title"},[t._v("我的 "+t._s(e.type)+"申请")]),n("v-uni-view",{staticClass:"main-content-date"},[t._v(t._s(e.startDate))]),n("v-uni-view",{staticClass:"main-content-startDate"},[t._v("请假时间："+t._s(e.startDate)+" 至 "+t._s(e.endDate)+" ("+t._s(e.countDate)+")")]),"已完成"==e.state?n("v-uni-view",{staticClass:"main-content-startDate"},[t._v("实际休假时间："),n("v-uni-text",{style:t.getDateStyle(a)},[t._v(t._s(e.startDate)+" ~ "+t._s(e.endDate)+" ("+t._s(e.countDate)+")")])],1):t._e(),n("v-uni-view",{staticClass:"main-content-state",style:t.getStateStyle(e.state)},[t._v(t._s(e.state))])],1)})),n("v-uni-view",{staticClass:"main-bottom-tips"},[t._v("没有更多了")])],2),n("v-uni-view",{staticClass:"bottom-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addLeave.apply(void 0,arguments)}}},[t._v("我要请假")])],1)},o=[]},9589:function(t,e,a){t.exports=a.p+"static/img/wenhao.e474643c.png"},af00:function(t,e,a){t.exports=a.p+"static/img/dun.4ae03ebd.png"},c474:function(t,e,a){"use strict";a.r(e);var n=a("1359"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},f42e:function(t,e,a){var n=a("23d2");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("0286b2c3",n,!0,{sourceMap:!1,shadowMode:!1})},f95e:function(t,e,a){"use strict";var n=a("f42e"),i=a.n(n);i.a},fe5f:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAPFBMVEUyMjIyMjIyMjIzMzMyMjIyMjIyMjIyMjIzMzMwMDAzMzMyMjIzMzMyMjIzMzMyMjIwMDAwMDAAAAAzMzOyZj+QAAAAE3RSTlPAn3+vj3Dg31BAoNDP7/BgEDAAuxgYOgAAARhJREFUSMed11sOhCAMBVDnrYIKZf97nUQxcQba3tZPkxOIFno7EPSkZ3zk5u2A2VhKWXx4t6VMHlzt6lm52jI68Gk3suNzzxPZcV4Om8mORatg2cpYsSLWrIRVK2Dd8hiwLEYsh6sNiex4g2wfbwWyXYzaHoZtB+O2xQbbYIv9xyb7h6sdMPuLq52J7PhutFf8stor/ljtFb93fEsuPB7bjsmDz4+N696vgnW3SKKnSKyaORjRczBsmr0MoucysGjhAozZg2lbd71kD6aMaa7dQJptdIjmWyygheauaylWqFoMNJqWo5SilRC3sqEViY+iVoOrpNXILGk9rAsaGBNy4DQ0oBx6Sb7RKPhHo6pdo9Gu5xLaOvsCuiX7Ntzw6rAAAAAASUVORK5CYII="}}]);