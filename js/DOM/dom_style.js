
window.onload = function () {
    //检测浏览器是否支持 DOM1 级 CSS 能力或 DOM2 级 CSS 能力
    console.log('DOM1 级 CSS 能力：' + document.implementation.hasFeature('CSS', '2.0'));
    console.log('DOM2 级 CSS 能力：' + document.implementation.hasFeature('CSS2', '2.0'));


    var div1 = document.getElementById('div1');
    // alert(div1.style);//[object CSSStyleDeclaration]
    console.log(div1.style.height);
    console.log(div1.style.color);
    console.log(div1.style.fontSize);


    // div1.style.cssFloat = 'right';      //IE8及以下不支持cssFloat
    div1.style.styleFloat = 'right';       //IE8及以上支持


    //。。。
};