import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { createMemoryHistory, createRouter } from 'vue-router'
import Profile from './views/Profile.vue'
import IDO from './views/IDO.vue'
import Home from './views/Home.vue'

//icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {library} from "@fortawesome/fontawesome-svg-core"
import {fas} from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)

const router = createRouter({
  history:createMemoryHistory(),
  routes:[
    { path:'/',name:'home', component:Home },
    { path:'/profile',name:'profile',component:Profile },
    { path:'/ido',name:'ido',component:IDO, paramas:true }
  ]  
})

library.add(fas)
app.component('fa', FontAwesomeIcon)
app.use(router)
app.mount('body')
