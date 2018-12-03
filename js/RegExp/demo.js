
/*
var box = new RegExp('Box');
console.log(box);   // /Box/ 两个反斜杠是正则表达式的字面量表示法

var box = new RegExp('Box','g');    //第二个参数是模式修饰符——i:忽略大小写；g:全局匹配；m:多行匹配
console.log(box);   // /Box/g
*/


/*
var box = /Box/;    //使用字面量方式的正则
console.log(box);
*/


//测试正则表达式test()和exec(),是正则表达式的方法

/*
// var pattern = /Box/;
// var pattern = /Box/i;
// var pattern = new RegExp('Box');
var pattern = new RegExp('Box','i');
var str = 'boxx';
console.log(pattern.test(str)); //返回的是布尔值
// alert(/box/i.test(str));

console.log(pattern.exec(str)); //返回的是数组，有就返回数组的值，没有返回null。["box", index: 0, input: "boxx", groups: undefined]
console.log(typeof pattern.exec(str));
console.log(/we/.exec(str));
*/



//String对象提供的4种使用正则表达式的方法——match()\replace()\search()\split()
/*
// var pattern = /Box/;
// var pattern = /Box/i;
var pattern = /Box/ig;
var str = 'This is a box!That is a box';
console.log(str.match(pattern));    //没有返回null，i匹配到第一个字符串返回数组，ig将所有匹配的字符串组合成数组返回
console.log(str.search());  //0，有则返回位置，没有返回-1
console.log(str.replace(pattern,'apple'));  //This is a apple!That is a apple
console.log(str.split(pattern));    // ["This is a ", "!That is a ", ""]
*/



//静态属性，无需声明
/*
var pattern = /Box/i;
var str = 'This is a box!That is a box!';
pattern.test(str);  //必须执行一下静态属性才有效
console.log(RegExp.length);         //2
console.log(RegExp.leftContext);    //This is a
console.log(RegExp.rightContext);   //!That is a box!
console.log(RegExp.lastMatch);      //box，是后面的那个box
*/


//实例属性
/*
var pattern = /Box/i;
console.log(pattern.global);    //是否设置全局，false
console.log(pattern.ignoreCase);    //是否忽略大小写，true
console.log(pattern.multiline);    //是否全局，false
console.log(pattern.source);    //源，Box
*/



// 元字符
// var pattern = /g.ogle/;     //点符号匹配除换行符外的任意一个字符
// var str = 'g4ogle';
// console.log(pattern.test(str));

// var pattern = /g*ogle/;     //g*，表示0个、1个、或者多个g
// var str = 'ggoookgle';
// console.log(pattern.test(str));

// var pattern = /0g+ogle/;     //g+，表示至少1个g
// var str = '0ogle';
// console.log(pattern.test(str));

// var pattern = /go?ogle/;     //g?，表示1个或0个
// var str = 'gooogle';
// console.log(pattern.test(str));

// var pattern = /go{2,4}ogle/;     //o{2,4}，表示匹配2-4次的o
// var str = 'gooogle';
// console.log(pattern.test(str));

// var pattern = /go{2}ogle/;     //o{2}，表示只能2个o
// var str = 'google';
// console.log(pattern.test(str));

// var pattern = /[a-z]oogle/;     //[a-z],26个小写字母，任意一个都可以
// var pattern = /[A-Z]oogle/;     //[A-Z],26个大写字母，任意一个都可以
// var pattern = /[0-9]oogle/;     //[0-9]，任意一个数字
// var pattern = /[0-9]*oogle/;
// var pattern = /[a-zA-Z0-9]oogle/;     //任意一个数字或字母
// var pattern = /[^0-9]oogle/;     //不在0-9中的任意字符
// var str = '12oogle';
// console.log(pattern.test(str));


// var pattern = /^[0-9]+oogle/;     //这个^，是加在/后面的，表示从头匹配
// var str = '12oogle';
// console.log(pattern.test(str));

// var pattern = /\woogle/;     //\w——[a-zA-Z0-9]
// var pattern = /\Woogle/;     //\W——[^a-zA-Z0-9]
// var str = '2oogle';
// console.log(pattern.test(str));


// var pattern = /^google$/;     //$表示结束的匹配
// var str = 'google';
// console.log(pattern.test(str));

// var pattern = /google|baidu|bing/;     //|表示或
// var str = 'bing is search engine';
// console.log(pattern.test(str));

// var pattern = /(google){2,5}/;     //()分组，表示一个整体，表示google的2-5次
// var str = 'googlegoogle';
// console.log(pattern.test(str));

// var pattern = /8(.*)8/;
// var str = 'bing is search 8engine8';
// document.write(str.replace(pattern,'<strong>$1</strong>')); //$1表示匹配到的内容


var carIdReg = /[a-z0-9]{32}/;  //carId的正则表达式
var str = 'bcf8f10ba1e311e8bA4e00163e0abdfd';
console.log(carIdReg.test(str));


var isPhone = /1\d{10}/g;
var str2 = '车况很好，详情请联系13847719440.';
console.log(isPhone.test(str2));


var imgSrc = '/pages/images/3.png';
imgSrc = 'https://www.hishop.com.cn/uploads/allimg/180504/21708-1P5041J450353.jpg';
var isImgSrc = /^http/i;
console.log(isImgSrc.test(imgSrc));



var str = '快来找车的的空军的飞机13855996325，kdflkdjdkjdkjjk,526899365，2018年产';
var reg1 = /\d{6,}/g;       // qq号的正则
var reg2 = /[a-zA-Z]{6,20}/g;
console.log(str.replace(reg1, '').replace(reg2, ''));


var b = '%E7%9B%AE%E5%89%8D%E6%82%A8%E5%9F%B9%E7%8F%8D%E5%AB%82%E5%AD%21';
var c=/%AF/;
console.log(c.test(b));



var c = '%25';
console.log(decodeURIComponent(c));