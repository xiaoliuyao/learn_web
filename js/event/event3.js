
/*
// alert(typeof  window.onload);       // object
window.onload = function () {
    alert('box');
};
alert(typeof  window.onload);       // function,如果已经定义了window.onload,就会变为function

//可以加到第一个js文件最后
if(typeof window.onload == 'function'){
    var saved = null;       // 创建保存器，保存之前的 window.onload
    saved = window.onload;
}


window.onload = function () {
    if(saved)saved();       // 执行之前保存的
    alert('mr lee');
};
// 如果有多个js文件，由不同人开发，所以可能出现多个window.onload
// 第一个window.onload被覆盖了

*/


// W3C  事件处理函数
// “DOM2 级事件”定义了两个方法，用于添加事件和删除事件处理程序的操作：
// addEventListener()和 removeEventListener()。所有 DOM 节点中都包含这两个方法。
// 并且它们都接受 3 个参数：事件名、函数、冒泡或捕获的布尔值(true 表示捕获，false 表示冒泡)。

// 1、解决了覆盖的问题
/*
window.addEventListener('load', function () {       //IE8及以下不支持
    alert('john');
}, false);
window.addEventListener('load', function () {
    alert('bob');
}, false);
*/

window.addEventListener('load', function () {
    var box = document.getElementById('box');
    document.body.addEventListener('click', function () {
        alert('body');
    }, false);     //设置成 true，则为捕获
    box.addEventListener('click', function (evt) {
        var e = evt || window.event;
        // alert('div');
        alert(this);        //[object HTMLDivElement]
        e.stopPropagation();
    }, false);
}, false);


// IE8及以下 事件处理函数
/*
window.attachEvent('onload', function () {
    alert('lee');
});
window.attachEvent('onload', function () {
    alert('Mr.lee');
});
window.attachEvent('onload', function () {
    alert('Miss.lee');
});
*/

// IE10 和9 分别弹出 lee——Mr.lee——Miss.lee
// IE8及以下顺序相反

//attachEvent() ： Chrome 、火狐等不支持
