
// cookie 的意图是：在本地的客户端的磁盘上以很小的文件形式保存数据。
// cookie 的组成：
// 完整格式为：
// name=value; [expires=date]; [path=path]; [domain=somewhere.com]; [secure]

// 失效时间，访问路径，访问域名，安全设置

// alert(typeof document.cookie);
// document.cookie = "user=xl";     // 已经写入磁盘了，所以没有这句代码后，仍能获取cookie
// alert(document.cookie);


//expires=date 失效时间，如果没有声明，则为浏览器关闭后即失效。
/*
var date = new Date();
date.setSeconds(date.getSeconds() + 4);
// alert(date);
document.cookie = "user=xl;expires=" + date;

alert(document.cookie);
setTimeout(function () {
    alert(document.cookie);
},8000);
*/



// 设置cookie
function setCookie(name, value, expires, path, domin, secure) {
    var cookieName = encodeURIComponent(name) + '=' + encodeURIComponent(value);

    if(expires instanceof Date){
        cookieName += ';expires='+ expires;
    }
    if(path){
        cookieName += ';path=' + path;
    }
    if(domin){
        cookieName += ';domain=' + domin;
    }
    if(secure){
        cookieName += ';secure';
    }
    // alert(cookieName);
    document.cookie = cookieName;
}
// setCookie('user','xl');
var date = new Date();
date.setHours(date.getHours()+1);
setCookie('用户','小刘', date);



// 获取cookie
function getCookie(name) {
    var cookieName = encodeURIComponent(name) + '=';        // 得到含=号的cookieName值
    var cookieStart = document.cookie.indexOf(cookieName);
    if(cookieStart > -1){
        var cookieEnd = document.cookie.indexOf(';',cookieStart);
        if(cookieEnd == -1){        // 以防找不到分号。说明name是cookie的最后一个
            cookieEnd = document.cookie.length;
        }
        var cookieValue = decodeURIComponent(document.cookie.substring(cookieStart+ cookieName.length, cookieEnd));
        alert(cookieValue);
    }
}
getCookie('用户');

// cookie的局限性
//第一：每个特定的域名下最多生成 20 个 cookie（根据不同的浏览器有所区别）。
//第二：cookie 的最大大约为 4096 字节(4k)，为了更好的兼容性，一般不能超过 4095 字节即可
//第三：cookie 存储在客户端的文本文件，所以特别重要和敏感的数据是不建议保存在cookie 的。比如银行卡号，用户密码等




// 其他存储
//IE 提供了一种存储可以持久化用户数据，叫做 userData



//sessionStorage
//（永久保存，保存在缓存里，只有手工删或清理浏览器缓存才可失效）
//通过方法存、删、取
sessionStorage.setItem('user','xiaoliu');
sessionStorage.setItem('password','123456');
sessionStorage.removeItem('user');
alert(sessionStorage.getItem('password'));


//通过属性存、取
sessionStorage.book = '李炎恢';
alert(sessionStorage.book);

