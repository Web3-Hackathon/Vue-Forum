<template>
  <edit-profile-view-container title="Security">
    <div class="mt-8">

      <span class="text-dark">Change Password</span>

      <v-divider class="my-2"/>

      <v-form class="mt-5" ref="form" lazy-validation>
        <v-text-field
          outlined
          v-model="data.password_old"
          label="Old Password"
          type="password"
        ></v-text-field>

        <v-text-field
          outlined
          v-model="data.password_new"
          label="New Password"
          type="password"
        ></v-text-field>

        <v-text-field
          outlined
          v-model="data.password_confirm"
          label="Confirm Password"
          type="password"
        ></v-text-field>

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
