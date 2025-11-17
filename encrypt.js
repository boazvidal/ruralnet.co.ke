//FULL PAGE PROTECTION SCRIPT -->


	//Right-Click
	document.addEventListener('contextmenu', event => event.preventDefault());


//F12

	document.onkeydown = function(e) {

	//F12
	if (e.keyCode == 123) {
		return false;
	}


//Ctrl+Shift+I or Ctrl+Shift+J or Ctrl+Shift+C

	if (e.ctrlKey && e.shiftKey && (
		e.keyCode === 73 ||
		e.keyCode === 74 ||
		e.keyCode === 67
	)) {
		return false;
	}

//Ctrl+U View Source-->

	if (e.ctrlKey && e.keyCode === 85) {
		return false;
	}

	//Ctrl+C Copy
	if (e.ctrlKey && e.keyCode === 67) {
		return false;
	}
};
