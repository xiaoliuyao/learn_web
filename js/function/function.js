
// 一、声明函数的3种方式
// 普通函数的声明方式
/*
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2,6));



// 使用变量初始化函数
var box = function (num1, num2) {
    return num1 + num2;
}
console.log(box(4,2));



// 使用构造方法,不推荐，会导致2次解析。
var box1 = new Function('num1','num2', 'return num1 + num2');
console.log(box1(1,22));
console.log(typeof box1);
*/




// 二、传递函数
// 函数可以传递函数——把函数的返回值作为参数
/*
function box(sum, num) {
    return sum + num;
}
function sum(num) {
    return num + 10;
}
var r = box(sum(10),20);    //sum(10),这里传递的是函数的返回值
console.log(r);


// 函数可以传递函数——把函数本身作为参数传递
function box1(sum, num) {
    return sum1(num);
}
function sum1(num) {
    return num + 10;
}
var r1 = box1(sum1, 10);
console.log(r1);
*/




// 三、函数内部属性arguments和this
/*function  jie(num) {
    if(num<=1){
        return 1;
    } else {
        return num * jie(num-1);        //4*3*2*1=24, 用到递归,内部使用到自身方法
    }
}*/
/*
function  jie(num) {
    if(num<=1){
        return 1;
    } else {
        return num * arguments.callee(num-1);        //使用arguments.callee，调用自身
    }
}
var r = jie(5);
console.log(r);
*/


/*
window.color = 'red';
function sayColor() {
    alert(this.color);
}
sayColor(); //red，是window对象的color属性

var obj = {
    color: 'blue'
};
obj.saycolor = sayColor;//把函数复制到对象里，成为obj的方法
obj.saycolor(); //blue
*/



// 四、函数属性和方法
/*
function sum(num1,num2) {
    return num1 + num2;
}
function callSum(num1,num2) {       //冒充sum方法
    return sum.apply(this,arguments);
}
var b = callSum(10, 20);
console.log(b);
*/

var color = 'red';
var box = {
    color: 'blue'
};
function sayColor() {
    console.log(this.color);
}
sayColor.call(window);  //冒充window
sayColor.call(this);        //同上
sayColor.call(box);     //冒充box
