webpackJsonp([1],{IlT1:function(a,t){},"J17/":function(a,t){},KLHT:function(a,t,e){a.exports=e.p+"src/img/detailing.f973380.jpg"},MCb6:function(a,t,e){a.exports=e.p+"src/img/carwash.15ea94c.jpg"},NHnr:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("7+uW"),s=e("bm7V"),n=e.n(s),r=e("QEVx"),l=e.n(r),o=(e("suTU"),{render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"app"}},[e("section",{staticClass:"hero is-primary"},[e("div",{staticClass:"hero-head"},[e("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[e("div",{staticClass:"navbar-brand"}),a._v(" "),e("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[e("div",{staticClass:"navbar-start"},[e("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[a._v("\n              Home\n          ")]),a._v(" "),e("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[e("a",{staticClass:"navbar-link"},[a._v("\n              Car Care\n              ")]),a._v(" "),e("div",{staticClass:"navbar-dropdown"},[e("router-link",{staticClass:"navbar-item",attrs:{to:"/CarWash"}},[a._v("\n                  Car Wash\n              ")]),a._v(" "),e("router-link",{staticClass:"navbar-item",attrs:{to:"/AutoDetailing"}},[a._v("\n                  Auto Detailing\n              ")])],1)])],1),a._v(" "),e("div",{staticClass:"navbar-end"},[e("div",{staticClass:"navbar-item"},[e("div",{staticClass:"buttons"},[a._m(0),a._v(" "),a._m(1),a._v(" "),e("router-link",{staticClass:"button is-light",attrs:{to:"/BookingForm"}},[a._v("\n                  Book A Service\n              ")])],1)])])])])])]),a._v(" "),e("router-view")],1)},staticRenderFns:[function(){var a=this.$createElement,t=this._self._c||a;return t("a",{staticClass:"button is-primary"},[t("strong",[this._v("About Us")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("a",{staticClass:"button is-primary"},[t("strong",[this._v("Contact")])])}]});var c=e("VU/8")({name:"App"},o,!1,function(a){e("SzDH")},null,null).exports,m=e("/ocq"),d={name:"Home",data:function(){return{title:"Home",products:[{prodName:"Car Wash",prodDesc:"Formula Carwash sudah berpengalaman dalam menangani pencucian mobil. Dengan tekologi hidrolik, kami menjamin kebersihan mobil Anda secara merata.",prodImg:e("MCb6"),prodRoute:"CarWash"},{prodName:"Auto Detailing",prodDesc:"Kualitas detailing yang sangat rapi didukung oleh tenaga kerja yang sudah berpengalaman akan membuat mobil Anda bersih dari baret halus yang nampak. Mobil Anda akan kembali seperti baru keluar dari dealer.",prodImg:e("KLHT"),prodRoute:"AutoDetailing"}]}}},u={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"home"},[e("section",{staticClass:"hero is-fullheight-with-navbar landing"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("div",{staticClass:"column is-6 landing-page-title"},[a._m(0),a._v(" "),e("h4",{staticClass:"subtitle is-4"},[a._v("\n                  Kami merupakan pilihan pertama dalam urusan perawatan dan variasi mobil Anda.\n              ")]),a._v(" "),e("span",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#carcare",expression:"'#carcare'"}],staticClass:"button is-primary"},[a._v("\n              Lihat selengkapnya\n              ")])])])])]),a._v(" "),e("section",{staticClass:"hero is-fullheight",attrs:{id:"carcare"}},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title is-1 section-title"},[a._v("Car Care")]),a._v(" "),e("div",{staticClass:"columns"},a._l(a.products,function(t,i){return e("router-link",{key:i,staticClass:"column is-half product",attrs:{to:t.prodRoute}},[e("img",{attrs:{src:t.prodImg}}),a._v(" "),e("h4",{staticClass:"title is-4"},[a._v(a._s(t.prodName))]),a._v(" "),e("h6",{staticClass:"subtitle is-6"},[a._v("\n                              "+a._s(t.prodDesc)+"\n                          ")])])}),1)])])])])},staticRenderFns:[function(){var a=this.$createElement,t=this._self._c||a;return t("h1",{staticClass:"title is-1"},[t("strong",[this._v("Formula Variasi")])])}]};var v=e("VU/8")(d,u,!1,function(a){e("dHx8")},"data-v-180e5915",null).exports,p={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"carwash"},[e("section",{staticClass:"hero is-fullheight-with-navbar header"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("div",{staticClass:"column is-8 header-title"},[a._m(0),a._v(" "),e("h4",{staticClass:"subtitle is-4"},[a._v("\n                      Perawatan pencucian mobil dengan produk-produk special yang hanya bisa Anda dapatkan di Formula Carwash.\n                  ")]),a._v(" "),e("span",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#prodSect1",expression:"'#prodSect1'"}],staticClass:"button is-primary"},[a._v("\n                  Lihat selengkapnya\n                  ")])])])])]),a._v(" "),a._l(Math.ceil(a.products.length/2),function(t){return e("section",{key:t,staticClass:"section hero is-fullheight",attrs:{id:"prodSect"+t}},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[t%2==0?e("div",{staticClass:"column is-one-quarter"}):a._e(),a._v(" "),a._l(a.products.slice(2*(t-1),2*t),function(t,i){return e("div",{key:i,staticClass:"column"},[e("div",{staticClass:"content"},[e("div",[e("h3",{staticClass:"is-title is-3 product-name"},[a._v(a._s(t.prodName))]),a._v(" "),e("table",a._l(t.prodDesc,function(t,i){return e("tr",{key:i},[e("td",[a._v(a._s(t))])])}),0),a._v(" "),e("div",{staticClass:"has-text-centered"},[e("span",{staticClass:"button is-hovered is-primary"},[e("h6",{staticClass:"title is-6 price"},[a._v("Rp "+a._s(a.formatPrice(t.prodPrice)))])]),a._v(" "),e("router-link",{staticClass:"button is-success",attrs:{to:"/BookingForm"}},[e("h6",{staticClass:"title is-6 price"},[a._v("Book Service")])])],1)])])])}),a._v(" "),t%2==1?e("div",{staticClass:"column is-one-quarter"}):a._e()],2)])]),a._v(" "),e("div",{staticClass:"hero-footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"tile is-ancestor is-pulled-right"},[e("div",{staticClass:"tile is-vertical is-parent scroll-button-group"},[t>1?e("div",{staticClass:"tile"},[e("span",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#prodSect"+(t-1),expression:"'#prodSect' + (i-1)"}],staticClass:"button is-primary scroll-button"},[e("font-awesome-icon",{attrs:{icon:"angle-up"}})],1)]):a._e(),a._v(" "),t<Math.ceil(a.products.length/2)?e("div",{staticClass:"tile"},[e("span",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#prodSect"+(t+1),expression:"'#prodSect' + (i+1)"}],staticClass:"button is-primary scroll-button"},[e("font-awesome-icon",{attrs:{icon:"angle-down"}})],1)]):a._e()])])])])])})],2)},staticRenderFns:[function(){var a=this.$createElement,t=this._self._c||a;return t("h1",{staticClass:"title is-1"},[t("strong",[this._v("Car Wash")])])}]};var h=e("VU/8")({name:"CarWash",data:function(){return{title:"CarWash",products:[{prodId:1,prodName:"Paket Murah Meriah di Rumah",prodDesc:["Cuci manual menggunakan sabun special dari Formula Carwash"],prodPrice:35e3},{prodId:2,prodName:"Paket Steam Biasa",prodDesc:["Cuci steam menggunakan sprayer air dan snow spray"],prodPrice:5e4},{prodId:3,prodName:"Paket Steam + Interior Cleaning",prodDesc:["Cuci steam menggunakan sprayer air dan snow spray","Interior dibersihkan dan di-vacuum sehingga debu-debu yang ada di dalam mobil hilang dan bersih kembali"],prodPrice:6e4},{prodId:4,prodName:"Paket Steam + Ultimate Wax",prodDesc:["Cuci steam menggunakan sprayer air dan snow spray","Menggunakan wax special dari Formula Variasi yang membuat mobil Anda mengkilap kembali"],prodPrice:125e3},{prodId:5,prodName:"Paket Ultimate Steam + Wax Machine",prodDesc:["Cuci steam menggunakan sprayer air dan snow spray","Menggunakan wax special dari Formula Variasi menggunakan mesin khusus yang memberikan kilap lebih pada mobil Anda yang akan membuat mobil Anda mengkilap kembali dan lebih tahan lama"],prodPrice:2e5},{prodId:6,prodName:"Paket Ultimate Steam + Wax Manual + Interior Cleaning",prodDesc:["Cuci steam menggunakan sprayer air dan snow spray","Interior mobil di-vacuum, dibersihkan, dan diberi pewangi khusus yang hanya bisa didapatkan di Formula Variasi","Menggunakan wax special dari Formula Variasi menggunakan mesin khusus yang memberikan kilap lebih pada mobil Anda yang akan membuat mobil Anda mengkilap kembali dan lebih tahan lama"],prodPrice:2e5},{prodId:7,prodName:"Paket Ultimate Steam + Wax Machine + Interior Cleaning",prodDesc:["Cuci steam menggunakan sprayer air dan snow spray","Interior mobil di-vacuum, dibersihkan, dan diberi pewangi khusus yang hanya bisa didapatkan di Formula Variasi","Menggunakan wax special dari Formula Variasi menggunakan mesin khusus yang memberikan kilap lebih pada mobil Anda yang akan membuat mobil Anda mengkilap kembali dan lebih tahan lama"],prodPrice:25e4}]}},methods:{formatPrice:function(a){return(a/1).toFixed(2).replace(".",",").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}},p,!1,function(a){e("ZFfU")},"data-v-01d97ecc",null).exports,_={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"autodetailing"},[e("section",{staticClass:"hero is-fullheight-with-navbar header",attrs:{id:"header"}},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("div",{staticClass:"column is-8 header-title"},[a._m(0),a._v(" "),e("h4",{staticClass:"subtitle is-4"},[a._v("\n                      Car detailing, coating, and polishing.\n                  ")]),a._v(" "),e("span",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#detailing",expression:"'#detailing'"}],staticClass:"button is-primary"},[a._v("\n                  Lihat selengkapnya\n                  ")])])])])]),a._v(" "),e("section",{staticClass:"hero is-fullheight",attrs:{id:"detailing"}},[a._m(1),a._v(" "),e("div",{staticClass:"hero-footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"tile is-ancestor is-pulled-right"},[e("div",{staticClass:"tile is-vertical is-parent scroll-button-group"},[e("div",{staticClass:"tile"},[e("span",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#coating",expression:"'#coating'"}],staticClass:"button is-primary scroll-button"},[e("font-awesome-icon",{attrs:{icon:"angle-down"}})],1)])])])])])]),a._v(" "),e("section",{staticClass:"hero is-fullheight",attrs:{id:"coating"}},[a._m(2),a._v(" "),e("div",{staticClass:"hero-footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"tile is-ancestor is-pulled-right"},[e("div",{staticClass:"tile is-vertical is-parent scroll-button-group"},[e("div",{staticClass:"tile"},[e("span",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#detailing",expression:"'#detailing'"}],staticClass:"button is-primary scroll-button"},[e("font-awesome-icon",{attrs:{icon:"angle-up"}})],1)])])])])])])])},staticRenderFns:[function(){var a=this.$createElement,t=this._self._c||a;return t("h1",{staticClass:"title is-1"},[t("strong",[this._v("Auto Detailing")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-half section-container"},[e("div",{staticClass:"content"},[e("h1",{staticClass:"title is-1 section-title"},[a._v("Car Detailing")]),a._v(" "),e("h4",[a._v("Kami dapat melakukan detailing pada")]),a._v(" "),e("h5",[e("ol",[e("li",[a._v("Exterior")]),a._v(" "),e("li",[a._v("Interior")]),a._v(" "),e("li",[a._v("Undercarriage")]),a._v(" "),e("li",[a._v("Mesin")])])])])])])])])},function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"hero-body"},[t("div",{staticClass:"container"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-half is-offset-6 has-text-right section-container"},[t("div",{staticClass:"content"},[t("h1",{staticClass:"title is-1 section-title"},[this._v("Car Coating")]),this._v(" "),t("h5",[this._v("Kami menyediakan coating 3, 5, 8, dan 10 tahun.")])])])])])])}]};var g=e("VU/8")({name:"AutoDetailing"},_,!1,function(a){e("J17/")},"data-v-0c558144",null).exports,C=e("mtWM"),f={name:"BookingForm",data:function(){return{minDate:new Date,maxDate:new Date,form:{name:null,email:null,phone:null,address:null,package_id:null,datetime:null,extra_water:!1,extra_electricity:!1}}},methods:{processForm:function(){C.post("http://formula-variasi.herokuapp.com/carcare/api/booking/",{name:this.form.name,email:this.form.email,phone:this.form.phone,address:this.form.address,package_id:this.form.package_id,datetime:this.form.datetime,extra_water:this.form.extra_water,extra_electricity:this.form.extra_electricity}).then(function(a){console.log(a)}).catch(function(a){console.log(a)})}}},b={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"bookingform"},[e("div",{staticClass:"hero"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-centered"},[e("div",{staticClass:"column is-10"},[e("div",{staticClass:"columns full-form"},[e("div",{staticClass:"column is-two-fifths is-hidden-mobile decoration-column"}),a._v(" "),e("div",{staticClass:"column form-column"},[e("h2",{staticClass:"title is-2 has-text-centered"},[a._v("Booking Form")]),a._v(" "),e("form",{attrs:{id:"booking-form"},on:{submit:function(t){return t.preventDefault(),a.processForm(t)}}},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("Nama")]),a._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.name,expression:"form.name"}],staticClass:"input",attrs:{type:"text",name:"name",placeholder:"e.g. John Doe"},domProps:{value:a.form.name},on:{input:function(t){t.target.composing||a.$set(a.form,"name",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"columns",staticStyle:{"margin-bottom":"0px"}},[e("div",{staticClass:"column"},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("Alamat Email")]),a._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.email,expression:"form.email"}],staticClass:"input",attrs:{type:"email",name:"email",placeholder:"e.g. john@mail.com"},domProps:{value:a.form.email},on:{input:function(t){t.target.composing||a.$set(a.form,"email",t.target.value)}}})])])]),a._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("Nomor Telepon")]),a._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.phone,expression:"form.phone"}],staticClass:"input",attrs:{type:"tel",name:"phone",placeholder:"e.g. 08123456789"},domProps:{value:a.form.phone},on:{input:function(t){t.target.composing||a.$set(a.form,"phone",t.target.value)}}})])])])]),a._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("Alamat")]),a._v(" "),e("div",{staticClass:"control"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.form.address,expression:"form.address"}],staticClass:"textarea",attrs:{name:"address",rows:"3"},domProps:{value:a.form.address},on:{input:function(t){t.target.composing||a.$set(a.form,"address",t.target.value)}}})])]),a._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("Pilihan Paket")]),a._v(" "),e("div",{staticClass:"control"},[e("div",{staticClass:"select is-fullwidth"},[e("select",{directives:[{name:"model",rawName:"v-model.number",value:a.form.package_id,expression:"form.package_id",modifiers:{number:!0}}],on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(t){var e="_value"in t?t._value:t.value;return a._n(e)});a.$set(a.form,"package_id",t.target.multiple?e:e[0])}}},[e("option",{attrs:{selected:"",value:""}},[a._v("Pilih Paket...")]),a._v(" "),e("option",{attrs:{value:"1"}},[a._v("Murah Meriah di Rumah")]),a._v(" "),e("option",{attrs:{value:"2"}},[a._v("Steam Biasa")]),a._v(" "),e("option",{attrs:{value:"3"}},[a._v("Steam + Interior Cleaning")]),a._v(" "),e("option",{attrs:{value:"4"}},[a._v("Steam + Ultimate Wax")]),a._v(" "),e("option",{attrs:{value:"5"}},[a._v("Ultimate Steam + Wax Machine")]),a._v(" "),e("option",{attrs:{value:"6"}},[a._v("Ultimate Steam + Wax Manual + Interior Cleaning")]),a._v(" "),e("option",{attrs:{value:"7"}},[a._v("Ultimate Steam + Wax Machine + Interior Cleaning")])])])])]),a._v(" "),e("div",{staticClass:"columns",staticStyle:{"margin-bottom":"0px"}},[e("div",{staticClass:"column"},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("Tanggal & Jam")]),a._v(" "),e("div",{staticClass:"control"},[e("datetime",{attrs:{type:"datetime","value-zone":"Asia/Jakarta","minute-step":30,"min-datetime":a.minDate.toISOString(),"max-datetime":new Date(a.maxDate.setDate(a.minDate.getDate()+7)).toISOString()},model:{value:a.form.datetime,callback:function(t){a.$set(a.form,"datetime",t)},expression:"form.datetime"}})],1)])]),a._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[a._v("Tambahan")]),a._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("label",{staticClass:"checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.extra_water,expression:"form.extra_water"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(a.form.extra_water)?a._i(a.form.extra_water,null)>-1:a.form.extra_water},on:{change:function(t){var e=a.form.extra_water,i=t.target,s=!!i.checked;if(Array.isArray(e)){var n=a._i(e,null);i.checked?n<0&&a.$set(a.form,"extra_water",e.concat([null])):n>-1&&a.$set(a.form,"extra_water",e.slice(0,n).concat(e.slice(n+1)))}else a.$set(a.form,"extra_water",s)}}}),a._v(" Air\n                                                    ")])]),a._v(" "),e("div",{staticClass:"column"},[e("label",{staticClass:"checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.extra_electricity,expression:"form.extra_electricity"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(a.form.extra_electricity)?a._i(a.form.extra_electricity,null)>-1:a.form.extra_electricity},on:{change:function(t){var e=a.form.extra_electricity,i=t.target,s=!!i.checked;if(Array.isArray(e)){var n=a._i(e,null);i.checked?n<0&&a.$set(a.form,"extra_electricity",e.concat([null])):n>-1&&a.$set(a.form,"extra_electricity",e.slice(0,n).concat(e.slice(n+1)))}else a.$set(a.form,"extra_electricity",s)}}}),a._v(" Listrik\n                                                    ")])])])])])]),a._v(" "),a._m(0)])])])])])])])])])},staticRenderFns:[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"field has-text-right"},[t("button",{staticClass:"button is-danger",attrs:{type:"submit"}},[this._v("Submit")])])}]};var k=e("VU/8")(f,b,!1,function(a){e("IlT1")},"data-v-3191c40a",null).exports;i.a.use(m.a);var y=new m.a({routes:[{path:"/",name:"Home",component:v},{path:"/CarWash",name:"CarWash",component:h},{path:"/AutoDetailing",name:"AutoDetailing",component:g},{path:"/BookingForm",name:"BookingForm",component:k}]}),x=e("C/JF"),w=e("fhbW"),A=e("1e6/");x.c.add(w.a),x.c.add(w.b),i.a.component("font-awesome-icon",A.a),i.a.use(n.a),i.a.use(l.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:y,components:{App:c},template:"<App/>"})},SzDH:function(a,t){},ZFfU:function(a,t){},dHx8:function(a,t){},suTU:function(a,t){}},["NHnr"]);
//# sourceMappingURL=app.2d367b14c7fb69e94337.js.map