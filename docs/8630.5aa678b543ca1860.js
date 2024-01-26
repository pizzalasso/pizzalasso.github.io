"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8630],{8630:(_,g,e)=>{e.r(g),e.d(g,{PatientModule:()=>U});var u=e(6814),s=e(6958),o=e(6689),n=e(9810);const d=["search"];function Z(i,c){if(1&i){const t=o.EpF();o.TgZ(0,"ion-card",5),o.NdJ("click",function(){o.CHM(t);const a=o.oxw();return o.KtG(a.navigate())}),o.TgZ(1,"ion-card-content")(2,"ion-row"),o._UZ(3,"ion-col",6),o.TgZ(4,"ion-col",7),o._uU(5),o.qZA(),o.TgZ(6,"ion-col",8),o._UZ(7,"ion-icon",9),o.qZA()()()()}if(2&i){const t=c.$implicit;o.xp6(5),o.hij(" ",t," ")}}let m=(()=>{var i;class c{constructor(r){this.router=r,this.data=["Anne Dela Cruz"],this.results=[...this.data]}ngOnInit(){}ionViewWillEnter(){this.search.setFocus()}navigate(){this.router.navigate(["/admin/patient/details"])}handleInput(r){const a=r.target.value.toLowerCase();this.results=this.data.filter(l=>l.toLowerCase().indexOf(a)>-1)}}return(i=c).\u0275fac=function(r){return new(r||i)(o.Y36(s.F0))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-search"]],viewQuery:function(r,a){if(1&r&&o.Gf(d,5),2&r){let l;o.iGM(l=o.CRH())&&(a.search=l.first)}},decls:11,vars:3,consts:[["slot","start"],[1,"ion-padding",3,"fixed"],[3,"debounce","ionInput"],["search",""],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["size","2"],["size","8",1,"d-flex","ion-align-items-center","ion-justify-content-center","ion-no-padding"],["size","2",1,"d-flex","ion-align-items-center"],["name","close-circle","size","large","color","delete"]],template:function(r,a){1&r&&(o.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),o._UZ(3,"ion-back-button"),o.qZA(),o.TgZ(4,"ion-title"),o._uU(5,"Search Patient"),o.qZA()()(),o.TgZ(6,"ion-content")(7,"ion-grid",1)(8,"ion-searchbar",2,3),o.NdJ("ionInput",function(b){return a.handleInput(b)}),o.qZA(),o.YNc(10,Z,8,1,"ion-card",4),o.qZA()()),2&r&&(o.xp6(7),o.Q6J("fixed",!0),o.xp6(1),o.Q6J("debounce",1e3),o.xp6(2),o.Q6J("ngForOf",a.results))},dependencies:[u.sg,n.Sm,n.PM,n.FN,n.wI,n.W2,n.jY,n.Gu,n.gu,n.Nd,n.VI,n.wd,n.sr,n.j9,n.oU]}),c})();var h=e(1971),p=e(3989);const f=[{path:"",component:(()=>{var i;class c{constructor(r,a,l){this.router=r,this.userService=a,this.loggedService=l}ngOnInit(){this.loggedService.getLoggedData().then(r=>{this.givenName=r.givenName})}checkLogged(){this.loggedService.getLoggedData().then(r=>{console.log(r)})}checkGivenName(){console.log(this.givenName)}clearLogged(){this.userService.clearLoggedUserMother()}handleRefresh(r){setTimeout(()=>{r.target.complete()},2e3)}navigate(){this.router.navigate(["/admin/patient/search"])}}return(i=c).\u0275fac=function(r){return new(r||i)(o.Y36(s.F0),o.Y36(h.K),o.Y36(p.A))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-home"]],decls:172,vars:1,consts:[["placeholder","Search Patient",3,"click"],["color","primary"],["name","logo-ionic"],["color","success"],["color","danger"],["src","../../../assets/mock-charts/mock_chart2.png","alt","The Wisconsin State Capitol building in Madison, WI at night"],["color","secondary"],[1,"cell-class","color-tertiary","table-header"],["size","3",1,"cell-class"],[1,"cell-class"],[1,"cell-class","color-primary"]],template:function(r,a){1&r&&(o.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),o._uU(3),o.qZA()()(),o.TgZ(4,"ion-searchbar",0),o.NdJ("click",function(){return a.navigate()}),o.qZA(),o.TgZ(5,"ion-content")(6,"ion-card",1)(7,"ion-card-header")(8,"ion-card-subtitle"),o._uU(9,"Record Food Intake"),o.qZA()(),o.TgZ(10,"ion-card-content"),o._UZ(11,"ion-icon",2),o._uU(12," Don\u2019t forget to record your food intake for breakfast! "),o.qZA(),o.TgZ(13,"ion-card-content"),o._uU(14," Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel nisi sit amet nunc tempus elementum. Vestibulum sit amet nibh eget est ultricies dapibus. Fusce fermentum, purus a vulputate accumsan, nunc nisl ullamcorper turpis, vitae tempus ligula dui vitae nibh. Praesent volutpat eleifend leo auctor placerat. "),o.qZA()(),o.TgZ(15,"ion-card",3)(16,"ion-card-header")(17,"ion-card-subtitle"),o._uU(18,"Nutrition Status"),o.qZA()(),o.TgZ(19,"ion-card-content"),o._uU(20," Good "),o.qZA()(),o.TgZ(21,"ion-card",4)(22,"ion-card-header")(23,"ion-card-subtitle"),o._uU(24,"Nutrition Status"),o.qZA()(),o.TgZ(25,"ion-card-content"),o._uU(26," At Risk "),o.qZA()(),o.TgZ(27,"ion-card"),o._UZ(28,"ion-img",5),o.qZA(),o.TgZ(29,"ion-card",6)(30,"ion-card-header")(31,"ion-card-subtitle"),o._uU(32,"Average Vitamin A Consumption"),o.qZA()(),o.TgZ(33,"ion-card-content")(34,"ion-grid")(35,"ion-row",7),o._UZ(36,"ion-col",8),o.TgZ(37,"ion-col",8),o._uU(38,"1T"),o.qZA(),o.TgZ(39,"ion-col",8),o._uU(40,"2T"),o.qZA(),o.TgZ(41,"ion-col",8),o._uU(42,"3T"),o.qZA()(),o.TgZ(43,"ion-row",9)(44,"ion-col",8),o._uU(45,"Under 20 y.o."),o.qZA(),o.TgZ(46,"ion-col",8),o._uU(47,"770 \u03bcg"),o.qZA(),o.TgZ(48,"ion-col",8),o._uU(49,"720 \u03bcg"),o.qZA(),o.TgZ(50,"ion-col",8),o._uU(51,"750 \u03bcg"),o.qZA()(),o.TgZ(52,"ion-row",10)(53,"ion-col",8),o._uU(54,"20 - 30 y.o."),o.qZA(),o.TgZ(55,"ion-col",8),o._uU(56,"770 \u03bcg"),o.qZA(),o.TgZ(57,"ion-col",8),o._uU(58,"720 \u03bcg"),o.qZA(),o.TgZ(59,"ion-col",8),o._uU(60,"750 \u03bcg"),o.qZA()(),o.TgZ(61,"ion-row",9)(62,"ion-col",8),o._uU(63,"30 - 35 y.o."),o.qZA(),o.TgZ(64,"ion-col",8),o._uU(65,"770 \u03bcg"),o.qZA(),o.TgZ(66,"ion-col",8),o._uU(67,"720 \u03bcg"),o.qZA(),o.TgZ(68,"ion-col",8),o._uU(69,"750 \u03bcg"),o.qZA()(),o.TgZ(70,"ion-row",10)(71,"ion-col",8),o._uU(72,"35 - 38 y.o."),o.qZA(),o.TgZ(73,"ion-col",8),o._uU(74,"770 \u03bcg"),o.qZA(),o.TgZ(75,"ion-col",8),o._uU(76,"720 \u03bcg"),o.qZA(),o.TgZ(77,"ion-col",8),o._uU(78,"750 \u03bcg"),o.qZA()(),o.TgZ(79,"ion-row",9)(80,"ion-col",8),o._uU(81,"over 38 y.o."),o.qZA(),o.TgZ(82,"ion-col",8),o._uU(83,"770 \u03bcg"),o.qZA(),o.TgZ(84,"ion-col",8),o._uU(85,"720 \u03bcg"),o.qZA(),o.TgZ(86,"ion-col",8),o._uU(87,"750 \u03bcg"),o.qZA()()()()(),o.TgZ(88,"ion-card",6)(89,"ion-card-header")(90,"ion-card-subtitle"),o._uU(91,"Average Iron Consumption"),o.qZA()(),o.TgZ(92,"ion-card-content")(93,"ion-grid")(94,"ion-row",7),o._UZ(95,"ion-col",8),o.TgZ(96,"ion-col",8),o._uU(97,"1T"),o.qZA(),o.TgZ(98,"ion-col",8),o._uU(99,"2T"),o.qZA(),o.TgZ(100,"ion-col",8),o._uU(101,"3T"),o.qZA()(),o.TgZ(102,"ion-row",9)(103,"ion-col",8),o._uU(104,"Under 20 y.o."),o.qZA(),o.TgZ(105,"ion-col",8),o._uU(106,"27 \u03bcg"),o.qZA(),o.TgZ(107,"ion-col",8),o._uU(108,"29 \u03bcg"),o.qZA(),o.TgZ(109,"ion-col",8),o._uU(110,"25 \u03bcg"),o.qZA()(),o.TgZ(111,"ion-row",10)(112,"ion-col",8),o._uU(113,"20 - 30 y.o."),o.qZA(),o.TgZ(114,"ion-col",8),o._uU(115,"27 \u03bcg"),o.qZA(),o.TgZ(116,"ion-col",8),o._uU(117,"29 \u03bcg"),o.qZA(),o.TgZ(118,"ion-col",8),o._uU(119,"25 \u03bcg"),o.qZA()(),o.TgZ(120,"ion-row",9)(121,"ion-col",8),o._uU(122,"30 - 35 y.o."),o.qZA(),o.TgZ(123,"ion-col",8),o._uU(124,"27 \u03bcg"),o.qZA(),o.TgZ(125,"ion-col",8),o._uU(126,"29 \u03bcg"),o.qZA(),o.TgZ(127,"ion-col",8),o._uU(128,"25 \u03bcg"),o.qZA()(),o.TgZ(129,"ion-row",10)(130,"ion-col",8),o._uU(131,"35 - 38 y.o."),o.qZA(),o.TgZ(132,"ion-col",8),o._uU(133,"27 \u03bcg"),o.qZA(),o.TgZ(134,"ion-col",8),o._uU(135,"29 \u03bcg"),o.qZA(),o.TgZ(136,"ion-col",8),o._uU(137,"25 \u03bcg"),o.qZA()(),o.TgZ(138,"ion-row",9)(139,"ion-col",8),o._uU(140,"over 38 y.o."),o.qZA(),o.TgZ(141,"ion-col",8),o._uU(142,"27 \u03bcg"),o.qZA(),o.TgZ(143,"ion-col",8),o._uU(144,"29 \u03bcg"),o.qZA(),o.TgZ(145,"ion-col",8),o._uU(146,"25 \u03bcg"),o.qZA()()()()(),o.TgZ(147,"ion-card",6)(148,"ion-card-header")(149,"ion-card-subtitle"),o._uU(150,"Top 10 Multivitamins/Supplements"),o.qZA()(),o.TgZ(151,"ion-card-content")(152,"p"),o._uU(153,"1. Prenatal Multivitamins"),o.qZA(),o.TgZ(154,"p"),o._uU(155,"2. Folic Acid"),o.qZA(),o.TgZ(156,"p"),o._uU(157,"3. Iron"),o.qZA(),o.TgZ(158,"p"),o._uU(159,"4. Calcium"),o.qZA(),o.TgZ(160,"p"),o._uU(161,"5. Omega-3 Fatty Acids"),o.qZA(),o.TgZ(162,"p"),o._uU(163,"6. Vitamin D"),o.qZA(),o.TgZ(164,"p"),o._uU(165,"7. Vitamin B6"),o.qZA(),o.TgZ(166,"p"),o._uU(167,"8. Vitamin B12"),o.qZA(),o.TgZ(168,"p"),o._uU(169,"9. Vitamin C"),o.qZA(),o.TgZ(170,"p"),o._uU(171,"10. Magnesium"),o.qZA()()()()),2&r&&(o.xp6(3),o.hij("Hello, ",a.givenName,""))},dependencies:[n.PM,n.FN,n.Zi,n.tO,n.wI,n.W2,n.jY,n.Gu,n.gu,n.Xz,n.Nd,n.VI,n.wd,n.sr,n.j9],styles:['@font-face{font-family:Open Sans;src:url(OpenSans-VariableFont_wdth,wght.abb0f3a06e9f64d3.ttf) format("truetype-variations");font-weight:1 999}[_ngcontent-%COMP%]:root{--ion-color-primary: #f5aaa6;--ion-color-primary-rgb: 245,170,166;--ion-color-primary-contrast: #000000;--ion-color-primary-contrast-rgb: 0,0,0;--ion-color-primary-shade: #d89692;--ion-color-primary-tint: #f6b3af;--ion-color-secondary: #ffead1;--ion-color-secondary-rgb: 255,234,209;--ion-color-secondary-contrast: #000000;--ion-color-secondary-contrast-rgb: 0,0,0;--ion-color-secondary-shade: #e0ceb8;--ion-color-secondary-tint: #ffecd6;--ion-color-tertiary: #847762;--ion-color-tertiary-rgb: 132,119,98;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255,255,255;--ion-color-tertiary-shade: #746956;--ion-color-tertiary-tint: #908572;--ion-color-success: #41c767;--ion-color-success-rgb: 65,199,103;--ion-color-success-contrast: #000000;--ion-color-success-contrast-rgb: 0,0,0;--ion-color-success-shade: #39af5b;--ion-color-success-tint: #54cd76;--ion-color-warning: #f0a73a;--ion-color-warning-rgb: 240,167,58;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0,0,0;--ion-color-warning-shade: #d39333;--ion-color-warning-tint: #f2b04e;--ion-color-danger: #d66554;--ion-color-danger-rgb: 214,101,84;--ion-color-danger-contrast: #000000;--ion-color-danger-contrast-rgb: 0,0,0;--ion-color-danger-shade: #bc594a;--ion-color-danger-tint: #da7465;--ion-color-dark: #222428;--ion-color-dark-rgb: 34, 36, 40;--ion-color-dark-contrast: #ffffff;--ion-color-dark-contrast-rgb: 255, 255, 255;--ion-color-dark-shade: #1e2023;--ion-color-dark-tint: #383a3e;--ion-color-medium: #92949c;--ion-color-medium-rgb: 146, 148, 156;--ion-color-medium-contrast: #ffffff;--ion-color-medium-contrast-rgb: 255, 255, 255;--ion-color-medium-shade: #808289;--ion-color-medium-tint: #9d9fa6;--ion-color-light: #f4f5f8;--ion-color-light-rgb: 244, 245, 248;--ion-color-light-contrast: #000000;--ion-color-light-contrast-rgb: 0, 0, 0;--ion-color-light-shade: #d7d8da;--ion-color-light-tint: #f5f6f9;--ion-toolbar-background: var(--ion-color-light);--ion-toolbar-border-color: var(--ion-color-light);--ion-toolbar-color: var(--ion-color-tertiary-shade);--ion-tab-bar-background: var(--ion-color-primary);--ion-tab-bar-border-color: var(--ion-color-primary);--ion-tab-bar-color: var(--ion-color-medium-shade);--ion-tab-bar-color-selected: var(--ion-color-dark-shade);--ion-item-background: var(--ion-color-secondary);--ion-item-border-color: var(--ion-color-secondary);--ion-item-color: var(--ion-color-medium-shade);--ion-font-family: "Open Sans";--ion-color-delete: #c5b5a2;--ion-color-delete-rgb: 197,181,162;--ion-color-delete-contrast: #000000;--ion-color-delete-contrast-rgb: 0,0,0;--ion-color-delete-shade: #ad9f8f;--ion-color-delete-tint: #cbbcab}.ion-color-delete[_ngcontent-%COMP%]{--ion-color-base: var(--ion-color-delete);--ion-color-base-rgb: var(--ion-color-delete-rgb);--ion-color-contrast: var(--ion-color-delete-contrast);--ion-color-contrast-rgb: var(--ion-color-delete-contrast-rgb);--ion-color-shade: var(--ion-color-delete-shade);--ion-color-tint: var(--ion-color-delete-tint)}html[_ngcontent-%COMP%]{--ion-dynamic-font: var(--ion-default-dynamic-font);font-family:var(--ion-font-family)}.color-primary[_ngcontent-%COMP%]{background:var(--ion-color-primary-tint)}.color-secondary[_ngcontent-%COMP%]{background:var(--ion-color-secondary)}.color-tertiary[_ngcontent-%COMP%]{background:var(--ion-color-tertiary-tint)}.table-header[_ngcontent-%COMP%]{font-weight:700!important}']}),c})()},{path:"search",component:m},{path:"details",loadChildren:()=>Promise.all([e.e(4678),e.e(5176)]).then(e.bind(e,5176)).then(i=>i.DetailsModule)}];let T=(()=>{var i;class c{}return(i=c).\u0275fac=function(r){return new(r||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[s.Bz.forChild(f),s.Bz]}),c})();var A=e(95);let U=(()=>{var i;class c{}return(i=c).\u0275fac=function(r){return new(r||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[u.ez,T,n.Pc,A.UX]}),c})()}}]);