
// $(document).ready(function () {
//     // $('#box').html('<p>test</p>');
//     alert($('#box').html());
// });

$(function () {
   // alert($('#box').text());
   // $('#box').text('<em>321</em>');
   //  $('input').val('ce');   //设置表单内容

    //设置属性
    // $('#box').attr('title','title123');
    // alert($('#box').attr('title'));
    // $('#box').attr({
    //     'title': 'title654',
    //     'data': '987',
    //     'class': 'redfont'      //class不建议用attr去加
    // });
    // $('#box').attr('title', function (index) {
    //     return 'title'+index
    // });
    //attr()方法里的 function() {}，可以不传参数。可以只传一个参数 index，表示当前元素的索引(从 0 开始)。
    //也可以传递两个参数 index、value，第二个参数表示属性原本的值

    // $('#box').removeAttr('title');  //删除属性


    // var csss = $('#box').css(['color','width','height']);
    // for(var i in csss){
    //     console.log(i + ':' + csss[i]);
    // }
    // $.each(csss, function (attr, value) {
    //     console.log(attr + ':' + value);
    // })

    // $('#box').css('height', function(value) {       //通过匿名函数计算后的值，避免使用全局变量
    //     return value + 30 + 'px'
    // });
    // $('#box').css({      //设置多个样式
    //     'width': '200px',
    //     'height': '26px',
    //     'background': '#ccc'
    // });

    // $('#box').addClass('red');       //添加样式名称
    // $('#box').addClass('red bggrey');
    // $('#box').removeClass('bggrey');

    // $('#box').click(function () {
    //     $(this).toggleClass('red');     //切换样式
    // });


    // alert($('#box').width());   //number类型的
    // $('#box').width('500px');
    // $('#box').width(function (index, width) {
    //     // console.log(index + ',' + width);
    //     return width + index + 'px';
    // });

                                            //padding, border, margin
    // alert($('#box').height());              //30        30      30
    // alert($('#box').innerHeight());         //40        40      40
    // alert($('#box').outerHeight());         //40        50      50
    // alert($('#box').outerHeight(true));     //40        50      70
    //inner包含padding，outer包含padding+border；outer(true)包含padding+border+margin


    // console.log($('#span').offset());       //含有top/left
    // console.log($('#span').offset().top);   //相对于视口的偏移
    // console.log($('#span').offset().left);

    // console.log($('#span').position());       //含有top/left
    // console.log($('#span').position().top);   //相对于父元素的偏移
    // console.log($('#span').position().left);

    // console.log($(window).scrollLeft());
    // console.log($(window).scrollTop());

    // $(window).scrollTop(100);

});