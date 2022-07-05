<template>
  <component :is="comp" :v-bind:key="$route.params.route" />
</template>
<script>
import PersonalInformation from "./personal-information.vue";
import Security from "./security.vue";
import Avatar from "./avatar.vue";
import CoverPhoto from "./cover-photo.vue";
import AboutMe from "./about-me.vue";
import Messages from "./messages.vue";

export default {
  components: {
    PersonalInformation,
    Security,
    Avatar,
    CoverPhoto,
    AboutMe,
    Messages,
  },

  mounted() {
    this.refreshRoute();
  },

  watch: {
    '$route.params.route' : function() {
      this.refreshRoute();
    }
  },

  methods: {
    refreshRoute() {
      if (this.$route.name == "new_message") {
        this.comp = "messages";
      } else {
        this.comp = this.$route.params.route;
      }
    },
  },

  data() {
    return {
      comp: null,
    };
  },
};
</script>
