<template>
  <div
    class="box"
    :data-attr="value.id"
    :style="`transform: translate(${value.x}px, ${value.y}px)`"
    @transition="pushBoxTransitionData"
  >
    <p>
      {{ distanceX }} {{ value.x }},{{ distanceY }},{{ value.y }}
      {{ value.id }}
    </p>
  </div>
</template>
<script>
module.exports = {
  data: function () {
    return {
      action: false,
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0,
      distanceX: 0,
      distanceY: 0,
      savedPositions: [],
      savePositionX: 0,
      savePositionY: 0,
      currentBoxData: 0,
      $currentBox: 0,
    };
  },

  props: ['value'],

  methods: {
    boxController: function (positionX, positionY) {
      this.$currentBox.css(
        'transform',
        'translate(' + positionX + 'px, ' + positionY + 'px)',
      );
    },

    pushBoxTransitionData: function () {
      this.$emit(
        'transition',
        this.currentBoxData,
        this.distanceX,
        this.distanceY,
      );
    },
  },

  created: function () {},

  mounted: function () {
    $(document).on(
      'mousedown',
      '.box',
      function (e) {
        this.$currentBox = $(this.$el);
        this.currentBoxData = this.$currentBox.attr('data-attr');

        if (typeof this.savedPositions[this.currentBoxData] == undefined) {
          savedPositions[this.currentBoxData] = { x: 0, y: 0 };
        }
        this.x1 = e.pageX;
        this.y1 = e.pageY;
        this.action = true;
      }.bind(this),
    );

    window.addEventListener(
      'mouseup',
      function (e) {
        this.action = false;
        this.pushBoxTransitionData();
        this.savedPositions[this.currentBoxData] = {
          x: this.distanceX,
          y: this.distanceY,
        };
      }.bind(this),
    );

    window.addEventListener(
      'mousemove',
      function (e) {
        if (this.action) {
          this.distanceX =
            this.savedPositions[this.currentBoxData].x + (e.pageX - this.x1);
          this.distanceY =
            this.savedPositions[this.currentBoxData].y + (e.pageY - this.y1);
          this.boxController(this.distanceX, this.distanceY);
        }
      }.bind(this),
    );
  },
};
</script>
