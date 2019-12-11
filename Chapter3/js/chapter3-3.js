ASSET_TYPES.forEach(function (type) {
  // type = 'component' 执行 Vue.component()
  // 匹配 id='Test' definition为参数对象
  Vue[type] = function (
    id,
    definition
  ) {
    // 未进入
    if (!definition) {
      return this.options[type + 's'][id]
    } else {
      // 由于 type = 'component' 进入 Vue组件名称校验方法
      if (type === 'component') {
        validateComponentName(id);
      }
      // 下方 isPlainObject(obj)方法 判断是否为纯对象
      if (type === 'component' && isPlainObject(definition)) {
        // 再次处理组件名称
        definition.name = definition.name || id;
        // 通过extend()初始化为 Test组件 返回
        definition = this.options._base.extend(definition);
      }
      // 未进入
      if (type === 'directive' && typeof definition === 'function') {
        definition = { bind: definition, update: definition };
      }
      // this.options.compoents.Test = Test组件
      this.options[type + 's'][id] = definition;
      return definition
    }
  };
});

/**
   * Get the raw type string of a value, e.g., [object Object].
   */
  var _toString = Object.prototype.toString;

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  function isPlainObject (obj) {
    return _toString.call(obj) === '[object Object]'
  }