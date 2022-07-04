<template>
  <edit-profile-view-container title="Change about me">
    <div class="mt-8">

      <span class="text-dark">Change about me content</span>

      <v-divider class="my-2"/>

      <v-form class="mt-5" ref="form" lazy-validation>
        <v-textarea
          outlined
          v-model="data.password_confirm"
          label="About me... (bb here.. fuck this comp)"
          type="password"
        ></v-textarea>

        <div class="d-flex justify-end">
          <v-btn class="primary-btn">Save Changes</v-btn>
        </div>
      </v-form>
    </div>
  </edit-profile-view-container>
</template>

<script>
import EditProfileViewContainer from "@/components/Panels/EditProfileViewContainer.vue";
export default {
  components: { EditProfileViewContainer },
  name: "personal-information",

  data() {
    return {
      data: {
        password_old: null,
        password_new: null,
        password_confirm: null
      },
    };
  },
};
</script>
