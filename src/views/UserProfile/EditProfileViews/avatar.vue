<template>
  <edit-profile-view-container title="Change Avatar">
    <div class="mt-8">
      <span class="text-dark">Upload new avatar</span>

      <v-divider class="my-3" />

      <v-container class="pa-0" fluid>
        <v-row dense>
          <v-col cols="12" md="8" class="d-flex flex-column">
            <v-file-input
              small-chips
              label="Select new avatar"
              v-model="data.avatar"
              prepend-icon=""
              prepend-inner-icon="fa-user"
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
              label="Avatar URL"
              type="text"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-avatar height="100%" width="100%">
              <v-img max-width="150px" max-height="150px" :src="$store.getters.user.avatar" />
            </v-avatar>
          </v-col>
        </v-row>

        <div class="d-flex justify-end mt-10">
          <v-btn class="primary-btn">Save Changes</v-btn>
        </div>
      </v-container>
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
