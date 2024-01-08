<template>
  <div>
    <div class="font1 project-bg position-relative">
      <div class="desk_tab_screen container">
        <!-- slider for mobile -->
        <!-- cont-space -->
        <div class="row pt-2 overflow-hidden">
          <div
            v-motion-slide-visible-left
            class="col-md-3.5 col-lg-4 col-xl-3 z-content"
          >
            <!-- header -->
            <!-- fake div and h1 tag -->
            <h2 class="fontreg1 fs-550 text-white-50">&#8249;div&#8250;</h2>
            <!-- fake div and h1 tag -->
            <h2 class="fontreg1 paragraph-height mx-4 fs-350 text-white-50">
              &#8249;h1&#8250;
            </h2>
            <h1 class="project-head-font-size fw-bold">Recent Projects</h1>
            <!-- fake div and h1 tag -->
            <h2 class="fontreg1 paragraph-height mx-4 fs-350 text-white-50">
              &#8249;/h1&#8250;
            </h2>
            <!-- fake div and h1 tag -->
            <h2 class="fontreg1 fs-550 text-white-50">&#8249;/div&#8250;</h2>
            <!-- project card -->
          </div>
          <div
            v-motion-slide-visible-left
            class="col-md-3.5 col-lg-4 col-xl-3 z-content"
          >
            <div class="d-flex justify-content-center">
              <a
                href="https://buildingsandmore.ng/"
                class="text-decoration-none py-1 text-reset"
              >
                <div class="my-2">
                  <!-- project card -->
                  <div class="bord-button2" @click="removeFirstCard">
                    <div
                      style="width: 300px"
                      class="d-flex justify-content-between mt-2"
                    >
                      <div class="">
                        <span class="fs-400 fw-bold"
                          >Buildings and More Limited</span
                        >
                        <br />
                        <span class="fs-170"
                          >Ecommerce for everything building and construction
                          related</span
                        >
                      </div>
                      <!-- open icon -->
                      <div class="">
                        <span
                          ><img
                            style="width: 40px"
                            src="@/assets/icon/down-arrow.png"
                            alt=""
                            class="bggreen rounded-circle p-2"
                        /></span>
                      </div>
                    </div>
                    <!-- skill used to build it -->
                    <div>
                      <div
                        class="d-flex align-items center my-2 fw-bold green3"
                      >
                        <div>
                          <span class="rounded-pill bggreen fs-150 p-1 mx-1"
                            >HTML</span
                          >
                        </div>
                        <div>
                          <span class="rounded-pill bggreen fs-150 p-1 mx-1"
                            >CSS</span
                          >
                        </div>
                        <div>
                          <span class="rounded-pill bggreen fs-150 p-1 mx-1"
                            >Nuxt Js</span
                          >
                        </div>
                        <div>
                          <span class="rounded-pill bggreen fs-150 p-1 mx-1"
                            >Bootstrap</span
                          >
                        </div>
                      </div>
                    </div>
                    <!-- image of project -->
                    <a target="_blank" href="https://buildingsandmoreng.com/">
                      <div
                        style="width: 280px; height: 200px"
                        class="bgwhite border rounded"
                      >
                        <!-- <span class="bgwhite"></span> -->
                        <div
                          class="d-flex bgwhite justify-content-center align-items-center py-3"
                        >
                          <img
                            src="@/assets/images/portfolioBaml.png"
                            alt=""
                            class="w-100"
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div
            v-motion-slide-visible-top
            class="col-md-3.5 col-lg-4 col-xl-3 z-content"
          >
            <!-- house finder -->
            <div class="d-flex justify-content-center">
              <a
                href="https://housefinder.com.ng/"
                class="text-decoration-none text-reset"
              >
                <div class="my-2">
                  <!-- project card -->
                  <div class="bord-button2" @click="removeFirstCard">
                    <div class="d-flex justify-content-between mt-2">
                      <div class="">
                        <span class="fs-450 fw-bold">House Finder</span>
                        <br />
                        <span class="fs-150">
                          Real Estate platform to buy,sell and rent buildings
                        </span>
                      </div>
                      <!-- open icon -->
                      <div class="">
                        <span
                          ><img
                            style="width: 40px"
                            src="@/assets/icon/down-arrow.png"
                            alt=""
                            class="bggreen rounded-circle p-2"
                        /></span>
                      </div>
                    </div>
                    <!-- skill used to build it -->
                    <div>
                      <div
                        class="d-flex align-items center my-2 fw-bold green3"
                      >
                        <div>
                          <span class="rounded-pill bggreen fs-150 p-1 mx-1"
                            >HTML</span
                          >
                        </div>
                        <div>
                          <span class="rounded-pill bggreen fs-150 p-1 mx-1"
                            >CSS</span
                          >
                        </div>
                        <div>
                          <span class="rounded-pill bggreen fs-150 p-1 mx-1"
                            >Vue Js</span
                          >
                        </div>
                        <div>
                          <span class="rounded-pill bggreen fs-150 p-1 mx-1"
                            >Nuxt Js</span
                          >
                        </div>
                        <div>
                          <span class="rounded-pill bggreen fs-150 p-1 mx-1"
                            >Boostrap</span
                          >
                        </div>
                      </div>
                    </div>
                    <!-- image of project -->
                    <a target="_blank" href="https://buildingsandmore.ng/">
                      <div
                        style="width: 280px; height: 200px"
                        class="bgwhite border projectanima rounded"
                      >
                        <!-- <span class="bgwhite"></span> -->
                        <div
                          class="d-flex justify-content-center logo-marg align-items-center py-3"
                        >
                          <img
                            src="@/assets/images/housefinder.png"
                            alt=""
                            class="w-100"
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div
            v-motion-slide-visible-right
            class="col-md-3.5 col-lg-4 col-xl-3 z-content"
          >
            <div class="d-flex justify-content-center">
              <a
                href="https://bitsintravelsandtours.com/"
                class="text-decoration-none text-reset"
              >
                <div class="my-2">
                  <!-- project card -->
                  <div class="bord-button2" @click="removeFirstCard">
                    <div class="d-flex justify-content-between mt-2">
                      <div class="">
                        <span class="fs-450 fw-bold"
                          >Bitsin Travels and Tours</span
                        >
                        <br />
                        <span class="fs-150"
                          >Hotel and Flight Bookings engine</span
                        >
                        <!-- <span class="fs-150"> Software</span> -->
                      </div>
                      <!-- open icon -->
                      <div>
                        <span
                          ><img
                            style="width: 40px"
                            src="@/assets/icon/down-arrow.png"
                            alt=""
                            class="bggreen rounded-circle p-2"
                        /></span>
                      </div>
                    </div>
                    <!-- skill used to build it -->
                    <div>
                      <div
                        class="d-flex align-items center green3 fw-bold my-2"
                      >
                        <div>
                          <span class="rounded-pill bggreen fs-150 p-1 mx-1"
                            >HTML</span
                          >
                        </div>
                        <div>
                          <span class="rounded-pill bggreen fs-150 p-1 mx-1"
                            >CSS</span
                          >
                        </div>
                        <div>
                          <span class="rounded-pill bggreen fs-150 p-1 mx-1"
                            >Nuxt Js</span
                          >
                        </div>
                        <div>
                          <span class="rounded-pill bggreen fs-150 p-1 mx-1"
                            >Bootstrap</span
                          >
                        </div>
                      </div>
                    </div>
                    <!-- image of project -->
                    <a
                      target="_blank"
                      href="https://bitsintravelsandtours.com/"
                    >
                      <div
                        style="width: 280px; height: 200px"
                        class="bgwhite projectanima border rounded position-relative"
                      >
                        <!-- <span class="bgwhite"></span> -->
                        <div
                          class="d-flex justify-content-center py-3 align-items-center"
                        >
                          <img
                            src="@/assets/images/bitsin.png"
                            alt=""
                            class="w-100"
                          />
                        </div>
                        <div></div>
                      </div>
                    </a>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <!-- view more -->
          <router-link to="/viewMore">
            <div class="toppromob row justify-content-center">
              <div class="w-50">
                <a href="#" class="contact-button py-2 my-5">
                  <div class="z-content">
                    <span class="bg"></span>
                    <span class="base"></span>
                    <span class="text fw-bold"> View more </span>
                  </div>
                </a>
              </div>
            </div>
          </router-link>
          <router-view></router-view>
        </div>
      </div>

      <div class="">
        <h1
          style="font-size: 22em"
          class="bgContact2 bgfont text-center fontneubold"
        >
          Project
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import "animate.css";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default {
  data() {
    return {
      showfirst: false,

      charIndex: 0,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Carousel,
    Slide,
    // Navigationn,
  },
  methods: {
    removeFirstCard() {
      this.showfirst = true;
    },
    removeFirst() {
      this.showfirst = false;
    },
  },

  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation],
    };
  },
};
</script>

