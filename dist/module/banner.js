define(function(){
	function Banner(){
		
	}
	Banner.prototype.init = function(ele){
		var _this = this;
		this.index = 0;
		this.flag = false;
		this.li = ele.li;
		this.btn = ele.btn;
		$(this.btn).on("click",function(){
			if(!_this.flag){
				_this.flag = true;
				console.log(_this.index)
				_this.change($(this).index());
			}
		})
	}
	Banner.prototype.change = function(index){
		var _this = this;
		if(index != this.index){
			$(this.btn).eq(this.index).removeClass("on");
			$(this.btn).eq(index).addClass("on");
			$(this.li).eq(this.index).removeClass("on").fadeOut(1000);
			this.index = index;
			$(this.li).eq(index).addClass("on").fadeIn(1000,function(){
				_this.flag = false;
			});
		}else{
			_this.flag = false;
		}
		
	}
	return new Banner();
})