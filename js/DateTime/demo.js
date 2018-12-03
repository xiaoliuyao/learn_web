
/*
var date1 = new Date();
alert(date1);       //不同浏览器不同


//Date.parse()和Date.UTC()：静态方法,都返回毫秒数

alert(Date.parse('4/12/2018'));  //返回毫秒数1523462400000

*/


// var date1 = new Date(1523462400000); //直接传入毫秒数。new Date('1523462400000')提示Invalid Date
// alert(date1);

// var date1 = new Date('2018-04-30'); //乱写字母、超出天数会提示无效日期Invalid Date
// alert(date1);

// alert(Date.UTC(2007,10));   //返回毫秒数

//UTC世界协调时间，下面的因我们处在东八区，加8个小时的时间
// var date1 = new Date(Date.UTC(2007,10,2,10,10,20)); //Fri Nov 02 2007 18:10:20 GMT+0800 (中国标准时间)
// alert(date1);


/*
// 通用方法
var box = new Date(2018,6,12,11,20,30);
alert(box);
alert('toString:'+box.toString());  //Thu Jul 12 2018 11:20:30 GMT+0800 (中国标准时间)
alert('toLocaleString:'+box.toLocaleString());  //2018/7/12 上午11:20:30
alert('valueOf:'+box.valueOf());    //1531365630000

*/


/*
// 日期格式化方法
var box = new Date(2018,6,12,11,20,30);
alert(box.toDateString());  //Thu Jul 12 2018
alert(box.toTimeString());  //11:20:30 GMT+0800 (中国标准时间)
alert(box.toLocaleDateString());    //2018/7/12
alert(box.toLocaleTimeString());    //上午11:20:30
alert(box.toUTCString());   //Thu, 12 Jul 2018 03:20:30 GMT
*/



var box = new Date(2018,8,12,11,20,30);
console.log(box.getTime()); //1531365630000
console.log(box.getFullYear()); //2018
console.log(box.getMonth());
console.log(box.getDate());
console.log(box.getDay());      //返回星期几，0表示星期日，6表示星期六。
console.log(box.getHours());
console.log(box.getMinutes());
console.log(box.getSeconds());

// 以上方法都可以加UTC,如：
console.log(box.getUTCHours()); //3

// 以上方法get改为set，就是设置日期或时间，返回的是毫秒
console.log(box.setMonth(9));   //1539314430000





