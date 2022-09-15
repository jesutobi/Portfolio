<template>
  <div class="bggreen">
    <div class="fontreg footer-pos mob-width">
      <div class="py-2 w-100 border-2 border-dark">
        <div class="d-flex align-items-center justify-content-between">
          <!-- copyright -->
          <div>
            <span
              >Designed(ideas from dribble &#38; hashnode) <br />
              and built by
            </span>
          </div>
          <!--name  -->
          <div>
            <router-link to="/" class="text-decoration-none text-reset">
              <h4 class="logo-style acquirefontbold anima-nav">
                Jesutobi.
                <br />
                Joseph
              </h4>
            </router-link>
            
          </div>
          <!-- socials -->
          <div class="d-flex align-items-center">
            <a href="https://www.instagram.com/jesutobbi/" class="anima-nav">
              <div>
                <span class="anima-nav"
                  ><img src="@/assets/icon/instagram.png" alt="" class="mx-3"
                /></span>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/jesutobi-joseph-191557167/"
              class="anima-nav"
            >
              <div>
                <span class="anima-nav"
                  ><img src="@/assets/icon/linkedin.png" alt="" class="mx-3"
                /></span>
              </div>
            </a>
            <!-- <a href="">
            <div>
              <span
                ><img src="@/assets/icon/twitter.png" alt="" class="mx-3"
              /></span>
            </div>
          </a> -->
            <a href="https://github.com/jesutobi" class="anima-nav">
              <div>
                <span
                  ><img src="@/assets/icon/github.png" alt="" class="mx-3"
                /></span>
              </div>
            </a>
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
.anima-nav:hover {
  animation: headShake; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s;
  /* background-color: #162120; */
  /* color: #05d69a !important; */
  /* border-radius: 0.3rem; */
  /* padding: 0rem 0rem; */
}
</style>