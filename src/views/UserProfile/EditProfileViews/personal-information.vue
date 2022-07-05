<template>
  <edit-profile-view-container title="Personal Information">
    <div class="mt-8">
      <v-form ref="form" lazy-validation>
        <v-text-field
          outlined
          v-model="data.email"
          label="Username"
          type="text"
        ></v-text-field>

        <v-text-field
          outlined
          v-model="data.email"
          label="E-mail Address"
          type="email"
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
        email: null,
      },
    };
  },
};
</script>
