import{a,S as h}from"./assets/vendor-5f99528f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const l=document.querySelector(".header-burger"),o=document.querySelector(".header-nav"),u=document.querySelector(".hero-container");let c=!1;console.log(l);console.log(o);function p(){c||(o.classList.remove("is-hidden"),u.classList.add("is-hidden"),document.body.classList.add("no-scroll"),a({targets:o,translateX:["100%","0%"],duration:300,easing:"linear",begin:()=>{o.style.transform="translateX(100%)"},complete:()=>{c=!0}}))}function f(){c&&(document.body.classList.remove("no-scroll"),a({targets:o,translateX:["0%","100%"],duration:300,easing:"linear",begin:()=>{o.style.transform="translateX(0%)"},complete:()=>{c=!1,o.classList.add("is-hidden"),u.classList.remove("is-hidden")}}))}const y=document.querySelectorAll(".header-nav-item");l.addEventListener("click",()=>{o.classList.contains("is-hidden")?p():f()});y.forEach(s=>{s.addEventListener("click",()=>{f()})});function m(){window.innerWidth>=1440?l.style.display="none":l.style.display="block"}m();window.addEventListener("resize",m);new h(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});document.addEventListener("DOMContentLoaded",function(){const s=document.querySelectorAll(".reviews-button"),t=document.querySelectorAll(".back-container"),r=document.querySelectorAll(".front-container");console.log(s),console.log(t),console.log(r),s.forEach((i,e)=>{i.addEventListener("click",function(){t[e].classList.contains("is-hidden")?(r[e].classList.add("is-hidden"),t[e].classList.remove("is-hidden")):(t[e].classList.add("is-hidden"),i[e].style.display="none")})}),t.forEach((i,e)=>{i.addEventListener("click",function(){t[e].classList.contains("is-hidden")||(t[e].classList.add("is-hidden"),r[e].classList.remove("is-hidden"),s[e].style.display="block")})})});
//# sourceMappingURL=commonHelpers.js.map
