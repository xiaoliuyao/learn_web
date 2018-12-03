
// 节点操作

/*
window.onload = function () {
    var box = document.getElementById('wrapper');

    // 1.write()
    // document.write('test');     //会覆盖重写

    // 2.createElement()
    var p = document.createElement('p');    //创建一个节点，但未添加到文档中
    //createElement 在创建一般元素节点的时候，浏览器的兼容性都还比较好。但在几个特殊标签上，比如 iframe、input 中的 radio 和 checkbox、button 元素中，
    //可能会在 IE6,7以下的浏览器存在一些不兼容。

    // 3.appendChild()
    box.appendChild(p);     //将新节点添加到某个节点的子节点列表的末尾上

    // 4.createTextNode()
    var text = document.createTextNode('第1条数据');
    p.appendChild(text);

    //5.insertBefore()
    var div2 = document.createElement('div');
    box.parentNode.insertBefore(div2,box);      //2个参数，第1个是要插入的节点，第2个是指定节点；该方法由父节点去调用

    //6.replaceChild()
    var replace = document.createElement('span');
    box.replaceChild(replace,box.firstChild.nextSibling);

    //7.cloneNode()
    var box2 = box.cloneNode();     //1个Boolean参数，默认false，只复制该节点；为true时，则会复制其子孙节点
    box.parentNode.appendChild(box2);

    //8.removeChild()
};
*/


// DOM进阶
//IE不支持Node,我们可以模拟一个类，让IE也支持
// Node 类型
/*
if (typeof Node == 'undefined') { //IE 返回
    window.Node = {
        ELEMENT_NODE : 1,
        TEXT_NODE : 3
    };
}
window.onload = function () {
    alert(Node);        //IE8不支持[object Node]
    alert(Node.ELEMENT_NODE);       //1
    // if(xxx.nodeType === Node.ELEMENT_NODE){}        //判断节点类型，通过英文常量代替数字，数字不好记；但是IE不识别Node
    alert(typeof Node);     //IE是undefined,其他是function
};
*/


// Document 类型
/*
window.onload = function () {
    // alert(document);        //[object HTMLDocument]
    // alert(document.nodeType);        //9
    // alert(document.nodeName);        //#document
    // alert(document.childNodes[0]);        //[object DocumentType], IE8是[object HTMLCommentElement],IE7是[object]
    // alert(document.childNodes[0].nodeType);        //10, IE8及以下是8


    // 获取body标签，比较常用
    console.log(document.getElementsByTagName('body')[0]);
    console.log(document.body);

    //属性
    console.log(document.title);
    console.log(document.URL);

    //对象集合
    console.log(document.anchors);  //获取文档中带name属性的<a>元素集合
    console.log(document.links);    //获取文档中带 href 属性的<a>元素集合
    console.log(document.images);   //获取文档中<img>元素集合
};
*/



// Text 类型
/*
window.onload = function () {
    var w = document.getElementById('wrapper');
    var t1 = document.createTextNode('Mr.');
    var t2 = document.createTextNode('Lee');
    w.appendChild(t1);
    w.appendChild(t2);
    console.log(w.childNodes.length);     //2

    w.normalize();      //合并相邻的文本节点并删除空的文本节点。
    console.log(w.childNodes.length);     //1，但是IE9及以上仍是2

    w.firstChild.splitText(3);        //分离节点
    console.log(w.childNodes.length);     //2，但是IE9及以上是3
    console.log(w.firstChild.nodeValue);

    w.firstChild.deleteData(0,2); //删除从 0 位置的 2 个字符
    w.firstChild.insertData(0,'Hello.'); //从 0 位置添加指定字符
    w.firstChild.replaceData(0,2,'Miss'); //从 0 位置替换掉 2 个指定字符
    w.firstChild.substringData(0,2); //从 0 位置获取 2 个字符，直接输出
    alert(w.firstChild.nodeValue); //输出结果

};
*/



// DOM 扩展
window.onload = function () {
    // alert(document.compatMode);     //CSS1Compat，去掉文档声明那行代码，BackCompat(混杂模式)
    // alert(document.documentElement.clientWidth);


    // document.getElementById('box').scrollIntoView(); //设置该元素节点在可视区域内。测试时IE可以，其他不行
    // var b = document.getElementById('wrapper');
    // console.log(b.children.length);     //3,得到的是有效的子节点，不含空白文本节点


    //DOM操作内容
    var box = document.getElementById('box');
    box.innerText='<p>lala</p>';        //不解析html标签，当作纯文本

    box.innerHTML = '<p>lala</p>';


    // box.outerText='<p>lala</p>';        //直接抹去了id为box的标签，非常危险！！！！！
    // box.outerHTML = '<p>lala</p>';          //直接抹去了id为box的标签，非常危险！！！！！


    //关于最常用的 innerHTML 属性和节点操作方法的比较，在插入大量 HTML 标记时使用 innerHTML 的效率明显要高很多。
    // 因为在设置 innerHTML 时，会创建一个 HTML 解析器。这个解析器是浏览器级别的(C++编写)，因此执行 JavaScript 会快的多。
    // 但，创建和销毁 HTML 解析器也会带来性能损失。最好控制在最合理的范围内
    for (var i = 0; i < 10; i ++) {
        box.innerHTML = '<li>item</li>'; //避免频繁
    }
    //改
    var a;
    for (var i = 0; i < 10; i ++) {
        a = '<li>item</li>'; //临时保存
    }
    box.innerHTML = a;
};




