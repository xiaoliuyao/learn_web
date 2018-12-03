
/*
var person = new Object();
person.name= 'tom';
person.age = 54;
person.run = function () {
    console.log(this.name + ' is ' + this.age);
};
person.run();
*/
//以上是 JavaScript 创建对象最基本的方法，但有个缺点，想创建一个类似的对象，就会产生大量的代码


//可以使用“工厂模式”的方法，这种方法就是为了解决实例化对象产生大量重复的问题
function createPerson(name, age) {
    var obj = new Object();     //创建对象
    obj.name = name;
    obj.age = age;
    obj.run = function () {
        console.log(this.name + ' is ' + this.age);
    };
    return obj;         //必须返回对象引用
};
var person1 = createPerson('jack',26);  //创建1个对象
person1.run();

var person2 = createPerson('tom',56);   //创建另1个对象
person2.run();




// 构造函数（方法）
// 1、构造函数没有new Object，但它后台会自动var obj = new Object();
// 2、没有return
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.run = function () {
        return this.name + ' is ' + this.age;
    };
};
var p1 = new Person('JACK',22);
var p2 = new Person('Tom',33);

// alert(p1.run());
// alert(p2.run());

// 规范：
// 1、函数名第一个字母大写
// 2、必须使用new运算符
// 3、构造函数是要封装起来的，尽量不修改
// alert(p1 instanceof Person);    //true
// alert(p2 instanceof Person);    //true

function Person2(name, age) {
    this.name = name;
    this.age = age;
    this.run = function () {
        return this.name + ' is ' + this.age;
    };
};
var p3 = new Person2('rose',29);
alert(p3 instanceof Person);    //false，可以识别了，因为它是Person2对象的引用

// 构造函数即解决了重复实例化的问题，又解决了对象识别的问题


// 冒充
var o = new Object();
// alert(o.run());         //报错，o.run is not a function
// 正确方式：
Person.call(o, 'Lee', 33);
alert(o.run());     //Lee is 33


// 深入
var p4 = new Person2('rose',29);
console.log(p3.name == p4.name);   //true
console.log(p3.run() == p4.run());   //true

console.log(p3.run == p4.run);      //false,引用地址唯一

