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
	//为按钮添加单击事件
	$(".btn").on("click",function(){
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$(this).find("i").css({"-webkit-transform":"translate3d(0,0,0)","-webkit-transfition":"transform 1s"});
		}else{
			$(this).addClass("on");
			$(this).find("i").css({"-webkit-transform":"translate3d(0.2rem,0,0)","-webkit-transfition":"transform 1s"});
		}	
	})
	$(".resetCode").on("tap",function(){
		location.href="denglu.html";
	})
})(Zepto)