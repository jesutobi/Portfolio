<template>
  <div>
    <div class="bg-color-second-div position-relative">
      <div>
        <h1 class="bgContactab fw-bold">About</h1>
      </div>
      <div class="fontneubold white mob-width">
        <div class="row about-space position-relative">
          <!-- about -->
          <div class="col-6 col-xl-6 col-lg-6">
            <!-- fake div and h1 tag -->
            <h2 class="fontreg1 fs-550 text-white-50">&#8249;div&#8250;</h2>

            <div>
              <h2 class="fontreg1 paragraph-height mx-4 fs-350 text-white-50">
                &#8249;h1&#8250;
              </h2>
              <h1 class="about-head-font-size">
                {{ typeValue }}
                <span class="cursor" :class="{ typing: typeStatus }"
                  >&nbsp;</span
                >
              </h1>
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
            <router-link to="/about/resume" class="contact-button py-2">
              <div class="">
                <span class="bg"></span>
                <span class="base"></span>
                <span class="text fw-bold"> Read More </span>
              </div>
            </router-link>
            <router-view></router-view>
          </div>
          <div class="col-6 col-xl-6 col-lg-6">
            <div class="my-position-image">
              <img src="@/assets/images/fig.png" alt="" class="w-85" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => {
    return {
      show: false,
      typeValue: "",
      typeStatus: false,
      typeArray: [
        "About me",
        "Software Engineer",
        "<html>",
        "{css}",
        "(js)",
        "vue",
        "Nuxt",
        "Bootstrap",
      ],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>

<style scoped>
/* background text */
.bgContactab {
  font-size: 25rem !important;
  color: rgba(105, 105, 105, 0.199) !important;
  position: absolute;
  z-index: 0;
  top: -4rem;
  /* bottom: -30rem; */
  left: 0;
  /* bottom: -6.5rem; */
}
/* read more button */
.contact-button {
  text-decoration: none;
  width: 100%;
  /* max-width: 200px; */
  height: 70px;
  display: block;
  line-height: 50px;
  /* letter-spacing: 3px; */
  position: relative;
  text-align: center;
  color: #08fdd8;
  /* margin-top: 50px; */
}
.contact-button div {
  position: relative;
  top: 0rem !important;
  left: 5rem;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}
.contact-button span.bg {
  position: absolute;
  width: 0%;
  height: 100%;
  left: -5px;
  top: 0;
  transition: all 0.3s ease-in-out;
  background-color: #06d599;
  transform: skewX(-19deg);
}
.contact-button:hover span.bg {
  width: 110%;
}
.contact-button span.base {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  border: 2px solid #06d599;
  box-sizing: border-box;
}
.contact-button span.text {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  color: white;
  left: 0;
}
.contact-button:hover span.text {
  color: #162120;
}
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
  top: 5rem;
  bottom: 0;
  /* left: 0; */
  right: 2;
}
/* about header */
.about-head-font-size {
  font-size: 4.5rem !important;
  color: #06d599 !important;
}
.about-text-font-size {
  font-size: 1.1rem !important;
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