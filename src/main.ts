import { createApp } from 'vue';
import App from './App.vue';

import 'foundation-sites';
import './scss/main.scss';

const app = createApp(App);
app.config.globalProperties.$isModalOpen = false;
app.mount('#app');
