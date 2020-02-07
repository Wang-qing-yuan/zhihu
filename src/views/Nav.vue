<template>
	<div>
		<div class="container t-center">
			<div class="nav-bar d-inline-block" v-if="fixed">
				<transition name="nav-bar">
					
					<div class="row">
							<svg viewBox="0 0 200 91" class="ZhihuLogo margin-right-30" width="64" height="30" aria-hidden="true" style="height: 30px; width: 64px;">
													<g>
														<path
															d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z"
															fill-rule="evenodd"
														></path>
													</g>
												</svg>
						<ul class="margin-right-30 row">
												<li><router-link to="/home" class="margin-right-30 default-nav">首页</router-link></li>
												<li><router-link to="/explore" class="margin-right-30 default-nav">发现</router-link></li>
												<li><router-link to="/question/waiting" class="margin-right-30 default-nav">等你来答</router-link></li>
											</ul>
						
											<div class=" row">
												<div class="search-box" @click="popUp = !popUp" contenteditable="true">请输入关键词</div>
												<transition name="fade">
													<div class="search-container" v-if="popUp">
														<a href="" class="border-bottom d-block">知乎热搜</a>
														<a href="" class="grey border-bottom d-block">全国确诊14411例</a>
														<a href="" class="grey border-bottom d-block">武汉红十字会</a>
														<a href="" class="grey border-bottom d-block">英国正式脱欧</a>
														<a href="" class="grey border-bottom d-block">20020202</a>
														<a href="" class="grey border-bottom d-block">直接捐赠武汉医院</a>
														<a href="" class="border-bottom d-block">搜索历史</a>
														<a href="" class="grey border-bottom d-block">口罩处理</a>
													</div>
												</transition>
												<button class="blue-fill-btn">提问</button>
											</div>
					</div>
				</transition>
			</div>

			<transition name="hide-bar">
				<div class="container row hide-bar" v-if="!fixed">
					
						<svg viewBox="0 0 200 91" class="ZhihuLogo margin-right-30" width="64" height="30" aria-hidden="true" style="height: 30px; width: 64px;">
												<g>
													<path
														d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z"
														fill-rule="evenodd"
													></path>
												</g>
											</svg>
					

					<ul class="row">
						<li><router-link to="/home/recommoned" class="margin-right-30 default-nav">推荐</router-link></li>
						<li><router-link to="/home/follow" class="margin-right-30 default-nav">关注</router-link></li>
						<li><router-link to="/home/hot" class="margin-right-30 default-nav">热榜</router-link></li>
					</ul>
					<div class="row right">
						<div class="search-box-2" @click="popUp = !popUp" contenteditable="true">请输入关键词</div>
						<button class="blue-fill-btn-2">提问</button>
					</div>
				</div>
			</transition>
		</div>

		<router-view />
	</div>
</template>

<script>
export default {
	name: 'banner',
	data() {
		return {
			token: this.$store.state.token,
			user: this.$store.state.user,
			fixed: true,
			show: false,
			popUp: false
		};
	},
	mounted() {
		// 等到页面产生滚动才执行监听
		this.$nextTick(function() {
			window.addEventListener('scroll', this.onScroll);
		});
	},
	created() {},
	methods: {
		profile(url) {
			this.$router.push('/people/' + url);
		},
		onScroll() {
			//只监听路由是/home/*的滚动，首页的几个子路由页面滚动导航才变化，其他页面导航条不变
			var str = JSON.stringify(this.$route.path);
			if (str.indexOf('/home') == 1) {
				//取得滚动的起点，也就是文档流的顶部
				let scrolled = document.documentElement.scrollTop || document.body.scrollTop;
				let header_height = null;
				//取得顶部nav-bar元素的高度
				if (document.getElementsByClassName('nav-bar')[0]) {
					header_height = document.getElementsByClassName('nav-bar')[0].offsetHeight;
					// console.log('滚动条位置：' + scrolled);
				}
				//如果当前滚动点小于顶部导航高度，fix保持为true，导航不变；如果超出高度，fix变为false，当前导航会被另一个导航替代
				//用scrolled的是否在0-52px范围来决定fixed的真假
				//用fixed的true和false来切换两个导航条的显示
				// this.fixed = scrolled <= header_height;
				this.fixed = scrolled <= 152;
			}
		},
		logout(event) {
			this.token = '';
			this.show = false;
			this.$store.commit('setToken', '');
		}
	}
};
</script>

