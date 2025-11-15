// STUDENT CRUD USING LOCAL STORAGE
let students = JSON.parse(localStorage.getItem("students")) || [];

// Load table initially
displayStudents();

function displayStudents() {
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  students.forEach((student, index) => {
    tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.course}</td>
                <td>${student.email}</td>
                <td>${student.phone}</td>
                <td>
                    <button class="btn btn-sm btn-warning" onclick="openEdit(${index})">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>`;
  });
}

// OPEN CREATE MODAL
function openCreate() {
  document.getElementById("modalTitle").innerText = "Add Student";
  document.getElementById("studentId").value = "";
  clearForm();
}

// OPEN EDIT MODAL
function openEdit(index) {
  document.getElementById("modalTitle").innerText = "Edit Student";

  const s = students[index];
  document.getElementById("studentId").value = index;
  document.getElementById("name").value = s.name;
  document.getElementById("course").value = s.course;
  document.getElementById("email").value = s.email;
  document.getElementById("phone").value = s.phone;

  const modal = new bootstrap.Modal(document.getElementById("studentModal"));
  modal.show();
}

// SAVE OR UPDATE
function saveStudent() {
  const id = document.getElementById("studentId").value;

  const studentData = {
    name: document.getElementById("name").value,
    course: document.getElementById("course").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
  };

  // Update
  if (id !== "") {
    students[id] = studentData;
  }
  // Create
  else {
    students.push(studentData);
  }

  localStorage.setItem("students", JSON.stringify(students));
  displayStudents();

  // Close modal
  bootstrap.Modal.getInstance(document.getElementById("studentModal")).hide();

  clearForm();
}

// DELETE STUDENT
function deleteStudent(index) {
  if (confirm("Are you sure you want to delete this student?")) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
  }
}

// CLEAR FORM
function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("course").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}
