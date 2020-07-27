var Vue = require('vue');

new Vue({
    el: '#app',
    router: require('./app.router'),
    store: require('./app.store'),
    render: function (init) {
        return init(require('../../vue/index.vue'));
    }
})