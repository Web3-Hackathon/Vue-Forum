import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      dark: true,
      options: {
        customProperties: true
      },
      themes: {
        dark: {
          primary: '#ff6b7e',
            bgbg: '#181818',
            sheetbg: '#1e1e1e',
            sheetbglighter: '#212121',
        }
      }
    },
  });