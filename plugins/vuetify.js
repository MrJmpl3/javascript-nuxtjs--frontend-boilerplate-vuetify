import '../assets/styles/styles.scss';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

// Vue.use(Vuetify, {
//   components: {
//     VCard,
//     VRating,
//     VToolbar,
//   },
//   directives: {
//     Ripple,
//   },
// })

Vue.use(Vuetify);

// const vuetify = new Vuetify({
//   icon: 'mdi',
//   lang: {
//     current: 'es',
//     locales: { es }
//   },
//   breakpoint: {
//     thresholds: {
//       xs: 576,
//       sm: 768,
//       md: 992,
//       lg: 1200
//     }
//   }
// });

const vuetify = new Vuetify({});

export default ({ app }, inject) => {
  app.vuetify = vuetify;
};
