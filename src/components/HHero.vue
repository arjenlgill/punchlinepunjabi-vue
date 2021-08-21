<template>
  <section>
    <div class="hero-section-div-block">
      <div class="marquee-wrapper">
        <div class="main-header">
          <div class="marquee-container-1">
            <h1 id="marquee-h1">Apna source for punchline Punjabi music</h1>
          </div>

          <div class="marquee-container-2">
            <span id="marquee-text-2">Fresh content coming weekly</span>
          </div>
        </div>
      </div>

      <!--hero slider container start-->

      <div class="hero-slider-container">
        <div v-on:click="init" id="next" class="arrow">></div>

        <div class="slider">
          <div class="slide slide1">
            <div class="slide-content">
              <img class="slider-img" src="~@/assets/img/sidhu47.jpg" alt="">
              <h2 class="post-header-slider">
                Sidhu Moose Wala: The Choice of God or Gun
              </h2>
            </div>
          </div>
        </div>

        <div class="slider">
          <div class="slide slide2">
            <div class="slide-content">
              <img class="slider-img" src="~@/assets/img/hundalenemies.jpg" alt="">
              <h2 class="post-header-slider">
                Amantej Hundal: 'Enemies'
              </h2>
            </div>
          </div>
        </div>

        <div class="slider">
          <div class="slide slide3">
            <div class="slide-content">
              <img class="slider-img" src="~@/assets/img/prabhdeepchitta.jpg" alt="">
              <h2 class="post-header-slider">
                Prabh Deep: 'Chitta' Punjabi and English Lyrics
              </h2>
            </div>
          </div>
        </div>

        <div id="prev" class="arrow">&lt;</div>
      </div>

      <!--hero slider container end-->
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    init: function () {
      console.log("this");
    },
  },
  mounted() {
    let sliderImages = document.querySelectorAll(".slider"),
      arrowLeft = document.querySelector("#prev"),
      arrowRight = document.querySelector("#next"),
      current = 0;

    function reset() {
      for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
      }
    }

    function startSlide() {
      reset();
      sliderImages[0].style.display = "block";
    }

    function slideLeft() {
      reset();
      sliderImages[current - 1].style.display = "block";
      current--;
    }

    function slideRight() {
      reset();
      sliderImages[current + 1].style.display = "block";
      current++;
    }

    setInterval(function () {
      if (current === sliderImages.length - 1) {
        current = -1;
      }

      slideRight();
    }, 7000);

    arrowRight.addEventListener("click", function () {
      if (current === sliderImages.length - 1) {
        current = -1;
      }

      slideRight();
    });

    arrowLeft.addEventListener("click", function () {
      if (current === 0) {
        current = sliderImages.length;
      }

      slideLeft();
    });

    startSlide();

    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 170 ||
        document.documentElement.scrollTop > 170
      ) {
        document.getElementById("navbar").style.top = "0px";
      } else {
        document.getElementById("navbar").style.top = "-50px";
      }
    }

    if (window.location.href.match(/index|\//g)) {
      document.querySelector("#navbar").style.top = "-5vh";
    }

    // Universal JS

    function burgerMenu() {
      var burgPopup = document.querySelector(".burger-menu-popup");
      var extBtn = document.querySelector(".burger-menu-exit-button");
      var pgContainer = document.querySelector("#page-container");
      var burgNav = document.querySelector(".burger-menu-nav-link-container");

      document
        .querySelector(".burger-menu-exit-button")
        .addEventListener("click", function () {
          burgPopup.style.height = "0vh";
          burgNav.style.display = "none";
          extBtn.style.display = "none";
          pgContainer.style.display = "block";
        });

      let menArr = [".slide-down-burger-menu", ".burger-menu"];

      menArr.forEach(function (elem) {
        document.querySelector(elem).addEventListener("click", function () {
          burgPopup.style.height = "100vh";
          burgNav.style.display = "block";
          extBtn.style.display = "block";
          pgContainer.style.display = "none";
        });
      });
    }
    burgerMenu();
  },
};
</script>