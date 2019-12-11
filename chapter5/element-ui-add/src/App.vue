<template>
	<div id="app">
		<!-- el-form 表单 属性 -->
		<!-- :model 接收表单数据源{} -->
		<!-- inline 表单横向 行内排列 bool -->
		<!-- :rules 校验规则对象{} -->
		<!-- :validate-on-rule-change 规则改变时是否立马校验 -->
    <!-- status-icon 校验状态图标 -->
    <!-- label-width 单位为px -->
    <!-- label-postion label与表单项的相对位置 需将inline设置为false-->
    <!-- disabled 禁用表单 -->
    <!-- size 控制表单整体大小 -->
    <!-- hide-required-asterisk 隐藏左侧校验的红星 -->
		<el-form style="width:500px" label-width="100px" label-position='top' label-suffix='：' :disabled='false' size='small' hide-required-asterisk
     :inline='false' :model="data" :rules="rules" :validate-on-rule-change='false' ref="myForm" status-icon>
			<!-- el-form-item 表单项 属性 -->
			<!-- label 单项标签说明 -->
			<!-- prop 匹配校验规则对象中的属性 -->
			<el-form-item label="审批人" prop="user">
				<!-- input 输入框 通过 v-model 绑定数据源的属性 -->
				<el-input v-model="data.user" placeholder="审批人"></el-input>
			</el-form-item>
			<el-form-item label="活动区域">
				<el-select style="width:100%" v-model="data.region" placeholder="活动区域">
					<el-option label="区域一" value="shanghai"></el-option>
					<el-option label="区域二" value="beijing"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">查询</el-button>
				<el-button type="primary" @click="addRule">动态添加校验规则</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
/* eslint-disable */

export default {
	name: "app",

	/* 1 基本用法 */
	// data() {
	//   return {
	//     data: {
	//       user: 'sam',
	//       region: '区域二'
	//     }
	//   }
	// },
	
	/* 2 表单验证 */
	/* 表单最大的用处： 1 表单校验 和 2表单全局控制 */
	data() {
		// 自定义validator 3个参数 rule value callback 
		// 一般在工具文件中处理好后rules 由表单组件引入使用 或者mixin处理
		// const userValidator = (rule, value, callback) => {
		// 	if (value.length > 3) {
		// 		callback();
		// 	} else {
		// 		callback(new Error("用户名长度必须大于3"));
		// 	}
    // };
    
		return {
			data: {
				user: "",
				region: ""
			},
			// 规范的校验方式
			rules: {
				// 此处的user 与 el-form-item 中的prop属性一一对应 完成输入时校验
				// 可以用单个对象(单一规则必须输入) 也可以用 数组结构(自定义规则函数)
				user: [
					{
						required: true, // 必须输入项 label左侧有红星
						trigger: "change", // 触发条件 'change' 'blur'
						message: "用户名必须录入" // 错误提示
					},
					// { validator: userValidator, trigger: "change" }
				]
			}
		};
	},
	methods: {
		onSubmit() {
			console.log(this.data);
			/* 方法1 很low 需要大量的校验和判断 不灵活 
			if(!this.data.user){
			  return this.$message.error('用户名不能为空')
			} else if (this.data.user.length > 10) {
			  return this.$message.error('用户名长度不能超过10')
			}
			*/

			// 方法2 推荐 完成表单提交时 整体校验 通过表单组件的validate方法 
			this.$refs.myForm.validate((isValid, errors) => {
				// 可集中处理错误和异常
				console.log(isValid, errors);
			});
		},

		addRule() {
			const userValidator = (rule, value, cb) => {
				if (value.length > 3) {
					cb();
				} else {
          cb(new Error('用户名长度必须大于3'))
				}
      };
      const newUserRule = [
        ...this.rules.user, // 也是数组结构
        {validator: userValidator, trigger: 'blur'}
      ]
      // 可以监听到this.rules 但无法监听到this.rules.user 直接在this.rules.user.push(newUserRule)将无效
      this.rules = {...this.rules, user: newUserRule}
      // this.rules = Object.assign({}, this.rules, {user:newUserRule})
      console.log(this.rules);
		}
	}
};
</script>