<template>
	<div>
		<div class="head">
			<svg class="Zi Zi--Star" fill="currentColor" viewBox="0 0 24 24" width="36" height="36" color="rgb(0,132,255)">
				<path
					d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
					fill-rule="evenodd"
				></path>
			</svg>
			<h2>热门收藏夹</h2>
		</div>

		<div class="con-home">
			<div class="con-left"></div>
			<div class="container">
				<div class="w-row" v-for="(item, index) in favorites" :key="index" style="background-color: white;margin-top: 20px;">
					<div class="left">
						<h4 style="margin-bottom: 20px;">我的收藏</h4>
						<div class="w-row">
							<img :src="item.creatorAvatar" style="height: 30px;width: 30px;" />
							<h4 style="font-weight: 300;margin-left: 10px;padding: 5px;">{{ item.answerAuthorName }}</h4>
							<h4 style="color: darkgray;font-weight: 200;padding: 5px;">创建</h4>
						</div>
						<div class="w-row" style="margin-top: 20px;">
							<button class="button"><h4>关注收藏夹</h4></button>
							<h5 style="padding: 10px;font-weight: 200;color: darkgray;">{{ item.followers }}人关注</h5>
						</div>
					</div>
					<div class="right">
						<h4 style="margin-top: 20px;">{{ item.questionTitle }}</h4>
						<h4
							style="text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			font-weight: 200;
			margin-top: 10px;"
						>
							{{ item.creatorName }}:{{ item.answerContent }}
						</h4>
						<div class="w-row">
							<h5 style="background-color: rgb(246,246,246);color: darkgray;font-weight: 200;padding: 2px;border-radius: 3px;">回答</h5>
							<h5 style="font-weight: 200;color: darkgray;padding: 3px;margin-left: 10px;">{{item.voteupCount}}赞同·{{item.voteupCount}}评论</h5>
						</div>
						<h4 style="color: rgb(133,144,166);font-weight: 300;margin-top: 15px;">已收藏{{item.totalCount}}条内容></h4>
					</div>
				</div>
			</div>
			<div class="con-right"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'hot',
	data() {
		return {
			favorites: []
		};
	},
	created() {
		this.axios.get(this.$store.state.baseUrl + '/favorite/all').then(res => {
			console.log(res);
			this.favorites = res.data.data;
		});
	}
};
</script>

<style lang="scss" scoped>
.con-home {
	display: flex;
	width: 100%;
	background-color: rgb(246, 246, 246);
}
.con-left {
	width: 10%;
}
.con-right {
	width: 10%;
}
.container {
	width: 80%;
}
.head {
	display: flex;
	width: 100%;
	height: 100px;
	background-color: rgb(255, 255, 255);
	margin-top: 5px;
	padding-left: 100px;
	padding-top: 28px;
}
.left {
	margin: 20px;
	width: 30%;
	border-right: 1px solid lightgray;
}
.button {
	border: none;
	width: 100px;
	background-color: rgb(235, 245, 255);
	color: rgb(0, 132, 255);
	height: 35px;
}
.right{
	width: 70%;
}
</style>
