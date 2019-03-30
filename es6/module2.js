
//为模块指定默认输出
// export default function() {
// 	console.log('指定默认输出');
// }

// export default function notwork() {	//函数名notwork，在模块外部是无效的。加载的时候，视同匿名函数加载。
// 	console.log('指定默认输出');
// }


// 一个模块只能有1个默认输出，也就只能有1个export default
//本质上，export default就是输出一个叫做default的变量或方法
//所以它后面不能跟变量声明语句
// export default var a = 1;	//错误的

//export default命令的本质是将后面的值，赋给default变量，所以可以直接将一个值写在export default之后
// var a = 1;
// export default a;



// export {name, age, plus} from './module.js';	
//先输入后输出，只是相当于对外转发了这两个接口。本模块是不能使用这几个接口的



