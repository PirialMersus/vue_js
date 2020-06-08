<template>
  <div class="modal-container" :class="{active: isModalOpen}">
    <div class="overlay" @click="closeModal()"></div>
    <div class="modal">
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      isModalOpen: false
    };
  },
  props: ['content'],
  methods: {
    openModal: function () {
      this.isModalOpen = true;
    },
    closeModal: function () {
      this.isModalOpen = false;
    },
  },
};
</script>
