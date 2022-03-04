Vue.component("home", {
  template: `
    <escena></escena>
    `,
});
Vue.component("escena", {
  template: `
  <p>"El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial"</p>
    `,
});

var app = new Vue({
  el: "#app",
  //   data: {
  //     message: "Hello World!",
  //   },
});
