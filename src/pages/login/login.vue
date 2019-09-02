<template>
	<div class='uni-flex uni-column login'>
		<image class="logo" src="../../static/shopLogo.png"></image>
		<div class='inputv'>
			<input class="f15" placeholder="用户名" v-model="userName"/>
		</div>
		<div class='inputv'>
			<input class="f15" placeholder="密码" type="password" v-model="passWord"/>
		</div>
		<button type="primary" @click="toLogin()">登录</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				userName:'18636835533',
				passWord:'123123qq'
			}
		},
		methods: {
			toLogin(){
				let that = this;
				this.$Http.login({
					phone: that.userName,
					password: that.passWord
				}).then(res=>{
					console.log("res",res);
					// if(res.data.res == 1){
					// 	this.loginSuccess(res);
					// }
				})
			},
			loginSuccess(res){
				uni.showToast({
					title:"登录成功",
					icon:"success",
					duration:2000
				})
				try {
					console.log("登录成功，存储数据")
				    uni.setStorageSync('userInfo', res.data.res);
				} catch (e) {
				    // error
					console.log("数据失败",e)
				}
				setTimeout(function(){
					uni.hideToast();
					console.log("登录成功，返回首页")
					uni.navigateBack({
						delta:1,
					})
				},2000)
			},
		}
	}
</script>

<style scoped>
	.login{
		margin-top: 100rpx;
		width: 100%;
		align-items: center;
	}
	.login .inputv{
		width: 80%;
		height: 80rpx;
		border-bottom: 1px solid #ff5000 ;
		display: flex;
		align-items: center;
	}
	.login input{
		width: 100%;
		border: none;
	}
	.login .logo{
		width: 50px;
		height: 50px;
	}
	.login button{
		margin-top: 30rpx;
		width: 80%;
	}
</style>
