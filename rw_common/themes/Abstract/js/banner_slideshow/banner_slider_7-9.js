elixir.bannerSlideshow = {};
elixir.bannerSlideshow = (function() {
  var jQuery = elixir.jQuery;
  var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function bannerSlideshowFunction() {
		$elixir('#banner').backstretch([
	    banner_slide7,
	    banner_slide8,
	    banner_slide9
	  ], {duration: 5000, fade: 1000});
	}
	
	$elixir(document).ready(function() {
		bannerSlideshowFunction();
	});	

})(elixir.bannerSlideshow);