var Vue       = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);

var routs = [
    {
        name: 'home',
        path: '/',
        component: require('./../../vue/pages/home.vue')
    },
    {
        name: 'profile',
        path: '/profile',
        component: require('./../../vue/pages/profile.vue')
    }
];

module.exports = new VueRouter({
    mode: 'history',
    routes: routs
});