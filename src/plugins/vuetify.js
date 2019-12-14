import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import en from '../locale/en';
import he from '../locale/he';
Vue.use(Vuetify);
const urlHashParts = window.location.hash.split('?');
let queryParams = window.location.search;
if (urlHashParts[1])
    queryParams = urlHashParts[1];

const urlParams = new URLSearchParams(queryParams);
let currentLang = urlParams.has('lang') ? urlParams.get('lang') : 'he';
const isRtl = (['he'].includes(currentLang));
Vue.use(Vuetify, {
    themes: {
        light: {
            primary     : '#34b5ae',
            secondary   : '#c37e3d',
            accent      : '#ff2d4d',
        },
    },
    rtl: isRtl,
    // iconfont: 'mdi',
    lang: {
        locales: { en, he },
        current: currentLang
    }
});

export default new Vuetify({
});
