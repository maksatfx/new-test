// -------- Скрол вниз главной страныцы ---------//
function scrollTo(element) {
	window.scroll({
		left: 0,
		top: element.offsetTop,
		behavior: "smooth"
	})
}

const button = document.querySelector('#btn');
const footer = document.querySelector('#section');
button.value = 'pit';

button.addEventListener('click', function () {
	scrollTo(section);

});

