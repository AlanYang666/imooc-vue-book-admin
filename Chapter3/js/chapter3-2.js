ASSET_TYPES.forEach(function (type) {
  // type为'directive' 执行Vue.directive()
  // id 为指令名称loading   definition为 {update:f} 或 fn ...
  Vue[type] = function (
    id,
    definition
  ) {
    if (!definition) {
      return this.options[type + 's'][id]
    } else {
      /* 未进入 */
      if (type === 'component') {
        validateComponentName(id);
      }
      /* 未进入 */
      if (type === 'component' && isPlainObject(definition)) {
        definition.name = definition.name || id;
        definition = this.options._base.extend(definition);
      }
      // definition 若为 function 
      // 则直接在 bind 组件挂载完成 和 update 组件更新时 触发
      if (type === 'directive' && typeof definition === 'function') {
        definition = { bind: definition, update: definition };
      }
      // this.options.directives.loading = loading指令
      this.options[type + 's'][id] = definition;
      return definition
    }
  };
});