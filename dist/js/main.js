(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),c=e=>1===e.toString().length?"0"+e:e,l=e=>{let r=(()=>{let e=(new Date("26 february 2022").getTime()-(new Date).getTime())/1e3,t=Math.floor(e/60/60),n=Math.floor(e/60%60),o=Math.floor(e%60);return e<=0&&(t=0,n=0,o=0),{timeRemaining:e,hours:t,minutes:n,seconds:o}})();t.textContent=c(r.hours),n.textContent=c(r.minutes),o.textContent=c(r.seconds),e&&r.timeRemaining>0&&setInterval(l,1e3,!1)};l(!0)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),n.addEventListener("click",c),o.forEach((e=>e.addEventListener("click",c)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close"),o=e.querySelector(".popup-content");let c,l=-30,r=document.documentElement.clientWidth;const i=()=>{c=requestAnimationFrame(i),l<=10?(l++,o.style.top=l+"%"):cancelAnimationFrame(c)};t.forEach((t=>{t.addEventListener("click",(()=>{r>=768&&(o.style.top="-30%"),e.style.display="block",r>=768&&i()}))})),n.addEventListener("click",(()=>{e.style.display="none",l=-30}))})()})();