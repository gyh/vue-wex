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
		<scroll-view class="mall-goods" scroll-x="true">
			<view class="mall-goods-item" v-for="i in [1,2,3,4,5,6,7,8]" :key="i">
				<goods-v></goods-v>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import goodsV from '@/components/good-item-v.vue'
	export default {
		name:"page-mall-item",
		components:{
			goodsV:goodsV
		},
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
	.mall-goods{
		margin-top:50rpx;
		white-space: nowrap;
		width: 100%;
	}
	.mall-goods-item{
		display: inline-block;
		margin-left: 15rpx;
	}
	
</style>
