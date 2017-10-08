import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Meta from 'vue-meta'

import Parties from './pages/parties.vue';
import Photos from './pages/photos.vue';

Vue.use(Router);
Vue.use(Meta);

window.sierra = {};

sierra.router = new Router(
    {
        routes: [
            {path: '/parties', component: Parties},
            {path: '/photos', component: Photos}
            ]
    });

sierra.app = new Vue({
    el: '#app',
    render: h => h(App),
    metaInfo: {
        title: 'Chills',
        meta: [{name: 'viewport', content: 'user-scalable=no'}]
    },
    router: sierra.router,
    data()
    {
        return {
            currentPage: 'parties',
            userdata: {displayName: '', username: ''},
            parties: [{
                name: 'Test',
                date: '01.01.01',
                time: '08:00 PM',
                description: 'this is a test',
                ownerName: 'test'
            }, {name: 'Test', date: '01.01.01', time: '08:00 PM', description: 'this is a test', ownerName: 'test'}]
        }
    },
});

