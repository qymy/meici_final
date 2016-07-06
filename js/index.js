;(function($){
	//触发动态点击事件
	$("#user").trigger("click");
	//动态设置font-size
	var ini_width=640/2;
	function set_font(){
		var set_scale=$(window).width()/ini_width*100;//ip5下的尺寸正好为2:1 所以设置font-size为100;
		$("html").css("font-size",set_scale);
	}
	$(window).on("resize",function(e){
		set_font();
	})
	//阻止默认行为
	$("body").on("click","a",function(e){
		e.preventDefault();
		//页面跳转
		var jumpName=$(this).attr("href");
		if(jumpName.indexOf("html")!=-1){
			location.href=jumpName;
		};
	})
	//点击切换
	$(".footer").on("click","a",function(e){
		//获取a的href
		var curHref=$(this).attr("href");
		$(curHref).css({
			"left":"0",
			"-webkit-transition":"all 0.3s ease-in-out"
		}).siblings().css({
			"left":"100%",
			"-webkit-transition":"all 0.3s ease-in-out"
		})
		//改变背景图片
		var footer_idx=$(this).index();
		$(this).find("dt").css({
			"background-positionX":"-32px"
		}).parents('a').siblings().find("dt").css({

			"background-positionX":"0"
		})
		var footer_idx=$(this).index();
		changeHeader(footer_idx);
	})
	//点击内容页导航
	$("#subnav").on("click","a",function(e){
		e.preventDefault();
		//获取a的href
		var curHref=$(this).attr("href");
		$(curHref).css({
			"top":"0",
			"-webkit-transition":"all 0.3s ease-in-out"
		}).siblings().css({
			"top":"100%",
			"-webkit-transition":"all 0.3s ease-in-out"
		})
	})

	//改变头部
	function changeHeader(n){
			if(n==3){
				n=2
			}else if(n==2){
				$("header").hide();
				return;
			}
			$("header").eq(n).show().siblings("header").hide();
		
	}
	//点击更改选中项背景对勾绿色
	$(".pro_juan_filter").on("click","li",function(e){
		var state=$(this).find("input").prop("checked");
		if(state==true){
			$(this).find("span").addClass("on");
		}else{
			$(this).find("span").removeClass("on");
		}
	})
	//点击显示遮罩出现筛选按钮
	/*var curFillterIdx=0;
	$("#subnav").on("click","a",function(){
		curFillterIdx=$(this).index();
		//$(".pro_juan_filter").hide().eq(curFillterIdx).show();//让对应的筛选按钮显示
	})*/
	var curLi=$(".pro_juan_filter").eq(0).find("li").size();
	console.log(curLi);
	$(".menu").on('click',function(e){
		$("#cover").toggle();
		if($("#cover").css("display")=="block"){
			$(".pro_juan_filter").css({
				"height":(0.44*curLi)+"rem",
				"top":"0.48rem",
				"-webkit-transition":"all 0.3s ease-in-out"
			})
		}else{
			$(".pro_juan_filter").css({
				"height":"0",
				"top":"0.48rem",
				"-webkit-transition":"all 0.3s ease-in-out"
			})
		}
		
	})


	//加载滑块插件
	$.flow({
		wrapId:"big_footer",//整体盒子id
		/*wrapColor:"#ccc",//wrap北京颜色
		wrapHeight:"50px",//wrap高度*/
		flowId:"flow",//滑块id
		flowColor:"#ED5757",//滑块颜色
		flowHeight:"2px",//滑块高度
		aColor:"#666666",//a字体颜色*/
		aActiveColor:"#ED5757"//点击状态下a的字体颜色
	})
	$.flow2({
			wrapId:"subnav",//整体盒子id
			wrapColor:"#fff",//wrap北京颜色
			wrapHeight:"40px",//wrap高度
			flowId:"flow2",//滑块id
			flowColor:"#ED5757",//滑块颜色
			flowHeight:"2px",//滑块高度
			aColor:"#aaa",//a字体颜色
			aActiveColor:"#ED5757"//点击状态下a的字体颜色		
	})
	//加载轮播插件
	$.autoPlay({
		section:"autoplay",//轮播大盒子id
		pics:"pics",//图片移动盒子id
		dot:"auto_dot",//焦点图盒子id
		dot_style:"cur"//焦点图切换class样式
	})


	//局部滚动
	all_ticket=new iScroll("all_ticket",function(e){
		var tagname=e.target.nodeName.toLowerCase();
		if(tagName!="input"&&tagName!=textarea&&tagName!="select"){
			e.preventDefault();
		}
		all_ticket.refresh();
	})
	all_ticket2=new iScroll("all_ticket2",function(e){
		var tagname=e.target.nodeName.toLowerCase();
		if(tagName!="input"&&tagName!=textarea&&tagName!="select"){
			e.preventDefault();
		}
		all_ticket.refresh();
	})
	all_ticket3=new iScroll("all_ticket3",function(e){
		var tagname=e.target.nodeName.toLowerCase();
		if(tagName!="input"&&tagName!=textarea&&tagName!="select"){
			e.preventDefault();
		}
		all_ticket.refresh();
	})
	botton_detail=new iScroll("botton_detail",function(e){
		var tagname=e.target.nodeName.toLowerCase();
		if(tagName!="input"&&tagName!=textarea&&tagName!="select"){
			e.preventDefault();
		}
		all_ticket.refresh();
	})

	//点击切换登陆状态
	$(".swap").on("tap",function(){
		$(".no_login").toggle();
		$(".yes_login").toggle();
	})
})(Zepto)