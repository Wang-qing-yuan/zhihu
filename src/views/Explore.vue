<template>
	<div>
		<div class="con-home">
		<div class="con-left"></div>
		<div class="container">
			
			<div class="head">
				<i class="iconfont">&#xe65d;</i>
				<h2>最新专题</h2>
			</div>
			<div class="row">
				<div class="explore" v-for="(item, index) in specials" :key="index">
					<img :src="item.banner" alt="" />
					<div class="w-row">
						<div class="left">
							<h3>{{ item.title }}</h3>
							<h5 class="meta">{{ item.updated }}更新,{{ item.viewCount }}次浏览</h5>
						</div>
						<div class="right">
							<button class="button"><h4>关注专题</h4></button>
						</div>
					</div>

					<p class="introduction">{{ item.introduction }}</p>

					<span v-for="(section, index) in item.sections" :key="index" class="section">{{ section.sectionTitle }}</span>
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
				<div class="roundtable" v-for="(item, index) in roundTables" :key="index">
					<div class="w-row">
						<div class="shadow"></div>
						<img :src="item.banner" alt="" />
					</div>

					<div class="w-row">
						<div class="round-left">
							<h3>{{ item.name }}</h3>
							<div class="a">
								<h5>
									越是前景光明，越要居安思危。打败你的并不一定是你的敌人，而是自己的故步自封。
									无论是企业、个人、还是国家都需要找到标杆，发现差距，才能不断地进步。 圆桌讨论的领域
								</h5>
							</div>
							<div class="w-row">
								
									<img src="../assets/1.jpg" style="width: 30px;height: 30px;position: absolute;left: 0px;top: 100px;"/>
									<img src="../assets/2.jpg" style="width: 30px;height: 30px;position: absolute;left: 35px;top: 100px;"/>
									<img src="../assets/3.jpg" style="width: 30px;height: 30px;position: absolute;left: 70px;top: 100px;"/>
									
									
							

								<h5 class="concern">{{ item.includeCount }}位嘉宾参与|{{ item.visitsCount }}人关注</h5>
							</div>
						</div>
						<div class="round-right">
							<button class="round-button"><h4>关注圆桌</h4></button>
						</div>
					</div>
					
					<h4 style="margin-left: 10px;margin-top: 20px;">生活中有哪些普遍存在、不易察觉而十分危险的儿童安全隐患？...</h4>
					<h5 style="color: darkgray;margin-left: 10px;">450个回答</h5>
					<h4 style="margin-left: 10px;margin-top: 20px;">又有孩子在家触电，家里哪些常见物品对婴幼儿来说很危险？</h4>
					<h5 style="color: darkgray;margin-left: 10px;">39个回答</h5>
					<h4 style="margin-left: 10px;margin-top: 20px;">春节期间，有哪些易发生的儿童安全隐患？如何避免？</h4>
					<h5 style="color: darkgray;margin-left: 10px;">70个回答</h5>
				</div>
			</div>

			<div class="topic">
				<router-link to="/roundtable/all"><button class="button-topic">查看更多圆桌></button></router-link>
			</div>
			
			
			<div class="head">
				<svg class="Zi Zi--Star" fill="currentColor" viewBox="0 0 24 24" width="36" height="36" color="rgb(0,132,255)">
					<path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd">
					</path>
				</svg>
				<h2>热门收藏夹</h2>
			</div>
			<div class="row">
				<div class="favorite" v-for="(item, index) in favorites" :key="index">
				<div class="w-row">
				<h3 style="width: 95%;">{{item.title}}</h3>
				<button class="button"><h4>关注收藏夹</h4></button>
				</div>
				<div class="w-row" style="border-bottom: 1px solid lightgray;padding-bottom: 10px;">
				<img :src="item.creatorAvatar" alt="" style="border-radius: 5px;"/>
				<h4 style="padding: 5px;">{{item.creatorName}}</h4>
				<h4 style="color: darkgray; padding: 5px;font-weight: lighter;">创建|{{item.followers}}人关注</h4>
				</div>
				
				
				<h4 style="margin-top: 20px;">{{item.questionTitle}}</h4>
				<h4 style="font-weight: normal;
				text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;">{{item.answerAuthorName}}:{{item.answerContent}}</h4>
			<div class="w-row">
				<h5 style="background-color: rgb(246,246,246);color: darkgray;font-weight: lighter;width: 35px;padding: 3px;">回答</h5>
				<h5 style="font-weight: lighter;padding: 5px;color: darkgray;">{{item.voteupCount}}赞同·{{item.commentCount}}评论</h5>
				</div>
				
				<h4 style="margin-top: 20px;">{{item.questionTitle}}</h4>
					<h4 style="font-weight: normal;text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;">{{item.answerAuthorName}}:{{item.answerContent}}</h4>
				<div class="w-row"style="margin-bottom: 20px;">
					<h5 style="background-color: rgb(246,246,246);color: darkgray;font-weight: lighter;width: 35px;padding: 3px;">回答</h5>
					<h5 style="font-weight: lighter;padding: 5px;color: darkgray;">{{item.voteupCount}}赞同·{{item.commentCount}}评论</h5>
					</div>
				<h4 style="color: rgb(133,144,166);">已收藏{{item.totalCount}}条内容 ></h4>
				</div>
			</div>
			<div class="topic">
				<router-link to="/favorite/all"><button class="button-topic">查看更多收藏夹></button></router-link>
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
export default {
	name: 'hot',
	data() {
		return {
			specials: [],
			roundTables:[],
			favorites:[]
		};
	},
	created() {
		this.axios.get(this.$store.state.baseUrl + '/special').then(res => {
					console.log(res);
					this.specials = res.data.data;
		});
			this.axios.get(this.$store.state.baseUrl + '/roundTable').then(res => {
						console.log(res);
						this.roundTables = res.data.data;
		});
		this.axios.get(this.$store.state.baseUrl + '/favorite').then(res => {
						console.log(res);
						this.favorites = res.data.data;
		});
	}
};
</script>

