import Vue from 'vue'
import App from './App.vue'
import Meta from 'vue-meta'

Vue.use(Meta);

window.sierra = new Vue({
    el: '#app',
    render: h => h(App),
    metaInfo: {
        title: 'Chills',
        meta:[{name: 'viewport', content: 'user-scalable=no'}]
    },
    data()
    {
        return {
            currentPage: 'parties',
            userdata: {displayName: '', username: ''},
            parties: [{name:'Test', date:'01.01.01', time:'08:00 PM', description:'this is a test', ownerName: 'test'}, {name:'Test', date:'01.01.01', time:'08:00 PM', description:'this is a test', ownerName: 'test'}]
        }
    },
});

