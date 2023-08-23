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
              Selected <span class="grey"> Projects</span>
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
              class="position-relative col-sm-6 col-md-4 col-lg-4 py-3 col-xl-3 col-xxl-3"
            >
              <div class="hov">
                <div
                  style="height: 170px"
                  class="position-relative container-radius"
                >
                  <div class="">
                    <img
                      :src="require(`@/assets/images/${singleproject.image}`)"
                      alt=""
                      class="w-100 object-size container-radius"
                    />
                  </div>
                </div>
                <!-- link -->
                <div class="bggreen2 container-radius-link p-2 white">
                  <div class="p-1 fw-bold">
                    <span>{{ singleproject.title }}</span>
                  </div>
                  <div
                    class="d-flex align-items-center fs-170 green p-1 fw-bold justify-content-between"
                  >
                    <div class="">
                      <a
                        class="text-reset text-decoration-none fs-170"
                        :href="singleproject.url"
                        >{{ singleproject.propurl }}</a
                      >
                    </div>
                    <div
                      @click="showPreview(singleproject)"
                      role="button"
                      class="removemobpreview"
                    >
                      <div>
                        <span class="">preview</span>
                      </div>
                    </div>
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
                  <span>Dev-tech: {{ singleproject.devTech }}</span>
                </div>
                <div class="py-1">
                  <span>CSS library: {{ singleproject.CSSlibrary }}</span>
                </div>
                <!-- <div class="py-1">
                  <span></span>
                </div> -->
              </div>
            </div>
            <div
              v-if="preview"
              class="project-style d-flex align-items-center justify-content-center"
            >
              <div class="">
                <div>
                  <span
                    @click="removepreview"
                    class="cancelstyle d-flex justify-content-end mx-5 my-3"
                    ><img
                      src="@/assets/icon/cancel.png"
                      alt=""
                      style="width: 20px"
                  /></span>
                  <div class="w-80 modal-image-shadow">
                    <img
                      :src="require(`@/assets/images/${previewImage.modal}`)"
                      alt=""
                      class="w-100 modal-image-shadow"
                    />
                  </div>
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
      preview: false,
      previewImage: "",
    };
  },
  methods: {
    showminidisplay() {
      this.minidisplay = true;
    },
    removepreview() {
      this.preview = false;
    },
    showPreview(show) {
      this.previewImage = show;
      console.log(show);
      this.preview = true;
    },
  },
};
</script>

<style scoped>
/* product preview modal */
/* remove modal button */
.cancelstyle {
  position: fixed;
  top: 0;
  z-index: 3000;
  left: 0;
  right: 0;
}
.project-style {
  position: fixed !important;
  /* width: 20% !important; */
  z-index: 100000 !important;
  top: 6rem !important;
  left: 7rem;
  right: 0rem;

  box-shadow: 0rem 1rem 5rem 30rem rgba(0, 0, 0, 0.596);
}
.modal-image-shadow {
  box-shadow: 0rem 1rem 5rem 30rem rgba(0, 0, 0, 0.596);
}

@media (max-width: 768px) {
  .area {
    width: 100%;
    height: 250vh !important;
  }
  .projectsheroFont {
    font-size: 2px !important;
  }
  /* remove preview button */
  .removemobpreview {
    display: none !important;
  }
  /* mini modal position */
  .mini-display-radius {
    border-radius: 1.4rem 1.4rem !important;
    display: none;
    position: absolute;
    /* width: 100%; */
    top: 0rem;
    right: 2rem !important;
    z-index: 10000;
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
  right: -1rem;
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
  height: 150vh;
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

.object-size {
  object-fit: filll !important;
}
</style>
