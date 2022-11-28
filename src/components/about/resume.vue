<template>
  <div class="font1 bgwhite3 green2 my-4" id="printMe">
    <!-- print button -->
    <div
      role="button"
      class="d-flex mob-print-style animate__animated animate__pulse animate__slow 2s animate__infinite infinite justify-content-end align-items-center"
    >
      <div class="px-2">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="20px"
          fill="green"
          viewBox="0 0 384.97 384.97"
          style="enable-background: new 0 0 384.97 384.97"
          xml:space="preserve"
        >
          <g>
            <g id="Arrow_Down_Circle">
              <path
                d="M192.485,0C86.185,0,0,86.173,0,192.485c0,106.3,86.185,192.485,192.485,192.485
			c106.312,0,192.485-86.185,192.485-192.485C384.97,86.173,298.797,0,192.485,0z M192.485,360.909
			c-93.018,0-168.424-75.406-168.424-168.424S99.467,24.061,192.485,24.061s168.424,75.406,168.424,168.424
			S285.503,360.909,192.485,360.909z"
              />
              <path
                d="M268.095,209.243l-63.46,62.558V84.212c0-6.641-5.438-12.03-12.151-12.03c-6.713,0-12.151,5.39-12.151,12.03v187.589
			l-63.46-62.558c-4.74-4.692-12.439-4.692-17.179,0c-4.74,4.704-4.74,12.319,0,17.011l84.2,82.997
			c2.25,2.25,5.414,3.537,8.59,3.537c3.164,0,6.328-1.299,8.59-3.525l84.2-82.997c4.752-4.704,4.74-12.319,0-17.011
			C280.535,204.551,272.835,204.551,268.095,209.243z"
              />
            </g>
          </g>
        </svg>
      </div>
      <div v-print="'#printMe'" class="w-15 float-end">
        <span class="anima-nav my-2 fw-bold">Print Resume</span>
      </div>
    </div>
    <!-- <br /> -->
    <div class="mobile-hero-style p-5 w-100">
      <div class="row mobile-text-style">
        <div class="col-lg-5 col-md-5 col-xl-5 desk-herospace col-xxl-5">
          <h1 class="text-end fs-750">Jesutobi</h1>

          <h1 class="text-center fs-750">Joseph</h1>

          <h1 class="text-start fs-750">Jesutobi</h1>
        </div>
        <div class="project-text col-lg-7 col-md-7 col-xl-7 col-xxl-7">
          <p class="fs-300">
            Over the years i have Engineered and Designed several software
            products which has helped to solve problems in their various
            industries. Industries like Education,Transportation, Real Estate ,
            Ecommerce.
          </p>
          <p class="fs-300">
            I worked and handled the revamping of web application (Buildings and
            more)where i was reponsible for rebuilding the front-end of the web
            product into a scalable applicaton , ensuring it was search engine
            optimized using Nuxt js, with other several other qualities like
            lazy loading images that improves the speed of the site.
          </p>
          <p class="fs-300">
            I also built a Hotel and Flight booking engine (Bitsin),which was
            built to also handle visa application. i was responsible for
            building the front-end, consuming API's using postman and using
            tools (figma,Adobe e.t.c), libraries,that helped achieve the desired
            goal.
          </p>
          <p class="fs-300">
            I am Equipped with several tools that makes me capable in handling
            Design and Engineering projects proficiently, which enable me meet
            up targets, deadlines and achieve desired goals.
          </p>
        </div>

        <hr class="mt-5" />
      </div>
      <div class="row py-1">
        <!-- small about -->
        <div class="col-lg-2 col-md-2 col-xl-2 col-xxl-2">
          <!-- contact -->
          <div>
            <h6 class="py-1 fw-bold green">
              <a
                class="text-reset text-decoration-none"
                target="_blank"
                href="https://jesutobi-joseph.onrender.com/"
                >jesutobi-joseph.onrender.com</a
              >
            </h6>
            <h6 class="py-1">FCT, Abuja ,Nigeria</h6>
            <h6 class="py-1">jesutobit@gmail.com</h6>
          </div>
          <!-- proficient in -->
          <div class="mt-4">
            <span class="fw-bold green">Proficient in :</span>
            <ul class="" v-for="skillz in skill" :key="skillz" type="square">
              <li>{{ skillz }}</li>
            </ul>
          </div>
          <!-- certificate -->
          <div>
            <span class="fw-bold green">Certificates :</span>
            <ul class="" type="square">
              <li>Bsc in Microbiology</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-10 col-md-10 col-xl-10 col-xxl-10">
          <div class="mobile-text-style">
            <!-- head -->
            <h5 class="fw-bold">Experience</h5>
            <p class="w-70 mobile-text-style"></p>
          </div>
          <div class="mt-4" v-for="jobb in experience" :key="jobb">
            <!-- head -->
            <div
              class="d-flex justify-content-between change-display mobile-text-style"
            >
              <div>
                <h5 class="fw-bold green3 job-donetext-style">
                  {{ jobb.job }}
                </h5>
              </div>
              <div>
                <span class="fw-bold grey fs-200 mobile-text-style">{{
                  jobb.jobdate
                }}</span>
              </div>
            </div>

            <p class="w-70 mobile-text-style">
              {{ jobb.jobDesc }}
            </p>
            <div>
              <ul>
                <li>{{ jobb.list1 }}</li>
                <li>{{ jobb.list2 }}</li>
                <li>{{ jobb.list3 }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import print from "vue3-print-nb";

import exp from "@/json/experience.json";
import role from "@/json/skills.json";
export default {
  data() {
    return {
      experience: exp,
      skill: role,
    };
  },
  directives: {
    print,
  },
  components: {},
};
</script>

<style scoped>
/* about project */
.project-text {
  text-align: justify !important;
}
.anima-nav:hover {
  animation: headShake; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s;
  background-color: #162120;
  color: #05d69a !important;
  border-radius: 0.3rem;
  padding: 0.3rem;
}
.anima-print {
  animation: bounce; /* referring directly to the animation's @keyframe declaration */
  animation-duration: infinite;
}

.mob-width {
  max-width: 90%;
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
@media (max-width: 768px) {
  .mobile-text-style {
    width: 100% !important;
  }

  /* print button */

  /* hero */
  .mobile-hero-style {
    padding: 0.7rem !important;
    width: 100% !important;
  }
  h1 {
    text-align: center !important;
  }
  .project-text {
    text-align: center !important;
  }
}
@media (max-width: 576px) {
  .mob-print-style {
    /* padding: 0rem 7rem !important; */
    width: 80% !important;
  }
  /* job text style */
  .job-donetext-style {
    font-size: 1.1rem !important;
  }
  .change-display {
    display: block !important;
  }
}
@media (min-width: 992px) {
  .desk-herospace {
    padding: 3rem 0rem 0rem 0rem !important;
  }
}
</style>
