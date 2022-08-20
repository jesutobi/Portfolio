<template>
  <div>
    <div class="contact-bg fontneubold green2">
      <div class="w-95 m-auto">
        <!-- fake div and h1 tag -->
  
        <div class="">
          
          <h1 class="contact-head-font-size text-center">
            
            I am just a message away,
          </h1>
          <h1 class="contact-head-font-size text-center">
            Let's build
            
          </h1>
        </div>
  
        <div class="">
          <form action="https://www.actionforms.io/e/r/jesutobi" method="post" class="">
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
                  class="border-bottom py-3 px-5 remove-input-defaults w-80 fs-450 border-0 w-90 border-2 border-dark"
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
                  class="border-bottom w-100 fs-450 remove-input-defaults px-5 py-3 border-0 w-70 border-2 border-dark"
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
                class="border-bottom py-3 fs-450 overflow-auto remove-input-defaults px-5 border-0 w-100 border-2 border-dark"
              />
            </div>
            <!-- lets talk button -->
            <div class="">
              <div class="d-flex justify-content-center">
                <button
                  class="py-3 px-4 fw-bold bord-contacts-button bggreen2 w-50 white"
                  type="submit"
                >
                  Let's Talk
                  <img
                    src="../../src/assets/icon/paper-plan.png"
                    alt=""
                    class="mx-2"
                  />
                </button>
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
      </div>
      <!-- fp -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
  background-color: rgb(235, 235, 235);
  background-image: url(@/assets/icon/at2.png) !important;
  background-size: contain;
  background-repeat: no-repeat;
  color: white;
  height: 100vh;
  padding: 4rem 0rem;
}
/* project header */
.contact-head-font-size {
  font-size: 4rem !important;
}
.bord-contacts-button {
  border: 2px solid var(--clr-green) !important;
}
/* remove input default style */
.remove-input-defaults {
  background: transparent !important;
}
/* remove focus */
input:focus {
  outline: none !important;
}
textarea:focus {
  outline: none !important;
}
</style>
