import{_ as j,A as m}from"./index.4d32e11c.js";import{c as v,a as d,o,b as a,A as h,e as r,w as n,d as t,t as i,F as p,y,p as x,m as P,n as l,E as b}from"./vendor.e056f85a.js";const w={name:"Home",setup(){return{projects:v(()=>m.projects),account:v(()=>m.account)}}},_=s=>(x("data-v-25f215c9"),s=s(),P(),s),S={key:0,class:"row"},k=_(()=>t("div",{class:"text-center mt-5"},[t("h1",null,"Please Login")],-1)),F=[k],N=l(" Create Project! "),A={key:1,class:"row justify-content-center"},C={class:"col-md-10 card elevation-2 my-5 p-5"},V={class:"row align-items-center"},I={class:"col-md-6 mb-5"},B=_(()=>t("h3",{class:"gradient-text"},"Projects",-1)),D={style:{"font-size":"18px"}},H=l(" A list of all projects for - "),M=_(()=>t("div",{class:"col-md-6 text-end mb-5"},[t("button",{class:"btn btn-lg rounded gradient px-5 text-light","data-bs-toggle":"modal","data-bs-target":"#ProjectForm",title:"create-project"}," Create Project ")],-1)),E=b('<div class="row" data-v-25f215c9><div class="col-4 my-2" data-v-25f215c9><h5 class="gradient-text2" data-v-25f215c9> Name <hr data-v-25f215c9></h5></div><div class="col-4 my-2" data-v-25f215c9><h5 class="gradient-text2" data-v-25f215c9> Members <hr data-v-25f215c9></h5></div><div class="col-4 my-2" data-v-25f215c9><h5 class="gradient-text2" data-v-25f215c9> Started <hr data-v-25f215c9></h5></div></div>',1),L={class:"col-4 my-2"},z={title:"Open Project"},O={class:"col-4 my-2"},T=["src"],q={class:"col-3 my-2"};function G(s,J,K,c,Q,R){const u=d("ProjectForm"),f=d("Modal"),g=d("router-link");return o(),a(p,null,[c.account.id?h("",!0):(o(),a("div",S,F)),r(f,{id:"ProjectForm"},{"modal-title":n(()=>[N]),"modal-body":n(()=>[r(u)]),_:1}),c.account.id?(o(),a("div",A,[t("div",C,[t("div",V,[t("div",I,[B,t("p",D,[H,t("b",null,i(c.account.name),1)])]),M]),E,(o(!0),a(p,null,y(c.projects,e=>(o(),a("div",{class:"row",key:e.id},[t("div",L,[t("h2",z,[r(g,{to:{name:"ProjectPage",params:{id:e.id}}},{default:n(()=>[l(i(e.name),1)]),_:2},1032,["to"])])]),t("div",O,[t("div",null,[t("img",{class:"img-container",src:e.creator.picture,alt:""},null,8,T)])]),t("div",q,[t("div",null,i(new Date(e.creator.updatedAt).toDateString()),1)])]))),128))])])):h("",!0)],64)}var X=j(w,[["render",G],["__scopeId","data-v-25f215c9"]]);export{X as default};
