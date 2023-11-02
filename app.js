const app = Vue.createApp({
  data() {
    return {
      string: "Alfredo",
      array: ["Alfredo loves Arantxa"],
      number: 0,
    };
  },
  methods: {
    increase() {
      this.number++;
    },
    decrease() {
      this.number--;
    },
    changeString(name) {
      this.string = name;
    },
  },
});
app.mount(".app");
