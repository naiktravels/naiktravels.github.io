"use strict";(self.webpackChunknaiktravelservice=self.webpackChunknaiktravelservice||[]).push([[764],{2968:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),n=a(4160),l=a(2091);var c=()=>{const{0:e,1:t}=(0,r.useState)(!1),a=[{name:"Home",path:"/",icon:l.xng},{name:"Destinations",path:"/destinations",icon:l.NqP},{name:"Packages",path:"/packages",icon:l.X2f},{name:"Gallery",path:"/gallery",icon:l.Dmm},{name:"About Us",path:"/about",icon:l.DAO},{name:"Contact",path:"/contact",icon:l.DNl}];return r.createElement("header",{className:"sticky top-0 z-50 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"},r.createElement("nav",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},r.createElement("div",{className:"flex items-center justify-between h-16"},r.createElement(n.rU,{to:"/",className:"flex-shrink-0"},r.createElement("img",{className:"h-14 w-full ",src:"/logo.png",alt:"Company Logo"})),r.createElement("div",{className:"hidden md:flex md:items-center md:justify-center md:flex-1"},r.createElement("div",{className:"flex items-baseline space-x-4"},a.map((e=>r.createElement(n.rU,{key:e.name,to:e.path,className:"text-white hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out flex items-center"},r.createElement(e.icon,{className:"mr-2"}),e.name))))),r.createElement("div",{className:"md:hidden"},r.createElement("button",{onClick:()=>t(!e),className:"inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"},r.createElement(l.Fm7,{className:"h-6 w-6"}))))),e&&r.createElement("div",{className:"md:hidden"},r.createElement("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3"},a.map((e=>r.createElement(n.rU,{key:e.name,to:e.path,className:"text-white hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out flex items-center"},r.createElement(e.icon,{className:"mr-2"}),e.name))))))};var s=()=>{const e=(new Date).getFullYear(),t=[{name:"Facebook",icon:l.tBk,url:"https://facebook.com"},{name:"Twitter",icon:l.fWC,url:"https://twitter.com"},{name:"Instagram",icon:l.Zf_,url:"https://instagram.com"},{name:"LinkedIn",icon:l.BUd,url:"https://linkedin.com"}];return r.createElement("footer",{className:"bg-gray-800 text-white py-10"},r.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},r.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8"},r.createElement("div",null,r.createElement("h3",{className:"text-lg font-semibold mb-4"},"About Us"),r.createElement("p",{className:"text-sm text-gray-300"},"We are passionate about providing unforgettable travel experiences. Our goal is to help you explore the world and create lasting memories.")),r.createElement("div",null,r.createElement("h3",{className:"text-lg font-semibold mb-4"},"Quick Links"),r.createElement("ul",{className:"text-sm space-y-2"},[{name:"Home",path:"/"},{name:"Destinations",path:"/destinations"},{name:"Packages",path:"/packages"},{name:"Gallery",path:"/gallery"},{name:"About Us",path:"/about"},{name:"Contact",path:"/contact"}].map((e=>r.createElement("li",{key:e.name},r.createElement(n.rU,{to:e.path,className:"text-gray-300 hover:text-white transition duration-300"},e.name)))))),r.createElement("div",null,r.createElement("h3",{className:"text-lg font-semibold mb-4"},"Contact Us"),r.createElement("address",{className:"text-sm text-gray-300 not-italic"},r.createElement("p",null,"123 Travel Street"),r.createElement("p",null,"City, Country, 12345"),r.createElement("p",{className:"mt-2"},"Phone: +1 (234) 567-8900"),r.createElement("p",null,"Email: info@travelcompany.com")))),r.createElement("div",{className:"mt-8 pt-8 border-t border-gray-700"},r.createElement("div",{className:"flex flex-col md:flex-row justify-between items-center"},r.createElement("p",{className:"text-sm text-gray-300"},"© ",e," Your Travel Company. All rights reserved."),r.createElement("div",{className:"flex space-x-4 mt-4 md:mt-0"},t.map((e=>r.createElement("a",{key:e.name,href:e.url,target:"_blank",rel:"noopener noreferrer",className:"text-gray-300 hover:text-white transition duration-300"},r.createElement(e.icon,{className:"h-5 w-5"}),r.createElement("span",{className:"sr-only"},e.name)))))))))};var i=e=>{let{children:t}=e;return r.createElement("div",{className:"flex flex-col min-h-screen max-w-screen bg-gray-100"},r.createElement(c,null),r.createElement("main",{className:"flex-1 p-8 max-w-7xl mx-auto w-full"},t),r.createElement(s,null))}},8161:function(e,t,a){a.r(t),a.d(t,{Head:function(){return c}});var r=a(7294),n=a(2968);const l=[{id:1,title:"Basic Package",imgSrc:"https://via.placeholder.com/300",price:"$100",description:"This is the basic package offering essential features."},{id:2,title:"Standard Package",imgSrc:"https://via.placeholder.com/300",price:"$200",description:"This is the standard package offering more features."},{id:3,title:"Premium Package",imgSrc:"https://via.placeholder.com/300",price:"$300",description:"This is the premium package offering all features."}];t.default=()=>r.createElement(n.Z,null,r.createElement("div",{className:"p-8"},r.createElement("h1",{className:"text-2xl font-bold mb-6"},"Packages"),r.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"},l.map((e=>r.createElement("div",{key:e.id,className:"border bg-gradient-to-tl  from-blue-50 to-purple-100 border-gray-300 rounded-lg shadow-lg p-4"},r.createElement("img",{src:e.imgSrc,alt:e.title,className:"w-full h-48 object-cover rounded-t-lg mb-4"}),r.createElement("h2",{className:"text-xl font-bold mb-2"},e.title),r.createElement("p",{className:"text-gray-700 mb-4"},e.description),r.createElement("div",{className:"text-lg font-semibold"},e.price)))))));const c=()=>r.createElement("title",null,"Packages Page")},3621:function(e,t,a){a.d(t,{w_:function(){return d}});var r=a(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(n),c=["attr","size","title"];function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:r+"")in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e){return e&&e.map(((e,t)=>r.createElement(e.tag,m({key:t},e.attr),p(e.child))))}function d(e){return t=>r.createElement(f,i({attr:m({},e.attr)},t),p(e.child))}function f(e){var t=t=>{var a,{attr:n,size:l,title:o}=e,u=s(e,c),p=l||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,u,{className:a,style:m(m({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(e=>t(e))):t(n)}}}]);
//# sourceMappingURL=component---src-pages-packages-tsx-0d9fa62e33672305775e.js.map