<template>
  <div class="page-content">
    <div class="wrapper">
      <div class="page-title">
        <h1 class="title">Profile</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          assumenda id maiores voluptatum reprehenderit rem officia, accusantium
          vitae totam, tempora repellendus autem explicabo pariatur ab dolorem
          voluptatibus nisi, quasi vel!
        </p>

        <div class="slider-container">
          <div class="slide">1Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum modi beatae aliquid quisquam, placeat facilis molestiae recusandae, eos praesentium deserunt architecto nobis ab, perferendis esse a totam quis. Deserunt, ab.</div>
          <div class="slide">2Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum modi beatae aliquid quisquam, placeat facilis molestiae recusandae, eos praesentium deserunt architecto nobis ab, perferendis esse a totam quis. Deserunt, ab.</div>
          <div class="slide">3Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum modi beatae aliquid quisquam, placeat facilis molestiae recusandae, eos praesentium deserunt architecto nobis ab, perferendis esse a totam quis. Deserunt, ab.</div>
          <div class="slide">4Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum modi beatae aliquid quisquam, placeat facilis molestiae recusandae, eos praesentium deserunt architecto nobis ab, perferendis esse a totam quis. Deserunt, ab.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {};
  },
  props: ["content"],
  methods: {},
  created: function (){

  },
  mounted: function (){
    $('.slider-container').slick();
  }
};
</script>
