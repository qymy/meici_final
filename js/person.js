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
	$(".change").on("click","input",function(){
		if($(this).prop("checked")==true){
			var curTxt=$(this).parent().siblings("span").html();
			console.log(curTxt);
			$(".edu").find("span").html(curTxt);
			$(this).parents("li").addClass("on").siblings().removeClass("on");
			$(".bg").animate({"opacity":"0"},300,function(){
				$(".bg").hide();
			});
			$(".change").animate({"opacity":"0"},300,function(){
				$(".change").hide();
			});
		}
	})
	$(".area").on("click",function(){
		location.href="city.html";
	})
	$(".edu").on("click",function(){
		$(".bg").show().animate({"opacity":"0.5"},300);
		$(".change").show().animate({"opacity":"1"},300);
	})
})(Zepto)