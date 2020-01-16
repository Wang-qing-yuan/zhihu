<template>
	<div>
		<ul class="container">
		<img src="../assets/zhihu.png" />
		<li class="b"><router-link to="/home"><h4 style="color: black;">首页</h4></router-link></li>
		<li class="b"><router-link to="/explore"><h4>发现</h4></router-link></li>
		<li class="b"><router-link to="/question/waiting"><h4>等你来答</h4></router-link></li>
		<li class="right"><router-link to="/login">登录</router-link></li>
		
		</ul>
	<router-view />
	</div>
</template>

<script>
	export default{
		name:'Navbar',
		data() {
			return{};
		},
		created() {}
	};
</script>

<style lang="scss" scoped>
	.container{
		background-color:white;
		height: 40px;
		width: 100%;
		display: flex;
		align-items: center;
		box-shadow: 2px 5px 5px #aaa;
		align-items: center;
		
		
	}
	.container img{
		height: 100%;
		width: auto;
		margin-right: 50px;
		margin-left: 110px;
	}
	.b {
		
		width: 7%;
	}
	h4{
		color: lightgray;
	}
	
	.right{
		position:relative;
		left: 500px;
	}
</style>
