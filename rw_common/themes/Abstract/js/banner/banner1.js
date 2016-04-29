elixir.modalIcon = {};
elixir.modalIcon = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function modalIconFunction() {
		$elixir('#banner').addClass('banner1');
	}
	
	$elixir(document).ready(function() {
		modalIconFunction();
	});	
	
})(elixir.modalIcon);