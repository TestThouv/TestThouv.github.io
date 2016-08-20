$(document).ready(function() {
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	 	$("head").remove();
	 	$("body").remove();
	 	
	 	$("html").prepend("<head><title>PigPixel MCPE - 404</title><link type='text/css' rel='stylesheet' href='404.css' /><link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Montserrat:400,700' /><link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Lato:900,700' /><link type='image/x-icon' rel='shortcut icon' href='http://pigpixel.tk/favicon.png' /></head><body><div id='container'><div class='center' id='main'><div class='container' id='title_div'><h1 class='lat center' id='title_h1'>Error 404</h1></div><div class='container' id='intro_div'></div><a href='http://pigpixel.tk'><button class='mont center' id='home_btn'>home</button></a></div></body>");
	}
	
	var url = window.location.href;
	$("#intro_div").prepend("<p class='mont center' id='intro_div'>The page you're looking for (<span class='22dd22'>" + url + "</span>), doesn't exist... Please use the button below to return to our home page.");
	$(".22dd22").css("color", "#22dd22");
});
