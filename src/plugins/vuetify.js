import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#18B787',
            secondary: '#ffffff', // #FFCDD2
            accent: '#ffffff', // #3F5
          },
        },
      },
});
