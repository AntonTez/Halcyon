$(document).ready(function () {
	// services-iphone__slider settings
	$('.services-iphone__slider').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		infinite: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 2500,
		pauseOnDotsHover: true
	});
	// portfolio__slider settings
	$('.portfolio__slider').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 2500,
		pauseOnDotsHover: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});

	$('.team__slider').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 2500,
		pauseOnDotsHover: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
	// menu burger settings
	$('.header__burger',).click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.header__menu-link').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	// For browsers that do not support the scroll-behavior property
	// Add smooth scrolling to all links
	$("a").on('click', function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 500);
	});
});


//  Scroll animations
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}