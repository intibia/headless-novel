'use client'
var m=Object.defineProperty;var U=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var E=Object.prototype.hasOwnProperty;var I=(t,e)=>{for(var o in e)m(t,o,{get:e[o],enumerable:!0})},P=(t,e,o,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of b(e))!E.call(t,n)&&n!==o&&m(t,n,{get:()=>e[n],enumerable:!(a=U(e,n))||a.enumerable});return t};var x=t=>P(m({},"__esModule",{value:!0}),t);var D={};I(D,{UploadImagesPlugin:()=>g,handleImageUpload:()=>u,startImageUpload:()=>f});module.exports=x(D);var s=require("@tiptap/pm/state"),p=require("@tiptap/pm/view"),l=new s.PluginKey("upload-image"),g=()=>new s.Plugin({key:l,state:{init(){return p.DecorationSet.empty},apply(t,e){e=e.map(t.mapping,t.doc);let o=t.getMeta(this);if(o&&o.add){let{id:a,pos:n,src:r}=o.add,d=document.createElement("div");d.setAttribute("class","img-placeholder");let i=document.createElement("img");i.setAttribute("class","opacity-40 rounded-lg border border-stone-200"),i.src=r,d.appendChild(i);let c=p.Decoration.widget(n+1,d,{id:a});e=e.add(t.doc,[c])}else o&&o.remove&&(e=e.remove(e.find(null,null,a=>a.id==o.remove.id)));return e}},props:{decorations(t){return this.getState(t)}}});function A(t,e){let a=l.getState(t).find(null,null,n=>n.id==e);return a.length?a[0].from:null}function f(t,e,o){if(t.type.includes("image/")){if(t.size/1024/1024>20)return}else return;let a={},n=e.state.tr;n.selection.empty||n.deleteSelection();let r=new FileReader;r.readAsDataURL(t),r.onload=()=>{n.setMeta(l,{add:{id:a,pos:o,src:r.result}}),e.dispatch(n)},u(t).then(d=>{let{schema:i}=e.state,c=A(e.state,a);if(c==null)return;let h=typeof d=="object"?r.result:d,y=i.nodes.image.create({src:h}),S=e.state.tr.replaceWith(c,c,y).setMeta(l,{remove:{id:a}});e.dispatch(S)})}var u=t=>{};0&&(module.exports={UploadImagesPlugin,handleImageUpload,startImageUpload});