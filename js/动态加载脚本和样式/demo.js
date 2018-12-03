

//在适时的时候加载相应的脚本

window.onload = function () {
    // alert('demo的js');
};

// 动态加载脚本文件，注意有顺序问题
/*
var flag = true;
if(flag){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'demo2.js';
    document.getElementsByTagName('head')[0].appendChild(script);
}
*/



// 动态加载样式文件，比如说换肤
var flag = true;
if(flag){
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = 'css1.css';
    document.getElementsByTagName('head')[0].appendChild(link);
}
