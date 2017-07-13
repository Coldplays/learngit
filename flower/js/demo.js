$(function(){

	// 判断IE浏览器版本
	var browser = navigator.appName 
	var b_version = navigator.appVersion 
	var version = b_version.split(";"); 
	var trim_Version = version[1].replace(/[ ]/g,""); 
	if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0") { 
		alert("摒弃IE6从你我做起"); 
		window.location.href="error.html";
	} 
	/*else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0") { 
		alert("IE 7.0"); 
		window.location.href="http://xxxx.com";
	} 
	else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0") { 
		alert("IE 8.0"); 
	} 
	else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE9.0") { 
		alert("IE 9.0"); 
	} */
	plus();
	elevator();

})
	
// plus模块函数
function plus(){
	$(".plus").hover(function(){
		$(this).next().fadeToggle(300);
	});
}

// 回到顶部函数
function elevator(){
	$(window).scroll(function(){
		if($(this).scrollTop()>200){
			$(".back-to-top").show(500);
		}else{
			$(".back-to-top").hide(500);
		}
	});
	$(".back-to-top").click(function(){
		$("body,html").animate({scrollTop:0},1000);
	});
}

// 导航栏函数
/*function nav(){
	$(window).scroll(function(){
		if($(this).scrollTop()>100){
			$("header nav").css({
				"position" : "fixed",
				"top" : 0,
				"left" : 0
			});
		}else{
			$("header nav").css({"position":"relative"});
		}
	});
}*/