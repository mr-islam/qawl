var rightPageNumber = 3;
var leftPageNumber = rightPageNumber + 1; //or, localStorage, later.

var leftPage = document.getElementById("leftPage");
var rightPage = document.getElementById("rightPage");

function renderPage() {
	leftPage.src = "../quran/hi/png-d150/"+leftPageNumber+".png"; //gotta fix dir structure later
	rightPage.src = "../quran/hi/png-d150/"+rightPageNumber+".png";
}
function pageExit() {
	console.log('start change');
	leftPage.classList.remove("pageEnter");
	rightPage.classList.remove("pageEnter");
	leftPage.classList.add("pageExit");
	rightPage.classList.add("pageExit");
}
function pageEnter() {
	console.log('change 3');
	leftPage.classList.remove("pageExit");
	rightPage.classList.remove("pageExit");
	leftPage.classList.add("pageEnter");
	rightPage.classList.add("pageEnter");
	console.log('change 4');
}
function incrementPage(increment) {
	pageExit();
	rightPageNumber += increment;
	leftPageNumber = rightPageNumber + 1;
	pageEnter();
	renderPage();
}

function changePage(method, increment) {

	if (method == "increment") {
		if (increment > 0) {
			if (rightPageNumber === 603) {
				return
			} else {
				incrementPage(increment);
			}
		} else if (increment < 0) {
			if (rightPageNumber === -1) {
				return
			} else {
				incrementPage(increment);
			}
		}
	} else if (method == "manual") {
		var userPageInput = document.getElementById("pageNumberInput").value;
		console.log('page choice: '+userPageInput);
		pageExit();

		if (userPageInput % 2 != 0) {
			rightPageNumber = userPageInput;
			leftPageNumber = parseInt(rightPageNumber) + 1; //otherwise, + adds 1 to the string
			console.log('r: '+ rightPageNumber + ' |l: '+ leftPageNumber);
		} else {
			rightPageNumber = userPageInput - 1;
			leftPageNumber = userPageInput;
			console.log('r: '+ rightPageNumber + ' |l: '+ leftPageNumber);
		}
		pageEnter();
		renderPage();
	}	
}	

renderPage();
console.log('renderPage');
