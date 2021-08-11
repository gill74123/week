$(document).ready(function () {
  var swiper = new Swiper(".swiperContent", {
    // 循環
    loop: true,

    // 自動播放
    // autoplay: true,
    speed: 700,

    // 看到的slide的數量
    slidesPerView: 1,
    spaceBetween: 10,

    // 斷點可看見的slide數量
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    },
    
    // 分頁
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});