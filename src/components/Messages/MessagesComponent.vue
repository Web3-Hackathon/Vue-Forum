<template>
  <v-container class="my-3">
    <v-row>
      <v-col cols="12" lg="4">
        <messages-navigaor/>
      </v-col>

      <v-col cols="12" lg="8">
        <message-chat-box/>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import MessagesNavigaor from './MessagesNavigaor.vue';
import MessageChatBox from './MessageChatBox.vue';
export default {
  components: { MessagesNavigaor, MessageChatBox },};
</script>