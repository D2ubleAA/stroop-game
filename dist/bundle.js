(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=2)})([function(a,b){'use strict';b.a={HUMAN_WIN_TEXT_PART_1:'\xA1Wow! \xA1Has conseguido ',HUMAN_WIN_TEXT_PART_2:' puntos! \xA1Qu\xE9 crack!',HUMAN_LOOSE_TEXT:'Vuelve a intentarlo...',ROBOT_WIN_TEXT_PART_1:'Ha conseguido ',ROBOT_WIN_TEXT_PART_2:'... Vaya abus\xF3n...',SECONDS_SUFFIX:' seg',DEFAULT_BORDER:'2px solid ',DEFAULT_BUTTON_TEXT:'- - -',COLORS:{BLACK:'black',GREENYELLOW:'greenyellow',ORANGE:'orange',RED:'red',TRANSPARENT_BLACK:'rgba(0, 0, 0, 0.4)',WHITE:'white'},ID:{NEW_BUTTON:'new-button',NEW_BUTTON_ROBOT:'new-button-robot',OPTION_BUTTON:'option-button',OPTION2_BUTTON:'option2-button',LEVEL_TEXT:'level-text',SCORE_TEXT:'score-text',TIME_TEXT:'time-text',CURRENT_WORD:'current-word',PROGRESS_BAR:'progress-bar',PROGRESS_FILL:'progress-fill'},EVENTS:{CLICK:'click',KEYDOWN:'keydown',KEYS:{LEFT:'37',RIGHT:'39'}},GAME:{INITIAL_SCORE:0,INITIAL_LEVEL:0,MAX_LEVEL:10,ROBOT_TIME_PER_MOVE:600,SCORE_PER_LEVEL:100,PROGRESS_BAR_THRESHOLDS:{ORANGE_ZONE:60,RED_ZONE:25},WITH_ROBOT:!0,WITHOUT_ROBOT:!1}}},function(a,b){'use strict';const c=['blue','red','green','brown','black','gray'],d=()=>c[e(0,c.length-1)];b.a=d;const e=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;b.c=e;b.d=(a)=>a%6e4/1e3;b.b=(a)=>{let b=a;for(;b===a;)b=d();return b}},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(0),e=c(1),f=c(8);c(3),window.onload=function(){const a={word:'',color:''},b={word:'',color:''},c={word:'',color:''};let g=d.a.GAME.INITIAL_LEVEL,h=d.a.GAME.INITIAL_SCORE,i=!1,j=null,k=document.getElementById(d.a.ID.NEW_BUTTON),l=document.getElementById(d.a.ID.NEW_BUTTON_ROBOT),m=document.getElementById(d.a.ID.OPTION_BUTTON),n=document.getElementById(d.a.ID.OPTION2_BUTTON),o=document.getElementById(d.a.ID.LEVEL_TEXT),p=document.getElementById(d.a.ID.SCORE_TEXT),q=document.getElementById(d.a.ID.CURRENT_WORD);const r=()=>{h=d.a.GAME.INITIAL_SCORE,g=d.a.GAME.INITIAL_LEVEL,clearTimeout(j),f.b(),x(),t()},s=()=>{i=d.a.GAME.WITH_ROBOT,r()},t=()=>{g++,g===d.a.GAME.MAX_LEVEL+1?(g--,w(),u()):(v(),w(),f.a(t),i&&z())},u=(a)=>{let b=d.a.HUMAN_LOOSE_TEXT,c=i?d.a.ROBOT_WIN_TEXT_PART_1:d.a.HUMAN_WIN_TEXT_PART_1,e=i?d.a.ROBOT_WIN_TEXT_PART_2:d.a.HUMAN_WIN_TEXT_PART_2;q.style.color=d.a.COLORS.BLACK,q.innerText=a?b:c+h+e,g=d.a.GAME.INITIAL_LEVEL,h=d.a.GAME.INITIAL_SCORE,i=d.a.GAME.WITHOUT_ROBOT,clearTimeout(j),y()},v=()=>{a.word=e.a(),a.color=e.b(a.word),e.c(0,1)?(b.word=a.word,c.word=a.color):(b.word=a.color,c.word=a.word),b.color=e.b(b.word),c.color=e.b(c.word)},w=()=>{p.innerText=h,o.innerText=g,m.innerText=b.word.toUpperCase(),m.style.color=b.color,m.style.border=d.a.DEFAULT_BORDER+b.color,n.innerText=c.word.toUpperCase(),n.style.color=c.color,n.style.border=d.a.DEFAULT_BORDER+c.color,q.innerText=a.word.toUpperCase(),q.style.color=a.color},x=()=>{m.disabled=!1,n.disabled=!1,m.style.backgroundColor=d.a.COLORS.WHITE,n.style.backgroundColor=d.a.COLORS.WHITE},y=()=>{m.disabled=!0,m.innerText=d.a.DEFAULT_BUTTON_TEXT,m.style.border=d.a.DEFAULT_BORDER+d.a.COLORS.BLACK,m.style.backgroundColor=d.a.COLORS.TRANSPARENT_BLACK,m.style.color=d.a.COLORS.BLACK,n.disabled=!0,n.innerText=d.a.DEFAULT_BUTTON_TEXT,n.style.border=d.a.DEFAULT_BORDER+d.a.COLORS.BLACK,n.style.backgroundColor=d.a.COLORS.TRANSPARENT_BLACK,n.style.color=d.a.COLORS.BLACK},z=()=>{let a=q.style.color;j=setTimeout(()=>{m.innerText.toLowerCase()===a?m.click():n.click()},d.a.GAME.ROBOT_TIME_PER_MOVE)},A=(a)=>{let b=0;a.target.innerText.toLowerCase()===q.style.color&&(b=f.b(),h+=b*d.a.GAME.SCORE_PER_LEVEL),a.isTrusted||a.target.focus(),setTimeout(()=>{a.target.blur()},400),f.b(),t()},B=(a)=>{let b=!m.disabled&&!n.disabled;a.keyCode==d.a.EVENTS.KEYS.LEFT?b?m.click():r():a.keyCode==d.a.EVENTS.KEYS.RIGHT&&(b?n.click():s())};(()=>{document.addEventListener(d.a.EVENTS.KEYDOWN,B),k.addEventListener(d.a.EVENTS.CLICK,r),l.addEventListener(d.a.EVENTS.CLICK,s),m.addEventListener(d.a.EVENTS.CLICK,A),n.addEventListener(d.a.EVENTS.CLICK,A),y()})()}},function(a,b,c){var d=c(4);'string'==typeof d&&(d=[[a.i,d,'']]);var e,f={hmr:!0};f.transform=e,f.insertInto=void 0;c(6)(d,f);d.locals&&(a.exports=d.locals),!1},function(a,b,c){b=a.exports=c(5)(!1),b.push([a.i,'DIV {\n  box-sizing: border-box; }\n\nBUTTON:focus {\n  outline: none;\n  cursor: pointer; }\n\nBUTTON:hover {\n  background-color: rgba(0, 0, 0, 0.4) !important;\n  cursor: pointer; }\n\n.option-button:focus,\n.option2-button:focus {\n  outline: 3px dashed black;\n  outline-offset: 15px; }\n\n.stroop-game {\n  height: 450px;\n  border: 2px solid black;\n  margin: 50px auto auto auto;\n  flex-direction: column; }\n  .stroop-game .stroop-game__title-box {\n    height: 15%;\n    padding: 0 20px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n    .stroop-game .stroop-game__title-box SPAN {\n      font-weight: bold; }\n    .stroop-game .stroop-game__title-box .title-box__time-label {\n      visibility: hidden; }\n  .stroop-game .stroop-game__display-box {\n    height: 85%; }\n    .stroop-game .stroop-game__display-box .display-box__progress-bar-box {\n      height: 20%;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n      .stroop-game .stroop-game__display-box .display-box__progress-bar-box .display-box__progress-bar {\n        border: 2px solid black;\n        width: 50%;\n        height: 22px;\n        display: flex;\n        justify-content: flex-start; }\n        .stroop-game .stroop-game__display-box .display-box__progress-bar-box .display-box__progress-bar .display-box__progress-bar-fill {\n          background-color: greenyellow;\n          height: 100%; }\n    .stroop-game .stroop-game__display-box .display-box__current-word {\n      height: 40%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-align: center;\n      padding: 10px; }\n      .stroop-game .stroop-game__display-box .display-box__current-word .current-word {\n        font-weight: bold;\n        font-size: 2em; }\n    .stroop-game .stroop-game__display-box .display-box__available-options {\n      height: 40%;\n      display: flex;\n      justify-content: space-around;\n      align-items: center; }\n      .stroop-game .stroop-game__display-box .display-box__available-options .option-button,\n      .stroop-game .stroop-game__display-box .display-box__available-options .option2-button {\n        width: 30%;\n        height: 60%;\n        font-weight: bold;\n        border: 2px solid black;\n        background-color: white;\n        border-radius: 5px;\n        color: black;\n        transition: background-color .3s; }\n        .stroop-game .stroop-game__display-box .display-box__available-options .option-button[disabled],\n        .stroop-game .stroop-game__display-box .display-box__available-options .option2-button[disabled] {\n          cursor: not-allowed;\n          background-color: rgba(0, 0, 0, 0.4); }\n\n.stroop-game__main-buttons-box {\n  height: 25%;\n  width: 75%;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-around; }\n  .stroop-game__main-buttons-box .new-button-robot,\n  .stroop-game__main-buttons-box .new-button {\n    font-weight: bold;\n    border: 2px solid black;\n    background-color: white;\n    border-radius: 5px;\n    padding: 7px 15px;\n    color: black;\n    transition: background-color .3s; }\n    .stroop-game__main-buttons-box .new-button-robot:hover:not(BUTTON[disabled]),\n    .stroop-game__main-buttons-box .new-button:hover:not(BUTTON[disabled]) {\n      cursor: pointer;\n      background-color: rgba(0, 0, 0, 0.4); }\n',''])},function(a){function b(a,b){var d=a[1]||'',e=a[3];if(!e)return d;if(b&&'function'==typeof btoa){var f=c(e),g=e.sources.map(function(a){return'/*# sourceURL='+e.sourceRoot+a+' */'});return[d].concat(g).concat([f]).join('\n')}return[d].join('\n')}function c(a){var b=btoa(unescape(encodeURIComponent(JSON.stringify(a))));return'/*# '+('sourceMappingURL=data:application/json;charset=utf-8;base64,'+b)+' */'}a.exports=function(a){var c=[];return c.toString=function(){return this.map(function(c){var d=b(c,a);return c[2]?'@media '+c[2]+'{'+d+'}':d}).join('')},c.i=function(a,b){'string'==typeof a&&(a=[[null,a,'']]);for(var d,e={},f=0;f<this.length;f++)d=this[f][0],'number'==typeof d&&(e[d]=!0);for(f=0;f<a.length;f++){var g=a[f];'number'==typeof g[0]&&e[g[0]]||(b&&!g[2]?g[2]=b:b&&(g[2]='('+g[2]+') and ('+b+')'),c.push(g))}},c}},function(a,b,c){function d(a,b){for(var c=0;c<a.length;c++){var d=a[c],e=o[d.id];if(e){e.refs++;for(var f=0;f<e.parts.length;f++)e.parts[f](d.parts[f]);for(;f<d.parts.length;f++)e.parts.push(k(d.parts[f],b))}else{for(var g=[],f=0;f<d.parts.length;f++)g.push(k(d.parts[f],b));o[d.id]={id:d.id,refs:1,parts:g}}}}function e(a,b){for(var c=[],d={},e=0;e<a.length;e++){var f=a[e],g=b.base?f[0]+b.base:f[0],h=f[1],i=f[2],j=f[3],k={css:h,media:i,sourceMap:j};d[g]?d[g].parts.push(k):c.push(d[g]={id:g,parts:[k]})}return c}function f(a,b){var c=r(a.insertInto);if(!c)throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insertInto\' parameter is invalid.');var d=u[u.length-1];if('top'===a.insertAt)d?d.nextSibling?c.insertBefore(b,d.nextSibling):c.appendChild(b):c.insertBefore(b,c.firstChild),u.push(b);else if('bottom'===a.insertAt)c.appendChild(b);else if('object'==typeof a.insertAt&&a.insertAt.before){var e=r(a.insertInto+' '+a.insertAt.before);c.insertBefore(b,e)}else throw new Error('[Style Loader]\n\n Invalid value for parameter \'insertAt\' (\'options.insertAt\') found.\n Must be \'top\', \'bottom\', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n')}function g(a){if(null===a.parentNode)return!1;a.parentNode.removeChild(a);var b=u.indexOf(a);0<=b&&u.splice(b,1)}function h(a){var b=document.createElement('style');return a.attrs.type='text/css',j(b,a.attrs),f(a,b),b}function i(a){var b=document.createElement('link');return a.attrs.type='text/css',a.attrs.rel='stylesheet',j(b,a.attrs),f(a,b),b}function j(a,b){Object.keys(b).forEach(function(c){a.setAttribute(c,b[c])})}function k(a,b){var c,d,e,f;if(b.transform&&a.css)if(f=b.transform(a.css),f)a.css=f;else return function(){};if(b.singleton){var j=t++;c=s||(s=h(b)),d=l.bind(null,c,j,!1),e=l.bind(null,c,j,!0)}else a.sourceMap&&'function'==typeof URL&&'function'==typeof URL.createObjectURL&&'function'==typeof URL.revokeObjectURL&&'function'==typeof Blob&&'function'==typeof btoa?(c=i(b),d=n.bind(null,c,b),e=function(){g(c),c.href&&URL.revokeObjectURL(c.href)}):(c=h(b),d=m.bind(null,c),e=function(){g(c)});return d(a),function(b){if(b){if(b.css===a.css&&b.media===a.media&&b.sourceMap===a.sourceMap)return;d(a=b)}else e()}}function l(a,b,c,d){var e=c?'':d.css;if(a.styleSheet)a.styleSheet.cssText=w(b,e);else{var f=document.createTextNode(e),g=a.childNodes;g[b]&&a.removeChild(g[b]),g.length?a.insertBefore(f,g[b]):a.appendChild(f)}}function m(a,b){var c=b.css,d=b.media;if(d&&a.setAttribute('media',d),a.styleSheet)a.styleSheet.cssText=c;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(c))}}function n(a,b,c){var d=c.css,e=c.sourceMap,f=b.convertToAbsoluteUrls===void 0&&e;(b.convertToAbsoluteUrls||f)&&(d=v(d)),e&&(d+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+' */');var g=new Blob([d],{type:'text/css'}),h=a.href;a.href=URL.createObjectURL(g),h&&URL.revokeObjectURL(h)}var o={},p=function(a){var b;return function(){return'undefined'==typeof b&&(b=a.apply(this,arguments)),b}}(function(){return window&&document&&document.all&&!window.atob}),q=function(a){return document.querySelector(a)},r=function(){var a={};return function(b){if('function'==typeof b)return b();if('undefined'==typeof a[b]){var c=q.call(this,b);if(window.HTMLIFrameElement&&c instanceof window.HTMLIFrameElement)try{c=c.contentDocument.head}catch(a){c=null}a[b]=c}return a[b]}}(),s=null,t=0,u=[],v=c(7);a.exports=function(a,b){if('undefined'!=typeof DEBUG&&DEBUG&&'object'!=typeof document)throw new Error('The style-loader cannot be used in a non-browser environment');b=b||{},b.attrs='object'==typeof b.attrs?b.attrs:{},b.singleton||'boolean'==typeof b.singleton||(b.singleton=p()),b.insertInto||(b.insertInto='head'),b.insertAt||(b.insertAt='bottom');var c=e(a,b);return d(c,b),function(a){for(var f=[],g=0;g<c.length;g++){var h=c[g],i=o[h.id];i.refs--,f.push(i)}if(a){var k=e(a,b);d(k,b)}for(var i,g=0;g<f.length;g++)if(i=f[g],0===i.refs){for(var l=0;l<i.parts.length;l++)i.parts[l]();delete o[i.id]}}};var w=function(){var a=[];return function(b,c){return a[b]=c,a.filter(Boolean).join('\n')}}()},function(a){a.exports=function(a){var b='undefined'!=typeof window&&window.location;if(!b)throw new Error('fixUrls requires window.location');if(!a||'string'!=typeof a)return a;var c=b.protocol+'//'+b.host,d=c+b.pathname.replace(/\/[^\/]*$/,'/'),e=a.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(a,b){var e=b.trim().replace(/^"(.*)"$/,function(a,b){return b}).replace(/^'(.*)'$/,function(a,b){return b});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(e))return a;var f;return f=0===e.indexOf('//')?e:0===e.indexOf('/')?c+e:d+e.replace(/^\.\//,''),'url('+JSON.stringify(f)+')'});return e}},function(a,b,c){'use strict';var d=c(0),e=c(1);const f=5;let g=0,h=0;b.a=(a)=>{let b=0,c=100,i=document.getElementById(d.a.ID.PROGRESS_FILL);i.style.width=c+'%',l(!0),h=setInterval(()=>{b+=250,g=f-e.d(b),c-=5,k(c),i.style.width=c+'%',e.d(b)===f&&(clearInterval(h),j(d.a.COLORS.GREENYELLOW),a())},250)};const i=()=>(j(d.a.COLORS.GREENYELLOW),l(!1),clearInterval(h),g);b.b=i;const j=(a)=>{let b=document.getElementById(d.a.ID.PROGRESS_FILL);b.style.backgroundColor=a},k=(a)=>{a<d.a.GAME.PROGRESS_BAR_THRESHOLDS.ORANGE_ZONE&&j(d.a.COLORS.ORANGE),a<d.a.GAME.PROGRESS_BAR_THRESHOLDS.RED_ZONE&&j(d.a.COLORS.RED)},l=(a)=>{let b=document.getElementById(d.a.ID.PROGRESS_BAR);b.style.visibility=a?'visible':'hidden'}}]);