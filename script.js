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

// Lab 8: students array (placeholder data for now)
const students = ["Amina", "Brian", "Cynthia", "David", "Esther"];

// Add one student to the page
function addStudentToPage(name) {
  const li = document.createElement("li");
  li.textContent = name;
  document.getElementById("student-list").appendChild(li);
}

// Loop through the array and add every student
function displayAllStudents(students) {
  // Clear the list first so repeated clicks don't duplicate names
  document.getElementById("student-list").innerHTML = "";

  for (let i = 0; i < students.length; i++) {
    addStudentToPage(students[i]);
  }
}

// Button click event
document.getElementById("show-students-btn").addEventListener("click", function () {
  displayAllStudents(students);
});