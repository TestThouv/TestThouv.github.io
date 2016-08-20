$(document).ready(function() {
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	 	$("head").remove();
	 	$("body").remove();
	 	
	 	$("html").prepend("<head><title>PigPixel MCPE - 404</title><link type='text/css' rel='stylesheet' href='404.css' /><link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Montserrat:400,700' /><link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Lato:900,700' /><link type='image/x-icon' rel='shortcut icon' href='http://pigpixel.tk/favicon.png' /></head><body><div id='container'><div class='center' id='main'><div class='container' id='title_div'><h1 class='lat center' id='title_h1'>Error 404</h1></div><div class='container' id='intro_div'></div><a href='http://pigpixel.tk'><button class='mont center' id='home_btn'>home</button></a></div><style>#title_div {margin-top: 8.5em;margin-bottom: -1.75em;margin-left: auto;margin-right: auto;}#title_h1 {font-size: 3.5em;font-variant: small-caps;text-align: center;font-weight: 900;}html, body {margin: 0;padding: 0;height: 100%;}#container {height: 100%;min-height: 100%;position: relative;}#title_div {padding: 10px;}#sub_main {padding: 10px;padding-bottom: 2.6em;}body {background-image: url('https://cdn.elegantthemes.com/blog/wp-content/uploads/2013/09/bg-8-full.jpg');color: white;}#main {width: 70%;margin: auto;}.center {text-align: center;}.mont {font-family: 'Montserrat';}.lat {font-family: 'Lato';}.container {display: inline-block;}.green_l {color: #55ff55;}.green_l:hover {color: #33ee33;}#5555ff {color: #5555ff;}#that_error_div {margin-top: -3em;margin-bottom: -1.75em;margin-left: auto;margin-right: auto;}#that_error_h1 {font-size: 5em;font-variant: small-caps;text-align: center;}#intro_div {font-size: 1.2em;}#home_btn {background: transparent;border: 2px solid #55ff55;color: #55ff55;cursor: pointer;font-size: 1.8em;padding: 0.3em 0.75em;transition: color 1s;border-radius: 2px;}#home_btn:hover {color: #fefefe;border: solid 2px #55ff55;}#footer {background: transparent;position: absolute;bottom: 0;width: 100%;}.f_h4 {font-size: 1.2em;}.f_main a {color: #22dd22;font-weight: 700;text-decoration: none;}.f_main a:hover {color: #11cc11;}#home_h4 {margin-left: 2em;}#other {margin-left: 5em;}.f_div_other {margin: 0px 1.5em;}#pbg_div {margin-right: 2em;float: right;}#pbg_h3 {color: #22dd22;font-size: 1.3em;font-weight: 700;}</style></body>");
	}
	
	var url = window.location.href;
	$("#intro_div").prepend("<p class='mont center' id='intro_div'>The page you're looking for (<span class='22dd22'>" + url + "</span>), doesn't exist... Please use the button below to return to our home page.");
	$(".22dd22").css("color", "#22dd22");
});
