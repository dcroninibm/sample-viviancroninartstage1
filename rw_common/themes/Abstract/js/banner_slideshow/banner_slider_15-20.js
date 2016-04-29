elixir.bannerSlideshow = {};
elixir.bannerSlideshow = (function() {
  var jQuery = elixir.jQuery;
  var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function bannerSlideshowFunction() {
		$elixir('#banner').backstretch([
			banner_slide15,
			banner_slide16,
			banner_slide17,
			banner_slide18,
			banner_slide19,
			banner_slide20			
	  ], {duration: 5000, fade: 1000});
	}
	
	$elixir(document).ready(function() {
		bannerSlideshowFunction();
	});	

})(elixir.bannerSlideshow);