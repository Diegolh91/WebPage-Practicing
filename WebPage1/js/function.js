$(document).ready(function(){

	$("#container").load("Documents/home.html");

	$('#nav-bar-nav ul li a').click(function(){
		var page = $(this).attr('href');
		$('#container').load("Documents/"+page+".html");
		return false;
	});
	$('#mySidenav a').click(function(){
		var page = $(this).attr('href');
		$('#container').load("Documents/"+page+".html");
		return false;
	});


	var menuTop = $("#nav-bar-nav").offset().top;
	var footerTop = $("#container").offset().top;

	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();

		$("#header-logo").css({
			"-webkit-transform":" translate(0px," + wScroll/2.5 +"%)"
		});

		/* For the menu to stay on the top always*/
		if(wScroll > menuTop){
			$("#nav-bar-nav").addClass("fixed");
			$("#header-secondary").addClass("addHeight");
		}else{
			$("#nav-bar-nav").removeClass("fixed");
			$("#header-secondary").removeClass("addHeight");
		}
		/*For the news to move to the center*/
		if(wScroll > 400){
			$("#post1").css({
				"-webkit-transform":" translate(0px,0px)"
			});
			$("#post3").css({
				"-webkit-transform":" translate(0px,0px)"
			});
			$("#h2-home").css({
				"-webkit-transform":"translate(0px,0px)"
			});
		}else{
			$("#post1").css({
				"-webkit-transform":" translate(-500px,300px)"
			});
			$("#post3").css({
				"-webkit-transform":" translate(500px,300px)"
			});
			$("#h2-home").css({
				"-webkit-transform":"translate(-1500px,0px)"
			});
		};



	});

});
