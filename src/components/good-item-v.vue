<template>
	<div class="uni-flex uni-column goods">
		<image class="img" :src="goods.imageUrl"></image>
		<p class="price">￥{{goods.price}}</p>
		<p class="name uni-2-line">{{goods.name}}</p>
	</div>
</template>

<script>
	export default {
		props:{
			
		},
		data() {
			return {
				goods:{
					imageUrl:'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i2/30850268/O1CN01fFkZin1DqmhO6j53K_!!0-saturn_solar.jpg_250x250.jpg_.webp',
					price:"129.00",
					name:"特步男鞋运动鞋2019夏季新款男士跑鞋透气网面鞋秋季休闲跑步鞋子"
				}
			};
		}
	}
</script>

<style scoped>
	.goods{
		width: 150rpx;
	}
	.goods .img{
		height: 150rpx;
		width: 150rpx;
	}
	.goods .name{
		width: 140rpx;
	}
	.goods .price{
	}
</style>
