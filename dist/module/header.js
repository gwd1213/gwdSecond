define(function(){
	function Header(){}
	Header.prototype.init = function(){
		$("header").load("/html/header.html")
	}
	return new Header();
})