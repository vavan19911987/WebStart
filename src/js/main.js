// функция вывода модального окна

$('[data-modal=modall]').on('click', function () {
	$('.overlay,#modal').fadeIn('slow');
});
$('[data-modal=click]').on('click', function () {
	$('.overlay,#order').fadeIn('slow');
});
$('.modal__close').on('click', function () {
	$('.overlay, #order').fadeOut('slow');
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
	validateForm('#modal-form');

    // $('.modal__close').on('click', function () {
    //     $('.overlay').fadeOut('slow');
    // });


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


$('form').submit(function (e) {
	e.preventDefault();
	$.ajax({
		type: "POST",
		url: "mailer/smart.php",
		data: $(this).serialize(),
	}).done(function () {
		$(this).find('input').val('');
		$('.overlay,#modal,#order').fadeOut();
		$('.overlay').fadeIn('slow');


		$('form').trigger('reset');
	});
	return false;
	

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




