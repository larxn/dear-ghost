!function(){"use strict";var l=window.location,i=window.document,e=i.currentScript,r=e.getAttribute("data-api")||new URL(e.src).origin+"/api/event",o=e.getAttribute("data-domain");function s(e,t){e&&console.warn("Ignoring Event: "+e),t&&t.callback&&t.callback()}function t(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(l.hostname)||"file:"===l.protocol)return s("localhost",t);if((window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)&&!window.__plausible)return s(null,t);try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag",t)}catch(e){}var n={},a=(n.n=e,n.u=l.href,n.d=o,n.r=i.referrer||null,t&&t.meta&&(n.m=JSON.stringify(t.meta)),t&&t.props&&(n.p=t.props),n.h=1,new XMLHttpRequest);a.open("POST",r,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(n)),a.onreadystatechange=function(){4===a.readyState&&t&&t.callback&&t.callback({status:a.status})}}var n=window.plausible&&window.plausible.q||[];window.plausible=t;for(var a,c=0;c<n.length;c++)t.apply(this,n[c]);function u(){a=l.pathname,t("pageview")}window.addEventListener("hashchange",function(){u()}),"prerender"===i.visibilityState?i.addEventListener("visibilitychange",function(){a||"visible"!==i.visibilityState||u()}):u();var p=1;function d(e){var t,n,a,i,r;function o(){a||(a=!0,window.location=n.href)}"auxclick"===e.type&&e.button!==p||((t=function(e){for(;e&&(void 0===e.tagName||!(t=e)||!t.tagName||"a"!==t.tagName.toLowerCase()||!e.href);)e=e.parentNode;var t;return e}(e.target))&&t.href&&t.href.split("?")[0],(r=t)&&r.href&&r.host&&r.host!==l.host&&(r=e,e={name:"Outbound Link: Click",props:{url:(n=t).href}},a=!1,!function(e,t){if(!e.defaultPrevented)return t=!t.target||t.target.match(/^_(self|parent|top)$/i),e=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type,t&&e}(r,n)?(i={props:e.props},plausible(e.name,i)):(i={props:e.props,callback:o},plausible(e.name,i),setTimeout(o,5e3),r.preventDefault())))}i.addEventListener("click",d),i.addEventListener("auxclick",d)}();