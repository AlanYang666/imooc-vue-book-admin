<template>
	<div>Componet A</div>
</template>

<script>
/*eslint-disable*/

export default {
	name: "A",
	// 全局路由守卫 在 组件生命周期之前执行
	beforeCreate() {
		console.log("beforeCreate A component");
	},
	created() {
		console.log("created A component");
	},
	beforeMount() {
		console.log("beforeMount A component");
	},
	mounted() {
		console.log("mounted A component");
	},
  beforeDestroy() {
    console.log("beforeDestroy A component");
  },
  
	// 局部路由守卫
	beforeRouteEnter(to, from, next) {
    // 此局部路由发生在 beforeCreate之前 所以无发调用this
		console.log("局部守卫-beforeRouteEnter-路由进入之前", to, from);
		next();
	},
	beforeRouteUpdate(to, from, next) {
		console.log("局部守卫-beforeRouteUpdate-路由更新之前-比如参数变化", to, from);
		next();
	},
	beforeRouteLeave(to, from, next) {
		console.log("局部守卫-beforeRouteLeave-路由离开之前-跳转到其他页面时才触发", to, from);
		next();
	}
};
</script>

<style lang="scss" scoped>
</style>