<template>
  <div class="page-loader acquirefontbold" v-if="!isloaded">
    <h1 class="text-weight intro-spacing mx-5">
      {{ typeValuel}}
      <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
    </h1>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isloaded: false,
      typeValuel: "",
      typeStatusl: false,
      typeArrayl: ["Jesutobi Joseph . J"],
      typingSpeedl: 30,

      newTextDelayl: 0,
      typeArrayIndexl: 0,
      charIndexl: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIndexl < this.typeArrayl[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValuel+= this.typeArrayl[this.typeArrayIndex].charAt(
          this.charIndexl
        );
        this.charIndexl += 1;
        setTimeout(this.typeText, this.typingSpeedl);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
  },
  beforeMount() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.isloaded = true;
      }
    };
    setTimeout(this.typeText, this.newTextDelayl);
  },
  //   created() {
  //     setTimeout(this.typeText, this.newTextDelay );
  //   },
};
</script>

<style lang="scss" scoped>
$colors: #8cc271, #69beeb, #f5aa39, #e9643b;

// -----------------------------------------------------

.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fffcf6;
  z-index: 999;
}

// -----------------------------------------------------

.cube {
  width: 40px;
  height: 40px;
  margin-right: 10px;

  @for $i from 1 through length($colors) {
    &:nth-child(#{$i}) {
      background-color: nth($colors, $i);
    }
  }

  &:first-child {
    animation: left 1s infinite;
  }

  &:last-child {
    animation: right 1s infinite 0.5s;
  }
}

// -----------------------------------------------------

@keyframes left {
  40% {
    transform: translateX(-60px);
  }
  50% {
    transform: translateX(0);
  }
}

@keyframes right {
  40% {
    transform: translateX(60px);
  }
  50% {
    transform: translateX(0);
  }
}
.text-weight {
  font-weight: 900 !important;
  font-size: rem;
  word-spacing: 2;
}
.intro-spacing {
  word-spacing: 1rem !important;
}
</style>