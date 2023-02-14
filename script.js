const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: false,

    // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

    // Navigation arrows
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  });