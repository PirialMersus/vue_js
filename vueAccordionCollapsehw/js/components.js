
Vue.component('accordeon', {
    data: function () {
        return {
            current_accordeon: '',
        }
    },
    props: ['content'],
    template:
        '<div class="accordeon_container">' +
        '<div class="btn_box" v-for="item in content">' +
        '<button class="btn" @click="open_accordeon(item.accordeon_btn)">{{ item.accordeon_btn }}</button>' +
        '<p class="paragraph" :class="{active: (item.accordeon_btn == current_accordeon)}">{{ item.accordeon_text }}</p>' +
        '</div>' +
        '</div>',
    methods: {
        open_accordeon: function (value) {
            this.current_accordeon = value;
            console.log(value);
            console.log(this.current_accordeon);

        }
    }
});