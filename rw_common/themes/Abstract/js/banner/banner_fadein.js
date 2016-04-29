elixir.bannerFadeIn = {};
elixir.bannerFadeIn = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function bannerHideFunction() {
        $elixir('#banner').css({'opacity' : '0'});
	}

	function bannerFadeInFunction() {
        $elixir('#banner').animate({'opacity' : '1'}, 2800);
	}
	
	$elixir(document).ready(function() {
		bannerHideFunction();
	});	

	$elixir(window).load(function() {
		bannerFadeInFunction();
	});	
	
})(elixir.bannerFadeIn);