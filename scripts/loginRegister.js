$(document).ready(function(){
	// 滚动条
	$(".user-serve-clause").slimScroll({
        height: '320px'
    });
	//登录注册切换
	var loginRegisterMask=$(".login-register-mask");
	loginRegisterMask.find(".title li").on("click",function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(".login-register-content .items").eq($(this).index()).show().siblings().hide();
		if($(this).index()==0){
			loginRegisterMask.find(".line").css("left","50px");
		}else{
			loginRegisterMask.find(".line").css("left","230px");
		}
	});
});


//点击登陆
function showLogin(){
	$("#iframe").show();
	$("#iframe").contents().find(".mask").show(); 
	// 延迟添加on突出特效
	setTimeout(function(){
		$("#iframe").contents().find(".login-register-mask").addClass("on");
	},0)
}
//点击关闭登陆按钮
function hideLogin(){
	// 延迟隐藏突出特效
	setTimeout(function(){
		$("#iframe" , parent.document).hide();
	},500)

	$(".mask").hide();
	$(".login-register-mask").removeClass("on");

	$(".login-register-mask .title li").eq(1).removeClass('active');
	$(".login-register-mask .title li").eq(0).addClass('active');
	$(".login-register-mask .line").css("left","50px");
	$(".login-register-content .items").eq(0).show();
	$(".login-register-content .items").eq(1).hide();
}
//点击注册
function showRegister(){
	$("#iframe").show();
	$("#iframe").contents().find(".mask").show(); 
	// 延迟添加on突出特效
	setTimeout(function(){
		$("#iframe").contents().find(".login-register-mask").addClass("on");
	},0)

	$("#iframe").contents().find(".login-register-mask .title li").eq(0).removeClass('active');
	$("#iframe").contents().find(".login-register-mask .title li").eq(1).addClass('active');
	$("#iframe").contents().find(".login-register-mask .line").css("left","230px");
	$("#iframe").contents().find(".login-register-content .items").eq(1).show();
	$("#iframe").contents().find(".login-register-content .items").eq(0).hide();
}
//登录成功
//var loginFlag=true;
function submitLogin(obj){
	if($("#username").val()==""){
		promptText("#username","请输入正确帐号格式");
		return false;
	}else if($("#password").val()==""){
		promptText("#password","请输入正确密码");
		return false;
	}else if($("#code").val()==""){
		promptText("#code","请输入正确验证码");
		return false;
	}else{	
		// if(loginFlag){
		// 	obj.text("登录中...");
		// 	loginFlag=false;
		// }else{
		// 	loginFlag=true;
		// 	obj.text("登录中");
		// }
		console.log("登录成功");
	}

}
function qqLogin(){
	$('.login-register-mask').removeClass('on');
	$('.other-login').addClass('on');
}
//注册成功
function submitRegister(){
	if($("#tel").val()==""){
		promptText("#tel","手机号码不能为空");
		return false;
	}else if(!checkPhone($("#tel").val())){
		promptText("#tel","请输入正确手机号码");
		return false;
	}else if($("#imgCode").val()==""){
		promptText("#imgCode","请输入正确图片验证");
		return false;
	}else if($("#messageCode").val()==""){
		promptText("#messageCode","请输入正确验证码");
		return false;
	}else{
		console.log("注册成功");
		$('.register-success').addClass('on');
		$('.login-register-mask').removeClass('on');
	}
}
function hideRegisterSuccess(){
	// 延迟隐藏突出特效
	setTimeout(function(){
		$("#iframe" , parent.document).hide();
	},500)

	$(".mask").hide();
	$('.register-success').removeClass('on');
}

//输入正确删掉错误提示    123表示正确
function deletePrompt(obj){
	if(obj.val()=="" || obj.val()=="123"){
		obj.parent().find("p").remove();
		flag=true;
	}
	//****以下是有值按钮才可以点击****//
	//登录
	if($("#username").val()!="" && $("#password").val()!="" && $("#code").val()!="" ){
		$(".login-register-content .login-content .btn").hide();
		$(".login-register-content .login-content .btn-hide").show();
	}else{
		$(".login-register-content .login-content .btn").show();
		$(".login-register-content .login-content .btn-hide").hide();
	}
	//注册
	if($("#tel").val()!="" && $("#imgCode").val()!="" && $("#messageCode").val()!=""){
		$(".login-register-content .register-content .btn").hide();
		$(".login-register-content .register-content .btn-hide").show();
	}else{
		$(".login-register-content .register-content .btn").show();
		$(".login-register-content .register-content .btn-hide").hide();
	}
	//忘记密码
	if($("#telPassword").val()!="" && $("#imgCodePassword").val()!="" && $("#messageCodePassword").val()!="" && $("#newpassword").val()!=""){
		$(".retrieve-password .btn").hide();
		$(".retrieve-password .btn-hide").show();
	}else{
		$(".retrieve-password .btn").show();
		$(".retrieve-password .btn-hide").hide();
	}
	//第三方登录
	if($("#otherusername").val()!="" && $("#otherpassword").val()!="" && $("#othercode").val()!=""){
		$(".other-login .other-login-content .btn").hide();
		$(".other-login .other-login-content .btn-hide").show();
	}else{
		$(".other-login .other-login-content .btn").show();
		$(".other-login .other-login-content .btn-hide").hide();
	}

	//手机动态登录
	if($("#phone").val()!="" && $("#imgCodePhone").val()!="" && $("#messageCodePhone").val()!=""){
		$(".phone-login .btn").hide();
		$(".phone-login .btn-hide").show();
	}else{
		$(".phone-login .btn").show();
		$(".phone-login .btn-hide").hide();
	}
}


