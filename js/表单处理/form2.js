
addEvent(window, 'load', function () {
    var fm = document.getElementById('form');
    var user = fm.elements['user'];
    var des = fm.elements['des'];
    // console.log(user.value);
    // console.log(des.value);     //虽然<input>在字面上有 value 值，而<textarea>却没有，但都可以通过 value 获取他们的值。不要使用 getAttribute()获取 value 值
    // console.log(user.defaultValue);
    // console.log(des.defaultValue);  //得到最初的 value 值

    // des.select();       // 文本被选中，并且将焦点设置到文本框中
    // user.setSelectionRange(0,2);    // 选择部分文本。选中前2个字符

    // addEvent(user, 'select', function (evt) {
    //     // alert('select');
    //     alert(this.value);
    // });


    // *** 过滤输入
    // 1.禁止或屏蔽非数字键的输入，阻止非数字键的默认行为
    // 2.可以先输入非法字符，然后判断，取消刚刚输入的文本

    // 屏蔽非数字键的输入
    // addEvent(des, 'keypress', function (evt) {
    //     var e = evt||window.event;
    //     // alert(e.charCode);
    //     // alert(String.fromCharCode(e.charCode));     //fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串。
    //     if(!/\d/.test(String.fromCharCode(e.charCode))){
    //         preDef(evt);
    //     }
    // });     //火狐浏览器，常规按键，比如光标键、退格键、删除键等无法使用

    // 以上方法仍然是脆弱的，还要阻止复制粘贴，及中卫输入法下输入文本

    // js提供的6组剪贴版相关事件，还有beforecopy/beforecut/beforepaste
    addEvent(des, 'copy', function (evt) {
        preDef(evt);
    });
    addEvent(des, 'cut', function (evt) {
        preDef(evt);
    });
    addEvent(des, 'paste', function (evt) {
        preDef(evt);
    });


    // 关于中文输入法的屏蔽，可以采用第2种方法（使用正则表达式将非法字符替换为空）
    // addEvent(des, 'keyup', function (evt) {
    //     this.value = this.value.replace(/[^\d]/g, '');
    // })



    // 自动切换焦点
    // 为了增加表单字段的易用性，很多字段在满足一定条件时(比如长度)，就会自动切换到下一个字段上继续填写。
    addEvent(fm.elements['a1'], 'keyup', tabforward);
    addEvent(fm.elements['a2'], 'keyup', tabforward);
    function tabforward(evt){
        //判断当前长度和最大长度是否一致
        if(this.value.length == this.maxLength){
            //遍历所有控件
            for (var i=0; i<fm.elements.length; i++){
                if(fm.elements[i] == this){
                    fm.elements[i+1].focus();
                    return;
                }
            }
        }
    }

});