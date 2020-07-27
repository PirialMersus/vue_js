<template>
  <div class="global-container" :class="{ leftBarCollapsed: !isLeftBarOpen }">
    <top-bar></top-bar>
    <left-bar @resizeBar="resizeBar" :windowWidth="windowWidth"></left-bar>
    <div class="page-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<style></style>
<script>
window.addEventListener(
  "resize",
  function () {
    window_width = document.querySelector(".global-container").width();
    console.log(window_width);
    if (window_width < 700) {
      this.isLeftBarOpen = false;
      console.log("gjhf");
    }
  },
  false
);

module.exports = {
  data: function () {
    return {
      isLeftBarOpen: true,
      windowWidth: 0,
    };
  },
  components: {
    "top-bar": require("./components/top-bar.vue"),
    "left-bar": require("./components/left-bar.vue"),
  },
  computed: {},
  mounted() {
    this.$nextTick(function () {
      window.addEventListener("resize", this.getWindowWidth);

      //Init
      this.getWindowWidth();
    });
  },
  methods: {
    resizeBar: function (value) {
      this.isLeftBarOpen = value;
      console.log(value);
    },
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
  },
};
</script>
