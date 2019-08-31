<template>
	<view class="item">
		<div class="uni-flex mall-info">
			<image 
			src="http://39.100.70.31/filecache/img/logo/ebf70a26-c943-42b5-9d6b-7a2e26942401.jpg" 
			class="mall-img" mode="aspectFill"
			 lazy-load="true"></image>
			 <view class="uni-flex uni-column">
				 <text class="f16">商城名字</text>
				 <text class="f13">地址：商城地址地址地址</text>
				 <text class="f13">主营：主营类目,类目名称,类目</text>
			 </view>
		</div>
		<view class="mall-goods"></view>
	</view>
</template>

<script>
	export default {
		name:"page-mall-item",
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.item{
		margin: 20rpx;
		border: 0.5px solid #dddddd;
		border-radius:4rpx;
		padding: 20rpx;
	}
	.mall-info{
		height: 150rpx;
		align-items: center;
	}
	.mall-info text{
		margin-top: 2rpx;
	}
	.mall-img {
		width: 150rpx;
		height: 150rpx;
		margin-right: 20rpx;
	}
</style>