// 错误提示
var flag=true;
function promptText(id,msg){
	if(flag){
		var html="<p><i></i><span>"+msg+"</span></p>";
		$(id).parent().append(html);
		flag=false;
	}	
}

//手机验证
function checkPhone(phone) {
	var n = phone.replace(/\s*/g, ""); 
    var m = n.match(/^\s*(\S+(\s+\S+)*)\s*$/);
    phone = (m == null) ? "" : m[1];
    return (/(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/.test(phone));
}
//点击短信验证码倒计时
var timeFlag=true;
function timeSMS(obj){
	if(timeFlag){
		timeFlag=false;
		clearInterval(timer);
		var time=60;  //60
		var timer=setInterval(function(){
			time--;
			//console.log(time);
			obj.addClass('on').text('获取验证码('+time+')');
			if(time==0){
				timeFlag=true;
	        	clearInterval(timer);
	        	obj.removeClass('on').text('获取验证码');
	        	$(".speech .p1").show();
	      	}
		},1000);
	}
	/********************************************************************************************
	动态后端生成短信验证码
	**********************************************************************************************/
}


//找回密码
function passwordReturn(){
	$('.login-register-mask').removeClass('on');
	$('.retrieve-password').addClass('on');
}
function goLogin(){
	$('.login-register-mask').addClass('on');
	$('.retrieve-password').removeClass('on');
	$('.phone-login').removeClass('on');
}
function hidePassword(){

	// 延迟隐藏突出特效
	setTimeout(function(){
		$("#iframe" , parent.document).hide();
	},500)

	$(".mask").hide();
	$(".retrieve-password").removeClass("on");
}
function submitPassword(){
	if($("#telPassword").val()==""){
		promptText("#telPassword","手机号码不能为空");
		return false;
	}else if(!checkPhone($("#telPassword").val())){
		promptText("#telPassword","请输入正确手机号码");
		return false;
	}else if($("#imgCodePassword").val()==""){
		promptText("#imgCodePassword","请输入正确图片验证");
		return false;
	}else if($("#messageCodePassword").val()==""){
		promptText("#messageCodePassword","请输入正确验证码");
		return false;
	}else{
		console.log("修改完成密码");
		settingsSuccess();
	}
}

//其他方式登录模块
function hideOtherLogin(){
	// 延迟隐藏突出特效
	setTimeout(function(){
		$("#iframe" , parent.document).hide();
	},500);

	$(".mask").hide();
	$('.other-login').removeClass('on');
}
function otherSubmitLogin(){

	if($("#otherusername").val()==""){
		promptText("#otherusername","请输入正确帐号格式");
		return false;
	}else if($("#otherpassword").val()==""){
		promptText("#otherpassword","请输入正确密码");
		return false;
	}else if($("#othercode").val()==""){
		promptText("#othercode","请输入正确验证码");
		return false;
	}else{
		console.log("绑定成功");
		//去掉其他登录
		$(".mask").hide();
		$('.other-login').removeClass('on');
		bindingMask();
	}
}

//手机动态登录
function phoneLogin(){
	$('.login-register-mask').removeClass('on');
	$('.phone-login').addClass('on');
}
function hidePhoneLogin(){
	// 延迟隐藏突出特效
	setTimeout(function(){
		$("#iframe" , parent.document).hide();
	},500);

	$(".mask").hide();
	$('.phone-login').removeClass('on');
}
function submitPhoneLogin(){
	if($("#phone").val()==""){
		promptText("#phone","手机号码不能为空");
		return false;
	}else if(!checkPhone($("#phone").val())){
		promptText("#phone","请输入正确手机号码");
		return false;
	}else if($("#imgCodePhone").val()==""){
		promptText("#imgCodePhone","请输入正确图片验证");
		return false;
	}else if($("#messageCodePhone").val()==""){
		promptText("#messageCodePhone","请输入短信验证码");
		return false;
	}else{
		console.log("手机动态登录");
	}
}

//恭喜您，绑定成功！
function bindingMask(){
	var html='<div class="binding">';
		html+='<div class="binding-content">';
		html+='<h2><i></i><span>恭喜您，绑定成功！</span></h2>';
		html+='</div>';
		html+='</div>';
	$('body').append(html);
	$('.binding-content').addClass('on');
	setTimeout(function(){
		$('.binding').remove();
		$('.binding-content').removeClass('on');
		// 隐藏父页面的id
		$("#iframe" , parent.document).hide();
	},5000)
	$('.binding').on("click",function(){
		// 隐藏父页面的id
		$("#iframe" , parent.document).hide();
		$('.binding').remove();
		$('.binding-content').removeClass('on');
	});
} 
// 密码设置成功，请重新登录
function settingsSuccess(){
	var html='<div class="settings-success">';
		html+='<i></i><p>密码设置成功，请重新登录</p>';
		html+='</div>';
	$('body').append(html);
	setTimeout(function(){
		$('.login-register-mask').addClass('on');
		$('.retrieve-password').removeClass('on');
	},1000);
	setTimeout(function(){
		$('.settings-success').remove();
	},5000);
}

//用户服务协议
function userServe(){
	$('.login-register-mask').removeClass('on');
	$(".user-serve").addClass("on");
}
function hideUserServe(){
	$('.login-register-mask').addClass('on');
	$(".user-serve").removeClass("on");
}
