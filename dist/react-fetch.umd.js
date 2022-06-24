(function(d,t){typeof exports=="object"&&typeof module!="undefined"?t(exports,require("react"),require("idb-keyval")):typeof define=="function"&&define.amd?define(["exports","react","idb-keyval"],t):(d=typeof globalThis!="undefined"?globalThis:d||self,t(d["react-fetch"]={},d.React,d.idbKeyval))})(this,function(d,t,c){"use strict";var Q=Object.defineProperty,M=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var N=(d,t,c)=>t in d?Q(d,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):d[t]=c,b=(d,t)=>{for(var c in t||(t={}))O.call(t,c)&&N(d,c,t[c]);if(g)for(var c of g(t))A.call(t,c)&&N(d,c,t[c]);return d},W=(d,t)=>M(d,D(t));const I="dmFyIHA9T2JqZWN0LmRlZmluZVByb3BlcnR5LEM9T2JqZWN0LmRlZmluZVByb3BlcnRpZXM7dmFyIFQ9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM7dmFyIGg9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sczt2YXIgbT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LE09T2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTt2YXIgbD0oZixhLG4pPT5hIGluIGY/cChmLGEse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm59KTpmW2FdPW4sdT0oZixhKT0+e2Zvcih2YXIgbiBpbiBhfHwoYT17fSkpbS5jYWxsKGEsbikmJmwoZixuLGFbbl0pO2lmKGgpZm9yKHZhciBuIG9mIGgoYSkpTS5jYWxsKGEsbikmJmwoZixuLGFbbl0pO3JldHVybiBmfSxBPShmLGEpPT5DKGYsVChhKSk7KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGY9dD0+dHlwZW9mIHQ9PSJvYmplY3QiJiYhQXJyYXkuaXNBcnJheSh0KSYmdCE9PW51bGwsYT0odCxyLHM9e30pPT4oT2JqZWN0LmtleXModCkuZm9yRWFjaChlPT57bGV0IG89cj9yKyIuIitlOmU7Zih0W2VdKT9hKHRbZV0sbyxzKTpzW29dPUFycmF5LmlzQXJyYXkodFtlXSk/dFtlXS5zb3J0KCk6dFtlXX0pLE9iamVjdC5lbnRyaWVzKHMpLnNvcnQoKSksbj10PT50LmZsYXRNYXAocj0+ZihyKT9hKHIpOltyXSkuc29ydCgpLGQ9dD0+e3ZhciByLHM7cmV0dXJuKHM9KHI9dD09bnVsbD92b2lkIDA6dC5tZXRob2QpPT1udWxsP3ZvaWQgMDpyLnRvVXBwZXJDYXNlKCkpIT1udWxsP3M6IkdFVCJ9LGc9KHQscixzKT0+e2xldCBlPUFycmF5LmlzQXJyYXkodCk/ImFycmF5Ijp0eXBlb2YgdCxvPUFycmF5LmlzQXJyYXkocik/ImFycmF5Ijp0eXBlb2YgcjtyZXR1cm4gZSE9PW8/ITE6ZSE9PSJvYmplY3QiJiZlIT09ImFycmF5Ij9lPT09bzpzJiZlPT09Im9iamVjdCI/cy5tYXAoYz0+dFtjXT09PXJbY10pLmV2ZXJ5KGM9PmMpOihlPT09ImFycmF5IiYmKHQ9bih0KSxyPW4ocikpLCFzJiZlPT09Im9iamVjdCImJih0PWEodCkscj1hKHIpKSxKU09OLnN0cmluZ2lmeSh0KT09PUpTT04uc3RyaW5naWZ5KHIpKX07c2VsZi5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIix0PT57Y29uc3R7dHlwZTpyfT10LmRhdGE7bGV0IHM9bmV3IEFib3J0Q29udHJvbGxlcixlPXM9PW51bGw/dm9pZCAwOnMuc2lnbmFsO2lmKHI9PT0iY2FuY2VsIiYmKHM9PW51bGx8fHMuYWJvcnQoKSkscj09PSJmZXRjaCIpe2NvbnN0e3VybDpvLG9wdGlvbnM6YyxleGlzdGluZ0RhdGE6d309dC5kYXRhO2ZldGNoKG8sYz9BKHUoe30sYykse3NpZ25hbDplfSk6e3NpZ25hbDplfSkudGhlbihpPT57aWYoIWkub2t8fGkuc3RhdHVzPT09NDA0KXRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke2kuc3RhdHVzfWApO2lmKGkuc3RhdHVzPT09NDAzKXRocm93IG5ldyBFcnJvcigiVW5hdXRob3JpemVkISIpO3JldHVybiBpLmpzb24oKX0pLnRoZW4oaT0+e2xldCBFPWQoYykseT1nKHcsaSk7c2VsZi5wb3N0TWVzc2FnZSh7dHlwZTp5PyJDQUNIRUQiOkUsZGF0YToheSYmaX0pfSkuY2F0Y2goaT0+e3NlbGYucG9zdE1lc3NhZ2Uoe3R5cGU6aS5tZXNzYWdlfHwiVW5rbm93biBlcnJvciJ9KX0pfX0pfSkoKTsK",K=typeof window!="undefined"&&window.Blob&&new Blob([atob(I)],{type:"text/javascript;charset=utf-8"});function V(){const e=K&&(window.URL||window.webkitURL).createObjectURL(K);try{return e?new Worker(e,{}):new Worker("data:application/javascript;base64,"+I,{type:"module"})}finally{e&&(window.URL||window.webkitURL).revokeObjectURL(e)}}const P="usestore-db",E="usestore-db",J=e=>{const{persistData:l,storeName:u}=b({persistData:!0,storeName:E},e),i=t.useRef();return t.useEffect(()=>(i.current=c.createStore(P,u),()=>{!l&&c.clear(i.current),i.current=void 0}),[]),{__dangerouslyNukeAllStores:()=>{indexedDB.deleteDatabase(P)},del:n=>c.del(n,i.current),get:n=>c.get(n,i.current),getMany:n=>c.getMany(n,i.current),set:(n,s)=>c.set(n,s,i.current),setMany:n=>c.setMany(n,i.current),update:(n,s)=>c.update(n,s,i.current)}};function L(e,l){switch(l.type){case"pre-load":return W(b({},e),{data:l.data});case"data":return W(b({},e),{data:l.data,loading:!1,error:void 0});case"error":return W(b({},e),{error:l.error,loading:!1});case"loading":return W(b({},e),{loading:l.loading});default:return e}}const z=24*60*60*1e3;function X(e){e==null||e.postMessage({type:"cancel"}),e==null||e.terminate(),e=void 0}const F=(e,l)=>l?e+l<Date.now():!0,f=e=>typeof e=="object"&&!Array.isArray(e)&&e!==null,w=e=>{var l,u;return(u=(l=e==null?void 0:e.method)==null?void 0:l.toUpperCase())!=null?u:"GET"};function x(){const{del:e,get:l,set:u,update:i}=J(),[n,s]=t.useReducer(L,U),r=t.useRef(),R=async({url:m,fetchOptions:G,maxAge:Y=z})=>{let a=r.current;s({type:"loading",loading:!0});let T=w(G);T==="DELETE"&&e(m.toString()),T==="GET"&&l(m.toString()).then(o=>{if(!o)throw new Error("no value found in db");F(Y,o==null?void 0:o.timestamp)?e(m.toString()):s({type:"pre-load",data:o==null?void 0:o.data})}).catch(()=>{s({type:"pre-load",data:void 0})}),a==null||a.addEventListener("message",({data:{type:o,data:y}})=>{if(o==="DELETE"||o==="CACHED")s({type:"loading",loading:!1});else if(o==="GET"){s({type:"data",data:y});let h={timestamp:Date.now(),maxAge:Y,data:y};u(m.toString(),h).then(()=>{console.log("saved data")}).catch(()=>{console.error("couldn't access indexedDB to save data")})}else o==="PUT"||o==="POST"?i(m.toString(),p=>{let h=Date.now(),S=f(y)&&f(p==null?void 0:p.data)?b(b({},y),p.data):y;return s({type:"data",data:S}),{timestamp:h,maxAge:Y,data:S}}).then(()=>{console.log("updated data")}).catch(()=>{s({type:"loading",loading:!1}),console.error("save to indexedDB failed")}):s({type:"error",error:new Error(o)})}),a==null||a.postMessage({type:"fetch",url:m,fetchOptions:G,existingData:n.data})};return t.useEffect(()=>(r.current=new V,()=>{X(r.current)}),[]),b({fetchWorker:R},n)}const U={data:void 0,error:void 0,loading:!1,update:!0},k="dmFyIG09T2JqZWN0LmRlZmluZVByb3BlcnR5LE89T2JqZWN0LmRlZmluZVByb3BlcnRpZXM7dmFyIFM9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM7dmFyIGQ9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sczt2YXIgdj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LE09T2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTt2YXIgZz0oaSxhLG4pPT5hIGluIGk/bShpLGEse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm59KTppW2FdPW4saD0oaSxhKT0+e2Zvcih2YXIgbiBpbiBhfHwoYT17fSkpdi5jYWxsKGEsbikmJmcoaSxuLGFbbl0pO2lmKGQpZm9yKHZhciBuIG9mIGQoYSkpTS5jYWxsKGEsbikmJmcoaSxuLGFbbl0pO3JldHVybiBpfSxwPShpLGEpPT5PKGksUyhhKSk7KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGk9YXN5bmMoe2ZuOnQsdmFsaWRhdGU6ZSxpbnRlcnZhbDpzLG1heEF0dGVtcHRzOnIsYXR0ZW1wdHM6Yz0wfSk9Pnthc3luYyBmdW5jdGlvbiBmKHUseSl7dHJ5e2NvbnN0IGw9YXdhaXQgdCgpO2lmKGMrKyxlKGwpKXJldHVybiB1KGwpO2lmKHImJmM9PT1yKXJldHVybiB5KG5ldyBFcnJvcigiRXhjZWVkZWQgbWF4IGF0dGVtcHRzIikpO2F3YWl0IHNldFRpbWVvdXQoZixzLHUseSl9Y2F0Y2gobCl7Y29uc29sZS5lcnJvcihgcG9sbGluZyBFcnJvcjogJHsobD09bnVsbD92b2lkIDA6bC5tZXNzYWdlKXx8ImNvbm5lY3Rpb24gZmFpbGVkIn1gKX19cmV0dXJuIG5ldyBQcm9taXNlKGYpfSxhPXQ9PnR5cGVvZiB0PT0ib2JqZWN0IiYmIUFycmF5LmlzQXJyYXkodCkmJnQhPT1udWxsLG49KHQsZSxzPXt9KT0+KE9iamVjdC5rZXlzKHQpLmZvckVhY2gocj0+e2xldCBjPWU/ZSsiLiIrcjpyO2EodFtyXSk/bih0W3JdLGMscyk6c1tjXT1BcnJheS5pc0FycmF5KHRbcl0pP3Rbcl0uc29ydCgpOnRbcl19KSxPYmplY3QuZW50cmllcyhzKS5zb3J0KCkpLEE9dD0+dC5mbGF0TWFwKGU9PmEoZSk/bihlKTpbZV0pLnNvcnQoKSx3PSh0LGUscyk9PntsZXQgcj1BcnJheS5pc0FycmF5KHQpPyJhcnJheSI6dHlwZW9mIHQsYz1BcnJheS5pc0FycmF5KGUpPyJhcnJheSI6dHlwZW9mIGU7cmV0dXJuIHIhPT1jPyExOnIhPT0ib2JqZWN0IiYmciE9PSJhcnJheSI/cj09PWM6cyYmcj09PSJvYmplY3QiP3MubWFwKGY9PnRbZl09PT1lW2ZdKS5ldmVyeShmPT5mKToocj09PSJhcnJheSImJih0PUEodCksZT1BKGUpKSwhcyYmcj09PSJvYmplY3QiJiYodD1uKHQpLGU9bihlKSksSlNPTi5zdHJpbmdpZnkodCk9PT1KU09OLnN0cmluZ2lmeShlKSl9O3NlbGYuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsdD0+e2NvbnN0e3R5cGU6ZX09dC5kYXRhO2xldCBzPW5ldyBBYm9ydENvbnRyb2xsZXIscj1zPT1udWxsP3ZvaWQgMDpzLnNpZ25hbDtpZihlPT09ImNhbmNlbCImJihzPT1udWxsfHxzLmFib3J0KCkpLGU9PT0icG9sbCIpe2NvbnN0e3VybDpjLGZldGNoT3B0aW9uczpmLGludGVydmFsOnUsbWF4QXR0ZW1wdHM6eSxjdXJyZW50SlNPTjpsLGNvbXBhcmVLZXlzOkV9PXQuZGF0YTtpKHtmbjooKT0+ZmV0Y2goYyxmP3AoaCh7fSxmKSx7c2lnbmFsOnJ9KTp7c2lnbmFsOnJ9KS50aGVuKG89PntpZighby5va3x8by5zdGF0dXM9PT00MDQpdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7by5zdGF0dXN9YCk7aWYoby5zdGF0dXM9PT00MDMpdGhyb3cgbmV3IEVycm9yKCJVbmF1dGhvcml6ZWQhIik7cmV0dXJuIG8uanNvbigpfSksaW50ZXJ2YWw6dSxtYXhBdHRlbXB0czp5LHZhbGlkYXRlOm89PiF3KGwsbyxFKX0pLnRoZW4obz0+e3NlbGYucG9zdE1lc3NhZ2Uoe3R5cGU6InN1Y2Nlc3MiLGRhdGE6b30pLHM9dm9pZCAwfSkuY2F0Y2gobz0+e3NlbGYucG9zdE1lc3NhZ2Uoe3R5cGU6by5tZXNzYWdlfHwiVW5rbm93biBlcnJvciJ9KX0pfX0pfSkoKTsK",B=typeof window!="undefined"&&window.Blob&&new Blob([atob(k)],{type:"text/javascript;charset=utf-8"});function v(){const e=B&&(window.URL||window.webkitURL).createObjectURL(B);try{return e?new Worker(e,{}):new Worker("data:application/javascript;base64,"+k,{type:"module"})}finally{e&&(window.URL||window.webkitURL).revokeObjectURL(e)}}function j(){const{del:e,get:l,set:u}=J(),[i,n]=t.useReducer(L,C);let r=t.useRef(new v).current;const R=async({url:m,fetchOptions:G,interval:Y,maxAttempts:a,currentJSON:T,compareKeys:o})=>{var p,h,S;if(w(G)!=="GET")return n({type:"error",error:new Error("method must be GET to poll")});let y={};try{let Z=await l(m.toString());F((p=Z.maxAge)!=null?p:0,(h=Z.timestamp)!=null?h:0)&&e(m.toString()).catch(H=>{console.error(H)}),y=(S=Z.data)!=null?S:{}}catch(Z){console.error(Z)}r.postMessage({type:"poll",url:m,fetchOptions:G,interval:Y,maxAttempts:a,currentJSON:T,compareKeys:o}),r.addEventListener("message",({data:{data:Z,type:H}})=>{})};return t.useEffect(()=>(window||(n({type:"loading",loading:!1}),n({type:"error",error:new Error("window is not defined")}),X(r)),()=>{X(r)}),[window]),b({pollWorker:R},i)}const C={data:void 0,error:void 0,loading:!1,update:!0};d.useFetch=x,d.usePolling=j,d.useStore=J,Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
