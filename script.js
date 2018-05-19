var rightPageNumber = 3;
var leftPageNumber = rightPageNumber + 1; //or, localStorage, later.

var leftPage = document.getElementById("leftPage");
var rightPage = document.getElementById("rightPage");

function renderPage() {
	leftPage.src = "../quran/hi/png-d150/"+leftPageNumber+".png"; 
	rightPage.src = "../quran/hi/png-d150/"+rightPageNumber+".png";
}

function changePage(increment) {
	if (increment > 0) {
		if (rightPageNumber === 603) {
			return
		} else {
			changePageActual(increment);
		}
	} else if (increment < 0) {
		if (rightPageNumber === -1) {
			return
		} else {
			changePageActual(increment);
		}
	}

	function changePageActual(increment) {
		console.log('start change');
		leftPage.classList.remove("pageEnter");
		rightPage.classList.remove("pageEnter");
		leftPage.classList.add("pageExit");
		rightPage.classList.add("pageExit");

		console.log('change 2');
		rightPageNumber += increment;
		leftPageNumber = rightPageNumber + 1;
		console.log(rightPageNumber);

		console.log('change 3');
		leftPage.classList.remove("pageExit");
		rightPage.classList.remove("pageExit");
		leftPage.classList.add("pageEnter");
		rightPage.classList.add("pageEnter");
		console.log('change 4');
	}  

	renderPage();
}

renderPage();
console.log('renderPage');
