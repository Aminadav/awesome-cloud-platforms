$(function() {

	var newSelection = "";
	
	$("#flavor-nav a").click(function(){
	
	    $("#all-flavors").fadeTo(200, 0.10);
	
		$("#flavor-nav a").removeClass("current");
		$(this).addClass("current");
		
		newSelection = $(this).attr("rel");
		
		$(".flavor").not("."+newSelection).slideUp();
		$("."+newSelection).slideDown();
		
	    $("#all-flavors").fadeTo(600, 1);
		
	});
	
});