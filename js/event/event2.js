

//事件处理三部分组成：对象.事件处理函数=函数
/*
window.onload = function () {
    // document.onclick = function () {
    //     // alert('lele');
    //     alert(this);        //[object HTMLDocument]
    // }
    document.onclick = a;       //在一个对象里，由于作用域的关系，this 代表着离它最近对象。
};

function a() {
    alert(this);
}
*/


//事件对象，我们一般称作为 event 对象，这个对象是浏览器通过函数把这个对象作为参数传递过来的。
window.onload = function () {
    /*document.onclick = function () {
        //arguments对象是所有（非箭头）函数中都可用的局部变量,此对象包含传递给函数的每个参数
        alert(arguments.length);        //1
        alert(arguments[0]);        //[object MouseEvent],鼠标事件对象
        console.log(arguments[0]);      //获取到了这个事件对象，但是不直观，用以下这种方式
    }
    */
    /*document.onclick = function (event) {
        // 直接接收 event 对象，是 W3C 的做法，IE 不支持，IE 自己定义了一个 event 对象，直接在 window.event 获取即可。
        // alert(event);           //IE8及以下是undefined
        // console.log(event);

        var e = event || window.event;      //兼容模式W3C||IE
        // alert(e);
        console.log(e.clientX + ':' + e.clientY);
    }
    */


    // 键盘事件
    // keypress: 按下字符键：字母、数字、特殊字符的，shift\alt\ctrl等等不是
    // 键码：键盘上的任意键
    // 字符编码：键盘上可以输出的字符的键
    // 对数字字母字符集，keyCode 属性的值与 ASCII 码中对应小写字母或数字的编码相同
    /*
    document.onkeydown = function (evt) {
    var e = evt || window.event;
        // alert(e.keyCode);       //keyCode返回键码，所以任意键都有返回的值
        console.log(e);
    }
    */

    /*document.onclick = function (evt) {
        var e = evt || window.event;
        alert(e.target);          //[object HTMLDivElement],可以获取事件的目标,点哪个元素就可获取到哪个元素，IE8及以下不支持
        alert(e.target|| e.srcElement);          //兼容IE


    }*/




    // 事件流包括两种模式：冒泡和捕获。
    // 事件冒泡，是从里往外逐个触发。事件捕获，是从外往里逐个触发。
    document.onclick = function () {
        alert('document');
    };
    document.documentElement.onclick = function () {
        alert('html');
    };
    document.body.onclick = function () {
        alert('body');
    };
    document.getElementById('box').onclick = function () {
        alert('div');
    };
    // document.getElementById('box').getElementsByTagName('input')[0].onclick = function () {
    //     alert('input');
    // };

    // 点击按钮后，依次弹出 input——>div——>body——>html——>document

    // 需求：点击按钮，只触发input绑定的事件
    document.getElementById('box').getElementsByTagName('input')[0].onclick = function (evt) {
        alert('input');
        var e = evt || window.event;

        // 属性
        console.log(e);
        console.log(e.bubbles);     //只读，事件是否冒泡
        console.log(e.detail);     //只读，与事件相关的细节信息
        console.log(e.eventPhase);     //只读，调用事件处理程序的阶段：1 表示捕获阶段，2 表示“处理目标”，3 表示冒泡阶段
        // 上面几个属性IE8及以下不支持

        console.log(e.type);     //只读，事件是否冒泡


        // 方法
        // e.stopPropagation();        // 取消冒泡，IE8及以下不支持
        // e.cancelBubble = true;      // 可以兼容IE8及以下
        stopPro(e);
    };


};
//在阻止冒泡的过程中，W3C 和 IE 采用的不同的方法，那么我们必须做一下兼容。
function stopPro(evt) {
    var e = evt || window.event;
    window.event ? e.cancelBubble = true : e.stopPropagation();
}


