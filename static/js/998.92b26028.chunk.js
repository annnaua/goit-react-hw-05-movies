"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[998],{998:function(A,g,B){B.r(g),B.d(g,{default:function(){return y}});var n,C,Q,e,t,r,E,I,a,c=B(861),s=B(885),i=B(757),u=B.n(i),o=B(14),f=B(731),k=B(689),p=B(791),J=B(390),d=B(508),l=B(168),v=B(444),x=v.ZP.div(n||(n=(0,l.Z)(["\n  display: flex;\n  gap: 48px;\n\n  margin: 32px 0px;\n"]))),P=v.ZP.h1(C||(C=(0,l.Z)(["\n  font-size: 60px;\n  font-weight: 800;\n  color: #fafafafa;\n\n  margin-bottom: 48px;\n"]))),w=v.ZP.ul(Q||(Q=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"]))),h=v.ZP.li(e||(e=(0,l.Z)(["\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n"]))),m=v.ZP.h2(t||(t=(0,l.Z)(["\n  font-size: 20px;\n"]))),D=v.ZP.div(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n\n  margin-top: 48px;\n"]))),b=v.ZP.h2(E||(E=(0,l.Z)(["\n  font-size: 20px;\n  text-transform: uppercase;\n  color: #e11d48;\n"]))),Z=v.ZP.ul(I||(I=(0,l.Z)(["\n  display: flex;\n  gap: 16px;\n\n  margin-bottom: 32px;\n"]))),j=(0,v.ZP)(f.OL)(a||(a=(0,l.Z)(["\n  width: fit-content;\n  padding: 8px 16px;\n  border-radius: 4px;\n  background-color: #27272c;\n\n  font-weight: 500;\n  color: #e4e4e7;\n\n  &.active {\n    color: #fafafa;\n    background-color: #e11d48;\n  }\n"]))),T=B(184);function y(){var A,g,B=null!==(A=null===(g=(0,k.TH)().state)||void 0===g?void 0:g.from)&&void 0!==A?A:"/",n=(0,k.UO)().id,C=(0,p.useState)(null),Q=(0,s.Z)(C,2),e=Q[0],t=Q[1];if((0,p.useEffect)((function(){var A=function(){var A=(0,c.Z)(u().mark((function A(){var g;return u().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,(0,J.TP)(n);case 3:g=A.sent,t(g),A.next=10;break;case 7:A.prev=7,A.t0=A.catch(0),(0,o.ZP)("Sorry, something went wrong!",{icon:"\ud83d\udcad",style:{borderRadius:"4px",background:"#e11d48",color:"#fafafafa"}});case 10:case"end":return A.stop()}}),A,null,[[0,7]])})));return function(){return A.apply(this,arguments)}}();A()}),[n]),e){var r=e.poster_path,E=e.title,I=e.release_date,a=e.vote_average,i=e.genres,l=e.overview;return(0,T.jsxs)("div",{children:[(0,T.jsx)(f.OL,{to:B,children:"Back to movies"}),(0,T.jsxs)(x,{children:[(0,T.jsx)("img",{style:{borderRadius:4,width:512},src:r?"https://image.tmdb.org/t/p/w500"+r:d,alt:E}),(0,T.jsxs)("div",{children:[(0,T.jsxs)(P,{children:[E," (",I.slice(0,4),")"]}),(0,T.jsxs)(w,{children:[(0,T.jsxs)(h,{children:[(0,T.jsx)(m,{children:"User Score:"}),(0,T.jsx)("span",{children:a})]}),(0,T.jsxs)(h,{children:[(0,T.jsx)(m,{children:"Genres: "}),i.map((function(A){var g=A.id,B=A.name;return(0,T.jsx)("span",{children:B},g)}))]})]}),(0,T.jsxs)(D,{children:[(0,T.jsx)(b,{children:"Overview"}),(0,T.jsx)("span",{children:l})]})]})]}),(0,T.jsxs)(Z,{children:[(0,T.jsx)("li",{children:(0,T.jsx)(j,{to:"cast",children:"Casts"})}),(0,T.jsx)("li",{children:(0,T.jsx)(j,{to:"reviews",children:"Reviews"})})]}),(0,T.jsx)(k.j3,{})]})}}},390:function(A,g,B){B.d(g,{Df:function(){return r},Ph:function(){return o},TP:function(){return I},tx:function(){return i},zv:function(){return c}});var n=B(861),C=B(757),Q=B.n(C),e=B(44);e.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var t="69f2fedec75952586c4375268db8626a";function r(){return E.apply(this,arguments)}function E(){return(E=(0,n.Z)(Q().mark((function A(){var g;return Q().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,e.ZP.get("trending/movie/day?api_key=".concat(t));case 2:return g=A.sent,A.abrupt("return",g.data);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function I(A){return a.apply(this,arguments)}function a(){return(a=(0,n.Z)(Q().mark((function A(g){var B;return Q().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,e.ZP.get("movie/".concat(g,"?api_key=").concat(t));case 2:return B=A.sent,A.abrupt("return",B.data);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function c(A){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(Q().mark((function A(g){var B;return Q().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,e.ZP.get("movie/".concat(g,"/credits?api_key=").concat(t));case 2:return B=A.sent,A.abrupt("return",B.data);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function i(A){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(Q().mark((function A(g){var B;return Q().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,e.ZP.get("movie/".concat(g,"/reviews?api_key=").concat(t));case 2:return B=A.sent,A.abrupt("return",B.data);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function o(A){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(Q().mark((function A(g){var B;return Q().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,e.ZP.get("search/movie?api_key=".concat(t,"&query=").concat(g,"&language=en-US&page=1&include_adult=false"));case 2:return B=A.sent,A.abrupt("return",B.data);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}},508:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAALuCAYAAADYNq4IAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABFtSURBVHgB7d0/bF3XYYDx+2hKdCO7UdPaGroU9WAPQf6s7VzNdfcM3aqtBaxdnm2go7x18F6nq7t0adY2njTEQMYoiWIlsWJTosTw0KBDke+RtGUn973v9wMISVd8IDiQ53vnnHvPYjrw2muv/c3+/vZ/TNPie9O0f3UCADbRDxeLvX+7c+fOTxefDf6X/s/ADwAJ9w8i4PtbB+/8/93gDwAZV8es/9bBX/5xAgBKvrc1AQA1VwUAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAI2p6A2bmyv5j+ae/F6buPd6bvPNmZ1tGHi4fTe5c+nt7f/t0EzM/i1Ve/vT8Bs3Ft/7np7U9fPvxzE9xdPJ7e2Pn5dHfr8QTMhyUAmJlNGvyHw6DZfflwVgOYDwEAM3J97xsbNfgfGd/TWNIA5sMeAJiR1x89PUi+v/1gun3p19ODxZNpnVzb355+cPC9XN+78vm1sZ/h3UsTMBNmAGBGXtl/eoR8d/u3azf4D3cXe9M7B+Fy3LpuZoRNJQBgxu5u7U3r6uM1DBcoEQAAEGQPAHCmsYHv5u63DpcnruxvTT967pPp9qX7buuDNWcGAFhpDP7vfHrtcP1+DP7D3z3+s+n27rXp2pPNu1sBSgQAsNK/PLz6+cB/3AsH124+/NYErC8BAKz09wfv9lf523339ME6EwDASmft5H9h368PWGd+goGVPlw8Wvl//7v9yQSsLwEArPT2zkdLZwHGtXe2fz0B60sAACuNJ/rdeP7nh7f+DWPg/2Brd7pxeLrf+j6kCPAcANg449a9sT7/4daj6aswIuDWzr0J2CxmAGCDjCN3x3HCb+2+NL3yxC59YDUBABtkDP5HMwAiADiLAIAN8cbDv3jqNMGjCPDEPmAZAQAb4AeP/ny6vnfl1PURAW/vvvxMETBmEcwkwOYRALDmxuA/PlYZSwJfNgI+e+1LlhNgAwkAWGPjXf/Jwf9ni73pve2Pn7r2ZSLg8DWfvnx4FsCYSbi1+1eWE2CDCABYU+Md+Vj3P27cp39z55fT7cv3V0bAuFPgPEd3E4zXnHy9CIDNIABgDR1NzZ90c+cXnz+gZ0TA+9sPTr/u05fOjYCTg//TX1cEwCYQALBmjk/NHzcG/JMP/3n78kenIuCV/ctnRsDJuwmWfn0RAGtPAMAaWTY1P7x76TenpvyPjAg4eajPiIA3D9b0T1p2N8FPFg+XzyRccDkBmCcBAGtk1eA/Ps5y8/lfnIqA7zzZmd7Y/cMegmV3E4wNhW/u/GrpTMJFlxOAeRIAsCZuPLx6amp+DMrnDf7D4ebAJRFw/fGVwwhYdTfB2FB4tKdgRMCPt3af+pzzlhOA+RIAsAbG4Pz63gtPXRtT87cvXfxI3hEBt56/dziwH3cYASvuJjh54t+bO/eWLieMOAHWiwCAmTtrav7BwUD9RYyT/W4+/8tTEXDS8bsJjjtvJgFYHwIAZuwiU/Nf1HkRsOxuguOOImDZTMKNh9+cgPUgAGDGLjo1/0WdFQEv7J//a+GzCDj9+tf3XjzzscTAfAgAWCO3Lt975sH/yN3DZYR7h4P5ccv2G6x6/bIIOO9sAmAeBACsiTE1/8Fzu9NXaUz1j/X+kxEwNvX9w5LTBU8SAbC+BACsgbMe9POsVkXAzYPlh2eNAGC+BADM3EUe9POsRgTcvnT/1PUbj755oWOAVy0nAPMlAGDGfvTcJ1/74H/kv7d/N711+VdPXRsbAt/afelCEbBqJgGYJwEAM/bW5Y+mP6YRASdnAo4i4CKH/4wIGBsVgfkTADBjD/4E76bfu/TxqVmHEQEXPQFwbFQ8OZMAzI8AAE5Ztu/gixwDvGw5AZgXAQAs9VVEADBfAgBm7E99yt6zRMDJY4uBeREAMCMnj9sdD+S5yLvtr9MIgHHs8HFjcL+1+5crA2VcP/kcgA+3Hk7AfGxPwGyMDXTffbLz+b/HATvjY47GMcDvffLXF/78//yaHmQEfDlmAGBGxtP+zjuqdx2N78meAJgXAQAzsuqUvXV2dHwxMC+LV1/99v4EzM71vW9Mrz968WCq/fyn8M3RB1u7048PljTG1P8DTweE2REAABBkCQAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAASNALg/AQApIwD+fwIAQvb/a2ux2PvnySwAAFTcXywe/+vWnTt3fnoQAd8/uPDDCQDYVOPN/v+MMX+M/b8H9v2JZconDdgAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=998.92b26028.chunk.js.map