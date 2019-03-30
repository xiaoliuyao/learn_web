
$(function(){
	$('#form1').find('input[type=button]').click(function(){
		// alert($('input[name=user]').val().trim());		//去掉两端的空格
		
		/* 
		//遍历数组
		var arr = ['张三','李四','王麻子','袁大头'];
		$.each(arr, function(index, value){			//第1个参数是索引，第2个参数是值
			$('#box').append('<p>' + index + '.' + value + '</p>');
		});
		
		//遍历对象
		var obj = {
			name: 'tom',
			age: 26
		};
		$.each(obj, function(key, value){			//第1个参数是索引，第2个参数是值
			$('#box2').append('<p>' + key + ':' + value + '</p>');
		});
		 */
		 
		
		/* 
		//数据筛选
		var arr = [2, 4, 6 ,99, 34];
		var arrGrep = $.grep(arr, function(ele, index){			//第1个参数是值，第2个参数是索引
			return index < 2;	//返回下标<2的
		});
		alert(arrGrep);
		 */
		
		/* 
		//修改数组
		var arr = ['tom', 'john', 'jack'];
		var newArr = $.map(arr, function(value, index){			//第1个参数是值，第2个参数是索引
			return value.toUpperCase();
		});
		alert(newArr);
		 */
		
	});
});