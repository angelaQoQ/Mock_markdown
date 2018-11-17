// // // 准备node服务器
// // const express = require('express')
// // // 引入Mockjs
// // const Mock = require('mockjs')
// // // 实例化express
// // const app = express()
// // // 模拟接口 /test
// // app.get('/test', (req, res) => {
// //   // 写死假数据
// //   // var data = {
// //   //   status: 200,
// //   //   msg: 'success',
// //   //   stuInfo: [{
// //   //       name: 'abc',
// //   //       age: 10,
// //   //       gender: 0
// //   //     },
// //   //     {
// //   //       name: 'abc',
// //   //       age: 10,
// //   //       gender: 0
// //   //     }
// //   //   ]
// //   // }
// //   // mock假数据
// //   //   var data = Mock.mock({
// //   //     'status': 200,
// //   //     'msg': 'success',
// //   //     'resData|10-15': [{
// //   //       'name|2-5': /[\u4e00-\u9fa5]/,
// //   //       'age|+1': 10,
// //   //       'gender|1': ['男', '女']
// //   //     }]
// //   //   })
// //   // res.setHeader('content-type', 'application/json')

// //   // mock数据
// //   // var data = Mock.mock({
// //   //   'status': 200,
// //   //   'msg': 'success',
// //   //   'resData|3-6': [{
// //   //     'name|3-5': /[\u4e00-\u9fa5]/,
// //   //     'age|+1': 10,
// //   //     'gender|1': ['男','女']
// //   //   }]
// //   // })
// //   // ue400-u9fa5
// //   res.setHeader('content-type', 'application/json')
// //   res.end(JSON.stringify(data))
// // })

// // app.listen(3000)



// // 开服务
// const express = require('express')
// const app = express()
// const Mock = require('mockjs')
// app.get('/test', (req, res) => {
//   var data = Mock.mock({
//     'status': 200,
//     'msg': 'success',
//     'stuData|5-10': [{
//       'name|3-5': /[\u4e00-\u9fa5]/,
//       'age|10-15': 15,
//       'gender|1': ['男', '女']
//     }]
//   })
//   res.setHeader('content-type', 'application/json')
//   res.send(data)
// })

// app.listen(3000)
const mock = require('mockjs')

var data = mock.mock({
  // 将value数组中的项(对象) 重复计算1-10次 添加到新数组返回
  'obj|1-10':[
    {
      'score|+1':1
    }
  ]
})
console.log(data);