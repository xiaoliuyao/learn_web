
//JavaScript 有三种事件模型：内联模型、脚本模型和 DOM2 模型。

// 在内联模型中，事件处理函数是 HTML标签的一个属性，用于处理指定事件。
// 虽然内联在早期使用较多，但它是和 HTML 混写的 ，并没有与 HTML 分离。
function alertBox() {
    alert('lee');
}


// 脚本模型
window.onload = function () {
    var input = document.getElementById('input');
    var iwrap = document.getElementById('input-wrapper');

    // input.onclick = function () {
    //     alert('匿名函数执行');
    // }
    // input.onclick = alertBox;       //赋值方式（赋值的函数名不要跟着括号）,如果加了，就会执行


    // 1、鼠标事件
    // a) 点击类
    // input.onclick = function () {
    //     alert('单击事件');
    // }
    // input.ondblclick = function () {
    //     alert('双击事件');
    // };
    // input.onmousedown = function () {
    //     alert('按下了鼠标还未弹起时触发');
    // };
    // input.onmouseup = function () {
    //     alert('释放鼠标按钮时触发');
    // };

    // b) 移动类
    // input.onmouseover = function () {
    //     alert('移到某个元素上方时触发');
    // };
    // input.onmouseout = function () {
    //     alert('鼠标移出某个元素上方时触发');
    // };
    // input.onmousemove = function () {
    //     alert('鼠标指针在元素上移动时触发');
    // };

    // onmouseenter 和 onmouseover 的区别
    // var time = 0;
    // iwrap.onmouseenter = function(){        //不冒泡：
    //     console.log(++time);
    // };
    // var time1 = 0;
    // iwrap.onmouseover = function(){        //冒泡：在进入该元素时触发,移到子元素上也会触发
    //     console.log(++time1);
    // };

    // onmouseleave 和 onmouseout 的区别
    // var time = 0;
    // iwrap.onmouseleave = function(){        //不冒泡：
    //     console.log(++time);
    // };
    // var time1 = 0;
    // iwrap.onmouseout = function(){        //冒泡：
    //     console.log(++time1);
    // };


    // c) 滚轮类
    // iwrap.onmousewheel = function () {
    //     console.log('wheel');       //在元素上滚动触发
    // }



    // 2、键盘事件
    // onkeydown = function () {
    //     alert('任意键触发');
    // };
    // onkeypress = function () {
    //     alert('字符键触发');
    // };
    // onkeyup = function () {
    //     alert('释放键盘上的键触发');
    // }


    // 3、HTML 事件
    // window.onscroll = function () {
    //     console.log('滚动');      //元素有滚动条时，滚动才会触发
    // };

    // 表单类的
    var form = document.getElementById('form');
    form.onsubmit = function () {       //在<form>元素上触发
        alert('提交按钮被点击时触发');
    };
    form.onreset = function () {        //在<form>元素上触发
        alert('重置按钮被点击时触发');
    };

    // 焦点类的
    var inputT = form.getElementsByTagName('input')[0];
    inputT.onfocus = function () {
        console.log('聚焦');
    };
    inputT.onblur = function () {
        console.log('失去焦点');
    };
    inputT.onchange = function () {
        console.log('当文本框(input 或 textarea)内容改变且失去焦点后触发');
    };
    inputT.onselect = function () {
        console.log('选择一个或多个字符触发')
    };
};


/*
window.onunload = function () {     //IE有效，刷新时会有效果
    alert('页面卸载时刷新');
};
*/


/*
window.onresize = function () {
    console.log('窗口或框架的大小变化时');
};
*/





