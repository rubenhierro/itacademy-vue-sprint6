import Escena from "./Escena.js";

export default {
  components: {
    Escena,
  },
  template: `
    <escena
      :messages="messages"
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
    };
  },
};
