;(function($){
	var time=180, timer=null;
	//动态设置html的font-size
	var ini_width=640/2;
	function set_font(){
		var set_scale=$(window).width()/ini_width*100;//ip5下的尺寸正好为2:1 所以设置font-size为100;
		$("html").css("font-size",set_scale);
	}
	$(window).on("resize",function(e){
		set_font();
	})
	$("#num").on("click",function(){
		setTime();
	})
	function setTime(){
		timer=setInterval(function(){
			time--;
			$("#timer").text(time+"秒后重发");
			if(time==0){
				$("#timer").text("获取验证码");
				clearInterval(timer)
			}
		},1000)
	}
	$(".btn").on("tap",function(){
		location.href="for_three.html";
	})
})(Zepto)