/*! For license information please see 8550.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[8550],{8550:(e,t,n)=>{n.r(t),n.d(t,{calcite_notice:()=>f});var o=n(9113),i=n(4189),s=n(7146),a=n(8545),c=n(3213),l=n(8065),r=n(1992),d=n(3041),h=n(344);n(8220);const g="actions-end",f=class{constructor(e){(0,o.r)(this,e),this.calciteNoticeBeforeClose=(0,o.c)(this,"calciteNoticeBeforeClose",6),this.calciteNoticeBeforeOpen=(0,o.c)(this,"calciteNoticeBeforeOpen",6),this.calciteNoticeClose=(0,o.c)(this,"calciteNoticeClose",6),this.calciteNoticeOpen=(0,o.c)(this,"calciteNoticeOpen",6),this.setTransitionEl=e=>{this.transitionEl=e},this.close=()=>{this.open=!1},this.openTransitionProp="opacity",this.open=!1,this.kind="brand",this.closable=!1,this.icon=void 0,this.iconFlipRtl=!1,this.scale="m",this.width="auto",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}openHandler(){(0,d.o)(this)}onMessagesChange(){}updateRequestedIcon(){this.requestedIcon=(0,s.h)(r.K,this.icon,this.kind)}connectedCallback(){(0,i.c)(this),(0,c.c)(this),(0,l.c)(this)}disconnectedCallback(){(0,i.d)(this),(0,c.d)(this),(0,l.d)(this)}async componentWillLoad(){(0,a.s)(this),this.requestedIcon=(0,s.h)(r.K,this.icon,this.kind),await(0,l.s)(this),this.open&&(0,d.o)(this)}componentDidLoad(){(0,a.a)(this)}render(){const{el:e}=this,t=(0,o.h)("button",{"aria-label":this.messages.close,class:"notice-close",onClick:this.close,ref:e=>this.closeButton=e},(0,o.h)("calcite-icon",{icon:"x",scale:(0,h.g)(this.scale)})),n=(0,s.e)(e,g);return(0,o.h)("div",{class:"container",ref:this.setTransitionEl},this.requestedIcon?(0,o.h)("div",{class:"notice-icon"},(0,o.h)("calcite-icon",{flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:(0,h.g)(this.scale)})):null,(0,o.h)("div",{class:"notice-content"},(0,o.h)("slot",{name:"title"}),(0,o.h)("slot",{name:"message"}),(0,o.h)("slot",{name:"link"})),n?(0,o.h)("div",{class:"actions-end"},(0,o.h)("slot",{name:g})):null,this.closable?t:null)}async setFocus(){await(0,a.c)(this);const e=this.el.querySelector("calcite-link");if(this.closeButton||e)return e?e.setFocus():void(this.closeButton&&this.closeButton.focus())}onBeforeClose(){this.calciteNoticeBeforeClose.emit()}onBeforeOpen(){this.calciteNoticeBeforeOpen.emit()}onClose(){this.calciteNoticeClose.emit()}onOpen(){this.calciteNoticeOpen.emit()}effectiveLocaleChange(){(0,l.u)(this,this.effectiveLocale)}static get assetsDirs(){return["assets"]}get el(){return(0,o.g)(this)}static get watchers(){return{open:["openHandler"],messageOverrides:["onMessagesChange"],icon:["updateRequestedIcon"],kind:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}};f.style=":host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{margin-inline:auto;display:none;max-inline-size:100%;align-items:center;inline-size:var(--calcite-notice-width)}.container{pointer-events:none;margin-block:0px;box-sizing:border-box;display:none;inline-size:100%;background-color:var(--calcite-color-foreground-1);opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;max-block-size:0;text-align:start;border-inline-start:0px solid;box-shadow:0 0 0 0 transparent}.notice-close{outline-color:transparent}.notice-close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite--color-brand)));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host{display:flex}:host([open]) .container{pointer-events:auto;display:flex;max-block-size:100%;align-items:center;border-width:2px;opacity:1;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0px;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){margin:0px;display:inline;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2);margin-inline-end:var(--calcite-notice-spacing-token-small)}.notice-content{box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;display:flex;min-inline-size:0px;flex-direction:column;overflow-wrap:break-word;flex:1 1 0;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:0 var(--calcite-notice-spacing-token-small)}.notice-content:first-of-type:not(:only-child){padding-inline-start:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large)}.notice-icon{display:flex;align-items:center;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto}.notice-close{display:flex;cursor:pointer;align-items:center;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-color-text-3);outline:2px solid transparent;outline-offset:2px;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}.notice-close:active{background-color:var(--calcite-color-foreground-3)}.actions-end{display:flex;align-self:stretch}:host([kind=brand]) .container{border-color:var(--calcite-color-brand)}:host([kind=brand]) .container .notice-icon{color:var(--calcite-color-brand)}:host([kind=info]) .container{border-color:var(--calcite-color-status-info)}:host([kind=info]) .container .notice-icon{color:var(--calcite-color-status-info)}:host([kind=danger]) .container{border-color:var(--calcite-color-status-danger)}:host([kind=danger]) .container .notice-icon{color:var(--calcite-color-status-danger)}:host([kind=success]) .container{border-color:var(--calcite-color-status-success)}:host([kind=success]) .container .notice-icon{color:var(--calcite-color-status-success)}:host([kind=warning]) .container{border-color:var(--calcite-color-status-warning)}:host([kind=warning]) .container .notice-icon{color:var(--calcite-color-status-warning)}:host([hidden]){display:none}[hidden]{display:none}"},344:(e,t,n)=>{function o(e){return"l"===e?"m":"s"}async function i(e){await(function(e){return"function"==typeof e.componentOnReady}(e)?e.componentOnReady():new Promise((e=>requestAnimationFrame((()=>e())))))}n.d(t,{c:()=>i,g:()=>o})},4189:(e,t,n)=>{n.d(t,{c:()=>l,d:()=>r});var o=n(9113),i=n(8773);const s=new Set;let a;const c={childList:!0};function l(e){a||(a=(0,i.c)("mutation",d)),a.observe(e.el,c)}function r(e){s.delete(e.el),d(a.takeRecords()),a.disconnect();for(const[e]of s.entries())a.observe(e,c)}function d(e){e.forEach((({target:e})=>{(0,o.f)(e)}))}},8545:(e,t,n)=>{n.d(t,{a:()=>c,b:()=>l,c:()=>r,s:()=>a});var o=n(9113);const i=new WeakMap,s=new WeakMap;function a(e){s.set(e,new Promise((t=>i.set(e,t))))}function c(e){i.get(e)()}function l(e){return s.get(e)}async function r(e){return await l(e),(0,o.f)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},3041:(e,t,n)=>{n.d(t,{o:()=>a});var o=n(9113);function i(e){return"opened"in e?e.opened:e.open}function s(e,t=!1){(t?e[e.transitionProp]:i(e))?e.onBeforeOpen():e.onBeforeClose(),(t?e[e.transitionProp]:i(e))?e.onOpen():e.onClose()}function a(e,t=!1){(0,o.e)((()=>{if(e.transitionEl){const{transitionDuration:n,transitionProperty:o}=getComputedStyle(e.transitionEl),a=n.split(","),c=a[o.split(",").indexOf(e.openTransitionProp)]??a[0];if("0s"===c)return void s(e,t);const l=setTimeout((()=>{e.transitionEl.removeEventListener("transitionstart",r),e.transitionEl.removeEventListener("transitionend",d),e.transitionEl.removeEventListener("transitioncancel",d),s(e,t)}),1e3*parseFloat(c));function r(n){n.propertyName===e.openTransitionProp&&n.target===e.transitionEl&&(clearTimeout(l),e.transitionEl.removeEventListener("transitionstart",r),(t?e[e.transitionProp]:i(e))?e.onBeforeOpen():e.onBeforeClose())}function d(n){n.propertyName===e.openTransitionProp&&n.target===e.transitionEl&&((t?e[e.transitionProp]:i(e))?e.onOpen():e.onClose(),e.transitionEl.removeEventListener("transitionend",d),e.transitionEl.removeEventListener("transitioncancel",d))}e.transitionEl.addEventListener("transitionstart",r),e.transitionEl.addEventListener("transitionend",d),e.transitionEl.addEventListener("transitioncancel",d)}}))}},1992:(e,t,n)=>{var o;n.d(t,{K:()=>o}),function(e){e.brand="lightbulb",e.danger="exclamationMarkTriangle",e.info="information",e.success="checkCircle",e.warning="exclamationMarkTriangle"}(o||(o={}))},8065:(e,t,n)=>{n.d(t,{c:()=>h,d:()=>g,s:()=>l,u:()=>d});var o=n(9113),i=n(3213);const s={};function a(){throw new Error("could not fetch component message bundle")}function c(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function l(e){e.defaultMessages=await r(e,e.effectiveLocale),c(e)}async function r(e,t){const{el:n}=e,c=n.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const n=`${t}_${e}`;return s[n]||(s[n]=fetch((0,o.a)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||a(),e.json()))).catch((()=>a()))),s[n]}((0,i.g)(t,"t9n"),c)}async function d(e,t){e.defaultMessages=await r(e,t),c(e)}function h(e){e.onMessagesChange=f}function g(e){e.onMessagesChange=void 0}function f(){c(this)}}}]);