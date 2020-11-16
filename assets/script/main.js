$(document).ready(function() {


	/tabs/
		$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	/custom_scrollbar/
		$(".channel_list").overlayScrollbars({
			className:"os-theme-dark",
		});



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
	

    $('#user_submit').click(function () {
        $.cookie('name', $('#username').val(), {
            expires: 7,
            path: '/',
        });
        $('#username_login').val( $('#username').val())
    });

    const userName = $("#username").val($.cookie("name"));


});