<style lang="scss" scoped>
@font-face {
	font-family: 'iconfont'; /* project id 1616266 */
	src: url('//at.alicdn.com/t/font_1616266_v257u928xai.eot');
	src: url('//at.alicdn.com/t/font_1616266_v257u928xai.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1616266_v257u928xai.woff2') format('woff2'),
		url('//at.alicdn.com/t/font_1616266_v257u928xai.woff') format('woff'), url('//at.alicdn.com/t/font_1616266_v257u928xai.ttf') format('truetype'),
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
.con-home{
	display: flex;
}
.con-left{
	width: 10%;
}
.con-right{
	width: 10%;
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
	background-color: rgb(255, 255, 255);
}
.explore img {
	border-radius: 5px;
	width: 100%;
	height: 50%;
}
.left {
	height: 100px;
	width: 80%;
	padding: 25px;
}
.left h5 {
	color: darkgray;
}
.right {
	height: 100px;
	width: 20%;
	padding-top: 30px;
}
.button {
	width: 90px;
	border: none;
	background-color: rgb(235, 245, 255);
	color: rgb(30, 134, 255);
	height: 40px;
	border-radius: 5px;
}
.introduction {
	margin-left: 20px;
	margin-right: 20px;
	text-indent: 50px;
}
.topic {
	margin-top: 20px;
	height: 100px;
	text-align: center;
}
.button-topic {
	border: none;
	width: 200px;
	background-color: rgb(255, 255, 255);
	height: 50px;
	border-radius: 50px;
}
.roundtable {
	box-shadow: 2px 5px 5px #aaa;
	width: 48%;
	margin: 1%;
	height: 430px;
	background-color: rgb(255, 255, 255);
	position: relative;
}
.roundtable img {
	border-radius: 5px;
	width: 50%;
	height: 50%;
	position: absolute;
	right: 0;
}
.shadow {
	border-radius: 5px;
	z-index: 10;
	width: 100%;
	height: 220px;
	text-align: center;
	background-image: linear-gradient(to right, #e66465, #9198e5, rgba(255, 255, 255, 0));
}
.round-left {
	position: absolute;
	top: 70px;
	left: 25px;
	width: 70%;
	color: white;
	z-index: 11;
}
.a {
	margin-top: 15px;

	height: 54px;
	width: 100%;
	text-overflow: -o-ellipsis-lastline;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box; /*重点，不能用block等其他*/
	-webkit-line-clamp: 3; /*重点IE和火狐不支持*/
	-webkit-box-orient: vertical; /*重点*/
}
.concern {
	margin-left: 110px;
	margin-top: 10px;
	color: lightgray;
}
.round-right {
	position: absolute;
	top: 160px;
	right: 0;
	width: 23%;
}
.round-button {
	width: 90%;
	border: none;
	background-color: white;

	height: 40px;
	border-radius: 5px;
}
.round-button h4 {
	color: rgb(30, 134, 255);
}
.favorite{
	width: 48%;
	margin: 1%;
	padding: 20px;
	border-radius: 5px;
	box-shadow: 2px 5px 10px #aaa;
	background-color: rgb(255,255,255);
}
</style>
