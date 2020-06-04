Vue.component('tab', {
    data: function () {
        return {
            currentTab: 'Tab1'
        }
    },
    props: ['content'],
    template: '<div class="tab-container">' +
        '<div class="tab-list">' +
        '<button class="tab" v-for="item in content" @click="openTab(item.tabBtnText)">{{ item.tabBtnText }}</button>' +
        '</div>' +
        '<div class="tab-content">' +
        '<div class="content" :class="{active: (item.tabBtnText == currentTab)}" v-for="item in content">{{ item.tabContentText }}</div>' +
        '</div>' +
        '</div>',
    methods: {
        openTab: function (value) {
            this.currentTab = value;
        }
    }
});