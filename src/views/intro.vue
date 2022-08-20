<template>
  <div class="">
    <div>
      <div class=" bg-pattern-img">
        <div class="w-95 m-auto height-of-hero-page">
          <!-- intro page -->
          <div class="row py-4 fontneubold text-weight">
            <div class="col-6 col-sm-6 col-lg-6 col-xl-6">
              <!-- fake div and h1 tag -->
              <h2 class="fontreg1 fs-550 fake-tag-color ">&#8249;div&#8250;</h2>
              <h2 class="fontreg1 paragraph-height mx-5 fs-350 fake-tag-color">
                &#8249;h1&#8250;
              </h2>
              <h1 class="text-weight mx-5">
                Jesutobi,
                <br />
                Builds seamless
                <br />
                User experience
              </h1>
              <h2 class="fontreg1 paragraph-height mx-5 fs-350 fake-tag-color">
                &#8249;h1 /&#8250;
              </h2>
              <!-- a little intro about what i do -->
              <div>
                <h2 class="fontreg1 mx-5 fs-350 fake-tag-color">
                  &#8249;p&#8250;
                </h2>

                <p class="fs-350 brief-text fontreg mx-5">
                  <img
                    src="../../src/assets/icon/minus-horizontal-straight-line.png"
                    alt=""
                  />
                  Hello there , i am a Front-end developer
                  <img
                    src="../../src/assets/icon/minus-horizontal-straight-line.png"
                    alt=""
                  />
                  <br />
                  Creating a long lasting impression on the mind of a user and a
                  <br />
                  scalable product is my forte
                </p>

                <h2 class="fontreg1 mx-5 fs-350 fake-tag-color">
                  &#8249;p /&#8250;
                </h2>
              </div>

              <!-- fake div and h1 tag -->
              <div class="c">
                <br />
                <h2 class="fontreg1 mt-0 fs-550 fake-tag-color">
                  &#8249;div /&#8250;
                </h2>
              </div>
            </div>
          </div>

          <!-- lets talk button
          <div class="position-relative">
            <div class="intro-marg-button">
              <button
                class="border-0 py-3 px-4 fw-bold bord-button bg-dark text-light fs-400"
              >
                Let's Talk
                <img
                  src="../../src/assets/icon/paper-plan.png"
                  alt=""
                  class="mx-2"
                />
              </button>
            </div>
          </div> -->
        </div>
      </div>
      <!-- About and skills -->
      <div>
        <About />
      </div>
      <!-- work component -->
      <div>
        <Works />
      </div>
      <!-- contact componets -->
      <div class="contacts-space">
        <Contacts />
      </div>
    </div>
  </div>
</template>

<script>
import Contacts from "@/components/contacts.vue";
import Works from "@/components/projects.vue";
import About from "@/components/about/About.vue";
export default {
  components: {
    Contacts,
    Works,
    About,
  },
};
</script>

<style scoped>
/* background image */
/* .bgimage{
  background-image: url(@/assets/images/Taieri.svg);
  background-size: contain;
  
} */
/* hero image */
/* .image-intro {
  position: absolute;
  top: -3rem;
  bottom: 0;
  left: 0rem;
  right:5rem;
} */
/* intro image height */
/* .height-of-hero-page {
  height: 85vh !important;
} */
.text-weight {
  font-weight: 900 !important;
  font-size: 4.5rem;
}
.intro-marg {
  margin: 1.5rem 3.5rem !important ;
}
.intro-marg-button {
  margin: 2rem 0rem 3.5rem 3.5rem !important ;
  position: absolute;
  top: -7rem;
  bottom: 0;
  left: 5rem;
  right: 0;
}
div.c {
  line-height: 30% !important;
}
.paragraph-height {
  line-height: 5% !important;
}
/* lets talk button */
.bord-button {
  border-radius: 1.5rem !important;
}
/* brief intro */
.brief-text {
  font-weight: 100 !important;
}
/* contacts margin */
.contacts-space {
  margin: 0 !important;
}
.bg-pattern-img {
  background-image: url(@/assets/images/Shape.png);
  background-color:#05d69a ;
  color: #162120;
}
/* fake tag color */
.fake-tag-color{
  color: #162120;
}
</style>
