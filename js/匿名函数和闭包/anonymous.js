
//普通函数
/*
function box() {
    return 'lee';
}
alert(box());
*/

//匿名函数，没有名字的函数,会报错,无法运行
/*
function(){
    return "Lee";
}*/

// 把匿名函数赋值给变量
/*
var box = function () {
    return 'lee';
};
alert(box);     //打印函数本身
alert(box());
*/



//通过自我执行来执行匿名函数
// function () {
//     return 'lee';
// }();         //会报错

/*
(function () {          //(匿名函数)()，第一个圆括号放匿名函数，第二个圆括号执行
    alert( 'lee');
})();
*/

//把匿名函数自我执行的返回值赋值给变量
/*
var box = (function () {
    return 'lee';
})();
alert(box);
*/

/*alert((function () {
    return 'lee';
})());
*/

// 传参
/*
(function (age) {
    return age;
})(100);
*/




//函数里面放一个匿名函数
/*
function box() {
    return function () {        //闭包
        return 'lee';
    }
}
alert(box());
alert(box()());
var b = box();
alert(b());
*/

// 通过闭包返回局部变量
/*
function box() {
    var age = 18;
    return function () {        //为什么不直接return age,而是通过匿名函数返回，下面累加的例子说明
        return age;
    };
}
alert(box()());
*/

var age =18;        //全局变量
function jia() {
    return age++;
}
console.log(jia());     //18
console.log(jia());     //19
console.log(jia());     //20


function jia1() {
    var age = 18;
    return function () {
        return age++;
    }
}
console.log(jia1()());      //18
console.log(jia1()());      //18
console.log(jia1()());      //18,没有累加，每次都初始化为18


function jia2() {
    var age = 18;
    return function () {
        return age++;
    }
}
var j = jia2();
console.log(j());      //18
console.log(j());      //19
console.log(j());      //20
j = null;       //解除引用，等待回收
console.log(j());       //报错，j is not a function

