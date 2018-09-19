require(['config'],function(){
	require(["jquery","header","footer","aside","banner"],function($,header,footer,aside,banner){
		header.init();
		footer.init();
		aside.init();
		banner.init({
			li:$("#banner_img_list li"),
			btn:$("#banner_img_index li")
		});
		
	})
});
