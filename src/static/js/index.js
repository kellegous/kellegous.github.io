(function(){var J=function(){$(".note>.head").each(function(D,r){var k=$(r);k.data("width");k.data("height");k.width()})};$(window).on("resize",J);J();$("#sig").on("click",function(D){D.preventDefault();$("body,html").stop().animate({scrollTop:0},500)})})();
(function(){(function(){function J(g){function n(){try{N.doScroll("left")}catch(g){r.setTimeout(n,50);return}T("poll")}function T(n){if("readystatechange"!=n.type||"complete"==k.readyState)("load"==n.type?r:k)[z](q+n.type,T,!1),!u&&(u=!0)&&g.call(r,n.type||n)}var Y=k.addEventListener,u=!1,B=!0,y=Y?"addEventListener":"attachEvent",z=Y?"removeEventListener":"detachEvent",q=Y?"":"on";if("complete"==k.readyState)g.call(r,"lazy");else{if(k.createEventObject&&N.doScroll){try{B=!r.frameElement}catch(da){}B&&
n()}k[y](q+"DOMContentLoaded",T,!1);k[y](q+"readystatechange",T,!1);r[y](q+"load",T,!1)}}function D(){W&&J(function(){var g=O.length;ba(g?function(){for(var n=0;n<g;++n)(function(g){r.setTimeout(function(){r.exports[O[g]].apply(r,arguments)},0)})(n)}:void 0)})}for(var r=window,k=document,N=k.documentElement,P=k.head||k.getElementsByTagName("head")[0]||N,z="",F=k.getElementsByTagName("script"),u=F.length;0<=--u;){var Q=F[u],Z=Q.src.match(/^[^?#]*\/run_prettify\.js(\?[^#]*)?(?:#.*)?$/);if(Z){z=Z[1]||
"";Q.parentNode.removeChild(Q);break}}var W=!0,H=[],U=[],O=[];z.replace(/[?&]([^&=]+)=([^&]+)/g,function(g,n,k){k=decodeURIComponent(k);n=decodeURIComponent(n);"autorun"==n?W=!/^[0fn]/i.test(k):"lang"==n?H.push(k):"skin"==n?U.push(k):"callback"==n&&O.push(k)});u=0;for(z=H.length;u<z;++u)(function(){var g=k.createElement("script");g.onload=g.onerror=g.onreadystatechange=function(){!g||g.readyState&&!/loaded|complete/.test(g.readyState)||(g.onerror=g.onload=g.onreadystatechange=null,--V,V||r.setTimeout(D,
0),g.parentNode&&g.parentNode.removeChild(g),g=null)};g.type="text/javascript";g.src="https://cdn.rawgit.com/google/code-prettify/master/loader/lang-"+encodeURIComponent(H[u])+".js";P.insertBefore(g,P.firstChild)})(H[u]);for(var V=H.length,F=[],u=0,z=U.length;u<z;++u)F.push("https://cdn.rawgit.com/google/code-prettify/master/loader/skins/"+encodeURIComponent(U[u])+".css");F.push("https://cdn.rawgit.com/google/code-prettify/master/loader/prettify.css");(function(g){function n(r){if(r!==u){var z=k.createElement("link");
z.rel="stylesheet";z.type="text/css";r+1<u&&(z.error=z.onerror=function(){n(r+1)});z.href=g[r];P.appendChild(z)}}var u=g.length;n(0)})(F);var ba=function(){window.PR_SHOULD_USE_CONTINUATION=!0;var g;(function(){function k(a){function d(e){var b=e.charCodeAt(0);if(92!==b)return b;var a=e.charAt(1);return(b=ca[a])?b:"0"<=a&&"7">=a?parseInt(e.substring(1),8):"u"===a||"x"===a?parseInt(e.substring(2),16):e.charCodeAt(1)}function f(e){if(32>e)return(16>e?"\\x0":"\\x")+e.toString(16);e=String.fromCharCode(e);
return"\\"===e||"-"===e||"]"===e||"^"===e?"\\"+e:e}function b(e){var b=e.substring(1,e.length-1).match(/\\u[0-9A-Fa-f]{4}|\\x[0-9A-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\s\S]|-|[^-\\]/g);e=[];var a="^"===b[0],c=["["];a&&c.push("^");for(var a=a?1:0,h=b.length;a<h;++a){var l=b[a];if(/\\[bdsw]/i.test(l))c.push(l);else{var l=d(l),p;a+2<h&&"-"===b[a+1]?(p=d(b[a+2]),a+=2):p=l;e.push([l,p]);65>p||122<l||(65>p||90<l||e.push([Math.max(65,l)|32,Math.min(p,90)|32]),97>p||122<l||e.push([Math.max(97,l)&-33,
Math.min(p,122)&-33]))}}e.sort(function(e,a){return e[0]-a[0]||a[1]-e[1]});b=[];h=[];for(a=0;a<e.length;++a)l=e[a],l[0]<=h[1]+1?h[1]=Math.max(h[1],l[1]):b.push(h=l);for(a=0;a<b.length;++a)l=b[a],c.push(f(l[0])),l[1]>l[0]&&(l[1]+1>l[0]&&c.push("-"),c.push(f(l[1])));c.push("]");return c.join("")}function g(e){for(var a=e.source.match(/(?:\[(?:[^\x5C\x5D]|\\[\s\S])*\]|\\u[A-Fa-f0-9]{4}|\\x[A-Fa-f0-9]{2}|\\[0-9]+|\\[^ux0-9]|\(\?[:!=]|[\(\)\^]|[^\x5B\x5C\(\)\^]+)/g),c=a.length,d=[],h=0,l=0;h<c;++h){var p=
a[h];"("===p?++l:"\\"===p.charAt(0)&&(p=+p.substring(1))&&(p<=l?d[p]=-1:a[h]=f(p))}for(h=1;h<d.length;++h)-1===d[h]&&(d[h]=++n);for(l=h=0;h<c;++h)p=a[h],"("===p?(++l,d[l]||(a[h]="(?:")):"\\"===p.charAt(0)&&(p=+p.substring(1))&&p<=l&&(a[h]="\\"+d[p]);for(h=0;h<c;++h)"^"===a[h]&&"^"!==a[h+1]&&(a[h]="");if(e.ignoreCase&&I)for(h=0;h<c;++h)p=a[h],e=p.charAt(0),2<=p.length&&"["===e?a[h]=b(p):"\\"!==e&&(a[h]=p.replace(/[a-zA-Z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));
return a.join("")}for(var n=0,I=!1,m=!1,K=0,c=a.length;K<c;++K){var t=a[K];if(t.ignoreCase)m=!0;else if(/[a-z]/i.test(t.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){I=!0;m=!1;break}}for(var ca={b:8,t:9,n:10,v:11,f:12,r:13},x=[],K=0,c=a.length;K<c;++K){t=a[K];if(t.global||t.multiline)throw Error(""+t);x.push("(?:"+g(t)+")")}return new RegExp(x.join("|"),m?"gi":"g")}function r(a,d){function f(a){var c=a.nodeType;if(1==c){if(!b.test(a.className)){for(c=a.firstChild;c;c=c.nextSibling)f(c);
c=a.nodeName.toLowerCase();if("br"===c||"li"===c)g[m]="\n",I[m<<1]=k++,I[m++<<1|1]=a}}else if(3==c||4==c)c=a.nodeValue,c.length&&(c=d?c.replace(/\r\n?/g,"\n"):c.replace(/[ \t\r\n]+/g," "),g[m]=c,I[m<<1]=k,k+=c.length,I[m++<<1|1]=a)}var b=/(?:^|\s)nocode(?:\s|$)/,g=[],k=0,I=[],m=0;f(a);return{a:g.join("").replace(/\n$/,""),c:I}}function u(a,d,f,b,g){f&&(a={h:a,l:1,j:null,m:null,a:f,c:null,i:d,g:null},b(a),g.push.apply(g,a.g))}function z(a){for(var d=void 0,f=a.firstChild;f;f=f.nextSibling)var b=f.nodeType,
d=1===b?d?a:f:3===b?U.test(f.nodeValue)?a:d:d;return d===a?void 0:d}function B(a,d){function f(a){for(var m=a.i,k=a.h,c=[m,"pln"],t=0,n=a.a.match(g)||[],x={},e=0,r=n.length;e<r;++e){var E=n[e],w=x[E],h=void 0,l;if("string"===typeof w)l=!1;else{var p=b[E.charAt(0)];if(p)h=E.match(p[1]),w=p[0];else{for(l=0;l<q;++l)if(p=d[l],h=E.match(p[1])){w=p[0];break}h||(w="pln")}!(l=5<=w.length&&"lang-"===w.substring(0,5))||h&&"string"===typeof h[1]||(l=!1,w="src");l||(x[E]=w)}p=t;t+=E.length;if(l){l=h[1];var C=
E.indexOf(l),G=C+l.length;h[2]&&(G=E.length-h[2].length,C=G-l.length);w=w.substring(5);u(k,m+p,E.substring(0,C),f,c);u(k,m+p+C,l,D(w,l),c);u(k,m+p+G,E.substring(G),f,c)}else c.push(m+p,w)}a.g=c}var b={},g;(function(){for(var f=a.concat(d),m=[],q={},c=0,t=f.length;c<t;++c){var r=f[c],x=r[3];if(x)for(var e=x.length;0<=--e;)b[x.charAt(e)]=r;r=r[1];x=""+r;q.hasOwnProperty(x)||(m.push(r),q[x]=null)}m.push(/[\0-\uffff]/);g=k(m)})();var q=d.length;return f}function y(a){var d=[],f=[];a.tripleQuotedStrings?
d.push(["str",/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):a.multiLineStrings?d.push(["str",/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):d.push(["str",/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]);a.verbatimStrings&&f.push(["str",/^@\"(?:[^\"]|\"\")*(?:\"|$)/,
null]);var b=a.hashComments;b&&(a.cStyleComments?(1<b?d.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):d.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),f.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):d.push(["com",/^#[^\r\n]*/,null,"#"]));a.cStyleComments&&(f.push(["com",/^\/\/[^\r\n]*/,null]),f.push(["com",/^\/\*[\s\S]*?(?:\*\/|$)/,null]));if(b=a.regexLiterals){var g=
(b=1<b?"":"\n\r")?".":"[\\S\\s]";f.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+("/(?=[^/*"+b+"])(?:[^/\\x5B\\x5C"+b+"]|\\x5C"+g+"|\\x5B(?:[^\\x5C\\x5D"+b+"]|\\x5C"+g+")*(?:\\x5D|$))+/")+")")])}(b=a.types)&&f.push(["typ",b]);b=(""+a.keywords).replace(/^ | $/g,"");b.length&&f.push(["kwd",new RegExp("^(?:"+b.replace(/[\s,]+/g,
"|")+")\\b"),null]);d.push(["pln",/^\s+/,null," \r\n\t\u00a0"]);b="^.[^\\s\\w.$@'\"`/\\\\]*";a.regexLiterals&&(b+="(?!s*/)");f.push(["lit",/^@[a-z_$][a-z_$@0-9]*/i,null],["typ",/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],["pln",/^[a-z_$][a-z_$@0-9]*/i,null],["lit",/^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,null,"0123456789"],["pln",/^\\[\s\S]?/,null],["pun",new RegExp(b),null]);return B(d,f)}function F(a,d,f){function b(a){var c=a.nodeType;if(1==c&&!k.test(a.className))if("br"===
a.nodeName)g(a),a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)b(a);else if((3==c||4==c)&&f){var d=a.nodeValue,n=d.match(r);n&&(c=d.substring(0,n.index),a.nodeValue=c,(d=d.substring(n.index+n[0].length))&&a.parentNode.insertBefore(m.createTextNode(d),a.nextSibling),g(a),c||a.parentNode.removeChild(a))}}function g(a){function b(a,c){var d=c?a.cloneNode(!1):a,p=a.parentNode;if(p){var p=b(p,1),e=a.nextSibling;p.appendChild(d);for(var f=e;f;f=e)e=f.nextSibling,p.appendChild(f)}return d}
for(;!a.nextSibling;)if(a=a.parentNode,!a)return;a=b(a.nextSibling,0);for(var d;(d=a.parentNode)&&1===d.nodeType;)a=d;c.push(a)}for(var k=/(?:^|\s)nocode(?:\s|$)/,r=/\r\n?|\n/,m=a.ownerDocument,n=m.createElement("li");a.firstChild;)n.appendChild(a.firstChild);for(var c=[n],t=0;t<c.length;++t)b(c[t]);d===(d|0)&&c[0].setAttribute("value",d);var q=m.createElement("ol");q.className="linenums";d=Math.max(0,d-1|0)||0;for(var t=0,x=c.length;t<x;++t)n=c[t],n.className="L"+(t+d)%10,n.firstChild||n.appendChild(m.createTextNode("\u00a0")),
q.appendChild(n);a.appendChild(q)}function q(a,d){for(var f=d.length;0<=--f;){var b=d[f];X.hasOwnProperty(b)?R.console&&console.warn("cannot override language handler %s",b):X[b]=a}}function D(a,d){a&&X.hasOwnProperty(a)||(a=/^\s*</.test(d)?"default-markup":"default-code");return X[a]}function H(a){var d=a.j;try{var f=r(a.h,a.l),b=f.a;a.a=b;a.c=f.c;a.i=0;D(d,b)(a);var g=/\bMSIE\s(\d+)/.exec(navigator.userAgent),g=g&&8>=+g[1],d=/\n/g,n=a.a,k=n.length,f=0,m=a.c,q=m.length,b=0,c=a.g,t=c.length,u=0;c[t]=
k;var x,e;for(e=x=0;e<t;)c[e]!==c[e+2]?(c[x++]=c[e++],c[x++]=c[e++]):e+=2;t=x;for(e=x=0;e<t;){for(var z=c[e],y=c[e+1],w=e+2;w+2<=t&&c[w+1]===y;)w+=2;c[x++]=z;c[x++]=y;e=w}c.length=x;var h=a.h;a="";h&&(a=h.style.display,h.style.display="none");try{for(;b<q;){var l=m[b+2]||k,p=c[u+2]||k,w=Math.min(l,p),C=m[b+1],G;if(1!==C.nodeType&&(G=n.substring(f,w))){g&&(G=G.replace(d,"\r"));C.nodeValue=G;var aa=C.ownerDocument,v=aa.createElement("span");v.className=c[u+1];var B=C.parentNode;B.replaceChild(v,C);
v.appendChild(C);f<l&&(m[b+1]=C=aa.createTextNode(n.substring(w,l)),B.insertBefore(C,v.nextSibling))}f=w;f>=l&&(b+=2);f>=p&&(u+=2)}}finally{h&&(h.style.display=a)}}catch(A){R.console&&console.log(A&&A.stack||A)}}var R=window,L=["break,continue,do,else,for,if,return,while"],M=[[L,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],
S=[M,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],J=[M,"abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],N=[M,"abstract,as,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,group,implicit,in,interface,internal,into,is,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],
M=[M,"debugger,eval,export,function,get,instanceof,null,set,undefined,var,with,Infinity,NaN"],O=[L,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],P=[L,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],L=[L,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],Q=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
U=/\S/,V=y({keywords:[S,N,J,M,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",O,P,L],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),X={};q(V,["default-code"]);q(B([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",
/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),"default-markup htm html mxml xhtml xml xsl".split(" "));q(B([["pln",/^[\s]+/,null," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],
["pun",/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]);q(B([],[["atv",/^[\s\S]+/]]),["uq.val"]);q(y({keywords:S,hashComments:!0,cStyleComments:!0,types:Q}),"c cc cpp cxx cyc m".split(" "));q(y({keywords:"null,true,false"}),["json"]);q(y({keywords:N,hashComments:!0,cStyleComments:!0,
verbatimStrings:!0,types:Q}),["cs"]);q(y({keywords:J,cStyleComments:!0}),["java"]);q(y({keywords:L,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]);q(y({keywords:O,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]);q(y({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),
["perl","pl","pm"]);q(y({keywords:P,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]);q(y({keywords:M,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]);q(y({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);q(B([],[["str",/^[\s\S]+/]]),["regex"]);
var W=R.PR={createSimpleLexer:B,registerLangHandler:q,sourceDecorator:y,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:function(a,d,f){f=f||!1;d=d||null;var b=document.createElement("div");b.innerHTML="<pre>"+a+"</pre>";b=b.firstChild;f&&F(b,f,!0);H({j:d,m:f,h:b,l:1,a:null,i:null,c:null,g:null});return b.innerHTML},
prettyPrint:g=g=function(a,d){function f(){for(var b=R.PR_SHOULD_USE_CONTINUATION?c.now()+250:Infinity;t<n.length&&c.now()<b;t++){for(var d=n[t],k=h,q=d;q=q.previousSibling;){var m=q.nodeType,v=(7===m||8===m)&&q.nodeValue;if(v?!/^\??prettify\b/.test(v):3!==m||/\S/.test(q.nodeValue))break;if(v){k={};v.replace(/\b(\w+)=([\w:.%+-]+)/g,function(a,b,c){k[b]=c});break}}q=d.className;if((k!==h||u.test(q))&&!e.test(q)){m=!1;for(v=d.parentNode;v;v=v.parentNode)if(w.test(v.tagName)&&v.className&&u.test(v.className)){m=
!0;break}if(!m){d.className+=" prettyprinted";m=k.lang;if(!m){var m=q.match(r),D;!m&&(D=z(d))&&B.test(D.tagName)&&(m=D.className.match(r));m&&(m=m[1])}if(y.test(d.tagName))v=1;else var v=d.currentStyle,A=g.defaultView,v=(v=v?v.whiteSpace:A&&A.getComputedStyle?A.getComputedStyle(d,null).getPropertyValue("white-space"):0)&&"pre"===v.substring(0,3);A=k.linenums;(A="true"===A||+A)||(A=(A=q.match(/\blinenums\b(?::(\d+))?/))?A[1]&&A[1].length?+A[1]:!0:!1);A&&F(d,A,v);H({j:m,h:d,m:A,l:v,a:null,i:null,c:null,
g:null})}}}t<n.length?R.setTimeout(f,250):"function"===typeof a&&a()}for(var b=d||document.body,g=b.ownerDocument||document,b=[b.getElementsByTagName("pre"),b.getElementsByTagName("code"),b.getElementsByTagName("xmp")],n=[],k=0;k<b.length;++k)for(var m=0,q=b[k].length;m<q;++m)n.push(b[k][m]);var b=null,c=Date;c.now||(c={now:function(){return+new Date}});var t=0,r=/\blang(?:uage)?-([\w.]+)(?!\S)/,u=/\bprettyprint\b/,e=/\bprettyprinted\b/,y=/pre|xmp/i,B=/^code$/i,w=/^(?:pre|code|xmp)$/i,h={};f()}},
S=R.define;"function"===typeof S&&S.amd&&S("google-code-prettify",[],function(){return W})})();return g}();V||r.setTimeout(D,0)})()})();
