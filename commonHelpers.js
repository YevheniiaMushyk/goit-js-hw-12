import{i as m,a as L,S as b}from"./assets/vendor-89feecc5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const d="/goit-js-hw-12/assets/x-octagon-2f098169.svg",c=document.querySelector(".data-select"),f=document.querySelector(".gallery-list"),u=document.querySelector(".loader"),p=document.querySelector(".add-button");let g,r=1;console.log(r);let a=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:3,page:r});console.log(`27 ${a.page}`);c.addEventListener("submit",i=>{i.preventDefault(),g="";const o=c.elements.request.value.trim();f.innerHTML="",u.classList.toggle("active"),g=o,h(o).then(({data:l})=>{y(l)}).catch(()=>{m.error({message:"Something wrong. Please try again later!",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"20",position:"topRight",backgroundColor:"#EF4040",iconUrl:d,icon:"fa-regular",iconColor:"#FAFAFB",maxWidth:"500",transitionIn:"bounceInLeft"})}).finally(()=>{u.classList.toggle("active"),p.classList.toggle("active"),c.reset()})});async function h(i){return console.log(`66 ${a.page}`),await L.get(`https://pixabay.com/api/?key=41825347-2a0e6255edbe790f7737a6334&q=${i}&${a}`)}function y(i){i.totalHits<=0&&m.error({message:"Sorry, there are no images matching </br> your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"20",position:"topRight",backgroundColor:"#EF4040",iconUrl:d,iconColor:"#FAFAFB",maxWidth:"500",closeOnClick:!0,close:!1});const o=i.hits.map(s=>`<li class="gallery-item">
          <a class="gallery-link" href="${s.largeImageURL}">
    	      <img
		          class="gallery-image"
		          src="${s.webformatURL}"
		          alt="${s.tags}"
              width="360"
              height="200"
              ;
    	      />
            <ul class="info-list">
              <li class="info-item">
                <h class="item-title">Likes</h>
                <p class="item-content">${s.likes}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Views</h>
                <p class="item-content">${s.views}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Comments</h>
                <p class="item-content">${s.comments}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Downloads</h>
                <p class="item-content">${s.downloads}</p>
              </li>
            </ul>
  		    </a>
        </li>`).join("");f.insertAdjacentHTML("beforeend",o),new b(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}p.addEventListener("click",i=>{i.preventDefault(),r+=1,console.log(r),console.log(`135 ${a.page}`),h(g).then(({data:o})=>{y(o)})});
//# sourceMappingURL=commonHelpers.js.map
