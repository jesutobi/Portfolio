<template>
  <div class="">
    <div>
      <div class="bg-pattern-img">
        <div class="mob-width font1 height-of-hero-page">
          <!-- intro page -->
          <div class="row mobile-hero-width py-2 text-weight">
            <div
              class="col-7 col-sm-7 mobile-hero-width col-lg-7 col-xl-7 animate__animated animate__bounceInLeft"
            >
              <!-- fake div and h1 tag -->
              <h2 class="fontreg1 fs-550 fake-tag-color">&#8249;div&#8250;</h2>
              <h2
                class="fontreg1 paragraph-height reduce_fake_margin mx-5 fs-350 fake-tag-color"
              >
                &#8249;h1&#8250;
              </h2>
              <h1
                class="text-weight fw-bold reduce-hero-font-size disable-margin intro-spacing mx-5"
              >
                {{ typeValue }}
                <span class="cursor" :class="{ typing: typeStatus }"
                  >&nbsp;</span
                >
              </h1>
              <h2
                class="fontreg1 reduce_fake_margin paragraph-height mx-5 fs-350 fake-tag-color"
              >
                &#8249;h1 /&#8250;
              </h2>
              <!-- a little intro about what i do -->
              <div class="postion-relative">
                <h2
                  class="fontreg1 mx-5 reduce_fake_margin fs-350 fake-tag-color"
                >
                  &#8249;p&#8250;
                </h2>

                <p
                  class="fs-300 reduce-mini-intro-text-hero brief-text disable-margin mobile-hero-width font1 mx-5"
                >
                  <img
                    src="../../src/assets/icon/minus-horizontal-straight-line.png"
                    alt=""
                  />
                  Hello there , <br />
                  i am a Front-end developer,
                  <img
                    src="../../src/assets/icon/minus-horizontal-straight-line.png"
                    alt=""
                  />
                  <br />

                  skilled in utilizing the latest technologies and tools to
                  build responsive and visually appealing websites. I am
                  passionate about staying up to date on industry trends and
                  best practices to ensure that my work is of the highest
                  quality.
                </p>
                <p
                  class="fs-300 green3 reduce-mini-intro-text-hero brief-text disable-margin mobile-hero-width font1 mx-5"
                ></p>

                <h2
                  class="fontreg1 reduce_fake_marginp mx-5 fs-350 fake-tag-color"
                >
                  &#8249;p /&#8250;
                </h2>
              </div>

              <!-- fake div and h1 tag -->
              <div class="c">
                <br class="not-on-mobile" />
                <h2 class="fontreg1 mt-0 fs-550 fake-tag-color">
                  &#8249;div /&#8250;
                </h2>
              </div>
            </div>
            <!-- lets build -->
          </div>
          <!-- socials -->
          <div class="position-relative mob-social-icon-position">
            <div class="social-media-category-position mob-social-media-category-position">
              <div class="d-flex align-items-center justify-content-center">
                <!-- instagra, -->
                <a
                  href="https://www.instagram.com/jesutobbi/"
                  class="anima-nav social-nav animate__animated animate__delay-2s animate__slow	2s animate__bounce animate__repeat-3	3"
                >
                  <div>
                    <span class="anima-nav mx-3"
                      ><svg
                        width="35px"
                        height="35px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        class="change-color-of-icon"
                      >
                        <g>
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            fill-rule="nonzero"
                            d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </a>
                <!-- linkdln -->
                <a
                  href="https://www.linkedin.com/in/jesutobi-joseph-191557167/"
                  class="anima-nav social-nav animate__animated animate__delay-3s animate__slow	2s animate__bounce animate__repeat-3	3"
                >
                  <div>
                    <span class="anima-nav mx-3"
                      ><svg
                        width="35px"
                        height="35px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        class="change-color-of-icon"
                      >
                        <g data-name="Layer 2">
                          <g data-name="linkedin">
                            <rect
                              width="24"
                              height="24"
                              transform="rotate(180 12 12)"
                              opacity="0"
                            />
                            <path
                            
                              d="M15.15 8.4a5.83 5.83 0 0 0-5.85 5.82v5.88a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a1.94 1.94 0 0 1 2.15-1.93 2 2 0 0 1 1.75 2v5.81a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a5.83 5.83 0 0 0-5.85-5.82z"
                            />
                            <rect
                              x="3"
                              y="9.3"
                              width="4.5"
                              height="11.7"
                              rx=".9"
                              ry=".9"
                            />
                            <circle cx="5.25" cy="5.25" r="2.25" />
                          </g>
                        </g></svg
                    ></span>
                  </div>
                </a>

                <!-- git hub -->
                <a href="https://github.com/jesutobi" class="anima-nav social-nav animate__animated animate__delay-4s animate__slow	2s animate__bounce animate__repeat-3	3">
                  <div>
                    <span class="">
                      <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                      <svg
                        width="54px"
                        height="54px"
                        viewBox="0 0 76 76"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        baseProfile="full"
                        enable-background="new 0 0 76.00 76.00"
                        xml:space="preserve"
                        
                        
                        class="change-color-of-icon"
                      >
                        <path
                          fill="#000000"
                          class="change-color-of-icon"
                          fill-opacity="1"
                          stroke-width="0.2"
                          stroke-linejoin="round"
                          d="M 49.4162,18.9999C 50.0612,20.4651 50.4791,22.8974 49.8556,24.6785C 52.4052,26.8554 53.2817,32.1482 52.0513,36.4723C 55.6852,36.7501 60.0132,36.3394 62.8071,37.4547C 60.1951,37.1189 56.6285,36.4602 53.2591,36.6895C 52.6207,36.7325 51.6753,36.6652 51.7216,37.5633C 55.6213,37.8692 59.4967,38.2027 62.6985,39.2016C 59.5232,38.6829 55.6676,37.8934 51.7216,37.7827C 50.0915,40.9998 46.8109,42.5804 42.2823,42.9133C 42.769,43.9729 43.7012,44.3758 43.9294,46.0804C 44.269,48.6255 43.398,52.3543 44.2569,54.0511C 44.6693,54.8637 45.3412,54.8857 45.7944,55.5803C 44.6852,56.8935 41.9355,55.4337 41.6224,54.0511C 41.086,51.6835 42.4394,48.0126 40.9642,46.4078C 41.0689,48.9899 40.3539,52.6172 41.0744,54.9243C 41.3583,55.8317 42.1781,56.1818 41.9526,56.9999C 36.7977,57.5236 38.9509,50.3273 38.1092,46.0804C 37.3319,46.1355 37.6731,47.2452 37.6711,47.7181C 37.6483,51.8664 38.5193,57.555 34.0491,56.9999C 33.9173,56.1289 34.6483,55.8317 34.9261,55.0357C 35.7426,52.7016 34.7734,49.2242 35.1483,46.4078C 33.4416,47.6939 35.3269,52.1851 34.2696,54.4877C 33.6599,55.8125 31.6974,56.3896 30.2084,55.7975C 30.4019,54.8107 31.4217,54.9701 31.8534,54.0511C 32.4576,52.7689 31.8578,50.9232 32.0739,49.0285C 28.9151,49.6586 26.4658,48.937 25.2676,46.9536C 24.731,46.0627 24.5976,45.0131 23.9493,44.2243C 23.3043,43.4348 22.274,43.3285 21.9746,42.2595C 25.8864,41.3179 26.0358,46.2849 29.5491,46.4078C 30.6262,46.447 31.1858,46.0964 32.183,45.8626C 32.462,44.6101 33.0595,43.6762 33.9388,43.0219C 29.5689,42.4238 25.9587,41.0627 24.2801,37.7827C 20.3061,37.9784 16.6698,38.5092 13.3021,39.3102C 16.3589,38.2 20.1296,37.8019 24.1703,37.6718C 23.9322,36.2402 21.8446,36.6338 20.548,36.6895C 18.1395,36.7959 15.1075,37.0952 13.193,37.4547C 15.9691,36.4651 19.8622,36.5886 23.6218,36.5809C 22.4724,32.9756 22.8705,27.2485 25.3782,25.1156C 24.6676,23.3245 24.8881,20.3951 25.8175,18.9999C 28.6169,19.1261 30.3148,20.3466 32.0739,21.5125C 34.2558,20.8918 36.5491,20.5837 39.538,20.7473C 40.7955,20.8174 42.1025,21.3819 43.0491,21.2926C 43.978,21.2055 45.0022,20.163 45.903,19.765C 47.0788,19.2463 48.0728,19.0484 49.4162,18.9999 Z "
                        />
                      </svg>
                    </span>
                  </div>
                </a>
                <!-- email -->
                <a href="mailto:jesutobit@gmail.com" class="anima-nav social-nav animate__animated animate__delay-5s animate__slow	2s animate__bounce animate__repeat-3	3">
                  <div>
                    <span class="mx-2">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        class="change-color-of-icon"
                      >
                        <g data-name="Layer 2">
                          <g data-name="at">
                            <rect width="24" height="24" opacity="0" />
                            <path
                              d="M13 2a10 10 0 0 0-5 19.1 10.15 10.15 0 0 0 4 .9 10 10 0 0 0 6.08-2.06 1 1 0 0 0 .19-1.4 1 1 0 0 0-1.41-.19A8 8 0 1 1 12.77 4 8.17 8.17 0 0 1 20 12.22v.68a1.71 1.71 0 0 1-1.78 1.7 1.82 1.82 0 0 1-1.62-1.88V8.4a1 1 0 0 0-1-1 1 1 0 0 0-1 .87 5 5 0 0 0-3.44-1.36A5.09 5.09 0 1 0 15.31 15a3.6 3.6 0 0 0 5.55.61A3.67 3.67 0 0 0 22 12.9v-.68A10.2 10.2 0 0 0 13 2zm-1.82 13.09A3.09 3.09 0 1 1 14.27 12a3.1 3.1 0 0 1-3.09 3.09z"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- About and skills -->
      <div class="">
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
      typingSpeed: 80,
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
  metaInfo() {
    return {
      title: `${this.post.title}-jesutobi's portfolio`,
      meta: [
        {
          name: "Jesutobi is an experienced Frontend developer that has the ability to build scalable web applications that is visually appealing with a great user experience",
          content: this.post.body.slice(0, 200),
        },
      ],
    };
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
@media (max-width: 576px) {
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
      height: 5vh !important;
      background-color: #162120;
      animation: cursorBlink 1s infinite;
    }
    span.cursor.typing {
      animation: none;
    }
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
  font-weight: lighter !important;
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
  color: #06d599;
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
@media (max-width: 576px) {
  // .mob-social-icon-position{
  //   position: unset !important;
  // }
  .mob-social-media-category-position{
    position: absolute !important;
    top: -5rem;
    left:0rem !important;
    
  }
  .lastfakediv {
    margin: unset !important;
  }
  .mobile-hero-width {
    width: 100% !important;
  }
  .reduce-hero-font-size {
    font-size: 2.5rem !important;
    padding: 0.5rem 1.4rem;
  }
  .disable-margin {
    margin: unset !important;
  }
  // hero cursor
  cursor {
    display: inline-block;
    margin-left: 3px;
    width: 4px;
    height: 2vh !important;
    background-color: #162120;
    animation: cursorBlink 1s infinite;
  }
  .intro-spacing {
    word-spacing: 0.5rem !important;
    line-height: 3.4rem !important;
  }
  // reduce fake text margin
  .reduce_fake_margin {
    margin: unset !important;
    padding: 0.1rem;
  }
  .reduce_fake_marginp {
    margin: unset !important;
    padding: 1rem 1rem 0rem 1rem;
  }
  .reduce-mini-intro-text-hero {
    padding: 0rem 1rem !important;
  }
  .not-on-mobile {
    display: none !important;
  }
  // lets build button
  .contact-button {
    text-decoration: none;
    width: 100%;
    /* max-width: 200px; */
    height: 50px;
    display: block;
    // padding: 1rem;
    // line-height: 50px;
    /* letter-spacing: 3px; */
    position: relative;
    text-align: center;
    color: #08fdd8;
    /* margin-top: 50px; */
  }
  .contact-button div {
    position: unset !important;
    padding: unset !important;
    margin: unset !important;

    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }
  .contact-button span.bg {
    position: absolute;
    width: 0%;
    height: 100%;
    left: -5px;
    // top: 0;
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
    top: 0.45rem !important;
    color: #162120;
    left: 0;
    font-size: 1.1rem !important;
  }
  .contact-button:hover span.text {
    color: white;
  }
  // close div in hero section
  .mob-close-div {
    margin: unset important;
    padding: unset important;
  }
}
// social media button positioning
.social-media-category-position {
  position: absolute;
  bottom: 6rem;
  // top: 0rem;
  right: 0rem;
}
.change-color-of-icon:hover{
  fill:rgb(226, 226, 226) !important;

}
// class="change-color-of-icon"n
</style>
