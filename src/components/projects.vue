<template>
  <div class="fontneubold project-bg">
    <div class="w-95 m-auto">
      <div class="row works-space">
        <div class="col-lg-3 col-xl-3 my-5">
          <!-- header -->
          <!-- fake div and h1 tag -->
          <h2 class="fontreg1 fs-550 text-white-50">&#8249;div&#8250;</h2>
          <!-- fake div and h1 tag -->
          <h2 class="fontreg1 paragraph-height mx-4 fs-350 text-white-50">
            &#8249;h1&#8250;
          </h2>
          <h1 class="project-head-font-size">Recent <br />projects</h1>
          <!-- fake div and h1 tag -->
          <h2 class="fontreg1 paragraph-height mx-4 fs-350 text-white-50">
            &#8249;/h1&#8250;
          </h2>
          <!-- fake div and h1 tag -->
          <h2 class="fontreg1 fs-550 text-white-50">&#8249;/div&#8250;</h2>
          <!-- project card -->
          <!-- <div class="bord-button2 mt-5">
            <div class="d-flex justify-content-between mt-2">
              <div class="">
                <span class="fs-450">Project A</span>
                <br />
                <span class="fs-450"> Ecommerce platform </span>
                <br />
                <span class="fs-150"> a website</span>
              </div> -->
              <!-- open icon -->
              <!-- <div>
                <span
                  ><img
                    src="@/assets/icon/down-arrow.png"
                    class="bggreen rounded-circle p-2"
                    alt=""
                /></span>
              </div>
            </div> -->
            <!-- image of project -->
            <!-- <div
              style="width: 280px; height: 200px"
              class="bgwhite2 border rounded"
            > -->
              <!-- <span class="bgwhite"></span> -->
              <!-- <div
                class="d-flex justify-content-center align-items-center py-3"
              >
                <img
                  src="@/assets/icon/facebook.png"
                  alt=""
                  style="width: 180px"
                />
              </div>
            </div>
          </div> -->
        </div>
        <!-- second project -->
        <div class="col-lg-3 col-xl-3 position-relative">
          <!-- project card -->
          <div class="bord-button2 mt-5 second-position">
            <div class="d-flex justify-content-between mt-2">
              <div class="">
                <span class="fs-450">Project A</span>
                <br />
                <span class="fs-450"> Ecommerce platform </span>
                <br />
                <span class="fs-150"> a website</span>
              </div>
              <!-- open icon -->
              <div>
                <span
                  ><img
                    src="@/assets/icon/down-arrow.png"
                    alt=""
                    class="bggreen rounded-circle p-2"
                /></span>
              </div>
            </div>
            <!-- image of project -->
            <div
              style="width: 280px; height: 200px"
              class="bgwhite2 border rounded"
            >
              <!-- <span class="bgwhite"></span> -->
              <div
                class="d-flex justify-content-center align-items-center py-3"
              >
                <img
                  src="@/assets/icon/facebook.png"
                  alt=""
                  style="width: 180px"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- third project -->
        <div class="col-lg-3 col-xl-3 position-relative">
          <!-- project card -->
          <div class="bord-button2 mt-5 third-position">
            <div class="d-flex justify-content-between mt-2">
              <div class="">
                <span class="fs-450">Project A</span>
                <br />
                <span class="fs-450"> Ecommerce platform </span>
                <br />
                <span class="fs-150"> a website</span>
              </div>
              <!-- open icon -->
              <div>
                <span
                  ><img
                    src="@/assets/icon/down-arrow.png"
                    alt=""
                    class="bggreen rounded-circle p-2"
                /></span>
              </div>
            </div>
            <div
              style="width: 280px; height: 200px"
              class="bgwhite2 border rounded"
            >
              <!-- <span class="bgwhite"></span> -->
              <div
                class="d-flex justify-content-center align-items-center py-3"
              >
                <img
                  src="@/assets/icon/facebook.png"
                  alt=""
                  style="width: 180px"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- fourth project -->
        <div class="col-lg-3 col-xl-3 position-relative">
          <!-- project card -->
          <div class="bord-button2 mt-5 forth-position">
            <div class="d-flex justify-content-between mt-2">
              <div class="">
                <span class="fs-450">Project A</span>
                <br />
                <span class="fs-450"> Ecommerce platform </span>
                <br />
                <span class="fs-150"> a website</span>
              </div>
              <!-- open icon -->
              <div>
                <span
                  ><img
                    src="@/assets/icon/down-arrow.png"
                    alt=""
                    class="bggreen rounded-circle p-2"
                /></span>
              </div>
            </div>
            <!-- image of project -->
            <div
              style="width: 280px; height: 200px"
              class="bgwhite2 border rounded"
            >
              <!-- <span class="bgwhite"></span> -->
              <div
                class="d-flex justify-content-center align-items-center py-3"
              >
                <img
                  src="@/assets/icon/facebook.png"
                  alt=""
                  style="width: 180px"
                />
              </div>
            </div>
            <!-- view more -->
            <div class="position-relative">
              <div class="view-marg-button w-100">
                <button
                  class="px-3 py-3 w-70 fw-bold bord-button bggreen2 text-light fs-400"
                >
                  View more
                </button>
              </div>
            </div>
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
.second-position {
  position: absolute;
  top: 3.3rem;
}
.third-position {
  position: absolute;
  top: 0.2rem;
}
.forth-position {
  position: absolute;
  top: -2.7rem;
}
/* projects space */
.works-space {
  padding: 7.5rem 0rem !important;
}
/* view more button */
.view-marg-button {
  margin: 2rem 0rem 3.5rem 3.5rem !important ;
  position: absolute;
  top: 1.48rem;
  bottom: 0;
  left: 0rem;
  right: 0;
}
.bord-button {
  border: 2px solid var(--clr-green) !important;
}
.bord-button2 {
  border-top: 2px solid white !important;
}
/* background color */
.project-bg {
  background-color: #162120;
  color: white;
  height: 100vh;
  /* padding: -7rem 0rem; */
}
/* project header */
.project-head-font-size {
  font-size: 4.5rem !important;
}
</style>
