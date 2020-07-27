<template>
  <div class='left-bar'>
    <div class='head'>
      <span class='title'>Some logo</span>
    </div>
    <div class='nav'>
      <ul>
        <li>
          <router-link to='/'
            ><span class='fas fa-home'></span>Home</router-link
          >
        </li>
        <li>
          <router-link to='/profile'
            ><span class='fas fa-user'></span>Profile</router-link
          >
        </li>
        <li>
          <router-link to='/characters'>
            <span class='fas fa-users'></span>Characters</router-link
          >
        </li>
      </ul>
      <h3>{{windowWidth}}</h3>
      <div class='footer'>
        <a @click='resizeBar'
          ><span class='fas fa-angle-double-left'></span>Свернуть</a
        >
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      isLeftBarOpen: true,
    };
  },
  props: ['content', 'windowWidth'],
  methods: {
    resizeBar: function () {
      this.isLeftBarOpen = !this.isLeftBarOpen;
      this.$emit('resizeBar', this.isLeftBarOpen);
    },
  },
  mounted: function () {
    if (windowWidth<800){
      this.isLeftBarOpen = false;
    }
  },
};
</script>
