(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{253:function(t,e,r){var content=r(260);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("68fce54f",content,!0,{sourceMap:!1})},254:function(t,e,r){t.exports=r.p+"img/logo.f4a5a9d.png"},255:function(t,e,r){t.exports=r.p+"img/logo.5abfa70.png"},256:function(t,e,r){"use strict";r.r(e);var n={name:"Card-Deck",props:["projects"]},l=r(12),component=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0"},this._l(this.projects,(function(t){return e("card",{key:t.id,attrs:{src:t.src,alt:t.alt,title:t.title,href:t.href,date:t.date}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:r(257).default})},257:function(t,e,r){"use strict";r.r(e);var n={name:"Card",props:{src:{type:String},alt:{type:String},title:{type:String},href:{type:String},date:{type:String}}},l=(r(259),r(12)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative flex flex-col items-center justify-between col-span-4 space-y-4"},[r("div",{staticClass:"card grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"},[r("div",{staticClass:"col-span-3 row-span-4 p-1 m-1"},[r("router-link",{attrs:{to:t.href}},[r("img",{staticClass:"rounded-t-xl object-contain h-56 w-full",attrs:{src:t.src,alt:t.alt}})])],1),t._v(" "),r("div",{staticClass:"col-span-3 row-span-1"},[t.date?r("header",{staticClass:"flex items-center justify-between leading-tight p-2 md:p-4"},[r("h1",{staticClass:"text-lg"},[r("router-link",{staticClass:"no-underline hover:underline text-black",attrs:{to:t.href}},[t._v("\n                  "+t._s(t.title)+"\n                ")])],1),t._v(" "),r("p",{staticClass:"text-grey-darker text-sm"},[t._v(t._s(t.date))])]):r("header",{staticClass:"flex items-center justify-between leading-tight p-2 md:p-4"},[r("h1",{staticClass:"text-lg mx-auto"},[r("router-link",{staticClass:"no-underline hover:underline text-black",attrs:{to:t.href}},[t._v("\n                  "+t._s(t.title)+"\n                ")])],1)])])])])}),[],!1,null,"4b320c31",null);e.default=component.exports},259:function(t,e,r){"use strict";r(253)},260:function(t,e,r){(e=r(19)(!1)).push([t.i,"",""]),t.exports=e},261:function(t,e,r){t.exports=r.p+"img/ProductPicture1.34c3a54.png"},262:function(t,e,r){t.exports=r.p+"img/maanhaan.eda9cee.png"},332:function(t,e,r){"use strict";r.r(e);var n=r(256),l={components:{Card:r(257).default,CardDeck:n.default},data:function(){return{projects:[{id:1,src:r(254),alt:"Hairpro",title:"Hairpro",href:"/projects/hairpro",date:""},{id:2,src:r(255),alt:"MifaunDesigns",title:"MifaunDesigns",href:"/projects/mifaundesigns",date:""},{id:3,src:r(261),alt:"StuddyBuddy",title:"StuddyBuddy",href:"/projects/studdybuddy",date:""},{id:4,src:r(262),alt:"SmartWalker",title:"SmartWalker",href:"/projects/smartwalker",date:""}]}}},c=r(12),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contentContainer"},[e("section",{staticClass:"py-10 bg-white",attrs:{id:"projects","data-aos":"fade-up","data-aos-duration":"500"}},[e("div",{staticClass:"container max-w-6xl mx-auto"},[e("h2",{staticClass:"text-4xl font-bold tracking-tight text-center"},[this._v("\n        Projecten\n      ")]),this._v(" "),e("p",{staticClass:"mt-2 text-lg text-center text-gray-600"},[this._v("❤️")]),this._v(" "),e("card-deck",{attrs:{projects:this.projects}})],1)])])}),[],!1,null,"fccfec02",null);e.default=component.exports;installComponents(component,{CardDeck:r(256).default})}}]);