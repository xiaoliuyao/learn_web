$(function () {
    //创建节点（直接在$()中写入节点）
    // var box = $('<div id="box"></div>');
    //插入节点
    // $('body').append(box);

    //1.内部后面插入节点
    // $('div').append('<strong>加粗</strong>');
    // $('div').append(function (index) {
    //     return '<strong>加粗' + index + '</strong>';
    // });
    // $('div').append(function (index, html) {        //html 是原节点
    //     return '<strong>加粗' + index + '</strong>' + html;
    // });
    // $('strong').appendTo('div');        //移入操作
    // $('<span>dl</span>').appendTo('div');

    //2.内部前面插入节点
    // $('div').prepend('<p>231</p>');
    // $('div').prepend(function (index) {
    //     return '<i>斜体</i>' + index;
    // });
    // $('<i>lean</i>').prependTo('div');

    //3.外部后面插入节点
    // $('div').after('<i>xie</i>');
    // $('div').after(function (index, html) {
    //     return '<i>xie</i>' + index + html;
    // });
    // $('strong').insertAfter('div');
    // $('<span>123</span>').insertAfter('div');

    //4.外部前面插入节点
    // $('div').before('<i>xie</i>');
    // $('div').before(function (index, html) {
    //     return '<i>xie</i>' + index + html;
    // });
    // $('strong').insertBefore('div');
    // $('<span>123</span>').insertBefore('div');


    //5.包裹节点
    // $('strong').wrap('<div class="strong-wrap"><p></p></div>');     //strong元素外面包裹div/p标签
    // $('strong').wrap(function (index) {
    //     return '<i>' + index + '</i>';
    // });
    // $('i').unwrap();    //移除一层指定元素包裹的内容
    // $('div').wrapAll('<strong></strong>');  //将所有div元素包裹到一起

    // $('div').wrapInner('<span>4564</span>');        //向指定元素的子内容包裹一层 html
    // $('div').wrapInner(function (index) {
    //     return '<strong>' + index + '</strong>';
    // });


    //6.其他节点操作
    // $('strong').clone().appendTo('body');
    // clone(true)参数可以为空，表示只复制元素和内容，不复制事件行为。
    // 而加上 true参数的话，这个元素附带的事件处理行为也复制出来。

    // $('strong').remove();
    // $('strong').detach();
    //.remove()和.detach()都是删除节点，而删除后本身方法可以返回当前被删除的节点对象，
    // 但区别在于前者在恢复时不保留事件行为，后者则保留。

    // $('div').empty();       //删除掉节点里的内容，标签还保留


    // $('div').replaceWith('<span></span>');      //将 div 替换成 span 元素
    $('<span></span>').replaceAll('div');           //同上


});