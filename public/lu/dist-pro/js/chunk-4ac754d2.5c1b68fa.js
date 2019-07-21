(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ac754d2"],{"2aab":function(t,i,e){},"497f":function(t,i,e){
/*!
 * Viewer.js v1.3.3
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2019-04-06T14:06:28.301Z
 */
(function(i,e){t.exports=e()})(0,function(){"use strict";function t(i){return t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(i)}function i(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function e(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}var s={backdrop:!0,button:!0,navbar:!0,title:!0,toolbar:!0,className:"",container:"body",filter:null,fullscreen:!0,initialViewIndex:0,inline:!1,interval:5e3,keyboard:!0,loading:!0,loop:!0,minWidth:200,minHeight:100,movable:!0,zoomable:!0,rotatable:!0,scalable:!0,toggleOnDblclick:!0,tooltip:!0,transition:!0,zIndex:2015,zIndexInline:0,zoomRatio:.1,minZoomRatio:.01,maxZoomRatio:100,url:"src",ready:null,show:null,shown:null,hide:null,hidden:null,view:null,viewed:null,zoom:null,zoomed:null},o='<div class="viewer-container" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list"></ul></div></div><div class="viewer-tooltip"></div><div role="button" class="viewer-button" data-viewer-action="mix"></div><div class="viewer-player"></div></div>',a="undefined"!==typeof window,r=a?window:{},h=!!a&&"ontouchstart"in r.document.documentElement,l=!!a&&"PointerEvent"in r,c="viewer",u="move",d="switch",m="zoom",f="".concat(c,"-active"),g="".concat(c,"-close"),v="".concat(c,"-fade"),p="".concat(c,"-fixed"),w="".concat(c,"-fullscreen"),b="".concat(c,"-fullscreen-exit"),y="".concat(c,"-hide"),x="".concat(c,"-hide-md-down"),k="".concat(c,"-hide-sm-down"),z="".concat(c,"-hide-xs-down"),D="".concat(c,"-in"),T="".concat(c,"-invisible"),E="".concat(c,"-loading"),I="".concat(c,"-move"),S="".concat(c,"-open"),C="".concat(c,"-show"),L="".concat(c,"-transition"),N="click",M="dblclick",R="dragstart",Y="hidden",X="hide",q="keydown",F="load",O=h?"touchstart":"mousedown",W=h?"touchmove":"mousemove",A=h?"touchend touchcancel":"mouseup",P=l?"pointerdown":O,H=l?"pointermove":W,j=l?"pointerup pointercancel":A,V="ready",B="resize",K="show",U="shown",Z="transitionend",$="view",J="viewed",_="wheel",G="zoom",Q="zoomed",tt="".concat(c,"Action"),it=/\s\s*/,et=["zoom-in","zoom-out","one-to-one","reset","prev","play","next","rotate-left","rotate-right","flip-horizontal","flip-vertical"];function nt(t){return"string"===typeof t}var st=Number.isNaN||r.isNaN;function ot(t){return"number"===typeof t&&!st(t)}function at(t){return"undefined"===typeof t}function rt(i){return"object"===t(i)&&null!==i}var ht=Object.prototype.hasOwnProperty;function lt(t){if(!rt(t))return!1;try{var i=t.constructor,e=i.prototype;return i&&e&&ht.call(e,"isPrototypeOf")}catch(n){return!1}}function ct(t){return"function"===typeof t}function ut(t,i){if(t&&ct(i))if(Array.isArray(t)||ot(t.length)){var e,n=t.length;for(e=0;e<n;e+=1)if(!1===i.call(t,t[e],e,t))break}else rt(t)&&Object.keys(t).forEach(function(e){i.call(t,t[e],e,t)});return t}var dt=Object.assign||function(t){for(var i=arguments.length,e=new Array(i>1?i-1:0),n=1;n<i;n++)e[n-1]=arguments[n];return rt(t)&&e.length>0&&e.forEach(function(i){rt(i)&&Object.keys(i).forEach(function(e){t[e]=i[e]})}),t},mt=/^(?:width|height|left|top|marginLeft|marginTop)$/;function ft(t,i){var e=t.style;ut(i,function(t,i){mt.test(i)&&ot(t)&&(t+="px"),e[i]=t})}function gt(t,i){return t.classList?t.classList.contains(i):t.className.indexOf(i)>-1}function vt(t,i){if(i)if(ot(t.length))ut(t,function(t){vt(t,i)});else if(t.classList)t.classList.add(i);else{var e=t.className.trim();e?e.indexOf(i)<0&&(t.className="".concat(e," ").concat(i)):t.className=i}}function pt(t,i){i&&(ot(t.length)?ut(t,function(t){pt(t,i)}):t.classList?t.classList.remove(i):t.className.indexOf(i)>=0&&(t.className=t.className.replace(i,"")))}function wt(t,i,e){i&&(ot(t.length)?ut(t,function(t){wt(t,i,e)}):e?vt(t,i):pt(t,i))}var bt=/([a-z\d])([A-Z])/g;function yt(t){return t.replace(bt,"$1-$2").toLowerCase()}function xt(t,i){return rt(t[i])?t[i]:t.dataset?t.dataset[i]:t.getAttribute("data-".concat(yt(i)))}function kt(t,i,e){rt(e)?t[i]=e:t.dataset?t.dataset[i]=e:t.setAttribute("data-".concat(yt(i)),e)}var zt=function(){var t=!1;if(a){var i=!1,e=function(){},n=Object.defineProperty({},"once",{get:function(){return t=!0,i},set:function(t){i=t}});r.addEventListener("test",e,n),r.removeEventListener("test",e,n)}return t}();function Dt(t,i,e){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=e;i.trim().split(it).forEach(function(i){if(!zt){var o=t.listeners;o&&o[i]&&o[i][e]&&(s=o[i][e],delete o[i][e],0===Object.keys(o[i]).length&&delete o[i],0===Object.keys(o).length&&delete t.listeners)}t.removeEventListener(i,s,n)})}function Tt(t,i,e){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=e;i.trim().split(it).forEach(function(i){if(n.once&&!zt){var o=t.listeners,a=void 0===o?{}:o;s=function(){delete a[i][e],t.removeEventListener(i,s,n);for(var o=arguments.length,r=new Array(o),h=0;h<o;h++)r[h]=arguments[h];e.apply(t,r)},a[i]||(a[i]={}),a[i][e]&&t.removeEventListener(i,a[i][e],n),a[i][e]=s,t.listeners=a}t.addEventListener(i,s,n)})}function Et(t,i,e){var n;return ct(Event)&&ct(CustomEvent)?n=new CustomEvent(i,{detail:e,bubbles:!0,cancelable:!0}):(n=document.createEvent("CustomEvent"),n.initCustomEvent(i,!0,!0,e)),t.dispatchEvent(n)}function It(t){var i=t.getBoundingClientRect();return{left:i.left+(window.pageXOffset-document.documentElement.clientLeft),top:i.top+(window.pageYOffset-document.documentElement.clientTop)}}function St(t){var i=t.rotate,e=t.scaleX,n=t.scaleY,s=t.translateX,o=t.translateY,a=[];ot(s)&&0!==s&&a.push("translateX(".concat(s,"px)")),ot(o)&&0!==o&&a.push("translateY(".concat(o,"px)")),ot(i)&&0!==i&&a.push("rotate(".concat(i,"deg)")),ot(e)&&1!==e&&a.push("scaleX(".concat(e,")")),ot(n)&&1!==n&&a.push("scaleY(".concat(n,")"));var r=a.length?a.join(" "):"none";return{WebkitTransform:r,msTransform:r,transform:r}}function Ct(t){return nt(t)?t.replace(/^.*\//,"").replace(/[?&#].*$/,""):""}var Lt=r.navigator&&/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(r.navigator.userAgent);function Nt(t,i){var e=document.createElement("img");if(t.naturalWidth&&!Lt)return i(t.naturalWidth,t.naturalHeight),e;var n=document.body||document.documentElement;return e.onload=function(){i(e.width,e.height),Lt||n.removeChild(e)},e.src=t.src,Lt||(e.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",n.appendChild(e)),e}function Mt(t){switch(t){case 2:return z;case 3:return k;case 4:return x;default:return""}}function Rt(t){var i=dt({},t),e=[];return ut(t,function(t,n){delete i[n],ut(i,function(i){var n=Math.abs(t.startX-i.startX),s=Math.abs(t.startY-i.startY),o=Math.abs(t.endX-i.endX),a=Math.abs(t.endY-i.endY),r=Math.sqrt(n*n+s*s),h=Math.sqrt(o*o+a*a),l=(h-r)/r;e.push(l)})}),e.sort(function(t,i){return Math.abs(t)<Math.abs(i)}),e[0]}function Yt(t,i){var e=t.pageX,n=t.pageY,s={endX:e,endY:n};return i?s:dt({timeStamp:Date.now(),startX:e,startY:n},s)}function Xt(t){var i=0,e=0,n=0;return ut(t,function(t){var s=t.startX,o=t.startY;i+=s,e+=o,n+=1}),i/=n,e/=n,{pageX:i,pageY:e}}var qt={render:function(){this.initContainer(),this.initViewer(),this.initList(),this.renderViewer()},initContainer:function(){this.containerData={width:window.innerWidth,height:window.innerHeight}},initViewer:function(){var t,i=this.options,e=this.parent;i.inline&&(t={width:Math.max(e.offsetWidth,i.minWidth),height:Math.max(e.offsetHeight,i.minHeight)},this.parentData=t),!this.fulled&&t||(t=this.containerData),this.viewerData=dt({},t)},renderViewer:function(){this.options.inline&&!this.fulled&&ft(this.viewer,this.viewerData)},initList:function(){var t=this,i=this.element,e=this.options,n=this.list,s=[];ut(this.images,function(i,n){var o=i.src,a=i.alt||Ct(o),r=e.url;nt(r)?r=i.getAttribute(r):ct(r)&&(r=r.call(t,i)),(o||r)&&s.push("<li><img"+' src="'.concat(o||r,'"')+' role="button" data-viewer-action="view"'+' data-index="'.concat(n,'"')+' data-original-url="'.concat(r||o,'"')+' alt="'.concat(a,'"')+"></li>")}),n.innerHTML=s.join(""),this.items=n.getElementsByTagName("li"),ut(this.items,function(i){var n=i.firstElementChild;kt(n,"filled",!0),e.loading&&vt(i,E),Tt(n,F,function(n){e.loading&&pt(i,E),t.loadImage(n)},{once:!0})}),e.transition&&Tt(i,J,function(){vt(n,L)},{once:!0})},renderList:function(t){var i=t||this.index,e=this.items[i].offsetWidth||30,n=e+1;ft(this.list,dt({width:n*this.length},St({translateX:(this.viewerData.width-e)/2-n*i})))},resetList:function(){var t=this.list;t.innerHTML="",pt(t,L),ft(t,St({translateX:0}))},initImage:function(t){var i,e=this,n=this.options,s=this.image,o=this.viewerData,a=this.footer.offsetHeight,r=o.width,h=Math.max(o.height-a,a),l=this.imageData||{};this.imageInitializing={abort:function(){i.onload=null}},i=Nt(s,function(i,s){var o=i/s,a=r,c=h;e.imageInitializing=!1,h*o>r?c=r/o:a=h*o,a=Math.min(.9*a,i),c=Math.min(.9*c,s);var u={naturalWidth:i,naturalHeight:s,aspectRatio:o,ratio:a/i,width:a,height:c,left:(r-a)/2,top:(h-c)/2},d=dt({},u);n.rotatable&&(u.rotate=l.rotate||0,d.rotate=0),n.scalable&&(u.scaleX=l.scaleX||1,u.scaleY=l.scaleY||1,d.scaleX=1,d.scaleY=1),e.imageData=u,e.initialImageData=d,t&&t()})},renderImage:function(t){var i=this,e=this.image,n=this.imageData;if(ft(e,dt({width:n.width,height:n.height,marginLeft:n.left,marginTop:n.top},St(n))),t)if((this.viewing||this.zooming)&&this.options.transition){var s=function(){i.imageRendering=!1,t()};this.imageRendering={abort:function(){Dt(e,Z,s)}},Tt(e,Z,s,{once:!0})}else t()},resetImage:function(){if(this.viewing||this.viewed){var t=this.image;this.viewing&&this.viewing.abort(),t.parentNode.removeChild(t),this.image=null}}},Ft={bind:function(){var t=this.options,i=this.viewer,e=this.canvas,n=this.element.ownerDocument;Tt(i,N,this.onClick=this.click.bind(this)),Tt(i,_,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),Tt(i,R,this.onDragStart=this.dragstart.bind(this)),Tt(e,P,this.onPointerDown=this.pointerdown.bind(this)),Tt(n,H,this.onPointerMove=this.pointermove.bind(this)),Tt(n,j,this.onPointerUp=this.pointerup.bind(this)),Tt(n,q,this.onKeyDown=this.keydown.bind(this)),Tt(window,B,this.onResize=this.resize.bind(this)),t.toggleOnDblclick&&Tt(e,M,this.onDblclick=this.dblclick.bind(this))},unbind:function(){var t=this.options,i=this.viewer,e=this.canvas,n=this.element.ownerDocument;Dt(i,N,this.onClick),Dt(i,_,this.onWheel,{passive:!1,capture:!0}),Dt(i,R,this.onDragStart),Dt(e,P,this.onPointerDown),Dt(n,H,this.onPointerMove),Dt(n,j,this.onPointerUp),Dt(n,q,this.onKeyDown),Dt(window,B,this.onResize),t.toggleOnDblclick&&Dt(e,M,this.onDblclick)}},Ot={click:function(t){var i=t.target,e=this.options,n=this.imageData,s=xt(i,tt);switch(h&&t.isTrusted&&i===this.canvas&&clearTimeout(this.clickCanvasTimeout),s){case"mix":this.played?this.stop():e.inline?this.fulled?this.exit():this.full():this.hide();break;case"hide":this.hide();break;case"view":this.view(xt(i,"index"));break;case"zoom-in":this.zoom(.1,!0);break;case"zoom-out":this.zoom(-.1,!0);break;case"one-to-one":this.toggle();break;case"reset":this.reset();break;case"prev":this.prev(e.loop);break;case"play":this.play(e.fullscreen);break;case"next":this.next(e.loop);break;case"rotate-left":this.rotate(-90);break;case"rotate-right":this.rotate(90);break;case"flip-horizontal":this.scaleX(-n.scaleX||-1);break;case"flip-vertical":this.scaleY(-n.scaleY||-1);break;default:this.played&&this.stop()}},dblclick:function(t){t.preventDefault(),this.viewed&&t.target===this.image&&(h&&t.isTrusted&&clearTimeout(this.doubleClickImageTimeout),this.toggle())},load:function(){var t=this;this.timeout&&(clearTimeout(this.timeout),this.timeout=!1);var i=this.element,e=this.options,n=this.image,s=this.index,o=this.viewerData;pt(n,T),e.loading&&pt(this.canvas,E),n.style.cssText="height:0;"+"margin-left:".concat(o.width/2,"px;")+"margin-top:".concat(o.height/2,"px;")+"max-width:none!important;position:absolute;width:0;",this.initImage(function(){wt(n,I,e.movable),wt(n,L,e.transition),t.renderImage(function(){t.viewed=!0,t.viewing=!1,ct(e.viewed)&&Tt(i,J,e.viewed,{once:!0}),Et(i,J,{originalImage:t.images[s],index:s,image:n})})})},loadImage:function(t){var i=t.target,e=i.parentNode,n=e.offsetWidth||30,s=e.offsetHeight||50,o=!!xt(i,"filled");Nt(i,function(t,e){var a=t/e,r=n,h=s;s*a>n?o?r=s*a:h=n/a:o?h=n/a:r=s*a,ft(i,dt({width:r,height:h},St({translateX:(n-r)/2,translateY:(s-h)/2})))})},keydown:function(t){var i=this.options;if(this.fulled&&i.keyboard)switch(t.keyCode||t.which||t.charCode){case 27:this.played?this.stop():i.inline?this.fulled&&this.exit():this.hide();break;case 32:this.played&&this.stop();break;case 37:this.prev(i.loop);break;case 38:t.preventDefault(),this.zoom(i.zoomRatio,!0);break;case 39:this.next(i.loop);break;case 40:t.preventDefault(),this.zoom(-i.zoomRatio,!0);break;case 48:case 49:t.ctrlKey&&(t.preventDefault(),this.toggle());break;default:}},dragstart:function(t){"img"===t.target.tagName.toLowerCase()&&t.preventDefault()},pointerdown:function(t){var i=this.options,e=this.pointers,n=t.buttons,s=t.button;if(!(!this.viewed||this.showing||this.viewing||this.hiding||ot(n)&&1!==n||ot(s)&&0!==s||t.ctrlKey)){t.preventDefault(),t.changedTouches?ut(t.changedTouches,function(t){e[t.identifier]=Yt(t)}):e[t.pointerId||0]=Yt(t);var o=!!i.movable&&u;Object.keys(e).length>1?o=m:"touch"!==t.pointerType&&"touchstart"!==t.type||!this.isSwitchable()||(o=d),!i.transition||o!==u&&o!==m||pt(this.image,L),this.action=o}},pointermove:function(t){var i=this.pointers,e=this.action;this.viewed&&e&&(t.preventDefault(),t.changedTouches?ut(t.changedTouches,function(t){dt(i[t.identifier]||{},Yt(t,!0))}):dt(i[t.pointerId||0]||{},Yt(t,!0)),this.change(t))},pointerup:function(t){var i,e=this,n=this.options,s=this.action,o=this.pointers;t.changedTouches?ut(t.changedTouches,function(t){i=o[t.identifier],delete o[t.identifier]}):(i=o[t.pointerId||0],delete o[t.pointerId||0]),s&&(t.preventDefault(),!n.transition||s!==u&&s!==m||vt(this.image,L),this.action=!1,h&&s!==m&&i&&Date.now()-i.timeStamp<500&&(clearTimeout(this.clickCanvasTimeout),clearTimeout(this.doubleClickImageTimeout),n.toggleOnDblclick&&this.viewed&&t.target===this.image?this.imageClicked?(this.imageClicked=!1,this.doubleClickImageTimeout=setTimeout(function(){Et(e.image,M)},50)):(this.imageClicked=!0,this.doubleClickImageTimeout=setTimeout(function(){e.imageClicked=!1},500)):(this.imageClicked=!1,n.backdrop&&"static"!==n.backdrop&&t.target===this.canvas&&(this.clickCanvasTimeout=setTimeout(function(){Et(e.canvas,N)},50)))))},resize:function(){var t=this;if(this.isShown&&!this.hiding&&(this.initContainer(),this.initViewer(),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage()}),this.played)){if(this.options.fullscreen&&this.fulled&&!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement))return void this.stop();ut(this.player.getElementsByTagName("img"),function(i){Tt(i,F,t.loadImage.bind(t),{once:!0}),Et(i,F)})}},wheel:function(t){var i=this;if(this.viewed&&(t.preventDefault(),!this.wheeling)){this.wheeling=!0,setTimeout(function(){i.wheeling=!1},50);var e=Number(this.options.zoomRatio)||.1,n=1;t.deltaY?n=t.deltaY>0?1:-1:t.wheelDelta?n=-t.wheelDelta/120:t.detail&&(n=t.detail>0?1:-1),this.zoom(-n*e,!0,t)}}},Wt={show:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.element,e=this.options;if(e.inline||this.showing||this.isShown||this.showing)return this;if(!this.ready)return this.build(),this.ready&&this.show(t),this;if(ct(e.show)&&Tt(i,K,e.show,{once:!0}),!1===Et(i,K)||!this.ready)return this;this.hiding&&this.transitioning.abort(),this.showing=!0,this.open();var n=this.viewer;if(pt(n,y),e.transition&&!t){var s=this.shown.bind(this);this.transitioning={abort:function(){Dt(n,Z,s),pt(n,D)}},vt(n,L),n.offsetWidth,Tt(n,Z,s,{once:!0}),vt(n,D)}else vt(n,D),this.shown();return this},hide:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.element,e=this.options;if(e.inline||this.hiding||!this.isShown&&!this.showing)return this;if(ct(e.hide)&&Tt(i,X,e.hide,{once:!0}),!1===Et(i,X))return this;this.showing&&this.transitioning.abort(),this.hiding=!0,this.played?this.stop():this.viewing&&this.viewing.abort();var n=this.viewer;if(e.transition&&!t){var s=this.hidden.bind(this),o=function(){Tt(n,Z,s,{once:!0}),pt(n,D)};this.transitioning={abort:function(){this.viewed?Dt(this.image,Z,o):Dt(n,Z,s)}},this.viewed&&gt(this.image,L)?(Tt(this.image,Z,o,{once:!0}),this.zoomTo(0,!1,!1,!0)):o()}else pt(n,D),this.hidden();return this},view:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.initialViewIndex;if(i=Number(i)||0,!this.isShown)return this.index=i,this.show();if(this.hiding||this.played||i<0||i>=this.length||this.viewed&&i===this.index)return this;this.viewing&&this.viewing.abort();var e=this.element,n=this.options,s=this.title,o=this.canvas,a=this.items[i],r=a.querySelector("img"),h=xt(r,"originalUrl"),l=r.getAttribute("alt"),c=document.createElement("img");if(c.src=h,c.alt=l,ct(n.view)&&Tt(e,$,n.view,{once:!0}),!1===Et(e,$,{originalImage:this.images[i],index:i,image:c})||!this.isShown||this.hiding||this.played)return this;this.image=c,pt(this.items[this.index],f),vt(a,f),this.viewed=!1,this.index=i,this.imageData={},vt(c,T),n.loading&&vt(o,E),o.innerHTML="",o.appendChild(c),this.renderList(),s.innerHTML="";var u,d=function(){var i=t.imageData,e=Array.isArray(n.title)?n.title[1]:n.title;s.innerHTML=ct(e)?e.call(t,c,i):"".concat(l," (").concat(i.naturalWidth," × ").concat(i.naturalHeight,")")};return Tt(e,J,d,{once:!0}),this.viewing={abort:function(){Dt(e,J,d),c.complete?this.imageRendering?this.imageRendering.abort():this.imageInitializing&&this.imageInitializing.abort():(c.src="",Dt(c,F,u),this.timeout&&clearTimeout(this.timeout))}},c.complete?this.load():(Tt(c,F,u=this.load.bind(this),{once:!0}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){pt(c,T),t.timeout=!1},1e3)),this},prev:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.index-1;return i<0&&(i=t?this.length-1:0),this.view(i),this},next:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.length-1,e=this.index+1;return e>i&&(e=t?0:i),this.view(e),this},move:function(t,i){var e=this.imageData;return this.moveTo(at(t)?t:e.left+Number(t),at(i)?i:e.top+Number(i)),this},moveTo:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,e=this.imageData;if(t=Number(t),i=Number(i),this.viewed&&!this.played&&this.options.movable){var n=!1;ot(t)&&(e.left=t,n=!0),ot(i)&&(e.top=i,n=!0),n&&this.renderImage()}return this},zoom:function(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=this.imageData;return t=Number(t),t=t<0?1/(1-t):1+t,this.zoomTo(n.width*t/n.naturalWidth,i,e),this},zoomTo:function(t){var i=this,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=this.element,a=this.options,r=this.pointers,h=this.imageData,l=h.width,c=h.height,u=h.left,d=h.top,m=h.naturalWidth,f=h.naturalHeight;if(t=Math.max(0,t),ot(t)&&this.viewed&&!this.played&&(s||a.zoomable)){if(!s){var g=Math.max(.01,a.minZoomRatio),v=Math.min(100,a.maxZoomRatio);t=Math.min(Math.max(t,g),v)}n&&t>.95&&t<1.05&&(t=1);var p=m*t,w=f*t,b=p-l,y=w-c,x=l/m;if(ct(a.zoom)&&Tt(o,G,a.zoom,{once:!0}),!1===Et(o,G,{ratio:t,oldRatio:x,originalEvent:n}))return this;if(this.zooming=!0,n){var k=It(this.viewer),z=r&&Object.keys(r).length?Xt(r):{pageX:n.pageX,pageY:n.pageY};h.left-=b*((z.pageX-k.left-u)/l),h.top-=y*((z.pageY-k.top-d)/c)}else h.left-=b/2,h.top-=y/2;h.width=p,h.height=w,h.ratio=t,this.renderImage(function(){i.zooming=!1,ct(a.zoomed)&&Tt(o,Q,a.zoomed,{once:!0}),Et(o,Q,{ratio:t,oldRatio:x,originalEvent:n})}),e&&this.tooltip()}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t)),this},rotateTo:function(t){var i=this.imageData;return t=Number(t),ot(t)&&this.viewed&&!this.played&&this.options.rotatable&&(i.rotate=t,this.renderImage()),this},scaleX:function(t){return this.scale(t,this.imageData.scaleY),this},scaleY:function(t){return this.scale(this.imageData.scaleX,t),this},scale:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,e=this.imageData;if(t=Number(t),i=Number(i),this.viewed&&!this.played&&this.options.scalable){var n=!1;ot(t)&&(e.scaleX=t,n=!0),ot(i)&&(e.scaleY=i,n=!0),n&&this.renderImage()}return this},play:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.isShown||this.played)return this;var e=this.options,n=this.player,s=this.loadImage.bind(this),o=[],a=0,r=0;if(this.played=!0,this.onLoadWhenPlay=s,i&&this.requestFullscreen(),vt(n,C),ut(this.items,function(t,i){var h=t.querySelector("img"),l=document.createElement("img");l.src=xt(h,"originalUrl"),l.alt=h.getAttribute("alt"),a+=1,vt(l,v),wt(l,L,e.transition),gt(t,f)&&(vt(l,D),r=i),o.push(l),Tt(l,F,s,{once:!0}),n.appendChild(l)}),ot(e.interval)&&e.interval>0){var h=function i(){t.playing=setTimeout(function(){pt(o[r],D),r+=1,r=r<a?r:0,vt(o[r],D),i()},e.interval)};a>1&&h()}return this},stop:function(){var t=this;if(!this.played)return this;var i=this.player;return this.played=!1,clearTimeout(this.playing),ut(i.getElementsByTagName("img"),function(i){Dt(i,F,t.onLoadWhenPlay)}),pt(i,C),i.innerHTML="",this.exitFullscreen(),this},full:function(){var t=this,i=this.options,e=this.viewer,n=this.image,s=this.list;return!this.isShown||this.played||this.fulled||!i.inline?this:(this.fulled=!0,this.open(),vt(this.button,b),i.transition&&(pt(s,L),this.viewed&&pt(n,L)),vt(e,p),e.setAttribute("style",""),ft(e,{zIndex:i.zIndex}),this.initContainer(),this.viewerData=dt({},this.containerData),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage(function(){i.transition&&setTimeout(function(){vt(n,L),vt(s,L)},0)})}),this)},exit:function(){var t=this,i=this.options,e=this.viewer,n=this.image,s=this.list;return this.isShown&&!this.played&&this.fulled&&i.inline?(this.fulled=!1,this.close(),pt(this.button,b),i.transition&&(pt(s,L),this.viewed&&pt(n,L)),pt(e,p),ft(e,{zIndex:i.zIndexInline}),this.viewerData=dt({},this.parentData),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage(function(){i.transition&&setTimeout(function(){vt(n,L),vt(s,L)},0)})}),this):this},tooltip:function(){var t=this,i=this.options,e=this.tooltipBox,n=this.imageData;return this.viewed&&!this.played&&i.tooltip?(e.textContent="".concat(Math.round(100*n.ratio),"%"),this.tooltipping?clearTimeout(this.tooltipping):i.transition?(this.fading&&Et(e,Z),vt(e,C),vt(e,v),vt(e,L),e.offsetWidth,vt(e,D)):vt(e,C),this.tooltipping=setTimeout(function(){i.transition?(Tt(e,Z,function(){pt(e,C),pt(e,v),pt(e,L),t.fading=!1},{once:!0}),pt(e,D),t.fading=!0):pt(e,C),t.tooltipping=!1},1e3),this):this},toggle:function(){return 1===this.imageData.ratio?this.zoomTo(this.initialImageData.ratio,!0):this.zoomTo(1,!0),this},reset:function(){return this.viewed&&!this.played&&(this.imageData=dt({},this.initialImageData),this.renderImage()),this},update:function(){var t=this.element,i=this.options,e=this.isImg;if(e&&!t.parentNode)return this.destroy();var n=[];if(ut(e?[t]:t.querySelectorAll("img"),function(t){i.filter?i.filter(t)&&n.push(t):n.push(t)}),!n.length)return this;if(this.images=n,this.length=n.length,this.ready){var s=[];if(ut(this.items,function(t,i){var e=t.querySelector("img"),o=n[i];o?o.src!==e.src&&s.push(i):s.push(i)}),ft(this.list,{width:"auto"}),this.initList(),this.isShown)if(this.length){if(this.viewed){var o=s.indexOf(this.index);o>=0?(this.viewed=!1,this.view(Math.max(this.index-(o+1),0))):vt(this.items[this.index],f)}}else this.image=null,this.viewed=!1,this.index=0,this.imageData={},this.canvas.innerHTML="",this.title.innerHTML=""}else this.build();return this},destroy:function(){var t=this.element,i=this.options;return t[c]?(this.destroyed=!0,this.ready?(this.played&&this.stop(),i.inline?(this.fulled&&this.exit(),this.unbind()):this.isShown?(this.viewing&&(this.imageRendering?this.imageRendering.abort():this.imageInitializing&&this.imageInitializing.abort()),this.hiding&&this.transitioning.abort(),this.hidden()):this.showing&&(this.transitioning.abort(),this.hidden()),this.ready=!1,this.viewer.parentNode.removeChild(this.viewer)):i.inline&&(this.delaying?this.delaying.abort():this.initializing&&this.initializing.abort()),i.inline||Dt(t,N,this.onStart),t[c]=void 0,this):this}},At={open:function(){var t=this.body;vt(t,S),t.style.paddingRight="".concat(this.scrollbarWidth+(parseFloat(this.initialBodyPaddingRight)||0),"px")},close:function(){var t=this.body;pt(t,S),t.style.paddingRight=this.initialBodyPaddingRight},shown:function(){var t=this.element,i=this.options;this.fulled=!0,this.isShown=!0,this.render(),this.bind(),this.showing=!1,ct(i.shown)&&Tt(t,U,i.shown,{once:!0}),!1!==Et(t,U)&&this.ready&&this.isShown&&!this.hiding&&this.view(this.index)},hidden:function(){var t=this.element,i=this.options;this.fulled=!1,this.viewed=!1,this.isShown=!1,this.close(),this.unbind(),vt(this.viewer,y),this.resetList(),this.resetImage(),this.hiding=!1,this.destroyed||(ct(i.hidden)&&Tt(t,Y,i.hidden,{once:!0}),Et(t,Y))},requestFullscreen:function(){var t=this.element.ownerDocument;if(this.fulled&&!(t.fullscreenElement||t.webkitFullscreenElement||t.mozFullScreenElement||t.msFullscreenElement)){var i=t.documentElement;i.requestFullscreen?i.requestFullscreen():i.webkitRequestFullscreen?i.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):i.mozRequestFullScreen?i.mozRequestFullScreen():i.msRequestFullscreen&&i.msRequestFullscreen()}},exitFullscreen:function(){var t=this.element.ownerDocument;this.fulled&&(t.fullscreenElement||t.webkitFullscreenElement||t.mozFullScreenElement||t.msFullscreenElement)&&(t.exitFullscreen?t.exitFullscreen():t.webkitExitFullscreen?t.webkitExitFullscreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.msExitFullscreen&&t.msExitFullscreen())},change:function(t){var i=this.options,e=this.pointers,n=e[Object.keys(e)[0]],s=n.endX-n.startX,o=n.endY-n.startY;switch(this.action){case u:this.move(s,o);break;case m:this.zoom(Rt(e),!1,t);break;case d:this.action="switched";var a=Math.abs(s);a>1&&a>Math.abs(o)&&(this.pointers={},s>1?this.prev(i.loop):s<-1&&this.next(i.loop));break;default:}ut(e,function(t){t.startX=t.endX,t.startY=t.endY})},isSwitchable:function(){var t=this.imageData,i=this.viewerData;return this.length>1&&t.left>=0&&t.top>=0&&t.width<=i.width&&t.height<=i.height}},Pt=r.Viewer,Ht=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(i(this,t),!e||1!==e.nodeType)throw new Error("The first argument is required and must be an element.");this.element=e,this.options=dt({},s,lt(n)&&n),this.action=!1,this.fading=!1,this.fulled=!1,this.hiding=!1,this.imageClicked=!1,this.imageData={},this.index=this.options.initialViewIndex,this.isImg=!1,this.isShown=!1,this.length=0,this.played=!1,this.playing=!1,this.pointers={},this.ready=!1,this.showing=!1,this.timeout=!1,this.tooltipping=!1,this.viewed=!1,this.viewing=!1,this.wheeling=!1,this.zooming=!1,this.init()}return n(t,[{key:"init",value:function(){var t=this,i=this.element,e=this.options;if(!i[c]){i[c]=this;var n="img"===i.tagName.toLowerCase(),s=[];ut(n?[i]:i.querySelectorAll("img"),function(i){ct(e.filter)?e.filter.call(t,i)&&s.push(i):s.push(i)}),this.isImg=n,this.length=s.length,this.images=s;var o=i.ownerDocument,a=o.body||o.documentElement;if(this.body=a,this.scrollbarWidth=window.innerWidth-o.documentElement.clientWidth,this.initialBodyPaddingRight=window.getComputedStyle(a).paddingRight,at(document.createElement(c).style.transition)&&(e.transition=!1),e.inline){var r=0,h=function(){var i;(r+=1,r===t.length)&&(t.initializing=!1,t.delaying={abort:function(){clearTimeout(i)}},i=setTimeout(function(){t.delaying=!1,t.build()},0))};this.initializing={abort:function(){ut(s,function(t){t.complete||Dt(t,F,h)})}},ut(s,function(t){t.complete?h():Tt(t,F,h,{once:!0})})}else Tt(i,N,this.onStart=function(i){var n=i.target;"img"!==n.tagName.toLowerCase()||ct(e.filter)&&!e.filter.call(t,n)||t.view(t.images.indexOf(n))})}}},{key:"build",value:function(){if(!this.ready){var t=this.element,i=this.options,e=t.parentNode,n=document.createElement("div");n.innerHTML=o;var s=n.querySelector(".".concat(c,"-container")),a=s.querySelector(".".concat(c,"-title")),r=s.querySelector(".".concat(c,"-toolbar")),h=s.querySelector(".".concat(c,"-navbar")),l=s.querySelector(".".concat(c,"-button")),u=s.querySelector(".".concat(c,"-canvas"));if(this.parent=e,this.viewer=s,this.title=a,this.toolbar=r,this.navbar=h,this.button=l,this.canvas=u,this.footer=s.querySelector(".".concat(c,"-footer")),this.tooltipBox=s.querySelector(".".concat(c,"-tooltip")),this.player=s.querySelector(".".concat(c,"-player")),this.list=s.querySelector(".".concat(c,"-list")),vt(a,i.title?Mt(Array.isArray(i.title)?i.title[0]:i.title):y),vt(h,i.navbar?Mt(i.navbar):y),wt(l,y,!i.button),i.backdrop&&(vt(s,"".concat(c,"-backdrop")),i.inline||"static"===i.backdrop||kt(u,tt,"hide")),nt(i.className)&&i.className&&i.className.split(it).forEach(function(t){vt(s,t)}),i.toolbar){var d=document.createElement("ul"),m=lt(i.toolbar),f=et.slice(0,3),b=et.slice(7,9),x=et.slice(9);m||vt(r,Mt(i.toolbar)),ut(m?i.toolbar:et,function(t,e){var n=m&&lt(t),s=m?yt(e):t,o=n&&!at(t.show)?t.show:t;if(o&&(i.zoomable||-1===f.indexOf(s))&&(i.rotatable||-1===b.indexOf(s))&&(i.scalable||-1===x.indexOf(s))){var a=n&&!at(t.size)?t.size:t,r=n&&!at(t.click)?t.click:t,h=document.createElement("li");h.setAttribute("role","button"),vt(h,"".concat(c,"-").concat(s)),ct(r)||kt(h,tt,s),ot(o)&&vt(h,Mt(o)),-1!==["small","large"].indexOf(a)?vt(h,"".concat(c,"-").concat(a)):"play"===s&&vt(h,"".concat(c,"-large")),ct(r)&&Tt(h,N,r),d.appendChild(h)}}),r.appendChild(d)}else vt(r,y);if(!i.rotatable){var k=r.querySelectorAll('li[class*="rotate"]');vt(k,T),ut(k,function(t){r.appendChild(t)})}if(i.inline)vt(l,w),ft(s,{zIndex:i.zIndexInline}),"static"===window.getComputedStyle(e).position&&ft(e,{position:"relative"}),e.insertBefore(s,t.nextSibling);else{vt(l,g),vt(s,p),vt(s,v),vt(s,y),ft(s,{zIndex:i.zIndex});var z=i.container;nt(z)&&(z=t.ownerDocument.querySelector(z)),z||(z=this.body),z.appendChild(s)}i.inline&&(this.render(),this.bind(),this.isShown=!0),this.ready=!0,ct(i.ready)&&Tt(t,V,i.ready,{once:!0}),!1!==Et(t,V)?this.ready&&i.inline&&this.view(this.index):this.ready=!1}}}],[{key:"noConflict",value:function(){return window.Viewer=Pt,t}},{key:"setDefaults",value:function(t){dt(s,lt(t)&&t)}}]),t}();return dt(Ht.prototype,qt,Ft,Ot,Wt,At),Ht})}}]);