<template>
  <div class="global-container">
    <page-header></page-header>
    <router-view></router-view>
  </div>
</template>
<style></style>
<script>
module.exports = {
  data: function () {
    return {
    };
  },
  components: {
    'page-header': require("./components/page-header.vue"),
  },
  methods: {

    }
};
</script>
