import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

import { info } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
// import '@pnotify/core/dist/Material.css';

import Swiper,{ Navigation, Pagination } from 'swiper';

new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

tippy('.primary-banner .cta-btn', {
  content: 'Скажи паляниця',
  placement: 'bottom',
});

const onClick = () => {
  info({
    title: "Button Clicked",
    text:
      "You have clicked the button. You may now complete the process of reading the notice.",
  
  });
}

document.querySelector('.primary-banner .cta-btn').addEventListener('click', onClick)



import Typed from 'typed.js';

new Typed('.primary-banner .text', {
  strings: ['Знижки на пиво', 'Пиво за дешево до суботи'],
  typeSpeed: 50,
  backSpeed: 40,
  loop: true,
});
  

