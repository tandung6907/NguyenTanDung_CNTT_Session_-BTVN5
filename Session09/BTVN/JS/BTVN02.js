function main() {
  let students = [];
  let choice;
  do {
    choice = prompt(
    ` --- MENU ---
1. Nhập danh sách sinh viên
2. Hiển thị danh sách sinh viên
3. Tìm sinh viên theo tên
4. Xóa sinh viên khỏi danh sách
5. Thoát
Mời bạn nhập vào lựa chọn của mình: `,
    );

    switch (choice) {
      case "1":
        let newStudents = enterStudents();
        students = students.concat(newStudents);
        break;
      case "2":
        printStuList(students);
        break;
      case "3":
        findStudent(students);
        break;
      case "4":
        deleteStudent(students);
        break;
      case "5":
        alert("Hẹn gặp lại...!");
        break;
      default:
        alert("Vui lòng nhập lựa chọn từ 1 đến 5!!!");
        break;
    }
  } while (choice !== "5" && choice !== null);
}

function enterStudents() {
  let inputN = prompt("Nhập số lượng sinh viên cần thêm vào: ");
  let n = parseInt(inputN);

  // Kiểm tra số nguyên dương
  if (isNaN(n) || n <= 0 || !Number.isInteger(n)) {
    alert("Số lượng sinh viên không hợp lệ! Vui lòng nhập số nguyên dương.");
    return [];
  }

  let arr = [];
  for (let i = 0; i < n; i++) {
    let name = "";
    let isValid = false;

    // Vòng lặp yêu cầu nhập lại nếu sai
    while (!isValid) {
      name = prompt(`Nhập tên sinh viên thứ ${i + 1}: `);
      if (validateName(name)) {
        arr.push(name.trim().replace(/\s+/g, " ")); // Lưu tên đã chuẩn hóa
        isValid = true;
      } else {
        alert("Tên không hợp lệ! (Phải viết hoa chữ cái đầu, không chứa số/ký tự đặc biệt)");
      }
    }
  }

  alert("Nhập danh sách thành công!!!");
  return arr;
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

function printStuList(students) {
    if (students.length === 0) {
        alert("Danh sách sinh viên đang trống!!");
        return;
    }

    let result = "--- DANH SÁCH SINH VIÊN ---\n";
    students.forEach((p, i) => {
        result += `${i+1} ${p}\n`
    });
    alert(result);
}

// 3. Tìm sinh viên theo tên
function findStudent(students) {
  if (students.length === 0) {
    alert("Danh sách trống!");
    return;
  }

  let name = prompt("Nhập tên sinh viên cần tìm:");

  if (!name) return;

  let found = students.find(student =>
    student.toLowerCase() === name.toLowerCase()
  );

  if (found) {
    alert("Tìm thấy sinh viên: " + found);
  } else {
    alert("Sinh viên không có trong danh sách!");
  }
}

// 4. Xóa sinh viên (xóa người đầu tiên nếu trùng tên)
function deleteStudent(students) {
  if (students.length === 0) {
    alert("Danh sách trống!");
    return;
  }

  let name = prompt("Nhập tên sinh viên cần xóa:");

  if (!name) return;

  let index = students.findIndex(student =>
    student.toLowerCase() === name.toLowerCase()
  );

  if (index !== -1) {
    students.splice(index, 1);
    alert("Đã xóa sinh viên khỏi danh sách!");
  } else {
    alert("Sinh viên không tồn tại!");
  }
}

main();
