import { createApp } from "vue";
import Home from "./Home.js";
import Escena from "./Escena.js";
import Buttons from "./Buttons.js";

const app = createApp({
  components: {
    Home,
    Escena,
    Buttons,
  },
});

app.mount("#app");

app.config.errorHandler = (err) => {
  console.log(err);
};
