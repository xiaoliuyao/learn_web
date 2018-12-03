
window.onload = function () {
    //使用DOM创建1个表格
    /*
    var table = document.createElement('table');
    table.border = '1';
    // table.width = '300';
    table.setAttribute('width','300');

    var cap = document.createElement('caption');
    cap.innerHTML = '人员表';
    table.appendChild(cap);

    var thead = document.createElement('thead');
    table.appendChild(thead);

    var tr = document.createElement('tr');
    var th = document.createElement('th');
    var thText = document.createTextNode('姓名');
    thead.appendChild(tr);
    tr.appendChild(th);
    th.appendChild(thText);

    document.body.appendChild(table);           // 太烦了
    */

    //使用DOM 获取表格元素
    // var table = document.getElementsByTagName('table')[0];
    // console.log(table.children[2].children[0].children[1].innerHTML);       //获取单元格的内容，不清晰，还烦
    // console.log(table.children[0].innerHTML);        //获取caption内容





    // 使用 HTML DOM 来获取表格内容
/*
    var table = document.getElementsByTagName('table')[0];
    console.log(table.caption.innerHTML);       //获取caption内容，清晰，简单
    table.caption.innerHTML = '学生表';
    // alert(table.tHead);     //[object HTMLTableSectionElement]
    // alert(table.tFoot);     //[object HTMLTableSectionElement]
    // alert(table.tBodies);   //[object HTMLCollection]，是一个集合
    console.log(table.tBodies[0]);
    console.log(table.rows);
    console.log(table.tBodies[0].rows[0].cells.length);     //3
    console.log(table.tBodies[0].rows[0].cells[2].innerHTML);       //18

    // 删除方法
    table.deleteCaption();
    // table.deleteRow(1);
    table.tBodies[0].deleteRow(1);
    table.deleteTFoot();
    table.deleteTHead();
*/


    // 创建方法
    var table = document.createElement('table');
    table.border = '1';
    table.width = '300';
    // var b = table.createCaption();   //返回caption的引用
    // alert(b);       //[object HTMLTableCaptionElement]
    table.createCaption().innerHTML = '学生表';
    var thead = table.createTHead();
    var tr1 = thead.insertRow(0);
    tr1.insertCell(0).innerHTML = '姓名';
    tr1.insertCell(1).innerHTML = '性别';
    tr1.insertCell(2).innerHTML = '年龄';     //插入<td> 元素，没有插入<th>的方法。也没有创建<tbody>、<table>的方法，需使用document来创建

    document.body.appendChild(table);

};