// rz-slide methods starts from here
function setREVStartSize(e) {

	//window.requestAnimationFrame(function() {				 

	window.RSIW = window.RSIW === undefined ? window.innerWidth : window.RSIW;

	window.RSIH = window.RSIH === undefined ? window.innerHeight : window.RSIH;

	try {

		var pw = document.getElementById(e.c).parentNode.offsetWidth,

			newh;

		pw = pw === 0 || isNaN(pw) ? window.RSIW : pw;

		e.tabw = e.tabw === undefined ? 0 : parseInt(e.tabw);

		e.thumbw = e.thumbw === undefined ? 0 : parseInt(e.thumbw);

		e.tabh = e.tabh === undefined ? 0 : parseInt(e.tabh);

		e.thumbh = e.thumbh === undefined ? 0 : parseInt(e.thumbh);

		e.tabhide = e.tabhide === undefined ? 0 : parseInt(e.tabhide);

		e.thumbhide = e.thumbhide === undefined ? 0 : parseInt(e.thumbhide);

		e.mh = e.mh === undefined || e.mh == "" || e.mh === "auto" ? 0 : parseInt(e.mh, 0);

		if (e.layout === "fullscreen" || e.l === "fullscreen")

			newh = Math.max(e.mh, window.RSIH);

		else {

			e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];

			for (var i in e.rl) if (e.gw[i] === undefined || e.gw[i] === 0) e.gw[i] = e.gw[i - 1];

			e.gh = e.el === undefined || e.el === "" || (Array.isArray(e.el) && e.el.length == 0) ? e.gh : e.el;

			e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];

			for (var i in e.rl) if (e.gh[i] === undefined || e.gh[i] === 0) e.gh[i] = e.gh[i - 1];



			var nl = new Array(e.rl.length),

				ix = 0,

				sl;

			e.tabw = e.tabhide >= pw ? 0 : e.tabw;

			e.thumbw = e.thumbhide >= pw ? 0 : e.thumbw;

			e.tabh = e.tabhide >= pw ? 0 : e.tabh;

			e.thumbh = e.thumbhide >= pw ? 0 : e.thumbh;

			for (var i in e.rl) nl[i] = e.rl[i] < window.RSIW ? 0 : e.rl[i];

			sl = nl[0];

			for (var i in nl) if (sl > nl[i] && nl[i] > 0) { sl = nl[i]; ix = i; }

			var m = pw > (e.gw[ix] + e.tabw + e.thumbw) ? 1 : (pw - (e.tabw + e.thumbw)) / (e.gw[ix]);

			newh = (e.gh[ix] * m) + (e.tabh + e.thumbh);

		}

		if (window.rs_init_css === undefined) window.rs_init_css = document.head.appendChild(document.createElement("style"));

		document.getElementById(e.c).height = newh + "px";

		window.rs_init_css.innerHTML += "#" + e.c + "_wrapper { height: " + newh + "px }";

	} catch (e) {

		console.log("Failure at Presize of Slider:" + e)

	}

	//});

};
var dgwt_wcas = { "labels": { "category": "Category", "tag": "Tag", "brand": "Brand", "post": "Post", "page": "Page", "vendor": "Vendor", "product_cat_plu": "Categories", "product_tag_plu": "Tags", "product_plu": "Products", "brand_plu": "Brands", "post_plu": "Posts", "page_plu": "Pages", "vendor_plu": "Vendors", "sku_label": "SKU:", "sale_badge": "Sale", "vendor_sold_by": "Sold by:", "featured_badge": "Featured", "in": "in", "read_more": "continue reading", "no_results": "No results", "show_more": "See all products...", "show_more_details": "See all products...", "search_placeholder": "SEARCH", "submit": "Search" }, "ajax_search_endpoint": "\/?wc-ajax=dgwt_wcas_ajax_search", "ajax_details_endpoint": "\/?wc-ajax=dgwt_wcas_result_details", "ajax_prices_endpoint": "\/?wc-ajax=dgwt_wcas_get_prices", "action_search": "dgwt_wcas_ajax_search", "action_result_details": "dgwt_wcas_result_details", "action_get_prices": "dgwt_wcas_get_prices", "min_chars": "3", "width": "auto", "show_details_box": "", "show_images": "1", "show_price": "", "show_desc": "", "show_sale_badge": "", "show_featured_badge": "", "dynamic_prices": "", "is_rtl": "", "show_preloader": "1", "show_headings": "1", "preloader_url": "", "taxonomy_brands": "", "img_url": "https:\/\/ascher.in\/wp-content\/plugins\/ajax-search-for-woocommerce\/assets\/img\/", "is_premium": "", "mobile_breakpoint": "0", "mobile_overlay_wrapper": "body", "debounce_wait_ms": "400", "send_ga_events": "1", "enable_ga_site_search_module": "", "magnifier_icon": "\t\t\t\t<svg version=\"1.1\" class=\"\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\"\n\t\t\t\t\t xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" x=\"0px\" y=\"0px\"\n\t\t\t\t\t viewBox=\"0 0 51.539 51.361\" enable-background=\"new 0 0 51.539 51.361\" xml:space=\"preserve\">\n\t\t             <path fill=\"#444\" d=\"M51.539,49.356L37.247,35.065c3.273-3.74,5.272-8.623,5.272-13.983c0-11.742-9.518-21.26-21.26-21.26 S0,9.339,0,21.082s9.518,21.26,21.26,21.26c5.361,0,10.244-1.999,13.983-5.272l14.292,14.292L51.539,49.356z M2.835,21.082 c0-10.176,8.249-18.425,18.425-18.425s18.425,8.249,18.425,18.425S31.436,39.507,21.26,39.507S2.835,31.258,2.835,21.082z\"\/>\n\t\t\t\t<\/svg>\n\t\t\t\t", "close_icon": "\t\t\t\t<svg class=\"\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n\t\t\t\t\t<path fill=\"#ccc\" d=\"M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z\"\/>\n\t\t\t\t<\/svg>\n\t\t\t\t", "back_icon": "\t\t\t\t<svg class=\"\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 16 16\">\n\t\t\t\t\t<path fill=\"#fff\" d=\"M14 6.125H3.351l4.891-4.891L7 0 0 7l7 7 1.234-1.234L3.35 7.875H14z\" fill-rule=\"evenodd\" \/>\n\t\t\t\t<\/svg>\n\t\t\t\t", "preloader_icon": "\t\t\t\t<svg class=\"dgwt-wcas-loader-circular \"  viewBox=\"25 25 50 50\">\n\t\t\t\t\t<circle class=\"dgwt-wcas-loader-circular-path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke=\"#ddd\" stroke-miterlimit=\"10\"\/>\n\t\t\t\t<\/svg>\n\t\t\t\t", "custom_params": {}, "convert_html": "1", "suggestions_wrapper": "body", "show_product_vendor": "", "disable_hits": "", "disable_submit": "" };

