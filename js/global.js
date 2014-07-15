$(document).ready( function() {
	var $trailer = $('#trailer');
	
	$trailer.width( '100%' );
	$trailer.height( $(window).height() );
	
	$('#mail').hover(
		function() {
			$( this ).find('img').attr('src', '/img/mail2.png' );
		}, function() {
			$( this ).find('img').attr('src', '/img/mail.png' );
		}
	);
});