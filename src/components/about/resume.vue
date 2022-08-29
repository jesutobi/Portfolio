<template>
  <div class="fontneubold green2 mob-width" id="printMe">
    <!-- print button -->
    <div v-print="'#printMe'" class="text-end m-5">
      <span>Print Resume</span>
    </div>
    <div class="row m-5">
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
      <div class="text-start col-lg-7 col-md-7 col-xl-7 col-xxl-7">
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          dolores reprehenderit, doloremque tempore similique illo repellendus.
          Eveniet veniam dolorem nam eligendi aut, voluptate sit corporis
          explicabo aliquam sapiente molestiae incidunt autem consequuntur
          architecto obcaecati iste sunt recusandae. Sequi quos pariatur
          accusantium. Ad sequi ipsum quas et dolor iusto cupiditate
          perspiciatis nesciunt quidem, temporibus sint? Repellendus voluptates
          quos labore voluptate, iste facilis magnam suscipit qui aliquam
          accusantium voluptatem quam et veritatis expedita perferendis corporis
          dolore distinctio ipsam obcaecati necessitatibus. Voluptates minima,
          cum officiis aut tempore accusantium quos molestias rerum. Harum ex,
          dolorum similique provident repellendus reprehenderit. Non temporibus
          vitae dolore vero.
        </span>
      </div>

      <hr class="mt-5" />
    </div>
    <div class="row m-5">
      <!-- small about -->
      <div class="col-lg-2 col-md-2 col-xl-2 col-xxl-2">
        <!-- contact -->
        <div>
          <h6 class="py-1">jjjesutobi.com</h6>
          <h6 class="py-1">FCT, Abuja ,Nigeria</h6>
          <h6 class="py-1">jesutobit@gmail.com</h6>
        </div>
        <!-- proficient in -->
        <div class="mt-4">
          <span>Proficient in :</span>
          <ul class="" v-for="skillz in skill" :key="skillz" type="square">
            <li>{{ skillz }}</li>
          </ul>
        </div>
      </div>
      <div class="col-lg-10 col-md-10 col-xl-10 col-xxl-10">
        <div>
          <!-- head -->
          <h5>Experience</h5>
          <p class="w-70">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            eius tenetur repellendus ducimus distinctio suscipit consequatur
            nobis, odio itaque aut magni. Corporis unde eum harum impedit dolore
            perspiciatis eius architecto?
          </p>
        </div>
        <div class="mt-4" v-for="jobb in experience" :key="jobb">
          <!-- head -->
          <div class="d-flex justify-content-between">
            <h5>{{ jobb.job }}</h5>
            <span>{{ jobb.jobdate }}</span>
          </div>

          <p class="w-70">
            {{ jobb.jobDesc }}
          </p>
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
</style>