setREVStartSize({ c: 'rev_slider_1_1', rl: [1240, 1024, 778, 480], el: [1400], gw: [1270], gh: [1400], type: 'standard', justify: '', layout: 'fullscreen', offsetContainer: '', offset: '60px', mh: "0" });
var revapi1,
	tpj;
function revinit_1() {
	jQuery(function () {
		tpj = jQuery;
		revapi1 = tpj("#rev_slider_1_1");
		if (revapi1 == undefined || revapi1.revolution == undefined) {
			revslider_showDoubleJqueryError("rev_slider_1_1");
		} else {
			revapi1.revolution({
				sliderLayout: "fullscreen",
				visibilityLevels: "1240,1024,778,480",
				gridwidth: 1270,
				gridheight: 1400,
				perspective: 600,
				perspectiveType: "local",
				editorheight: "1400,768,960,529",
				responsiveLevels: "1240,1024,778,480",
				fullScreenOffset: "60px",
				progressBar: {
					color: "rgba(255,255,255,0.25)",
					vertical: "top",
					size: 10,
					x: 0,
					y: 0
				},
				navigation: {
					keyboard_direction: "vertical",
					mouseScrollNavigation: false,
					onHoverStop: false,
					touch: {
						touchenabled: true
					},
					arrows: {
						enable: true,
						style: "custom",
						hide_over: 479,
						left: {
							h_offset: 0
						},
						right: {
							h_offset: 0
						}
					},
					bullets: {
						enable: true,
						tmp: "<span class=\"tp-bullet-title\">{{title}}</span>",
						style: "ares"
					}
				},
				parallax: {
					levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
					type: "scroll",
					origo: "slidercenter"
				},
				scrolleffect: {
					set: true,
					blur: true,
					maxblur: 20,
					slide: true,
					direction: "top",
					multiplicator: 2,
					multiplicator_layers: 2,
					tilt: 10
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid: true
				},
			});
		}

	});
} // End of RevInitScript
// end of rz-slider method

