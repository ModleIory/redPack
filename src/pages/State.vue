<style>
	#link{
		background-image: url(/assets/img/index_button.png);
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 100% 100%;
		display: block;
		width:40%;height: 8%;
		top:88%;
	}
</style>
<template>
	<div id="state">
		<background-component :background-url="background_url"></background-component>
		<a v-link="{path:'/game'}" id="link"></a>
	</div>
</template>
<script>
	import Background from '../components/Background'
	import {mapState} from 'vuex'
	export default{
		data(){
			return {
				background_url:""
			}
		},
		computed:{
			...mapState({
				background_url:"state_bg"
			})
		},
		components:{
			backgroundComponent:Background
		}
	}
</script>