(function(e){function t(t){for(var r,c,s=t[0],o=t[1],i=t[2],m=0,p=[];m<s.length;m++)c=s[m],Object.prototype.hasOwnProperty.call(u,c)&&u[c]&&p.push(u[c][0]),u[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var o=n[s];0!==u[o]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},u={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=o;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),u=n.n(r);u.a},"0a26":function(e){e.exports=JSON.parse('[{"baseCurrency":"Euro","targetCurrency":"US Dollar","value":1.2897},{"baseCurrency":"Euro","targetCurrency":"Schweizer Franken","value":1.3135},{"baseCurrency":"Euro","targetCurrency":"Britisch Pfund","value":0.8631},{"baseCurrency":"US Dollar","targetCurrency":"JPY","value":109.62},{"baseCurrency":"US Dollar","targetCurrency":"Schweizer Franken","value":0.996},{"baseCurrency":"Britisch Pfund","targetCurrency":"CAD","value":1.7574}]')},"0f0f":function(e,t,n){"use strict";var r=n("433f"),u=n.n(r);u.a},"433f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{msg:"Currency Converter"}}),n("OutputMessage",{attrs:{outputData:e.getOutput}}),n("section",[n("InputRow",{attrs:{amount:e.getBaseAmount,itemList:e.getBaseCurrencyList,selectedItem:e.getBaseCurrency},on:{newInputValue:e.updateBaseAmount,newSelectedItem:e.updateBaseCurrency}}),n("InputRow",{attrs:{amount:e.getTargetAmount,itemList:e.getTargetCurrencyList,selectedItem:e.getTargetCurrency},on:{newInputValue:e.updateTargetAmount,newSelectedItem:e.updateTargetCurrency}})],1)],1)},a=[],c=n("5530"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.headerMsg))])])},o=[],i={CURRENCY_CONVERTER:"Currency Converter",EQUALS:"equals",NO_RATE_FOUND:"No exchange rate found for selected currency"},l=i,m={CURRENCY_CONVERTER:"Währungsrechner",EQUALS:"gleich",NO_RATE_FOUND:"Für die ausgewählte Währung wurde kein Wechselkurs gefunden"},p=m,f="de-DE",g="US Dollar",d="Schweizer Franken",y=function(e){switch(e){case"de-DE":return p;case"en-US":return l;default:return l}},v=y(f),C={name:"Header",props:{msg:String},data:function(){return{headerMsg:v.CURRENCY_CONVERTER}}},b=C,h=n("2877"),A=Object(h["a"])(b,s,o,!1,null,null,null),_=A.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.outputData.rate?n("OutputMessage",{attrs:{msgObj:e.outputData}}):n("InvalidInput",{attrs:{msg:"No exchange rate found for selected currency"}})],1)},w=[],E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v(e._s(e.errorMessage))])])},T=[],S={name:"InvalidInputMessage",props:{msg:String},data:function(){return{errorMessage:v.NO_RATE_FOUND}}},I=S,x=(n("0f0f"),Object(h["a"])(I,E,T,!1,null,"2f74a944",null)),R=x.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",[e._v(e._s(e.baseAmount)+" "+e._s(e.rate.baseCurrency)+" "+e._s(e.equals))]),n("h2",[e._v(e._s(e.targetAmount)+" "+e._s(e.rate.targetCurrency))])])},L=[],B={name:"OutputMessage",props:["msgObj"],data:function(){var e=this.msgObj,t=e.baseAmount,n=e.rate,r=e.targetAmount;return{baseAmount:t,equals:v.EQUALS,rate:n,targetAmount:r}}},N=B,k=(n("b560"),Object(h["a"])(N,j,L,!1,null,"cd19a1b4",null)),M=k.exports,D={name:"OutputRow",props:["outputData"],components:{InvalidInput:R,OutputMessage:M}},U=D,$=Object(h["a"])(U,O,w,!1,null,null,null),P=$.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inpur__row"},[n("InputElement",{attrs:{amount:e.amount},on:{inputValue:e.listenInputChange}}),n("SelectElement",{attrs:{itemList:e.itemList,selectedItem:e.selectedItem},on:{onSelectChange:e.listenSelectChange}})],1)},V=[],z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedAmount,expression:"selectedAmount"}],staticClass:"select__menu",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedAmount=t.target.multiple?n:n[0]}}},e._l(e.itemList,(function(t,r){return n("option",{key:r},[e._v(e._s(t))])})),0)])},J=[],Y={name:"SelectElement",props:["selectedItem","itemList"],computed:{selectedAmount:{get:function(){return this.selectedItem},set:function(e){this.$emit("onSelectChange",e)}}}},q=Y,H=(n("e116"),Object(h["a"])(q,z,J,!1,null,"68f80c46",null)),Q=H.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.computedAmount,expression:"computedAmount"}],staticClass:"input__style",attrs:{type:"number",min:"0"},domProps:{value:e.computedAmount},on:{input:function(t){t.target.composing||(e.computedAmount=t.target.value)}}})])},G=[],K={name:"InputElement",props:["amount"],computed:{computedAmount:{get:function(){return this.amount},set:function(e){this.$emit("inputValue",e)}}}},X=K,Z=(n("a96c"),Object(h["a"])(X,W,G,!1,null,"550e1f76",null)),ee=Z.exports,te={name:"InputRow",props:["amount","itemList","selectedItem"],components:{SelectElement:Q,InputElement:ee},methods:{listenInputChange:function(e){this.$emit("newInputValue",e)},listenSelectChange:function(e){this.$emit("newSelectedItem",e)}}},ne=te,re=(n("a8b2"),Object(h["a"])(ne,F,V,!1,null,null,null)),ue=re.exports,ae=n("2f62"),ce={name:"App",components:{Header:_,OutputMessage:P,InputRow:ue},computed:Object(c["a"])({},Object(ae["c"])(["getBaseAmount","getBaseCurrency","getBaseCurrencyList","getTargetAmount","getTargetCurrency","getTargetCurrencyList","getOutput"])),methods:Object(c["a"])({},Object(ae["b"])(["calculateCurrency"]),{updateBaseAmount:function(e){this.calculateCurrency({baseAmountInput:e})},updateTargetAmount:function(e){this.calculateCurrency({targetAmountInput:e})},updateBaseCurrency:function(e){this.calculateCurrency({selectedBaseCurrency:e})},updateTargetCurrency:function(e){this.calculateCurrency({selectedTargetCurrency:e})}}),beforeMount:function(){this.$store.dispatch("initializeState")}},se=ce,oe=(n("034f"),Object(h["a"])(se,u,a,!1,null,null,null)),ie=oe.exports,le={baseAmount:1,targetAmount:0,baseCurrency:g,targetCurrency:d,baseCurrencyList:[],targetCurrencyList:[],currencyRates:[],output:{}},me=le,pe={getBaseAmount:function(e){return e.baseAmount},getBaseCurrency:function(e){return e.baseCurrency},getBaseCurrencyList:function(e){return e.baseCurrencyList},getTargetAmount:function(e){return e.targetAmount},getTargetCurrency:function(e){return e.targetCurrency},getTargetCurrencyList:function(e){return e.targetCurrencyList},getOutput:function(e){return e.output}},fe=pe,ge={setBaseAmount:function(e,t){return e.baseAmount=t},setBaseCurrency:function(e,t){return e.baseCurrency=t},setBaseCurrencyList:function(e,t){return e.baseCurrencyList=t},setTargetAmount:function(e,t){return e.targetAmount=t},setTargetCurrency:function(e,t){return e.targetCurrency=t},setTargetCurrencyList:function(e,t){return e.targetCurrencyList=t},setCurrencyRate:function(e,t){return e.currencyRates=t},setOutput:function(e,t){return e.output=t}},de=ge,ye=(n("96cf"),n("1da1")),ve=(n("d3b7"),n("0a26")),Ce=function(){var e=Object(ye["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new Promise((function(e,t){ve?e(ve):t("Failed to fetch data!")})).catch((function(e){console.log(e)})),e.next=3,n;case 3:if(e.t1=t=e.sent,e.t0=null!==e.t1,!e.t0){e.next=7;break}e.t0=void 0!==t;case 7:if(!e.t0){e.next=11;break}e.t2=t,e.next=12;break;case 11:e.t2=[];case 12:return e.abrupt("return",e.t2);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=Ce,he=(n("d81d"),n("6062"),n("3ca3"),n("ddb0"),n("2909")),Ae=function(e,t){var n=e.map((function(e){return e[t]})),r=Object(he["a"])(new Set(n));return r},_e=Ae,Oe=(n("7db0"),n("b680"),function(e,t,n,r,u){var a,c,s,o=e.find((function(e){return e.baseCurrency===t&&e.targetCurrency===n}));u?a=((null!==(c=null===o||void 0===o?void 0:o.value)&&void 0!==c?c:0)*r).toFixed(2):a=((null!==(s=1/(null===o||void 0===o?void 0:o.value))&&void 0!==s?s:0)*r).toFixed(2);return{baseAmount:u?r:a,targetAmount:u?a:r,rate:o,value:a}}),we=Oe,Ee=function(){var e=Object(ye["a"])(regeneratorRuntime.mark((function e(t){var n,r,u,a,c,s,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,r=n.baseAmount,u=n.baseCurrency,a=n.targetCurrency,e.next=3,be();case 3:if(c=e.sent,0!==(null===c||void 0===c?void 0:c.length)){e.next=6;break}return e.abrupt("return");case 6:s=_e(c,"baseCurrency"),o=_e(c,"targetCurrency"),i=we(c,u,a,r,!0),t.commit("setCurrencyRate",c),t.commit("setBaseCurrencyList",s),t.commit("setTargetCurrencyList",o),t.commit("setTargetAmount",i.value),t.commit("setOutput",i);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Te=Ee,Se=function(e,t){var n,r=e.state,u=r.baseAmount,a=r.baseCurrency,c=r.targetCurrency,s=r.currencyRates,o=t.baseAmountInput,i=t.targetAmountInput,l=t.selectedBaseCurrency,m=t.selectedTargetCurrency;o&&(n=we(s,a,c,o,!0),e.commit("setBaseAmount",o),e.commit("setTargetAmount",n.value)),i&&(n=we(s,a,c,i,!1),e.commit("setTargetAmount",i),e.commit("setBaseAmount",n.value)),l&&(n=we(s,l,c,u,!0),e.commit("setBaseCurrency",l),e.commit("setTargetAmount",n.value)),m&&(n=we(s,a,m,u,!0),e.commit("setTargetCurrency",m),e.commit("setTargetAmount",n.value)),e.commit("setOutput",n)},Ie=Se,xe={initializeState:Te,calculateCurrency:Ie},Re=xe,je={state:me,getters:fe,mutations:de,actions:Re};r["a"].use(ae["a"]);var Le=new ae["a"].Store({modules:{currencyConverter:je}}),Be=Le;r["a"].config.productionTip=!1,new r["a"]({store:Be,render:function(e){return e(ie)}}).$mount("#app")},"605c":function(e,t,n){},"624a":function(e,t,n){},"7b0f":function(e,t,n){},"7ff0":function(e,t,n){},"85ec":function(e,t,n){},a8b2:function(e,t,n){"use strict";var r=n("7b0f"),u=n.n(r);u.a},a96c:function(e,t,n){"use strict";var r=n("605c"),u=n.n(r);u.a},b560:function(e,t,n){"use strict";var r=n("7ff0"),u=n.n(r);u.a},e116:function(e,t,n){"use strict";var r=n("624a"),u=n.n(r);u.a}});
//# sourceMappingURL=app.3395b9fb.js.map