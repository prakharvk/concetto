/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?- !*/
!function(n,e,o){function s(n,e){return typeof n===e}function t(){var n,e,o,t,a,r,l;for(var u in i)if(i.hasOwnProperty(u)){if(n=[],e=i[u],e.name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(o=0;o<e.options.aliases.length;o++)n.push(e.options.aliases[o].toLowerCase());for(t=s(e.fn,"function")?e.fn():e.fn,a=0;a<n.length;a++)r=n[a],l=r.split("."),1===l.length?Modernizr[l[0]]=t:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=t),f.push((t?"":"no-")+l.join("-"))}}var i=[],a={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,e){var o=this;setTimeout(function(){e(o[n])},0)},addTest:function(n,e,o){i.push({name:n,fn:e,options:o})},addAsyncTest:function(n){i.push({name:null,fn:n})}},Modernizr=function(){};Modernizr.prototype=a,Modernizr=new Modernizr;var f=[];t(),delete a.addTest,delete a.addAsyncTest;for(var r=0;r<Modernizr._q.length;r++)Modernizr._q[r]();n.Modernizr=Modernizr}(window,document);