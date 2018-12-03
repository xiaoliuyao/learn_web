
/*
var str = 'wo'; //基本类型值,在栈内存中
var str2 = str; //在栈内存中再生成一个

str2 = 'lalala';    //修改str2不影响str
console.log(str2);
console.log(str);
*/


var obj = {
    color: 'red'
};  //引用类型值
var obj2 = obj;     //引用地址赋给obj2
obj2.quality = 'high';
console.log(obj);   //obj和obj2值是相同的
console.log(obj2);


/*
function box(obj) {     //传递一个引用类型的参数，但是是按值传递的。js没有按引用传参的功能
    obj.name='Lee';
}
var obj = new Object();
box(obj);
alert(obj.name);    //Lee
*/

/*
function box(obj) {
    obj.name='Lee';
    var obj = new Object();//函数内又创建了一个对象
    obj.name='John';        //并没有替换原来的
}
var obj = new Object();
box(obj);
alert(obj.name);    //仍是Lee
*/



// 检测类型
console.log(typeof obj);


//instanceof用来判断是否是什么类型的对象，返回true或false
var str = '123';
console.log(str instanceof String);      // 返回的是false，因为String对象


var box = 'blue';
function setBox(box) {  //通过传参，替换了全局变量，但作用域仍在setBox()中
    alert(box);
}
setBox('red');//red
alert(box);//blue


//块级代码没有作用域，if,for,while
for(var i=1; i<5; i++){     // i是window的属性
    str= '456';
}
console.log(i);
console.log(str);



//变量查询中，访问局部变量要比全局变量更快，因为不需要向上搜索作用域链。


// 回收
var myobj = {
    name: 'Lee'
};
myobj.age = 18;
alert(myobj);

myobj = null;     //将其设置为 null 来释放引用,等待垃圾收集器回收
alert(myobj);

