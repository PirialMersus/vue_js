var Vue = require('vue');

new Vue({
    el: '#app',
    router: require('./app.router'),
    render: function (init) {
        return init(require('../../vue/index.vue'));
    }
});