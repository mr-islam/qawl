var rightPageNumber = localStorage.getItem("rightPageNumberStored") || 3;
var leftPageNumber = parseInt(rightPageNumber) + 1;

var leftPageElement = document.getElementById("leftPage");
var rightPageElement = document.getElementById("rightPage");

var userPageInput = document.getElementById("pageNumberInput").value;
userPageInput = localStorage.getItem("rightPageNumberStored") || 2;
var userPageInputInt = parseInt(userPageInput);

function changePage() { // generic function called by specific user actions
	if (userPageInputInt < 604 && userPageInputInt > -1) { // ensures possible page
		if (userPageInputInt % 2 === 0) {
			leftPageNumber = userPageInputInt;
			rightPageNumber = leftPageNumber - 1;
		} else {
			rightPageNumber = userPageInputInt;
			leftPageNumber = parseInt(rightPageNumber) + 1;
		}
		localStorage.setItem("rightPageNumberStored", rightPageNumber);

		console.log("page set: r="+ rightPageNumber + " l="+ leftPageNumber);
		leftPage.src = "assets/mushaf-green/"+leftPageNumber+".png";
		rightPage.src = "assets/mushaf-green/"+rightPageNumber+".png";

		document.getElementById("pageNumberInput").value = JSON.stringify(userPageInputInt);
	}
}
function numberOfPage() {
	userPageInput = document.getElementById("pageNumberInput").value;
	userPageInputInt = parseInt(userPageInput)
	changePage();
}
function turnPage(increment) {
	userPageInputInt += parseInt(increment);
	changePage();
}
function surahDropdown() { // working for even pages, not odd
	var selectedSurah = parseInt(document.getElementById("surahSelect").value);
	userPageInputInt = selectedSurah;
	changePage();
}
function changeZoom(increment) {
	var currentZoom = parseInt(localStorage.getItem("currentZoomStored")) || 100;
	currentZoom += increment;
	console.log("zoom="+currentZoom);
	if (currentZoom <= 100) { // zoomout and in work better respectively with a different
		document.body.style.width = 100 + "%"; // ^parent element being styled each time
		document.getElementById("wrapper").style["max-width"] = currentZoom + "%";
	} else if (currentZoom > 100) {
		document.body.style.width = currentZoom + "%";
		document.getElementById("wrapper").style["max-width"] = 100 + "%";
	}
	localStorage.setItem("currentZoomStored", currentZoom);
}
function openOnQuranCom() {
	for (var i = surahs.length - 1; i >= 0; i--) {  // for uses countdown, so if using >= works easily
		if (userPageInputInt >= surahs[i]['pageGreen']) {
			console.log('https://www.quran.com/' + parseInt(i+1), '_blank');
			window.open('https://www.quran.com/' + parseInt(i+1), '_blank');
			return
		}
	}
}

// initialization
changePage(); //resume reading from last page
changeZoom(0); //get last zoom set from storage
(function() { //fills in <select> with values from surahs.js
    var ele = document.getElementById("surahSelect");
    for (let i = 0; i < surahs.length; i++) {
        ele.innerHTML = ele.innerHTML +
            '<option value="' + surahs[i]['pageGreen'] + '">' +
            parseInt(i+1) + '. ' + surahs[i]['name'] + '</option>';
    }
})();
document.getElementById("pageNumberInput").value = JSON.stringify(userPageInputInt)

document.onkeydown = function(e) { //keyboard shortcuts
  if (e.which == 37) {
    turnPage(+2);
  } else if (e.which == 39) {
    turnPage(-2);
  } else if (e.which >= 48 && e.which <= 57) {
    document.getElementById("pageNumberInput").focus();
  } else if (e.which == 173) {
    changeZoom(-5);
  } else if (e.which == 61) {
    changeZoom(+5);
  }
}
