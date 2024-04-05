const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

let currentIndex = 0;

const bannerImg = document.querySelector('.banner-img')
// console.log(bannerImg);
const dotsContainer = document.querySelector('.dots')
// console.log(dotsContainer);
const textParagraph = document.querySelector('#banner p')
// console.log(textParagraph);
const leftArrow = document.querySelector(".arrow_left");
// console.log(leftArrow);
const rightArrow = document.querySelector(".arrow_right");

function initDots() {
	dotsContainer.innerHTML ='';
	slides.forEach((slide, index) => {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		if (index === 0) dot.classList.add('dot_selected');
		dot.addEventListener('click', () => {
			updateSlide(index);
		});
		dotsContainer.appendChild(dot);
	});
}

function updateSlide(index) {
	currentIndex = index;
	const selectedSlide = slides[currentIndex];
	bannerImg.src = selectedSlide.image;
	textParagraph.innerHTML = selectedSlide.tagLine;
	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot, i) => {
		if (i === currentIndex) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
	});
}

function leftClick() {
	console.log('Fleche gauche cliqué');
	if (currentIndex > 0) {
		updateSlide(currentIndex -1);
	} else {
		updateSlide(slides.length -1);
	}
}

function rightClick() {
	console.log('Fleche droite cliquée');
	if (currentIndex < slides.length - 1) {
		updateSlide(currentIndex + 1);
	}
	else {
		updateSlide(0);
	}
}

leftArrow.addEventListener('click', leftClick);
rightArrow.addEventListener('click', rightClick);

initDots();