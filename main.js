(()=>{"use strict";function e(e,t,d){const a=document.querySelector("main"),n=document.createElement("div"),s=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div"),o=document.createElement("div"),l=document.createElement("button"),r=document.createElement("p"),m=document.createElement("p"),u=document.createElement("img");u.src="../src/assets/trash-can-outline.svg",s.classList.add("right-side"),i.classList.add("left-side"),c.classList.add("taskContainer"),o.classList.add(d),o.classList.add("colorContainer"),l.classList.add("active"),r.textContent=e,m.textContent="details",m.classList.add("desativado"),m.addEventListener("click",(function(){!function(){const e=document.createElement("div"),d=document.createElement("p");if(d.classList.add("detail"),e.classList.add("under-side"),d.textContent=t,m.classList.contains("desativado"))m.classList.remove("desativado"),m.classList.add("ativado"),n.appendChild(e),e.appendChild(d);else if(m.classList.contains("ativado")){m.classList.remove("ativado"),m.classList.add("desativado");const e=c.querySelector(".under-side");e.parentNode.removeChild(e)}}()})),u.addEventListener("click",(function(){c.parentNode.removeChild(c)}));const p=[l,u];[r,m].forEach((e=>i.appendChild(e))),p.forEach((e=>s.appendChild(e))),n.classList.add("contentContainer"),c.appendChild(o),n.appendChild(i),n.appendChild(s),c.appendChild(n),a.appendChild(c)}function t(t,d,a){this.title=t,this.description=d,this.priority=a,e(this.title,this.description,this.priority)}document.getElementById("submit").addEventListener("click",(function(e){e.preventDefault(),new t(document.getElementById("taskName").value,document.getElementById("taskDesc").value,document.getElementById("choice").value)})),e("Gabriel","Mamãe disse que tenho que lavar as louças antes do anoitecer","high")})();