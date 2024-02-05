const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Hello Vue!",
    };
  },

  methods: {
    printHello() {
      console.log("Hello!");
    },
  },

  mounted() {
    this.printHello();
  },
});

app.mount("#app");
