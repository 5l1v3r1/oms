webpackJsonp([4,56,57],{"1Mgu":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={components:{},props:["ruleForm"],data:function(){return{TEST_STATUS:{0:"Passed",1:"Failed",2:"Block",3:"N/A"}}},created:function(){},methods:{}},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("a",[t._v(t._s(t.ruleForm.name))])]),t._v(" "),a("el-form",{staticClass:"table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"预期结果",prop:"expect_result"}},[a("span",[t._v(t._s(t.ruleForm.expect_result))])]),t._v(" "),a("el-form-item",{attrs:{label:"实际结果",prop:"actual_result"}},[a("span",[t._v(t._s(t.ruleForm.actual_result))])]),t._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("span",[t._v(t._s(t.TEST_STATUS[t.ruleForm.status]))])]),t._v(" "),a("el-form-item",{attrs:{label:"开发",prop:"action_user"}},[a("span",[t._v(t._s(t.ruleForm.action_user))])]),t._v(" "),a("el-form-item",{attrs:{label:"测试时间",prop:"test_time"}},[a("span",[t._v(t._s(t.ruleForm.test_time))])])],1)],1)},o=[],r={render:i,staticRenderFns:o},n=r,l=a("VU/8"),c=l(s,n,!1,null,null,null);e.default=c.exports},"1n3Z":function(t,e,a){"use strict";function s(t){a("3ILi")}var i={name:"BackToTop",props:{visibilityHeight:{type:Number,default:400},backPosition:{type:Number,default:0},customStyle:{type:Object,default:{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}},transitionName:{type:String,default:"fade"}},data:function(){return{visible:!1,interval:null}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll),this.interval&&clearInterval(this.interval)},methods:{handleScroll:function(){this.visible=window.pageYOffset>this.visibilityHeight},backToTop:function(){var t=this,e=window.pageYOffset,a=0;this.interval=setInterval(function(){var s=Math.floor(t.easeInOutQuad(10*a,e,-e,500));s<=t.backPosition?(window.scrollTo(0,t.backPosition),clearInterval(t.interval)):window.scrollTo(0,s),a++},16.7)},easeInOutQuad:function(t,e,a,s){return(t/=s/2)<1?a/2*t*t+e:-a/2*(--t*(t-2)-1)+e}}},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:t.transitionName}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"back-to-ceiling",style:t.customStyle,on:{click:t.backToTop}},[a("svg",{staticClass:"Icon Icon--backToTopArrow",staticStyle:{height:"16px",width:"16px"},attrs:{width:"16",height:"16",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[a("title",[t._v("回到顶部")]),t._v(" "),a("g",[a("path",{attrs:{d:"M12.036 15.59c0 .55-.453.995-.997.995H5.032c-.55 0-.997-.445-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29c.39-.39 1.026-.385 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z","fill-rule":"evenodd"}})])])])])},r=[],n={render:o,staticRenderFns:r},l=n,c=a("VU/8"),u=s,d=c(i,l,!1,u,"data-v-3531eed5",null);e.a=d.exports},"2Ip+":function(t,e,a){var s=a("h+7X");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("13e13d4f",s,!0)},"3ILi":function(t,e,a){var s=a("nMwr");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("321a9d91",s,!0)},"5S43":function(t,e,a){"use strict";function s(t){a("2Ip+")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("EMlb"),o=a("nSkA"),r=a("Xoog"),n=a.n(r),l=a("1n3Z"),c=a("0xDb"),u=a("TDrc"),d=a("6HvL"),p=a("6d/X"),m=a("1Mgu"),_=a("vMJZ"),f={components:{VueMarkdown:n.a,BackToTop:l.a,addBug:u.default,addTest:d.default,showBug:p.default,showTest:m.default},data:function(){return{route_path:this.$route.path.split("/"),pid:this.$route.params.id,ticketData:{},commentData:{},commentForm:{project:"",create_user:localStorage.getItem("username"),content:""},rowdata:{status:""},toolbars:{preview:!0,bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,ol:!0,help:!0},BackToTopStyle:{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"50px","line-height":"45px",background:"#a2fdff"},status:[{label:"已指派",value:"1"},{label:"处理中",value:"2"},{label:"待审核",value:"3"},{label:"已完成",value:"4"}],STATUS_TEXT:{0:"未指派",1:"已指派",2:"处理中",3:"待审核",4:"已完成"},STATUS_TYPE:{0:"danger",1:"primary",2:"success",3:"warning",4:"info"},Bug_Status:{0:"新建",1:"打开",2:"关闭",3:"已修复",4:"暂不处理",5:"重新打开"},Test_Status:{0:"Passed",1:"Failed",2:"Block",3:"N/A"},showinput:!1,addBugFrom:!1,addTestFrom:!1,bugData:[],testData:[],bugquery:{project__id:"",test_id:"",id:""},testquery:{project__id:"",id:""},commentquery:{project__id:""},showBugForm:!1,showTestForm:!1,sendnotice:!1,users:[],selectBug:{},selectTest:{}}},created:function(){this.bugquery.project__id=this.testquery.project__id=this.commentquery.project__id=this.commentForm.project=this.pid,this.fetchData(),this.fetchBugData(),this.fetchTestData(),this.CommentData(),this.getProjectUsers()},methods:{fetchData:function(){var t=this;Object(i.f)(null,this.pid).then(function(e){t.ticketData=e.data})},getDialogStatus:function(t){this.addBugFrom=t,this.addTestFrom=t,this.fetchBugData(),this.fetchTestData()},CommentData:function(){var t=this;Object(i.g)(this.commentquery).then(function(e){t.commentData=e.data}),this.commentForm.content=""},fetchBugData:function(){var t=this;Object(i.e)(this.bugquery).then(function(e){t.bugData=e.data})},fetchTestData:function(){var t=this;Object(i.i)(this.testquery).then(function(e){t.testData=e.data})},submitForm:function(t){var e=this;Object(i.n)(this.commentForm).then(function(t){if(e.CommentData(),e.sendnotice){var a={action_user:e.ticketData.create_user+","+e.ticketData.follow_user.join(),title:"【任务有新回复】"+e.ticketData.title,message:"回复人: "+e.commentForm.create_user+"\n地址: "+window.location.href};Object(o.h)(a)}}).catch(function(){e.$message({type:"error",message:"提交有误"})})},patchForm:function(){var t=this;Object(i.k)(this.pid,this.rowdata).then(function(){t.fetchData(),t.showinput=!1})},imgAdd:function(t,e){var a=this.$refs.md,s=new FormData;s.append("username",this.username),s.append("file",e),s.append("create_time",Object(c.a)(e.lastModified)),s.append("type",e.type),s.append("archive",this.route_path[1]),Object(o.i)(s).then(function(e){a.$imglst2Url([[t,e.data.file]])})},showBug:function(t){this.showBugForm=!0,this.selectBug=t},showTest:function(t){this.showTestForm=!0,this.selectTest=t},clicktestTable:function(t){this.bugquery.test_id=t.id,this.fetchBugData()},getProjectUsers:function(){var t=this,e={groups__name:"ITDept"};Object(_.f)(e).then(function(e){t.users=e.data})}}},h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:17}},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("a",{staticClass:"title"},[t._v(t._s(t.ticketData.name))]),t._v(" "),a("hr",{staticClass:"heng"}),t._v(" "),a("div",{staticClass:"appendInfo"},[a("a",{staticClass:"ticketinfo create_user"},[a("span",{staticClass:"han"},[t._v("\n                              创建时间：")]),t._v(t._s(t._f("parseDate")(t.ticketData.create_time)))]),t._v(" "),a("a",{staticClass:"ticketinfo create_user"},[a("span",{staticClass:"han"},[a("a",{staticClass:"shu"}),t._v("\n                              发起人：")]),t._v(t._s(t.ticketData.create_user))]),t._v(" "),a("a",{staticClass:"ticketinfo action_user"},[a("span",{staticClass:"han"},[a("a",{staticClass:"shu"}),t._v("指派人：")]),t._v(" "),t._l(t.ticketData.action_user,function(e){return a("el-tag",{key:e.id,staticStyle:{"margin-right":"3px"},attrs:{size:"mini"}},[t._v(t._s(e)+"\n                ")])})],2),t._v(" "),a("a",{staticClass:"shu"}),t._v(" "),a("span",{staticClass:"han"},[t._v("类型：")]),t._v(" "),a("a",[t._v(t._s(t.ticketData.type))]),t._v(" "),a("a",{staticClass:"shu"}),t._v(" "),a("span",{staticClass:"han"},[t._v("当前状态：")]),t._v(" "),a("el-tag",{attrs:{type:t.STATUS_TYPE[t.ticketData.status]}},[t._v("\n                "+t._s(t.STATUS_TEXT[t.ticketData.status])+"\n              ")])],1),t._v(" "),4!=t.ticketData.status?a("div",{staticClass:"appendInfo"},[a("span",{staticClass:"han"},[t._v("操作：")]),t._v(" "),t.showinput?t._e():a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(e){t.showinput=!0}}},[t._v("更改状态")]),t._v(" "),t.showinput?a("el-button",{attrs:{type:"warning",size:"small"},on:{click:function(e){t.showinput=!1}}},[t._v("收起")]):t._e(),t._v(" "),t.showinput?a("div",{staticClass:"action"},[a("el-select",{attrs:{filterable:"",placeholder:"请选择状态"},model:{value:t.rowdata.status,callback:function(e){t.$set(t.rowdata,"status",e)},expression:"rowdata.status"}},t._l(t.status,function(t){return a("el-option",{key:t.id,attrs:{label:t.label,value:t.value}})})),t._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:t.patchForm}},[t._v("确定")])],1):t._e()],1):t._e()]),t._v(" "),a("vue-markdown",{attrs:{source:t.ticketData.content}})],1),t._v(" "),4!=t.ticketData.status?a("div",[a("el-form",{ref:"content",staticClass:"demo-ruleForm",attrs:{model:t.commentForm,"label-width":"80px"}},[a("hr",{staticClass:"heng"}),t._v(" "),a("el-form-item",{attrs:{label:"问题处理",prop:"content"}},[a("mavon-editor",{ref:"md",staticStyle:{"z-index":"1"},attrs:{code_style:"monokai",toolbars:t.toolbars},on:{imgAdd:t.imgAdd},model:{value:t.commentForm.content,callback:function(e){t.$set(t.commentForm,"content",e)},expression:"commentForm.content"}}),t._v(" "),a("a",{staticClass:"tips"},[t._v(" Tip：截图可以直接 Ctrl + v 粘贴到问题处理里面")])],1),t._v(" "),a("el-form-item",{attrs:{label:"通知人",prop:"action_user"}},[a("el-select",{attrs:{filterable:"",multiple:"",placeholder:"请选择通知人"},model:{value:t.ticketData.follow_user,callback:function(e){t.$set(t.ticketData,"follow_user",e)},expression:"ticketData.follow_user"}},t._l(t.users,function(t){return a("el-option",{key:t.id,attrs:{value:t.username}})})),t._v(" "),a("el-checkbox",{model:{value:t.sendnotice,callback:function(e){t.sendnotice=e},expression:"sendnotice"}},[t._v("发送通知")])],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("提交")])],1)],1)],1):t._e(),t._v(" "),t.commentData.length>0?a("el-card",{staticClass:"ticketcomment"},[t._v("\n          处理历史记录\n          "),t._l(t.commentData,function(e){return a("div",{key:e.id},[a("hr",{staticClass:"heng"}),t._v(" "),a("el-row",[a("el-col",{attrs:{span:1}},[a("el-button",{staticClass:"commentuser",attrs:{type:"primary",plain:""}},[t._v(t._s(e.create_user))])],1),t._v(" "),a("el-col",{attrs:{span:14}},[a("div",{staticClass:"dialog-box"},[a("span",{staticClass:"bot"}),t._v(" "),a("span",{staticClass:"top"}),t._v(" "),a("div",{staticClass:"comment"},[a("vue-markdown",{attrs:{source:e.content}}),t._v(" "),a("p",{staticClass:"commenttime"},[t._v("处理时间："+t._s(t._f("parseDate")(e.create_time)))])],1)])])],1)],1)})],2):t._e()],1),t._v(" "),a("el-col",{attrs:{span:7}},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("a",{staticClass:"right-title"},[t._v("测试用例")]),t._v(" "),a("el-button",{staticClass:"card-head-btn",attrs:{type:"text",icon:"el-icon-plus"},on:{click:function(e){t.addTestFrom=!0}}})],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.testData,stripe:""},on:{"row-click":t.clicktestTable}},[a("el-table-column",{attrs:{prop:"id",label:"Id",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("i",{staticClass:"fa fa-hashtag"}),t._v(t._s(e.row.id)+"\n                ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.showTest(e.row)}}},[t._v(t._s(e.row.name))])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("el-tag",[t._v(t._s(t.Test_Status[e.row.status]))])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"action_user",label:"开发",width:"80"}})],1)],1),t._v(" "),a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("a",{staticClass:"right-title"},[t._v("关联bug")]),t._v(" "),a("el-button",{staticClass:"card-head-btn",attrs:{type:"text",icon:"el-icon-plus"},on:{click:function(e){t.addBugFrom=!0}}})],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.bugData,stripe:""}},[a("el-table-column",{attrs:{prop:"id",label:"Id",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("i",{staticClass:"fa fa-hashtag"}),t._v(t._s(e.row.id)+"\n                ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.showBug(e.row)}}},[t._v(t._s(e.row.name))])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("el-tag",[t._v(t._s(t.Bug_Status[e.row.status]))])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"action_user",label:"开发",width:"80"}})],1)],1)],1)],1)],1),t._v(" "),a("el-tooltip",{attrs:{placement:"top",content:"一路向西"}},[a("back-to-top",{attrs:{transitionName:"fade",customStyle:t.BackToTopStyle,visibilityHeight:300,backPosition:50}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.addBugFrom},on:{"update:visible":function(e){t.addBugFrom=e}}},[a("add-bug",{attrs:{project:t.ticketData.pid},on:{DialogStatus:t.getDialogStatus}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.addTestFrom},on:{"update:visible":function(e){t.addTestFrom=e}}},[a("add-test",{attrs:{project:t.ticketData.pid},on:{DialogStatus:t.getDialogStatus}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.showBugForm},on:{"update:visible":function(e){t.showBugForm=e}}},[a("show-bug",{attrs:{ruleForm:t.selectBug}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.showTestForm},on:{"update:visible":function(e){t.showTestForm=e}}},[a("show-test",{attrs:{ruleForm:t.selectTest}})],1)],1)},v=[],b={render:h,staticRenderFns:v},g=b,w=a("VU/8"),k=s,x=w(f,g,!1,k,null,null);e.default=x.exports},"6d/X":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={components:{},props:["ruleForm"],data:function(){return{Bug_Nice:{0:"低",1:"中",2:"高"},Bug_Status:{0:"新建",1:"打开",2:"关闭",3:"已修复",4:"暂不处理",5:"重新打开"}}},created:function(){},methods:{}},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("a",[t._v(t._s(t.ruleForm.name))])]),t._v(" "),a("el-form",{staticClass:"table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"严重程度",prop:"degree"}},[a("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#ff1425"],disabled:""},model:{value:t.ruleForm.degree,callback:function(e){t.$set(t.ruleForm,"degree",e)},expression:"ruleForm.degree"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"优先级",prop:"nice"}},[a("span",[t._v(t._s(t.Bug_Nice[t.ruleForm.nice]))])]),t._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("span",[t._v(t._s(t.Bug_Status[t.ruleForm.status]))])]),t._v(" "),a("el-form-item",{attrs:{label:"开发",prop:"action_user"}},[a("span",[t._v(t._s(t.ruleForm.action_user))])]),t._v(" "),a("el-form-item",{attrs:{label:"测试时间",prop:"test_time"}},[a("span",[t._v(t._s(t.ruleForm.test_time))])]),t._v(" "),a("el-form-item",{attrs:{label:"关闭时间",prop:"end_time"}},[a("span",[t._v(t._s(t.ruleForm.end_time))])]),t._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"desc"}},[a("span",[t._v(t._s(t.ruleForm.desc))])])],1)],1)},o=[],r={render:i,staticRenderFns:o},n=r,l=a("VU/8"),c=l(s,n,!1,null,null,null);e.default=c.exports},"h+7X":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".editticket{margin:50px;width:80%}.title{font-size:28px;font-weight:700;padding-left:10px}.right-title{font-size:20px;font-weight:600;padding-left:10px}.card-head-btn{float:right;padding:3px 0}.appendInfo{padding:5px;margin:5px}.action{display:inline;margin-left:20px}.han{margin-left:5px}.content{margin:20px 5px}.ticketcomment{margin-top:20px;background-color:rgba(48,250,81,.17)}.ticketcomment .dialog-box{position:relative;left:100px;margin-left:-20px}.ticketcomment .dialog-box span{width:0;height:0;font-size:0;overflow:hidden;position:absolute}.ticketcomment .dialog-box span.bot{border-width:16px;border-style:solid dashed dashed;border-color:transparent rgba(48,250,81,.38) transparent transparent;top:10px;left:-30px}.ticketcomment .dialog-box .comment{border:1px solid rgba(255,164,186,.62);padding:6px;margin-bottom:10px;min-height:50px;max-width:600px;width:50rem}.ticketcomment .dialog-box .comment .commenttime{float:right}",""])},nMwr:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".back-to-ceiling[data-v-3531eed5]{position:fixed;display:inline-block;text-align:center;cursor:pointer}.back-to-ceiling[data-v-3531eed5]:hover{background:#d5dbe7}.back-to-ceiling .Icon[data-v-3531eed5]{fill:#9aaabf;background:none}",""])}});