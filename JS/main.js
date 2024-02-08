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
    visualLastAccess(messages) {
      const receivedMessages = messages.filter((message) => {
        return message.status == "received";
      });
      const lastMessageReceived = receivedMessages[receivedMessages.length - 1];
      return lastMessageReceived.date;
    },

    visualLastMessage(messages) {
      const lastMessageReceived = messages.at(-1);
      return lastMessageReceived.message;
    },
  },
});

app.mount("#app");
