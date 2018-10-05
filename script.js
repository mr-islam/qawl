const { ipcRenderer } = require('electron');
const Analytics = require("electron-ga").Analytics;
const analytics = new Analytics('UA-120295167-1');
const mousetrap = require('mousetrap');
const dragscroll = require('dragscroll');
const tippy = require('tippy.js');

var rightPageNumber = localStorage.getItem("rightPageNumberStored") || 2;
var leftPageNumber = parseInt(rightPageNumber) + 1;
var rightPageElement = document.getElementById("rightPage");
var leftPageElement = document.getElementById("leftPage");

var userPageInput = document.getElementById("pageNumberInput").value;
userPageInput = localStorage.getItem("rightPageNumberStored") || 2;
var userPageInputInt = parseInt(userPageInput);

function applyPage() {
	console.log("page set: r="+ rightPageNumber + " l="+ leftPageNumber);
	leftPage.style.opacity = 0.6;
	rightPage.style.opacity = 0.6;
	setTimeout(function(){ 
		leftPage.src = "assets/mushaf/"+leftPageNumber+".png";
		rightPage.src = "assets/mushaf/"+rightPageNumber+".png";
		leftPage.style.opacity = 1;
		rightPage.style.opacity = 1;
	}, 25);
	
	localStorage.setItem("rightPageNumberStored", rightPageNumber);
	document.getElementById("pageNumberInput").value = JSON.stringify(userPageInputInt);
}
function checkPage() { // generic function called by specific user actions, gateway to applyPage
	if (userPageInputInt < 605 && userPageInputInt > -1) { // ensures possible page
		if (userPageInputInt % 2 === 0) {
			leftPageNumber = userPageInputInt;
			rightPageNumber = leftPageNumber - 1;
		} else {
			rightPageNumber = userPageInputInt;
			leftPageNumber = parseInt(rightPageNumber) + 1;
		}
	}
}

function quickSwitch() {
	var lastLastPage = userPageInputInt
	userPageInputInt = parseInt(localStorage.getItem("lastPage"));
	checkPage();
	applyPage();
	updateDropdown();
	localStorage.setItem("lastPage", lastLastPage);
}

function numberOfPage() {
	localStorage.setItem("lastPage", userPageInputInt);
	userPageInput = document.getElementById("pageNumberInput").value;
	userPageInputInt = parseInt(userPageInput)
	checkPage();
	applyPage();
	updateDropdown();
	document.getElementById("pageNumberInput").blur()
}
function checkDigits() {
	var id = document.getElementById('pageNumberInput');
	if (id.value.length == 3) {
		id.blur();
		return numberOfPage();
	}
}

function turnPage(increment) {
	localStorage.setItem("lastPage", userPageInputInt);
	if (userPageInputInt + increment > 0 && userPageInputInt + increment < 605) {
		userPageInputInt += parseInt(increment);
		checkPage();
		applyPage();
		updateDropdown();
	} // TODO: else {error tooltip}
}

function surahDropdown() {
	localStorage.setItem("lastPage", userPageInputInt);
	var selectedSurah = parseInt(document.getElementById("surahSelect").value);
	userPageInputInt = selectedSurah;
	checkPage();
	applyPage();
	document.getElementById("surahSelect").blur()
}
function surahChange(increment) {
	increment = parseInt(increment);
	localStorage.setItem("lastPage", userPageInputInt);
	for (let i = surahs.length - 1; i >= 0; i--) {
		if (userPageInputInt < surahs[i]['pageGreen']) {
			var surahSelect = document.getElementById("surahSelect");
			surahSelect.value = surahs[i-1+increment]['pageGreen']
		}
	}
	surahDropdown();
}
function updateDropdown() {
	for (let i = surahs.length - 1; i >= 0; i--) {
		if (userPageInputInt < surahs[i]['pageGreen']) {
			var surahSelect = document.getElementById("surahSelect");
			surahSelect.value = surahs[i-1]['pageGreen']
		}
	}
}

function changeZoom(increment) {
	var currentZoom = parseInt(localStorage.getItem("currentZoomStored")) || 100;
	currentZoom += increment;
	console.log("zoom="+currentZoom);
	if (currentZoom <= 100) { // zoomout and in work better respectively with a different
		document.body.style.width = 100 + "%"; // ^parent element being styled each time
		document.getElementById("wrapper").style["max-width"] = currentZoom + "%";
	} else if (currentZoom > 100 && currentZoom < 151) {
		document.body.style.width = currentZoom + "%";
		document.getElementById("wrapper").style["max-width"] = 100 + "%";
	}
	localStorage.setItem("currentZoomStored", currentZoom);
}

function openOnQuranCom() {
	for (let i = surahs.length - 1; i >= 0; i--) {
		if (userPageInputInt >= surahs[i]['pageGreen']) {
			window.open('https://www.quran.com/' + parseInt(i+1), '_blank');
			return
		}
	}
}

