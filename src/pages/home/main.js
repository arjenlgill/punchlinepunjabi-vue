import { createApp } from 'vue'
import App from './App.vue'
import router from '../../router'
import store from '../../store'

// Check that service workers are supported
if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js');
    });
  }

createApp(App).use(store).use(router).mount('#app')


