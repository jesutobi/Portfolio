<template>
  <div class="bggreen  sticky-top">
    <div class="fontneubold">
      <!-- container -->
      <div
        class="d-flex w-95 pt-4 m-auto align-items-center justify-content-between"
      >
        <!-- logo -->
        <div>
          <router-link to="/" class="text-reset text-decoration-none">
            <h4 class="logo-style acquirefontbold">
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
            class="text-reset text-decoration-none px-3"
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
        { title: "Skills", to: "/skills" },
        { title: "Projects", to: "/projects" },
        { title: "Testimonials", to: "/testimonials" },
        { title: "Contacts", to: "/contacts" },
      ],
    };
  },
};
</script>

<style scoped>
.nav-marg {
  margin: 2rem 3.5rem 0rem 3.5rem !important ;
}
/* .logo-style{

} */
.bggreen{
   background-image: url(@/assets/images/Shape.png);
  background-color:#05d69a ;
  color: #162120;
}
</style>
