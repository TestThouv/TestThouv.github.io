$(document).ready(function() {
	var url = window.location.href;
	$("#intro_div").prepend("<p class='mont center' id='intro_div'>The page you're looking for (" + url + "), doesn't exist... Please use the button below to return to our home page.");
});
