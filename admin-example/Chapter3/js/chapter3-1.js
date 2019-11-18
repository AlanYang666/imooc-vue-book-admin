function eventsMixin (Vue) {
  var hookRE = /^hook:/;

  // 3-1 $on 源码
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        // 事件的递归处理 数组情况
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  // 3-1 $emit 源码
  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      // 此处可见 事件名称 必须都用小写来处理
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    // 获取 指定事件下的所有 回调函数
    var cbs = vm._events[event];
    if (cbs) {
      // toArray() 将 伪数组 转为 真数组
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      // 去掉第一个参数(函数名 获取完整的 params)
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      // 执行函数的异常处理
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}