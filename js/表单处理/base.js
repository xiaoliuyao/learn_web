
// 绑定事件_跨浏览器兼容
function addEvent(obj, type, fn) {
    if(obj.addEventListener){
        obj.addEventListener(type, fn, false);
    } else if(obj.attachEvent){
        obj.attachEvent('on' + type, fn);
    }
}

//阻止默认事件_跨浏览器兼容
function preDef(evt){
    var e = evt || window.event;
    if(e.preventDefault){
        e.preventDefault();
    } else if(e.returnValue){
        e.returnValue = false;
    }
}