$(document).ready(function() {
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	 	$("head").remove();
	 	$("body").remove();
	 	
	 	
	var url = window.location.href;
	$("#intro_div").prepend("<p class='mont center' id='intro_div'>The page you're looking for (<span class='22dd22'>" + url + "</span>), doesn't exist... Please use the button below to return to our home page.");
	$(".22dd22").css("color", "#22dd22");
});
