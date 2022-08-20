<template>
  <div class="bg-color-second-div">
    <div class="fontneubold white w-95 m-auto">
      <div class="row about-space position-relative">
        <!-- about -->
        <div class="col-6 col-xl-6 col-lg-6">
          <!-- fake div and h1 tag -->
          <h2 class="fontreg1 fs-550 text-white-50">&#8249;div&#8250;</h2>

          <div>
            <h2 class="fontreg1 paragraph-height mx-4 fs-350 text-white-50">
              &#8249;h1&#8250;
            </h2>
            <h1 class="about-head-font-size">About me</h1>
            <h2 class="fontreg1 paragraph-height mx-4 fs-350 text-white-50">
              &#8249;h1 /&#8250;
            </h2>
          </div>

          <div>
            <h2 class="fontreg1 paragraph-height mx-4 fs-350 text-white-50">
              &#8249;p&#8250;
            </h2>
            <Article class="about-text-font-size">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              vero, autem velit impedit cum optio hic eius vel alias animi
              aliquid minima facilis magni doloribus quae. Unde numquam autem
              non sapiente placeat modi perferendis hic itaque voluptatum
              laudantium tempore libero vero quaerat explicabo necessitatibus,
              corrupti harum, soluta, velit voluptates sint.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              cupiditate ipsam at. Distinctio dolorum excepturi neque
              necessitatibus omnis tenetur possimus?
            </Article>
            <h2 class="fontreg1 paragraph-height mx-4 fs-350 text-white-50">
              &#8249;/p&#8250;
            </h2>
          </div>
          <h2 class="fontreg1 fs-550 text-white-50">&#8249;div&#8250;</h2>
          <!-- about -->
          <router-link to="/about/resume">
            <div>
              <button class="px-3 py-3 w-50">Read more</button>
            </div>
          </router-link>
          <router-view></router-view>
        </div>
        <div class="col-6 col-xl-6 col-lg-6">
          <div class="my-position-image">
            <img
              src="@/assets/images/PicsArt_08-17-09.54.46.png"
              alt=""
              class="w-90"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about-space {
  padding: 5rem 0rem !important;
}
.bg-color-second-div {
  background: linear-gradient(
    to right,
    #273a38 0%,
    #273a38 70%,
    #162120 50%,
    #162120 100%
  );
  height: 100vh !important;
}
/* position of my image in about section */
.my-position-image {
  position: absolute;
  top: 4rem;
  bottom: 0;
}
/* about header */
.about-head-font-size {
  font-size: 4.5rem !important;
}
.about-text-font-size {
  font-size: 1.1rem !important;
}
</style>
