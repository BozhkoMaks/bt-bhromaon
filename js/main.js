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

document.addEventListener("mousemove", parallax);

function parallax(event) {
  let bgImg = document.querySelectorAll(".level");
  //   console.log(bgImg);
  bgImg.forEach(function (level) {
    let speed = level.getAttribute("data-speed");
    level.style.transform = `translate(${(event.clientX * speed) / 100}px, ${
      (event.clientY * speed) / 100
    }px)`;
  });
}

// ------------ Медленные якоря-------------
$(document).ready(function () {
  $("#sticky-nav").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr("href"),
      top = $(id).offset().top - 75;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

$(document).ready(function () {
  $("#scroll-down").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

function initMap() {
  let myMap = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 47.858533,
      lng: 35.10479,
    },
    zoom: 18,
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#242f3e",
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#746855",
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#242f3e",
          },
        ],
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#d59563",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#d59563",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#263c3f",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#6b9a76",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#38414e",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#212a37",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9ca5b3",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#746855",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#1f2835",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#f3d19c",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          {
            color: "#2f3948",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#d59563",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#17263c",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#515c6d",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#17263c",
          },
        ],
      },
    ],
  });
  let iconBase = "img/canvas.png";
  let marker = new google.maps.Marker({
    position: { lat: 47.858462, lng: 35.105109 },
    map: myMap,
    title: "We are here!",
    icon: iconBase,
  });
}
