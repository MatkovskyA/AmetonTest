$(document).ready(function () {
  $(".questions-slider").slick({
    arrows: true,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1074,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 887,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// аккордион

const titles = document.querySelectorAll(".accordion-title");
const contents = document.querySelectorAll(".accordion-desc");

titles.forEach((item) => {
  item.addEventListener("click", () => {
    //находим активный по data-атрибуту
    const activeContent = document.querySelector("#" + item.dataset.tab);
    //проверяем на наличие класса active(открыт акк или нет)
    if (activeContent.classList.contains("active")) {
      activeContent.classList.remove("active");
      item.classList.remove("active");
      activeContent.style.maxHeight = 0;
    } else {
      contents.forEach((elem) => {
        elem.classList.remove("active");
        elem.style.maxHeight = 0;
      });
      titles.forEach((elem) => elem.classList.remove("active"));

      item.classList.add("active");
      activeContent.classList.add("active");
      activeContent.style.maxHeight = activeContent.scrollHeight + "px";
    }
  });
});
