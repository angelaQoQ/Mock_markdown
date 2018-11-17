// 引进express
const express = require('express');
// 引进mockjs
const Mock = require('mockjs')

// 准备服务对象
const app = express()

// 监听路由
app.get('/', (req, res) => {

  // 准备随机数据
  var data = Mock.mock({
    'list|1-20': [{
      'name|3-5': /[a-z][A-Z]/,
      'age|10-15': 15,
      'gender|1': true,
    }]
  })
  res.end(JSON.stringify(data));
})

// 开启服务
app.listen(3000)