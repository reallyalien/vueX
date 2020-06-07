import Vue from 'vue'
import App from './App.vue'
//导入store
import store from "./store";

new Vue({
    el: '#app',
    store,
    render: h => h(App),
    components: {App},
    template: '<App/>'
});
