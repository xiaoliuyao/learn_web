
$(function () {
    /*
    $('#box').click(function (e) {
        console.log(e);
        console.log(e.type);
        console.log(e.target);      //获取绑定事件的 DOM 元素
        console.log(e.relatedTarget);      //获取移入移出目标点离开或进入的那个 DOM 元素
        console.log(e.currentTarget);      //获取冒泡前触发的 DOM 元素，等同与 this

        //event.target 得到的是触发元素的 DOM，event.currentTarget 得到的是监听元素的DOM
        //box里的span，如果点击的是span标签，target就是span，currentTarget是div
    });

    $('.span').mouseover(function (e) {
        console.log(e.relatedTarget);
    });
    */

    // $('#box').bind('click', 12, function (e) {
    //     console.log(e.data);        //12
    // });
    // $('#box').bind('click', [1,6,'abc'], function (e) {
    //     console.log(e.data[2]);        //abc
    //     console.log(e.timeStamp);
    // });

    // $(document).click(function (e) {
    //     console.log(e.pageX + ':' + e.pageY);       //获取相对于页面原点的水平/垂直坐标
    // });


    //设置滚动条测试
    // $(document).click(function (e) {           //screenY,相对于屏幕；clientY,相对于页面视口
    //     console.log(e.pageY + ',' + e.screenY + ',' + e.clientY);
    // });

    // $(document).mouseup(function (e) {
    //    console.log(e.which);        //获取鼠标的左中右键(1,2,3)，或获取键盘按键
    // });
    // $('input').keyup(function (e) {
    //     console.log(e.which);
    // });



    //冒泡
    // $('span').click(function (e) {
    //     e.stopPropagation();
    //     alert('span');
    // });
    // $('div').click(function (e) {
    //     alert('div');
    // });
    // $(document).click(function (e) {
    //     alert('document');
    // });

    // 点击span区域，连同div，document的点击事件也都触发了

    //禁止默认事件
    // $('a').click(function (e) {
    //     e.preventDefault();
    //     alert('aaa');
    // });

    //禁止表单提交
    // $('form').submit(function (e) {
    //     e.preventDefault();
    // });

    //如果想同时阻止默认行为且禁止冒泡，可以同时写上：event.stopPropagation()和 event.preventDefault()。
    //还有一种简写方案代替，就是直接 return false
    // $('a').click(function () {
    //     return false;
    // });

    $('span').click(function (e) {
        e.stopImmediatePropagation();    //取消事件冒泡，并取消该事件的后续事件处理函数。在这里，弹出span2也被取消了
        alert('span1');
    });
    $('span').click(function () {
        alert('span2');
    });
    $('div').click(function () {
        alert('div');
    });



});