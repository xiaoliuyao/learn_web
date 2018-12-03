
//构造函数
/*
function Box(name, age) {
    this.name = name;           //实例属性
    this.age = age;
    this.run = function () {    //实例方法
        return this.name + ' is ' + this.age;
    };
};
*/

//原型
// function Box() {}       //函数体内什么都没有
//
// Box.prototype.name = 'Lee';     //原型属性
// Box.prototype.age = 26;
// Box.prototype.run = function () {       //原型方法
//     return this.name + ' is ' + this.age;
// };

// var box = new Box();
// console.log(box.run());

// var box2 = new Box();
// console.log(box.run == box2.run);       //true,如果是构造函数构造出来的，则为false。但在原型中，原型方法的引用地址是相同的

// console.log(box.prototype);         //undefined,访问不到
// console.log(box.__proto__);         //这个属性是一个指针，指向prototype原型对象
// console.log(box.constructor);       //构造属性，可以获取构造函数本身


// console.log(Box.prototype.isPrototypeOf(box));      //true,判断一个对象是否指向了该构造函数的原型对象


// console.log(box2.name);     //Lee
// box2.name = 'Bob';
// console.log(box2.name);     //Bob
// console.log(box2.hasOwnProperty('name'));       //true,判断属性是在实例里还是原型中，实例里有返回 true，否则返回 false
// console.log('name' in box2);            //true,通过 in 来判断实例或原型中是否存在属性





// 使用字面量的方式创建原型对象，这里{}就是对象，new Object就相当于{}
/*
function Box(){};
Box.prototype = {
    name: 'Lee',
    age: 23,
    run: function () {
        return this.name + ' is ' + this.age;
    }
};
var box1 = new Box();
console.log(box1.run());
console.log(box1.constructor);      //不同于上面，不是构造函数本身，而是Object
console.log(box1.constructor == Object);      //true
*/




/*
console.log(String.prototype.add);      //undefined
String.prototype.add = function (newStr) {      //给原生的内置引用类型添加方法
    return this + newStr;
};
console.log('Lee'.add('haha'));     //Leehaha
*/



// 原型的缺点和优点：共享性
/*
function Box(){}
Box.prototype = {
    name: 'Lee',
    age: 23,
    family: ['brother','sister'],       //引用类型的属性
    run: function () {
        return this.name + ' is ' + this.age;
    }
};
var box1 = new Box();
box1.family.push('grandma');
alert(box1.family);     //brother,sister,grandma

var  box2 = new Box();
alert(box2.family);     //brother,sister,grandma  共享带来的麻烦
*/



// 组合构造函数+原型模式, 解决了传参和共享的问题
function Box(name, age) {
    this.name = name;
    this.age = age;
    this.family = ['brother','sister'];
}
Box.prototype = {           //保持共享的用原型
    constructor: Box,
    run: function () {
        return this.name + ' is ' + this.age;
    }
};
var box1 = new Box('Lee',100);
// alert(box1.run());
box1.family.push('grandma');        //brother,sister,grandma
alert(box1.family);
var box2 = new Box('Jack',10);
// alert(box2.run());
alert(box2.family);             //brother,sister


//动态原型模式


//寄生构造函数，其实就是工厂模式+构造函数模式


