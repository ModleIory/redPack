import Home from './src/pages/Home'
import State from './src/pages/State'
import Game from './src/pages/Game'
import Result from './src/pages/Result'
import Award from './src/pages/Award'
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
	},
	'/result':{
		name:'result',
		component:Result
	},
	'/award':{
		name:'award',
		component:Award
	}
}