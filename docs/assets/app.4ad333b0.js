import{C as i}from"./index.f9646255.js";const s=i("app",{state:()=>({printPreviewPapers:[],formDataValue:[]}),actions:{navigateToPrint(a,e,r,p){this.$patch(t=>{t.printPreviewPapers=r,t.formDataValue=p,a.push({path:"/print",query:{fileName:e}})})}}});export{s as u};
