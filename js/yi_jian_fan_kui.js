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
		location.href="she_zhi.html";
	})

	//为返回按钮添加单击事件
	$(".ti_jiao_btn").on("click",function(){
		location.href="fan_kui_success.html";
	})

})(Zepto)