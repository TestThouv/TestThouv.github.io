$(document).ready(function() {
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	 	$("body").remove();
	 	$(".remove").remove();
	 	
	 	$("html").append("<body><div id='container'><div class='center' id='main'><div class='container' id='title_div'><h1 class='lat center' id='title_h1'>Error 404</h1></div><div class='container' id='intro_div'></div><a href='http://pigpixel.tk'><button class='mont center' id='home_btn'>home</button></a></div></body>");
		
		$("body").css("background-image", "url('https://cdn.elegantthemes.com/blog/wp-content/uploads/2013/09/bg-8-full.jpg')");
	} else {
		
	};
	
	var url = window.location.href;
	$("#intro_div").prepend("<p class='mont center' id='intro_div'>The page you're looking for (<span class='22dd22'>" + url + "</span>), doesn't exist... Please use the button below to return to our home page.");
	$(".22dd22").css("color", "#22dd22");
});
