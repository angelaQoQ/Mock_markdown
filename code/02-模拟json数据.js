// 学生类数据模拟
// 包含: 姓名,年龄,学号,爱好属性   1-20名

// 引入mockjs
const Mock = require('mockjs')

// 准备好一条假数据---->我们的目标数据模板
// status: 200
// stus : [
//   {
//     name: 'xm',
//     age: 10,
//     score: 1
//   },
//   {
//     name: 'xh',
//     age: 20,
//     score: 66
//   }
// ]
// 分析: 
//  1 - 后台返回数据是个数组  模板值要是数组
//  2 - 数组中项是对象        模板值数组中项要是对象
//  3 - 对象属性有要求        


var tplObj = {

  //响应状态码
  'status': 200,

  // stus 值为数组
  'stus|5-10': [{
    'name|2-4': /[\u4e00-\u9fa5]/, //生辰任意内容的字符串
    'age|+1': 1,
    'score|1-100': 100
  }]
}


// 调用mock方法,传入模板
var data = Mock.mock(tplObj)

console.log(data);