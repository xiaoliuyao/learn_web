
// form 对象
window.onload = function () {

    // 获取表单元素
    /*
    var fm = document.getElementById('form1');
    alert(fm);      //[object HTMLFormElement]

    var fm1 = document.forms[0];    //forms集合去获取
    alert(fm1);

    var fm2 = document.forms['myform'];     // 通过form元素里的name属性去获取
    alert(fm2);
    */


    // 1. 提交类
    // 阻止提交
    var fm = document.getElementById('form1');
    // addEvent(fm, 'submit', function (evt) {
    //     preDef(evt);
    // });     // submit必须绑定到form表单元素上，绑定到submit按钮是不起作用的

    // submit()实现提交
    var bt = document.getElementById('button');
    // addEvent(bt, 'click', function () {
    //     fm.submit();        //可以让非submit按钮提交表单
    // });

    // 实现ctrl+enter实现提交
    // addEvent(document, 'keydown', function (e) {
    //     if(e.keyCode === 13 && e.ctrlKey){
    //         fm.submit();
    //     }
    // });

    //在表单中尽量避免使用 name="submit"或 id="submit"等命名，这会和 submit()方法发生冲突导致无法提交。
    // 解决重复提交问题
    // addEvent(fm, 'submit', function (evt) {
    //     preDef(evt);
    //     document.getElementById('sub').disabled = true;     // 这种方法只限于通过提交按钮提交的。提交后，将按钮禁用
    //     setTimeout(function () {
    //         fm.submit();
    //     }, 2000)
    // })

    // var flag = false;       //设置一个监听变量
    // addEvent(fm, 'submit', function (evt) {
    //     preDef(evt);
    //     if(flag == true) return;
    //     flag = true;
    //     setTimeout(function () {
    //         fm.submit();
    //     }, 2000)
    // });


    //2.重置类
    // addEvent(document, 'click', function (evt) {
    //     fm.reset();
    // });


    // 3.获取表单控件
    // console.log(fm.elements);
    // console.log(fm.elements[0]);        // 非表单控件会自动过滤。表单控件：input/textarea/submit/button...
    // console.log(fm.elements['user']);   // 最好是通过name属性来获取

    // 4.表单的共有属性
    // console.log(fm.elements['user'].name);   // name
    // console.log(fm.elements['user'].value);   // value属性
    // console.log(fm.elements['user'].type);   // type属性
    // fm.elements['user'].disabled = true;   // 当前字段被禁用


    // 5.共有的表单字段方法，每个表单字段都有两个方法：foucs()和 blur()。
    // fm.elements['user'].focus();        // 将光标聚焦到某个字段
    // fm.elements['user'].blur();        // 将光标聚焦移出


    // 6. 共有的表单字段事件
    // 表单共有的字段事件有以下三种：blur、change、focus
    var user = fm.elements['user'];
    // addEvent(user, 'blur', function (evt) {
    //     alert('blur');
    // });
    // addEvent(user, 'change', function (evt) {
    //     alert('change');     //对于<input>和<textarea>元素，在改变 value 并失去焦点时触发；对于<select>元素，在改变选项时触发
    // });
    addEvent(user, 'focus', function (evt) {
        alert('focus');
    });




};
