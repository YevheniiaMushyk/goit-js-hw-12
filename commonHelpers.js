import{i as c,a as L,S as b}from"./assets/vendor-89feecc5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const f of t.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const g="/goit-js-hw-12/assets/x-octagon-2f098169.svg",n=document.querySelector(".data-select"),p=document.querySelector(".gallery-list"),m=document.querySelector(".loader"),r=document.querySelector(".add-button");let h,a=1,u;const d=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:1}),v=d.get("per_page");n.addEventListener("submit",s=>{s.preventDefault(),m.classList.toggle("active"),r.classList.add("active"),h="";const o=n.elements.request.value.trim();p.innerHTML="",a=1,d.set("page",a),h=o,y(o).then(({data:l})=>{F(l)}).catch(()=>{c.error({message:"Something wrong. Please try again later!",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"20",position:"topRight",backgroundColor:"#EF4040",iconUrl:g,icon:"fa-regular",iconColor:"#FAFAFB",maxWidth:"500",transitionIn:"bounceInLeft"})}).finally(()=>{m.classList.toggle("active"),a<=u&&r.classList.remove("active"),n.reset()})});async function y(s){return await L.get(`https://pixabay.com/api/?key=41825347-2a0e6255edbe790f7737a6334&q=${s}&${d}`)}function F(s){u=Math.ceil(s.totalHits/v),s.totalHits<=0?c.error({message:"Sorry, there are no images matching </br> your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"20",position:"topRight",backgroundColor:"#EF4040",iconUrl:g,iconColor:"#FAFAFB",maxWidth:"500",closeOnClick:!0,close:!1}):a>u&&c.error({message:"We are sorry, but you have reached the end of search results.",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"20",position:"topRight",backgroundColor:"#91e3fa",iconUrl:g,iconColor:"#FAFAFB",maxWidth:"500",closeOnClick:!0,close:!1});const o=s.hits.map(i=>`<li class="gallery-item">
          <a class="gallery-link" href="${i.largeImageURL}">
    	      <img
		          class="gallery-image"
		          src="${i.webformatURL}"
		          alt="${i.tags}"
              width="360"
              height="200"
              ;
    	      />
            <ul class="info-list">
              <li class="info-item">
                <h class="item-title">Likes</h>
                <p class="item-content">${i.likes}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Views</h>
                <p class="item-content">${i.views}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Comments</h>
                <p class="item-content">${i.comments}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Downloads</h>
                <p class="item-content">${i.downloads}</p>
              </li>
            </ul>
  		    </a>
        </li>`).join("");p.insertAdjacentHTML("beforeend",o),new b(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}window.scrollBy({top:500,left:0,behavior:"smooth"});r.addEventListener("click",s=>{s.preventDefault(),m.classList.toggle("active"),r.classList.add("active"),a+=1,d.set("page",a),y(h).then(({data:o})=>{F(o)}).catch(()=>{c.error({message:"Something wrong. Please try again later!",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"20",position:"topRight",backgroundColor:"#EF4040",iconUrl:g,icon:"fa-regular",iconColor:"#FAFAFB",maxWidth:"500",transitionIn:"bounceInLeft"})}).finally(()=>{m.classList.toggle("active"),a<=u&&r.classList.remove("active"),n.reset()})});
//# sourceMappingURL=commonHelpers.js.map
