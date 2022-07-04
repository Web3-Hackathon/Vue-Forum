<template>
  <edit-profile-view-container title="Change Cover Photo">
    <div class="mt-8">
      <span class="text-dark">Upload new cover photo</span>

      <v-divider class="my-3" />

      <v-file-input
        small-chips
        label="Select new cover photo"
        v-model="data.cover"
        prepend-icon=""
        prepend-inner-icon="fa-panorama"
        outlined
        hide-details
        color="primary"
      ></v-file-input>

      <div class="d-flex justify-center align-center py-4">
        <span>OR</span>
      </div>
      <v-text-field
        outlined
        v-model="data.url"
        label="Image URL"
        type="text"
      ></v-text-field>

      <div class="d-flex justify-end mt-10">
        <v-btn class="primary-btn">Save Changes</v-btn>
      </div>
    </div>
  </edit-profile-view-container>
</template>

<script>
import EditProfileViewContainer from "@/components/Panels/EditProfileViewContainer.vue";
export default {
  components: { EditProfileViewContainer },
  name: "avatar",

  data() {
    return {
      data: {
        avatar: null,
        url: null,
      },
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
