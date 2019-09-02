<template>
	<view>
		<scroll-view scroll-y="true">
			<template v-for="item in mallList">
				<page-mall-item></page-mall-item>
			</template>
		</scroll-view>
	</view>
</template>

<script>
	import pageMallItem from '@/components/page-mall-item.vue'
	export default {
		components:{
			pageMallItem
		},
		data() {
			return {
				currentPage: 1,
				mallList:[]
			};
		},
		created() {
			this.getMallList()
		},
		methods:{
			getMallList(){
				console.log('-----------getMallList-------------')
				this.$Http.mallListUrl({
					page:this.currentPage,
					size:10
				}).then(res =>{
					console.log("getMallList",res);
				})
			},
		}
	}
</script>

<style>

</style>
