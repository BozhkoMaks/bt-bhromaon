"use strict";

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $("#btn-top").fadeIn();
    } else {
      $("#btn-top").fadeOut();
    }
  });
  $("#btn-top").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 700);
  });
});

// Слайдер
$(function () {
  $(".slider").slick({
    slidesToShow: 3,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});