<style scoped>
/* centering icon of raadaa card */
.center-icon {
  position: absolute;
  /* top: 7rem; */
  bottom: 5rem;
}
/* projects animation */
.toppro {
  padding: 5rem 0rem 0rem 0rem;
}
.projectanima:hover {
  animation: pulse;
  animation-duration: 2s;
}
/* about project */
.project-text {
  text-align: justify !important;
}
/* .logo-marg {
  margin: 4rem 0rem !important;
} */

/* background text */

.bgContact2 {
  /* font-size: 24rem !important; */
  color: rgba(105, 105, 105, 0.199) !important;
  z-index: 0;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  /* top: 0; */
}
.z-content {
  z-index: 9999 !important ;
}

/* projects button */
.contact-button {
  text-decoration: none;
  width: 100%;
  /* max-width: 200px; */
  height: 70px;
  display: block;
  line-height: 50px;
  /* letter-spacing: 3px; */
  position: relative;
  text-align: center;
  color: #08fdd8;
  /* margin-top: 50px; */
}
.contact-button div {
  position: relative;
  top: 2rem !important;
  left: 0rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}
.contact-button span.bg {
  position: absolute;
  width: 0%;
  height: 100%;
  left: -5px;
  top: 0;
  transition: all 0.3s ease-in-out;
  background-color: #06d599;
  transform: skewX(-19deg);
}
.contact-button:hover span.bg {
  width: 110%;
}
.contact-button span.base {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  border: 2px solid #06d599;
  box-sizing: border-box;
}
.contact-button span.text {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  color: white;
  left: 0;
}
.contact-button:hover span.text {
  color: #162120;
}
/* animate buttons in code */
.animate__animated.animate__pulse {
  --animate-duration: 2s !important;
  --animate-delay: 0.3s;
  --animate-repeat: 3 !important;
}

