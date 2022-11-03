<template>
  <div class="fontneubold project-bg position-relative">
    <div>
      <!-- <h1 class="bgContact">Pro</h1> -->
    </div>
    <div class="mob-width zi-of-content">
      <div class="row works-space ">
        <div class="col-lg-3 col-xl-3 my-5 cont-space">
          <!-- header -->
          <!-- fake div and h1 tag -->
          <h2 class="fontreg1 fs-550 text-white-50">&#8249;div&#8250;</h2>
          <!-- fake div and h1 tag -->
          <h2 class="fontreg1 paragraph-height mx-4 fs-350 text-white-50">
            &#8249;h1&#8250;
          </h2>
          <h1 class="project-head-font-size">Recent Projects</h1>
          <!-- fake div and h1 tag -->
          <h2 class="fontreg1 paragraph-height mx-4 fs-350 text-white-50">
            &#8249;/h1&#8250;
          </h2>
          <!-- fake div and h1 tag -->
          <h2 class="fontreg1 fs-550 text-white-50">&#8249;/div&#8250;</h2>
          <!-- project card -->
        </div>

        <!-- second project -->
        <div class="col-lg-3 col-xl-3 not-on-mobile position-relative">
          <!-- project card -->
          <div
            class="bord-button2 projectanima mt-5 second-position"
            @click="removeFirstCard"
          >
            <div class="d-flex justify-content-between mt-2">
              <div class="">
                <span class="fs-450">Project A</span>
                <br />
                <span class="fs-450"> Ecommerce platform </span>
                <br />
                <span class="fs-150"> a website</span>
              </div>
              <!-- open icon -->
              <div>
                <span
                  ><img
                    src="@/assets/icon/down-arrow.png"
                    alt=""
                    class="bggreen rounded-circle p-2"
                /></span>
              </div>
            </div>
            <!-- image of project -->
            <div
              style="width: 280px; height: 200px"
              class="bgwhite2 border rounded"
            >
              <!-- <span class="bgwhite"></span> -->
              <div
                class="d-flex justify-content-center align-items-center py-3"
              >
                <img
                  src="@/assets/icon/facebook.png"
                  alt=""
                  style="width: 180px"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- third project -->
        <div class="col-lg-3 col-xl-3 not-on-mobile position-relative">
          <!-- project card -->
          <div class="bord-button2 projectanima mt-5 third-position">
            <div class="d-flex justify-content-between mt-2">
              <div class="">
                <!-- <span class="fs-450">Project A</span>
                <br /> -->
                <span class="fs-500">House Finder</span>
                <br />
                <span class="fs-150"> Real Estate </span>
              </div>
              <!-- open icon -->
              <div>
                <span
                  ><img
                    src="@/assets/icon/down-arrow.png"
                    alt=""
                    class="bggreen rounded-circle p-2"
                /></span>
              </div>
            </div>
            <div
              style="width: 280px; height: 200px"
              class="bgwhite2 border rounded"
            >
              <!-- <span class="bgwhite"></span> -->
              <div
                class="d-flex justify-content-center logo-marg align-items-center py-3"
              >
                <img
                  src="@/assets/icon/housefinderLogo.fa8ea49c.png"
                  alt=""
                  style="width: 180px"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- fourth project -->
        <div class="col-lg-3 col-xl-3 not-on-mobile position-relative">
          <!-- project card -->
          <div
            class="bord-button2 projectanima mt-5 forth-position"
            @click="removeFirstCard"
          >
            <div class="d-flex justify-content-between mt-2">
              <div class="">
                <span class="fs-500">
                  Buildings and <br />
                  More Limited
                </span>
                <br />
                <span class="fs-150"> An Ecommerce website</span>
              </div>
              <!-- open icon -->
              <div>
                <span
                  ><img
                    src="@/assets/icon/down-arrow.png"
                    alt=""
                    class="bggreen rounded-circle p-2"
                /></span>
              </div>
            </div>
            <!-- image of project -->
            <div
              style="width: 280px; height: 200px"
              class="bgwhite border rounded"
            >
              <!-- <span class="bgwhite"></span> -->
              <div
                class="d-flex justify-content-center logo-marg align-items-center py-3"
              >
                <img src="@/assets/icon/Baml.png" alt="" style="width: 180px" />
              </div>
            </div>
            <!-- view more -->
            <router-link to="/viewMore">
              <div class="position-relative">
                <div class="view-marg-button w-100">
                  <a href="#" class="contact-button py-2">
                    <div class="">
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
      </div>
      <!-- slider for mobile -->
      <div class="not-on-desktop w-85 m-auto pt-2">
        <swiper
          :navigation="true"
          :modules="modules"
          class="mySwiper"
          
          :slides-per-view="1"
          :space-between="10"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide>
            <div class="">
              <!-- project card -->
              <div class="bord-button2 projectanima" @click="removeFirstCard">
                <div class="d-flex justify-content-between mt-2">
                  <div class="">
                    <span class="fs-450">Project A</span>
                    <br />
                    <span class="fs-450"> Ecommerce platform </span>
                    <br />
                    <span class="fs-150"> a website</span>
                  </div>
                  <!-- open icon -->
                  <div>
                    <span
                      ><img
                        src="@/assets/icon/down-arrow.png"
                        alt=""
                        class="bggreen rounded-circle p-2"
                    /></span>
                  </div>
                </div>
                <!-- image of project -->
                <div
                  style="width: 280px; height: 200px"
                  class="bgwhite2 border rounded"
                >
                  <!-- <span class="bgwhite"></span> -->
                  <div
                    class="d-flex justify-content-center align-items-center py-3"
                  >
                    <img
                      src="@/assets/icon/facebook.png"
                      alt=""
                      style="width: 180px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="col-lg-3 col-xl-3">
              <!-- project card -->
              <div class="bord-button2 projectanima" @click="removeFirstCard">
                <div class="d-flex justify-content-between mt-2">
                  <div class="">
                    <span class="fs-450">Project A</span>
                    <br />
                    <span class="fs-450"> Ecommerce platform </span>
                    <br />
                    <span class="fs-150"> a website</span>
                  </div>
                  <!-- open icon -->
                  <div>
                    <span
                      ><img
                        src="@/assets/icon/down-arrow.png"
                        alt=""
                        class="bggreen rounded-circle p-2"
                    /></span>
                  </div>
                </div>
                <!-- image of project -->
                <div
                  style="width: 280px; height: 200px"
                  class="bgwhite2 border rounded"
                >
                  <!-- <span class="bgwhite"></span> -->
                  <div
                    class="d-flex justify-content-center align-items-center py-3"
                  >
                    <img
                      src="@/assets/icon/facebook.png"
                      alt=""
                      style="width: 180px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="col-lg-3 col-xl-3">
              <!-- project card -->
              <div class="bord-button2 projectanima" @click="removeFirstCard">
                <div class="d-flex justify-content-between mt-2">
                  <div class="">
                    <span class="fs-450">Project A</span>
                    <br />
                    <span class="fs-450"> Ecommerce platform </span>
                    <br />
                    <span class="fs-150"> a website</span>
                  </div>
                  <!-- open icon -->
                  <div>
                    <span
                      ><img
                        src="@/assets/icon/down-arrow.png"
                        alt=""
                        class="bggreen rounded-circle p-2"
                    /></span>
                  </div>
                </div>
                <!-- image of project -->
                <div
                  style="width: 280px; height: 200px"
                  class="bgwhite2 border rounded"
                >
                  <!-- <span class="bgwhite"></span> -->
                  <div
                    class="d-flex justify-content-center align-items-center py-3"
                  >
                    <img
                      src="@/assets/icon/facebook.png"
                      alt=""
                      style="width: 180px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>

          ...
        </swiper>
      </div>
    </div>

    <div class="" v-if="showfirst">
      <span
        @click="removeFirst"
        class="cancelstyle d-flex justify-content-end mx-5 my-3"
        ><img src="@/assets/icon/cancel.png" alt=""
      /></span>
      <div class="project-style">
        <swiper
          :navigation="true"
          :modules="modules"
          class="mySwiper w-80 project-style-shadow"
          style="height: 80vh"
          :slides-per-view="1"
          :space-between="10"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide class="bggreen"
            ><img
              src="@/assets/images/portfolioBaml.png"
              class="w-100"
              alt=""
            />
          </swiper-slide>
          <swiper-slide class="bggreen2 text-center">
            <h1 class="py-3 green">Buildings and More</h1>
            <p class="p-3 project-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              animi modi labore. Suscipit doloremque, asperiores facilis, quo,
              aliquam nesciunt voluptates excepturi quae enim fugit deserunt
              ipsam voluptatum aperiam reprehenderit? Atque esse ipsa saepe
              maiores, temporibus voluptates! Architecto asperiores eveniet odio
              explicabo molestias quis accusantium accusamus, nostrum dolorum
              blanditiis laudantium, voluptatibus nesciunt reiciendis, sint
              possimus quisquam non iste pariatur. Perspiciatis minima excepturi
              aliquam nesciunt, expedita nihil ex optio voluptates, quod maxime,
              saepe rerum ab ipsum placeat officia! Praesentium hic id doloribus
              molestias ab officia pariatur labore, eum vero cupiditate totam
              itaque consequatur veritatis consequuntur quod dolorem deserunt
              quibusdam quos odio cumque?
            </p>
            <p>
              <a class="text-reset" href="https://buildingsandmore.ng/"
                >visit site</a
              >
            </p>
          </swiper-slide>

          ...
        </swiper>
      </div>
    </div>
    <div>
      <h1 class="bgContact2">Proje</h1>
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
/* projects animation */
.projectanima:hover {
  animation: pulse;
  animation-duration: 2s;
}
/* about project */
.project-text {
  text-align: justify !important;
}
.logo-marg {
  margin: 4rem 0rem !important;
}
/* z index of contact */
.zi-of-content {
  z-index: -5000 !important;
}
/* background text */
.bgContact {
  font-size: 20rem !important;
  color: rgba(105, 105, 105, 0.199) !important;
  position: absolute;
  z-index: 0 !important;
  top: -2.8rem;
  /* left: 0;
  bottom: -6.5rem;
  overflow: auto; */
}
.bgContact2 {
  font-size: 24rem !important;
  color: rgba(105, 105, 105, 0.199) !important;
  position: absolute;
  z-index: 0 !important;
  bottom: -2rem;
  right: 0;
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
  top: 0rem !important;
  left: -3.5rem;
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
.second-position {
  position: absolute;
  top: 3.3rem;
  z-index: 1 !important;
}
.third-position {
  position: absolute;
  top: 0.2rem;
  z-index: 1 !important;
}
.forth-position {
  position: absolute;
  top: -2.7rem;
  z-index: 1 !important;
}
/* projects space */
.works-space {
  padding: 7.5rem 0rem !important;
}
/* view more button */
.view-marg-button {
  margin: 2rem 0rem 3.5rem 3.5rem !important ;
  position: absolute;
  top: 1.48rem;
  bottom: 0;
  left: 0rem;
  right: 0;
}
.bord-button {
  border: 2px solid var(--clr-green) !important;
}
.bord-button2 {
  border-top: 2px solid white !important;
}
/* background color */
.project-bg {
  background-color: #162120;
  color: white;
  height: 100vh;
  /* padding: -7rem 0rem; */
}
/* project header */
.project-head-font-size {
  font-size: 4.5rem !important;
  color: #06d599 !important;
}
/* project modal style */
.project-style {
  position: fixed !important;

  z-index: 3 !important;
  top: 3rem !important;
  left: 0rem;
  right: 0rem;
  box-shadow: 0rem 1rem 5rem 30rem rgba(0, 0, 0, 0.774);
}
.project-style-shadow {
  box-shadow: 0rem 1rem 5rem 30rem rgba(0, 0, 0, 0.774);
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
  /* projects space */
  .works-space {
    padding: 0rem 0rem !important;
  }
  /* project header */
  .project-head-font-size {
    font-size: 3rem !important;
    padding: 0rem 2rem !important;
  }
  .cont-space {
    margin: 1rem 0rem !important;
  }
}
@media (max-width: 576px) {
  .not-on-mobile {
    display: none !important;
  }
}
@media (min-width: 768px) {
  .not-on-desktop {
    display: none !important;
  }
}
@media (min-width: 1410px) {
  .mob-width {
    max-width: 1250px !important;
  }
  .max2 {
    max-width: 100% !important;
  }
}
</style>
