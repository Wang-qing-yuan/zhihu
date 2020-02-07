<template>
	<div>
		<div v-for="(item, index) in followList" :key="index" class="card">
			<div class="content-wrapper">
				<div class="row ">
					<p class="dark-grey">{{ item.target.author.name }}</p>
					<svg viewBox="0 0 24 24" width="18" height="18"><svg viewBox="0 0 24 24" x="-3" y="-3" fill="#FFFFFF" width="30" height="30"><path d="M3.56231227,13.8535307 C2.40051305,12.768677 2.41398885,11.0669203 3.59484487,9.99979213 L3.59222085,9.99654885 C4.26730143,9.45036719 4.79446755,8.21005186 4.7184197,7.34453784 L4.72305873,7.34412719 C4.66942824,5.75539997 5.8824188,4.56066914 7.47188965,4.64242381 L7.47229112,4.6386236 C8.33515314,4.72977993 9.58467253,4.22534048 10.1426329,3.55925173 L10.1462611,3.56228565 C11.2316055,2.40008701 12.9353108,2.41394456 14.0015072,3.59634088 L14.0047263,3.59374004 C14.5498229,4.26841874 15.7896857,4.79521622 16.6545744,4.71844347 L16.6549836,4.72304294 C18.245027,4.66894057 19.4396947,5.88213996 19.3575031,7.47241135 L19.3623099,7.47292747 C19.2704388,8.3358681 19.7742711,9.58421483 20.4407199,10.1424506 L20.437686,10.1460789 C21.5997217,11.2312209 21.5860695,12.9345218 20.4042441,14.0007396 L20.4072865,14.0045125 C19.7325967,14.5495925 19.2055209,15.7896954 19.2815865,16.6561959 L19.2770449,16.6565978 C19.3315454,18.2453037 18.1173775,19.4393568 16.5274188,19.3571512 L16.5269029,19.3619539 C15.6647098,19.270083 14.415408,19.7741709 13.8573671,20.4403558 L13.8537409,20.4373235 C12.76842,21.5995708 11.0650432,21.5864553 9.99899434,20.4039226 L9.99527367,20.406923 C9.45025436,19.7323399 8.21017638,19.2051872 7.34461983,19.2812352 L7.344304,19.2776405 C5.75448683,19.3312904 4.55977145,18.1170085 4.64254978,16.527117 L4.63769921,16.5265942 C4.72957031,15.6644394 4.22547659,14.4151814 3.55928015,13.8571569 L3.56231227,13.8535307 Z"></path></svg><path d="M2.63951518,13.3895441 C3.70763333,14.2842292 4.44777637,16.1226061 4.30075305,17.5023312 L4.32211542,17.3063047 C4.17509209,18.6910561 5.17786655,19.7063729 6.5613937,19.5844846 L6.364106,19.6008202 C7.75140298,19.4789319 9.57474349,20.2554985 10.4468305,21.3349009 L10.3224262,21.1803415 C11.1982831,22.2647703 12.6257916,22.2723098 13.5167278,21.2079863 L13.3898102,21.3600325 C14.2845162,20.2919393 16.1229361,19.5518136 17.5026934,19.6988334 L17.3054057,19.6774716 C18.6914461,19.8244915 19.7067866,18.8217404 19.5836389,17.4395022 L19.6012314,17.6367853 C19.4793403,16.2482641 20.255925,14.4249662 21.3353526,13.5528995 L21.1807897,13.677301 C22.2639871,12.8014646 22.2727834,11.3739894 21.2084351,10.483074 L21.3604848,10.6099886 C20.2923667,9.71530351 19.5522236,7.87818322 19.6992469,6.49720154 L19.6778846,6.69448464 C19.8249079,5.30847665 18.8221335,4.2944164 17.4386063,4.41630468 L17.635894,4.39871256 C16.248597,4.52185742 14.4252565,3.74529084 13.5531695,2.66588842 L13.6775738,2.81919121 C12.8017169,1.73601905 11.3742084,1.72722299 10.4832722,2.79154644 L10.6101898,2.63950024 C9.71548377,3.70759343 7.87706394,4.44771919 6.49730661,4.30195588 L6.69459432,4.32206116 C5.30855394,4.17504128 4.29447,5.17904888 4.41636114,6.56128713 L4.3987686,6.36400404 C4.52065973,7.75126861 3.74407501,9.57456653 2.66464737,10.4478898 L2.81921035,10.3222318 C1.73601288,11.1993248 1.72721662,12.6255433 2.79156494,13.5164587 L2.63951518,13.3895441 Z" fill="#0084FF"></path><svg class="Zi Zi--Check" fill="#fff" x="6" y="6" viewBox="0 0 24 24" width="12" height="12"><path d="M10.229 17.516c-.318.327-.75.484-1.199.484-.453 0-.884-.16-1.202-.488l-4.335-4.47a1.77 1.77 0 0 1 .007-2.459 1.663 1.663 0 0 1 2.397.01l3.137 3.246 9.072-9.329a1.662 1.662 0 0 1 2.397 0c.663.681.663 1.786 0 2.466L10.23 17.516z" fill-rule="evenodd"></path></svg></svg>
					<p class="dark-grey time">发表了文章·7小时前</p>
					</div>
				
				<h3 v-if="item.target.question == null" class="title">{{ item.target.title }}</h3>
				<h3 v-else class="title">{{ item.target.question.title }}</h3>
				<div v-if="!flags[index]">
					<div class="row" v-if="item.target.thumbnail">
						<div class="picture"><img :src="item.target.thumbnail" /></div>
						<div class="description">
						<span>作者:</span>
						<span v-html="item.target.excerpt.slice(0,110)"></span>
							
							<span class="read-more" @click="change(index)">
								阅读全文
								<svg class="deep-blue-icon" viewBox="0 0 24 24" width="24" height="24">
									<path
										d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
										fill-rule="evenodd"
									></path>
								</svg>
							</span>
							
						</div>
					</div>
					
					<div class="no-pic" v-else>
							<span>作者:  {{item.target.excerpt.slice(0, 70)}}...</span>
						
							<span class="read-more" @click="change(index)">
								<span class="deep-blue">阅读全文</span>
								<svg class="deep-blue-icon" viewBox="0 0 24 24" width="24" height="24">
									<path
										d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
										fill-rule="evenodd"
									></path>
								</svg>
							</span>
					</div>
				</div>
				
				
				
	
				<div v-if="flags[index]" class="p-2">
					<div class="row content-wrapper-2">
						<img :src="item.target.author.avatar_url" class="avatar" />
						<h4 class="cw-2">{{ item.target.author.name }}</h4>
						<span>{{item.target.author.headline }}</span>
					</div>
					<p class="light-grey">{{ item.target.voteup_count }}人赞同了该回答</p>
					<div v-html="item.target.content" class="content"></div>
				</div>
			</div>
			
			
			
			
			
			
			
			<!-- 评论 -->
			<ul class="row":class="{ active: flags[index] }">
				<button class="blue-btn">
					<svg class="blue-icon" viewBox="0 0 24 24" width="10" height="10">
						<path
							d="M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z"
							fill-rule="evenodd"
						></path>
					</svg>
					赞同{{ item.target.voteup_count }}
				</button>
				
				
				<button class="blue-btn">
					<svg class="blue-icon" viewBox="0 0 24 24" width="10" height="10">
						<path
							d="M20.044 3H3.956C2.876 3 2 3.517 2 4.9c0 .326.087.533.236.896L10.216 19c.355.571.87 1.143 1.784 1.143s1.429-.572 1.784-1.143l7.98-13.204c.149-.363.236-.57.236-.896 0-1.386-.876-1.9-1.956-1.9z"
							fill-rule="evenodd"
						></path>
					</svg>
				</button>
	
				<li class="grey comment">
					<svg class="grey" viewBox="0 0 24 24" width="1.2em" height="1.2em">
						<path
							d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z"
							fill-rule="evenodd"
						></path>
					</svg>
					{{ item.target.comment_count }}条评论
				</li>
				
				<li class="grey comment">
					<svg class="grey" viewBox="0 0 24 24" width="1.2em" height="1.2em">
						<path
							d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z"
							fill-rule="evenodd"
						></path>
					</svg>
					分享
				</li>
				
				<li class="grey comment">
					<svg class="grey" viewBox="0 0 24 24" width="1.2em" height="1.2em">
						<path
							d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
							fill-rule="evenodd"
						></path>
					</svg>
					收藏
				</li>
				
				<li class="grey comment">
					<svg class="grey" viewBox="0 0 24 24" width="1.2em" height="1.2em">
						<path
							d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z"
							fill-rule="evenodd"
						></path>
					</svg>
					喜欢
				</li>
				
				<li class="grey comment">
					<svg class="grey" viewBox="0 0 24 24" width="1.2em" height="1.2em">
						<path d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill-rule="evenodd"></path>
					</svg>
				</li>
				
				<li class="grey comment down" @click="change(index)" v-if="flags[index]">
					<svg class="grey down-icon" viewBox="0 0 24 24" width="24" height="24">
			<path d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z" fill-rule="evenodd"></path></svg>
					
					收起
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'follow',
	data() {
		return {
			followList: [],
			flags: []
		};
	},
	created() {
		this.axios.get('/api/follow').then(res => {
			this.followList = res.data.data.data;
			//定义一个正则规则，用来处理富文本中的图片
			const regex = new RegExp('<img', 'gi');
			for (var i = 0; i < this.followList.length; i++) {
				//给每篇文章添加一个标记，默认为false，表示未展开全文
				this.flags.splice(i, 0, false);
				//将富文本中的图片处理大小
				this.followList[i].target.content = this.followList[i].target.content.replace(regex, `<img style="max-width: 100%; height: auto"`);
			}
		});
	},
	methods: {
		//展开、收起的切换
		change(index) {
			//将flag数组索引为index的项置反，注意splice用法，不要直接给数组元素赋值（无法监听flag变化）
			this.flags.splice(index, 1, !this.flags[index]);
		}
	}
};
</script>

