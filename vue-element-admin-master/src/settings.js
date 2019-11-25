module.exports = {
  /**
   * @type {string}
   * @description 站点标题，进入某个页面后，格式为：页面标题 - 站点标题
   */
  title: '学习小慕读书',

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel 右侧设置面板
   */
  showSettings: false,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView 展示小标签
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header 头部固定
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar 侧边栏logo
   */
  sidebarLogo: false,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component. 错误日志组件
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'
}
