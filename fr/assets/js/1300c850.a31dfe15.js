"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[194],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3205:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>m,toc:()=>k});var n=r(7462),a=r(7294),l=r(3905),o=r(6010);const i="skillCard_RJPu",p="skillPill_m_nQ";function s(e){const{skills:t}=e;return a.createElement("div",{className:"row"},a.createElement("div",{className:"col margin-bottom--lg"},a.createElement("div",{className:(0,o.Z)("card card--full-height",i)},t.map(((e,t)=>a.createElement("div",{className:p,style:{backgroundColor:"var(--rand-color-"+t%5+")"}},e))))))}const u={id:"resume",title:"CV"},c="CV",m={unversionedId:"resume",id:"resume",title:"CV",description:"Exp\xe9rience",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/resume.mdx",sourceDirName:".",slug:"/resume",permalink:"/fr/docs/resume",draft:!1,tags:[],version:"current",frontMatter:{id:"resume",title:"CV"},sidebar:"tutorialSidebar",previous:{title:"Pr\xe9sentation",permalink:"/fr/docs/about"},next:{title:"Timeline",permalink:"/fr/docs/timeline"}},d={},k=[{value:"Exp\xe9rience",id:"exp\xe9rience",level:2},{value:"Scolarit\xe9",id:"scolarit\xe9",level:2},{value:"Comp\xe9tences Techniques",id:"comp\xe9tences-techniques",level:2}],f={toc:k};function g(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cv"},"CV"),(0,l.kt)("h2",{id:"exp\xe9rience"},"Exp\xe9rience"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Alternance, Orange France, Pessac")," (Septembre 2021 - Septembre 2022)",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"D\xe9veloppeur Fullstack"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Mise \xe0 jour d'une application pour anonymiser les donn\xe9es des clients"),(0,l.kt)("li",{parentName:"ul"},"Aid\xe9 \xe0 d\xe9velopper le processus d'anonymisation en utilisant Python"),(0,l.kt)("li",{parentName:"ul"},"Mise \xe0 jour de l'interface utilisateur Angular pour refl\xe9ter les changements"),(0,l.kt)("li",{parentName:"ul"},"Modification de l'API Java pour r\xe9cup\xe9rer les donn\xe9es anonymis\xe9es")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Stage, BASF, B\xe2le")," (Avril 2021 - Mars 2021)",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"D\xe9veloppeur Fullstack"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"D\xe9veloppement d'un dashboard et mise \xe0 jour d'un plugin IBM Content Navigator"),(0,l.kt)("li",{parentName:"ul"},"Utilisation d'IBM Content Manager, IBM Content Navigator, Java pour le backend, Javascript pour le frontend, IBM Dojo\nToolkit.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Internship (year 10), Spinali Design, Mulhouse")," (December 2015 - December 2015)",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"D\xe9veloppeur"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Mission sur une application de "v\xeatements connect\xe9s".'),(0,l.kt)("li",{parentName:"ul"},"Adaptation de l'application aux mobiles (responsive design)")),(0,l.kt)("h2",{id:"scolarit\xe9"},"Scolarit\xe9"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Digital Campus, Bordeaux"))," (2021-2022)",(0,l.kt)("br",{parentName:"p"}),"\n","Bachelor D\xe9veloppement Web"),(0,l.kt)("p",null,"Alternance chez Orange France."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Lyc\xe9e Camille See, Colmar"))," (2019-2021)",(0,l.kt)("br",{parentName:"p"}),"\n","BTS Services Informatiques aux Organisations (SLAM)"),(0,l.kt)("p",null,"Dipl\xf4me pour apprendre le d\xe9veloppement de logiciels, SQL mais aussi le r\xe9seau, SysAdmin et le droit,\nla gestion de projet, ..."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Lyc\xe9e Jean Mermoz, Saint-Louis"))," (2017-2019)",(0,l.kt)("br",{parentName:"p"}),"\n","Baccalaur\xe9at technologique STI2D (SIN)"),(0,l.kt)("p",null,"Sp\xe9cialit\xe9 Syst\xe8me d'Information et Num\xe9rique, apprentissage de la programmation, robotique, ..."),(0,l.kt)("h2",{id:"comp\xe9tences-techniques"},"Comp\xe9tences Techniques"),(0,l.kt)(s,{skills:["Java","PHP","Laravel","Docusaurus","Docker","Python","Angular","Spring Boot"],mdxType:"Skills"}))}g.isMDXComponent=!0}}]);