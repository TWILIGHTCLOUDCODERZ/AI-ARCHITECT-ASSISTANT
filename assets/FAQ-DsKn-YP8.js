import{c as a,r as c,j as e,m as i,A as l}from"./index-DwQmO8NH.js";import{C as d}from"./chevron-down-DocX4wvR.js";import{C as r}from"./cloud-DJAvXkAV.js";import{S as u}from"./settings-DvtLSgUG.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=a("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=a("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=a("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),x=[{icon:r,question:"What cloud providers do you support?",answer:"We support all major cloud providers including AWS, Azure, and Google Cloud Platform. Our AI is trained to understand and generate architectures for each platform, taking into account their specific services and best practices."},{icon:p,question:"How do I get started with the AI Architecture Assistant?",answer:`Getting started is simple: 

1. Sign up for an account
2. Describe your requirements in plain English
3. Select your preferred cloud provider
4. Let our AI generate a comprehensive architecture design
5. Review and customize the generated architecture`},{icon:m,question:"Can I export the architecture diagrams?",answer:`Yes, you can export diagrams in multiple formats including:

• PowerPoint presentations
• PDF documents
• High-resolution PNG images
• Visio compatible formats

All exports include detailed annotations and documentation.`},{icon:h,question:"Do you provide cost estimates?",answer:`Yes, we provide comprehensive cost analysis including:

• Detailed monthly cost breakdowns
• Service-by-service pricing
• Cost optimization recommendations
• Comparison of different service tiers
• Reserved instance recommendations`},{icon:u,question:"How accurate are the AI-generated architectures?",answer:`Our AI is trained on thousands of real-world architectures and follows industry best practices. The accuracy is ensured through:

• Regular updates with latest cloud services
• Compliance with security standards
• Performance optimization patterns
• Real-world deployment validation`},{icon:r,question:"Can I customize the generated architecture?",answer:`Absolutely! You can customize every aspect of the generated architecture:

• Modify service selections
• Adjust scaling parameters
• Add or remove components
• Update security configurations
• Customize networking setup`}];function v(){const[n,o]=c.useState(null);return e.jsx("div",{className:"min-h-screen bg-transparent pt-32",id:"faq",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24",children:[e.jsxs(i.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.8},className:"text-center mb-16",children:[e.jsx("h2",{className:"text-4xl font-bold text-white mb-4 neon-text",children:"Frequently Asked Questions"}),e.jsx("p",{className:"text-xl text-gray-400 max-w-3xl mx-auto",children:"Everything you need to know about the AI Architecture Assistant"})]}),e.jsx("div",{className:"max-w-4xl mx-auto",children:x.map((s,t)=>e.jsx(i.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:t*.1},className:"mb-6",children:e.jsxs(i.button,{onClick:()=>o(n===t?null:t),className:`w-full glow-card rounded-xl p-6 text-left transition-all duration-300 ${n===t?"bg-slate-800/50":"hover:bg-slate-800/30"}`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(s.icon,{className:"w-6 h-6 text-blue-400 mr-4"}),e.jsx("h3",{className:"text-xl font-semibold text-white",children:s.question})]}),e.jsx(d,{className:`w-5 h-5 text-blue-400 transition-transform duration-300 ${n===t?"transform rotate-180":""}`})]}),e.jsx(l,{children:n===t&&e.jsx(i.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},className:"overflow-hidden",children:e.jsx("div",{className:"mt-4 text-gray-400 whitespace-pre-line",children:s.answer})})})]})},t))})]})})}export{v as default};
