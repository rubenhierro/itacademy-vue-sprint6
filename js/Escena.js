export default {
  template: `
    <ul>
      <li
        v-for="(msg, i) in messages"
        :key="i"
        :class="{ active: i === currentSentence }"
      >
        {{ msg.txt }}
      </li>
    </ul>
      `,
  props: ["messages", "currentSentence"],
};
