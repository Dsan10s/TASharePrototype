var NavbarModule = (function() {
	var exports = {};
	var setupNav = function(div) {
		var navContainer = $("<div id = 'navContainer'></div>");
			var navLeft = $("<div id = 'navLeft'></div>");
				var logo = $("<div id = 'logo'></div>");
					var img = $("<a href = 'homePage.html'><h1 style = 'margin-top: 10px;'>TA-Share</h1></a>"); // replace with image
				var search = $("<input type = 'text' id = 'search' placeholder = 'Search for Classes'>");
			var navRight = $("<div id = 'navRight'></div>");
				var profPic = $("<img id = 'profPic' class = 'img-circle' src = 'images/profPic.png'/>")
				var name = $("<div id = 'name'>First Last</div>");
				var gear = $("<span style = 'cursor: pointer;' id = 'gear' class = 'glyphicon glyphicon-cog'></span>")
		navContainer.append(navLeft, navRight);
		navLeft.append(logo, search);
		navRight.append(profPic, name, gear);
		logo.append(img);

		$(div).append(navContainer);
	}
	exports.setupNav = setupNav;
	return exports;
}());

var NavbarBuild;

$(document).ready(function() {
	NavbarBuild = function () {
		$("#navbar").each(function() {
			NavbarModule.setupNav(this);
		});

		// Styling JavaScript
		var navbar = $("#navbar");
		var navCont = $("#navContainer");
		var navLeft = $("#navLeft");
		var navRight = $("#navRight");
		var search = $("#search");
		var logo = $("#logo");
		var profPic = $("#profPic");
		var name = $("#name");
		var gear = $("#gear");

		var marginSize = 10;
		var paddingSize = 10;
		var navbarHeight = navbar.height() + marginSize;

		// console.log(navbarHeight);
		var windowHeight = $(window).height() - (2*marginSize);
		var windowWidth = $(window).width() - (2*marginSize);

		navCont.height(navbarHeight - (3*marginSize));
		profPic.height(navCont.height());

		navRight.width(navbarHeight + name.width() + gear.width() + (2*marginSize));
		navLeft.width(navCont.width() - navRight.width() - marginSize);
		search.height(navCont.height() - (2*marginSize) - (2*paddingSize))
			.width( navLeft.width() - (logo.width() + (2*marginSize) + (2*paddingSize)) - (2*marginSize) );
		$(window).resize(function() {
			navLeft.width(navCont.width() - navRight.width() - marginSize);
			search.width( navLeft.width() - (logo.width() + (2*marginSize) + (2*paddingSize)) - (2*marginSize) );
		});

		search.autocomplete({
			source: ["9.00 Intro to Psychology"]
		});

		//Submit answer if user presses enter in input box
		search.on("keyup", function(e) {
			if (e.keyCode == 13) {
				var answerInput = search.val();
				search.val("");

				if (answerInput == "9.00 Intro to Psychology") {
					window.location.href = "classPage.html";
				}
			}
		});
	}
});