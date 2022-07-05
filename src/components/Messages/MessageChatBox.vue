<template>
  <sheet-container
    v-if="conversation"
    rounded
    rounded-sm
    dark
    dense
    class="no-conv"
  >
    <span class="text-dark">Please, select a conversation or start new.</span>
  </sheet-container>

  <sheet-container v-else rounded rounded-sm dark dense class="conv">
    <div class="conv-to">
      <div class="d-flex align-center">
        <v-avatar class="mr-5">
          <v-img
            max-width="75px"
            max-height="75px"
            src="https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png"
          />
        </v-avatar>

        <span class="text-h7">hoe1971</span>
      </div>
      <v-btn icon><v-icon>fa-ellipsis</v-icon></v-btn>
    </div>
    <v-divider />

    <div class="chat-box">
      <div class="chat-bubble self">
        <sheet-container rounded> hello my first chat message </sheet-container>
        <span>17 Aug 2022 16:43</span>
      </div>

      <div class="chat-bubble">
        <sheet-container rounded> hello my first chat message </sheet-container>
        <span>17 Aug 2022 16:43</span>
      </div>
    </div>

    <div class="chat-field">
      <span id="msgbox" class="textarea" role="textbox" contenteditable></span>
      <v-btn :ripple="false" icon><v-icon color="#ababab" size="20">fa-paper-plane</v-icon></v-btn>
    </div>
  </sheet-container>
</template>

<script>
import SheetContainer from "@/components/Panels/SheetContainer.vue";
export default {
  name: "MessageChatBox",
  components: { SheetContainer },
  props: {
    conversation: Object,
  },
  
  data() {
    return {
        msgval: null
    }
  },

  mounted() {
    document
      .querySelector("#msgbox")
      .addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          console.log(e.target.innerText)
        }
      });
  },
};
</script>

<style lang="scss" scoped>
.chat-field {
  display: flex;
  justify-self: flex-end;
  border-top: 1px solid rgb(54, 54, 54);
  padding: 10px 10px;

  .v-btn {
    align-self:center;
  }
}

.textarea {
  display: block;
  width: 100%;
  overflow: hidden;
  resize: none;
  min-height: 40px;
  line-height: 20px;
  font-family: inherit;
  font-size: inherit;
  padding: 15px;

  &:focus-visible {
    outline: none !important;
  }
}

.textarea[contenteditable]:empty::before {
  content: "Type a message..";
  font-family: Source Sans Pro;
  color: gray;
}

.conv {
  width: 100%;
  height: 100% !important;
  display: flex;
  flex-direction: column;

  .chat-box {
    display: flex;
    flex-direction: column;
    padding: 15px;
    overflow-y: auto;
    flex-grow: 1;
    height: 100% !important;
    max-height: 600px;
    min-height: 500px;

    .chat-bubble {
      margin: 10px 0;
      width: fit-content;
      align-self: start;
      display: flex;
      flex-direction: column;

      &.self {
        align-self: end;

        span {
          align-self: end;
        }
      }

      span {
        font-size: 11px;
        align-self: start;
        color: rgb(140, 140, 140);
        margin-top: 2px;
      }
    }
  }

  .conv-to {
    padding: 15px 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
.no-conv {
  width: 100%;
  height: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>