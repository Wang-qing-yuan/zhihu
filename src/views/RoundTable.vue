<template>
	<div>
		<div class="con-home">
			<div class="con-left"></div>
		<div class="container">
			<div class="w-fx-between">
				<h4>圆桌</h4>
				<h4 style="color: rgb(0,132,255);">举办圆桌</h4>
			</div>
			<div class="row">
				<div class="w-col-3 round" v-for="(item, index) in specials" :key="index">
					<div class="shadow"></div>
					<img :src="item.banner" alt="" />
					<h4 style="z-index: 2;">{{item.name}}</h4>
					<h5>该圆桌被预览{{item.includeCount}}M次</h5>
				</div>
				
			</div>
		</div>
		<div class="con-right">
										<a href="#top"><i class="iconfont"style="font-size:40px;margin-left: 80px; position: sticky;
		top: 500px;">&#xe60c;</i></a>
					</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'hot',
		data(){
			return{
				specials:[]
			};
		},
		created() {
			this.axios.get(this.$store.state.baseUrl + '/roundTable/all').then(res => {
						console.log(res);
						this.specials = res.data.data;
			});
		}
	};
</script>

<style lang="scss" scoped>
	
	@font-face {
	  font-family: 'iconfont';  /* project id 1618243 */
	  src: url('//at.alicdn.com/t/font_1618243_gohog9jn3fb.eot');
	  src: url('//at.alicdn.com/t/font_1618243_gohog9jn3fb.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1618243_gohog9jn3fb.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1618243_gohog9jn3fb.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1618243_gohog9jn3fb.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1618243_gohog9jn3fb.svg#iconfont') format('svg');
	}
	.iconfont{
	    font-family:"iconfont" !important;
	    font-size:16px;font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-stroke-width: 0.2px;
	    -moz-osx-font-smoothing: grayscale;}
	.con-home{
		display: flex;
	}
	.con-left{
		width: 10%;
	}
	.con-right{
		width: 10%;
	}
	.container{
		display: block;
		margin: auto;
		width: 80%;
		background-color: white;
		margin-top: 5px;
	}
	.row {
	display: flex;
	flex-wrap: wrap;
}
	.w-fx-between{
		padding: 20px;
		border-bottom: 1px solid rgb(246,246,246);
	}
	.round{
		height: 250px;
		position: relative;z-index: 9;
	}
	.round img{
		  margin: 0;
		     position: absolute;
		     top: 7%;
		     left: 7%;
		width: 80%;
		height: 80%;
		border-radius: 10px;
		z-index: -1;
	}
	.shadow{
		position: absolute;
		left: 7%;
		top: 7.5%;
		z-index: 1;
		border-radius: 10px;
		height: 200px;
		width: 202px;
		background-image: linear-gradient(rgba(255,255,255,0), rgb(66,66,66));
	}
	
	.round h4{
		color: white;
		position: absolute;
		bottom: 40px;
		left: 30px;
		
		width: 70%;
		flex-wrap: wrap;
	}
	.round h5{
		position: absolute;
		bottom: 5px;
		left: 20px;
		color: darkgray;
	}
</style>
