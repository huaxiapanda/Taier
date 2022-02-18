"use strict";(self.webpackChunktaier_website=self.webpackChunktaier_website||[]).push([[4958],{3905:function(t,a,n){n.d(a,{Zo:function(){return k},kt:function(){return s}});var e=n(7294);function l(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function r(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}function i(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function p(t,a){if(null==t)return{};var n,e,l=function(t,a){if(null==t)return{};var n,e,l={},r=Object.keys(t);for(e=0;e<r.length;e++)n=r[e],a.indexOf(n)>=0||(l[n]=t[n]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)n=r[e],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var m=e.createContext({}),d=function(t){var a=e.useContext(m),n=a;return t&&(n="function"==typeof t?t(a):i(i({},a),t)),n},k=function(t){var a=d(t.components);return e.createElement(m.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return e.createElement(e.Fragment,{},a)}},o=e.forwardRef((function(t,a){var n=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),o=d(n),s=l,N=o["".concat(m,".").concat(s)]||o[s]||u[s]||r;return n?e.createElement(N,i(i({ref:a},k),{},{components:n})):e.createElement(N,i({ref:a},k))}));function s(t,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=o;var p={};for(var m in a)hasOwnProperty.call(a,m)&&(p[m]=a[m]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var d=2;d<r;d++)i[d]=n[d];return e.createElement.apply(null,i)}return e.createElement.apply(null,n)}o.displayName="MDXCreateElement"},1588:function(t,a,n){n.r(a),n.d(a,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return k},default:function(){return o}});var e=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],p={title:"\u96c6\u7fa4\u7ba1\u7406",sidebar_label:"\u96c6\u7fa4\u7ba1\u7406"},m="\u63a7\u5236\u53f0",d={unversionedId:"functions/multi-cluster",id:"functions/multi-cluster",title:"\u96c6\u7fa4\u7ba1\u7406",description:"\u63a7\u5236\u53f0\u662f\u7ef4\u62a4\u5e95\u5c42\u8d44\u6e90\u7684\u7ba1\u7406\u5e73\u53f0\uff0c\u5206\u4e3a\u961f\u5217\u7ba1\u7406\u3001\u8d44\u6e90\u7ba1\u7406\u3001\u591a\u96c6\u7fa4\u7ba1\u7406\u4e09\u4e2a\u6a21\u5757",source:"@site/docs/functions/multi-cluster.md",sourceDirName:"functions",slug:"/functions/multi-cluster",permalink:"/taier/docs/functions/multi-cluster",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/functions/multi-cluster.md",tags:[],version:"current",frontMatter:{title:"\u96c6\u7fa4\u7ba1\u7406",sidebar_label:"\u96c6\u7fa4\u7ba1\u7406"},sidebar:"docs",previous:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/taier/docs/quickstart/deploy"},next:{title:"\u6570\u636e\u6e90\u7ba1\u7406",permalink:"/taier/docs/functions/datasource"}},k=[{value:"\u591a\u96c6\u7fa4\u7ba1\u7406",id:"\u591a\u96c6\u7fa4\u7ba1\u7406",children:[{value:"\u516c\u5171\u7ec4\u4ef6",id:"\u516c\u5171\u7ec4\u4ef6",children:[],level:3},{value:"\u8d44\u6e90\u8c03\u5ea6\u7ec4\u4ef6",id:"\u8d44\u6e90\u8c03\u5ea6\u7ec4\u4ef6",children:[],level:3},{value:"\u5b58\u50a8\u7ec4\u4ef6",id:"\u5b58\u50a8\u7ec4\u4ef6",children:[],level:3},{value:"\u8ba1\u7b97\u7ec4\u4ef6",id:"\u8ba1\u7b97\u7ec4\u4ef6",children:[{value:"Flink",id:"flink",children:[{value:"\u516c\u5171\u53c2\u6570",id:"\u516c\u5171\u53c2\u6570",children:[],level:5},{value:"session",id:"session",children:[],level:5},{value:"Flink \u53c2\u6570\u9879",id:"flink-\u53c2\u6570\u9879",children:[],level:5}],level:4},{value:"Spark",id:"spark",children:[{value:"Spark \u53c2\u6570\u9879",id:"spark-\u53c2\u6570\u9879",children:[],level:5},{value:"\u81ea\u5b9a\u4e49\u53c2\u6570",id:"\u81ea\u5b9a\u4e49\u53c2\u6570",children:[],level:5}],level:4}],level:3}],level:2}],u={toc:k};function o(t){var a=t.components,p=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,e.Z)({},u,p,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u63a7\u5236\u53f0"},"\u63a7\u5236\u53f0"),(0,r.kt)("p",null,"\u63a7\u5236\u53f0\u662f\u7ef4\u62a4\u5e95\u5c42\u8d44\u6e90\u7684\u7ba1\u7406\u5e73\u53f0\uff0c\u5206\u4e3a\u961f\u5217\u7ba1\u7406\u3001\u8d44\u6e90\u7ba1\u7406\u3001\u591a\u96c6\u7fa4\u7ba1\u7406\u4e09\u4e2a\u6a21\u5757"),(0,r.kt)("h2",{id:"\u591a\u96c6\u7fa4\u7ba1\u7406"},"\u591a\u96c6\u7fa4\u7ba1\u7406"),(0,r.kt)("p",null,"\u591a\u96c6\u7fa4\u7ba1\u7406\u7528\u4e8e\u914d\u7f6e\u4efb\u52a1\u5b9e\u4f8b\u8fd0\u884c\u6240\u4f9d\u8d56\u7684\u5e95\u5c42\u7ec4\u4ef6\uff0c\u6bd4\u5982\u8d44\u6e90\u8c03\u5ea6\u7ec4\u4ef6 YARN\u3001\u5b58\u50a8\u7ec4\u4ef6 HDFS\u3001\u8ba1\u7b97\u7ec4\u4ef6 Flink \u7b49"),(0,r.kt)("p",null,"\u5c06\u79df\u6237\u7ed1\u5b9a\u5230\u67d0\u4e2a\u96c6\u7fa4\uff0c\u8be5\u79df\u6237\u63d0\u4ea4\u7684\u4efb\u52a1\u5c31\u4f1a\u4f7f\u7528\u8be5\u96c6\u7fa4\u4e0b\u5bf9\u5e94\u7684\u7ec4\u4ef6"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5728\u5b9e\u9645\u7684\u6570\u636e\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u8d44\u6e90\u8fdb\u884c\u5408\u7406\u7684\u5206\u914d\uff1a\u4e0d\u540c\u7684\u96c6\u7fa4\u4f7f\u7528\u4e0d\u540c\u7684\u8d44\u6e90\uff0c\u7136\u540e\u8ba9\u4e0d\u540c\u73af\u5883\u4e0b\u7684\u79df\u6237\u7ed1\u5b9a\u5230\u4e0d\u540c\u7684\u96c6\u7fa4\uff0c\u6bd4\u5982\u6d4b\u8bd5\u73af\u5883\u79df\u6237\u7ed1\u5b9a\u5230\u6d4b\u8bd5\u96c6\u7fa4\u3001\u9884\u53d1\u73af\u5883\u79df\u6237\u7ed1\u5b9a\u9884\u53d1\u96c6\u7fa4\uff0c\u4ece\u800c\u5b9e\u73b0\u5bf9\u8d44\u6e90\u7684\u9694\u79bb\u4f7f\u7528"))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u591a\u96c6\u7fa4\u7ba1\u7406\u6309\u7167\u516c\u5171\u7ec4\u4ef6--\x3e\u8d44\u6e90\u8c03\u5ea6\u7ec4\u4ef6--\x3e\u5b58\u50a8\u7ec4\u4ef6--\x3e\u8ba1\u7b97\u7ec4\u4ef6\u7684\u987a\u5e8f\u8fdb\u884c\u914d\u7f6e"))),(0,r.kt)("h3",{id:"\u516c\u5171\u7ec4\u4ef6"},"\u516c\u5171\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u516c\u5171\u7ec4\u4ef6\u7528\u4e8e\u914d\u7f6e SFTP \u7ec4\u4ef6\uff0c\u76f8\u5173\u8d44\u6e90\u3001\u914d\u7f6e\u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d\u90fd\u4f1a\u4f7f\u7528\u5bf9\u5e94\u7684sftp\u7ec4\u4ef6\u6765\u64cd\u4f5c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SFTP \u914d\u7f6e",src:n(7002).Z})),(0,r.kt)("h3",{id:"\u8d44\u6e90\u8c03\u5ea6\u7ec4\u4ef6"},"\u8d44\u6e90\u8c03\u5ea6\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u8d44\u6e90\u8c03\u5ea6\u7ec4\u4ef6\u4e3b\u8981\u7528\u4e8e\u914d\u7f6e YARN \u7ec4\u4ef6\uff0c\u56e0\u4e3a\u67d0\u4e9b\u8ba1\u7b97\u7ec4\u4ef6\u9700\u8981\u4f9d\u8d56\u8d44\u6e90\u8c03\u5ea6\u7ec4\u4ef6\uff0c\u6bd4\u5982 Flink \u8ba1\u7b97\u7ec4\u4ef6\u9700\u8981\u4f9d\u8d56 YARN\uff0c\u6240\u4ee5\u9700\u8981\u63d0\u524d\u914d\u7f6e\u597d\u8d44\u6e90\u8c03\u5ea6\u7ec4\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"YARN \u914d\u7f6e",src:n(5268).Z})),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4e0d\u540c\u5382\u5546\u7684hadoop\u96c6\u7fa4\u63d0\u4ea4\u4efb\u52a1\u4f1a\u4f9d\u8d56\u4e0d\u540c\u7684\u53c2\u6570\uff0c\u53ef\u4ee5\u5728\u9002\u914dhadoop\u96c6\u7fa4\u7684\u65f6\u5019\u901a\u8fc7\u81ea\u5b9a\u4e49\u53c2\u6570\u6765\u52a8\u6001\u8c03\u6574"),(0,r.kt)("p",{parentName:"div"},"\u8fd9\u91cc\u9ed8\u8ba4\u4ee5Apache Hadoop2 \u4e3a\u4f8b"))),(0,r.kt)("h3",{id:"\u5b58\u50a8\u7ec4\u4ef6"},"\u5b58\u50a8\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u5b58\u50a8\u7ec4\u4ef6\u4e3b\u8981\u7528\u4e8e\u914d\u7f6e HDFS \u7ec4\u4ef6\uff0c\u56e0\u4e3a\u67d0\u4e9b\u8ba1\u7b97\u7ec4\u4ef6\u9700\u8981\u4f9d\u8d56\u5b58\u50a8\u7ec4\u4ef6\uff0c\u6bd4\u5982 Flink \u8ba1\u7b97\u7ec4\u4ef6\u9700\u8981\u4f9d\u8d56 HDFS \u5b58\u50a8\u7ec4\u4ef6\uff0c\u6240\u4ee5\u9700\u8981\u63d0\u524d\u914d\u7f6e\u597d\u5b58\u50a8\u7ec4\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"HDFS \u914d\u7f6e",src:n(5538).Z})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4e3a\u4e86\u4fdd\u6301 Hadoop \u5f15\u64ce\u4e0b\uff0cYARN \u548c HDFS \u7ec4\u4ef6\u7684\u7248\u672c\u4e00\u81f4\u6027\uff0c\u5f53\u5207\u6362 YARN \u7684\u7ec4\u4ef6\u7248\u672c\uff0c\u8fdb\u884c\u4fdd\u5b58\u540e\uff0c\u5b58\u50a8\u7ec4\u4ef6 HDFS \u7684\u7248\u672c\u4e5f\u5c06\u540c\u6b65\u53d8\u66f4"))),(0,r.kt)("h3",{id:"\u8ba1\u7b97\u7ec4\u4ef6"},"\u8ba1\u7b97\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u8ba1\u7b97\u7ec4\u4ef6\u4e3b\u8981\u7528\u4e8e\u914d\u7f6e Flink\u3001Spark \u7b49\u8ba1\u7b97\u5f15\u64ce"),(0,r.kt)("h4",{id:"flink"},"Flink"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Flink \u914d\u7f6e",src:n(7245).Z})),(0,r.kt)("p",null,"\u90e8\u7f72\u6a21\u5f0f\u5206\u4e3a perjob\u3001session \u4e24\u79cd\u6a21\u5f0f"),(0,r.kt)("h5",{id:"\u516c\u5171\u53c2\u6570"},"\u516c\u5171\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clusterMode"),(0,r.kt)("td",{parentName:"tr",align:null},"perjob\u6a21\u5f0f\u4e3aperjob\uff1bsession\u6a21\u5f0f\u4e3asession"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4efb\u52a1\u6267\u884c\u6a21\u5f0f\uff1aperjob, session"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flinkJarPath"),(0,r.kt)("td",{parentName:"tr",align:null},"/data/insight_plugin/flink110_lib"),(0,r.kt)("td",{parentName:"tr",align:null},"flink lib path"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"remoteFlinkJarPath"),(0,r.kt)("td",{parentName:"tr",align:null},"/data/insight_plugin/flink110_lib"),(0,r.kt)("td",{parentName:"tr",align:null},"flink lib\u8fdc\u7a0b\u8def\u5f84"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flinkPluginRoot"),(0,r.kt)("td",{parentName:"tr",align:null},"/data/insight_plugin"),(0,r.kt)("td",{parentName:"tr",align:null},"flinkStreamSql\u548cflinkx plugins\u7236\u7ea7\u672c\u5730\u76ee\u5f55"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"remotePluginRootDir"),(0,r.kt)("td",{parentName:"tr",align:null},"/data/insight_plugin"),(0,r.kt)("td",{parentName:"tr",align:null},"flinkStreamSql\u548cflinkx plugins\u7236\u7ea7\u8fdc\u7a0b\u76ee\u5f55"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pluginLoadMode"),(0,r.kt)("td",{parentName:"tr",align:null},"shipfile"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u52a0\u8f7d\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitorAcceptedApp"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u76d1\u63a7yarn accepted\u72b6\u6001\u4efb\u52a1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yarnAccepterTaskNumber"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8yarn accepter\u4efb\u52a1\u6570\u91cf\uff0c\u8fbe\u5230\u8fd9\u4e2a\u503c\u540e\u4e0d\u5141\u8bb8\u4efb\u52a1\u63d0\u4ea4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prometheusHost"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"prometheus\u5730\u5740\uff0c\u5e73\u53f0\u7aef\u4f7f\u7528"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prometheusPort"),(0,r.kt)("td",{parentName:"tr",align:null},"9090"),(0,r.kt)("td",{parentName:"tr",align:null},"prometheus\uff0c\u5e73\u53f0\u7aef\u4f7f\u7528"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"classloader.dtstack-cache"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u7f13\u5b58classloader"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,r.kt)("h5",{id:"session"},"session"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"checkSubmitJobGraphInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"60"),(0,r.kt)("td",{parentName:"tr",align:null},"session check\u95f4\u9694\uff0860 * 10s\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flinkSessionSlotCount"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"flink session\u5141\u8bb8\u7684\u6700\u5927slot\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sessionRetryNum"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"session\u91cd\u8bd5\u6b21\u6570\uff0c\u8fbe\u5230\u540e\u4f1a\u653e\u7f13\u91cd\u8bd5\u7684\u9891\u7387"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sessionStartAuto"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5141\u8bb8engine\u542f\u52a8flink session"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"flinkSess ionName"),(0,r.kt)("td",{parentName:"tr",align:null},"flink_session"),(0,r.kt)("td",{parentName:"tr",align:null},"flink session\u4efb\u52a1\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jobmanager.heap.mb"),(0,r.kt)("td",{parentName:"tr",align:null},"2048"),(0,r.kt)("td",{parentName:"tr",align:null},"jobmanager\u5185\u5b58\u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"taskmanager.heap.mb"),(0,r.kt)("td",{parentName:"tr",align:null},"1024"),(0,r.kt)("td",{parentName:"tr",align:null},"taskmanager\u5185\u5b58\u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")))),(0,r.kt)("h5",{id:"flink-\u53c2\u6570\u9879"},"Flink \u53c2\u6570\u9879"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"env.java.opts"),(0,r.kt)("td",{parentName:"tr",align:null},"-XX:+UseConcMarkSweepGC -XX:+CMSParallelRemarkEnabled -XX:+CMSIncrementalMode -XX:+CMSIncrementalPacing -XX:MaxMetaspaceSize=300m -Dfile.encoding=UTF-8"),(0,r.kt)("td",{parentName:"tr",align:null},"jvm\u53c2\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"classloader.resolve-order"),(0,r.kt)("td",{parentName:"tr",align:null},"perjob\u9ed8\u8ba4\u4e3achild-first\uff0csession\u9ed8\u8ba4\u4e3aparent-first"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7c7b\u52a0\u8f7d\u6a21\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"high-availability"),(0,r.kt)("td",{parentName:"tr",align:null},"ZOOKEEPER"),(0,r.kt)("td",{parentName:"tr",align:null},"flink ha\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"high-availability.zookeeper.quorum"),(0,r.kt)("td",{parentName:"tr",align:null},"zookeeper\u5730\u5740\uff0c\u5f53ha\u9009\u62e9\u662fzookeeper\u65f6\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"high-availability.zookeeper.path.root"),(0,r.kt)("td",{parentName:"tr",align:null},"/flink110"),(0,r.kt)("td",{parentName:"tr",align:null},"ha\u8282\u70b9\u8def\u5f84"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"high-availability.storageDir"),(0,r.kt)("td",{parentName:"tr",align:null},"hdfs://ns1/dtInsight/flink110/ha"),(0,r.kt)("td",{parentName:"tr",align:null},"ha\u5143\u6570\u636e\u5b58\u50a8\u8def\u5f84"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jobmanager.archive.fs.dir"),(0,r.kt)("td",{parentName:"tr",align:null},"hdfs://ns1/dtInsight/flink110/completed-jobs\t\u4efb\u52a1\u7ed3\u675f\u540e\u4efb\u52a1\u4fe1\u606f\u5b58\u50a8\u8def\u5f84\t\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metrics.reporter.promgateway.class"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.flink.metrics.prometheus.PrometheusPushGatewayReporter"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6765\u63a8\u9001\u6307\u6807\u7c7b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metrics.reporter.promgateway.host"),(0,r.kt)("td",{parentName:"tr",align:null},"promgateway\u5730\u5740"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metrics.reporter.promgateway.port"),(0,r.kt)("td",{parentName:"tr",align:null},"9091"),(0,r.kt)("td",{parentName:"tr",align:null},"promgateway\u7aef\u53e3"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metrics.reporter.promgateway.deleteOnShutdown"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4efb\u52a1\u7ed3\u675f\u540e\u662f\u5426\u5220\u9664\u6307\u6807\t\u662f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metrics.reporter.promgateway.jobName"),(0,r.kt)("td",{parentName:"tr",align:null},"110job\t\u6307\u6807\u4efb\u52a1\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metrics.reporter.promgateway.randomJobNameSuffix"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5728\u4efb\u52a1\u540d\u4e0a\u6dfb\u52a0\u968f\u673a\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state.backend"),(0,r.kt)("td",{parentName:"tr",align:null},"RocksDB"),(0,r.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001\u540e\u7aef"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state.backend.incremental"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u589e\u91cf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state.checkpoints.dir"),(0,r.kt)("td",{parentName:"tr",align:null},"hdfs://ns1/dtInsight/flink110/checkpoints"),(0,r.kt)("td",{parentName:"tr",align:null},"checkpoint\u8def\u5f84\u5730\u5740"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state.checkpoints.num-retained"),(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"checkpoint\u4fdd\u5b58\u4e2a\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state.savepoints.dir"),(0,r.kt)("td",{parentName:"tr",align:null},"hdfs://ns1/dtInsight/flink110/savepoints"),(0,r.kt)("td",{parentName:"tr",align:null},"savepoint\u8def\u5f84"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yarn.application-attempts"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"\u91cd\u8bd5\u6b21\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yarn.application-attempt-failures-validity-interval"),(0,r.kt)("td",{parentName:"tr",align:null},"3600000"),(0,r.kt)("td",{parentName:"tr",align:null},"\u91cd\u8bd5\u7a97\u53e3\u65f6\u95f4\u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"akka.ask.timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"60 s"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"akka.tcp.timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"60 s"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,r.kt)("p",null,"\u66f4\u591a Flink \u53c2\u6570\u9879\u8be6\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.10/ops/config.html"},"\u5b98\u65b9\u6587\u6863")),(0,r.kt)("h4",{id:"spark"},"Spark"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Spark \u914d\u7f6e",src:n(9102).Z})),(0,r.kt)("h5",{id:"spark-\u53c2\u6570\u9879"},"Spark \u53c2\u6570\u9879"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.driver.extraJavaOptions"),(0,r.kt)("td",{parentName:"tr",align:null},"-Dfile.encoding=UTF-8"),(0,r.kt)("td",{parentName:"tr",align:null},"driver\u7684jvm\u53c2\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.executor.extraJavaOptions"),(0,r.kt)("td",{parentName:"tr",align:null},"-Dfile.encoding=UTF-8"),(0,r.kt)("td",{parentName:"tr",align:null},"executor\u7684jvm\u53c2\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.eventLog.compress"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u538b\u7f29\u65e5\u5fd7"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.eventLog.dir"),(0,r.kt)("td",{parentName:"tr",align:null},"hdfs://ns1/tmp/logs"),(0,r.kt)("td",{parentName:"tr",align:null},"spark\u65e5\u5fd7\u5b58\u653e\u8def\u5f84"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.eventLog.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u8bb0\u5f55 Spark \u65e5\u5fd7"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.executor.cores"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a\u6267\u884c\u7a0b\u5e8f\u4e0a\u4f7f\u7528\u7684\u5185\u6838\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.executor.heartbeatInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"10s"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a\u6267\u884c\u7a0b\u5e8f\u5bf9\u9a71\u52a8\u7a0b\u5e8f\u7684\u5fc3\u8df3\u4e4b\u95f4\u7684\u95f4\u9694"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.executor.instances"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u542f\u52a8\u6267\u884c\u7a0b\u5e8f\u8fdb\u7a0b\u7684\u5b9e\u4f8b\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.executor.memory"),(0,r.kt)("td",{parentName:"tr",align:null},"1g"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a\u6267\u884c\u7a0b\u5e8f\u8fdb\u7a0b\u4f7f\u7528\u7684\u5185\u5b58\u91cf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.network.timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"600s"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u7f51\u7edc\u4ea4\u4e92\u7684\u9ed8\u8ba4\u8d85\u65f6\u65f6\u957f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.rpc.askTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},"600s"),(0,r.kt)("td",{parentName:"tr",align:null},"RPC \u8bf7\u6c42\u64cd\u4f5c\u5728\u8d85\u65f6\u4e4b\u524d\u7b49\u5f85\u7684\u6301\u7eed\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.submit.deployMode"),(0,r.kt)("td",{parentName:"tr",align:null},"cluster"),(0,r.kt)("td",{parentName:"tr",align:null},"spark\u4efb\u52a1\u63d0\u4ea4\u6a21\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.yarn.appMasterEnv.PYSPARK_PYTHON"),(0,r.kt)("td",{parentName:"tr",align:null},"/data/anaconda3/bin/python3"),(0,r.kt)("td",{parentName:"tr",align:null},"python\u73af\u5883\u53d8\u91cf\u8def\u5f84"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.yarn.maxAppAttempts"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4ea4\u7533\u8bf7\u7684\u6700\u5927\u5c1d\u8bd5\u6b21\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")))),(0,r.kt)("p",null,"\u66f4\u591a Spark \u53c2\u6570\u9879\u8be6\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/2.1.3/configuration.html"},"\u5b98\u65b9\u6587\u6863")),(0,r.kt)("h5",{id:"\u81ea\u5b9a\u4e49\u53c2\u6570"},"\u81ea\u5b9a\u4e49\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sparkPythonExtLibPath"),(0,r.kt)("td",{parentName:"tr",align:null},"hdfs://ns1/dtInsight/spark240/pythons/pyspark.zip,hdfs://ns1/dtInsight/spark240/pythons/py4j-0.10.7-src.zip"),(0,r.kt)("td",{parentName:"tr",align:null},"pyspark.zip\u548cpy4j-0.10.7-src.zip\u8def\u5f84"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sparkSqlProxyPath"),(0,r.kt)("td",{parentName:"tr",align:null},"hdfs://ns1/dtInsight/spark240/client/spark-sql-proxy.jar"),(0,r.kt)("td",{parentName:"tr",align:null},"spark-sql-proxy.jar\u8def\u5f84\uff0c\u7528\u4e8e\u6267\u884cspark sql"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sparkYarnArchive"),(0,r.kt)("td",{parentName:"tr",align:null},"hdfs://ns1/dtInsight/spark240/jars"),(0,r.kt)("td",{parentName:"tr",align:null},"spark jars\u8def\u5f84"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"yarnAccepterTaskNumber"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u7684accepter\u4efb\u52a1\u6570\u91cf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")))))}o.isMDXComponent=!0},7245:function(t,a,n){a.Z=n.p+"assets/images/flink-77d2774d79baaf71f98475e97ba3cbb1.png"},5538:function(t,a,n){a.Z=n.p+"assets/images/hdfs-8bfac08e22ae57eab8ce9216f27f84d6.png"},7002:function(t,a,n){a.Z=n.p+"assets/images/sftp-fc63b84e020d6009eb3a7a2edb90c74f.png"},9102:function(t,a,n){a.Z=n.p+"assets/images/spark-0d6f730c3756c4f3c7192637233875f4.png"},5268:function(t,a,n){a.Z=n.p+"assets/images/yarn-5575d15854bbf9b2692d836e91640c23.png"}}]);