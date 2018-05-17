var rightPageNumber = 3;
var leftPageNumber = rightPageNumber + 1;

function setPage() {
	document.getElementById("leftPage").src = "../quran/hi/png-d150/"+leftPageNumber+".png"; 
	document.getElementById("rightPage").src = "../quran/hi/png-d150/"+rightPageNumber+".png";
}

function changePage(increment) {
	rightPageNumber += increment;
	leftPageNumber = rightPageNumber + 1
	setPage();
}

setPage();
/*
page change logic flow:
	event buttonLeft press, right press, add +2
	animation to fade away/flip/slideRight, then block:none
	change src of image left/right
	block:display again to show image <--- how would an animation fit here?
*/
