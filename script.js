var rightPageNumber = localStorage.getItem("rightPageNumberStored") || 3;
var leftPageNumber = parseInt(rightPageNumber) + 1;

var leftPageElement = document.getElementById("leftPage");
var rightPageElement = document.getElementById("rightPage");

var userPageInput = document.getElementById("pageNumberInput").value;
userPageInput = localStorage.getItem("rightPageNumberStored") || 2;
var userPageInputInt = parseInt(userPageInput);

function changePage() { // changes page to whatevers in input
	console.log("change page called");
	if (userPageInputInt < 604 && userPageInputInt > -1) {
		if (userPageInputInt % 2 === 0) {
			leftPageNumber = userPageInputInt;
			rightPageNumber = leftPageNumber - 1;
		} else {
			rightPageNumber = userPageInputInt;
			leftPageNumber = parseInt(rightPageNumber) + 1;
		}
		localStorage.setItem("rightPageNumberStored", rightPageNumber);
		updatePageView();
		document.getElementById("pageNumberInput").value = JSON.stringify(userPageInputInt);
	}
}
function choicePage() {
	var userPageInput = document.getElementById("pageNumberInput").value;
	var userPageInputInt = parseInt(userPageInput);
	if (userPageInputInt % 2 === 0) { // this and below is repeated changePage()…
		leftPageNumber = userPageInputInt;
		rightPageNumber = leftPageNumber - 1;
	} else {
		rightPageNumber = userPageInputInt;
		leftPageNumber = parseInt(rightPageNumber) + 1;
	}
	localStorage.setItem("rightPageNumberStored", rightPageNumber);
	updatePageView();
}
function turnPage(increment) {
	userPageInputInt += parseInt(increment);
	changePage();
}
function selectSurah() { // working for even pages, not odd
	var selectedSurah = parseInt(document.getElementById("surahSelect").value);
	userPageInputInt = selectedSurah;
	console.log(selectedSurah);
	console.log(userPageInputInt);
	changePage();
}
function changeZoom(increment) {
	var currentZoom = parseInt(localStorage.getItem("currentZoomStored")) || 100;
	currentZoom += increment;
	console.log("zoom="+currentZoom);
	if (currentZoom < 100) {
		document.body.style.width = 100 + "%";
		document.getElementById("wrapper").style["max-width"] = currentZoom + "%";
	} else if (currentZoom > 100) {
		document.body.style.width = currentZoom + "%";
		document.getElementById("wrapper").style["max-width"] = 100 + "%";
	}
	localStorage.setItem("currentZoomStored", currentZoom);
}
function updatePageView() {
	console.log("page set: r="+ rightPageNumber + " l="+ leftPageNumber);
	leftPage.src = "assets/mushaf-green/"+leftPageNumber+".png";
	rightPage.src = "assets/mushaf-green/"+rightPageNumber+".png";
}

updatePageView(); //resume reading from last place
changeZoom(0); //to get last zoom set

(function() { // fills in <select> from surahs.js
    var ele = document.getElementById("surahSelect");
    for (let i = 0; i < surahs.length; i++) {
        ele.innerHTML = ele.innerHTML +
            '<option value="' + surahs[i]['pageGreen'] + '">' + surahs[i]['name'] + '</option>'; 
    }
})();