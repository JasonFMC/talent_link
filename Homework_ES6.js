// 作业1: Let, Const 和 Var

// 原始代码 (使用 var)
var name = "alice";
if(true){
    var name = "bob";
    console.log(name);
}
console.log(name);

// 重写后的代码 (使用 let 和 const)
const name = "alice";
if(true){
    const name = "bob";
    console.log(name);
}
console.log(name);

// 原因:
// 1. 外层使用 const: name 没有被重新赋值，const 更安全
// 2. 内层使用 const: 块内 name 同样没有重新赋值，且需要与外层隔离
// 3. const 有块级作用域，不会污染外层变量
// 4. var 是函数作用域，会覆盖外层同名变量


// 作业2: 箭头函数 (Arrow Functions)

// 原始函数
function add(a,b){
    return a + b;  
}

// 转换为箭头函数
const add = (a, b) => a + b;

// 箭头函数与常规函数的 this 处理差异:
// 1. 常规函数: this 在运行时确定，取决于调用方式
// 2. 箭头函数: this 在定义时确定，继承外层作用域的 this
// 3. 箭头函数没有自己的 this，不能作为构造函数
// 4. 箭头函数不能使用 arguments 对象

// 作业3: 模板字面量 (Template Literals)

// 原始字符串拼接
let greeting = "Hello," + name + "! welcome to the course";

// 使用模板字面量重写
let greeting = `Hello, ${name}!
Welcome to the course`;

// 模板字面量的优势:
// 1. 更简洁的语法，使用反引号 ` 和 ${} 插值
// 2. 支持多行字符串，无需转义字符
// 3. 可以直接在字符串中换行
// 4. 更易读和维护

// 作业4: 解构赋值 (Destructuring)

const person = {name:"alice", age:20, city:"sydney"};

// 使用解构赋值提取 name 和 age
const {name, age} = person;
console.log(name); // "alice"
console.log(age);  // 20

// 在函数参数中解构对象属性
function greetPerson({name, age}) {
    return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greetPerson(person)); // "Hello, alice! You are 20 years old."

// 解构赋值的优势:
// 1. 简化从对象中提取属性的代码
// 2. 可以在函数参数中直接解构
// 3. 支持重命名和默认值
// 4. 使代码更简洁易读

// 作业5: 默认参数（Default Parameters）

// 计算矩形面积的函数，如果没有提供高度，假设它是正方形
function calculateArea(width, height = width) {
    return width * height;
}

// 使用示例
console.log(calculateArea(5));     // 25 (正方形: 5 * 5)
console.log(calculateArea(5, 3));  // 15 (矩形: 5 * 3)

// 默认参数的优势:
// 1. 提供函数参数的默认值
// 2. 使函数调用更灵活，可选参数
// 3. 减少函数重载的需要
// 4. 提高代码的可读性和易用性


// 作业6: Rest/Spread 运算符

// 原始函数
function sum(a, b) {return a + b;}

// 使用 Rest 运算符创建能接受任意数量参数的函数
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // 15

// 使用 Spread 运算符合并两个数组
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4]

// Rest/Spread 运算符的优势:
// 1. Rest: 将多个参数收集为数组，使函数更灵活
// 2. Spread: 展开数组或对象，便于合并和复制
// 3. 简化数组和对象的操作
// 4. 提高代码的简洁性和可读性