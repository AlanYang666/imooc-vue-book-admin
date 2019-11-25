// 引入 express webStorm settings 查找node 打开启用
const express = require('express')
// 创建 app
const app = express()
// get(path, cb)
app.get('/', function (req, res) {
    // 响应内容
    res.send('hello node')
})
//创建 监听5000端口号的服务器
const server = app.listen(5000, function () {
    // 获取服务器的地址信息
    const { address, port } = server.address();
    // 此打印出现在服务器的控制台中 不在浏览器的控制台
    console.log('HTTP服务启动成功：http://%s%s', address, port)
})
//在项目目录控制台 node app.js 运行服务器
