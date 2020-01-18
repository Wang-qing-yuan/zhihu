<template>
	<div>
		<div class="container">
			<div class="w-fx-between">
				<h4>圆桌</h4>
				<h4 style="color: rgb(0,132,255);">举办圆桌</h4>
			</div>
			<div class="row">
				<div class="w-col-3 round" v-for="(item, index) in specials" :key="index">
					<img :src="item.banner" alt="" />
					<h4>{{item.name}}</h4>
					<h5>该圆桌被预览{{item.includeCount}}M次</h5>
				</div>
				
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
			this.axios.get('http://localhost:8080/api/roundTable/all').then(res =>{
				console.log(res);
				this.specials = res.data.data;
			});
		}
	};
</script>

<style lang="scss" scoped>
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
		position: relative;
	}
	.round img{
		  margin: 0;
		     position: absolute;
		     top: 7%;
		     left: 7%;
		width: 80%;
		border-radius: 10px;
	
		
		
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
