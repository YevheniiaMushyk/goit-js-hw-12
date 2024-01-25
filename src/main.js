import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import icon from './img/x-octagon.svg';

import axios from 'axios';

const userInput = document.querySelector('.data-select');
const userList = document.querySelector('.gallery-list');
const loader = document.querySelector('.loader');
const addButton = document.querySelector('.add-button');

let userInputForAdd;
let page = 1;
console.log(page);

let searchParams = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 3,
  page: page,
});
console.log(`27 ${searchParams.page}`);

userInput.addEventListener('submit', e => {
  e.preventDefault();
  userInputForAdd = '';
  const userInputValue = userInput.elements.request.value.trim();
  userList.innerHTML = '';
  // page = 1;
  // console.dir(searchParams);
  loader.classList.toggle('active');
  userInputForAdd = userInputValue;

  fetchGallery(userInputValue)
    .then(({ data }) => {
      renderGallery(data);
    })
    .catch(() => {
      iziToast.error({
        message: 'Something wrong. Please try again later!',
        messageColor: '#FAFAFB',
        messageSize: '16',
        messageLineHeight: '20',
        position: 'topRight',
        backgroundColor: '#EF4040',
        iconUrl: icon,
        icon: 'fa-regular',
        iconColor: '#FAFAFB',
        maxWidth: '500',
        transitionIn: 'bounceInLeft',
      });
    })
    .finally(() => {
      loader.classList.toggle('active');
      addButton.classList.toggle('active');
      userInput.reset();
    });
});

async function fetchGallery(userRequest) {
  console.log(`66 ${searchParams.page}`);
  return await axios.get(
    `https://pixabay.com/api/?key=41825347-2a0e6255edbe790f7737a6334&q=${userRequest}&${searchParams}`
  );
}

function renderGallery(data) {
  if (data.totalHits <= 0) {
    iziToast.error({
      message:
        'Sorry, there are no images matching </br> your search query. Please try again!',
      messageColor: '#FAFAFB',
      messageSize: '16',
      messageLineHeight: '20',
      position: 'topRight',
      backgroundColor: '#EF4040',
      iconUrl: icon,
      iconColor: '#FAFAFB',
      maxWidth: '500',
      closeOnClick: true,
      close: false,
    });
  }
  const markup = data.hits
    .map(hit => {
      return `<li class="gallery-item">
          <a class="gallery-link" href="${hit.largeImageURL}">
    	      <img
		          class="gallery-image"
		          src="${hit.webformatURL}"
		          alt="${hit.tags}"
              width="360"
              height="200"
              ;
    	      />
            <ul class="info-list">
              <li class="info-item">
                <h class="item-title">Likes</h>
                <p class="item-content">${hit.likes}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Views</h>
                <p class="item-content">${hit.views}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Comments</h>
                <p class="item-content">${hit.comments}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Downloads</h>
                <p class="item-content">${hit.downloads}</p>
              </li>
            </ul>
  		    </a>
        </li>`;
    })
    .join('');
  userList.insertAdjacentHTML('beforeend', markup);

  const lightbox = new SimpleLightbox('.gallery-list a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.refresh();
}

addButton.addEventListener('click', evt => {
  evt.preventDefault();
  page += 1;
  console.log(page);
  console.log(`135 ${searchParams.page}`);

  fetchGallery(userInputForAdd).then(({ data }) => {
    renderGallery(data);
  });
  // .catch(() => {
  //   iziToast.error({
  //     message: 'Something wrong. Please try again later!',
  //     messageColor: '#FAFAFB',
  //     messageSize: '16',
  //     messageLineHeight: '20',
  //     position: 'topRight',
  //     backgroundColor: '#EF4040',
  //     iconUrl: icon,
  //     icon: 'fa-regular',
  //     iconColor: '#FAFAFB',
  //     maxWidth: '500',
  //     transitionIn: 'bounceInLeft',
  //   });
  // })
  // .finally(() => {
  //   loader.classList.toggle('active');
  //   addButton.classList.toggle('active');
  // });
});
