(window.webpackJsonp=window.webpackJsonp||[]).push([[14,4,5],{309:function(t,e,r){var content=r(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("789f296a",content,!0,{sourceMap:!1})},310:function(t,e,r){t.exports=r.p+"img/logo.42daf42.png"},312:function(t,e,r){"use strict";r.r(e);var n={name:"Card",props:{src:{type:String},alt:{type:String},title:{type:String},href:{type:String},date:{type:String}}},l=(r(313),r(20)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex flex-col items-center justify-between col-span-4 space-y-4"},[e("div",{staticClass:"card grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"},[e("div",{staticClass:"col-span-3 row-span-4 p-1 m-1"},[e("router-link",{attrs:{to:t.href}},[e("img",{staticClass:"rounded-t-xl object-contain h-56 w-full",attrs:{src:t.src,alt:t.alt}})])],1),t._v(" "),e("div",{staticClass:"col-span-3 row-span-1"},[t.date?e("header",{staticClass:"flex items-center justify-between leading-tight p-2 md:p-4"},[e("h1",{staticClass:"text-lg"},[e("router-link",{staticClass:"no-underline hover:underline text-black",attrs:{to:t.href}},[t._v("\n                  "+t._s(t.title)+"\n                ")])],1),t._v(" "),e("p",{staticClass:"text-grey-darker text-sm"},[t._v(t._s(t.date))])]):e("header",{staticClass:"flex items-center justify-between leading-tight p-2 md:p-4"},[e("h1",{staticClass:"text-lg mx-auto"},[e("router-link",{staticClass:"no-underline hover:underline text-black",attrs:{to:t.href}},[t._v("\n                  "+t._s(t.title)+"\n                ")])],1)])])])])}),[],!1,null,"4b320c31",null);e.default=component.exports},313:function(t,e,r){"use strict";r(309)},314:function(t,e,r){var n=r(25)(!1);n.push([t.i,"",""]),t.exports=n},317:function(t,e,r){"use strict";r.r(e);var n={name:"Card-Deck",props:["projects"]},l=r(20),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0"},t._l(t.projects,(function(t){return e("card",{key:t.id,attrs:{src:t.src,alt:t.alt,title:t.title,href:t.href,date:t.date}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:r(312).default})},319:function(t,e,r){t.exports=r.p+"img/Ruby.44711fb.png"},320:function(t,e,r){t.exports=r.p+"img/photo_5922795017292855414_y.6e30070.jpg"},321:function(t,e,r){t.exports=r.p+"img/logo.473ce59.png"},322:function(t,e,r){t.exports=r.p+"img/maanhaan.03e9cef.png"},345:function(t,e,r){t.exports=r.p+"img/iPhone 13.0314d5c.png"},346:function(t,e,r){t.exports=r.p+"img/ProductPicture1.49119b0.png"},434:function(t,e,r){"use strict";r.r(e);var n=r(317),l={components:{Card:r(312).default,CardDeck:n.default},data:function(){return{projects:[{id:1,src:r(319),alt:"Game UI",title:"Game UI",href:"/projects/game-ui",date:""},{id:2,src:r(345),alt:"Mentor Madness",title:"Mentor Madness",href:"/projects/mentor-madness",date:""},{id:3,src:r(320),alt:"Menstruatie frustratie",title:"Menstruatie frustratie",href:"/projects/menstruatie-frustratie",date:""},{id:4,src:r(321),alt:"Hairpro",title:"Hairpro",href:"/projects/hairpro",date:""},{id:5,src:r(310),alt:"MifaunDesigns",title:"MifaunDesigns",href:"/projects/mifaundesigns",date:""},{id:6,src:r(346),alt:"StudyBudy",title:"StudyBuddy",href:"/projects/studybuddy",date:""},{id:7,src:r(322),alt:"SmartWalker",title:"SmartWalker",href:"/projects/smartwalker",date:""}]}}},o=r(20),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"contentContainer"},[e("section",{staticClass:"py-10 bg-white",attrs:{id:"projects","data-aos":"fade-up","data-aos-duration":"500"}},[e("div",{staticClass:"container max-w-6xl mx-auto"},[e("h2",{staticClass:"text-4xl font-bold tracking-tight text-center"},[t._v("\n        Projecten\n      ")]),t._v(" "),e("p",{staticClass:"mt-2 text-lg text-center text-gray-600"},[t._v("❤️")]),t._v(" "),e("card-deck",{attrs:{projects:t.projects}})],1)])])}),[],!1,null,"1e9ea4c0",null);e.default=component.exports;installComponents(component,{CardDeck:r(317).default})}}]);