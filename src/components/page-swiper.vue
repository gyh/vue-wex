<template>
	<view>
		<swiper indicator-dots="true" autoplay="true">
			<swiper-item item-id="1">
				<image class="swiper-img" mode="aspectFill" src="http://img2.imgtn.bdimg.com/it/u=4064075977,3738371861&fm=26&gp=0.jpg"
				 lazy-load="true"></image>
			</swiper-item>
			<swiper-item item-id="2">
				<image class="swiper-img" mode="aspectFill" src="http://img3.imgtn.bdimg.com/it/u=3987907653,720009510&fm=214&gp=0.jpg"
				 lazy-load="true"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
	swiper{
		height: 200rpx;
	}
	swiper-item{
		height: 200rpx;
	}
	.swiper-img {
		width: 100%;
		height: 100%;
	}
</style>
