import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark', // Set default theme to dark
  },
})

createApp(App)
.use(vuetify)
.use(router)
.mount('#app')
