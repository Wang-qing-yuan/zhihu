<template>
	<div>
		<div class="head">
			<div class="headd w-fx-between">
				<svg fill="currentColor" viewBox="0 0 200 91" width="64" height="30" aria-hidden="true" style="height: 30px; width: 64px;color: rgb(0,132,255);margin-right: 50px;">
			<title></title>
			<g>
				<path d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z" fill-rule="evenodd">
				</path></g></svg>
				<button class="title-button">
					<svg class="Zi Zi--EditSurround" fill="currentColor" viewBox="0 0 24 24" width="24" height="24" color="rgb(0,132,255)">
						<path d="M18.453 7.992l-1.833-1.65.964-.978a1.223 1.223 0 0 1 1.73-.012l.005.006a1.24 1.24 0 0 1 .007 1.748l-.873.886zm-1.178 1.194l-5.578 5.66-1.935.697a.393.393 0 0 1-.504-.504l.697-1.935 5.488-5.567 1.832 1.65zM7.58 5.848l5.654.006-1.539 1.991-3.666.012A1.02 1.02 0 0 0 7 8.868v7.993c0 .558.46 1.01 1.029 1.01l7.941-.01c.568 0 1.03-.453 1.03-1.012v-4.061l2-1.442v6.002c0 1.397-1.2 2.501-2.62 2.501H7.574C6.153 19.85 5 18.717 5 17.32V8.35c0-1.397 1.16-2.502 2.58-2.502z">
					</path></svg>
					<h4 style="padding-top: 3px;">写文章</h4></button>
				</div>
		</div>
		
		<div class="container-top">
			<div id="div8"></div>
			<div class="top-img"><img src="../assets/logon.png" /></div>
			<h3>随心写作，自由表达</h3>
			<button class="top-button">开始写文章</button>
		</div>
		
		<div class="container">
			<div class="con-left"></div>
			<div class="con-home">
				<h5>申请开通专栏</h5>
				<h4>专栏·发现</h4>
				
				<div class="row">
					<div class="column" v-for="(item, index) in columns" :key="index">
					<img :src="item.imageUrl" onclick="location.href= 'https://zhuanlan.zhihu.com/jyzyx0'" />
					<h3 class="title">{{item.title}}</h3>
					<h4 class="description">{{item.description}}</h4>
					<h5 class="follower">{{item.followers}}人关注|{{item.articlesCount}}篇文章</h5>
					<button class="column-button">进入专栏</button>
					</div>
				</div>
				<button class="change-button" @click="loadMore"><svg class="Zi Zi--Refresh Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M20 12.878C20 17.358 16.411 21 12 21s-8-3.643-8-8.122c0-4.044 3.032-7.51 6.954-8.038.034-1.185.012-1.049.012-1.049-.013-.728.461-1.003 1.057-.615l3.311 2.158c.598.39.596 1.026 0 1.418l-3.31 2.181c-.598.393-1.08.12-1.079-.606 0 0 .006-.606-.003-1.157-2.689.51-4.675 2.9-4.675 5.708 0 3.21 2.572 5.822 5.733 5.822 3.163 0 5.733-2.612 5.733-5.822 0-.633.51-1.148 1.134-1.148.625 0 1.133.515 1.133 1.148" fill-rule="evenodd"></path></svg>
				换一换</button>
				
				</div>
			<div class="con-right"></div>
		</div>
		
		<div id="div9">
			<h2>在知乎创作</h2>
			<button class="lan">申请专栏</button>
		</div>
		<div class="end"><h4>© 2020 知乎 · 知乎专栏 · 圆桌·发现 · 移动应用 · 使用机构帐号登录 · 联系我们 · 来知乎工作</h4>
<h4>京 ICP 证 110745 号 · 京 ICP 备 13052560 号 - 1 ·<img src="https://pic3.zhimg.com/80/v2-d0289dc0a46fc5b15b3363ffa78cf6c7.png"> 京公网安备 11010802010035 号 · 出版物经营许可证</h4></div>
		
	</div>
</template>

