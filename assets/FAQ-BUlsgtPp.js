import{r as s,M as S,j as n,u as E,P as D,a as H,b as L,L as $,c as j,m as v}from"./index-BWusjHtT.js";import{C as N}from"./cloud-K3SjEnSQ.js";import{S as V}from"./settings-CO41V97c.js";class F extends s.Component{getSnapshotBeforeUpdate(o){const t=this.props.childRef.current;if(t&&o.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function G({children:i,isPresent:o}){const t=s.useId(),e=s.useRef(null),y=s.useRef({width:0,height:0,top:0,left:0}),{nonce:p}=s.useContext(S);return s.useInsertionEffect(()=>{const{width:u,height:a,top:m,left:r}=y.current;if(o||!e.current||!u||!a)return;e.current.dataset.motionPopId=t;const l=document.createElement("style");return p&&(l.nonce=p),document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${a}px !important;
            top: ${m}px !important;
            left: ${r}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[o]),n.jsx(F,{isPresent:o,childRef:e,sizeRef:y,children:s.cloneElement(i,{ref:e})})}const O=({children:i,initial:o,isPresent:t,onExitComplete:e,custom:y,presenceAffectsLayout:p,mode:u})=>{const a=E(W),m=s.useId(),r=s.useCallback(h=>{a.set(h,!0);for(const g of a.values())if(!g)return;e&&e()},[a,e]),l=s.useMemo(()=>({id:m,initial:o,isPresent:t,custom:y,onExitComplete:r,register:h=>(a.set(h,!1),()=>a.delete(h))}),p?[Math.random(),r]:[t,r]);return s.useMemo(()=>{a.forEach((h,g)=>a.set(g,!1))},[t]),s.useEffect(()=>{!t&&!a.size&&e&&e()},[t]),u==="popLayout"&&(i=n.jsx(G,{isPresent:t,children:i})),n.jsx(D.Provider,{value:l,children:i})};function W(){return new Map}const C=i=>i.key||"";function P(i){const o=[];return s.Children.forEach(i,t=>{s.isValidElement(t)&&o.push(t)}),o}const T=({children:i,custom:o,initial:t=!0,onExitComplete:e,presenceAffectsLayout:y=!0,mode:p="sync",propagate:u=!1})=>{const[a,m]=H(u),r=s.useMemo(()=>P(i),[i]),l=u&&!a?[]:r.map(C),h=s.useRef(!0),g=s.useRef(r),w=E(()=>new Map),[M,z]=s.useState(r),[f,I]=s.useState(r);L(()=>{h.current=!1,g.current=r;for(let d=0;d<f.length;d++){const c=C(f[d]);l.includes(c)?w.delete(c):w.get(c)!==!0&&w.set(c,!1)}},[f,l.length,l.join("-")]);const b=[];if(r!==M){let d=[...r];for(let c=0;c<f.length;c++){const x=f[c],A=C(x);l.includes(A)||(d.splice(c,0,x),b.push(x))}p==="wait"&&b.length&&(d=b),I(P(d)),z(r);return}const{forceRender:k}=s.useContext($);return n.jsx(n.Fragment,{children:f.map(d=>{const c=C(d),x=u&&!a?!1:r===f||l.includes(c),A=()=>{if(w.has(c))w.set(c,!0);else return;let R=!0;w.forEach(q=>{q||(R=!1)}),R&&(k==null||k(),I(g.current),u&&(m==null||m()),e&&e())};return n.jsx(O,{isPresent:x,initial:!h.current||t?void 0:!1,custom:x?void 0:o,presenceAffectsLayout:y,mode:p,onExitComplete:x?void 0:A,children:d},c)})})};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=j("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=j("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=j("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=j("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),B=[{icon:N,question:"What cloud providers do you support?",answer:"We support all major cloud providers including AWS, Azure, and Google Cloud Platform. Our AI is trained to understand and generate architectures for each platform, taking into account their specific services and best practices."},{icon:Q,question:"How do I get started with the AI Architecture Assistant?",answer:`Getting started is simple: 

1. Sign up for an account
2. Describe your requirements in plain English
3. Select your preferred cloud provider
4. Let our AI generate a comprehensive architecture design
5. Review and customize the generated architecture`},{icon:U,question:"Can I export the architecture diagrams?",answer:`Yes, you can export diagrams in multiple formats including:

• PowerPoint presentations
• PDF documents
• High-resolution PNG images
• Visio compatible formats

All exports include detailed annotations and documentation.`},{icon:K,question:"Do you provide cost estimates?",answer:`Yes, we provide comprehensive cost analysis including:

• Detailed monthly cost breakdowns
• Service-by-service pricing
• Cost optimization recommendations
• Comparison of different service tiers
• Reserved instance recommendations`},{icon:V,question:"How accurate are the AI-generated architectures?",answer:`Our AI is trained on thousands of real-world architectures and follows industry best practices. The accuracy is ensured through:

• Regular updates with latest cloud services
• Compliance with security standards
• Performance optimization patterns
• Real-world deployment validation`},{icon:N,question:"Can I customize the generated architecture?",answer:`Absolutely! You can customize every aspect of the generated architecture:

• Modify service selections
• Adjust scaling parameters
• Add or remove components
• Update security configurations
• Customize networking setup`}];function Z(){const[i,o]=s.useState(null);return n.jsx("div",{className:"min-h-screen bg-transparent pt-32",id:"faq",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24",children:[n.jsxs(v.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.8},className:"text-center mb-16",children:[n.jsx("h2",{className:"text-4xl font-bold text-white mb-4 neon-text",children:"Frequently Asked Questions"}),n.jsx("p",{className:"text-xl text-gray-400 max-w-3xl mx-auto",children:"Everything you need to know about the AI Architecture Assistant"})]}),n.jsx("div",{className:"max-w-4xl mx-auto",children:B.map((t,e)=>n.jsx(v.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:e*.1},className:"mb-6",children:n.jsxs(v.button,{onClick:()=>o(i===e?null:e),className:`w-full glow-card rounded-xl p-6 text-left transition-all duration-300 ${i===e?"bg-slate-800/50":"hover:bg-slate-800/30"}`,children:[n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center",children:[n.jsx(t.icon,{className:"w-6 h-6 text-blue-400 mr-4"}),n.jsx("h3",{className:"text-xl font-semibold text-white",children:t.question})]}),n.jsx(Y,{className:`w-5 h-5 text-blue-400 transition-transform duration-300 ${i===e?"transform rotate-180":""}`})]}),n.jsx(T,{children:i===e&&n.jsx(v.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},className:"overflow-hidden",children:n.jsx("div",{className:"mt-4 text-gray-400 whitespace-pre-line",children:t.answer})})})]})},e))})]})})}export{Z as default};
