<template>
	<div class="container t-center">
		<div class="tu"><img class="zi" src="../assets/login2.png" /></div>

		<div class="login-box d-inline-block">
			<div class="tab w-fx-left">
				<span class="tab-item" :class="{ active: isActive }" @click="changeTab">免密码登录</span>
				<span class="tab-item" :class="{ active: !isActive }" @click="changeTab">密码登录</span>
			</div>

			<div class="tab-box" v-if="show && selected === 0">
				<form class="drop-down-box" action="">
					<div class="w-fx-left">
						<select class="drop-down">
							<option class="aa">中国+86</option>
							<option>美国+1</option>
							<option class="aa">日本+81</option>
							<option>中国香港+852</option>
							<option>中国澳门+853</option>
							<option>中国台湾+886</option>
							<option class="aa">马来西亚+60</option>
							<option>澳大利亚+61</option>
							<option>加拿大+1</option>
							<option>英国+44</option>
							<option>新加坡+65</option>
							<option>德国+49</option>
						</select>
						<div class="pho"><input type="text" class="num" placeholder="手机号" /></div>
					</div>
					
				</form>
				<div class="line"></div>
				<div class="paw row">
	<input type="password" class="paw-b" placeholder="请输入6位短信验证码" minlength="6" maxlength="6"  />
	<p class="paw-note">获取短信验证码</p></div>
			<div class="w-fx-right">
					<p class="note-2">接受语音消息</p>
				</div>
			</div>
			
