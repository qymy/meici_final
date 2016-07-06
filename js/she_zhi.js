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
		location.href="cc.html";
	})

	//为检查版本添加单击事件
	$(".check").on("click",function(){
		location.href="ban_ben_geng_xin.html";
	})
	//为意见反馈添加单击事件
	$(".yi_jian_fan_kui").on("click",function(){
		location.href="yi_jian_fan_kui.html";
	})
	//为登录密码添加单击事件
	$(".deng_lu_mi_ma_btn").on("click",function(){
		location.href="deng_lu_mi_ma.html";
	})
	$(".denglu").on("click",function(){
		location.href="shou_shi_mi_ma.html";
	})



})(Zepto)