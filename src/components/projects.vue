<template>
  <div class="fontneubold   ">
    <div class="row works-space w-90 m-auto">
      <div class="col-lg-3 col-xl-3">
        <!-- header -->
        <h1>Recent <br />projects</h1>
        <!-- project card -->
        <div class="border-top border-3 border-secondary mt-5">
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
              <span><img src="@/assets/icon/down-arrow.png" alt="" /></span>
            </div>
          </div>
          <!-- image of project -->
          <div style="width: 280px; height: 150px" class="bgblack">
            <span class="bgblack"></span>
          </div>
        </div>
      </div>
      <!-- second project -->
      <div class="col-lg-3 col-xl-3 position-relative">
        <!-- project card -->
        <div class="border-top border-3 border-secondary mt-5 second-position">
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
              <span><img src="@/assets/icon/down-arrow.png" alt="" /></span>
            </div>
          </div>
          <!-- image of project -->
          <div style="width: 280px; height: 150px" class="bgblack">
            <span class="bgblack"></span>
          </div>
        </div>
      </div>
      <!-- third project -->
      <div class="col-lg-3 col-xl-3 position-relative">
        <!-- project card -->
        <div class="border-top border-3 border-secondary mt-5 third-position">
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
              <span><img src="@/assets/icon/down-arrow.png" alt="" /></span>
            </div>
          </div>
          <!-- image of project -->
          <div style="width: 280px; height: 150px" class="bgblack">
            <span class="bgblack"></span>
          </div>
        </div>
      </div>
      <!-- fourth project -->
      <div class="col-lg-3 col-xl-3 position-relative">
        <!-- project card -->
        <div class="border-top border-3 border-secondary mt-5 forth-position">
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
              <span><img src="@/assets/icon/down-arrow.png" alt="" /></span>
            </div>
          </div>
          <!-- image of project -->
          <div style="width: 280px; height: 150px" class="bgblack">
            <span class="bgblack"></span>
          </div>
          view more
          <div class="position-relative">
            <div class="intro-marg-button w-70   ">
              <button
                class="border-0 py-3  px-4 fw-bold bord-button bg-dark text-light fs-400"
              >
                View more
              
              </button>
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
.works-space{
  margin:10rem 0rem !important;
}
/* view more button */
.intro-marg-button {
  margin: 2rem 0rem 3.5rem 3.5rem !important ;
  position: absolute;
  top: 1.48rem;
  bottom: 0;
  left: 5rem;
  right: 0;
}
.bord-button {
  border-radius: 1.5rem !important;
}
</style>
