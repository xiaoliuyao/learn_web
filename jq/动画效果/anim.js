
$(function () {
    // $('.show').on('click', function () {
    //     $('.box').show('fast');
    // });
    // $('.hide').on('click', function () {
    //     $('.box').hide(1000);
    // });

    //show()和hide()都可接收2个参数，第一个是毫秒，第二个是回调函数
    //还提供了三种预设速度参数字符串：slow、normal 和 fast，分别对应 600 毫秒、400 毫秒和 200 毫秒。

    // $('.hide').on('click', function () {
    //     $('.box').hide('normal', function () {
    //         alert('显示完毕！');     //完全隐藏了，才会执行
    //     });
    // });

    //实现“你好吗？”四个字逐个显示出来的效果（即【列队动画】）
    // $('.show').on('click', function () {
    //    $('.test').eq(0).show(500, function () {
    //        $(this).next().show(500);
    //    });
    // });
    //只显示了“你好”，如果有很多的话，就要不停的嵌套

    //列队动画
    // $('.show').on('click', function () {
    //     $('.test').eq(0).show(500, function showTest() {
    //         $(this).next().show(500, showTest);
    //     });
    // });
    //匿名函数给起了一个名字，show()中继续递归调用自身
    //逐渐隐藏
    // $('.hide').on('click', function () {
    //     $('.test').last().hide(500, function hideTest() {
    //         $(this).prev().hide(500, hideTest);
    //     });
    // });

    //还有一种方式：使用 arguments.callee 匿名函数自调用
    // $('.show').on('click', function () {
    //     $('.test').eq(0).show(500, function () {
    //         $(this).next().show(500, arguments.callee);
    //     });
    // });

    //切换显示隐藏
    // $('.toggle').on('click', function () {
    //     $('.box').toggle(200);
    // });



    //滑动、卷动
    // $('.show').on('click', function () {
    //     $('.box').slideDown();
    // });
    // $('.hide').on('click', function () {
    //     $('.box').slideUp();
    // });
    // $('.toggle').on('click', function () {
    //     $('.box').slideToggle(200);
    // });


    //淡入、淡出
    $('.show').on('click', function () {
        $('.box').fadeIn();
    });
    $('.hide').on('click', function () {
        $('.box').fadeOut('slow');
    });
    $('.toggle').on('click', function () {
        $('.box').fadeToggle(200);
    });
    $('.fadeto').on('click', function () {
        $('.box').fadeTo('slow', 0.2);   //0-1直接
    });

    //淡入、淡出、滑动、卷动和显示、隐藏一样，具有相同的参数

});