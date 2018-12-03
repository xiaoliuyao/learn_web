
//在jQuery程序中，不管是页面元素的选择、内置的功能函数，都是美元符号“$”来起始的

$(function () {     // 匿名函数
   $('#box').css('color', 'red');
   console.log($);          //返回jQuery对象的内部
   console.log($());        //返回jQuery对象
   console.log($('#box'));  //返回jQuery对象
   console.log($('#box').css('font-size', '50px'));  //返回jQuery对象。所以可以写成连缀的形式

    $('#box').css('color', 'blue').css('font-size', '48px');


    // alert(document.getElementById('box'));
    alert($('#box').get(0));  //返回dom对象

});