<template>
  <div>
    <div class=" mt-3 fontneubold">
      <div>
        <h1 class="text-contact">I am just a message away,</h1>
        <h1 class="text-contact">Let's build</h1>
      </div>
      <div class="row">
        <form action="" class="col-7">
          <!-- name -->
          <div class="mb-4 position-relative">
            <!-- <label for="">Enter your name</label> -->
            <br />
            <div class="userpostion">
              <img src="@/assets/icon/user.png" alt="" />
            </div>
            <label for="" class="fs-170">Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              class="border-bottom py-3 px-5 fs-450 border-0 w-70 border-2 border-dark"
            />
          </div>
          <!-- email adress -->
          <div class="my-4 position-relative">
            <div class="atpostion">
              <img src="@/assets/icon/at.png" alt="" />
            </div>
            <label for="" class="fs-170">Email address</label>
            <br />
            <input
              type="text"
              placeholder="Enter your email address"
              class="border-bottom fs-450 px-5 py-3 border-0 w-70 border-2 border-dark"
            />
          </div>

          <!-- message -->
          <div class="my-4 position-relative">
            <div class="atpostion">
              <img src="@/assets/icon/code.png" alt="" />
            </div>
            <label for="" class="fs-170">Your message</label>
            <br />
            <input
              type=""
              placeholder="What do you have in mind"
              class="border-bottom py-3 fs-450 px-5 border-0 w-70 border-2 border-dark"
            />
          </div>
          <!-- lets talk button -->
          <div class="position-relative">
            <div class="intro-marg-button w-100   ">
              <button
                class="border-0 py-3  px-4 fw-bold bord-button bg-dark text-light fs-400"
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
        <div class="col-5 position-relative">
          <div class="at2postion">
            <img src="@/assets/icon/at2.png" alt="" class="" />
          </div>
          <!-- send
          <div class="mailposition">
            <img src="@/assets/icon/mail.png" alt="">
          </div> -->
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
  z-index:-1;
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

.bord-button {
  border-radius: 1.5rem !important;
}
</style>
