const { createApp } = Vue;

console.log(contacts);

const app = createApp({
  data() {
    return {
      contacts: contacts,
      chattingNow: 3,
    };
  },

  computed: {
    chatVisualized() {
      return this.contacts[this.chattingNow];
    },
  },

  methods: {
    visualLastAccess(messages) {
      const receivedMessages = messages.filter((message) => {
        return message.status == "received";
      });
      const lastMessageReceived = receivedMessages[receivedMessages.length - 1];
      return lastMessageReceived ? lastMessageReceived.date : "";
    },

    visualLastMessage(messages) {
      const lastMessageReceived = messages.at(-1);
      return lastMessageReceived ? lastMessageReceived.message : "";
    },
  },
});

app.mount("#app");
