<style scoped>
	#show_result{
		background: url(/assets/img/tool_three_saying.png) center center no-repeat;
		width:80%;height:20vw;
		background-size:cover;
		font-weight: bold;
		top:25%;
	}
	#result #title{
		width:100%;
		color:white;
		font-weight: bolder;
		top:20%;
		font-size:20px;
	}
	#result #score{
		width:100%;
		color:black;
		font-weight: bolder;
		top:40%;
		font-size:25px;
	}
	#result #tips{
		width:100%;
		color:red;
		font-weight: bolder;
		top:50%;
		font-size:25px;
	}
	#result p,#show_result{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#button_group{
		display: flex;
		flex-wrap:nowrap;
		justify-content: space-around;
		align-items: center;
		width:100%;
		top:60%;
	}
	#button_group a{
		display: block;
		background:red;
		color:white;
		border-radius: 5px;
		width:30%;
		height: 10vw;
		text-align: center;
		line-height: 10vw;
		text-decoration: none;
		font-weight: bolder;
		letter-spacing: 2px;
		margin-left:5vw;
	}
</style>
<template>
	<div id="result">
		<background-component :background-url="background_url">
		</background-component>
		<p id="title">恭喜您用标准的普通话说了:</p>
		<div id="show_result">
			{{language}}
		</div>
		<p id="score">匹配度得分是:{{score}}</p>
		<p id="tips">
			{{tip_language}}
		</p>
		<p id="button_group">
			<a v-link="{path:'/award'}" v-show="button_flag">
				领取奖励
			</a>
			<a v-link="{path:'/game'}" v-show="!button_flag">
				再来一次
			</a>
			<a href="javascript:void(0)" v-touch:tap="share">分享好友</a>
		</p>
	</div>
</template>
<script>
	import Background  from "../components/Background"
	import {mapState,mapGetters} from 'vuex'
	export default{
		data(){
			return {
				background_url:"",
				language:"",
				score:"",
				award_limit:"",
				tip_language:"",
				button_flag:""
			}
		},
		computed:{
			...mapState({
				background_url:"result_bg",
				language:"language",
				score:"score",
				award_limit:"award_limit"
			}),
			...mapGetters({
				tip_language:"tip_language_deal"
			}),
			button_flag(){
				return this.$store.state.score>this.$store.state.award_limit?true:false
			}
		},
		components:{
			backgroundComponent:Background
		},
		methods:{
			share(){
				alert("点击右上角的按钮和好友一起来玩吧!")
			}
		}
	}
</script>