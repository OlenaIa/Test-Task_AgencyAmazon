"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[221],{6221:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});n(7632);var c=n(4420),a=n(2791),r=n(8215),l=n(1634),i=n(4588),s=function(e){return e.filter.filterByEmail},o=function(e){return e.filter.filterByDate},u=function(e){return e.filter.isCheckedAllAccounts},d=function(e){return e.filter.filteredAccounts},f=n(184),h=function(){var e=(0,c.I0)(),t=(0,c.v9)(s),n=(0,c.v9)(o),a=(0,c.v9)(u),r=function(t){var n=t.currentTarget,c=n.type,a=n.value;switch(c){case"email":var r=a.toLowerCase();e((0,l.rS)(r));break;case"date":e((0,l.Oi)(a))}};return(0,f.jsxs)("div",{className:i.Z.wrapFilters,children:[(0,f.jsxs)("div",{className:"form-check",children:[(0,f.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault",checked:a,onChange:function(){e((0,l.eQ)(!a))}}),(0,f.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckDefault",children:"Choose all accounts"})]}),(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsx)("label",{htmlFor:"emailInput",className:"form-label",children:"Filter by Email"}),(0,f.jsx)("input",{type:"email",className:"form-control",id:"emailInput",value:t,onChange:r,placeholder:"Write Email"})]}),(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsx)("label",{htmlFor:"dataInput",className:"form-label",children:"Sort by Data"}),(0,f.jsx)("input",{type:"date",className:"form-control",id:"dataInput",value:n,onChange:r,placeholder:"Write Date: year-mm-dd"})]})]})},m=n(9439),x=n(7502),p=n(1087),v=n(8044),b=function(e){var t=e.item,n=e.index,a=e.page,l=(0,c.I0)();return(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{scope:"row",children:n+1+(10*a-10)}),(0,f.jsx)("td",{onClick:function(){return e=t.accountId,l((0,v.j9)(e)),void l((0,r.HY)(e));var e},children:(0,f.jsxs)(p.OL,{className:"btn btn-secondary",role:"button",to:"/profiles",children:["Click id ",t.accountId]})}),(0,f.jsx)("td",{children:t.email}),(0,f.jsx)("td",{children:t.authToken}),(0,f.jsx)("td",{children:t.creationDate})]},t.accountId)},j="AccountList_wrapButton__ruoKd",k=n(311),N=function(){var e=(0,c.I0)(),t=(0,c.v9)(x.VA),n=(0,c.v9)(x.A),i=(0,c.v9)(s),h=(0,c.v9)(o),p=(0,c.v9)(u),v=(0,c.v9)(d),N=(0,a.useState)(0),g=(0,m.Z)(N,2),y=g[0],C=g[1],I=(0,a.useState)(1),D=(0,m.Z)(I,2),w=D[0],A=D[1],_=(0,a.useState)(!1),E=(0,m.Z)(_,2),F=E[0],S=E[1],Z=(0,a.useState)(!1),L=(0,m.Z)(Z,2),B=L[0],V=L[1];(0,a.useEffect)((function(){0!==y?e((0,r.cc)(y)):C(y+1)}),[e,y,w]),(0,a.useEffect)((function(){0!==v.length?A(1):A(t.length/r.VZ)}),[v,t]),(0,a.useEffect)((function(){S(y>=1&&y<w),V(y>1&&y<=w)}),[y,w]);return(0,a.useEffect)((function(){if(""!==i||""!==h||!1!==p){C(1);var n=[];if(p&&(n=t),""!==i&&""!==h){var c=(0,k.D)(t,"email",i);n=(0,k.D)(c,"creationDate",h)}""!==i&&""===h&&(n=(0,k.D)(t,"email",i)),""===i&&""!==h&&(n=(0,k.D)(t,"creationDate",h)),e((0,l.SV)(n))}else e((0,l.SV)([]))}),[e,t,i,h,p]),(0,f.jsxs)("div",{className:"container",children:[(0,f.jsxs)("table",{className:"table table-striped table-bordered",children:[(0,f.jsx)("thead",{className:"table-dark",children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{scope:"col",children:"#"}),(0,f.jsx)("th",{scope:"col",children:"AccountId"}),(0,f.jsx)("th",{scope:"col",children:"Email"}),(0,f.jsx)("th",{scope:"col",children:"AuthToken"}),(0,f.jsx)("th",{scope:"col",children:"CreationDate"})]})}),(0,f.jsx)("tbody",{className:"table-group-divider",children:i.length>0||h.length>0||p?null===v||void 0===v?void 0:v.map((function(e,t){return(0,f.jsx)(b,{item:e,index:t,page:y},e.accountId)})):null===n||void 0===n?void 0:n.map((function(e,t){return(0,f.jsx)(b,{item:e,index:t,page:y},e.accountId)}))})]}),(0,f.jsxs)("div",{className:j,children:[(0,f.jsx)("button",{disabled:!F,type:"button",className:"btn btn-primary btn-lg",onClick:function(){C(y+1)},children:"Load more"}),(0,f.jsx)("button",{disabled:!B,type:"button",className:"btn btn-warning btn-lg",onClick:function(){C(y-1)},children:"Load less"})]})]})},g=function(){var e=(0,c.I0)();return(0,a.useEffect)((function(){e((0,r.o)())}),[e]),(0,f.jsxs)("div",{className:"container",children:[(0,f.jsx)("h2",{children:"Accounts"}),(0,f.jsx)(h,{}),(0,f.jsx)(N,{})]})}},7502:function(e,t,n){n.d(t,{A:function(){return a},VA:function(){return c},od:function(){return r}});var c=function(e){return e.accounts.allAccounts},a=function(e){return e.accounts.accountsByPage},r=function(e){return e.accounts.selectedAccountById}},311:function(e,t,n){n.d(t,{D:function(){return c}});var c=function(e,t,n){return e.filter((function(e){return e[t].toLowerCase().includes(n)}))}},4588:function(e,t){t.Z={wrapFilters:"Filter_wrapFilters__GvMFl"}}}]);
//# sourceMappingURL=221.d2d36669.chunk.js.map