import{a as y,o as t,L as e,b,w as h,Q as c,S as i,U as u,W as l,X as p,Y as w}from"./entry.89766809.js";const f={props:{importTable:Array,importColumn:Array,importRowSpans:Object},data(){return{display:!0,sepCol:["indicator #","indicator connected with","indicator"],count:15,count_indicator_nb:5,count_indicator_conc:5,count_indicator_conc:5}},methods:{getRowSpan(n){return n in this.importRowSpans?this.importRowSpans[n]:1},displayTest(n){return n%5==0}}},k={key:0},T={key:0,rowspan:"5"},S=["rowspan"];function g(n,C,r,R,m,d){return r.importTable!==void 0&&r.importTable!==null&&r.importTable.length!==0?(t(),e("div",k,[b(w,null,{default:h(()=>[c("thead",null,[c("tr",null,[(t(!0),e(i,null,u(r.importColumn,(o,a)=>(t(),e("th",{class:"text-left",key:a},l(o),1))),128))])]),c("tbody",null,[(t(!0),e(i,null,u(r.importTable,(o,a)=>(t(),e("tr",{key:a},[(t(!0),e(i,null,u(Object.values(o),(s,_)=>(t(),e(i,{key:_},[m.sepCol.includes(Object.keys(o)[_])&&d.displayTest(a)?(t(),e("td",T,l(s),1)):s!=""?(t(),e("td",{key:1,rowspan:d.getRowSpan(s)},l(s),9,S)):p("",!0)],64))),128))]))),128))])]),_:1})])):p("",!0)}const V=y(f,[["render",g]]);export{V as default};