
addEvent(window, 'load', function () {
    var fm = document.getElementById('form');
    var sl = fm.elements['city'];
    //HTMLSelectElement 对象
    // alert(sl);      //[object HTMLSelectElement]
    // alert(sl.options);      //[object HTMLOptionsCollection]

    // sl.multiple = true;     //多选
    // sl.size = 5;        //选择框中可见的行数
    console.log(sl.selectedIndex);      //选中项的索引
    sl.selectedIndex = 2;   // 定位到第3个选项


    //HTMLOptionsCollection 对象
    console.log(sl.options[1].index + '.' + sl.options[1].text + '--' + sl.options[1].value);       //北京--beijing

    // addEvent(sl, 'change', function (evt) {
    //     console.log(this.options[this.selectedIndex].value);
    //
    //     if(this.options[2].selected){       // 判断是否被选中
    //         console.log('right!!!!');
    //     }
    // });



    // 标准DOM 添加option方法
    // var op1 = document.createElement('option');
    // var opv1 = document.createTextNode('深圳');
    // op1.appendChild(opv1);
    // op1.setAttribute('value', 'shenzhen');
    // sl.appendChild(op1);

    // 使用option 构造函数添加option方法
    var op2 = new Option('深圳','shenzhen');
    // sl.appendChild(op2);      // IE8 及以下不支持
    sl.add(op2, 3);     //


    sl.remove(0);   // 移除。
});

function cityChange() {
    console.log('xxxxxx');
}

