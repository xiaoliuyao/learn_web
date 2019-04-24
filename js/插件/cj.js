
//插件初步学习1,
//确定，插件对象calculate成为了全局变量
//js变量的调用，从全局作用域上找查的速度会比在私有作用域里面慢得多得多。所以，我们最好将插件逻辑写在一个私有作用域中。
//方法直接暴露在全局作用域，容易命名冲突且通过作用域查找性能消耗大。
//使用闭包！！！！
// var calculate = {
//     add: function(a,b){
//         return a + b;
//     },
//     minus: function(a,b){
//         return a - b;
//     }
// }
// console.log(calculate.add(2,3));

//添加一个分号，可以防止js合并产生的问题，比如上一个js最后没有分号
;(function(w){
    var calculate = {
        add: function(a,b){
            console.log(a + b);
        }
    }
    window.calculate = calculate;
})(window);     //把window对象作为参数传入，是避免了函数执行的时候到外部去查找。
console.log(calculate);


//普通函数和调用
function print(first,last) {
    console.log(first + '_' + last);
}
print('john',2);

//自执行函数
var p = function(first,last){
    console.log(first + '_' + last);
}(3,'mike');

//自执行函数2,第一对封装成表达式，最后一对()表示执行函数，并且传参
(function(first,last){
    console.log(first + '_' + last);
})(3,'mike');

//自执行函数3,最外面的圆括号将里面整体变为一个表达式，就会立即执行
(function(first,last){
    console.log(first + '_' + last);
}(3,'mike'));