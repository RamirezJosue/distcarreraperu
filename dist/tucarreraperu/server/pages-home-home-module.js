exports.ids=[3],exports.modules={"99Un":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"HomeModule",(function(){return HomeModule}));var common=__webpack_require__("ofXK"),router=__webpack_require__("tyNb"),core=__webpack_require__("fXoL"),ngx_bootstrap_modal=__webpack_require__("K3ix");class HomeComponent{constructor(modalService){this.modalService=modalService}ngOnInit(){}openModal(template){this.modalRef=this.modalService.show(template)}}HomeComponent.\u0275fac=function HomeComponent_Factory(t){return new(t||HomeComponent)(core.Fc(ngx_bootstrap_modal.a))},HomeComponent.\u0275cmp=core.zc({type:HomeComponent,selectors:[["app-home"]],decls:56,vars:0,consts:[[1,"card","mt-5","mb-5","rounded"],[1,"card-body"],[1,"text-center"],[1,"black","btn-base",2,"color","white","position","relative","top","50%"],["align","center",1,"row"],[1,"col-lg-4"],["src","../../../assets/admin.png","alt","Cinque Terre","width","50%",1,"rounded-circle"],["href","#","role","button",1,"btn","btn-outline-info"],["src","../../../assets/aerom.png","alt","Cinque Terre","width","50%",1,"rounded-circle"],["src","../../../assets/arqui.png","alt","Cinque Terre","width","50%",1,"rounded-circle"],["src","../../../assets/chef.png","alt","Cinque Terre","width","50%",1,"rounded-circle"],["src","../../../assets/leyes.png","alt","Cinque Terre","width","50%",1,"rounded-circle"],["src","../../../assets/market.png","alt","Cinque Terre","width","50%",1,"rounded-circle"],["src","../../../assets/medic.png","alt","Cinque Terre","width","50%",1,"rounded-circle"],["src","../../../assets/pilot.png","alt","Cinque Terre","width","50%",1,"rounded-circle"],["src","../../../assets/polic.png","alt","Cinque Terre","width","50%",1,"rounded-circle"]],template:function HomeComponent_Template(rf,ctx){1&rf&&(core.Ic(0,"div",0),core.Ic(1,"div",1),core.Ic(2,"div",2),core.Ic(3,"a",3),core.ed(4,"CARRERAS PROFESIONALES"),core.Hc(),core.Hc(),core.Gc(5,"br"),core.Ic(6,"div",4),core.Ic(7,"div",5),core.Gc(8,"img",6),core.Gc(9,"br"),core.Ic(10,"a",7),core.ed(11,"Administraci\xf3n"),core.Hc(),core.Hc(),core.Ic(12,"div",5),core.Gc(13,"img",8),core.Gc(14,"br"),core.Ic(15,"a",7),core.ed(16,"Azafata"),core.Hc(),core.Hc(),core.Ic(17,"div",5),core.Gc(18,"img",9),core.Gc(19,"br"),core.Ic(20,"a",7),core.ed(21,"Arquitectura"),core.Hc(),core.Hc(),core.Hc(),core.Gc(22,"br"),core.Ic(23,"div",4),core.Ic(24,"div",5),core.Gc(25,"img",10),core.Gc(26,"br"),core.Ic(27,"a",7),core.ed(28,"Gastronom\xeda"),core.Hc(),core.Hc(),core.Ic(29,"div",5),core.Gc(30,"img",11),core.Gc(31,"br"),core.Ic(32,"a",7),core.ed(33,"Derecho"),core.Hc(),core.Hc(),core.Ic(34,"div",5),core.Gc(35,"img",12),core.Gc(36,"br"),core.Ic(37,"a",7),core.ed(38,"Marketing"),core.Hc(),core.Hc(),core.Hc(),core.Gc(39,"br"),core.Ic(40,"div",4),core.Ic(41,"div",5),core.Gc(42,"img",13),core.Gc(43,"br"),core.Ic(44,"a",7),core.ed(45,"Medicina"),core.Hc(),core.Hc(),core.Ic(46,"div",5),core.Gc(47,"img",14),core.Gc(48,"br"),core.Ic(49,"a",7),core.ed(50,"Aviaci\xf3n"),core.Hc(),core.Hc(),core.Ic(51,"div",5),core.Gc(52,"img",15),core.Gc(53,"br"),core.Ic(54,"a",7),core.ed(55,"Polic\xeda"),core.Hc(),core.Hc(),core.Hc(),core.Hc(),core.Hc())},styles:["h1{display:inline;font-size:4vw}h2,h3,h4{font-size:2vw}.contenedor{text-align:center}"],encapsulation:2});const routes=[{path:"",component:HomeComponent}];class HomeRoutingModule{}HomeRoutingModule.\u0275mod=core.Dc({type:HomeRoutingModule}),HomeRoutingModule.\u0275inj=core.Cc({factory:function HomeRoutingModule_Factory(t){return new(t||HomeRoutingModule)},imports:[[router.f.forChild(routes)],router.f]});class HomeModule{}HomeModule.\u0275mod=core.Dc({type:HomeModule}),HomeModule.\u0275inj=core.Cc({factory:function HomeModule_Factory(t){return new(t||HomeModule)},imports:[[common.b,HomeRoutingModule,ngx_bootstrap_modal.b.forRoot()]]})}};