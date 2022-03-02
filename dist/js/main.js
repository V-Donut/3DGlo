(()=>{"use strict";const e=e=>e.replace(/[^а-яА-Я-\s]/g,""),t=e=>e.replace(/[^\d-\(\)]/g,""),r=e=>e.replace(/[^a-zA-Z0-9-_@\.!~\*']/g,"");(e=>{const t=document.getElementById("timer-hours"),r=document.getElementById("timer-minutes"),a=document.getElementById("timer-seconds"),n=e=>1===e.toString().length?"0"+e:e,l=e=>{let o=(()=>{let e=(new Date("16 april 2022").getTime()-(new Date).getTime())/1e3,t=Math.floor(e/60/60),r=Math.floor(e/60%60),a=Math.floor(e%60);return e<=0&&(t=0,r=0,a=0),{timeRemaining:e,hours:t,minutes:r,seconds:a}})();t.textContent=n(o.hours),r.textContent=n(o.minutes),a.textContent=n(o.seconds),e&&o.timeRemaining>0&&setInterval(l,1e3,!1)};l(!0)})(),(()=>{const e=document.querySelector("menu");document.addEventListener("click",(t=>{(t.target.classList.contains("close-btn")||t.target.matches(".active-menu ul>li>a")||t.target.closest(".menu")||e.classList.contains("active-menu")&&!t.target.closest(".active-menu"))&&e.classList.toggle("active-menu")}))})(),(()=>{const a=document.querySelector(".popup"),n=document.querySelectorAll(".popup-btn"),l=a.querySelector(".popup-content"),o=a.querySelector("#form3-name"),c=a.querySelector("#form3-phone"),s=a.querySelector("#form3-email");let i,u=-30,d=document.documentElement.clientWidth;const m=()=>{i=requestAnimationFrame(m),u<=10?(u++,l.style.top=u+"%"):cancelAnimationFrame(i)};n.forEach((e=>{e.addEventListener("click",(()=>{d>=768&&(l.style.top="-30%"),a.style.display="block",d>=768&&m()}))})),a.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(a.style.display="none",u=-30)})),o.addEventListener("input",(t=>{t.target.value=e(t.target.value)})),c.addEventListener("input",(e=>{e.target.value=t(e.target.value)})),s.addEventListener("input",(e=>{e.target.value=r(e.target.value)}))})(),(()=>{const e=document.querySelector(".calc-block"),t=e.querySelector(".calc-square"),r=e.querySelector(".calc-count"),a=e.querySelector(".calc-day");t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")})),r.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")})),a.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))})(),(()=>{const a=document.getElementById("form2"),n=a.querySelector("#form2-name"),l=a.querySelector("#form2-email"),o=a.querySelector("#form2-phone"),c=a.querySelector("#form2-message");n.addEventListener("input",(t=>{t.target.value=e(t.target.value)})),o.addEventListener("input",(e=>{e.target.value=t(e.target.value)})),l.addEventListener("input",(e=>{e.target.value=r(e.target.value)})),c.addEventListener("input",(t=>{t.target.value=e(t.target.value)}))})(),(()=>{const a=document.getElementById("form1"),n=a.querySelector("#form1-name"),l=a.querySelector("#form1-email"),o=a.querySelector("#form1-phone");n.addEventListener("input",(t=>{t.target.value=e(t.target.value)})),o.addEventListener("input",(e=>{e.target.value=t(e.target.value)})),l.addEventListener("input",(e=>{e.target.value=r(e.target.value)}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),r=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const a=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===a?(e.classList.add("active"),r[t].classList.remove("d-none")):(e.classList.remove("active"),r[t].classList.add("d-none"))}))}}))})(),(e=>{const{slider:t,slide:r,dotsList:a,dot:n,arrows:l,prev:o,next:c,slideActive:s=".slide-active",dotActive:i=".dot-active"}=e,u=document.querySelector(t),d=document.querySelectorAll(r),m=document.querySelector(a);if(!u||!d.length)return;let v,g,p=0;(e=>{const t=n.replace(".","");for(let r=0;r<e;r++){let e=document.createElement("li");e.className=0===r?t+" "+i:t,m.append(e)}v=document.querySelectorAll(n)})(d.length);const y=(e,t,r)=>{e[t].classList.remove(r.replace(".",""))},L=(e,t,r)=>{e[t].classList.add(r.replace(".",""))},E=()=>{y(d,p,s),y(v,p,i),p++,p>=d.length&&(p=0),L(d,p,s),L(v,p,i)},h=(e=1500)=>{g=setInterval(E,e)};u.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(n+", "+l)&&(y(d,p,s),y(v,p,i),e.target.matches(c)?p++:e.target.matches(o)?p--:e.target.classList.contains(n.replace(".",""))&&v.forEach(((t,r)=>{e.target===t&&(p=r)})),p>=d.length&&(p=0),p<0&&(p=d.length-1),L(d,p,s),L(v,p,i))})),u.addEventListener("mouseenter",(e=>{e.target.matches(n+", "+l)&&clearInterval(g)}),!0),u.addEventListener("mouseleave",(e=>{e.target.matches(n+", "+l)&&h(2e3)}),!0),h(2e3)})({slider:".portfolio-content",slide:".portfolio-item",dotsList:".portfolio-dots",dot:".dot",arrows:".portfolio-btn",prev:".prev",next:".next",slideActive:".portfolio-item-active",dotActive:".dot-active"})})();