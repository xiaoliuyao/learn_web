// export var name = 'Jackson';
// export var age = '50';


// 或是

var name = 'Jackson';
var age = '50';
function add(x, y){
	return x + y;
}
export {name, age, add as plus};
// 优先考虑使用这种写法。因为这样就可以在脚本尾部，一眼看清楚输出了哪些变量
// 可以使用as关键字重命名