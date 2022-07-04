<template>
  <SheetContainer class="d-flex flex-column justify-center align-center">

    <div class="d-flex flex-column justify-center align-center">
      <span class="title">hoe1912</span>
      <v-avatar class="mt-2" width="156" height="156">
        <v-img src="https://64.media.tumblr.com/0f1d9be0930e0fd6e1421e0af63b4baa/4b38c49aa49bf456-a5/s1280x1920/54be3df4f578d67626ed9b3849f53d129667b940.jpg" />
      </v-avatar>
    </div>

    <div class="d-flex mt-5">
            <div id="reputation" class="d-flex">
              <SheetContainer bordered rounded rounded-sm dense class="w-100 mx-1 pa-3">
                  <div class="reputation">
                    <span>0</span>
                    <span>Reputation</span>
                  </div>
              </SheetContainer>

              <SheetContainer bordered rounded rounded-sm dense class="w-100 mx-1 pa-3">
                <div class="reputation">
                  <span>0</span>
                  <span>Vouches</span>
                </div>
              </SheetContainer>
            </div>  
    </div>

  </SheetContainer>
</template>

<script>
import SheetContainer from "@/components/Panels/SheetContainer.vue";

export default {
  name: "Profile",
  components: {
    SheetContainer,
  },

  computed: {
    self() {
      if (this.$store.getters.user.id == this.target_user.id) return true;

      return false;
    },
  },

  data() {
    return {
      target_user: {
        id: 1,
      },
    };
  },
};
</script>

<style scoped>
.reputation {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top span {
    font-family: "Source Sans Pro";
  }

  span:first-of-type {
    font-size: 24px;
    font-weight: 600;
    color: rgb(131, 131, 131);
  }

  span:last-of-type {
    font-size: 15px;
    color: #ababab;
    font-weight: 300;
  }
}
</style>