export default {
  template: `
    <div id="buttons-container">
       <div class="button" id="next"
       @click="$emit('prevSentence')"
       >Anterior</div>
       <div class="button" id="prev"
       @click="$emit('nextSentence')"
       >Següent</div>
    </div>
    `,
};
