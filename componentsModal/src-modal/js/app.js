new Vue({
    el: '#app',
    data: {
        aboutModalText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita asperiores delectus optio iure fuga accusamus, ipsum eius maxime. At, quasi enim? Officia nobis maxime blanditiis voluptatum rem magni, veritatis dolorum.',
        contactsModalText: 'Some cool text!'

    },
    methods: {
        openAboutModal: function () {
            this.$refs.about.openModal();
        },
        openContactsModal: function () {
            this.$refs.contacts.openModal();
        }
    }
});
