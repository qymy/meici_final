;(function($){
	//动态设置html的font-size
	var ini_width=640/2;
	function set_font(){
		var set_scale=$(window).width()/ini_width*100;//ip5下的尺寸正好为2:1 所以设置font-size为100;
		$("html").css("font-size",set_scale);
	}
	$(window).on("resize",function(e){
		set_font();
	})

	//为返回按钮添加单击事件
	$(".back").on("click",function(){
		location.href="aa.html";
	})
	//为立刻投资按钮添加单击事件
	$(".tou_zi_btn").on("click",function(){
		location.href="bb.html";
	})

	//为项目介绍按钮添加单击事件
	$(".jie_shao").on("click",function(){
		location.href="li_cai_2.html";
	})
	//为投资记录按钮添加单击事件
	$(".ji_lu").on("click",function(){
		location.href="li_cai_3.html";
	})

	$(".tou_zi_btn").on("click",function(){
		location.href="touzi2weishiyong.html";
	})

})(Zepto)