(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c649b43e"],{"09ac":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",{attrs:{gutter:24}},[a("Col",{attrs:{xs:8,lg:16}},[a("Button",{attrs:{type:"success",icon:"plus"},on:{click:function(e){return t.addBtn()}}},[t._v(t._s(t.$t("add")))])],1)],1),a("br"),a("Row",[t.tableLoading?a("div",{staticClass:"demo-spin-container"},[a("Spin",{attrs:{fix:""}},[a("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}}),a("div",[t._v(t._s(t.$t("table_loading")))])],1)],1):t._e(),a("Table",{attrs:{editable:"",border:"",columns:t.columns,data:t.dataList},on:{"on-sort-change":t.onSortChange},scopedSlots:t._u([{key:"weight",fn:function(t){var e=t.row,i=t.index;return[a("table-edit",{attrs:{table:"carousels",column:"weight",id:e.id,value:e.weight,index:i}})]}},{key:"cover_image",fn:function(t){var e=t.row;t.index;return[a("div",{staticClass:"text-center"},[e.cover_image?a("img",{staticClass:"fancybox",staticStyle:{"max-height":"100px"},attrs:{href:e.cover_image,src:e.cover_image,alt:"封面"}}):a("span")])]}},{key:"action",fn:function(e){var i=e.row,o=e.index;return[a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"success",size:"small"},on:{click:function(e){return t.tableButtonEdit(i,o)}}},[t._v(t._s(t.$t("edit")))]),a("Poptip",{attrs:{confirm:"",title:"您确定要删除ID为："+i.id+" 的记录？"},on:{"on-ok":function(e){return t.tableButtonDestroyOk(i,o)}}},[a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"error",size:"small"}},[t._v(t._s(t.$t("destroy")))])],1)]}}])})],1),t.addModal.show?a("add-component",{on:{"on-add-modal-success":t.getTableDataExcute,"on-add-modal-hide":t.addModalHide}}):t._e(),t.editModal.show?a("edit-component",{attrs:{"modal-id":t.editModal.id},on:{"on-edit-modal-success":t.getTableDataExcute,"on-edit-modal-hide":t.editModalHide}}):t._e()],1)},o=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Modal",{attrs:{closable:!1,"mask-closable":!1,width:"600"},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.$t("add")))]),a("Form",{ref:"formData",attrs:{model:t.formData,rules:t.rules,"label-position":"left","label-width":100}},[a("FormItem",{attrs:{label:"标题"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),a("FormItem",{attrs:{label:"图片："}},[a("upload",{attrs:{"upload-config":t.imguploadConfig},on:{"on-upload-change":t.uploadChange},model:{value:t.formData.cover_image,callback:function(e){t.$set(t.formData,"cover_image",e)},expression:"formData.cover_image"}})],1),a("FormItem",{attrs:{label:"跳转地址"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:t.formData.url,callback:function(e){t.$set(t.formData,"url",e)},expression:"formData.url"}})],1),a("FormItem",{attrs:{label:"描述"}},[a("Input",{attrs:{type:"textarea",placeholder:"请输入"},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1),a("FormItem",{attrs:{label:"排序："}},[a("Input",{staticStyle:{width:"auto"},attrs:{placeholder:"请输入序号"},model:{value:t.formData.weight,callback:function(e){t.$set(t.formData,"weight",e)},expression:"formData.weight"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v(t._s(t.$t("cancel")))]),a("Button",{attrs:{type:"primary",loading:t.saveLoading},on:{click:t.addExcute}},[t._v(t._s(t.$t("save"))+" ")])],1)],1)],1)},l=[],s=a("1f09"),d=a.n(s),r=a("66df"),c=function(t){return r["a"].request({url:"/api/admin/carousels",params:{search_data:d()(t)},method:"get"})},u=function(t){return r["a"].request({url:"/api/admin/carousels",data:t,method:"post"})},m=function(t,e){return r["a"].request({url:"/api/admin/carousels/"+e,data:t,method:"patch"})},f=function(t){return r["a"].request({url:"/api/admin/carousels/"+t,method:"get"})},h=function(t){return r["a"].request({url:"/api/admin/carousels/"+t,method:"delete"})},p=a("c13c"),g={components:{Upload:p["a"]},data:function(){return{modalShow:!0,saveLoading:!1,formData:{title:"",cover_image:{attachment_id:0,url:""},description:"",weight:50,url:""},imguploadConfig:{headers:{Authorization:window.access_token},format:["jpg","jpeg","png","gif"],max_size:500,upload_url:window.uploadUrl.uploadToLocaleUrl+"/pic/carousel",file_name:"file",multiple:!1,file_num:1,data:{},default_list:[]},rules:{}}},methods:{addExcute:function(){var t=this;t.saveLoading=!0,u(t.formData).then(function(e){t.saveLoading=!1,t.modalShow=!1,t.$emit("on-add-modal-success"),t.$emit("on-add-modal-hide"),t.$Notice.success({title:e.message})},function(e){t.saveLoading=!1})},cancel:function(){this.modalShow=!1,this.$emit("on-add-modal-hide")},uploadChange:function(t,e){}}},v=g,_=a("17cc"),b=Object(_["a"])(v,n,l,!1,null,null,null),w=b.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Modal",{attrs:{closable:!1,"mask-closable":!1,width:"600"},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.$t("edit")))]),a("Form",{ref:"formData",attrs:{model:t.formData,rules:t.rules,"label-position":"left","label-width":100}},[a("FormItem",{attrs:{label:"标题"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),a("FormItem",{attrs:{label:"图片："}},[t.formdataFinished?a("upload",{attrs:{"upload-config":t.imguploadConfig},on:{"on-upload-change":t.uploadChange},model:{value:t.formData.cover_image,callback:function(e){t.$set(t.formData,"cover_image",e)},expression:"formData.cover_image"}}):t._e()],1),a("FormItem",{attrs:{label:"跳转地址"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:t.formData.url,callback:function(e){t.$set(t.formData,"url",e)},expression:"formData.url"}})],1),a("FormItem",{attrs:{label:"描述"}},[a("Input",{attrs:{type:"textarea",placeholder:"请输入"},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1),a("FormItem",{attrs:{label:"排序："}},[a("Input",{staticStyle:{width:"auto"},attrs:{placeholder:"请输入序号"},model:{value:t.formData.weight,callback:function(e){t.$set(t.formData,"weight",e)},expression:"formData.weight"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v(t._s(t.$t("cancel")))]),a("Button",{attrs:{type:"primary",loading:t.saveLoading},on:{click:t.editExcute}},[t._v(t._s(t.$t("save"))+" ")])],1),!0===t.spinLoading?a("div",{staticClass:"demo-spin-container"},[a("Spin",{attrs:{fix:""}},[a("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}}),a("div",[t._v(t._s(t.$t("table_loading")))])],1)],1):t._e()],1)],1)},y=[],C=(a("b06f"),{components:{Upload:p["a"]},props:{modalId:{type:Number,default:0}},data:function(){return{modalShow:!0,saveLoading:!1,spinLoading:!0,formdataFinished:!1,formData:{title:"",cover_image:{attachment_id:0,url:""},description:"",weight:50,url:""},imguploadConfig:{headers:{Authorization:window.access_token},format:["jpg","jpeg","png","gif"],max_size:500,upload_url:window.uploadUrl.uploadToLocaleUrl+"/pic/carousel",file_name:"file",multiple:!1,file_num:1,data:{},default_list:[]},rules:{}}},mounted:function(){this.modalId>0&&this.getInfoByIdExcute()},methods:{getInfoByIdExcute:function(){var t=this;f(t.modalId).then(function(e){var a=e.data;t.formData={id:a.id,title:a.title,url:a.url,weight:a.weight,description:a.description,cover_image:{attachment_id:0,url:a.cover_image}},t.imguploadConfig.default_list=[t.formData.cover_image],t.spinLoading=!1,t.formdataFinished=!0})},editExcute:function(){var t=this;t.saveLoading=!0,m(t.formData,t.formData.id).then(function(e){t.saveLoading=!1,t.modalShow=!1,t.$emit("on-edit-modal-success"),t.$emit("on-edit-modal-hide"),t.$Notice.success({title:e.message})},function(e){t.saveLoading=!1})},cancel:function(){this.modalShow=!1,this.$emit("on-edit-modal-hide")},uploadChange:function(t,e){}}}),$=C,k=Object(_["a"])($,x,y,!1,null,null,null),D=k.exports,I=a("c901"),E={components:{AddComponent:w,EditComponent:D,TableEdit:I["a"]},data:function(){return{searchForm:{order_by:"id,desc"},notRealySortKey:[],tableLoading:!0,dataList:[],addModal:{show:!1},editModal:{show:!1,id:0},columns:[{title:"ID",key:"id",sortable:"customer",minWidth:100},{title:"标题",key:"title",minWidth:100},{title:"图片",minWidth:100,slot:"cover_image"},{title:"描述",key:"description",minWidth:100},{title:"排序",key:"weight",minWidth:50,sortable:"customer",slot:"weight"},{title:"创建时间",key:"created_at",minWidth:150},{title:"更新时间",key:"created_at",minWidth:150},{title:"操作",minWidth:200,slot:"action"}]}},created:function(){var t=this;t.getTableDataExcute()},methods:{getTableDataExcute:function(){var t=this;t.tableLoading=!0,c(t.searchForm).then(function(e){var a=e.data;t.dataList=a,t.tableLoading=!1,t.globalFancybox()},function(e){t.tableLoading=!1})},tableButtonEdit:function(t,e){this.editModal.show=!0,this.editModal.id=t.id},tableButtonDestroyOk:function(t,e){var a=this;h(t.id).then(function(t){a.$Notice.success({title:t.message})})},onSortChange:function(t){var e=t.column.key+","+t.order;oneOf(t.column.key,this.notRealySortKey)||(this.searchForm.order_by=e,this.getTableDataExcute(this.feeds.current_page))},addBtn:function(){this.addModal.show=!0},addModalHide:function(){this.addModal.show=!1},editModalHide:function(){this.editModal.show=!1}}},L=E,S=Object(_["a"])(L,i,o,!1,null,null,null);e["default"]=S.exports},"6a8f":function(t,e,a){"use strict";var i=a("c5a2"),o=a.n(i);o.a},"7f33":function(t,e,a){},b71b:function(t,e,a){"use strict";var i=a("7f33"),o=a.n(i);o.a},c13c:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._l(t.uploadList,function(e){return a("div",{staticClass:"demo-upload-list"},["finished"===e.status?[a("img",{attrs:{src:e.url}}),a("div",{staticClass:"demo-upload-list-cover"},[a("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(a){return t.handleRemove(e)}}})],1)]:[e.showProgress?a("Progress",{attrs:{percent:e.percentage,"hide-info":""}}):t._e()]],2)}),a("Upload",{ref:"upload",staticStyle:{display:"inline-block",width:"58px"},attrs:{"with-credentials":!1,data:t.uploadConfig.data,"show-upload-list":!1,"default-file-list":t.uploadConfig.default_list,"on-success":t.handleSuccess,"on-error":t.handleError,headers:t.uploadConfig.headers,format:t.uploadConfig.format,"max-size":t.uploadConfig.max_size,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize,"before-upload":t.handleBeforeUpload,multiple:t.uploadConfig.multiple,name:t.uploadConfig.file_name,type:"drag",action:t.uploadConfig.upload_url}},[a("div",{staticStyle:{width:"58px",height:"58px","line-height":"58px"}},[a("Icon",{attrs:{type:"ios-camera",size:"20"}})],1)]),a("Divider",{attrs:{orientation:"left"}},[t._v("点击预览图片")]),a("div",{staticClass:"galley-image-list"},[a("ul",{ref:"galley",staticClass:"pictures  row l-hide"},t._l(t.formatFileList,function(t,e){return a("li",[a("img",{attrs:{"data-original":t.url,src:t.url,alt:""}})])}),0)])],2)},o=[],n=(a("3a23"),a("2934"),a("8386")),l=(a("a398"),{props:{isDelete:{type:Boolean,default:!1},uploadConfig:{type:Object,default:{headers:{Authorization:window.access_token},format:["jpg","jpeg","png","gif"],max_size:800,upload_url:window.uploadUrl.uploadToLocaleUrl+"/tmp",file_name:"file",multiple:!1,file_num:0,data:[],default_list:[{name:"",attachment_id:0,url:""},{name:"",attachment_id:0,url:""}]}}},data:function(){return{imgName:"",visible:!1,uploadList:[],formatFileList:[]}},methods:{handleRemove:function(t){var e=this.$refs.upload.fileList;this.$refs.upload.fileList.splice(e.indexOf(t),1);var a=this.fomatFile();this.$emit("input",a),this.$emit("on-upload-change",this.uploadList,a),this.ViewImage()},handleSuccess:function(t,e){if(!t.hasOwnProperty("status")||"success"!=t.status)return this.$Notice.error({title:"出错了，请删除后重新上传",desc:t.message}),!1;e.url=t.data.url,e.name=t.data.original_name,e.attachment_id=t.data.attachment_id;var a=this.fomatFile();this.$emit("input",a),this.$emit("on-upload-change",this.uploadList,a),this.ViewImage()},handleError:function(t,e){this.$Notice.error({title:"出错了",desc:"服务内部错误"})},fomatFile:function(){var t=[];return this.uploadList.forEach(function(e,a,i){t.push({attachment_id:e.attachment_id,url:e.url})}),this.formatFileList=t,1===this.uploadConfig.file_num&&(t=t[0]),t},handleFormatError:function(t){this.$Notice.warning({title:"文件格式不正确",desc:"文件 "+t.name+" 格式不正确。"}),this.ViewImage()},handleMaxSize:function(t){this.$Notice.warning({title:"超出文件大小限制",desc:"文件 "+t.name+" 太大，不能超过 "+this.uploadConfig.max_size+"kb"}),this.ViewImage()},handleBeforeUpload:function(){var t=this.uploadList.length<this.uploadConfig.file_num;return t||(this.$Notice.warning({title:"数量限制",desc:"最多只能上传"+this.uploadConfig.file_num+"个文件"}),this.ViewImage()),t},ViewImage:function(){this.$nextTick(function(){$(function(){$(".l-hide").click(function(){$(".l-show").removeAttr("id").addClass("l-hide").removeClass("l-show"),$(this).attr("id","galley"),$(this).addClass("l-show"),$(this).removeClass("l-hide");var t=document.getElementById("galley"),e=new n["a"](t,{url:"data-original",toolbar:{oneToOne:!0,prev:function(){e.prev(!0)},play:!0,next:function(){e.next(!0)},update:function(){},download:function(){var t=document.createElement("a");t.href=e.image.src,t.download=e.image.alt,document.body.appendChild(t),t.click(),document.body.removeChild(t)}}})})})})}},mounted:function(){this.uploadList=this.$refs.upload.fileList;var t=this.fomatFile();"undefined"!=t&&(this.$emit("input",t),this.$emit("on-upload-change",this.uploadList,t)),this.ViewImage()}}),s=l,d=(a("6a8f"),a("17cc")),r=Object(d["a"])(s,i,o,!1,null,null,null);e["a"]=r.exports},c5a2:function(t,e,a){},c901:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tables-edit-outer"},[t.isEditting?a("div",{staticClass:"tables-editting-con"},[a("Input",{staticClass:"tables-edit-input",model:{value:t.columnValue,callback:function(e){t.columnValue=e},expression:"columnValue"}}),a("Button",{staticStyle:{padding:"6px 4px"},attrs:{type:"text"},on:{click:t.saveEdit}},[a("Icon",{attrs:{type:"md-checkmark"}})],1),a("Button",{staticStyle:{padding:"6px 4px"},attrs:{type:"text"},on:{click:t.canceltEdit}},[a("Icon",{attrs:{type:"md-close"}})],1)],1):a("div",{staticClass:"tables-edit-con"},[a("span",{staticClass:"value-con"},[t._v(t._s(t.value))]),a("Button",{staticClass:"tables-edit-btn",staticStyle:{padding:"2px 4px"},attrs:{type:"text"},on:{click:t.startEdit}},[a("Icon",{attrs:{type:"md-create"}})],1)],1)])},o=[],n=a("2934"),l={name:"TablesEdit",props:["table","column","id","value","index"],data:function(){return{edittingCellId:"",columnValue:this.value}},computed:{isEditting:function(){return this.edittingCellId==="editting-".concat(this.column,"-").concat(this.id)}},methods:{startEdit:function(){this.edittingCellId="editting-".concat(this.column,"-").concat(this.id)},saveEdit:function(){this.commonEditTableColumnExcute()},canceltEdit:function(){this.edittingCellId=""},commonEditTableColumnExcute:function(){var t=this;Object(n["a"])(t.id,t.table,t.column,t.columnValue).then(function(e){t.edittingCellId="",t.value=t.columnValue})}}},s=l,d=(a("b71b"),a("17cc")),r=Object(d["a"])(s,i,o,!1,null,null,null);e["a"]=r.exports}}]);