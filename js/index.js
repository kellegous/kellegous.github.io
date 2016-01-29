(function() {

var windowDidResize = function() {
	$('.note>.head').each(function(i, el) {
		var $el = $(el),
			ar = $el.data('width') / $el.data('height'),
			w = $el.width();
		$el.css('height', w / ar);
	});
};

$(window).on('resize', windowDidResize);
windowDidResize();

})();