if (document.readyState === "loading") window.addEventListener('DOMContentLoaded', function () { revinit_1(); }); else revinit_1();
$(document).ready(function () {

	if (document.cookie.indexOf("FooBar=true") == -1) {
		document.cookie = "FooBar=true; max-age=86400"; // 86400: seconds in a day
		$('#popmodel').fadeIn();
	}


	$('#close_models').click(function (e) {
		$('#popmodel').fadeOut();
	});
});

$(document).ready(function () {
	if ($(window).width() >= 1024) {



		currLoc = $(location).attr('href');
		var numbersArray = currLoc.split('/');
		var lastEl = $(numbersArray).last()[0];

		var links1 = $('#menu-item-221 > a').attr('href');
		var links2 = $('#menu-item-55 > a').attr('href');
		var links3 = $('#menu-item-258 > a').attr('href');

		if (currLoc == links1) {
			$('#menu-item-221 > a').addClass('active');
		}
		if (currLoc == links2) {
			$('#menu-item-55 > a').addClass('active');
		}
		if (currLoc == links3) {
			$('#menu-item-258 > a').addClass('active');
		}

		console.log(currLoc);

		setTimeout(function () {
			$('html, body').animate({
				scrollTop: $(lastEl).offset().top - 127
			}, 500);
		}, 500);
	}
	else {
		currLoc = $(location).attr('href');
		var numbersArray = currLoc.split('/');
		var lastEl = $(numbersArray).last()[0];


		var links1 = $('#menu-item-290 > a').attr('href');
		var links2 = $('#menu-item-292 > a').attr('href');

		if (currLoc == links1) {
			$('#menu-item-290 > a').addClass('active');
		}
		if (currLoc == links2) {
			$('#menu-item-292 > a').addClass('active');
		}

		console.log(currLoc);

		setTimeout(function () {
			$('html, body').animate({
				scrollTop: $(lastEl).offset().top - 83
			}, 500);
		}, 500);
	}
});

(function () {
	var c = document.body.className;
	c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
	document.body.className = c;
})();

if (typeof revslider_showDoubleJqueryError === "undefined") {
	function revslider_showDoubleJqueryError(sliderID) {
		var err = "<div class='rs_error_message_box'>";
		err += "<div class='rs_error_message_oops'>Oops...</div>";
		err += "<div class='rs_error_message_content'>";
		err += "You have some jquery.js library include that comes after the Slider Revolution files js inclusion.<br>";
		err += "To fix this, you can:<br>&nbsp;&nbsp;&nbsp; 1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on";
		err += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jQuery.js inclusion and remove it";
		err += "</div>";
		err += "</div>";
		var slider = document.getElementById(sliderID); slider.innerHTML = err; slider.style.display = "block";
	}
}

