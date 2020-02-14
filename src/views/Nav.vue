<template>
	<div>
		<div class="container t-center">
			<div class="nav-bar d-inline-block" v-if="fixed">
				<transition name="nav-bar">
					
					<div class="row">
							<svg viewBox="0 0 200 91" class="ZhihuLogo zi" width="64" height="30" aria-hidden="true" style="height: 30px; width: 64px;">
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
											
										<div class="login">
											<svg class="grey zi" fill="currentColor" viewBox="0 0 25 25" width="25" height="25"><path d="M4.523 15.076l.804-6.757a6.753 6.753 0 0 1 4.945-5.7 1.823 1.823 0 0 1 3.623 0 6.753 6.753 0 0 1 4.945 5.7l.804 6.757a2.293 2.293 0 0 0 1.712 2.108 1.093 1.093 0 0 1-.297 2.15H3.108a1.093 1.093 0 0 1-.297-2.15 2.293 2.293 0 0 0 1.712-2.108zM12.083 23a2.758 2.758 0 0 1-2.753-2.509.229.229 0 0 1 .232-.24h5.043a.229.229 0 0 1 .232.24 2.759 2.759 0 0 1-2.753 2.51z"></path></svg>
											<svg class="grey zi" fill="currentColor" viewBox="0 0 25 25" width="25" height="25"><path d="M11 2c5.571 0 9 4.335 9 8 0 6-6.475 9.764-11.481 8.022-.315-.07-.379-.124-.78.078-1.455.54-2.413.921-3.525 1.122-.483.087-.916-.25-.588-.581 0 0 .677-.417.842-1.904.064-.351-.14-.879-.454-1.171A8.833 8.833 0 0 1 2 10c0-3.87 3.394-8 9-8zm10.14 9.628c.758.988.86 2.009.86 3.15 0 1.195-.619 3.11-1.368 3.938-.209.23-.354.467-.308.722.12 1.073.614 1.501.614 1.501.237.239-.188.562-.537.5-.803-.146-1.495-.42-2.546-.811-.29-.146-.336-.106-.563-.057-2.043.711-4.398.475-6.083-.927 5.965-.524 8.727-3.03 9.93-8.016z" fill-rule="evenodd"></path></svg>
											<img :src="user.avatarUrl" v-if="this.user !==null" width="30" height="30" class="zi" @click="show = !show" />
																	<span v-else class="link"><router-link to="/login">登录</router-link></span>
																	
																	<transition name="fade">
																		<ul class="login-box w-shadow" v-if="show">
																			<li class="login-ico">
																				<svg class="grey ico" viewBox="0 0 20 22" width="30" height="22">
																					<path
																						d="M15.417 12.923c-.376.653-.837 1.281-.763 1.863.292 2.273 5.562 1.77 6.78 3.048.566.595.566.664.566 4.164-6.611-.07-13.363 0-20 0 .027-3.5 0-3.478.62-4.164 1.303-1.44 6.581-.715 6.78-3.133.045-.545-.38-1.114-.763-1.778C6.511 9.233 5.697 2 12 2s5.422 7.443 3.417 10.923z"
																						fill-rule="evenodd"
																					></path>
																				</svg>
																				<router-link :to="'/people/' + user.url" class="grey">我的主页</router-link>
																			</li>
																			
																			<li class="login-ico">
																				<svg class="grey ico" viewBox="0 0 20 22" width="30" height="22">
																					<path
																						d="M15.075 15.388l-3.024 3.024a4.041 4.041 0 0 0-1.014 1.697l-.26.868C7.844 20.986 4.91 21 2 21c.026-3.325 0-3.304.59-3.956 1.237-1.368 6.251-.68 6.44-2.976.043-.518-.36-1.06-.725-1.69C6.285 8.87 5.512 2 11.5 2c5.988 0 5.15 7.072 3.246 10.378-.357.62-.795 1.217-.724 1.77.073.571.477.958 1.053 1.24zm5.402 1.672c.523.55.523.646.523 3.94a535.11 535.11 0 0 0-4.434-.028l3.911-3.912zm-7.88 2.699c.111-.37.312-.705.584-.978l4.76-4.76a.291.291 0 0 1 .412 0l1.626 1.626a.291.291 0 0 1 0 .411l-4.76 4.76c-.272.273-.608.474-.978.585l-1.96.588a.219.219 0 0 1-.272-.272l.589-1.96zm9.157-6.742a.839.839 0 0 1 0 1.187l-.94.94a.28.28 0 0 1-.395 0l-1.563-1.563a.28.28 0 0 1 0-.395l.94-.94a.839.839 0 0 1 1.187 0l.771.771z"
																						fill-rule="evenodd"
																					></path>
																				</svg>
																				<router-link to="/creator" class="grey">创作者中心</router-link>
																			</li>
																			<li class="login-ico">
																				<svg class="grey ico" viewBox="0 0 20 22" width="30" height="22">
																					<path
																						d="M20.868 17.185a.896.896 0 0 1-.452.137c-.123 0-1.397-.26-1.617-.233-1.354.014-1.78 1.276-1.835 1.742-.055.453 0 .892.191 1.303a.8.8 0 0 1-.068.851C16.224 21.877 14.922 22 14.73 22a.548.548 0 0 1-.356-.151c-.11-.096-.685-1.138-1.069-1.468-1.304-.955-2.247-.329-2.63 0-.398.33-.672.7-.836 1.125a.632.632 0 0 1-.329.37c-1.354.426-2.918-.919-3.014-1.056a.564.564 0 0 1-.123-.356c-.014-.138.383-1.276.342-1.688-.342-1.9-1.836-1.687-2.096-1.673a3.192 3.192 0 0 0-.918.178.873.873 0 0 1-.59-.055c-.887-.462-1.136-2.332-1.109-2.51.055-.315.192-.521.438-.604.425-.164.809-.452 1.151-.85.931-1.262.343-2.25 0-2.634-.342-.356-.726-.645-1.15-.809-.138-.041-.234-.151-.33-.316-.38-1.434.613-2.552.867-2.77.255-.22.6-.055.723 0 .425.164.877.219 1.343.15C6.7 6.636 6.784 5.141 6.81 4.908c.014-.247-.11-1.29-.137-1.4a.488.488 0 0 1 .027-.315C7.317 2.178 9.071 2 9.222 2a.56.56 0 0 1 .439.178c.11.124.63 1.111 1 1.4.4.338 1.583.83 2.59.013.397-.274.959-1.29 1.082-1.413A.55.55 0 0 1 14.717 2c1.56 0 2.329 1.029 2.438 1.22a.458.458 0 0 1 .069.371c-.028.151-.329 1.152-.26 1.605.365 1.537 1.383 1.742 1.89 1.783.493.028 1.644-.356 1.809-.343a.63.63 0 0 1 .424.206c.535.31.85 1.715.905 2.14.027.233-.014.439-.11.562-.11.138-1.165.714-1.48 1.112-.855.982-.342 2.25-.068 2.606.26.37 1.22.905 1.288.96.15.137.26.302.315.494.146 1.413-.89 2.387-1.069 2.47zm-8.905-.535c.644 0 1.246-.123 1.822-.356a4.576 4.576 0 0 0 1.493-1.016 4.694 4.694 0 0 0 1-1.495c.247-.562.357-1.18.357-1.81 0-.659-.11-1.262-.356-1.825a4.79 4.79 0 0 0-1-1.481 4.542 4.542 0 0 0-1.494-1.002 4.796 4.796 0 0 0-3.631 0 4.627 4.627 0 0 0-1.48 1.002c-.424.425-.767.919-1 1.481a4.479 4.479 0 0 0-.37 1.825c0 .644.124 1.248.37 1.81a4.62 4.62 0 0 0 1 1.495c.425.426.918.768 1.48 1.016a4.677 4.677 0 0 0 1.809.356z"
																						fill-rule="evenodd"
																					></path>
																				</svg>
																				<router-link to="/setting" class="grey">设置</router-link>
																			</li>
																			<li class="login-ico">
																				<svg class="grey ico" viewBox="0 0 20 22" width="30" height="22">
																					<path
																						d="M2 11.999c0-2.756 1.154-5.417 3.167-7.3a1.266 1.266 0 0 1 1.73 1.847 7.396 7.396 0 0 0-2.367 5.453c0 4.119 3.35 7.47 7.47 7.47 4.119 0 7.47-3.351 7.47-7.47a7.41 7.41 0 0 0-2.279-5.37 1.266 1.266 0 0 1 1.76-1.819A9.923 9.923 0 0 1 22 12c0 5.513-4.486 10-10 10s-10-4.487-10-10zm8.699-.482V3.26a1.26 1.26 0 1 1 2.52 0v8.257a1.26 1.26 0 1 1-2.52 0z"
																						fill-rule="evenodd"
																					></path>
																				</svg>
																				
																				<router-link to="/login" @click.prevent.stop="logout($event)" href="#" class="grey">退出</router-link>
																			</li>
																		</ul>
																	</transition> 
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
			user: JSON.parse(localStorage.getItem('user')),
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
			this.user = null;
			this.show = false;
			localStorage.clear();
		}
	}
};
</script>

<style lang="scss" scoped>
	.ZhihuLogo {
		fill: #0084ff;

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
.zi{
	margin-right: 30px;
	margin-top: 12px;
}
.login{
	margin-left: 100px;
}
.login-box{
	background-color: white;
	position: relative;
	left: 80px;
	height: 150px;
	width: 130px;
	border-radius: 5px;
}
.login-ico{
	font-weight:300;
	height: 35px;
	font-size: 13px;
}
.ico{
	margin-right: 10px;
	padding-top: 4px;
	
}
</style>
