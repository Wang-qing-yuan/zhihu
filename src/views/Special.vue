<template>
	<div>
		
		
			<div class="topic-head">
				<i class="iconfont">&#xe65d;</i>
				<h2 style="margin-top: 5px;">所有专题</h2>
				<h4>共有489个专题</h4>
			</div>
			
			<div class="con-home">
				<div class="con-left"></div>
			<div class="container">
				<div class="row" v-for="(item,index) in specials" :key="index">
					<div class="left"><img :src="item.banner" alt=""></div>
					<div class="right">
						<div class="w-row">
							<h3 style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{{item.title}}</h3>
							<button class="button"><h4>关注专题</h4></button></div>
						
						<p class="meta">{{item.updated}}更新·{{item.viewCount}}次浏览</p>
						<p class="introduction">{{item.introduction}}</p>
						<span v-for="(section,index) in item.sections" :key="index" class="section">
							{{section.sectionTitle}}
						</span>
					</div>
				</div>
			</div>
			<div class="con-right">
											<a href="#top"><i class="iconfont"style="font-size:40px;margin-left: 70px; position: sticky;
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
			this.axios.get(this.$store.state.baseUrl + '/special/all').then(res => {
						console.log(res);
						this.specials = res.data.data;
				
			});
		}
	};
</script>

<style lang="scss" scoped>
	@font-face {
		font-family: 'iconfont'; /* project id 1616266 */
		src: url('//at.alicdn.com/t/font_1616266_b8gknsgz736.eot');
		src: url('//at.alicdn.com/t/font_1616266_b8gknsgz736.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1616266_b8gknsgz736.woff2') format('woff2'),
			url('//at.alicdn.com/t/font_1616266_b8gknsgz736.woff') format('woff'), url('//at.alicdn.com/t/font_1616266_b8gknsgz736.ttf') format('truetype'),
			url('//at.alicdn.com/t/font_1616266_b8gknsgz736.svg#iconfont') format('svg');
	}
	.iconfont {
		font-family: 'iconfont' !important;
		font-size: 30px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
		color: blue;
		margin: 10px;
	}
	
	.topic-head{
		display: flex;
		background-color: rgb(255,255,255);
		margin-top: 5px;
		height: 100px;
		padding-left: 100px;
		padding-top: 28px;
	}
	.topic-head h4{
		padding-top: 8px;
		margin-left: 20px;
		color: darkgray;
	}
	.con-home{
		display: flex;
		width: 100%;
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
		margin-top: 15px;
		
		}
		.row{background-color: rgb(255,255,255);
			display: flex;
			height: 200px;
			margin: 15px;
			border-radius: 10px;
		}
		.left{
			width: 40%;
			
			text-align: center;
		}
		.left img{
			width: 90%;
			margin-top: 25px;
			height: 150px;
			border-radius: 10px;
			
			
		}
		.right{
			margin-top: 20px;
			width: 60%;
			margin-right: 20px;
		}
		.w-row h3{
			width: 80%;
			
		}
		.button{
			width: 100px;
			border: none;
			background-color: rgb(235,245,255);
			color: rgb(30,134,255);
			height: 40px;
			border-radius: 5px;
			position: absolute;
			left: 1010px;
			}
		.meta{
			color: darkgray;
			font-size: 13px;
		}
		.introduction{
			margin-top: 10px;
			margin-bottom: 10px;
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;/*重点，不能用block等其他*/
			-webkit-line-clamp: 2;/*重点IE和火狐不支持*/
			-webkit-box-orient: vertical;/*重点*/
		}
		.section{
			background-color: rgb(246,246,246);
			width: auto;
			margin-right: 10px;
			padding: 2px;
			font-size: 13px;
			border-radius: 5px;
		}
		
</style>
