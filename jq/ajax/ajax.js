
$(function () {
/*
    $('.load-btn').click(function () {
        // .load()方法是局部方法，因为他需要一个包含元素的 jQuery 对象作为前缀

        // $('.box').load('test.html');    //在Network面板看到，是以GET方法发送的
        // $('.box').load('test.html?name=xiaoliu');    //以GET方法发送的
        // $('.box').load('test.html', {
        //     name: 'xiaoliu'
        // }); //以POST方法发送的
        
        //回调函数
        // responseText（请求返回）、textStatus（请求状态)、XMLHttpRequest（XMLHttpRequest 对象）
        $('.box').load('test.html', function (response, status, xhr) {
            console.log(response);
            console.log(status);    //success
            console.log(xhr);
            //XMLHttpRequest对象属于 JavaScript 范畴，可以调用一些属性
            console.log(xhr.responseText);
            console.log(xhr.status);        //200
            console.log(xhr.statusText);    //OK
        });
    });
    */

	/* 
    $('.load-btn').click(function () {
        //$.get()

        // $.get('test.html', function (response, status, xhr) {
        //     $('.box').html(response);
        // });

        //传参方式（3种方式）：
        // $.get('test.html?name=john', function (response, status, xhr) {
        //     $('.box').html(response);
        // });
        // $.get('test.html', 'name=tom', function (response, status, xhr) {
        //     $('.box').html(response);
        // });
        // $.get('test.html', { name: 'jerry' }, function (response, status, xhr) {
        //     $('.box').html(response);
        // });


        //$.post()

        // $.post('test.html', function (response, status, xhr) {
        //     $('.box').html(response);
        // });
        //传参方式（2种方式）
        // $.post('test.html', 'name=tom', function (response, status, xhr) {
        //     $('.box').html(response);
        // });
        // $.post('test.html', { name: 'jerry' }, function (response, status, xhr) {
        //     $('.box').html(response);
        // });

        // $.post('test.html', { name: 'jerry' }, function (response, status, xhr) {
        //     $('.box').html(response);
        // }, 'text');
        //多了一个第四参数 type，即服务器返回的内容格式：包括 xml、html、script、json、jsonp 和 text
        //第一个参数为必选参数，后面三个为可选参数。
        // $.post('https://test.chebaiyifuwu.com/app/buyClaimCoupon.action', function (response, status, xhr) {
            // console.log(response);
        // },);
		
		//使用$.getScript()方法——特定的情况再加载JS文件
		// $.getScript('test.js');
		
		
		$.getJSON('test.json', function(response, status, xhr){
			if(xhr.status == 200){
				console.log(response);
				console.log(response.info);
				console.log(xhr);
				console.log(xhr.responseText);	//字符串形式的
				console.log(xhr.responseJSON);	//JSON格式的
			}
		});

    });
	*/
	
	
	$('.load-btn').click(function(){
		//$.ajax()是所有 ajax 方法中最底层的方法，所有其他方法都是基于$.ajax()方法的封装。
		// 这个方法只有一个参数，传递一个各个功能键值对的对象
		/* 
		$.ajax({
			url: 'test.json',
			data: {
				name: 'xiaoliu'
			},
			success: function(response){
				$('.box').html(response.info);
			}
		});
		*/
		
	});
	
	/* 
	$('#form1 input[type=button]').click(function(){
		$.ajax({
			url: 'form.php',
			type: 'GET',
			contentType: 'application/x-www-form-urlencoded',
			data: {
				user: $('input[name=user]').val(),
				age: $('input[name=age]').val(),
			},
			success: function(response){
				console.log(response);
			},
			error: function(err){
				console.log(err);
			}
		})
	});
	*/
	//当表单的内容比较多的时候，就需要写很多行的data，很繁琐，用sealize()
	$('#form1 input[type=button]').click(function(){
		$.ajax({
			url: 'form.php',
			type: 'POST',
			contentType: 'application/x-www-form-urlencoded',
			data: $('#form1').serialize(),
			success: function(response){
				console.log(response);
			},
			error: function(err){
				console.log(err);
				alert($('#form1').serialize());
			}
		})
	});
	//表单序列化方法.serialize()，会智能的获取指定表单内的所有元素。
	//转换为字符串形式的键值对，并且还会对url编码。
	
	var obj = {a : 1, b : 2, c : 3};
	var form = $.param(obj);
	alert(form);
	//使用$.param()将对象形式的键值对转为 URL 地址的字符串键值对，可以更加稳定准确的传递表单内容。



});

