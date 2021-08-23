//编程范式： 命令式编程/声明式编程
//         面向对象编程/函数式编程
const nums = [10, 11, 21, 12, 53, 35, 99];
/*//写法一：
let total = nums.filter(n => n < 50).map(n => n * 2).reduce((pre, n) => pre + n);
console.log(total);*/

//写法二：
let total = nums.filter(function (n) {
  return n < 50;
}).map(function (n) {
  return n * 2;
}).reduce(function (preValue, n) {
  return preValue + n;
}, 0)
console.log(total);

/*
//1.filter函数的使用 [10, 11, 21, 12, 35]
//filter中的回调函数有一个要求： 必须返回一个布尔值
//true:当返回true时，函数内部会自动将这次回调函数的n加入到新的数组中
//false:当返回false时，函数内部会过滤掉这次的n
let newNums = nums.filter(function (n) {
  return n < 50;
})
// console.log(newNums);

//2.map函数的使用 [20, 22, 42, 24, 70]
let new2Nums = newNums.map(function (n) {
  return n * 2;
})
console.log(new2Nums);

//3.reduce函数的使用：对数组中所有的内容进行汇总
let total = new2Nums.reduce(function (preValue, n) {
  return preValue + n;
}, 0)
console.log(total);
//第一次：preValue 0 n:20
//第二次：preValue 20 n:22
//第三次：preValue 42 n:42
//第四次：preValue 84 n:24
//第五次：preValue 108 n:70
//最后结果： 178
*/


/*
//1. 取出所有小于100的数字
let newNums = [];
for (let n of nums) {
  if (n< 100) {
    newNums.push(n);
  }
}
//2. 将所有小于100的数字进行转化： 全部 * 2
let new2Nums = []
for (let n of new2Nums) {
  new2Nums.push(n *2);
}
console.log(new2Nums);
//3. 将所有的了new2Nums数字相加，得到最终的结果
let total = 0;
for (let n of new2Nums) {
  total += n;
}
console.log(total);*/
