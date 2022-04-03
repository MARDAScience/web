(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[904],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4489:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={slug:"this-website",title:"This website",author:"Dan Buscombe",author_title:"Chief Webber @ Marda",author_url:"https://github.com/dbuscombe-usgs",tags:["web","scicomm"]},s={permalink:"/blog/this-website",editUrl:"https://github.com/MARDAScience/web/edit/master/website/blog/blog/2021-05-14-this-website.md",source:"@site/blog/2021-05-14-this-website.md",title:"This website",description:"How did we set up this Marda science website? It was a rocky road ... we initially paid for a commercial WordPress hosting which was, well, let's just say awful and move on!",date:"2021-05-14T00:00:00.000Z",formattedDate:"May 13, 2021",tags:[{label:"web",permalink:"/blog/tags/web"},{label:"scicomm",permalink:"/blog/tags/scicomm"}],readingTime:2.11,truncated:!1},c=[{value:"Github",id:"github",children:[]},{value:"Docusaurus",id:"docusaurus",children:[]},{value:"Custom Domain",id:"custom-domain",children:[]},{value:"Back to Docusaurus",id:"back-to-docusaurus",children:[]},{value:"Back to Github",id:"back-to-github",children:[]}],u={toc:c};function l(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"How did we set up this Marda science website? It was a rocky road ... we initially paid for a commercial WordPress hosting which was, well, let's just say awful and move on!"),(0,i.kt)("p",null,"Next, we wanted something easy, free, and just code.  "),(0,i.kt)("p",null,"I decided to use github's free ",(0,i.kt)("inlineCode",{parentName:"p"},"gh pages")," web hosting service, which also provides an ssl certificate through ",(0,i.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"letsencrypt"),". For web pages, I went with ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"docusaurus"),", which is meant for documentation but works great for simple webpages such as these, with a relatively shallow learning curve. There's a little bit of javascript, a bit of css, and some markdown. Then its all about git, and confusing web stuff."),(0,i.kt)("h2",{id:"github"},"Github"),(0,i.kt)("p",null,"First I set up ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MARDAScience/web"},"this github repository")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/MARDAScience/web.git\ncd web\n")),(0,i.kt)("h2",{id:"docusaurus"},"Docusaurus"),(0,i.kt)("p",null,"Generated a ",(0,i.kt)("inlineCode",{parentName:"p"},"classic")," v2 docusaurus website template:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npx @docusaurus/init@latest init website classic\n")),(0,i.kt)("p",null,"Switched to the newly created ",(0,i.kt)("inlineCode",{parentName:"p"},"website")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd website\nnpx docusaurus start\n")),(0,i.kt)("p",null,"(started writing the website)"),(0,i.kt)("p",null,"Pushed it to github"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Git add .\nGit commit -m \u201cyour commit msg here\u201d\nGit push origin main\n")),(0,i.kt)("p",null,"Pushed website to ",(0,i.kt)("inlineCode",{parentName:"p"},"gh-pages")," like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GIT_USER=MARDAScience   CURRENT_BRANCH=main   yarn run deploy\n")),(0,i.kt)("p",null,"At which point the website was visible at ",(0,i.kt)("a",{parentName:"p",href:"https://MARDAScience.github.io/web/"},"https://MARDAScience.github.io/web/")),(0,i.kt)("h2",{id:"custom-domain"},"Custom Domain"),(0,i.kt)("p",null,'I transferred the domain name, "mardascience.com", from the awful hosting service we had naively gone with previously, to namecheap.'),(0,i.kt)("p",null,'In namecheap, under the domain listing, I used the "Advanced DNS" tab to add these \u201cA records\u201d (host for each is @)'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"host=@, value=185.199.108.153\nhost=@, value=185.199.109.153\nhost=@, value=185.199.110.153\nhost=@, value=185.199.111.153\n")),(0,i.kt)("p",null,"(those IPs were obtained from ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site"},"here")," and apparently change every so often)"),(0,i.kt)("p",null,"I also added the following CNAME record"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"host=www\nvalue=mardascience.github.io.\n")),(0,i.kt)("p",null,"(not the trailing dot after ",(0,i.kt)("inlineCode",{parentName:"p"},"io"),")"),(0,i.kt)("h2",{id:"back-to-docusaurus"},"Back to Docusaurus"),(0,i.kt)("p",null,"The top of the ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file should look like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"module.exports = {\n  title: 'Marda Science',\n  tagline: '{Communications | Analytics | Training} for the {Marine | Earth | Life} Sciences',\n  url: 'http://mardascience.com',\n  baseUrl: '/',\n  onBrokenLinks: 'throw',\n  onBrokenMarkdownLinks: 'warn',\n  favicon: 'img/favicon.ico',\n  organizationName: 'MARDAScience', // Usually your GitHub org/user name.\n  projectName: 'web', // Usually your repo name.\n")),(0,i.kt)("p",null,"Add a ",(0,i.kt)("inlineCode",{parentName:"p"},"CNAME")," file to both the root (",(0,i.kt)("inlineCode",{parentName:"p"},"web"),") and ",(0,i.kt)("inlineCode",{parentName:"p"},"/website/")," that says, simply"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"www.mardascience.com\n")),(0,i.kt)("p",null,"(note the ",(0,i.kt)("inlineCode",{parentName:"p"},"www.")," is included)"),(0,i.kt)("p",null,"Push it to github:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Git add .\nGit commit -m \u201cmsg\u201d\nGit push origin main\n")),(0,i.kt)("p",null,"Push website to gh-pages"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GIT_USER=MARDAScience   CURRENT_BRANCH=main   yarn run deploy\n")),(0,i.kt)("h2",{id:"back-to-github"},"Back to Github"),(0,i.kt)("p",null,"On ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MARDAScience/web/settings/pages"},"github pages"),", add custom domain name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"www.mardascience.com\n")),(0,i.kt)("p",null,"Check ",(0,i.kt)("inlineCode",{parentName:"p"},"Enforce HTTPS"),". After a DNS check, it should be visible at ",(0,i.kt)("a",{parentName:"p",href:"https://www.mardascience.com/"},"https://www.mardascience.com/")))}l.isMDXComponent=!0}}]);