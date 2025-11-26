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


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-JoPMk5Ox3mR5hQPc_z0vBekXjMFiBMs",
  authDomain: "student-records-c37a3.firebaseapp.com",
  projectId: "student-records-c37a3",
  storageBucket: "student-records-c37a3.firebasestorage.app",
  messagingSenderId: "684734182862",
  appId: "1:684734182862:web:e7547a4a2f2243efa3279f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function calcBalanceFromEdit(){
    const e = Number(e_TotalExpected.value || 0);
    const p = Number(e_AmountPaid.value || 0);
    e_Balance.value = e - p;
  }
  TotalExpected.addEventListener("input", calcBalanceFromAdd);
  AmountPaid.addEventListener("input", calcBalanceFromAdd);
  e_TotalExpected.addEventListener("input", calcBalanceFromEdit);
  e_AmountPaid.addEventListener("input", calcBalanceFromEdit);

  /* ---------- Add Record ---------- */
  addBtn.addEventListener("click", async () => {
    // basic validation
    if (!Names.value.trim() || !RegNo.value.trim()) {
      alert("Please provide Names and RegNo.");
      return;
    }