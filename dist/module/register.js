define(function(){
	function Reg(){}
	Reg.init = function(obj){
		this.name = obj.name;
		this.password = obj.password;
		var regTel = /^1[3587]\d{9}$/;
		var regEmail = /^\w+@[a-z0-9]+\.[a-z]+$/i;
		var regPsd = /.{6,20}/;
		if(regTel.test(this.name) || regEmail.test(this.name)){
			
		}
	}
})