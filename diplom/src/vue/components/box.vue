<template>
  <div class="box">
    <p>{{ d }}</p>
  </div>
</template>
<script>
module.exports = {
  data: function () {
    return {
      action: false,
      x1: 0,
      x2: 0,
      distance: 0,
    };
  },
  computed: {
    d: function () {
      return (this.distance = this.x2 - this.x1);
    },
  },
  props: [],
  methods: {},
  mounted: function () {
    document.querySelector('.box').addEventListener('mousedown', function (e) {
      console.log('start');
      console.log(e.pageX);
      this.x1 = e.pageX;
      this.action = true;
    });
    window.addEventListener('mouseup', function (e) {
      console.log('end');
      this.x2 = e.pageX;
      console.log(e.pageX);
      this.action = false;
    });
    window.addEventListener('mousemove', function (e) {
      console.log(this.x1);
      if (this.action) {
        console.log('move');
        console.log(e.pageX);
        this.x2 = e.pageX;
        this.distance = this.x2 - this.x1;
      }
      console.log(this.distance);
    });
  },
};
</script>
