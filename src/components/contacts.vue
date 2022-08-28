<template>
  <div>
    <div class="contact-bg fontneubold bggreen3 position-relative">
      <!-- <Preload /> -->
      <div class="w-95 m-auto">
        <!-- fake div and h1 tag -->

        <div class="">
          <h1 class="contact-head-font-size text-center">
            I am just a message away,
          </h1>
          <h1 class="contact-head-font-size text-center">
            {{ typeValue }}
            <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
          </h1>
        </div>

        <div class="">
          <form
            action="https://www.actionforms.io/e/r/jesutobi"
            method="post"
            class="overbg"
          >
            <!-- name -->
            <div class="d-flex align-items-center justify-content-center">
              <div class="mb-4 mx-1 position-relative w-35">
                <!-- <label for="">Enter your name</label> -->
                <br />
                <div class="userpostion">
                  <img src="@/assets/icon/user.png" alt="" />
                </div>
                <label for="name" class="fs-170">Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  class="border-bottom py-3 px-5 remove-input-defaults w-80 fs-450 border-0 w-90 border-2 border-light"
                  name="name"
                  required
                />
              </div>
              <!-- email adress -->
              <div class="my-4 position-relative w-35">
                <div class="atpostion">
                  <img src="@/assets/icon/at.png" alt="" />
                </div>
                <label for="email" class="fs-170">Email address</label>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  class="border-bottom w-100 fs-450 remove-input-defaults px-5 py-3 border-0 w-70 border-2 border-light"
                  name="email"
                  required
                />
              </div>
            </div>

            <!-- message -->
            <div class="my-4 w-70 m-auto position-relative">
              <div class="atpostion">
                <img src="@/assets/icon/code.png" alt="" />
              </div>
              <label for="message" class="fs-170">Your message</label>
              <br />
              <textarea
                type="text"
                name="message"
                placeholder="What do you have in mind"
                class="border-bottom py-3 fs-450 overflow-auto remove-input-defaults px-5 border-0 w-100 border-2 border-light"
              />
            </div>
            <!-- lets talk button -->
            <div class="">
              <div type="submit" class="d-flex justify-content-center">
                <a href="#" class="contact-button py-2">
                  <div class="">
                    <span class="bg"></span>
                    <span class="base"></span>
                    <span class="text fw-bold"> Lets Build </span>
                  </div>
                </a>
              </div>
            </div>
          </form>
          <!-- at bg -->
          <!-- <div class="col-5 position-relative">
            <div class="at2postion">
              <img src="@/assets/icon/at2.png" alt="" class="" />
            </div> -->
          <!-- send
          <div class="mailposition">
            <img src="@/assets/icon/mail.png" alt="">
          </div> -->
          <!-- </div> -->
        </div>
        <div>
          <h1 class="bgContact">Contac</h1>
        </div>
      </div>
      <!-- fp -->
    </div>
  </div>
</template>

<script>
import Preload from "@/components/pageloader.vue";
export default {
  components: {
    Preload,
  },
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: [
        "Lets Build",
        "Lets talk about the future",
        "of your next project",
        "Reach Out :)",
      ],
      typingSpeed: 150,
      erasingSpeed: 50,
      newTextDelay: 1500,
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
/*put form over background text */
/* .overbg{
  z-index: ;
} */
/* background text */
.bgContact {
  font-size: 25rem !important;
  color: rgba(105, 105, 105, 0.199) !important;
  position: absolute;
  z-index: 0 !important;
  /* top: 7rem; */
  left: 0;
  bottom: -6.5rem;
}
/* projects button */
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
  top: 0rem !important;
  /* left: -3.5rem; */
  width: 100%;
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
.text-contact {
  font-weight: 900 !important;
  font-size: 4.3rem;
}
.contacts-marg {
  margin: 1.5rem 3.5rem !important ;
}
/* @position */
.atpostion {
  position: absolute !important;
  top: 2.6rem;
  bottom: 2rem !important;
}
/* second at position */
.at2postion {
  position: absolute;
  top: -6rem;
  bottom: 0rem;
  z-index: -1;
}
.userpostion {
  position: absolute !important;
  top: 4rem;
  bottom: 2rem !important;
}
/* send button */
.intro-marg-button {
  margin: 2rem 0rem 3.5rem 3.5rem !important ;
  position: absolute;
  top: -7rem;
  bottom: 0;
  left: 30rem;
  right: 0;
  z-index: 10;
}

/* background color */
.contact-bg {
  /* background-color: rgb(235, 235, 235); */
  /* background-image: url(@/assets/icon/at2.png) !important; */
  background-size: contain;
  background-repeat: no-repeat;
  color: white;
  height: 100vh;
  padding: 4rem 0rem;
}
/* project header */
.contact-head-font-size {
  font-size: 4rem !important;
  color: #06d599 !important;
}
.bord-contacts-button {
  border: 2px solid var(--clr-green) !important;
}
/* remove input default style */
.remove-input-defaults {
  background: transparent !important;
}
.remove-input-defaults::placeholder {
  color: white !important;
}
/* remove focus */
input:focus {
  outline: none !important;
  color: white !important;
}
textarea:focus {
  outline: none !important;
  color: white !important;
}
</style>