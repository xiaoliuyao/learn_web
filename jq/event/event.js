
$(function () {
    // $('input').bind('click', function () {       //绑定事件
    //     alert('零零');
    // })

    // $('input').bind('mouseover mouseout', function () {     //绑定多个事件
    //     $('#text').html(function (index, html) {
    //         return index + html;
    //     })
    // })


    // $('input').bind({        //通过键值对绑定多个事件
    //     'mouseover': function () {
    //         alert('移入');
    //     },
    //     'mouseout': function () {
    //         alert('移出');
    //     }
    // });
    // $('input').unbind();        //删除所有事件
    // $('input').unbind('mouseover'); //删除指定类型事件


    // function f1() {
    //     alert('f1');
    // }
    // function f2() {
    //     alert('f2');
    // }
    // $('input').bind('click',f1);
    // $('input').bind('click',f2);
    // $('input').unbind('click', f1);     //只删除click里的f1


    //简写事件
    // $('input').click(function (e) {
    //     console.log($(this));
    //     console.log(e);
    // });

    // $(window).resize(function () {
    //     alert('大小改变了');
    // });


    // $('#text').mouseover(function () {
    //     $(this).css('background','green');
    // }).mouseout(function () {
    //     $(this).css('background','red');
    // });

    /*
    $('#text').mouseover(function () {      //移入子节点时会再次触发
        $('.strong1').html(function (index, html) {
            return html + '1';
        })
    });
    $('#text').mouseout(function () {      //移出子节点时会再次触发
        $('.strong1').html(function (index, html) {
            return html + '1';
        })
    });

    $('#text2').mouseenter(function () {      //移入子节点时不会触发
        $('.strong2').html(function (index, html) {
            return html + '1';
        })
    });
    $('#text2').mouseleave(function () {      //移出子节点时不会触发
        $('.strong2').html(function (index, html) {
            return html + '1';
        })
    });
    */
    
    // $('#text2').hover(function () {             //移入移出效果，子节点不会触发
    //     $('.strong1').html('123');
    // }, function () {
    //     $('.strong1').html('321');
    // });

    //toggle()方法已废弃, 可以自己用flag变量实现样式切换
    var flag = 1;
    $('#text2').click(function () {
        if(flag == 1){
            $(this).css('background', 'pink');
            flag = 2;
        } else if(flag == 2){
            $(this).css('background', 'red');
            flag = 3;
        } else {
            $(this).css('background', 'blue');
            flag = 1;
        }
    });



});