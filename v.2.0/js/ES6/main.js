// Main carousel
const mainArrows = document.querySelectorAll('.main_banner .arrow');
const mainBackgroundImages = document.querySelectorAll('.main_banner .images img');
const indexOfMainBackgroundImages = mainBackgroundImages.length - 1;
let mainCarouselCounter = 0;

for (let item of mainArrows) {
	item.addEventListener('click', () => {
		mainImageArrows(item);
	})
}

function mainImageArrows(item) {
	if (item.classList.contains('back_arrow')) {
		decreaseMainImageCounter();
	}
	if (item.classList.contains('next_arrow')) {
		increaseMainImageCounter();
	}
}

function decreaseMainImageCounter() {
	if (mainCarouselCounter) {
		mainCarouselCounter--;
	} else {
		mainCarouselCounter = indexOfMainBackgroundImages;
	}
	showMainImage();
}

function increaseMainImageCounter() {
	if (mainCarouselCounter < indexOfMainBackgroundImages) {
		mainCarouselCounter++;
	} else {
		mainCarouselCounter = 0;
	}
	showMainImage();
}

function showMainImage() {
	for (let item of mainBackgroundImages) {
		item.classList.remove('active');
	}
	mainBackgroundImages[mainCarouselCounter].classList.add('active');
}

(() => {
	setInterval(increaseMainImageCounter, 10000);
})();
// =========================================