var wpcf7 = { "api": { "root": "https:\/\/ascher.in\/wp-json\/", "namespace": "contact-form-7\/v1" } };
var wc_add_to_cart_params = { "ajax_url": "\/wp-admin\/admin-ajax.php", "wc_ajax_url": "\/?wc-ajax=%%endpoint%%", "i18n_view_cart": "View cart", "cart_url": "https:\/\/ascher.in\/cart\/", "is_cart": "", "cart_redirect_after_add": "no" };
var woocommerce_params = { "ajax_url": "\/wp-admin\/admin-ajax.php", "wc_ajax_url": "\/?wc-ajax=%%endpoint%%" };
var wc_cart_fragments_params = { "ajax_url": "\/wp-admin\/admin-ajax.php", "wc_ajax_url": "\/?wc-ajax=%%endpoint%%", "cart_hash_key": "wc_cart_hash_49f20380e34e3a4d45a86302ca33e240", "fragment_name": "wc_fragments_49f20380e34e3a4d45a86302ca33e240", "request_timeout": "5000" };
var _wpUtilSettings = { "ajax": { "url": "\/wp-admin\/admin-ajax.php" } };
var WPB_PCF_Vars = { "ajaxurl": "https:\/\/ascher.in\/wp-admin\/admin-ajax.php", "nonce": "95eeda6138" };
var newsletter = { "messages": { "email_error": "Email address is not correct", "name_error": "", "surname_error": "", "profile_error": "", "privacy_error": "" }, "profile_max": "20" };
var wpcf7cf_global_settings = { "ajaxurl": "https:\/\/ascher.in\/wp-admin\/admin-ajax.php" };
var scriptData = { "jvcf7_default_settings": { "jvcf7_show_label_error": "errorMsgshow", "jvcf7_invalid_field_design": "theme_0" } };
var dgwt_wcas = { "labels": { "category": "Category", "tag": "Tag", "brand": "Brand", "post": "Post", "page": "Page", "vendor": "Vendor", "product_cat_plu": "Categories", "product_tag_plu": "Tags", "product_plu": "Products", "brand_plu": "Brands", "post_plu": "Posts", "page_plu": "Pages", "vendor_plu": "Vendors", "sku_label": "SKU:", "sale_badge": "Sale", "vendor_sold_by": "Sold by:", "featured_badge": "Featured", "in": "in", "read_more": "continue reading", "no_results": "No results", "show_more": "See all products...", "show_more_details": "See all products...", "search_placeholder": "SEARCH", "submit": "Search" }, "ajax_search_endpoint": "\/?wc-ajax=dgwt_wcas_ajax_search", "ajax_details_endpoint": "\/?wc-ajax=dgwt_wcas_result_details", "ajax_prices_endpoint": "\/?wc-ajax=dgwt_wcas_get_prices", "action_search": "dgwt_wcas_ajax_search", "action_result_details": "dgwt_wcas_result_details", "action_get_prices": "dgwt_wcas_get_prices", "min_chars": "3", "width": "auto", "show_details_box": "", "show_images": "1", "show_price": "", "show_desc": "", "show_sale_badge": "", "show_featured_badge": "", "dynamic_prices": "", "is_rtl": "", "show_preloader": "1", "show_headings": "1", "preloader_url": "", "taxonomy_brands": "", "img_url": "https:\/\/ascher.in\/wp-content\/plugins\/ajax-search-for-woocommerce\/assets\/img\/", "is_premium": "", "mobile_breakpoint": "0", "mobile_overlay_wrapper": "body", "debounce_wait_ms": "400", "send_ga_events": "1", "enable_ga_site_search_module": "", "magnifier_icon": "\t\t\t\t<svg version=\"1.1\" class=\"\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\"\n\t\t\t\t\t xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" x=\"0px\" y=\"0px\"\n\t\t\t\t\t viewBox=\"0 0 51.539 51.361\" enable-background=\"new 0 0 51.539 51.361\" xml:space=\"preserve\">\n\t\t             <path fill=\"#444\" d=\"M51.539,49.356L37.247,35.065c3.273-3.74,5.272-8.623,5.272-13.983c0-11.742-9.518-21.26-21.26-21.26 S0,9.339,0,21.082s9.518,21.26,21.26,21.26c5.361,0,10.244-1.999,13.983-5.272l14.292,14.292L51.539,49.356z M2.835,21.082 c0-10.176,8.249-18.425,18.425-18.425s18.425,8.249,18.425,18.425S31.436,39.507,21.26,39.507S2.835,31.258,2.835,21.082z\"\/>\n\t\t\t\t<\/svg>\n\t\t\t\t", "close_icon": "\t\t\t\t<svg class=\"\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n\t\t\t\t\t<path fill=\"#ccc\" d=\"M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z\"\/>\n\t\t\t\t<\/svg>\n\t\t\t\t", "back_icon": "\t\t\t\t<svg class=\"\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" viewBox=\"0 0 16 16\">\n\t\t\t\t\t<path fill=\"#fff\" d=\"M14 6.125H3.351l4.891-4.891L7 0 0 7l7 7 1.234-1.234L3.35 7.875H14z\" fill-rule=\"evenodd\" \/>\n\t\t\t\t<\/svg>\n\t\t\t\t", "preloader_icon": "\t\t\t\t<svg class=\"dgwt-wcas-loader-circular \"  viewBox=\"25 25 50 50\">\n\t\t\t\t\t<circle class=\"dgwt-wcas-loader-circular-path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke=\"#ddd\" stroke-miterlimit=\"10\"\/>\n\t\t\t\t<\/svg>\n\t\t\t\t", "custom_params": {}, "convert_html": "1", "suggestions_wrapper": "body", "show_product_vendor": "", "disable_hits": "", "disable_submit": "" };

