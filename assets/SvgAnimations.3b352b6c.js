import{m as P,_ as Q}from"./CompleteWidthTemplate.8a7f1bcd.js";import{E as b}from"./EffectCard.6a3f8499.js";import{s as S}from"./mouse.6cc8935c.js";import{_ as B}from"./index.22c8b22d.js";import{k as $,A as p,C as y,o as i,c as M,w as C,h as m,n as v,y as c,E as T,F as V,D as j,l as H}from"./vendor.778d6519.js";const z=["d"],D=$({setup(W){const t=p(80),e=p(50),s=S(t,e),r=p(),a=y(()=>{var d;return((d=r.value)==null?void 0:d.clientHeight)?r.value.clientHeight:240}),x=y(()=>{if(t.value>70){const d=a.value*.25,u=a.value*.5,f=a.value*.75;return`M 0 0 L 50 0 Q 50 ${d} 50 ${u} Q 50 ${f} 50 ${a.value} L 0 ${a.value} z`}else{const d=(e.value-25)/100*a.value,u=e.value/100*a.value,f=(e.value+25)/100*a.value;return`M 0 0 L 50 0 Q 65 ${d} 65 ${u} Q 65 ${f} 50 ${a.value} L 0 ${a.value} z`}});return(d,u)=>(i(),M(b,null,{default:C(()=>[(i(),m("svg",{class:"h-full w-full",onMousemove:u[0]||(u[0]=(...f)=>c(s)&&c(s)(...f)),onMouseleave:u[1]||(u[1]=f=>t.value=100),ref:f=>r.value=f},[v("path",{class:"path-transition",fill:"#ff6e48",d:c(x)},null,8,z)],544))]),_:1}))}});var N=B(D,[["__scopeId","data-v-6bf77f05"]]);const F=["cx","cy"],G=$({setup(W){const t=p(),e=2,s=100,r=()=>Math.random()<.5?-1:1,a=()=>{const g=r();return(.5+2*Math.random())*g},x=y(()=>Array.from({length:s},()=>{if(t.value){const{clientHeight:h,clientWidth:n}=t.value,E=n*(.8*Math.random()+.1),o=h*(.8*Math.random()+.1),_=a(),l=a();return T({x:E,y:o,dx:_,dy:l})}else return{x:0,y:0,dx:0,dy:0}})),d=()=>{if(t.value){const{clientHeight:g,clientWidth:h}=t.value;x.value.forEach(n=>{(n.x<e/2||n.x>h-e/2)&&(n.dx=-n.dx),(n.y<e/2||n.y>g-e/2)&&(n.dy=-n.dy),n.x+=n.dx,n.y+=n.dy})}};let u;const f=()=>{u=setInterval(d,15)},w=()=>{clearInterval(u)};return(g,h)=>(i(),M(b,null,{default:C(()=>[(i(),m("svg",{class:"h-full w-full",ref:n=>t.value=n,onMouseenter:f,onMouseleave:w},[(i(!0),m(V,null,j(c(x),(n,E)=>(i(),m("circle",{key:E,cx:n.x,cy:n.y,r:e,fill:"#ff6e48"},null,8,F))),128))],544))]),_:1}))}}),X=["d"],Y=$({setup(W){const t=p(),e=2,s=20,r=()=>Math.random()<.5?-1:1,a=()=>{const o=r();return(1+4*Math.random())*o},x=()=>Math.ceil(5*Math.random()),d=()=>{if(t.value){const{clientHeight:o,clientWidth:_}=t.value,l=_*(.8*Math.random()+.1),I=o*(.8*Math.random()+.1),L=a(),R=a();return T({x:l,y:I,dx:L,dy:R})}else return{x:0,y:0,dx:0,dy:0}},u=y(()=>Array.from({length:s},d)),f=y(()=>{const{length:o}=u.value;return u.value.map((l,I)=>{const L=x(),R=Array.from({length:L},(k,A)=>I+1+A),q={connectedTo:[],coordinates:l};return q.connectedTo=R.map(k=>k>o-1?u.value[k-o]:u.value[k]),q})}),w=y(()=>f.value.flatMap(o=>o.connectedTo.map(_=>`M ${o.coordinates.x} ${o.coordinates.y} L ${_.x} ${_.y} z`))),g=()=>{if(t.value){const{clientHeight:o,clientWidth:_}=t.value;u.value.forEach(l=>{(l.x<e/2||l.x>_-e/2)&&(l.dx=-l.dx),(l.y<e/2||l.y>o-e/2)&&(l.dy=-l.dy),l.x+=l.dx,l.y+=l.dy})}};let h;const n=()=>{h=setInterval(g,15)},E=()=>{clearInterval(h)};return(o,_)=>(i(),M(b,null,{default:C(()=>[(i(),m("svg",{class:"h-full w-full",ref:l=>t.value=l,onMouseenter:n,onMouseleave:E},[(i(!0),m(V,null,j(c(w),(l,I)=>(i(),m("path",{key:I,stroke:"#ff6e48",d:l},null,8,X))),128))],544))]),_:1}))}});const J=["cx","cy","r"],K=["cx","cy","r"],O=["cx","cy","r"],U=["cx","cy","r"],Z=["cx","cy","r"],ee=["cx","cy","r"],te=["cx","cy","r"],ce=["cx","cy","r"],le=["cx","cy","r"],ne=["cx","cy","r"],re=$({setup(W){const t=p(null),e=p(10),s=y(()=>{if(t.value!==null&&t.value.clientWidth)return t.value.clientWidth/2}),r=y(()=>{if(t.value!==null&&t.value.clientHeight)return t.value.clientHeight/2-50});return(a,x)=>(i(),M(b,null,{default:C(()=>[(i(),m("svg",{class:"h-full w-full makespin",ref:d=>t.value=d},[v("circle",{class:"turning-circle",cx:c(s),cy:c(r),r:e.value,fill:"#ff6e48"},null,8,J),v("circle",{class:"turning-circle delay-100",cx:c(s),cy:c(r),r:e.value,fill:"#ff6e48"},null,8,K),v("circle",{class:"turning-circle delay-200",cx:c(s),cy:c(r),r:e.value,fill:"#ff6e48"},null,8,O),v("circle",{class:"turning-circle delay-300",cx:c(s),cy:c(r),r:e.value,fill:"#ff6e48"},null,8,U),v("circle",{class:"turning-circle delay-400",cx:c(s),cy:c(r),r:e.value,fill:"#ff6e48"},null,8,Z),v("circle",{class:"turning-circle delay-500",cx:c(s),cy:c(r),r:e.value,fill:"#ff6e48"},null,8,ee),v("circle",{class:"turning-circle delay-600",cx:c(s),cy:c(r),r:e.value,fill:"#ff6e48"},null,8,te),v("circle",{class:"turning-circle delay-700",cx:c(s),cy:c(r),r:e.value,fill:"#ff6e48"},null,8,ce),v("circle",{class:"turning-circle delay-800",cx:c(s),cy:c(r),r:e.value,fill:"#ff6e48"},null,8,le),v("circle",{class:"turning-circle delay-900",cx:c(s),cy:c(r),r:e.value,fill:"#ff6e48"},null,8,ne)],512))]),_:1}))}});var se=B(re,[["__scopeId","data-v-32d75c80"]]);const ae=$({setup(W){return(t,e)=>(i(),M(b,null,{default:C(()=>[H(P)]),_:1}))}}),ue={class:"flex gap-4"},_e=$({setup(W){return(t,e)=>(i(),M(Q,null,{default:C(()=>[v("div",ue,[H(N),H(G),H(Y),H(se),H(ae)])]),_:1}))}});export{_e as default};
