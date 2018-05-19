var rightPageNumber = 3;
var leftPageNumber = rightPageNumber + 1; //or, localStorage, later.

var leftPage = document.getElementById("leftPage");
var rightPage = document.getElementById("rightPage");

/*var element = document.getElementById("div1");
element.classList.add("otherclass");*/

function renderPage() {
	leftPage.src = "../quran/hi/png-d150/"+leftPageNumber+".png"; 
	rightPage.src = "../quran/hi/png-d150/"+rightPageNumber+".png";
}

function changePage(increment) {
	


	if ((rightPageNumber > 1) && (rightPageNumber < 604)) {
		//so it wont go beyond the page limits
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

		renderPage();
	}
}

renderPage();
console.log('renderPage');
/*
page change logic flow:
	event buttonLeft press, right press, add +2
	animation to fade away/flip/slideRight, then block:none
	change src of image left/right
	block:display again to show image <--- how would an animation fit here?
*/
