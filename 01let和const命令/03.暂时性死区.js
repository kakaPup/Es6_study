var temp = 3
if (temp) {
  temp = 123
  // let temp
}
// 当块级作用域内存在变量时，则绑定了该区域的变量，所以赋值在前，声明在后，导致错误
// 这种行为称之为暂时性死区，也就是TDZ temporal dead zone
// 暂时性死区，也表明typeof不再是百分百安全的操作了

try {
  console.log(typeof ttt)
} catch (error) {
  console.log(123)
  console.log(error) // ReferenceError
}
// 报错
let ttt

// 但用typeof比较一个从未声明的变量，反而不会出错

console.log(typeof ads) // undefined

// 在没有let之前，使用typeof是百分百安全的

// 隐蔽的死区
function bar(x = y, y = 2) {
  //ReferenceError: Cannot access 'y' before initialization
  return [x, y]
}
try {
  console.log(bar())
} catch (error) {
  console.log(error)
}
// 因为给x赋值时，y还没有声明

// 如果先声明y，再给x赋值，则不会报错
function bar2(y = 2, x = y) {
  return [x, y]
}
console.log(bar2()) // [2,2]
