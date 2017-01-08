import Home from './src/pages/Home'
import State from './src/pages/State'
import Game from './src/pages/Game'
export default{
	'/':{
		name:'home',
		component:Home
	},
	'/state':{
		name:'state',
		component:State
	},
	'/game':{
		name:'game',
		component:Game
	}
}