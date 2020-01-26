(function($){
	"use strict";
	jQuery(document).on("ready", function(){
		// SCROLL TO TOP
		jQuery(window).on("scroll", function(){
			if (jQuery(this).scrollTop()>100){
				jQuery(".scrollup").addClass("active");
			}else{
				jQuery(".scrollup").removeClass("active");
			}
		});
		jQuery(".scrollup").on("click", function(){
	   		jQuery("html, body").animate({scrollTop:0},600);
	  		return false;
		});
		// FLOATING SEARCH BAR
		jQuery(".floating-searchbar i").on("click", function(){
			jQuery("body").toggleClass("floating-searchbar-active");
		});
		// FLYOUT SEARCH BAR
		jQuery(".flyout-searchbar-toggle i").on("click", function(){
			jQuery("body").toggleClass("flyout-searchbar-active");
		});
		jQuery(".flyout-search-close").on("click", function(){
			jQuery("body").removeClass("flyout-searchbar-active");
		});
		// HEADER STYLE SEVEN TOP BAR MENU
		jQuery(".top-bar-toggle").on("click", function(){
            jQuery("body").toggleClass("top-bar-menu-open");
        });
		// HEADER STYLE NINE FUL WIDTH MENU
		jQuery(".nav-icon").on("click", function(){
            jQuery("body").toggleClass("full-open");
        });
		jQuery(".wraper_fullwidth_menu .full-inner nav ul li.menu-item-has-children").each(function(){
			jQuery(this).children("a").on("click", function(DisableClick){
				DisableClick.preventDefault();
				jQuery(this).parent().children("ul").slideToggle(500);
			});
		});
		// SIDEBAR SEARCH BUTTON CHANGE
		jQuery(".search-form, .woocommerce-product-search").each(function(){
			jQuery(this).find("input[type=submit]").replaceWith("<button type='submit'><i class='fa fa-search'></i></button>");
		});
		// BLOG COMMENT BUTTON CHANGE
		jQuery(".comments-area .comment-form > p input[type='submit']").each(function(){
			jQuery(this).replaceWith("<button type='submit'><span>Post Comment</span></button>");
		});
		jQuery(".comments-area .comment-form > p input[type='reset']").each(function(){
			jQuery(this).replaceWith("<button type='reset'><span>Reset Comment</span></button>");
		});
		// TOOLTIP
		jQuery("[data-toggle='tooltip']").tooltip();
		// NAVIGATION SIDR
		jQuery(".responsive-nav").each(function(){
			jQuery(this).sidr({
				side: 'right',
				displace: jQuery(this).data("responsive-nav-displace"),
				renaming: false,
				source: '.nav',
				name: 'main-menu-left',
				onOpen: function(){
					jQuery("body").addClass("main-menu-open");
				},
				onClose: function(){
					jQuery("body").removeClass("main-menu-open");
				},
			});
			jQuery(".overlay, .sidr-close").on("click", function(){
				jQuery.sidr('close', 'main-menu-left');
			});
		});
		// HAMBURGER SIDR
		jQuery(".header-hamburger").each(function(){
			jQuery(this).sidr({
				side: 'right',
				speed: 600,
				displace: false,
				renaming: false,
				source: '.hamburger-menu-holder',
				name: 'hamburger-menu',
				onOpen: function(){
					jQuery("body").addClass("hamburger-menu-open");
				},
				onClose: function(){
					jQuery("body").removeClass("hamburger-menu-open");
				},
			});
			jQuery(".hamburger-menu-close").on("click", function(){
				jQuery.sidr('close', 'hamburger-menu');
			});
		});
		// RADIANTTHEMES MEGA MENU
		jQuery(".sidr .menu-item-has-children").each(function(){
			jQuery(this).children("ul, .rt-mega-menu").css({
				"display": "none",
			});
			jQuery(this).children("a").append("<span class='radiantthemes-open-submenu'><i class='fa fa-caret-down'></i></span>");
			jQuery(this).find(".radiantthemes-open-submenu").on("click", function(){
				jQuery(this).parent().parent(".menu-item-has-children").toggleClass("radiantthemes-menu-open");
				jQuery(this).parent().parent(".menu-item-has-children").children("ul, .rt-mega-menu").slideToggle(700);
			});
		});
		// PRODUCT QUANTITY
		jQuery(".shop_single .quantity input[type=number]").each(function(){
			jQuery(this).addClass("form-control");
			jQuery(this).parent().addClass("input-group");
			jQuery(this).before("<div class='input-group-addon quantity-decrease'>-</div>");
			jQuery(this).after("<div class='input-group-addon quantity-increase'>+</div>");
			jQuery(this).parent().find(".quantity-decrease").on("click", function(){
				if ( jQuery(this).parent().find("input[type=number]").val() == jQuery(this).parent().find("input[type=number]").attr("min") ) {
					alert("Sorry! You're already on lowest value.");
				} else {
					jQuery(this).parent().find("input[type=number]").val( +jQuery(this).parent().find("input[type=number]").val() - 1 );
				}
			});
			jQuery(this).parent().find(".quantity-increase").on("click", function(){
				jQuery(this).parent().find("input[type=number]").val( +jQuery(this).parent().find("input[type=number]").val() + 1 );
			});
		});
		// MATCHHEIGHT
		jQuery(".matchHeight").matchHeight();
		// WOW
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			mobile: true,
			live: true,
			scrollContainer: null,
		});
		wow.init();
		// NICESCROLL
		if( jQuery(window).width() > 767 ){
			jQuery(".infinity-scroll").niceScroll({
				cursorcolor: jQuery("body").data("nicescroll-cursorcolor"),
				cursorwidth: jQuery("body").data("nicescroll-cursorwidth"),
				cursorborder: "none",
				cursorborderradius: "0",
			});
		}
		// STICKY
		jQuery(".i-am-sticky").sticky();
		// RATINA
		jQuery("img").attr("data-no-retina", "");
		jQuery(".radiantthemes-retina img").removeAttr("data-no-retina");
	});
	jQuery(window).on("load", function(){
		// PROLOADER
		setTimeout(function(){
			jQuery(".preloader").addClass("loaded");
	    }, jQuery(".preloader").data("preloader-timeout") );
		setTimeout(function(){
			// MATCHHEIGHT
			jQuery(".matchHeight").matchHeight();
	    }, 2000);
	});
})(jQuery);