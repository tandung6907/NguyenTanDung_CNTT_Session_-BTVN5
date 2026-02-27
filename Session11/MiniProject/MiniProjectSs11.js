const students = [
  { id: 1, name: "Nguyễn Tấn Dũng", age: 18, gpa: 9.6, status: "active" },
  { id: 2, name: "Hà Đức Minh", age: 18, gpa: 9.6, status: "active" },
  { id: 3, name: "Đặng Việt Dũng", age: 18, gpa: 8.5, status: "active" },
  { id: 4, name: "Vũ Lê Minh Hiếu", age: 18, gpa: 8.2, status: "active" },
  { id: 5, name: "Phạm Hồ Nam Khánh", age: 18, gpa: 5.8, status: "inactive" },
  { id: 6, name: "Quách Trần Anh", age: 18, gpa: 8.5, status: "active" },
];

function main() {
  let choice;
  do {
    choice = prompt(` --- MENU ---
1. Create Students
2. Read All Students
3. Filter Scholarship Candidates
4. Update Student Profile
5. Delete Record
6. Compliance Verification
7. Academic Statistics
8. Data Normalization
9. Exit
Please enter your selection: `);

    if (choice === null) return;

    switch (choice) {
      case "1":
        addStudents(students);
        break;
      case "2":
        viewStudents(students);
        break;
      case "3":
        filterScholarshipCandidates(students);
        break;
      case "4":
        updateStudentProfile(students);
        break;
      case "5":
        deleteRecord(students);
        break;
      case "6":
        complianceVerification(students);
        break;
      case "7":
        academicStatistics(students);
        break;
      case "8":
        dataNormalization(students);
        break;
      case "9":
        alert("The program is exiting... see you later!!!");
        break;
      default:
        alert("Error: Please enter a choice from 1 to 9!!!");
        break;
    }
  } while (choice !== "9");
}

function validateName(input) {
  if (!input) return false;

  let name = input.trim().replace(/\s+/g, " ");
  if (name === "") return false;

  // Regex hỗ trợ tiếng Việt, không số, không ký tự đặc biệt
  let specialCharRegex = /^[a-zA-ZÀ-ỹ\s]+$/;
  if (!specialCharRegex.test(name)) return false;

  let words = name.split(" ");
  for (let word of words) {
    if (word.charAt(0) !== word.charAt(0).toUpperCase()) return false;
  }

  return true;
}

// CASE 1
function addStudents(obj) {
  let n;
  while (true) {
    n = parseInt(prompt("Enter the number of students to add: "));
    if (n > 0 && !isNaN(n)) {
      break;
    }
    alert("Please enter a positive integer!!!");
  }

  let name = "",
    status = "";
  let age, gpa;
  for (let i = 0; i < n; i++) {
    while (true) {
      name = prompt("Enter the student's name: ");
      if (validateName(name)) break;
      alert("Please enter the name in the correct format!!!");
    }

    while (true) {
      age = parseInt(prompt("Enter the student's age: "));
      if (!isNaN(age) && age > 0 && age < 100) break;
      alert("Please enter a positive integer > 0 and < 100!!!");
    }

    while (true) {
      gpa = parseFloat(prompt("Enter the student's GPA: "));
      if (!isNaN(gpa) && gpa >= 0.0 && gpa <= 10.0) break;
      alert("Please enter a positive integer > 0.0 and < 10.0!!!");
    }

    while (true) {
      status = prompt("Enter the student's status: ").toLowerCase();
      if (status === "active" || status === "inactive") break;
      alert("Please enter the status in the correct format!!!");
    }

    let student = {
      id: obj.length + 1,
      name: name,
      age: age,
      gpa: gpa,
      status: status,
    };

    obj.push(student);
  }
  obj.forEach((name, index) => {
    name.id = index + 1;
  });
  alert("Student information added successfully!!!");
}

// CASE 2:
function viewStudents(obj) {
  let output = "";
  obj.forEach((p) => {
    output += `ID: ${p.id} | NAME: ${p.name} | AGE: ${p.age} | GPA: ${p.gpa} | STATUS: ${p.status}\n`;
  });
  alert(output);
}

// CASE 3
function filterScholarshipCandidates(obj) {
  let filtered = obj.filter((p) => p.gpa >= 8.0);
  if (filtered.length === 0) {
    alert("No student is satisfied!!");
    return;
  }

  let output = "";
  filtered.forEach((p) => {
    output += `ID: ${p.id} | NAME: ${p.name} | AGE: ${p.age} | GPA: ${p.gpa} | STATUS: ${p.status}\n`;
  });

  alert(output);
}

// CASE 4
function updateStudentProfile(obj) {
  let findById;
  while (true) {
    findById = parseInt(prompt("Enter the student ID to search for: "));
    if (!isNaN(findById) && findById > 0) break;
    alert("Please enter a positive integer!!!");
  }
  let updateStudent = obj.findIndex((p) => p.id === findById);
  if (updateStudent === -1) {
    alert(`No student with ID found: ${findById}`);
    return;
  }
  let name, gpa;
  while (true) {
    name = prompt("Enter the student's name: ");
    if (validateName(name)) break;
    alert("Please enter the name in the correct format!!!");
  }
  while (true) {
    gpa = parseFloat(prompt("Enter the student's GPA: "));
    if (!isNaN(gpa) && gpa >= 0.0 && gpa <= 10.0) break;
    alert("Please enter a positive integer > 0.0 and < 4.0!!!");
  }

  obj[updateStudent].name = name;
  obj[updateStudent].gpa = gpa;
  alert("Student has been updated from the list!!!");
}

// CASE 5
function deleteRecord(obj) {
  let deleteId;
  while (true) {
    deleteId = parseInt(prompt("Enter the student ID you want to delete: "));
    if (deleteId > 0 && !isNaN(deleteId)) {
      break;
    }
    alert("Please enter a positive integer!!!");
  }
  let deleteStudent = obj.findIndex((p) => p.id === deleteId);
  if (deleteStudent === -1) {
    alert(`No student with ID found: ${deleteId}`);
    return;
  }
  obj.splice(deleteStudent, 1);
  obj.forEach((name, index) => {
    name.id = index + 1;
  });
  alert("Student has been removed from the list!!!");
}

// CASE 6
function complianceVerification(obj) {
  let ageLessThan18 = obj.some((p) => p.age < 18);
  let homogenizeActiveState = obj.every((p) => p.status === "active");

  let result = `==> TEST RESULT: 
- Does a student under the age of 18 exist: ${ageLessThan18 ? "Yes" : "No"}
- Verify that the entire list has a consistent status === "active": ${homogenizeActiveState ? "True" : "False"}`;

  alert(result);
}

// CASE 7
function academicStatistics(obj) {
  if (obj.length === 0) {
    alert("Student list is empty!");
    return;
  }
  let totalGpa = obj.reduce((sum, p) => sum + Number(p.gpa), 0);
  let averageGpa = totalGpa / obj.length;

  alert("Average GPA of the entire list: " + averageGpa.toFixed(2));
}

// CASE 8
function dataNormalization(obj) {
  let output = "";
  obj.map((p) => {
    return (output += `ID: ${p.id} | NAME: ${p.name.toUpperCase()} | AGE: ${p.age} | GPA: ${p.gpa} | STATUS: ${p.status}\n`);
  });
  alert(output);
}

main();
