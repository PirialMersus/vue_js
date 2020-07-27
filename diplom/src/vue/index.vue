<template>
  <div class="global-container">
    <div class="containerForBoxElement">
      <box></box>
    </div>
  </div>
</template>
<script>
module.exports = {
  data: function () {
    return {};
  },
  components: {
    box: require('./components/box.vue'),
  },
  methods: {},
};
</script>
