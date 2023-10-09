<template>
  <div>
    <div class="bg-pattern-img">
      <div class="font1 container position-relative">
        <!-- intro page -->
        <div class="row mobile-hero-width text-weight">
          <div
            class="col-8 mobile-hero-width animate__animated animate__bounceInLeft"
          >
            <!-- fake div and h1 tag -->
            <h2 class="fontreg1 fs-550 fake-tag-color">&#8249;div&#8250;</h2>
            <h2
              class="fontreg1 paragraph-height reduce_fake_margin mx-5 fs-350 fake-tag-color"
            >
              &#8249;h1&#8250;
            </h2>
            <h1
              class="text-weight fw-bold reduce-hero-font-size disable-margin clashBold intro-spacing mx-5"
            >
              {{ typeValue }}
              <!-- <span class="cursor" :class="{ typing: typeStatus }"
                  >&nbsp;</span
                > -->
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

                skilled in utilizing the latest technologies and tools to build
                responsive and visually appealing websites.
                <span class="not-on-mobile"
                  >I am passionate about staying up to date on industry trends
                  and best practices to ensure that my work is of the highest
                  quality.</span
                >
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
        <div class="mob-social-icon-position">
          <div>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "animate.css";
import Socials from "@/components/socials.vue";
export default {
  components: { Socials },
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: ["FRONT-END DEVELOPER"],
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
.off-padding {
  padding: 0rem !important;
}
.bg-pattern-img {
  background-image: url(@/assets/images/Shape.png);
  background-color: #06d599;
  color: #162120;
  height: 95vh;
  animation: slide 7s infinite linear; /* Adjust the duration as needed */
  padding: 3rem 0rem !important;
}
@media (max-width: 768px) {
  .bg-pattern-img {
    background-image: url(@/assets/images/Shape.png);
    background-color: #06d599;
    color: #162120;
    height: 100vh;
    animation: slide 17s infinite linear !important; /* Adjust the duration as needed */
  }
}

@media (max-width: 576px) {
  .mobile-hero-width {
    width: 100% !important;
  }
  h1 {
    font-size: 6rem;
    font-weight: normal;
    span.typed-text {
      color: #d2b94b;
    }
    // span.cursor {
    //   display: inline-block;
    //   margin-left: 3px;
    //   width: 4px;
    //   height: 5vh !important;
    //   background-color: #162120;
    //   animation: cursorBlink 1s infinite;
    // }
    // span.cursor.typing {
    //   animation: none;
    // }
  }
}
@media (min-width: 768px) {
  .reduce-hero-font-size {
    font-size: 4rem !important;
  }
}

/* DEMO-SPECIFIC STYLES */

/* contact me button */
// intro words spacing
.intro-spacing {
  word-spacing: 1rem !important;
}

.text-weight {
  font-weight: 900 !important;
  font-size: 6rem !important;
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
@keyframes slide {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
}

/* fake tag color */
.fake-tag-color {
  color: grey;
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
// .mob-width {
//   max-width: 95%;
//   margin: auto;
// }
@media (min-width: 1410px) {
  // .mob-width {
  //   max-width: 1250px !important;
  // }
  // .max2 {
  //   max-width: 100% !important;
  // }
}
@media (max-width: 768px) {
  .bg-pattern-img {
    background-image: url(@/assets/images/Shape.png);
    background-color: #06d599;
    color: #162120;
    height: auto;
  }
  // .mob-social-icon-position{
  //   position: unset !important;
  // }
  .mob-social-media-category-position {
    position: absolute !important;
    top: -5rem;
    left: 0rem !important;
  }
  .lastfakediv {
    margin: unset !important;
  }

  .reduce-hero-font-size {
    font-size: 2.4rem !important;
    padding: 0.5rem 1.4rem;
  }
  .disable-margin {
    margin: unset !important;
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
  // .reduce-mini-intro-text-hero {
  //   padding: 0rem 1rem !important;
  // }
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
.change-color-of-icon:hover {
  fill: rgb(226, 226, 226) !important;
}
// class="change-color-of-icon"n
</style>