setREVStartSize({ c: 'rev_slider_1_1', rl: [1240, 1024, 778, 480], el: [1400], gw: [1270], gh: [1400], type: 'standard', justify: '', layout: 'fullscreen', offsetContainer: '', offset: '60px', mh: "0" });
var revapi1,
	tpj;
function revinit_1() {
	jQuery(function () {
		tpj = jQuery;
		revapi1 = tpj("#rev_slider_1_1");
		if (revapi1 == undefined || revapi1.revolution == undefined) {
			revslider_showDoubleJqueryError("rev_slider_1_1");
		} else {
			revapi1.revolution({
				sliderLayout: "fullscreen",
				visibilityLevels: "1240,1024,778,480",
				gridwidth: 1270,
				gridheight: 1400,
				perspective: 600,
				perspectiveType: "local",
				editorheight: "1400,768,960,529",
				responsiveLevels: "1240,1024,778,480",
				fullScreenOffset: "60px",
				progressBar: {
					color: "rgba(255,255,255,0.25)",
					vertical: "top",
					size: 10,
					x: 0,
					y: 0
				},
				navigation: {
					keyboard_direction: "vertical",
					mouseScrollNavigation: false,
					onHoverStop: false,
					touch: {
						touchenabled: true
					},
					arrows: {
						enable: true,
						style: "custom",
						hide_over: 479,
						left: {
							h_offset: 0
						},
						right: {
							h_offset: 0
						}
					},
					bullets: {
						enable: true,
						tmp: "<span class=\"tp-bullet-title\">{{title}}</span>",
						style: "ares"
					}
				},
				parallax: {
					levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
					type: "scroll",
					origo: "slidercenter"
				},
				scrolleffect: {
					set: true,
					blur: true,
					maxblur: 20,
					slide: true,
					direction: "top",
					multiplicator: 2,
					multiplicator_layers: 2,
					tilt: 10
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid: true
				},
			});
		}

	});
} // End of RevInitScript
if (document.readyState === "loading") window.addEventListener('DOMContentLoaded', function () { revinit_1(); }); else revinit_1();

var htmlDivCss = unescape(".blurslider-gradient%20%7B%20%20%0Abackground%3A%20-webkit-linear-gradient%28left%2C%20%20%239357cc%200%25%2C%232989d8%2050%25%2C%232cc99d%20100%25%29%3B%0A-webkit-background-clip%3A%20text%3B%0A-webkit-text-fill-color%3A%20transparent%3B%0A%7D%0A%0A.blurslider-line%20%7B%20%20%0Abackground%3A%20-webkit-linear-gradient%28left%2C%20%20%239357cc%200%25%2C%232989d8%2050%25%2C%232cc99d%20100%25%29%20%21important%3B%0A%7D");
var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
if (htmlDiv) {
	htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
	var htmlDiv = document.createElement('div');
	htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
	document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
}

