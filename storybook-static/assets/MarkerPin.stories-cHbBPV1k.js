import{c as C,S as E,i as P,f as v,s as R,a as j,e as L,q as _,B as b,b as n,d,w as m,u as k,j as h,v as l}from"./index-CCgjxTXL.js";function O(c){j(c,"svelte-848652",':host{display:block}.pin.svelte-848652{width:30px;height:30px;border-radius:50% 50% 50% 0;position:relative;transform:rotate(-45deg);left:50%;top:50%}.pin.svelte-848652::before{content:"";width:24px;height:24px;margin:3px 0 0 3px;position:absolute;background:#fff;border-radius:50%}.icon.svelte-848652{position:absolute;width:20px;height:20px;fill:#000000;top:0.3rem;left:0.3rem;transform:rotate(45deg);text-align:center}')}function x(c){let e,o;return{c(){e=l("svg"),o=l("path"),n(o,"d","m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z"),n(e,"class","icon svelte-848652"),n(e,"viewBox","0 -960 960 960")},m(s,t){d(s,e,t),m(e,o)},d(s){s&&h(e)}}}function N(c){let e,o;return{c(){e=l("svg"),o=l("path"),n(o,"d","M300-96v-389q-47-12-77.5-50.1T192-624v-240h72v240h36v-240h72v240h36v-240h72v240q0 50.8-30.5 88.9Q419-497 372-485v389h-72Zm396 0v-336H576v-240q0-79.68 56.16-135.84T768-864v768h-72Z"),n(e,"class","icon svelte-848652"),n(e,"viewBox","0 -960 960 960")},m(s,t){d(s,e,t),m(e,o)},d(s){s&&h(e)}}}function Q(c){let e,o;return{c(){e=l("svg"),o=l("path"),n(o,"d","M263.79-96Q234-96 213-117.21t-21-51Q192-198 213.21-219t51-21Q294-240 315-218.79t21 51Q336-138 314.79-117t-51 21Zm432 0Q666-96 645-117.21t-21-51Q624-198 645.21-219t51-21Q726-240 747-218.79t21 51Q768-138 746.79-117t-51 21ZM222-768h570q14 0 20.5 11t1.5 23L702.63-476.14Q694-456 676.5-444T637-432H317l-42 72h493v72H276q-43 0-63.5-36.15-20.5-36.16.5-71.85l52-90-131-306H48v-72h133l41 96Z"),n(e,"class","icon svelte-848652"),n(e,"viewBox","0 -960 960 960")},m(s,t){d(s,e,t),m(e,o)},d(s){s&&h(e)}}}function z(c){let e,o,s,t=c[1]==="close"&&x(),a=c[1]==="restaurant"&&N(),r=c[1]==="shopping_cart"&&Q();return{c(){e=L("div"),t&&t.c(),o=_(),a&&a.c(),s=_(),r&&r.c(),b(e,"background-color",c[0]),n(e,"class","pin svelte-848652")},m(i,g){d(i,e,g),t&&t.m(e,null),m(e,o),a&&a.m(e,null),m(e,s),r&&r.m(e,null)},p(i,[g]){i[1]==="close"?t||(t=x(),t.c(),t.m(e,o)):t&&(t.d(1),t=null),i[1]==="restaurant"?a||(a=N(),a.c(),a.m(e,s)):a&&(a.d(1),a=null),i[1]==="shopping_cart"?r||(r=Q(),r.c(),r.m(e,null)):r&&(r.d(1),r=null),g&1&&b(e,"background-color",i[0])},i:k,o:k,d(i){i&&h(e),t&&t.d(),a&&a.d(),r&&r.d()}}}function A(c,e,o){let{color:s}=e,{iconName:t}=e;return c.$$set=a=>{"color"in a&&o(0,s=a.color),"iconName"in a&&o(1,t=a.iconName)},[s,t]}class D extends E{constructor(e){super(),P(this,e,A,z,R,{color:0,iconName:1},O)}get color(){return this.$$.ctx[0]}set color(e){this.$$set({color:e}),v()}get iconName(){return this.$$.ctx[1]}set iconName(e){this.$$set({iconName:e}),v()}}customElements.define("khao-map-marker-pin",C(D,{color:{},iconName:{}},[],[],!0));const G={title:"maps/MarkerPin",component:"khao-map-marker-pin",tags:["autodocs"],argTypes:{color:{control:"color"},iconName:{control:{type:"select"},options:["close","restaurant","shopping_cart"]}}},p={args:{color:"#ff9900",iconName:"restaurant"}},f={args:{color:"#249b57",iconName:"shopping_cart"}},u={args:{color:"#cccccc",iconName:"close"}};var q,w,S;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    color: "#ff9900",
    iconName: "restaurant"
  }
}`,...(S=(w=p.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var Z,y,M;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    color: "#249b57",
    iconName: "shopping_cart"
  }
}`,...(M=(y=f.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var B,H,T;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    color: "#cccccc",
    iconName: "close"
  }
}`,...(T=(H=u.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};const I=["Restaurant","Shop","Closed"];export{u as Closed,p as Restaurant,f as Shop,I as __namedExportsOrder,G as default};
