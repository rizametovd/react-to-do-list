(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],[,,,function(e,t,a){e.exports={popup:"CreateCategoryPopup_popup__lXZXZ",popupIsOpen:"CreateCategoryPopup_popupIsOpen__2WH2t",container:"CreateCategoryPopup_container__2iI0H",closeButton:"CreateCategoryPopup_closeButton__UyTJk",form:"CreateCategoryPopup_form__g5sqM",input:"CreateCategoryPopup_input__D9t4L",validationError:"CreateCategoryPopup_validationError__1v3c0",addColorButton:"CreateCategoryPopup_addColorButton__3scpG"}},function(e,t,a){e.exports={container:"CategoryContainer_container__VbgZk",titleContainer:"CategoryContainer_titleContainer__1OdAw",categoryName:"CategoryContainer_categoryName__Qrz11",form:"CategoryContainer_form__2ytKK",categoryTitle:"CategoryContainer_categoryTitle__2TNwM",green:"CategoryContainer_green__DGfRX",blue:"CategoryContainer_blue__25Zuu",pink:"CategoryContainer_pink__3V_b6",lightgreen:"CategoryContainer_lightgreen__5etpn",gray:"CategoryContainer_gray__1DmUM",purple:"CategoryContainer_purple__1QfLU",red:"CategoryContainer_red__2MERE",black:"CategoryContainer_black__2E6zL",editButton:"CategoryContainer_editButton__2gWLl",list:"CategoryContainer_list__1G7rG",createTaskButton:"CategoryContainer_createTaskButton__3Oh6F",createTaskButtonHidden:"CategoryContainer_createTaskButtonHidden__a_IqJ"}},function(e,t,a){e.exports={container:"HamburgerMenu_container__mzqgQ",button:"HamburgerMenu_button__2Gpu2",closeMenuButton:"HamburgerMenu_closeMenuButton__1H3MX",categoryContainer:"HamburgerMenu_categoryContainer__2kuhV",categoryContainerActive:"HamburgerMenu_categoryContainerActive__3SkAh",list:"HamburgerMenu_list__20bEe"}},function(e,t,a){e.exports={item:"CategoryItem_item__172ZS",itemContainer:"CategoryItem_itemContainer__1Dn-P",task:"CategoryItem_task__12Lct",green:"CategoryItem_green__HW2md",blue:"CategoryItem_blue__3cKGc",pink:"CategoryItem_pink__3yzzS",gray:"CategoryItem_gray__3229R",purple:"CategoryItem_purple__2fDeX",red:"CategoryItem_red__1Rt3r",lightGreen:"CategoryItem_lightGreen__zGQbb",black:"CategoryItem_black__2pSfb",text:"CategoryItem_text__1C55B",deleteCategoryButton:"CategoryItem_deleteCategoryButton__2rvLY"}},function(e,t,a){e.exports={container:"CreateTaskForm_container__107qx",input:"CreateTaskForm_input__2gHw_",validationError:"CreateTaskForm_validationError__2uq7e",buttonsContainer:"CreateTaskForm_buttonsContainer__3EGxI",saveButton:"CreateTaskForm_saveButton__25PvI",cancelButton:"CreateTaskForm_cancelButton__2oCmp"}},function(e,t,a){e.exports={item:"Task_item__rVRd-",itemContainer:"Task_itemContainer__2dfCl",checkbox:"Task_checkbox__2tAx6",itemText:"Task_itemText__1qK2S",deleteTaskButton:"Task_deleteTaskButton__3gBhs"}},function(e,t,a){e.exports={form:"CategoryNameForm_form__1bWAA",input:"CategoryNameForm_input__3jMvJ",buttonsContainer:"CategoryNameForm_buttonsContainer__3Rdt9",saveButton:"CategoryNameForm_saveButton__3HkFc",cancelButton:"CategoryNameForm_cancelButton__26ZFv",validationError:"CategoryNameForm_validationError__3yln1"}},,function(e,t,a){e.exports={main:"Main_main__3Ndtu",list:"Main_list__1ohNA",listItem:"Main_listItem__1I2O4",noTasksYet:"Main_noTasksYet__gFV0z"}},,,function(e,t,a){e.exports={sidebar:"Sidebar_sidebar__2kvTN",title:"Sidebar_title__2kWCx",list:"Sidebar_list__3Lk1p"}},,function(e,t,a){e.exports={radio:"ColorItem_radio__h4m2t",green:"ColorItem_green__2mT9_",blue:"ColorItem_blue__321zf",pink:"ColorItem_pink__2aW6V",gray:"ColorItem_gray__1WXoT",purple:"ColorItem_purple__6I0M3",red:"ColorItem_red__2gFZ7",lightGreen:"ColorItem_lightGreen__2tQAv",black:"ColorItem_black__2KEer"}},function(e,t,a){e.exports={container:"CreateCategoryButton_container__1FqIp",button:"CreateCategoryButton_button__2Jbmp"}},,,,function(e,t,a){e.exports={list:"ColorList_list__2bSJY"}},function(e,t,a){e.exports={page:"App_page__1MKT1"}},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var o=a(1),n=a.n(o),r=a(20),c=a.n(r),i=a(19),s=a(18),l=a(2),u=(a(27),a(3)),_=a.n(u),C=a(21),p=a.n(C),m=a(16),b=a.n(m),g=a(0);var j=function(e){var t=e.color,a=e.chooseColor,o=e.id;return Object(g.jsxs)("li",{children:[Object(g.jsx)("input",{type:"radio",className:"".concat(b.a.radio," ").concat(b.a[t]),id:o,name:"colorList",value:t,onChange:a,required:!0}),Object(g.jsx)("label",{htmlFor:o})]})};var d=function(e){var t=e.chooseColor,a=e.id;return Object(g.jsx)("ul",{className:p.a.list,children:["green","blue","pink","gray","purple","red","lightGreen","black"].map((function(e,o){return Object(g.jsx)(j,{chooseColor:t,color:e,id:"".concat(a+o)},o)}))})},y=a(13),O=a.n(y);var x=function(e){var t=e.isCreateCategoryPopupOpen,a=e.closeCreateCategoryPopup,n=e.createCategory,r=e.id,c=Object(o.useState)(""),i=Object(l.a)(c,2),s=i[0],u=i[1],C=Object(o.useState)(""),p=Object(l.a)(C,2),m=p[0],b=p[1];return Object(g.jsx)("div",{className:"".concat(t&&_.a.popupIsOpen," ").concat(_.a.popup),children:Object(g.jsxs)("div",{className:_.a.container,children:[Object(g.jsx)("button",{className:_.a.closeButton,type:"button",onClick:a,"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f"}),Object(g.jsxs)("form",{className:_.a.form,onSubmit:function(e){e.preventDefault(),n({id:O()(),categoryName:s,color:m,tasks:[]}),a()},children:[Object(g.jsx)("input",{type:"text",className:_.a.input,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",onChange:function(e){u(e.target.value)},required:!0}),Object(g.jsx)("span",{className:_.a.validationError,children:"\u0422\u0435\u043a\u0441\u0442 \u043e\u0448\u0438\u0431\u043a\u0438 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438"}),Object(g.jsx)(d,{chooseColor:function(e){b(e.target.value)},id:r}),Object(g.jsx)("button",{className:_.a.addColorButton,type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})})},v=a(5),k=a.n(v),f=a(6),h=a.n(f);var N=function(e){var t=e.text,a=e.taskColor,o=e.id,n=e.removeCategory;return Object(g.jsxs)("li",{className:h.a.item,children:[Object(g.jsxs)("div",{className:h.a.itemContainer,children:[Object(g.jsx)("span",{className:"".concat(h.a.task," ").concat(h.a[a])}),Object(g.jsx)("p",{className:h.a.text,children:t})]}),Object(g.jsx)("button",{className:h.a.deleteCategoryButton,"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e",onClick:function(){n(o)}})]})},T=a(17),I=a.n(T);var B=function(e){var t=e.openCreateCategoryPopup;return Object(g.jsx)("div",{className:I.a.container,children:Object(g.jsx)("button",{className:I.a.button,type:"button",onClick:t,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0430\u043f\u043a\u0443"})})};var P=function(e){var t=e.createCategory,a=e.openCreateCategoryPopup,n=e.isCreateCategoryPopupOpen,r=e.closeCreateCategoryPopup,c=e.toDoList,i=Object(o.useState)(!1),s=Object(l.a)(i,2),u=s[0],_=s[1];return Object(g.jsxs)("div",{className:k.a.container,children:[Object(g.jsx)("button",{className:"".concat(u&&k.a.closeMenuButton," ").concat(k.a.button),type:"button",onClick:function(){_((function(e){return!e}))},"aria-label":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0438\u043b\u0438 \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e"}),Object(g.jsxs)("div",{className:"".concat(u&&k.a.categoryContainerActive," ").concat(k.a.categoryContainer),children:[Object(g.jsx)("ul",{className:k.a.list,children:c.map((function(e){var t=e.categoryName,a=e.id,o=e.color;return Object(g.jsx)(N,{text:t,taskColor:o},a)}))}),Object(g.jsx)(B,{openCreateCategoryPopup:a}),Object(g.jsx)(x,{isCreateCategoryPopupOpen:n,closeCreateCategoryPopup:r,createCategory:t,id:"mobile"})]})]})},F=a(8),S=a.n(F);var E=function(e){var t=e.id,a=e.children,o=e.removeTask;return Object(g.jsxs)("li",{className:S.a.item,children:[Object(g.jsxs)("div",{className:S.a.itemContainer,children:[Object(g.jsx)("input",{className:S.a.checkbox,type:"checkbox",id:t}),Object(g.jsx)("label",{className:S.a.itemText,htmlFor:t,children:a})]}),Object(g.jsx)("button",{className:S.a.deleteTaskButton,type:"button",onClick:function(){o(t)}})]})},M=a(4),D=a.n(M),L=a(7),H=a.n(L);var G=function(e){var t=e.cancelCreateTask,a=e.onSaveCreateTask,n=e.categoryId,r=Object(o.useState)(""),c=Object(l.a)(r,2),i=c[0],s=c[1];return Object(g.jsx)("div",{className:H.a.container,children:Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a({catId:n,task:i,isDone:!1,id:O()()})},children:[Object(g.jsx)("input",{className:H.a.input,placeholder:"\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438",onChange:function(e){s(e.target.value)},required:!0}),Object(g.jsx)("span",{className:H.a.validationError,children:"\u0422\u0435\u043a\u0441\u0442 \u043e\u0448\u0438\u0431\u043a\u0438 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438"}),Object(g.jsxs)("div",{className:H.a.buttonsContainer,children:[Object(g.jsx)("button",{className:H.a.saveButton,type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"}),Object(g.jsx)("button",{className:H.a.cancelButton,onClick:t,type:"button",children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})]})})},A=a(9),q=a.n(A);var z=function(e){var t=e.onSaveEditCategoryName,a=e.onCancelEditCategoryName,n=Object(o.useState)(""),r=Object(l.a)(n,2),c=r[0],i=r[1];return Object(g.jsxs)("form",{className:q.a.form,onSubmit:function(e){e.preventDefault(),t(c)},children:[Object(g.jsx)("input",{className:q.a.input,onChange:function(e){i(e.target.value)}}),Object(g.jsxs)("div",{className:q.a.buttonsContainer,children:[Object(g.jsx)("button",{className:q.a.saveButton,type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(g.jsx)("button",{className:q.a.cancelButton,type:"button",onClick:a,children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})]})};var V=function(e){var t=e.title,a=e.titleColor,n=e.createTask,r=e.tasks,c=e.categoryId,i=e.removeTask,s=e.changeCategoryName,u=Object(o.useState)(!1),_=Object(l.a)(u,2),C=_[0],p=_[1],m=Object(o.useState)(!1),b=Object(l.a)(m,2),j=b[0],d=b[1];return Object(g.jsxs)("div",{className:D.a.container,children:[Object(g.jsxs)("div",{className:D.a.titleContainer,children:[!j&&Object(g.jsxs)("div",{className:D.a.categoryName,children:[Object(g.jsx)("h2",{className:"".concat(D.a.categoryTitle," ").concat(D.a[a]),children:t}),Object(g.jsx)("button",{className:D.a.editButton,type:"button",onClick:function(){d(!0)},"aria-label":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"})]}),j&&Object(g.jsx)(z,{onSaveEditCategoryName:function(e){s({inputValue:e,categoryId:c}),d(!1)},onCancelEditCategoryName:function(){d(!1)}})]}),Object(g.jsx)("ul",{className:D.a.list,children:r.map((function(e){var t=e.task,a=e.id;e.isDone;return e.catId===c?Object(g.jsx)(E,{id:a,removeTask:i,children:t},a):""}))}),!C&&Object(g.jsx)("button",{type:"button",className:D.a.createTaskButton,onClick:function(){p(!0)},children:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430"}),C&&Object(g.jsx)(G,{cancelCreateTask:function(){p(!1)},createTask:n,onSaveCreateTask:function(e){n(e),p(!1)},categoryId:c})]})},J=a(11),W=a.n(J);var Z=function(e){var t=e.isCreateTaskFormOpen,a=e.openCreateTaskForm,o=e.cancelCreateTask,n=e.createTask,r=e.removeTask,c=e.isCategoryNameFormOpen,i=e.openCategoryNameForm,s=e.onSaveEditCategoryName,l=e.onCancelEditCategoryName,u=e.toDoList,_=e.tasks,C=e.changeCategoryName;return Object(g.jsxs)("main",{className:W.a.main,children:[0===u.length?Object(g.jsx)("span",{className:W.a.noTasksYet,children:"\u0417\u0430\u0434\u0430\u0447\u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442"}):Object(g.jsx)("ul",{className:W.a.list,children:u.map((function(e){var u=e.categoryName,p=e.color,m=e.id;return Object(g.jsx)(V,{title:u,titleColor:p,openCreateTaskForm:a,isCreateTaskFormOpen:t,createTask:n,removeTask:r,cancelCreateTask:o,openCategoryNameForm:i,isCategoryNameFormOpen:c,onSaveEditCategoryName:s,onCancelEditCategoryName:l,tasks:_,categoryId:m,changeCategoryName:C},m)}))}),Object(g.jsx)("ul",{className:W.a.list})]})},K=a(14),R=a.n(K);var X=function(e){var t=e.isCreateCategoryPopupOpen,a=e.openCreateCategoryPopup,o=e.closeCreateCategoryPopup,n=e.createCategory,r=e.removeCategory,c=e.toDoList;return console.log(c),Object(g.jsxs)("div",{className:R.a.sidebar,children:[0!==c.length&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h2",{className:R.a.title,children:"\u0412\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"}),Object(g.jsx)("ul",{className:R.a.list,children:c.map((function(e){var t=e.categoryName,a=e.color,o=e.id;return Object(g.jsx)(N,{text:t,taskColor:a,id:o,removeCategory:r},o)}))})]}),Object(g.jsx)(B,{openCreateCategoryPopup:a}),Object(g.jsx)(x,{isCreateCategoryPopupOpen:t,closeCreateCategoryPopup:o,createCategory:n,id:"sidebar"})]})},w=a(22),Q=a.n(w);var Y=function(){var e=Object(o.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(o.useState)([]),c=Object(l.a)(r,2),u=c[0],_=c[1],C=Object(o.useState)([]),p=Object(l.a)(C,2),m=p[0],b=p[1];function j(e){_((function(t){return[].concat(Object(s.a)(t),[e])}))}function d(){n(!0)}function y(){n(!1)}return console.log("toDoList:",u),Object(g.jsxs)("div",{className:Q.a.page,children:[Object(g.jsx)(P,{openCreateCategoryPopup:d,closeCreateCategoryPopup:y,isCreateCategoryPopupOpen:a,createCategory:j,toDoList:u}),Object(g.jsx)(X,{openCreateCategoryPopup:d,closeCreateCategoryPopup:y,isCreateCategoryPopupOpen:a,createCategory:j,removeCategory:function(e){_((function(t){return t.filter((function(t){return t.id!==e}))}))},toDoList:u}),Object(g.jsx)(Z,{toDoList:u,createTask:function(e){b((function(t){return[].concat(Object(s.a)(t),[e])}))},removeTask:function(e){b((function(t){return t.filter((function(t){return t.id!==e}))}))},tasks:m,changeCategoryName:function(e){var t=e.categoryId,a=e.inputValue;_((function(e){return e.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{categoryName:a}):e}))}))}})]})};c.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(Y,{})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.b3adf7f2.chunk.js.map