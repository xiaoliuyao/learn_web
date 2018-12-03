
// 一、window对象(js结构最顶层)
// 有6大属性，它们本身也是对象。其中的document属性，也是对象，它还有5大属性，也是对象


/*
调用
window.属性，window.方法()
或者直接：
属性，方法()
如：
window.alert('lll');
alert('556');
*/


// window的6大属性
console.log(window.document);
console.log(window.frames);
console.log(window.navigator);
console.log(window.location);
console.log(window.history);
console.log(window.screen);


//window的方法
//1.对话框
/*
if(confirm("是否？")){
    alert('yes');
}else {
    alert('no');
}

var p = prompt('请输入姓名：','name');
console.log(p);     //返回输入内容，取消返回null
*/

//2.新建窗口.它可以接受四个参数：1.要加载的 URL；2.窗口的名称或窗口目标；3.一个特性字符串；4.一个表示新页面是否取代浏览器记录中当前加载页面的布尔值。
// open();
// open('http://baidu.com','baidu');
// open('http://baidu.com','_blank');       //_blank,_parent,
// open('http://baidu.com','baidu','width=400,height=300,top=100,left=200');       //_blank,_parent,

// open()返回window对象
// var op = open('http://baidu.com','baidu','width=400,height=300,top=100,left=200');
// console.log(op);


// 3.窗口位置
// alert(screenLeft + ':' + screenTop);        //火狐不支持,会报错，下面代码不执行了
// alert(window.screenLeft + ':' + window.screenTop);        //火狐是undefined
// alert(screenX + ':' + screenY);        //火狐支持
// alert(typeof screenX);      //number类型

// 跨浏览器确定窗口位置
/*
var leftX = typeof window.screenLeft == 'number' ? window.screenLeft : window.screenX;
var leftY = typeof window.screenTop == 'number' ? window.screenTop : window.screenY;
alert(leftX + ':' + leftY);
*/

//4. 窗口尺寸（IE没有提供，但是可通过document.body.clientWidth 和 document.body.clientHeight 获取）
// console.log(window.innerWidth + '-' + window.innerHeight);
// console.log(window.outerWidth + '-' + window.outerHeight);      //outer是加了边框的，测试发现包含调试器窗口

// 跨浏览器获取窗口尺寸
/*
var width = window.innerWidth; //这里要加 window，因为 IE 会无效
var height = window.innerHeight;
if (typeof width != 'number') { //如果是 IE，就使用 document
    if (document.compatMode == 'CSS1Compat') {                  //document.compatMode 可以确定页面是否处于标准模式，如果返回 CSS1Compat 即标准模式
        width = document.documentElement.clientWidth;
        height = document.documentElement.clientHeight;
    } else {
        width = document.body.clientWidth;
        height = document.body.clientHeight;
    }
}
*/



// 5 .间歇调用和超时调用

// 超时调用
// setTimeout("alert('123')",1000);        //第一个参数传代码字符串，不推荐

// function time() {
//     alert('123');
// }
// setTimeout(time,1000);        //传入函数名


// setTimeout(function () {        //推荐，扩展性好
//     alert('123');
// },1000);

// var box = setTimeout(function () {      //返回number类型的 ID
//     alert('123');
// },1000);
// // alert(box);
// clearTimeout(box);      //取消超时调用


// 间歇调用(重复不停的调用)
// setInterval(function () {
//     alert('123');
// },1000);


// var box = setInterval(function () {
//     alert('123');
// },1000);
// clearInterval(box);      //没什么意义


// 定时器,从5倒计时到0时候，弹框提醒
// var num = 0;
// var max = 5;
/*
setInterval(function () {
    max--;
    document.getElementById('tm').innerHTML = max;
    if(max == num){
        alert('5秒倒计时结束了');
        clearInterval(this);        //用this是无法取消定时器的
    }
},1000);
*/

/*
//在开发环境下，很少使用真正的间歇调用，因为需要根据情况来取消 ID，并且可能造成同步的一些问题，我们建议不使用间歇调用，而去使用超时调用
var box = setInterval(function () {
    max--;
    document.getElementById('tm').innerHTML = max;
    if(max == num){
        alert('5秒倒计时结束了');
        clearInterval(box);     //可以清除定时器了
    }
},1000);
*/


// 使用超时调用模拟定时器(推荐)
/*
function box() {
    max--;
    document.getElementById('tm').innerHTML = max;
    if(max == num){
        alert('5秒倒计时结束了');
    } else {
        setTimeout(box, 1000);
    }
}
setTimeout(box,1000);
*/




// 二、location对象
// console.log(location);

// location.hash = '#1'; //设置#后的字符串，并跳转

// location.port = 8888; //设置端口号，并跳转
// alert(location.port); //获取当前端口号，
// location.hostname = 'Lee'; //设置主机名，并跳转
// alert(location.hostname); //获取当前主机名，
// location.pathname = 'Lee'; //设置当前路径，并跳转
// alert(location.pathname); //获取当前路径，
// location.protocal = 'ftp:'; //设置协议，没有跳转
// alert(location.protocol); //获取当前协议
// location.search = '?id=5'; //设置?后的字符串，并跳转
// alert(location.search); //获取?后的字符串
// location.href = 'http://www.baidu.com'; //设置跳转的 URL，并跳转
// alert(location.href); //获取当前的 URL



// 获取地址里传递的参数，比如说http://test...../news.html?articleId=1dd2ea4ba9a411e8981&clientId=22f7dfd
/*function getArgs() {
    var argObj = new Object();
    var para = location.search.length > 1 ? location.search.substring(1) : "";
    var params = para.split('&');       //分割成数组 ["articleId=1dd2ea4ba9a411e8981", "clientId=22f7dfd"],没有时结果为[ "" ]
    console.log(params);
    // 循环数组提取出参数名和参数值
    for(var i = 0; i<params.length; i++){
        var single = params[i].split('=');      //继续分割
        argObj[single[0]] = single[1];
    }
    return argObj;      //没有时结果为{ "": undefined }
}*/
function getArgs() {
    var argObj = new Object();
    if(location.search.length <= 1)     //先判断长度
        return argObj;
    var para = location.search.substring(1);
    var params = para.split('&');
    console.log(params);
    for(var i = 0; i<params.length; i++){
        var single = params[i].split('=');
        argObj[single[0]] = single[1];
    }
    return argObj;
}
var pms = getArgs();
console.log(pms);
console.log(pms.articleId);     //没有即为undefined
console.log(pms.clientId);

// 方法
// location.assign('http://www.baidu.com'); //跳转到指定的 URL
// location.reload(); //最有效的重新加载，有可能从缓存加载
// location.reload(true); //强制加载，从服务器源头重新加载
// location.replace('http://www.baidu.com'); //可以避免产生跳转前的历史记录




// 三、history
// 属性
console.log(history.length);

// 方法
function back() { //跳转到前一个 URL
    history.back();
}
function forward() {
    history.forward();
}
function go(num) {
    history.go(num);        //负数返回，整数前进
}




//四、Navigator对象（浏览器检测）
// 获取浏览器名称、插件（plugins 属性）、
for (var i = 0; i < navigator.plugins.length; i ++) {
    document.write(navigator.plugins[i].name + '<br />');
}






