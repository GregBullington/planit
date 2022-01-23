import{r as st,c as m,a as k,o as l,b as d,d as o,e as b,F as $,f as R,g as nt,h as at,i as q,j as rt,k as it,S as H,l as ct,w as x,t as f,p as W,m as Y,n as S,u as T,q as E,O as K,s as P,v as y,x as w,y as A,M as N,z as lt,A as C,B as dt,C as ut,D as mt}from"./vendor.e056f85a.js";const _t=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(i){if(i.ep)return;i.ep=!0;const c=e(i);fetch(i.href,c)}};_t();const a=st({user:{},account:{},profile:{},projects:[],activeProject:{},sprints:[],activeSprintId:null,tasks:[],notes:[],activeTaskId:null});var g=(n,t)=>{for(const[e,s]of t)n[e]=s;return n};const pt={name:"App",setup(){return{appState:m(()=>a)}}},vt={class:"site-font container-fluid"},ft=o("footer",{class:"bg-grey"},null,-1);function gt(n,t,e,s,i,c){const r=k("Navbar"),u=k("router-view");return l(),d($,null,[o("header",null,[b(r)]),o("main",vt,[b(u)]),ft],64)}var ht=g(pt,[["render",gt]]);const bt={},yt={class:"modal",tabindex:"-1"},kt={class:"modal-dialog modal-xl modal-dialog-centered"},wt={class:"modal-content"},$t={class:"modal-header"},St={class:"modal-title my-3"},jt=o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",title:"Close"},null,-1),xt={class:"modal-body bg-body"};function Tt(n,t){return l(),d("div",yt,[o("div",kt,[o("div",wt,[o("div",$t,[o("h5",St,[R(n.$slots,"modal-title")]),jt]),o("div",xt,[R(n.$slots,"modal-body")])])])])}var Pt=g(bt,[["render",Tt]]),Ct=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Pt});const G=window.location.origin.includes("localhost"),Q=G?"http://localhost:3000":"",It="dev-bvbd1gzu.us.auth0.com",Et="https://GregDev.com",At="uMJXFvYrPZcur5gSo52tcFNhkjQ7QmXr",Nt="modulepreload",X={},Ot="/",O=function(t,e){return!e||e.length===0?t():Promise.all(e.map(s=>{if(s=`${Ot}${s}`,s in X)return;X[s]=!0;const i=s.endsWith(".css"),c=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${c}`))return;const r=document.createElement("link");if(r.rel=i?"stylesheet":Nt,i||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),i)return new Promise((u,j)=>{r.addEventListener("load",u),r.addEventListener("error",j)})})).then(()=>t())};function Mt(n){switch(n){case"./pages/AboutPage.vue":return O(()=>import("./AboutPage.42bee808.js"),["assets/AboutPage.42bee808.js","assets/vendor.e056f85a.js"]);case"./pages/AccountPage.vue":return O(()=>import("./AccountPage.0bc918b6.js"),["assets/AccountPage.0bc918b6.js","assets/AccountPage.9bc9713d.css","assets/vendor.e056f85a.js"]);case"./pages/HomePage.vue":return O(()=>import("./HomePage.d5c33e42.js"),["assets/HomePage.d5c33e42.js","assets/HomePage.b39c12f5.css","assets/vendor.e056f85a.js"]);case"./pages/ProjectPage.vue":return O(()=>import("./ProjectPage.ac9034cc.js"),["assets/ProjectPage.ac9034cc.js","assets/vendor.e056f85a.js"]);default:return new Promise(function(t,e){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+n)))})}}function F(n){return()=>Mt(`./pages/${n}.vue`)}const Dt=[{path:"/",name:"Home",component:F("HomePage"),beforeEnter:q},{path:"/projectpage/:id",name:"ProjectPage",component:F("ProjectPage"),beforeEnter:q},{path:"/account",name:"Account",component:F("AccountPage"),beforeEnter:rt}],U=nt({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:at(),routes:Dt});function I(n,t){if(G)console[n](`[${n}] :: ${new Date().toLocaleTimeString()} :: `,...t);else{switch(n){case"log":case"assert":return}console[n](`[${n}] :: ${new Date().toLocaleTimeString()} :: `,...t)}}const p={log(){I("log",arguments)},error(){I("error",arguments)},warn(){I("warn",arguments)},assert(){I("assert",arguments)},trace(){I("trace",arguments)}},_=it.create({baseURL:Q,timeout:8e3});class Bt{async getAccount(){try{const t=await _.get("/account");a.account=t.data}catch(t){p.error("HAVE YOU STARTED YOUR SERVER YET???",t)}}async edit(t){const e=await _.put("account",t);a.account=e.data,this.getAccount()}}const J=new Bt;class Ft{async createProject(t){const e=await _.post("api/projects",t);a.projects=[...a.projects,e.data],a.activeProject=e.data}async getAllProjects(){const t=await _.get("api/projects");a.projects=t.data}async getProjectById(t){const e=await _.get("api/projects/"+t);a.activeProject=e.data}async removeProject(t){await _.delete("api/projects/"+t),a.projects=a.projects.filter(e=>e.id!==a.projects.id)}}const V=new Ft;class v{static async confirm(t="Are you sure?",e="You won't be able to revert this!",s="warning",i="Yes, delete it!"){try{return!!(await H.fire({title:t,text:e,icon:s,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:i})).isConfirmed}catch{return!1}}static toast(t="Warning!",e="warning",s="top-end",i=3e3,c=!0){H.fire({title:t,icon:e,position:s,timer:i,timerProgressBar:c,toast:!0,showConfirmButton:!1})}}const Ut={connection:"connection",connected:"connected",disconnect:"disconnect",authenticate:"authenticate",authenticated:"authenticated",userConnected:"userConnected",userDisconnected:"userDisconnected",error:"error"};class Vt{constructor(t=!1,e=Q){}on(t,e){var s;return(s=this.socket)==null||s.on(t,e.bind(this)),this}onConnected(t){p.log("[SOCKET_CONNECTION]",t),this.connected=!0,this.playback()}onAuthenticated(t){p.log("[SOCKET_AUTHENTICATED]",t),this.authenticated=!0,this.playback()}authenticate(t){var e;(e=this.socket)==null||e.emit(Ut.authenticate,t)}onError(t){p.error("[SOCKET_ERROR]",t)}enqueue(t,e){p.log("[ENQUEING_ACTION]",{action:t,payload:e}),this.queue.push({action:t,payload:e})}playback(){p.log("[SOCKET_PLAYBACK]");const t=[...this.queue];this.queue=[],t.forEach(e=>{this.emit(e.action,e.payload)})}emit(t,e=void 0){if(this.requiresAuth&&!this.authenticated)return this.enqueue(t,e);if(!this.connected)return this.enqueue(t,e);this.socket.emit(t,e)}}class zt extends Vt{constructor(){super();this.on("error",this.onError)}onError(t){v.toast(t.message,"error")}}const Z=new zt,h=ct({domain:It,clientId:At,audience:Et,useRefreshTokens:!0,onRedirectCallback:n=>{U.push(n&&n.targetUrl?n.targetUrl:window.location.pathname)}});h.on(h.AUTH_EVENTS.AUTHENTICATED,async function(){_.defaults.headers.authorization=h.bearer,_.interceptors.request.use(Lt),a.user=h.user,await J.getAccount(),Z.authenticate(h.bearer),await V.getAllProjects()});async function Lt(n){if(!h.isAuthenticated)return n;const t=h.identity.exp*1e3,e=t<Date.now(),s=t<Date.now()+1e3*60*60*12;return e?await h.loginWithPopup():s&&(await h.getTokenSilently(),_.defaults.headers.authorization=h.bearer,Z.authenticate(h.bearer)),n}var Rt="/assets/planit-logo.8e14d4d8.png";const qt={setup(){return{account:m(()=>a.account),user:m(()=>a.user),async login(){h.loginWithPopup()},async logout(){h.logout({returnTo:window.location.origin})}}}},M=n=>(W("data-v-148fc810"),n=n(),Y(),n),Ht={class:"navbar navbar-expand-lg navbar-dark bg-light px-3 elevation-3"},Wt=M(()=>o("div",{title:"Go to Home",class:"d-flex flex-row align-items-center text-dark site-font"},[o("img",{src:Rt,alt:""}),o("h1",{class:"gradient-text mt-3"},"PlanIt")],-1)),Yt=M(()=>o("button",{class:"navbar-toggler black",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[o("span",{class:"navbar-toggler-icon"})],-1)),Kt={class:"collapse navbar-collapse",id:"navbarText"},Gt={class:"navbar-text ms-auto"},Qt={key:1,class:"dropdown my-2 my-lg-0"},Xt={class:"dropdown-toggle selectable","data-bs-toggle":"dropdown","aria-expanded":"false",id:"authDropdown"},Jt={style:{"font-size":"23px"},class:"mx-3 text-dark lighten-30 site-font gradient-text",title:"Manage Account / Logout"},Zt=["src"],te={class:"dropdown-menu p-0 list-group w-100","aria-labelledby":"authDropdown"},ee=M(()=>o("div",{class:"list-group-item list-group-item-action hoverable"}," Manage Account ",-1)),oe=M(()=>o("i",{class:"mdi mdi-logout"},null,-1)),se=S(" logout "),ne=[oe,se],ae=S(" Edit your profile here! "),re=S();function ie(n,t,e,s,i,c){const r=k("router-link"),u=k("Profile"),j=k("ProfileForm"),ot=k("Modal");return l(),d($,null,[o("nav",Ht,[b(r,{class:"navbar-brand",to:{name:"Home"}},{default:x(()=>[Wt]),_:1}),Yt,o("div",Kt,[o("span",Gt,[s.user.isAuthenticated?(l(),d("div",Qt,[o("div",Xt,[o("span",Jt,f(s.account.name),1),o("img",{title:"Edit Profile",src:s.user.picture,alt:"user photo",height:"40",class:"ms-3 img-container selectable","data-bs-toggle":"modal","data-bs-target":"#ProfileForm"},null,8,Zt)]),o("div",te,[b(r,{to:{name:"Account"}},{default:x(()=>[ee]),_:1}),o("div",{class:"list-group-item list-group-item-action hoverable text-danger",onClick:t[1]||(t[1]=(...B)=>s.logout&&s.logout(...B))},ne)])])):(l(),d("button",{key:0,class:"btn selectable text-dark lighten-30 text-uppercase my-2 my-lg-0 site-font",onClick:t[0]||(t[0]=(...B)=>s.login&&s.login(...B))}," Login "))])])]),b(ot,{id:"ProfileForm"},{"modal-title":x(()=>[ae]),"modal-body":x(()=>[b(u),re,b(j)]),_:1})],64)}var ce=g(qt,[["render",ie],["__scopeId","data-v-148fc810"]]),le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ce});class de{async createNote(t,e){const s=await _.post(`api/projects/${t}/notes`,e);a.notes=[...a.notes,s.data]}async getNotesForProject(t){const e=await _.get(`api/projects/${t}/notes`);a.notes=e.data}async removeNote(t){await _.delete(`api/projects/${t.projectId}/notes/${t.id}`),a.notes=a.notes.filter(e=>e.id!==a.notes.id),this.getNotesForProject(t.projectId)}}const tt=new de,ue={props:{note:{type:Array}},setup(n){const t=T(),e=E({});return{route:t,note:e,notes:m(()=>a.notes.filter(s=>s.taskId==a.activeTaskId)),activeTaskId:m(()=>a.activeTaskId),async createNote(){try{e.value.taskId=a.activeTaskId,await tt.createNote(t.params.id,e.value),e.value={}}catch(s){p.error(s),v.toast("Something went wrong!","error")}},closeCanvas(){K.getOrCreateInstance(document.getElementById("notes-offcanvas")).hide()}}}},me={class:"Notes"},_e={class:"input-group",action:""},pe={class:"offcanvas offcanvas-end",tabindex:"-1",id:"notes-offcanvas","aria-labelledby":"create-note"},ve=o("div",{class:"offcanvas-header"},[o("button",{title:"Close",type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"}),o("h4",{class:"offcanvas-title",id:"offcanvasWithBackdropLabel"},"Notes")],-1),fe={class:"offcanvas-body container-fluid scrollbar-ripe-malinka"},ge={class:"row align-items-center"},he={class:"col"},be={class:"input-group"},ye=o("button",{type:"submit",title:"Submit",class:"gradient rounded"},[o("i",{class:"mdi mdi-send text-light"})],-1),ke={class:"col m-2"};function we(n,t,e,s,i,c){const r=k("SingleNote");return l(),d("div",me,[o("form",_e,[o("div",pe,[ve,o("div",fe,[o("div",ge,[o("div",he,[o("form",{class:"",onSubmit:t[1]||(t[1]=P(u=>s.createNote(),["prevent"]))},[o("div",be,[y(o("input",{"onUpdate:modelValue":t[0]||(t[0]=u=>s.note.body=u),class:"form-control",type:"text",id:"note",placeholder:"Say something..."},null,512),[[w,s.note.body]]),ye])],32)])]),(l(!0),d($,null,A(s.notes,u=>(l(),d("div",{class:"row",key:u.id},[o("div",ke,[b(r,{note:u},null,8,["note"])])]))),128))])])])])}var $e=g(ue,[["render",we]]),Se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$e});const je={setup(){return{account:m(()=>a.account)}}},xe={class:"component"},Te=["src"],Pe={class:"ms-2"},Ce={class:"ms-2"};function Ie(n,t,e,s,i,c){return l(),d("div",xe,[o("div",null,[o("img",{class:"mt-1 pic ms-2",src:s.account.picture},null,8,Te)]),o("span",null,[o("h6",Pe,"Name: "+f(s.account.name),1)]),o("p",Ce,"Title: "+f(s.account.title),1)])}var Ee=g(je,[["render",Ie],["__scopeId","data-v-be29244a"]]),Ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ee});const Ne={setup(){return{async edit(n){try{await J.edit(n),N.getOrCreateInstance(document.getElementById("ProfileForm")).hide()}catch(t){p.error(t),v.toast("account issue")}},account:m(()=>a.account)}}},Oe={class:"profile form component"},Me=o("label",{for:""},"Profile Picture",-1),De=o("label",{for:""},"Name",-1),Be=o("label",{for:""},"Title",-1),Fe=o("button",{type:"submit",class:"btn btn-secondary"},"Update",-1);function Ue(n,t,e,s,i,c){return l(),d("div",Oe,[o("form",{onSubmit:t[3]||(t[3]=P(r=>s.edit(s.account),["prevent"]))},[Me,y(o("input",{type:"url",placeholder:"Profile Image Url...",name:"picture",id:"picture",class:"form-control mb-2",required:"","onUpdate:modelValue":t[0]||(t[0]=r=>s.account.picture=r)},null,512),[[w,s.account.picture]]),De,y(o("input",{type:"text",placeholder:"Name Here...",name:"name",id:"name",class:"form-control mb-2",required:"","onUpdate:modelValue":t[1]||(t[1]=r=>s.account.name=r)},null,512),[[w,s.account.name]]),Be,y(o("input",{type:"text",placeholder:"Title...",name:"bio",id:"bio",class:"form-control mb-2",required:"","onUpdate:modelValue":t[2]||(t[2]=r=>s.account.title=r)},null,512),[[w,s.account.title]]),Fe],32)])}var Ve=g(Ne,[["render",Ue]]),ze=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ve});const Le={setup(){T();const n=E({});return{activeProject:m(()=>a.activeProject),project:n,async createProject(){try{await V.createProject(n.value),N.getOrCreateInstance(document.getElementById("ProjectForm")).hide(),n.value={},U.push({name:"ProjectPage",params:{id:a.activeProject.id}})}catch(t){p.error(t),v.toast("Something is not right","error")}}}}},z=n=>(W("data-v-0dcbb356"),n=n(),Y(),n),Re={class:"row"},qe={class:"col"},He={class:"row"},We={class:"col mt-3"},Ye=z(()=>o("p",{class:"m-0"},[o("b",null,"Name")],-1)),Ke={class:"row"},Ge={class:"col"},Qe=z(()=>o("p",{class:"m-0"},[o("b",null,"Description")],-1)),Xe=z(()=>o("div",{class:"row"},[o("div",{class:"col text-end"},[o("button",{title:"Cancel",type:"button",class:"btn rounded bg-none ms-2 px-5"}," Cancel "),o("button",{type:"submit",title:"Submit",class:"btn rounded gradient ms-2 px-5 text-light"}," Submit ")])],-1));function Je(n,t,e,s,i,c){return l(),d("div",Re,[o("form",{onSubmit:t[2]||(t[2]=P(r=>s.createProject(),["prevent"]))},[o("div",qe,[o("div",He,[o("div",We,[Ye,y(o("input",{class:"form-control mb-4 bg-lighter",type:"text","name:":"projectTitle",placeholder:"Name...","onUpdate:modelValue":t[0]||(t[0]=r=>s.project.name=r)},null,512),[[w,s.project.name]])])]),o("div",Ke,[o("div",Ge,[Qe,y(o("textarea",{style:{resize:"none"},class:"form-control mb-5 bg-lighter",name:"project-body",rows:"5",placeholder:"Description...","onUpdate:modelValue":t[1]||(t[1]=r=>s.project.description=r)},`
            `,512),[[w,s.project.description]])])])]),Xe],32)])}var Ze=g(Le,[["render",Je],["__scopeId","data-v-0dcbb356"]]),to=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ze});const eo={setup(){const n=lt();return{closeCanvas(){K.getOrCreateInstance(document.getElementById("projects-offcanvas")).hide()},async removeProject(t){try{await v.confirm("Are you sure you want to Delete your project?","confirm")&&(await V.removeProject(t),n.push({name:"Home"}))}catch(e){p.error(e),v.toast("Somthing went wrong","error")}},projects:m(()=>a.projects),account:m(()=>a.account)}}},oo={class:"Projects"},so={class:"input-group",action:""},no={class:"offcanvas offcanvas-start",tabindex:"-1",id:"projects-offcanvas","aria-labelledby":"create-project"},ao=o("div",{class:"offcanvas-header"},[o("h4",{class:"offcanvas-title",id:"offcanvasWithBackdropLabel"}," Projects "),o("button",{type:"button",title:"Close",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),ro={class:"offcanvas-body container-fluid scrollbar-ripe-malinka"},io={class:"me-auto col-8 selectable",title:"Open Project"},co={key:0,class:"col-2",title:"Delete"},lo=["onClick"];function uo(n,t,e,s,i,c){const r=k("router-link");return l(),d("div",oo,[o("form",so,[o("div",no,[ao,o("div",ro,[(l(!0),d($,null,A(s.projects,u=>(l(),d("div",{class:"row align-items-center",key:u.id},[o("div",io,[b(r,{to:{name:"ProjectPage",params:{id:u.id}},onClick:t[0]||(t[0]=j=>s.closeCanvas())},{default:x(()=>[S(f(u.name),1)]),_:2},1032,["to"])]),s.account.id===u.creatorId?(l(),d("div",co,[o("i",{class:"mdi mdi-trash-can-outline mdi-24px selectable text-danger",onClick:j=>s.removeProject(u.id)},null,8,lo)])):C("",!0)]))),128))])])])])}var mo=g(eo,[["render",uo]]),_o=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:mo});const po={props:{note:Object},setup(n){return{async removeNote(t){try{await v.confirm("Are you sure you want to delete this note?")&&await tt.removeNote(t)}catch(e){p.error(e),v.toast("error")}},account:m(()=>a.account)}}},vo={key:0,class:"row justify-content-center"},fo={class:"col-md-10 card-sprints m-3"},go={class:"row"},ho={class:"col text-end"},bo={class:"row"},yo={class:"col"},ko=["src"],wo={class:"row"},$o={class:"col my-3"};function So(n,t,e,s,i,c){return e.note.creator?(l(),d("div",vo,[o("div",fo,[o("div",go,[o("div",ho,[s.account.id===e.note.creatorId?(l(),d("i",{key:0,class:"mdi mdi-trash-can-outline mdi-24px selectable text-danger",title:"Delete",onClick:t[0]||(t[0]=r=>s.removeNote(e.note))})):C("",!0)])]),o("div",bo,[o("div",yo,[o("img",{class:"img-container me-3",src:e.note.creator.picture,alt:""},null,8,ko),S(" "+f(e.note.creator.name),1)])]),o("div",wo,[o("div",$o,[o("h6",null,f(e.note.body),1)])])])])):C("",!0)}var jo=g(po,[["render",So]]),xo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:jo});class To{async createSprint(t,e){const s=await _.post(`api/projects/${t}/sprints`,e);a.sprints=[...a.sprints,s.data]}async getSprints(t){const e=await _.get(`api/projects/${t}/sprints`);a.sprints=e.data}async removeSprint(t,e){await _.delete(`api/projects/${t}/sprints/${e}`),a.sprints=a.sprints.filter(s=>s.id!==a.sprints.id),this.getSprints(t)}}const L=new To,Po={props:{sprint:Object,index:Number},setup(n){return{account:m(()=>a.account),async removeSprint(t,e){try{await v.confirm("Are you sure you want to delete this sprint?")&&(await L.removeSprint(t,e),v.toast("You have deleted this sprint!","success"))}catch(s){p.error(s),v.toast("You cannot delete this sprint")}},project:m(()=>a.activeProject),tasks:m(()=>a.tasks.filter(t=>t.sprintId==n.sprint.id)),completedTasks:m(()=>a.tasks.filter(t=>t.sprintId==n.sprint.id&&t.isComplete).length),totalWeight:m(()=>{let t=0;return a.tasks.forEach(e=>{e.sprintId==n.sprint.id&&(t+=e.weight)}),t}),setActiveSprint(t){a.activeSprintId=t.id}}}},Co={class:"col card-sprints rounded p-2 m-2"},Io={class:"row align-items-center"},Eo={class:"col-6 d-flex align-items-center"},Ao=o("i",{class:"mdi mdi-rhombus-outline mdi-48px me-3 text-info"},null,-1),No=["data-bs-target"],Oo=o("i",{class:"mdi mdi-weight mdi-48px mb-4 text-info"},null,-1),Mo={class:"col-md-2 text-end"},Do=o("i",{class:"mdi mdi-plus-thick mdi-16px"}," Task",-1),Bo=[Do],Fo={class:"col-4 text-end px-5"},Uo=["id"],Vo={class:"row"},zo={key:0,class:"col text-end text-danger"};function Lo(n,t,e,s,i,c){const r=k("SingleTask");return l(),d("div",Co,[o("div",Io,[o("div",Eo,[Ao,o("h4",{class:"me-5 selectable",title:"Expand Project Tasks","data-bs-toggle":"collapse","data-bs-target":"#s"+e.sprint.id}," S"+f(e.index+1)+" "+f(e.sprint.name),9,No),o("h5",null,f(s.totalWeight),1),Oo]),o("div",Mo,[o("button",{style:{"font-size":"14px"},class:"btn rounded gradient text-light px-4","data-bs-toggle":"modal","data-bs-target":"#TaskForm",title:"Add Task",onClick:t[0]||(t[0]=u=>s.setActiveSprint(e.sprint))},Bo)]),o("div",Fo,[o("h4",null,f(s.completedTasks)+"/"+f(s.tasks.length)+" Tasks Complete",1)]),(l(!0),d($,null,A(s.tasks,u=>(l(),d("div",{id:"s"+e.sprint.id,class:"collapse",key:u.id},[b(r,{task:u},null,8,["task"])],8,Uo))),128)),o("div",Vo,[s.account.id===e.sprint.creatorId?(l(),d("div",zo,[S(" Delete S"+f(e.index+1)+" ",1),o("i",{class:"mdi mdi-trash-can-outline mdi-24px selectable",title:"Delete",onClick:t[1]||(t[1]=u=>s.removeSprint(s.project.id,e.sprint.id))})])):C("",!0)])])])}var Ro=g(Po,[["render",Lo]]),qo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ro});class Ho{async createTask(t,e){const s=await _.post(`api/projects/${e}/tasks`,t);a.tasks=[...a.tasks,s.data]}async getTasksByProjectId(t){const e=await _.get(`api/projects/${t}/tasks`);a.tasks=e.data}async removeTask(t){await _.delete(`api/projects/${t.projectId}/tasks/${t.id}`),a.tasks=a.tasks.filter(e=>e.id!==a.tasks.id),this.getTasksByProjectId(t.projectId)}async toggleCheckbox(t,e){e.isComplete=!e.isComplete,await _.put(`api/projects/${t}/tasks/${e.id}`,e)}async moveSprint(t,e){t.sprintId=e,await _.put(`api/projects/${t.projectId}/tasks/${t.id}`,t),await this.getTasksByProjectId(t.projectId)}}const D=new Ho,Wo={props:{task:Object},setup(n){const t=T();return{async moveSprint(e,s){try{await D.moveSprint(e,s)}catch(i){p.error(i),v.toast("error")}},sprints:m(()=>a.sprints),account:m(()=>a.account),setactiveTask(){a.activeTaskId=n.task.id},route:t,project:m(()=>a.projects),async toggleCheckbox(){try{await D.toggleCheckbox(t.params.id,n.task)}catch(e){p.error(e),v.toast("Somthing went wrong!","error")}},async removeTask(e){try{await v.confirm("Are you sure you want to delete this task?")&&(await D.removeTask(e),v.toast("You have deleted this task!","success"))}catch(s){p.error(s),v.toast("error")}}}}},Yo={class:"row m-2 border border-dark p-2 align-items-center"},Ko={class:"col d-flex justify-content-start align-items-center w-100"},Go={class:"m-0"},Qo={class:"row justify-content-between"},Xo={class:"col-md-4 d-flex"},Jo={class:"m-2"},Zo={class:"m-2 d-flex"},ts=o("span",null,[o("i",{class:"mdi mdi-weight mdi-24px text-info"})],-1),es={class:"dropdown col-md-5"},os=o("button",{title:"Move Task",class:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"}," Move This Task ",-1),ss={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},ns=["onClick"];function as(n,t,e,s,i,c){return l(),d("div",Yo,[o("div",Ko,[y(o("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>e.task.isComplete=r),class:"form-check-input me-4 selectable",type:"checkbox",name:"",id:"chkbx",onClick:t[1]||(t[1]=r=>s.toggleCheckbox()),title:"Click to Complete"},null,512),[[dt,e.task.isComplete]]),o("h5",Go,f(e.task.name),1),s.account.id===e.task.creatorId?(l(),d("i",{key:0,class:"mdi mdi-trash-can-outline mdi-24px selectable ms-4 text-danger",onClick:t[2]||(t[2]=r=>s.removeTask(e.task)),title:"Delete"})):C("",!0)]),o("div",Qo,[o("div",Xo,[o("div",Jo,[o("p",null,[o("i",{title:"Open Task Notes",class:"mdi mdi-comment-text-multiple-outline mdi-24px text-info selectable","data-bs-toggle":"offcanvas",href:"#notes-offcanvas",onClick:t[3]||(t[3]=r=>s.setactiveTask())})])]),o("div",Zo,[o("p",null,f(e.task.weight),1),ts])]),o("div",es,[os,o("ul",ss,[(l(!0),d($,null,A(s.sprints,r=>(l(),d("li",{key:r.id,class:"selectable",title:"Move to"},[o("a",{class:"dropdown-item",onClick:u=>s.moveSprint(e.task,r.id)},f(r.name),9,ns)]))),128))])])])])}var rs=g(Wo,[["render",as]]),is=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:rs});const cs={setup(){const n=E({}),t=T();return ut(async()=>{try{t.params.id&&await L.getSprints(t.params.id)}catch(e){p.error(e)}}),{sprint:n,async createSprint(){try{await L.createSprint(t.params.id,n.value),N.getOrCreateInstance(document.getElementById("SprintsForm")).hide(),n.value={}}catch(e){p.error(e)}}}}},ls={class:"Sprint-form-component"},ds=o("label",null,"Sprint Name",-1),us=o("button",{class:"btn rounded gradient ms-2 px-5 text-light",type:"submit",title:"Submit"}," Submit ",-1);function ms(n,t,e,s,i,c){return l(),d("div",ls,[o("form",{onSubmit:t[1]||(t[1]=P(r=>s.createSprint(),["prevent"]))},[ds,y(o("input",{type:"text",placeholder:"Sprint Name...",name:"sprint",id:"sprint",class:"form-control mb-4","onUpdate:modelValue":t[0]||(t[0]=r=>s.sprint.name=r)},null,512),[[w,s.sprint.name]]),us],32)])}var _s=g(cs,[["render",ms]]),ps=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_s});const vs={setup(n){let t=m(()=>a.activeSprintId),e=E({sprintId:t,isComplete:!1});const s=T();return{task:e,route:s,async createTask(){try{await D.createTask(e.value,s.params.id),N.getOrCreateInstance(document.getElementById("TaskForm")).hide(),e.value={sprintId:t,isComplete:!1}}catch(i){p.error(i),v.toast("error")}},project:m(()=>a.activeProject)}}},fs=o("label",null,"Task Name",-1),gs=o("label",null,"Task Weight",-1),hs=o("button",{class:"btn rounded gradient ms-2 px-5 text-light",type:"submit",title:"Submit"}," Submit ",-1);function bs(n,t,e,s,i,c){return l(),d("form",{onSubmit:t[2]||(t[2]=P(r=>s.createTask(),["prevent"]))},[fs,y(o("input",{type:"text",placeholder:"Task Name...",name:"task",id:"task",class:"form-control mb-4","onUpdate:modelValue":t[0]||(t[0]=r=>s.task.name=r)},null,512),[[w,s.task.name]]),gs,y(o("input",{type:"number",placeholder:"Task Weight...",name:"weight",id:"weight",class:"form-control mb-4","onUpdate:modelValue":t[1]||(t[1]=r=>s.task.weight=r)},null,512),[[w,s.task.weight]]),hs],32)}var ys=g(vs,[["render",bs]]),ks=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ys});function ws(n){Object.entries({"./components/Modal.vue":Ct,"./components/Navbar.vue":le,"./components/NotesComponent.vue":Se,"./components/Profile.vue":Ae,"./components/ProfileForm.vue":ze,"./components/ProjectForm.vue":to,"./components/ProjectsComponent.vue":_o,"./components/SingleNote.vue":xo,"./components/SingleSprint.vue":qo,"./components/SingleTask.vue":is,"./components/SprintsForm.vue":ps,"./components/TaskForm.vue":ks}).forEach(([e,s])=>{const i=s.name||e.substr(e.lastIndexOf("/")+1).replace(/\.\w+$/,"");n.component(i,s.default)})}const et=mt(ht);ws(et);et.use(U).mount("#app");export{a as A,v as P,g as _,p as l,tt as n,V as p,D as t};
