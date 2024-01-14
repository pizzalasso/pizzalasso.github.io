"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6858],{2217:(y,u,a)=>{a.d(u,{c:()=>g});var s=a(5861),c=a(6689),h=a(2014),v=a(653);let g=(()=>{var l;class _{constructor(e,t){this.storage=e,this.phrService=t,this._storage=null,this.init()}ngOnInit(){}init(){var e=this;return(0,s.Z)(function*(){const t=yield e.storage.create();e._storage=t})()}set(e){var t=this;return(0,s.Z)(function*(){yield t.getAll().then(r=>{if(r){var n;r.push(e),null===(n=t._storage)||void 0===n||n.set("medications",r)}else{var i;const d=[];d.push(e),null===(i=t._storage)||void 0===i||i.set("medications",d)}})})()}set2(e){var t=this;return(0,s.Z)(function*(){yield t.getAll().then(r=>{var i;e.forEach(n=>{r.push(n)}),null===(i=t._storage)||void 0===i||i.set("medications",r)})})()}getAll(){var e=this;return(0,s.Z)(function*(){var t;return yield null===(t=e._storage)||void 0===t?void 0:t.get("medications")})()}getById(e){var t=this;return(0,s.Z)(function*(){return yield t.getAll().then(r=>{let i;return r.forEach(n=>{e===n.id&&(i=n)}),i}).catch(r=>r)})()}getByPhrId(){var e=this;return(0,s.Z)(function*(){return e.getAll().then(t=>{if(!t)throw new Error("No medications yet");let r=[];return t.forEach(i=>{e.phrService.id===i.personalHealthRecordId&&r.push(i)}),r})})()}addUpdateMedication(e){var t=this;return(0,s.Z)(function*(){yield t.getAll().then(r=>{if(r){var i;let d=!1;r.forEach(f=>{e.id===f.id&&(d=!0,f.name=e.name,f.dosage=e.dosage,f.frequency=e.frequency)}),!1===d&&r.push(e),null===(i=t._storage)||void 0===i||i.set("medications",r)}else{var n;const d=[];d.push(e),null===(n=t._storage)||void 0===n||n.set("medications",d)}}).then(()=>{var r;null===(r=t._storage)||void 0===r||r.get("medications")})})()}}return(l=_).\u0275fac=function(e){return new(e||l)(c.LFG(h.K),c.LFG(v.j))},l.\u0275prov=c.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),_})()},653:(y,u,a)=>{a.d(u,{j:()=>g});var s=a(5861),c=a(6689),h=a(2014),v=a(3989);let g=(()=>{var l;class _{constructor(e,t){this.storage=e,this.loggedService=t,this._storage=null,this.id="",this.pregnancyId="",this.init()}ngOnInit(){}init(){var e=this;return(0,s.Z)(function*(){const t=yield e.storage.create();e._storage=t})()}set(e){var t=this;return(0,s.Z)(function*(){yield t.getAll().then(r=>{if(r){var n;r.push(e),null===(n=t._storage)||void 0===n||n.set("personalHealthRecords",r)}else{var i;const d=[];d.push(e),null===(i=t._storage)||void 0===i||i.set("personalHealthRecords",d)}})})()}getAll(){var e=this;return(0,s.Z)(function*(){var t;return yield null===(t=e._storage)||void 0===t?void 0:t.get("personalHealthRecords")})()}getById(e){var t=this;return(0,s.Z)(function*(){return yield t.getAll().then(r=>{let i;return r.forEach(n=>{e===n.id&&(i=n)}),i}).catch(r=>r)})()}getByPregnancyId(){var e=this;return(0,s.Z)(function*(){return yield e.loggedService.getLoggedData().then(t=>e.getAll().then(r=>{let i;return r.forEach(n=>{t.pregnancyId===n.pregnancyId&&(e.pregnancyId=n.pregnancyId,e.id=n.id,i=n)}),i}))})()}updatePhr(e){var t=this;return(0,s.Z)(function*(){yield t.getAll().then(r=>{var i;r.forEach(n=>{e.id===n.id&&(n.weightUnit=e.weightUnit,n.weight=e.weight,n.heightUnit=e.heightUnit,n.heightCm=e.heightCm,n.heightFt=e.heightFt,n.heightIn=e.heightIn,n.heartProblem=e.heartProblem,n.liverProblem=e.liverProblem,n.kidneyProblem=e.kidneyProblem,n.cancer=e.cancer,n.lungProblem=e.lungProblem,n.hypertension=e.hypertension,n.diabetes=e.diabetes,n.obesity=e.obesity,n.stroke=e.stroke,n.hiv=e.hiv,n.otherComorbidity=e.otherComorbidity,n.otherComorbidityIndicate=e.otherComorbidityIndicate)}),null===(i=t._storage)||void 0===i||i.set("personalHealthRecords",r)}).then(()=>{var r;null===(r=t._storage)||void 0===r||r.get("personalHealthRecords")})})()}}return(l=_).\u0275fac=function(e){return new(e||l)(c.LFG(h.K),c.LFG(v.A))},l.\u0275prov=c.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),_})()},6753:(y,u,a)=>{a.d(u,{P:()=>v});var s=a(5861),c=a(6689),h=a(2014);let v=(()=>{var g;class l{constructor(o){this.storage=o,this._storage=null,this.init()}ngOnInit(){}init(){var o=this;return(0,s.Z)(function*(){const e=yield o.storage.create();o._storage=e})()}set(o){var e=this;return(0,s.Z)(function*(){yield e.getAll().then(t=>{if(t){var i;t.push(o),null===(i=e._storage)||void 0===i||i.set("mothers",t)}else{var r;const n=[];n.push(o),null===(r=e._storage)||void 0===r||r.set("mothers",n)}})})()}getAll(){var o=this;return(0,s.Z)(function*(){var e;return yield null===(e=o._storage)||void 0===e?void 0:e.get("mothers")})()}getByUserId(o){var e=this;return(0,s.Z)(function*(){return yield e.getAll().then(t=>{let r;return t.forEach(i=>{o===i.userId&&(r=i)}),r})})()}}return(g=l).\u0275fac=function(o){return new(o||g)(c.LFG(h.K))},g.\u0275prov=c.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),l})()},7705:(y,u,a)=>{a.d(u,{E:()=>g});var s=a(5861),c=a(6689),h=a(2014),v=a(3989);let g=(()=>{var l;class _{constructor(e,t){this.storage=e,this.loggedService=t,this._storage=null,this.init()}ngOnInit(){}init(){var e=this;return(0,s.Z)(function*(){const t=yield e.storage.create();e._storage=t})()}set(e){var t=this;return(0,s.Z)(function*(){yield t.getAll().then(r=>{if(r){var n;r.push(e),null===(n=t._storage)||void 0===n||n.set("pregnancy",r)}else{var i;const d=[];d.push(e),null===(i=t._storage)||void 0===i||i.set("pregnancy",d)}})})()}getAll(){var e=this;return(0,s.Z)(function*(){var t;return yield null===(t=e._storage)||void 0===t?void 0:t.get("pregnancy")})()}getByMotherId(){var e=this;return(0,s.Z)(function*(){return yield e.loggedService.getLoggedData().then(t=>e.getAll().then(r=>{let i=[];return r.forEach(n=>{t.motherId===n.motherId&&i.push(n)}),i}))})()}getById(e){var t=this;return(0,s.Z)(function*(){yield t.getAll().then(r=>{let i;return r.forEach(n=>{e===n.motherId&&(i=n)}),i}).catch(r=>r)})()}}return(l=_).\u0275fac=function(e){return new(e||l)(c.LFG(h.K),c.LFG(v.A))},l.\u0275prov=c.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),_})()},1971:(y,u,a)=>{a.d(u,{K:()=>g});var s=a(5861),c=a(6689),h=a(3989),v=a(3401);let g=(()=>{var l;class _{constructor(e,t){this.loggedService=e,this.storageService=t,this.isLoggedIn=!1}ngOnInit(){}set(e){var t=this;return(0,s.Z)(function*(){yield t.getAll().then(r=>{r.push(e),t.storageService.set("users",r)})})()}getAll(){var e=this;return(0,s.Z)(function*(){return yield e.storageService.get("users")})()}clearLoggedUserMother(){var e=this;return(0,s.Z)(function*(){e.isLoggedIn=!1,e.loggedService.logged={givenName:"",userId:"",motherId:"",pregnancyId:"",maternalNutritionId:""},e.loggedService.clearLogged()})()}clearLogged(){var e=this;return(0,s.Z)(function*(){e.isLoggedIn=!1,e.loggedService.logged={givenName:"",userId:"",motherId:"",pregnancyId:"",maternalNutritionId:""},e.loggedService.clearLogged()})()}updatePassword(e){var t=this;return(0,s.Z)(function*(){return new Promise(function(){var r=(0,s.Z)(function*(i,n){try{const d=yield t.getAll(),f=yield t.loggedService.getLoggedData();d.some(E=>{f.userId===E.id&&(E.password=e,t.storageService.set("users",d),i(!0))})}catch(d){n(d)}});return function(i,n){return r.apply(this,arguments)}}())})()}deleteUser(){var e=this;return(0,s.Z)(function*(){e.loggedService.getLoggedData().then(t=>{e.getAll().then(r=>{r.forEach((i,n)=>{t.userId==i.id&&r.splice(n,1)}),e.storageService.set("users",r)})})})()}clear(){var e=this;return(0,s.Z)(function*(){yield e.storageService.clear()})()}}return(l=_).\u0275fac=function(e){return new(e||l)(c.LFG(h.A),c.LFG(v.V))},l.\u0275prov=c.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),_})()},3989:(y,u,a)=>{a.d(u,{A:()=>v});var s=a(5861),c=a(6689),h=a(3401);let v=(()=>{var g;class l{assignValueToPromise(){this.givenNamePromise=new Promise(o=>{setTimeout(()=>{o("Hello, this is the resolved value!")},2e3)})}assignValueToPromise2(){console.log("assignedvalueto"),this.givenNamePromise=new Promise(o=>{this.getLoggedData().then(e=>{console.log(e.givenName),o(e.givenName)})})}constructor(o){this.storageService=o,this.isLoggedIn=!1,this.logged={givenName:"",userId:"",motherId:"",pregnancyId:"",maternalNutritionId:""},this.assignValueToPromise2(),console.log("logged constructor")}getLoggedData(){var o=this;return(0,s.Z)(function*(){return yield o.storageService.get("logged")})()}set(o){var e=this;return(0,s.Z)(function*(){return yield e.storageService.set("logged",o)})()}clearLoggedUserMother(){var o=this;return(0,s.Z)(function*(){o.isLoggedIn=!1,yield o.storageService.set("loggedUser",null)})()}clearLogged(){var o=this;return(0,s.Z)(function*(){o.isLoggedIn=!1,yield o.storageService.set("logged",null)})()}}return(g=l).\u0275fac=function(o){return new(o||g)(c.LFG(h.V))},g.\u0275prov=c.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),l})()}}]);