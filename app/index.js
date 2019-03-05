import Vue from 'vue';
import Tasklist from './tasklist.vue';

var app = new Vue({
    render: h => h(Tasklist)
}).$mount('#app');