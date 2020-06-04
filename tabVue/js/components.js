
Vue.component('tab', {
    data: function () {
        return {
            currentTab: 'Tab1',
        }
    },
    props: ['content'],
    template: '<div class="tab_container">' +
        '<div class="btns_wrp">' +
        '<button class="btn" v-for="item in content" @click="openTab(item.tab_text)">{{ item.tab_text }}</button>' +
        '</div>' +
        '<div class="content">' +
        '<p class="content_item" :class="{active: (item.tab_text == currentTab)}" v-for="item in content">{{ item.tab_content }}</p>' +
        '</div>' +
        '</div>',
    methods: {
        openTab: function (value) {
            this.currentTab = value;
        }
    }
});