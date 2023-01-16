$(function(){

	
	$(".right> li").click(function(){
		$(this).children(".text_info").slideToggle();
		$(this).siblings().children(".text_info").slideUp();
		$( '.c p' ).toggleClass( 'ab' );

	});

	

});
$(function(){
	$(".right> li").click(function(){
		$(this).children().children().children("img").toggleClass("turn");
	});
});


































































