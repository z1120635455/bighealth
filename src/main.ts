// vue3框架提供的方法createApp方法，可以用来创建应用实例方法
import { createApp } from 'vue'
import App from '@/App.vue'
import '@/style/reset.scss'

import router from '@/router'
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
const app = createApp(App)
app.component('HospitalTop', HospitalTop);
app.component('HospitalBottom', HospitalBottom);
app.use(router);
app.use(ElementPlus,{
    locale: zhCn
})
app.mount('#app');
