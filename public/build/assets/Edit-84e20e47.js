import{_ as U}from"./AuthenticatedLayout-cb5bc9f2.js";import{p as q,X as T,k as A,P as M,c as P,d as e,w as a,F as $,r as o,o as B,g as s,I as D}from"./app-af2088fa.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";const F=q({inject:["validateMessages"],components:{AuthenticatedLayout:U,Head:T},props:{expensetype:Object},setup(t){const n=A(!1),d=()=>{n.value=!0},m=r=>{console.log(r),n.value=!1},f=()=>{n.value=!1},y={labelCol:{span:8},wrapperCol:{span:16}};return{formState:M({name:t.expensetype.name,expensetype:t.expensetype.expensetype,amount:t.expensetype.amount,method:t.expensetype.method,date:t.expensetype.date,description:t.expensetype.description}),layout:y,visible:n,showModal:d,handleOk:m,handleCancel:f}},mounted(){},methods:{triggerSubmit(){const t=this.$refs.submitss;console.log(t),t.click()},submit(){this.formState.put(route("expensetype.update",this.expensetype.id))}}});function H(t,n,d,m,f,y){const v=o("Head"),r=o("a-button"),c=o("a-page-header"),b=o("a-affix"),S=o("user-outlined"),i=o("a-input"),p=o("a-form-item"),u=o("a-select-option"),_=o("a-select"),k=o("a-date-picker"),g=o("a-textarea"),C=o("a-modal"),h=o("a-form"),x=o("a-col"),E=o("a-row"),O=o("a-layout-content"),w=o("AuthenticatedLayout");return B(),P($,null,[e(v,{title:"Employees"}),e(w,null,{default:a(()=>[e(b,{"offset-top":0},{default:a(()=>[e(c,{ghost:!1,title:t.expensetype.name,onBack:n[1]||(n[1]=()=>t.$inertia.visit(t.route("expensetype.index")))},{extra:a(()=>[e(r,{key:"1",type:"primary",onClick:n[0]||(n[0]=l=>t.triggerSubmit())},{default:a(()=>[s("Save")]),_:1})]),_:1},8,["title"])]),_:1}),e(O,null,{default:a(()=>[e(E,null,{default:a(()=>[e(x,{span:12,offset:6},{default:a(()=>[e(h,D({model:t.formState},t.layout,{name:"nest-messages","validate-messages":t.validateMessages,onFinish:t.submit}),{default:a(()=>[e(p,{label:"Name",name:"name",rules:[{required:!0}]},{default:a(()=>[e(i,{value:t.formState.name,"onUpdate:value":n[2]||(n[2]=l=>t.formState.name=l)},{prefix:a(()=>[e(S,{type:"user"})]),_:1},8,["value"])]),_:1}),e(p,{label:"Expense Type",name:"expensetype",rules:[{required:!0}]},{default:a(()=>[e(_,{value:t.formState.expensetype,"onUpdate:value":n[3]||(n[3]=l=>t.formState.expensetype=l)},{default:a(()=>[e(u,{value:"Utility expenses"},{default:a(()=>[s("Utility expenses")]),_:1}),e(u,{value:"Administration expenses"},{default:a(()=>[s("Administration expenses")]),_:1}),e(u,{value:"IT and Internet Expense"},{default:a(()=>[s("IT and Internet Expense")]),_:1}),e(u,{value:"Office Supplies"},{default:a(()=>[s("Office Supplies")]),_:1}),e(u,{value:"Office Supplies"},{default:a(()=>[s("Health Care")]),_:1}),e(u,{value:"undefined",disabled:""},{default:a(()=>[e(r,{type:"primary",onClick:t.showModal},{default:a(()=>[s("Add More")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["value"])]),_:1}),e(p,{label:"Amount",name:"amount",rules:[{required:!0}]},{default:a(()=>[e(i,{value:t.formState.amount,"onUpdate:value":n[4]||(n[4]=l=>t.formState.amount=l)},null,8,["value"])]),_:1}),e(p,{label:"Method",name:"method",rules:[{required:!0}]},{default:a(()=>[e(_,{value:t.formState.method,"onUpdate:value":n[5]||(n[5]=l=>t.formState.method=l)},{default:a(()=>[e(u,{value:"Bank Transfer"},{default:a(()=>[s("Bank Transfer")]),_:1}),e(u,{value:"Cash Payment"},{default:a(()=>[s("Cash Payment")]),_:1}),e(u,{value:"Cheque Payment"},{default:a(()=>[s("Cheque Payment")]),_:1}),e(u,{value:"Online Payments"},{default:a(()=>[s("Online Payments")]),_:1})]),_:1},8,["value"])]),_:1}),e(p,{label:"Date",name:"date",rules:[{required:!0}]},{default:a(()=>[e(k,{"value-format":"YYYY-MM-DD",style:{width:"100%"},value:t.formState.date,"onUpdate:value":n[6]||(n[6]=l=>t.formState.date=l)},null,8,["value"])]),_:1}),e(p,{label:"Description",name:"description",rules:[{required:!0}]},{default:a(()=>[e(g,{value:t.formState.description,"onUpdate:value":n[7]||(n[7]=l=>t.formState.description=l),placeholder:"Enter Description",rows:4},null,8,["value"])]),_:1}),e(p,{"wrapper-col":{span:12,offset:6}},{default:a(()=>[e(r,{ref:"submitss",type:"primary","html-type":"submit"},{default:a(()=>[s("Save")]),_:1},512)]),_:1}),e(C,{visible:t.visible,"onUpdate:visible":n[9]||(n[9]=l=>t.visible=l),title:"Add Expense Type",onOk:t.handleOk},{footer:a(()=>[e(r,{key:"back",onClick:t.handleCancel},{default:a(()=>[s("Cancel")]),_:1},8,["onClick"]),e(r,{key:"submit",type:"primary",loading:t.loading,onClick:t.handleOk},{default:a(()=>[s("Save")]),_:1},8,["loading","onClick"])]),default:a(()=>[e(p,{label:"Expense Type",name:"expensetype",rules:[{required:!0}]},{default:a(()=>[e(i,{value:t.formState.expensetype,"onUpdate:value":n[8]||(n[8]=l=>t.formState.expensetype=l),placeholder:"Enter Expense Type"},null,8,["value"])]),_:1})]),_:1},8,["visible","onOk"])]),_:1},16,["model","validate-messages","onFinish"])]),_:1})]),_:1})]),_:1})]),_:1})],64)}const j=I(F,[["render",H]]);export{j as default};
