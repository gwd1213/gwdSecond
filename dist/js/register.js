require(['config'],function(){
	require(["jquery"],function($){
		var regTel = /^1[3587]\d{9}$/;
		var regEmail = /^\w+@[a-z0-9]+\.[a-z]+$/i;
		var regPsd = /.{6,20}/;
		var userflag = false;
		var flagpsd1 = false;
		var flagpsd2 = false;
		$(".reg_btn").on("click",function(){
			if(regTel.test($("#txtUser").val() ) || regEmail.test($("#txtUser").val() ) ){
				userflag = true;
			}else{
				$("#tipsinfo").html("用户名格式输入有误");
				return;
			};
			if(regPsd.test($("#txtPsd1").val())){
				flagpsd1 = true;
			}else{
				$("#tipsinfo").html("密码长度为6-20");
				return;
			}
			if($("#txtPsd1").val() != $("#txtPsd2").val()){
				$("#tipsinfo").html("两次密码输入不一致");
				return;
			}else{
				flagpsd2 = true;
				$("#tipsinfo").html("");
			}
			if(userflag == true && flagpsd1 == true && flagpsd2 == true){
				$.ajax({
					url:"http://localhost/secondPHP/api/v1/register.php",
					data:{
						username:$("#txtUser").val(),
						password:$("#txtPsd2").val()
					},
					success:function(data){
						if(data == 1){
							$("#tipsinfo").html("注册成功");
							window.location.href = "http://localhost:2333/";
						}else if(data == 0){
							$("#tipsinfo").html("注册失败");
						}
					}
				})
			}
		})
	})
});
