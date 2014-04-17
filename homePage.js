$(document).ready(function() {

	//javascript for homepage
	var hpBuild = function() {
		var hpContent = $("#hp-content")
		var hpNavbar = $("#navbar");
		var hpColumn = $(".hp-column")

		var marginSize = 10;
		var paddingSize = 10;
		var navbarHeight = hpNavbar.height() + marginSize;

		var windowHeight = $(window).height() - 2*marginSize;
		var windowWidth = $(window).width() - 2*marginSize;

		hpContent.css("margin-top", navbarHeight)
			.height(windowHeight - navbarHeight - marginSize);

		//column width
		hpColumn.width((windowWidth - 2*paddingSize)/3.0);
		hpColumn.height(hpContent.height() - 2*paddingSize);

		//responsive JS
		$(window).resize(function() {
			var windowHeight = $(window).height() - 2*marginSize;
			var windowWidth = $(window).width() - 2*marginSize;

			hpContent.css("margin-top", navbarHeight)
				.height(windowHeight - navbarHeight - marginSize);


			hpColumn.width((windowWidth - 2*paddingSize)/3);
			hpColumn.height(hpContent.height() - 2*paddingSize);
		});

	}

	var Build = function() {
		NavbarBuild();
		hpBuild();
	}
	window.onload = Build;

});