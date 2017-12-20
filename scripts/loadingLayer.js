/*提示框整合  2017-12-20*/
/*登录提示*/
var flag=true;
function statusPromptLayer(title,msg,flag){
	var html='';
	html+='<div class="loading-mask"></div>';
	html+='<div class="loading-layer">';
	html+='<div class="loading-layer-close" onclick="closePromptLayer();">';
	html+='<div class="lrmc-content"><a href="javascript:;"></a></div>';
	html+='</div>';
	html+='<div class="title">'+title+'</div>';
	if(!flag){
		html+='<p class="middle">'+msg+'</p>';
		html+='<div class="btn"><a href="javascript:;" onclick="closePromptLayer();">确定</a></div>';
	}else{
		html+='<p class="left">'+msg+'</p>';
		html+='<div class="two-btn">';
		html+='<a href="javascript:closePromptLayer();" onclick="showLogin();">登录</a>';
		html+='<a href="javascript:closePromptLayer();" onclick="showRegister();">注册</a>';
		html+='</div>';
	}
	html+='</div>';
	$("body").append(html);
	setTimeout(function(){
		$(".loading-layer").addClass('on');
	},30)
}
function closePromptLayer(){
	$(".loading-layer").removeClass('on');
	setTimeout(function(){
		$(".loading-mask").remove();
		$(".loading-layer").remove();
	},500)
}
/*外层加载中提示*/
function loadingOut(msg){
	var html='';
	html+='<div class="loading-mask"></div>';
	html+='<div class="loading-out">';
	html+='<div class="img"><img src="images/bg_mascot_loading.gif" alt=""></div>';
	html+='<p>'+msg+'</p>';
	html+='</div>';
	$("body").append(html);
	setTimeout(function(){
		$(".loading-out").addClass('on');
	},30)
}
/*关闭外层加载中提示*/
function closeLoadingOut(){
	$(".loading-out").removeClass('on');
	setTimeout(function(){
		$(".loading-mask").remove();
		$(".loading-out").remove();
	},500)
}
/*内部加载中提示*/
function loadingIn(obj,msg){
	var html='';
	html+='<div class="loading-in">';
	html+='<div class="spinner">';
	html+=' <div class="bounce1"></div>';
	html+=' <div class="bounce2"></div>';
	html+=' <div class="bounce3"></div>';
	html+='</div>';
	html+='<p>'+msg+'</p>';
	html+='</div>';
	$(obj).append(html);
	$(obj).css({
		position:'relative',
	});
}
/*关闭内部加载中提示*/
function closeLoadingIn(obj){
	$(obj).find(".loading-in").remove();
}
