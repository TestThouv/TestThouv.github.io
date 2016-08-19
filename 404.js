$(document).ready(function() {
	var windowWidth = $(window).width();
	$("#footer").width(windowWidth);
	
	$(window).resize(function() {
		var windowWidth = $(window).width();
		$("#footer").width(windowWidth);
	});
});
