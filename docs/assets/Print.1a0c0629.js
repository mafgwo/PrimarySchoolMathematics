import{_ as D,o as n,c as o,b as p,t as d,r as E,D as F,B as H,e as M,A as q,n as k,f as I,F as w,i as b,h as x,w as C,q as y,z as P,d as h,u as S,G as B,g as R}from"./index.52ef26e2.js";import{u as W}from"./app.da755209.js";const G={name:"CircleNumber",props:{num:{type:Number,default:0}}},L={class:"circle-number"},Q={class:"circle-number-num"};function Y(T,r,g,N,_,$){return n(),o("span",L,[p("span",Q,d(g.num),1)])}const j=D(G,[["render",Y],["__scopeId","data-v-07a24f2e"]]);const J={class:"A4"},K={class:"mt-12 mb-12"},U={key:0},X={class:"row"},Z={key:0,class:"btn"},ee={__name:"Print",setup(T){const r=E(!1),g=F(),N=H(),_=W(),$=M(()=>_.printPreviewPapers.map(t=>{const{paperTitle:l,paperSubTitle:a,numberOfPagerColumns:e,solution:s,formulas:c}=t,u=c.length/e,i=100/e,v=_.formDataValue.lineSpaceNum||1,A=s=="0"?v*18+"px":"160px";let m=[],f=0;for(;f<c.length;)m.push(c.slice(f,u+f)),f+=u;return m=m.reverse(),console.log(m),{paperTitle:l,paperSubTitle:a,columnsOfPaper:m,colWidth:i,rowHeight:A}}));q(()=>{const t=new Date,l=t.getFullYear(),a=t.getMonth()+1,e=t.getDate(),s=t.getHours(),c=t.getMinutes(),u=t.getSeconds(),i=`${l}${a}${e}${s}${c}${u}`;console.log(i),document.title=g.query.fileName+i,window.onbeforeprint=()=>{console.log("before"),r.value=!0},window.onafterprint=()=>{console.log("after"),k(()=>{r.value=!1})}});const V=()=>{N.back()},O=()=>{r.value=!0,k(()=>{window.print()})},z=(t,l,a)=>{let e=0;if(l>0)for(let s=0;s<l;s++)e+=t[s].length;return e+=a+1,e};return(t,l)=>{const a=I("ElButton");return n(),o("div",{class:P({preview:!r.value})},[p("div",J,[(n(!0),o(w,null,b($.value,(e,s)=>(n(),o("div",{class:P(["sheet",{"sheet-shadow":!r.value}])},[p("div",K,[p("h1",null,[h(d(e.paperTitle)+" ",1),S(_).formDataValue.enableTitleNo?(n(),o("span",U,d(s+1),1)):y("",!0)]),p("h3",null,d(e.paperSubTitle),1)]),p("div",X,[(n(!0),o(w,null,b(e.columnsOfPaper,(c,u)=>(n(),o("div",{style:B(`width: ${e.colWidth}%;`)},[(n(!0),o(w,null,b(c,(i,v)=>(n(),o("p",{class:"p-item",style:B(`margin-bottom: ${e.rowHeight}`)},[S(_).formDataValue.enableQuestionNo?(n(),R(j,{key:0,num:z(e.columnsOfPaper,u,v)},null,8,["num"])):y("",!0),h(" "+d(i),1)],4))),256))],4))),256))])],2))),256)),r.value?y("",!0):(n(),o("div",Z,[x(a,{onClick:V},{default:C(()=>[h("\u8FD4\u56DE")]),_:1}),x(a,{class:"mr-2 w-32",type:"primary",onClick:O},{default:C(()=>[h("\u6253\u5370")]),_:1})]))])],2)}}},oe=D(ee,[["__scopeId","data-v-7fc97ad2"]]);export{oe as default};
