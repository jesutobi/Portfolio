<template>
  <div class="">
    <div>
      <div class="bg-pattern-img">
        <div class="mob-width height-of-hero-page">
          <!-- intro page -->
          <div class="row py-4 fontneubold text-weight">
            <div
              class="col-6 col-sm-6 col-lg-6 col-xl-6 animate__animated animate__bounceInLeft"
            >
              <!-- fake div and h1 tag -->
              <h2 class="fontreg1 fs-550 fake-tag-color">&#8249;div&#8250;</h2>
              <h2 class="fontreg1 paragraph-height mx-5 fs-350 fake-tag-color">
                &#8249;h1&#8250;
              </h2>
              <h1 class="text-weight intro-spacing mx-5">
                {{ typeValue }}
                <span class="cursor" :class="{ typing: typeStatus }"
                  >&nbsp;</span
                >
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
            <!-- lets build -->
          </div>
          <router-link to="/contacts">
            <a href="#" class="contact-button py-2">
              <div class="">
                <span class="bg"></span>
                <span class="base"></span>
                <span class="text fw-bold"> Lets Build </span>
              </div>
            </a>
          </router-link>
        </div>
      </div>
      <!-- About and skills -->
      <div class="">
        <About  />
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
import "animate.css";
// import { setTimeout } from "timers";
import Contacts from "@/components/contacts.vue";
import Works from "@/components/projects.vue";
import About from "@/components/about/About.vue";
export default {
  components: {
    Contacts,
    Works,
    About,
  },
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: ["Jesutobi Builds seamless User experience"],
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
    // eraseText() {
    //   if (this.charIndex > 0) {
    //     if (!this.typeStatus) this.typeStatus = true;
    //     this.typeValue = this.typeArray[this.typeArrayIndex].substring(
    //       0,
    //       this.charIndex - 1
    //     );
    //     this.charIndex -= 1;
    //     setTimeout(this.eraseText, this.erasingSpeed);
    //   } else {
    //     this.typeStatus = false;
    //     this.typeArrayIndex += 1;
    //     if (this.typeArrayIndex >= this.typeArray.length)
    //       this.typeArrayIndex = 0;
    //     setTimeout(this.typeText, this.typingSpeed + 1000);
    //   }
    // },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 6rem;
  font-weight: normal;
  span.typed-text {
    color: #d2b94b;
  }
  span.cursor {
    display: inline-block;
    margin-left: 3px;
    width: 4px;
    height: 10vh !important;
    background-color: #162120;
    animation: cursorBlink 1s infinite;
  }
  span.cursor.typing {
    animation: none;
  }
}
@keyframes cursorBlink {
  49% {
    background-color: #162120;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
/* DEMO-SPECIFIC STYLES */

/* contact me button */
// intro words spacing
.intro-spacing {
  word-spacing: 1rem !important;
}
.contact-button {
  text-decoration: none;
  width: 50%;
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
  top: -6rem !important;
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
  background-color: #162120;
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
  border: 2px solid #162120;
  box-sizing: border-box;
}
.contact-button span.text {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  color: #162120;
  left: 0;
}
.contact-button:hover span.text {
  color: white;
}
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
//  .height-of-hero-page {
//   height: 85vh !important;
// }
.text-weight {
  font-weight: 900 !important;
  font-size: 4.5rem;
  word-spacing: 2;
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
  line-height: 50% !important;
}
.paragraph-height {
  line-height: 2% !important;
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
  background-color: #06d599;
  color: #162120;
}
/* fake tag color */
.fake-tag-color {
  color: #162120;
}
/* lets talk button */
.view-marg-button {
  /* margin: 2rem 0rem 3.5rem 3.5rem !important ; */
  position: absolute;
  top: -7.5rem;
  bottom: 0;
  left: 6rem;
  right: 0;
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