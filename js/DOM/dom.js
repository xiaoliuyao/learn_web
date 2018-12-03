

// DOM(Document Object Modal) 文档对象模型，Document对象

// 节点树

/*  节点分为3类：
    1，元素节点，就是标签
    2，文本节点：测试div
    3，属性节点
*/


// 一、查找元素
/*
// 1、getElementById
var box = document.getElementById('testdiv');       //script在头部加载则返回null，DOM操作必须等html文档加载完毕，才可获取到
alert(box);     //[object HTMLDivElement]

// 获取节点属性
alert(box.tagName);     //DIV
alert(box.innerHTML);     //测试<span>div</span>,获取文本内容，而非文本节点
if(document.getElementById){
    console.log('支持getElementById');
} else {
    console.log('不支持getElementById');
}
*/

/*
window.onload = function () {
    var box = document.getElementById('testdiv');
    alert(box.style.height);
    alert(box.className);
    alert(box.id);
    alert(box.title);
    // 以上是html的属性
};
*/



// 2、getElementsByTagName和getElementsByName
/*
window.onload = function () {
    var box = document.getElementsByTagName('div');     //返回数组
    console.log(box);
    console.log(box[0]);
    console.log(box.item(0));       //实现效果同上，取第一个元素

    var all = document.getElementsByTagName('*');
    console.log(all.length);        //火狐是10，因为firebug打开后，会自动创建一个div. IE也是10，因为文档声明也算了

    var box2 = document.getElementsByName('test');
    alert(box2[0]);     //IE9及以下是undefined
};
*/



// 3、getElementsByClassName
/*
window.onload = function () {
    var box = document.getElementsByClassName('td');        //IE8及以下不支持
    alert(box[0]);
};
*/





// 二、节点属性
window.onload = function () {
    var box = document.getElementById('testdiv');
/*
    //1、基本的3个属性
    console.log(box.nodeName);      //DIV
    console.log(box.nodeType);      //1——1元素节点，2属性节点，3文本节点
    console.log(box.nodeValue);     //null——元素节点没有节点值；文本节点有，就是其文本内容


    //2、层次类的属性
    console.log(box.childNodes);        //获取当前元素节点的所有子节点
    //获取某节点的所有子节点
    for(var i=0; i<box.childNodes.length; i++){
        if(box.childNodes[i].nodeType === 1){
            alert('元素节点：' + box.childNodes[i].nodeName);
        } else if(box.childNodes[i].nodeType === 3){
            alert('文本节点：' + box.childNodes[i].nodeValue);
        }
    }
    box.innerHTML = '测试的<span>DIV</span>';
    box.childNodes[0].nodeValue = '再次测试';
    */


    console.log(box.firstChild);        //获取当前元素节点的第一个子节点
    console.log(box.lastChild);        //获取当前元素节点的最后一个子节点
    var ul = document.getElementById('ul');
    console.log(ul.childNodes);     //共7个子节点，[text, li, text, li, text, li, text]，含有空白字符。不是3个(IE8及以下才是3个)！！！！！！！！

    // 处理空白节点
    var noWhiteNodes = ignoreWhiteNode(ul.childNodes);
    console.log(noWhiteNodes);
    var noWhiteNodes2 = removeWhiteNode(ul.childNodes);
    console.log(noWhiteNodes2);

    console.log('--------------------------------------------');
    console.log(box.ownerDocument);        //返回该节点的文档对象根节点，其实就是 document
    console.log(box.ownerDocument.nodeType);        //9

    console.log('--------------------------------------------');
    console.log(box.parentNode);        //获取当前元素节点的父节点

    console.log(box.lastChild.previousSibling);        //获取同级的前一个节点
    console.log(box.firstChild.nextSibling);        //获取同级的后一个节点

    console.log(box.attributes);        //返回该节点的属性节点集合
    for(var i=0; i<box.attributes.length; i++){
        console.log(box.attributes[i].nodeName + ":" + box.attributes[i].nodeValue);
    }
};


// 忽略空白节点
function ignoreWhiteNode(node) {
    var ret = [];
    for(var i = 0; i < node.length; i++){
        if(node[i].nodeType === 3 && /^\s+$/.test(node[i].nodeValue)){      //判断是否文本节点且节点值是否是空白字符
            continue;
        }else{
            ret.push(node[i]);
        }
    }
    return ret;
}

// 直接移除空白节点
function removeWhiteNode(node) {
    for(var i = 0; i < node.length; i++){
        if(node[i].nodeType === 3 && /^\s+$/.test(node[i].nodeValue)){      //判断是否文本节点且节点值是否是空白字符
            node[i].parentNode.removeChild(node[i]);
        }
    }
    return node;
}






