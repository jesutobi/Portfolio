<template>
  <div class="bgwhite position-relative">
    <div class="area">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="font1 context container">
      <div>
        <!-- intro text -->
        <u>
          <div class="py-5 fontbold titleunderline my-5">
            <h1 class="projectsheroFont text-center fw-bold">
              Selected Projects
            </h1>
          </div>
        </u>
        <!-- projects -->
        <div>
          <div class="row">
            <!-- card -->
            <div
              v-for="(singleproject, index) in projects"
              :key="index"
              class="col-lg-3 position-relative col-md-3 col-lg-3 py-3 col-xl-3 col-xxl-3"
            >
              <div class="hov">
                <div
                  style="height: 200px"
                  class="position-relative container-radius"
                >
                  <div class="d-flex justify-content-center">
                    <div class="w-60 center-icon">
                      <img
                        :src="require(`@/assets/icon/${singleproject.image}`)"
                        alt=""
                        class="w-100"
                      />
                    </div>
                  </div>
                </div>
                <!-- link -->
                <div class="bggreen2 container-radius-link p-2 white">
                  <div class="p-1 fw-bold">
                    <span>{{ singleproject.title }}</span>
                  </div>
                  <div class="green p-1 fw-bold">
                    <a
                      class="text-reset text-decoration-none fs-170"
                      :href="singleproject.url"
                      >{{ singleproject.propurl }}</a
                    >
                  </div>
                </div>
              </div>
              <!-- minimodal -->

              <div
                class="shadow-sm animate__headShake mini-display-radius fs-200 bggreen3 white p-2"
              >
                <div>
                  <span></span>
                </div>
                <div class="py-1 green fw-bold">
                  <span>Built with</span>
                </div>
                <div class="py-1">
                  <span>Js Framework: Nuxt</span>
                </div>
                <div class="py-1">
                  <span>CSS library: Boostrap, Vue Bootstrap</span>
                </div>
                <div class="py-1">
                  <span>HTML, CSS, Javascript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moreProjects from "@/json/projects.json";
export default {
  data() {
    return {
      projects: moreProjects,
      minidisplay: false,
    };
  },
  methods: {
    showminidisplay() {
      this.minidisplay = true;
    },
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .area {
    width: 100%;
    height: 200vh !important;
  }
  .projectsheroFont {
    font-size: 2px !important;
  }
}
/* title underline and animation */
.titleunderline {
  padding: 1rem 0rem !important;
  width: 100px;
  animation: animaborder 5s linear 2s;
  /* animation-timing-function: ease-in-out; */
}

@keyframes animaborder {
  0% {
    width: 400px !important;
  }
}
.text-weight {
  font-weight: 900 !important;
  font-size: 3rem !important;
  word-spacing: 1rem !important;
}
.center-icon {
  position: absolute;
  top: 5rem;
  bottom: 5rem;
}
/* container radius */
.container-radius {
  border: 1px solid rgb(231, 231, 231) !important;
  border-radius: 1.5rem 1.5rem 0rem 0rem !important;
}
.container-radius-link {
  border-radius: 0rem 0rem 1.5rem 1.5rem !important;
}
.mini-display-radius {
  border-radius: 1.4rem 1.4rem !important;
  display: none;
  position: absolute;
  /* width: 100%; */
  top: 0rem;
  right: -2rem;
  z-index: 10000;
}
/* hero section font*/
.projectsheroFont {
  font-size: 4rem !important;
}
.hov:hover + .mini-display-radius {
  display: block !important;
}
.hov:hover + .animate__headShake {
  animation: headShake; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s;
}
.container-radius:hover {
  filter: blur(5px) !important;
}
/* sfgsffffffffffffffffffffffffffffff */
.area {
  width: 100%;
  height: 100vh;
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: #06d59a;
  animation: animate 25s linear infinite;
  bottom: -150px;
  filter: blur(5px);
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
.context {
  position: absolute;
  /* z-index: 900000; */
  top: 0rem;
  left: 0rem;
  right: 0rem;
  bottom: 50rem !important;
}
</style>
