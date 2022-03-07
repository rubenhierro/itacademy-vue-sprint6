export default {
  template: `
    <ul>
      <li
        v-for="(msg, i) in messages"
        key="i"
      >
        {{ messages[i] }}
      </li>
    </ul>
      `,
  props: ["messages"],
};
