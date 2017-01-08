<style >
	[slot="record"]{
		bottom:26%;left:37%;
		background:red url(/assets/img/tool_three_record.png) center center no-repeat;
		background-size:80% 80%;
		width:24vw;height: 24vw;
		border-radius: 12vw;
		box-sizing:border-box;
	}
</style>
<template>
	<div id="game">
		<background-component :background-url="background_url">
			<div 
				slot='record' 
				v-on:touchstart="start_record" 
				v-on:touchend="end_record" 
				:style="record_style"
			>
			</div>
		</background-component>
		<screen-component></screen-component>
	</div>
</template>
<script>
	import Background  from "../components/Background"
	import Screen from '../components/Screen'
	import {mapState} from 'vuex'
	import * as a_types from "../store/types-action"
	export default{
		data(){
			return {
				background_url:'',
				record_style:{}
			}
		},
		components:{
			backgroundComponent:Background,
			screenComponent:Screen
		},
		computed:{
			...mapState({
				record_style:"record_style",
				background_url:"game_bg"
			})
		},
		methods:{
			start_record(){
				console.log('start')
				this.$store.dispatch({
					type:a_types['start_touch']
				})
			},
			end_record(){
				console.log('end')
				//将来这个语音识别后的分数
				const score = 80
				const language = "这个是客户说的话喽"
				this.$store.dispatch({
					type:a_types['end_touch'],
					language:language,
					score:score
				}).then((msg)=>{
					if(msg){
						alert(`client say ${this.$store.state.language} 
							and score is ${this.$store.state.score}`)

					}
				})
			}
		}
	}

</script>