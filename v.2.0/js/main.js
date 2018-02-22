'use strict';

// Main carousel
var mainArrows = document.querySelectorAll('.main_banner .arrow');
var mainBackgroundImages = document.querySelectorAll('.main_banner .images img');
var indexOfMainBackgroundImages = mainBackgroundImages.length - 1;
var mainCarouselCounter = 0;

var _loop = function _loop(item) {
	item.addEventListener('click', function () {
		mainImageArrows(item);
	});
};

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = mainArrows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var item = _step.value;

		_loop(item);
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
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
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = mainBackgroundImages[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var item = _step2.value;

			item.classList.remove('active');
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	mainBackgroundImages[mainCarouselCounter].classList.add('active');
}

(function () {
	setInterval(increaseMainImageCounter, 10000);
})();
// =========================================