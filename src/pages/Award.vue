<style scoped>
	#box{
		width:70%;height: 40vw;
		background: rgba(255,255,255,0.6);
		border-radius:10px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		top:60%;
		padding: 10px;
		box-sizing:border-box;
	}
	#box input{
		height:8vw;
		border:none;
		width:90%;
		border-radius: 5px;
	}
	#box button{
		width:50%;
		background: red;
		color:white;
		height: 8vw;
		border:none;
		outline: none;
		border-radius: 5px;
		font-weight: bolder;
		font-size:18px;
	}
	#box p{
		color: red;
		font-weight: bold;
		font-size:12px;
	}
	#get_red{
		width:45%;
		position: absolute;
		color:white;
		height: 8vw;
		border:none;
		outline: none;
		border-radius: 5px;
		font-weight: bolder;
		font-size:18px;
		top:88%;
	}
	#tips{
		color:red;
		font-size:20px;
		font-weight: bolder;
		top:68%;
	}
</style>
<template>
	<div id="award">
		<background-component :background-url="background_url"></background-component>
		<div id="box" v-show="!permission">
			<input type="text" placeholder="请输入称呼">
			<input type="text" placeholder="请输入手机号">
			<button type="button" @click='submit'>提交</button>
			<p>填写信息赢取红包喔^_^</p>
		</div>
		<p id="tips" v-show="permission">信息已经填写,快快领取红包吧!</p>
		<button id="get_red" 
			:style="get_red_btn_style"
			v-touch:tap="get_money(permission)"
		>
		领取红包
		</button>
	</div>
</template>
<script>
	import Background from '../components/Background'
	import {mapState} from "vuex"
	export default{
		data(){
			return {
				background_url:"",
				get_red_btn_style:"",
				permission:""
			}
		},
		computed:{
			...mapState({
				background_url:"award_bg",
				get_red_btn_style:"get_red_btn_style",
				permission:"permission"
			})
		},
		components:{
			backgroundComponent:Background
		},
		methods:{
			get_money(permission){
				if(permission){
					alert('yes! You got it!')
				}else{
					alert("请先填写个人信息!")
				}
			},
			submit(){
				this.$store.dispatch({
					type:"allow_permission"
				})
			}
		}
	}
</script>