(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[170],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7275:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return r},toc:function(){return c},default:function(){return u}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),s={sidebar_position:0},r={unversionedId:"Analytics/doc0",id:"Analytics/doc0",isDocsHomePage:!1,title:"Benthic Fish Detection",description:"This website is new and still under development, but please email daniel {at} mardascience {dot} com and I would be happy to talk with you!",source:"@site/docs/Analytics/doc0.md",sourceDirName:"Analytics",slug:"/Analytics/doc0",permalink:"/docs/Analytics/doc0",editUrl:"https://github.com/MARDAScience/web/edit/master/website/docs/Analytics/doc0.md",version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Fisheries",permalink:"/docs/Communications/doc4"},next:{title:"Image Segmentation",permalink:"/docs/Analytics/doc1"}},c=[{value:"&quot;Noisy&quot; RetinaNet",id:"noisy-retinanet",children:[]},{value:"GobyNet Schematic",id:"gobynet-schematic",children:[]},{value:"Training",id:"training",children:[]},{value:"Performance",id:"performance",children:[]},{value:"Residual U-Net for Fish Detection",id:"residual-u-net-for-fish-detection",children:[]},{value:"Training Data",id:"training-data",children:[]},{value:"Performance",id:"performance-1",children:[]}],l={toc:c};function u(e){var t=e.components,s=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This website is new and still under development, but please email daniel {at} mardascience {dot} com and I would be happy to talk with you!")),(0,o.kt)("p",null,"We develop a machine vision system for automated enumeration and sizing of in-\ndividual benthic fish in underwater imagery. The system consists of 1) a single-pass\nprobabilistic object-detector model to find candidate regions where fish are likely to\nbe present, followed by 2) an image segmentation model to estimate the outline of\neach individual fish. The system is applied to enumerating Round Goby (Neogobius\nmelanostomus) in Drop-camera as well as Autonomous Underwater Vehicle (AUV) in\nimagery from Lake Michigan, USA. We find that a model cascade is advantageous over\napplying a single model for the task. Both model outputs include an associated prob-\nability of detection. Hence the dual-model implementation provides two performance\nmetrics; a probability of fish identification and bounding box location which is useful\nfor error reporting for fish counts, and a separate probability of fish pixels, which is\nadditionally useful for error reporting for fish biomass.\nThe computational efficiency of the system is designed for on-board\nquantification of fish in real-time."),(0,o.kt)("h3",{id:"noisy-retinanet"},'"Noisy" RetinaNet'),(0,o.kt)("p",null,"RetinaNet (Figure below) is a popular one-stage object detector, partly because it uses a\nfeature pyramid network to efficiently detect objects at multiple scales. Traditionally, image\npyramids have been used to detect objects with varying scales in an image, using feature\nengineering practices (e.g. from HOG, Haar wavelets, etc), however this process is compute\nand memory intensive. However, that practice has now been largely superceded by image\npyramiding based on hierarchical convolutional filters, called Featurized image pyramids.\nThe CNNs layers used have an inherently pyramidal hierarchy, and the model frameworks\nare fully convolutional, which can takes an image of an any size and output proportionally\nsized feature maps at multiple levels. RetinaNet uses a Feature Pyramid Network (FPN) built on top of ResNet-50\nfrom which the final fully connected classification layer has\nbeen removed, in a fully convolutional fashion to extract features at three spatial scales (and\ncorresponding pixel resolution). This feature extractor is referred to as the \u2018backbone\u2019 of\nthe model. In our implementation, we modify the backbone such that random\nGaussian noise is added to all three feature maps output by the backbone."),(0,o.kt)("p",null,"An FPN is used in conjunction with the backbone for constructing a multi-scalar feature\npyramid from an input image at a single resolution. This is achieved by connecting each of\nthe three ResNet-50 output feature maps at different scales (the bottom-up convolutional\nlayers in Figure below) with lateral connections to a top-down pathway that upsamples the\nspatially coarser feature maps from higher pyramid levels. The lateral connections are used\nto merge the top-down layers and the bottom-up layers with the same pixel size. The FPN\nfacilitates object detection at a range of scales."),(0,o.kt)("p",null,"The top-down pathway upsamples the spatially coarser feature maps from higher pyramid\nlevels, with residual (lateral) connections that merge the layers with the same spatial size. At\neach of the prediction levels, there is a regression subnetwork, which estimates the precise\nlocation of the bounding box of each fish, and a classification subnetwork that uses the\noutput of the coupled backbone-FCN to predict the probability of goby presence at each\nspatial position"),(0,o.kt)("p",null,"Each detection is probabilistic; a threshold probability is used to filter detections and is\nused as a tunable parameter in model application. The framework for fish detection is based\non the RetinaNet model framework, based on a 3-layer feature pyramid network using a\nResNet-50 feature extractor. We modify the RetinaNet framework for the noisy underwater\nenvironment by adding Gaussian noise to features extracted from imagery by ResNet-50. "),(0,o.kt)("p",null,"Noise is only added during training, not during model evaluation or when\nthe model is used to make predictions on new sample imagery. The model is regularized\nby the Gaussian noise, and is designed to make the model robust to noisy underwater envi-\nronments. Forcing the model to detect fish in the presence of significant noise ensures that\noverfitting to extracted image features is minimized"),(0,o.kt)("h3",{id:"gobynet-schematic"},"GobyNet Schematic"),(0,o.kt)("p",null,"GobyNet model schematic, consisting of a bottom-up pathways that uses image\npyramiding to extract features at a hierarchy of levels, joined using residual connections to a\ntop-down pathway that merge the extracted features into a set of features that are passed to\nboth a classification and a regression subnetwork. The classification subnetwork determines\nthe class of the object and its likelihood, and the regression subnetwork estimates the corners\nof the bounding box that surrounds the object."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2329).Z})),(0,o.kt)("h3",{id:"training"},"Training"),(0,o.kt)("p",null,"Focal loss is a modification to the classical cross-entropy loss criterion for situations\nwhere there is large class imbalance. Class imbalance in this scope means that only a small\nproportion of any given scene are occupied by fish, even if Gobies are congregated in relatively\nlarge clusters of up to a dozen of so individuals, owing to the small size of the fish with respect\nto the large AUV image scene."),(0,o.kt)("p",null,"Effect of varying \u03b3 (a) and \u03b1 (b) on Focal Loss. The effect of increasing \u03b3 is to reduce the relative loss for a given p , disproportionately for p > .5. The effect of decreasing \u03b1 is to reduce the relative loss for a given p , disproportionately for p < .5."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1953).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5103).Z})),(0,o.kt)("h3",{id:"performance"},"Performance"),(0,o.kt)("p",null,"Example AUV imagery with gobies identified by green bounding boxes (these examples are some from the model training set"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9680).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4655).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2607).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4840).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8786).Z})),(0,o.kt)("h3",{id:"residual-u-net-for-fish-detection"},"Residual U-Net for Fish Detection"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9713).Z})),(0,o.kt)("h3",{id:"training-data"},"Training Data"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7223).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(818).Z})),(0,o.kt)("h3",{id:"performance-1"},"Performance"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7283).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2104).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9972).Z})))}u.isMDXComponent=!0},9680:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Ex-bbox-creation-ann-de4a5936606eb46252000eeed2351d56.png"},7223:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Fig1_goby_ex_intro_paper-af07dd2463736e1551da8165ec9b18e8.png"},818:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Fig3_Goby_ex_filt_paper-89437db0791730738bb57c62a8b3f96b.png"},9713:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Fig5_gobynet_conceptual-562f6e1aebd12907d3099f55b152e3ae.png"},7283:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Fig6_Goby_meas_N_vs_est_CM-964f87de6f455a977e0a140a44139a55.png"},2104:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Fig7_Goby_meas_vs_est_3metrics_test-19a254b72efef1e755b5dab609f891fc.png"},9972:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Fig8_Goby_meas_vs_score_paper-8ec172628fb9c2c0177264e66ac30be9.png"},2607:function(e,t,n){"use strict";t.Z=n.p+"assets/images/alpha-t0.5_alpha0.4res_100samples-ann-ad5abb7000ed95a8fd30c0eb406dd52e.png"},4840:function(e,t,n){"use strict";t.Z=n.p+"assets/images/best-t0.3_sigma0.2_gamma10res_100samples-ann-648486ab906b48fd44f8ba4617a15f35.png"},2329:function(e,t,n){"use strict";t.Z=n.p+"assets/images/gobynet_arch-8588cd36d10c778ad16c5dd75f6f8b5f.png"},1953:function(e,t,n){"use strict";t.Z=n.p+"assets/images/gobynet_gamma_alpha-6e788b5800b1c1f3707632e2a3cbe2f6.png"},4655:function(e,t,n){"use strict";t.Z=n.p+"assets/images/gobynet_modelout-retinanet-exs-e3870549ab3c37330db6c451e632a8a6.png"},5103:function(e,t,n){"use strict";t.Z=n.p+"assets/images/learnratesched_scratch-ann-e402aac6c0ff143831bd0b357dc299a1.png"},8786:function(e,t,n){"use strict";t.Z=n.p+"assets/images/sigma-t0.5_sigma0.6res_100samples-ann-fb34f547c24ac3755a0d281f9ab76f4c.png"}}]);