require(['config'],function(){
	require(["jquery","header","footer","aside"],function($,header,footer,aside){
		header.init();
		footer.init();
		aside.init();
	})
});
