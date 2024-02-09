const { createApp } = Vue;
const luxonDateTime = luxon.DateTime;

console.log(contacts);

const app = createApp({
  data() {
    return {
      contacts: contacts,
      chattingNow: 0,
      searchGroup: "",

      inputMessage: {
        date: "",
        message: "",
        status: "sent",
      },

      toggleOption: {
        show: false,
        index: 0,
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
      return lastMessageReceived
        ? this.formatDate(lastMessageReceived.date)
        : "";
    },

    visualLastMessage(messages) {
      const lastMessageReceived = messages.at(-1);
      return lastMessageReceived ? lastMessageReceived.message : "";
    },

    selectChat(newIndex) {
      this.chattingNow = newIndex;
    },

    sendMessage() {
      if (!this.inputMessage.message) return;

      const inputMessage = { ...this.inputMessage };

      inputMessage.date = this.getCurrentTime();
      this.chatVisualized.messages.push(inputMessage);

      setTimeout(this.sendAutomatedResponse, 1500);
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

      const day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
      const month =
        now.getMonth() + 1 < 10 ? "0" + now.getMonth() : now.getMonth();
      const year =
        now.getFullYear() < 10 ? "0" + now.getFullYear() : now.getFullYear();
      const hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
      const minutes =
        now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
      const seconds =
        now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();

      const timesignal = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
      console.log(timesignal);
      return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    },

    /* Apparentemente formatDate fa la stessa cosa di getCurrentTime, ma non è vero
    il primo stampa in modo standard tutte le date, il secondo ci fornisce le date
    in un formato user-friendly per il lato utente */
    formatDate(date) {
      const messageDate = luxonDateTime.fromFormat(date, "dd/MM/yyyy HH:mm:ss");

      const messageDateText = messageDate.toLocaleString(
        luxonDateTime.TIME_24_SIMPLE
      );
      return messageDateText;
    },

    searchFilter() {
      this.searchGroup;

      this.contacts = this.contacts.map((contact) => {
        if (
          contact.name.toLowerCase().includes(this.searchGroup.toLowerCase())
        ) {
          contact.visible = true;
        } else {
          contact.visible = false;
        }

        return contact;
      });
    },

    showButton(index) {
      if (this.toggleOption.index == index) {
        this.toggleOption.show = !this.toggleOption.show;
      } else this.toggleOption.index = index;
    },

    deleteMessage(index) {
      this.chatVisualized.messages.splice(index, 1);
    },
  },

  created() {
    console.log(luxonDateTime);
  },
});

app.mount("#app");
