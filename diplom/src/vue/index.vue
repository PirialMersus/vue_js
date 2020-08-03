<template>
  <div class="global-container">
    <button @click="addNewBox">Add new box</button>
    <div class="containerForBoxElement">
      <box
        :boxesCopy="boxes"
        v-for="item in boxes"
        :value="item"
        @transition="setTransition"
      ></box>
    </div>
  </div>
</template>
<script>
module.exports = {
  data: function () {
    return {
      counter: 0,
      boxes: [],
    };
  },
  components: {
    box: require('./components/box.vue'),
  },
  methods: {
    addNewBox: function () {
      this.boxes.push({ id: this.counter, x: 0, y: 0 });
      this.counter++;
    },
    setTransition: function (index, transitionX, transitionY) {
      // console.log(index, transitionX, transitionY);
      let tempValueX = this.boxes[index].x;
      let tempValueY = this.boxes[index].y;
      this.boxes[index].x = tempValueX + transitionX;
      this.boxes[index].y = tempValueY + transitionY;
    },
  },
};
</script>
