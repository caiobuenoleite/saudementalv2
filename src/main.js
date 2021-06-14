import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// BOOTSTRAP
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// FIREBASE
import Firebase from "firebase";
let firebaseConfig = {
  apiKey: "AIzaSyDbiqGKIAXBomz3rAIzAMhXSnHdXrG4TPQ",
  authDomain: "plenisaude-1086c.firebaseapp.com",
  databaseURL: "https://plenisaude-1086c-default-rtdb.firebaseio.com",
  projectId: "plenisaude-1086c",
  storageBucket: "plenisaude-1086c.appspot.com",
  messagingSenderId: "601884169648",
  appId: "1:601884169648:web:a1e5f0556068f82d05f275",
  measurementId: "G-508P19E2DJ",
};
Firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
