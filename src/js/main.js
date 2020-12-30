$(document).ready(function(){
	setBackgroundElement()
	mappingMenuLeft();
	mappingMenuRight();
	mappingLanguage();
	// mappingSearchbox();
	openSearch();
	closeSearch();
	mappingHotline();
	Slide()

	$(".hamb").click(function(){
		$(".mobile-wrapper").toggleClass("active");
		$(".spanf ").toggleClass("span1 ");
		$(".spans ").toggleClass("span2 ");
		$(".spant ").toggleClass("span3 ");
	  });
})

// Scroll top
$(function() {
	var header = $(".header-top");
	var header2 = $(".header-bottom");
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 100) {
			header.addClass("none");
			header2.addClass("no-none");
		} else {
			header.removeClass("none");
			header2.removeClass("no-none");
		}
	});
});


function openSearch() {
	document.getElementById("myOverlay").style.display = "block";
}
function closeSearch() {
	document.getElementById("myOverlay").style.display = "none";
}

// Add smooth scrolling to all links
function scrollToDiv() {
	$(".icon-down").on("click", function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$("html, body").animate({
					scrollTop: $(hash).offset().top - $("header").outerHeight(),
				},
				"slow"
			);
		}
	});
}

// Slide
function Slide() {
	var banner = new Swiper('.banner-wrapper .swiper-container', {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	});

	var news = new Swiper('.slide-news .swiper-container', {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	});


}

// Mapping
function mappingMenuLeft() {
	return new MappingListener({
		selector: ".menu-items-left",
		mobileWrapper: ".mobile-wrapper",
		mobileMethod: "appendTo",
		desktopWrapper: ".wrap-left",
		desktopMethod: "prependTo",
		breakpoint: 1025,
	}).watch();
}
function mappingMenuRight() {
	return new MappingListener({
		selector: ".menu-items-right",
		mobileWrapper: ".mobile-wrapper",
		mobileMethod: "appendTo",
		desktopWrapper: ".wrap-right",
		desktopMethod: "prependTo",
		breakpoint: 1025,
	}).watch();
}
function mappingLanguage() {
	return new MappingListener({
		selector: ".language",
		mobileWrapper: ".mobile-wrapper",
		mobileMethod: "appendTo",
		desktopWrapper: ".language-wrapper",
		desktopMethod: "appendTo",
		breakpoint: 1025,
	}).watch();
}
// function mappingSearchbox() {
// 	return new MappingListener({
// 		selector: ".searchbox",
// 		mobileWrapper: ".mobile-wrapper",
// 		mobileMethod: "appendTo",
// 		desktopWrapper: ".search-wrapper",
// 		desktopMethod: "appendTo",
// 		breakpoint: 1025,
// 	}).watch();
// }
function mappingHotline() {
	return new MappingListener({
		selector: ".hotline",
		mobileWrapper: ".mobile-wrapper",
		mobileMethod: "appendTo",
		desktopWrapper: ".hotline-wrapper",
		desktopMethod: "appendTo",
		breakpoint: 1025,
	}).watch();
}

// Set Background

function setBackgroundElement() {
    $('[setBackground]').each(function() {
        var background = $(this).attr('setBackground');
        $(this).css({
            'background-image': 'url(' + background + ')',
            'background-size': 'cover',
			'background-position': 'center center',
			'background-repeat' : 'no-repeat'
        });
    });
    $('[setBackgroundRepeat]').each(function() {
        var background = $(this).attr('setBackgroundRepeat');
        $(this).css({
            'background-image': 'url(' + background + ')',
            'background-repeat': 'repeat',
        });
    });
}