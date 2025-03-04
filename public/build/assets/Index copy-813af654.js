import{_ as q}from"./AuthenticatedLayout-cb5bc9f2.js";import"./index.es-2a630ddc.js";import{D as G,a as K,X as Q,n as R,P as Z,b as N,J as U,c as p,d as e,w as t,F as f,r as o,o as i,e as $,f as S,g as d,t as x,h as m,i as h,j as A}from"./app-af2088fa.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";import{P as te}from"./PlusCircleOutlined-c46a5e36.js";import{M as ae}from"./MoreOutlined-dcafcb15.js";const ne=[{title:"Name",key:"name",dataIndex:"name",sorter:!0,width:"20%"},{title:"Check In",key:"checkin",width:"10%"},{title:"Checkout",key:"checkout",width:"10%"},{title:"Overtime",key:"overtime",width:"10%"},{title:"Late",key:"late",width:"10%"},{title:"Notes",key:"notes",width:"30%"},{title:"Status",key:"status",width:"20%"}],oe=[{title:"Date",dataIndex:"date",key:"date"},{title:"Name",dataIndex:"name",key:"name"},{title:"Status",key:"state"},{title:"Upgrade Status",dataIndex:"upgradeNum",key:"upgradeNum"},{title:"Action",dataIndex:"operation",key:"operation"}],le={components:{AuthenticatedLayout:q,DownloadOutlined:G,PlusCircleOutlined:te,MoreOutlined:ae,DeleteOutlined:K,Head:Q,Link:R},props:{date:String,employees:Object,branches:Object,pagination:Object,errors:Object},setup(l){return{columns:ne}},data(l){const b=Z({term:"",date:l.date,branch:null}),r=[];for(let c=0;c<3;++c)r.push({key:c,date:"2014-12-24 23:12:00",name:`This is production name ${c+1}`,upgradeNum:"Upgraded: 56"});return{page:1,pageSize:50,loading:!1,delayTime:1500,formState:b,innerColumns:oe,innerDataItem:r}},methods:{search(){this.$inertia.get("/attendance",{s:this.formState.term,date:this.formState.date,branch:this.formState.branch,pageSize:this.pageSize},{preserveState:!0})},handleTableChange(l){this.page=l.current,this.pageSize=l.pageSize,console.log(l),this.$inertia.get("/attendance",{s:this.formState.term,date:this.formState.date,branch:this.formState.branch,page:l.current,pageSize:l.pageSize},{preserveState:!0})},updateAttendance(l){this.loading=!0,N.post(route("attendance.updateattendance"),{...l,date:this.formState.date}).then(a=>{console.log(a),this.$inertia.get("/attendance",{s:this.formState.term,date:this.formState.date,branch:this.formState.branch,page:this.page,pageSize:this.pageSize},{preserveState:!0})}).finally(()=>{this.loading=!1})},updateAttendanceStatus(l){this.loading=!0,N.post(route("attendance.updateatt_statusnotes"),{...l,date:this.formState.date}).then(a=>{console.log(a),this.$inertia.get("/attendance",{s:this.formState.term,date:this.formState.date,branch:this.formState.branch,page:this.page,pageSize:this.pageSize},{preserveState:!0})}).finally(()=>{this.loading=!1})},updateOvertime(l){U.post(route("attendance.update_overtime"),{...l,date:this.formState.date},{preserveState:!0,onStart:a=>{this.loading=!0},onSuccess:a=>{},onError:a=>{},onFinish:a=>{this.loading=!1}})},updateLate(l){U.post(route("attendance.update_late"),{...l,date:this.formState.date},{preserveState:!0,onStart:a=>{this.loading=!0},onSuccess:a=>{},onError:a=>{},onFinish:a=>{this.loading=!1}})},deleteHistory(l){U.post(route("attendance.remove_attendance_history",l),{},{onStart:a=>{this.loading=!0},onSuccess:a=>{},onError:a=>{alert("dsfsd")},onFinish:a=>{this.loading=!1}})}}},ie=["onClick"],se={key:0},re={key:1,class:"table-operation"},ue=A("a",null,"Pause",-1),de=A("a",null,"Stop",-1);function ce(l,a,y,b,r,c){const I=o("Head"),F=o("a-spin"),g=o("a-select-option"),O=o("a-select"),k=o("a-form-item"),P=o("a-date-picker"),C=o("a-input"),H=o("a-button"),T=o("a-form"),Y=o("a-avatar"),w=o("a-time-picker"),v=o("a-space"),M=o("delete-outlined"),E=o("a-badge"),z=o("a-menu-item"),j=o("a-menu"),B=o("down-outlined"),V=o("a-dropdown"),D=o("a-table"),J=o("a-input-group"),W=o("a-layout-content"),X=o("AuthenticatedLayout");return i(),p(f,null,[e(I,{title:"Employees"}),e(X,null,{default:t(()=>[e(F,{spinning:r.loading,delay:r.delayTime},null,8,["spinning","delay"]),e(W,{style:$({margin:"24px 16px",padding:"24px",background:"#fff",minHeight:"calc(100vh - 115px)",textAlign:"center"})},{default:t(()=>[e(v,{direction:"vertical",style:{width:"100%"}},{default:t(()=>[e(T,{name:"nest-messages",model:r.formState,layout:"inline",onFinish:c.search},{default:t(()=>[e(k,null,{default:t(()=>[e(O,{value:r.formState.branch,"onUpdate:value":a[0]||(a[0]=s=>r.formState.branch=s),placeholder:"Select Branch",style:{"min-width":"200px"}},{default:t(()=>[(i(!0),p(f,null,S(y.branches,s=>(i(),h(g,{value:s.id},{default:t(()=>[d(x(s.branch_name),1)]),_:2},1032,["value"]))),256))]),_:1},8,["value"])]),_:1}),e(k,null,{default:t(()=>[e(P,{value:r.formState.date,"onUpdate:value":a[1]||(a[1]=s=>r.formState.date=s),format:"DD-MM-YYYY","value-format":"YYYY-MM-DD"},null,8,["value"])]),_:1}),e(k,null,{default:t(()=>[e(C,{placeholder:"Search Employees",value:r.formState.term,"onUpdate:value":a[2]||(a[2]=s=>r.formState.term=s)},null,8,["value"])]),_:1}),e(k,null,{default:t(()=>[e(H,{type:"primary","html-type":"submit"},{default:t(()=>[d(" Search ")]),_:1})]),_:1})]),_:1},8,["model","onFinish"]),e(D,{columns:b.columns,"row-key":s=>s.employee_id,"data-source":y.employees,pagination:y.pagination,loading:r.loading,onChange:c.handleTableChange},{bodyCell:t(({column:s,text:L,record:u})=>[s.key==="name"?(i(),p(f,{key:0},[e(Y,{style:{color:"#f56a00","background-color":"#fde3cf"}},{default:t(()=>[d(x(L[0].toUpperCase()),1)]),_:2},1024),d("   "+x(L),1)],64)):m("",!0),s.key==="checkin"?(i(),p(f,{key:1},[e(v,{direction:"vertical"},{default:t(()=>[(i(!0),p(f,null,S(u.history,n=>(i(),h(w,{allowClear:!1,format:"hh:mm A",placeholder:"Check In","value-format":"HH:mm:ss",value:n.checkin,"onUpdate:value":_=>n.checkin=_,onChange:_=>c.updateAttendance(u)},null,8,["value","onUpdate:value","onChange"]))),256))]),_:2},1024),(i(!0),p(f,null,S(u.history,n=>(i(),h(C,{value:n.id,"onUpdate:value":_=>n.id=_,hidden:!0},null,8,["value","onUpdate:value"]))),256))],64)):m("",!0),s.key==="checkout"?(i(),h(v,{key:2,direction:"vertical"},{default:t(()=>[(i(!0),p(f,null,S(u.history,n=>(i(),p("div",null,[e(v,{direction:"horizontal"},{default:t(()=>[e(w,{allowClear:!1,format:"hh:mm A",placeholder:"Check Out","value-format":"HH:mm:ss",value:n.checkout,"onUpdate:value":_=>n.checkout=_,onChange:_=>c.updateAttendance(u)},null,8,["value","onUpdate:value","onChange"]),n.checkout!=""?(i(),p("a",{key:0,onClick:_=>c.deleteHistory(n.id)},[e(M)],8,ie)):m("",!0)]),_:2},1024)]))),256))]),_:2},1024)):m("",!0),s.key==="overtime"?(i(),h(v,{key:3,direction:"vertical"},{default:t(()=>[e(w,{allowClear:!1,disabled:!0,format:"HH:mm",placeholder:"Over Time","value-format":"HH:mm",value:u.overtime,"onUpdate:value":n=>u.overtime=n,onChange:n=>c.updateOvertime(u)},null,8,["value","onUpdate:value","onChange"])]),_:2},1024)):m("",!0),s.key==="late"?(i(),h(D,{key:4,columns:r.innerColumns,"data-source":l.innerData,pagination:!1},{bodyCell:t(({column:n})=>[n.key==="state"?(i(),p("span",se,[e(E,{status:"success"}),d(" Finished ")])):n.key==="operation"?(i(),p("span",re,[ue,de,e(V,null,{overlay:t(()=>[e(j,null,{default:t(()=>[e(z,null,{default:t(()=>[d("Action 1")]),_:1}),e(z,null,{default:t(()=>[d("Action 2")]),_:1})]),_:1})]),default:t(()=>[A("a",null,[d(" More "),e(B)])]),_:1})])):m("",!0)]),_:2},1032,["columns","data-source"])):m("",!0),s.key==="notes"?(i(),h(J,{key:5,compact:""},{default:t(()=>[e(C,{value:u.notes,"onUpdate:value":n=>u.notes=n,style:{width:"calc(100% - 200px)"}},null,8,["value","onUpdate:value"]),e(H,{type:"primary",onClick:n=>c.updateAttendanceStatus(u)},{default:t(()=>[d("Save")]),_:2},1032,["onClick"])]),_:2},1024)):m("",!0),s.key==="status"?(i(),h(O,{key:6,value:u.status,"onUpdate:value":n=>u.status=n,onChange:n=>c.updateAttendanceStatus(u)},{default:t(()=>[e(g,{value:"Present"},{default:t(()=>[d("Present")]),_:1}),e(g,{value:"Absent"},{default:t(()=>[d("Absent")]),_:1}),e(g,{value:"Paid Leave"},{default:t(()=>[d("Paid Leave")]),_:1}),e(g,{value:"Unpaid Leave"},{default:t(()=>[d("Unpaid Leave")]),_:1}),e(g,{value:"Week Off"},{default:t(()=>[d("Week Off")]),_:1})]),_:2},1032,["value","onUpdate:value","onChange"])):m("",!0)]),_:1},8,["columns","row-key","data-source","pagination","loading","onChange"])]),_:1})]),_:1},8,["style"])]),_:1})],64)}const ve=ee(le,[["render",ce]]);export{ve as default};
