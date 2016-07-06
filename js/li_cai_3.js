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

	//局部滚动
	var main=new iScroll("main",{
		onBeforeScrollStart:function(e){
			//判断如果事件目标是input/select/textarea是否为这些元素
			var tagName=e.target.nodeName.toLowerCase();
			if(tagName!="input" && tagName!="select" && tagName!="textarea" && tagName!="a"){
				//取消默认行为
				e.preventDefault();	
			}		
		}
	});	

	//为返回按钮添加单击事件
	$(".back").on("click",function(){
		location.href="li_cai_1.html";
	})

})(Zepto)