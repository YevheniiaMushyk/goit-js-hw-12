import{i as u,a as L,S as b}from"./assets/vendor-89feecc5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const d="/goit-js-hw-12/assets/x-octagon-2f098169.svg",c=document.querySelector(".data-select"),f=document.querySelector(".gallery-list"),m=document.querySelector(".loader"),p=document.querySelector(".add-button");let g,s=1;console.log(`Строка 18 Встановлюємо початкове значення: page = ${s}`);const i=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:3,page:s});i[s]=s;console.log(`Строка 28 Встановлюємо початкове значення: searchParams.page=${i[s]}`);c.addEventListener("submit",r=>{r.preventDefault(),g="";const o=c.elements.request.value.trim();f.innerHTML="",m.classList.toggle("active"),g=o,h(o).then(({data:l})=>{y(l)}).catch(()=>{u.error({message:"Something wrong. Please try again later!",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"20",position:"topRight",backgroundColor:"#EF4040",iconUrl:d,icon:"fa-regular",iconColor:"#FAFAFB",maxWidth:"500",transitionIn:"bounceInLeft"})}).finally(()=>{m.classList.toggle("active"),p.classList.toggle("active"),c.reset()})});async function h(r){return console.log(`Строка 67 параметри перед запитом searchParams.page =${i[s]}`),await L.get(`https://pixabay.com/api/?key=41825347-2a0e6255edbe790f7737a6334&q=${r}&${i}`)}function y(r){r.totalHits<=0&&u.error({message:"Sorry, there are no images matching </br> your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"20",position:"topRight",backgroundColor:"#EF4040",iconUrl:d,iconColor:"#FAFAFB",maxWidth:"500",closeOnClick:!0,close:!1});const o=r.hits.map(a=>`<li class="gallery-item">
          <a class="gallery-link" href="${a.largeImageURL}">
    	      <img
		          class="gallery-image"
		          src="${a.webformatURL}"
		          alt="${a.tags}"
              width="360"
              height="200"
              ;
    	      />
            <ul class="info-list">
              <li class="info-item">
                <h class="item-title">Likes</h>
                <p class="item-content">${a.likes}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Views</h>
                <p class="item-content">${a.views}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Comments</h>
                <p class="item-content">${a.comments}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Downloads</h>
                <p class="item-content">${a.downloads}</p>
              </li>
            </ul>
  		    </a>
        </li>`).join("");f.insertAdjacentHTML("beforeend",o),new b(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}p.addEventListener("click",r=>{r.preventDefault(),s+=1,console.log(`Строка 136 Збільшуємо значення на 1: page=${s}`),i[s]=s,console.log(`Строка 138 searchParams.page=${i[s]}`),h(g).then(({data:o})=>{y(o)})});
//# sourceMappingURL=commonHelpers.js.map
