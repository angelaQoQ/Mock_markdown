const Mock = require('mockjs')

// var template = {
//   name: 'value1'
// }
var template = {
  name: 'value2'
}
var data = {
  name: 'value1'
}

console.log(Mock.valid(template, data));


// [{
//   path: ['ROOT', 'name'],
//   type: 'value',
//   actual: 'value1',              data中值,真实值
//   expected: 'value2',            template中值,期望值
//   action: 'is equal to',         本次操作, 判断是否相同
//   message: '[VALUE] Expect ROOT.name\'value is equal to value2, but is value1'     真实值value1与期望值value2做比较 , 但是发现value1值与value2不同
// }]