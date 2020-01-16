<template>
	<div>
		<div class="container">
			
			<div class="container-home">
				<div class="container-left">
				<ul class="navbar">
					<li class="c"><router-link to="/home"><h4 style="color: black;">推荐</h4></router-link></li>
					<li class="c"><router-link to="/home/follow"><h4>关注</h4></router-link></li>
					<li class="c"><router-link to="/home/hot"><h4>热榜</h4></router-link></li>
			</ul>
			<router-view />
			</div>
			
			<div class="container-right">
				
			</div>
			
			
			</div>
			</div>
		</div>
</template>

<script>
	export default{
		name:'special',
		data(){
			return{
				specials:[]
			};
		},
		created() {
			this.axios.get('http://localhost:8080/api/special/all').then(res =>{
				console.log(res);
				this.specials = res.data.data;
			});
		}
	};
</script>

<style lang="scss" scoped>
	.container{
		background-color: rgb(246,246,246);
		margin-top: 15px;
	}
	.container-home{
		
		display: block;
		    margin: auto;
		    width: 80%;
			border-radius: 5px;
			display: flex;
	}
	.container-left{
		background-color: rgb(255,255,255);
		width: 68%;
	}
	.navbar{
		height: 60px;
		border-bottom: 1px solid rgb(246,246,246);
		display: flex;
		align-items: center;
		
		
	}
	.c{
		width: 8%;
		margin-left: 15px;
	}
	.c h4{
		color: black;
	}
	.container-right{
		background-color: rgb(255,255,255);
		width: 30%;
		
		height: 500px;
		margin-left: 5px;
	}
</style>

