var app = document.querySelectorAll('.popup .our_app-img img');
var arrow = document.querySelectorAll('.arrow');
var showPopup = document.querySelector('.show-popup img');
var closeIcon = document.querySelector('.close_icon');
var journey = document.querySelector('.book_journey button');
var counter = 0;

closeIcon.addEventListener('click', function () {
	app[counter].classList.remove("active");
	counter = 0;
	app[counter].classList.add("active");
	document.querySelector('.popup').classList.remove("active");
});

journey.addEventListener('click', function () {
	document.querySelector('.popup').classList.add("active");
});

showPopup.addEventListener('click', function () {
	document.querySelector('.popup').classList.add("active");
});

// Arrows listener
arrow.forEach(function (item) {
	item.addEventListener('click', function () {
		if (this.classList.contains('arrow_left')) {
			scrollLeft();
		}
		if (this.classList.contains('arrow_right')) {
			scrollRight();
		}
	})
});

// Left and right keys listener
document.addEventListener('keydown', function(event){
	if (event.keyCode == 37) {
		scrollLeft();
	}
	if (event.keyCode == 39) {
		scrollRight();
	}
});

// Slide left
function scrollLeft() {
	if (counter > 0) {
		app[counter].classList.remove("active");
		counter--;
		app[counter].classList.add("active");
	}
}

// Slide right
function scrollRight() {
	if (counter < 3) {
		app[counter].classList.remove("active");
		counter++;
		app[counter].classList.add("active");
	}
}