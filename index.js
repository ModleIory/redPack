import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueTouch from 'vue-touch'
import routes from './routes'
import App from './src/pages/App'

Vue.use(VueRouter)
Vue.use(VueResource) 
Vue.use(VueTouch)

const router = new VueRouter({
	mode:'hash'
})

router.map(routes)

router.start(App,'#app')

router.redirect({
	'*':"/"
})

