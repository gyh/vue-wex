<template>
	<div class="uni-flex mall-op">
		<div class="item f15">
			<text >
				分类筛选
			</text>
			<uni-icon type="arrowdown" size="12"></uni-icon>
		</div>
		<div>
			<text class="item f15">
				切换
			</text>
			<uni-icon type="arrowdown" size="12"></uni-icon>
		</div>
		
	</div>
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
	.mall-op{
		background-color: #ffffff;
		height: 90rpx;
		border-bottom: 0.5px solid #dddddd;
		align-items: center;
		padding: 0 40rpx 0 40rpx;
	}
	.item{
		width: 200rpx;
		color: #000000;
	}
</style>
