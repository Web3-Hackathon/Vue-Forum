<template>
  <sheet-container rounded rounded-sm dark dense>
    <div class="conv-title">
      <span class="text-h7">Conversations</span>
    </div>

    <div class="pa-3">
      <v-text-field
        outlined
        hide-details
        dense
        class="field"
        placeholder="Start a conversation with.."
      ></v-text-field>
    </div>

    <div class="conversations d-flex flex-column">
      <div class="conversation">
        <div class="d-flex flex-row align-center">
          <v-avatar class="mr-3">
            <v-img
              max-width="55px"
              max-height="55px"
              src="https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png"
            />
          </v-avatar>
          <span class="text-dark conv-name">Kolio94</span>
        </div>

        <span class="-date text-dark">15 April 2022</span>
      </div>
      <v-divider />
      <div class="conversation">
        <div class="d-flex flex-row align-center">
          <v-avatar class="mr-3">
            <v-img
              max-width="55px"
              max-height="55px"
              src="https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png"
            />
          </v-avatar>
          <span class="text-dark conv-name">Kolio94</span>
        </div>

        <span class="-date text-dark">15 April 2022</span>
      </div>
      <v-divider />
      <div class="conversation">
        <div class="d-flex flex-row align-center">
          <v-avatar class="mr-3">
            <v-img
              max-width="55px"
              max-height="55px"
              src="https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png"
            />
          </v-avatar>
          <span class="text-dark conv-name">Kolio94</span>
        </div>

        <span class="-date text-dark">15 April 2022</span>
      </div>
      <v-divider />
      <div class="conversation">
        <div class="d-flex flex-row align-center">
          <v-avatar class="mr-3">
            <v-img
              max-width="55px"
              max-height="55px"
              src="https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png"
            />
          </v-avatar>
          <span class="text-dark conv-name">Kolio94</span>
        </div>

        <span class="-date text-dark">15 April 2022</span>
      </div>
      <v-divider />
      <div class="conversation">
        <div class="d-flex flex-row align-center">
          <v-avatar class="mr-3">
            <v-img
              max-width="55px"
              max-height="55px"
              src="https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png"
            />
          </v-avatar>
          <span class="text-dark conv-name">Kolio94</span>
        </div>

        <span class="-date text-dark">15 April 2022</span>
      </div>
      <v-divider />
      <div class="conversation">
        <div class="d-flex flex-row align-center">
          <v-avatar class="mr-3">
            <v-img
              max-width="55px"
              max-height="55px"
              src="https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png"
            />
          </v-avatar>
          <span class="text-dark conv-name">Kolio94</span>
        </div>

        <span class="-date text-dark">15 April 2022</span>
      </div>
    </div>
  </sheet-container>
</template>

<script>
import SheetContainer from "../Panels/SheetContainer.vue";

export default {
  name: "MessagesNavigator",
  components: { SheetContainer },
};
</script>

<style lang="scss">
.conv-title {
  padding: 10px 15px;
}

.conversations {
  margin: 15px 0;

  .conversation {
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    transition: 0.3s all;
    cursor: pointer;
    flex-wrap: wrap;

    &:hover {
      background: rgb(35, 35, 35);
    }

    .v-avatar {
      margin-top: 5px;
    }

    .-date {
      margin-top: 5px;
      font-size: 13px !important;
    }

    .conv-name {
      font-family: Source Sans Pro;
      margin-top: 5px;
      font-weight: 600;
      font-size: 16px;
    }
  }
}
</style>