var darkCss = document.getElementById("darkCss");
var lightCss = document.getElementById("lightCss");
function toggleTheme() {
	if (localStorage.getItem("testTheme") == null) { //for first use
		localStorage.setItem("testTheme", "light")
	}
	if (localStorage.getItem("lastTheme") == "light") {
		darkCss.media = '';
		lightCss.media = 'none';
		localStorage.setItem("lastTheme", "dark")
		} else {
		darkCss.media = 'none';
		lightCss.media = '';
		localStorage.setItem("lastTheme", "light")
	}
}
function lastTheme() {
	if (localStorage.getItem("lastTheme") == "dark") {
		darkCss.media = '';
		lightCss.media = 'none';
		localStorage.setItem("lastTheme", "dark")
	} else {
		darkCss.media = 'none';
		lightCss.media = '';
		localStorage.setItem("lastTheme", "light")
	}
}

function toggleFullscreen() {
	ipcRenderer.send('fullScreen');
}


function onInactive(ms, cb) {
    var wait = setTimeout(cb, ms);
	document.onmousemove = document.mousedown = document.mouseup = document.onkeydown = 
	document.onkeyup = document.focus = document.ontouchstart = document.onclick = 
	document.onkeypress = function () {
		clearTimeout(wait);
		document.getElementById("footer").style.opacity = 1;
		document.body.style.cursor = "pointer";
		wait = setTimeout(cb, ms);
    };
}
onInactive(5000, function () {
	if (isOnDiv === true) {
		return;
	} else {
		document.getElementById("footer").style.opacity = 0;
		document.body.style.cursor = "none";
		tippy.hideAllPoppers();
	}
});
var isOnDiv; //so if mouse is resting on footer, it'll keep showing
document.getElementById("footer").addEventListener("mouseenter", function() {isOnDiv=true;});
document.getElementById("footer").addEventListener("mouseout", function() {isOnDiv=false;});

var footer = document.getElementById("footer")
footer.onmouseover = function () {
	document.body.classList.remove("dragscroll");
	dragscroll.reset();
	document.body.style.cursor = "default"; 
}
footer.onmouseout = function () {
	document.getElementById("pageNumberInput").blur();
	document.getElementById("surahSelect").blur();
	document.body.classList.add("dragscroll");
	dragscroll.reset();
	document.body.style.cursor = "pointer"; 
}

tippy('[title]', {
	delay: [200, 400]
})


///////////  initialization:
applyPage();
lastTheme();
changeZoom(0);
(function() {
    var ele = document.getElementById("surahSelect");
    for (let i = 0; i < surahs.length; i++) {
        ele.innerHTML = ele.innerHTML +
            '<option value="' + surahs[i]['pageGreen'] + '">' +
            parseInt(i+1) + '. ' + surahs[i]['name'] + '</option>';
    }
})();
document.getElementById("pageNumberInput").value = JSON.stringify(userPageInputInt)
updateDropdown();
(async function() {
	await analytics.send('screenview', { cd: 'Reader' });
	await analytics.send('event', { ec: 'Scroll', ea: 'scrollto', el: 'row', ev: 123 });
})();


mousetrap.bind("d", function() {
	let element = document.getElementById("turnRight");
	element.classList.add("click");
	element.click();
	setTimeout(function(){ element.classList.remove("click") }, 200);
});
mousetrap.bind("a", function() {
	let element = document.getElementById("turnLeft");
	element.classList.add("click");
	element.click(); //timeout below simulates button press:
	setTimeout(function(){ element.classList.remove("click") }, 200);
});
mousetrap.bind("w", function() {
	let element = document.getElementById("surahSelect");
	element.classList.add("click");
	surahChange(+1);
	setTimeout(function(){ element.classList.remove("click") }, 200);
});
mousetrap.bind("s", function() {
	let element = document.getElementById("surahSelect");
	element.classList.add("click");
	surahChange(-1);
	setTimeout(function(){ element.classList.remove("click") }, 200);
});
mousetrap.bind("=", function() {
	let element = document.getElementById("zoomIn");
	element.classList.add("click");
	element.click();
	setTimeout(function(){ element.classList.remove("click") }, 200);
});
mousetrap.bind("-", function() {
	let element = document.getElementById("zoomOut");
	element.classList.add("click");
	element.click();
	setTimeout(function(){ element.classList.remove("click") }, 200);
});
mousetrap.bind("f11", function() {
	let element = document.getElementById("fullscreen");
	element.classList.add("click");
	element.click();
	setTimeout(function(){ element.classList.remove("click") }, 200);
});
mousetrap.bind("t", function() {
	let element = document.getElementById("toggleTheme");
	element.classList.add("click");
	element.click();
	setTimeout(function(){ element.classList.remove("click") }, 200);
});
mousetrap.bind("q", function() {
	let element = document.getElementById("openOnQuranCom");
	element.classList.add("click");
	element.click();
	setTimeout(function(){ element.classList.remove("click") }, 200);
});
mousetrap.bind("e", function() {
	let element = document.getElementById("quickSwitch");
	element.classList.add("click");
	element.click();
	setTimeout(function(){ element.classList.remove("click") }, 200);
});
mousetrap.bind("ctrl+shift+i", function () {ipcRenderer.send('devTools')})
mousetrap.bind("ctrl+=", function() {document.body.style.zoom = 1.2})
mousetrap.bind("ctrl+0", function() {document.body.style.zoom = 1.1})
mousetrap.bind("ctrl+-", function() {document.body.style.zoom = 1})
mousetrap.bind(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], function() {
	document.getElementById("pageNumberInput").focus();
});