/* projects space */
.works-space {
  padding: 7.5rem 0rem !important;
}

.bord-button {
  border: 2px solid var(--clr-green) !important;
}
.bord-button2 {
  border-top: 2px solid white !important;
  width: 300px;
}
/* background color */
.project-bg {
  background-color: #162120;
  color: white;
  height: 100%;
  /* padding: -7rem 0rem; */
}
/* project header */
.project-head-font-size {
  font-size: 4.5rem !important;
  color: #06d599 !important;
}

/* remove modal button */
.cancelstyle {
  position: fixed;
  top: 0;
  z-index: 3000;
  left: 0;
  right: 0;
}
.mob-width {
  max-width: 95%;
  margin: auto;
}
@media (max-width: 768px) {
  .project-bg {
    background-color: #162120;
    color: white;
    height: auto;
    /* padding: -7rem 0rem; */
  }
  /* projects space */
  .works-space {
    padding: 0rem 0rem !important;
  }
  /* project header */
  .project-head-font-size {
    font-size: 2.5rem !important;
    padding: 0rem 2rem !important;
  }
  .cont-space {
    margin: 1rem 0rem !important;
  }
  .contact-button div {
    position: relative;
    top: 0rem !important;
    left: 0rem;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }
}
@media (max-width: 768px) {
  .not-on-mobile {
    display: none !important;
  }
  .toppromob {
    padding: 3rem 0rem 0rem 0rem;
  }
}
@media (min-width: 768px) {
  .not-on-desktop {
    display: none !important;
  }
}
@media (min-width: 1410px) {
  .desk_tab_screen {
    padding: 9rem 0rem;
  }
  .mob-width {
    max-width: 1250px !important;
  }
  .max2 {
    max-width: 100% !important;
  }
}
@media (min-width: 1268px) {
  .desk_tab_screen {
    padding: 9rem 0rem;
  }
}
img {
  object-fit: cover !important;
}
@media (max-width: 1197px) {
  .bgfont {
    font-size: 25vw !important;
  }
}
</style>
