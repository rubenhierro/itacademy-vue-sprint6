import Escena from "./Escena.js";
import Buttons from "./Buttons.js";

export default {
  components: {
    Escena,
    Buttons,
  },
  template: `
    <buttons 
      @nextSentence="nextSentence"
      @prevSentence="prevSentence"
    ></buttons>
    <escena
      :messages="messages"
      :currentSentence="currentSentence"
    ></escena>
  `,
  data() {
    return {
      messages: [
        "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",

        "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",

        "L'heroi va decidir travessar la porta que el portava a casa",

        "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...",
      ],
      currentSentence: 1,
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
  },
};
