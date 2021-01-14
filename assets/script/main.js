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
	$('.modal__open').click(function() {
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
		if ($(e.target).closest('.modal__container').length == 0) {
			$('.modal').fadeOut();					
		}
	});




	const _ = (selector) => document.querySelector(selector);

	function setCookie(name, value, props) {
		props = props || {}
		var exp = props.expires
		if (typeof exp == "number" && exp) {
			var d = new Date()
			d.setTime(d.getTime() + exp*1000)
			exp = props.expires = d
		}
		if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }

		value = encodeURIComponent(value)
		var updatedCookie = name + "=" + value
		for(var propName in props){
			updatedCookie += "; " + propName
			var propValue = props[propName]
			if(propValue !== true){ updatedCookie += "=" + propValue }
		}
		document.cookie = updatedCookie
	}

	function getCookie(name) {
		var matches = document.cookie.match(new RegExp(
		  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
		))
		return matches ? decodeURIComponent(matches[1]) : undefined 
	}

	_('#user_submit').onclick = function() {
	  setCookie('name', _('#username').value);
	  _('#loggedIn').value = getCookie('name');
	  $('#first').addClass('logout');
	  $('#first').text('Выйти');
	};

	_('#loggedIn').onclick = function() {
		this.value = ' ';
	};

	_('#loggedIn').onchange = function() {
		setCookie('name', this.value);
		_('#loggedIn').value = this.value;
	}

    
});