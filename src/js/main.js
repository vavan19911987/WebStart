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

// функция доиавление нового класса для номера телефона лелает телефон при наведении красным в offer


$(document).ready(function () {

	$('#read2').mouseenter(function () {

		$(this).toggleClass('offer__phone-red');
	});
	$('#read2').mouseleave(function () {

		$(this).toggleClass('offer__phone-red');
	});
});