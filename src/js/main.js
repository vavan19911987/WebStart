// функция вывода модального окна

$(document).ready(function () {
	var button = $('#button');
	var modal = $('#modal');
	var close = $('#close');

	button.on('click', function () {

		modal.addClass('modal_active')
	});

	close.on('click', function () {

		modal.removeClass('modal_active')
	});
});

// функция скролинг кнопки вверх

$(document).ready(function () {

	$(window).scroll(function () {

		if ($(this).scrollTop() != 0) {

			$('#up').fadeIn();

		} else {

			$('#up').fadeOut();

		}

	});

	$('#up').click(function () {

		$('body,html').animate({ scrollTop: 0 }, 500);

	});
});


// функция доиавление нового класса для номера телефона лелает телефон при наведении красным в navbar

$(document).ready(function () {

	$('#read').mouseenter(function () {

		$(this).toggleClass('navbar__phone-red');
	});
	$('#read').mouseleave(function () {

		$(this).toggleClass('navbar__phone-red');
	});
});
$(document).ready(function () {

	$('#red3').mouseenter(function () {

		$(this).toggleClass('contacts__phone-red');
	});
	$('#red3').mouseleave(function () {

		$(this).toggleClass('contacts__phone-red');
	});
});



$(document).ready(function () {
	function validateForm(form) {
		$(form).validate({
			rules: {
				name: "required",
				phone: "required",
				email: {
					required: true,
					email: true
				}
	
			},
			messages: {
				name: "Пожалуйста введите своё Имя",
				phone: "Пожалуйста введите свой телефон",
				email: {
					required: "Пожалуйста введите свой почтовый адрес",
					email: "Неправильно введён адрес почты"
				}
			}
		});
	}
	
	validateForm('#offer-form');
	validateForm('#brif-form');



// так же добавляет класс logo
// функция доиавление нового класса для номера телефона лелает телефон при наведении красным в offer 
$('#read2').mouseenter(function () {

		$(this).toggleClass('offer__phone-red');
	});
	$('#read2').mouseleave(function () {

		$(this).toggleClass('offer__phone-red');
	});
	
		$('#logo').click(function(){

		$(this).toggleClass('logo')

	});

});



	

// слайдер с использованием библиотеки slick

$(document).ready(function () {
	$('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: $('.arrows__left'),
		nextArrow: $('.arrows__right'),
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				 slidesToShow: 2,
				 slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 760,
			  settings: {
				 centerPadding: '40px',
				 slidesToShow: 1,
				 slidesToScroll: 1,
			  }
			},
		
		 ]
	});
});


// $(document).ready(function () {

// 	$('#card').mouseenter(function () {

// 		$(this).toggleClass('card__image');
// 	});
// 	$('#card').mouseleave(function () {

// 		$(this).toggleClass('card__image');
// 	});
// });

