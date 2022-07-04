<template>
  <v-container v-if="$vuetify.breakpoint.width > 740" class="footer-container" fluid>
    <v-container class="footer" app bottom fixed>
      <v-row justify="center">
        <v-col cols="2" class="section mx-5">
          <span class="section-heading text-gradient">Useful Links</span>

          <div class="navigation">
            <span class="footer-link"
              ><v-icon size="16">fa-circle-question</v-icon> Support
            </span>

            <span class="footer-link"
              ><v-icon size="16">fa-solid fa-bookmark</v-icon> Rules & guideliness
            </span>

            <span class="footer-link"
              ><v-icon size="16">fa-solid fa-book</v-icon> Help Documents
            </span>

            <span class="footer-link"
              ><v-icon size="16">fa-solid fa-gavel</v-icon> Team
            </span>
          </div>
        </v-col>

        <v-col cols="2" class="section mx-5">
          <span class="section-heading text-gradient">Extras</span>

          <div class="navigation">
            <span class="footer-link"><v-icon size="16">fa-solid fa-award</v-icon> Awards </span>

            <span class="footer-link"><v-icon size="16">fa-solid fa-coins</v-icon> Credits </span>

            <span class="footer-link"><v-icon size="16">fa-solid fa-trophy</v-icon>Top Members </span>

            <span class="footer-link"><v-icon size="16">fa-solid fa-user-group</v-icon>Groups </span>
          </div>
        </v-col>

        <v-col cols="2" class="section mx-5">
          <span class="section-heading text-gradient">Account</span>

          <div class="navigation">
            <span v-if="$store.getters.isLogged" class="footer-link"
              ><v-icon size="16">fa-gear</v-icon> Control Panel
            </span>

            <span v-if="$store.getters.isLogged" class="footer-link"
              ><v-icon size="16">fa-star</v-icon> Upgrade
            </span>

            <span v-if="$store.getters.isLogged" class="footer-link"
              ><v-icon size="16">fa-lock</v-icon> Two-Factor</span
            >

            <span v-if="$store.getters.isLogged" class="footer-link"
              ><v-icon size="16">fa-user</v-icon>Avatar</span
            >

            <span v-if="!$store.getters.isLogged" class="footer-link">
              Sign in existing account
            </span>

            <span v-if="!$store.getters.isLogged" class="footer-link">
              Create new account
            </span>
          </div>
        </v-col>

        <v-col cols="3" class="section mx-5">
          <span class="section-heading text-gradient">About OGU</span>

          <div class="aboutus">
            <slot name="aboutus">OGU.gg is a community driven digital marketplace that connects buyers and sellers from all around. We have grown
            to became a leading platform for trading virtual products.
            You can also participate in general discussions on our site, make new friends, and have some fun!</slot>
            
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-3" />

      <div class="footer-footer">
        <span
          >Use of this website is subject to our <a>Terms of Use</a> and
          <a>Privacy/Legal Policy</a></span
        >

        <span>© 2022 SITE</span>
      </div>
    </v-container>
  </v-container>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.footer-container {
  background: var(--v-sheetbg-base) !important;
  margin-top: 100px;
}
.footer-footer {
  padding: 5px 0;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  span:first-of-type {
    color: #888888;
    font-family: Source Sans Pro;
    font-size: 16px;
    font-weight: 500;
  }
  span:last-of-type {
    color: #888888;
    font-family: Source Sans Pro;
    font-size: 16px;
    font-weight: 600;
  }
}
.footer {
  padding: 30px 0 5px 0;
  .footer-link {
    transition: 0.3s all;
    margin: 5px 0;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    i {
      color: #888888;
      margin-right: 10px;
      max-width: 20px;
      width: 20px;
    }
    &:hover {
      color: white;
      i {
        color: rgba(254, 174, 45, 1);
      }
    }
  }
  .navigation {
    display: flex;
    flex-direction: column;
    color: #888888;
    padding: 30px 0;
    font-family: Source Sans Pro;
    font-size: 16px;
    font-weight: 500;
  }
  .aboutus {
    font-family: Source Sans Pro;
    font-size: 16px;
    font-weight: 500;
    color: #888888;
    padding: 30px 0;
  }
}
.section {
  display: flex;
  flex-direction: column;
  .section-heading {
    font-family: Source Sans Pro;
    font-size: 25px;
    font-weight: 600;
    color: rgba(254, 174, 45, 1);
  }
}
</style>