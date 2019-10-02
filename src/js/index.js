/**
 * If we want to include our SASS directly in Javascript,
 * we can do it here
 */
 //require('./../styles/main.scss');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Authorization'] = `Bearer eeconf-2019-workshop`;

/**
 * Load LoDash as a global dependency.
 */
window._ = require('lodash');

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

window.woof = require('./helpers/woof').default;

/**
 * Load VueJS and our custom components
 */
import Vue from 'vue'
window.Vue = Vue;
Vue.component('post', require('./components/Post.vue').default);
Vue.component('post-form', require('./components/PostForm.vue').default);
Vue.component('posts-container', require('./components/PostsContainer.vue').default);
const app = new Vue({
    el: '#app'
});
