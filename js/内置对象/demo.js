
// Global(全局)对象
// 因为 ECMAScript 没有定义怎么调用 Global 对象，所以，Global.属性或者 Global.方法()都是无效的。Web 浏览器将 Global 作为 window 对象的一部分加以实现


// Global 对象有一些内置的属性和方法：

// 1.URI 编码方法
/*
var url = 'https://baidu.com/';
alert(encodeURI(url));
alert(encodeURIComponent(url)); //https%3A%2F%2Fbaidu.com%2F
*/


// encodeURI()不会对本身属于 URI 的特殊字符进行编码，例如冒号、正斜杠、问号和#号；而 encodeURIComponent()则会对它发现的任何非标准字符进行编码
//URI 方法能够编码所有的 Unicode 字符，而原来的只能正确地编码 ASCII字符。所以建议不要再使用 escape()和 unescape()方法。


//2.eval()方法,接收执行的 JavaScript 代码的字符串
/*
var box = 100;
alert(box);
eval('var box = 100'); //解析了字符串代码
alert(box);
//eval()方法的功能非常强大，但也非常危险(如代码注入)
*/

// console.log(Array);




// Math对象

// 属性
/*
console.log(Math.E);
console.log(Math.LN10);
console.log(Math.LN2);
console.log(Math.LOG2E);
console.log(Math.LOG10E);
console.log(Math.PI);
console.log(Math.SQRT1_2);
console.log(Math.SQRT2);
*/



// 方法
// 1.最值
/*
console.log(Math.max(4,55,78.6,20));
console.log(Math.min(1,5,98,-6));

//2.舍入
console.log(Math.floor(2.56));  //向下
console.log(Math.ceil(2.56));   //向上
console.log(Math.ceil(2.16));
console.log(Math.round(10.56));     //四舍五入
console.log(Math.round(10.16));
*/

//3.随机数
for(var i=0; i<5; i++){
    console.log(Math.random());     //0-1，含小不含大
}

//生成5-10的随机数
for(var i=0; i<5; i++){
    console.log(Math.floor(Math.random() * 6 + 5 ));     //0-1，含小不含大
}


// 4.三角函数
console.log(Math.sin(90*Math.PI / 360));

