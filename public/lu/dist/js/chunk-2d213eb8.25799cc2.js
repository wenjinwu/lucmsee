(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213eb8"],{af74:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"privileges-users-list"}},[a("Row",{attrs:{gutter:24}},[a("Col",{attrs:{xs:8,lg:16}},[a("Button",{attrs:{type:"success",icon:"plus"},on:{click:function(e){return t.addBtn()}}},[t._v(t._s(t.$t("add")))])],1),a("Col",{staticClass:"hidden-mobile",attrs:{xs:12,lg:4}},[a("Input",{attrs:{icon:"search",placeholder:"请输入权限名称..."},model:{value:t.searchForm.name,callback:function(e){t.$set(t.searchForm,"name",e)},expression:"searchForm.name"}})],1),a("Col",{staticClass:"hidden-mobile",attrs:{xs:3,lg:2}},[a("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:function(e){return t.getTableDataExcute()}}},[t._v(t._s(t.$t("search")))])],1)],1),a("br"),a("Row",[t.tableLoading?a("div",{staticClass:"demo-spin-container"},[a("Spin",{attrs:{fix:""}},[a("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}}),a("div",[t._v(t._s(t.$t("table_loading")))])],1)],1):t._e(),a("Table",{attrs:{border:"",columns:t.columns,data:t.dataList},on:{"on-sort-change":t.onSortChange},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.row,n=e.index;return[a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"success",size:"small"},on:{click:function(e){return t.tableButtonEdit(o,n)}}},[t._v(t._s(t.$t("edit")))]),a("Poptip",{attrs:{confirm:"",title:"您确定要删除ID为："+o.id+" 的记录？"},on:{"on-ok":function(e){return t.tableButtonDestroyOk(o,n)}}},[a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"error",size:"small"}},[t._v(t._s(t.$t("destroy")))])],1)]}}])})],1),t.addModal.show?a("add-component",{on:{"on-add-modal-success":t.getTableDataExcute,"on-add-modal-hide":t.addModalHide}}):t._e(),t.editModal.show?a("edit-component",{attrs:{"modal-id":t.editModal.id},on:{"on-edit-modal-success":t.getTableDataExcute,"on-edit-modal-hide":t.editModalHide}}):t._e()],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Modal",{attrs:{closable:!1,"mask-closable":!1,width:"600"},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.$t("add")))]),a("Form",{ref:"formData",attrs:{model:t.formData,rules:t.rules,"label-position":"left","label-width":100}},[a("FormItem",{attrs:{label:"权限名称",prop:"name"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("FormItem",{attrs:{label:"权限描述",prop:"description"}},[a("Input",{attrs:{type:"textarea",rows:3,placeholder:"请输入"},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v(t._s(t.$t("cancel")))]),a("Button",{attrs:{type:"primary",loading:t.saveLoading},on:{click:t.addExcute}},[t._v(t._s(t.$t("save"))+" ")])],1)],1)],1)},s=[],d=a("f499"),r=a.n(d),l=a("66df"),c=function(t){return l["a"].request({url:"/api/admin/permissions",params:{search_data:r()(t)},method:"get"})},m=function(t){return l["a"].request({url:"/api/admin/permissions",data:t,method:"post"})},u=function(t,e){return l["a"].request({url:"/api/admin/permissions/"+e,data:t,method:"patch"})},p=function(t){return l["a"].request({url:"/api/admin/permissions/"+t,method:"get"})},h=function(t){return l["a"].request({url:"/api/admin/permissions/"+t,method:"delete"})},f={data:function(){return{modalShow:!0,saveLoading:!1,formData:{name:"",description:""},rules:{name:[{required:!0,message:"请填写权限名称",trigger:"blur"}]}}},methods:{addExcute:function(){var t=this;t.$refs.formData.validate(function(e){e&&(t.saveLoading=!0,m(t.formData).then(function(e){t.saveLoading=!1,t.modalShow=!1,t.$emit("on-add-modal-success"),t.$emit("on-add-modal-hide"),t.$Notice.success({title:e.message})},function(e){t.saveLoading=!1}))})},cancel:function(){this.modalShow=!1,this.$emit("on-add-modal-hide")}}},g=f,v=a("2877"),b=Object(v["a"])(g,i,s,!1,null,null,null),_=b.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Modal",{attrs:{closable:!1,"mask-closable":!1,width:"600"},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[a("p",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.$t("edit")))]),a("Form",{ref:"formData",attrs:{model:t.formData,rules:t.rules,"label-position":"left","label-width":100}},[a("FormItem",{attrs:{label:"权限名称",prop:"name"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("FormItem",{attrs:{label:"权限描述",prop:"description"}},[a("Input",{attrs:{type:"textarea",rows:3,placeholder:"请输入"},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v(t._s(t.$t("cancel")))]),a("Button",{attrs:{type:"primary",loading:t.saveLoading},on:{click:t.editExcute}},[t._v(t._s(t.$t("save"))+" ")])],1),!0===t.spinLoading?a("div",{staticClass:"demo-spin-container"},[a("Spin",{attrs:{fix:""}},[a("Icon",{staticClass:"spin-icon-load",attrs:{type:"load-c",size:"18"}}),a("div",[t._v(t._s(t.$t("table_loading")))])],1)],1):t._e()],1)],1)},x=[],D=(a("7f7f"),a("c5f6"),{props:{modalId:{type:Number,default:0}},data:function(){return{modalShow:!0,saveLoading:!1,spinLoading:!0,formData:{name:"",description:""},rules:{name:[{required:!0,message:"请填写权限名称",trigger:"blur"}]}}},mounted:function(){this.modalId>0&&this.getInfoByIdExcute()},methods:{getInfoByIdExcute:function(){var t=this;p(t.modalId).then(function(e){var a=e.data;t.formData={id:a.id,name:a.name,guard_name:a.guard_name,description:a.description},t.spinLoading=!1})},editExcute:function(){var t=this;t.$refs.formData.validate(function(e){e&&(t.saveLoading=!0,u(t.formData,t.formData.id).then(function(e){t.saveLoading=!1,t.modalShow=!1,t.$emit("on-edit-modal-success"),t.$emit("on-edit-modal-hide"),t.$Notice.success({title:e.message})},function(e){t.saveLoading=!1}))})},cancel:function(){this.modalShow=!1,this.$emit("on-edit-modal-hide")}}}),y=D,$=Object(v["a"])(y,w,x,!1,null,null,null),k=$.exports,I={components:{AddComponent:_,EditComponent:k},data:function(){return{searchForm:{order_by:"id,desc"},tableLoading:!0,dataList:[],addModal:{show:!1},editModal:{show:!1,id:0},columns:[{title:"ID",key:"id",sortable:"customer",minWidth:100},{title:"权限名称",key:"name",minWidth:150},{title:"看守器",key:"guard_name",minWidth:150},{title:"权限描述",key:"description",minWidth:150},{title:"创建时间",key:"created_at",minWidth:150},{title:"更新时间",key:"created_at",minWidth:150},{title:"操作",minWidth:200,slot:"action"}]}},mounted:function(){this.getTableDataExcute()},methods:{getTableDataExcute:function(){var t=this;t.loading=!0,c(t.searchForm).then(function(e){var a=e.data;t.dataList=a,t.tableLoading=!1},function(e){t.tableLoading=!1})},tableButtonEdit:function(t,e){this.editModal.show=!0,this.editModal.id=t.id},tableButtonDestroyOk:function(t,e){var a=this;h(t.id).then(function(t){a.feeds.data.splice(e,1),a.$Notice.success({title:t.message})})},onSortChange:function(t){var e=t.column.key+","+t.order;this.searchForm.order_by=e,this.getTableDataExcute()},addBtn:function(){this.addModal.show=!0},addModalHide:function(){this.addModal.show=!1},editModalHide:function(){this.editModal.show=!1}}},L=I,S=Object(v["a"])(L,o,n,!1,null,null,null);e["default"]=S.exports}}]);