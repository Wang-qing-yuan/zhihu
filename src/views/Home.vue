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
				<div class="card">
					<div class="row">
					<div class="w-col-4">
						<i class="iconfont">&#xe636;</i>
						<h4>写回答</h4>
					</div>
					<div class="w-col-4">
						<i class="iconfont">&#xe618;</i>
						<h4>写文章</h4>
					</div>
					<div class="w-col-4">
						<i class="iconfont">&#xe7ce;</i>
						<h4>写想法</h4>
					</div>
					</div>
					
					<div class="row">
					<div class="w-col-4">
						<i class="iconfont">&#xe601;</i>
						<h4>发视频</h4>
					</div>
					<div class="w-col-4">
						<i class="iconfont">&#xe600;</i>
						<h4>稍后答</h4>
					</div>
					<div class="w-col-4"><i class="iconfont">&#xe632;</i>
					<h4>草稿箱</h4>
					</div>
					</div>
					
				</div>
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
	@font-face {
	  font-family: 'iconfont';  /* project id 1617190 */
	  src: url('//at.alicdn.com/t/font_1617190_x19khpo8msq.eot');
	  src: url('//at.alicdn.com/t/font_1617190_x19khpo8msq.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1617190_x19khpo8msq.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1617190_x19khpo8msq.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1617190_x19khpo8msq.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1617190_x19khpo8msq.svg#iconfont') format('svg');
	}
	.iconfont{
	    font-family:"iconfont" !important;
	    font-size:17px;font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-stroke-width: 0.1px;
	    -moz-osx-font-smoothing: grayscale;
		color: darkgray;}
	.row{
		display: flex;
		flex-wrap: wrap;
	}
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
		
		width: 30%;
		
		height: 500px;
		margin-left: 5px;
	}
	.card{
		background-color: rgb(255,255,255);
		
	}
	.w-col-4{
		text-align: center;
		height: 100px;
		position: relative;
		top: 30px;
	}
	.w-col-4 h4{
		font-family:serif;
		margin-top: 10px;
	}
</style>

