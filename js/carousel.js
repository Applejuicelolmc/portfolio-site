// Thank you indian lady https://www.youtube.com/watch?app=desktop&v=kHPm_AlxP7U
document.addEventListener('DOMContentLoaded', function () {
	let multipleCardCarousel = document.querySelector("#projects");

	if (window.matchMedia("(min-width: 768px)").matches) {
		// let carousel = new bootstrap.Carousel(multipleCardCarousel, {
		// 	interval: false, // Disable automatic sliding
		// 	wrap: true, // Prevent wrapping at the end
		// }); //unused variable, why??

		let carouselWidth = document.querySelector(".carousel-inner").scrollWidth;
		let cardWidth = document.querySelector(".carousel-item").offsetWidth;
		let scrollPosition = 0;

		document.querySelector("#projects .carousel-control-next").addEventListener("click", () => {
			if (scrollPosition < carouselWidth - cardWidth * 4) {
				scrollPosition += cardWidth;
				document.querySelector("#projects .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
			}
		});

		document.querySelector("#projects .carousel-control-prev").addEventListener("click", () => {
			if (scrollPosition > 0) {
				scrollPosition -= cardWidth;
				document.querySelector("#projects .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
			}
		});
	} else {
		multipleCardCarousel.classList.add("slide");
	}
});