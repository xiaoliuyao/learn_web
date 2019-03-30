
$(function () {
    /*
    $('input').click(function () {
        alert('xxx');
    });
    // 模拟用户点击点击。可以理解为浏览器帮助触发
    $('input').trigger('click');
    */

    //合并写法
    // $('input').click(function () {
    //     alert('xxx');
    // }).trigger('click');

    // trigger()也可以传递数据
    // $('input').click(function(e,data1,data2){
    //     alert(data1 + '|' + data2);         //123|abd
    // }).trigger('click',[123,'abd']);        //这里的中括号不代表数组，而是代表多个数据。

    // $('input').click(function(e,data1,data2,data3){
    //     alert(data1 + '|' + data2 + '|' + data3);
    // }).trigger('click',[123,'abd',[5,6]]);      //传递数组

    // $('input').bind('click', {user: 'xiao'}, function(e,data1,data2,data3){         //bind添加额外数据
    //     alert(data1 + '|' + data2 + '|' + data3 + '|' + e.data.user);
    // }).trigger('click',[123,'abd',[5,6]]);



    //自定义事件，自已起的名字的事件
    // $('input').bind('myEvent', function (e) {
    //     alert(e.type);
    // }).trigger('myEvent');

    //.trigger()方法提供了简写方案，想让某个事件执行模拟用户行为，直接再调用一个
    // 空的同名事件即可。如下：
    // $('input').click(function (e) {
    //     alert(e.type);
    // }).click();     //空的 click()执行的是 trigger()



    //trigger和triggerHandler

    //1.triggerHandler()方法只会影响第一个匹配到的元素，而.trigger()会影响所有
    // $('a').click(function (e) {
    //     alert(e.type);
    // }).trigger('click');         //2个a标签，会弹2次框
    // $('a').click(function (e) {
    //     alert(e.type);
    // }).triggerHandler('click');  //2个a标签，但只会弹1次框

    //2.triggerHandler()方法会返回当前事件执行的返回值，如果没有返回值，则返回undefined；
    //而trigger()则返回当前包含事件触发元素的 jQuery 对象(方便链式连缀调用)
    // alert($('input').click(function (e) {
    //     console.log(e);
    // }).trigger('click'));            //返回jQuery对象，[object Object]，所以可以连缀
    // alert($('input').click(function (e) {
    //     console.log(e);
    // }).triggerHandler('click'));    //undefined

    //3.对于自定义事件，trigger()会冒泡，triggerHandler()不会
    // $('div').bind('myClick', function (e) {
    //     // console.log(e.currentTarget);    //d3\d2\d1
    //     console.log(e.target);      //都是d3
    // });
    // $('.d3').trigger('myClick');         //会冒泡
    // // $('.d3').triggerHandler('myClick');     //不会冒泡



    //命名空间——解决同名同元素绑定多个的事件移除的问题
    // $('input').bind('click.a', function () {
    //     alert('a');
    // });
    // $('input').bind('click.b', function () {
    //     alert('b');
    // });
    // $('input').bind('mouseenter.a', function () {
    //     alert('aa');
    // });
    // $('input').unbind('click.a');       //只解除了click.a事件
    // $('input').unbind('.a');            //解除所有命名为a的事件
    // $('input').trigger('click.a');      //只模拟click.a事件



    // $('input').click(function () {
    //     alert('xx');
    // });
    // $('<input type="button" value="动态添加的按钮" />').appendTo($('.d3'));//放在事件后面，则没有点击事件



    //事件不委托
    // $('button').bind('click', function () {
    //     alert('事件不委托');
    // });
    //事件委托——使用.live()具备动态绑定功能，jQuery1.3 使用，jQuery1.7 之后废弃，jQuery1.9 删除
    // $('button').live('click', function () {
    //     alert('事件委托');
    // });
    //.live()原理就是把 click 事件绑定到祖先元素$(document)上，而只需要给$(document)绑定一次即可，而非 2000 次
    //live()绑定在document上，而点击button其实是冒泡到document上，
    //并且点击document的时候，需要验证e.type和e.target才会触发


    //普通绑定.bind()   普通解绑.unbind()
    //事件委托.live() .delegate()   解除委托.die() .undelegate()

    //新方法
    //on、off和one
    // $('button').on('click', {user:'john'}, function (e) {    //绑定事件，并传入额外数据
    //     // alert('on绑定');
    //     alert(e.data.user);
    // });
    // $('button').on('mouseover mouseout', function (e) {     //绑定多个事件
    //     alert(e.type);
    // });
    // $('input').on({
    //     click: function (e) {
    //         alert('click');
    //     },
    //     dbclick: function (e) {
    //         alert('dbclick');
    //     }
    // })

    //取消默认行为
    // $('form').on('submit', function () {
    //     return false;
    // });     //或
    // $('form').on('submit', false);

    $('input').on('click', function () {
        alert('xx');
    });
    $('input').on('click.cc', function () {
        alert('xxxxx');
    });
    // $('input').off('click');        //解除绑定事件
    $('input').off('click.cc');        //解除绑定事件
    
    //事件委托
    $('.but').on('click', 'button', function () {
        alert('button委托给.but');
    });
    $('<button>后添加的按钮</button>').appendTo($('.but'));   //也绑定了事件

    //移除事件委托
    $('.but').off('click','button');

    //.one()方法，绑定元素执行完毕后自动移除事件，可以方法仅触发一次的事件
    // $('.d3').one('click', function () {
    //     alert('只执行一次');
    // });
    //.one()也可以委托
    $('.but').one('click','button',function () {
        alert('事件委托，只执行一次');
    });


    //以后只使用on() off() one()  !!!!!!!!!



});