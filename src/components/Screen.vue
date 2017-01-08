//组件里面不一定全部被div包围,但是暴露给root-container的就一定要包围
<style scoped>
	#screen{
		width:100%;height:15%;
		display: flex;
		flex-direction:row;
		flex-wrap:nowrap;
		justify-content:space-around;
		align-items:center;
		top:15%;
	}
	#screen div{
		width: 80%;
		height: 100%;
		background: url(/assets/img/tool_three_saying.png) center center no-repeat;
		background-size:cover;
		border-radius:10px;
		padding-left:10px;
		padding-right:10px;
		box-sizing:border-box;
		line-height:30px;
		font-weight: bolder;
		overflow: hidden;
	}
	#screen img:nth-child(1),#screen img:nth-child(3){
		width:5%;height: 30%;
	}
	#tips{
		top:20%;
	}
	#screen div p{
		display: flex;
		flex-wrap:nowrap;
		justify-content:space-around;
		align-items:center;
		overflow-x:scroll;
		height: 100%;
		/*transform:translate(-100px,0px);*/
	}
	#screen div p div{
		display: block;
		width:100%;
		height: 100%;
		display: flex;
		flex-wrap:nowrap;
		justify-content:space-around;
		align-items:center;
	}
</style>
<template>
	<div  id="screen">
		<img src="/assets/img/tool_three_left.png">
		<div>
			<p :style="screenStyle" id="bar">
				<template v-for="x in sentences">
					<div 
						v-touch:swipeRight="swipe_right($index,sentences[$index-1])" 
						v-touch:swipeLeft="swipe_left($index,sentences[$index+1])" 
					>
						{{x}}
					</div>
				</template>
			</p>
		</div>
		<img src="/assets/img/tool_three_right.png">
	</div>
	<img src="/assets/img/tool_three_jump_text.png" id="tips">
</template>
<script>
	import {mapState,mapGetters} from 'vuex'
	import * as a_types from '../store/types-action'
	export default{
		data(){
			return {
				sentences:'',
				screenStyle:""
			}
		},
		computed:{
			...mapState({
				sentences:'sentences'
			}),
			...mapGetters({
				screenStyle:"get_screenStyle"
			})

		},
		methods:{
			swipe_left(index,state){
				// console.log(index)
				// console.info('swipe_left ')
				if(index<this.sentences.length-1){
					const offset = jQuery('#screen>div').width()
					// console.warn(-(offset*(index+1))+'px')
					jQuery('#bar').transit({
						x:-(offset*(index+1))+'px'
					},'500','ease',()=>{
						this.$store.dispatch({
							type:a_types.save_cur_sentence,
							sentence:state
						})
					})
				}
			},
			swipe_right(index,state){
				// console.log(index)
				// console.info('swipe_right ')
				if(index>0){
					const offset = jQuery('#screen>div').width()
					// console.warn(-offset*(index-1)+'px')
					jQuery('#bar').transit({
						x:-offset*(index-1)+'px'
					},'500','ease',()=>{
						this.$store.dispatch({
							type:a_types.save_cur_sentence,
							sentence:state
						})
					})
				}
			}
		}
	}
</script>