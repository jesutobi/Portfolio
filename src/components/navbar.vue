<template>
  <div class="bggreen sticky-top">
    <div class="fontneubold">
      <!-- container -->
      <div
        class="d-flex mob-width pt-4  align-items-center justify-content-between"
      >
        <!-- logo -->
        <div>
          <router-link to="/" class="text-reset text-decoration-none">
            <h4 class="logo-style acquirefontbold anima-nav-home">
              Jesutobi.
              <br />
              Joseph
            </h4>
          </router-link>
        </div>
        <!-- buttons -->
        <div class="d-flex justify-content-between">
          <!-- nav -->
          <router-link
            class="text-reset anima-nav text-decoration-none px-3"
            :to="port.to"
            v-for="port in portfolios"
            :key="port.id"
          >
            {{ port.title }}
          </router-link>
        </div>
        <!-- <router-view></router-view> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolios: [
        { title: "Resume", to: "/about/resume" },
        { title: "Projects", to: "/projects" },
        { title: "Testimonials", to: "/testimonials" },
        { title: "Contacts", to: "/contacts" },
      ],
    };
  },

  components: {},
};
</script>

<style scoped>
.nav-marg {
  margin: 2rem 4rem 0rem 3.5rem !important ;
}
/* .logo-style{

} */
.bggreen {
  background-image: url(@/assets/images/Shape.png);
  background-color: #05d69a;
  color: #162120;
}

.anima-nav:hover {
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
</style>