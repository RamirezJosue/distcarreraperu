exports.ids=[1],exports.modules={qmPg:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"BlogModule",(function(){return BlogModule}));var common=__webpack_require__("ofXK"),router=__webpack_require__("tyNb"),core=__webpack_require__("fXoL");class BlogComponent{constructor(){}ngOnInit(){}}BlogComponent.\u0275fac=function BlogComponent_Factory(t){return new(t||BlogComponent)},BlogComponent.\u0275cmp=core.yc({type:BlogComponent,selectors:[["app-blog"]],decls:15,vars:0,consts:[["media","(min-width:1300px)","srcset","../../../assets/imgs/blog/header.jpg"],["media","(min-width:1000px)","srcset","../../../assets/imgs/blog/header.jpg"],["src","../../../assets/imgs/blog/header.jpg","alt","Imagen Blog"],[1,"row","h-100","align-items-center","justify-content-center","text-center"],[1,"col-lg-10","align-self-end"],[1,"text-uppercase","text-white","font-weight-bold"],[1,"divider","my-4"],[1,"col-lg-8","align-self-baseline"],[1,"text-white-75","font-weight-light","mb-5"],["href","#about",1,"btn","btn-primary","btn-xl","js-scroll-trigger"]],template:function BlogComponent_Template(rf,ctx){1&rf&&(core.Hc(0,"main"),core.Hc(1,"picture"),core.Fc(2,"source",0),core.Fc(3,"source",1),core.Fc(4,"img",2),core.Gc(),core.Hc(5,"div",3),core.Hc(6,"div",4),core.Hc(7,"h1",5),core.dd(8,"Your Favorite Source of Free Bootstrap Themes"),core.Gc(),core.Fc(9,"hr",6),core.Gc(),core.Hc(10,"div",7),core.Hc(11,"p",8),core.dd(12,"Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!"),core.Gc(),core.Hc(13,"a",9),core.dd(14,"Find Out More"),core.Gc(),core.Gc(),core.Gc(),core.Gc())},styles:["img[_ngcontent-%COMP%]{width:100%}"]});const routes=[{path:"blog",component:BlogComponent}];class BlogRoutingModule{}BlogRoutingModule.\u0275mod=core.Cc({type:BlogRoutingModule}),BlogRoutingModule.\u0275inj=core.Bc({factory:function BlogRoutingModule_Factory(t){return new(t||BlogRoutingModule)},imports:[[router.f.forChild(routes)],router.f]});class BlogModule{}BlogModule.\u0275mod=core.Cc({type:BlogModule}),BlogModule.\u0275inj=core.Bc({factory:function BlogModule_Factory(t){return new(t||BlogModule)},imports:[[common.b,BlogRoutingModule]]})}};