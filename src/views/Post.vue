<template>
  <div>
    <v-container fluid>
      <BreadCrumb class="mb-5" />
    </v-container>

    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <SheetContainer
            class="d-flex justify-space-between"
            bordered
            rounded
            rounded-sm
          >
            <div class="d-flex flex-column">
              <h1>Example Thread Post</h1>
              <div class="timestamp">
                Created on
                <span style="text-decoration: underline"
                  >22 February 2022 - 03:12 AM</span
                >
              </div>
            </div>

            <div class="d-flex align-center justify-center">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-on="on" v-bind="attrs" icon>
                    <v-icon class="green--text" small>fa-thumbs-up</v-icon>
                  </v-btn>
                </template>

                Like
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-on="on" v-bind="attrs" icon>
                    <v-icon class="red--text" small>fa-thumbs-down</v-icon>
                  </v-btn>
                </template>

                Dislike
              </v-tooltip>
            </div>
          </SheetContainer>
        </v-col>
      </v-row>
      <v-row class="d-flex flex-stretch" v-for="i in 1" :key="i">
        <v-col cols="12" xl="2">
          <profile-author-view> 

          </profile-author-view>
        </v-col>
        <v-col cols="12" xl="10">
          <v-card>
            <v-card-title class="align-center justify-space-between">
              <div class="d-flex flex-column">
                <div class="timestamp">
                  Posted on
                  <span style="text-decoration: underline"
                    >24 February 2022 - 03:12 AM</span
                  >
                </div>
              </div>

              <div class="d-flex align-center justify-center">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-on="on" v-bind="attrs" icon>
                      <v-icon class="green--text" small>fa-arrow-up</v-icon>
                    </v-btn>
                  </template>

                  Vote Up
                </v-tooltip>

                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-on="on" v-bind="attrs" icon>
                      <v-icon class="red--text" small>fa-arrow-down</v-icon>
                    </v-btn>
                  </template>

                  Vote Down
                </v-tooltip>
              </div>
            </v-card-title>
            <v-card-text>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </v-card-text>
            <v-card-actions>
              <v-spacer />

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-on="on" v-bind="attrs" icon>
                    <v-icon small>fa-reply</v-icon>
                  </v-btn>
                </template>

                Reply
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-on="on" v-bind="attrs" icon>
                    <v-icon small>fa-quote-left</v-icon>
                  </v-btn>
                </template>

                Quote
              </v-tooltip>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mt-5">
        <v-col cols="12">
          <ckeditor
            :editor="editor"
            v-model="editorData"
            :config="editorConfig"
          ></ckeditor>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import BreadCrumb from "../components/Navigation/BreadCrumb.vue";
import SheetContainer from "@/components/Panels/SheetContainer.vue";
import UserProfile from "@/components/Widgets/Thread Widgets/UserProfile.vue";
import ProfileAuthorView from "@/components/Panels/ProfileAuthorView.vue";

export default {
  name: "Profile",
  components: {
    SheetContainer,
    BreadCrumb,
    UserProfile,
    ProfileAuthorView,
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
      editor: ClassicEditor,
      editorData:
        '<blockquote>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</blockquote>',
      editorConfig: {
        // The configuration of the editor.
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.timestamp {
  color: #fafafa;
  opacity: 0.8;
  font-size: 0.8rem;
}
</style>

<style>
:root {
  /* Overrides the border radius setting in the theme. */
  --ck-border-radius: 4px;

  /* Overrides the default font size in the theme. */
  --ck-font-size-base: 14px;

  /* Helper variables to avoid duplication in the colors. */
  --ck-custom-background: hsl(270, 1%, 29%);
  --ck-custom-foreground: hsl(255, 3%, 18%);
  --ck-custom-border: hsl(300, 1%, 22%);
  --ck-custom-white: hsl(0, 0%, 100%);
  --ck-color-toolbar-background: var(--v-sheetbg-base);

  /* -- Overrides generic colors. ------------------------------------------------------------- */

  --ck-color-base-foreground: var(--ck-custom-background);
  --ck-color-base-background: #1e1e1e;
  --ck-color-base-border: #1e1e1e;
  --ck-color-focus-border: hsl(208, 90%, 62%);
  --ck-color-text: hsl(0, 0%, 98%);
  --ck-color-shadow-drop: hsla(0, 0%, 0%, 0.2);
  --ck-color-shadow-inner: hsla(0, 0%, 0%, 0.1);
}

.ck.ck-editor__main > .ck-editor__editable {
  color: rgba(255, 255, 255, 0.7);
}
</style>