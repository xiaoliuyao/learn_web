
// 基本包装类型
// Sting、Boolean、Number：是基本类型，但又是特殊的引用类型，因为可以调用系统内置的方法

/*
var str = 'mk';
console.log(typeof str);
console.log(str.charAt(0));

console.log('str'.substring(0,2));  //直接通过值来调用方法
*/


// 基本类型的值不能给自己创建属性和方法。
/*
var str = 'john';
str.name = 'lee';
str.setAge = function () {
    return 20;
};
console.log(typeof str);
console.log(str.name);  //undefined
str.setAge(); //str.setAge is not a function
*/


// 通过new运算符可以
/*
var str = new String('lee');    //引用对象
str.name = 'john';
str.setAge = function () {
    return 20;
};
console.log(typeof str);    //object，不是string!!!
console.log(str.name);  //john
console.log(str.setAge());      //20
*/




/*
var num = 1000.66;
console.log(num.MAX_VALUE); //undefined
console.log(Number.MAX_VALUE);  //1.7976931348623157e+308,静态属性

// Number对象的方法
console.log(typeof num.toString());
console.log(num.toLocaleString());  //本地形式:1,000.66
console.log(num.toFixed(1));    //小数点保留, 1000.7
console.log(num.toPrecision(2)); //指数或点形式:1.0e+3
console.log(num.toExponential());   //指数形式:1.00066e+3
*/


/*
var str = 'my world';
// String对象的方法
//1、字符类

console.log(str.charAt(1));     //y
console.log(str.charCodeAt(1));     //Unicode 编码: 121
//2、字符串操作
console.log(str.concat('!!','??')); //my world!!??

console.log(str.substring(3,5));    //3-5:wo
console.log(str.slice(3,5));        //3-5:wo
console.log(str.substr(3,5));   //从3开始，选5个:world

console.log(str.substring(3));
console.log(str.slice(3));
console.log(str.substr(3));     //这3个都是world

console.log(str.substring(-3));     //my world——负数返回全部
console.log(str.slice(-3));         //rld——8+（-3）=5，从第5位开始截取
console.log(str.substr(-3));        //rld——8+（-3）=5，从第5位开始截取

//3、位置
var s = 'Captain! My captain!';
console.log(s.indexOf('tain')); //3
console.log(s.lastIndexOf('tain'));     //15

console.log(s.indexOf('a',2)); //从位置2开始搜索，4
console.log(s.lastIndexOf('a',2));     //从位置2开始向前搜索，1
*/


var st = 'my Earth';
// 4、大小写转换
console.log(st.toUpperCase());
console.log(st.toLowerCase());

//5、字符串匹配
console.log(st.match('t'));     //["t", index: 6, input: "my Earth", groups: undefined]
console.log(st.search('E'));    //3
console.log(st.replace('E','D'));   //my Darth
console.log(st.split('t'));     // ["my Ear", "h"]

