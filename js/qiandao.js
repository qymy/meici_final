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
	$("#btn_jiang").on("click",function(){
		$(".sucess").show();
		$(".qiandao").hide();
	})
	$(".btn_back").on("click",function(){
		$(".content").hide();
		$(".shadow").hide();
	})
})(Zepto)