"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[623],{623:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(9439),l=(r(7632),r(4420)),a=r(7502),c=r(5984),o=r(1087),u=r(8044),s=r(4588),i=r(1071),d=r(184),h=function(e){for(var t=e.onChangeSetMarket,r=e.onSelectSetCountry,n=e.market,c=e.country,o=(0,l.v9)(a.od).map((function(e){return e.country})).filter((function(e,t,r){return r.indexOf(e)===t})).sort((function(e,t){return e.localeCompare(t)})),u=[{value:"all",label:"All country"}],h=0;h<o.length;h++)u.push({value:o[h].toLowerCase(),label:o[h]});return(0,d.jsxs)("div",{className:s.Z.wrapFilters,children:[(0,d.jsxs)("div",{className:"mb-3",children:[(0,d.jsx)("label",{htmlFor:"textInput",className:"form-label",children:"Filter by Country"}),(0,d.jsx)(i.ZP,{id:"textInput",onChange:r,options:u,isSearchable:!0,placeholder:"Enter the Country",value:c})]}),(0,d.jsxs)("div",{className:"mb-3",children:[(0,d.jsx)("label",{htmlFor:"textInput",className:"form-label",children:"Filter by MarketPlace"}),(0,d.jsx)("input",{type:"text",className:"form-control",id:"textInput",value:n,onChange:function(e){return t(e.currentTarget.value)},placeholder:"Write MarketPlace"})]})]})},f=r(2791),p=r(311),v=function(){var e=(0,l.I0)(),t=(0,l.v9)(a.od),r=(0,l.v9)(u.vR),s=(0,f.useState)(""),i=(0,n.Z)(s,2),v=i[0],m=i[1],x=(0,f.useState)({value:"all",label:"All country"}),b=(0,n.Z)(x,2),j=b[0],y=b[1],k=(0,f.useState)([]),C=(0,n.Z)(k,2),g=C[0],w=C[1];return(0,f.useEffect)((function(){if(""!==v||"all"!==j.value){var e=[];if("all"!==j.value&&v.length>0){var r=(0,p.D)(t,"country",j.value);e=(0,p.D)(r,"marketplace",v)}"all"!==j.value&&(e=(0,p.D)(t,"country",j.value)),v.length>0&&(e=(0,p.D)(t,"marketplace",v)),w(e)}else w(t)}),[v,j.value,t]),(0,d.jsxs)("div",{className:"container",children:[(0,d.jsxs)("h2",{children:["Profiles for accountId: ",r]}),(0,d.jsx)(h,{onChangeSetMarket:function(e){var t=e.toLowerCase();m(t)},onSelectSetCountry:y,market:v,country:j}),(0,d.jsxs)("table",{className:"table table-striped table-bordered",children:[(0,d.jsx)("thead",{className:"table-dark",children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{scope:"col",children:"#"}),(0,d.jsx)("th",{scope:"col",children:"ProfileId"}),(0,d.jsx)("th",{scope:"col",children:"Country"}),(0,d.jsx)("th",{scope:"col",children:"Marketplace"})]})}),(0,d.jsx)("tbody",{className:"table-group-divider",children:null===g||void 0===g?void 0:g.map((function(t,r){return(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{scope:"row",children:r+1}),(0,d.jsx)("td",{onClick:function(){return r=t.profileId,void e((0,u.WD)(r));var r},children:(0,d.jsxs)(o.OL,{className:"btn btn-secondary",role:"button",to:"/campaigns",children:["Click id ",t.profileId]})}),(0,d.jsx)("td",{children:t.country}),(0,d.jsx)("td",{children:t.marketplace})]},(0,c.x0)(3))}))})]})]})}},7502:function(e,t,r){r.d(t,{A:function(){return l},VA:function(){return n},od:function(){return a}});var n=function(e){return e.accounts.allAccounts},l=function(e){return e.accounts.accountsByPage},a=function(e){return e.accounts.selectedAccountById}},311:function(e,t,r){r.d(t,{D:function(){return n}});var n=function(e,t,r){return e.filter((function(e){return e[t].toLowerCase().includes(r)}))}},4588:function(e,t){t.Z={wrapFilters:"Filter_wrapFilters__GvMFl"}}}]);
//# sourceMappingURL=623.f59b666d.chunk.js.map