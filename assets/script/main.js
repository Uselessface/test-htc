

$(document).ready(function() {


	//tabs//
	$(".tab__item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab__item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//custom_scrollbar/
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
		let exp = props.expires
		if (typeof exp == "number" && exp) {
			let d = new Date()
			d.setTime(d.getTime() + exp*1000)
			exp = props.expires = d
		}
		if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }

		value = encodeURIComponent(value)
		let updatedCookie = name + "=" + value
		for(let propName in props){
			updatedCookie += "; " + propName
			let propValue = props[propName]
			if(propValue !== true){ updatedCookie += "=" + propValue }
		}
		document.cookie = updatedCookie
	}

	function getCookie(name) {
		let matches = document.cookie.match(new RegExp(
		  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
		))
		return matches ? decodeURIComponent(matches[1]) : undefined 
	}

	_('#user_submit').onclick = function() {
	  setCookie('name', _('#username').value);
	  _('#loggedIn').value = getCookie('name');
	  $('#first').addClass('logout').text('Выйти');
	};

	_('#loggedIn').onclick = function() {
		this.value = ' ';
	};

	_('#loggedIn').onchange = function() {
		setCookie('name', this.value);
		_('#loggedIn').value = this.value;
	}

    
});