function initUse (Vue) {
  // plugin 即 loadingPlugin对象
  Vue.use = function (plugin) {
    // 获取 所有安装的插件
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    // 判断是否已在 安装的插件中
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    // 进入 并处理参数
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
      // 也可以将 loadingPlugin对象 直接用函数来代替
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    // 将loadingPlugin 加入到 安装的组件中
    installedPlugins.push(plugin);
    return this
  };
}