import{i as c,a as L,S as b}from"./assets/vendor-89feecc5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const f of e.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();const g="/goit-js-hw-12/assets/x-octagon-2f098169.svg",n=document.querySelector(".data-select"),p=document.querySelector(".gallery-list"),m=document.querySelector(".loader"),a=document.querySelector(".add-button");let h,i=1,u;const d=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:1}),v=d.get("per_page");n.addEventListener("submit",s=>{s.preventDefault(),m.classList.toggle("active"),a.classList.add("active"),h="";const o=n.elements.request.value.trim();p.innerHTML="",i=1,d.set("page",i),h=o,y(o).then(({data:r})=>{F(r)}).catch(()=>{c.error({message:"Something wrong. Please try again later!",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"20",position:"topRight",backgroundColor:"#EF4040",iconUrl:g,icon:"fa-regular",iconColor:"#FAFAFB",maxWidth:"500",transitionIn:"bounceInLeft"})}).finally(()=>{m.classList.toggle("active"),i<=u&&a.classList.remove("active"),n.reset()})});async function y(s){return await L.get(`https://pixabay.com/api/?key=41825347-2a0e6255edbe790f7737a6334&q=${s}&${d}`)}function F(s){u=Math.ceil(s.totalHits/v),s.totalHits<=0?c.error({message:"Sorry, there are no images matching </br> your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"20",position:"topRight",backgroundColor:"#EF4040",iconUrl:g,iconColor:"#FAFAFB",maxWidth:"500",closeOnClick:!0,close:!1}):i>u&&c.error({message:"We are sorry, but you have reached the end of search results.",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"20",position:"topRight",backgroundColor:"#91e3fa",iconUrl:g,iconColor:"#FAFAFB",maxWidth:"500",closeOnClick:!0,close:!1});const o=s.hits.map(e=>`<li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
    	      <img
		          class="gallery-image"
		          src="${e.webformatURL}"
		          alt="${e.tags}"
              width="360"
              height="200"
              ;
    	      />
            <ul class="info-list">
              <li class="info-item">
                <h class="item-title">Likes</h>
                <p class="item-content">${e.likes}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Views</h>
                <p class="item-content">${e.views}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Comments</h>
                <p class="item-content">${e.comments}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Downloads</h>
                <p class="item-content">${e.downloads}</p>
              </li>
            </ul>
  		    </a>
        </li>`).join("");p.insertAdjacentHTML("beforeend",o);const l=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy(0,2*l),new b(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}a.addEventListener("click",s=>{s.preventDefault(),m.classList.toggle("active"),a.classList.add("active"),i+=1,d.set("page",i),y(h).then(({data:o})=>{F(o)}).catch(()=>{c.error({message:"Something wrong. Please try again later!",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"20",position:"topRight",backgroundColor:"#EF4040",iconUrl:g,icon:"fa-regular",iconColor:"#FAFAFB",maxWidth:"500",transitionIn:"bounceInLeft"})}).finally(()=>{m.classList.toggle("active"),i<=u&&a.classList.remove("active"),n.reset()})});
//# sourceMappingURL=commonHelpers.js.map
