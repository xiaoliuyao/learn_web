

//Ajax 技术核心是 XMLHttpRequest 对象(简称 XHR)
// （IE5 和 IE6 使用 ActiveXObject）。



// var xhr = new XMLHttpRequest();
// alert(xhr);
// alert(typeof xhr);

/*
function createXHR() {
    if (typeof XMLHttpRequest != 'undefined') {
        return new XMLHttpRequest();
    } else if (typeofActiveXObject != 'undefined') {
        var versions = [
            'MSXML2.XMLHttp.6.0',
            'MSXML2.XMLHttp.3.0',
            'MSXML2.XMLHttp'
        ];
        for (var i = 0; i < versions.length; i ++) {
            try {
                return newActiveXObject(version[i]);
            } catch (e) {
                //跳过
            }
        }
    } else {
        throw new Error('您的浏览器不支持 XHR 对象！');
    }
}
var xhr = new createXHR();
*/

// xhr.open('get', 'demo.php', false);     // 警告：主线程中同步的 XMLHttpRequest 已不推荐使用，因其对终端用户的用户体验存在负面影响。
// 意思是不建议使用同步方式，改为异步true
// xhr.open('get', 'demo.txt', false);
// xhr.send();
// console.log(xhr.responseText);        // 同步的时候可以获取到，若是异步则可能报错

window.onload = function(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {  // 要写到上面
        console.log(xhr.readyState);
        // 0: 请求未初始化
        // 1: 服务器连接已建立
        // 2: 请求已接收
        // 3: 请求处理中
        // 4: 请求已完成，且响应已就绪
        if(xhr.readyState===4 && xhr.status===200){
            var p = document.createElement('p');
            p.innerHTML = xhr.responseText;
            document.body.appendChild(p);
        }
    };
    xhr.open('get', 'demo.txt', false);
    xhr.send();
};

// Chrome未通过localhost打开就会报错，Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https. 还有
// Uncaught DOMException: Failed to execute 'send' on 'XMLHttpRequest': Failed to load
// 原因很简单，浏览器（Webkit内核）的安全策略决定了file协议访问的应用无法使用XMLHttpRequest对象
