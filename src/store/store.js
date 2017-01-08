//仅仅是对数据进行管理,所有数据都可以放在这里,方便查看维护,不乱
//eraction就是为了触发改变数据的方法,懂了吗?!
import Vue from 'vue'
import Vuex from 'vuex'
import * as a_types from './types-action'
import * as m_types from './types-mutation'

Vue.use(Vuex)

const state = {
	home_bg:"/assets/img/index_bg.png",
	state_bg:'/assets/img/state_bg.png',
	game_bg:"/assets/img/game_bg.png",
	sentences:[
		"你说呢?明知你不在还是会问",
		"我不愿让你一个人,一人在热海浮沉",
		"一次一次你,吞下了泪滴,一次一次拼回破碎自己",
		"我相信爱情的纯粹,我不信华丽的诗篇"
	],
	screenStyle:'100%',
	record_style:{
		border:"1vw solid white"
	},
	language:"客户之言",
	score:"客户之分",
	current_sentence:""
}
const getters = {
	get_screenStyle(state){
		// console.info(`${state.sentences.length*100}%`)
		return {width:`${state.sentences.length*100}%`}
	}
}
const mutations = {
	[m_types.START_RECORD_CHANGE](state,payload){
		state.record_style = {
			border:"1vw solid deepskyblue"
		}
	},
	[m_types.END_RECORD_CHANGE](state,payload){
		state.record_style = {
			border:"1vw solid white"	
		}
		state.language = payload.language
		state.score = payload.score
	},
	[m_types.CURRENT_SENTENCE_SAVE](state,payload){
		state.current_sentence = payload.sentence
	}
}
const actions = {
	[a_types.start_touch]({commit,state,dispatch},payload){
		commit(m_types.START_RECORD_CHANGE)
	},
	[a_types.end_touch](context,payload){
		return new Promise((resolve,reject)=>{
			context.commit(m_types.END_RECORD_CHANGE,{
				language:payload.language,
				score:payload.score
			})
			resolve(true)
		})
	},
	[a_types.save_cur_sentence](context,payload){
		context.commit(m_types.CURRENT_SENTENCE_SAVE,{
			sentence:payload.sentence
		})
	}
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})