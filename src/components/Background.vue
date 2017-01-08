<style scoped>
	#background{
		background:#efefef;
		width:100vw;height: 100vh;
		max-width: 640px;
		max-height: 1138px;
		overflow: hidden;
		position: absolute;
		top:0;
		left:0;
	}
	#background img{
		width: 100%;
		height: 100%;
	}
</style>
<template>
	<div id="background">
		<img :src="backgroundUrl">
		<slot name='record'></slot>
	</div>
</template>
<script>
	export default{
		data(){
			return {

			}
		},
		props:['backgroundUrl']
	}
</script>