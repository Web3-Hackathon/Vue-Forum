<template>
  <edit-profile-view-container title="Your Messages">
    <messages-component/>
  </edit-profile-view-container>
</template>

<script>
import EditProfileViewContainer from "@/components/Panels/EditProfileViewContainer.vue";
import SheetContainer from "@/components/Panels/SheetContainer.vue"
import MessagesComponent from '@/components/Messages/MessagesComponent.vue';
export default {
  components: { EditProfileViewContainer, SheetContainer, MessagesComponent },
  name: "messages",

  data() {
    return {
      data: {},
    };
  },
};
</script>

<style lang="scss">
.v-input__slot {
  cursor: pointer;
}
.v-input__prepend-inner {
  i {
    font-size: 15px !important;
    color: #727272 !important;
  }
}
</style>
