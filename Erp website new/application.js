const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page reload

  // Get form values
  const fullname = document.getElementById('fullname').value;
  const dob = document.getElementById('dob').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const course = document.getElementById('course').value;
  const marks = document.getElementById('marks').value;

  // Create an object for the applicant
  const applicant = {
    fullname,
    dob,
    email,
    phone,
    course,
    marks
  };

  // Get existing applicants from localStorage
  let applicants = JSON.parse(localStorage.getItem('applicants')) || [];

  // Add new applicant
  applicants.push(applicant);

  // Save back to localStorage
  localStorage.setItem('applicants', JSON.stringify(applicants));

  alert('Application submitted successfully!');
  form.reset();
});