<style lang="scss" scoped>
	.ZhihuLogo {
		fill: #0084ff;
		position: relative;
		top: 10px;
	}
	.margin-right-30{
		margin-right: 30px;
	}
.container {
	height: 52px;
	width: 100%;
	background-color: white;
	position: sticky;
	top: 0;
	z-index: 100;
}
.default-nav{
	color: rgb(133,144,166);
}
.default-nav:hover{
	color: black;
}
.router-link-active {
	color: #444;
	font-weight: 600;
		border-bottom: 3px solid blue;
		padding-bottom: 12px;
}
.router-link-active:after {
	position: absolute;
	left: 0;
	right: 0;
	top: 34px;
	height: 3px;
	content: '';
	color: #44446e;
	font-weight: 600;
	// background-color: #0084ff;
}
/* 搜索框 */

.search-box {
	width: 340px;
	height: 35px;
	line-height: 35px;
	padding-left: 0.625rem;
	color: #8c97ac;
	background-color: #f6f6f6;
	border: 1px solid #ddd;
	border-radius: 3px;
	position: relative;top: 10px;
}
.search-box-2{
	width: 200px;
	height: 35px;
	line-height: 35px;
	padding-left: 0.625rem;
	color: #8c97ac;
	background-color: #f6f6f6;
	border: 1px solid #ddd;
	border-radius: 3px;
	position: relative;
	top: 10px;
	left: 430px;
}
.search-container {
	position: absolute;
	top: 48px;
	width: 340px;
	border: 1px solid #ddd;
	line-height: 28px;
	border-radius: 5px;
	padding: 5px 10px 10px 15px;
	z-index: 130;
	background-color: #fff;
}
.blue-fill-btn{
	border: none;
	background-color: rgb(0,132,255);
	width: 60px;
	height: 35px;
	color: white;
	border-radius: 5px;
	position: relative;top: 10px;
	left: 10px;
}
.blue-fill-btn-2{
	border: none;
	background-color: rgb(0,132,255);
	width: 60px;
	height: 35px;
	color: white;
	border-radius: 5px;
	position: relative;
	top: 10px;
	left: 420px;
}
/* 导航*/
.nav-bar {
	height: 52px;
	line-height: 50px;
	position: absolute;
	left: 10%;
}
.hide-bar {
	position: absolute;
	top: 0;
	left: 10%;
	height: 52px;
	line-height: 50px;
	width: 90%;
}
.hide-bar .router-link-active {
	font-weight: 500;
	color: #007aff;
	font-size: 16px;
}
.hide-bar .router-link-active:after {
	opacity: 0;
}
/* 导航条进入/离开的动画效果(兼过渡) */
.nav-bar-enter-active,
.nav-bar-leave-active {
	transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.nav-bar-enter,
.nav-bar-leave-to {
	transform: translateY(-52px);
	opacity: 0;
}
.hide-bar-enter-active,
.hide-bar-leave-active {
	transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hide-bar-enter,
.hide-bar-leave-to {
	transform: translateY(52px);
	opacity: 0;
}
/* 个人中心div的动画*/
.fade-enter-active {
	transition: all 0.2s ease-in;
}
.fade-leave-active {
	transition: all 0.2s ease-out;
}
.fade-enter,
.fade-leave-to {
	transform: translateY(-20px);
	opacity: 0;
}
</style>
