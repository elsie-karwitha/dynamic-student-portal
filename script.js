// Welcome message and console output
alert("Welcome to the Dynamic Student Portal!");
console.log("Portal loaded successfully.");

// Variables and a conditional
const studentName = "Elsie";
const yearOfStudy = 2;

if (yearOfStudy === 1) {
  console.log(studentName + " is a first-year student.");
} else if (yearOfStudy === 2) {
  console.log(studentName + " is a second-year student.");
} else {
  console.log(studentName + " is a senior student.");
}

// A for loop: log 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Lab 9: show students loaded from students.json

// Add one student object to the page
function addStudentToPage(student) {
  const li = document.createElement("li");
  li.textContent = student.name + " - " + student.course + " (Year " + student.year + ")";
  document.getElementById("student-list").appendChild(li);
}

// Clear the list, add every student, and update the total
function displayAllStudents(students) {
  document.getElementById("student-list").innerHTML = "";

  for (let i = 0; i < students.length; i++) {
    addStudentToPage(students[i]);
  }

  document.getElementById("student-count").textContent =
    "Total registered students: " + students.length;
}

// Fetch the data, then display it
function loadStudents() {
  const errorMessage = document.getElementById("error-message");
  errorMessage.textContent = "";

  fetch("students.json")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Could not load student data (status " + response.status + ")");
      }
      return response.json();
    })
    .then(function (students) {
      displayAllStudents(students);
    })
    .catch(function (error) {
      errorMessage.textContent = "Error: " + error.message;
      console.error(error);
    });
}

// Button click event
document.getElementById("show-students-btn").addEventListener("click", loadStudents);