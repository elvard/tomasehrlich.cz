(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{135:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(145);n.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},139:function(e,n,t){var a;e.exports=(a=t(143))&&a.default||a},141:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return g}),t.d(n,"StaticQueryContext",function(){return h}),t.d(n,"StaticQuery",function(){return f});var a=t(0),r=t.n(a),i=t(8),o=t.n(i),c=t(138),u=t.n(c);t.d(n,"Link",function(){return u.a}),t.d(n,"withPrefix",function(){return c.withPrefix}),t.d(n,"navigate",function(){return c.navigate}),t.d(n,"push",function(){return c.push}),t.d(n,"replace",function(){return c.replace}),t.d(n,"navigateTo",function(){return c.navigateTo});var l=t(34);t.d(n,"waitForRouteChange",function(){return l.c});var s=t(139),m=t.n(s);t.d(n,"PageRenderer",function(){return m.a});var d=t(35);t.d(n,"parsePath",function(){return d.a});var h=r.a.createContext({}),f=function(e){return r.a.createElement(h.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},142:function(e){e.exports={data:{site:{siteMetadata:{title:"Tomáš Ehrlich"}}}}},143:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(8),o=t.n(i),c=t(47),u=t(1),l=function(e){var n=e.location,t=u.default.getResourcesForPathname(n.pathname);return r.a.createElement(c.a,{location:n,pageResources:t})};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=l},145:function(e,n,t){"use strict";var a=t(142),r=t(0),i=t.n(r),o=t(146),c=t.n(o),u=t(141),l=t(140),s=(t(50),t(150)),m=function(e){return r.createElement(s.a,Object.assign({icon:["fab","twitter"]},e))},d=function(e){return r.createElement(s.a,Object.assign({icon:["fab","github"]},e))},h=t(151),f=t.n(h),g=t(144),p=t(152);function b(){var e=f()(["\n  ",";\n\n  * {\n    box-sizing: inherit;\n  }\n  *:before {\n    box-sizing: inherit;\n  }\n  *:after {\n    box-sizing: inherit;\n  }\n  html,\n  body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    width: 100%;\n  }\n\n  html {\n    box-sizing: border-box;\n    overflow-y: scroll;\n    font-family: 'Helvetica Neue', 'Helvetica', sans-serif;\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n  }\n\n  body {\n    color: hsla(0, 0%, 0%, 0.8);\n    font-weight: normal;\n    word-wrap: break-word;\n    font-kerning: normal;\n    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';\n    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';\n    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';\n    font-feature-settings: 'kern', 'liga', 'clig', 'calt';\n  }\n\n  @media (max-width: ","),\n    (max-device-width: ",") {\n    html {\n      font-size: 112.5%/1.45em;\n      h1 {\n        font-size: 3.157rem;\n      }\n      h2 {\n        font-size: 2.369rem;\n      }\n      h3 {\n        font-size: 1.777rem;\n      }\n      h4 {\n        font-size: 1.333rem;\n      }\n      h5 {\n        font-size: 1rem;\n      }\n    }\n  }\n\n  @media (max-width: ","),\n    (max-device-width: ",") {\n    html {\n      font-size: 14px;\n      h1 {\n        font-size: 2.441rem;\n      }\n      h2 {\n        font-size: 1.953rem;\n      }\n      h3 {\n        font-size: 1.563rem;\n      }\n      h4 {\n        font-size: 1.25rem;\n      }\n      h5 {\n        font-size: 1rem;\n      }\n    }\n  }\n\n"]);return b=function(){return e},e}g.a.autoAddCss=!1,g.d.add(p.b,p.a);var w=Object(l.b)(b(),g.b.css(),function(e){return e.theme.breakpoint.m},function(e){return e.theme.breakpoint.m},function(e){return e.theme.breakpoint.s},function(e){return e.theme.breakpoint.s}),y=l.c.div.withConfig({displayName:"layout__Root"})(["margin:0 auto;max-width:960px;padding:0px 1.0875rem 1.45rem;padding-top:0;"]),v=l.c.nav.withConfig({displayName:"layout__Navigation"})(["line-height:4em;text-align:right;"]),x={twitter:"#1da1f2",github:"#333"},E=l.c.a.withConfig({displayName:"layout__SocialLink"})(["padding:0 5px;color:#999;:hover{color:",";}"],function(e){return x[e.theme]||"black"}),k={breakpoint:{s:"500px",m:"960px"}};n.a=function(e){var n=e.children;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"}),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})),i.a.createElement(l.a,{theme:k},i.a.createElement(w,null)),i.a.createElement(l.a,{theme:k},i.a.createElement(y,null,i.a.createElement(v,null,i.a.createElement(E,{theme:"twitter",href:"https://twitter.com/tomas_ehrlich"},i.a.createElement(m,{size:"lg"})),i.a.createElement(E,{theme:"github",href:"https://github.com/tricoder42/"},i.a.createElement(d,{size:"lg"}))),n)))},data:a})}}}]);
//# sourceMappingURL=component---src-pages-404-js-e469f456db05f985733f.js.map