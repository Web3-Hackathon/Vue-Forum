<template>
  <div class="d-flex flex-row flex-wrap">
    <div class="flex-grow-2 mx-3">

      <v-container fluid>
        <BreadCrumb class="mb-5" />
        
        <SheetContainer v-for="i in 10" :key="i">
          <v-row align="center">

            <!-- Icon -->
            <v-col align="center" md="1">
              <v-icon>fa-file</v-icon>
            </v-col>

            <!-- Title -->
            <v-col md="7">
              <div class="d-flex flex-column">
                <div class="d-flex title">
                  <h4>Topic #{{i}}</h4>
                  <small class="ml-5 smalltext">2 months ago</small>
                </div>
                <div>
                  <span class="started">Started by <a href="#">GhoSTLabz</a></span>
                </div>
              </div>
            </v-col>

            <!-- Replies -->
            <v-col align="right" md="1">
              <div class="d-flex flex-column justify-center align-center">
                <div>11</div>
                <div class="started">replies</div>
              </div>
            </v-col>

            <!-- Views -->
            <v-col align="center" md="1">
              <div class="d-flex flex-column justify-center align-center">
                <div>500</div>
                <div class="started">views</div>
              </div>
            </v-col>

            <!-- Last Reply -->
            <v-col md="2">
              <div class="d-flex align-center">
                <div class="avatar">
                  <v-img src="https://place-hold.it/50x50" width="35" />
                </div>
                <div class="d-flex flex-column ml-5">
                  <div>
                    <a href="#" style="text-decoration: none">GhoSTLabz</a>
                  </div>
                  <div class="started">
                    Yesterday, 10:28 PM
                  </div>
                </div>
              </div>
            </v-col>

          </v-row>
        </SheetContainer>
      </v-container>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "../components/Navigation/BreadCrumb.vue";
import SheetContainer from "@/components/Panels/SheetContainer.vue"

export default {
  name: "Forum",
  components: {
    SheetContainer,
    BreadCrumb
  },

  data() {
    return {
      mini_post_tab: 0,
      headers: [
        {
          align: 'center',
          text: '',
          sortable: false,
          value: 'icon'
        },
        {
          align: 'start',
          text: '',
          sortable: true,
          value: 'title'
        },
        {
          align: 'center',
          text: '',
          sortable: true,
          value: 'replies'
        }
      ]
    }
  }
};
</script>

<style scoped>
.smalltext {
  opacity: 0.8;
  font-size: 11px;
}

.started {
  font-size: 0.8rem;
  color: #898989;
  opacity: 0.8;
}
</style>