<div class="tab-box" v-if="show && selected === 1">
				<input type="text" class="num-2" placeholder="手机号或邮箱" v-model="mobile"/>
				<input type="password" class="num-2" placeholder="密码" v-model="password"/>
				<div class="w-fx-between forget">
					<div class="w-fx-left forget-a">
						<p>邮箱账号登录</p>
					</div>
					<div class="w-fx-right forget-b">
						<p>忘记密码？</p>
					</div>
				</div>
			</div>
				<div class="login-buttom">
					<input type="submit" class="login-btn" value="注册/登录" @click="signIn(mobile,password)" />
					</div>
			</div>
			
			
			
			<div class="t-center">
				<div class="d-inline-block grey-box">
					<div class="row">
						<div class="grey-a">
						<p>为注册手机验证后自动登录</p>
						<p>注册即代表同意《知乎协议》《隐私保护指引》</p>
					</div>
					
						<div class="w-fx-right grey-b">
						<p>注册机构号</p>
					</div></div>
					
					
				</div>
				</div>
				
				<div class="t-center">
					<div class="white-box d-inline-block">
						<div class="row">
							<div class="whiter-a">社交账号登录</div>
						<div class="w-fx-right whiter-b">
							<svg viewBox="0 0 20 19" class="Icon Login-socialIcon Icon--wechat" width="18" height="18" aria-hidden="true" style="fill: rgb(96, 200, 77); height: 18px; width: 18px;"><title></title><g><path fill-rule="evenodd" d="M.224 18.667s4.24-1.825 4.788-2.056C13.03 20.14 20 14.715 20 8.9 20 3.984 15.523 0 10 0S0 3.984 0 8.898c0 1.86.64 3.585 1.737 5.013-.274.834-1.513 4.757-1.513 4.757zM6.167 8.96c.69 0 1.25-.57 1.25-1.27 0-.703-.56-1.272-1.25-1.272s-1.25.57-1.25 1.27c0 .703.56 1.272 1.25 1.272zm7.583 0c.69 0 1.25-.57 1.25-1.27 0-.703-.56-1.272-1.25-1.272s-1.25.57-1.25 1.27c0 .703.56 1.272 1.25 1.272z"></path></g></svg>
							<p>微信</p>
							<svg width="18" height="18" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg" class="Icon Login-socialIcon Icon--qq" aria-hidden="true" style="fill: rgb(80, 200, 253); height: 18px; width: 18px;"><title></title><g><title>QQ</title><path d="M9.003 0c-2.265 0-6.29 1.364-6.29 7.325V8.52S.55 12.96.55 15.474c0 .665.17 1.025.28 1.025.115 0 .903-.485 1.75-2.073 0 0-.18 2.197 1.903 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29 0 2.24.425 6.287.687 6.287 0 0-.688-1.768-1.182-1.768-1.182 2.085-1.77 1.905-3.967 1.905-3.967.845 1.588 1.634 2.072 1.746 2.072.11 0 .283-.36.283-1.026 0-2.514-2.166-6.954-2.166-6.954V7.325C15.29 1.365 11.268 0 9.003 0z" fill-rule="evenodd"></path></g></svg>
							<p>QQ</p>
							<svg viewBox="0 0 22 18" class="Icon Login-socialIcon Icon--weibo" width="18" height="18" aria-hidden="true" style="fill: rgb(251, 102, 34); height: 18px; width: 18px;"><title></title><g><g fill-rule="evenodd">     <path d="M14.518.06s-.87.644.03 1.71c0 0 6.287-1.19 5.69 6.33 0 0 1.05 1.13 1.674-.31 0 .002 1.44-8.584-7.394-7.73zM4.883 13.17s.038 2.584 3.326 2.584c3.657 0 3.683-2.98 3.683-2.98S12.1 9.67 8.687 9.61c-3.863-.07-3.804 3.56-3.804 3.56zM7.41 14.21c-.668 0-1.214-.447-1.214-.998 0-.55.543-.998 1.215-.998.67 0 1.213.447 1.213.998 0 .55-.54.998-1.212.998z"></path>     <path d="M4.317 4.52C-2.603 10.353.873 14.85.873 14.85c.57 1.01 3.382 3.1 8.596 3.1 5.21 0 9.314-3.628 9.314-6.44 0-2.813-2.918-2.714-2.918-2.714 1.04-1.554.19-2.65.19-2.65-1.684-2.118-5.404-.16-5.407-.158.772-1.717.11-2.797.11-2.797C8.932.66 4.317 4.52 4.317 4.52zm10.448 7.79s-.467 4.16-6.447 4.16c-5.745 0-5.82-3.322-5.842-3.712 0 0-.073-4.423 6.58-4.654 5.94-.204 5.71 4.207 5.71 4.207zM18.65 7.045s1.018-4.37-3.864-3.818c0 0-.628.58.09 1.346 0 0 2.602-.58 2.397 2.598 0 0 .715.885 1.376-.125z"></path>   </g></g></svg>
							<p>微博</p>
						</div></div>
						
					
				</div></div>
				
				<div class="t-center">
					<div class="d-inline-block white-box-2">
						<div class="t-center row">
							<svg width="20" height="20" fill="currentColor" style="position: relative;top: 10px;margin-right: 10px;margin-left: 130px;"><g fill="none" fill-rule="evenodd"><path fill="#0084FF" d="M15.234 0C18.125 0 20 1.875 20 4.766v10.468C20 18.125 18.125 20 15.234 20H4.766C1.875 20 0 18.125 0 15.234V4.766C0 1.875 1.875 0 4.766 0h10.468z"></path><path d="M0 0h20v20H0z"></path><path fill="#FFF" d="M10.313 10.352c0-.012-.004-1.036-.328-1.055h-2.26a48.42 48.42 0 0 0 .095-3.164h2.21c0-.003.084-.982-.37-.977H5.837c.15-.563.34-1.15.566-1.758 0 0-1.039 0-1.393.937-.146.386-.57 1.87-1.325 3.388.254-.028 1.095-.05 1.59-.963.091-.255.109-.289.222-.627h1.246c0 .452-.051 2.897-.072 3.164H4.414c-.507.019-.672 1.043-.672 1.055h2.832c-.19 2.15-1.209 3.972-3.058 5.413.884.253 1.766-.04 2.202-.43 0 0 .992-.906 1.536-3.004l2.33 2.817s.342-1.166-.053-1.734c-.328-.387-1.212-1.434-1.589-1.814l-.631.504a7.686 7.686 0 0 0 .34-1.752h2.662zM10.898 5v9.441h1.015l.334 1.145 1.82-1.144h2.144V5h-5.313zm4.258 8.398h-1.214l-1.212.782-.22-.782h-.518V6.016h3.164v7.382z"></path></g></svg>
							<p>下载知乎App</p>
						
						</div>
						
					</div>
				</div>
				
				<div class="t-center">
					<div class="d-inline-block end">
						<p>知乎专栏·圆桌·发现·移动应用·联系我们·来知乎工作·注册机构号</p>
						<p>© 2020 知乎京· ICP 证·110745 号·京 ICP 备 13052560 号 - 1·京公网安备 11010802010035 号·出版物经营许可证</p>
						<p>侵权举报·网上有害信息举报专区·儿童色情信息举报专区·违法和不良信息举报：010-82716601</p>
					</div>
				</div>
				
			

			
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
		
				mobile: '',
				password: '',
			isActive: true,
			show: true,
			selected: 0,			
			user: null,

		};
	},

	created() {
		
	},

	methods: {
		changeTab: function() {
					this.isActive = !this.isActive;
					this.selected = this.selected == 0 ? 1 : 0;
				},
				signIn(mobile, password) {
					this.axios({
						method: 'post',
						url: 'http://localhost:8080/api/user/login',
						params: {
							mobile: this.mobile,
							password: this.password
						}
					}).then(res => {
						if (res.data.msg === '成功') {
							alert('登录成功');
							localStorage.setItem('user', JSON.stringify(res.data.data));
							this.$router.push('/home/recommoned');
						} else {
							alert(res.data.msg);
							alert('密码错误');
						}
					});
				}

	}
	
		
};
</script>

