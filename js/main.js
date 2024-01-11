const swiper = new Swiper('.reviews__slider', {
    // закільцьоване обертання слайдів
    loop: true,
    //відображена кількість слайдів
    slidesPerView: 2,
    spaceBetween: 22,
    // стрілки навігації
    navigation: {
      nextEl: '.reviews__item-next',
      prevEl: '.reviews__item-prev',
    },
  
  });