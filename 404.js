$(document).ready(function() {
	var url = window.location.href;
	$("#intro_div").prepend("<p class='mont center' id='intro_div'>The page you're looking for (<span class='33ee33'>" + url + "</span>), doesn't exist... Please use the button below to return to our home page.");
	$(".33ee33").css("color", "#33ee33");
});
