<template>
  <div class="font1 bgwhite3 green2 my-4 mob-width" id="printMe">
    <!-- print button -->
    <div class="d-flex animate__animated animate__pulse animate__slow	2s animate__infinite	infinite justify-content-end align-items-center">
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
      <div v-print="'#printMe'" class="w-10 float-end">
        <span class="anima-nav my-2 fw-bold">Print Resume</span>
      </div>
    </div>
    <br />
    <div>
      <div class="row p-5">
        <!-- <div >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati hic
        quam atque dicta culpa sunt sed, praesentium voluptates asperiores ea!
      </div>
      <button >Print</button> -->
        <!-- small about -->
        <div class="col-lg-5 col-md-5 col-xl-5 col-xxl-5">
          <h1 class="text-end fs-750">Jesutobi</h1>

          <h1 class="text-center fs-750">Joseph</h1>

          <h1 class="text-start fs-750">Jesutobi</h1>
        </div>
        <div
          class="text-start project-text col-lg-7 col-md-7 col-xl-7 col-xxl-7"
        >
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            dolores reprehenderit, doloremque tempore similique illo
            repellendus. Eveniet veniam dolorem nam eligendi aut, voluptate sit
            corporis explicabo aliquam sapiente molestiae incidunt autem
            consequuntur architecto obcaecati iste sunt recusandae. Sequi quos
            pariatur accusantium. Ad sequi ipsum quas et dolor iusto cupiditate
            perspiciatis nesciunt quidem, temporibus sint? Repellendus
            voluptates quos labore voluptate, iste facilis magnam suscipit qui
            aliquam accusantium voluptatem quam et veritatis expedita
            perferendis corporis dolore distinctio ipsam obcaecati
            necessitatibus. Voluptates minima, cum officiis aut tempore
            accusantium quos molestias rerum. Harum ex, dolorum similique
            provident repellendus reprehenderit. Non temporibus vitae dolore
            vero.
          </span>
        </div>

        <hr class="mt-5" />
      </div>
      <div class="row px-5 py-1">
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
        </div>
        <div class="col-lg-10 col-md-10 col-xl-10 col-xxl-10">
          <div>
            <!-- head -->
            <h5 class="fw-bold">Experience</h5>
            <p class="w-70">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              eius tenetur repellendus ducimus distinctio suscipit consequatur
              nobis, odio itaque aut magni. Corporis unde eum harum impedit
              dolore perspiciatis eius architecto?
            </p>
          </div>
          <div class="mt-4" v-for="jobb in experience" :key="jobb">
            <!-- head -->
            <div class="d-flex justify-content-between">
              <h5 class="fw-bold green3">{{ jobb.job }}</h5>
              <span class="fw-bold grey">{{ jobb.jobdate }}</span>
            </div>

            <p class="w-70">
              {{ jobb.jobDesc }}
            </p>
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
</style>
