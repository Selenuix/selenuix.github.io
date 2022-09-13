"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[517],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4825:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>k});var n=r(7462),a=r(7294),l=r(3905),o=r(6010);const p="skillCard_RJPu",i="skillPill_m_nQ";function c(e){const{skills:t}=e;return a.createElement("div",{className:"row"},a.createElement("div",{className:"col margin-bottom--lg"},a.createElement("div",{className:(0,o.Z)("card card--full-height",p)},t.map(((e,t)=>a.createElement("div",{className:i,style:{backgroundColor:"var(--rand-color-"+t%5+")"}},e))))))}const s={id:"resume",title:"Resume"},m="Resume",u={unversionedId:"resume",id:"resume",title:"Resume",description:"Experience",source:"@site/docs/resume.mdx",sourceDirName:".",slug:"/resume",permalink:"/docs/resume",draft:!1,tags:[],version:"current",frontMatter:{id:"resume",title:"Resume"},sidebar:"tutorialSidebar",previous:{title:"About Me",permalink:"/docs/about"},next:{title:"Timeline",permalink:"/docs/timeline"}},d={},k=[{value:"Experience",id:"experience",level:2},{value:"Education",id:"education",level:2},{value:"Technical Skills",id:"technical-skills",level:2}],g={toc:k};function f(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"resume"},"Resume"),(0,l.kt)("h2",{id:"experience"},"Experience"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Apprenticeship, Orange France, Pessac")," (September 2022 - September 2024)",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Fullstack Developer"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Helped to develop ",(0,l.kt)("a",{parentName:"li",href:"https://mon-reseau-local.orange.fr/"},"Mon R\xe9seau Local")),(0,l.kt)("li",{parentName:"ul"},"Used Java, Spring Boot for backend and Angular for frontend")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Apprenticeship, Orange France, Pessac")," (September 2021 - September 2022)",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Fullstack Developer"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updated an application to anonymize clients data"),(0,l.kt)("li",{parentName:"ul"},"Helped to develop the anonymization process using Python"),(0,l.kt)("li",{parentName:"ul"},"Updated the Angular user interface to reflect changes"),(0,l.kt)("li",{parentName:"ul"},"Modified the Java API to retrieve anonymized data")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Internship, BASF, Basel")," (April 2021 - March 2021)",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Fullstack Developer"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Developed a dashboard and updated an IBM Content Navigator plugin"),(0,l.kt)("li",{parentName:"ul"},"Used IBM Content Manager, IBM Content Navigator, Java for backend, Javascript for frontend, IBM Dojo Toolkit")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Internship (year 10), Spinali Design, Mulhouse")," (December 2015 - December 2015)",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Developer"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Worked on their "smart clothing" application'),(0,l.kt)("li",{parentName:"ul"},"Made the application responsive, to work across all devices")),(0,l.kt)("h2",{id:"education"},"Education"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Digital Campus, Bordeaux"))," (2022-2024)",(0,l.kt)("br",{parentName:"p"}),"\n","Web Development/Tech Lead Master's degree"),(0,l.kt)("p",null,"Apprenticeship at Orange France."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Digital Campus, Bordeaux"))," (2021-2022)",(0,l.kt)("br",{parentName:"p"}),"\n","Web Development Bachelor's degree"),(0,l.kt)("p",null,"Apprenticeship at Orange France."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Lyc\xe9e Camille See, Colmar"))," (2019-2021)",(0,l.kt)("br",{parentName:"p"}),"\n","BTS Services Informatiques aux Organisations (SLAM)"),(0,l.kt)("p",null,"Two years diploma to learn about software development, SQL but also networking, SysAdmin and law, management, ... "),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Lyc\xe9e Jean Mermoz, Saint-Louis"))," (2017-2019)",(0,l.kt)("br",{parentName:"p"}),"\n","Baccalaur\xe9at technologique STI2D (SIN)"),(0,l.kt)("p",null,"High school diploma focusing on programming, robotics, science."),(0,l.kt)("h2",{id:"technical-skills"},"Technical Skills"),(0,l.kt)(c,{skills:["Java","PHP","Laravel","Docusaurus","Docker","Python","Angular","Spring Boot"],mdxType:"Skills"}))}f.isMDXComponent=!0}}]);