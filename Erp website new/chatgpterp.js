// // Section toggle
// function showSection(sectionId) {
//   document.getElementById("login").style.display = "none";
//   document.getElementById("admission").style.display = "none";
//   document.getElementById("notice").style.display = "none";
//   document.getElementById(sectionId).style.display = "block";
// }

// // Login system (LocalStorage)
// function login() {
//   const user = document.getElementById("username").value;
//   const pass = document.getElementById("password").value;
//   const msg = document.getElementById("loginMsg");

//   if (user && pass) {
//     localStorage.setItem("username", user);
//     localStorage.setItem("password", pass);
//     msg.style.color = "green";
//     msg.innerText = "Login successful! Welcome " + user;
//   } else {
//     msg.style.color = "red";
//     msg.innerText = "Please enter username & password.";
//   }
// }

// // Admission form save
// function saveAdmission() {
//   const name = document.getElementById("studentName").value;
//   const email = document.getElementById("studentEmail").value;
//   const course = document.getElementById("studentCourse").value;
//   const msg = document.getElementById("admissionMsg");

//   if (name && email && course) {
//     const studentData = { name, email, course };
//     localStorage.setItem("admissionData", JSON.stringify(studentData));
//     msg.style.color = "green";
//     msg.innerText = "Form submitted successfully!";
//   } else {
//     msg.style.color = "red";
//     msg.innerText = "Please fill all fields.";
//   }
// }