<style lang="scss" scoped>
.container {
	background-image: url(../assets/login1.png);

	width: 100%;
	
	background-size: 100% 155%;
	background-repeat: no-repeat;
	background-attachment: fixed;
	padding: 30px;
}
.active {
	color: black;
	font-weight: 700;
	padding-bottom: 20px;
	border-bottom: 3px solid #0084ff;
}
.zi {
	width: 128px;
	height: 81px;
	margin-bottom: 24px;
}
.login-box {
	width: 400px;
	height: auto;
	background-color: rgb(255, 255, 255);
	padding: 20px;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
}
.tab {
	height: 60px;
	
}
.line{
	margin-top: 10px;
	height: 2px;
	width: 100%;
	background-color: rgb(235, 235, 235);
}
.tab-item {
	margin-right: 20px;
	height: 40px;
	
}
.tab-box {
	
	padding-top: 10px;
	padding-bottom: 10px;
	
}
.drop-down-box {
	height: 30px;
	
}
.drop-down {
	width: 30%;
	border: none;
	border-right: 1px solid rgb(235, 235, 235);
	height: 30px;
	color: rgb(133, 144, 166);
	font-size: 15px;
}
.drop-down:hover {
	color: rgb(118, 131, 155);
}
form select {
	-webkit-appearance: none;
}
.pho {
	width: 70%;
}
.num {
	border: none;
	width: 90%;
	
}
.paw {
	width: 100%;
	border-bottom: 1px solid  rgb(235, 235, 235);
height: 60px;

	background-color: white;
}
.paw-b {
	width: 70%;
	height: 40px;
	position: relative;
	top: 10px;
	border: none;
}
.paw-note{
	position: relative;
	top: 20px;
	font-size: 15px;
	color: rgb(23,81,153);
	
}
.paw-note:hover{
	color: rgb(118,131,155);
}
.note-2{
	position: relative;
	top: 20px;
	color: rgb(118,131,155);
}
.note-2:hover{
	color: rgb(128,128,128);
}
.login-buttom{
	margin-top: 30px;
}
.login-btn{
	width: 100%;
	height: 40px;
	border-radius: 5px;
	border: none;
	background-color: rgb(0,132,255);
	color: white;
}
.login-btn:hover{
	background-color: rgb(0,119,230);
}
.grey-box{
	height: 60px;
	width: 400px;
	background-color: rgb(246,246,246);
	padding-right: 20px;
	padding-left:20px ;
	padding-top: 10px;
	padding-bottom: 10px;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
}
.grey-a{
	font-size: 13px;
	color: rgb(128,128,128);
	width: 80%;
}
.grey-b{
	font-size: 13px;
	color: rgb(23,81,153);
	
}
.white-box{
	height: 60px;
	line-height: 60px;
	width: 400px;
	background-color: white;margin-top: 30px;
	border-radius: 5px;
}
.white-box-2{
	height: 40px;
	line-height: 40px;
	width: 400px;
	background-color: white;margin-top: 30px;
	border-radius: 5px;
}
.whiter-a{
	color: rgb(133,144,166);
	width: 40%;
}
.whiter-b{
	color: rgb(133,144,166);
	width: 75%;
	height: auto;
	justify-content: space-around;
}
.num-2{
	border: none;
	border-bottom: 1px solid rgb(235,235,235);
	width: 100%;
	height: 60px;
	
}
.forget{
	margin-top: 10px;
}
.forget-a{
	color: rgb(23,81,153);
}
.forget-b{
	color: rgb(133,144,166);
}
.forget-a:hover, .forget-b:hover{
	color: rgb(128,128,128);
}
.end{
	color: white;
	font-size: 12px;
	width: 80%;
	margin-top: 30px;
	line-height: 25px;
	letter-spacing:2px;
}
</style>
