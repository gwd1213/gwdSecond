define(function(){
	function Aside(){}
	Aside.prototype.init = function(){
		$("aside").load("/html/aside.html")
	}
	return new Aside();
})