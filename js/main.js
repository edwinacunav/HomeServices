$("#nav-ul > li").on('click', function(){
	var frames = 250
	if( $(window).outerWidth(true) < 769 ){
		frames = 1;
	}
	$('.dropdown-menu').slideUp(frames);
	$("li.active").removeClass("active");
	$(this).addClass('active');
});

$('.dropdown').click(function() {
	console.log($(window).outerWidth(true));
	var frames = 250
	if( $(window).outerWidth(true) < 769 ){
		frames = 1;
  }
	if( $('.dropdown-menu', this).is(':hidden') ){
		$('.dropdown-menu', this).slideDown(frames);
	}
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
});

$('#navbarAffix').affix({
    offset: { top: $('#navbarAffix').offset().top }
});

// $('#navbar').height(52);// $('#navbarAffix').height()
/*$('#navbarAffix').affix({
  offset: {
    top: $('#navbarAffix').offset().top,
    bottom: function () {
      return (this.bottom = $('.footer').outerHeight(true))
    }
  }
})

if( $('#navbarAffix').hasClass('affix') ){
	console.log($('.container-fluid .push-contents'));
}

$(document).ready(function(){
		$(window).bind('scroll', function() {
				var navHeight = $( window ).height() - 70;
					if ($(window).scrollTop() > navHeight) {
							$('nav').addClass('fixed');
					}
					else {
							$('nav').removeClass('fixed');
					}
		});
}); */