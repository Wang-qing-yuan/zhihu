<template>
	<div>
		<!-- 顶部tab导航 -->
		<ul class="tab-title border-bottom">
			<li v-for="(title, index) in tabTitle" @click="change(index)" :class="{ active: cur == index }" :key="index">{{ title }}</li>
		</ul>

		<!-- 切换的内容区 -->
		<div>
			<div v-for="(content, index) in tabContent" v-show="cur == index" :key="index">
				<div class=" border-bottom fill-white" v-for="(item, index1) in content" :key="index1">
					<div v-if="!item.children[0].thumbnail" class="card">
						<div class="card-3">
							<div class="row">
							<h3 class="light-grey" :class="{ top: index1 < 3 }">{{ index1 + 1 }}</h3>
							<a :href="'https://www.zhihu.com/question/' + item.target.id" target="_blank" class="hot-title">{{ item.target.title }}</a>
							</div>
							<p class="ellipsis">{{ item.target.excerpt }}</p>
							<ul class="row hot-share">
								<li class="light-grey share">
									<svg class="light-grey" viewBox="0 0 18 18" width="30" height="18">
										<path
											d="M14.553 20.78c.862-.651 1.39-1.792 1.583-3.421.298-2.511-.656-4.904-2.863-7.179.209 2.291.209 3.73 0 4.314-.41 1.143-1.123 1.983-1.91 2.03-1.35.079-2.305-.512-2.863-1.774-.676 1.25-.782 2.556-.318 3.915.31.906.94 1.684 1.89 2.333C7.144 20.131 5 17.336 5 14.022c0-2.144.898-4.072 2.325-5.4.062 2.072.682 3.598 2.13 4.822-.67-1.112-.734-2.11-.734-3.517 0-3.253 2.067-6.007 4.913-6.927a7.35 7.35 0 0 0 2.157 4.918C17.722 9.214 19 11.463 19 14.022c0 3.073-1.844 5.7-4.447 6.758z"
											fill-rule="evenodd"
										></path>
									</svg>
									{{ item.detail_text }}
								</li>
								<li class="light-grey share">
									<svg class="light-grey" viewBox="0 0 18 18" width="30" height="18">
										<path
											d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z"
											fill-rule="evenodd"
										></path>
									</svg>
									分享
								</li>
							</ul></div>
						
					</div>

					<!-- 有图 -->
					<div v-else class="card row w-fx-between">
						<div class="card-2">
							<div class="row">
								<h3 class="light-grey" :class="{ top: index1 < 3 }">{{ index1 + 1 }}</h3>
								<a :href="'https://www.zhihu.com/question/' + item.target.id" target="_blank" class="hot-title">{{ item.target.title }}</a>
							</div>
							<p class="ellipsis">{{ item.target.excerpt }}</p>

							<ul class="row hot-share">
								<li class="light-grey share">
									<svg class="light-grey" viewBox="0 0 18 18" width="30" height="18">
										<path
											d="M14.553 20.78c.862-.651 1.39-1.792 1.583-3.421.298-2.511-.656-4.904-2.863-7.179.209 2.291.209 3.73 0 4.314-.41 1.143-1.123 1.983-1.91 2.03-1.35.079-2.305-.512-2.863-1.774-.676 1.25-.782 2.556-.318 3.915.31.906.94 1.684 1.89 2.333C7.144 20.131 5 17.336 5 14.022c0-2.144.898-4.072 2.325-5.4.062 2.072.682 3.598 2.13 4.822-.67-1.112-.734-2.11-.734-3.517 0-3.253 2.067-6.007 4.913-6.927a7.35 7.35 0 0 0 2.157 4.918C17.722 9.214 19 11.463 19 14.022c0 3.073-1.844 5.7-4.447 6.758z"
											fill-rule="evenodd"
										></path>
									</svg>
									{{ item.detail_text }}
								</li>
								<li class="light-grey share">
									<svg class="light-grey" viewBox="0 0 18 18" width="30" height="18">
										<path
											d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z"
											fill-rule="evenodd"
										></path>
									</svg>
									分享
								</li>
							</ul>
						</div>

						<div class="w-fx-right"><img :src="item.children[0].thumbnail" class="picture" /></div>
					</div>
				</div>

				<!-- <p class="tx-center light-grey mt-4 mb-4 no-more">没有更多内容</p> -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'hot',
	data() {
		return {
			tabTitle: ['全站', '科学', '数码', '体育', '时尚', '影视', '校园', '汽车'],
			category: ['total', 'science', 'digital', 'sport', 'fashion', 'film', 'school', 'car'],
			tabContent: [[], [], [], [], [], [], [], []],
			cur: 0
		};
	},
	created() {
		this.axios.get('/api/hot-lists/total').then(res => {
			this.tabContent.splice(0, 0, res.data.data.data);
		});
	},
	methods: {
		change(index) {
			this.cur = index;
			//取出对应的参数数组的值
			let param = this.category[index];
			//发起对应请求
			this.axios.get('/api/hot-lists/' + param).then(res => {
				this.tabContent.splice(index, 0, res.data.data.data);
			});
			if (param == 'total') {
				this.$router.push('/home/hot');
			} else {
				this.$router.push('/home/hot?list=' + param);
			}
		}
	}
};
</script>
<style lang="scss" scoped>
.light-grey{
	color: rgb(159,173,199);
	fill: rgb(159,173,199);
}
.tab-title {
	display: flex;
	align-items: center;
	height: 63px;
	padding: 0.625rem;
	background-color: #fff;
	li {
		width: 68px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		border-radius: 2px;
		margin: 8px;
		background-color: #f6f6f6;
		color: #646464;
		cursor: pointer;
	}
	.active {
		background-color: #e6f3ff;
		color: #0c89ff;
	}
}
.top {
	color: #fc9300;
}
.no-more:before,
.no-more:after {
	content: '';
	display: inline-block;
	width: 24px;
	height: 1px;
	margin: 0 10px;
	vertical-align: middle;
	background-color: #d3d3d3;
}
.mt-2 {
	cursor: pointer;
	&:hover {
		color: #646464;
	}
}
.card {
	background-color: white;
	margin-bottom: 5px;
	padding: 20px;
}
.hot-title {
	color: black;
	font-size: 18px;
	font-weight: 600;
	margin-left: 20px;
}
.card-2 {
	height: 105px;
	width: 70%;
	position: relative;
}
.card-3 {
	height: 105px;
	width: 100%;
	position: relative;
}
.picture{
	width: 190px;
	height: 105px;
	border-radius: 5px;
}
.ellipsis {
	margin-top: 5px;
	margin-left: 45px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.share{
	font-size: 14px;
	margin-right: 10px;
	
}
.hot-share{
	position: absolute;
	bottom: 0;
	left: 45px;
}
</style>
