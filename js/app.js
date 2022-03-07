import { createApp } from "vue";
import Home from "./Home.js";
import Escena from "./Escena.js";

const app = createApp({
  components: {
    Home,
    Escena,
  },
});

app.mount("#app");

app.config.errorHandler = (err) => {
  console.log(err);
};
