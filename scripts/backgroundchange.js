


/*!
 * in-view 0.4.3 - Get notified when a DOM element enters or exits the viewport.
 * Copyright (c) 2016 Cam Wiegert <cam@camwiegert.com> - https://camwiegert.github.io/in-view
 * License: MIT
 */

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.inView=e():t.inView=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var i=n(3),o=r(i);t.exports=o["default"]},function(t,e){"use strict";function n(t,e){var n=t.getBoundingClientRect(),r=n.top,i=n.right,o=n.bottom,u=n.left,f={t:o,r:window.innerWidth-u,b:window.innerHeight-r,l:i};return f.t>e.top&&f.r>e.right&&f.b>e.bottom&&f.l>e.left}Object.defineProperty(e,"__esModule",{value:!0}),e.inViewport=n},function(t,e){function n(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}t.exports=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(9),o=r(i),u=n(4),f=r(u),c=n(1),s=function(){var t=100,e=["scroll","resize","load"],n={history:[]},r={},i=(0,o["default"])(function(){n.history.forEach(function(t){n[t].check()})},t);e.forEach(function(t){return addEventListener(t,i)}),window.MutationObserver&&new MutationObserver(i).observe(document.body,{attributes:!0,childList:!0,subtree:!0});var u=function(t){if("string"==typeof t){var e=[].slice.call(document.querySelectorAll(t));return n.history.indexOf(t)>-1?n[t].elements=e:(n[t]=(0,f["default"])(e,r),n.history.push(t)),n[t]}};return u.offset=function(t){if(void 0===t)return r;var e=function(t){return"number"==typeof t};return["top","right","bottom","left"].forEach(e(t)?function(e){return r[e]=t}:function(n){return e(t[n])?r[n]=t[n]:null}),r},u.is=function(t){return(0,c.inViewport)(t,r)},u.offset(0),u};e["default"]=s()},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(1),u=function(){function t(e,n){r(this,t),this.offset=n,this.current=[],this.elements=e,this.handlers={enter:[],exit:[]},this.singles={enter:[],exit:[]}}return i(t,[{key:"check",value:function(){var t=this;return this.elements.forEach(function(e){var n=(0,o.inViewport)(e,t.offset),r=t.current.indexOf(e),i=r>-1,u=n&&!i,f=!n&&i;u&&(t.current.push(e),t.emit("enter",e)),f&&(t.current.splice(r,1),t.emit("exit",e))}),this}},{key:"on",value:function(t,e){return this.handlers[t].push(e),this}},{key:"once",value:function(t,e){return this.singles[t].unshift(e),this}},{key:"emit",value:function(t,e){for(;this.singles[t].length;)this.singles[t].pop()(e);for(var n=this.handlers[t].length;--n>-1;)this.handlers[t][n](e);return this}}]),t}();e["default"]=function(t,e){return new u(t,e)}},function(t,e){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,function(){return this}())},function(t,e,n){var r=n(5),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();t.exports=o},function(t,e,n){function r(t,e,n){function r(e){var n=m,r=x;return m=x=void 0,E=e,w=t.apply(r,n)}function a(t){return E=t,j=setTimeout(h,e),_?r(t):w}function l(t){var n=t-O,r=t-E,i=e-n;return M?s(i,g-r):i}function d(t){var n=t-O,r=t-E;return void 0===O||n>=e||n<0||M&&r>=g}function h(){var t=o();return d(t)?p(t):void(j=setTimeout(h,l(t)))}function p(t){return j=void 0,T&&m?r(t):(m=x=void 0,w)}function v(){void 0!==j&&clearTimeout(j),E=0,m=O=x=j=void 0}function y(){return void 0===j?w:p(o())}function b(){var t=o(),n=d(t);if(m=arguments,x=this,O=t,n){if(void 0===j)return a(O);if(M)return j=setTimeout(h,e),r(O)}return void 0===j&&(j=setTimeout(h,e)),w}var m,x,g,w,j,O,E=0,_=!1,M=!1,T=!0;if("function"!=typeof t)throw new TypeError(f);return e=u(e)||0,i(n)&&(_=!!n.leading,M="maxWait"in n,g=M?c(u(n.maxWait)||0,e):g,T="trailing"in n?!!n.trailing:T),b.cancel=v,b.flush=y,b}var i=n(2),o=n(8),u=n(10),f="Expected a function",c=Math.max,s=Math.min;t.exports=r},function(t,e,n){var r=n(6),i=function(){return r.Date.now()};t.exports=i},function(t,e,n){function r(t,e,n){var r=!0,f=!0;if("function"!=typeof t)throw new TypeError(u);return o(n)&&(r="leading"in n?!!n.leading:r,f="trailing"in n?!!n.trailing:f),i(t,e,{leading:r,maxWait:e,trailing:f})}var i=n(7),o=n(2),u="Expected a function";t.exports=r},function(t,e){function n(t){return t}t.exports=n}])});


var $target = $('.bottom-section');
inView('.bg-set').on('enter', function(el){
  var color = $(el).attr('data-background-color');
  $target.css('background-color', color );
});


// $(document).ready(function(){
//             var winH = $(window).height();
//             console.log(winH);
//             var scroll_pos = 0;
//             $(document).scroll(function() {
//                 scroll_pos = $(this).scrollTop();
//                 if(scroll_pos > winH) {
//                     $("#logo").css('opacity', '1');
//                 } else {
//                     $("#logo").css('opacity', '0');
//                 }
//             });
//         });

        jQuery(function($) {

    var $logo = $('#logo');
    var winH = $( window ).height();   // Get the window height.
    console.log(winH);

    $( window ).on("scroll", function () {
        if ($(this).scrollTop() > winH ) {
            $logo.css('opacity', '1');
        } else {
            $logo.css('opacity', '0');
        }
    }).on("resize", function(){ // If the user resizes the window
       winH = $(this).height(); // you'll need the new height value
    });

});
