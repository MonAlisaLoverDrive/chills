import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Fire from 'vuefire'
import Firebase from 'firebase'
import Firestore from 'firebase/firestore'

import App from './App.vue'

import Parties from './pages/parties.vue';
import Photos from './pages/photos.vue';
import StartParty from './pages/startparty.vue'

Vue.use(Router);
Vue.use(Meta);
Vue.use(Fire);


window.sierra = {};

Firebase.initializeApp({
    apiKey: "AIzaSyD7dxVkz8jzKg4DJiWioCT7dVdBDkbqzqw",
    authDomain: "chilledshoes-9871c.firebaseapp.com",
    databaseURL: "https://chilledshoes-9871c.firebaseio.com",
    projectId: "chilledshoes-9871c",
    storageBucket: "chilledshoes-9871c.appspot.com",
    messagingSenderId: "609048191543"
});
sierra.db = Firebase.firestore();

sierra.router = new Router(
    {
        routes: [
            {path: '/parties', component: Parties},
            {path: '/photos', component: Photos},
            {path: '/startparty', component: StartParty},
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

