<template>
	<div>Componet B
		<button @click="addRouteC">AddRouteC</button>
	</div>
</template>

<script>
/*eslint-disable*/

export default {
	name: "B",
	beforeCreate() {
    console.log("beforeCreate B component");
    // 作为路由组件 可以获取到router和route
    console.log('router',this.$router)
    console.log('route',this.$route)
	},
	methods: {
		addRouteC(){
			// 参数是如 router.js 中的routes 为数组结构
			this.$router.addRoutes(
				[
					{path: '/c', component: () => import('./C'), meta:{title: 'I Am Back'}}
				]
			)
		}
	},
};
</script>

<style lang="scss" scoped>
</style>