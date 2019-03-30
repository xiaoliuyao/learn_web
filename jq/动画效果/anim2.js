
$(function () {

    //$(selector).animate(styles,speed,easing,callback)

    // $('input').click(function () {
    //     $('.box').animate({
    //         width: '200px',
    //         height: '160px',
    //         opacity: 0.8,
    //         fontSize: '22px'
    //     }, 1500, function () {
    //         alert('动画执行完毕');
    //     })
    // });
    //CSS 样式使用 DOM 名称（如 "fontSize"）来设置，而非 CSS 名称（"font-size"）。属性名也可用单引号

    //位置移动
    // $('input').click(function () {
    //     $('.box').animate({
    //         left: '300px',
    //         top: '100px'
    //     }, 2000)
    // });

    //jQuery 提供了自定义动画的累加、累减功能
    // $('input').click(function () {
    //     $('.box').animate({
    //         left: '+=100px'
    //     })
    // });


    //自定义列队动画：1.在回调函数中再执行一个动画；2.通过连缀或顺序来实现列队动画。

    //实现先边长，再变高，再变淡，再变字体的效果
    //回调函数的方式非常冗余，易出错
    // $('input').click(function () {
    //     $('.box').animate({
    //         width: '300px'
    //     }, function () {
    //         $(this).animate({
    //             height: '160px'
    //         })
    //     })
    // });

    // 顺序排列
    // $('input').click(function () {
    //     $('.box').animate({ width: '300px' });
    //     $('.box').animate({ height: '180px' });
    //     $('.box').animate({ opacity: 0.8 });
    // });

    //连缀
    // $('input').click(function () {
    //     // $('.box').animate({ width: '300px' }).animate({ height: '180px' }).animate({ opacity: 0.6 });
    //     $('.box').animate({ width: '300px' })
    //         .animate({ height: '180px' })
    //         .animate({ opacity: 0.6 });
    // });

    //若果是不同的元素，相同元素的动画是队列动画，但不同的元素是同步的
    // $('input').click(function () {
    //     $('.box').animate({ width: '300px' });
    //     $('.box2').animate({ height: '200px' });
    //     $('.box').animate({ opacity: 0.5 });
    //     $('.box2').animate({ fontSize: '30px' });
    // });


    //队列动画方法
    // $('input').click(function () {
    //     $('.box').slideUp('slow').slideDown('slow').css('background', 'orange');
    // });
    //.css()方法不是动画方法，会在一开始传入列队之前

    // $('input').click(function () {
    //     $('.box').slideUp('slow').slideDown('slow').queue(function () {
    //         $(this).css('background', 'orange');
    //     }).hide();
    // });  //queue后面的hide方法不会执行了。

    //解决方法：(传递next)
    // $('input').click(function () {
    //     $('.box').slideUp('slow').slideDown('slow').queue(function (next) {
    //         $(this).css('background', 'orange');
    //         next();     //使用 next 参数来实现继续调用列队动画
    //     }).hide(1000);
    // });



    //.stop()方法
    // $('.act').click(function () {
    //     $('.box').animate({
    //         left: '400px'
    //     }, 2000);
    // });
    // $('.stop').click(function () {
    //     $('.box').stop();
    // });

    // $('.act').click(function () {
    //     $('.box').animate({left: '400px'}, 2000)
    //         .animate({top:'300px'}, 1500)
    //         .animate({width: '300px'}, 1500);
    // });
    // //可传递2个参数值，第1个布尔值代表是否清空未执行完的动画队列，第2个是代表是否直接将正在执行的动画跳转到末状态
    // $('.stop').click(function () {
    //     // $('.box').stop();   //如果有列队动画，则停止当前正在执行的动画，然后继续执行后面的动画
    //     // $('.box').stop(true);   //第1个参数为true，停止并清除后面的动画
    //     $('.box').stop(true, true); //第2个参数为true，会直接跳转到正在执行的动画的末尾状态上
    // });


    //.delay()方法，可以设置延迟
    $('.act').click(function () {
        $('.box').delay(1400).animate({left: '400px'}, 1000, 'swing')
            .animate({top:'300px'}, 1500)
            .delay(2000).animate({width: '300px'}, 1500, 'linear');
    });



    //:animated过滤器, 判断出当前运动的动画是哪个元素
    //递归执行自我，无线循环播放
    // $('.box').slideToggle('slow', function () {
    //     $(this).slideToggle('slow', arguments.callee);
    // });
    // $('.find').click(function () {
    //     $(':animated').css('background','green');
    // });



});