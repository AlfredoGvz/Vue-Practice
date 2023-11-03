const app = Vue.createApp({
  data() {
    return {
      string: "Hello",
      beautiful: "Arantxa",
      number: 0,
      toggle: true,
    };
  },
  methods: {
    increase() {
      this.number++;
    },
    decrease() {
      this.number--;
    },
    toggleSection() {
      this.toggle = !this.toggle;
    },
  },
});
app.mount(".app");