<style lang="scss" scoped>
	.dark-grey{
		color: rgb(133,144,166);
	}
.card{
	background-color: white;
	margin-bottom: 3px;
	padding: 20px;
}
.picture{
	width: 30%;
	margin-right: 20px;
	margin-bottom: 20px;
	margin-top: 20px;
}
.picture img{
	width: 100%;
	height: 100px;
}
.description{
	width: 70%;
	margin-top: 20px;
}
.read-more{
	color: rgb(23,81,153);
}
.read-more:hover{
	color: rgb(128,128,128);
}
.deep-blue-icon{
	fill: rgb(23,81,153);
	position: relative;
	top: 6px;
	}
	.no-pic{
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.content-wrapper-2{
		margin-top: 10px;
		margin-bottom:10px;
	}
	.avatar{
		width: 25px;
		margin-right:10px;
		
	}
	.cw-2{
		color: rgb(68,68,68);
		margin-right: 5px;
		
	}
	.light-grey{
		color: rgb(118,131,155);
		margin-bottom: 10px;
	}
	.content{
		line-height: 50px;
	}
	.blue-btn{
		margin-right: 10px;
	}
	.comment{
		
		height: 35px;
		line-height: 35px;
		margin-right: 20px;
	}
	.down{
		position: relative;
		left: 40px;
	}
	.down-icon{
		 transform: rotate(180deg); 
	}
	.active {
		position: sticky;
		bottom: 0;
		z-index: 999;
		background-color: #fff;
		width: 100%;
		height: 50px;
		
	}
	.time{
		margin-bottom: 10px;
	}
</style>