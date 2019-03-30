
$(function () {
    // $('#box').css('color','purple');     //添加一个行为, ID选择器
    // $('div').css('color','orange');         //元素选择器
    // $('.box2').css('color','brown');        //类(class)选择器
    // $('#list > li').css('color', 'yellow'); //jQuery 子选择器，兼容了 IE6


    // $('div,li').css('color','red');             //群组选择器
    // $('ul li').css('color','green');             //后代选择器
    // $('*').css('color','blue');             //通配符选择器, 消耗较大，不建议使用

    // 选择器越复杂，字符串解析越慢


    // $("#wrap p").css('color','blue');       //后代选择器
    // $("#wrap").find('p').css('color','blue');       //find()

    // $("#wrap > p").css('color','blue');     //子选择器，只有儿子起作用
    // $('#wrap').children('p').css('color','blue');     //children()

    // $('.wrap-div + p').css('color','red');      //next选择器, 同一级的下一个节点, 若.wrap-div后一个同级节点不是p，则不起作用
    // $('.wrap-div').next('p').css('color','red');      //next()

    // $('.wrap-div ~ p').css('font-size','22px');     //nextAll选择器
    // $('.wrap-div').nextAll('p').css('font-weight','bold');  //nextAll()

    //在 find()、next()、nextAll()和 children()这四个方法中，如果不传递参数，就相当于传递了“*”


    //jQuery 还提供了更加丰富的方法来选择元素
    // $('.wrap-div').prev('p').css('color','yellow');      //prev()
    // $('.wrap-div').prevAll('p').css('color','orange');      //prevAll()
    // $('.wrap-div').siblings('p').css('color', 'pink');


    //属性选择器
    // $('a[title]').css('font-size','24px');
    // $('a[title=123]').css('font-weight','bolder');
    // $('a[title^=1]').css('font-weight','bolder');   //有title属性且属性值开头为1的
    // $('a[title$=6]').css('font-size','24px');   //有title属性且属性值结尾为6的





    //过滤选择器
    //1.基本过滤器
    // $('li:last').css('color','red');     //最后一个元素
    // $('li:first').css('color','red');    //第一个元素
    // $('li:not(.li4)').css('background','#ccc'); //选取class不是li4的
    // $('li:even').css('color','red');        //偶数下标的
    // $('li:odd').css('background','#ccc');        //奇数下标的
    // $('li:eq(2)').css('background','#ccc');     //索引为2的
    // $('li:eq(-2)').css('background','#ccc');     //倒数第2个
    // $('li:gt(2)').css('background','#ccc');  //索引大于2的
    // $('li:lt(2)').css('background','#ccc');     //索引小于2的

    //jQuery 为最常用的过滤器提供了专用的方法，已达到提到性能和效率的作用
    // $('li').first().css('color','red');
    // $('li').last().css('color','red');
    // $('li').eq(2).css('color','red');
    // $('li').not('.li4').css('background','#ccc');

    //2.内容过滤器
    // $('li:contains("列表2")').css('background','#ccc');       //选取含有"列表2"文本的元素
    // $('li:empty').css('background','#ccc');         //不包含子元素或空文本的元素
    // $('ul:has(".li4")').css('font-size','22px');    //子元素含有.li4的元素，选的是ul
    // $('li:parent').css('background','#ccc');    //选取含有子元素或文本的li元素

    //专用方法
    // $('ul').has('.li4').css('font-size','22px');
    // $('li').parent().css('font-size','22px');   //获取父元素
    // $('li').parents().css('font-size','22px');   //获取父元素及祖先元素
    // $('li').parents('ul').css('font-size','22px');   //获取父元素及祖先元素里是ul的

    //3.可见性过滤器
    // $('ul:hidden').show(1000);
    // $('ul:visible').hide(1000);

    //4.子元素过滤器
    // $('li:first-child').css('background', '#ccc');  //每个父元素的第一个li元素
    // $('li:last-child').css('background', '#ccc');  //每个父元素的最后一个li元素
    // $('li:only-child').css('background', '#ccc');  //每个父元素只有一个 li 元素
    // $('li:nth-child(3)').css('background', '#ccc');  //下标从1开始
    $('li:nth-child(3n)').css('border-bottom', '1px dashed #ccc');  //3倍
    // $('li:nth-child(even)').css('border-bottom', '1px dashed #ccc');  //偶数
});