import s from"./ContentSlot.2e8972f5.js";import{l as o,m,r as p,C as u}from"./entry.89766809.js";import"./utils.41cd5ff6.js";import"./preview.17df94e0.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=u(),{between:n,default:r}=m(),a=p(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:r,tags:a,between:n,parent:e}}});export{d as default};