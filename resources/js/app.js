require('./bootstrap');

import Vue from 'vue';
Vue.config.productionTip = false;

import Vuetify from 'vuetify';
Vue.use(Vuetify);

import WideHeader from './components/WideHeader';

const app = new Vue({
    el: '#app',
    components: {
        WideHeader
    },
    vuetify: new Vuetify()
})
