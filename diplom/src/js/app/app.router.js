var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);

var routs = [];

module.exports = new VueRouter({
  mode: 'history',
  routes: routs,
});
