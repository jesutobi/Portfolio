<template>
  <div class="bggreen sticky-top top-0 zedindex">
    <div class="fontneubold">
      <!-- container -->
      <div
        class="d-flex container pt-4 align-items-center justify-content-between"
      >
        <!-- logo -->
        <div>
          <router-link
            to="/"
            class="text-reset mob-padding text-decoration-none"
          >
            <h4 class="logo-style acquirefontbold anima-nav-home">
              Jesutobi.
              <br />
              Joseph
            </h4>
          </router-link>
        </div>
        <!-- buttons -->
        <div class="d-flex not-on-mobile font1 fw-bold justify-content-between">
          <!-- nav -->
          <router-link
            :class="{ animaNav: isActive(port.to) }"
            class="text-reset anima-nav text-decoration-none px-3"
            :to="port.to"
            v-for="port in portfolios"
            :key="port.id"
          >
            {{ port.title }}
          </router-link>
        </div>
        <!-- mobile side menu display -->
        <div
          class="notindesktop onmobile cancel"
          :style="{ transform: `rotate(${deg}deg)` }"
          v-if="menuicon"
          @click="menu"
        >
          <svg
            fill="#273a38"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="35px"
            height="30px"
          >
            <path
              d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"
            />
          </svg>
        </div>
        <div
          v-if="mobmenu"
          :style="{ transform: `rotate(${deg2}deg)` }"
          @click="cancel"
          class="notindesktop cancel2 onmobile"
        >
          <svg
            width="25"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.49931 5.90934L13.0681 0.340576L14.6588 1.93133L9.09006 7.50009L14.6588 13.0688L13.0681 14.6596L7.49931 9.09084L1.93059 14.6596L0.339844 13.0688L5.90856 7.50009L0.339844 1.93133L1.93059 0.340576L7.49931 5.90934Z"
              fill="#273a38"
            />
          </svg>
        </div>
        <!-- <router-view></router-view> -->
      </div>
      <!-- mobile side menu -->
      <div class="position-relative notindesktop">
        <div v-if="mobmenu" class="bggreen w-100 px-3 displaymenu">
          <div @click="cancel">
            <ul class="white p-0">
              <div class="py-3 font1 fw-bold text-center">
                <router-link
                  class="text-reset font text-decoration-none"
                  :to="port.to"
                  v-for="port in portfolios"
                  :key="port.id"
                >
                  <li
                    style="list-style-type: none"
                    class="anima-nav-mob py-3 green3"
                  >
                    {{ port.title }}
                  </li>
                </router-link>
              </div>
              <div class="">
                <div>
                  <Socials />
                </div>
              </div>
            </ul>
            <!-- socials -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Socials from "@/components/socials.vue";
export default {
  data() {
    return {
      mobmenu: false,
      menuicon: true,
      deg: 0,
      deg2: 180,
      portfolios: [
        { title: "Resume", to: "/about/resume" },
        { title: "Projects", to: "/viewMore" },
        // { title: "Testimonials", to: "/testimonials" },
        { title: "Contacts", to: "/contacts" },
      ],
    };
  },

  components: { Socials },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
    menu() {
      this.deg2 = 180;
      this.mobmenu = true;

      // this.deg = 360

      this.menuicon = false;
    },
    cancel() {
      this.deg = 360;
      this.mobmenu = false;
      this.menuicon = true;
      // this.deg2 = 360
    },
  },
};
</script>

<style scoped>
.zedindex {
  z-index: 9999999 !important;
}
.nav-marg {
  margin: 2rem 4rem 0rem 3.5rem !important ;
}
/* .logo-style{

} */
.bggreen {
  background-image: url(@/assets/images/Shape.png);
  background-color: #05d69a;
  color: #162120;
  animation: slide 10s infinite linear;
}
@keyframes slide {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
}

.anima-nav:hover {
  animation: headShake; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s;
  background-color: #162120;
  color: #05d69a !important;
  border-radius: 0.3rem;
  padding: 0rem 0rem;
}
.animaNav {
  animation: headShake; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s;
  background-color: #162120;
  color: #05d69a !important;
  border-radius: 0.3rem;
  padding: 0rem 0rem;
}
.anima-nav-home:hover {
  animation: headShake; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s;
  border-radius: 0.3rem;
  padding: 0rem 0rem;
}
.mob-width {
  max-width: 95%;
  margin: auto;
}
@media (min-width: 1410px) {
  .mob-width {
    max-width: 1250px !important;
  }
  .max2 {
    max-width: 100% !important;
  }
}

.mob-width {
  max-width: 95%;
  margin: auto;
}
@media (min-width: 1410px) {
  .mob-width {
    max-width: 1250px !important;
  }
  .max2 {
    max-width: 100% !important;
  }
}
/* things to not show on mobile */
@media (max-width: 768px) {
  /* .positionstick {
    position: unset !important;
  } */
  .not-on-mobile {
    display: none !important;
  }
  .onmobile {
    display: unset !important;
  }
  /* cancel style */
  .cancel {
    transition: transform 1s ease-in-out !important;
  }
  .cancel2 {
    transition: transform 1s ease-in-out !important;
  }
  .displaymenu {
    animation: fadeInRight; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1s;
    z-index: 999999 !important;
    /* position: absolute; */
    position: fixed;
    height: 100vh !important;
    /* bottom: 0rem; */
    margin: unset !important;
  }
  /* hover on menu text */
  .navtextt:hover {
    color: var(--clr-green) !important;
    border-bottom: 3px solid var(--clr-green) !important;
    font-weight: bold;
  }
  /* side menu button animation */
  .anima-nav-mob:hover {
    animation: headShake; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s;
  }
}
@media (min-width: 769px) {
  .notindesktop {
    display: none !important;
  }
}
</style>
