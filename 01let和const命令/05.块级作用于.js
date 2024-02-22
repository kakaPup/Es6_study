// 变量提升
var temp = new Date()
var aa = false
function f() {
  console.log(temp)
  if (aa) {
    var temp = '111'
  }
}
f()
// 原意f方法内打印的外部的temp,但内部中存在了变量提升，导致没有声明前就使用temp,存在变量提升，导致temp的值为undefined

// for循环中的局部变量转化为全局变量
let ab = 0
for (var i = 0; i < 10; i++) {
  ab += i
}
console.log(i) //为10 循环结束后，i变量并没有消失，而是转化为全局变量

// 块级作用于允许任意嵌套
