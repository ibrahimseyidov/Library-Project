$(document).ready(function () {
  $(".your-class").slick({
    prevArrow: `<div class="prev">《</div>`,
    nextArrow: `<div class="next">》</div>`,
  });
});

$(document).ready(function () {
  $(".books-slider-container").slick({
    prevArrow: `<div class="left-btn">
    <img src="../icons/leftBtn.svg" alt="left-btn">
    </div>`,
    nextArrow: ` <div class="right-btn">
    <img src="../icons/rightBtn.svg" alt="right-btn">
    </div>`,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 696,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 544,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  });

  $(".second-container").slick({
    prevArrow: `<div class="left-btn">
    <img src="../icons/leftBtn.svg" alt="left-btn">
    </div>`,
    nextArrow: ` <div class="right-btn">
    <img src="../icons/rightBtn.svg" alt="right-btn">
    </div>`,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 696,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 544,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  });
});


