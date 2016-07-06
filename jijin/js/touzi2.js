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


	$("#chongzhiBtn").on("click",function(){
		location.href="chongzhi.html";
	})

	$("#touzi2Back").on("click",function(){
		location.href="touzi2weishiyong.html";
	})
	$("#touziBtn").on("click",function(){
		location.href="tzsuccess.html";
	})
	$("#queding").on("click",function(){
		location.href="touzi2.html";
	})

	$("#resetBtn").on("click",function(){
		location.href="tzshibai.html";
	})
	$("#tzshibaiBack").on("click",function(){
		location.href="touzi2.html";
	})
	$("#chongshi").on("click",function(){
		location.href="touzi2.html";
	})
	$("#addCard").on("click",function(){
		location.href="bangdingbankcard.html";
	})
	$("#bangdingBack").on("click",function(){
		location.href="wodeyinhangka.html";
	})
	$("#chooseBank").on("click",function(){
		location.href="choosebank.html";
	})
	$("#chooseBack").on("click",function(){
		location.href="bangdingbankcard.html";
	})
	$("#compelete").on("click",function(){
		location.href="bangdingbankcard.html";
	})
	$("#bankcardQueding").on("click",function(){
		location.href="touzi2.html";
	})
	$("#bdCardnextBtn").on("click",function(){
		location.href="bangdingbankcardsuccess.html";
	})
	$("#shenfenQueding").on("click",function(){
		location.href="touzi2.html";
	})
	$("#renzheng").on("click",function(){
		location.href="shenfenrenzhengsuccess.html";
	})
	$("#bcCardnextBtn").on("click",function(){
		location.href="bangdingbankcard.html";
	})
	$("#yishenfenBack").on("click",function(){
		location.href="touzi2.html";
	})

	$("#useBtn").on("click",function(){
		location.href="touzi2.html";
	})
})(Zepto)