<script>
export default {
	name: 'columns',
	data() {
		return {
			columns: [],
			count: 8,
			currentPage: 2
		};
	},
	created() {
		this.axios({
			method: 'post',
			url: 'http://localhost:8080/api/columns/page',
			params: {
				count: this.count,
				currentPage: this.currentPage
			}
		}).then(res => {
			console.log(res.data.data);
			this.columns = res.data.data;
			console.log(this.columns.length);
		});
	},
	methods: {
		loadMore() {
			this.currentPage = this.currentPage + 1;
			this.axios({
				method: 'post',
				url: 'http://localhost:8080/api/columns/page',
				params: {
					count: this.count,
					currentPage: this.currentPage
				}
			}).then(res => {
				console.log(res.data.data);
				this.columns = res.data.data;
				console.log(this.columns.length);
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	.row {
		display: flex;
		flex-wrap: wrap;
	}
	.head{
		width: 100%;
		height: 52px;
		background-color: white;
		box-shadow: 2px 5px 5px #aaa;
		position: sticky;
		    top: 0;
			z-index: 10;
		
	}
	.headd{
		display: block;
		margin: auto;
		width: 80%;
		display: flex;
		margin-top: 10px;
		
	}
	.container{
		display: flex;
		background-color: rgb(251,252,252);
	}
	.con-left{
		width: 10%;
	}
	.con-right{
		width: 10%;
	}
	
	.title-button{
		display: flex;
	background-color: white;
	border: 1px solid rgb(0,132,255);
	color: rgb(0,132,255);
	font-weight: 300;
	padding: 5px;
	border-radius: 5px;
	}
	.container-top{
		background-image:url(../assets/topic.png);
		background-position:center;
		height: 470px;
		position: relative;
		text-align: center;
		z-index: 2;
	}
	.top-img{
		position: relative;
		top: 150px;
	}
	.container-top h3{
		position: relative;
		top: 170px;
		font-weight: 300;
		letter-spacing:5px
	}
	.top-button{
		background-color: white;
		padding-top: 10px;
		padding-bottom: 10px;
		padding-left: 20px;
		padding-right: 20px;
		border: 1px solid black;
		border-radius: 5px;
		position: relative;
		top: 200px;
	}
	.con-home{
		width: 80%;
		text-align: center;
	}
	.con-home h5{
		color: rgb(16,156,98);
		font-weight: 400;
	}
	.con-home h4{
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.column{
		width: 23%;
		background-color: white;
		margin: 10px;
		box-shadow: 1px 1px 5px #aaa;
		text-align: center;
		border-radius: 5px;
	}
	.column img{
		margin-top: 10px;
		margin-bottom: 10px;
		width:80px;
		height:80px;
		border-radius: 200px;
	}
	.column .title{
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	.column .description{
		color: darkgray;
		font-weight: 400;
		min-height: 40px;
		margin: 10px;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.column .follower{
		color: darkgray;
		font-weight: 400;
	}
	.column-button{
		margin: 20px;
		background-color: white;
		border: 1px solid rgb(17,166,104);
		border-radius: 5px;
		color: rgb(17,166,104);
		padding-top: 10px;
		padding-bottom: 10px;
		padding-left: 15px;
		padding-right: 15px;
	}
	.column-button:hover{
		background-color: rgb(241,250,246);
	}
	.change-button{
		
		border: 1px solid black;
		background-color: white;
		padding-top: 5px;
		padding-bottom: 5px;
		padding-left: 15px;
		padding-right: 15px;
		border-radius: 5px;
		margin: 20px;
	}
	.change-button:hover{
		background-color: rgb(244,245,247);
	}
	   #div9{
	      width: 100%;
	      height:450px;
	      background:white;
	      background-image:
	         linear-gradient(white 14px,transparent 0),
	         linear-gradient(90deg,darkgray 1px,transparent 0);
	      background-size:10px 15px;
		  text-align: center;
	   }
	   #div9 h2{
		   position: relative;
		   top: 150px;
		   font-weight: 200;
		   letter-spacing: 10px;
		   border-top: 1px solid rgb(151,255,216);
		   border-bottom: 1px solid rgb(151,255,216);
		   padding: 30px;
		   margin-left: 420px;
		   margin-right:420px;
	   }
	  .lan{
		  border: 1px solid black;
		  border-radius: 5px;
		  font-size: 20px;
		  background-color: rgba(255,255,255,0);
		  padding-top: 5px;
		  padding-bottom: 5px;
		  padding-left: 20px;
		  padding-right: 20px;
		  position: relative;
		  top: 200px;
	  }
	  .end{
		  text-align: center;
		  background-color: white;
		  margin-bottom: 150px;
	  }
	  .end h4{
		  color: gray;
		  font-weight: 400;
		  line-height: 40px;
	  }
	  #div8{
		    width: 100%;
		        height:400px;
		        background:white;
		        background-image:
		           linear-gradient(white 14px,transparent 0),
		           linear-gradient(90deg,black 1px,transparent 0);
		        background-size:10px 15px,15px 15px;position: absolute;
				z-index: 1;opacity: 0.1;
	  }
</style>
