function student(name, age) {
    this.fullname = name;
    this.age = age;
}

let info = [];
let count = 0;

function addStudent() {
    let nameInput = document.getElementById('name');
    let ageInput = document.getElementById('age');
    let inputName = nameInput.value;
    let inputAge = parseInt(ageInput.value);

    if (isNaN(inputAge)) {
        alert('Age should be a number');
        ageInput.value = ''; // Clear age input field
        ageInput.focus(); // Set focus on age input field
        return;
    }

    let newStudent = new student(inputName, inputAge);
    info.push(newStudent);
    count++;
    displayStudents();
    nameInput.value = ''; // Clear name input field
    ageInput.value = ''; // Clear age input field
    nameInput.focus(); // Set focus on name input field
}

function removeStudent(index) {
    info.splice(index, 1); // Remove student at the specified index
    displayStudents(); // Re-display the updated student list
}

function displayStudents() {
    let tableBody = document.getElementById('studentTableBody');
    tableBody.innerHTML = ''; // Clear existing rows
    info.forEach(function (student, index) {
        let row = tableBody.insertRow();
        let cellNo = row.insertCell(0);
        let cellName = row.insertCell(1);
        let cellAge = row.insertCell(2);
        let cellAction = row.insertCell(3); // New cell for action buttons
        cellNo.textContent = index + 1;
        cellName.textContent = student.fullname;
        cellAge.textContent = student.age;
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function () {
            removeStudent(index); // Call removeStudent function with the index
        };
        cellAction.appendChild(removeButton);
    });
}
