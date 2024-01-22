import{i as c,a as g,S as f}from"./assets/vendor-89feecc5.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="/goit-js-hw-12/assets/x-octagon-2f098169.svg",l=document.querySelector(".data-select"),u=document.querySelector(".gallery-list"),n=document.querySelector(".loader");l.addEventListener("submit",o=>{o.preventDefault();const i=l.elements.request.value.trim();u.innerHTML="",n.classList.toggle("loader-active"),h(i).then(({data:r})=>{p(r)}).catch(()=>{c.error({message:"Something wrong. Please try again later!",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"20",position:"topRight",backgroundColor:"#EF4040",iconUrl:m,icon:"fa-regular",iconColor:"#FAFAFB",maxWidth:"500",transitionIn:"bounceInLeft"})}).finally(()=>{n.classList.toggle("loader-active"),l.reset()})});const d=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0});function h(o){return g.get(`https://pixabay.com/api/?key=41825347-2a0e6255edbe790f7737a6334&q=${o}&${d}`)}function p(o){o.totalHits<=0&&c.error({message:"Sorry, there are no images matching </br> your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"20",position:"topRight",backgroundColor:"#EF4040",iconUrl:m,iconColor:"#FAFAFB",maxWidth:"500",closeOnClick:!0,close:!1});const i=o.hits.map(s=>`<li class="gallery-item">
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
        </li>`).join("");u.insertAdjacentHTML("beforeend",i),new f(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
