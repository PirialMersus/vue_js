<template>
  <div class="modal">
    <div class="btn-group">
      <button
        class="btn"
        @click="openAboutModal()"
        :class="{ active: isTabActive }"
      >
        Open about modal
      </button>
      <button class="btn" @click="openContactsModal()">
        Open contacts modal
      </button>
    </div>
    <modal ref="about" :content="aboutModalText"></modal>
    <modal ref="contacts" :content="contactsModalText"></modal>
  </div>
</template>
<style></style>
<script>
module.exports = {
  data: function () {
    return {
      aboutModalText:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita asperiores delectus optio iure fuga accusamus, ipsum eius maxime. At, quasi enim? Officia nobis maxime blanditiis voluptatum rem magni, veritatis dolorum.",
      contactsModalText: "Some cool text!",
    };
  },
  components: {
    modal: require("./components/modal.vue"),
  },
  methods: {
        openAboutModal: function () {
            this.$refs.about.openModal();
        },
        openContactsModal: function () {
            this.$refs.contacts.openModal();
        }
    }
};
</script>
