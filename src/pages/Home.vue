<style scoped>
	#link{
		background-image: url(/assets/img/index_button.png);
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 100% 100%;
		display: block;
		width:40%;height: 8%;
		top:30%;
	}
	#mark{
		width: 90%;height: auto;
		top: 45%;
	}
</style>
<template>
	<div id="home">
		<background-component :background-url="background_url"></background-component>
		<img src="/assets/img/index_mark.png" id="mark">
		<a v-link="{path:'/state'}" id="link"></a>
	</div>
</template>
<script>
	import Background from '../components/Background'
	import {mapState} from 'vuex'
	export default{
		data(){
			return {
				background_url:''
			}
		},
		ready(){
			// console.log(this.$store)
			//jquery在里面用$不行,原来ready就可以被选中了
			// console.info(jQuery('#mark'))
			this.animate()
		},
		computed:{
			...mapState({
				background_url:"home_bg"
			})
		},
		components:{
			backgroundComponent:Background
		},
		methods:{
			animate(){
				jQuery('#mark').transit({
					scale:0.9
				},2000,'linear').transit({
					scale:1
				},2000,'linear',()=>{
					//bind this is vue too
					// console.log(this)
					this.animate()
				})
				jQuery('#link').transit({
					scale:0.9
				},2000,'linear').transit({
					scale:1
				},2000,'linear',()=>{
					//bind this is vue too
					// console.log(this)
					this.animate()
				})
			}
		}
	}
</script>