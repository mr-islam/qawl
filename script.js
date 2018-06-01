var rightPageNumber = 3;
var leftPageNumber = rightPageNumber + 1; //or, localStorage, later.

var leftPage = document.getElementById("leftPage");
var rightPage = document.getElementById("rightPage");

function renderPage() {
	console.log('rednertime:: r: '+ rightPageNumber + ' |l: '+ leftPageNumber);
	leftPage.src = "mushaf-green/"+leftPageNumber+".png";
	rightPage.src = "mushaf-green/"+rightPageNumber+".png";
}
function pageExit() {
	console.log('start change');
	leftPage.classList.remove("pageEnter");
	rightPage.classList.remove("pageEnter");
	leftPage.classList.add("pageExit");
	rightPage.classList.add("pageExit");
}
function pageEnter() {
	leftPage.classList.remove("pageExit");
	rightPage.classList.remove("pageExit");
	leftPage.classList.add("pageEnter");
	rightPage.classList.add("pageEnter");
}
function incrementPage(increment) {
	pageExit();
	rightPageNumber += increment;
	leftPageNumber = rightPageNumber + 1;
	pageEnter();
	console.log('incrememnt time:: r: '+ rightPageNumber + ' |l: '+ leftPageNumber);
	renderPage();
	document.getElementById("pageNumberInput").value = rightPageNumber;
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

		if (userPageInput > 604 || userPageInput < 0) {
			return
		} 
		else if (userPageInput % 2 != 0) {
			rightPageNumber = userPageInput;
			leftPageNumber = parseInt(rightPageNumber) + 1; //otherwise, + adds 1 to the string
		} else {
			rightPageNumber = userPageInput - 1;
			leftPageNumber = userPageInput;
		}
		pageEnter();
		renderPage();
	}	
}

function fillSelect() {
	var ele = document.getElementById('surahSelect');
        for (var i = 0; i < surahs.length; i++) {
            // POPULATE SELECT ELEMENT WITH JSON.
            ele.innerHTML = ele.innerHTML +
                '<option value="' + surahs[i]['pageGreen'] + '">' + surahs[i]['name'] + '</option>';
        }
}
function surahSelectPageChange() {
	var selectedSurah = document.getElementById('surahSelect').value;
	if (selectedSurah % 2 != 0) {
			rightPageNumber = selectedSurah;
			leftPageNumber = parseInt(rightPageNumber) + 1; //otherwise, + adds 1 to the string
			console.log('r: '+ rightPageNumber + ' |l: '+ leftPageNumber);
		} else {
			rightPageNumber = selectedSurah - 1;
			leftPageNumber = selectedSurah;
			console.log('r: '+ rightPageNumber + ' |l: '+ leftPageNumber);
	}
	renderPage();
}

fillSelect();
renderPage();
console.log('renderPage');
