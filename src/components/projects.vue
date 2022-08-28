<template>
  <div class="fontneubold project-bg position-relative">
    <div>
      <!-- <h1 class="bgContact">Pro</h1> -->
    </div>
    <div class="w-95 m-auto zi-of-content">
      <div class="row works-space">
        <div class="col-lg-3 col-xl-3 my-5">
          <!-- header -->
          <!-- fake div and h1 tag -->
          <h2 class="fontreg1 fs-550 text-white-50">&#8249;div&#8250;</h2>
          <!-- fake div and h1 tag -->
          <h2 class="fontreg1 paragraph-height mx-4 fs-350 text-white-50">
            &#8249;h1&#8250;
          </h2>
          <h1 class="project-head-font-size">
            {{ typeValue }}
            <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
          </h1>
          <!-- fake div and h1 tag -->
          <h2 class="fontreg1 paragraph-height mx-4 fs-350 text-white-50">
            &#8249;/h1&#8250;
          </h2>
          <!-- fake div and h1 tag -->
          <h2 class="fontreg1 fs-550 text-white-50">&#8249;/div&#8250;</h2>
          <!-- project card -->
        </div>

        <!-- second project -->
        <div class="col-lg-3 col-xl-3 position-relative">
          <!-- project card -->
          <div
            class="bord-button2 mt-5 second-position"
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
        <div class="col-lg-3 col-xl-3 position-relative">
          <!-- project card -->
          <div class="bord-button2 mt-5 third-position">
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
        <!-- fourth project -->
        <div class="col-lg-3 col-xl-3 position-relative">
          <!-- project card -->
          <div class="bord-button2 mt-5 forth-position">
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
            <!-- view more -->
            <nuxt-link to="">
              <div class="position-relative">
                <div class="view-marg-button w-100">
                  <a href="#" class="contact-button py-2">
                    <div class="">
                      <span class="bg"></span>
                      <span class="base"></span>
                      <span class="text fw-bold"> Lets Build </span>
                    </div>
                  </a>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h1 class="bgContact2">Proje</h1>
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
          <swiper-slide class="bggreen text-center">
            <h1>Buildings and More</h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            animi modi labore. Suscipit doloremque, asperiores facilis, quo,
            aliquam nesciunt voluptates excepturi quae enim fugit deserunt ipsam
            voluptatum aperiam reprehenderit? Atque esse ipsa saepe maiores,
            temporibus voluptates! Architecto asperiores eveniet odio explicabo
            molestias quis accusantium accusamus, nostrum dolorum blanditiis
            laudantium, voluptatibus nesciunt reiciendis, sint possimus quisquam
            non iste pariatur. Perspiciatis minima excepturi aliquam nesciunt,
            expedita nihil ex optio voluptates, quod maxime, saepe rerum ab
            ipsum placeat officia! Praesentium hic id doloribus molestias ab
            officia pariatur labore, eum vero cupiditate totam itaque
            consequatur veritatis consequuntur quod dolorem deserunt quibusdam
            quos odio cumque?</swiper-slide
          >

          ...
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import "animate.css";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
// import "./style.css";
import { Navigation } from "swiper";
// import "hooper/dist/hooper.css";
export default {
  data() {
    return {
      showfirst: false,
      typeValue: "",
      typeStatus: false,
      typeArray: ["Recent Projects"],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    removeFirstCard() {
      this.showfirst = true;
    },
    removeFirst() {
      this.showfirst = false;
    },
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    // eraseText() {
    //   if (this.charIndex > 0) {
    //     if (!this.typeStatus) this.typeStatus = true;
    //     this.typeValue = this.typeArray[this.typeArrayIndex].substring(
    //       0,
    //       this.charIndex - 1
    //     );
    //     this.charIndex -= 1;
    //     setTimeout(this.eraseText, this.erasingSpeed);
    //   } else {
    //     this.typeStatus = false;
    //     this.typeArrayIndex += 1;
    //     if (this.typeArrayIndex >= this.typeArray.length)
    //       this.typeArrayIndex = 0;
    //     setTimeout(this.typeText, this.typingSpeed + 1000);
    //   }
    // },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
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
  z-index: 5000 !important;
}
.third-position {
  position: absolute;
  top: 0.2rem;
  z-index: 5000 !important;
}
.forth-position {
  position: absolute;
  top: -2.7rem;
  z-index: 5000 !important;
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
</style>