elixir.modalIcon = {};
elixir.modalIcon = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function modalIconFunction() {
		$elixir('<i class="fa fa-plus"></i>').prependTo('.modal_popup_link');
	}
	
	$elixir(document).ready(function() {
		modalIconFunction();
	});	
	
})(elixir.modalIcon);