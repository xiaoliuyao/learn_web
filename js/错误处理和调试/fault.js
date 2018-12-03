

// window.abc();

// 1、错误处理
// try{
//     window.abc();
//     // var box = x;
// } catch (e) {       // e 表示接收的错误对象
//     // alert(e);
//     if(e instanceof TypeError){      // 更精细地判断错误类型
//         alert(e.name);
//         alert(e.message);
//     }
//
// }
// try 表示尝试执行里面的代码， 如果有错，会执行catch里面的代码
// 特点：
// 1. 可以获取错误信息
// 2. 可以避免浏览器控制台报错
// 3. 可以继续执行下面的代码



// finally 子句
/*
function box() {
    try{
        var b = {};
        window.avd();
    } catch (e) {
        return;
    } finally {
        b = null;
        alert('不管是否产生错误，我都会执行');
    }
}
box();
*/

//可以把这些清理操作放到finally 里



// 抛出错误，说明我们自己无法解决，需要把错误抛出throw new Error
/*
try{
    var b = a;
} catch (e) {
    if(e instanceof ReferenceError){
        throw new Error('引用错误，可能某个变量未声明');
    } else {
        throw new Error('未知错误');
    }
}
*/


// 2、错误事件
// window.addEventListener('error', function (evt) {       // error 事件需写在前面
//     alert(evt);
// }, false);
// var b = x;

// 还有onerror




// 3、使用类型比较
// 相等和全等
// alert(1 == '1');        //true, 相等的是值，类型不用比较
// alert(1 === '1');

// 如果是数字，就打印
var box = 0;
// if(box){        // 0 是数字，但被隐形的转换为false
//     alert(box);
// }

if(typeof box == 'number'){     // 类型相同时，可以不必使用全等
    alert(box);
}

console.error('error');
console.info('message');
console.log('log');
console.warn('warn');



