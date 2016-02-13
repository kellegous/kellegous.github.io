(function() {

var windowDidResize = function() {
	$('.note>.head').each(function(i, el) {
		var $el = $(el),
			ar = $el.data('width') / $el.data('height'),
			w = $el.width();
		// $el.css('height', w / ar);
	});
};

$(window).on('resize', windowDidResize);
windowDidResize();

$('#sig').on('click', function(e) {
	e.preventDefault();
    $('body,html').stop().animate({
      scrollTop: 0
    }, 500);
});

})();
