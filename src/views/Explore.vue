<template>
	<div>
		<div class="container">
			<div class="head">
				<i class="iconfont">&#xe65d;</i>
				<h2>最新专题</h2>
			</div>
			<div class="row">
				<div class="explore" v-for="(item, index) in specials" :key="index">
					<img :src="item.banner" alt="" />
					<div class="w-row" >
						<div class="left">
						<h3>{{ item.title }}</h3>
						<h5 class="meta">{{ item.updated }}更新,{{ item.viewCount }}次浏览</h5></div>
						<div class="right">
							<button class="button"><h4>关注专题</h4></button>

						</div>
					</div>

					<p class="introduction">{{ item.introduction }}</p>
					
					<span v-for="(section, index) in item.sections" :key="index" class="section">{{section.sectionTitle}}</span>
				</div>
			</div>
			
			<div class="topic">
				<router-link to="/special/all" class="btn"><button class="button-topic">查看更多专题></button></router-link>
			</div>
			
			<div class="head">
				<i class="iconfont">&#xe604;</i>
				<h2>圆桌讨论</h2>
			</div>
			<div class="row">
				<div class="roundtable" v-for="(item, index) in roundTable" :key="index">
					<img :src="item.banner" alt="" />
					
					<div class="w-row" >
						<div class="round-left">
						<h3>{{item.name }}</h3>
						<div class="a"></div>
						<h5 class="concern">{{item.includeCount}}位嘉宾参与|{{item.visitsCount}}人关注</h5>
						</div>
						<div class="round-right">
							<button class="round-button"><h4>关注圆桌</h4></button>
						</div>
					</div>
					<p class="v" style="margin: 30px;">{{item.urlToken }}</p>
				</div>
			</div>
			
			<div class="topic">
				<router-link to="/roundtable/all"><button class="button-topic">查看更多圆桌></button></router-link>
			</div>
		</div>
		
		
	</div>
</template>

<script>
export default {
	name: 'hot',
	data() {
		return {
			specials: []
		};
	},
	created() {
		this.axios.get('http://localhost:8080/api/special').then(res => {
			console.log(res);
			this.specials = res.data.data;
		});
		this.axios.get('http://localhost:8080/api/roundTable').then(res => {
			console.log(res);
			this.roundTable = res.data.data;
		});
	}
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'iconfont';  /* project id 1616266 */
  src: url('//at.alicdn.com/t/font_1616266_v257u928xai.eot');
  src: url('//at.alicdn.com/t/font_1616266_v257u928xai.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1616266_v257u928xai.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1616266_v257u928xai.woff') format('woff'),
  url('//at.alicdn.com/t/font_1616266_v257u928xai.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1616266_v257u928xai.svg#iconfont') format('svg');
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
.row {
	display: flex;
	flex-wrap: wrap;
}
.container {
	display: block;
	margin: auto;
	width: 80%;
	margin-top: 15px;
}
.head {
	display: flex;
	align-items: center;
}
.explore {
	box-shadow: 2px 5px 5px #aaa;
	width: 48%;
	margin: 1%;
	height: 430px;
	background-color: rgb(255,255,255);
}
.explore img {
	border-radius: 5px;
	width: 100%;
}
.left{
	height: 100px;
	width: 80%;
	padding: 25px;
	
}
.left h5{
	color: darkgray;
}
.right{
	height: 100px;
	width: 20%;
	padding-top: 30px;
}
.button{
	width: 90%;
	border: none;
	background-color: rgb(235,245,255);
	color: rgb(30,134,255);
	height: 40px;
	border-radius: 5px;
	}
.introduction{
margin: 20px;
text-indent:50px;
}
.topic{
	margin-top: 20px;
	height: 100px;
	text-align: center;
}
.button-topic{
	border: none;
	width: 200px;
	background-color: rgb(255,255,255);
	height: 50px;
	border-radius: 50px;
}
.roundtable{
	box-shadow: 2px 5px 5px #aaa;
	width: 48%;
	margin: 1%;
	height: 430px;
	background-color: rgb(255,255,255);
	position: relative;
}
.roundtable img {
	border-radius: 5px;
	width: 100%;
	height: 50%;
}
.round-left{
	position: absolute;
	top: 70px;
	left: 25px;
	width: 70%;
		color: white;
}
.a{
margin-top: 15px;
	
	height: 65px;
	width: 100%;
}
.concern{
	margin-left: 80px;
		}
.round-right{
	position: absolute;
	top: 160px;
	right: 0;
	width: 23%;
}
.round-button{
	width: 90%;
	border: none;
	background-color:white;
	
	height: 40px;
	border-radius: 5px;
	}
	.round-button h4{
		color: rgb(30,134,255);
		
	}
</style>
