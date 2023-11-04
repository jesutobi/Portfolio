<template>
  <div>
    <div class="bg-color-second-div position-relative">
      <div class="container overflow-hidden">
        <div>
          <h1
            style="font-size: 22em"
            class="bgContactab bgfont text-center fw-bold"
          >
            About
          </h1>
        </div>

        <div class="font1 white">
          <div class="row about-space position-relative">
            <!-- about -->
            <div class="col-xl-6" v-motion-slide-visible-right>
              <!-- fake div and h1 tag -->
              <h2 class="fontreg1 fs-550 text-white-50">&#8249;div&#8250;</h2>

              <div>
                <h2 class="fontreg1 paragraph-height mx-4 fs-350 text-white-50">
                  &#8249;h1&#8250;
                </h2>
                <h1
                  class="about-head-font-size px-4 fw-bold reduce-title-font-size"
                >
                  About me
                </h1>
                <h2 class="fontreg1 paragraph-height mx-4 fs-350 text-white-50">
                  &#8249;h1 /&#8250;
                </h2>
              </div>
              <!-- image -->
              <div class="p-2 notindesktop d-flex justify-content-center">
                <img src="@/assets/images/fig.png" alt="" class="w-70" />
              </div>

              <div class="font1">
                <h2 class="fontreg1 paragraph-height mx-4 fs-350 text-white-50">
                  &#8249;p&#8250;
                </h2>
                <div class="about-text-font-size px-4">
                  <p class="fs-300 mobile-text-intro">
                    Hi, my name is
                    <span class="green px-1 fw-bold"> Jesutobi J.J</span> ,over
                    the course of my career, I have developed and designed the
                    <span class="green px-1 fw-bold">front-end</span>
                    multiple web applications that have helped to address
                    problems in various industries such as education,
                    transportation, real estate, and e-commerce.
                  </p>
                  <p class="fs-300 mobile-text-intro">
                    I have a strong understanding of
                    <span class="green px-1 fw-bold"
                      >web performance optimization techniques,</span
                    >
                    such as minifying code and using the right sizes of 'image
                    assets' to ensure fast loading times for users
                  </p>
                  <p class="fs-300 mobile-text-intro">
                    Additionally I am skilled in
                    <span class="green px-1 fw-bold">accessibility</span> best
                    practices to ensure that my designs are inclusive for all
                    users. I am always looking for ways to improve and
                    <span class="green px-1 fw-bold"
                      >optimize the user experience</span
                    >, and I believe that a well-designed and optimized
                    front-end is crucial for the success of any web
                    application.".
                  </p>
                </div>
                <!-- skill i have used -->
                <div class="about-text-font-size mobile-text-intro px-4">
                  <p>
                    I have experience using a variety of tools and technologies:
                    <br />
                    <span class=""
                      >Technologies:
                      <span class="green px-1 fw-bold"
                        >HTML, CSS , Javascript , SASS</span
                      ></span
                    ><br />
                    <span
                      >Styling libraries:
                      <span class="green px-1 fw-bold">
                        Bootstrap, TailwindCSS</span
                      ></span
                    ><br />
                    <span
                      >Framework/Libraries:
                      <span class="green px-1 fw-bold"
                        >Vue Js, Nuxt Js</span
                      ></span
                    >
                  </p>
                </div>
                <h2 class="fontreg1 paragraph-height mx-4 fs-350 text-white-50">
                  &#8249;/p&#8250;
                </h2>
              </div>

              <h2 class="fontreg1 fs-550 text-white-50">&#8249;div&#8250;</h2>
            </div>
            <div v-motion-slide-visible-left class="col-xl-6">
              <div class="not-on-mobile pt-4 d-flex justify-content-center">
                <img src="@/assets/images/fig.png" alt="" class="w-100" />
              </div>
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
        "Software dev",
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
  color: rgba(105, 105, 105, 0.199) !important;
  position: absolute;
  z-index: 0;
  top: 0rem;
  /* bottom: -30rem; */
  left: 0rem;
  right: 0rem;
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
  top: -2rem !important;
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
  padding: 3.5rem 0rem !important;
}
.bg-color-second-div {
  background: linear-gradient(
    to right,
    #273a38 0%,
    #273a38 70%,
    #162120 50%,
    #162120 100%
  );
  /* height: 100vh !important; */
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
  font-size: 4rem !important;
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
@media (max-width: 1200px) {
  .not-on-mobile {
    display: none !important;
  }
}
@media (max-width: 768px) {
  .not-on-mobile {
    display: none !important;
  }
  .contact-button div {
    position: relative;
    top: 0rem !important;
    left: 0rem;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }
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
    /* padding: ; */
    /* margin-top: 50px; */
  }
  /* title */
  .reduce-title-font-size {
    font-size: 2.5rem !important;
    padding: 0rem 1.4rem;
  }
  /* background text */
  .mobbgContactab {
    font-size: 15.7rem !important;
    color: rgba(105, 105, 105, 0.199) !important;
    position: absolute;
    z-index: 0;
    top: -0rem;

    left: 0;
  }

  .bg-color-second-div {
    background: linear-gradient(
      to right,
      #273a38 0%,
      #273a38 70%,
      #273a38 0%,
      #273a38 70%
    ) !important;
    /* height: 100vh !important; */
  }
  /* padding */
  .about-space {
    padding: 1rem 0rem !important;
  }
  .about-text-font-size {
    padding: 0rem 1.4rem !important;
    text-indent: 4px !important;
    text-align: justify !important;
  }
}
@media (min-width: 992px) {
  .notindesktop {
    display: none !important;
  }
}
@media (max-width: 1197px) {
  .bgfont {
    font-size: 25vw !important;
  }
}
@media (max-width: 576px) {
  .mobile-text-intro {
    font-size: 0.875rem !important;
  }
}
</style>
