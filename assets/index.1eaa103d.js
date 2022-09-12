import{d as A,r as g,i as r,o as u,c as m,a as e,e as _,w as p,F as v,b as L,t as o,X as x,M as k,Y as w,A as h,Z as y,f as V}from"./index.e0946408.js";const $=e("div",null,[e("h1",{class:"page-header mb-0"},"Line \u8A2D\u5B9A")],-1),j=e("i",{class:"fa fa-plus-circle fa-fw me-1"},null,-1),I=h(" Add Line"),M=[j,I],N={class:"p-4"},O={class:"table-responsive"},S={class:"table table-hover text-nowrap"},U=e("thead",null,[e("tr",null,[e("th",{class:"border-top-0 pt-0 pb-2"}),e("th",{class:"border-top-0 pt-0 pb-2"},"Line ID"),e("th",{class:"border-top-0 pt-0 pb-2"},"\u96FB\u5B50\u90F5\u4EF6"),e("th",{class:"border-top-0 pt-0 pb-2"},"\u8B66\u5831\u985E\u578B"),e("th",{class:"border-top-0 pt-0 pb-2"},"Actions")])],-1),R={class:"align-middle"},T={class:"align-middle"},X={class:"align-middle"},Y={class:"align-middle"},Z={class:"align-middle"},q=["onClick"],z=e("i",{class:"fas fa-lg fa-fw fa-edit"},null,-1),G=[z],H=["onClick"],J=e("i",{class:"fas fa-lg fa-fw fa-trash"},null,-1),K=[J],P=e("div",{class:"d-md-flex align-items-center"},[e("div",{class:"me-md-auto text-md-left text-center mb-2 mb-md-0"}," Showing 1 to 10 of 57 entries "),e("ul",{class:"pagination mb-0 justify-content-center"},[e("li",{class:"page-item disabled"},[e("a",{class:"page-link"},[e("i",{class:"fa fa-angle-left"})])]),e("li",{class:"page-item"},[e("a",{class:"page-link",href:"#"},"1")]),e("li",{class:"page-item active"},[e("a",{class:"page-link",href:"#"},"2")]),e("li",{class:"page-item"},[e("a",{class:"page-link",href:"#"},"3")]),e("li",{class:"page-item"},[e("a",{class:"page-link",href:"#"},"4")]),e("li",{class:"page-item"},[e("a",{class:"page-link",href:"#"},"5")]),e("li",{class:"page-item"},[e("a",{class:"page-link",href:"#"},"6")]),e("li",{class:"page-item"},[e("a",{class:"page-link",href:"#"},[e("i",{class:"fa fa-angle-right"})])])])],-1),Q={class:"modal-dialog modal-lg"},W={class:"modal-content border-0"},ee=e("a",{href:"#","data-bs-dismiss":"modal",class:"btn-close position-absolute top-0 end-0 m-4"},null,-1),se={class:"mb-3"},te=e("label",{class:"form-label"},[h("Line ID "),e("span",{class:"text-danger"},"*")],-1),le={class:"mb-3"},ae=e("label",{class:"form-label"},[h("Email "),e("span",{class:"text-danger"},"*")],-1),oe={class:"mb-3"},ce=A({__name:"index",setup(ne){const f=g([]);for(let s=0;s<10;s++)f.push({line_id:`lineID${s}`,email:`demoEmail${s}@gmail.com`,alert_type:"\u9810\u77E5\u9598\u9053\u5668\u96E2\u7DDA\uFF0C\u58D3\u529B\u904E\u4F4E"});const i=r("create"),b={line_id:"",email:""},l=g({...b}),a=r(null),c=r(null),C=s=>{Object.assign(l,s),i.value="edit",a.value=new y(c.value),a.value.show()},E=()=>{Object.assign(l,b),i.value="create",a.value=new y(c.value),a.value.show()},D=()=>{a.value.hide()};return(s,n)=>{const F=V("card-body");return u(),m(v,null,[e("div",{class:"d-flex align-items-center mb-3"},[$,e("div",{class:"ms-auto"},[e("a",{href:"#",class:"btn btn-outline-theme",onClick:E},M)])]),_(x,null,{default:p(()=>[e("div",N,[e("div",O,[e("table",S,[U,e("tbody",null,[(u(!0),m(v,null,L(f,(t,d)=>(u(),m("tr",{key:d},[e("td",R,o(d+1),1),e("td",T,o(t.line_id),1),e("td",X,o(t.email),1),e("td",Y,o(t.alert_type),1),e("td",Z,[e("button",{class:"btn btn-outline-theme me-2",onClick:B=>C(t)},G,8,q),e("button",{class:"btn btn-outline-default",onClick:B=>s.handleDelete(d)},K,8,H)])]))),128))])])]),P])]),_:1}),e("div",{class:"modal modal-cover fade",ref_key:"editEmailRef",ref:c},[e("div",Q,[e("div",W,[e("form",null,[_(x,null,{default:p(()=>[_(F,{class:"p-5"},{default:p(()=>[ee,e("div",se,[te,k(e("input",{type:"text",class:"form-control form-control-lg bg-white bg-opacity-5",placeholder:"","onUpdate:modelValue":n[0]||(n[0]=t=>l.line_id=t)},null,512),[[w,l.line_id]])]),e("div",le,[ae,k(e("input",{type:"text",class:"form-control form-control-lg bg-white bg-opacity-5",placeholder:"xxx@xxx.xxx","onUpdate:modelValue":n[1]||(n[1]=t=>l.email=t)},null,512),[[w,l.email]])]),e("div",oe,[e("button",{type:"button",class:"btn btn-outline-theme btn-lg d-block w-100",onClick:D},o(i.value==="create"?"Add":"Save"),1)])]),_:1})]),_:1})])])])],512)],64)}}});export{ce as default};
