// С js и jquery возникли проблемы, ровно как и со сборщиком.//
// Я надеюсь, что если я к вам попаду, то смогу этому обучиться,готов вкалывать на поприще js//
	

$(document).ready(function() {


	//tabs//
		$(".tab__item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab__item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	/custom_scrollbar/
		$(".channel__list").overlayScrollbars({
			className:"os-theme-dark",
		});


	//modal form and container//	
	$('.modal_open').click(function() {
		$('.modal').fadeIn();
		return false;
	});	

	$('#user_submit').click(function() {
		$(this).parents('.modal').fadeOut();
		return false;
	});        
	
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal').fadeOut();
		}
	});
	
	$('.modal').click(function(e) {
		if ($(e.target).closest('.modal_container').length == 0) {
			$('.modal').fadeOut();					
		}
	});
	
	//cookie attempt//
    $('#user_submit').click(function () {
        $.cookie('name', $('#username').val(), {
            expires: 7,
            path: '/',
        });
        $('#username_login').val( $('#username').val())
    });

    const userName = $("#username").val($.cookie("name"));


});