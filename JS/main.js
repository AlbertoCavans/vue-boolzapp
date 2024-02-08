const { createApp } = Vue;

console.log(contacts);

const app = createApp({
  data() {
    return {
      contacts: contacts,
      chattingNow: 0,
      inputMessage: {
        date: "",
        message: "",
        status: "sent",
      },
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

    selectChat(newIndex) {
      this.chattingNow = newIndex;
    },

    sendMessage() {
      const inputMessage = { ...this.inputMessage };

      inputMessage.date = this.getCurrentTime();
      this.chatVisualized.messages.push(inputMessage);

      setTimeout(this.sendAutomatedResponse, 3000);
    },

    sendAutomatedResponse() {
      const inputMessage = {
        message: "ok",
        date: this.getCurrentTime(),
        status: "received",
      };

      this.chatVisualized.messages.push(inputMessage);
    },

    getCurrentTime() {
      const now = new Date();
      return `${now.getHours()}:${now.getMinutes()}`;
    },
  },
});

app.mount("#app");
