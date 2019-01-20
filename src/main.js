import Vue from "vue";
import App from "./App.vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSignOutAlt,
  faUser,
  faCircle,
  faStar,
  faBookReader,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "./assets/style.scss";

Vue.use(VueMaterial);

library.add(faSignOutAlt);
library.add(faUser);
library.add(faCircle);
library.add(faStar);
library.add(faBookReader);
library.add(faHeart);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
