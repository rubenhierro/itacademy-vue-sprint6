import Escena from "./Escena.js";
import Buttons from "./Buttons.js";

export default {
  components: {
    Escena,
    Buttons,
  },
  template: `
    <div v-if="!isVisible" id="wellcome">
      <h1>Benvingut</h1>
      <h2>Informació d'utilitat</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
      <div v-else id="container"
      :style="{ backgroundImage: 'url(../img/' + messages[currentSentence].img + ')' }"
      >
      <buttons 
        @nextSentence="nextSentence"
        @prevSentence="prevSentence"
      ></buttons>
      <escena
        :messages="messages"
        :currentSentence="currentSentence"
      ></escena>
    </div>
    <div class="btnToggle"
    @click="toggle"
    >{{ isVisible === false ? "Mostrar" : "Tornar Inici" }}</div>
  `,
  data() {
    return {
      messages: [
        {
          txt: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
          img: "1.jpg",
        },
        {
          txt: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
          img: "2.jpg",
        },
        {
          txt: "L'heroi va decidir travessar la porta que el portava a casa",
          img: "3.jpg",
        },
        {
          txt: "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...",
          img: "4.jpg",
        },
      ],
      currentSentence: 0,
      isVisible: false,
    };
  },
  methods: {
    nextSentence() {
      if (this.currentSentence < this.messages.length - 1) {
        this.currentSentence++;
      }
    },
    prevSentence() {
      if (this.currentSentence > 0) {
        this.currentSentence--;
      }
    },
    toggle() {
      this.isVisible = !this.isVisible;
    },
  },
};
