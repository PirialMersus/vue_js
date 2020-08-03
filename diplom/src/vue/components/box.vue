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
      boxCopys: [],
      savedPositions: [],
      savePositionX: 0,
      savePositionY: 0,
      currentBoxData: 0,
    };
  },
  props: ['value', 'boxesCopy'],
  methods: {
    boxController: function (positionX, positionY) {
      $currentBox.css(
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
      // document.querySelector('.box').style.transform =
      //   'translate(' + this.distanceX + 'px,' + this.distanceY + 'px)';
      // document.querySelector('.box').style.transform = 'rotate(45deg)';
      // console.log('boxController: я работаю');
    },
  },
  created: function () {},
  // updated: function () {
  //   this.boxCopys = this.boxesCopy;
  // },
  mounted: function () {
    $(document).on(
      'mousedown',
      '.box',
      function (e) {
        let $currentBox = $(this.$el);
        this.currentBoxData = $currentBox.attr('data-attr');
        // this.currentBoxData = 0;
        this.x1 = e.pageX;
        this.y1 = e.pageY;
        this.action = true;
        // console.log(this.boxCopys[0], this.boxCopys[1], this.boxCopys[2]);
        // console.log(this.currentBoxData);
      }.bind(this),
    );

    // $(document).on('mousedown', '.box', function (e) {
    //   $currentBox = $(this);
    //   currentBoxData = $currentBox.attr('data-attr');
    //   console.log(currentBoxData);
    //   x = e.pageX;
    //   y = e.pageY;
    //   this.action = true;
    // });

    window.addEventListener(
      'mouseup',
      function (e) {
        this.action = false;
        this.pushBoxTransitionData();
        // this.savedPositionX = this.distanceX;
        // this.savedPositionY = this.distanceY;
        this.savedPositions.push({ x: this.distanceX, y: this.distanceY });
      }.bind(this),
    );

    window.addEventListener(
      'mousemove',
      function (e) {
        if (this.action) {
          // console.log('move');
          // this.x2 = e.pageX;
          // this.y2 = e.pageY;
          if (this.savedPositions[this.currentBoxData].x) {
            this.distanceX =
              this.savedPositions[this.currentBoxData].x + (e.pageX - this.x1);
            this.distanceY =
              this.savedPositions[this.currentBoxData].y + (e.pageY - this.y1);
          } else {
            this.distanceX = e.pageX - this.x1;
            this.distanceY = e.pageY - this.y1;
          }
          boxController(this.distanceX, this.distanceY);
          // this.distanceX = this.savedPositionX + (this.x2 - this.x1);
          // this.distanceY = this.savedPositionY + (this.y2 - this.y1);
        }
        // console.log('this.distanceX', this.distanceX);
        // console.log('this.distanceY', this.distanceY);
      }.bind(this),
    );
  },
};
</script>
