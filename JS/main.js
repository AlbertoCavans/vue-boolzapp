const { createApp } = Vue;

console.log(contacts);

const app = createApp({
  data() {
    return {
      contacts: contacts,
      chattingNow: 0,
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
