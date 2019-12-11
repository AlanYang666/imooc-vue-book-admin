module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // npm i -D babel-plugin-component
  // 处理 element-ui js和css 按需加载
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
