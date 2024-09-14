/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.7'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector === '#' ? [] : selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.7'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d).prop(d, true)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d).prop(d, false)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target).closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
        e.preventDefault()
        // The target component still receive the focus
        if ($btn.is('input,button')) $btn.trigger('focus')
        else $btn.find('input:visible,button:visible').first().trigger('focus')
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.7'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.7'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.7'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.7'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.7'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.7'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.7'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/*!
 Chosen, a Select Box Enhancer for jQuery and Prototype
 by Patrick Filler for Harvest, http://getharvest.com

 Version 1.1.0
 Full source at https://github.com/harvesthq/chosen
 Copyright (c) 2011 Harvest http://getharvest.com

 MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
 This file is generated by `grunt build`, do not edit it by hand.
 */

(function() {
    var $, AbstractChosen, Chosen, SelectParser, _ref,
        __hasProp = {}.hasOwnProperty,
        __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

    SelectParser = (function() {
        function SelectParser() {
            this.options_index = 0;
            this.parsed = [];
        }

        SelectParser.prototype.add_node = function(child) {
            if (child.nodeName.toUpperCase() === "OPTGROUP") {
                return this.add_group(child);
            } else {
                return this.add_option(child);
            }
        };

        SelectParser.prototype.add_group = function(group) {
            var group_position, option, _i, _len, _ref, _results;
            group_position = this.parsed.length;
            this.parsed.push({
                array_index: group_position,
                group: true,
                label: this.escapeExpression(group.label),
                children: 0,
                disabled: group.disabled
            });
            _ref = group.childNodes;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                option = _ref[_i];
                _results.push(this.add_option(option, group_position, group.disabled));
            }
            return _results;
        };

        SelectParser.prototype.add_option = function(option, group_position, group_disabled) {
            if (option.nodeName.toUpperCase() === "OPTION") {
                if (option.text !== "") {
                    if (group_position != null) {
                        this.parsed[group_position].children += 1;
                    }
                    this.parsed.push({
                        array_index: this.parsed.length,
                        options_index: this.options_index,
                        value: option.value,
                        text: option.text,
                        html: option.innerHTML,
                        selected: option.selected,
                        disabled: group_disabled === true ? group_disabled : option.disabled,
                        group_array_index: group_position,
                        classes: option.className,
                        style: option.style.cssText
                    });
                } else {
                    this.parsed.push({
                        array_index: this.parsed.length,
                        options_index: this.options_index,
                        empty: true
                    });
                }
                return this.options_index += 1;
            }
        };

        SelectParser.prototype.escapeExpression = function(text) {
            var map, unsafe_chars;
            if ((text == null) || text === false) {
                return "";
            }
            if (!/[\&\<\>\"\'\`]/.test(text)) {
                return text;
            }
            map = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            };
            unsafe_chars = /&(?!\w+;)|[\<\>\"\'\`]/g;
            return text.replace(unsafe_chars, function(chr) {
                return map[chr] || "&amp;";
            });
        };

        return SelectParser;

    })();

    SelectParser.select_to_array = function(select) {
        var child, parser, _i, _len, _ref;
        parser = new SelectParser();
        _ref = select.childNodes;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            child = _ref[_i];
            parser.add_node(child);
        }
        return parser.parsed;
    };

    AbstractChosen = (function() {
        function AbstractChosen(form_field, options) {
            this.form_field = form_field;
            this.options = options != null ? options : {};
            if (!AbstractChosen.browser_is_supported()) {
                return;
            }
            this.is_multiple = this.form_field.multiple;
            this.set_default_text();
            this.set_default_values();
            this.setup();
            this.set_up_html();
            this.register_observers();
        }

        AbstractChosen.prototype.set_default_values = function() {
            var _this = this;
            this.click_test_action = function(evt) {
                return _this.test_active_click(evt);
            };
            this.activate_action = function(evt) {
                return _this.activate_field(evt);
            };
            this.active_field = false;
            this.mouse_on_container = false;
            this.results_showing = false;
            this.result_highlighted = null;
            this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
            this.disable_search_threshold = this.options.disable_search_threshold || 0;
            this.disable_search = this.options.disable_search || false;
            this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
            this.group_search = this.options.group_search != null ? this.options.group_search : true;
            this.search_contains = this.options.search_contains || false;
            this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;
            this.max_selected_options = this.options.max_selected_options || Infinity;
            this.inherit_select_classes = this.options.inherit_select_classes || false;
            this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;
            return this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true;
        };

        AbstractChosen.prototype.set_default_text = function() {
            if (this.form_field.getAttribute("data-placeholder")) {
                this.default_text = this.form_field.getAttribute("data-placeholder");
            } else if (this.is_multiple) {
                this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text;
            } else {
                this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text;
            }
            return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text;
        };

        AbstractChosen.prototype.mouse_enter = function() {
            return this.mouse_on_container = true;
        };

        AbstractChosen.prototype.mouse_leave = function() {
            return this.mouse_on_container = false;
        };

        AbstractChosen.prototype.input_focus = function(evt) {
            var _this = this;
            if (this.is_multiple) {
                if (!this.active_field) {
                    return setTimeout((function() {
                        return _this.container_mousedown();
                    }), 50);
                }
            } else {
                if (!this.active_field) {
                    return this.activate_field();
                }
            }
        };

        AbstractChosen.prototype.input_blur = function(evt) {
            var _this = this;
            if (!this.mouse_on_container) {
                this.active_field = false;
                return setTimeout((function() {
                    return _this.blur_test();
                }), 100);
            }
        };

        AbstractChosen.prototype.results_option_build = function(options) {
            var content, data, _i, _len, _ref;
            content = '';
            _ref = this.results_data;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                data = _ref[_i];
                if (data.group) {
                    content += this.result_add_group(data);
                } else {
                    content += this.result_add_option(data);
                }
                if (options != null ? options.first : void 0) {
                    if (data.selected && this.is_multiple) {
                        this.choice_build(data);
                    } else if (data.selected && !this.is_multiple) {
                        this.single_set_selected_text(data.text);
                    }
                }
            }
            return content;
        };

        AbstractChosen.prototype.result_add_option = function(option) {
            var classes, option_el;
            if (!option.search_match) {
                return '';
            }
            if (!this.include_option_in_results(option)) {
                return '';
            }
            classes = [];
            if (!option.disabled && !(option.selected && this.is_multiple)) {
                classes.push("active-result");
            }
            if (option.disabled && !(option.selected && this.is_multiple)) {
                classes.push("disabled-result");
            }
            if (option.selected) {
                classes.push("result-selected");
            }
            if (option.group_array_index != null) {
                classes.push("group-option");
            }
            if (option.classes !== "") {
                classes.push(option.classes);
            }
            option_el = document.createElement("li");
            option_el.className = classes.join(" ");
            option_el.style.cssText = option.style;
            option_el.setAttribute("data-option-array-index", option.array_index);
            option_el.innerHTML = option.search_text;
            return this.outerHTML(option_el);
        };

        AbstractChosen.prototype.result_add_group = function(group) {
            var group_el;
            if (!(group.search_match || group.group_match)) {
                return '';
            }
            if (!(group.active_options > 0)) {
                return '';
            }
            group_el = document.createElement("li");
            group_el.className = "group-result";
            group_el.innerHTML = group.search_text;
            return this.outerHTML(group_el);
        };

        AbstractChosen.prototype.results_update_field = function() {
            this.set_default_text();
            if (!this.is_multiple) {
                this.results_reset_cleanup();
            }
            this.result_clear_highlight();
            this.results_build();
            if (this.results_showing) {
                return this.winnow_results();
            }
        };

        AbstractChosen.prototype.reset_single_select_options = function() {
            var result, _i, _len, _ref, _results;
            _ref = this.results_data;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                result = _ref[_i];
                if (result.selected) {
                    _results.push(result.selected = false);
                } else {
                    _results.push(void 0);
                }
            }
            return _results;
        };

        AbstractChosen.prototype.results_toggle = function() {
            if (this.results_showing) {
                return this.results_hide();
            } else {
                return this.results_show();
            }
        };

        AbstractChosen.prototype.results_search = function(evt) {
            if (this.results_showing) {
                return this.winnow_results();
            } else {
                return this.results_show();
            }
        };

        AbstractChosen.prototype.winnow_results = function() {
            var escapedSearchText, option, regex, regexAnchor, results, results_group, searchText, startpos, text, zregex, _i, _len, _ref;
            this.no_results_clear();
            results = 0;
            searchText = this.get_search_text();
            escapedSearchText = searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
            regexAnchor = this.search_contains ? "" : "^";
            regex = new RegExp(regexAnchor + escapedSearchText, 'i');
            zregex = new RegExp(escapedSearchText, 'i');
            _ref = this.results_data;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                option = _ref[_i];
                option.search_match = false;
                results_group = null;
                if (this.include_option_in_results(option)) {
                    if (option.group) {
                        option.group_match = false;
                        option.active_options = 0;
                    }
                    if ((option.group_array_index != null) && this.results_data[option.group_array_index]) {
                        results_group = this.results_data[option.group_array_index];
                        if (results_group.active_options === 0 && results_group.search_match) {
                            results += 1;
                        }
                        results_group.active_options += 1;
                    }
                    if (!(option.group && !this.group_search)) {
                        option.search_text = option.group ? option.label : option.html;
                        option.search_match = this.search_string_match(option.search_text, regex);
                        if (option.search_match && !option.group) {
                            results += 1;
                        }
                        if (option.search_match) {
                            if (searchText.length) {
                                startpos = option.search_text.search(zregex);
                                text = option.search_text.substr(0, startpos + searchText.length) + '</em>' + option.search_text.substr(startpos + searchText.length);
                                option.search_text = text.substr(0, startpos) + '<em>' + text.substr(startpos);
                            }
                            if (results_group != null) {
                                results_group.group_match = true;
                            }
                        } else if ((option.group_array_index != null) && this.results_data[option.group_array_index].search_match) {
                            option.search_match = true;
                        }
                    }
                }
            }
            this.result_clear_highlight();
            if (results < 1 && searchText.length) {
                this.update_results_content("");
                return this.no_results(searchText);
            } else {
                this.update_results_content(this.results_option_build());
                return this.winnow_results_set_highlight();
            }
        };

        AbstractChosen.prototype.search_string_match = function(search_string, regex) {
            var part, parts, _i, _len;
            if (regex.test(search_string)) {
                return true;
            } else if (this.enable_split_word_search && (search_string.indexOf(" ") >= 0 || search_string.indexOf("[") === 0)) {
                parts = search_string.replace(/\[|\]/g, "").split(" ");
                if (parts.length) {
                    for (_i = 0, _len = parts.length; _i < _len; _i++) {
                        part = parts[_i];
                        if (regex.test(part)) {
                            return true;
                        }
                    }
                }
            }
        };

        AbstractChosen.prototype.choices_count = function() {
            var option, _i, _len, _ref;
            if (this.selected_option_count != null) {
                return this.selected_option_count;
            }
            this.selected_option_count = 0;
            _ref = this.form_field.options;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                option = _ref[_i];
                if (option.selected) {
                    this.selected_option_count += 1;
                }
            }
            return this.selected_option_count;
        };

        AbstractChosen.prototype.choices_click = function(evt) {
            evt.preventDefault();
            if (!(this.results_showing || this.is_disabled)) {
                return this.results_show();
            }
        };

        AbstractChosen.prototype.keyup_checker = function(evt) {
            var stroke, _ref;
            stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
            this.search_field_scale();
            switch (stroke) {
                case 8:
                    if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
                        return this.keydown_backstroke();
                    } else if (!this.pending_backstroke) {
                        this.result_clear_highlight();
                        return this.results_search();
                    }
                    break;
                case 13:
                    evt.preventDefault();
                    if (this.results_showing) {
                        return this.result_select(evt);
                    }
                    break;
                case 27:
                    if (this.results_showing) {
                        this.results_hide();
                    }
                    return true;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                    break;
                default:
                    return this.results_search();
            }
        };

        AbstractChosen.prototype.clipboard_event_checker = function(evt) {
            var _this = this;
            return setTimeout((function() {
                return _this.results_search();
            }), 50);
        };

        AbstractChosen.prototype.container_width = function() {
            if (this.options.width != null) {
                return this.options.width;
            } else {
                return "" + this.form_field.offsetWidth + "px";
            }
        };

        AbstractChosen.prototype.include_option_in_results = function(option) {
            if (this.is_multiple && (!this.display_selected_options && option.selected)) {
                return false;
            }
            if (!this.display_disabled_options && option.disabled) {
                return false;
            }
            if (option.empty) {
                return false;
            }
            return true;
        };

        AbstractChosen.prototype.search_results_touchstart = function(evt) {
            this.touch_started = true;
            return this.search_results_mouseover(evt);
        };

        AbstractChosen.prototype.search_results_touchmove = function(evt) {
            this.touch_started = false;
            return this.search_results_mouseout(evt);
        };

        AbstractChosen.prototype.search_results_touchend = function(evt) {
            if (this.touch_started) {
                return this.search_results_mouseup(evt);
            }
        };

        AbstractChosen.prototype.outerHTML = function(element) {
            var tmp;
            if (element.outerHTML) {
                return element.outerHTML;
            }
            tmp = document.createElement("div");
            tmp.appendChild(element);
            return tmp.innerHTML;
        };

        AbstractChosen.browser_is_supported = function() {
            if (window.navigator.appName === "Microsoft Internet Explorer") {
                return document.documentMode >= 8;
            }
            if (/iP(od|hone)/i.test(window.navigator.userAgent)) {
                return false;
            }
            if (/Android/i.test(window.navigator.userAgent)) {
                if (/Mobile/i.test(window.navigator.userAgent)) {
                    return false;
                }
            }
            return true;
        };

        AbstractChosen.default_multiple_text = "Select Some Options";

        AbstractChosen.default_single_text = "Select an Option";

        AbstractChosen.default_no_result_text = "No results match";

        return AbstractChosen;

    })();

    $ = jQuery;

    $.fn.extend({
        chosen: function(options) {
            if (!AbstractChosen.browser_is_supported()) {
                return this;
            }
            return this.each(function(input_field) {
                var $this, chosen;
                $this = $(this);
                chosen = $this.data('chosen');
                if (options === 'destroy' && chosen) {
                    chosen.destroy();
                } else if (!chosen) {
                    $this.data('chosen', new Chosen(this, options));
                }
            });
        }
    });

    Chosen = (function(_super) {
        __extends(Chosen, _super);

        function Chosen() {
            _ref = Chosen.__super__.constructor.apply(this, arguments);
            return _ref;
        }

        Chosen.prototype.setup = function() {
            this.form_field_jq = $(this.form_field);
            this.current_selectedIndex = this.form_field.selectedIndex;
            return this.is_rtl = this.form_field_jq.hasClass("chosen-rtl");
        };

        Chosen.prototype.set_up_html = function() {
            var container_classes, container_props;
            container_classes = ["chosen-container"];
            container_classes.push("chosen-container-" + (this.is_multiple ? "multi" : "single"));
            if (this.inherit_select_classes && this.form_field.className) {
                container_classes.push(this.form_field.className);
            }
            if (this.is_rtl) {
                container_classes.push("chosen-rtl");
            }
            container_props = {
                'class': container_classes.join(' '),
                'style': "width: " + (this.container_width()) + ";",
                'title': this.form_field.title
            };
            if (this.form_field.id.length) {
                container_props.id = this.form_field.id.replace(/[^\w]/g, '_') + "_chosen";
            }
            this.container = $("<div />", container_props);
            if (this.is_multiple) {
                this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>');
            } else {
                this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>');
            }
            this.form_field_jq.hide().after(this.container);
            this.dropdown = this.container.find('div.chosen-drop').first();
            this.search_field = this.container.find('input').first();
            this.search_results = this.container.find('ul.chosen-results').first();
            this.search_field_scale();
            this.search_no_results = this.container.find('li.no-results').first();
            if (this.is_multiple) {
                this.search_choices = this.container.find('ul.chosen-choices').first();
                this.search_container = this.container.find('li.search-field').first();
            } else {
                this.search_container = this.container.find('div.chosen-search').first();
                this.selected_item = this.container.find('.chosen-single').first();
            }
            this.results_build();
            this.set_tab_index();
            this.set_label_behavior();
            return this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            });
        };

        Chosen.prototype.register_observers = function() {
            var _this = this;
            this.container.bind('mousedown.chosen', function(evt) {
                _this.container_mousedown(evt);
            });
            this.container.bind('mouseup.chosen', function(evt) {
                _this.container_mouseup(evt);
            });
            this.container.bind('mouseenter.chosen', function(evt) {
                _this.mouse_enter(evt);
            });
            this.container.bind('mouseleave.chosen', function(evt) {
                _this.mouse_leave(evt);
            });
            this.search_results.bind('mouseup.chosen', function(evt) {
                _this.search_results_mouseup(evt);
            });
            this.search_results.bind('mouseover.chosen', function(evt) {
                _this.search_results_mouseover(evt);
            });
            this.search_results.bind('mouseout.chosen', function(evt) {
                _this.search_results_mouseout(evt);
            });
            this.search_results.bind('mousewheel.chosen DOMMouseScroll.chosen', function(evt) {
                _this.search_results_mousewheel(evt);
            });
            this.search_results.bind('touchstart.chosen', function(evt) {
                _this.search_results_touchstart(evt);
            });
            this.search_results.bind('touchmove.chosen', function(evt) {
                _this.search_results_touchmove(evt);
            });
            this.search_results.bind('touchend.chosen', function(evt) {
                _this.search_results_touchend(evt);
            });
            this.form_field_jq.bind("chosen:updated.chosen", function(evt) {
                _this.results_update_field(evt);
            });
            this.form_field_jq.bind("chosen:activate.chosen", function(evt) {
                _this.activate_field(evt);
            });
            this.form_field_jq.bind("chosen:open.chosen", function(evt) {
                _this.container_mousedown(evt);
            });
            this.form_field_jq.bind("chosen:close.chosen", function(evt) {
                _this.input_blur(evt);
            });
            this.search_field.bind('blur.chosen', function(evt) {
                _this.input_blur(evt);
            });
            this.search_field.bind('keyup.chosen', function(evt) {
                _this.keyup_checker(evt);
            });
            this.search_field.bind('keydown.chosen', function(evt) {
                _this.keydown_checker(evt);
            });
            this.search_field.bind('focus.chosen', function(evt) {
                _this.input_focus(evt);
            });
            this.search_field.bind('cut.chosen', function(evt) {
                _this.clipboard_event_checker(evt);
            });
            this.search_field.bind('paste.chosen', function(evt) {
                _this.clipboard_event_checker(evt);
            });
            if (this.is_multiple) {
                return this.search_choices.bind('click.chosen', function(evt) {
                    _this.choices_click(evt);
                });
            } else {
                return this.container.bind('click.chosen', function(evt) {
                    evt.preventDefault();
                });
            }
        };

        Chosen.prototype.destroy = function() {
            $(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action);
            if (this.search_field[0].tabIndex) {
                this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex;
            }
            this.container.remove();
            this.form_field_jq.removeData('chosen');
            return this.form_field_jq.show();
        };

        Chosen.prototype.search_field_disabled = function() {
            this.is_disabled = this.form_field_jq[0].disabled;
            if (this.is_disabled) {
                this.container.addClass('chosen-disabled');
                this.search_field[0].disabled = true;
                if (!this.is_multiple) {
                    this.selected_item.unbind("focus.chosen", this.activate_action);
                }
                return this.close_field();
            } else {
                this.container.removeClass('chosen-disabled');
                this.search_field[0].disabled = false;
                if (!this.is_multiple) {
                    return this.selected_item.bind("focus.chosen", this.activate_action);
                }
            }
        };

        Chosen.prototype.container_mousedown = function(evt) {
            if (!this.is_disabled) {
                if (evt && evt.type === "mousedown" && !this.results_showing) {
                    evt.preventDefault();
                }
                if (!((evt != null) && ($(evt.target)).hasClass("search-choice-close"))) {
                    if (!this.active_field) {
                        if (this.is_multiple) {
                            this.search_field.val("");
                        }
                        $(this.container[0].ownerDocument).bind('click.chosen', this.click_test_action);
                        this.results_show();
                    } else if (!this.is_multiple && evt && (($(evt.target)[0] === this.selected_item[0]) || $(evt.target).parents("a.chosen-single").length)) {
                        evt.preventDefault();
                        this.results_toggle();
                    }
                    return this.activate_field();
                }
            }
        };

        Chosen.prototype.container_mouseup = function(evt) {
            if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
                return this.results_reset(evt);
            }
        };

        Chosen.prototype.search_results_mousewheel = function(evt) {
            var delta;
            if (evt.originalEvent) {
                delta = -evt.originalEvent.wheelDelta || evt.originalEvent.detail;
            }
            if (delta != null) {
                evt.preventDefault();
                if (evt.type === 'DOMMouseScroll') {
                    delta = delta * 40;
                }
                return this.search_results.scrollTop(delta + this.search_results.scrollTop());
            }
        };

        Chosen.prototype.blur_test = function(evt) {
            if (!this.active_field && this.container.hasClass("chosen-container-active")) {
                return this.close_field();
            }
        };

        Chosen.prototype.close_field = function() {
            $(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action);
            this.active_field = false;
            this.results_hide();
            this.container.removeClass("chosen-container-active");
            this.clear_backstroke();
            this.show_search_field_default();
            return this.search_field_scale();
        };

        Chosen.prototype.activate_field = function() {
            this.container.addClass("chosen-container-active");
            this.active_field = true;
            this.search_field.val(this.search_field.val());
            return this.search_field.focus();
        };

        Chosen.prototype.test_active_click = function(evt) {
            var active_container;
            active_container = $(evt.target).closest('.chosen-container');
            if (active_container.length && this.container[0] === active_container[0]) {
                return this.active_field = true;
            } else {
                return this.close_field();
            }
        };

        Chosen.prototype.results_build = function() {
            this.parsing = true;
            this.selected_option_count = null;
            this.results_data = SelectParser.select_to_array(this.form_field);
            if (this.is_multiple) {
                this.search_choices.find("li.search-choice").remove();
            } else if (!this.is_multiple) {
                this.single_set_selected_text();
                if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
                    this.search_field[0].readOnly = true;
                    this.container.addClass("chosen-container-single-nosearch");
                } else {
                    this.search_field[0].readOnly = false;
                    this.container.removeClass("chosen-container-single-nosearch");
                }
            }
            this.update_results_content(this.results_option_build({
                first: true
            }));
            this.search_field_disabled();
            this.show_search_field_default();
            this.search_field_scale();
            return this.parsing = false;
        };

        Chosen.prototype.result_do_highlight = function(el) {
            var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
            if (el.length) {
                this.result_clear_highlight();
                this.result_highlight = el;
                this.result_highlight.addClass("highlighted");
                maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
                visible_top = this.search_results.scrollTop();
                visible_bottom = maxHeight + visible_top;
                high_top = this.result_highlight.position().top + this.search_results.scrollTop();
                high_bottom = high_top + this.result_highlight.outerHeight();
                if (high_bottom >= visible_bottom) {
                    return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
                } else if (high_top < visible_top) {
                    return this.search_results.scrollTop(high_top);
                }
            }
        };

        Chosen.prototype.result_clear_highlight = function() {
            if (this.result_highlight) {
                this.result_highlight.removeClass("highlighted");
            }
            return this.result_highlight = null;
        };

        Chosen.prototype.results_show = function() {
            if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
                this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                });
                return false;
            }
            this.container.addClass("chosen-with-drop");
            this.results_showing = true;
            this.search_field.focus();
            this.search_field.val(this.search_field.val());
            this.winnow_results();
            return this.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: this
            });
        };

        Chosen.prototype.update_results_content = function(content) {
            return this.search_results.html(content);
        };

        Chosen.prototype.results_hide = function() {
            if (this.results_showing) {
                this.result_clear_highlight();
                this.container.removeClass("chosen-with-drop");
                this.form_field_jq.trigger("chosen:hiding_dropdown", {
                    chosen: this
                });
            }
            return this.results_showing = false;
        };

        Chosen.prototype.set_tab_index = function(el) {
            var ti;
            if (this.form_field.tabIndex) {
                ti = this.form_field.tabIndex;
                this.form_field.tabIndex = -1;
                return this.search_field[0].tabIndex = ti;
            }
        };

        Chosen.prototype.set_label_behavior = function() {
            var _this = this;
            this.form_field_label = this.form_field_jq.parents("label");
            if (!this.form_field_label.length && this.form_field.id.length) {
                this.form_field_label = $("label[for='" + this.form_field.id + "']");
            }
            if (this.form_field_label.length > 0) {
                return this.form_field_label.bind('click.chosen', function(evt) {
                    if (_this.is_multiple) {
                        return _this.container_mousedown(evt);
                    } else {
                        return _this.activate_field();
                    }
                });
            }
        };

        Chosen.prototype.show_search_field_default = function() {
            if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
                this.search_field.val(this.default_text);
                return this.search_field.addClass("default");
            } else {
                this.search_field.val("");
                return this.search_field.removeClass("default");
            }
        };

        Chosen.prototype.search_results_mouseup = function(evt) {
            var target;
            target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
            if (target.length) {
                this.result_highlight = target;
                this.result_select(evt);
                return this.search_field.focus();
            }
        };

        Chosen.prototype.search_results_mouseover = function(evt) {
            var target;
            target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
            if (target) {
                return this.result_do_highlight(target);
            }
        };

        Chosen.prototype.search_results_mouseout = function(evt) {
            if ($(evt.target).hasClass("active-result" || $(evt.target).parents('.active-result').first())) {
                return this.result_clear_highlight();
            }
        };

        Chosen.prototype.choice_build = function(item) {
            var choice, close_link,
                _this = this;
            choice = $('<li />', {
                "class": "search-choice"
            }).html("<span>" + item.html + "</span>");
            if (item.disabled) {
                choice.addClass('search-choice-disabled');
            } else {
                close_link = $('<a />', {
                    "class": 'search-choice-close',
                    'data-option-array-index': item.array_index
                });
                close_link.bind('click.chosen', function(evt) {
                    return _this.choice_destroy_link_click(evt);
                });
                choice.append(close_link);
            }
            return this.search_container.before(choice);
        };

        Chosen.prototype.choice_destroy_link_click = function(evt) {
            evt.preventDefault();
            evt.stopPropagation();
            if (!this.is_disabled) {
                return this.choice_destroy($(evt.target));
            }
        };

        Chosen.prototype.choice_destroy = function(link) {
            if (this.result_deselect(link[0].getAttribute("data-option-array-index"))) {
                this.show_search_field_default();
                if (this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1) {
                    this.results_hide();
                }
                link.parents('li').first().remove();
                return this.search_field_scale();
            }
        };

        Chosen.prototype.results_reset = function() {
            this.reset_single_select_options();
            this.form_field.options[0].selected = true;
            this.single_set_selected_text();
            this.show_search_field_default();
            this.results_reset_cleanup();
            this.form_field_jq.trigger("change");
            if (this.active_field) {
                return this.results_hide();
            }
        };

        Chosen.prototype.results_reset_cleanup = function() {
            this.current_selectedIndex = this.form_field.selectedIndex;
            return this.selected_item.find("abbr").remove();
        };

        Chosen.prototype.result_select = function(evt) {
            var high, item;
            if (this.result_highlight) {
                high = this.result_highlight;
                this.result_clear_highlight();
                if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
                    this.form_field_jq.trigger("chosen:maxselected", {
                        chosen: this
                    });
                    return false;
                }
                if (this.is_multiple) {
                    high.removeClass("active-result");
                } else {
                    this.reset_single_select_options();
                }
                item = this.results_data[high[0].getAttribute("data-option-array-index")];
                item.selected = true;
                this.form_field.options[item.options_index].selected = true;
                this.selected_option_count = null;
                if (this.is_multiple) {
                    this.choice_build(item);
                } else {
                    this.single_set_selected_text(item.text);
                }
                if (!((evt.metaKey || evt.ctrlKey) && this.is_multiple)) {
                    this.results_hide();
                }
                this.search_field.val("");
                if (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) {
                    this.form_field_jq.trigger("change", {
                        'selected': this.form_field.options[item.options_index].value
                    });
                }
                this.current_selectedIndex = this.form_field.selectedIndex;
                return this.search_field_scale();
            }
        };

        Chosen.prototype.single_set_selected_text = function(text) {
            if (text == null) {
                text = this.default_text;
            }
            if (text === this.default_text) {
                this.selected_item.addClass("chosen-default");
            } else {
                this.single_deselect_control_build();
                this.selected_item.removeClass("chosen-default");
            }
            return this.selected_item.find("span").text(text);
        };

        Chosen.prototype.result_deselect = function(pos) {
            var result_data;
            result_data = this.results_data[pos];
            if (!this.form_field.options[result_data.options_index].disabled) {
                result_data.selected = false;
                this.form_field.options[result_data.options_index].selected = false;
                this.selected_option_count = null;
                this.result_clear_highlight();
                if (this.results_showing) {
                    this.winnow_results();
                }
                this.form_field_jq.trigger("change", {
                    deselected: this.form_field.options[result_data.options_index].value
                });
                this.search_field_scale();
                return true;
            } else {
                return false;
            }
        };

        Chosen.prototype.single_deselect_control_build = function() {
            if (!this.allow_single_deselect) {
                return;
            }
            if (!this.selected_item.find("abbr").length) {
                this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
            }
            return this.selected_item.addClass("chosen-single-with-deselect");
        };

        Chosen.prototype.get_search_text = function() {
            if (this.search_field.val() === this.default_text) {
                return "";
            } else {
                return $('<div/>').text($.trim(this.search_field.val())).html();
            }
        };

        Chosen.prototype.winnow_results_set_highlight = function() {
            var do_high, selected_results;
            selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
            do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();
            if (do_high != null) {
                return this.result_do_highlight(do_high);
            }
        };

        Chosen.prototype.no_results = function(terms) {
            var no_results_html;
            no_results_html = $('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
            no_results_html.find("span").first().html(terms);
            this.search_results.append(no_results_html);
            return this.form_field_jq.trigger("chosen:no_results", {
                chosen: this
            });
        };

        Chosen.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove();
        };

        Chosen.prototype.keydown_arrow = function() {
            var next_sib;
            if (this.results_showing && this.result_highlight) {
                next_sib = this.result_highlight.nextAll("li.active-result").first();
                if (next_sib) {
                    return this.result_do_highlight(next_sib);
                }
            } else {
                return this.results_show();
            }
        };

        Chosen.prototype.keyup_arrow = function() {
            var prev_sibs;
            if (!this.results_showing && !this.is_multiple) {
                return this.results_show();
            } else if (this.result_highlight) {
                prev_sibs = this.result_highlight.prevAll("li.active-result");
                if (prev_sibs.length) {
                    return this.result_do_highlight(prev_sibs.first());
                } else {
                    if (this.choices_count() > 0) {
                        this.results_hide();
                    }
                    return this.result_clear_highlight();
                }
            }
        };

        Chosen.prototype.keydown_backstroke = function() {
            var next_available_destroy;
            if (this.pending_backstroke) {
                this.choice_destroy(this.pending_backstroke.find("a").first());
                return this.clear_backstroke();
            } else {
                next_available_destroy = this.search_container.siblings("li.search-choice").last();
                if (next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled")) {
                    this.pending_backstroke = next_available_destroy;
                    if (this.single_backstroke_delete) {
                        return this.keydown_backstroke();
                    } else {
                        return this.pending_backstroke.addClass("search-choice-focus");
                    }
                }
            }
        };

        Chosen.prototype.clear_backstroke = function() {
            if (this.pending_backstroke) {
                this.pending_backstroke.removeClass("search-choice-focus");
            }
            return this.pending_backstroke = null;
        };

        Chosen.prototype.keydown_checker = function(evt) {
            var stroke, _ref1;
            stroke = (_ref1 = evt.which) != null ? _ref1 : evt.keyCode;
            this.search_field_scale();
            if (stroke !== 8 && this.pending_backstroke) {
                this.clear_backstroke();
            }
            switch (stroke) {
                case 8:
                    this.backstroke_length = this.search_field.val().length;
                    break;
                case 9:
                    if (this.results_showing && !this.is_multiple) {
                        this.result_select(evt);
                    }
                    this.mouse_on_container = false;
                    break;
                case 13:
                    evt.preventDefault();
                    break;
                case 38:
                    evt.preventDefault();
                    this.keyup_arrow();
                    break;
                case 40:
                    evt.preventDefault();
                    this.keydown_arrow();
                    break;
            }
        };

        Chosen.prototype.search_field_scale = function() {
            var div, f_width, h, style, style_block, styles, w, _i, _len;
            if (this.is_multiple) {
                h = 0;
                w = 0;
                style_block = "position:absolute; left: -1000px; top: -1000px; display:none;";
                styles = ['font-size', 'font-style', 'font-weight', 'font-family', 'line-height', 'text-transform', 'letter-spacing'];
                for (_i = 0, _len = styles.length; _i < _len; _i++) {
                    style = styles[_i];
                    style_block += style + ":" + this.search_field.css(style) + ";";
                }
                div = $('<div />', {
                    'style': style_block
                });
                div.text(this.search_field.val());
                $('body').append(div);
                w = div.width() + 25;
                div.remove();
                f_width = this.container.outerWidth();
                if (w > f_width - 10) {
                    w = f_width - 10;
                }
                return this.search_field.css({
                    'width': w + 'px'
                });
            }
        };

        return Chosen;

    })(AbstractChosen);

}).call(this);

/*
 * metismenu - v2.0.2
 * A jQuery menu plugin
 * https://github.com/onokumus/metisMenu
 *
 * Made by Osman Nuri Okumus
 * Under MIT License
 */

!function(a){"use strict";function b(){var a=document.createElement("mm"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}function c(b){return this.each(function(){var c=a(this),d=c.data("mm"),f=a.extend({},e.DEFAULTS,c.data(),"object"==typeof b&&b);d||c.data("mm",d=new e(this,f)),"string"==typeof b&&d[b]()})}a.fn.emulateTransitionEnd=function(b){var c=!1,e=this;a(this).one("mmTransitionEnd",function(){c=!0});var f=function(){c||a(e).trigger(d.end)};return setTimeout(f,b),this};var d=b();d&&(a.event.special.mmTransitionEnd={bindType:d.end,delegateType:d.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}});var e=function(b,c){this.$element=a(b),this.options=a.extend({},e.DEFAULTS,c),this.transitioning=null,this.init()};e.TRANSITION_DURATION=350,e.DEFAULTS={toggle:!0,doubleTapToGo:!1,activeClass:"active"},e.prototype.init=function(){var b=this,c=this.options.activeClass;this.$element.find("li."+c).has("ul").children("ul").addClass("collapse in"),this.$element.find("li").not("."+c).has("ul").children("ul").addClass("collapse"),this.options.doubleTapToGo&&this.$element.find("li."+c).has("ul").children("a").addClass("doubleTapToGo"),this.$element.find("li").has("ul").children("a").on("click.metisMenu",function(d){var e=a(this),f=e.parent("li"),g=f.children("ul");return d.preventDefault(),f.hasClass(c)?b.hide(g):b.show(g),b.options.doubleTapToGo&&b.doubleTapToGo(e)&&"#"!==e.attr("href")&&""!==e.attr("href")?(d.stopPropagation(),void(document.location=e.attr("href"))):void 0})},e.prototype.doubleTapToGo=function(a){var b=this.$element;return a.hasClass("doubleTapToGo")?(a.removeClass("doubleTapToGo"),!0):a.parent().children("ul").length?(b.find(".doubleTapToGo").removeClass("doubleTapToGo"),a.addClass("doubleTapToGo"),!1):void 0},e.prototype.show=function(b){var c=this.options.activeClass,f=a(b),g=f.parent("li");if(!this.transitioning&&!f.hasClass("in")){g.addClass(c),this.options.toggle&&this.hide(g.siblings().children("ul.in")),f.removeClass("collapse").addClass("collapsing").height(0),this.transitioning=1;var h=function(){f.removeClass("collapsing").addClass("collapse in").height(""),this.transitioning=0};return d?void f.one("mmTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(e.TRANSITION_DURATION).height(f[0].scrollHeight):h.call(this)}},e.prototype.hide=function(b){var c=this.options.activeClass,f=a(b);if(!this.transitioning&&f.hasClass("in")){f.parent("li").removeClass(c),f.height(f.height())[0].offsetHeight,f.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var g=function(){this.transitioning=0,f.removeClass("collapsing").addClass("collapse")};return d?void f.height(0).one("mmTransitionEnd",a.proxy(g,this)).emulateTransitionEnd(e.TRANSITION_DURATION):g.call(this)}};var f=a.fn.metisMenu;a.fn.metisMenu=c,a.fn.metisMenu.Constructor=e,a.fn.metisMenu.noConflict=function(){return a.fn.metisMenu=f,this}}(jQuery);
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.6
 *
 */
(function(e){e.fn.extend({slimScroll:function(g){var a=e.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},g);this.each(function(){function v(d){if(r){d=d||window.event;
    var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);e(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&m(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}}function m(d,e,g){k=!1;var f=d,h=b.outerHeight()-c.outerHeight();e&&(f=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),f=Math.min(Math.max(f,0),h),f=0<d?Math.ceil(f):Math.floor(f),c.css({top:f+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());
    f=l*(b[0].scrollHeight-b.outerHeight());g&&(f=d,d=f/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),h),c.css({top:d+"px"}));b.scrollTop(f);b.trigger("slimscrolling",~~f);w();p()}function x(){u=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),30);c.css({height:u+"px"});var a=u==b.outerHeight()?"none":"block";c.css({display:a})}function w(){x();clearTimeout(B);l==~~l?(k=a.allowPageScroll,C!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;C=l;u>=b.outerHeight()?k=!0:(c.stop(!0,
    !0).fadeIn("fast"),a.railVisible&&h.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(B=setTimeout(function(){a.disableFadeOut&&r||y||z||(c.fadeOut("slow"),h.fadeOut("slow"))},1E3))}var r,y,z,B,A,u,l,C,k=!1,b=e(this);if(b.parent().hasClass(a.wrapperClass)){var n=b.scrollTop(),c=b.closest("."+a.barClass),h=b.closest("."+a.railClass);x();if(e.isPlainObject(g)){if("height"in g&&"auto"==g.height){b.parent().css("height","auto");b.css("height","auto");var q=b.parent().parent().height();b.parent().css("height",
    q);b.css("height",q)}if("scrollTo"in g)n=parseInt(a.scrollTo);else if("scrollBy"in g)n+=parseInt(a.scrollBy);else if("destroy"in g){c.remove();h.remove();b.unwrap();return}m(n,!1,!0)}}else if(!(e.isPlainObject(g)&&"destroy"in g)){a.height="auto"==a.height?b.parent().height():a.height;n=e("<div></div>").addClass(a.wrapperClass).css({position:"relative",overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",width:a.width,height:a.height});var h=e("<div></div>").addClass(a.railClass).css({width:a.size,
    height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=e("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,WebkitBorderRadius:a.borderRadius,zIndex:99}),q="right"==a.position?
{right:a.distance}:{left:a.distance};h.css(q);c.css(q);b.wrap(n);b.parent().append(c);b.parent().append(h);a.railDraggable&&c.bind("mousedown",function(a){var b=e(document);z=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);m(0,c.position().top,!1)});b.bind("mouseup.slimscroll",function(a){z=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",function(a){a.stopPropagation();a.preventDefault();return!1});
    h.hover(function(){w()},function(){p()});c.hover(function(){y=!0},function(){y=!1});b.hover(function(){r=!0;w();p()},function(){r=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(A=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&(m((A-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),A=b.originalEvent.touches[0].pageY)});x();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),
        m(0,!0)):"top"!==a.start&&(m(e(a.start).position().top,null,!0),a.alwaysVisible||c.hide());window.addEventListener?(this.addEventListener("DOMMouseScroll",v,!1),this.addEventListener("mousewheel",v,!1)):document.attachEvent("onmousewheel",v)}});return this}});e.fn.extend({slimscroll:e.fn.slimScroll})})(jQuery);
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.1.6
 *
 * Copyright 2016 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Chart=t()}}(function(){return function t(e,a,i){function n(r,l){if(!a[r]){if(!e[r]){var s="function"==typeof require&&require;if(!l&&s)return s(r,!0);if(o)return o(r,!0);var d=new Error("Cannot find module '"+r+"'");throw d.code="MODULE_NOT_FOUND",d}var u=a[r]={exports:{}};e[r][0].call(u.exports,function(t){var a=e[r][1][t];return n(a?a:t)},u,u.exports,t,e,a,i)}return a[r].exports}for(var o="function"==typeof require&&require,r=0;r<i.length;r++)n(i[r]);return n}({1:[function(t,e,a){},{}],2:[function(t,e,a){function i(t){if(t){var e=/^#([a-fA-F0-9]{3})$/,a=/^#([a-fA-F0-9]{6})$/,i=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,n=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,o=/(\w+)/,r=[0,0,0],l=1,s=t.match(e);if(s){s=s[1];for(var d=0;d<r.length;d++)r[d]=parseInt(s[d]+s[d],16)}else if(s=t.match(a)){s=s[1];for(var d=0;d<r.length;d++)r[d]=parseInt(s.slice(2*d,2*d+2),16)}else if(s=t.match(i)){for(var d=0;d<r.length;d++)r[d]=parseInt(s[d+1]);l=parseFloat(s[4])}else if(s=t.match(n)){for(var d=0;d<r.length;d++)r[d]=Math.round(2.55*parseFloat(s[d+1]));l=parseFloat(s[4])}else if(s=t.match(o)){if("transparent"==s[1])return[0,0,0,0];if(r=y[s[1]],!r)return}for(var d=0;d<r.length;d++)r[d]=v(r[d],0,255);return l=l||0==l?v(l,0,1):1,r[3]=l,r}}function n(t){if(t){var e=/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,a=t.match(e);if(a){var i=parseFloat(a[4]),n=v(parseInt(a[1]),0,360),o=v(parseFloat(a[2]),0,100),r=v(parseFloat(a[3]),0,100),l=v(isNaN(i)?1:i,0,1);return[n,o,r,l]}}}function o(t){if(t){var e=/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,a=t.match(e);if(a){var i=parseFloat(a[4]),n=v(parseInt(a[1]),0,360),o=v(parseFloat(a[2]),0,100),r=v(parseFloat(a[3]),0,100),l=v(isNaN(i)?1:i,0,1);return[n,o,r,l]}}}function r(t){var e=i(t);return e&&e.slice(0,3)}function l(t){var e=n(t);return e&&e.slice(0,3)}function s(t){var e=i(t);return e?e[3]:(e=n(t))?e[3]:(e=o(t))?e[3]:void 0}function d(t){return"#"+x(t[0])+x(t[1])+x(t[2])}function u(t,e){return 1>e||t[3]&&t[3]<1?c(t,e):"rgb("+t[0]+", "+t[1]+", "+t[2]+")"}function c(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function h(t,e){if(1>e||t[3]&&t[3]<1)return f(t,e);var a=Math.round(t[0]/255*100),i=Math.round(t[1]/255*100),n=Math.round(t[2]/255*100);return"rgb("+a+"%, "+i+"%, "+n+"%)"}function f(t,e){var a=Math.round(t[0]/255*100),i=Math.round(t[1]/255*100),n=Math.round(t[2]/255*100);return"rgba("+a+"%, "+i+"%, "+n+"%, "+(e||t[3]||1)+")"}function g(t,e){return 1>e||t[3]&&t[3]<1?p(t,e):"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"}function p(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function m(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"}function b(t){return k[t.slice(0,3)]}function v(t,e,a){return Math.min(Math.max(e,t),a)}function x(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}var y=t(6);e.exports={getRgba:i,getHsla:n,getRgb:r,getHsl:l,getHwb:o,getAlpha:s,hexString:d,rgbString:u,rgbaString:c,percentString:h,percentaString:f,hslString:g,hslaString:p,hwbString:m,keyword:b};var k={};for(var S in y)k[y[S]]=S},{6:6}],3:[function(t,e,a){var i=t(5),n=t(2),o=function(t){if(t instanceof o)return t;if(!(this instanceof o))return new o(t);this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1};var e;if("string"==typeof t)if(e=n.getRgba(t))this.setValues("rgb",e);else if(e=n.getHsla(t))this.setValues("hsl",e);else{if(!(e=n.getHwb(t)))throw new Error('Unable to parse color from string "'+t+'"');this.setValues("hwb",e)}else if("object"==typeof t)if(e=t,void 0!==e.r||void 0!==e.red)this.setValues("rgb",e);else if(void 0!==e.l||void 0!==e.lightness)this.setValues("hsl",e);else if(void 0!==e.v||void 0!==e.value)this.setValues("hsv",e);else if(void 0!==e.w||void 0!==e.whiteness)this.setValues("hwb",e);else{if(void 0===e.c&&void 0===e.cyan)throw new Error("Unable to parse color from object "+JSON.stringify(t));this.setValues("cmyk",e)}};o.prototype={rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t%=360,t=0>t?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return n.hexString(this.values.rgb)},rgbString:function(){return n.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return n.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return n.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return n.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return n.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return n.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return n.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],a=0;a<t.length;a++){var i=t[a]/255;e[a]=.03928>=i?i/12.92:Math.pow((i+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),a=t.luminosity();return e>a?(e+.05)/(a+.05):(a+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb,e=(299*t[0]+587*t[1]+114*t[2])/1e3;return 128>e},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;3>e;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,a=(e[0]+t)%360;return e[0]=0>a?360+a:a,this.setValues("hsl",e),this},mix:function(t,e){var a=this,i=t,n=void 0===e?.5:e,o=2*n-1,r=a.alpha()-i.alpha(),l=((o*r===-1?o:(o+r)/(1+o*r))+1)/2,s=1-l;return this.rgb(l*a.red()+s*i.red(),l*a.green()+s*i.green(),l*a.blue()+s*i.blue()).alpha(a.alpha()*n+i.alpha()*(1-n))},toJSON:function(){return this.rgb()},clone:function(){var t,e,a=new o,i=this.values,n=a.values;for(var r in i)i.hasOwnProperty(r)&&(t=i[r],e={}.toString.call(t),"[object Array]"===e?n[r]=t.slice(0):"[object Number]"===e?n[r]=t:console.error("unexpected color value:",t));return a}},o.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},o.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},o.prototype.getValues=function(t){for(var e=this.values,a={},i=0;i<t.length;i++)a[t.charAt(i)]=e[t][i];return 1!==e.alpha&&(a.a=e.alpha),a},o.prototype.setValues=function(t,e){var a,n=this.values,o=this.spaces,r=this.maxes,l=1;if("alpha"===t)l=e;else if(e.length)n[t]=e.slice(0,t.length),l=e[t.length];else if(void 0!==e[t.charAt(0)]){for(a=0;a<t.length;a++)n[t][a]=e[t.charAt(a)];l=e.a}else if(void 0!==e[o[t][0]]){var s=o[t];for(a=0;a<t.length;a++)n[t][a]=e[s[a]];l=e.alpha}if(n.alpha=Math.max(0,Math.min(1,void 0===l?n.alpha:l)),"alpha"===t)return!1;var d;for(a=0;a<t.length;a++)d=Math.max(0,Math.min(r[t][a],n[t][a])),n[t][a]=Math.round(d);for(var u in o)u!==t&&(n[u]=i[t][u](n[t]));return!0},o.prototype.setSpace=function(t,e){var a=e[0];return void 0===a?this.getValues(t):("number"==typeof a&&(a=Array.prototype.slice.call(e)),this.setValues(t,a),this)},o.prototype.setChannel=function(t,e,a){var i=this.values[t];return void 0===a?i[e]:a===i[e]?this:(i[e]=a,this.setValues(t,i),this)},"undefined"!=typeof window&&(window.Color=o),e.exports=o},{2:2,5:5}],4:[function(t,e,a){function i(t){var e,a,i,n=t[0]/255,o=t[1]/255,r=t[2]/255,l=Math.min(n,o,r),s=Math.max(n,o,r),d=s-l;return s==l?e=0:n==s?e=(o-r)/d:o==s?e=2+(r-n)/d:r==s&&(e=4+(n-o)/d),e=Math.min(60*e,360),0>e&&(e+=360),i=(l+s)/2,a=s==l?0:.5>=i?d/(s+l):d/(2-s-l),[e,100*a,100*i]}function n(t){var e,a,i,n=t[0],o=t[1],r=t[2],l=Math.min(n,o,r),s=Math.max(n,o,r),d=s-l;return a=0==s?0:d/s*1e3/10,s==l?e=0:n==s?e=(o-r)/d:o==s?e=2+(r-n)/d:r==s&&(e=4+(n-o)/d),e=Math.min(60*e,360),0>e&&(e+=360),i=s/255*1e3/10,[e,a,i]}function o(t){var e=t[0],a=t[1],n=t[2],o=i(t)[0],r=1/255*Math.min(e,Math.min(a,n)),n=1-1/255*Math.max(e,Math.max(a,n));return[o,100*r,100*n]}function l(t){var e,a,i,n,o=t[0]/255,r=t[1]/255,l=t[2]/255;return n=Math.min(1-o,1-r,1-l),e=(1-o-n)/(1-n)||0,a=(1-r-n)/(1-n)||0,i=(1-l-n)/(1-n)||0,[100*e,100*a,100*i,100*n]}function s(t){return Q[JSON.stringify(t)]}function d(t){var e=t[0]/255,a=t[1]/255,i=t[2]/255;e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,a=a>.04045?Math.pow((a+.055)/1.055,2.4):a/12.92,i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92;var n=.4124*e+.3576*a+.1805*i,o=.2126*e+.7152*a+.0722*i,r=.0193*e+.1192*a+.9505*i;return[100*n,100*o,100*r]}function u(t){var e,a,i,n=d(t),o=n[0],r=n[1],l=n[2];return o/=95.047,r/=100,l/=108.883,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,l=l>.008856?Math.pow(l,1/3):7.787*l+16/116,e=116*r-16,a=500*(o-r),i=200*(r-l),[e,a,i]}function c(t){return W(u(t))}function h(t){var e,a,i,n,o,r=t[0]/360,l=t[1]/100,s=t[2]/100;if(0==l)return o=255*s,[o,o,o];a=.5>s?s*(1+l):s+l-s*l,e=2*s-a,n=[0,0,0];for(var d=0;3>d;d++)i=r+1/3*-(d-1),0>i&&i++,i>1&&i--,o=1>6*i?e+6*(a-e)*i:1>2*i?a:2>3*i?e+(a-e)*(2/3-i)*6:e,n[d]=255*o;return n}function f(t){var e,a,i=t[0],n=t[1]/100,o=t[2]/100;return 0===o?[0,0,0]:(o*=2,n*=1>=o?o:2-o,a=(o+n)/2,e=2*n/(o+n),[i,100*e,100*a])}function p(t){return o(h(t))}function m(t){return l(h(t))}function v(t){return s(h(t))}function x(t){var e=t[0]/60,a=t[1]/100,i=t[2]/100,n=Math.floor(e)%6,o=e-Math.floor(e),r=255*i*(1-a),l=255*i*(1-a*o),s=255*i*(1-a*(1-o)),i=255*i;switch(n){case 0:return[i,s,r];case 1:return[l,i,r];case 2:return[r,i,s];case 3:return[r,l,i];case 4:return[s,r,i];case 5:return[i,r,l]}}function y(t){var e,a,i=t[0],n=t[1]/100,o=t[2]/100;return a=(2-n)*o,e=n*o,e/=1>=a?a:2-a,e=e||0,a/=2,[i,100*e,100*a]}function k(t){return o(x(t))}function S(t){return l(x(t))}function w(t){return s(x(t))}function C(t){var e,a,i,n,o=t[0]/360,l=t[1]/100,s=t[2]/100,d=l+s;switch(d>1&&(l/=d,s/=d),e=Math.floor(6*o),a=1-s,i=6*o-e,0!=(1&e)&&(i=1-i),n=l+i*(a-l),e){default:case 6:case 0:r=a,g=n,b=l;break;case 1:r=n,g=a,b=l;break;case 2:r=l,g=a,b=n;break;case 3:r=l,g=n,b=a;break;case 4:r=n,g=l,b=a;break;case 5:r=a,g=l,b=n}return[255*r,255*g,255*b]}function M(t){return i(C(t))}function D(t){return n(C(t))}function A(t){return l(C(t))}function I(t){return s(C(t))}function F(t){var e,a,i,n=t[0]/100,o=t[1]/100,r=t[2]/100,l=t[3]/100;return e=1-Math.min(1,n*(1-l)+l),a=1-Math.min(1,o*(1-l)+l),i=1-Math.min(1,r*(1-l)+l),[255*e,255*a,255*i]}function T(t){return i(F(t))}function P(t){return n(F(t))}function _(t){return o(F(t))}function R(t){return s(F(t))}function V(t){var e,a,i,n=t[0]/100,o=t[1]/100,r=t[2]/100;return e=3.2406*n+-1.5372*o+r*-.4986,a=n*-.9689+1.8758*o+.0415*r,i=.0557*n+o*-.204+1.057*r,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:e=12.92*e,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=12.92*a,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i=12.92*i,e=Math.min(Math.max(0,e),1),a=Math.min(Math.max(0,a),1),i=Math.min(Math.max(0,i),1),[255*e,255*a,255*i]}function O(t){var e,a,i,n=t[0],o=t[1],r=t[2];return n/=95.047,o/=100,r/=108.883,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,e=116*o-16,a=500*(n-o),i=200*(o-r),[e,a,i]}function L(t){return W(O(t))}function B(t){var e,a,i,n,o=t[0],r=t[1],l=t[2];return 8>=o?(a=100*o/903.3,n=7.787*(a/100)+16/116):(a=100*Math.pow((o+16)/116,3),n=Math.pow(a/100,1/3)),e=.008856>=e/95.047?e=95.047*(r/500+n-16/116)/7.787:95.047*Math.pow(r/500+n,3),i=.008859>=i/108.883?i=108.883*(n-l/200-16/116)/7.787:108.883*Math.pow(n-l/200,3),[e,a,i]}function W(t){var e,a,i,n=t[0],o=t[1],r=t[2];return e=Math.atan2(r,o),a=360*e/2/Math.PI,0>a&&(a+=360),i=Math.sqrt(o*o+r*r),[n,i,a]}function z(t){return V(B(t))}function H(t){var e,a,i,n=t[0],o=t[1],r=t[2];return i=r/360*2*Math.PI,e=o*Math.cos(i),a=o*Math.sin(i),[n,e,a]}function N(t){return B(H(t))}function E(t){return z(H(t))}function U(t){return G[t]}function q(t){return i(U(t))}function j(t){return n(U(t))}function Y(t){return o(U(t))}function J(t){return l(U(t))}function X(t){return u(U(t))}function Z(t){return d(U(t))}e.exports={rgb2hsl:i,rgb2hsv:n,rgb2hwb:o,rgb2cmyk:l,rgb2keyword:s,rgb2xyz:d,rgb2lab:u,rgb2lch:c,hsl2rgb:h,hsl2hsv:f,hsl2hwb:p,hsl2cmyk:m,hsl2keyword:v,hsv2rgb:x,hsv2hsl:y,hsv2hwb:k,hsv2cmyk:S,hsv2keyword:w,hwb2rgb:C,hwb2hsl:M,hwb2hsv:D,hwb2cmyk:A,hwb2keyword:I,cmyk2rgb:F,cmyk2hsl:T,cmyk2hsv:P,cmyk2hwb:_,cmyk2keyword:R,keyword2rgb:U,keyword2hsl:q,keyword2hsv:j,keyword2hwb:Y,keyword2cmyk:J,keyword2lab:X,keyword2xyz:Z,xyz2rgb:V,xyz2lab:O,xyz2lch:L,lab2xyz:B,lab2rgb:z,lab2lch:W,lch2lab:H,lch2xyz:N,lch2rgb:E};var G={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},Q={};for(var $ in G)Q[JSON.stringify(G[$])]=$},{}],5:[function(t,e,a){var i=t(4),n=function(){return new d};for(var o in i){n[o+"Raw"]=function(t){return function(e){return"number"==typeof e&&(e=Array.prototype.slice.call(arguments)),i[t](e)}}(o);var r=/(\w+)2(\w+)/.exec(o),l=r[1],s=r[2];n[l]=n[l]||{},n[l][s]=n[o]=function(t){return function(e){"number"==typeof e&&(e=Array.prototype.slice.call(arguments));var a=i[t](e);if("string"==typeof a||void 0===a)return a;for(var n=0;n<a.length;n++)a[n]=Math.round(a[n]);return a}}(o)}var d=function(){this.convs={}};d.prototype.routeSpace=function(t,e){var a=e[0];return void 0===a?this.getValues(t):("number"==typeof a&&(a=Array.prototype.slice.call(e)),this.setValues(t,a))},d.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},d.prototype.getValues=function(t){var e=this.convs[t];if(!e){var a=this.space,i=this.convs[a];e=n[a][t](i),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(t){d.prototype[t]=function(e){return this.routeSpace(t,arguments)}}),e.exports=n},{4:4}],6:[function(t,e,a){e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],7:[function(t,e,a){var i=t(26)();t(25)(i),t(24)(i),t(21)(i),t(22)(i),t(23)(i),t(27)(i),t(31)(i),t(29)(i),t(30)(i),t(32)(i),t(28)(i),t(33)(i),t(34)(i),t(35)(i),t(36)(i),t(37)(i),t(40)(i),t(38)(i),t(39)(i),t(41)(i),t(42)(i),t(43)(i),t(15)(i),t(16)(i),t(17)(i),t(18)(i),t(19)(i),t(20)(i),t(8)(i),t(9)(i),t(10)(i),t(11)(i),t(12)(i),t(13)(i),t(14)(i),window.Chart=e.exports=i},{10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,30:30,31:31,32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,8:8,9:9}],8:[function(t,e,a){"use strict";e.exports=function(t){t.Bar=function(e,a){return a.type="bar",new t(e,a)}}},{}],9:[function(t,e,a){"use strict";e.exports=function(t){t.Bubble=function(e,a){return a.type="bubble",new t(e,a)}}},{}],10:[function(t,e,a){"use strict";e.exports=function(t){t.Doughnut=function(e,a){return a.type="doughnut",new t(e,a)}}},{}],11:[function(t,e,a){"use strict";e.exports=function(t){t.Line=function(e,a){return a.type="line",new t(e,a)}}},{}],12:[function(t,e,a){"use strict";e.exports=function(t){t.PolarArea=function(e,a){return a.type="polarArea",new t(e,a)}}},{}],13:[function(t,e,a){"use strict";e.exports=function(t){t.Radar=function(e,a){return a.options=t.helpers.configMerge({aspectRatio:1},a.options),a.type="radar",new t(e,a)}}},{}],14:[function(t,e,a){"use strict";e.exports=function(t){var e={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-1"}],yAxes:[{type:"linear",position:"left",id:"y-axis-1"}]},tooltips:{callbacks:{title:function(t,e){return""},label:function(t,e){return"("+t.xLabel+", "+t.yLabel+")"}}}};t.defaults.scatter=e,t.controllers.scatter=t.controllers.line,t.Scatter=function(e,a){return a.type="scatter",new t(e,a)}}},{}],15:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bar={hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}},t.controllers.bar=t.DatasetController.extend({dataElementType:t.elements.Rectangle,initialize:function(e,a){t.DatasetController.prototype.initialize.call(this,e,a),this.getMeta().bar=!0},getBarCount:function(){var t=this,a=0;return e.each(t.chart.data.datasets,function(e,i){var n=t.chart.getDatasetMeta(i);n.bar&&t.chart.isDatasetVisible(i)&&++a},t),a},update:function(t){var a=this;e.each(a.getMeta().data,function(e,i){a.updateElement(e,i,t)},a)},updateElement:function(t,a,i){var n=this,o=n.getMeta(),r=n.getScaleForId(o.xAxisID),l=n.getScaleForId(o.yAxisID),s=l.getBasePixel(),d=n.chart.options.elements.rectangle,u=t.custom||{},c=n.getDataset();e.extend(t,{_xScale:r,_yScale:l,_datasetIndex:n.index,_index:a,_model:{x:n.calculateBarX(a,n.index),y:i?s:n.calculateBarY(a,n.index),label:n.chart.data.labels[a],datasetLabel:c.label,base:i?s:n.calculateBarBase(n.index,a),width:n.calculateBarWidth(a),backgroundColor:u.backgroundColor?u.backgroundColor:e.getValueAtIndexOrDefault(c.backgroundColor,a,d.backgroundColor),borderSkipped:u.borderSkipped?u.borderSkipped:d.borderSkipped,borderColor:u.borderColor?u.borderColor:e.getValueAtIndexOrDefault(c.borderColor,a,d.borderColor),borderWidth:u.borderWidth?u.borderWidth:e.getValueAtIndexOrDefault(c.borderWidth,a,d.borderWidth)}}),t.pivot()},calculateBarBase:function(t,e){var a=this,i=a.getMeta(),n=a.getScaleForId(i.yAxisID),o=0;if(n.options.stacked){var r=a.chart,l=r.data.datasets,s=l[t].data[e];if(0>s)for(var d=0;t>d;d++){var u=l[d],c=r.getDatasetMeta(d);c.bar&&c.yAxisID===n.id&&r.isDatasetVisible(d)&&(o+=u.data[e]<0?u.data[e]:0)}else for(var h=0;t>h;h++){var f=l[h],g=r.getDatasetMeta(h);g.bar&&g.yAxisID===n.id&&r.isDatasetVisible(h)&&(o+=f.data[e]>0?f.data[e]:0)}return n.getPixelForValue(o)}return n.getBasePixel()},getRuler:function(t){var e,a=this,i=a.getMeta(),n=a.getScaleForId(i.xAxisID),o=a.getBarCount();e="category"===n.options.type?n.getPixelForTick(t+1)-n.getPixelForTick(t):n.width/n.ticks.length;var r=e*n.options.categoryPercentage,l=(e-e*n.options.categoryPercentage)/2,s=r/o;if(n.ticks.length!==a.chart.data.labels.length){var d=n.ticks.length/a.chart.data.labels.length;s*=d}var u=s*n.options.barPercentage,c=s-s*n.options.barPercentage;return{datasetCount:o,tickWidth:e,categoryWidth:r,categorySpacing:l,fullBarWidth:s,barWidth:u,barSpacing:c}},calculateBarWidth:function(t){var e=this.getScaleForId(this.getMeta().xAxisID),a=this.getRuler(t);return e.options.stacked?a.categoryWidth:a.barWidth},getBarIndex:function(t){var e,a,i=0;for(a=0;t>a;++a)e=this.chart.getDatasetMeta(a),e.bar&&this.chart.isDatasetVisible(a)&&++i;return i},calculateBarX:function(t,e){var a=this,i=a.getMeta(),n=a.getScaleForId(i.xAxisID),o=a.getBarIndex(e),r=a.getRuler(t),l=n.getPixelForValue(null,t,e,a.chart.isCombo);return l-=a.chart.isCombo?r.tickWidth/2:0,n.options.stacked?l+r.categoryWidth/2+r.categorySpacing:l+r.barWidth/2+r.categorySpacing+r.barWidth*o+r.barSpacing/2+r.barSpacing*o},calculateBarY:function(t,e){var a=this,i=a.getMeta(),n=a.getScaleForId(i.yAxisID),o=a.getDataset().data[t];if(n.options.stacked){for(var r=0,l=0,s=0;e>s;s++){var d=a.chart.data.datasets[s],u=a.chart.getDatasetMeta(s);u.bar&&u.yAxisID===n.id&&a.chart.isDatasetVisible(s)&&(d.data[t]<0?l+=d.data[t]||0:r+=d.data[t]||0)}return 0>o?n.getPixelForValue(l+o):n.getPixelForValue(r+o)}return n.getPixelForValue(o)},draw:function(t){var a=this,i=t||1;e.each(a.getMeta().data,function(t,e){var n=a.getDataset().data[e];null===n||void 0===n||isNaN(n)||t.transition(i).draw()},a)},setHoverStyle:function(t){var a=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},o=t._model;o.backgroundColor=n.hoverBackgroundColor?n.hoverBackgroundColor:e.getValueAtIndexOrDefault(a.hoverBackgroundColor,i,e.getHoverColor(o.backgroundColor)),o.borderColor=n.hoverBorderColor?n.hoverBorderColor:e.getValueAtIndexOrDefault(a.hoverBorderColor,i,e.getHoverColor(o.borderColor)),o.borderWidth=n.hoverBorderWidth?n.hoverBorderWidth:e.getValueAtIndexOrDefault(a.hoverBorderWidth,i,o.borderWidth)},removeHoverStyle:function(t){var a=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},o=t._model,r=this.chart.options.elements.rectangle;o.backgroundColor=n.backgroundColor?n.backgroundColor:e.getValueAtIndexOrDefault(a.backgroundColor,i,r.backgroundColor),o.borderColor=n.borderColor?n.borderColor:e.getValueAtIndexOrDefault(a.borderColor,i,r.borderColor),o.borderWidth=n.borderWidth?n.borderWidth:e.getValueAtIndexOrDefault(a.borderWidth,i,r.borderWidth)}}),t.defaults.horizontalBar={hover:{mode:"label"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(t,e){var a="";return t.length>0&&(t[0].yLabel?a=t[0].yLabel:e.labels.length>0&&t[0].index<e.labels.length&&(a=e.labels[t[0].index])),a},label:function(t,e){var a=e.datasets[t.datasetIndex].label||"";return a+": "+t.xLabel}}}},t.controllers.horizontalBar=t.controllers.bar.extend({updateElement:function(t,a,i,n){var o=this,r=o.getMeta(),l=o.getScaleForId(r.xAxisID),s=o.getScaleForId(r.yAxisID),d=l.getBasePixel(),u=t.custom||{},c=o.getDataset(),h=o.chart.options.elements.rectangle;e.extend(t,{_xScale:l,_yScale:s,_datasetIndex:o.index,_index:a,_model:{x:i?d:o.calculateBarX(a,o.index),y:o.calculateBarY(a,o.index),label:o.chart.data.labels[a],datasetLabel:c.label,base:i?d:o.calculateBarBase(o.index,a),height:o.calculateBarHeight(a),backgroundColor:u.backgroundColor?u.backgroundColor:e.getValueAtIndexOrDefault(c.backgroundColor,a,h.backgroundColor),borderSkipped:u.borderSkipped?u.borderSkipped:h.borderSkipped,borderColor:u.borderColor?u.borderColor:e.getValueAtIndexOrDefault(c.borderColor,a,h.borderColor),borderWidth:u.borderWidth?u.borderWidth:e.getValueAtIndexOrDefault(c.borderWidth,a,h.borderWidth)},draw:function(){function t(t){return s[(u+t)%4]}var e=this._chart.ctx,a=this._view,i=a.height/2,n=a.y-i,o=a.y+i,r=a.base-(a.base-a.x),l=a.borderWidth/2;a.borderWidth&&(n+=l,o-=l,r+=l),e.beginPath(),e.fillStyle=a.backgroundColor,e.strokeStyle=a.borderColor,e.lineWidth=a.borderWidth;var s=[[a.base,o],[a.base,n],[r,n],[r,o]],d=["bottom","left","top","right"],u=d.indexOf(a.borderSkipped,0);-1===u&&(u=0),e.moveTo.apply(e,t(0));for(var c=1;4>c;c++)e.lineTo.apply(e,t(c));e.fill(),a.borderWidth&&e.stroke()},inRange:function(t,e){var a=this._view,i=!1;return a&&(i=a.x<a.base?e>=a.y-a.height/2&&e<=a.y+a.height/2&&t>=a.x&&t<=a.base:e>=a.y-a.height/2&&e<=a.y+a.height/2&&t>=a.base&&t<=a.x),i}}),t.pivot()},calculateBarBase:function(t,e){
    var a=this,i=a.getMeta(),n=a.getScaleForId(i.xAxisID),o=0;if(n.options.stacked){var r=a.chart.data.datasets[t].data[e];if(0>r)for(var l=0;t>l;l++){var s=a.chart.data.datasets[l],d=a.chart.getDatasetMeta(l);d.bar&&d.xAxisID===n.id&&a.chart.isDatasetVisible(l)&&(o+=s.data[e]<0?s.data[e]:0)}else for(var u=0;t>u;u++){var c=a.chart.data.datasets[u],h=a.chart.getDatasetMeta(u);h.bar&&h.xAxisID===n.id&&a.chart.isDatasetVisible(u)&&(o+=c.data[e]>0?c.data[e]:0)}return n.getPixelForValue(o)}return n.getBasePixel()},getRuler:function(t){var e,a=this,i=a.getMeta(),n=a.getScaleForId(i.yAxisID),o=a.getBarCount();e="category"===n.options.type?n.getPixelForTick(t+1)-n.getPixelForTick(t):n.width/n.ticks.length;var r=e*n.options.categoryPercentage,l=(e-e*n.options.categoryPercentage)/2,s=r/o;if(n.ticks.length!==a.chart.data.labels.length){var d=n.ticks.length/a.chart.data.labels.length;s*=d}var u=s*n.options.barPercentage,c=s-s*n.options.barPercentage;return{datasetCount:o,tickHeight:e,categoryHeight:r,categorySpacing:l,fullBarHeight:s,barHeight:u,barSpacing:c}},calculateBarHeight:function(t){var e=this,a=e.getScaleForId(e.getMeta().yAxisID),i=e.getRuler(t);return a.options.stacked?i.categoryHeight:i.barHeight},calculateBarX:function(t,e){var a=this,i=a.getMeta(),n=a.getScaleForId(i.xAxisID),o=a.getDataset().data[t];if(n.options.stacked){for(var r=0,l=0,s=0;e>s;s++){var d=a.chart.data.datasets[s],u=a.chart.getDatasetMeta(s);u.bar&&u.xAxisID===n.id&&a.chart.isDatasetVisible(s)&&(d.data[t]<0?l+=d.data[t]||0:r+=d.data[t]||0)}return 0>o?n.getPixelForValue(l+o):n.getPixelForValue(r+o)}return n.getPixelForValue(o)},calculateBarY:function(t,e){var a=this,i=a.getMeta(),n=a.getScaleForId(i.yAxisID),o=a.getBarIndex(e),r=a.getRuler(t),l=n.getPixelForValue(null,t,e,a.chart.isCombo);return l-=a.chart.isCombo?r.tickHeight/2:0,n.options.stacked?l+r.categoryHeight/2+r.categorySpacing:l+r.barHeight/2+r.categorySpacing+r.barHeight*o+r.barSpacing/2+r.barSpacing*o}})}},{}],16:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bubble={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(t,e){return""},label:function(t,e){var a=e.datasets[t.datasetIndex].label||"",i=e.datasets[t.datasetIndex].data[t.index];return a+": ("+i.x+", "+i.y+", "+i.r+")"}}}},t.controllers.bubble=t.DatasetController.extend({dataElementType:t.elements.Point,update:function(t){var a=this,i=a.getMeta(),n=i.data;e.each(n,function(e,i){a.updateElement(e,i,t)})},updateElement:function(a,i,n){var o=this,r=o.getMeta(),l=o.getScaleForId(r.xAxisID),s=o.getScaleForId(r.yAxisID),d=a.custom||{},u=o.getDataset(),c=u.data[i],h=o.chart.options.elements.point,f=o.index;e.extend(a,{_xScale:l,_yScale:s,_datasetIndex:f,_index:i,_model:{x:n?l.getPixelForDecimal(.5):l.getPixelForValue(c,i,f,o.chart.isCombo),y:n?s.getBasePixel():s.getPixelForValue(c,i,f),radius:n?0:d.radius?d.radius:o.getRadius(c),hitRadius:d.hitRadius?d.hitRadius:e.getValueAtIndexOrDefault(u.hitRadius,i,h.hitRadius)}}),t.DatasetController.prototype.removeHoverStyle.call(o,a,h);var g=a._model;g.skip=d.skip?d.skip:isNaN(g.x)||isNaN(g.y),a.pivot()},getRadius:function(t){return t.r||this.chart.options.elements.point.radius},setHoverStyle:function(a){var i=this;t.DatasetController.prototype.setHoverStyle.call(i,a);var n=i.chart.data.datasets[a._datasetIndex],o=a._index,r=a.custom||{},l=a._model;l.radius=r.hoverRadius?r.hoverRadius:e.getValueAtIndexOrDefault(n.hoverRadius,o,i.chart.options.elements.point.hoverRadius)+i.getRadius(n.data[o])},removeHoverStyle:function(e){var a=this;t.DatasetController.prototype.removeHoverStyle.call(a,e,a.chart.options.elements.point);var i=a.chart.data.datasets[e._datasetIndex].data[e._index],n=e.custom||{},o=e._model;o.radius=n.radius?n.radius:a.getRadius(i)}})}},{}],17:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers,a=t.defaults;a.doughnut={animation:{animateRotate:!0,animateScale:!1},aspectRatio:1,hover:{mode:"single"},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var a=t.data,i=a.datasets,n=a.labels;if(i.length)for(var o=0;o<i[0].data.length;++o)e.push('<li><span style="background-color:'+i[0].backgroundColor[o]+'"></span>'),n[o]&&e.push(n[o]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var a=t.data;return a.labels.length&&a.datasets.length?a.labels.map(function(i,n){var o=t.getDatasetMeta(0),r=a.datasets[0],l=o.data[n],s=l.custom||{},d=e.getValueAtIndexOrDefault,u=t.options.elements.arc,c=s.backgroundColor?s.backgroundColor:d(r.backgroundColor,n,u.backgroundColor),h=s.borderColor?s.borderColor:d(r.borderColor,n,u.borderColor),f=s.borderWidth?s.borderWidth:d(r.borderWidth,n,u.borderWidth);return{text:i,fillStyle:c,strokeStyle:h,lineWidth:f,hidden:isNaN(r.data[n])||o.data[n].hidden,index:n}}):[]}},onClick:function(t,e){var a,i,n,o=e.index,r=this.chart;for(a=0,i=(r.data.datasets||[]).length;i>a;++a)n=r.getDatasetMeta(a),n.data[o].hidden=!n.data[o].hidden;r.update()}},cutoutPercentage:50,rotation:Math.PI*-.5,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+e.datasets[t.datasetIndex].data[t.index]}}}},a.pie=e.clone(a.doughnut),e.extend(a.pie,{cutoutPercentage:0}),t.controllers.doughnut=t.controllers.pie=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,getRingIndex:function(t){for(var e=0,a=0;t>a;++a)this.chart.isDatasetVisible(a)&&++e;return e},update:function(t){var a=this,i=a.chart,n=i.chartArea,o=i.options,r=o.elements.arc,l=n.right-n.left-r.borderWidth,s=n.bottom-n.top-r.borderWidth,d=Math.min(l,s),u={x:0,y:0},c=a.getMeta(),h=o.cutoutPercentage,f=o.circumference;if(f<2*Math.PI){var g=o.rotation%(2*Math.PI);g+=2*Math.PI*(g>=Math.PI?-1:g<-Math.PI?1:0);var p=g+f,m={x:Math.cos(g),y:Math.sin(g)},b={x:Math.cos(p),y:Math.sin(p)},v=0>=g&&p>=0||g<=2*Math.PI&&2*Math.PI<=p,x=g<=.5*Math.PI&&.5*Math.PI<=p||g<=2.5*Math.PI&&2.5*Math.PI<=p,y=g<=-Math.PI&&-Math.PI<=p||g<=Math.PI&&Math.PI<=p,k=g<=.5*-Math.PI&&.5*-Math.PI<=p||g<=1.5*Math.PI&&1.5*Math.PI<=p,S=h/100,w={x:y?-1:Math.min(m.x*(m.x<0?1:S),b.x*(b.x<0?1:S)),y:k?-1:Math.min(m.y*(m.y<0?1:S),b.y*(b.y<0?1:S))},C={x:v?1:Math.max(m.x*(m.x>0?1:S),b.x*(b.x>0?1:S)),y:x?1:Math.max(m.y*(m.y>0?1:S),b.y*(b.y>0?1:S))},M={width:.5*(C.x-w.x),height:.5*(C.y-w.y)};d=Math.min(l/M.width,s/M.height),u={x:(C.x+w.x)*-.5,y:(C.y+w.y)*-.5}}i.outerRadius=Math.max(d/2,0),i.innerRadius=Math.max(h?i.outerRadius/100*h:1,0),i.radiusLength=(i.outerRadius-i.innerRadius)/i.getVisibleDatasetCount(),i.offsetX=u.x*i.outerRadius,i.offsetY=u.y*i.outerRadius,c.total=a.calculateTotal(),a.outerRadius=i.outerRadius-i.radiusLength*a.getRingIndex(a.index),a.innerRadius=a.outerRadius-i.radiusLength,e.each(c.data,function(e,i){a.updateElement(e,i,t)})},updateElement:function(t,a,i){var n=this,o=n.chart,r=o.chartArea,l=o.options,s=l.animation,d=(l.elements.arc,(r.left+r.right)/2),u=(r.top+r.bottom)/2,c=l.rotation,h=l.rotation,f=n.getDataset(),g=i&&s.animateRotate?0:t.hidden?0:n.calculateCircumference(f.data[a])*(l.circumference/(2*Math.PI)),p=i&&s.animateScale?0:n.innerRadius,m=i&&s.animateScale?0:n.outerRadius,b=(t.custom||{},e.getValueAtIndexOrDefault);e.extend(t,{_datasetIndex:n.index,_index:a,_model:{x:d+o.offsetX,y:u+o.offsetY,startAngle:c,endAngle:h,circumference:g,outerRadius:m,innerRadius:p,label:b(f.label,a,o.data.labels[a])}});var v=t._model;this.removeHoverStyle(t),i&&s.animateRotate||(0===a?v.startAngle=l.rotation:v.startAngle=n.getMeta().data[a-1]._model.endAngle,v.endAngle=v.startAngle+v.circumference),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},calculateTotal:function(){var t,a=this.getDataset(),i=this.getMeta(),n=0;return e.each(i.data,function(e,i){t=a.data[i],isNaN(t)||e.hidden||(n+=Math.abs(t))}),n},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?2*Math.PI*(t/e):0}})}},{}],18:[function(t,e,a){"use strict";e.exports=function(t){function e(t,e){return a.getValueOrDefault(t.showLine,e.showLines)}var a=t.helpers;t.defaults.line={showLines:!0,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}},t.controllers.line=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,addElementAndReset:function(a){var i=this,n=i.chart.options,o=i.getMeta();t.DatasetController.prototype.addElementAndReset.call(i,a),e(i.getDataset(),n)&&0!==o.dataset._model.tension&&i.updateBezierControlPoints()},update:function(t){var i,n,o,r=this,l=r.getMeta(),s=l.dataset,d=l.data||[],u=r.chart.options,c=u.elements.line,h=r.getScaleForId(l.yAxisID),f=r.getDataset(),g=e(f,u);for(g&&(o=s.custom||{},void 0!==f.tension&&void 0===f.lineTension&&(f.lineTension=f.tension),s._scale=h,s._datasetIndex=r.index,s._children=d,s._model={spanGaps:f.spanGaps?f.spanGaps:!1,tension:o.tension?o.tension:a.getValueOrDefault(f.lineTension,c.tension),backgroundColor:o.backgroundColor?o.backgroundColor:f.backgroundColor||c.backgroundColor,borderWidth:o.borderWidth?o.borderWidth:f.borderWidth||c.borderWidth,borderColor:o.borderColor?o.borderColor:f.borderColor||c.borderColor,borderCapStyle:o.borderCapStyle?o.borderCapStyle:f.borderCapStyle||c.borderCapStyle,borderDash:o.borderDash?o.borderDash:f.borderDash||c.borderDash,borderDashOffset:o.borderDashOffset?o.borderDashOffset:f.borderDashOffset||c.borderDashOffset,borderJoinStyle:o.borderJoinStyle?o.borderJoinStyle:f.borderJoinStyle||c.borderJoinStyle,fill:o.fill?o.fill:void 0!==f.fill?f.fill:c.fill,scaleTop:h.top,scaleBottom:h.bottom,scaleZero:h.getBasePixel()},s.pivot()),i=0,n=d.length;n>i;++i)r.updateElement(d[i],i,t);for(g&&0!==s._model.tension&&r.updateBezierControlPoints(),i=0,n=d.length;n>i;++i)d[i].pivot()},getPointBackgroundColor:function(t,e){var i=this.chart.options.elements.point.backgroundColor,n=this.getDataset(),o=t.custom||{};return o.backgroundColor?i=o.backgroundColor:n.pointBackgroundColor?i=a.getValueAtIndexOrDefault(n.pointBackgroundColor,e,i):n.backgroundColor&&(i=n.backgroundColor),i},getPointBorderColor:function(t,e){var i=this.chart.options.elements.point.borderColor,n=this.getDataset(),o=t.custom||{};return o.borderColor?i=o.borderColor:n.pointBorderColor?i=a.getValueAtIndexOrDefault(n.pointBorderColor,e,i):n.borderColor&&(i=n.borderColor),i},getPointBorderWidth:function(t,e){var i=this.chart.options.elements.point.borderWidth,n=this.getDataset(),o=t.custom||{};return o.borderWidth?i=o.borderWidth:n.pointBorderWidth?i=a.getValueAtIndexOrDefault(n.pointBorderWidth,e,i):n.borderWidth&&(i=n.borderWidth),i},updateElement:function(t,e,i){var n,o,r=this,l=r.getMeta(),s=t.custom||{},d=r.getDataset(),u=r.index,c=d.data[e],h=r.getScaleForId(l.yAxisID),f=r.getScaleForId(l.xAxisID),g=r.chart.options.elements.point;void 0!==d.radius&&void 0===d.pointRadius&&(d.pointRadius=d.radius),void 0!==d.hitRadius&&void 0===d.pointHitRadius&&(d.pointHitRadius=d.hitRadius),n=f.getPixelForValue(c,e,u,r.chart.isCombo),o=i?h.getBasePixel():r.calculatePointY(c,e,u,r.chart.isCombo),t._xScale=f,t._yScale=h,t._datasetIndex=u,t._index=e,t._model={x:n,y:o,skip:s.skip||isNaN(n)||isNaN(o),radius:s.radius||a.getValueAtIndexOrDefault(d.pointRadius,e,g.radius),pointStyle:s.pointStyle||a.getValueAtIndexOrDefault(d.pointStyle,e,g.pointStyle),backgroundColor:r.getPointBackgroundColor(t,e),borderColor:r.getPointBorderColor(t,e),borderWidth:r.getPointBorderWidth(t,e),tension:l.dataset._model?l.dataset._model.tension:0,hitRadius:s.hitRadius||a.getValueAtIndexOrDefault(d.pointHitRadius,e,g.hitRadius)}},calculatePointY:function(t,e,a,i){var n,o,r,l=this,s=l.chart,d=l.getMeta(),u=l.getScaleForId(d.yAxisID),c=0,h=0;if(u.options.stacked){for(n=0;a>n;n++)o=s.data.datasets[n],r=s.getDatasetMeta(n),"line"===r.type&&s.isDatasetVisible(n)&&(o.data[e]<0?h+=o.data[e]||0:c+=o.data[e]||0);return 0>t?u.getPixelForValue(h+t):u.getPixelForValue(c+t)}return u.getPixelForValue(t)},updateBezierControlPoints:function(){var t,e,i,n,o,r=this.getMeta(),l=(this.chart.chartArea,r.data||[]);for(t=0,e=l.length;e>t;++t)i=l[t],n=i._model,o=a.splineCurve(a.previousItem(l,t)._model,n,a.nextItem(l,t)._model,r.dataset._model.tension),n.controlPointPreviousX=o.previous.x,n.controlPointPreviousY=o.previous.y,n.controlPointNextX=o.next.x,n.controlPointNextY=o.next.y},draw:function(t){var a,i,n=this,o=n.getMeta(),r=o.data||[],l=t||1;for(a=0,i=r.length;i>a;++a)r[a].transition(l);for(e(n.getDataset(),n.chart.options)&&o.dataset.transition(l).draw(),a=0,i=r.length;i>a;++a)r[a].draw()},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},o=t._model;o.radius=n.hoverRadius||a.getValueAtIndexOrDefault(e.pointHoverRadius,i,this.chart.options.elements.point.hoverRadius),o.backgroundColor=n.hoverBackgroundColor||a.getValueAtIndexOrDefault(e.pointHoverBackgroundColor,i,a.getHoverColor(o.backgroundColor)),o.borderColor=n.hoverBorderColor||a.getValueAtIndexOrDefault(e.pointHoverBorderColor,i,a.getHoverColor(o.borderColor)),o.borderWidth=n.hoverBorderWidth||a.getValueAtIndexOrDefault(e.pointHoverBorderWidth,i,o.borderWidth)},removeHoverStyle:function(t){var e=this,i=e.chart.data.datasets[t._datasetIndex],n=t._index,o=t.custom||{},r=t._model;void 0!==i.radius&&void 0===i.pointRadius&&(i.pointRadius=i.radius),r.radius=o.radius||a.getValueAtIndexOrDefault(i.pointRadius,n,e.chart.options.elements.point.radius),r.backgroundColor=e.getPointBackgroundColor(t,n),r.borderColor=e.getPointBorderColor(t,n),r.borderWidth=e.getPointBorderWidth(t,n)}})}},{}],19:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.polarArea={scale:{type:"radialLinear",lineArc:!0},animation:{animateRotate:!0,animateScale:!0},aspectRatio:1,legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var a=t.data,i=a.datasets,n=a.labels;if(i.length)for(var o=0;o<i[0].data.length;++o)e.push('<li><span style="background-color:'+i[0].backgroundColor[o]+'">'),n[o]&&e.push(n[o]),e.push("</span></li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var a=t.data;return a.labels.length&&a.datasets.length?a.labels.map(function(i,n){var o=t.getDatasetMeta(0),r=a.datasets[0],l=o.data[n],s=l.custom||{},d=e.getValueAtIndexOrDefault,u=t.options.elements.arc,c=s.backgroundColor?s.backgroundColor:d(r.backgroundColor,n,u.backgroundColor),h=s.borderColor?s.borderColor:d(r.borderColor,n,u.borderColor),f=s.borderWidth?s.borderWidth:d(r.borderWidth,n,u.borderWidth);return{text:i,fillStyle:c,strokeStyle:h,lineWidth:f,hidden:isNaN(r.data[n])||o.data[n].hidden,index:n}}):[]}},onClick:function(t,e){var a,i,n,o=e.index,r=this.chart;for(a=0,i=(r.data.datasets||[]).length;i>a;++a)n=r.getDatasetMeta(a),n.data[o].hidden=!n.data[o].hidden;r.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}},t.controllers.polarArea=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,update:function(t){var a=this,i=a.chart,n=i.chartArea,o=a.getMeta(),r=i.options,l=r.elements.arc,s=Math.min(n.right-n.left,n.bottom-n.top);i.outerRadius=Math.max((s-l.borderWidth/2)/2,0),i.innerRadius=Math.max(r.cutoutPercentage?i.outerRadius/100*r.cutoutPercentage:1,0),i.radiusLength=(i.outerRadius-i.innerRadius)/i.getVisibleDatasetCount(),a.outerRadius=i.outerRadius-i.radiusLength*a.index,a.innerRadius=a.outerRadius-i.radiusLength,o.count=a.countVisibleElements(),e.each(o.data,function(e,i){a.updateElement(e,i,t)})},updateElement:function(t,a,i){for(var n=this,o=n.chart,r=o.chartArea,l=n.getDataset(),s=o.options,d=s.animation,u=(s.elements.arc,t.custom||{},o.scale),c=e.getValueAtIndexOrDefault,h=o.data.labels,f=n.calculateCircumference(l.data[a]),g=(r.left+r.right)/2,p=(r.top+r.bottom)/2,m=0,b=n.getMeta(),v=0;a>v;++v)isNaN(l.data[v])||b.data[v].hidden||++m;var x=-.5*Math.PI,y=t.hidden?0:u.getDistanceFromCenterForValue(l.data[a]),k=x+f*m,S=k+(t.hidden?0:f),w=d.animateScale?0:u.getDistanceFromCenterForValue(l.data[a]);e.extend(t,{_datasetIndex:n.index,_index:a,_scale:u,_model:{x:g,y:p,innerRadius:0,outerRadius:i?w:y,startAngle:i&&d.animateRotate?x:k,endAngle:i&&d.animateRotate?x:S,label:c(h,a,h[a])}}),n.removeHoverStyle(t),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},countVisibleElements:function(){var t=this.getDataset(),a=this.getMeta(),i=0;return e.each(a.data,function(e,a){isNaN(t.data[a])||e.hidden||i++}),i},calculateCircumference:function(t){var e=this.getMeta().count;return e>0&&!isNaN(t)?2*Math.PI/e:0}})}},{}],20:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.radar={scale:{type:"radialLinear"},elements:{line:{tension:0}}},t.controllers.radar=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,linkScales:e.noop,addElementAndReset:function(e){t.DatasetController.prototype.addElementAndReset.call(this,e),this.updateBezierControlPoints()},update:function(t){var a=this,i=a.getMeta(),n=i.dataset,o=i.data,r=n.custom||{},l=a.getDataset(),s=a.chart.options.elements.line,d=a.chart.scale;void 0!==l.tension&&void 0===l.lineTension&&(l.lineTension=l.tension),e.extend(i.dataset,{_datasetIndex:a.index,_children:o,_loop:!0,_model:{tension:r.tension?r.tension:e.getValueOrDefault(l.lineTension,s.tension),backgroundColor:r.backgroundColor?r.backgroundColor:l.backgroundColor||s.backgroundColor,borderWidth:r.borderWidth?r.borderWidth:l.borderWidth||s.borderWidth,borderColor:r.borderColor?r.borderColor:l.borderColor||s.borderColor,fill:r.fill?r.fill:void 0!==l.fill?l.fill:s.fill,borderCapStyle:r.borderCapStyle?r.borderCapStyle:l.borderCapStyle||s.borderCapStyle,borderDash:r.borderDash?r.borderDash:l.borderDash||s.borderDash,borderDashOffset:r.borderDashOffset?r.borderDashOffset:l.borderDashOffset||s.borderDashOffset,borderJoinStyle:r.borderJoinStyle?r.borderJoinStyle:l.borderJoinStyle||s.borderJoinStyle,scaleTop:d.top,scaleBottom:d.bottom,scaleZero:d.getBasePosition()}}),i.dataset.pivot(),e.each(o,function(e,i){a.updateElement(e,i,t)},a),a.updateBezierControlPoints()},updateElement:function(t,a,i){var n=this,o=t.custom||{},r=n.getDataset(),l=n.chart.scale,s=n.chart.options.elements.point,d=l.getPointPositionForValue(a,r.data[a]);e.extend(t,{_datasetIndex:n.index,_index:a,_scale:l,_model:{x:i?l.xCenter:d.x,y:i?l.yCenter:d.y,tension:o.tension?o.tension:e.getValueOrDefault(r.tension,n.chart.options.elements.line.tension),radius:o.radius?o.radius:e.getValueAtIndexOrDefault(r.pointRadius,a,s.radius),backgroundColor:o.backgroundColor?o.backgroundColor:e.getValueAtIndexOrDefault(r.pointBackgroundColor,a,s.backgroundColor),borderColor:o.borderColor?o.borderColor:e.getValueAtIndexOrDefault(r.pointBorderColor,a,s.borderColor),borderWidth:o.borderWidth?o.borderWidth:e.getValueAtIndexOrDefault(r.pointBorderWidth,a,s.borderWidth),pointStyle:o.pointStyle?o.pointStyle:e.getValueAtIndexOrDefault(r.pointStyle,a,s.pointStyle),hitRadius:o.hitRadius?o.hitRadius:e.getValueAtIndexOrDefault(r.hitRadius,a,s.hitRadius)}}),t._model.skip=o.skip?o.skip:isNaN(t._model.x)||isNaN(t._model.y)},updateBezierControlPoints:function(){var t=this.chart.chartArea,a=this.getMeta();e.each(a.data,function(i,n){var o=i._model,r=e.splineCurve(e.previousItem(a.data,n,!0)._model,o,e.nextItem(a.data,n,!0)._model,o.tension);o.controlPointPreviousX=Math.max(Math.min(r.previous.x,t.right),t.left),o.controlPointPreviousY=Math.max(Math.min(r.previous.y,t.bottom),t.top),o.controlPointNextX=Math.max(Math.min(r.next.x,t.right),t.left),o.controlPointNextY=Math.max(Math.min(r.next.y,t.bottom),t.top),i.pivot()})},draw:function(t){var a=this.getMeta(),i=t||1;e.each(a.data,function(t,e){t.transition(i)}),a.dataset.transition(i).draw(),e.each(a.data,function(t){t.draw()})},setHoverStyle:function(t){var a=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},n=t._index,o=t._model;o.radius=i.hoverRadius?i.hoverRadius:e.getValueAtIndexOrDefault(a.pointHoverRadius,n,this.chart.options.elements.point.hoverRadius),o.backgroundColor=i.hoverBackgroundColor?i.hoverBackgroundColor:e.getValueAtIndexOrDefault(a.pointHoverBackgroundColor,n,e.getHoverColor(o.backgroundColor)),o.borderColor=i.hoverBorderColor?i.hoverBorderColor:e.getValueAtIndexOrDefault(a.pointHoverBorderColor,n,e.getHoverColor(o.borderColor)),o.borderWidth=i.hoverBorderWidth?i.hoverBorderWidth:e.getValueAtIndexOrDefault(a.pointHoverBorderWidth,n,o.borderWidth)},removeHoverStyle:function(t){var a=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},n=t._index,o=t._model,r=this.chart.options.elements.point;o.radius=i.radius?i.radius:e.getValueAtIndexOrDefault(a.radius,n,r.radius),o.backgroundColor=i.backgroundColor?i.backgroundColor:e.getValueAtIndexOrDefault(a.pointBackgroundColor,n,r.backgroundColor),o.borderColor=i.borderColor?i.borderColor:e.getValueAtIndexOrDefault(a.pointBorderColor,n,r.borderColor),o.borderWidth=i.borderWidth?i.borderWidth:e.getValueAtIndexOrDefault(a.pointBorderWidth,n,r.borderWidth)}})}},{}],21:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.animation={duration:1e3,easing:"easeOutQuart",onProgress:e.noop,onComplete:e.noop},t.Animation=t.Element.extend({currentStep:null,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),t.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(t,e,a,i){var n=this;i||(t.animating=!0);for(var o=0;o<n.animations.length;++o)if(n.animations[o].chartInstance===t)return void(n.animations[o].animationObject=e);n.animations.push({chartInstance:t,animationObject:e}),1===n.animations.length&&n.requestAnimationFrame()},cancelAnimation:function(t){var a=e.findIndex(this.animations,function(e){return e.chartInstance===t});-1!==a&&(this.animations.splice(a,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=e.requestAnimFrame.call(window,function(){t.request=null,t.startDigest()}))},startDigest:function(){var t=this,e=Date.now(),a=0;t.dropFrames>1&&(a=Math.floor(t.dropFrames),t.dropFrames=t.dropFrames%1);for(var i=0;i<t.animations.length;)null===t.animations[i].animationObject.currentStep&&(t.animations[i].animationObject.currentStep=0),t.animations[i].animationObject.currentStep+=1+a,t.animations[i].animationObject.currentStep>t.animations[i].animationObject.numSteps&&(t.animations[i].animationObject.currentStep=t.animations[i].animationObject.numSteps),t.animations[i].animationObject.render(t.animations[i].chartInstance,t.animations[i].animationObject),t.animations[i].animationObject.onAnimationProgress&&t.animations[i].animationObject.onAnimationProgress.call&&t.animations[i].animationObject.onAnimationProgress.call(t.animations[i].chartInstance,t.animations[i]),t.animations[i].animationObject.currentStep===t.animations[i].animationObject.numSteps?(t.animations[i].animationObject.onAnimationComplete&&t.animations[i].animationObject.onAnimationComplete.call&&t.animations[i].animationObject.onAnimationComplete.call(t.animations[i].chartInstance,t.animations[i]),t.animations[i].chartInstance.animating=!1,t.animations.splice(i,1)):++i;var n=Date.now(),o=(n-e)/t.frameDuration;t.dropFrames+=o,t.animations.length>0&&t.requestAnimationFrame()}}}},{}],22:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.types={},t.instances={},t.controllers={},t.Controller=function(a){return this.chart=a,this.config=a.config,this.options=this.config.options=e.configMerge(t.defaults.global,t.defaults[this.config.type],this.config.options||{}),this.id=e.uid(),Object.defineProperty(this,"data",{get:function(){return this.config.data}}),t.instances[this.id]=this,this.options.responsive&&this.resize(!0),this.initialize(),this},e.extend(t.Controller.prototype,{initialize:function(){var e=this;return t.plugins.notify("beforeInit",[e]),e.bindEvents(),e.ensureScalesHaveIDs(),e.buildOrUpdateControllers(),e.buildScales(),e.updateLayout(),e.resetElements(),e.initToolTip(),e.update(),t.plugins.notify("afterInit",[e]),e},clear:function(){return e.clear(this.chart),this},stop:function(){return t.animationService.cancelAnimation(this),this},resize:function(a){var i=this,n=i.chart,o=n.canvas,r=e.getMaximumWidth(o),l=n.aspectRatio,s=i.options.maintainAspectRatio&&isNaN(l)===!1&&isFinite(l)&&0!==l?r/l:e.getMaximumHeight(o),d=n.width!==r||n.height!==s;if(!d)return i;o.width=n.width=r,o.height=n.height=s,e.retinaScale(n);var u={width:r,height:s};return t.plugins.notify("resize",[i,u]),i.options.onResize&&i.options.onResize(i,u),a||(i.stop(),i.update(i.options.responsiveAnimationDuration)),i},ensureScalesHaveIDs:function(){var t=this.options,a=t.scales||{},i=t.scale;e.each(a.xAxes,function(t,e){t.id=t.id||"x-axis-"+e}),e.each(a.yAxes,function(t,e){t.id=t.id||"y-axis-"+e}),i&&(i.id=i.id||"scale")},buildScales:function(){var a=this,i=a.options,n=a.scales={},o=[];i.scales&&(o=o.concat((i.scales.xAxes||[]).map(function(t){return{options:t,dtype:"category"}}),(i.scales.yAxes||[]).map(function(t){return{options:t,dtype:"linear"}}))),i.scale&&o.push({options:i.scale,dtype:"radialLinear",isDefault:!0}),e.each(o,function(i,o){var r=i.options,l=e.getValueOrDefault(r.type,i.dtype),s=t.scaleService.getScaleConstructor(l);if(s){var d=new s({id:r.id,options:r,ctx:a.chart.ctx,chart:a});n[d.id]=d,i.isDefault&&(a.scale=d)}}),t.scaleService.addScalesToLayout(this)},updateLayout:function(){t.layoutService.update(this,this.chart.width,this.chart.height)},buildOrUpdateControllers:function(){var a=this,i=[],n=[];if(e.each(a.data.datasets,function(e,o){var r=a.getDatasetMeta(o);r.type||(r.type=e.type||a.config.type),i.push(r.type),r.controller?r.controller.updateIndex(o):(r.controller=new t.controllers[r.type](a,o),n.push(r.controller))},a),i.length>1)for(var o=1;o<i.length;o++)if(i[o]!==i[o-1]){a.isCombo=!0;break}return n},resetElements:function(){var t=this;e.each(t.data.datasets,function(e,a){t.getDatasetMeta(a).controller.reset()},t)},update:function(a,i){var n=this;t.plugins.notify("beforeUpdate",[n]),n.tooltip._data=n.data;var o=n.buildOrUpdateControllers();e.each(n.data.datasets,function(t,e){n.getDatasetMeta(e).controller.buildOrUpdateElements()},n),t.layoutService.update(n,n.chart.width,n.chart.height),t.plugins.notify("afterScaleUpdate",[n]),e.each(o,function(t){t.reset()}),n.updateDatasets(),t.plugins.notify("afterUpdate",[n]),n.render(a,i)},updateDatasets:function(){var e,a,i=this;if(t.plugins.notify("beforeDatasetsUpdate",[i])){for(e=0,a=i.data.datasets.length;a>e;++e)i.getDatasetMeta(e).controller.update();t.plugins.notify("afterDatasetsUpdate",[i])}},render:function(a,i){var n=this;t.plugins.notify("beforeRender",[n]);var o=n.options.animation;if(o&&("undefined"!=typeof a&&0!==a||"undefined"==typeof a&&0!==o.duration)){var r=new t.Animation;r.numSteps=(a||o.duration)/16.66,r.easing=o.easing,r.render=function(t,a){var i=e.easingEffects[a.easing],n=a.currentStep/a.numSteps,o=i(n);t.draw(o,n,a.currentStep)},r.onAnimationProgress=o.onProgress,r.onAnimationComplete=o.onComplete,t.animationService.addAnimation(n,r,a,i)}else n.draw(),o&&o.onComplete&&o.onComplete.call&&o.onComplete.call(n);return n},draw:function(a){var i=this,n=a||1;i.clear(),t.plugins.notify("beforeDraw",[i,n]),e.each(i.boxes,function(t){t.draw(i.chartArea)},i),i.scale&&i.scale.draw(),t.plugins.notify("beforeDatasetsDraw",[i,n]),e.each(i.data.datasets,function(t,e){i.isDatasetVisible(e)&&i.getDatasetMeta(e).controller.draw(a)},i,!0),t.plugins.notify("afterDatasetsDraw",[i,n]),i.tooltip.transition(n).draw(),t.plugins.notify("afterDraw",[i,n])},getElementAtEvent:function(t){var a=this,i=e.getRelativePosition(t,a.chart),n=[];return e.each(a.data.datasets,function(t,o){if(a.isDatasetVisible(o)){var r=a.getDatasetMeta(o);e.each(r.data,function(t,e){return t.inRange(i.x,i.y)?(n.push(t),n):void 0})}}),n},getElementsAtEvent:function(t){var a=this,i=e.getRelativePosition(t,a.chart),n=[],o=function(){if(a.data.datasets)for(var t=0;t<a.data.datasets.length;t++){var e=a.getDatasetMeta(t);if(a.isDatasetVisible(t))for(var n=0;n<e.data.length;n++)if(e.data[n].inRange(i.x,i.y))return e.data[n]}}.call(a);return o?(e.each(a.data.datasets,function(t,e){if(a.isDatasetVisible(e)){var i=a.getDatasetMeta(e);n.push(i.data[o._index])}},a),n):n},getElementsAtEventForMode:function(t,e){var a=this;switch(e){case"single":return a.getElementAtEvent(t);case"label":return a.getElementsAtEvent(t);case"dataset":return a.getDatasetAtEvent(t);default:return t}},getDatasetAtEvent:function(t){var e=this.getElementAtEvent(t);return e.length>0&&(e=this.getDatasetMeta(e[0]._datasetIndex).data),e},getDatasetMeta:function(t){var e=this,a=e.data.datasets[t];a._meta||(a._meta={});var i=a._meta[e.id];return i||(i=a._meta[e.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),i},getVisibleDatasetCount:function(){for(var t=0,e=0,a=this.data.datasets.length;a>e;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroy:function(){var a=this;a.stop(),a.clear(),e.unbindEvents(a,a.events),e.removeResizeListener(a.chart.canvas.parentNode);var i=a.chart.canvas;i.width=a.chart.width,i.height=a.chart.height,void 0!==a.chart.originalDevicePixelRatio&&a.chart.ctx.scale(1/a.chart.originalDevicePixelRatio,1/a.chart.originalDevicePixelRatio),i.style.width=a.chart.originalCanvasStyleWidth,i.style.height=a.chart.originalCanvasStyleHeight,t.plugins.notify("destroy",[a]),delete t.instances[a.id]},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments)},initToolTip:function(){var e=this;e.tooltip=new t.Tooltip({_chart:e.chart,_chartInstance:e,_data:e.data,_options:e.options.tooltips},e)},bindEvents:function(){var t=this;e.bindEvents(t,t.options.events,function(e){t.eventHandler(e)})},updateHoverStyle:function(t,e,a){var i,n,o,r=a?"setHoverStyle":"removeHoverStyle";switch(e){case"single":t=[t[0]];break;case"label":case"dataset":break;default:return}for(n=0,o=t.length;o>n;++n)i=t[n],i&&this.getDatasetMeta(i._datasetIndex).controller[r](i)},eventHandler:function(t){var a=this,i=a.tooltip,n=a.options||{},o=n.hover,r=n.tooltips;return a.lastActive=a.lastActive||[],a.lastTooltipActive=a.lastTooltipActive||[],"mouseout"===t.type?(a.active=[],a.tooltipActive=[]):(a.active=a.getElementsAtEventForMode(t,o.mode),a.tooltipActive=a.getElementsAtEventForMode(t,r.mode)),o.onHover&&o.onHover.call(a,a.active),("mouseup"===t.type||"click"===t.type)&&(n.onClick&&n.onClick.call(a,t,a.active),a.legend&&a.legend.handleEvent&&a.legend.handleEvent(t)),a.lastActive.length&&a.updateHoverStyle(a.lastActive,o.mode,!1),a.active.length&&o.mode&&a.updateHoverStyle(a.active,o.mode,!0),(r.enabled||r.custom)&&(i.initialize(),i._active=a.tooltipActive,i.update(!0)),i.pivot(),a.animating||e.arrayEquals(a.active,a.lastActive)&&e.arrayEquals(a.tooltipActive,a.lastTooltipActive)||(a.stop(),(r.enabled||r.custom)&&i.update(!0),a.render(o.animationDuration,!0)),a.lastActive=a.active,a.lastTooltipActive=a.tooltipActive,a}})}},{}],23:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers,a=e.noop;t.DatasetController=function(t,e){this.initialize.call(this,t,e)},e.extend(t.DatasetController.prototype,{datasetElementType:null,dataElementType:null,initialize:function(t,e){var a=this;a.chart=t,a.index=e,a.linkScales(),a.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this,e=t.getMeta(),a=t.getDataset();null===e.xAxisID&&(e.xAxisID=a.xAxisID||t.chart.options.scales.xAxes[0].id),null===e.yAxisID&&(e.yAxisID=a.yAxisID||t.chart.options.scales.yAxes[0].id);
},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},reset:function(){this.update(!0)},createMetaDataset:function(){var t=this,e=t.datasetElementType;return e&&new e({_chart:t.chart.chart,_datasetIndex:t.index})},createMetaData:function(t){var e=this,a=e.dataElementType;return a&&new a({_chart:e.chart.chart,_datasetIndex:e.index,_index:t})},addElements:function(){var t,e,a=this,i=a.getMeta(),n=a.getDataset().data||[],o=i.data;for(t=0,e=n.length;e>t;++t)o[t]=o[t]||a.createMetaData(i,t);i.dataset=i.dataset||a.createMetaDataset()},addElementAndReset:function(t){var e=this,a=e.createMetaData(t);e.getMeta().data.splice(t,0,a),e.updateElement(a,t,!0)},buildOrUpdateElements:function(){var t=this.getMeta(),e=t.data,a=this.getDataset().data.length,i=e.length;if(i>a)e.splice(a,i-a);else if(a>i)for(var n=i;a>n;++n)this.addElementAndReset(n)},update:a,draw:function(t){var a=t||1;e.each(this.getMeta().data,function(t,e){t.transition(a).draw()})},removeHoverStyle:function(t,a){var i=this.chart.data.datasets[t._datasetIndex],n=t._index,o=t.custom||{},r=e.getValueAtIndexOrDefault,l=(e.color,t._model);l.backgroundColor=o.backgroundColor?o.backgroundColor:r(i.backgroundColor,n,a.backgroundColor),l.borderColor=o.borderColor?o.borderColor:r(i.borderColor,n,a.borderColor),l.borderWidth=o.borderWidth?o.borderWidth:r(i.borderWidth,n,a.borderWidth)},setHoverStyle:function(t){var a=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},o=e.getValueAtIndexOrDefault,r=(e.color,e.getHoverColor),l=t._model;l.backgroundColor=n.hoverBackgroundColor?n.hoverBackgroundColor:o(a.hoverBackgroundColor,i,r(l.backgroundColor)),l.borderColor=n.hoverBorderColor?n.hoverBorderColor:o(a.hoverBorderColor,i,r(l.borderColor)),l.borderWidth=n.hoverBorderWidth?n.hoverBorderWidth:o(a.hoverBorderWidth,i,l.borderWidth)}}),t.DatasetController.extend=e.inherits}},{}],24:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.elements={},t.Element=function(t){e.extend(this,t),this.initialize.apply(this,arguments)},e.extend(t.Element.prototype,{initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=e.clone(t._model)),t._start=e.clone(t._view),t},transition:function(t){var a=this;return a._view||(a._view=e.clone(a._model)),1===t?(a._view=a._model,a._start=null,a):(a._start||a.pivot(),e.each(a._model,function(i,n){if("_"===n[0]);else if(a._view.hasOwnProperty(n))if(i===a._view[n]);else if("string"==typeof i)try{var o=e.color(a._model[n]).mix(e.color(a._start[n]),t);a._view[n]=o.rgbString()}catch(r){a._view[n]=i}else if("number"==typeof i){var l=void 0!==a._start[n]&&isNaN(a._start[n])===!1?a._start[n]:0;a._view[n]=(a._model[n]-l)*t+l}else a._view[n]=i;else"number"!=typeof i||isNaN(a._view[n])?a._view[n]=i:a._view[n]=i*t},a),a)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return e.isNumber(this._model.x)&&e.isNumber(this._model.y)}}),t.Element.extend=e.inherits}},{}],25:[function(t,e,a){"use strict";var i=t(3);e.exports=function(t){function e(t,e,a){var i;return"string"==typeof t?(i=parseInt(t,10),-1!=t.indexOf("%")&&(i=i/100*e.parentNode[a])):i=t,i}function a(t){return void 0!==t&&null!==t&&"none"!==t}function n(t,i,n){var o=document.defaultView,r=t.parentNode,l=o.getComputedStyle(t)[i],s=o.getComputedStyle(r)[i],d=a(l),u=a(s),c=Number.POSITIVE_INFINITY;return d||u?Math.min(d?e(l,t,n):c,u?e(s,r,n):c):"none"}var o=t.helpers={};o.each=function(t,e,a,i){var n,r;if(o.isArray(t))if(r=t.length,i)for(n=r-1;n>=0;n--)e.call(a,t[n],n);else for(n=0;r>n;n++)e.call(a,t[n],n);else if("object"==typeof t){var l=Object.keys(t);for(r=l.length,n=0;r>n;n++)e.call(a,t[l[n]],l[n])}},o.clone=function(t){var e={};return o.each(t,function(t,a){o.isArray(t)?e[a]=t.slice(0):"object"==typeof t&&null!==t?e[a]=o.clone(t):e[a]=t}),e},o.extend=function(t){for(var e=function(e,a){t[a]=e},a=1,i=arguments.length;i>a;a++)o.each(arguments[a],e);return t},o.configMerge=function(e){var a=o.clone(e);return o.each(Array.prototype.slice.call(arguments,1),function(e){o.each(e,function(e,i){if("scales"===i)a[i]=o.scaleMerge(a.hasOwnProperty(i)?a[i]:{},e);else if("scale"===i)a[i]=o.configMerge(a.hasOwnProperty(i)?a[i]:{},t.scaleService.getScaleDefaults(e.type),e);else if(a.hasOwnProperty(i)&&o.isArray(a[i])&&o.isArray(e)){var n=a[i];o.each(e,function(t,e){e<n.length?"object"==typeof n[e]&&null!==n[e]&&"object"==typeof t&&null!==t?n[e]=o.configMerge(n[e],t):n[e]=t:n.push(t)})}else a.hasOwnProperty(i)&&"object"==typeof a[i]&&null!==a[i]&&"object"==typeof e?a[i]=o.configMerge(a[i],e):a[i]=e})}),a},o.scaleMerge=function(e,a){var i=o.clone(e);return o.each(a,function(e,a){"xAxes"===a||"yAxes"===a?i.hasOwnProperty(a)?o.each(e,function(e,n){var r=o.getValueOrDefault(e.type,"xAxes"===a?"category":"linear"),l=t.scaleService.getScaleDefaults(r);n>=i[a].length||!i[a][n].type?i[a].push(o.configMerge(l,e)):e.type&&e.type!==i[a][n].type?i[a][n]=o.configMerge(i[a][n],l,e):i[a][n]=o.configMerge(i[a][n],e)}):(i[a]=[],o.each(e,function(e){var n=o.getValueOrDefault(e.type,"xAxes"===a?"category":"linear");i[a].push(o.configMerge(t.scaleService.getScaleDefaults(n),e))})):i.hasOwnProperty(a)&&"object"==typeof i[a]&&null!==i[a]&&"object"==typeof e?i[a]=o.configMerge(i[a],e):i[a]=e}),i},o.getValueAtIndexOrDefault=function(t,e,a){return void 0===t||null===t?a:o.isArray(t)?e<t.length?t[e]:a:t},o.getValueOrDefault=function(t,e){return void 0===t?e:t},o.indexOf=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var a=0,i=t.length;i>a;++a)if(t[a]===e)return a;return-1},o.where=function(t,e){if(o.isArray(t)&&Array.prototype.filter)return t.filter(e);var a=[];return o.each(t,function(t){e(t)&&a.push(t)}),a},o.findIndex=Array.prototype.findIndex?function(t,e,a){return t.findIndex(e,a)}:function(t,e,a){a=void 0===a?t:a;for(var i=0,n=t.length;n>i;++i)if(e.call(a,t[i],i,t))return i;return-1},o.findNextWhere=function(t,e,a){(void 0===a||null===a)&&(a=-1);for(var i=a+1;i<t.length;i++){var n=t[i];if(e(n))return n}},o.findPreviousWhere=function(t,e,a){(void 0===a||null===a)&&(a=t.length);for(var i=a-1;i>=0;i--){var n=t[i];if(e(n))return n}},o.inherits=function(t){var e=this,a=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},i=function(){this.constructor=a};return i.prototype=e.prototype,a.prototype=new i,a.extend=o.inherits,t&&o.extend(a.prototype,t),a.__super__=e.prototype,a},o.noop=function(){},o.uid=function(){var t=0;return function(){return t++}}(),o.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},o.almostEquals=function(t,e,a){return Math.abs(t-e)<a},o.max=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.max(t,e)},Number.NEGATIVE_INFINITY)},o.min=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.min(t,e)},Number.POSITIVE_INFINITY)},o.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return t=+t,0===t||isNaN(t)?t:t>0?1:-1},o.log10=Math.log10?function(t){return Math.log10(t)}:function(t){return Math.log(t)/Math.LN10},o.toRadians=function(t){return t*(Math.PI/180)},o.toDegrees=function(t){return t*(180/Math.PI)},o.getAngleFromPoint=function(t,e){var a=e.x-t.x,i=e.y-t.y,n=Math.sqrt(a*a+i*i),o=Math.atan2(i,a);return o<-.5*Math.PI&&(o+=2*Math.PI),{angle:o,distance:n}},o.aliasPixel=function(t){return t%2===0?0:.5},o.splineCurve=function(t,e,a,i){var n=t.skip?e:t,o=e,r=a.skip?e:a,l=Math.sqrt(Math.pow(o.x-n.x,2)+Math.pow(o.y-n.y,2)),s=Math.sqrt(Math.pow(r.x-o.x,2)+Math.pow(r.y-o.y,2)),d=l/(l+s),u=s/(l+s);d=isNaN(d)?0:d,u=isNaN(u)?0:u;var c=i*d,h=i*u;return{previous:{x:o.x-c*(r.x-n.x),y:o.y-c*(r.y-n.y)},next:{x:o.x+h*(r.x-n.x),y:o.y+h*(r.y-n.y)}}},o.nextItem=function(t,e,a){return a?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},o.previousItem=function(t,e,a){return a?0>=e?t[t.length-1]:t[e-1]:0>=e?t[0]:t[e-1]},o.niceNum=function(t,e){var a,i=Math.floor(o.log10(t)),n=t/Math.pow(10,i);return a=e?1.5>n?1:3>n?2:7>n?5:10:1>=n?1:2>=n?2:5>=n?5:10,a*Math.pow(10,i)};var r=o.easingEffects={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-0.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-0.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-0.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(-Math.pow(2,-10*t/1)+1)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-0.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,a=0,i=1;return 0===t?0:1===(t/=1)?1:(a||(a=.3),i<Math.abs(1)?(i=1,e=a/4):e=a/(2*Math.PI)*Math.asin(1/i),-(i*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/a)))},easeOutElastic:function(t){var e=1.70158,a=0,i=1;return 0===t?0:1===(t/=1)?1:(a||(a=.3),i<Math.abs(1)?(i=1,e=a/4):e=a/(2*Math.PI)*Math.asin(1/i),i*Math.pow(2,-10*t)*Math.sin((1*t-e)*(2*Math.PI)/a)+1)},easeInOutElastic:function(t){var e=1.70158,a=0,i=1;return 0===t?0:2===(t/=.5)?1:(a||(a=1*(.3*1.5)),i<Math.abs(1)?(i=1,e=a/4):e=a/(2*Math.PI)*Math.asin(1/i),1>t?-.5*(i*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/a)):i*Math.pow(2,-10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/a)*.5+1)},easeInBack:function(t){var e=1.70158;return 1*(t/=1)*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return 1*((t=t/1-1)*t*((e+1)*t+e)+1)},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:function(t){return 1-r.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?1*(7.5625*t*t):2/2.75>t?1*(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return.5>t?.5*r.easeInBounce(2*t):.5*r.easeOutBounce(2*t-1)+.5}};o.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),o.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t,1e3/60)}}(),o.getRelativePosition=function(t,e){var a,i,n=t.originalEvent||t,r=t.currentTarget||t.srcElement,l=r.getBoundingClientRect(),s=n.touches;s&&s.length>0?(a=s[0].clientX,i=s[0].clientY):(a=n.clientX,i=n.clientY);var d=parseFloat(o.getStyle(r,"padding-left")),u=parseFloat(o.getStyle(r,"padding-top")),c=parseFloat(o.getStyle(r,"padding-right")),h=parseFloat(o.getStyle(r,"padding-bottom")),f=l.right-l.left-d-c,g=l.bottom-l.top-u-h;return a=Math.round((a-l.left-d)/f*r.width/e.currentDevicePixelRatio),i=Math.round((i-l.top-u)/g*r.height/e.currentDevicePixelRatio),{x:a,y:i}},o.addEvent=function(t,e,a){t.addEventListener?t.addEventListener(e,a):t.attachEvent?t.attachEvent("on"+e,a):t["on"+e]=a},o.removeEvent=function(t,e,a){t.removeEventListener?t.removeEventListener(e,a,!1):t.detachEvent?t.detachEvent("on"+e,a):t["on"+e]=o.noop},o.bindEvents=function(t,e,a){var i=t.events=t.events||{};o.each(e,function(e){i[e]=function(){a.apply(t,arguments)},o.addEvent(t.chart.canvas,e,i[e])})},o.unbindEvents=function(t,e){var a=t.chart.canvas;o.each(e,function(t,e){o.removeEvent(a,e,t)})},o.getConstraintWidth=function(t){return n(t,"max-width","clientWidth")},o.getConstraintHeight=function(t){return n(t,"max-height","clientHeight")},o.getMaximumWidth=function(t){var e=t.parentNode,a=parseInt(o.getStyle(e,"padding-left"))+parseInt(o.getStyle(e,"padding-right")),i=e.clientWidth-a,n=o.getConstraintWidth(t);return isNaN(n)?i:Math.min(i,n)},o.getMaximumHeight=function(t){var e=t.parentNode,a=parseInt(o.getStyle(e,"padding-top"))+parseInt(o.getStyle(e,"padding-bottom")),i=e.clientHeight-a,n=o.getConstraintHeight(t);return isNaN(n)?i:Math.min(i,n)},o.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},o.retinaScale=function(t){var e=t.ctx,a=t.canvas,i=a.width,n=a.height,o=t.currentDevicePixelRatio=window.devicePixelRatio||1;1!==o&&(a.height=n*o,a.width=i*o,e.scale(o,o),t.originalDevicePixelRatio=t.originalDevicePixelRatio||o),a.style.width=i+"px",a.style.height=n+"px"},o.clear=function(t){t.ctx.clearRect(0,0,t.width,t.height)},o.fontString=function(t,e,a){return e+" "+t+"px "+a},o.longestText=function(t,e,a,i){i=i||{};var n=i.data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(n=i.data={},r=i.garbageCollect=[],i.font=e),t.font=e;var l=0;o.each(a,function(e){void 0!==e&&null!==e&&o.isArray(e)!==!0?l=o.measureText(t,n,r,l,e):o.isArray(e)&&o.each(e,function(e){void 0===e||null===e||o.isArray(e)||(l=o.measureText(t,n,r,l,e))})});var s=r.length/2;if(s>a.length){for(var d=0;s>d;d++)delete n[r[d]];r.splice(0,s)}return l},o.measureText=function(t,e,a,i,n){var o=e[n];return o||(o=e[n]=t.measureText(n).width,a.push(n)),o>i&&(i=o),i},o.numberOfLabelLines=function(t){var e=1;return o.each(t,function(t){o.isArray(t)&&t.length>e&&(e=t.length)}),e},o.drawRoundedRectangle=function(t,e,a,i,n,o){t.beginPath(),t.moveTo(e+o,a),t.lineTo(e+i-o,a),t.quadraticCurveTo(e+i,a,e+i,a+o),t.lineTo(e+i,a+n-o),t.quadraticCurveTo(e+i,a+n,e+i-o,a+n),t.lineTo(e+o,a+n),t.quadraticCurveTo(e,a+n,e,a+n-o),t.lineTo(e,a+o),t.quadraticCurveTo(e,a,e+o,a),t.closePath()},o.color=function(e){return i?i(e instanceof CanvasGradient?t.defaults.global.defaultColor:e):(console.log("Color.js not found!"),e)},o.addResizeListener=function(t,e){var a=document.createElement("iframe"),i="chartjs-hidden-iframe";a.classlist?a.classlist.add(i):a.setAttribute("class",i);var n=a.style;n.width="100%",n.display="block",n.border=0,n.height=0,n.margin=0,n.position="absolute",n.left=0,n.right=0,n.top=0,n.bottom=0,t.insertBefore(a,t.firstChild),(a.contentWindow||a).onresize=function(){e&&e()}},o.removeResizeListener=function(t){var e=t.querySelector(".chartjs-hidden-iframe");e&&e.parentNode.removeChild(e)},o.isArray=Array.isArray?function(t){return Array.isArray(t)}:function(t){return"[object Array]"===Object.prototype.toString.call(t)},o.arrayEquals=function(t,e){var a,i,n,r;if(!t||!e||t.length!=e.length)return!1;for(a=0,i=t.length;i>a;++a)if(n=t[a],r=e[a],n instanceof Array&&r instanceof Array){if(!o.arrayEquals(n,r))return!1}else if(n!=r)return!1;return!0},o.callCallback=function(t,e,a){t&&"function"==typeof t.call&&t.apply(a,e)},o.getHoverColor=function(t){return t instanceof CanvasPattern?t:o.color(t).saturate(.5).darken(.1).rgbString()}}},{3:3}],26:[function(t,e,a){"use strict";e.exports=function(){var t=function(e,a){var i=this,n=t.helpers;return i.config=a,e.length&&e[0].getContext&&(e=e[0]),e.getContext&&(e=e.getContext("2d")),i.ctx=e,i.canvas=e.canvas,e.canvas.style.display=e.canvas.style.display||"block",i.width=e.canvas.width||parseInt(n.getStyle(e.canvas,"width"),10)||n.getMaximumWidth(e.canvas),i.height=e.canvas.height||parseInt(n.getStyle(e.canvas,"height"),10)||n.getMaximumHeight(e.canvas),i.aspectRatio=i.width/i.height,(isNaN(i.aspectRatio)||isFinite(i.aspectRatio)===!1)&&(i.aspectRatio=void 0!==a.aspectRatio?a.aspectRatio:2),i.originalCanvasStyleWidth=e.canvas.style.width,i.originalCanvasStyleHeight=e.canvas.style.height,n.retinaScale(i),a&&(i.controller=new t.Controller(i)),n.addResizeListener(e.canvas.parentNode,function(){i.controller&&i.controller.config.options.responsive&&i.controller.resize()}),i.controller?i.controller:i};return t.defaults={global:{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"single",animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,elements:{},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var a=0;a<t.data.datasets.length;a++)e.push('<li><span style="background-color:'+t.data.datasets[a].backgroundColor+'"></span>'),t.data.datasets[a].label&&e.push(t.data.datasets[a].label),e.push("</li>");return e.push("</ul>"),e.join("")}}},t.Chart=t,t}},{}],27:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.layoutService={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),t.boxes.push(e)},removeBox:function(t,e){t.boxes&&t.boxes.splice(t.boxes.indexOf(e),1)},update:function(t,a,i){function n(t){var e,a=t.isHorizontal();a?(e=t.update(t.options.fullWidth?p:k,y),S-=e.height):(e=t.update(x,v),k-=e.width),w.push({horizontal:a,minSize:e,box:t})}function o(t){var a=e.findNextWhere(w,function(e){return e.box===t});if(a)if(t.isHorizontal()){var i={left:C,right:M,top:0,bottom:0};t.update(t.options.fullWidth?p:k,m/2,i)}else t.update(a.minSize.width,S)}function r(t){var a=e.findNextWhere(w,function(e){return e.box===t}),i={left:0,right:0,top:D,bottom:A};a&&t.update(a.minSize.width,S,i)}function l(t){t.isHorizontal()?(t.left=t.options.fullWidth?s:C,t.right=t.options.fullWidth?a-s:C+k,t.top=P,t.bottom=P+t.height,P=t.bottom):(t.left=T,t.right=T+t.width,t.top=D,t.bottom=D+S,T=t.right)}if(t){var s=0,d=0,u=e.where(t.boxes,function(t){return"left"===t.options.position}),c=e.where(t.boxes,function(t){return"right"===t.options.position}),h=e.where(t.boxes,function(t){return"top"===t.options.position}),f=e.where(t.boxes,function(t){return"bottom"===t.options.position}),g=e.where(t.boxes,function(t){return"chartArea"===t.options.position});h.sort(function(t,e){return(e.options.fullWidth?1:0)-(t.options.fullWidth?1:0)}),f.sort(function(t,e){return(t.options.fullWidth?1:0)-(e.options.fullWidth?1:0)});var p=a-2*s,m=i-2*d,b=p/2,v=m/2,x=(a-b)/(u.length+c.length),y=(i-v)/(h.length+f.length),k=p,S=m,w=[];e.each(u.concat(c,h,f),n);var C=s,M=s,D=d,A=d;e.each(u.concat(c),o),e.each(u,function(t){C+=t.width}),e.each(c,function(t){M+=t.width}),e.each(h.concat(f),o),e.each(h,function(t){D+=t.height}),e.each(f,function(t){A+=t.height}),e.each(u.concat(c),r),C=s,M=s,D=d,A=d,e.each(u,function(t){C+=t.width}),e.each(c,function(t){M+=t.width}),e.each(h,function(t){D+=t.height}),e.each(f,function(t){A+=t.height});var I=i-D-A,F=a-C-M;(F!==k||I!==S)&&(e.each(u,function(t){t.height=I}),e.each(c,function(t){t.height=I}),e.each(h,function(t){t.options.fullWidth||(t.width=F)}),e.each(f,function(t){t.options.fullWidth||(t.width=F)}),S=I,k=F);var T=s,P=d;e.each(u.concat(h),l),T+=k,P+=S,e.each(c,l),e.each(f,l),t.chartArea={left:C,top:D,right:C+k,bottom:D+S},e.each(g,function(e){e.left=t.chartArea.left,e.top=t.chartArea.top,e.right=t.chartArea.right,e.bottom=t.chartArea.bottom,e.update(k,S)})}}}}},{}],28:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers,a=e.noop;t.defaults.global.legend={display:!0,position:"top",fullWidth:!0,reverse:!1,onClick:function(t,e){var a=e.datasetIndex,i=this.chart,n=i.getDatasetMeta(a);n.hidden=null===n.hidden?!i.data.datasets[a].hidden:null,i.update()},labels:{boxWidth:40,padding:10,generateLabels:function(t){var a=t.data;return e.isArray(a.datasets)?a.datasets.map(function(a,i){return{text:a.label,fillStyle:e.isArray(a.backgroundColor)?a.backgroundColor[0]:a.backgroundColor,hidden:!t.isDatasetVisible(i),lineCap:a.borderCapStyle,lineDash:a.borderDash,lineDashOffset:a.borderDashOffset,lineJoin:a.borderJoinStyle,lineWidth:a.borderWidth,strokeStyle:a.borderColor,datasetIndex:i}},this):[]}}},t.Legend=t.Element.extend({initialize:function(t){e.extend(this,t),this.legendHitBoxes=[],this.doughnutMode=!1},beforeUpdate:a,update:function(t,e,a){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=a,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:a,beforeSetDimensions:a,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:a,beforeBuildLabels:a,buildLabels:function(){var t=this;t.legendItems=t.options.labels.generateLabels.call(t,t.chart),t.options.reverse&&t.legendItems.reverse()},afterBuildLabels:a,beforeFit:a,fit:function(){var a=this,i=a.options,n=i.labels,o=i.display,r=a.ctx,l=t.defaults.global,s=e.getValueOrDefault,d=s(n.fontSize,l.defaultFontSize),u=s(n.fontStyle,l.defaultFontStyle),c=s(n.fontFamily,l.defaultFontFamily),h=e.fontString(d,u,c),f=a.legendHitBoxes=[],g=a.minSize,p=a.isHorizontal();if(p?(g.width=a.maxWidth,g.height=o?10:0):(g.width=o?10:0,g.height=a.maxHeight),o)if(r.font=h,p){var m=a.lineWidths=[0],b=a.legendItems.length?d+n.padding:0;r.textAlign="left",r.textBaseline="top",e.each(a.legendItems,function(t,e){var i=n.boxWidth+d/2+r.measureText(t.text).width;m[m.length-1]+i+n.padding>=a.width&&(b+=d+n.padding,m[m.length]=a.left),f[e]={left:0,top:0,width:i,height:d},m[m.length-1]+=i+n.padding}),g.height+=b}else{var v=n.padding,x=a.columnWidths=[],y=n.padding,k=0,S=0,w=d+v;e.each(a.legendItems,function(t,e){var a=n.boxWidth+d/2+r.measureText(t.text).width;S+w>g.height&&(y+=k+n.padding,x.push(k),k=0,S=0),k=Math.max(k,a),S+=w,f[e]={left:0,top:0,width:a,height:d}}),y+=k,x.push(k),g.width+=y}a.width=g.width,a.height=g.height},afterFit:a,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var a=this,i=a.options,n=i.labels,o=t.defaults.global,r=o.elements.line,l=a.width,s=(a.height,a.lineWidths);if(i.display){var d,u=a.ctx,c=e.getValueOrDefault,h=c(n.fontColor,o.defaultFontColor),f=c(n.fontSize,o.defaultFontSize),g=c(n.fontStyle,o.defaultFontStyle),p=c(n.fontFamily,o.defaultFontFamily),m=e.fontString(f,g,p);u.textAlign="left",u.textBaseline="top",u.lineWidth=.5,u.strokeStyle=h,u.fillStyle=h,u.font=m;var b=n.boxWidth,v=a.legendHitBoxes,x=function(t,e,a){u.save(),u.fillStyle=c(a.fillStyle,o.defaultColor),u.lineCap=c(a.lineCap,r.borderCapStyle),u.lineDashOffset=c(a.lineDashOffset,r.borderDashOffset),u.lineJoin=c(a.lineJoin,r.borderJoinStyle),u.lineWidth=c(a.lineWidth,r.borderWidth),u.strokeStyle=c(a.strokeStyle,o.defaultColor),u.setLineDash&&u.setLineDash(c(a.lineDash,r.borderDash)),u.strokeRect(t,e,b,f),u.fillRect(t,e,b,f),u.restore()},y=function(t,e,a,i){u.fillText(a.text,b+f/2+t,e),a.hidden&&(u.beginPath(),u.lineWidth=2,u.moveTo(b+f/2+t,e+f/2),u.lineTo(b+f/2+t+i,e+f/2),u.stroke())},k=a.isHorizontal();d=k?{x:a.left+(l-s[0])/2,y:a.top+n.padding,line:0}:{x:a.left+n.padding,y:a.top,line:0};var S=f+n.padding;e.each(a.legendItems,function(t,e){var i=u.measureText(t.text).width,o=b+f/2+i,r=d.x,c=d.y;k?r+o>=l&&(c=d.y+=f+n.padding,d.line++,r=d.x=a.left+(l-s[d.line])/2):c+S>a.bottom&&(r=d.x=r+a.columnWidths[d.line]+n.padding,c=d.y=a.top,d.line++),x(r,c,t),v[e].left=r,v[e].top=c,y(r,c,t,i),k?d.x+=o+n.padding:d.y+=S})}},handleEvent:function(t){var a=this,i=e.getRelativePosition(t,a.chart.chart),n=i.x,o=i.y,r=a.options;if(n>=a.left&&n<=a.right&&o>=a.top&&o<=a.bottom)for(var l=a.legendHitBoxes,s=0;s<l.length;++s){var d=l[s];if(n>=d.left&&n<=d.left+d.width&&o>=d.top&&o<=d.top+d.height){r.onClick&&r.onClick.call(a,t,a.legendItems[s]);break}}}}),t.plugins.register({beforeInit:function(e){var a=e.options,i=a.legend;i&&(e.legend=new t.Legend({ctx:e.chart.ctx,options:i,chart:e}),t.layoutService.addBox(e,e.legend))}})}},{}],29:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers.noop;t.plugins={_plugins:[],register:function(t){var e=this._plugins;[].concat(t).forEach(function(t){-1===e.indexOf(t)&&e.push(t)})},unregister:function(t){var e=this._plugins;[].concat(t).forEach(function(t){var a=e.indexOf(t);-1!==a&&e.splice(a,1)})},clear:function(){this._plugins=[]},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e){var a,i,n=this._plugins,o=n.length;for(a=0;o>a;++a)if(i=n[a],"function"==typeof i[t]&&i[t].apply(i,e||[])===!1)return!1;return!0}},t.PluginBase=t.Element.extend({beforeInit:e,afterInit:e,beforeUpdate:e,afterUpdate:e,beforeDraw:e,afterDraw:e,destroy:e}),t.pluginService=t.plugins}},{}],30:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.scale={display:!0,position:"left",gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",offsetGridLines:!1},scaleLabel:{labelString:"",display:!1},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:10,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:function(t){return e.isArray(t)?t:""+t}}},t.Scale=t.Element.extend({beforeUpdate:function(){e.callCallback(this.options.beforeUpdate,[this])},update:function(t,a,i){var n=this;return n.beforeUpdate(),n.maxWidth=t,n.maxHeight=a,n.margins=e.extend({left:0,right:0,top:0,bottom:0},i),n.beforeSetDimensions(),n.setDimensions(),n.afterSetDimensions(),n.beforeDataLimits(),n.determineDataLimits(),n.afterDataLimits(),n.beforeBuildTicks(),n.buildTicks(),n.afterBuildTicks(),n.beforeTickToLabelConversion(),n.convertTicksToLabels(),n.afterTickToLabelConversion(),n.beforeCalculateTickRotation(),n.calculateTickRotation(),n.afterCalculateTickRotation(),n.beforeFit(),n.fit(),n.afterFit(),n.afterUpdate(),n.minSize},afterUpdate:function(){e.callCallback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){e.callCallback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){e.callCallback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){e.callCallback(this.options.beforeDataLimits,[this])},determineDataLimits:e.noop,afterDataLimits:function(){e.callCallback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){e.callCallback(this.options.beforeBuildTicks,[this])},buildTicks:e.noop,afterBuildTicks:function(){e.callCallback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){e.callCallback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this;t.ticks=t.ticks.map(function(e,a,i){return t.options.ticks.userCallback?t.options.ticks.userCallback(e,a,i):t.options.ticks.callback(e,a,i)},t)},afterTickToLabelConversion:function(){e.callCallback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){e.callCallback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var a=this,i=a.ctx,n=t.defaults.global,o=a.options.ticks,r=e.getValueOrDefault(o.fontSize,n.defaultFontSize),l=e.getValueOrDefault(o.fontStyle,n.defaultFontStyle),s=e.getValueOrDefault(o.fontFamily,n.defaultFontFamily),d=e.fontString(r,l,s);i.font=d;var u,c=i.measureText(a.ticks[0]).width,h=i.measureText(a.ticks[a.ticks.length-1]).width;if(a.labelRotation=o.minRotation||0,a.paddingRight=0,a.paddingLeft=0,a.options.display&&a.isHorizontal()){a.paddingRight=h/2+3,a.paddingLeft=c/2+3,a.longestTextCache||(a.longestTextCache={});for(var f,g,p=e.longestText(i,d,a.ticks,a.longestTextCache),m=p,b=a.getPixelForTick(1)-a.getPixelForTick(0)-6;m>b&&a.labelRotation<o.maxRotation;){if(f=Math.cos(e.toRadians(a.labelRotation)),g=Math.sin(e.toRadians(a.labelRotation)),u=f*c,u+r/2>a.yLabelWidth&&(a.paddingLeft=u+r/2),a.paddingRight=r/2,g*p>a.maxHeight){a.labelRotation--;break}a.labelRotation++,m=f*p}}a.margins&&(a.paddingLeft=Math.max(a.paddingLeft-a.margins.left,0),a.paddingRight=Math.max(a.paddingRight-a.margins.right,0))},afterCalculateTickRotation:function(){e.callCallback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){e.callCallback(this.options.beforeFit,[this])},fit:function(){var a=this,i=a.minSize={width:0,height:0},n=a.options,o=t.defaults.global,r=n.ticks,l=n.scaleLabel,s=n.display,d=a.isHorizontal(),u=e.getValueOrDefault(r.fontSize,o.defaultFontSize),c=e.getValueOrDefault(r.fontStyle,o.defaultFontStyle),h=e.getValueOrDefault(r.fontFamily,o.defaultFontFamily),f=e.fontString(u,c,h),g=e.getValueOrDefault(l.fontSize,o.defaultFontSize),p=e.getValueOrDefault(l.fontStyle,o.defaultFontStyle),m=e.getValueOrDefault(l.fontFamily,o.defaultFontFamily),b=(e.fontString(g,p,m),n.gridLines.tickMarkLength);if(d?i.width=a.isFullWidth()?a.maxWidth-a.margins.left-a.margins.right:a.maxWidth:i.width=s?b:0,d?i.height=s?b:0:i.height=a.maxHeight,l.display&&s&&(d?i.height+=1.5*g:i.width+=1.5*g),r.display&&s){a.longestTextCache||(a.longestTextCache={});var v=e.longestText(a.ctx,f,a.ticks,a.longestTextCache),x=e.numberOfLabelLines(a.ticks),y=.5*u;if(d){a.longestLabelWidth=v;var k=Math.sin(e.toRadians(a.labelRotation))*a.longestLabelWidth+u*x+y*x;i.height=Math.min(a.maxHeight,i.height+k),a.ctx.font=f;var S=a.ctx.measureText(a.ticks[0]).width,w=a.ctx.measureText(a.ticks[a.ticks.length-1]).width,C=Math.cos(e.toRadians(a.labelRotation)),M=Math.sin(e.toRadians(a.labelRotation));a.paddingLeft=0!==a.labelRotation?C*S+3:S/2+3,a.paddingRight=0!==a.labelRotation?M*(u/2)+3:w/2+3}else{var D=a.maxWidth-i.width,A=r.mirror;A?v=0:v+=a.options.ticks.padding,D>v?i.width+=v:i.width=a.maxWidth,a.paddingTop=u/2,a.paddingBottom=u/2}}a.margins&&(a.paddingLeft=Math.max(a.paddingLeft-a.margins.left,0),a.paddingTop=Math.max(a.paddingTop-a.margins.top,0),a.paddingRight=Math.max(a.paddingRight-a.margins.right,0),a.paddingBottom=Math.max(a.paddingBottom-a.margins.bottom,0)),a.width=i.width,a.height=i.height},afterFit:function(){e.callCallback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function a(t){return null===t||"undefined"==typeof t?NaN:"number"==typeof t&&isNaN(t)?NaN:"object"==typeof t?t instanceof Date||t.isValid?t:a(this.isHorizontal()?t.x:t.y):t},getLabelForIndex:e.noop,getPixelForValue:e.noop,getValueForPixel:e.noop,getPixelForTick:function(t,e){var a=this;if(a.isHorizontal()){var i=a.width-(a.paddingLeft+a.paddingRight),n=i/Math.max(a.ticks.length-(a.options.gridLines.offsetGridLines?0:1),1),o=n*t+a.paddingLeft;e&&(o+=n/2);var r=a.left+Math.round(o);return r+=a.isFullWidth()?a.margins.left:0}var l=a.height-(a.paddingTop+a.paddingBottom);return a.top+t*(l/(a.ticks.length-1))},getPixelForDecimal:function(t){var e=this;if(e.isHorizontal()){var a=e.width-(e.paddingLeft+e.paddingRight),i=a*t+e.paddingLeft,n=e.left+Math.round(i);return n+=e.isFullWidth()?e.margins.left:0}return e.top+t*e.height},getBasePixel:function(){var t=this,e=t.min,a=t.max;return t.getPixelForValue(t.beginAtZero?0:0>e&&0>a?a:e>0&&a>0?e:0)},draw:function(a){var i=this,n=i.options;if(n.display){
    var o,r,l=i.ctx,s=t.defaults.global,d=n.ticks,u=n.gridLines,c=n.scaleLabel,h=0!==i.labelRotation,f=d.autoSkip,g=i.isHorizontal();d.maxTicksLimit&&(r=d.maxTicksLimit);var p=e.getValueOrDefault(d.fontColor,s.defaultFontColor),m=e.getValueOrDefault(d.fontSize,s.defaultFontSize),b=e.getValueOrDefault(d.fontStyle,s.defaultFontStyle),v=e.getValueOrDefault(d.fontFamily,s.defaultFontFamily),x=e.fontString(m,b,v),y=u.tickMarkLength,k=e.getValueOrDefault(c.fontColor,s.defaultFontColor),S=e.getValueOrDefault(c.fontSize,s.defaultFontSize),w=e.getValueOrDefault(c.fontStyle,s.defaultFontStyle),C=e.getValueOrDefault(c.fontFamily,s.defaultFontFamily),M=e.fontString(S,w,C),D=e.toRadians(i.labelRotation),A=Math.cos(D),I=(Math.sin(D),i.longestLabelWidth*A);l.fillStyle=p;var F=[];if(g){if(o=!1,h&&(I/=2),(I+d.autoSkipPadding)*i.ticks.length>i.width-(i.paddingLeft+i.paddingRight)&&(o=1+Math.floor((I+d.autoSkipPadding)*i.ticks.length/(i.width-(i.paddingLeft+i.paddingRight)))),r&&i.ticks.length>r)for(;!o||i.ticks.length/(o||1)>r;)o||(o=1),o+=1;f||(o=!1)}var T="right"===n.position?i.left:i.right-y,P="right"===n.position?i.left+y:i.right,_="bottom"===n.position?i.top:i.bottom-y,R="bottom"===n.position?i.top+y:i.bottom;if(e.each(i.ticks,function(t,r){if(void 0!==t&&null!==t){var l=i.ticks.length===r+1,s=o>1&&r%o>0||r%o===0&&r+o>=i.ticks.length;if((!s||l)&&void 0!==t&&null!==t){var c,f;r===("undefined"!=typeof i.zeroLineIndex?i.zeroLineIndex:0)?(c=u.zeroLineWidth,f=u.zeroLineColor):(c=e.getValueAtIndexOrDefault(u.lineWidth,r),f=e.getValueAtIndexOrDefault(u.color,r));var p,m,b,v,x,k,S,w,C,M,A,I="middle";if(g){h||(I="top"===n.position?"bottom":"top"),A=h?"right":"center";var V=i.getPixelForTick(r)+e.aliasPixel(c);C=i.getPixelForTick(r,u.offsetGridLines)+d.labelOffset,M=h?i.top+12:"top"===n.position?i.bottom-y:i.top+y,p=b=x=S=V,m=_,v=R,k=a.top,w=a.bottom}else{"left"===n.position?d.mirror?(C=i.right+d.padding,A="left"):(C=i.right-d.padding,A="right"):d.mirror?(C=i.left-d.padding,A="right"):(C=i.left+d.padding,A="left");var O=i.getPixelForTick(r);O+=e.aliasPixel(c),M=i.getPixelForTick(r,u.offsetGridLines),p=T,b=P,x=a.left,S=a.right,m=v=k=w=O}F.push({tx1:p,ty1:m,tx2:b,ty2:v,x1:x,y1:k,x2:S,y2:w,labelX:C,labelY:M,glWidth:c,glColor:f,rotation:-1*D,label:t,textBaseline:I,textAlign:A})}}}),e.each(F,function(t){if(u.display&&(l.lineWidth=t.glWidth,l.strokeStyle=t.glColor,l.beginPath(),u.drawTicks&&(l.moveTo(t.tx1,t.ty1),l.lineTo(t.tx2,t.ty2)),u.drawOnChartArea&&(l.moveTo(t.x1,t.y1),l.lineTo(t.x2,t.y2)),l.stroke()),d.display){l.save(),l.translate(t.labelX,t.labelY),l.rotate(t.rotation),l.font=x,l.textBaseline=t.textBaseline,l.textAlign=t.textAlign;var a=t.label;if(e.isArray(a))for(var i=0,n=0;i<a.length;++i)l.fillText(""+a[i],0,n),n+=1.5*m;else l.fillText(a,0,0);l.restore()}}),c.display){var V,O,L=0;if(g)V=i.left+(i.right-i.left)/2,O="bottom"===n.position?i.bottom-S/2:i.top+S/2;else{var B="left"===n.position;V=B?i.left+S/2:i.right-S/2,O=i.top+(i.bottom-i.top)/2,L=B?-.5*Math.PI:.5*Math.PI}l.save(),l.translate(V,O),l.rotate(L),l.textAlign="center",l.textBaseline="middle",l.fillStyle=k,l.font=M,l.fillText(c.labelString,0,0),l.restore()}if(u.drawBorder){l.lineWidth=e.getValueAtIndexOrDefault(u.lineWidth,0),l.strokeStyle=e.getValueAtIndexOrDefault(u.color,0);var W=i.left,z=i.right,H=i.top,N=i.bottom,E=e.aliasPixel(l.lineWidth);g?(H=N="top"===n.position?i.bottom:i.top,H+=E,N+=E):(W=z="left"===n.position?i.right:i.left,W+=E,z+=E),l.beginPath(),l.moveTo(W,H),l.lineTo(z,N),l.stroke()}}}})}},{}],31:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.scaleService={constructors:{},defaults:{},registerScaleType:function(t,a,i){this.constructors[t]=a,this.defaults[t]=e.clone(i)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(a){return this.defaults.hasOwnProperty(a)?e.scaleMerge(t.defaults.scale,this.defaults[a]):{}},updateScaleDefaults:function(t,a){var i=this.defaults;i.hasOwnProperty(t)&&(i[t]=e.extend(i[t],a))},addScalesToLayout:function(a){e.each(a.scales,function(e){t.layoutService.addBox(a,e)})}}}},{}],32:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.title={display:!1,position:"top",fullWidth:!0,fontStyle:"bold",padding:10,text:""};var a=e.noop;t.Title=t.Element.extend({initialize:function(a){var i=this;e.extend(i,a),i.options=e.configMerge(t.defaults.global.title,a.options),i.legendHitBoxes=[]},beforeUpdate:function(){var a=this.chart.options;a&&a.title&&(this.options=e.configMerge(t.defaults.global.title,a.title))},update:function(t,e,a){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=a,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:a,beforeSetDimensions:a,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:a,beforeBuildLabels:a,buildLabels:a,afterBuildLabels:a,beforeFit:a,fit:function(){var a=this,i=(a.ctx,e.getValueOrDefault),n=a.options,o=t.defaults.global,r=n.display,l=i(n.fontSize,o.defaultFontSize),s=a.minSize;a.isHorizontal()?(s.width=a.maxWidth,s.height=r?l+2*n.padding:0):(s.width=r?l+2*n.padding:0,s.height=a.maxHeight),a.width=s.width,a.height=s.height},afterFit:a,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var a=this,i=a.ctx,n=e.getValueOrDefault,o=a.options,r=t.defaults.global;if(o.display){var l,s,d=n(o.fontSize,r.defaultFontSize),u=n(o.fontStyle,r.defaultFontStyle),c=n(o.fontFamily,r.defaultFontFamily),h=e.fontString(d,u,c),f=0,g=a.top,p=a.left,m=a.bottom,b=a.right;i.fillStyle=n(o.fontColor,r.defaultFontColor),i.font=h,a.isHorizontal()?(l=p+(b-p)/2,s=g+(m-g)/2):(l="left"===o.position?p+d/2:b-d/2,s=g+(m-g)/2,f=Math.PI*("left"===o.position?-.5:.5)),i.save(),i.translate(l,s),i.rotate(f),i.textAlign="center",i.textBaseline="middle",i.fillText(o.text,0,0),i.restore()}}}),t.plugins.register({beforeInit:function(e){var a=e.options,i=a.title;i&&(e.titleBlock=new t.Title({ctx:e.chart.ctx,options:i,chart:e}),t.layoutService.addBox(e,e.titleBlock))}})}},{}],33:[function(t,e,a){"use strict";e.exports=function(t){function e(t,e){return e&&(n.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function a(t){if(!t.length)return!1;var e,a,i=[],n=[];for(e=0,a=t.length;a>e;++e){var o=t[e];if(o&&o.hasValue()){var r=o.tooltipPosition();i.push(r.x),n.push(r.y)}}var l=0,s=0;for(e=0,a-i.length;a>e;++e)l+=i[e],s+=n[e];return{x:Math.round(l/i.length),y:Math.round(s/i.length)}}function i(t){var e=t._xScale,a=t._yScale||t._scale,i=t._index,n=t._datasetIndex;return{xLabel:e?e.getLabelForIndex(i,n):"",yLabel:a?a.getLabelForIndex(i,n):"",index:i,datasetIndex:n}}var n=t.helpers;t.defaults.global.tooltips={enabled:!0,custom:null,mode:"single",backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,yAlign:"center",xAlign:"center",caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",callbacks:{beforeTitle:n.noop,title:function(t,e){var a="",i=e.labels,n=i?i.length:0;if(t.length>0){var o=t[0];o.xLabel?a=o.xLabel:n>0&&o.index<n&&(a=i[o.index])}return a},afterTitle:n.noop,beforeBody:n.noop,beforeLabel:n.noop,label:function(t,e){var a=e.datasets[t.datasetIndex].label||"";return a+": "+t.yLabel},labelColor:function(t,e){var a=e.getDatasetMeta(t.datasetIndex),i=a.data[t.index],n=i._view;return{borderColor:n.borderColor,backgroundColor:n.backgroundColor}},afterLabel:n.noop,afterBody:n.noop,beforeFooter:n.noop,footer:n.noop,afterFooter:n.noop}},t.Tooltip=t.Element.extend({initialize:function(){var e=this,a=t.defaults.global,i=e._options,o=n.getValueOrDefault;n.extend(e,{_model:{xPadding:i.xPadding,yPadding:i.yPadding,xAlign:i.yAlign,yAlign:i.xAlign,bodyFontColor:i.bodyFontColor,_bodyFontFamily:o(i.bodyFontFamily,a.defaultFontFamily),_bodyFontStyle:o(i.bodyFontStyle,a.defaultFontStyle),_bodyAlign:i.bodyAlign,bodyFontSize:o(i.bodyFontSize,a.defaultFontSize),bodySpacing:i.bodySpacing,titleFontColor:i.titleFontColor,_titleFontFamily:o(i.titleFontFamily,a.defaultFontFamily),_titleFontStyle:o(i.titleFontStyle,a.defaultFontStyle),titleFontSize:o(i.titleFontSize,a.defaultFontSize),_titleAlign:i.titleAlign,titleSpacing:i.titleSpacing,titleMarginBottom:i.titleMarginBottom,footerFontColor:i.footerFontColor,_footerFontFamily:o(i.footerFontFamily,a.defaultFontFamily),_footerFontStyle:o(i.footerFontStyle,a.defaultFontStyle),footerFontSize:o(i.footerFontSize,a.defaultFontSize),_footerAlign:i.footerAlign,footerSpacing:i.footerSpacing,footerMarginTop:i.footerMarginTop,caretSize:i.caretSize,cornerRadius:i.cornerRadius,backgroundColor:i.backgroundColor,opacity:0,legendColorBackground:i.multiKeyBackground}})},getTitle:function(){var t=this,a=t._options,i=a.callbacks,n=i.beforeTitle.apply(t,arguments),o=i.title.apply(t,arguments),r=i.afterTitle.apply(t,arguments),l=[];return l=e(l,n),l=e(l,o),l=e(l,r)},getBeforeBody:function(){var t=this._options.callbacks.beforeBody.apply(this,arguments);return n.isArray(t)?t:void 0!==t?[t]:[]},getBody:function(t,a){var i=this,o=i._options.callbacks,r=[];return n.each(t,function(t){var n={before:[],lines:[],after:[]};e(n.before,o.beforeLabel.call(i,t,a)),e(n.lines,o.label.call(i,t,a)),e(n.after,o.afterLabel.call(i,t,a)),r.push(n)}),r},getAfterBody:function(){var t=this._options.callbacks.afterBody.apply(this,arguments);return n.isArray(t)?t:void 0!==t?[t]:[]},getFooter:function(){var t=this,a=t._options.callbacks,i=a.beforeFooter.apply(t,arguments),n=a.footer.apply(t,arguments),o=a.afterFooter.apply(t,arguments),r=[];return r=e(r,i),r=e(r,n),r=e(r,o)},update:function(t){var e,o,r=this,l=r._options,s=r._model,d=r._active,u=r._data,c=r._chartInstance;if(d.length){s.opacity=1;var h=[],f=a(d),g=[];for(e=0,o=d.length;o>e;++e)g.push(i(d[e]));l.itemSort&&(g=g.sort(l.itemSort)),d.length>1&&n.each(g,function(t){h.push(l.callbacks.labelColor.call(r,t,c))}),n.extend(s,{title:r.getTitle(g,u),beforeBody:r.getBeforeBody(g,u),body:r.getBody(g,u),afterBody:r.getAfterBody(g,u),footer:r.getFooter(g,u),x:Math.round(f.x),y:Math.round(f.y),caretPadding:n.getValueOrDefault(f.padding,2),labelColors:h});var p=r.getTooltipSize(s);r.determineAlignment(p),n.extend(s,r.getBackgroundPoint(s,p))}else r._model.opacity=0;return t&&l.custom&&l.custom.call(r,s),r},getTooltipSize:function(t){var e=this._chart.ctx,a={height:2*t.yPadding,width:0},i=t.body,o=i.reduce(function(t,e){return t+e.before.length+e.lines.length+e.after.length},0);o+=t.beforeBody.length+t.afterBody.length;var r=t.title.length,l=t.footer.length,s=t.titleFontSize,d=t.bodyFontSize,u=t.footerFontSize;a.height+=r*s,a.height+=(r-1)*t.titleSpacing,a.height+=r?t.titleMarginBottom:0,a.height+=o*d,a.height+=o?(o-1)*t.bodySpacing:0,a.height+=l?t.footerMarginTop:0,a.height+=l*u,a.height+=l?(l-1)*t.footerSpacing:0;var c=0,h=function(t){a.width=Math.max(a.width,e.measureText(t).width+c)};return e.font=n.fontString(s,t._titleFontStyle,t._titleFontFamily),n.each(t.title,h),e.font=n.fontString(d,t._bodyFontStyle,t._bodyFontFamily),n.each(t.beforeBody.concat(t.afterBody),h),c=i.length>1?d+2:0,n.each(i,function(t){n.each(t.before,h),n.each(t.lines,h),n.each(t.after,h)}),c=0,e.font=n.fontString(u,t._footerFontStyle,t._footerFontFamily),n.each(t.footer,h),a.width+=2*t.xPadding,a},determineAlignment:function(t){var e=this,a=e._model,i=e._chart,n=e._chartInstance.chartArea;a.y<t.height?a.yAlign="top":a.y>i.height-t.height&&(a.yAlign="bottom");var o,r,l,s,d,u=(n.left+n.right)/2,c=(n.top+n.bottom)/2;"center"===a.yAlign?(o=function(t){return u>=t},r=function(t){return t>u}):(o=function(e){return e<=t.width/2},r=function(e){return e>=i.width-t.width/2}),l=function(e){return e+t.width>i.width},s=function(e){return e-t.width<0},d=function(t){return c>=t?"top":"bottom"},o(a.x)?(a.xAlign="left",l(a.x)&&(a.xAlign="center",a.yAlign=d(a.y))):r(a.x)&&(a.xAlign="right",s(a.x)&&(a.xAlign="center",a.yAlign=d(a.y)))},getBackgroundPoint:function(t,e){var a={x:t.x,y:t.y},i=t.caretSize,n=t.caretPadding,o=t.cornerRadius,r=t.xAlign,l=t.yAlign,s=i+n,d=o+n;return"right"===r?a.x-=e.width:"center"===r&&(a.x-=e.width/2),"top"===l?a.y+=s:"bottom"===l?a.y-=e.height+s:a.y-=e.height/2,"center"===l?"left"===r?a.x+=s:"right"===r&&(a.x-=s):"left"===r?a.x-=d:"right"===r&&(a.x+=d),a},drawCaret:function(t,e,a,i){var o,r,l,s,d,u,c=this._view,h=this._chart.ctx,f=c.caretSize,g=c.cornerRadius,p=c.xAlign,m=c.yAlign,b=t.x,v=t.y,x=e.width,y=e.height;"center"===m?("left"===p?(o=b,r=o-f,l=o):(o=b+x,r=o+f,l=o),d=v+y/2,s=d-f,u=d+f):("left"===p?(o=b+g,r=o+f,l=r+f):"right"===p?(o=b+x-g,r=o-f,l=r-f):(r=b+x/2,o=r-f,l=r+f),"top"===m?(s=v,d=s-f,u=s):(s=v+y,d=s+f,u=s));var k=n.color(c.backgroundColor);h.fillStyle=k.alpha(a*k.alpha()).rgbString(),h.beginPath(),h.moveTo(o,s),h.lineTo(r,d),h.lineTo(l,u),h.closePath(),h.fill()},drawTitle:function(t,e,a,i){var o=e.title;if(o.length){a.textAlign=e._titleAlign,a.textBaseline="top";var r=e.titleFontSize,l=e.titleSpacing,s=n.color(e.titleFontColor);a.fillStyle=s.alpha(i*s.alpha()).rgbString(),a.font=n.fontString(r,e._titleFontStyle,e._titleFontFamily);var d,u;for(d=0,u=o.length;u>d;++d)a.fillText(o[d],t.x,t.y),t.y+=r+l,d+1===o.length&&(t.y+=e.titleMarginBottom-l)}},drawBody:function(t,e,a,i){var o=e.bodyFontSize,r=e.bodySpacing,l=e.body;a.textAlign=e._bodyAlign,a.textBaseline="top";var s=n.color(e.bodyFontColor),d=s.alpha(i*s.alpha()).rgbString();a.fillStyle=d,a.font=n.fontString(o,e._bodyFontStyle,e._bodyFontFamily);var u=0,c=function(e){a.fillText(e,t.x+u,t.y),t.y+=o+r};n.each(e.beforeBody,c);var h=l.length>1;u=h?o+2:0,n.each(l,function(r,l){n.each(r.before,c),n.each(r.lines,function(r){h&&(a.fillStyle=n.color(e.legendColorBackground).alpha(i).rgbaString(),a.fillRect(t.x,t.y,o,o),a.strokeStyle=n.color(e.labelColors[l].borderColor).alpha(i).rgbaString(),a.strokeRect(t.x,t.y,o,o),a.fillStyle=n.color(e.labelColors[l].backgroundColor).alpha(i).rgbaString(),a.fillRect(t.x+1,t.y+1,o-2,o-2),a.fillStyle=d),c(r)}),n.each(r.after,c)}),u=0,n.each(e.afterBody,c),t.y-=r},drawFooter:function(t,e,a,i){var o=e.footer;if(o.length){t.y+=e.footerMarginTop,a.textAlign=e._footerAlign,a.textBaseline="top";var r=n.color(e.footerFontColor);a.fillStyle=r.alpha(i*r.alpha()).rgbString(),a.font=n.fontString(e.footerFontSize,e._footerFontStyle,e._footerFontFamily),n.each(o,function(i){a.fillText(i,t.x,t.y),t.y+=e.footerFontSize+e.footerSpacing})}},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var a=this.getTooltipSize(e),i={x:e.x,y:e.y},o=Math.abs(e.opacity<.001)?0:e.opacity;if(this._options.enabled){var r=n.color(e.backgroundColor);t.fillStyle=r.alpha(o*r.alpha()).rgbString(),n.drawRoundedRectangle(t,i.x,i.y,a.width,a.height,e.cornerRadius),t.fill(),this.drawCaret(i,a,o,e.caretPadding),i.x+=e.xPadding,i.y+=e.yPadding,this.drawTitle(i,e,t,o),this.drawBody(i,e,t,o),this.drawFooter(i,e,t,o)}}}})}},{}],34:[function(t,e,a){"use strict";e.exports=function(t,e){var a=t.helpers,i=t.defaults.global;i.elements.arc={backgroundColor:i.defaultColor,borderColor:"#fff",borderWidth:2},t.elements.Arc=t.Element.extend({inLabelRange:function(t){var e=this._view;return e?Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2):!1},inRange:function(t,e){var i=this._view;if(i){for(var n=a.getAngleFromPoint(i,{x:t,y:e}),o=n.angle,r=n.distance,l=i.startAngle,s=i.endAngle;l>s;)s+=2*Math.PI;for(;o>s;)o-=2*Math.PI;for(;l>o;)o+=2*Math.PI;var d=o>=l&&s>=o,u=r>=i.innerRadius&&r<=i.outerRadius;return d&&u}return!1},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,a=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*a,y:t.y+Math.sin(e)*a}},draw:function(){var t=this._chart.ctx,e=this._view,a=e.startAngle,i=e.endAngle;t.beginPath(),t.arc(e.x,e.y,e.outerRadius,a,i),t.arc(e.x,e.y,e.innerRadius,i,a,!0),t.closePath(),t.strokeStyle=e.borderColor,t.lineWidth=e.borderWidth,t.fillStyle=e.backgroundColor,t.fill(),t.lineJoin="bevel",e.borderWidth&&t.stroke()}})}},{}],35:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers,a=t.defaults.global;t.defaults.global.elements.line={tension:.4,backgroundColor:a.defaultColor,borderWidth:3,borderColor:a.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",fill:!0},t.elements.Line=t.Element.extend({lineToNextPoint:function(t,e,a,i,n){var o=this,r=o._chart.ctx,l=o._view?o._view.spanGaps:!1;e._view.skip&&!l?i.call(o,t,e,a):t._view.skip&&!l?n.call(o,t,e,a):0===e._view.tension?r.lineTo(e._view.x,e._view.y):r.bezierCurveTo(t._view.controlPointNextX,t._view.controlPointNextY,e._view.controlPointPreviousX,e._view.controlPointPreviousY,e._view.x,e._view.y)},draw:function(){function t(t){r._view.skip||l._view.skip?t&&o.lineTo(i._view.scaleZero.x,i._view.scaleZero.y):o.bezierCurveTo(l._view.controlPointNextX,l._view.controlPointNextY,r._view.controlPointPreviousX,r._view.controlPointPreviousY,r._view.x,r._view.y)}var i=this,n=i._view,o=i._chart.ctx,r=i._children[0],l=i._children[i._children.length-1];o.save(),i._children.length>0&&n.fill&&(o.beginPath(),e.each(i._children,function(t,a){var r=e.previousItem(i._children,a),l=e.nextItem(i._children,a);0===a?(i._loop?o.moveTo(n.scaleZero.x,n.scaleZero.y):o.moveTo(t._view.x,n.scaleZero),t._view.skip?i._loop||o.moveTo(l._view.x,i._view.scaleZero):o.lineTo(t._view.x,t._view.y)):i.lineToNextPoint(r,t,l,function(t,e,a){i._loop?o.lineTo(i._view.scaleZero.x,i._view.scaleZero.y):(o.lineTo(t._view.x,i._view.scaleZero),o.moveTo(a._view.x,i._view.scaleZero))},function(t,e){o.lineTo(e._view.x,e._view.y)})},i),i._loop?t(!0):(o.lineTo(i._children[i._children.length-1]._view.x,n.scaleZero),o.lineTo(i._children[0]._view.x,n.scaleZero)),o.fillStyle=n.backgroundColor||a.defaultColor,o.closePath(),o.fill());var s=a.elements.line;o.lineCap=n.borderCapStyle||s.borderCapStyle,o.setLineDash&&o.setLineDash(n.borderDash||s.borderDash),o.lineDashOffset=n.borderDashOffset||s.borderDashOffset,o.lineJoin=n.borderJoinStyle||s.borderJoinStyle,o.lineWidth=n.borderWidth||s.borderWidth,o.strokeStyle=n.borderColor||a.defaultColor,o.beginPath(),e.each(i._children,function(t,a){var n=e.previousItem(i._children,a),r=e.nextItem(i._children,a);0===a?o.moveTo(t._view.x,t._view.y):i.lineToNextPoint(n,t,r,function(t,e,a){o.moveTo(a._view.x,a._view.y)},function(t,e){o.moveTo(e._view.x,e._view.y)})},i),i._loop&&i._children.length>0&&t(),o.stroke(),o.restore()}})}},{}],36:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers,a=t.defaults.global,i=a.defaultColor;a.elements.point={radius:3,pointStyle:"circle",backgroundColor:i,borderWidth:1,borderColor:i,hitRadius:1,hoverRadius:4,hoverBorderWidth:1},t.elements.Point=t.Element.extend({inRange:function(t,e){var a=this._view;return a?Math.pow(t-a.x,2)+Math.pow(e-a.y,2)<Math.pow(a.hitRadius+a.radius,2):!1},inLabelRange:function(t){var e=this._view;return e?Math.pow(t-e.x,2)<Math.pow(e.radius+e.hitRadius,2):!1},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(){var t,n,o,r,l,s,d=this._view,u=this._chart.ctx,c=d.pointStyle,h=d.radius,f=d.x,g=d.y;if(!d.skip){if("object"==typeof c&&(t=c.toString(),"[object HTMLImageElement]"===t||"[object HTMLCanvasElement]"===t))return void u.drawImage(c,f-c.width/2,g-c.height/2);if(!(isNaN(h)||0>=h)){switch(u.strokeStyle=d.borderColor||i,u.lineWidth=e.getValueOrDefault(d.borderWidth,a.elements.point.borderWidth),u.fillStyle=d.backgroundColor||i,c){default:u.beginPath(),u.arc(f,g,h,0,2*Math.PI),u.closePath(),u.fill();break;case"triangle":u.beginPath(),n=3*h/Math.sqrt(3),l=n*Math.sqrt(3)/2,u.moveTo(f-n/2,g+l/3),u.lineTo(f+n/2,g+l/3),u.lineTo(f,g-2*l/3),u.closePath(),u.fill();break;case"rect":s=1/Math.SQRT2*h,u.fillRect(f-s,g-s,2*s,2*s),u.strokeRect(f-s,g-s,2*s,2*s);break;case"rectRot":s=1/Math.SQRT2*h,u.beginPath(),u.moveTo(f-s,g),u.lineTo(f,g+s),u.lineTo(f+s,g),u.lineTo(f,g-s),u.closePath(),u.fill();break;case"cross":u.beginPath(),u.moveTo(f,g+h),u.lineTo(f,g-h),u.moveTo(f-h,g),u.lineTo(f+h,g),u.closePath();break;case"crossRot":u.beginPath(),o=Math.cos(Math.PI/4)*h,r=Math.sin(Math.PI/4)*h,u.moveTo(f-o,g-r),u.lineTo(f+o,g+r),u.moveTo(f-o,g+r),u.lineTo(f+o,g-r),u.closePath();break;case"star":u.beginPath(),u.moveTo(f,g+h),u.lineTo(f,g-h),u.moveTo(f-h,g),u.lineTo(f+h,g),o=Math.cos(Math.PI/4)*h,r=Math.sin(Math.PI/4)*h,u.moveTo(f-o,g-r),u.lineTo(f+o,g+r),u.moveTo(f-o,g+r),u.lineTo(f+o,g-r),u.closePath();break;case"line":u.beginPath(),u.moveTo(f-h,g),u.lineTo(f+h,g),u.closePath();break;case"dash":u.beginPath(),u.moveTo(f,g),u.lineTo(f+h,g),u.closePath()}u.stroke()}}}})}},{}],37:[function(t,e,a){"use strict";e.exports=function(t){var e=(t.helpers,t.defaults.global);e.elements.rectangle={backgroundColor:e.defaultColor,borderWidth:0,borderColor:e.defaultColor,borderSkipped:"bottom"},t.elements.Rectangle=t.Element.extend({draw:function(){function t(t){return s[(u+t)%4]}var e=this._chart.ctx,a=this._view,i=a.width/2,n=a.x-i,o=a.x+i,r=a.base-(a.base-a.y),l=a.borderWidth/2;a.borderWidth&&(n+=l,o-=l,r+=l),e.beginPath(),e.fillStyle=a.backgroundColor,e.strokeStyle=a.borderColor,e.lineWidth=a.borderWidth;var s=[[n,a.base],[n,r],[o,r],[o,a.base]],d=["bottom","left","top","right"],u=d.indexOf(a.borderSkipped,0);-1===u&&(u=0),e.moveTo.apply(e,t(0));for(var c=1;4>c;c++)e.lineTo.apply(e,t(c));e.fill(),a.borderWidth&&e.stroke()},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){var a=this._view;return a?a.y<a.base?t>=a.x-a.width/2&&t<=a.x+a.width/2&&e>=a.y&&e<=a.base:t>=a.x-a.width/2&&t<=a.x+a.width/2&&e>=a.base&&e<=a.y:!1},inLabelRange:function(t){var e=this._view;return e?t>=e.x-e.width/2&&t<=e.x+e.width/2:!1},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}})}},{}],38:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers,a={position:"bottom"},i=t.Scale.extend({determineDataLimits:function(){var t=this;t.minIndex=0,t.maxIndex=t.chart.data.labels.length-1;var a;void 0!==t.options.ticks.min&&(a=e.indexOf(t.chart.data.labels,t.options.ticks.min),t.minIndex=-1!==a?a:t.minIndex),void 0!==t.options.ticks.max&&(a=e.indexOf(t.chart.data.labels,t.options.ticks.max),t.maxIndex=-1!==a?a:t.maxIndex),t.min=t.chart.data.labels[t.minIndex],t.max=t.chart.data.labels[t.maxIndex]},buildTicks:function(t){var e=this;e.ticks=0===e.minIndex&&e.maxIndex===e.chart.data.labels.length-1?e.chart.data.labels:e.chart.data.labels.slice(e.minIndex,e.maxIndex+1)},getLabelForIndex:function(t,e){return this.ticks[t]},getPixelForValue:function(t,e,a,i){var n=this,o=Math.max(n.maxIndex+1-n.minIndex-(n.options.gridLines.offsetGridLines?0:1),1);if(n.isHorizontal()){var r=n.width-(n.paddingLeft+n.paddingRight),l=r/o,s=l*(e-n.minIndex)+n.paddingLeft;return n.options.gridLines.offsetGridLines&&i&&(s+=l/2),n.left+Math.round(s)}var d=n.height-(n.paddingTop+n.paddingBottom),u=d/o,c=u*(e-n.minIndex)+n.paddingTop;return n.options.gridLines.offsetGridLines&&i&&(c+=u/2),n.top+Math.round(c)},getPixelForTick:function(t,e){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null,e)},getValueForPixel:function(t){var e,a=this,i=Math.max(a.ticks.length-(a.options.gridLines.offsetGridLines?0:1),1),n=a.isHorizontal(),o=n?a.width-(a.paddingLeft+a.paddingRight):a.height-(a.paddingTop+a.paddingBottom),r=o/i;return a.options.gridLines.offsetGridLines&&(t-=r/2),t-=n?a.paddingLeft:a.paddingTop,e=0>=t?0:Math.round(t/r)}});t.scaleService.registerScaleType("category",i,a)}},{}],39:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers,a={position:"left",ticks:{callback:function(t,a,i){var n=i.length>3?i[2]-i[1]:i[1]-i[0];Math.abs(n)>1&&t!==Math.floor(t)&&(n=t-Math.floor(t));var o=e.log10(Math.abs(n)),r="";if(0!==t){var l=-1*Math.floor(o);l=Math.max(Math.min(l,20),0),r=t.toFixed(l)}else r="0";return r}}},i=t.LinearScaleBase.extend({determineDataLimits:function(){function t(t){return l?t.xAxisID===a.id:t.yAxisID===a.id}var a=this,i=a.options,n=(i.ticks,a.chart),o=n.data,r=o.datasets,l=a.isHorizontal();if(a.min=null,a.max=null,i.stacked){var s={},d=!1,u=!1;e.each(r,function(o,r){var l=n.getDatasetMeta(r);void 0===s[l.type]&&(s[l.type]={positiveValues:[],negativeValues:[]});var c=s[l.type].positiveValues,h=s[l.type].negativeValues;n.isDatasetVisible(r)&&t(l)&&e.each(o.data,function(t,e){var n=+a.getRightValue(t);isNaN(n)||l.data[e].hidden||(c[e]=c[e]||0,h[e]=h[e]||0,i.relativePoints?c[e]=100:0>n?(u=!0,h[e]+=n):(d=!0,c[e]+=n))})}),e.each(s,function(t){var i=t.positiveValues.concat(t.negativeValues),n=e.min(i),o=e.max(i);a.min=null===a.min?n:Math.min(a.min,n),a.max=null===a.max?o:Math.max(a.max,o)})}else e.each(r,function(i,o){var r=n.getDatasetMeta(o);n.isDatasetVisible(o)&&t(r)&&e.each(i.data,function(t,e){var i=+a.getRightValue(t);isNaN(i)||r.data[e].hidden||(null===a.min?a.min=i:i<a.min&&(a.min=i),null===a.max?a.max=i:i>a.max&&(a.max=i))})});this.handleTickRangeOptions()},getTickLimit:function(){var a,i=this,n=i.options.ticks;if(i.isHorizontal())a=Math.min(n.maxTicksLimit?n.maxTicksLimit:11,Math.ceil(i.width/50));else{var o=e.getValueOrDefault(n.fontSize,t.defaults.global.defaultFontSize);a=Math.min(n.maxTicksLimit?n.maxTicksLimit:11,Math.ceil(i.height/(2*o)))}return a},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t,e,a,i){var n,o,r=this,l=r.paddingLeft,s=r.paddingBottom,d=r.start,u=+r.getRightValue(t),c=r.end-d;return r.isHorizontal()?(o=r.width-(l+r.paddingRight),n=r.left+o/c*(u-d),Math.round(n+l)):(o=r.height-(r.paddingTop+s),n=r.bottom-s-o/c*(u-d),Math.round(n))},getValueForPixel:function(t){var e=this,a=e.isHorizontal(),i=e.paddingLeft,n=e.paddingBottom,o=a?e.width-(i+e.paddingRight):e.height-(e.paddingTop+n),r=(a?t-e.left-i:e.bottom-n-t)/o;return e.start+(e.end-e.start)*r},getPixelForTick:function(t,e){return this.getPixelForValue(this.ticksAsNumbers[t],null,null,e)}});t.scaleService.registerScaleType("linear",i,a)}},{}],40:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers,a=e.noop;t.LinearScaleBase=t.Scale.extend({handleTickRangeOptions:function(){var t=this,a=t.options,i=a.ticks;if(i.beginAtZero){var n=e.sign(t.min),o=e.sign(t.max);0>n&&0>o?t.max=0:n>0&&o>0&&(t.min=0)}void 0!==i.min?t.min=i.min:void 0!==i.suggestedMin&&(t.min=Math.min(t.min,i.suggestedMin)),void 0!==i.max?t.max=i.max:void 0!==i.suggestedMax&&(t.max=Math.max(t.max,i.suggestedMax)),t.min===t.max&&(t.max++,i.beginAtZero||t.min--)},getTickLimit:a,handleDirectionalChanges:a,buildTicks:function(){var t=this,a=t.options,i=a.ticks,n=e.getValueOrDefault,o=(t.isHorizontal(),t.ticks=[]),r=t.getTickLimit();r=Math.max(2,r);var l,s=i.fixedStepSize&&i.fixedStepSize>0||i.stepSize&&i.stepSize>0;if(s)l=n(i.fixedStepSize,i.stepSize);else{var d=e.niceNum(t.max-t.min,!1);l=e.niceNum(d/(r-1),!0)}var u=Math.floor(t.min/l)*l,c=Math.ceil(t.max/l)*l,h=(c-u)/l;h=e.almostEquals(h,Math.round(h),l/1e3)?Math.round(h):Math.ceil(h),o.push(void 0!==i.min?i.min:u);for(var f=1;h>f;++f)o.push(u+f*l);o.push(void 0!==i.max?i.max:c),t.handleDirectionalChanges(),t.max=e.max(o),t.min=e.min(o),i.reverse?(o.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){var e=this;e.ticksAsNumbers=e.ticks.slice(),e.zeroLineIndex=e.ticks.indexOf(0),t.Scale.prototype.convertTicksToLabels.call(e)}})}},{}],41:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers,a={position:"left",ticks:{callback:function(t,a,i){var n=t/Math.pow(10,Math.floor(e.log10(t)));return 1===n||2===n||5===n||0===a||a===i.length-1?t.toExponential():""}}},i=t.Scale.extend({determineDataLimits:function(){function t(t){return d?t.xAxisID===a.id:t.yAxisID===a.id}var a=this,i=a.options,n=i.ticks,o=a.chart,r=o.data,l=r.datasets,s=e.getValueOrDefault,d=a.isHorizontal();if(a.min=null,a.max=null,i.stacked){var u={};e.each(l,function(n,r){var l=o.getDatasetMeta(r);o.isDatasetVisible(r)&&t(l)&&(void 0===u[l.type]&&(u[l.type]=[]),e.each(n.data,function(t,e){var n=u[l.type],o=+a.getRightValue(t);isNaN(o)||l.data[e].hidden||(n[e]=n[e]||0,i.relativePoints?n[e]=100:n[e]+=o)}))}),e.each(u,function(t){var i=e.min(t),n=e.max(t);a.min=null===a.min?i:Math.min(a.min,i),a.max=null===a.max?n:Math.max(a.max,n)})}else e.each(l,function(i,n){var r=o.getDatasetMeta(n);o.isDatasetVisible(n)&&t(r)&&e.each(i.data,function(t,e){var i=+a.getRightValue(t);isNaN(i)||r.data[e].hidden||(null===a.min?a.min=i:i<a.min&&(a.min=i),null===a.max?a.max=i:i>a.max&&(a.max=i))})});a.min=s(n.min,a.min),a.max=s(n.max,a.max),a.min===a.max&&(0!==a.min&&null!==a.min?(a.min=Math.pow(10,Math.floor(e.log10(a.min))-1),a.max=Math.pow(10,Math.floor(e.log10(a.max))+1)):(a.min=1,a.max=10))},buildTicks:function(){for(var t=this,a=t.options,i=a.ticks,n=e.getValueOrDefault,o=t.ticks=[],r=n(i.min,Math.pow(10,Math.floor(e.log10(t.min))));r<t.max;){o.push(r);var l=Math.floor(e.log10(r)),s=Math.floor(r/Math.pow(10,l))+1;10===s&&(s=1,++l),r=s*Math.pow(10,l)}var d=n(i.max,r);o.push(d),t.isHorizontal()||o.reverse(),t.max=e.max(o),t.min=e.min(o),i.reverse?(o.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),t.Scale.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t,e){return this.getPixelForValue(this.tickValues[t],null,null,e)},getPixelForValue:function(t,a,i,n){var o,r,l=this,s=l.start,d=+l.getRightValue(t),u=e.log10(l.end)-e.log10(s),c=l.paddingTop,h=l.paddingBottom,f=l.paddingLeft;return l.isHorizontal()?0===d?r=l.left+f:(o=l.width-(f+l.paddingRight),r=l.left+o/u*(e.log10(d)-e.log10(s)),r+=f):0===d?r=l.top+c:(o=l.height-(c+h),r=l.bottom-h-o/u*(e.log10(d)-e.log10(s))),r},getValueForPixel:function(t){var a,i,n=this,o=e.log10(n.end)-e.log10(n.start);return n.isHorizontal()?(i=n.width-(n.paddingLeft+n.paddingRight),a=n.start*Math.pow(10,(t-n.left-n.paddingLeft)*o/i)):(i=n.height-(n.paddingTop+n.paddingBottom),a=Math.pow(10,(n.bottom-n.paddingBottom-t)*o/i)/n.start),a}});t.scaleService.registerScaleType("logarithmic",i,a)}},{}],42:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers,a=t.defaults.global,i={display:!0,animate:!0,lineArc:!1,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2},pointLabels:{fontSize:10,callback:function(t){return t}}},n=t.LinearScaleBase.extend({getValueCount:function(){return this.chart.data.labels.length},setDimensions:function(){var t=this,i=t.options,n=i.ticks;t.width=t.maxWidth,t.height=t.maxHeight,t.xCenter=Math.round(t.width/2),t.yCenter=Math.round(t.height/2);var o=e.min([t.height,t.width]),r=e.getValueOrDefault(n.fontSize,a.defaultFontSize);t.drawingArea=i.display?o/2-(r/2+n.backdropPaddingY):o/2},determineDataLimits:function(){var t=this,a=t.chart;t.min=null,t.max=null,e.each(a.data.datasets,function(i,n){if(a.isDatasetVisible(n)){var o=a.getDatasetMeta(n);e.each(i.data,function(e,a){var i=+t.getRightValue(e);isNaN(i)||o.data[a].hidden||(null===t.min?t.min=i:i<t.min&&(t.min=i),null===t.max?t.max=i:i>t.max&&(t.max=i))})}}),t.handleTickRangeOptions()},getTickLimit:function(){var t=this.options.ticks,i=e.getValueOrDefault(t.fontSize,a.defaultFontSize);return Math.min(t.maxTicksLimit?t.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*i)))},convertTicksToLabels:function(){
    var e=this;t.LinearScaleBase.prototype.convertTicksToLabels.call(e),e.pointLabels=e.chart.data.labels.map(e.options.pointLabels.callback,e)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t,i,n,o,r,l,s,d,u,c,h,f,g=this.options.pointLabels,p=e.getValueOrDefault(g.fontSize,a.defaultFontSize),m=e.getValueOrDefault(g.fontStyle,a.defaultFontStyle),b=e.getValueOrDefault(g.fontFamily,a.defaultFontFamily),v=e.fontString(p,m,b),x=e.min([this.height/2-p-5,this.width/2]),y=this.width,k=0;for(this.ctx.font=v,i=0;i<this.getValueCount();i++)t=this.getPointPosition(i,x),n=this.ctx.measureText(this.pointLabels[i]?this.pointLabels[i]:"").width+5,0===i||i===this.getValueCount()/2?(o=n/2,t.x+o>y&&(y=t.x+o,r=i),t.x-o<k&&(k=t.x-o,s=i)):i<this.getValueCount()/2?t.x+n>y&&(y=t.x+n,r=i):i>this.getValueCount()/2&&t.x-n<k&&(k=t.x-n,s=i);u=k,c=Math.ceil(y-this.width),l=this.getIndexAngle(r),d=this.getIndexAngle(s),h=c/Math.sin(l+Math.PI/2),f=u/Math.sin(d+Math.PI/2),h=e.isNumber(h)?h:0,f=e.isNumber(f)?f:0,this.drawingArea=Math.round(x-(f+h)/2),this.setCenterPoint(f,h)},setCenterPoint:function(t,e){var a=this,i=a.width-e-a.drawingArea,n=t+a.drawingArea;a.xCenter=Math.round((n+i)/2+a.left),a.yCenter=Math.round(a.height/2+a.top)},getIndexAngle:function(t){var e=2*Math.PI/this.getValueCount();return t*e-Math.PI/2},getDistanceFromCenterForValue:function(t){var e=this;if(null===t)return 0;var a=e.drawingArea/(e.max-e.min);return e.options.reverse?(e.max-t)*a:(t-e.min)*a},getPointPosition:function(t,e){var a=this,i=a.getIndexAngle(t);return{x:Math.round(Math.cos(i)*e)+a.xCenter,y:Math.round(Math.sin(i)*e)+a.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(){var t=this,e=t.min,a=t.max;return t.getPointPositionForValue(0,t.beginAtZero?0:0>e&&0>a?a:e>0&&a>0?e:0)},draw:function(){var t=this,i=t.options,n=i.gridLines,o=i.ticks,r=i.angleLines,l=i.pointLabels,s=e.getValueOrDefault;if(i.display){var d=t.ctx,u=s(o.fontSize,a.defaultFontSize),c=s(o.fontStyle,a.defaultFontStyle),h=s(o.fontFamily,a.defaultFontFamily),f=e.fontString(u,c,h);if(e.each(t.ticks,function(r,l){if(l>0||i.reverse){var c=t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]),h=t.yCenter-c;if(n.display&&0!==l)if(d.strokeStyle=e.getValueAtIndexOrDefault(n.color,l-1),d.lineWidth=e.getValueAtIndexOrDefault(n.lineWidth,l-1),i.lineArc)d.beginPath(),d.arc(t.xCenter,t.yCenter,c,0,2*Math.PI),d.closePath(),d.stroke();else{d.beginPath();for(var g=0;g<t.getValueCount();g++){var p=t.getPointPosition(g,c);0===g?d.moveTo(p.x,p.y):d.lineTo(p.x,p.y)}d.closePath(),d.stroke()}if(o.display){var m=s(o.fontColor,a.defaultFontColor);if(d.font=f,o.showLabelBackdrop){var b=d.measureText(r).width;d.fillStyle=o.backdropColor,d.fillRect(t.xCenter-b/2-o.backdropPaddingX,h-u/2-o.backdropPaddingY,b+2*o.backdropPaddingX,u+2*o.backdropPaddingY)}d.textAlign="center",d.textBaseline="middle",d.fillStyle=m,d.fillText(r,t.xCenter,h)}}}),!i.lineArc){d.lineWidth=r.lineWidth,d.strokeStyle=r.color;for(var g=t.getDistanceFromCenterForValue(i.reverse?t.min:t.max),p=s(l.fontSize,a.defaultFontSize),m=s(l.fontStyle,a.defaultFontStyle),b=s(l.fontFamily,a.defaultFontFamily),v=e.fontString(p,m,b),x=t.getValueCount()-1;x>=0;x--){if(r.display){var y=t.getPointPosition(x,g);d.beginPath(),d.moveTo(t.xCenter,t.yCenter),d.lineTo(y.x,y.y),d.stroke(),d.closePath()}var k=t.getPointPosition(x,g+5),S=s(l.fontColor,a.defaultFontColor);d.font=v,d.fillStyle=S;var w=t.pointLabels,C=w.length,M=w.length/2,D=M/2,A=D>x||x>C-D,I=x===D||x===C-D;0===x?d.textAlign="center":x===M?d.textAlign="center":M>x?d.textAlign="left":d.textAlign="right",I?d.textBaseline="middle":A?d.textBaseline="bottom":d.textBaseline="top",d.fillText(w[x]?w[x]:"",k.x,k.y)}}}}});t.scaleService.registerScaleType("radialLinear",n,i)}},{}],43:[function(t,e,a){"use strict";var i=t(1);i="function"==typeof i?i:window.moment,e.exports=function(t){var e=t.helpers,a={units:[{name:"millisecond",steps:[1,2,5,10,20,50,100,250,500]},{name:"second",steps:[1,2,5,10,30]},{name:"minute",steps:[1,2,5,10,30]},{name:"hour",steps:[1,2,3,6,12]},{name:"day",steps:[1,2,5]},{name:"week",maxStep:4},{name:"month",maxStep:3},{name:"quarter",maxStep:4},{name:"year",maxStep:!1}]},n={position:"bottom",time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm:ss a",hour:"MMM D, hA",day:"ll",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}},ticks:{autoSkip:!1}},o=t.Scale.extend({initialize:function(){if(!i)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");t.Scale.prototype.initialize.call(this)},getLabelMoment:function(t,e){return this.labelMoments[t][e]},getMomentStartOf:function(t){var e=this;return"week"===e.options.time.unit&&e.options.time.isoWeekday!==!1?t.clone().startOf("isoWeek").isoWeekday(e.options.time.isoWeekday):t.clone().startOf(e.tickUnit)},determineDataLimits:function(){var t=this;t.labelMoments=[];var a=[];t.chart.data.labels&&t.chart.data.labels.length>0?(e.each(t.chart.data.labels,function(e,i){var n=t.parseTime(e);n.isValid()&&(t.options.time.round&&n.startOf(t.options.time.round),a.push(n))},t),t.firstTick=i.min.call(t,a),t.lastTick=i.max.call(t,a)):(t.firstTick=null,t.lastTick=null),e.each(t.chart.data.datasets,function(n,o){var r=[],l=t.chart.isDatasetVisible(o);"object"==typeof n.data[0]&&null!==n.data[0]?e.each(n.data,function(e,a){var n=t.parseTime(t.getRightValue(e));n.isValid()&&(t.options.time.round&&n.startOf(t.options.time.round),r.push(n),l&&(t.firstTick=null!==t.firstTick?i.min(t.firstTick,n):n,t.lastTick=null!==t.lastTick?i.max(t.lastTick,n):n))},t):r=a,t.labelMoments.push(r)},t),t.options.time.min&&(t.firstTick=t.parseTime(t.options.time.min)),t.options.time.max&&(t.lastTick=t.parseTime(t.options.time.max)),t.firstTick=(t.firstTick||i()).clone(),t.lastTick=(t.lastTick||i()).clone()},buildTicks:function(i){var n=this;n.ctx.save();var o=e.getValueOrDefault(n.options.ticks.fontSize,t.defaults.global.defaultFontSize),r=e.getValueOrDefault(n.options.ticks.fontStyle,t.defaults.global.defaultFontStyle),l=e.getValueOrDefault(n.options.ticks.fontFamily,t.defaults.global.defaultFontFamily),s=e.fontString(o,r,l);if(n.ctx.font=s,n.ticks=[],n.unitScale=1,n.scaleSizeInUnits=0,n.options.time.unit)n.tickUnit=n.options.time.unit||"day",n.displayFormat=n.options.time.displayFormats[n.tickUnit],n.scaleSizeInUnits=n.lastTick.diff(n.firstTick,n.tickUnit,!0),n.unitScale=e.getValueOrDefault(n.options.time.unitStepSize,1);else{var d=n.isHorizontal()?n.width-(n.paddingLeft+n.paddingRight):n.height-(n.paddingTop+n.paddingBottom),u=n.tickFormatFunction(n.firstTick,0,[]),c=n.ctx.measureText(u).width,h=Math.cos(e.toRadians(n.options.ticks.maxRotation)),f=Math.sin(e.toRadians(n.options.ticks.maxRotation));c=c*h+o*f;var g=d/c;n.tickUnit="millisecond",n.scaleSizeInUnits=n.lastTick.diff(n.firstTick,n.tickUnit,!0),n.displayFormat=n.options.time.displayFormats[n.tickUnit];for(var p=0,m=a.units[p];p<a.units.length;){if(n.unitScale=1,e.isArray(m.steps)&&Math.ceil(n.scaleSizeInUnits/g)<e.max(m.steps)){for(var b=0;b<m.steps.length;++b)if(m.steps[b]>=Math.ceil(n.scaleSizeInUnits/g)){n.unitScale=e.getValueOrDefault(n.options.time.unitStepSize,m.steps[b]);break}break}if(m.maxStep===!1||Math.ceil(n.scaleSizeInUnits/g)<m.maxStep){n.unitScale=e.getValueOrDefault(n.options.time.unitStepSize,Math.ceil(n.scaleSizeInUnits/g));break}++p,m=a.units[p],n.tickUnit=m.name;var v=n.firstTick.diff(n.getMomentStartOf(n.firstTick),n.tickUnit,!0),x=n.getMomentStartOf(n.lastTick.clone().add(1,n.tickUnit)).diff(n.lastTick,n.tickUnit,!0);n.scaleSizeInUnits=n.lastTick.diff(n.firstTick,n.tickUnit,!0)+v+x,n.displayFormat=n.options.time.displayFormats[m.name]}}var y;if(n.options.time.min?y=n.getMomentStartOf(n.firstTick):(n.firstTick=n.getMomentStartOf(n.firstTick),y=n.firstTick),!n.options.time.max){var k=n.getMomentStartOf(n.lastTick);0!==k.diff(n.lastTick,n.tickUnit,!0)&&(n.lastTick=n.getMomentStartOf(n.lastTick.add(1,n.tickUnit)))}n.smallestLabelSeparation=n.width,e.each(n.chart.data.datasets,function(t,e){for(var a=1;a<n.labelMoments[e].length;a++)n.smallestLabelSeparation=Math.min(n.smallestLabelSeparation,n.labelMoments[e][a].diff(n.labelMoments[e][a-1],n.tickUnit,!0))},n),n.options.time.displayFormat&&(n.displayFormat=n.options.time.displayFormat),n.ticks.push(n.firstTick.clone());for(var S=1;S<=n.scaleSizeInUnits;++S){var w=y.clone().add(S,n.tickUnit);if(n.options.time.max&&w.diff(n.lastTick,n.tickUnit,!0)>=0)break;S%n.unitScale===0&&n.ticks.push(w)}var C=n.ticks[n.ticks.length-1].diff(n.lastTick,n.tickUnit);(0!==C||0===n.scaleSizeInUnits)&&(n.options.time.max?(n.ticks.push(n.lastTick.clone()),n.scaleSizeInUnits=n.lastTick.diff(n.ticks[0],n.tickUnit,!0)):(n.ticks.push(n.lastTick.clone()),n.scaleSizeInUnits=n.lastTick.diff(n.firstTick,n.tickUnit,!0))),n.ctx.restore()},getLabelForIndex:function(t,e){var a=this,i=a.chart.data.labels&&t<a.chart.data.labels.length?a.chart.data.labels[t]:"";return"object"==typeof a.chart.data.datasets[e].data[0]&&(i=a.getRightValue(a.chart.data.datasets[e].data[t])),a.options.time.tooltipFormat&&(i=a.parseTime(i).format(a.options.time.tooltipFormat)),i},tickFormatFunction:function(t,a,i){var n=t.format(this.displayFormat),o=this.options.ticks,r=e.getValueOrDefault(o.callback,o.userCallback);return r?r(n,a,i):n},convertTicksToLabels:function(){var t=this;t.tickMoments=t.ticks,t.ticks=t.ticks.map(t.tickFormatFunction,t)},getPixelForValue:function(t,e,a,i){var n=this,o=t&&t.isValid&&t.isValid()?t:n.getLabelMoment(a,e);if(o){var r=o.diff(n.firstTick,n.tickUnit,!0),l=r/n.scaleSizeInUnits;if(n.isHorizontal()){var s=n.width-(n.paddingLeft+n.paddingRight),d=(s/Math.max(n.ticks.length-1,1),s*l+n.paddingLeft);return n.left+Math.round(d)}var u=n.height-(n.paddingTop+n.paddingBottom),c=(u/Math.max(n.ticks.length-1,1),u*l+n.paddingTop);return n.top+Math.round(c)}},getPixelForTick:function(t,e){return this.getPixelForValue(this.tickMoments[t],null,null,e)},getValueForPixel:function(t){var e=this,a=e.isHorizontal()?e.width-(e.paddingLeft+e.paddingRight):e.height-(e.paddingTop+e.paddingBottom),n=(t-(e.isHorizontal()?e.left+e.paddingLeft:e.top+e.paddingTop))/a;return n*=e.scaleSizeInUnits,e.firstTick.clone().add(i.duration(n,e.tickUnit).asSeconds(),"seconds")},parseTime:function(t){var e=this;return"string"==typeof e.options.time.parser?i(t,e.options.time.parser):"function"==typeof e.options.time.parser?e.options.time.parser(t):"function"==typeof t.getMonth||"number"==typeof t?i(t):t.isValid&&t.isValid()?t:"string"!=typeof e.options.time.format&&e.options.time.format.call?(console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"),e.options.time.format(t)):i(t,e.options.time.format)}});t.scaleService.registerScaleType("time",o,n)}},{1:1}]},{},[7])(7)});
/* Javascript plotting library for jQuery, version 0.8.3.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

*/

// first an inline dependency, jquery.colorhelpers.js, we inline it here
// for convenience

/* Plugin for jQuery for working with colors.
 *
 * Version 1.1.
 *
 * Inspiration from jQuery color animation plugin by John Resig.
 *
 * Released under the MIT license by Ole Laursen, October 2009.
 *
 * Examples:
 *
 *   $.color.parse("#fff").scale('rgb', 0.25).add('a', -0.5).toString()
 *   var c = $.color.extract($("#mydiv"), 'background-color');
 *   console.log(c.r, c.g, c.b, c.a);
 *   $.color.make(100, 50, 25, 0.4).toString() // returns "rgba(100,50,25,0.4)"
 *
 * Note that .scale() and .add() return the same modified object
 * instead of making a new one.
 *
 * V. 1.1: Fix error handling so e.g. parsing an empty string does
 * produce a color rather than just crashing.
 */
(function($){$.color={};$.color.make=function(r,g,b,a){var o={};o.r=r||0;o.g=g||0;o.b=b||0;o.a=a!=null?a:1;o.add=function(c,d){for(var i=0;i<c.length;++i)o[c.charAt(i)]+=d;return o.normalize()};o.scale=function(c,f){for(var i=0;i<c.length;++i)o[c.charAt(i)]*=f;return o.normalize()};o.toString=function(){if(o.a>=1){return"rgb("+[o.r,o.g,o.b].join(",")+")"}else{return"rgba("+[o.r,o.g,o.b,o.a].join(",")+")"}};o.normalize=function(){function clamp(min,value,max){return value<min?min:value>max?max:value}o.r=clamp(0,parseInt(o.r),255);o.g=clamp(0,parseInt(o.g),255);o.b=clamp(0,parseInt(o.b),255);o.a=clamp(0,o.a,1);return o};o.clone=function(){return $.color.make(o.r,o.b,o.g,o.a)};return o.normalize()};$.color.extract=function(elem,css){var c;do{c=elem.css(css).toLowerCase();if(c!=""&&c!="transparent")break;elem=elem.parent()}while(elem.length&&!$.nodeName(elem.get(0),"body"));if(c=="rgba(0, 0, 0, 0)")c="transparent";return $.color.parse(c)};$.color.parse=function(str){var res,m=$.color.make;if(res=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(str))return m(parseInt(res[1],10),parseInt(res[2],10),parseInt(res[3],10));if(res=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))return m(parseInt(res[1],10),parseInt(res[2],10),parseInt(res[3],10),parseFloat(res[4]));if(res=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(str))return m(parseFloat(res[1])*2.55,parseFloat(res[2])*2.55,parseFloat(res[3])*2.55);if(res=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))return m(parseFloat(res[1])*2.55,parseFloat(res[2])*2.55,parseFloat(res[3])*2.55,parseFloat(res[4]));if(res=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(str))return m(parseInt(res[1],16),parseInt(res[2],16),parseInt(res[3],16));if(res=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(str))return m(parseInt(res[1]+res[1],16),parseInt(res[2]+res[2],16),parseInt(res[3]+res[3],16));var name=$.trim(str).toLowerCase();if(name=="transparent")return m(255,255,255,0);else{res=lookupColors[name]||[0,0,0];return m(res[0],res[1],res[2])}};var lookupColors={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);

// the actual Flot code
(function($) {

	// Cache the prototype hasOwnProperty for faster access

	var hasOwnProperty = Object.prototype.hasOwnProperty;

    // A shim to provide 'detach' to jQuery versions prior to 1.4.  Using a DOM
    // operation produces the same effect as detach, i.e. removing the element
    // without touching its jQuery data.

    // Do not merge this into Flot 0.9, since it requires jQuery 1.4.4+.

    if (!$.fn.detach) {
        $.fn.detach = function() {
            return this.each(function() {
                if (this.parentNode) {
                    this.parentNode.removeChild( this );
                }
            });
        };
    }

	///////////////////////////////////////////////////////////////////////////
	// The Canvas object is a wrapper around an HTML5 <canvas> tag.
	//
	// @constructor
	// @param {string} cls List of classes to apply to the canvas.
	// @param {element} container Element onto which to append the canvas.
	//
	// Requiring a container is a little iffy, but unfortunately canvas
	// operations don't work unless the canvas is attached to the DOM.

	function Canvas(cls, container) {

		var element = container.children("." + cls)[0];

		if (element == null) {

			element = document.createElement("canvas");
			element.className = cls;

			$(element).css({ direction: "ltr", position: "absolute", left: 0, top: 0 })
				.appendTo(container);

			// If HTML5 Canvas isn't available, fall back to [Ex|Flash]canvas

			if (!element.getContext) {
				if (window.G_vmlCanvasManager) {
					element = window.G_vmlCanvasManager.initElement(element);
				} else {
					throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
				}
			}
		}

		this.element = element;

		var context = this.context = element.getContext("2d");

		// Determine the screen's ratio of physical to device-independent
		// pixels.  This is the ratio between the canvas width that the browser
		// advertises and the number of pixels actually present in that space.

		// The iPhone 4, for example, has a device-independent width of 320px,
		// but its screen is actually 640px wide.  It therefore has a pixel
		// ratio of 2, while most normal devices have a ratio of 1.

		var devicePixelRatio = window.devicePixelRatio || 1,
			backingStoreRatio =
				context.webkitBackingStorePixelRatio ||
				context.mozBackingStorePixelRatio ||
				context.msBackingStorePixelRatio ||
				context.oBackingStorePixelRatio ||
				context.backingStorePixelRatio || 1;

		this.pixelRatio = devicePixelRatio / backingStoreRatio;

		// Size the canvas to match the internal dimensions of its container

		this.resize(container.width(), container.height());

		// Collection of HTML div layers for text overlaid onto the canvas

		this.textContainer = null;
		this.text = {};

		// Cache of text fragments and metrics, so we can avoid expensively
		// re-calculating them when the plot is re-rendered in a loop.

		this._textCache = {};
	}

	// Resizes the canvas to the given dimensions.
	//
	// @param {number} width New width of the canvas, in pixels.
	// @param {number} width New height of the canvas, in pixels.

	Canvas.prototype.resize = function(width, height) {

		if (width <= 0 || height <= 0) {
			throw new Error("Invalid dimensions for plot, width = " + width + ", height = " + height);
		}

		var element = this.element,
			context = this.context,
			pixelRatio = this.pixelRatio;

		// Resize the canvas, increasing its density based on the display's
		// pixel ratio; basically giving it more pixels without increasing the
		// size of its element, to take advantage of the fact that retina
		// displays have that many more pixels in the same advertised space.

		// Resizing should reset the state (excanvas seems to be buggy though)

		if (this.width != width) {
			element.width = width * pixelRatio;
			element.style.width = width + "px";
			this.width = width;
		}

		if (this.height != height) {
			element.height = height * pixelRatio;
			element.style.height = height + "px";
			this.height = height;
		}

		// Save the context, so we can reset in case we get replotted.  The
		// restore ensure that we're really back at the initial state, and
		// should be safe even if we haven't saved the initial state yet.

		context.restore();
		context.save();

		// Scale the coordinate space to match the display density; so even though we
		// may have twice as many pixels, we still want lines and other drawing to
		// appear at the same size; the extra pixels will just make them crisper.

		context.scale(pixelRatio, pixelRatio);
	};

	// Clears the entire canvas area, not including any overlaid HTML text

	Canvas.prototype.clear = function() {
		this.context.clearRect(0, 0, this.width, this.height);
	};

	// Finishes rendering the canvas, including managing the text overlay.

	Canvas.prototype.render = function() {

		var cache = this._textCache;

		// For each text layer, add elements marked as active that haven't
		// already been rendered, and remove those that are no longer active.

		for (var layerKey in cache) {
			if (hasOwnProperty.call(cache, layerKey)) {

				var layer = this.getTextLayer(layerKey),
					layerCache = cache[layerKey];

				layer.hide();

				for (var styleKey in layerCache) {
					if (hasOwnProperty.call(layerCache, styleKey)) {
						var styleCache = layerCache[styleKey];
						for (var key in styleCache) {
							if (hasOwnProperty.call(styleCache, key)) {

								var positions = styleCache[key].positions;

								for (var i = 0, position; position = positions[i]; i++) {
									if (position.active) {
										if (!position.rendered) {
											layer.append(position.element);
											position.rendered = true;
										}
									} else {
										positions.splice(i--, 1);
										if (position.rendered) {
											position.element.detach();
										}
									}
								}

								if (positions.length == 0) {
									delete styleCache[key];
								}
							}
						}
					}
				}

				layer.show();
			}
		}
	};

	// Creates (if necessary) and returns the text overlay container.
	//
	// @param {string} classes String of space-separated CSS classes used to
	//     uniquely identify the text layer.
	// @return {object} The jQuery-wrapped text-layer div.

	Canvas.prototype.getTextLayer = function(classes) {

		var layer = this.text[classes];

		// Create the text layer if it doesn't exist

		if (layer == null) {

			// Create the text layer container, if it doesn't exist

			if (this.textContainer == null) {
				this.textContainer = $("<div class='flot-text'></div>")
					.css({
						position: "absolute",
						top: 0,
						left: 0,
						bottom: 0,
						right: 0,
						'font-size': "smaller",
						color: "#545454"
					})
					.insertAfter(this.element);
			}

			layer = this.text[classes] = $("<div></div>")
				.addClass(classes)
				.css({
					position: "absolute",
					top: 0,
					left: 0,
					bottom: 0,
					right: 0
				})
				.appendTo(this.textContainer);
		}

		return layer;
	};

	// Creates (if necessary) and returns a text info object.
	//
	// The object looks like this:
	//
	// {
	//     width: Width of the text's wrapper div.
	//     height: Height of the text's wrapper div.
	//     element: The jQuery-wrapped HTML div containing the text.
	//     positions: Array of positions at which this text is drawn.
	// }
	//
	// The positions array contains objects that look like this:
	//
	// {
	//     active: Flag indicating whether the text should be visible.
	//     rendered: Flag indicating whether the text is currently visible.
	//     element: The jQuery-wrapped HTML div containing the text.
	//     x: X coordinate at which to draw the text.
	//     y: Y coordinate at which to draw the text.
	// }
	//
	// Each position after the first receives a clone of the original element.
	//
	// The idea is that that the width, height, and general 'identity' of the
	// text is constant no matter where it is placed; the placements are a
	// secondary property.
	//
	// Canvas maintains a cache of recently-used text info objects; getTextInfo
	// either returns the cached element or creates a new entry.
	//
	// @param {string} layer A string of space-separated CSS classes uniquely
	//     identifying the layer containing this text.
	// @param {string} text Text string to retrieve info for.
	// @param {(string|object)=} font Either a string of space-separated CSS
	//     classes or a font-spec object, defining the text's font and style.
	// @param {number=} angle Angle at which to rotate the text, in degrees.
	//     Angle is currently unused, it will be implemented in the future.
	// @param {number=} width Maximum width of the text before it wraps.
	// @return {object} a text info object.

	Canvas.prototype.getTextInfo = function(layer, text, font, angle, width) {

		var textStyle, layerCache, styleCache, info;

		// Cast the value to a string, in case we were given a number or such

		text = "" + text;

		// If the font is a font-spec object, generate a CSS font definition

		if (typeof font === "object") {
			textStyle = font.style + " " + font.variant + " " + font.weight + " " + font.size + "px/" + font.lineHeight + "px " + font.family;
		} else {
			textStyle = font;
		}

		// Retrieve (or create) the cache for the text's layer and styles

		layerCache = this._textCache[layer];

		if (layerCache == null) {
			layerCache = this._textCache[layer] = {};
		}

		styleCache = layerCache[textStyle];

		if (styleCache == null) {
			styleCache = layerCache[textStyle] = {};
		}

		info = styleCache[text];

		// If we can't find a matching element in our cache, create a new one

		if (info == null) {

			var element = $("<div></div>").html(text)
				.css({
					position: "absolute",
					'max-width': width,
					top: -9999
				})
				.appendTo(this.getTextLayer(layer));

			if (typeof font === "object") {
				element.css({
					font: textStyle,
					color: font.color
				});
			} else if (typeof font === "string") {
				element.addClass(font);
			}

			info = styleCache[text] = {
				width: element.outerWidth(true),
				height: element.outerHeight(true),
				element: element,
				positions: []
			};

			element.detach();
		}

		return info;
	};

	// Adds a text string to the canvas text overlay.
	//
	// The text isn't drawn immediately; it is marked as rendering, which will
	// result in its addition to the canvas on the next render pass.
	//
	// @param {string} layer A string of space-separated CSS classes uniquely
	//     identifying the layer containing this text.
	// @param {number} x X coordinate at which to draw the text.
	// @param {number} y Y coordinate at which to draw the text.
	// @param {string} text Text string to draw.
	// @param {(string|object)=} font Either a string of space-separated CSS
	//     classes or a font-spec object, defining the text's font and style.
	// @param {number=} angle Angle at which to rotate the text, in degrees.
	//     Angle is currently unused, it will be implemented in the future.
	// @param {number=} width Maximum width of the text before it wraps.
	// @param {string=} halign Horizontal alignment of the text; either "left",
	//     "center" or "right".
	// @param {string=} valign Vertical alignment of the text; either "top",
	//     "middle" or "bottom".

	Canvas.prototype.addText = function(layer, x, y, text, font, angle, width, halign, valign) {

		var info = this.getTextInfo(layer, text, font, angle, width),
			positions = info.positions;

		// Tweak the div's position to match the text's alignment

		if (halign == "center") {
			x -= info.width / 2;
		} else if (halign == "right") {
			x -= info.width;
		}

		if (valign == "middle") {
			y -= info.height / 2;
		} else if (valign == "bottom") {
			y -= info.height;
		}

		// Determine whether this text already exists at this position.
		// If so, mark it for inclusion in the next render pass.

		for (var i = 0, position; position = positions[i]; i++) {
			if (position.x == x && position.y == y) {
				position.active = true;
				return;
			}
		}

		// If the text doesn't exist at this position, create a new entry

		// For the very first position we'll re-use the original element,
		// while for subsequent ones we'll clone it.

		position = {
			active: true,
			rendered: false,
			element: positions.length ? info.element.clone() : info.element,
			x: x,
			y: y
		};

		positions.push(position);

		// Move the element to its final position within the container

		position.element.css({
			top: Math.round(y),
			left: Math.round(x),
			'text-align': halign	// In case the text wraps
		});
	};

	// Removes one or more text strings from the canvas text overlay.
	//
	// If no parameters are given, all text within the layer is removed.
	//
	// Note that the text is not immediately removed; it is simply marked as
	// inactive, which will result in its removal on the next render pass.
	// This avoids the performance penalty for 'clear and redraw' behavior,
	// where we potentially get rid of all text on a layer, but will likely
	// add back most or all of it later, as when redrawing axes, for example.
	//
	// @param {string} layer A string of space-separated CSS classes uniquely
	//     identifying the layer containing this text.
	// @param {number=} x X coordinate of the text.
	// @param {number=} y Y coordinate of the text.
	// @param {string=} text Text string to remove.
	// @param {(string|object)=} font Either a string of space-separated CSS
	//     classes or a font-spec object, defining the text's font and style.
	// @param {number=} angle Angle at which the text is rotated, in degrees.
	//     Angle is currently unused, it will be implemented in the future.

	Canvas.prototype.removeText = function(layer, x, y, text, font, angle) {
		if (text == null) {
			var layerCache = this._textCache[layer];
			if (layerCache != null) {
				for (var styleKey in layerCache) {
					if (hasOwnProperty.call(layerCache, styleKey)) {
						var styleCache = layerCache[styleKey];
						for (var key in styleCache) {
							if (hasOwnProperty.call(styleCache, key)) {
								var positions = styleCache[key].positions;
								for (var i = 0, position; position = positions[i]; i++) {
									position.active = false;
								}
							}
						}
					}
				}
			}
		} else {
			var positions = this.getTextInfo(layer, text, font, angle).positions;
			for (var i = 0, position; position = positions[i]; i++) {
				if (position.x == x && position.y == y) {
					position.active = false;
				}
			}
		}
	};

	///////////////////////////////////////////////////////////////////////////
	// The top-level container for the entire plot.

    function Plot(placeholder, data_, options_, plugins) {
        // data is on the form:
        //   [ series1, series2 ... ]
        // where series is either just the data as [ [x1, y1], [x2, y2], ... ]
        // or { data: [ [x1, y1], [x2, y2], ... ], label: "some label", ... }

        var series = [],
            options = {
                // the color theme used for graphs
                colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                legend: {
                    show: true,
                    noColumns: 1, // number of colums in legend table
                    labelFormatter: null, // fn: string -> string
                    labelBoxBorderColor: "#ccc", // border color for the little label boxes
                    container: null, // container (as jQuery object) to put legend in, null means default on top of graph
                    position: "ne", // position of default legend container within plot
                    margin: 5, // distance from grid edge to default legend container within plot
                    backgroundColor: null, // null means auto-detect
                    backgroundOpacity: 0.85, // set to 0 to avoid background
                    sorted: null    // default to no legend sorting
                },
                xaxis: {
                    show: null, // null = auto-detect, true = always, false = never
                    position: "bottom", // or "top"
                    mode: null, // null or "time"
                    font: null, // null (derived from CSS in placeholder) or object like { size: 11, lineHeight: 13, style: "italic", weight: "bold", family: "sans-serif", variant: "small-caps" }
                    color: null, // base color, labels, ticks
                    tickColor: null, // possibly different color of ticks, e.g. "rgba(0,0,0,0.15)"
                    transform: null, // null or f: number -> number to transform axis
                    inverseTransform: null, // if transform is set, this should be the inverse function
                    min: null, // min. value to show, null means set automatically
                    max: null, // max. value to show, null means set automatically
                    autoscaleMargin: null, // margin in % to add if auto-setting min/max
                    ticks: null, // either [1, 3] or [[1, "a"], 3] or (fn: axis info -> ticks) or app. number of ticks for auto-ticks
                    tickFormatter: null, // fn: number -> string
                    labelWidth: null, // size of tick labels in pixels
                    labelHeight: null,
                    reserveSpace: null, // whether to reserve space even if axis isn't shown
                    tickLength: null, // size in pixels of ticks, or "full" for whole line
                    alignTicksWithAxis: null, // axis number or null for no sync
                    tickDecimals: null, // no. of decimals, null means auto
                    tickSize: null, // number or [number, "unit"]
                    minTickSize: null // number or [number, "unit"]
                },
                yaxis: {
                    autoscaleMargin: 0.02,
                    position: "left" // or "right"
                },
                xaxes: [],
                yaxes: [],
                series: {
                    points: {
                        show: false,
                        radius: 3,
                        lineWidth: 2, // in pixels
                        fill: true,
                        fillColor: "#ffffff",
                        symbol: "circle" // or callback
                    },
                    lines: {
                        // we don't put in show: false so we can see
                        // whether lines were actively disabled
                        lineWidth: 2, // in pixels
                        fill: false,
                        fillColor: null,
                        steps: false
                        // Omit 'zero', so we can later default its value to
                        // match that of the 'fill' option.
                    },
                    bars: {
                        show: false,
                        lineWidth: 2, // in pixels
                        barWidth: 1, // in units of the x axis
                        fill: true,
                        fillColor: null,
                        align: "left", // "left", "right", or "center"
                        horizontal: false,
                        zero: true
                    },
                    shadowSize: 3,
                    highlightColor: null
                },
                grid: {
                    show: true,
                    aboveData: false,
                    color: "#545454", // primary color used for outline and labels
                    backgroundColor: null, // null for transparent, else color
                    borderColor: null, // set if different from the grid color
                    tickColor: null, // color for the ticks, e.g. "rgba(0,0,0,0.15)"
                    margin: 0, // distance from the canvas edge to the grid
                    labelMargin: 5, // in pixels
                    axisMargin: 8, // in pixels
                    borderWidth: 2, // in pixels
                    minBorderMargin: null, // in pixels, null means taken from points radius
                    markings: null, // array of ranges or fn: axes -> array of ranges
                    markingsColor: "#f4f4f4",
                    markingsLineWidth: 2,
                    // interactive stuff
                    clickable: false,
                    hoverable: false,
                    autoHighlight: true, // highlight in case mouse is near
                    mouseActiveRadius: 10 // how far the mouse can be away to activate an item
                },
                interaction: {
                    redrawOverlayInterval: 1000/60 // time between updates, -1 means in same flow
                },
                hooks: {}
            },
        surface = null,     // the canvas for the plot itself
        overlay = null,     // canvas for interactive stuff on top of plot
        eventHolder = null, // jQuery object that events should be bound to
        ctx = null, octx = null,
        xaxes = [], yaxes = [],
        plotOffset = { left: 0, right: 0, top: 0, bottom: 0},
        plotWidth = 0, plotHeight = 0,
        hooks = {
            processOptions: [],
            processRawData: [],
            processDatapoints: [],
            processOffset: [],
            drawBackground: [],
            drawSeries: [],
            draw: [],
            bindEvents: [],
            drawOverlay: [],
            shutdown: []
        },
        plot = this;

        // public functions
        plot.setData = setData;
        plot.setupGrid = setupGrid;
        plot.draw = draw;
        plot.getPlaceholder = function() { return placeholder; };
        plot.getCanvas = function() { return surface.element; };
        plot.getPlotOffset = function() { return plotOffset; };
        plot.width = function () { return plotWidth; };
        plot.height = function () { return plotHeight; };
        plot.offset = function () {
            var o = eventHolder.offset();
            o.left += plotOffset.left;
            o.top += plotOffset.top;
            return o;
        };
        plot.getData = function () { return series; };
        plot.getAxes = function () {
            var res = {}, i;
            $.each(xaxes.concat(yaxes), function (_, axis) {
                if (axis)
                    res[axis.direction + (axis.n != 1 ? axis.n : "") + "axis"] = axis;
            });
            return res;
        };
        plot.getXAxes = function () { return xaxes; };
        plot.getYAxes = function () { return yaxes; };
        plot.c2p = canvasToAxisCoords;
        plot.p2c = axisToCanvasCoords;
        plot.getOptions = function () { return options; };
        plot.highlight = highlight;
        plot.unhighlight = unhighlight;
        plot.triggerRedrawOverlay = triggerRedrawOverlay;
        plot.pointOffset = function(point) {
            return {
                left: parseInt(xaxes[axisNumber(point, "x") - 1].p2c(+point.x) + plotOffset.left, 10),
                top: parseInt(yaxes[axisNumber(point, "y") - 1].p2c(+point.y) + plotOffset.top, 10)
            };
        };
        plot.shutdown = shutdown;
        plot.destroy = function () {
            shutdown();
            placeholder.removeData("plot").empty();

            series = [];
            options = null;
            surface = null;
            overlay = null;
            eventHolder = null;
            ctx = null;
            octx = null;
            xaxes = [];
            yaxes = [];
            hooks = null;
            highlights = [];
            plot = null;
        };
        plot.resize = function () {
        	var width = placeholder.width(),
        		height = placeholder.height();
            surface.resize(width, height);
            overlay.resize(width, height);
        };

        // public attributes
        plot.hooks = hooks;

        // initialize
        initPlugins(plot);
        parseOptions(options_);
        setupCanvases();
        setData(data_);
        setupGrid();
        draw();
        bindEvents();


        function executeHooks(hook, args) {
            args = [plot].concat(args);
            for (var i = 0; i < hook.length; ++i)
                hook[i].apply(this, args);
        }

        function initPlugins() {

            // References to key classes, allowing plugins to modify them

            var classes = {
                Canvas: Canvas
            };

            for (var i = 0; i < plugins.length; ++i) {
                var p = plugins[i];
                p.init(plot, classes);
                if (p.options)
                    $.extend(true, options, p.options);
            }
        }

        function parseOptions(opts) {

            $.extend(true, options, opts);

            // $.extend merges arrays, rather than replacing them.  When less
            // colors are provided than the size of the default palette, we
            // end up with those colors plus the remaining defaults, which is
            // not expected behavior; avoid it by replacing them here.

            if (opts && opts.colors) {
            	options.colors = opts.colors;
            }

            if (options.xaxis.color == null)
                options.xaxis.color = $.color.parse(options.grid.color).scale('a', 0.22).toString();
            if (options.yaxis.color == null)
                options.yaxis.color = $.color.parse(options.grid.color).scale('a', 0.22).toString();

            if (options.xaxis.tickColor == null) // grid.tickColor for back-compatibility
                options.xaxis.tickColor = options.grid.tickColor || options.xaxis.color;
            if (options.yaxis.tickColor == null) // grid.tickColor for back-compatibility
                options.yaxis.tickColor = options.grid.tickColor || options.yaxis.color;

            if (options.grid.borderColor == null)
                options.grid.borderColor = options.grid.color;
            if (options.grid.tickColor == null)
                options.grid.tickColor = $.color.parse(options.grid.color).scale('a', 0.22).toString();

            // Fill in defaults for axis options, including any unspecified
            // font-spec fields, if a font-spec was provided.

            // If no x/y axis options were provided, create one of each anyway,
            // since the rest of the code assumes that they exist.

            var i, axisOptions, axisCount,
                fontSize = placeholder.css("font-size"),
                fontSizeDefault = fontSize ? +fontSize.replace("px", "") : 13,
                fontDefaults = {
                    style: placeholder.css("font-style"),
                    size: Math.round(0.8 * fontSizeDefault),
                    variant: placeholder.css("font-variant"),
                    weight: placeholder.css("font-weight"),
                    family: placeholder.css("font-family")
                };

            axisCount = options.xaxes.length || 1;
            for (i = 0; i < axisCount; ++i) {

                axisOptions = options.xaxes[i];
                if (axisOptions && !axisOptions.tickColor) {
                    axisOptions.tickColor = axisOptions.color;
                }

                axisOptions = $.extend(true, {}, options.xaxis, axisOptions);
                options.xaxes[i] = axisOptions;

                if (axisOptions.font) {
                    axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);
                    if (!axisOptions.font.color) {
                        axisOptions.font.color = axisOptions.color;
                    }
                    if (!axisOptions.font.lineHeight) {
                        axisOptions.font.lineHeight = Math.round(axisOptions.font.size * 1.15);
                    }
                }
            }

            axisCount = options.yaxes.length || 1;
            for (i = 0; i < axisCount; ++i) {

                axisOptions = options.yaxes[i];
                if (axisOptions && !axisOptions.tickColor) {
                    axisOptions.tickColor = axisOptions.color;
                }

                axisOptions = $.extend(true, {}, options.yaxis, axisOptions);
                options.yaxes[i] = axisOptions;

                if (axisOptions.font) {
                    axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);
                    if (!axisOptions.font.color) {
                        axisOptions.font.color = axisOptions.color;
                    }
                    if (!axisOptions.font.lineHeight) {
                        axisOptions.font.lineHeight = Math.round(axisOptions.font.size * 1.15);
                    }
                }
            }

            // backwards compatibility, to be removed in future
            if (options.xaxis.noTicks && options.xaxis.ticks == null)
                options.xaxis.ticks = options.xaxis.noTicks;
            if (options.yaxis.noTicks && options.yaxis.ticks == null)
                options.yaxis.ticks = options.yaxis.noTicks;
            if (options.x2axis) {
                options.xaxes[1] = $.extend(true, {}, options.xaxis, options.x2axis);
                options.xaxes[1].position = "top";
                // Override the inherit to allow the axis to auto-scale
                if (options.x2axis.min == null) {
                    options.xaxes[1].min = null;
                }
                if (options.x2axis.max == null) {
                    options.xaxes[1].max = null;
                }
            }
            if (options.y2axis) {
                options.yaxes[1] = $.extend(true, {}, options.yaxis, options.y2axis);
                options.yaxes[1].position = "right";
                // Override the inherit to allow the axis to auto-scale
                if (options.y2axis.min == null) {
                    options.yaxes[1].min = null;
                }
                if (options.y2axis.max == null) {
                    options.yaxes[1].max = null;
                }
            }
            if (options.grid.coloredAreas)
                options.grid.markings = options.grid.coloredAreas;
            if (options.grid.coloredAreasColor)
                options.grid.markingsColor = options.grid.coloredAreasColor;
            if (options.lines)
                $.extend(true, options.series.lines, options.lines);
            if (options.points)
                $.extend(true, options.series.points, options.points);
            if (options.bars)
                $.extend(true, options.series.bars, options.bars);
            if (options.shadowSize != null)
                options.series.shadowSize = options.shadowSize;
            if (options.highlightColor != null)
                options.series.highlightColor = options.highlightColor;

            // save options on axes for future reference
            for (i = 0; i < options.xaxes.length; ++i)
                getOrCreateAxis(xaxes, i + 1).options = options.xaxes[i];
            for (i = 0; i < options.yaxes.length; ++i)
                getOrCreateAxis(yaxes, i + 1).options = options.yaxes[i];

            // add hooks from options
            for (var n in hooks)
                if (options.hooks[n] && options.hooks[n].length)
                    hooks[n] = hooks[n].concat(options.hooks[n]);

            executeHooks(hooks.processOptions, [options]);
        }

        function setData(d) {
            series = parseData(d);
            fillInSeriesOptions();
            processData();
        }

        function parseData(d) {
            var res = [];
            for (var i = 0; i < d.length; ++i) {
                var s = $.extend(true, {}, options.series);

                if (d[i].data != null) {
                    s.data = d[i].data; // move the data instead of deep-copy
                    delete d[i].data;

                    $.extend(true, s, d[i]);

                    d[i].data = s.data;
                }
                else
                    s.data = d[i];
                res.push(s);
            }

            return res;
        }

        function axisNumber(obj, coord) {
            var a = obj[coord + "axis"];
            if (typeof a == "object") // if we got a real axis, extract number
                a = a.n;
            if (typeof a != "number")
                a = 1; // default to first axis
            return a;
        }

        function allAxes() {
            // return flat array without annoying null entries
            return $.grep(xaxes.concat(yaxes), function (a) { return a; });
        }

        function canvasToAxisCoords(pos) {
            // return an object with x/y corresponding to all used axes
            var res = {}, i, axis;
            for (i = 0; i < xaxes.length; ++i) {
                axis = xaxes[i];
                if (axis && axis.used)
                    res["x" + axis.n] = axis.c2p(pos.left);
            }

            for (i = 0; i < yaxes.length; ++i) {
                axis = yaxes[i];
                if (axis && axis.used)
                    res["y" + axis.n] = axis.c2p(pos.top);
            }

            if (res.x1 !== undefined)
                res.x = res.x1;
            if (res.y1 !== undefined)
                res.y = res.y1;

            return res;
        }

        function axisToCanvasCoords(pos) {
            // get canvas coords from the first pair of x/y found in pos
            var res = {}, i, axis, key;

            for (i = 0; i < xaxes.length; ++i) {
                axis = xaxes[i];
                if (axis && axis.used) {
                    key = "x" + axis.n;
                    if (pos[key] == null && axis.n == 1)
                        key = "x";

                    if (pos[key] != null) {
                        res.left = axis.p2c(pos[key]);
                        break;
                    }
                }
            }

            for (i = 0; i < yaxes.length; ++i) {
                axis = yaxes[i];
                if (axis && axis.used) {
                    key = "y" + axis.n;
                    if (pos[key] == null && axis.n == 1)
                        key = "y";

                    if (pos[key] != null) {
                        res.top = axis.p2c(pos[key]);
                        break;
                    }
                }
            }

            return res;
        }

        function getOrCreateAxis(axes, number) {
            if (!axes[number - 1])
                axes[number - 1] = {
                    n: number, // save the number for future reference
                    direction: axes == xaxes ? "x" : "y",
                    options: $.extend(true, {}, axes == xaxes ? options.xaxis : options.yaxis)
                };

            return axes[number - 1];
        }

        function fillInSeriesOptions() {

            var neededColors = series.length, maxIndex = -1, i;

            // Subtract the number of series that already have fixed colors or
            // color indexes from the number that we still need to generate.

            for (i = 0; i < series.length; ++i) {
                var sc = series[i].color;
                if (sc != null) {
                    neededColors--;
                    if (typeof sc == "number" && sc > maxIndex) {
                        maxIndex = sc;
                    }
                }
            }

            // If any of the series have fixed color indexes, then we need to
            // generate at least as many colors as the highest index.

            if (neededColors <= maxIndex) {
                neededColors = maxIndex + 1;
            }

            // Generate all the colors, using first the option colors and then
            // variations on those colors once they're exhausted.

            var c, colors = [], colorPool = options.colors,
                colorPoolSize = colorPool.length, variation = 0;

            for (i = 0; i < neededColors; i++) {

                c = $.color.parse(colorPool[i % colorPoolSize] || "#666");

                // Each time we exhaust the colors in the pool we adjust
                // a scaling factor used to produce more variations on
                // those colors. The factor alternates negative/positive
                // to produce lighter/darker colors.

                // Reset the variation after every few cycles, or else
                // it will end up producing only white or black colors.

                if (i % colorPoolSize == 0 && i) {
                    if (variation >= 0) {
                        if (variation < 0.5) {
                            variation = -variation - 0.2;
                        } else variation = 0;
                    } else variation = -variation;
                }

                colors[i] = c.scale('rgb', 1 + variation);
            }

            // Finalize the series options, filling in their colors

            var colori = 0, s;
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                // assign colors
                if (s.color == null) {
                    s.color = colors[colori].toString();
                    ++colori;
                }
                else if (typeof s.color == "number")
                    s.color = colors[s.color].toString();

                // turn on lines automatically in case nothing is set
                if (s.lines.show == null) {
                    var v, show = true;
                    for (v in s)
                        if (s[v] && s[v].show) {
                            show = false;
                            break;
                        }
                    if (show)
                        s.lines.show = true;
                }

                // If nothing was provided for lines.zero, default it to match
                // lines.fill, since areas by default should extend to zero.

                if (s.lines.zero == null) {
                    s.lines.zero = !!s.lines.fill;
                }

                // setup axes
                s.xaxis = getOrCreateAxis(xaxes, axisNumber(s, "x"));
                s.yaxis = getOrCreateAxis(yaxes, axisNumber(s, "y"));
            }
        }

        function processData() {
            var topSentry = Number.POSITIVE_INFINITY,
                bottomSentry = Number.NEGATIVE_INFINITY,
                fakeInfinity = Number.MAX_VALUE,
                i, j, k, m, length,
                s, points, ps, x, y, axis, val, f, p,
                data, format;

            function updateAxis(axis, min, max) {
                if (min < axis.datamin && min != -fakeInfinity)
                    axis.datamin = min;
                if (max > axis.datamax && max != fakeInfinity)
                    axis.datamax = max;
            }

            $.each(allAxes(), function (_, axis) {
                // init axis
                axis.datamin = topSentry;
                axis.datamax = bottomSentry;
                axis.used = false;
            });

            for (i = 0; i < series.length; ++i) {
                s = series[i];
                s.datapoints = { points: [] };

                executeHooks(hooks.processRawData, [ s, s.data, s.datapoints ]);
            }

            // first pass: clean and copy data
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                data = s.data;
                format = s.datapoints.format;

                if (!format) {
                    format = [];
                    // find out how to copy
                    format.push({ x: true, number: true, required: true });
                    format.push({ y: true, number: true, required: true });

                    if (s.bars.show || (s.lines.show && s.lines.fill)) {
                        var autoscale = !!((s.bars.show && s.bars.zero) || (s.lines.show && s.lines.zero));
                        format.push({ y: true, number: true, required: false, defaultValue: 0, autoscale: autoscale });
                        if (s.bars.horizontal) {
                            delete format[format.length - 1].y;
                            format[format.length - 1].x = true;
                        }
                    }

                    s.datapoints.format = format;
                }

                if (s.datapoints.pointsize != null)
                    continue; // already filled in

                s.datapoints.pointsize = format.length;

                ps = s.datapoints.pointsize;
                points = s.datapoints.points;

                var insertSteps = s.lines.show && s.lines.steps;
                s.xaxis.used = s.yaxis.used = true;

                for (j = k = 0; j < data.length; ++j, k += ps) {
                    p = data[j];

                    var nullify = p == null;
                    if (!nullify) {
                        for (m = 0; m < ps; ++m) {
                            val = p[m];
                            f = format[m];

                            if (f) {
                                if (f.number && val != null) {
                                    val = +val; // convert to number
                                    if (isNaN(val))
                                        val = null;
                                    else if (val == Infinity)
                                        val = fakeInfinity;
                                    else if (val == -Infinity)
                                        val = -fakeInfinity;
                                }

                                if (val == null) {
                                    if (f.required)
                                        nullify = true;

                                    if (f.defaultValue != null)
                                        val = f.defaultValue;
                                }
                            }

                            points[k + m] = val;
                        }
                    }

                    if (nullify) {
                        for (m = 0; m < ps; ++m) {
                            val = points[k + m];
                            if (val != null) {
                                f = format[m];
                                // extract min/max info
                                if (f.autoscale !== false) {
                                    if (f.x) {
                                        updateAxis(s.xaxis, val, val);
                                    }
                                    if (f.y) {
                                        updateAxis(s.yaxis, val, val);
                                    }
                                }
                            }
                            points[k + m] = null;
                        }
                    }
                    else {
                        // a little bit of line specific stuff that
                        // perhaps shouldn't be here, but lacking
                        // better means...
                        if (insertSteps && k > 0
                            && points[k - ps] != null
                            && points[k - ps] != points[k]
                            && points[k - ps + 1] != points[k + 1]) {
                            // copy the point to make room for a middle point
                            for (m = 0; m < ps; ++m)
                                points[k + ps + m] = points[k + m];

                            // middle point has same y
                            points[k + 1] = points[k - ps + 1];

                            // we've added a point, better reflect that
                            k += ps;
                        }
                    }
                }
            }

            // give the hooks a chance to run
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                executeHooks(hooks.processDatapoints, [ s, s.datapoints]);
            }

            // second pass: find datamax/datamin for auto-scaling
            for (i = 0; i < series.length; ++i) {
                s = series[i];
                points = s.datapoints.points;
                ps = s.datapoints.pointsize;
                format = s.datapoints.format;

                var xmin = topSentry, ymin = topSentry,
                    xmax = bottomSentry, ymax = bottomSentry;

                for (j = 0; j < points.length; j += ps) {
                    if (points[j] == null)
                        continue;

                    for (m = 0; m < ps; ++m) {
                        val = points[j + m];
                        f = format[m];
                        if (!f || f.autoscale === false || val == fakeInfinity || val == -fakeInfinity)
                            continue;

                        if (f.x) {
                            if (val < xmin)
                                xmin = val;
                            if (val > xmax)
                                xmax = val;
                        }
                        if (f.y) {
                            if (val < ymin)
                                ymin = val;
                            if (val > ymax)
                                ymax = val;
                        }
                    }
                }

                if (s.bars.show) {
                    // make sure we got room for the bar on the dancing floor
                    var delta;

                    switch (s.bars.align) {
                        case "left":
                            delta = 0;
                            break;
                        case "right":
                            delta = -s.bars.barWidth;
                            break;
                        default:
                            delta = -s.bars.barWidth / 2;
                    }

                    if (s.bars.horizontal) {
                        ymin += delta;
                        ymax += delta + s.bars.barWidth;
                    }
                    else {
                        xmin += delta;
                        xmax += delta + s.bars.barWidth;
                    }
                }

                updateAxis(s.xaxis, xmin, xmax);
                updateAxis(s.yaxis, ymin, ymax);
            }

            $.each(allAxes(), function (_, axis) {
                if (axis.datamin == topSentry)
                    axis.datamin = null;
                if (axis.datamax == bottomSentry)
                    axis.datamax = null;
            });
        }

        function setupCanvases() {

            // Make sure the placeholder is clear of everything except canvases
            // from a previous plot in this container that we'll try to re-use.

            placeholder.css("padding", 0) // padding messes up the positioning
                .children().filter(function(){
                    return !$(this).hasClass("flot-overlay") && !$(this).hasClass('flot-base');
                }).remove();

            if (placeholder.css("position") == 'static')
                placeholder.css("position", "relative"); // for positioning labels and overlay

            surface = new Canvas("flot-base", placeholder);
            overlay = new Canvas("flot-overlay", placeholder); // overlay canvas for interactive features

            ctx = surface.context;
            octx = overlay.context;

            // define which element we're listening for events on
            eventHolder = $(overlay.element).unbind();

            // If we're re-using a plot object, shut down the old one

            var existing = placeholder.data("plot");

            if (existing) {
                existing.shutdown();
                overlay.clear();
            }

            // save in case we get replotted
            placeholder.data("plot", plot);
        }

        function bindEvents() {
            // bind events
            if (options.grid.hoverable) {
                eventHolder.mousemove(onMouseMove);

                // Use bind, rather than .mouseleave, because we officially
                // still support jQuery 1.2.6, which doesn't define a shortcut
                // for mouseenter or mouseleave.  This was a bug/oversight that
                // was fixed somewhere around 1.3.x.  We can return to using
                // .mouseleave when we drop support for 1.2.6.

                eventHolder.bind("mouseleave", onMouseLeave);
            }

            if (options.grid.clickable)
                eventHolder.click(onClick);

            executeHooks(hooks.bindEvents, [eventHolder]);
        }

        function shutdown() {
            if (redrawTimeout)
                clearTimeout(redrawTimeout);

            eventHolder.unbind("mousemove", onMouseMove);
            eventHolder.unbind("mouseleave", onMouseLeave);
            eventHolder.unbind("click", onClick);

            executeHooks(hooks.shutdown, [eventHolder]);
        }

        function setTransformationHelpers(axis) {
            // set helper functions on the axis, assumes plot area
            // has been computed already

            function identity(x) { return x; }

            var s, m, t = axis.options.transform || identity,
                it = axis.options.inverseTransform;

            // precompute how much the axis is scaling a point
            // in canvas space
            if (axis.direction == "x") {
                s = axis.scale = plotWidth / Math.abs(t(axis.max) - t(axis.min));
                m = Math.min(t(axis.max), t(axis.min));
            }
            else {
                s = axis.scale = plotHeight / Math.abs(t(axis.max) - t(axis.min));
                s = -s;
                m = Math.max(t(axis.max), t(axis.min));
            }

            // data point to canvas coordinate
            if (t == identity) // slight optimization
                axis.p2c = function (p) { return (p - m) * s; };
            else
                axis.p2c = function (p) { return (t(p) - m) * s; };
            // canvas coordinate to data point
            if (!it)
                axis.c2p = function (c) { return m + c / s; };
            else
                axis.c2p = function (c) { return it(m + c / s); };
        }

        function measureTickLabels(axis) {

            var opts = axis.options,
                ticks = axis.ticks || [],
                labelWidth = opts.labelWidth || 0,
                labelHeight = opts.labelHeight || 0,
                maxWidth = labelWidth || (axis.direction == "x" ? Math.floor(surface.width / (ticks.length || 1)) : null),
                legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis",
                layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles,
                font = opts.font || "flot-tick-label tickLabel";

            for (var i = 0; i < ticks.length; ++i) {

                var t = ticks[i];

                if (!t.label)
                    continue;

                var info = surface.getTextInfo(layer, t.label, font, null, maxWidth);

                labelWidth = Math.max(labelWidth, info.width);
                labelHeight = Math.max(labelHeight, info.height);
            }

            axis.labelWidth = opts.labelWidth || labelWidth;
            axis.labelHeight = opts.labelHeight || labelHeight;
        }

        function allocateAxisBoxFirstPhase(axis) {
            // find the bounding box of the axis by looking at label
            // widths/heights and ticks, make room by diminishing the
            // plotOffset; this first phase only looks at one
            // dimension per axis, the other dimension depends on the
            // other axes so will have to wait

            var lw = axis.labelWidth,
                lh = axis.labelHeight,
                pos = axis.options.position,
                isXAxis = axis.direction === "x",
                tickLength = axis.options.tickLength,
                axisMargin = options.grid.axisMargin,
                padding = options.grid.labelMargin,
                innermost = true,
                outermost = true,
                first = true,
                found = false;

            // Determine the axis's position in its direction and on its side

            $.each(isXAxis ? xaxes : yaxes, function(i, a) {
                if (a && (a.show || a.reserveSpace)) {
                    if (a === axis) {
                        found = true;
                    } else if (a.options.position === pos) {
                        if (found) {
                            outermost = false;
                        } else {
                            innermost = false;
                        }
                    }
                    if (!found) {
                        first = false;
                    }
                }
            });

            // The outermost axis on each side has no margin

            if (outermost) {
                axisMargin = 0;
            }

            // The ticks for the first axis in each direction stretch across

            if (tickLength == null) {
                tickLength = first ? "full" : 5;
            }

            if (!isNaN(+tickLength))
                padding += +tickLength;

            if (isXAxis) {
                lh += padding;

                if (pos == "bottom") {
                    plotOffset.bottom += lh + axisMargin;
                    axis.box = { top: surface.height - plotOffset.bottom, height: lh };
                }
                else {
                    axis.box = { top: plotOffset.top + axisMargin, height: lh };
                    plotOffset.top += lh + axisMargin;
                }
            }
            else {
                lw += padding;

                if (pos == "left") {
                    axis.box = { left: plotOffset.left + axisMargin, width: lw };
                    plotOffset.left += lw + axisMargin;
                }
                else {
                    plotOffset.right += lw + axisMargin;
                    axis.box = { left: surface.width - plotOffset.right, width: lw };
                }
            }

             // save for future reference
            axis.position = pos;
            axis.tickLength = tickLength;
            axis.box.padding = padding;
            axis.innermost = innermost;
        }

        function allocateAxisBoxSecondPhase(axis) {
            // now that all axis boxes have been placed in one
            // dimension, we can set the remaining dimension coordinates
            if (axis.direction == "x") {
                axis.box.left = plotOffset.left - axis.labelWidth / 2;
                axis.box.width = surface.width - plotOffset.left - plotOffset.right + axis.labelWidth;
            }
            else {
                axis.box.top = plotOffset.top - axis.labelHeight / 2;
                axis.box.height = surface.height - plotOffset.bottom - plotOffset.top + axis.labelHeight;
            }
        }

        function adjustLayoutForThingsStickingOut() {
            // possibly adjust plot offset to ensure everything stays
            // inside the canvas and isn't clipped off

            var minMargin = options.grid.minBorderMargin,
                axis, i;

            // check stuff from the plot (FIXME: this should just read
            // a value from the series, otherwise it's impossible to
            // customize)
            if (minMargin == null) {
                minMargin = 0;
                for (i = 0; i < series.length; ++i)
                    minMargin = Math.max(minMargin, 2 * (series[i].points.radius + series[i].points.lineWidth/2));
            }

            var margins = {
                left: minMargin,
                right: minMargin,
                top: minMargin,
                bottom: minMargin
            };

            // check axis labels, note we don't check the actual
            // labels but instead use the overall width/height to not
            // jump as much around with replots
            $.each(allAxes(), function (_, axis) {
                if (axis.reserveSpace && axis.ticks && axis.ticks.length) {
                    if (axis.direction === "x") {
                        margins.left = Math.max(margins.left, axis.labelWidth / 2);
                        margins.right = Math.max(margins.right, axis.labelWidth / 2);
                    } else {
                        margins.bottom = Math.max(margins.bottom, axis.labelHeight / 2);
                        margins.top = Math.max(margins.top, axis.labelHeight / 2);
                    }
                }
            });

            plotOffset.left = Math.ceil(Math.max(margins.left, plotOffset.left));
            plotOffset.right = Math.ceil(Math.max(margins.right, plotOffset.right));
            plotOffset.top = Math.ceil(Math.max(margins.top, plotOffset.top));
            plotOffset.bottom = Math.ceil(Math.max(margins.bottom, plotOffset.bottom));
        }

        function setupGrid() {
            var i, axes = allAxes(), showGrid = options.grid.show;

            // Initialize the plot's offset from the edge of the canvas

            for (var a in plotOffset) {
                var margin = options.grid.margin || 0;
                plotOffset[a] = typeof margin == "number" ? margin : margin[a] || 0;
            }

            executeHooks(hooks.processOffset, [plotOffset]);

            // If the grid is visible, add its border width to the offset

            for (var a in plotOffset) {
                if(typeof(options.grid.borderWidth) == "object") {
                    plotOffset[a] += showGrid ? options.grid.borderWidth[a] : 0;
                }
                else {
                    plotOffset[a] += showGrid ? options.grid.borderWidth : 0;
                }
            }

            $.each(axes, function (_, axis) {
                var axisOpts = axis.options;
                axis.show = axisOpts.show == null ? axis.used : axisOpts.show;
                axis.reserveSpace = axisOpts.reserveSpace == null ? axis.show : axisOpts.reserveSpace;
                setRange(axis);
            });

            if (showGrid) {

                var allocatedAxes = $.grep(axes, function (axis) {
                    return axis.show || axis.reserveSpace;
                });

                $.each(allocatedAxes, function (_, axis) {
                    // make the ticks
                    setupTickGeneration(axis);
                    setTicks(axis);
                    snapRangeToTicks(axis, axis.ticks);
                    // find labelWidth/Height for axis
                    measureTickLabels(axis);
                });

                // with all dimensions calculated, we can compute the
                // axis bounding boxes, start from the outside
                // (reverse order)
                for (i = allocatedAxes.length - 1; i >= 0; --i)
                    allocateAxisBoxFirstPhase(allocatedAxes[i]);

                // make sure we've got enough space for things that
                // might stick out
                adjustLayoutForThingsStickingOut();

                $.each(allocatedAxes, function (_, axis) {
                    allocateAxisBoxSecondPhase(axis);
                });
            }

            plotWidth = surface.width - plotOffset.left - plotOffset.right;
            plotHeight = surface.height - plotOffset.bottom - plotOffset.top;

            // now we got the proper plot dimensions, we can compute the scaling
            $.each(axes, function (_, axis) {
                setTransformationHelpers(axis);
            });

            if (showGrid) {
                drawAxisLabels();
            }

            insertLegend();
        }

        function setRange(axis) {
            var opts = axis.options,
                min = +(opts.min != null ? opts.min : axis.datamin),
                max = +(opts.max != null ? opts.max : axis.datamax),
                delta = max - min;

            if (delta == 0.0) {
                // degenerate case
                var widen = max == 0 ? 1 : 0.01;

                if (opts.min == null)
                    min -= widen;
                // always widen max if we couldn't widen min to ensure we
                // don't fall into min == max which doesn't work
                if (opts.max == null || opts.min != null)
                    max += widen;
            }
            else {
                // consider autoscaling
                var margin = opts.autoscaleMargin;
                if (margin != null) {
                    if (opts.min == null) {
                        min -= delta * margin;
                        // make sure we don't go below zero if all values
                        // are positive
                        if (min < 0 && axis.datamin != null && axis.datamin >= 0)
                            min = 0;
                    }
                    if (opts.max == null) {
                        max += delta * margin;
                        if (max > 0 && axis.datamax != null && axis.datamax <= 0)
                            max = 0;
                    }
                }
            }
            axis.min = min;
            axis.max = max;
        }

        function setupTickGeneration(axis) {
            var opts = axis.options;

            // estimate number of ticks
            var noTicks;
            if (typeof opts.ticks == "number" && opts.ticks > 0)
                noTicks = opts.ticks;
            else
                // heuristic based on the model a*sqrt(x) fitted to
                // some data points that seemed reasonable
                noTicks = 0.3 * Math.sqrt(axis.direction == "x" ? surface.width : surface.height);

            var delta = (axis.max - axis.min) / noTicks,
                dec = -Math.floor(Math.log(delta) / Math.LN10),
                maxDec = opts.tickDecimals;

            if (maxDec != null && dec > maxDec) {
                dec = maxDec;
            }

            var magn = Math.pow(10, -dec),
                norm = delta / magn, // norm is between 1.0 and 10.0
                size;

            if (norm < 1.5) {
                size = 1;
            } else if (norm < 3) {
                size = 2;
                // special case for 2.5, requires an extra decimal
                if (norm > 2.25 && (maxDec == null || dec + 1 <= maxDec)) {
                    size = 2.5;
                    ++dec;
                }
            } else if (norm < 7.5) {
                size = 5;
            } else {
                size = 10;
            }

            size *= magn;

            if (opts.minTickSize != null && size < opts.minTickSize) {
                size = opts.minTickSize;
            }

            axis.delta = delta;
            axis.tickDecimals = Math.max(0, maxDec != null ? maxDec : dec);
            axis.tickSize = opts.tickSize || size;

            // Time mode was moved to a plug-in in 0.8, and since so many people use it
            // we'll add an especially friendly reminder to make sure they included it.

            if (opts.mode == "time" && !axis.tickGenerator) {
                throw new Error("Time mode requires the flot.time plugin.");
            }

            // Flot supports base-10 axes; any other mode else is handled by a plug-in,
            // like flot.time.js.

            if (!axis.tickGenerator) {

                axis.tickGenerator = function (axis) {

                    var ticks = [],
                        start = floorInBase(axis.min, axis.tickSize),
                        i = 0,
                        v = Number.NaN,
                        prev;

                    do {
                        prev = v;
                        v = start + i * axis.tickSize;
                        ticks.push(v);
                        ++i;
                    } while (v < axis.max && v != prev);
                    return ticks;
                };

				axis.tickFormatter = function (value, axis) {

					var factor = axis.tickDecimals ? Math.pow(10, axis.tickDecimals) : 1;
					var formatted = "" + Math.round(value * factor) / factor;

					// If tickDecimals was specified, ensure that we have exactly that
					// much precision; otherwise default to the value's own precision.

					if (axis.tickDecimals != null) {
						var decimal = formatted.indexOf(".");
						var precision = decimal == -1 ? 0 : formatted.length - decimal - 1;
						if (precision < axis.tickDecimals) {
							return (precision ? formatted : formatted + ".") + ("" + factor).substr(1, axis.tickDecimals - precision);
						}
					}

                    return formatted;
                };
            }

            if ($.isFunction(opts.tickFormatter))
                axis.tickFormatter = function (v, axis) { return "" + opts.tickFormatter(v, axis); };

            if (opts.alignTicksWithAxis != null) {
                var otherAxis = (axis.direction == "x" ? xaxes : yaxes)[opts.alignTicksWithAxis - 1];
                if (otherAxis && otherAxis.used && otherAxis != axis) {
                    // consider snapping min/max to outermost nice ticks
                    var niceTicks = axis.tickGenerator(axis);
                    if (niceTicks.length > 0) {
                        if (opts.min == null)
                            axis.min = Math.min(axis.min, niceTicks[0]);
                        if (opts.max == null && niceTicks.length > 1)
                            axis.max = Math.max(axis.max, niceTicks[niceTicks.length - 1]);
                    }

                    axis.tickGenerator = function (axis) {
                        // copy ticks, scaled to this axis
                        var ticks = [], v, i;
                        for (i = 0; i < otherAxis.ticks.length; ++i) {
                            v = (otherAxis.ticks[i].v - otherAxis.min) / (otherAxis.max - otherAxis.min);
                            v = axis.min + v * (axis.max - axis.min);
                            ticks.push(v);
                        }
                        return ticks;
                    };

                    // we might need an extra decimal since forced
                    // ticks don't necessarily fit naturally
                    if (!axis.mode && opts.tickDecimals == null) {
                        var extraDec = Math.max(0, -Math.floor(Math.log(axis.delta) / Math.LN10) + 1),
                            ts = axis.tickGenerator(axis);

                        // only proceed if the tick interval rounded
                        // with an extra decimal doesn't give us a
                        // zero at end
                        if (!(ts.length > 1 && /\..*0$/.test((ts[1] - ts[0]).toFixed(extraDec))))
                            axis.tickDecimals = extraDec;
                    }
                }
            }
        }

        function setTicks(axis) {
            var oticks = axis.options.ticks, ticks = [];
            if (oticks == null || (typeof oticks == "number" && oticks > 0))
                ticks = axis.tickGenerator(axis);
            else if (oticks) {
                if ($.isFunction(oticks))
                    // generate the ticks
                    ticks = oticks(axis);
                else
                    ticks = oticks;
            }

            // clean up/labelify the supplied ticks, copy them over
            var i, v;
            axis.ticks = [];
            for (i = 0; i < ticks.length; ++i) {
                var label = null;
                var t = ticks[i];
                if (typeof t == "object") {
                    v = +t[0];
                    if (t.length > 1)
                        label = t[1];
                }
                else
                    v = +t;
                if (label == null)
                    label = axis.tickFormatter(v, axis);
                if (!isNaN(v))
                    axis.ticks.push({ v: v, label: label });
            }
        }

        function snapRangeToTicks(axis, ticks) {
            if (axis.options.autoscaleMargin && ticks.length > 0) {
                // snap to ticks
                if (axis.options.min == null)
                    axis.min = Math.min(axis.min, ticks[0].v);
                if (axis.options.max == null && ticks.length > 1)
                    axis.max = Math.max(axis.max, ticks[ticks.length - 1].v);
            }
        }

        function draw() {

            surface.clear();

            executeHooks(hooks.drawBackground, [ctx]);

            var grid = options.grid;

            // draw background, if any
            if (grid.show && grid.backgroundColor)
                drawBackground();

            if (grid.show && !grid.aboveData) {
                drawGrid();
            }

            for (var i = 0; i < series.length; ++i) {
                executeHooks(hooks.drawSeries, [ctx, series[i]]);
                drawSeries(series[i]);
            }

            executeHooks(hooks.draw, [ctx]);

            if (grid.show && grid.aboveData) {
                drawGrid();
            }

            surface.render();

            // A draw implies that either the axes or data have changed, so we
            // should probably update the overlay highlights as well.

            triggerRedrawOverlay();
        }

        function extractRange(ranges, coord) {
            var axis, from, to, key, axes = allAxes();

            for (var i = 0; i < axes.length; ++i) {
                axis = axes[i];
                if (axis.direction == coord) {
                    key = coord + axis.n + "axis";
                    if (!ranges[key] && axis.n == 1)
                        key = coord + "axis"; // support x1axis as xaxis
                    if (ranges[key]) {
                        from = ranges[key].from;
                        to = ranges[key].to;
                        break;
                    }
                }
            }

            // backwards-compat stuff - to be removed in future
            if (!ranges[key]) {
                axis = coord == "x" ? xaxes[0] : yaxes[0];
                from = ranges[coord + "1"];
                to = ranges[coord + "2"];
            }

            // auto-reverse as an added bonus
            if (from != null && to != null && from > to) {
                var tmp = from;
                from = to;
                to = tmp;
            }

            return { from: from, to: to, axis: axis };
        }

        function drawBackground() {
            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            ctx.fillStyle = getColorOrGradient(options.grid.backgroundColor, plotHeight, 0, "rgba(255, 255, 255, 0)");
            ctx.fillRect(0, 0, plotWidth, plotHeight);
            ctx.restore();
        }

        function drawGrid() {
            var i, axes, bw, bc;

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            // draw markings
            var markings = options.grid.markings;
            if (markings) {
                if ($.isFunction(markings)) {
                    axes = plot.getAxes();
                    // xmin etc. is backwards compatibility, to be
                    // removed in the future
                    axes.xmin = axes.xaxis.min;
                    axes.xmax = axes.xaxis.max;
                    axes.ymin = axes.yaxis.min;
                    axes.ymax = axes.yaxis.max;

                    markings = markings(axes);
                }

                for (i = 0; i < markings.length; ++i) {
                    var m = markings[i],
                        xrange = extractRange(m, "x"),
                        yrange = extractRange(m, "y");

                    // fill in missing
                    if (xrange.from == null)
                        xrange.from = xrange.axis.min;
                    if (xrange.to == null)
                        xrange.to = xrange.axis.max;
                    if (yrange.from == null)
                        yrange.from = yrange.axis.min;
                    if (yrange.to == null)
                        yrange.to = yrange.axis.max;

                    // clip
                    if (xrange.to < xrange.axis.min || xrange.from > xrange.axis.max ||
                        yrange.to < yrange.axis.min || yrange.from > yrange.axis.max)
                        continue;

                    xrange.from = Math.max(xrange.from, xrange.axis.min);
                    xrange.to = Math.min(xrange.to, xrange.axis.max);
                    yrange.from = Math.max(yrange.from, yrange.axis.min);
                    yrange.to = Math.min(yrange.to, yrange.axis.max);

                    var xequal = xrange.from === xrange.to,
                        yequal = yrange.from === yrange.to;

                    if (xequal && yequal) {
                        continue;
                    }

                    // then draw
                    xrange.from = Math.floor(xrange.axis.p2c(xrange.from));
                    xrange.to = Math.floor(xrange.axis.p2c(xrange.to));
                    yrange.from = Math.floor(yrange.axis.p2c(yrange.from));
                    yrange.to = Math.floor(yrange.axis.p2c(yrange.to));

                    if (xequal || yequal) {
                        var lineWidth = m.lineWidth || options.grid.markingsLineWidth,
                            subPixel = lineWidth % 2 ? 0.5 : 0;
                        ctx.beginPath();
                        ctx.strokeStyle = m.color || options.grid.markingsColor;
                        ctx.lineWidth = lineWidth;
                        if (xequal) {
                            ctx.moveTo(xrange.to + subPixel, yrange.from);
                            ctx.lineTo(xrange.to + subPixel, yrange.to);
                        } else {
                            ctx.moveTo(xrange.from, yrange.to + subPixel);
                            ctx.lineTo(xrange.to, yrange.to + subPixel);                            
                        }
                        ctx.stroke();
                    } else {
                        ctx.fillStyle = m.color || options.grid.markingsColor;
                        ctx.fillRect(xrange.from, yrange.to,
                                     xrange.to - xrange.from,
                                     yrange.from - yrange.to);
                    }
                }
            }

            // draw the ticks
            axes = allAxes();
            bw = options.grid.borderWidth;

            for (var j = 0; j < axes.length; ++j) {
                var axis = axes[j], box = axis.box,
                    t = axis.tickLength, x, y, xoff, yoff;
                if (!axis.show || axis.ticks.length == 0)
                    continue;

                ctx.lineWidth = 1;

                // find the edges
                if (axis.direction == "x") {
                    x = 0;
                    if (t == "full")
                        y = (axis.position == "top" ? 0 : plotHeight);
                    else
                        y = box.top - plotOffset.top + (axis.position == "top" ? box.height : 0);
                }
                else {
                    y = 0;
                    if (t == "full")
                        x = (axis.position == "left" ? 0 : plotWidth);
                    else
                        x = box.left - plotOffset.left + (axis.position == "left" ? box.width : 0);
                }

                // draw tick bar
                if (!axis.innermost) {
                    ctx.strokeStyle = axis.options.color;
                    ctx.beginPath();
                    xoff = yoff = 0;
                    if (axis.direction == "x")
                        xoff = plotWidth + 1;
                    else
                        yoff = plotHeight + 1;

                    if (ctx.lineWidth == 1) {
                        if (axis.direction == "x") {
                            y = Math.floor(y) + 0.5;
                        } else {
                            x = Math.floor(x) + 0.5;
                        }
                    }

                    ctx.moveTo(x, y);
                    ctx.lineTo(x + xoff, y + yoff);
                    ctx.stroke();
                }

                // draw ticks

                ctx.strokeStyle = axis.options.tickColor;

                ctx.beginPath();
                for (i = 0; i < axis.ticks.length; ++i) {
                    var v = axis.ticks[i].v;

                    xoff = yoff = 0;

                    if (isNaN(v) || v < axis.min || v > axis.max
                        // skip those lying on the axes if we got a border
                        || (t == "full"
                            && ((typeof bw == "object" && bw[axis.position] > 0) || bw > 0)
                            && (v == axis.min || v == axis.max)))
                        continue;

                    if (axis.direction == "x") {
                        x = axis.p2c(v);
                        yoff = t == "full" ? -plotHeight : t;

                        if (axis.position == "top")
                            yoff = -yoff;
                    }
                    else {
                        y = axis.p2c(v);
                        xoff = t == "full" ? -plotWidth : t;

                        if (axis.position == "left")
                            xoff = -xoff;
                    }

                    if (ctx.lineWidth == 1) {
                        if (axis.direction == "x")
                            x = Math.floor(x) + 0.5;
                        else
                            y = Math.floor(y) + 0.5;
                    }

                    ctx.moveTo(x, y);
                    ctx.lineTo(x + xoff, y + yoff);
                }

                ctx.stroke();
            }


            // draw border
            if (bw) {
                // If either borderWidth or borderColor is an object, then draw the border
                // line by line instead of as one rectangle
                bc = options.grid.borderColor;
                if(typeof bw == "object" || typeof bc == "object") {
                    if (typeof bw !== "object") {
                        bw = {top: bw, right: bw, bottom: bw, left: bw};
                    }
                    if (typeof bc !== "object") {
                        bc = {top: bc, right: bc, bottom: bc, left: bc};
                    }

                    if (bw.top > 0) {
                        ctx.strokeStyle = bc.top;
                        ctx.lineWidth = bw.top;
                        ctx.beginPath();
                        ctx.moveTo(0 - bw.left, 0 - bw.top/2);
                        ctx.lineTo(plotWidth, 0 - bw.top/2);
                        ctx.stroke();
                    }

                    if (bw.right > 0) {
                        ctx.strokeStyle = bc.right;
                        ctx.lineWidth = bw.right;
                        ctx.beginPath();
                        ctx.moveTo(plotWidth + bw.right / 2, 0 - bw.top);
                        ctx.lineTo(plotWidth + bw.right / 2, plotHeight);
                        ctx.stroke();
                    }

                    if (bw.bottom > 0) {
                        ctx.strokeStyle = bc.bottom;
                        ctx.lineWidth = bw.bottom;
                        ctx.beginPath();
                        ctx.moveTo(plotWidth + bw.right, plotHeight + bw.bottom / 2);
                        ctx.lineTo(0, plotHeight + bw.bottom / 2);
                        ctx.stroke();
                    }

                    if (bw.left > 0) {
                        ctx.strokeStyle = bc.left;
                        ctx.lineWidth = bw.left;
                        ctx.beginPath();
                        ctx.moveTo(0 - bw.left/2, plotHeight + bw.bottom);
                        ctx.lineTo(0- bw.left/2, 0);
                        ctx.stroke();
                    }
                }
                else {
                    ctx.lineWidth = bw;
                    ctx.strokeStyle = options.grid.borderColor;
                    ctx.strokeRect(-bw/2, -bw/2, plotWidth + bw, plotHeight + bw);
                }
            }

            ctx.restore();
        }

        function drawAxisLabels() {

            $.each(allAxes(), function (_, axis) {
                var box = axis.box,
                    legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis",
                    layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles,
                    font = axis.options.font || "flot-tick-label tickLabel",
                    tick, x, y, halign, valign;

                // Remove text before checking for axis.show and ticks.length;
                // otherwise plugins, like flot-tickrotor, that draw their own
                // tick labels will end up with both theirs and the defaults.

                surface.removeText(layer);

                if (!axis.show || axis.ticks.length == 0)
                    return;

                for (var i = 0; i < axis.ticks.length; ++i) {

                    tick = axis.ticks[i];
                    if (!tick.label || tick.v < axis.min || tick.v > axis.max)
                        continue;

                    if (axis.direction == "x") {
                        halign = "center";
                        x = plotOffset.left + axis.p2c(tick.v);
                        if (axis.position == "bottom") {
                            y = box.top + box.padding;
                        } else {
                            y = box.top + box.height - box.padding;
                            valign = "bottom";
                        }
                    } else {
                        valign = "middle";
                        y = plotOffset.top + axis.p2c(tick.v);
                        if (axis.position == "left") {
                            x = box.left + box.width - box.padding;
                            halign = "right";
                        } else {
                            x = box.left + box.padding;
                        }
                    }

                    surface.addText(layer, x, y, tick.label, font, null, null, halign, valign);
                }
            });
        }

        function drawSeries(series) {
            if (series.lines.show)
                drawSeriesLines(series);
            if (series.bars.show)
                drawSeriesBars(series);
            if (series.points.show)
                drawSeriesPoints(series);
        }

        function drawSeriesLines(series) {
            function plotLine(datapoints, xoffset, yoffset, axisx, axisy) {
                var points = datapoints.points,
                    ps = datapoints.pointsize,
                    prevx = null, prevy = null;

                ctx.beginPath();
                for (var i = ps; i < points.length; i += ps) {
                    var x1 = points[i - ps], y1 = points[i - ps + 1],
                        x2 = points[i], y2 = points[i + 1];

                    if (x1 == null || x2 == null)
                        continue;

                    // clip with ymin
                    if (y1 <= y2 && y1 < axisy.min) {
                        if (y2 < axisy.min)
                            continue;   // line segment is outside
                        // compute new intersection point
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.min;
                    }
                    else if (y2 <= y1 && y2 < axisy.min) {
                        if (y1 < axisy.min)
                            continue;
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.min;
                    }

                    // clip with ymax
                    if (y1 >= y2 && y1 > axisy.max) {
                        if (y2 > axisy.max)
                            continue;
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.max;
                    }
                    else if (y2 >= y1 && y2 > axisy.max) {
                        if (y1 > axisy.max)
                            continue;
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.max;
                    }

                    // clip with xmin
                    if (x1 <= x2 && x1 < axisx.min) {
                        if (x2 < axisx.min)
                            continue;
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.min;
                    }
                    else if (x2 <= x1 && x2 < axisx.min) {
                        if (x1 < axisx.min)
                            continue;
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.min;
                    }

                    // clip with xmax
                    if (x1 >= x2 && x1 > axisx.max) {
                        if (x2 > axisx.max)
                            continue;
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.max;
                    }
                    else if (x2 >= x1 && x2 > axisx.max) {
                        if (x1 > axisx.max)
                            continue;
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.max;
                    }

                    if (x1 != prevx || y1 != prevy)
                        ctx.moveTo(axisx.p2c(x1) + xoffset, axisy.p2c(y1) + yoffset);

                    prevx = x2;
                    prevy = y2;
                    ctx.lineTo(axisx.p2c(x2) + xoffset, axisy.p2c(y2) + yoffset);
                }
                ctx.stroke();
            }

            function plotLineArea(datapoints, axisx, axisy) {
                var points = datapoints.points,
                    ps = datapoints.pointsize,
                    bottom = Math.min(Math.max(0, axisy.min), axisy.max),
                    i = 0, top, areaOpen = false,
                    ypos = 1, segmentStart = 0, segmentEnd = 0;

                // we process each segment in two turns, first forward
                // direction to sketch out top, then once we hit the
                // end we go backwards to sketch the bottom
                while (true) {
                    if (ps > 0 && i > points.length + ps)
                        break;

                    i += ps; // ps is negative if going backwards

                    var x1 = points[i - ps],
                        y1 = points[i - ps + ypos],
                        x2 = points[i], y2 = points[i + ypos];

                    if (areaOpen) {
                        if (ps > 0 && x1 != null && x2 == null) {
                            // at turning point
                            segmentEnd = i;
                            ps = -ps;
                            ypos = 2;
                            continue;
                        }

                        if (ps < 0 && i == segmentStart + ps) {
                            // done with the reverse sweep
                            ctx.fill();
                            areaOpen = false;
                            ps = -ps;
                            ypos = 1;
                            i = segmentStart = segmentEnd + ps;
                            continue;
                        }
                    }

                    if (x1 == null || x2 == null)
                        continue;

                    // clip x values

                    // clip with xmin
                    if (x1 <= x2 && x1 < axisx.min) {
                        if (x2 < axisx.min)
                            continue;
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.min;
                    }
                    else if (x2 <= x1 && x2 < axisx.min) {
                        if (x1 < axisx.min)
                            continue;
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.min;
                    }

                    // clip with xmax
                    if (x1 >= x2 && x1 > axisx.max) {
                        if (x2 > axisx.max)
                            continue;
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.max;
                    }
                    else if (x2 >= x1 && x2 > axisx.max) {
                        if (x1 > axisx.max)
                            continue;
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.max;
                    }

                    if (!areaOpen) {
                        // open area
                        ctx.beginPath();
                        ctx.moveTo(axisx.p2c(x1), axisy.p2c(bottom));
                        areaOpen = true;
                    }

                    // now first check the case where both is outside
                    if (y1 >= axisy.max && y2 >= axisy.max) {
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.max));
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.max));
                        continue;
                    }
                    else if (y1 <= axisy.min && y2 <= axisy.min) {
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.min));
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.min));
                        continue;
                    }

                    // else it's a bit more complicated, there might
                    // be a flat maxed out rectangle first, then a
                    // triangular cutout or reverse; to find these
                    // keep track of the current x values
                    var x1old = x1, x2old = x2;

                    // clip the y values, without shortcutting, we
                    // go through all cases in turn

                    // clip with ymin
                    if (y1 <= y2 && y1 < axisy.min && y2 >= axisy.min) {
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.min;
                    }
                    else if (y2 <= y1 && y2 < axisy.min && y1 >= axisy.min) {
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.min;
                    }

                    // clip with ymax
                    if (y1 >= y2 && y1 > axisy.max && y2 <= axisy.max) {
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.max;
                    }
                    else if (y2 >= y1 && y2 > axisy.max && y1 <= axisy.max) {
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.max;
                    }

                    // if the x value was changed we got a rectangle
                    // to fill
                    if (x1 != x1old) {
                        ctx.lineTo(axisx.p2c(x1old), axisy.p2c(y1));
                        // it goes to (x1, y1), but we fill that below
                    }

                    // fill triangular section, this sometimes result
                    // in redundant points if (x1, y1) hasn't changed
                    // from previous line to, but we just ignore that
                    ctx.lineTo(axisx.p2c(x1), axisy.p2c(y1));
                    ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));

                    // fill the other rectangle if it's there
                    if (x2 != x2old) {
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));
                        ctx.lineTo(axisx.p2c(x2old), axisy.p2c(y2));
                    }
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);
            ctx.lineJoin = "round";

            var lw = series.lines.lineWidth,
                sw = series.shadowSize;
            // FIXME: consider another form of shadow when filling is turned on
            if (lw > 0 && sw > 0) {
                // draw shadow as a thick and thin line with transparency
                ctx.lineWidth = sw;
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                // position shadow at angle from the mid of line
                var angle = Math.PI/18;
                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/2), Math.cos(angle) * (lw/2 + sw/2), series.xaxis, series.yaxis);
                ctx.lineWidth = sw/2;
                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/4), Math.cos(angle) * (lw/2 + sw/4), series.xaxis, series.yaxis);
            }

            ctx.lineWidth = lw;
            ctx.strokeStyle = series.color;
            var fillStyle = getFillStyle(series.lines, series.color, 0, plotHeight);
            if (fillStyle) {
                ctx.fillStyle = fillStyle;
                plotLineArea(series.datapoints, series.xaxis, series.yaxis);
            }

            if (lw > 0)
                plotLine(series.datapoints, 0, 0, series.xaxis, series.yaxis);
            ctx.restore();
        }

        function drawSeriesPoints(series) {
            function plotPoints(datapoints, radius, fillStyle, offset, shadow, axisx, axisy, symbol) {
                var points = datapoints.points, ps = datapoints.pointsize;

                for (var i = 0; i < points.length; i += ps) {
                    var x = points[i], y = points[i + 1];
                    if (x == null || x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
                        continue;

                    ctx.beginPath();
                    x = axisx.p2c(x);
                    y = axisy.p2c(y) + offset;
                    if (symbol == "circle")
                        ctx.arc(x, y, radius, 0, shadow ? Math.PI : Math.PI * 2, false);
                    else
                        symbol(ctx, x, y, radius, shadow);
                    ctx.closePath();

                    if (fillStyle) {
                        ctx.fillStyle = fillStyle;
                        ctx.fill();
                    }
                    ctx.stroke();
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            var lw = series.points.lineWidth,
                sw = series.shadowSize,
                radius = series.points.radius,
                symbol = series.points.symbol;

            // If the user sets the line width to 0, we change it to a very 
            // small value. A line width of 0 seems to force the default of 1.
            // Doing the conditional here allows the shadow setting to still be 
            // optional even with a lineWidth of 0.

            if( lw == 0 )
                lw = 0.0001;

            if (lw > 0 && sw > 0) {
                // draw shadow in two steps
                var w = sw / 2;
                ctx.lineWidth = w;
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                plotPoints(series.datapoints, radius, null, w + w/2, true,
                           series.xaxis, series.yaxis, symbol);

                ctx.strokeStyle = "rgba(0,0,0,0.2)";
                plotPoints(series.datapoints, radius, null, w/2, true,
                           series.xaxis, series.yaxis, symbol);
            }

            ctx.lineWidth = lw;
            ctx.strokeStyle = series.color;
            plotPoints(series.datapoints, radius,
                       getFillStyle(series.points, series.color), 0, false,
                       series.xaxis, series.yaxis, symbol);
            ctx.restore();
        }

        function drawBar(x, y, b, barLeft, barRight, fillStyleCallback, axisx, axisy, c, horizontal, lineWidth) {
            var left, right, bottom, top,
                drawLeft, drawRight, drawTop, drawBottom,
                tmp;

            // in horizontal mode, we start the bar from the left
            // instead of from the bottom so it appears to be
            // horizontal rather than vertical
            if (horizontal) {
                drawBottom = drawRight = drawTop = true;
                drawLeft = false;
                left = b;
                right = x;
                top = y + barLeft;
                bottom = y + barRight;

                // account for negative bars
                if (right < left) {
                    tmp = right;
                    right = left;
                    left = tmp;
                    drawLeft = true;
                    drawRight = false;
                }
            }
            else {
                drawLeft = drawRight = drawTop = true;
                drawBottom = false;
                left = x + barLeft;
                right = x + barRight;
                bottom = b;
                top = y;

                // account for negative bars
                if (top < bottom) {
                    tmp = top;
                    top = bottom;
                    bottom = tmp;
                    drawBottom = true;
                    drawTop = false;
                }
            }

            // clip
            if (right < axisx.min || left > axisx.max ||
                top < axisy.min || bottom > axisy.max)
                return;

            if (left < axisx.min) {
                left = axisx.min;
                drawLeft = false;
            }

            if (right > axisx.max) {
                right = axisx.max;
                drawRight = false;
            }

            if (bottom < axisy.min) {
                bottom = axisy.min;
                drawBottom = false;
            }

            if (top > axisy.max) {
                top = axisy.max;
                drawTop = false;
            }

            left = axisx.p2c(left);
            bottom = axisy.p2c(bottom);
            right = axisx.p2c(right);
            top = axisy.p2c(top);

            // fill the bar
            if (fillStyleCallback) {
                c.fillStyle = fillStyleCallback(bottom, top);
                c.fillRect(left, top, right - left, bottom - top)
            }

            // draw outline
            if (lineWidth > 0 && (drawLeft || drawRight || drawTop || drawBottom)) {
                c.beginPath();

                // FIXME: inline moveTo is buggy with excanvas
                c.moveTo(left, bottom);
                if (drawLeft)
                    c.lineTo(left, top);
                else
                    c.moveTo(left, top);
                if (drawTop)
                    c.lineTo(right, top);
                else
                    c.moveTo(right, top);
                if (drawRight)
                    c.lineTo(right, bottom);
                else
                    c.moveTo(right, bottom);
                if (drawBottom)
                    c.lineTo(left, bottom);
                else
                    c.moveTo(left, bottom);
                c.stroke();
            }
        }

        function drawSeriesBars(series) {
            function plotBars(datapoints, barLeft, barRight, fillStyleCallback, axisx, axisy) {
                var points = datapoints.points, ps = datapoints.pointsize;

                for (var i = 0; i < points.length; i += ps) {
                    if (points[i] == null)
                        continue;
                    drawBar(points[i], points[i + 1], points[i + 2], barLeft, barRight, fillStyleCallback, axisx, axisy, ctx, series.bars.horizontal, series.bars.lineWidth);
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            // FIXME: figure out a way to add shadows (for instance along the right edge)
            ctx.lineWidth = series.bars.lineWidth;
            ctx.strokeStyle = series.color;

            var barLeft;

            switch (series.bars.align) {
                case "left":
                    barLeft = 0;
                    break;
                case "right":
                    barLeft = -series.bars.barWidth;
                    break;
                default:
                    barLeft = -series.bars.barWidth / 2;
            }

            var fillStyleCallback = series.bars.fill ? function (bottom, top) { return getFillStyle(series.bars, series.color, bottom, top); } : null;
            plotBars(series.datapoints, barLeft, barLeft + series.bars.barWidth, fillStyleCallback, series.xaxis, series.yaxis);
            ctx.restore();
        }

        function getFillStyle(filloptions, seriesColor, bottom, top) {
            var fill = filloptions.fill;
            if (!fill)
                return null;

            if (filloptions.fillColor)
                return getColorOrGradient(filloptions.fillColor, bottom, top, seriesColor);

            var c = $.color.parse(seriesColor);
            c.a = typeof fill == "number" ? fill : 0.4;
            c.normalize();
            return c.toString();
        }

        function insertLegend() {

            if (options.legend.container != null) {
                $(options.legend.container).html("");
            } else {
                placeholder.find(".legend").remove();
            }

            if (!options.legend.show) {
                return;
            }

            var fragments = [], entries = [], rowStarted = false,
                lf = options.legend.labelFormatter, s, label;

            // Build a list of legend entries, with each having a label and a color

            for (var i = 0; i < series.length; ++i) {
                s = series[i];
                if (s.label) {
                    label = lf ? lf(s.label, s) : s.label;
                    if (label) {
                        entries.push({
                            label: label,
                            color: s.color
                        });
                    }
                }
            }

            // Sort the legend using either the default or a custom comparator

            if (options.legend.sorted) {
                if ($.isFunction(options.legend.sorted)) {
                    entries.sort(options.legend.sorted);
                } else if (options.legend.sorted == "reverse") {
                	entries.reverse();
                } else {
                    var ascending = options.legend.sorted != "descending";
                    entries.sort(function(a, b) {
                        return a.label == b.label ? 0 : (
                            (a.label < b.label) != ascending ? 1 : -1   // Logical XOR
                        );
                    });
                }
            }

            // Generate markup for the list of entries, in their final order

            for (var i = 0; i < entries.length; ++i) {

                var entry = entries[i];

                if (i % options.legend.noColumns == 0) {
                    if (rowStarted)
                        fragments.push('</tr>');
                    fragments.push('<tr>');
                    rowStarted = true;
                }

                fragments.push(
                    '<td class="legendColorBox"><div style="border:1px solid ' + options.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + entry.color + ';overflow:hidden"></div></div></td>' +
                    '<td class="legendLabel">' + entry.label + '</td>'
                );
            }

            if (rowStarted)
                fragments.push('</tr>');

            if (fragments.length == 0)
                return;

            var table = '<table style="font-size:smaller;color:' + options.grid.color + '">' + fragments.join("") + '</table>';
            if (options.legend.container != null)
                $(options.legend.container).html(table);
            else {
                var pos = "",
                    p = options.legend.position,
                    m = options.legend.margin;
                if (m[0] == null)
                    m = [m, m];
                if (p.charAt(0) == "n")
                    pos += 'top:' + (m[1] + plotOffset.top) + 'px;';
                else if (p.charAt(0) == "s")
                    pos += 'bottom:' + (m[1] + plotOffset.bottom) + 'px;';
                if (p.charAt(1) == "e")
                    pos += 'right:' + (m[0] + plotOffset.right) + 'px;';
                else if (p.charAt(1) == "w")
                    pos += 'left:' + (m[0] + plotOffset.left) + 'px;';
                var legend = $('<div class="legend">' + table.replace('style="', 'style="position:absolute;' + pos +';') + '</div>').appendTo(placeholder);
                if (options.legend.backgroundOpacity != 0.0) {
                    // put in the transparent background
                    // separately to avoid blended labels and
                    // label boxes
                    var c = options.legend.backgroundColor;
                    if (c == null) {
                        c = options.grid.backgroundColor;
                        if (c && typeof c == "string")
                            c = $.color.parse(c);
                        else
                            c = $.color.extract(legend, 'background-color');
                        c.a = 1;
                        c = c.toString();
                    }
                    var div = legend.children();
                    $('<div style="position:absolute;width:' + div.width() + 'px;height:' + div.height() + 'px;' + pos +'background-color:' + c + ';"> </div>').prependTo(legend).css('opacity', options.legend.backgroundOpacity);
                }
            }
        }


        // interactive features

        var highlights = [],
            redrawTimeout = null;

        // returns the data item the mouse is over, or null if none is found
        function findNearbyItem(mouseX, mouseY, seriesFilter) {
            var maxDistance = options.grid.mouseActiveRadius,
                smallestDistance = maxDistance * maxDistance + 1,
                item = null, foundPoint = false, i, j, ps;

            for (i = series.length - 1; i >= 0; --i) {
                if (!seriesFilter(series[i]))
                    continue;

                var s = series[i],
                    axisx = s.xaxis,
                    axisy = s.yaxis,
                    points = s.datapoints.points,
                    mx = axisx.c2p(mouseX), // precompute some stuff to make the loop faster
                    my = axisy.c2p(mouseY),
                    maxx = maxDistance / axisx.scale,
                    maxy = maxDistance / axisy.scale;

                ps = s.datapoints.pointsize;
                // with inverse transforms, we can't use the maxx/maxy
                // optimization, sadly
                if (axisx.options.inverseTransform)
                    maxx = Number.MAX_VALUE;
                if (axisy.options.inverseTransform)
                    maxy = Number.MAX_VALUE;

                if (s.lines.show || s.points.show) {
                    for (j = 0; j < points.length; j += ps) {
                        var x = points[j], y = points[j + 1];
                        if (x == null)
                            continue;

                        // For points and lines, the cursor must be within a
                        // certain distance to the data point
                        if (x - mx > maxx || x - mx < -maxx ||
                            y - my > maxy || y - my < -maxy)
                            continue;

                        // We have to calculate distances in pixels, not in
                        // data units, because the scales of the axes may be different
                        var dx = Math.abs(axisx.p2c(x) - mouseX),
                            dy = Math.abs(axisy.p2c(y) - mouseY),
                            dist = dx * dx + dy * dy; // we save the sqrt

                        // use <= to ensure last point takes precedence
                        // (last generally means on top of)
                        if (dist < smallestDistance) {
                            smallestDistance = dist;
                            item = [i, j / ps];
                        }
                    }
                }

                if (s.bars.show && !item) { // no other point can be nearby

                    var barLeft, barRight;

                    switch (s.bars.align) {
                        case "left":
                            barLeft = 0;
                            break;
                        case "right":
                            barLeft = -s.bars.barWidth;
                            break;
                        default:
                            barLeft = -s.bars.barWidth / 2;
                    }

                    barRight = barLeft + s.bars.barWidth;

                    for (j = 0; j < points.length; j += ps) {
                        var x = points[j], y = points[j + 1], b = points[j + 2];
                        if (x == null)
                            continue;

                        // for a bar graph, the cursor must be inside the bar
                        if (series[i].bars.horizontal ?
                            (mx <= Math.max(b, x) && mx >= Math.min(b, x) &&
                             my >= y + barLeft && my <= y + barRight) :
                            (mx >= x + barLeft && mx <= x + barRight &&
                             my >= Math.min(b, y) && my <= Math.max(b, y)))
                                item = [i, j / ps];
                    }
                }
            }

            if (item) {
                i = item[0];
                j = item[1];
                ps = series[i].datapoints.pointsize;

                return { datapoint: series[i].datapoints.points.slice(j * ps, (j + 1) * ps),
                         dataIndex: j,
                         series: series[i],
                         seriesIndex: i };
            }

            return null;
        }

        function onMouseMove(e) {
            if (options.grid.hoverable)
                triggerClickHoverEvent("plothover", e,
                                       function (s) { return s["hoverable"] != false; });
        }

        function onMouseLeave(e) {
            if (options.grid.hoverable)
                triggerClickHoverEvent("plothover", e,
                                       function (s) { return false; });
        }

        function onClick(e) {
            triggerClickHoverEvent("plotclick", e,
                                   function (s) { return s["clickable"] != false; });
        }

        // trigger click or hover event (they send the same parameters
        // so we share their code)
        function triggerClickHoverEvent(eventname, event, seriesFilter) {
            var offset = eventHolder.offset(),
                canvasX = event.pageX - offset.left - plotOffset.left,
                canvasY = event.pageY - offset.top - plotOffset.top,
            pos = canvasToAxisCoords({ left: canvasX, top: canvasY });

            pos.pageX = event.pageX;
            pos.pageY = event.pageY;

            var item = findNearbyItem(canvasX, canvasY, seriesFilter);

            if (item) {
                // fill in mouse pos for any listeners out there
                item.pageX = parseInt(item.series.xaxis.p2c(item.datapoint[0]) + offset.left + plotOffset.left, 10);
                item.pageY = parseInt(item.series.yaxis.p2c(item.datapoint[1]) + offset.top + plotOffset.top, 10);
            }

            if (options.grid.autoHighlight) {
                // clear auto-highlights
                for (var i = 0; i < highlights.length; ++i) {
                    var h = highlights[i];
                    if (h.auto == eventname &&
                        !(item && h.series == item.series &&
                          h.point[0] == item.datapoint[0] &&
                          h.point[1] == item.datapoint[1]))
                        unhighlight(h.series, h.point);
                }

                if (item)
                    highlight(item.series, item.datapoint, eventname);
            }

            placeholder.trigger(eventname, [ pos, item ]);
        }

        function triggerRedrawOverlay() {
            var t = options.interaction.redrawOverlayInterval;
            if (t == -1) {      // skip event queue
                drawOverlay();
                return;
            }

            if (!redrawTimeout)
                redrawTimeout = setTimeout(drawOverlay, t);
        }

        function drawOverlay() {
            redrawTimeout = null;

            // draw highlights
            octx.save();
            overlay.clear();
            octx.translate(plotOffset.left, plotOffset.top);

            var i, hi;
            for (i = 0; i < highlights.length; ++i) {
                hi = highlights[i];

                if (hi.series.bars.show)
                    drawBarHighlight(hi.series, hi.point);
                else
                    drawPointHighlight(hi.series, hi.point);
            }
            octx.restore();

            executeHooks(hooks.drawOverlay, [octx]);
        }

        function highlight(s, point, auto) {
            if (typeof s == "number")
                s = series[s];

            if (typeof point == "number") {
                var ps = s.datapoints.pointsize;
                point = s.datapoints.points.slice(ps * point, ps * (point + 1));
            }

            var i = indexOfHighlight(s, point);
            if (i == -1) {
                highlights.push({ series: s, point: point, auto: auto });

                triggerRedrawOverlay();
            }
            else if (!auto)
                highlights[i].auto = false;
        }

        function unhighlight(s, point) {
            if (s == null && point == null) {
                highlights = [];
                triggerRedrawOverlay();
                return;
            }

            if (typeof s == "number")
                s = series[s];

            if (typeof point == "number") {
                var ps = s.datapoints.pointsize;
                point = s.datapoints.points.slice(ps * point, ps * (point + 1));
            }

            var i = indexOfHighlight(s, point);
            if (i != -1) {
                highlights.splice(i, 1);

                triggerRedrawOverlay();
            }
        }

        function indexOfHighlight(s, p) {
            for (var i = 0; i < highlights.length; ++i) {
                var h = highlights[i];
                if (h.series == s && h.point[0] == p[0]
                    && h.point[1] == p[1])
                    return i;
            }
            return -1;
        }

        function drawPointHighlight(series, point) {
            var x = point[0], y = point[1],
                axisx = series.xaxis, axisy = series.yaxis,
                highlightColor = (typeof series.highlightColor === "string") ? series.highlightColor : $.color.parse(series.color).scale('a', 0.5).toString();

            if (x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
                return;

            var pointRadius = series.points.radius + series.points.lineWidth / 2;
            octx.lineWidth = pointRadius;
            octx.strokeStyle = highlightColor;
            var radius = 1.5 * pointRadius;
            x = axisx.p2c(x);
            y = axisy.p2c(y);

            octx.beginPath();
            if (series.points.symbol == "circle")
                octx.arc(x, y, radius, 0, 2 * Math.PI, false);
            else
                series.points.symbol(octx, x, y, radius, false);
            octx.closePath();
            octx.stroke();
        }

        function drawBarHighlight(series, point) {
            var highlightColor = (typeof series.highlightColor === "string") ? series.highlightColor : $.color.parse(series.color).scale('a', 0.5).toString(),
                fillStyle = highlightColor,
                barLeft;

            switch (series.bars.align) {
                case "left":
                    barLeft = 0;
                    break;
                case "right":
                    barLeft = -series.bars.barWidth;
                    break;
                default:
                    barLeft = -series.bars.barWidth / 2;
            }

            octx.lineWidth = series.bars.lineWidth;
            octx.strokeStyle = highlightColor;

            drawBar(point[0], point[1], point[2] || 0, barLeft, barLeft + series.bars.barWidth,
                    function () { return fillStyle; }, series.xaxis, series.yaxis, octx, series.bars.horizontal, series.bars.lineWidth);
        }

        function getColorOrGradient(spec, bottom, top, defaultColor) {
            if (typeof spec == "string")
                return spec;
            else {
                // assume this is a gradient spec; IE currently only
                // supports a simple vertical gradient properly, so that's
                // what we support too
                var gradient = ctx.createLinearGradient(0, top, 0, bottom);

                for (var i = 0, l = spec.colors.length; i < l; ++i) {
                    var c = spec.colors[i];
                    if (typeof c != "string") {
                        var co = $.color.parse(defaultColor);
                        if (c.brightness != null)
                            co = co.scale('rgb', c.brightness);
                        if (c.opacity != null)
                            co.a *= c.opacity;
                        c = co.toString();
                    }
                    gradient.addColorStop(i / (l - 1), c);
                }

                return gradient;
            }
        }
    }

    // Add the plot function to the top level of the jQuery object

    $.plot = function(placeholder, data, options) {
        //var t0 = new Date();
        var plot = new Plot($(placeholder), data, options, $.plot.plugins);
        //(window.console ? console.log : alert)("time used (msecs): " + ((new Date()).getTime() - t0.getTime()));
        return plot;
    };

    $.plot.version = "0.8.3";

    $.plot.plugins = [];

    // Also add the plot function as a chainable property

    $.fn.plot = function(data, options) {
        return this.each(function() {
            $.plot(this, data, options);
        });
    };

    // round to nearby lower multiple of base
    function floorInBase(n, base) {
        return base * Math.floor(n / base);
    }

})(jQuery);

/*
 * jquery.flot.tooltip
 * 
 * description: easy-to-use tooltips for Flot charts
 * version: 0.6.2
 * author: Krzysztof Urbas @krzysu [myviews.pl]
 * website: https://github.com/krzysu/flot.tooltip
 * 
 * build on 2013-09-30
 * released under MIT License, 2012
*/ 
(function(t){var o={tooltip:!1,tooltipOpts:{content:"%s | X: %x | Y: %y",xDateFormat:null,yDateFormat:null,shifts:{x:10,y:20},defaultTheme:!0,onHover:function(){}}},i=function(t){this.tipPosition={x:0,y:0},this.init(t)};i.prototype.init=function(o){function i(t){var o={};o.x=t.pageX,o.y=t.pageY,s.updateTooltipPosition(o)}function e(t,o,i){var e=s.getDomElement();if(i){var n;n=s.stringFormat(s.tooltipOptions.content,i),e.html(n),s.updateTooltipPosition({x:o.pageX,y:o.pageY}),e.css({left:s.tipPosition.x+s.tooltipOptions.shifts.x,top:s.tipPosition.y+s.tooltipOptions.shifts.y}).show(),"function"==typeof s.tooltipOptions.onHover&&s.tooltipOptions.onHover(i,e)}else e.hide().html("")}var s=this;o.hooks.bindEvents.push(function(o,n){s.plotOptions=o.getOptions(),s.plotOptions.tooltip!==!1&&void 0!==s.plotOptions.tooltip&&(s.tooltipOptions=s.plotOptions.tooltipOpts,s.getDomElement(),t(o.getPlaceholder()).bind("plothover",e),t(n).bind("mousemove",i))}),o.hooks.shutdown.push(function(o,s){t(o.getPlaceholder()).unbind("plothover",e),t(s).unbind("mousemove",i)})},i.prototype.getDomElement=function(){var o;return t("#flotTip").length>0?o=t("#flotTip"):(o=t("<div />").attr("id","flotTip"),o.appendTo("body").hide().css({position:"absolute"}),this.tooltipOptions.defaultTheme&&o.css({background:"#fff","z-index":"100",padding:"0.4em 0.6em","border-radius":"0.5em","font-size":"0.8em",border:"1px solid #111",display:"none","white-space":"nowrap"})),o},i.prototype.updateTooltipPosition=function(o){var i=t("#flotTip").outerWidth()+this.tooltipOptions.shifts.x,e=t("#flotTip").outerHeight()+this.tooltipOptions.shifts.y;o.x-t(window).scrollLeft()>t(window).innerWidth()-i&&(o.x-=i),o.y-t(window).scrollTop()>t(window).innerHeight()-e&&(o.y-=e),this.tipPosition.x=o.x,this.tipPosition.y=o.y},i.prototype.stringFormat=function(t,o){var i=/%p\.{0,1}(\d{0,})/,e=/%s/,s=/%x\.{0,1}(?:\d{0,})/,n=/%y\.{0,1}(?:\d{0,})/;return"function"==typeof t&&(t=t(o.series.label,o.series.data[o.dataIndex][0],o.series.data[o.dataIndex][1],o)),o.series.percent!==void 0&&(t=this.adjustValPrecision(i,t,o.series.percent)),o.series.label!==void 0&&(t=t.replace(e,o.series.label)),this.isTimeMode("xaxis",o)&&this.isXDateFormat(o)&&(t=t.replace(s,this.timestampToDate(o.series.data[o.dataIndex][0],this.tooltipOptions.xDateFormat))),this.isTimeMode("yaxis",o)&&this.isYDateFormat(o)&&(t=t.replace(n,this.timestampToDate(o.series.data[o.dataIndex][1],this.tooltipOptions.yDateFormat))),"number"==typeof o.series.data[o.dataIndex][0]&&(t=this.adjustValPrecision(s,t,o.series.data[o.dataIndex][0])),"number"==typeof o.series.data[o.dataIndex][1]&&(t=this.adjustValPrecision(n,t,o.series.data[o.dataIndex][1])),o.series.xaxis.tickFormatter!==void 0&&(t=t.replace(s,o.series.xaxis.tickFormatter(o.series.data[o.dataIndex][0],o.series.xaxis))),o.series.yaxis.tickFormatter!==void 0&&(t=t.replace(n,o.series.yaxis.tickFormatter(o.series.data[o.dataIndex][1],o.series.yaxis))),t},i.prototype.isTimeMode=function(t,o){return o.series[t].options.mode!==void 0&&"time"===o.series[t].options.mode},i.prototype.isXDateFormat=function(){return this.tooltipOptions.xDateFormat!==void 0&&null!==this.tooltipOptions.xDateFormat},i.prototype.isYDateFormat=function(){return this.tooltipOptions.yDateFormat!==void 0&&null!==this.tooltipOptions.yDateFormat},i.prototype.timestampToDate=function(o,i){var e=new Date(o);return t.plot.formatDate(e,i)},i.prototype.adjustValPrecision=function(t,o,i){var e,s=o.match(t);return null!==s&&""!==RegExp.$1&&(e=RegExp.$1,i=i.toFixed(e),o=o.replace(t,i)),o};var e=function(t){new i(t)};t.plot.plugins.push({init:e,options:o,name:"tooltip",version:"0.6.1"})})(jQuery);
/**
 * Flot plugin that provides spline interpolation for line graphs
 * author: Alex Bardas < alex.bardas@gmail.com >
 * modified by: Avi Kohn https://github.com/AMKohn
 * based on the spline interpolation described at:
 *		 http://scaledinnovation.com/analytics/splines/aboutSplines.html
 *
 * Example usage: (add in plot options series object)
 *		for linespline:
 *			series: {
 *				...
 *				lines: {
 *					show: false
 *				},
 *				splines: {
 *					show: true,
 *					tension: x, (float between 0 and 1, defaults to 0.5),
 *					lineWidth: y (number, defaults to 2),
 *					fill: z (float between 0 .. 1 or false, as in flot documentation)
 *				},
 *				...
 *			}
 *		areaspline:
 *			series: {
 *				...
 *				lines: {
 *					show: true,
 *					lineWidth: 0, (line drawing will not execute)
 *					fill: x, (float between 0 .. 1, as in flot documentation)
 *					...
 *				},
 *				splines: {
 *					show: true,
 *					tension: 0.5 (float between 0 and 1)
 *				},
 *				...
 *			}
 *
 */

(function($) {
    'use strict'

    /**
     * @param {Number} x0, y0, x1, y1: coordinates of the end (knot) points of the segment
     * @param {Number} x2, y2: the next knot (not connected, but needed to calculate p2)
     * @param {Number} tension: control how far the control points spread
     * @return {Array}: p1 -> control point, from x1 back toward x0
     * 					p2 -> the next control point, returned to become the next segment's p1
     *
     * @api private
     */
    function getControlPoints(x0, y0, x1, y1, x2, y2, tension) {

        var pow = Math.pow,
            sqrt = Math.sqrt,
            d01, d12, fa, fb, p1x, p1y, p2x, p2y;

        //  Scaling factors: distances from this knot to the previous and following knots.
        d01 = sqrt(pow(x1 - x0, 2) + pow(y1 - y0, 2));
        d12 = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));

        fa = tension * d01 / (d01 + d12);
        fb = tension - fa;

        p1x = x1 + fa * (x0 - x2);
        p1y = y1 + fa * (y0 - y2);

        p2x = x1 - fb * (x0 - x2);
        p2y = y1 - fb * (y0 - y2);

        return [p1x, p1y, p2x, p2y];
    }

    var line = [];

    function drawLine(points, ctx, height, fill, seriesColor) {
        var c = $.color.parse(seriesColor);

        c.a = typeof fill == "number" ? fill : .3;
        c.normalize();
        c = c.toString();

        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);

        var plength = points.length;

        for (var i = 0; i < plength; i++) {
            ctx[points[i][3]].apply(ctx, points[i][2]);
        }

        ctx.stroke();

        ctx.lineWidth = 0;
        ctx.lineTo(points[plength - 1][0], height);
        ctx.lineTo(points[0][0], height);

        ctx.closePath();

        if (fill !== false) {
            ctx.fillStyle = c;
            ctx.fill();
        }
    }

    /**
     * @param {Object} ctx: canvas context
     * @param {String} type: accepted strings: 'bezier' or 'quadratic' (defaults to quadratic)
     * @param {Array} points: 2 points for which to draw the interpolation
     * @param {Array} cpoints: control points for those segment points
     *
     * @api private
     */
    function queue(ctx, type, points, cpoints) {
        if (type === void 0 || (type !== 'bezier' && type !== 'quadratic')) {
            type = 'quadratic';
        }
        type = type + 'CurveTo';

        if (line.length == 0) line.push([points[0], points[1], cpoints.concat(points.slice(2)), type]);
        else if (type == "quadraticCurveTo" && points.length == 2) {
            cpoints = cpoints.slice(0, 2).concat(points);

            line.push([points[0], points[1], cpoints, type]);
        }
        else line.push([points[2], points[3], cpoints.concat(points.slice(2)), type]);
    }

    /**
     * @param {Object} plot
     * @param {Object} ctx: canvas context
     * @param {Object} series
     *
     * @api private
     */

    function drawSpline(plot, ctx, series) {
        // Not interested if spline is not requested
        if (series.splines.show !== true) {
            return;
        }

        var cp = [],
        // array of control points
            tension = series.splines.tension || 0.5,
            idx, x, y, points = series.datapoints.points,
            ps = series.datapoints.pointsize,
            plotOffset = plot.getPlotOffset(),
            len = points.length,
            pts = [];

        line = [];

        // Cannot display a linespline/areaspline if there are less than 3 points
        if (len / ps < 4) {
            $.extend(series.lines, series.splines);
            return;
        }

        for (idx = 0; idx < len; idx += ps) {
            x = points[idx];
            y = points[idx + 1];
            if (x == null || x < series.xaxis.min || x > series.xaxis.max || y < series.yaxis.min || y > series.yaxis.max) {
                continue;
            }

            pts.push(series.xaxis.p2c(x) + plotOffset.left, series.yaxis.p2c(y) + plotOffset.top);
        }

        len = pts.length;

        // Draw an open curve, not connected at the ends
        for (idx = 0; idx < len - 2; idx += 2) {
            cp = cp.concat(getControlPoints.apply(this, pts.slice(idx, idx + 6).concat([tension])));
        }

        ctx.save();
        ctx.strokeStyle = series.color;
        ctx.lineWidth = series.splines.lineWidth;

        queue(ctx, 'quadratic', pts.slice(0, 4), cp.slice(0, 2));

        for (idx = 2; idx < len - 3; idx += 2) {
            queue(ctx, 'bezier', pts.slice(idx, idx + 4), cp.slice(2 * idx - 2, 2 * idx + 2));
        }

        queue(ctx, 'quadratic', pts.slice(len - 2, len), [cp[2 * len - 10], cp[2 * len - 9], pts[len - 4], pts[len - 3]]);

        drawLine(line, ctx, plot.height() + 10, series.splines.fill, series.color);

        ctx.restore();
    }

    $.plot.plugins.push({
        init: function(plot) {
            plot.hooks.drawSeries.push(drawSpline);
        },
        options: {
            series: {
                splines: {
                    show: false,
                    lineWidth: 2,
                    tension: 0.5,
                    fill: false
                }
            }
        },
        name: 'spline',
        version: '0.8.2'
    });
})(jQuery);

/* Flot plugin for automatically redrawing plots as the placeholder resizes.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

It works by listening for changes on the placeholder div (through the jQuery
resize event plugin) - if the size changes, it will redraw the plot.

There are no options. If you need to disable the plugin for some plots, you
can just fix the size of their placeholders.

*/

/* Inline dependency:
 * jQuery resize event - v1.1 - 3/14/2010
 * http://benalman.com/projects/jquery-resize-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,e,t){"$:nomunge";var i=[],n=$.resize=$.extend($.resize,{}),a,r=false,s="setTimeout",u="resize",m=u+"-special-event",o="pendingDelay",l="activeDelay",f="throttleWindow";n[o]=200;n[l]=20;n[f]=true;$.event.special[u]={setup:function(){if(!n[f]&&this[s]){return false}var e=$(this);i.push(this);e.data(m,{w:e.width(),h:e.height()});if(i.length===1){a=t;h()}},teardown:function(){if(!n[f]&&this[s]){return false}var e=$(this);for(var t=i.length-1;t>=0;t--){if(i[t]==this){i.splice(t,1);break}}e.removeData(m);if(!i.length){if(r){cancelAnimationFrame(a)}else{clearTimeout(a)}a=null}},add:function(e){if(!n[f]&&this[s]){return false}var i;function a(e,n,a){var r=$(this),s=r.data(m)||{};s.w=n!==t?n:r.width();s.h=a!==t?a:r.height();i.apply(this,arguments)}if($.isFunction(e)){i=e;return a}else{i=e.handler;e.handler=a}}};function h(t){if(r===true){r=t||1}for(var s=i.length-1;s>=0;s--){var l=$(i[s]);if(l[0]==e||l.is(":visible")){var f=l.width(),c=l.height(),d=l.data(m);if(d&&(f!==d.w||c!==d.h)){l.trigger(u,[d.w=f,d.h=c]);r=t||true}}else{d=l.data(m);d.w=0;d.h=0}}if(a!==null){if(r&&(t==null||t-r<1e3)){a=e.requestAnimationFrame(h)}else{a=setTimeout(h,n[o]);r=false}}}if(!e.requestAnimationFrame){e.requestAnimationFrame=function(){return e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t,i){return e.setTimeout(function(){t((new Date).getTime())},n[l])}}()}if(!e.cancelAnimationFrame){e.cancelAnimationFrame=function(){return e.webkitCancelRequestAnimationFrame||e.mozCancelRequestAnimationFrame||e.oCancelRequestAnimationFrame||e.msCancelRequestAnimationFrame||clearTimeout}()}})(jQuery,this);

(function ($) {
    var options = { }; // no options

    function init(plot) {
        function onResize() {
            var placeholder = plot.getPlaceholder();

            // somebody might have hidden us and we can't plot
            // when we don't have the dimensions
            if (placeholder.width() == 0 || placeholder.height() == 0)
                return;

            plot.resize();
            plot.setupGrid();
            plot.draw();
        }
        
        function bindEvents(plot, eventHolder) {
            plot.getPlaceholder().resize(onResize);
        }

        function shutdown(plot, eventHolder) {
            plot.getPlaceholder().unbind("resize", onResize);
        }
        
        plot.hooks.bindEvents.push(bindEvents);
        plot.hooks.shutdown.push(shutdown);
    }
    
    $.plot.plugins.push({
        init: init,
        options: options,
        name: 'resize',
        version: '1.0'
    });
})(jQuery);

/* Flot plugin for rendering pie charts.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

The plugin assumes that each series has a single data value, and that each
value is a positive integer or zero.  Negative numbers don't make sense for a
pie chart, and have unpredictable results.  The values do NOT need to be
passed in as percentages; the plugin will calculate the total and per-slice
percentages internally.

* Created by Brian Medendorp

* Updated with contributions from btburnett3, Anthony Aragues and Xavi Ivars

The plugin supports these options:

	series: {
		pie: {
			show: true/false
			radius: 0-1 for percentage of fullsize, or a specified pixel length, or 'auto'
			innerRadius: 0-1 for percentage of fullsize or a specified pixel length, for creating a donut effect
			startAngle: 0-2 factor of PI used for starting angle (in radians) i.e 3/2 starts at the top, 0 and 2 have the same result
			tilt: 0-1 for percentage to tilt the pie, where 1 is no tilt, and 0 is completely flat (nothing will show)
			offset: {
				top: integer value to move the pie up or down
				left: integer value to move the pie left or right, or 'auto'
			},
			stroke: {
				color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#FFF')
				width: integer pixel width of the stroke
			},
			label: {
				show: true/false, or 'auto'
				formatter:  a user-defined function that modifies the text/style of the label text
				radius: 0-1 for percentage of fullsize, or a specified pixel length
				background: {
					color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#000')
					opacity: 0-1
				},
				threshold: 0-1 for the percentage value at which to hide labels (if they're too small)
			},
			combine: {
				threshold: 0-1 for the percentage value at which to combine slices (if they're too small)
				color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#CCC'), if null, the plugin will automatically use the color of the first slice to be combined
				label: any text value of what the combined slice should be labeled
			}
			highlight: {
				opacity: 0-1
			}
		}
	}

More detail and specific examples can be found in the included HTML file.

*/

(function($) {

	// Maximum redraw attempts when fitting labels within the plot

	var REDRAW_ATTEMPTS = 10;

	// Factor by which to shrink the pie when fitting labels within the plot

	var REDRAW_SHRINK = 0.95;

	function init(plot) {

		var canvas = null,
			target = null,
			options = null,
			maxRadius = null,
			centerLeft = null,
			centerTop = null,
			processed = false,
			ctx = null;

		// interactive variables

		var highlights = [];

		// add hook to determine if pie plugin in enabled, and then perform necessary operations

		plot.hooks.processOptions.push(function(plot, options) {
			if (options.series.pie.show) {

				options.grid.show = false;

				// set labels.show

				if (options.series.pie.label.show == "auto") {
					if (options.legend.show) {
						options.series.pie.label.show = false;
					} else {
						options.series.pie.label.show = true;
					}
				}

				// set radius

				if (options.series.pie.radius == "auto") {
					if (options.series.pie.label.show) {
						options.series.pie.radius = 3/4;
					} else {
						options.series.pie.radius = 1;
					}
				}

				// ensure sane tilt

				if (options.series.pie.tilt > 1) {
					options.series.pie.tilt = 1;
				} else if (options.series.pie.tilt < 0) {
					options.series.pie.tilt = 0;
				}
			}
		});

		plot.hooks.bindEvents.push(function(plot, eventHolder) {
			var options = plot.getOptions();
			if (options.series.pie.show) {
				if (options.grid.hoverable) {
					eventHolder.unbind("mousemove").mousemove(onMouseMove);
				}
				if (options.grid.clickable) {
					eventHolder.unbind("click").click(onClick);
				}
			}
		});

		plot.hooks.processDatapoints.push(function(plot, series, data, datapoints) {
			var options = plot.getOptions();
			if (options.series.pie.show) {
				processDatapoints(plot, series, data, datapoints);
			}
		});

		plot.hooks.drawOverlay.push(function(plot, octx) {
			var options = plot.getOptions();
			if (options.series.pie.show) {
				drawOverlay(plot, octx);
			}
		});

		plot.hooks.draw.push(function(plot, newCtx) {
			var options = plot.getOptions();
			if (options.series.pie.show) {
				draw(plot, newCtx);
			}
		});

		function processDatapoints(plot, series, datapoints) {
			if (!processed)	{
				processed = true;
				canvas = plot.getCanvas();
				target = $(canvas).parent();
				options = plot.getOptions();
				plot.setData(combine(plot.getData()));
			}
		}

		function combine(data) {

			var total = 0,
				combined = 0,
				numCombined = 0,
				color = options.series.pie.combine.color,
				newdata = [];

			// Fix up the raw data from Flot, ensuring the data is numeric

			for (var i = 0; i < data.length; ++i) {

				var value = data[i].data;

				// If the data is an array, we'll assume that it's a standard
				// Flot x-y pair, and are concerned only with the second value.

				// Note how we use the original array, rather than creating a
				// new one; this is more efficient and preserves any extra data
				// that the user may have stored in higher indexes.

				if ($.isArray(value) && value.length == 1) {
    				value = value[0];
				}

				if ($.isArray(value)) {
					// Equivalent to $.isNumeric() but compatible with jQuery < 1.7
					if (!isNaN(parseFloat(value[1])) && isFinite(value[1])) {
						value[1] = +value[1];
					} else {
						value[1] = 0;
					}
				} else if (!isNaN(parseFloat(value)) && isFinite(value)) {
					value = [1, +value];
				} else {
					value = [1, 0];
				}

				data[i].data = [value];
			}

			// Sum up all the slices, so we can calculate percentages for each

			for (var i = 0; i < data.length; ++i) {
				total += data[i].data[0][1];
			}

			// Count the number of slices with percentages below the combine
			// threshold; if it turns out to be just one, we won't combine.

			for (var i = 0; i < data.length; ++i) {
				var value = data[i].data[0][1];
				if (value / total <= options.series.pie.combine.threshold) {
					combined += value;
					numCombined++;
					if (!color) {
						color = data[i].color;
					}
				}
			}

			for (var i = 0; i < data.length; ++i) {
				var value = data[i].data[0][1];
				if (numCombined < 2 || value / total > options.series.pie.combine.threshold) {
					newdata.push(
						$.extend(data[i], {     /* extend to allow keeping all other original data values
						                           and using them e.g. in labelFormatter. */
							data: [[1, value]],
							color: data[i].color,
							label: data[i].label,
							angle: value * Math.PI * 2 / total,
							percent: value / (total / 100)
						})
					);
				}
			}

			if (numCombined > 1) {
				newdata.push({
					data: [[1, combined]],
					color: color,
					label: options.series.pie.combine.label,
					angle: combined * Math.PI * 2 / total,
					percent: combined / (total / 100)
				});
			}

			return newdata;
		}

		function draw(plot, newCtx) {

			if (!target) {
				return; // if no series were passed
			}

			var canvasWidth = plot.getPlaceholder().width(),
				canvasHeight = plot.getPlaceholder().height(),
				legendWidth = target.children().filter(".legend").children().width() || 0;

			ctx = newCtx;

			// WARNING: HACK! REWRITE THIS CODE AS SOON AS POSSIBLE!

			// When combining smaller slices into an 'other' slice, we need to
			// add a new series.  Since Flot gives plugins no way to modify the
			// list of series, the pie plugin uses a hack where the first call
			// to processDatapoints results in a call to setData with the new
			// list of series, then subsequent processDatapoints do nothing.

			// The plugin-global 'processed' flag is used to control this hack;
			// it starts out false, and is set to true after the first call to
			// processDatapoints.

			// Unfortunately this turns future setData calls into no-ops; they
			// call processDatapoints, the flag is true, and nothing happens.

			// To fix this we'll set the flag back to false here in draw, when
			// all series have been processed, so the next sequence of calls to
			// processDatapoints once again starts out with a slice-combine.
			// This is really a hack; in 0.9 we need to give plugins a proper
			// way to modify series before any processing begins.

			processed = false;

			// calculate maximum radius and center point

			maxRadius =  Math.min(canvasWidth, canvasHeight / options.series.pie.tilt) / 2;
			centerTop = canvasHeight / 2 + options.series.pie.offset.top;
			centerLeft = canvasWidth / 2;

			if (options.series.pie.offset.left == "auto") {
				if (options.legend.position.match("w")) {
					centerLeft += legendWidth / 2;
				} else {
					centerLeft -= legendWidth / 2;
				}
				if (centerLeft < maxRadius) {
					centerLeft = maxRadius;
				} else if (centerLeft > canvasWidth - maxRadius) {
					centerLeft = canvasWidth - maxRadius;
				}
			} else {
				centerLeft += options.series.pie.offset.left;
			}

			var slices = plot.getData(),
				attempts = 0;

			// Keep shrinking the pie's radius until drawPie returns true,
			// indicating that all the labels fit, or we try too many times.

			do {
				if (attempts > 0) {
					maxRadius *= REDRAW_SHRINK;
				}
				attempts += 1;
				clear();
				if (options.series.pie.tilt <= 0.8) {
					drawShadow();
				}
			} while (!drawPie() && attempts < REDRAW_ATTEMPTS)

			if (attempts >= REDRAW_ATTEMPTS) {
				clear();
				target.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>");
			}

			if (plot.setSeries && plot.insertLegend) {
				plot.setSeries(slices);
				plot.insertLegend();
			}

			// we're actually done at this point, just defining internal functions at this point

			function clear() {
				ctx.clearRect(0, 0, canvasWidth, canvasHeight);
				target.children().filter(".pieLabel, .pieLabelBackground").remove();
			}

			function drawShadow() {

				var shadowLeft = options.series.pie.shadow.left;
				var shadowTop = options.series.pie.shadow.top;
				var edge = 10;
				var alpha = options.series.pie.shadow.alpha;
				var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;

				if (radius >= canvasWidth / 2 - shadowLeft || radius * options.series.pie.tilt >= canvasHeight / 2 - shadowTop || radius <= edge) {
					return;	// shadow would be outside canvas, so don't draw it
				}

				ctx.save();
				ctx.translate(shadowLeft,shadowTop);
				ctx.globalAlpha = alpha;
				ctx.fillStyle = "#000";

				// center and rotate to starting position

				ctx.translate(centerLeft,centerTop);
				ctx.scale(1, options.series.pie.tilt);

				//radius -= edge;

				for (var i = 1; i <= edge; i++) {
					ctx.beginPath();
					ctx.arc(0, 0, radius, 0, Math.PI * 2, false);
					ctx.fill();
					radius -= i;
				}

				ctx.restore();
			}

			function drawPie() {

				var startAngle = Math.PI * options.series.pie.startAngle;
				var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;

				// center and rotate to starting position

				ctx.save();
				ctx.translate(centerLeft,centerTop);
				ctx.scale(1, options.series.pie.tilt);
				//ctx.rotate(startAngle); // start at top; -- This doesn't work properly in Opera

				// draw slices

				ctx.save();
				var currentAngle = startAngle;
				for (var i = 0; i < slices.length; ++i) {
					slices[i].startAngle = currentAngle;
					drawSlice(slices[i].angle, slices[i].color, true);
				}
				ctx.restore();

				// draw slice outlines

				if (options.series.pie.stroke.width > 0) {
					ctx.save();
					ctx.lineWidth = options.series.pie.stroke.width;
					currentAngle = startAngle;
					for (var i = 0; i < slices.length; ++i) {
						drawSlice(slices[i].angle, options.series.pie.stroke.color, false);
					}
					ctx.restore();
				}

				// draw donut hole

				drawDonutHole(ctx);

				ctx.restore();

				// Draw the labels, returning true if they fit within the plot

				if (options.series.pie.label.show) {
					return drawLabels();
				} else return true;

				function drawSlice(angle, color, fill) {

					if (angle <= 0 || isNaN(angle)) {
						return;
					}

					if (fill) {
						ctx.fillStyle = color;
					} else {
						ctx.strokeStyle = color;
						ctx.lineJoin = "round";
					}

					ctx.beginPath();
					if (Math.abs(angle - Math.PI * 2) > 0.000000001) {
						ctx.moveTo(0, 0); // Center of the pie
					}

					//ctx.arc(0, 0, radius, 0, angle, false); // This doesn't work properly in Opera
					ctx.arc(0, 0, radius,currentAngle, currentAngle + angle / 2, false);
					ctx.arc(0, 0, radius,currentAngle + angle / 2, currentAngle + angle, false);
					ctx.closePath();
					//ctx.rotate(angle); // This doesn't work properly in Opera
					currentAngle += angle;

					if (fill) {
						ctx.fill();
					} else {
						ctx.stroke();
					}
				}

				function drawLabels() {

					var currentAngle = startAngle;
					var radius = options.series.pie.label.radius > 1 ? options.series.pie.label.radius : maxRadius * options.series.pie.label.radius;

					for (var i = 0; i < slices.length; ++i) {
						if (slices[i].percent >= options.series.pie.label.threshold * 100) {
							if (!drawLabel(slices[i], currentAngle, i)) {
								return false;
							}
						}
						currentAngle += slices[i].angle;
					}

					return true;

					function drawLabel(slice, startAngle, index) {

						if (slice.data[0][1] == 0) {
							return true;
						}

						// format label text

						var lf = options.legend.labelFormatter, text, plf = options.series.pie.label.formatter;

						if (lf) {
							text = lf(slice.label, slice);
						} else {
							text = slice.label;
						}

						if (plf) {
							text = plf(text, slice);
						}

						var halfAngle = ((startAngle + slice.angle) + startAngle) / 2;
						var x = centerLeft + Math.round(Math.cos(halfAngle) * radius);
						var y = centerTop + Math.round(Math.sin(halfAngle) * radius) * options.series.pie.tilt;

						var html = "<span class='pieLabel' id='pieLabel" + index + "' style='position:absolute;top:" + y + "px;left:" + x + "px;'>" + text + "</span>";
						target.append(html);

						var label = target.children("#pieLabel" + index);
						var labelTop = (y - label.height() / 2);
						var labelLeft = (x - label.width() / 2);

						label.css("top", labelTop);
						label.css("left", labelLeft);

						// check to make sure that the label is not outside the canvas

						if (0 - labelTop > 0 || 0 - labelLeft > 0 || canvasHeight - (labelTop + label.height()) < 0 || canvasWidth - (labelLeft + label.width()) < 0) {
							return false;
						}

						if (options.series.pie.label.background.opacity != 0) {

							// put in the transparent background separately to avoid blended labels and label boxes

							var c = options.series.pie.label.background.color;

							if (c == null) {
								c = slice.color;
							}

							var pos = "top:" + labelTop + "px;left:" + labelLeft + "px;";
							$("<div class='pieLabelBackground' style='position:absolute;width:" + label.width() + "px;height:" + label.height() + "px;" + pos + "background-color:" + c + ";'></div>")
								.css("opacity", options.series.pie.label.background.opacity)
								.insertBefore(label);
						}

						return true;
					} // end individual label function
				} // end drawLabels function
			} // end drawPie function
		} // end draw function

		// Placed here because it needs to be accessed from multiple locations

		function drawDonutHole(layer) {
			if (options.series.pie.innerRadius > 0) {

				// subtract the center

				layer.save();
				var innerRadius = options.series.pie.innerRadius > 1 ? options.series.pie.innerRadius : maxRadius * options.series.pie.innerRadius;
				layer.globalCompositeOperation = "destination-out"; // this does not work with excanvas, but it will fall back to using the stroke color
				layer.beginPath();
				layer.fillStyle = options.series.pie.stroke.color;
				layer.arc(0, 0, innerRadius, 0, Math.PI * 2, false);
				layer.fill();
				layer.closePath();
				layer.restore();

				// add inner stroke

				layer.save();
				layer.beginPath();
				layer.strokeStyle = options.series.pie.stroke.color;
				layer.arc(0, 0, innerRadius, 0, Math.PI * 2, false);
				layer.stroke();
				layer.closePath();
				layer.restore();

				// TODO: add extra shadow inside hole (with a mask) if the pie is tilted.
			}
		}

		//-- Additional Interactive related functions --

		function isPointInPoly(poly, pt) {
			for(var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
				((poly[i][1] <= pt[1] && pt[1] < poly[j][1]) || (poly[j][1] <= pt[1] && pt[1]< poly[i][1]))
				&& (pt[0] < (poly[j][0] - poly[i][0]) * (pt[1] - poly[i][1]) / (poly[j][1] - poly[i][1]) + poly[i][0])
				&& (c = !c);
			return c;
		}

		function findNearbySlice(mouseX, mouseY) {

			var slices = plot.getData(),
				options = plot.getOptions(),
				radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius,
				x, y;

			for (var i = 0; i < slices.length; ++i) {

				var s = slices[i];

				if (s.pie.show) {

					ctx.save();
					ctx.beginPath();
					ctx.moveTo(0, 0); // Center of the pie
					//ctx.scale(1, options.series.pie.tilt);	// this actually seems to break everything when here.
					ctx.arc(0, 0, radius, s.startAngle, s.startAngle + s.angle / 2, false);
					ctx.arc(0, 0, radius, s.startAngle + s.angle / 2, s.startAngle + s.angle, false);
					ctx.closePath();
					x = mouseX - centerLeft;
					y = mouseY - centerTop;

					if (ctx.isPointInPath) {
						if (ctx.isPointInPath(mouseX - centerLeft, mouseY - centerTop)) {
							ctx.restore();
							return {
								datapoint: [s.percent, s.data],
								dataIndex: 0,
								series: s,
								seriesIndex: i
							};
						}
					} else {

						// excanvas for IE doesn;t support isPointInPath, this is a workaround.

						var p1X = radius * Math.cos(s.startAngle),
							p1Y = radius * Math.sin(s.startAngle),
							p2X = radius * Math.cos(s.startAngle + s.angle / 4),
							p2Y = radius * Math.sin(s.startAngle + s.angle / 4),
							p3X = radius * Math.cos(s.startAngle + s.angle / 2),
							p3Y = radius * Math.sin(s.startAngle + s.angle / 2),
							p4X = radius * Math.cos(s.startAngle + s.angle / 1.5),
							p4Y = radius * Math.sin(s.startAngle + s.angle / 1.5),
							p5X = radius * Math.cos(s.startAngle + s.angle),
							p5Y = radius * Math.sin(s.startAngle + s.angle),
							arrPoly = [[0, 0], [p1X, p1Y], [p2X, p2Y], [p3X, p3Y], [p4X, p4Y], [p5X, p5Y]],
							arrPoint = [x, y];

						// TODO: perhaps do some mathmatical trickery here with the Y-coordinate to compensate for pie tilt?

						if (isPointInPoly(arrPoly, arrPoint)) {
							ctx.restore();
							return {
								datapoint: [s.percent, s.data],
								dataIndex: 0,
								series: s,
								seriesIndex: i
							};
						}
					}

					ctx.restore();
				}
			}

			return null;
		}

		function onMouseMove(e) {
			triggerClickHoverEvent("plothover", e);
		}

		function onClick(e) {
			triggerClickHoverEvent("plotclick", e);
		}

		// trigger click or hover event (they send the same parameters so we share their code)

		function triggerClickHoverEvent(eventname, e) {

			var offset = plot.offset();
			var canvasX = parseInt(e.pageX - offset.left);
			var canvasY =  parseInt(e.pageY - offset.top);
			var item = findNearbySlice(canvasX, canvasY);

			if (options.grid.autoHighlight) {

				// clear auto-highlights

				for (var i = 0; i < highlights.length; ++i) {
					var h = highlights[i];
					if (h.auto == eventname && !(item && h.series == item.series)) {
						unhighlight(h.series);
					}
				}
			}

			// highlight the slice

			if (item) {
				highlight(item.series, eventname);
			}

			// trigger any hover bind events

			var pos = { pageX: e.pageX, pageY: e.pageY };
			target.trigger(eventname, [pos, item]);
		}

		function highlight(s, auto) {
			//if (typeof s == "number") {
			//	s = series[s];
			//}

			var i = indexOfHighlight(s);

			if (i == -1) {
				highlights.push({ series: s, auto: auto });
				plot.triggerRedrawOverlay();
			} else if (!auto) {
				highlights[i].auto = false;
			}
		}

		function unhighlight(s) {
			if (s == null) {
				highlights = [];
				plot.triggerRedrawOverlay();
			}

			//if (typeof s == "number") {
			//	s = series[s];
			//}

			var i = indexOfHighlight(s);

			if (i != -1) {
				highlights.splice(i, 1);
				plot.triggerRedrawOverlay();
			}
		}

		function indexOfHighlight(s) {
			for (var i = 0; i < highlights.length; ++i) {
				var h = highlights[i];
				if (h.series == s)
					return i;
			}
			return -1;
		}

		function drawOverlay(plot, octx) {

			var options = plot.getOptions();

			var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;

			octx.save();
			octx.translate(centerLeft, centerTop);
			octx.scale(1, options.series.pie.tilt);

			for (var i = 0; i < highlights.length; ++i) {
				drawHighlight(highlights[i].series);
			}

			drawDonutHole(octx);

			octx.restore();

			function drawHighlight(series) {

				if (series.angle <= 0 || isNaN(series.angle)) {
					return;
				}

				//octx.fillStyle = parseColor(options.series.pie.highlight.color).scale(null, null, null, options.series.pie.highlight.opacity).toString();
				octx.fillStyle = "rgba(255, 255, 255, " + options.series.pie.highlight.opacity + ")"; // this is temporary until we have access to parseColor
				octx.beginPath();
				if (Math.abs(series.angle - Math.PI * 2) > 0.000000001) {
					octx.moveTo(0, 0); // Center of the pie
				}
				octx.arc(0, 0, radius, series.startAngle, series.startAngle + series.angle / 2, false);
				octx.arc(0, 0, radius, series.startAngle + series.angle / 2, series.startAngle + series.angle, false);
				octx.closePath();
				octx.fill();
			}
		}
	} // end init (plugin body)

	// define pie specific options and their default values

	var options = {
		series: {
			pie: {
				show: false,
				radius: "auto",	// actual radius of the visible pie (based on full calculated radius if <=1, or hard pixel value)
				innerRadius: 0, /* for donut */
				startAngle: 3/2,
				tilt: 1,
				shadow: {
					left: 5,	// shadow left offset
					top: 15,	// shadow top offset
					alpha: 0.02	// shadow alpha
				},
				offset: {
					top: 0,
					left: "auto"
				},
				stroke: {
					color: "#fff",
					width: 1
				},
				label: {
					show: "auto",
					formatter: function(label, slice) {
						return "<div style='font-size:x-small;text-align:center;padding:2px;color:" + slice.color + ";'>" + label + "<br/>" + Math.round(slice.percent) + "%</div>";
					},	// formatter function
					radius: 1,	// radius at which to place the labels (based on full calculated radius if <=1, or hard pixel value)
					background: {
						color: null,
						opacity: 0
					},
					threshold: 0	// percentage at which to hide the label (i.e. the slice is too narrow)
				},
				combine: {
					threshold: -1,	// percentage at which to combine little slices into one larger slice
					color: null,	// color to give the new slice (auto-generated if null)
					label: "Other"	// label to give the new slice
				},
				highlight: {
					//color: "#fff",		// will add this functionality once parseColor is available
					opacity: 0.5
				}
			}
		}
	};

	$.plot.plugins.push({
		init: init,
		options: options,
		name: "pie",
		version: "1.1"
	});

})(jQuery);

/* Flot plugin that adds some extra symbols for plotting points.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

The symbols are accessed as strings through the standard symbol options:

	series: {
		points: {
			symbol: "square" // or "diamond", "triangle", "cross"
		}
	}

*/

(function ($) {
    function processRawData(plot, series, datapoints) {
        // we normalize the area of each symbol so it is approximately the
        // same as a circle of the given radius

        var handlers = {
            square: function (ctx, x, y, radius, shadow) {
                // pi * r^2 = (2s)^2  =>  s = r * sqrt(pi)/2
                var size = radius * Math.sqrt(Math.PI) / 2;
                ctx.rect(x - size, y - size, size + size, size + size);
            },
            diamond: function (ctx, x, y, radius, shadow) {
                // pi * r^2 = 2s^2  =>  s = r * sqrt(pi/2)
                var size = radius * Math.sqrt(Math.PI / 2);
                ctx.moveTo(x - size, y);
                ctx.lineTo(x, y - size);
                ctx.lineTo(x + size, y);
                ctx.lineTo(x, y + size);
                ctx.lineTo(x - size, y);
            },
            triangle: function (ctx, x, y, radius, shadow) {
                // pi * r^2 = 1/2 * s^2 * sin (pi / 3)  =>  s = r * sqrt(2 * pi / sin(pi / 3))
                var size = radius * Math.sqrt(2 * Math.PI / Math.sin(Math.PI / 3));
                var height = size * Math.sin(Math.PI / 3);
                ctx.moveTo(x - size/2, y + height/2);
                ctx.lineTo(x + size/2, y + height/2);
                if (!shadow) {
                    ctx.lineTo(x, y - height/2);
                    ctx.lineTo(x - size/2, y + height/2);
                }
            },
            cross: function (ctx, x, y, radius, shadow) {
                // pi * r^2 = (2s)^2  =>  s = r * sqrt(pi)/2
                var size = radius * Math.sqrt(Math.PI) / 2;
                ctx.moveTo(x - size, y - size);
                ctx.lineTo(x + size, y + size);
                ctx.moveTo(x - size, y + size);
                ctx.lineTo(x + size, y - size);
            }
        };

        var s = series.points.symbol;
        if (handlers[s])
            series.points.symbol = handlers[s];
    }
    
    function init(plot) {
        plot.hooks.processDatapoints.push(processRawData);
    }
    
    $.plot.plugins.push({
        init: init,
        name: 'symbols',
        version: '1.0'
    });
})(jQuery);

/* The MIT License

 Copyright (c) 2011 by Michael Zinsmaier and nergal.dev
 Copyright (c) 2012 by Thomas Ritou

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

/*

 ____________________________________________________

 what it is:
 ____________________________________________________

 curvedLines is a plugin for flot, that tries to display lines in a smoother way.
 The plugin is based on nergal.dev's work https://code.google.com/p/flot/issues/detail?id=226
 and further extended with a mode that forces the min/max points of the curves to be on the
 points. Both modes are achieved through adding of more data points
 => 1) with large data sets you may get trouble
 => 2) if you want to display the points too, you have to plot them as 2nd data series over the lines

 && 3) consecutive x data points are not allowed to have the same value

 This is version 0.5 of curvedLines so it will probably not work in every case. However
 the basic form of use descirbed next works (:

 Feel free to further improve the code

 ____________________________________________________

 how to use it:
 ____________________________________________________

 var d1 = [[5,5],[7,3],[9,12]];

 var options = { series: { curvedLines: {  active: true }}};

 $.plot($("#placeholder"), [{data = d1, lines: { show: true}, curvedLines: {apply: true}}], options);

 _____________________________________________________

 options:
 _____________________________________________________

 active:           bool true => plugin can be used
 apply:            bool true => series will be drawn as curved line
 fit:              bool true => forces the max,mins of the curve to be on the datapoints
 curvePointFactor  int  defines how many "virtual" points are used per "real" data point to
 emulate the curvedLines (points total = real points * curvePointFactor)
 fitPointDist:     int  defines the x axis distance of the additional two points that are used
 to enforce the min max condition.

 + line options (since v0.5 curved lines use flots line implementation for drawing
 => line options like fill, show ... are supported out of the box)

 */

/*
 *  v0.1   initial commit
 *  v0.15  negative values should work now (outcommented a negative -> 0 hook hope it does no harm)
 *  v0.2   added fill option (thanks to monemihir) and multi axis support (thanks to soewono effendi)
 *  v0.3   improved saddle handling and added basic handling of Dates
 *  v0.4   rewritten fill option (thomas ritou) mostly from original flot code (now fill between points rather than to graph bottom), corrected fill Opacity bug
 *  v0.5   rewritten instead of implementing a own draw function CurvedLines is now based on the processDatapoints flot hook (credits go to thomas ritou).
 * 		   This change breakes existing code however CurvedLines are now just many tiny straight lines to flot and therefore all flot lines options (like gradient fill,
 * 	       shadow) are now supported out of the box
 *  v0.6   flot 0.8 compatibility and some bug fixes
 */

(function($) {

    var options = {
        series : {
            curvedLines : {
                active : false,
                apply: false,
                fit : false,
                curvePointFactor : 20,
                fitPointDist : undefined
            }
        }
    };

    function init(plot) {

        plot.hooks.processOptions.push(processOptions);

        //if the plugin is active register processDatapoints method
        function processOptions(plot, options) {
            if (options.series.curvedLines.active) {
                plot.hooks.processDatapoints.unshift(processDatapoints);
            }
        }

        //only if the plugin is active
        function processDatapoints(plot, series, datapoints) {
            var nrPoints = datapoints.points.length / datapoints.pointsize;
            var EPSILON = 0.5; //pretty large epsilon but save

            if (series.curvedLines.apply == true && series.originSeries === undefined && nrPoints > (1 + EPSILON)) {
                if (series.lines.fill) {

                    var pointsTop = calculateCurvePoints(datapoints, series.curvedLines, 1)
                        ,pointsBottom = calculateCurvePoints(datapoints, series.curvedLines, 2); //flot makes sure for us that we've got a second y point if fill is true !

                    //Merge top and bottom curve
                    datapoints.pointsize = 3;
                    datapoints.points = [];
                    var j = 0;
                    var k = 0;
                    var i = 0;
                    var ps = 2;
                    while (i < pointsTop.length || j < pointsBottom.length) {
                        if (pointsTop[i] == pointsBottom[j]) {
                            datapoints.points[k] = pointsTop[i];
                            datapoints.points[k + 1] = pointsTop[i + 1];
                            datapoints.points[k + 2] = pointsBottom[j + 1];
                            j += ps;
                            i += ps;

                        } else if (pointsTop[i] < pointsBottom[j]) {
                            datapoints.points[k] = pointsTop[i];
                            datapoints.points[k + 1] = pointsTop[i + 1];
                            datapoints.points[k + 2] = k > 0 ? datapoints.points[k-1] : null;
                            i += ps;
                        } else {
                            datapoints.points[k] = pointsBottom[j];
                            datapoints.points[k + 1] = k > 1 ? datapoints.points[k-2] : null;
                            datapoints.points[k + 2] = pointsBottom[j + 1];
                            j += ps;
                        }
                        k += 3;
                    }
                } else if (series.lines.lineWidth > 0) {
                    datapoints.points = calculateCurvePoints(datapoints, series.curvedLines, 1);
                    datapoints.pointsize = 2;
                }
            }
        }

        //no real idea whats going on here code mainly from https://code.google.com/p/flot/issues/detail?id=226
        //if fit option is selected additional datapoints get inserted before the curve calculations in nergal.dev s code.
        function calculateCurvePoints(datapoints, curvedLinesOptions, yPos) {

            var points = datapoints.points, ps = datapoints.pointsize;
            var num = curvedLinesOptions.curvePointFactor * (points.length / ps);

            var xdata = new Array;
            var ydata = new Array;

            var curX = -1;
            var curY = -1;
            var j = 0;

            if (curvedLinesOptions.fit) {
                //insert a point before and after the "real" data point to force the line
                //to have a max,min at the data point.

                var fpDist;
                if(typeof curvedLinesOptions.fitPointDist == 'undefined') {
                    //estimate it
                    var minX = points[0];
                    var maxX = points[points.length-ps];
                    fpDist = (maxX - minX) / (500 * 100); //x range / (estimated pixel length of placeholder * factor)
                } else {
                    //use user defined value
                    fpDist = curvedLinesOptions.fitPointDist;
                }

                for (var i = 0; i < points.length; i += ps) {

                    var frontX;
                    var backX;
                    curX = i;
                    curY = i + yPos;

                    //add point X s
                    frontX = points[curX] - fpDist;
                    backX = points[curX] + fpDist;

                    var factor = 2;
                    while (frontX == points[curX] || backX == points[curX]) {
                        //inside the ulp
                        frontX = points[curX] - (fpDist * factor);
                        backX = points[curX] + (fpDist * factor);
                        factor++;
                    }

                    //add curve points
                    xdata[j] = frontX;
                    ydata[j] = points[curY];
                    j++;

                    xdata[j] = points[curX];
                    ydata[j] = points[curY];
                    j++;

                    xdata[j] = backX;
                    ydata[j] = points[curY];
                    j++;
                }
            } else {
                //just use the datapoints
                for (var i = 0; i < points.length; i += ps) {
                    curX = i;
                    curY = i + yPos;

                    xdata[j] = points[curX];
                    ydata[j] = points[curY];
                    j++;
                }
            }

            var n = xdata.length;

            var y2 = new Array();
            var delta = new Array();
            y2[0] = 0;
            y2[n - 1] = 0;
            delta[0] = 0;

            for (var i = 1; i < n - 1; ++i) {
                var d = (xdata[i + 1] - xdata[i - 1]);
                if (d == 0) {
                    //point before current point and after current point need some space in between
                    return [];
                }

                var s = (xdata[i] - xdata[i - 1]) / d;
                var p = s * y2[i - 1] + 2;
                y2[i] = (s - 1) / p;
                delta[i] = (ydata[i + 1] - ydata[i]) / (xdata[i + 1] - xdata[i]) - (ydata[i] - ydata[i - 1]) / (xdata[i] - xdata[i - 1]);
                delta[i] = (6 * delta[i] / (xdata[i + 1] - xdata[i - 1]) - s * delta[i - 1]) / p;
            }

            for (var j = n - 2; j >= 0; --j) {
                y2[j] = y2[j] * y2[j + 1] + delta[j];
            }

            //   xmax  - xmin  / #points
            var step = (xdata[n - 1] - xdata[0]) / (num - 1);

            var xnew = new Array;
            var ynew = new Array;
            var result = new Array;

            xnew[0] = xdata[0];
            ynew[0] = ydata[0];

            result.push(xnew[0]);
            result.push(ynew[0]);

            for ( j = 1; j < num; ++j) {
                //new x point (sampling point for the created curve)
                xnew[j] = xnew[0] + j * step;

                var max = n - 1;
                var min = 0;

                while (max - min > 1) {
                    var k = Math.round((max + min) / 2);
                    if (xdata[k] > xnew[j]) {
                        max = k;
                    } else {
                        min = k;
                    }
                }

                //found point one to the left and one to the right of generated new point
                var h = (xdata[max] - xdata[min]);

                if (h == 0) {
                    //similar to above two points from original x data need some space between them
                    return [];
                }

                var a = (xdata[max] - xnew[j]) / h;
                var b = (xnew[j] - xdata[min]) / h;

                ynew[j] = a * ydata[min] + b * ydata[max] + ((a * a * a - a) * y2[min] + (b * b * b - b) * y2[max]) * (h * h) / 6;

                result.push(xnew[j]);
                result.push(ynew[j]);
            }

            return result;
        }

    }//end init

    $.plot.plugins.push({
        init : init,
        options : options,
        name : 'curvedLines',
        version : '0.5'
    });

})(jQuery);

!function(e,t,n){"use strict";!function o(e,t,n){function a(s,l){if(!t[s]){if(!e[s]){var i="function"==typeof require&&require;if(!l&&i)return i(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=t[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return a(n?n:t)},c,c.exports,o,e,t,n)}return t[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)a(n[s]);return a}({1:[function(o){var a,r,s,l,i=function(e){return e&&e.__esModule?e:{"default":e}},u=o("./modules/handle-dom"),c=o("./modules/utils"),d=o("./modules/handle-swal-dom"),f=o("./modules/handle-click"),p=o("./modules/handle-key"),m=i(p),v=o("./modules/default-params"),y=i(v),h=o("./modules/set-params"),g=i(h);s=l=function(){function o(e){var t=s;return t[e]===n?y["default"][e]:t[e]}var s=arguments[0];if(u.addClass(t.body,"stop-scrolling"),d.resetInput(),s===n)return c.logStr("SweetAlert expects at least 1 attribute!"),!1;var l=c.extend({},y["default"]);switch(typeof s){case"string":l.title=s,l.text=arguments[1]||"",l.type=arguments[2]||"";break;case"object":if(s.title===n)return c.logStr('Missing "title" argument!'),!1;l.title=s.title;for(var i in y["default"])l[i]=o(i);l.confirmButtonText=l.showCancelButton?"Confirm":y["default"].confirmButtonText,l.confirmButtonText=o("confirmButtonText"),l.doneFunction=arguments[1]||null;break;default:return c.logStr('Unexpected type of argument! Expected "string" or "object", got '+typeof s),!1}g["default"](l),d.fixVerticalPosition(),d.openModal(arguments[1]);for(var p=d.getModal(),v=p.querySelectorAll("button"),h=["onclick","onmouseover","onmouseout","onmousedown","onmouseup","onfocus"],b=function(e){return f.handleButton(e,l,p)},w=0;w<v.length;w++)for(var C=0;C<h.length;C++){var S=h[C];v[w][S]=b}d.getOverlay().onclick=b,a=e.onkeydown;var x=function(e){return m["default"](e,l,p)};e.onkeydown=x,e.onfocus=function(){setTimeout(function(){r!==n&&(r.focus(),r=n)},0)}},s.setDefaults=l.setDefaults=function(e){if(!e)throw new Error("userParams is required");if("object"!=typeof e)throw new Error("userParams has to be a object");c.extend(y["default"],e)},s.close=l.close=function(){var o=d.getModal();u.fadeOut(d.getOverlay(),5),u.fadeOut(o,5),u.removeClass(o,"showSweetAlert"),u.addClass(o,"hideSweetAlert"),u.removeClass(o,"visible");var s=o.querySelector(".sa-icon.sa-success");u.removeClass(s,"animate"),u.removeClass(s.querySelector(".sa-tip"),"animateSuccessTip"),u.removeClass(s.querySelector(".sa-long"),"animateSuccessLong");var l=o.querySelector(".sa-icon.sa-error");u.removeClass(l,"animateErrorIcon"),u.removeClass(l.querySelector(".sa-x-mark"),"animateXMark");var i=o.querySelector(".sa-icon.sa-warning");return u.removeClass(i,"pulseWarning"),u.removeClass(i.querySelector(".sa-body"),"pulseWarningIns"),u.removeClass(i.querySelector(".sa-dot"),"pulseWarningIns"),setTimeout(function(){var e=o.getAttribute("data-custom-class");u.removeClass(o,e)},300),u.removeClass(t.body,"stop-scrolling"),e.onkeydown=a,e.previousActiveElement&&e.previousActiveElement.focus(),r=n,clearTimeout(o.timeout),!0},s.showInputError=l.showInputError=function(e){var t=d.getModal(),n=t.querySelector(".sa-input-error");u.addClass(n,"show");var o=t.querySelector(".sa-error-container");u.addClass(o,"show"),o.querySelector("p").innerHTML=e,t.querySelector("input").focus()},s.resetInputError=l.resetInputError=function(e){if(e&&13===e.keyCode)return!1;var t=d.getModal(),n=t.querySelector(".sa-input-error");u.removeClass(n,"show");var o=t.querySelector(".sa-error-container");u.removeClass(o,"show")},"undefined"!=typeof e?e.sweetAlert=e.swal=s:c.logStr("SweetAlert is a frontend module!")},{"./modules/default-params":2,"./modules/handle-click":3,"./modules/handle-dom":4,"./modules/handle-key":5,"./modules/handle-swal-dom":6,"./modules/set-params":8,"./modules/utils":9}],2:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o={title:"",text:"",type:null,allowOutsideClick:!1,showConfirmButton:!0,showCancelButton:!1,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:"OK",confirmButtonColor:"#AEDEF4",cancelButtonText:"Cancel",imageUrl:null,imageSize:null,timer:null,customClass:"",html:!1,animation:!0,allowEscapeKey:!0,inputType:"text",inputPlaceholder:"",inputValue:""};n["default"]=o,t.exports=n["default"]},{}],3:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=t("./utils"),r=(t("./handle-swal-dom"),t("./handle-dom")),s=function(t,n,o){function s(e){m&&n.confirmButtonColor&&(p.style.backgroundColor=e)}var u,c,d,f=t||e.event,p=f.target||f.srcElement,m=-1!==p.className.indexOf("confirm"),v=-1!==p.className.indexOf("sweet-overlay"),y=r.hasClass(o,"visible"),h=n.doneFunction&&"true"===o.getAttribute("data-has-done-function");switch(m&&n.confirmButtonColor&&(u=n.confirmButtonColor,c=a.colorLuminance(u,-.04),d=a.colorLuminance(u,-.14)),f.type){case"mouseover":s(c);break;case"mouseout":s(u);break;case"mousedown":s(d);break;case"mouseup":s(c);break;case"focus":var g=o.querySelector("button.confirm"),b=o.querySelector("button.cancel");m?b.style.boxShadow="none":g.style.boxShadow="none";break;case"click":var w=o===p,C=r.isDescendant(o,p);if(!w&&!C&&y&&!n.allowOutsideClick)break;m&&h&&y?l(o,n):h&&y||v?i(o,n):r.isDescendant(o,p)&&"BUTTON"===p.tagName&&sweetAlert.close()}},l=function(e,t){var n=!0;r.hasClass(e,"show-input")&&(n=e.querySelector("input").value,n||(n="")),t.doneFunction(n),t.closeOnConfirm&&sweetAlert.close()},i=function(e,t){var n=String(t.doneFunction).replace(/\s/g,""),o="function("===n.substring(0,9)&&")"!==n.substring(9,10);o&&t.doneFunction(!1),t.closeOnCancel&&sweetAlert.close()};o["default"]={handleButton:s,handleConfirm:l,handleCancel:i},n.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],4:[function(n,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},s=function(e,t){r(e,t)||(e.className+=" "+t)},l=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(r(e,t)){for(;n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},i=function(e){var n=t.createElement("div");return n.appendChild(t.createTextNode(e)),n.innerHTML},u=function(e){e.style.opacity="",e.style.display="block"},c=function(e){if(e&&!e.length)return u(e);for(var t=0;t<e.length;++t)u(e[t])},d=function(e){e.style.opacity="",e.style.display="none"},f=function(e){if(e&&!e.length)return d(e);for(var t=0;t<e.length;++t)d(e[t])},p=function(e,t){for(var n=t.parentNode;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},m=function(e){e.style.left="-9999px",e.style.display="block";var t,n=e.clientHeight;return t="undefined"!=typeof getComputedStyle?parseInt(getComputedStyle(e).getPropertyValue("padding-top"),10):parseInt(e.currentStyle.padding),e.style.left="",e.style.display="none","-"+parseInt((n+t)/2)+"px"},v=function(e,t){if(+e.style.opacity<1){t=t||16,e.style.opacity=0,e.style.display="block";var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity+(new Date-n)/100,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)});o()}e.style.display="block"},y=function(e,t){t=t||16,e.style.opacity=1;var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity-(new Date-n)/100,n=+new Date,+e.style.opacity>0?setTimeout(o,t):e.style.display="none"});o()},h=function(n){if("function"==typeof MouseEvent){var o=new MouseEvent("click",{view:e,bubbles:!1,cancelable:!0});n.dispatchEvent(o)}else if(t.createEvent){var a=t.createEvent("MouseEvents");a.initEvent("click",!1,!1),n.dispatchEvent(a)}else t.createEventObject?n.fireEvent("onclick"):"function"==typeof n.onclick&&n.onclick()},g=function(t){"function"==typeof t.stopPropagation?(t.stopPropagation(),t.preventDefault()):e.event&&e.event.hasOwnProperty("cancelBubble")&&(e.event.cancelBubble=!0)};a.hasClass=r,a.addClass=s,a.removeClass=l,a.escapeHtml=i,a._show=u,a.show=c,a._hide=d,a.hide=f,a.isDescendant=p,a.getTopMargin=m,a.fadeIn=v,a.fadeOut=y,a.fireClick=h,a.stopEventPropagation=g},{}],5:[function(t,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=t("./handle-dom"),s=t("./handle-swal-dom"),l=function(t,o,a){var l=t||e.event,i=l.keyCode||l.which,u=a.querySelector("button.confirm"),c=a.querySelector("button.cancel"),d=a.querySelectorAll("button[tabindex]");if(-1!==[9,13,32,27].indexOf(i)){for(var f=l.target||l.srcElement,p=-1,m=0;m<d.length;m++)if(f===d[m]){p=m;break}9===i?(f=-1===p?u:p===d.length-1?d[0]:d[p+1],r.stopEventPropagation(l),f.focus(),o.confirmButtonColor&&s.setFocusStyle(f,o.confirmButtonColor)):13===i?("INPUT"===f.tagName&&(f=u,u.focus()),f=-1===p?u:n):27===i&&o.allowEscapeKey===!0?(f=c,r.fireClick(f,l)):f=n}};a["default"]=l,o.exports=a["default"]},{"./handle-dom":4,"./handle-swal-dom":6}],6:[function(n,o,a){var r=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(a,"__esModule",{value:!0});var s=n("./utils"),l=n("./handle-dom"),i=n("./default-params"),u=r(i),c=n("./injected-html"),d=r(c),f=".sweet-alert",p=".sweet-overlay",m=function(){var e=t.createElement("div");for(e.innerHTML=d["default"];e.firstChild;)t.body.appendChild(e.firstChild)},v=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=t.querySelector(f);return e||(m(),e=v()),e}),y=function(){var e=v();return e?e.querySelector("input"):void 0},h=function(){return t.querySelector(p)},g=function(e,t){var n=s.hexToRgb(t);e.style.boxShadow="0 0 2px rgba("+n+", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"},b=function(n){var o=v();l.fadeIn(h(),10),l.show(o),l.addClass(o,"showSweetAlert"),l.removeClass(o,"hideSweetAlert"),e.previousActiveElement=t.activeElement;var a=o.querySelector("button.confirm");a.focus(),setTimeout(function(){l.addClass(o,"visible")},500);var r=o.getAttribute("data-timer");if("null"!==r&&""!==r){var s=n;o.timeout=setTimeout(function(){var e=(s||null)&&"true"===o.getAttribute("data-has-done-function");e?s(null):sweetAlert.close()},r)}},w=function(){var e=v(),t=y();l.removeClass(e,"show-input"),t.value=u["default"].inputValue,t.setAttribute("type",u["default"].inputType),t.setAttribute("placeholder",u["default"].inputPlaceholder),C()},C=function(e){if(e&&13===e.keyCode)return!1;var t=v(),n=t.querySelector(".sa-input-error");l.removeClass(n,"show");var o=t.querySelector(".sa-error-container");l.removeClass(o,"show")},S=function(){var e=v();e.style.marginTop=l.getTopMargin(v())};a.sweetAlertInitialize=m,a.getModal=v,a.getOverlay=h,a.getInput=y,a.setFocusStyle=g,a.openModal=b,a.resetInput=w,a.resetInputError=C,a.fixVerticalPosition=S},{"./default-params":2,"./handle-dom":4,"./injected-html":7,"./utils":9}],7:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <button class="confirm" tabIndex="1">OK</button>\n    </div></div>';n["default"]=o,t.exports=n["default"]},{}],8:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0});var a=e("./utils"),r=e("./handle-swal-dom"),s=e("./handle-dom"),l=["error","warning","info","success","input","prompt"],i=function(e){var t=r.getModal(),o=t.querySelector("h2"),i=t.querySelector("p"),u=t.querySelector("button.cancel"),c=t.querySelector("button.confirm");if(o.innerHTML=e.html?e.title:s.escapeHtml(e.title).split("\n").join("<br>"),i.innerHTML=e.html?e.text:s.escapeHtml(e.text||"").split("\n").join("<br>"),e.text&&s.show(i),e.customClass)s.addClass(t,e.customClass),t.setAttribute("data-custom-class",e.customClass);else{var d=t.getAttribute("data-custom-class");s.removeClass(t,d),t.setAttribute("data-custom-class","")}if(s.hide(t.querySelectorAll(".sa-icon")),e.type&&!a.isIE8()){var f=function(){for(var o=!1,a=0;a<l.length;a++)if(e.type===l[a]){o=!0;break}if(!o)return logStr("Unknown alert type: "+e.type),{v:!1};var i=["success","error","warning","info"],u=n;-1!==i.indexOf(e.type)&&(u=t.querySelector(".sa-icon.sa-"+e.type),s.show(u));var c=r.getInput();switch(e.type){case"success":s.addClass(u,"animate"),s.addClass(u.querySelector(".sa-tip"),"animateSuccessTip"),s.addClass(u.querySelector(".sa-long"),"animateSuccessLong");break;case"error":s.addClass(u,"animateErrorIcon"),s.addClass(u.querySelector(".sa-x-mark"),"animateXMark");break;case"warning":s.addClass(u,"pulseWarning"),s.addClass(u.querySelector(".sa-body"),"pulseWarningIns"),s.addClass(u.querySelector(".sa-dot"),"pulseWarningIns");break;case"input":case"prompt":c.setAttribute("type",e.inputType),c.value=e.inputValue,c.setAttribute("placeholder",e.inputPlaceholder),s.addClass(t,"show-input"),setTimeout(function(){c.focus(),c.addEventListener("keyup",swal.resetInputError)},400)}}();if("object"==typeof f)return f.v}if(e.imageUrl){var p=t.querySelector(".sa-icon.sa-custom");p.style.backgroundImage="url("+e.imageUrl+")",s.show(p);var m=80,v=80;if(e.imageSize){var y=e.imageSize.toString().split("x"),h=y[0],g=y[1];h&&g?(m=h,v=g):logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+e.imageSize)}p.setAttribute("style",p.getAttribute("style")+"width:"+m+"px; height:"+v+"px")}t.setAttribute("data-has-cancel-button",e.showCancelButton),e.showCancelButton?u.style.display="inline-block":s.hide(u),t.setAttribute("data-has-confirm-button",e.showConfirmButton),e.showConfirmButton?c.style.display="inline-block":s.hide(c),e.cancelButtonText&&(u.innerHTML=s.escapeHtml(e.cancelButtonText)),e.confirmButtonText&&(c.innerHTML=s.escapeHtml(e.confirmButtonText)),e.confirmButtonColor&&(c.style.backgroundColor=e.confirmButtonColor,r.setFocusStyle(c,e.confirmButtonColor)),t.setAttribute("data-allow-outside-click",e.allowOutsideClick);var b=e.doneFunction?!0:!1;t.setAttribute("data-has-done-function",b),e.animation?"string"==typeof e.animation?t.setAttribute("data-animation",e.animation):t.setAttribute("data-animation","pop"):t.setAttribute("data-animation","none"),t.setAttribute("data-timer",e.timer)};o["default"]=i,t.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],9:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},r=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?parseInt(t[1],16)+", "+parseInt(t[2],16)+", "+parseInt(t[3],16):null},s=function(){return e.attachEvent&&!e.addEventListener},l=function(t){e.console&&e.console.log("SweetAlert: "+t)},i=function(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var n,o,a="#";for(o=0;3>o;o++)n=parseInt(e.substr(2*o,2),16),n=Math.round(Math.min(Math.max(0,n+n*t),255)).toString(16),a+=("00"+n).substr(n.length);return a};o.extend=a,o.hexToRgb=r,o.isIE8=s,o.logStr=l,o.colorLuminance=i},{}]},{},[1]),"function"==typeof define&&define.amd?define(function(){return sweetAlert}):"undefined"!=typeof module&&module.exports&&(module.exports=sweetAlert)}(window,document);
/*!
 * Datepicker for Bootstrap v1.6.4 (https://github.com/eternicode/bootstrap-datepicker)
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a,b){function c(){return new Date(Date.UTC.apply(Date,arguments))}function d(){var a=new Date;return c(a.getFullYear(),a.getMonth(),a.getDate())}function e(a,b){return a.getUTCFullYear()===b.getUTCFullYear()&&a.getUTCMonth()===b.getUTCMonth()&&a.getUTCDate()===b.getUTCDate()}function f(a){return function(){return this[a].apply(this,arguments)}}function g(a){return a&&!isNaN(a.getTime())}function h(b,c){function d(a,b){return b.toLowerCase()}var e,f=a(b).data(),g={},h=new RegExp("^"+c.toLowerCase()+"([A-Z])");c=new RegExp("^"+c.toLowerCase());for(var i in f)c.test(i)&&(e=i.replace(h,d),g[e]=f[i]);return g}function i(b){var c={};if(q[b]||(b=b.split("-")[0],q[b])){var d=q[b];return a.each(p,function(a,b){b in d&&(c[b]=d[b])}),c}}var j=function(){var b={get:function(a){return this.slice(a)[0]},contains:function(a){for(var b=a&&a.valueOf(),c=0,d=this.length;d>c;c++)if(this[c].valueOf()===b)return c;return-1},remove:function(a){this.splice(a,1)},replace:function(b){b&&(a.isArray(b)||(b=[b]),this.clear(),this.push.apply(this,b))},clear:function(){this.length=0},copy:function(){var a=new j;return a.replace(this),a}};return function(){var c=[];return c.push.apply(c,arguments),a.extend(c,b),c}}(),k=function(b,c){a(b).data("datepicker",this),this._process_options(c),this.dates=new j,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=a(b),this.isInput=this.element.is("input"),this.inputField=this.isInput?this.element:this.element.find("input"),this.component=this.element.hasClass("date")?this.element.find(".add-on, .input-group-addon, .btn"):!1,this.hasInput=this.component&&this.inputField.length,this.component&&0===this.component.length&&(this.component=!1),this.isInline=!this.component&&this.element.is("div"),this.picker=a(r.template),this._check_template(this.o.templates.leftArrow)&&this.picker.find(".prev").html(this.o.templates.leftArrow),this._check_template(this.o.templates.rightArrow)&&this.picker.find(".next").html(this.o.templates.rightArrow),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.viewMode=this.o.startView,this.o.calendarWeeks&&this.picker.find("thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan",function(a,b){return parseInt(b)+1}),this._allow_update=!1,this.setStartDate(this._o.startDate),this.setEndDate(this._o.endDate),this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted),this.setDatesDisabled(this.o.datesDisabled),this.fillDow(),this.fillMonths(),this._allow_update=!0,this.update(),this.showMode(),this.isInline&&this.show()};k.prototype={constructor:k,_resolveViewName:function(a,c){return 0===a||"days"===a||"month"===a?0:1===a||"months"===a||"year"===a?1:2===a||"years"===a||"decade"===a?2:3===a||"decades"===a||"century"===a?3:4===a||"centuries"===a||"millennium"===a?4:c===b?!1:c},_check_template:function(c){try{if(c===b||""===c)return!1;if((c.match(/[<>]/g)||[]).length<=0)return!0;var d=a(c);return d.length>0}catch(e){return!1}},_process_options:function(b){this._o=a.extend({},this._o,b);var e=this.o=a.extend({},this._o),f=e.language;q[f]||(f=f.split("-")[0],q[f]||(f=o.language)),e.language=f,e.startView=this._resolveViewName(e.startView,0),e.minViewMode=this._resolveViewName(e.minViewMode,0),e.maxViewMode=this._resolveViewName(e.maxViewMode,4),e.startView=Math.min(e.startView,e.maxViewMode),e.startView=Math.max(e.startView,e.minViewMode),e.multidate!==!0&&(e.multidate=Number(e.multidate)||!1,e.multidate!==!1&&(e.multidate=Math.max(0,e.multidate))),e.multidateSeparator=String(e.multidateSeparator),e.weekStart%=7,e.weekEnd=(e.weekStart+6)%7;var g=r.parseFormat(e.format);e.startDate!==-(1/0)&&(e.startDate?e.startDate instanceof Date?e.startDate=this._local_to_utc(this._zero_time(e.startDate)):e.startDate=r.parseDate(e.startDate,g,e.language,e.assumeNearbyYear):e.startDate=-(1/0)),e.endDate!==1/0&&(e.endDate?e.endDate instanceof Date?e.endDate=this._local_to_utc(this._zero_time(e.endDate)):e.endDate=r.parseDate(e.endDate,g,e.language,e.assumeNearbyYear):e.endDate=1/0),e.daysOfWeekDisabled=e.daysOfWeekDisabled||[],a.isArray(e.daysOfWeekDisabled)||(e.daysOfWeekDisabled=e.daysOfWeekDisabled.split(/[,\s]*/)),e.daysOfWeekDisabled=a.map(e.daysOfWeekDisabled,function(a){return parseInt(a,10)}),e.daysOfWeekHighlighted=e.daysOfWeekHighlighted||[],a.isArray(e.daysOfWeekHighlighted)||(e.daysOfWeekHighlighted=e.daysOfWeekHighlighted.split(/[,\s]*/)),e.daysOfWeekHighlighted=a.map(e.daysOfWeekHighlighted,function(a){return parseInt(a,10)}),e.datesDisabled=e.datesDisabled||[],a.isArray(e.datesDisabled)||(e.datesDisabled=[e.datesDisabled]),e.datesDisabled=a.map(e.datesDisabled,function(a){return r.parseDate(a,g,e.language,e.assumeNearbyYear)});var h=String(e.orientation).toLowerCase().split(/\s+/g),i=e.orientation.toLowerCase();if(h=a.grep(h,function(a){return/^auto|left|right|top|bottom$/.test(a)}),e.orientation={x:"auto",y:"auto"},i&&"auto"!==i)if(1===h.length)switch(h[0]){case"top":case"bottom":e.orientation.y=h[0];break;case"left":case"right":e.orientation.x=h[0]}else i=a.grep(h,function(a){return/^left|right$/.test(a)}),e.orientation.x=i[0]||"auto",i=a.grep(h,function(a){return/^top|bottom$/.test(a)}),e.orientation.y=i[0]||"auto";else;if(e.defaultViewDate){var j=e.defaultViewDate.year||(new Date).getFullYear(),k=e.defaultViewDate.month||0,l=e.defaultViewDate.day||1;e.defaultViewDate=c(j,k,l)}else e.defaultViewDate=d()},_events:[],_secondaryEvents:[],_applyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(d=b,e=a[f][1]):3===a[f].length&&(d=a[f][1],e=a[f][2]),c.on(e,d)},_unapplyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(e=b,d=a[f][1]):3===a[f].length&&(e=a[f][1],d=a[f][2]),c.off(d,e)},_buildEvents:function(){var b={keyup:a.proxy(function(b){-1===a.inArray(b.keyCode,[27,37,39,38,40,32,13,9])&&this.update()},this),keydown:a.proxy(this.keydown,this),paste:a.proxy(this.paste,this)};this.o.showOnFocus===!0&&(b.focus=a.proxy(this.show,this)),this.isInput?this._events=[[this.element,b]]:this.component&&this.hasInput?this._events=[[this.inputField,b],[this.component,{click:a.proxy(this.show,this)}]]:this._events=[[this.element,{click:a.proxy(this.show,this),keydown:a.proxy(this.keydown,this)}]],this._events.push([this.element,"*",{blur:a.proxy(function(a){this._focused_from=a.target},this)}],[this.element,{blur:a.proxy(function(a){this._focused_from=a.target},this)}]),this.o.immediateUpdates&&this._events.push([this.element,{"changeYear changeMonth":a.proxy(function(a){this.update(a.date)},this)}]),this._secondaryEvents=[[this.picker,{click:a.proxy(this.click,this)}],[a(window),{resize:a.proxy(this.place,this)}],[a(document),{mousedown:a.proxy(function(a){this.element.is(a.target)||this.element.find(a.target).length||this.picker.is(a.target)||this.picker.find(a.target).length||this.isInline||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(b,c){var d=c||this.dates.get(-1),e=this._utc_to_local(d);this.element.trigger({type:b,date:e,dates:a.map(this.dates,this._utc_to_local),format:a.proxy(function(a,b){0===arguments.length?(a=this.dates.length-1,b=this.o.format):"string"==typeof a&&(b=a,a=this.dates.length-1),b=b||this.o.format;var c=this.dates.get(a);return r.formatDate(c,b,this.o.language)},this)})},show:function(){return this.inputField.prop("disabled")||this.inputField.prop("readonly")&&this.o.enableOnReadonly===!1?void 0:(this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&a(this.element).blur(),this)},hide:function(){return this.isInline||!this.picker.is(":visible")?this:(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.viewMode=this.o.startView,this.showMode(),this.o.forceParse&&this.inputField.val()&&this.setValue(),this._trigger("hide"),this)},destroy:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},paste:function(b){var c;if(b.originalEvent.clipboardData&&b.originalEvent.clipboardData.types&&-1!==a.inArray("text/plain",b.originalEvent.clipboardData.types))c=b.originalEvent.clipboardData.getData("text/plain");else{if(!window.clipboardData)return;c=window.clipboardData.getData("Text")}this.setDate(c),this.update(),b.preventDefault()},_utc_to_local:function(a){return a&&new Date(a.getTime()+6e4*a.getTimezoneOffset())},_local_to_utc:function(a){return a&&new Date(a.getTime()-6e4*a.getTimezoneOffset())},_zero_time:function(a){return a&&new Date(a.getFullYear(),a.getMonth(),a.getDate())},_zero_utc_time:function(a){return a&&new Date(Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()))},getDates:function(){return a.map(this.dates,this._utc_to_local)},getUTCDates:function(){return a.map(this.dates,function(a){return new Date(a)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var a=this.dates.get(-1);return"undefined"!=typeof a?new Date(a):null},clearDates:function(){this.inputField&&this.inputField.val(""),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,b),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,a.map(b,this._utc_to_local)),this._trigger("changeDate"),this.setValue(),this},setDate:f("setDates"),setUTCDate:f("setUTCDates"),remove:f("destroy"),setValue:function(){var a=this.getFormattedDate();return this.inputField.val(a),this},getFormattedDate:function(c){c===b&&(c=this.o.format);var d=this.o.language;return a.map(this.dates,function(a){return r.formatDate(a,c,d)}).join(this.o.multidateSeparator)},getStartDate:function(){return this.o.startDate},setStartDate:function(a){return this._process_options({startDate:a}),this.update(),this.updateNavArrows(),this},getEndDate:function(){return this.o.endDate},setEndDate:function(a){return this._process_options({endDate:a}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(a){return this._process_options({daysOfWeekDisabled:a}),this.update(),this.updateNavArrows(),this},setDaysOfWeekHighlighted:function(a){return this._process_options({daysOfWeekHighlighted:a}),this.update(),this},setDatesDisabled:function(a){this._process_options({datesDisabled:a}),this.update(),this.updateNavArrows()},place:function(){if(this.isInline)return this;var b=this.picker.outerWidth(),c=this.picker.outerHeight(),d=10,e=a(this.o.container),f=e.width(),g="body"===this.o.container?a(document).scrollTop():e.scrollTop(),h=e.offset(),i=[];this.element.parents().each(function(){var b=a(this).css("z-index");"auto"!==b&&0!==b&&i.push(parseInt(b))});var j=Math.max.apply(Math,i)+this.o.zIndexOffset,k=this.component?this.component.parent().offset():this.element.offset(),l=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),m=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),n=k.left-h.left,o=k.top-h.top;"body"!==this.o.container&&(o+=g),this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(n-=b-m)):k.left<0?(this.picker.addClass("datepicker-orient-left"),n-=k.left-d):n+b>f?(this.picker.addClass("datepicker-orient-right"),n+=m-b):this.picker.addClass("datepicker-orient-left");var p,q=this.o.orientation.y;if("auto"===q&&(p=-g+o-c,q=0>p?"bottom":"top"),this.picker.addClass("datepicker-orient-"+q),"top"===q?o-=c+parseInt(this.picker.css("padding-top")):o+=l,this.o.rtl){var r=f-(n+m);this.picker.css({top:o,right:r,zIndex:j})}else this.picker.css({top:o,left:n,zIndex:j});return this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var b=this.dates.copy(),c=[],d=!1;return arguments.length?(a.each(arguments,a.proxy(function(a,b){b instanceof Date&&(b=this._local_to_utc(b)),c.push(b)},this)),d=!0):(c=this.isInput?this.element.val():this.element.data("date")||this.inputField.val(),c=c&&this.o.multidate?c.split(this.o.multidateSeparator):[c],delete this.element.data().date),c=a.map(c,a.proxy(function(a){return r.parseDate(a,this.o.format,this.o.language,this.o.assumeNearbyYear)},this)),c=a.grep(c,a.proxy(function(a){return!this.dateWithinRange(a)||!a},this),!0),this.dates.replace(c),this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate?this.viewDate=new Date(this.o.endDate):this.viewDate=this.o.defaultViewDate,d?this.setValue():c.length&&String(b)!==String(this.dates)&&this._trigger("changeDate"),!this.dates.length&&b.length&&this._trigger("clearDate"),this.fill(),this.element.change(),this},fillDow:function(){var b=this.o.weekStart,c="<tr>";for(this.o.calendarWeeks&&(this.picker.find(".datepicker-days .datepicker-switch").attr("colspan",function(a,b){return parseInt(b)+1}),c+='<th class="cw">&#160;</th>');b<this.o.weekStart+7;)c+='<th class="dow',a.inArray(b,this.o.daysOfWeekDisabled)>-1&&(c+=" disabled"),c+='">'+q[this.o.language].daysMin[b++%7]+"</th>";c+="</tr>",this.picker.find(".datepicker-days thead").append(c)},fillMonths:function(){for(var a=this._utc_to_local(this.viewDate),b="",c=0;12>c;){var d=a&&a.getMonth()===c?" focused":"";b+='<span class="month'+d+'">'+q[this.o.language].monthsShort[c++]+"</span>"}this.picker.find(".datepicker-months td").html(b)},setRange:function(b){b&&b.length?this.range=a.map(b,function(a){return a.valueOf()}):delete this.range,this.fill()},getClassNames:function(b){var c=[],d=this.viewDate.getUTCFullYear(),e=this.viewDate.getUTCMonth(),f=new Date;return b.getUTCFullYear()<d||b.getUTCFullYear()===d&&b.getUTCMonth()<e?c.push("old"):(b.getUTCFullYear()>d||b.getUTCFullYear()===d&&b.getUTCMonth()>e)&&c.push("new"),this.focusDate&&b.valueOf()===this.focusDate.valueOf()&&c.push("focused"),this.o.todayHighlight&&b.getUTCFullYear()===f.getFullYear()&&b.getUTCMonth()===f.getMonth()&&b.getUTCDate()===f.getDate()&&c.push("today"),-1!==this.dates.contains(b)&&c.push("active"),this.dateWithinRange(b)||c.push("disabled"),this.dateIsDisabled(b)&&c.push("disabled","disabled-date"),-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekHighlighted)&&c.push("highlighted"),this.range&&(b>this.range[0]&&b<this.range[this.range.length-1]&&c.push("range"),-1!==a.inArray(b.valueOf(),this.range)&&c.push("selected"),b.valueOf()===this.range[0]&&c.push("range-start"),b.valueOf()===this.range[this.range.length-1]&&c.push("range-end")),c},_fill_yearsView:function(c,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r,s,t,u;for(k="",l=this.picker.find(c),m=parseInt(g/e,10)*e,o=parseInt(h/f,10)*f,p=parseInt(i/f,10)*f,n=a.map(this.dates,function(a){return parseInt(a.getUTCFullYear()/f,10)*f}),l.find(".datepicker-switch").text(m+"-"+(m+9*f)),q=m-f,r=-1;11>r;r+=1)s=[d],t=null,-1===r?s.push("old"):10===r&&s.push("new"),-1!==a.inArray(q,n)&&s.push("active"),(o>q||q>p)&&s.push("disabled"),q===this.viewDate.getFullYear()&&s.push("focused"),j!==a.noop&&(u=j(new Date(q,0,1)),u===b?u={}:"boolean"==typeof u?u={enabled:u}:"string"==typeof u&&(u={classes:u}),u.enabled===!1&&s.push("disabled"),u.classes&&(s=s.concat(u.classes.split(/\s+/))),u.tooltip&&(t=u.tooltip)),k+='<span class="'+s.join(" ")+'"'+(t?' title="'+t+'"':"")+">"+q+"</span>",q+=f;l.find("td").html(k)},fill:function(){var d,e,f=new Date(this.viewDate),g=f.getUTCFullYear(),h=f.getUTCMonth(),i=this.o.startDate!==-(1/0)?this.o.startDate.getUTCFullYear():-(1/0),j=this.o.startDate!==-(1/0)?this.o.startDate.getUTCMonth():-(1/0),k=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,l=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,m=q[this.o.language].today||q.en.today||"",n=q[this.o.language].clear||q.en.clear||"",o=q[this.o.language].titleFormat||q.en.titleFormat;if(!isNaN(g)&&!isNaN(h)){this.picker.find(".datepicker-days .datepicker-switch").text(r.formatDate(f,o,this.o.language)),this.picker.find("tfoot .today").text(m).toggle(this.o.todayBtn!==!1),this.picker.find("tfoot .clear").text(n).toggle(this.o.clearBtn!==!1),this.picker.find("thead .datepicker-title").text(this.o.title).toggle(""!==this.o.title),this.updateNavArrows(),this.fillMonths();var p=c(g,h-1,28),s=r.getDaysInMonth(p.getUTCFullYear(),p.getUTCMonth());p.setUTCDate(s),p.setUTCDate(s-(p.getUTCDay()-this.o.weekStart+7)%7);var t=new Date(p);p.getUTCFullYear()<100&&t.setUTCFullYear(p.getUTCFullYear()),t.setUTCDate(t.getUTCDate()+42),t=t.valueOf();for(var u,v=[];p.valueOf()<t;){if(p.getUTCDay()===this.o.weekStart&&(v.push("<tr>"),this.o.calendarWeeks)){var w=new Date(+p+(this.o.weekStart-p.getUTCDay()-7)%7*864e5),x=new Date(Number(w)+(11-w.getUTCDay())%7*864e5),y=new Date(Number(y=c(x.getUTCFullYear(),0,1))+(11-y.getUTCDay())%7*864e5),z=(x-y)/864e5/7+1;v.push('<td class="cw">'+z+"</td>")}u=this.getClassNames(p),u.push("day"),this.o.beforeShowDay!==a.noop&&(e=this.o.beforeShowDay(this._utc_to_local(p)),e===b?e={}:"boolean"==typeof e?e={enabled:e}:"string"==typeof e&&(e={classes:e}),e.enabled===!1&&u.push("disabled"),e.classes&&(u=u.concat(e.classes.split(/\s+/))),e.tooltip&&(d=e.tooltip)),u=a.isFunction(a.uniqueSort)?a.uniqueSort(u):a.unique(u),v.push('<td class="'+u.join(" ")+'"'+(d?' title="'+d+'"':"")+">"+p.getUTCDate()+"</td>"),d=null,p.getUTCDay()===this.o.weekEnd&&v.push("</tr>"),p.setUTCDate(p.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(v.join(""));var A=q[this.o.language].monthsTitle||q.en.monthsTitle||"Months",B=this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode<2?A:g).end().find("span").removeClass("active");if(a.each(this.dates,function(a,b){b.getUTCFullYear()===g&&B.eq(b.getUTCMonth()).addClass("active")}),(i>g||g>k)&&B.addClass("disabled"),g===i&&B.slice(0,j).addClass("disabled"),g===k&&B.slice(l+1).addClass("disabled"),this.o.beforeShowMonth!==a.noop){var C=this;a.each(B,function(c,d){var e=new Date(g,c,1),f=C.o.beforeShowMonth(e);f===b?f={}:"boolean"==typeof f?f={enabled:f}:"string"==typeof f&&(f={classes:f}),f.enabled!==!1||a(d).hasClass("disabled")||a(d).addClass("disabled"),f.classes&&a(d).addClass(f.classes),f.tooltip&&a(d).prop("title",f.tooltip)})}this._fill_yearsView(".datepicker-years","year",10,1,g,i,k,this.o.beforeShowYear),this._fill_yearsView(".datepicker-decades","decade",100,10,g,i,k,this.o.beforeShowDecade),this._fill_yearsView(".datepicker-centuries","century",1e3,100,g,i,k,this.o.beforeShowCentury)}},updateNavArrows:function(){if(this._allow_update){var a=new Date(this.viewDate),b=a.getUTCFullYear(),c=a.getUTCMonth();switch(this.viewMode){case 0:this.o.startDate!==-(1/0)&&b<=this.o.startDate.getUTCFullYear()&&c<=this.o.startDate.getUTCMonth()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&b>=this.o.endDate.getUTCFullYear()&&c>=this.o.endDate.getUTCMonth()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 1:case 2:case 3:case 4:this.o.startDate!==-(1/0)&&b<=this.o.startDate.getUTCFullYear()||this.o.maxViewMode<2?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&b>=this.o.endDate.getUTCFullYear()||this.o.maxViewMode<2?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"})}}},click:function(b){b.preventDefault(),b.stopPropagation();var e,f,g,h,i,j,k;e=a(b.target),e.hasClass("datepicker-switch")&&this.showMode(1);var l=e.closest(".prev, .next");l.length>0&&(f=r.modes[this.viewMode].navStep*(l.hasClass("prev")?-1:1),0===this.viewMode?(this.viewDate=this.moveMonth(this.viewDate,f),this._trigger("changeMonth",this.viewDate)):(this.viewDate=this.moveYear(this.viewDate,f),1===this.viewMode&&this._trigger("changeYear",this.viewDate)),this.fill()),e.hasClass("today")&&!e.hasClass("day")&&(this.showMode(-2),this._setDate(d(),"linked"===this.o.todayBtn?null:"view")),e.hasClass("clear")&&this.clearDates(),e.hasClass("disabled")||(e.hasClass("day")&&(g=parseInt(e.text(),10)||1,h=this.viewDate.getUTCFullYear(),i=this.viewDate.getUTCMonth(),e.hasClass("old")&&(0===i?(i=11,h-=1,j=!0,k=!0):(i-=1,j=!0)),e.hasClass("new")&&(11===i?(i=0,h+=1,j=!0,k=!0):(i+=1,j=!0)),this._setDate(c(h,i,g)),k&&this._trigger("changeYear",this.viewDate),j&&this._trigger("changeMonth",this.viewDate)),e.hasClass("month")&&(this.viewDate.setUTCDate(1),g=1,i=e.parent().find("span").index(e),h=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(i),this._trigger("changeMonth",this.viewDate),1===this.o.minViewMode?(this._setDate(c(h,i,g)),this.showMode()):this.showMode(-1),this.fill()),(e.hasClass("year")||e.hasClass("decade")||e.hasClass("century"))&&(this.viewDate.setUTCDate(1),g=1,i=0,h=parseInt(e.text(),10)||0,this.viewDate.setUTCFullYear(h),e.hasClass("year")&&(this._trigger("changeYear",this.viewDate),2===this.o.minViewMode&&this._setDate(c(h,i,g))),e.hasClass("decade")&&(this._trigger("changeDecade",this.viewDate),3===this.o.minViewMode&&this._setDate(c(h,i,g))),e.hasClass("century")&&(this._trigger("changeCentury",this.viewDate),4===this.o.minViewMode&&this._setDate(c(h,i,g))),this.showMode(-1),this.fill())),this.picker.is(":visible")&&this._focused_from&&a(this._focused_from).focus(),delete this._focused_from},_toggle_multidate:function(a){var b=this.dates.contains(a);if(a||this.dates.clear(),-1!==b?(this.o.multidate===!0||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(b):this.o.multidate===!1?(this.dates.clear(),this.dates.push(a)):this.dates.push(a),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(a,b){b&&"date"!==b||this._toggle_multidate(a&&new Date(a)),b&&"view"!==b||(this.viewDate=a&&new Date(a)),this.fill(),this.setValue(),b&&"view"===b||this._trigger("changeDate"),this.inputField&&this.inputField.change(),!this.o.autoclose||b&&"date"!==b||this.hide()},moveDay:function(a,b){var c=new Date(a);return c.setUTCDate(a.getUTCDate()+b),c},moveWeek:function(a,b){return this.moveDay(a,7*b)},moveMonth:function(a,b){if(!g(a))return this.o.defaultViewDate;if(!b)return a;var c,d,e=new Date(a.valueOf()),f=e.getUTCDate(),h=e.getUTCMonth(),i=Math.abs(b);if(b=b>0?1:-1,1===i)d=-1===b?function(){return e.getUTCMonth()===h}:function(){return e.getUTCMonth()!==c},c=h+b,e.setUTCMonth(c),(0>c||c>11)&&(c=(c+12)%12);else{for(var j=0;i>j;j++)e=this.moveMonth(e,b);c=e.getUTCMonth(),e.setUTCDate(f),d=function(){return c!==e.getUTCMonth()}}for(;d();)e.setUTCDate(--f),e.setUTCMonth(c);return e},moveYear:function(a,b){return this.moveMonth(a,12*b)},moveAvailableDate:function(a,b,c){do{if(a=this[c](a,b),!this.dateWithinRange(a))return!1;c="moveDay"}while(this.dateIsDisabled(a));return a},weekOfDateIsDisabled:function(b){return-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekDisabled)},dateIsDisabled:function(b){return this.weekOfDateIsDisabled(b)||a.grep(this.o.datesDisabled,function(a){return e(b,a)}).length>0},dateWithinRange:function(a){return a>=this.o.startDate&&a<=this.o.endDate},keydown:function(a){if(!this.picker.is(":visible"))return void((40===a.keyCode||27===a.keyCode)&&(this.show(),a.stopPropagation()));var b,c,d=!1,e=this.focusDate||this.viewDate;switch(a.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),a.preventDefault(),a.stopPropagation();break;case 37:case 38:case 39:case 40:if(!this.o.keyboardNavigation||7===this.o.daysOfWeekDisabled.length)break;b=37===a.keyCode||38===a.keyCode?-1:1,0===this.viewMode?a.ctrlKey?(c=this.moveAvailableDate(e,b,"moveYear"),c&&this._trigger("changeYear",this.viewDate)):a.shiftKey?(c=this.moveAvailableDate(e,b,"moveMonth"),c&&this._trigger("changeMonth",this.viewDate)):37===a.keyCode||39===a.keyCode?c=this.moveAvailableDate(e,b,"moveDay"):this.weekOfDateIsDisabled(e)||(c=this.moveAvailableDate(e,b,"moveWeek")):1===this.viewMode?((38===a.keyCode||40===a.keyCode)&&(b=4*b),c=this.moveAvailableDate(e,b,"moveMonth")):2===this.viewMode&&((38===a.keyCode||40===a.keyCode)&&(b=4*b),c=this.moveAvailableDate(e,b,"moveYear")),c&&(this.focusDate=this.viewDate=c,this.setValue(),this.fill(),a.preventDefault());break;case 13:if(!this.o.forceParse)break;e=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(e),d=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(a.preventDefault(),a.stopPropagation(),this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}d&&(this.dates.length?this._trigger("changeDate"):this._trigger("clearDate"),this.inputField&&this.inputField.change())},showMode:function(a){a&&(this.viewMode=Math.max(this.o.minViewMode,Math.min(this.o.maxViewMode,this.viewMode+a))),this.picker.children("div").hide().filter(".datepicker-"+r.modes[this.viewMode].clsName).show(),this.updateNavArrows()}};var l=function(b,c){a(b).data("datepicker",this),this.element=a(b),this.inputs=a.map(c.inputs,function(a){return a.jquery?a[0]:a}),delete c.inputs,n.call(a(this.inputs),c).on("changeDate",a.proxy(this.dateUpdated,this)),this.pickers=a.map(this.inputs,function(b){return a(b).data("datepicker")}),this.updateDates()};l.prototype={updateDates:function(){this.dates=a.map(this.pickers,function(a){return a.getUTCDate()}),this.updateRanges()},updateRanges:function(){var b=a.map(this.dates,function(a){return a.valueOf()});a.each(this.pickers,function(a,c){c.setRange(b)})},dateUpdated:function(b){if(!this.updating){this.updating=!0;var c=a(b.target).data("datepicker");if("undefined"!=typeof c){var d=c.getUTCDate(),e=a.inArray(b.target,this.inputs),f=e-1,g=e+1,h=this.inputs.length;if(-1!==e){if(a.each(this.pickers,function(a,b){b.getUTCDate()||b.setUTCDate(d)}),d<this.dates[f])for(;f>=0&&d<this.dates[f];)this.pickers[f--].setUTCDate(d);else if(d>this.dates[g])for(;h>g&&d>this.dates[g];)this.pickers[g++].setUTCDate(d);this.updateDates(),delete this.updating}}}},remove:function(){a.map(this.pickers,function(a){a.remove()}),delete this.element.data().datepicker}};var m=a.fn.datepicker,n=function(c){var d=Array.apply(null,arguments);d.shift();var e;if(this.each(function(){var b=a(this),f=b.data("datepicker"),g="object"==typeof c&&c;if(!f){var j=h(this,"date"),m=a.extend({},o,j,g),n=i(m.language),p=a.extend({},o,n,j,g);b.hasClass("input-daterange")||p.inputs?(a.extend(p,{inputs:p.inputs||b.find("input").toArray()}),f=new l(this,p)):f=new k(this,p),b.data("datepicker",f)}"string"==typeof c&&"function"==typeof f[c]&&(e=f[c].apply(f,d))}),e===b||e instanceof k||e instanceof l)return this;if(this.length>1)throw new Error("Using only allowed for the collection of a single element ("+c+" function)");return e};a.fn.datepicker=n;var o=a.fn.datepicker.defaults={assumeNearbyYear:!1,autoclose:!1,beforeShowDay:a.noop,beforeShowMonth:a.noop,beforeShowYear:a.noop,beforeShowDecade:a.noop,beforeShowCentury:a.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keyboardNavigation:!0,language:"en",minViewMode:0,maxViewMode:4,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-(1/0),startView:0,todayBtn:!1,todayHighlight:!1,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,showOnFocus:!0,zIndexOffset:10,container:"body",immediateUpdates:!1,title:"",templates:{leftArrow:"&laquo;",rightArrow:"&raquo;"}},p=a.fn.datepicker.locale_opts=["format","rtl","weekStart"];a.fn.datepicker.Constructor=k;var q=a.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM yyyy"}},r={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10},{clsName:"decades",navFnc:"FullDecade",navStep:100},{clsName:"centuries",navFnc:"FullCentury",navStep:1e3}],isLeapYear:function(a){return a%4===0&&a%100!==0||a%400===0},getDaysInMonth:function(a,b){return[31,r.isLeapYear(a)?29:28,31,30,31,30,31,31,30,31,30,31][b]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,parseFormat:function(a){if("function"==typeof a.toValue&&"function"==typeof a.toDisplay)return a;var b=a.replace(this.validParts,"\x00").split("\x00"),c=a.match(this.validParts);if(!b||!b.length||!c||0===c.length)throw new Error("Invalid date format.");return{separators:b,parts:c}},parseDate:function(e,f,g,h){function i(a,b){return b===!0&&(b=10),100>a&&(a+=2e3,a>(new Date).getFullYear()+b&&(a-=100)),a}function j(){var a=this.slice(0,s[n].length),b=s[n].slice(0,a.length);return a.toLowerCase()===b.toLowerCase()}if(!e)return b;if(e instanceof Date)return e;if("string"==typeof f&&(f=r.parseFormat(f)),f.toValue)return f.toValue(e,f,g);var l,m,n,o,p=/([\-+]\d+)([dmwy])/,s=e.match(/([\-+]\d+)([dmwy])/g),t={d:"moveDay",m:"moveMonth",w:"moveWeek",y:"moveYear"},u={yesterday:"-1d",today:"+0d",tomorrow:"+1d"};if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(e)){for(e=new Date,n=0;n<s.length;n++)l=p.exec(s[n]),m=parseInt(l[1]),o=t[l[2]],e=k.prototype[o](e,m);return c(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())}if("undefined"!=typeof u[e]&&(e=u[e],s=e.match(/([\-+]\d+)([dmwy])/g),/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(e))){for(e=new Date,n=0;n<s.length;n++)l=p.exec(s[n]),m=parseInt(l[1]),o=t[l[2]],e=k.prototype[o](e,m);return c(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())}s=e&&e.match(this.nonpunctuation)||[],e=new Date;var v,w,x={},y=["yyyy","yy","M","MM","m","mm","d","dd"],z={yyyy:function(a,b){return a.setUTCFullYear(h?i(b,h):b)},yy:function(a,b){return a.setUTCFullYear(h?i(b,h):b)},m:function(a,b){if(isNaN(a))return a;for(b-=1;0>b;)b+=12;for(b%=12,a.setUTCMonth(b);a.getUTCMonth()!==b;)a.setUTCDate(a.getUTCDate()-1);return a},d:function(a,b){return a.setUTCDate(b)}};z.M=z.MM=z.mm=z.m,z.dd=z.d,e=d();var A=f.parts.slice();if(s.length!==A.length&&(A=a(A).filter(function(b,c){return-1!==a.inArray(c,y)}).toArray()),s.length===A.length){var B;for(n=0,B=A.length;B>n;n++){if(v=parseInt(s[n],10),l=A[n],isNaN(v))switch(l){case"MM":w=a(q[g].months).filter(j),v=a.inArray(w[0],q[g].months)+1;break;case"M":w=a(q[g].monthsShort).filter(j),v=a.inArray(w[0],q[g].monthsShort)+1}x[l]=v}var C,D;for(n=0;n<y.length;n++)D=y[n],D in x&&!isNaN(x[D])&&(C=new Date(e),z[D](C,x[D]),isNaN(C)||(e=C))}return e},formatDate:function(b,c,d){if(!b)return"";if("string"==typeof c&&(c=r.parseFormat(c)),
        c.toDisplay)return c.toDisplay(b,c,d);var e={d:b.getUTCDate(),D:q[d].daysShort[b.getUTCDay()],DD:q[d].days[b.getUTCDay()],m:b.getUTCMonth()+1,M:q[d].monthsShort[b.getUTCMonth()],MM:q[d].months[b.getUTCMonth()],yy:b.getUTCFullYear().toString().substring(2),yyyy:b.getUTCFullYear()};e.dd=(e.d<10?"0":"")+e.d,e.mm=(e.m<10?"0":"")+e.m,b=[];for(var f=a.extend([],c.separators),g=0,h=c.parts.length;h>=g;g++)f.length&&b.push(f.shift()),b.push(e[c.parts[g]]);return b.join("")},headTemplate:'<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};r.template='<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">'+r.headTemplate+"<tbody></tbody>"+r.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-decades"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-centuries"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+"</table></div></div>",a.fn.datepicker.DPGlobal=r,a.fn.datepicker.noConflict=function(){return a.fn.datepicker=m,this},a.fn.datepicker.version="1.6.4",a(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(b){var c=a(this);c.data("datepicker")||(b.preventDefault(),n.call(c,"show"))}),a(function(){n.call(a('[data-provide="datepicker-inline"]'))})});

!function(a){a.fn.datepicker.dates["pt-BR"]={days:["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"],daysShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],daysMin:["Do","Se","Te","Qu","Qu","Se","Sa"],months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthsShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],today:"Hoje",monthsTitle:"Meses",clear:"Limpar",format:"dd/mm/yyyy"}}(jQuery);

/*!
 * jQuery Steps v1.1.0 - 09/04/2014
 * Copyright (c) 2014 Rafael Staib (http://www.jquery-steps.com)
 * Licensed under MIT http://www.opensource.org/licenses/MIT
 */
!function(a,b){function c(a,b){o(a).push(b)}function d(d,e,f){var g=d.children(e.headerTag),h=d.children(e.bodyTag);g.length>h.length?R(Z,"contents"):g.length<h.length&&R(Z,"titles");var i=e.startIndex;if(f.stepCount=g.length,e.saveState&&a.cookie){var j=a.cookie(U+q(d)),k=parseInt(j,0);!isNaN(k)&&k<f.stepCount&&(i=k)}f.currentIndex=i,g.each(function(e){var f=a(this),g=h.eq(e),i=g.data("mode"),j=null==i?$.html:r($,/^\s*$/.test(i)||isNaN(i)?i:parseInt(i,0)),k=j===$.html||g.data("url")===b?"":g.data("url"),l=j!==$.html&&"1"===g.data("loaded"),m=a.extend({},bb,{title:f.html(),content:j===$.html?g.html():"",contentUrl:k,contentMode:j,contentLoaded:l});c(d,m)})}function e(a){a.triggerHandler("canceled")}function f(a,b){return a.currentIndex-b}function g(b,c){var d=i(b);b.unbind(d).removeData("uid").removeData("options").removeData("state").removeData("steps").removeData("eventNamespace").find(".actions a").unbind(d),b.removeClass(c.clearFixCssClass+" vertical");var e=b.find(".content > *");e.removeData("loaded").removeData("mode").removeData("url"),e.removeAttr("id").removeAttr("role").removeAttr("tabindex").removeAttr("class").removeAttr("style")._removeAria("labelledby")._removeAria("hidden"),b.find(".content > [data-mode='async'],.content > [data-mode='iframe']").empty();var f=a('<{0} class="{1}"></{0}>'.format(b.get(0).tagName,b.attr("class"))),g=b._id();return null!=g&&""!==g&&f._id(g),f.html(b.find(".content").html()),b.after(f),b.remove(),f}function h(a,b){var c=a.find(".steps li").eq(b.currentIndex);a.triggerHandler("finishing",[b.currentIndex])?(c.addClass("done").removeClass("error"),a.triggerHandler("finished",[b.currentIndex])):c.addClass("error")}function i(a){var b=a.data("eventNamespace");return null==b&&(b="."+q(a),a.data("eventNamespace",b)),b}function j(a,b){var c=q(a);return a.find("#"+c+V+b)}function k(a,b){var c=q(a);return a.find("#"+c+W+b)}function l(a,b){var c=q(a);return a.find("#"+c+X+b)}function m(a){return a.data("options")}function n(a){return a.data("state")}function o(a){return a.data("steps")}function p(a,b){var c=o(a);return(0>b||b>=c.length)&&R(Y),c[b]}function q(a){var b=a.data("uid");return null==b&&(b=a._id(),null==b&&(b="steps-uid-".concat(T),a._id(b)),T++,a.data("uid",b)),b}function r(a,c){if(S("enumType",a),S("keyOrValue",c),"string"==typeof c){var d=a[c];return d===b&&R("The enum key '{0}' does not exist.",c),d}if("number"==typeof c){for(var e in a)if(a[e]===c)return c;R("Invalid enum value '{0}'.",c)}else R("Invalid key or value type.")}function s(a,b,c){return B(a,b,c,v(c,1))}function t(a,b,c){return B(a,b,c,f(c,1))}function u(a,b,c,d){if((0>d||d>=c.stepCount)&&R(Y),!(b.forceMoveForward&&d<c.currentIndex)){var e=c.currentIndex;return a.triggerHandler("stepChanging",[c.currentIndex,d])?(c.currentIndex=d,O(a,b,c),E(a,b,c,e),D(a,b,c),A(a,b,c),P(a,b,c,d,e,function(){a.triggerHandler("stepChanged",[d,e])})):a.find(".steps li").eq(e).addClass("error"),!0}}function v(a,b){return a.currentIndex+b}function w(b){var c=a.extend(!0,{},cb,b);return this.each(function(){var b=a(this),e={currentIndex:c.startIndex,currentStep:null,stepCount:0,transitionElement:null};b.data("options",c),b.data("state",e),b.data("steps",[]),d(b,c,e),J(b,c,e),G(b,c),c.autoFocus&&0===T&&j(b,c.startIndex).focus(),b.triggerHandler("init",[c.startIndex])})}function x(b,c,d,e,f){(0>e||e>d.stepCount)&&R(Y),f=a.extend({},bb,f),y(b,e,f),d.currentIndex!==d.stepCount&&d.currentIndex>=e&&(d.currentIndex++,O(b,c,d)),d.stepCount++;var g=b.find(".content"),h=a("<{0}>{1}</{0}>".format(c.headerTag,f.title)),i=a("<{0}></{0}>".format(c.bodyTag));return(null==f.contentMode||f.contentMode===$.html)&&i.html(f.content),0===e?g.prepend(i).prepend(h):k(b,e-1).after(i).after(h),K(b,d,i,e),N(b,c,d,h,e),F(b,c,d,e),e===d.currentIndex&&E(b,c,d),D(b,c,d),b}function y(a,b,c){o(a).splice(b,0,c)}function z(b){var c=a(this),d=m(c),e=n(c);if(d.suppressPaginationOnFocus&&c.find(":focus").is(":input"))return b.preventDefault(),!1;var f={left:37,right:39};b.keyCode===f.left?(b.preventDefault(),t(c,d,e)):b.keyCode===f.right&&(b.preventDefault(),s(c,d,e))}function A(b,c,d){if(d.stepCount>0){var e=d.currentIndex,f=p(b,e);if(!c.enableContentCache||!f.contentLoaded)switch(r($,f.contentMode)){case $.iframe:b.find(".content > .body").eq(d.currentIndex).empty().html('<iframe src="'+f.contentUrl+'" frameborder="0" scrolling="no" />').data("loaded","1");break;case $.async:var g=k(b,e)._aria("busy","true").empty().append(M(c.loadingTemplate,{text:c.labels.loading}));a.ajax({url:f.contentUrl,cache:!1}).done(function(a){g.empty().html(a)._aria("busy","false").data("loaded","1"),b.triggerHandler("contentLoaded",[e])})}}}function B(a,b,c,d){var e=c.currentIndex;if(d>=0&&d<c.stepCount&&!(b.forceMoveForward&&d<c.currentIndex)){var f=j(a,d),g=f.parent(),h=g.hasClass("disabled");return g._enableAria(),f.click(),e===c.currentIndex&&h?(g._enableAria(!1),!1):!0}return!1}function C(b){b.preventDefault();var c=a(this),d=c.parent().parent().parent().parent(),f=m(d),g=n(d),i=c.attr("href");switch(i.substring(i.lastIndexOf("#")+1)){case"cancel":e(d);break;case"Salvar":h(d,g);break;case"Próximo":s(d,f,g);break;case"Anterior":t(d,f,g)}}function D(a,b,c){if(b.enablePagination){var d=a.find(".actions a[href$='#Salvar']").parent(),e=a.find(".actions a[href$='#Próximo']").parent();if(!b.forceMoveForward){var f=a.find(".actions a[href$='#Anterior']").parent();f._enableAria(c.currentIndex>0)}b.enableFinishButton&&b.showFinishButtonAlways?(d._enableAria(c.stepCount>0),e._enableAria(c.stepCount>1&&c.stepCount>c.currentIndex+1)):(d._showAria(b.enableFinishButton&&c.stepCount===c.currentIndex+1),e._showAria(0===c.stepCount||c.stepCount>c.currentIndex+1)._enableAria(c.stepCount>c.currentIndex+1||!b.enableFinishButton))}}function E(b,c,d,e){var f=j(b,d.currentIndex),g=a('<span class="current-info audible">'+c.labels.current+" </span>"),h=b.find(".content > .title");if(null!=e){var i=j(b,e);i.parent().addClass("done").removeClass("error")._selectAria(!1),h.eq(e).removeClass("current").next(".body").removeClass("current"),g=i.find(".current-info"),f.focus()}f.prepend(g).parent()._selectAria().removeClass("done")._enableAria(),h.eq(d.currentIndex).addClass("current").next(".body").addClass("current")}function F(a,b,c,d){for(var e=q(a),f=d;f<c.stepCount;f++){var g=e+V+f,h=e+W+f,i=e+X+f,j=a.find(".title").eq(f)._id(i);a.find(".steps a").eq(f)._id(g)._aria("controls",h).attr("href","#"+i).html(M(b.titleTemplate,{index:f+1,title:j.html()})),a.find(".body").eq(f)._id(h)._aria("labelledby",i)}}function G(a,b){var c=i(a);a.bind("canceled"+c,b.onCanceled),a.bind("contentLoaded"+c,b.onContentLoaded),a.bind("finishing"+c,b.onFinishing),a.bind("finished"+c,b.onFinished),a.bind("init"+c,b.onInit),a.bind("stepChanging"+c,b.onStepChanging),a.bind("stepChanged"+c,b.onStepChanged),b.enableKeyNavigation&&a.bind("keyup"+c,z),a.find(".actions a").bind("click"+c,C)}function H(a,b,c,d){return 0>d||d>=c.stepCount||c.currentIndex===d?!1:(I(a,d),c.currentIndex>d&&(c.currentIndex--,O(a,b,c)),c.stepCount--,l(a,d).remove(),k(a,d).remove(),j(a,d).parent().remove(),0===d&&a.find(".steps li").first().addClass("first"),d===c.stepCount&&a.find(".steps li").eq(d).addClass("last"),F(a,b,c,d),D(a,b,c),!0)}function I(a,b){o(a).splice(b,1)}function J(b,c,d){var e='<{0} class="{1}">{2}</{0}>',f=r(_,c.stepsOrientation),g=f===_.vertical?" vertical":"",h=a(e.format(c.contentContainerTag,"content "+c.clearFixCssClass,b.html())),i=a(e.format(c.stepsContainerTag,"steps "+c.clearFixCssClass,'<ul role="tablist"></ul>')),j=h.children(c.headerTag),k=h.children(c.bodyTag);b.attr("role","application").empty().append(i).append(h).addClass(c.cssClass+" "+c.clearFixCssClass+g),k.each(function(c){K(b,d,a(this),c)}),j.each(function(e){N(b,c,d,a(this),e)}),E(b,c,d),L(b,c,d)}function K(a,b,c,d){var e=q(a),f=e+W+d,g=e+X+d;c._id(f).attr("role","tabpanel")._aria("labelledby",g).addClass("body")._showAria(b.currentIndex===d)}function L(a,b,c){if(b.enablePagination){var d='<{0} class="actions {1}"><ul role="menu" aria-label="{2}">{3}</ul></{0}>',e='<li><a href="#{0}" role="menuitem">{1}</a></li>',f="";b.forceMoveForward||(f+=e.format("Anterior",b.labels.previous)),f+=e.format("Próximo",b.labels.next),b.enableFinishButton&&(f+=e.format("Salvar",b.labels.finish)),b.enableCancelButton&&(f+=e.format("cancel",b.labels.cancel)),a.append(d.format(b.actionContainerTag,b.clearFixCssClass,b.labels.pagination,f)),D(a,b,c),A(a,b,c)}}function M(a,c){for(var d=a.match(/#([a-z]*)#/gi),e=0;e<d.length;e++){var f=d[e],g=f.substring(1,f.length-1);c[g]===b&&R("The key '{0}' does not exist in the substitute collection!",g),a=a.replace(f,c[g])}return a}function N(b,c,d,e,f){var g=q(b),h=g+V+f,j=g+W+f,k=g+X+f,l=b.find(".steps > ul"),m=M(c.titleTemplate,{index:f+1,title:e.html()}),n=a('<li role="tab"><a id="'+h+'" href="#'+k+'" aria-controls="'+j+'">'+m+"</a></li>");n._enableAria(c.enableAllSteps||d.currentIndex>f),d.currentIndex>f&&n.addClass("done"),e._id(k).attr("tabindex","-1").addClass("title"),0===f?l.prepend(n):l.find("li").eq(f-1).after(n),0===f&&l.find("li").removeClass("first").eq(f).addClass("first"),f===d.stepCount-1&&l.find("li").removeClass("last").eq(f).addClass("last"),n.children("a").bind("click"+i(b),Q)}function O(b,c,d){c.saveState&&a.cookie&&a.cookie(U+q(b),d.currentIndex)}function P(b,c,d,e,f,g){var h=b.find(".content > .body"),i=r(ab,c.transitionEffect),j=c.transitionEffectSpeed,k=h.eq(e),l=h.eq(f);switch(i){case ab.fade:case ab.slide:var m=i===ab.fade?"fadeOut":"slideUp",o=i===ab.fade?"fadeIn":"slideDown";d.transitionElement=k,l[m](j,function(){var b=a(this)._showAria(!1).parent().parent(),c=n(b);c.transitionElement&&(c.transitionElement[o](j,function(){a(this)._showAria()}).promise().done(g),c.transitionElement=null)});break;case ab.slideLeft:var p=l.outerWidth(!0),q=e>f?-p:p,s=e>f?p:-p;a.when(l.animate({left:q},j,function(){a(this)._showAria(!1)}),k.css("left",s+"px")._showAria().animate({left:0},j)).done(g);break;default:a.when(l._showAria(!1),k._showAria()).done(g)}}function Q(b){b.preventDefault();var c=a(this),d=c.parent().parent().parent().parent(),e=m(d),f=n(d),g=f.currentIndex;if(c.parent().is(":not(.disabled):not(.current)")){var h=c.attr("href"),i=parseInt(h.substring(h.lastIndexOf("-")+1),0);u(d,e,f,i)}return g===f.currentIndex?(j(d,g).focus(),!1):void 0}function R(a){throw arguments.length>1&&(a=a.format(Array.prototype.slice.call(arguments,1))),new Error(a)}function S(a,b){null==b&&R("The argument '{0}' is null or undefined.",a)}a.fn.extend({_aria:function(a,b){return this.attr("aria-"+a,b)},_removeAria:function(a){return this.removeAttr("aria-"+a)},_enableAria:function(a){return null==a||a?this.removeClass("disabled")._aria("disabled","false"):this.addClass("disabled")._aria("disabled","true")},_showAria:function(a){return null==a||a?this.show()._aria("hidden","false"):this.hide()._aria("hidden","true")},_selectAria:function(a){return null==a||a?this.addClass("current")._aria("selected","true"):this.removeClass("current")._aria("selected","false")},_id:function(a){return a?this.attr("id",a):this.attr("id")}}),String.prototype.format||(String.prototype.format=function(){for(var b=1===arguments.length&&a.isArray(arguments[0])?arguments[0]:arguments,c=this,d=0;d<b.length;d++){var e=new RegExp("\\{"+d+"\\}","gm");c=c.replace(e,b[d])}return c});var T=0,U="jQu3ry_5teps_St@te_",V="-t-",W="-p-",X="-h-",Y="Index out of range.",Z="One or more corresponding step {0} are missing.";a.fn.steps=function(b){return a.fn.steps[b]?a.fn.steps[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?void a.error("Method "+b+" does not exist on jQuery.steps"):w.apply(this,arguments)},a.fn.steps.add=function(a){var b=n(this);return x(this,m(this),b,b.stepCount,a)},a.fn.steps.destroy=function(){return g(this,m(this))},a.fn.steps.finish=function(){h(this,n(this))},a.fn.steps.getCurrentIndex=function(){return n(this).currentIndex},a.fn.steps.getCurrentStep=function(){return p(this,n(this).currentIndex)},a.fn.steps.getStep=function(a){return p(this,a)},a.fn.steps.insert=function(a,b){return x(this,m(this),n(this),a,b)},a.fn.steps.next=function(){return s(this,m(this),n(this))},a.fn.steps.previous=function(){return t(this,m(this),n(this))},a.fn.steps.remove=function(a){return H(this,m(this),n(this),a)},a.fn.steps.setStep=function(){throw new Error("Not yet implemented!")},a.fn.steps.skip=function(){throw new Error("Not yet implemented!")};var $=a.fn.steps.contentMode={html:0,iframe:1,async:2},_=a.fn.steps.stepsOrientation={horizontal:0,vertical:1},ab=a.fn.steps.transitionEffect={none:0,fade:1,slide:2,slideLeft:3},bb=a.fn.steps.stepModel={title:"",content:"",contentUrl:"",contentMode:$.html,contentLoaded:!1},cb=a.fn.steps.defaults={headerTag:"h1",bodyTag:"div",contentContainerTag:"div",actionContainerTag:"div",stepsContainerTag:"div",cssClass:"wizard",clearFixCssClass:"clearfix",stepsOrientation:_.horizontal,titleTemplate:'<span class="number">#index#.</span> #title#',loadingTemplate:'<span class="spinner"></span> #text#',autoFocus:!1,enableAllSteps:!1,enableKeyNavigation:!0,enablePagination:!0,suppressPaginationOnFocus:!0,enableContentCache:!0,enableCancelButton:!1,enableFinishButton:!0,preloadContent:!1,showFinishButtonAlways:!1,forceMoveForward:!1,saveState:!1,startIndex:0,transitionEffect:ab.none,transitionEffectSpeed:200,onStepChanging:function(){return!0},onStepChanged:function(){},onCanceled:function(){},onFinishing:function(){return!0},onFinished:function(){},onContentLoaded:function(){},onInit:function(){},labels:{cancel:"Cancel",current:"current step:",pagination:"Pagination",finish:"Salvar",next:"Próximo",previous:"Anterior",loading:"Loading ..."}}}(jQuery);
/*! jQuery Validation Plugin - v1.15.1 - 7/22/2016
 * http://jqueryvalidation.org/
 * Copyright (c) 2016 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return!c.settings.submitHandler||(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(null!=j&&null!=j.form){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){!this.form&&this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0]);var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)a[b]&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(a){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0]),!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type;return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=b.hasAttribute("contenteditable")?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);if("function"==typeof f.normalizer){if(i=f.normalizer.call(b,i),"string"!=typeof i)throw new TypeError("The normalizer should return a string value.");delete f.normalizer}for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(a){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",a),a instanceof TypeError&&(a.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),a}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{boolean:function(a){return a},string:function(b,c){return!!a(b,c.form).length},function:function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)})});
/*!
 * Jasny Bootstrap v3.1.2 (http://jasny.github.io/bootstrap)
 * Copyright 2012-2014 Arnold Daniels
 * Licensed under Apache-2.0 (https://github.com/jasny/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Jasny Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}void 0===a.support.transition&&(a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()}))}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.state=null,this.placement=null,this.options.recalc&&(this.calcClone(),a(window).on("resize",a.proxy(this.recalc,this))),this.options.autohide&&a(document).on("click",a.proxy(this.autohide,this)),this.options.toggle&&this.toggle(),this.options.disablescrolling&&(this.options.disableScrolling=this.options.disablescrolling,delete this.options.disablescrolling)};b.DEFAULTS={toggle:!0,placement:"auto",autohide:!0,recalc:!0,disableScrolling:!0},b.prototype.offset=function(){switch(this.placement){case"left":case"right":return this.$element.outerWidth();case"top":case"bottom":return this.$element.outerHeight()}},b.prototype.calcPlacement=function(){function b(a,b){if("auto"===e.css(b))return a;if("auto"===e.css(a))return b;var c=parseInt(e.css(a),10),d=parseInt(e.css(b),10);return c>d?b:a}if("auto"!==this.options.placement)return void(this.placement=this.options.placement);this.$element.hasClass("in")||this.$element.css("visiblity","hidden !important").addClass("in");var c=a(window).width()/this.$element.width(),d=a(window).height()/this.$element.height(),e=this.$element;this.placement=c>=d?b("left","right"):b("top","bottom"),"hidden !important"===this.$element.css("visibility")&&this.$element.removeClass("in").css("visiblity","")},b.prototype.opposite=function(a){switch(a){case"top":return"bottom";case"left":return"right";case"bottom":return"top";case"right":return"left"}},b.prototype.getCanvasElements=function(){var b=this.options.canvas?a(this.options.canvas):this.$element,c=b.find("*").filter(function(){return"fixed"===a(this).css("position")}).not(this.options.exclude);return b.add(c)},b.prototype.slide=function(b,c,d){if(!a.support.transition){var e={};return e[this.placement]="+="+c,b.animate(e,350,d)}var f=this.placement,g=this.opposite(f);b.each(function(){"auto"!==a(this).css(f)&&a(this).css(f,(parseInt(a(this).css(f),10)||0)+c),"auto"!==a(this).css(g)&&a(this).css(g,(parseInt(a(this).css(g),10)||0)-c)}),this.$element.one(a.support.transition.end,d).emulateTransitionEnd(350)},b.prototype.disableScrolling=function(){var b=a("body").width(),c="padding-"+this.opposite(this.placement);if(void 0===a("body").data("offcanvas-style")&&a("body").data("offcanvas-style",a("body").attr("style")),a("body").css("overflow","hidden"),a("body").width()>b){var d=parseInt(a("body").css(c),10)+a("body").width()-b;setTimeout(function(){a("body").css(c,d)},1)}},b.prototype.show=function(){if(!this.state){var b=a.Event("show.bs.offcanvas");if(this.$element.trigger(b),!b.isDefaultPrevented()){this.state="slide-in",this.calcPlacement();var c=this.getCanvasElements(),d=this.placement,e=this.opposite(d),f=this.offset();-1!==c.index(this.$element)&&(a(this.$element).data("offcanvas-style",a(this.$element).attr("style")||""),this.$element.css(d,-1*f),this.$element.css(d)),c.addClass("canvas-sliding").each(function(){void 0===a(this).data("offcanvas-style")&&a(this).data("offcanvas-style",a(this).attr("style")||""),"static"===a(this).css("position")&&a(this).css("position","relative"),"auto"!==a(this).css(d)&&"0px"!==a(this).css(d)||"auto"!==a(this).css(e)&&"0px"!==a(this).css(e)||a(this).css(d,0)}),this.options.disableScrolling&&this.disableScrolling();var g=function(){"slide-in"==this.state&&(this.state="slid",c.removeClass("canvas-sliding").addClass("canvas-slid"),this.$element.trigger("shown.bs.offcanvas"))};setTimeout(a.proxy(function(){this.$element.addClass("in"),this.slide(c,f,a.proxy(g,this))},this),1)}}},b.prototype.hide=function(){if("slid"===this.state){var b=a.Event("hide.bs.offcanvas");if(this.$element.trigger(b),!b.isDefaultPrevented()){this.state="slide-out";var c=a(".canvas-slid"),d=(this.placement,-1*this.offset()),e=function(){"slide-out"==this.state&&(this.state=null,this.placement=null,this.$element.removeClass("in"),c.removeClass("canvas-sliding"),c.add(this.$element).add("body").each(function(){a(this).attr("style",a(this).data("offcanvas-style")).removeData("offcanvas-style")}),this.$element.trigger("hidden.bs.offcanvas"))};c.removeClass("canvas-slid").addClass("canvas-sliding"),setTimeout(a.proxy(function(){this.slide(c,d,a.proxy(e,this))},this),1)}}},b.prototype.toggle=function(){"slide-in"!==this.state&&"slide-out"!==this.state&&this["slid"===this.state?"hide":"show"]()},b.prototype.calcClone=function(){this.$calcClone=this.$element.clone().html("").addClass("offcanvas-clone").removeClass("in").appendTo(a("body"))},b.prototype.recalc=function(){if("none"!==this.$calcClone.css("display")&&("slid"===this.state||"slide-in"===this.state)){this.state=null,this.placement=null;var b=this.getCanvasElements();this.$element.removeClass("in"),b.removeClass("canvas-slid"),b.add(this.$element).add("body").each(function(){a(this).attr("style",a(this).data("offcanvas-style")).removeData("offcanvas-style")})}},b.prototype.autohide=function(b){0===a(b.target).closest(this.$element).length&&this.hide()};var c=a.fn.offcanvas;a.fn.offcanvas=function(c){return this.each(function(){var d=a(this),e=d.data("bs.offcanvas"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.offcanvas",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.offcanvas.Constructor=b,a.fn.offcanvas.noConflict=function(){return a.fn.offcanvas=c,this},a(document).on("click.bs.offcanvas.data-api","[data-toggle=offcanvas]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.offcanvas"),h=g?"toggle":d.data();b.stopPropagation(),g?g.toggle():f.offcanvas(h)})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.$element.on("click.bs.rowlink","td:not(.rowlink-skip)",a.proxy(this.click,this))};b.DEFAULTS={target:"a"},b.prototype.click=function(b){var c=a(b.currentTarget).closest("tr").find(this.options.target)[0];if(a(b.target)[0]!==c)if(b.preventDefault(),c.click)c.click();else if(document.createEvent){var d=document.createEvent("MouseEvents");d.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),c.dispatchEvent(d)}};var c=a.fn.rowlink;a.fn.rowlink=function(c){return this.each(function(){var d=a(this),e=d.data("rowlink");e||d.data("rowlink",e=new b(this,c))})},a.fn.rowlink.Constructor=b,a.fn.rowlink.noConflict=function(){return a.fn.rowlink=c,this},a(document).on("click.bs.rowlink.data-api",'[data-link="row"]',function(b){if(0===a(b.target).closest(".rowlink-skip").length){var c=a(this);c.data("rowlink")||(c.rowlink(c.data()),a(b.target).trigger("click.bs.rowlink"))}})}(window.jQuery),+function(a){"use strict";var b=void 0!==window.orientation,c=navigator.userAgent.toLowerCase().indexOf("android")>-1,d="Microsoft Internet Explorer"==window.navigator.appName,e=function(b,d){c||(this.$element=a(b),this.options=a.extend({},e.DEFAULTS,d),this.mask=String(this.options.mask),this.init(),this.listen(),this.checkVal())};e.DEFAULTS={mask:"",placeholder:"_",definitions:{9:"[0-9]",a:"[A-Za-z]","?":"[A-Za-z0-9]","*":"."}},e.prototype.init=function(){var b=this.options.definitions,c=this.mask.length;this.tests=[],this.partialPosition=this.mask.length,this.firstNonMaskPos=null,a.each(this.mask.split(""),a.proxy(function(a,d){"?"==d?(c--,this.partialPosition=a):b[d]?(this.tests.push(new RegExp(b[d])),null===this.firstNonMaskPos&&(this.firstNonMaskPos=this.tests.length-1)):this.tests.push(null)},this)),this.buffer=a.map(this.mask.split(""),a.proxy(function(a){return"?"!=a?b[a]?this.options.placeholder:a:void 0},this)),this.focusText=this.$element.val(),this.$element.data("rawMaskFn",a.proxy(function(){return a.map(this.buffer,function(a,b){return this.tests[b]&&a!=this.options.placeholder?a:null}).join("")},this))},e.prototype.listen=function(){if(!this.$element.attr("readonly")){var b=(d?"paste":"input")+".mask";this.$element.on("unmask.bs.inputmask",a.proxy(this.unmask,this)).on("focus.bs.inputmask",a.proxy(this.focusEvent,this)).on("blur.bs.inputmask",a.proxy(this.blurEvent,this)).on("keydown.bs.inputmask",a.proxy(this.keydownEvent,this)).on("keypress.bs.inputmask",a.proxy(this.keypressEvent,this)).on(b,a.proxy(this.pasteEvent,this))}},e.prototype.caret=function(a,b){if(0!==this.$element.length){if("number"==typeof a)return b="number"==typeof b?b:a,this.$element.each(function(){if(this.setSelectionRange)this.setSelectionRange(a,b);else if(this.createTextRange){var c=this.createTextRange();c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select()}});if(this.$element[0].setSelectionRange)a=this.$element[0].selectionStart,b=this.$element[0].selectionEnd;else if(document.selection&&document.selection.createRange){var c=document.selection.createRange();a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length}return{begin:a,end:b}}},e.prototype.seekNext=function(a){for(var b=this.mask.length;++a<=b&&!this.tests[a];);return a},e.prototype.seekPrev=function(a){for(;--a>=0&&!this.tests[a];);return a},e.prototype.shiftL=function(a,b){var c=this.mask.length;if(!(0>a)){for(var d=a,e=this.seekNext(b);c>d;d++)if(this.tests[d]){if(!(c>e&&this.tests[d].test(this.buffer[e])))break;this.buffer[d]=this.buffer[e],this.buffer[e]=this.options.placeholder,e=this.seekNext(e)}this.writeBuffer(),this.caret(Math.max(this.firstNonMaskPos,a))}},e.prototype.shiftR=function(a){for(var b=this.mask.length,c=a,d=this.options.placeholder;b>c;c++)if(this.tests[c]){var e=this.seekNext(c),f=this.buffer[c];if(this.buffer[c]=d,!(b>e&&this.tests[e].test(f)))break;d=f}},e.prototype.unmask=function(){this.$element.unbind(".mask").removeData("inputmask")},e.prototype.focusEvent=function(){this.focusText=this.$element.val();var a=this.mask.length,b=this.checkVal();this.writeBuffer();var c=this,d=function(){b==a?c.caret(0,b):c.caret(b)};d(),setTimeout(d,50)},e.prototype.blurEvent=function(){this.checkVal(),this.$element.val()!==this.focusText&&this.$element.trigger("change")},e.prototype.keydownEvent=function(a){var c=a.which;if(8==c||46==c||b&&127==c){var d=this.caret(),e=d.begin,f=d.end;return f-e===0&&(e=46!=c?this.seekPrev(e):f=this.seekNext(e-1),f=46==c?this.seekNext(f):f),this.clearBuffer(e,f),this.shiftL(e,f-1),!1}return 27==c?(this.$element.val(this.focusText),this.caret(0,this.checkVal()),!1):void 0},e.prototype.keypressEvent=function(a){var b=this.mask.length,c=a.which,d=this.caret();if(a.ctrlKey||a.altKey||a.metaKey||32>c)return!0;if(c){d.end-d.begin!==0&&(this.clearBuffer(d.begin,d.end),this.shiftL(d.begin,d.end-1));var e=this.seekNext(d.begin-1);if(b>e){var f=String.fromCharCode(c);if(this.tests[e].test(f)){this.shiftR(e),this.buffer[e]=f,this.writeBuffer();var g=this.seekNext(e);this.caret(g)}}return!1}},e.prototype.pasteEvent=function(){var a=this;setTimeout(function(){a.caret(a.checkVal(!0))},0)},e.prototype.clearBuffer=function(a,b){for(var c=this.mask.length,d=a;b>d&&c>d;d++)this.tests[d]&&(this.buffer[d]=this.options.placeholder)},e.prototype.writeBuffer=function(){return this.$element.val(this.buffer.join("")).val()},e.prototype.checkVal=function(a){for(var b=this.mask.length,c=this.$element.val(),d=-1,e=0,f=0;b>e;e++)if(this.tests[e]){for(this.buffer[e]=this.options.placeholder;f++<c.length;){var g=c.charAt(f-1);if(this.tests[e].test(g)){this.buffer[e]=g,d=e;break}}if(f>c.length)break}else this.buffer[e]==c.charAt(f)&&e!=this.partialPosition&&(f++,d=e);return!a&&d+1<this.partialPosition?(this.$element.val(""),this.clearBuffer(0,b)):(a||d+1>=this.partialPosition)&&(this.writeBuffer(),a||this.$element.val(this.$element.val().substring(0,d+1))),this.partialPosition?e:this.firstNonMaskPos};var f=a.fn.inputmask;a.fn.inputmask=function(b){return this.each(function(){var c=a(this),d=c.data("inputmask");d||c.data("inputmask",d=new e(this,b))})},a.fn.inputmask.Constructor=e,a.fn.inputmask.noConflict=function(){return a.fn.inputmask=f,this},a(document).on("focus.bs.inputmask.data-api","[data-mask]",function(){var b=a(this);b.data("inputmask")||b.inputmask(b.data())})}(window.jQuery),+function(a){"use strict";var b="Microsoft Internet Explorer"==window.navigator.appName,c=function(b,c){if(this.$element=a(b),this.$input=this.$element.find(":file"),0!==this.$input.length){this.name=this.$input.attr("name")||c.name,this.$hidden=this.$element.find('input[type=hidden][name="'+this.name+'"]'),0===this.$hidden.length&&(this.$hidden=a('<input type="hidden">').insertBefore(this.$input)),this.$preview=this.$element.find(".fileinput-preview");var d=this.$preview.css("height");"inline"!==this.$preview.css("display")&&"0px"!==d&&"none"!==d&&this.$preview.css("line-height",d),this.original={exists:this.$element.hasClass("fileinput-exists"),preview:this.$preview.html(),hiddenVal:this.$hidden.val()},this.listen()}};c.prototype.listen=function(){this.$input.on("change.bs.fileinput",a.proxy(this.change,this)),a(this.$input[0].form).on("reset.bs.fileinput",a.proxy(this.reset,this)),this.$element.find('[data-trigger="fileinput"]').on("click.bs.fileinput",a.proxy(this.trigger,this)),this.$element.find('[data-dismiss="fileinput"]').on("click.bs.fileinput",a.proxy(this.clear,this))},c.prototype.change=function(b){var c=void 0===b.target.files?b.target&&b.target.value?[{name:b.target.value.replace(/^.+\\/,"")}]:[]:b.target.files;if(b.stopPropagation(),0===c.length)return void this.clear();this.$hidden.val(""),this.$hidden.attr("name",""),this.$input.attr("name",this.name);var d=c[0];if(this.$preview.length>0&&("undefined"!=typeof d.type?d.type.match(/^image\/(gif|png|jpeg)$/):d.name.match(/\.(gif|png|jpe?g)$/i))&&"undefined"!=typeof FileReader){var e=new FileReader,f=this.$preview,g=this.$element;e.onload=function(b){var e=a("<img>");e[0].src=b.target.result,c[0].result=b.target.result,g.find(".fileinput-filename").text(d.name),"none"!=f.css("max-height")&&e.css("max-height",parseInt(f.css("max-height"),10)-parseInt(f.css("padding-top"),10)-parseInt(f.css("padding-bottom"),10)-parseInt(f.css("border-top"),10)-parseInt(f.css("border-bottom"),10)),f.html(e),g.addClass("fileinput-exists").removeClass("fileinput-new"),g.trigger("change.bs.fileinput",c)},e.readAsDataURL(d)}else this.$element.find(".fileinput-filename").text(d.name),this.$preview.text(d.name),this.$element.addClass("fileinput-exists").removeClass("fileinput-new"),this.$element.trigger("change.bs.fileinput")},c.prototype.clear=function(a){if(a&&a.preventDefault(),this.$hidden.val(""),this.$hidden.attr("name",this.name),this.$input.attr("name",""),b){var c=this.$input.clone(!0);this.$input.after(c),this.$input.remove(),this.$input=c}else this.$input.val("");this.$preview.html(""),this.$element.find(".fileinput-filename").text(""),this.$element.addClass("fileinput-new").removeClass("fileinput-exists"),void 0!==a&&(this.$input.trigger("change"),this.$element.trigger("clear.bs.fileinput"))},c.prototype.reset=function(){this.clear(),this.$hidden.val(this.original.hiddenVal),this.$preview.html(this.original.preview),this.$element.find(".fileinput-filename").text(""),this.original.exists?this.$element.addClass("fileinput-exists").removeClass("fileinput-new"):this.$element.addClass("fileinput-new").removeClass("fileinput-exists"),this.$element.trigger("reset.bs.fileinput")},c.prototype.trigger=function(a){this.$input.trigger("click"),a.preventDefault()};var d=a.fn.fileinput;a.fn.fileinput=function(b){return this.each(function(){var d=a(this),e=d.data("fileinput");e||d.data("fileinput",e=new c(this,b)),"string"==typeof b&&e[b]()})},a.fn.fileinput.Constructor=c,a.fn.fileinput.noConflict=function(){return a.fn.fileinput=d,this},a(document).on("click.fileinput.data-api",'[data-provides="fileinput"]',function(b){var c=a(this);if(!c.data("fileinput")){c.fileinput(c.data());var d=a(b.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');d.length>0&&(b.preventDefault(),d.trigger("click.bs.fileinput"))}})}(window.jQuery);