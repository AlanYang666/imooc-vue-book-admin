<template>
  <div id="app">
    <!-- element button组件 -->
    <el-button @click="show">按钮</el-button>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    show() {
      // 全局 提示框
      // this.$message.success('element-ui 提示 success')
      this.$message.info('element-ui 提示 info')
    }
  },
}
</script>

<style>

</style>