var htmlDivCss = unescape("%23rev_slider_1_1_wrapper%20.custom.tparrows%20%7B%0A%09cursor%3Apointer%3B%0A%09background%3A%23000%3B%0A%09background%3Argba%280%2C0%2C0%2C0.5%29%3B%0A%09width%3A40px%3B%0A%09height%3A40px%3B%0A%09position%3Aabsolute%3B%0A%09display%3Ablock%3B%0A%09z-index%3A1000%3B%0A%7D%0A%23rev_slider_1_1_wrapper%20.custom.tparrows%3Ahover%20%7B%0A%09background%3A%23000%3B%0A%7D%0A%23rev_slider_1_1_wrapper%20.custom.tparrows%3Abefore%20%7B%0A%09font-family%3A%20%27revicons%27%3B%0A%09font-size%3A15px%3B%0A%09color%3A%23fff%3B%0A%09display%3Ablock%3B%0A%09line-height%3A%2040px%3B%0A%09text-align%3A%20center%3B%0A%7D%0A%23rev_slider_1_1_wrapper%20.custom.tparrows.tp-leftarrow%3Abefore%20%7B%0A%09content%3A%20%27%5Ce824%27%3B%0A%7D%0A%23rev_slider_1_1_wrapper%20.custom.tparrows.tp-rightarrow%3Abefore%20%7B%0A%09content%3A%20%27%5Ce825%27%3B%0A%7D%0A%0A%0A%23rev_slider_1_1_wrapper%20.ares.tp-bullets%20%7B%0A%7D%0A%23rev_slider_1_1_wrapper%20.ares.tp-bullets%3Abefore%20%7B%0A%09content%3A%27%20%27%3B%0A%09position%3Aabsolute%3B%0A%09width%3A100%25%3B%0A%09height%3A100%25%3B%0A%09background%3Atransparent%3B%0A%09padding%3A10px%3B%0A%09margin-left%3A-10px%3Bmargin-top%3A-10px%3B%0A%09box-sizing%3Acontent-box%3B%0A%7D%0A%23rev_slider_1_1_wrapper%20.ares%20.tp-bullet%20%7B%0A%09width%3A13px%3B%0A%09height%3A13px%3B%0A%09position%3Aabsolute%3B%0A%09background%3A%236b6b6b%3B%0A%09border-radius%3A50%25%3B%0A%09cursor%3A%20pointer%3B%0A%09box-sizing%3Acontent-box%3B%0A%7D%0A%23rev_slider_1_1_wrapper%20.ares%20.tp-bullet%3Ahover%2C%0A%23rev_slider_1_1_wrapper%20.ares%20.tp-bullet.selected%20%7B%0A%09background%3A%23ffffff%3B%0A%7D%0A%23rev_slider_1_1_wrapper%20.ares%20.tp-bullet-title%20%7B%0A%20%20position%3Aabsolute%3B%0A%20%20color%3A%23888888%3B%0A%20%20font-size%3A12px%3B%0A%20%20padding%3A0px%2010px%3B%0A%20%20font-weight%3A600%3B%0A%20%20right%3A27px%3B%0A%20%20top%3A-4px%3B%20%20%0A%20%20background%3Argba%28255%2C255%2C255%2C0.75%29%3B%0A%20%20visibility%3Ahidden%3B%0A%20%20transform%3Atranslatex%28-20px%29%3B%0A%20%20-webkit-transform%3Atranslatex%28-20px%29%3B%0A%20%20transition%3Atransform%200.3s%3B%0A%20%20-webkit-transition%3Atransform%200.3s%3B%0A%20%20line-height%3A20px%3B%0A%20%20white-space%3Anowrap%3B%0A%7D%20%20%20%20%20%0A%0A%23rev_slider_1_1_wrapper%20.ares%20.tp-bullet-title%3Aafter%20%7B%0A%20%20%20%20width%3A%200px%3B%0A%09height%3A%200px%3B%0A%09border-style%3A%20solid%3B%0A%09border-width%3A%2010px%200%2010px%2010px%3B%0A%09border-color%3A%20transparent%20transparent%20transparent%20rgba%28255%2C255%2C255%2C0.75%29%3B%0A%09content%3A%27%20%27%3B%0A%20%20%20%20position%3Aabsolute%3B%0A%20%20%20%20right%3A-10px%3B%0A%09top%3A0px%3B%0A%7D%0A%20%20%20%20%0A%23rev_slider_1_1_wrapper%20.ares%20.tp-bullet%3Ahover%20.tp-bullet-title%7B%0A%20%20visibility%3Avisible%3B%0A%20%20%20transform%3Atranslatex%280px%29%3B%0A%20%20-webkit-transform%3Atranslatex%280px%29%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.ares%20.tp-bullet.selected%3Ahover%20.tp-bullet-title%20%7B%0A%20%20%20%20background%3A%23ffffff%3B%7D%0A%23rev_slider_1_1_wrapper%20.ares%20.tp-bullet.selected%3Ahover%20.tp-bullet-title%3Aafter%20%7B%0A%20%20border-color%3Atransparent%20transparent%20transparent%20%23ffffff%3B%0A%7D%0A%23rev_slider_1_1_wrapper%20.ares.tp-bullets%3Ahover%20.tp-bullet-title%20%7B%0A%20%20visibility%3Ahidden%3B%0A%20%20%0A%7D%0A%23rev_slider_1_1_wrapper%20.ares.tp-bullets%3Ahover%20.tp-bullet%3Ahover%20.tp-bullet-title%20%7B%0A%20%20%20%20visibility%3Avisible%3B%0A%20%20%20%20transform%3AtranslateX%280px%29%20translatey%280px%29%3B%0A%20%20-webkit-transform%3AtranslateX%280px%29%20translatey%280px%29%3B%0A%7D%0A%0A%0A%2F%2A%20VERTICAL%20%2A%2F%0A%23rev_slider_1_1_wrapper%20.ares.nav-dir-vertical.nav-pos-hor-left%20.tp-bullet-title%20%7B%20right%3Aauto%3B%20left%3A27px%3B%20%20transform%3Atranslatex%2820px%29%3B%20-webkit-transform%3Atranslatex%2820px%29%3B%7D%20%20%0A%23rev_slider_1_1_wrapper%20.ares.nav-dir-vertical.nav-pos-hor-left%20.tp-bullet-title%3Aafter%20%7B%20%0A%20%20border-width%3A%2010px%2010px%2010px%200%20%21important%3B%0A%20%20border-color%3A%20transparent%20rgba%28255%2C255%2C255%2C0.75%29%20transparent%20transparent%3B%0A%20%20right%3Aauto%20%21important%3B%0A%20%20left%3A-10px%20%21important%3B%20%20%20%0A%7D%0A%23rev_slider_1_1_wrapper%20.ares.nav-dir-vertical.nav-pos-hor-left%20.tp-bullet.selected%3Ahover%20.tp-bullet-title%3Aafter%20%7B%0A%20%20border-color%3A%20%20transparent%20%23ffffff%20transparent%20transparent%20%21important%3B%0A%7D%0A%0A%0A%0A%2F%2A%20HORIZONTAL%20BOTTOM%20%26%26%20CENTER%20%2A%2F%0A%23rev_slider_1_1_wrapper%20.ares.nav-dir-horizontal.nav-pos-ver-center%20.tp-bullet-title%2C%0A%23rev_slider_1_1_wrapper%20.ares.nav-dir-horizontal.nav-pos-ver-bottom%20.tp-bullet-title%20%7B%20top%3A-35px%3B%20left%3A50%25%3B%20right%3Aauto%3B%20transform%3A%20translateX%28-50%25%29%20translateY%28-10px%29%3B-webkit-transform%3A%20translateX%28-50%25%29%20translateY%28-10px%29%3B%20%7D%20%20%0A%0A%23rev_slider_1_1_wrapper%20.ares.nav-dir-horizontal.nav-pos-ver-center%20.tp-bullet-title%3Aafter%2C%0A%23rev_slider_1_1_wrapper%20.ares.nav-dir-horizontal.nav-pos-ver-bottom%20.tp-bullet-title%3Aafter%20%7B%20%0A%20%20border-width%3A%2010px%2010px%200px%2010px%3B%0A%20%20border-color%3A%20rgba%28255%2C255%2C255%2C0.75%29%20transparent%20transparent%20transparent%3B%0A%20%20right%3Aauto%3B%0A%20%20left%3A50%25%3B%0A%20%20margin-left%3A-10px%3B%0A%20%20top%3Aauto%3B%0A%20%20bottom%3A-10px%3B%0A%20%20%20%20%0A%7D%0A%23rev_slider_1_1_wrapper%20.ares.nav-dir-horizontal.nav-pos-ver-center%20.tp-bullet.selected%3Ahover%20.tp-bullet-title%3Aafter%2C%0A%23rev_slider_1_1_wrapper%20.ares.nav-dir-horizontal.nav-pos-ver-bottom%20.tp-bullet.selected%3Ahover%20.tp-bullet-title%3Aafter%20%7B%0A%20%20border-color%3A%20%20%23ffffff%20transparent%20transparent%20transparent%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.ares.nav-dir-horizontal.nav-pos-ver-center%20.tp-bullet%3Ahover%20.tp-bullet-title%2C%0A%23rev_slider_1_1_wrapper%20.ares.nav-dir-horizontal.nav-pos-ver-bottom%20.tp-bullet%3Ahover%20.tp-bullet-title%7B%0A%20%20%20transform%3AtranslateX%28-50%25%29%20translatey%280px%29%3B%0A%20%20-webkit-transform%3AtranslateX%28-50%25%29%20translatey%280px%29%3B%0A%7D%0A%0A%0A%2F%2A%20HORIZONTAL%20TOP%20%2A%2F%0A%23rev_slider_1_1_wrapper%20.ares.nav-dir-horizontal.nav-pos-ver-top%20.tp-bullet-title%20%7B%20top%3A25px%3B%20left%3A50%25%3B%20right%3Aauto%3B%20transform%3A%20translateX%28-50%25%29%20translateY%2810px%29%3B-webkit-transform%3A%20translateX%28-50%25%29%20translateY%2810px%29%3B%20%7D%20%20%0A%23rev_slider_1_1_wrapper%20.ares.nav-dir-horizontal.nav-pos-ver-top%20.tp-bullet-title%3Aafter%20%7B%20%0A%20%20border-width%3A%200%2010px%2010px%2010px%3B%0A%20%20border-color%3A%20%20transparent%20transparent%20rgba%28255%2C255%2C255%2C0.75%29%20transparent%3B%0A%20%20right%3Aauto%3B%0A%20%20left%3A50%25%3B%0A%20%20margin-left%3A-10px%3B%0A%20%20bottom%3Aauto%3B%0A%20%20top%3A-10px%3B%0A%20%20%20%20%0A%7D%0A%23rev_slider_1_1_wrapper%20.ares.nav-dir-horizontal.nav-pos-ver-top%20.tp-bullet.selected%3Ahover%20.tp-bullet-title%3Aafter%20%7B%0A%20%20border-color%3A%20%20transparent%20transparent%20%20%23ffffff%20transparent%3B%0A%7D%0A%0A%23rev_slider_1_1_wrapper%20.ares.nav-dir-horizontal.nav-pos-ver-top%20.tp-bullet%3Ahover%20.tp-bullet-title%7B%0A%20%20%20transform%3AtranslateX%28-50%25%29%20translatey%280px%29%3B%0A%20%20-webkit-transform%3AtranslateX%28-50%25%29%20translatey%280px%29%3B%0A%7D%0A%0A%0A");
var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
if (htmlDiv) {
	htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
	var htmlDiv = document.createElement('div');
	htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
	document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
}

wow = new WOW(
	{
		animateClass: 'animated',
		offset: 100,
		callback: function (box) {
			//console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
		}
	}); wow.init();

var htmlDivCss = unescape("%0A%0A%23rev_slider_1_1%5Bdata-slideactive%3D%22rs-2%22%5D%20.custom.tparrows.tp-leftarrow%3Abefore%7B%0Acontent%3A%20%22%5Ce824%22%20%21important%3B%0A%7D%0A%23rev_slider_1_1%5Bdata-slideactive%3D%22rs-2%22%5D%20.custom.tparrows.tp-rightarrow%3Abefore%7B%0Acontent%3A%20%22%5Ce825%22%20%21important%3B%0A%7D%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A");
var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
if (htmlDiv) {
	htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
	var htmlDiv = document.createElement('div');
	htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
	document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
}