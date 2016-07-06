;(function($){
	var n=0, len=$("#pics>li").length;
	$("#pics").on("swipeLeft",function(){
		n++;
		if(n>=len) n=len-1;
		if(n==1){
			$("#jump").css({"background":"#d84e50"});
		}else{
			$("#jump").css({"background":"#2d8fd5"});
		}
		changeImg();
	})
	$("#pics").on("swipeRight",function(){
		n--;
		if(n<=0) n=0;
		if(n==1){
			$("#jump").css({"background":"#d84e50"});
		}else{
			$("#jump").css({"background":"#2d8fd5"});
		}
		changeImg();
	})
	function changeImg(){
		$("#bg>li").eq(n).addClass("on").siblings().removeClass("on");
		$("#pics").animate({"-webkit-transform":"translate3d("+(-n*100)+"%,0,0)"});
	}
})(Zepto)