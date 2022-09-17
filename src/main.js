import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
const AppBase = createApp(App);
// AppBase.config.globalProperties.echarts = echarts;
AppBase.mount('#app')
