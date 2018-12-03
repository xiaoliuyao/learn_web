
window.onload = function () {

    //一．获取元素CSS 大小
    var box = document.getElementById('box');

    // 获取行内的css大小
    // alert(typeof box.style.width);      //string
    // console.log(box.style.height);      //只能获取行内style

    // 获取计算后的大小
    // var boxstyle = window.getComputedStyle ? window.getComputedStyle(box, null) : null || box.currentStyle;
    // console.log(boxstyle.width);        //没有设置宽高时，IE8及以下返回的是auto，其他都是计算后的值
    // console.log(boxstyle.height);

    // 使用 CSSStyleSheet 对象中的 cssRules(或 rules)属性获取元素大小
    // var sheet = document.styleSheets[0];
    // var rule = (sheet.cssRules || sheet.rules)[0];  //获取第一条规则
    // console.log(rule.style.width);
    // console.log(rule.style.height);

    // 以上3种都不能获取实际大小！！！比如加上了内边距、滚动条、边框之类



    //二．获取元素实际大小
    var box2 = document.getElementById('box2');

    // 获取元素可视区的大小
    // console.log(box2.clientWidth);
    // console.log(box2.clientHeight);
    // console.log(typeof box2.clientHeight);       //number, 但单位是px
        // PS：对于元素的实际大小，clientWidth 和 clientHeight 理解方式如下：
        // 1.边框 和 外边距 不算在clientWidth和clientHeight里；
        // 2.增加滚动条，最终值等于原本大小减去滚动条的大小；
        // 3.增加内边距，最终值等于原本大小加上内边距的大小；

    // 滚动内容的元素大小
    // console.log(box2.scrollWidth);
    // console.log(box2.scrollHeight); //返回了元素大小.如果没有设置任何 CSS 的宽和高度，它会得到计算后的宽度和高度.
        // PS：对于元素的实际大小，scrollWidth 和 scrollHeight 理解如下:
        // 1.增加边框，不同浏览器有不同解释：
        // a) Firefox 和 Opera 浏览器会增加边框的大小
        // b) IE、Chrome 和 Safari 浏览器会忽略边框大小
        // c) IE 浏览器只显示它本来内容的高度
        // 2.增加内边距，最终值会等于原本大小加上内边距大小
        // 3.增加滚动条，最终值会等于原本大小减去滚动条大小。设置overflow: scroll;则内容宽度减小，Chrome减少了14，说明滚动条的宽度是14
        // 4.增加外边距，无变化。

    // 元素实际大小，包含边框、内边距和滚动条
    // console.log(box2.offsetWidth);
    // console.log(box2.offsetHeight);
        //PS：对于元素的实际大小，offsetWidth 和 offsetHeight 理解如下：
        // 1.增加边框，最终值会等于原本大小加上边框大小
        // 2.增加内边距，最终值会等于原本大小加上内边距大小
        // 3.增加外边距，无变化；
        // 4.增加滚动条，无变化，不会减小；


    //三．获取元素周边距离
    //边框
    // console.log(box2.clientTop);
    // console.log(box2.clientLeft);       //左边框和上边框的大小，并没有提供 Right 和 Bottom

    //相对于父元素的位置
    // console.log(box2.offsetTop);
    // console.log(box2.offsetLeft);
    // console.log(box2.offsetParent.tagName);     //获得父元素BODY
    // console.log(document.body.offsetParent);   //都是null
    // console.log(offsetTop(box2));

    //滚动条被隐藏的区域大小
    console.log(box2.scrollTop);
    console.log(box2.scrollLeft);

    box2.scrollTop = 100;


};
//定义一个方法，求出某个元素在页面上的位置（有很多层元素时，要递归）
function offsetTop(element) {
    var top = element.offsetTop;
    var parentE = element.offsetParent;
    while (parentE !== null){
        top += parentE.offsetTop;
        parentE = parentE.offsetParent;
    }
    return top;
}
