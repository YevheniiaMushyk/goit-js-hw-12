import{i as m,a as y,S as L}from"./assets/vendor-89feecc5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const g="/goit-js-hw-12/assets/x-octagon-2f098169.svg",n=document.querySelector(".data-select"),d=document.querySelector(".gallery-list"),u=document.querySelector(".loader"),f=document.querySelector(".add-button");let c,r=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:3});n.addEventListener("submit",i=>{i.preventDefault(),c="";const s=n.elements.request.value.trim();d.innerHTML="",r.page=1,console.log(`32${r}`),u.classList.toggle("active"),c=s,p(s).then(({data:l})=>{h(l)}).catch(()=>{m.error({message:"Something wrong. Please try again later!",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"20",position:"topRight",backgroundColor:"#EF4040",iconUrl:g,icon:"fa-regular",iconColor:"#FAFAFB",maxWidth:"500",transitionIn:"bounceInLeft"})}).finally(()=>{u.classList.toggle("active"),f.classList.toggle("active"),n.reset()})});async function p(i){return console.log(r),await y.get(`https://pixabay.com/api/?key=41825347-2a0e6255edbe790f7737a6334&q=${i}&${r}`)}function h(i){i.totalHits<=0&&m.error({message:"Sorry, there are no images matching </br> your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"20",position:"topRight",backgroundColor:"#EF4040",iconUrl:g,iconColor:"#FAFAFB",maxWidth:"500",closeOnClick:!0,close:!1});const s=i.hits.map(o=>`<li class="gallery-item">
          <a class="gallery-link" href="${o.largeImageURL}">
    	      <img
		          class="gallery-image"
		          src="${o.webformatURL}"
		          alt="${o.tags}"
              width="360"
              height="200"
              ;
    	      />
            <ul class="info-list">
              <li class="info-item">
                <h class="item-title">Likes</h>
                <p class="item-content">${o.likes}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Views</h>
                <p class="item-content">${o.views}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Comments</h>
                <p class="item-content">${o.comments}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Downloads</h>
                <p class="item-content">${o.downloads}</p>
              </li>
            </ul>
  		    </a>
        </li>`).join("");d.insertAdjacentHTML("beforeend",s),new L(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}f.addEventListener("click",i=>{i.preventDefault(),r.page+=1,console.log(r),p(c).then(({data:s})=>{h(s)})});
//# sourceMappingURL=commonHelpers.js.map
