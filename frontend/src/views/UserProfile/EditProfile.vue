<template>
  <div>
    <v-container fluid>
      <BreadCrumb class="mb-5" />
    </v-container>

    <v-container fluid>
      <v-row>
        <v-col cols="12" md="3">
          <sheet-container rounded rounded-sm dense class="navigation">
            <div class="section">
              <div class="section-item disabled">
                <span class="section-title text-dark">Account Settings</span>
              </div>

              <div
                @click="
                  $router.push({
                    name: 'content_view',
                    params: { route: 'personal-information' },
                  })
                "
                class="section-item"
              >
                <v-icon>fa-info-circle</v-icon>
                <span class="text-dark">Personal Information</span>
              </div>

              <div
                @click="
                  $router.push({
                    name: 'content_view',
                    params: { route: 'security' },
                  })
                "
                class="section-item"
              >
                <v-icon>fa-shield-halved</v-icon>
                <span class="text-dark">Security</span>
              </div>
            </div>
            <div class="section">
              <div class="section-item disabled">
                <span class="section-title text-dark">Profile Settings</span>
              </div>

              <div
                @click="
                  $router.push({
                    name: 'content_view',
                    params: { route: 'avatar' },
                  })
                "
                 class="section-item"
              >
                <v-icon>fa-eye</v-icon>
                <span class="text-dark">Avatar</span>
              </div>

              <div @click="
                  $router.push({
                    name: 'content_view',
                    params: { route: 'cover-photo' },
                  })
                " class="section-item">
                <v-icon>fa-panorama</v-icon>
                <span class="text-dark">Cover Photo</span>
              </div>

              <div  @click="
                  $router.push({
                    name: 'content_view',
                    params: { route: 'about-me' },
                  })
                " class="section-item">
                <v-icon>fa-address-card</v-icon>
                <span class="text-dark">About Me</span>
              </div>
            </div>

            <div class="section">
              <div class="section-item disabled">
                <span class="section-title text-dark">Control Panel</span>
              </div>
              <div  @click="
                  $router.push({
                    name: 'content_view',
                    params: { route: 'messages' },
                  })
                " class="section-item">
                <v-icon>fa-comments</v-icon>
                <span class="text-dark">Messages</span>
              </div>
            </div>
          </sheet-container>
        </v-col>

        <v-col cols="12" md="9">
          <sheet-container rounded rounded-sm>
            <router-view />
          </sheet-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BreadCrumb from "../../components/Navigation/BreadCrumb.vue";
import SheetContainer from "@/components/Panels/SheetContainer.vue";

export default {
  name: "EditProfile",
  components: {
    SheetContainer,
    BreadCrumb,
  },

  computed: {
    self() {
      if (this.$store.getters.user.id == this.target_user.id) return true;

      return false;
    },
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  flex-direction: column;
}

.section-item {
  padding: 10px;
  font-family: "Source Sans Pro";
  display: flex;
  align-items: center;
  cursor: pointer;

  &:not(.disabled):hover {
    background: #252525;
  }

  &:not(.disabled) {
    padding: 15px 10px;
  }

  span {
    font-size: 15px;
  }

  i {
    font-size: 19px;
    color: #727272 !important;
    width: 40px;
    margin-right: 10px;
  }

  .section-title {
    font-size: 14px;
    text-transform: uppercase;
  }
}
</style>