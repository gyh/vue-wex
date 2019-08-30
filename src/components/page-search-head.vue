<template name="page-search-head">
	<div class="page-head uni-flex head">
		<image class="logo" src="../../../static/shopLogo.png"></image>
		<view class="search">
			<text class="f15 c-white">搜索商品</text>
		</view>
	</div>
</template>

<script>
	export default {
		name: "page-search-head",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.head{
		background: #FF852A;
	}
	.head .logo{
		height: 30px;
		width: 30px;
	}
	.head .search{
		background: #FF4E22;
		height: 50rpx;
		margin-left: 10px;
		flex-grow: 1;
		vertical-align: middle;
	}
	.head .search text{
		line-height: 50rpx;
		margin-left: 10px;
	}
	
</style>
