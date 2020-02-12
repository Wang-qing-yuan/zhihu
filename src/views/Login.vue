<template>
	<div class="container t-center">
		<div class="tu"><img class="zi" src="../assets/login2.png" /></div>

		<div class="login-box d-inline-block">
			<div class="tab w-fx-left">
				<span class="tab-item" :class="{ active: isActive }" @click="changeTab">免密码登录</span>
				<span class="tab-item" :class="{ active: !isActive }" @click="changeTab">密码登录</span>
			</div>

			<div class="tab-box" v-if="show && selected === 0">
				<div class="t-center">
					<input type="text" claplaceholder="请输入手机号" v-model="userDto.mobile" />
					<input type="password" placeholder="请输入6-16位密码" minlength="6" maxlength="16" v-model="userDto.password" />
				</div>
		
				<!-- <div class="code-box">
					<input type="text" placeholder="请输入验证码" v-model="userDto.code" />
					<div class="img"><img ref="codeImg" @click="refresh()" style="cursor: pointer;" /></div>
				</div> -->
			<!-- 	<input type="submit" class="login-btn" value="登录" @click="signIn(userDto)" />
				<span class="span-tab" @click="changeTab">没有账号，立即前往注册</span> -->
			</div>

			<!-- <div class="tab-box" v-if="show && selected === 1">
				<input type="text" placeholder="请设置用户名" v-model="userDto.nickname" />
				<!-- <input type="tel" placeholder="生日" minlength="11" maxlength="11" v-model="userDto.getBirthday"/> -->
			<!-- <input type="tel" placeholder="请绑定手机号" minlength="11" maxlength="11" v-model="userDto.mobile" :disabled="yzmDisabled" @input.prevent="checkLength" />
				<input type="password" placeholder="请设置6-16位密码" minlength="6" maxlength="16" v-model="userDto.password" />
				<input type="password" placeholder="请确认密码" minlength="6" maxlength="16" v-model="pwd2" />
		
				<input type="submit" class="regist-btn" value="注册" @click="signUp(userDto)" />
			</div> -->

			<!-- <div class="line-box" v-if="show && selected === 0">
				<span class="line"></span>
				
				<span class="line"></span>
			</div> -->

			<!-- <div>
				<div class="message" v-if="pop">
					<h1>{{ info }}</h1>
				</div>
		
				<div class="msg-box" v-if="popPlus">
					<p>{{ info }}</p>
				</div>
			</div> -->
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			userDto: {
				mobile: '',
				password: '',
				code: ''
			},
			codeDisabled: true,
			info: '',
			isActive: true,
			show: true,
			selected: 0,
			status: '',
			yzmDisabled: false,
			user: null,
			token: ''
		};
	},

	created() {
		this.axios.get('http://localhost:8080/api/code', { responseType: 'blob' }).then(res => {
			// console.log(res);
			var img = this.$refs.codeImg;
			let url = window.URL.createObjectURL(res.data);
			img.src = url;
			console.log(res.headers);
			//取得后台通过响应头返回的sessionId的值
			this.token = res.headers['access-token'];
			console.log(this.token);
		});
		// this.$router.go(0)
	},
	computed: {
		// 解决403图片缓存问题
		getImages(_url) {
			if (_url) {
				let _u = _url.substring(8);
				return 'https://images.weserv.nl/?url=' + _u;
			}
		}
	},

	methods: {
		signIn(userDto) {
			this.axios({
				method: 'post',
				url: 'http://localhost:8080/api/user/sign-in',
				data: JSON.stringify(this.userDto),
				headers: {
					'Access-Token': this.token //将token放在请求头带到后端
				}
			}).then(res => {
				console.log(res.data);
				if (res.data.msg === '成功') {
					alert('登录成功');
					localStorage.setItem('user', JSON.stringify(res.data.data));
					this.$router.push('/');
					this.$router.go(0);
				} else {
					alert(res.data.msg);
					this.userDto.code = '';
				}
			});
		},
		signUp(userDto) {
			this.axios({
				method: 'post',
				url: 'http://localhost:8080/api/user/sign-up',
				data: JSON.stringify(this.userDto)
			}).then(res => {
				console.log(res.data.msg);
				if (res.data.msg === '成功') {
					alert('注册成功');
					this.$router.push('/');
				} else {
					alert(res.data.msg);
					console.log(res.data.msg);
				}
			});
		},

		refresh() {
			this.axios.get('http://localhost:8080/api/code', { responseType: 'blob' }).then(res => {
				console.log(res);
				var img = this.$refs.codeImg;
				let url = window.URL.createObjectURL(res.data);
				img.src = url;
			});
		},
		changeTab: function() {
			this.isActive = !this.isActive;
			this.selected = this.selected == 0 ? 1 : 0;
		},

		checkLength() {
			if (Number(this.userDto.mobile) && this.userDto.mobile.length == 11) {
				this.codeDisabled = false;
				return true;
			} else {
				return false;
			}
		},

		clear() {
			// alert("我进入到了clear()方法中");
			this.userDto.nickname = '';
			this.userDto.mobile = '';
			this.userDto.password = '';
			this.pwd2 = '';
			this.status = '';
			this.codeDisabled = true;
		},

		register(userDto) {
			if (this.userDto.nickname == '') {
				this.info = '用户名不能为空';
				this.showMsg();
				return;
			}
			if (this.userDto.password == '' || this.pwd2 == '') {
				this.info = '密码不能为空';
				this.showMsg();
				return;
			}
			if (this.userDto.mobile == '') {
				this.info = '手机号不能为空';
				this.showMsg();
				return;
			}
			if (!/^1[34578]\d{9}$/.test(this.userDto.mobile)) {
				this.info = '手机号码格式错误';
				this.userDto.mobile = '';
				return;
			}
			// 注册信息完全符合要求则进行下面注册操作
			this.axios.post('http://localhost:8080/api/user/sign-up', JSON.stringify(this.userDto)).then(response => {
				if (response.data.msg == '成功') {
					alert('注册成功');
					// 将后台的用户信息存入本地存储
					localStorage.user = JSON.stringify(response.data.data);
					// 路由跳转
					this.$router.push('/');
				}
			});
			this.axios({
				method: 'post',
				url: 'http://localhost:8080/api/user/sign-up',
				data: JSON.stringify(this.userDto),
				headers: {
					'Access-Token': this.token
				}
			}).then(res => {
				if (res.data.msg === '成功') {
					alert('注册成功');
					localStorage.setItem('user', JSON.stringify(res.data.data));
					this.$router.push('/');
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
	height: 600px;
	background-size: 100% 155%;
	background-repeat: no-repeat;
	background-attachment: fixed;
	padding: 30px;
}
.zi {
	width: 128px;
	height: 81px;
	margin-bottom: 24px;
}
.login-box {
	width: 450px;
	height: auto;
	background-color: rgb(255, 255, 255);
	padding: 20px;
	border-radius: 5px;
}
.tab {
	height: 60px;
	
}
.tab-item {
	margin-right: 20px;
}
.tab-box{
	
}
</style>
