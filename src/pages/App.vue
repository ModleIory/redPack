<style>
	*{
		margin:0;
		padding:0;
	}
	#app{
		width:100vw;height: 100vh;
		max-width: 640px;
		max-height: 1138px;
		background: black;
	}
	#app>div{
		width: 100%;height: 100%;
		display: flex;
		flex-direction:column;
		flex-wrap:nowrap;
		justify-content:flex-start;
		align-items:center;
		position: relative;
	}
	#app>div *{
		position: relative;
	}
</style>
<template>
	<div>
		<router-view></router-view>
	</div>
</template>
<script>
	import store from '../store/store.js'
	export default{
		store
	}
</script>