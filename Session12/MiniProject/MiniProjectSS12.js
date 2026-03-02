let students = [
  { id: 1, name: "Dũng", age: 18, gpa: 9.0, status: "active" },
  { id: 2, name: "Khánh", age: 18, gpa: 8.0, status: "inactive" },
  { id: 3, name: "An", age: 19, gpa: 7.5, status: "active" },
  { id: 4, name: "Minh", age: 20, gpa: 6.8, status: "active" },
  { id: 5, name: "Linh", age: 18, gpa: 8.9, status: "inactive" },
  { id: 6, name: "Hà", age: 21, gpa: 9.5, status: "active" },
];

// ===== STATE (quan trọng) =====
let currentPage = 1;
let pageSize = 2;

let searchName = "";
let filterStatus = "all";
let sortOrder = "tăng";

// ===== MAIN MENU =====
function main() {
  let choice;
  do {
    choice = prompt(` --- MENU ---
1. Create Student
2. Update Student
3. Soft Delete Student
4. Restore Student
5. View Students
6. Analytics Dashboard
7. Exit

Mời bạn nhập vào lựa chọn của mình:`);

    if (choice === null) break;

    switch (choice) {
      case "1":
        createStudents(students);
        break;
      case "2":
        updateStudents(students);
        break;
      case "3":
        softDeleteStudent(students);
        break;
      case "4":
        restoreStudent(students);
        break;
      case "5":
        setupViewOptions();
        viewStudents(students);
        paginationMenu();
        break;
      case "6":
        analyticsDashboard(students);
        break;
      case "7":
        alert("Chương trình đang thoát... Hẹn gặp lại!!!");
        break;
      default:
        alert("Vui lòng chọn chức năng từ 1 đến 7!!!");
        break;
    }
  } while (choice !== "7");
}

main();

// ==== VALIDATE NAME ===
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

// ==== VALIDATE INTEGER ====
function validateInteger(n) {
  if (Number.isInteger(n) && n > 0) {
    return true;
  }
  return false;
}

// ==== CASE 1 ====
function createStudents(obj) {
  let id, name, age, gpa, status, n;
  while (true) {
    n = Number(prompt("Nhập số lượng sinh viên cần thêm: "));
    if (validateInteger(n)) {
      break;
    }
    alert("Số nguyên dương nhập không hợp lệ!!!");
  }
  for (let i = 0; i < n; i++) {
    while (true) {
      id = Number(prompt("Nhập ID sinh viên cần thêm: "));
      if (!validateInteger(id)) {
        alert("ID không hợp lệ");
        continue;
      }
      const dupliacateId = obj.some((p) => p.id === id);
      if (!dupliacateId) break;
      alert("ID dã tồn tại!!!");
    }
    while (true) {
      name = prompt("Nhập tên sinh viên cần thêm: ");
      if (validateName(name)) break;
      alert("Tên không hợp lệ!!!");
    }
    while (true) {
      age = Number(prompt("Nhập tuổi sinh viên: "));
      if (validateInteger(age) && age < 60) break;
      alert("Tuổi sinh viên không hợp lệ!!!");
    }
    while (true) {
      gpa = parseFloat(prompt("Nhập GPA sinh viên: "));
      if (gpa > 0.0 && gpa < 10.0 && gpa !== null) break;
      alert("GPA không hợp lệ!!!");
    }
    while (true) {
      status = prompt(
        "Nhập trạng thái sinh viên (active/inactive): ",
      ).toLowerCase();
      if (status !== null && (status === "active" || status === "inactive"))
        break;
      alert("Trạng thái sinh viên không hợp lệ!!!");
    }

    const newStudents = {
      id: id,
      name: name,
      age: age,
      gpa: gpa,
      status: status,
      deleteAt: new Date(),
    };

    obj.push(newStudents);
  }

  alert("Đã thêm sinh viên thành công!!!");
}

// CASE 2
function updateStudents(obj) {
  let idUpdate;

  while (true) {
    idUpdate = Number(prompt("Nhập ID sinh viên cần update: "));
    if (validateInteger(idUpdate)) break;
    alert("ID sinh viên không hợp lệ!!!");
  }

  const index = obj.findIndex((p) => p.id === idUpdate);

  if (index === -1) {
    alert("Không tìm thấy ID sinh viên cần tìm");
    return;
  }

  const student = obj[index];

  let name = prompt("Nhập tên sinh viên (Enter để bỏ qua): ");
  let age = prompt("Nhập tuổi sinh viên (Enter để bỏ qua): ");
  let gpa = prompt("Nhập GPA sinh viên (Enter để bỏ qua): ");
  let status = prompt("Nhập trạng thái (active/inactive) (Enter để bỏ qua): ");

  let isUpdated = false;

  if (name !== "") {
    student.name = name;
    isUpdated = true;
  }

  if (age !== "") {
    const ageNumber = Number(age);
    if (Number.isInteger(ageNumber) && ageNumber > 0) {
      student.age = ageNumber;
      isUpdated = true;
    } else {
      alert("Tuổi không hợp lệ, giữ nguyên giá trị cũ.");
    }
  }

  if (gpa !== "") {
    const gpaNumber = Number(gpa);
    if (!isNaN(gpaNumber) && gpaNumber >= 0 && gpaNumber <= 10) {
      student.gpa = gpaNumber;
      isUpdated = true;
    } else {
      alert("GPA không hợp lệ, giữ nguyên giá trị cũ.");
    }
  }

  if (status !== "") {
    if (status === "active" || status === "inactive") {
      student.status = status;
      isUpdated = true;
    } else {
      alert("Trạng thái không hợp lệ, giữ nguyên giá trị cũ.");
    }
  }

  if (isUpdated) {
    student.updatedAt = new Date();
    alert("Cập nhật sinh viên thành công!");
  } else {
    alert("Không có thay đổi nào được thực hiện.");
  }
  console.log(student);
}

// CASE 3
function softDeleteStudent(obj) {
  let idSoftDelete;

  while (true) {
    idSoftDelete = Number(prompt("Nhập ID sinh viên cần xóa: "));
    if (validateInteger(idSoftDelete)) break;
    alert("ID sinh viên không hợp lệ!!!");
  }

  const index = obj.findIndex((p) => p.id === idSoftDelete);

  if (index === -1) {
    alert("Không tìm thấy sinh viên!");
    return;
  }

  const student = obj[index];

  const isConfirmed = confirm(
    `Bạn có chắc chắn muốn xóa sinh viên ${student.name} không?`,
  );

  if (!isConfirmed) {
    alert("Đã hủy xóa.");
    return;
  }

  student.status = "inactive";
  student.deletedAt = new Date().toISOString();

  alert("Xóa mềm thành công!");
}

// CASE 4
function restoreStudent(obj) {
  let idRestore;

  while (true) {
    idRestore = Number(prompt("Nhập ID sinh viên cần khôi phục: "));
    if (validateInteger(idRestore)) break;
    alert("ID sinh viên không hợp lệ!!!");
  }

  const index = obj.findIndex((p) => p.id === idRestore);

  if (index === -1) {
    alert("Không tìm thấy sinh viên!");
    return;
  }

  const student = obj[index];

  const isConfirmed = confirm(
    `Bạn có chắc chắn muốn khôi sinh viên ${student.name} không?`,
  );

  if (!isConfirmed) {
    alert("Đã hủy xóa.");
    return;
  }

  student.status = "active";
  student.deletedAt = null;

  alert("Khôi phục thành công!");
}

// ===== NHẬP SEARCH / FILTER / SORT =====
function setupViewOptions() {
  searchName = prompt("Nhập tên cần tìm (Enter để bỏ qua):") || "";

  filterStatus = prompt("Lọc theo trạng thái (active/inactive/all):") || "all";

  sortOrder = prompt("Sắp xếp GPA (tăng/giảm):") || "tăng";

  currentPage = 1;
}

// ===== CASE 5 =====
function viewStudents(obj) {
  let result = [...obj]; // clone mảng

  // 1. SEARCH
  if (searchName) {
    result = result.filter((p) =>
      p.name.toLowerCase().includes(searchName.toLowerCase()),
    );
  }

  // 2. FILTER
  if (filterStatus !== "all") {
    result = result.filter((p) => p.status === filterStatus);
  }

  // 3. SORT
  result.sort((a, b) => (sortOrder === "tăng" ? a.gpa - b.gpa : b.gpa - a.gpa));

  // 4. PAGINATION
  const totalRecords = result.length;
  const totalPages = Math.ceil(totalRecords / pageSize) || 1;

  if (currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  const pageData = result.slice(start, end);

  console.clear();
  console.log("===== DANH SÁCH SINH VIÊN =====");
  console.table(pageData);
  console.log(`Trang ${currentPage} / ${totalPages}`);
  console.log(`Tổng bản ghi: ${totalRecords}`);
}

// ===== MENU PHÂN TRANG =====
function paginationMenu() {
  let action;
  do {
    action = prompt(`
--- PAGINATION ---
1. Next
2. Prev
3. First
4. Last
0. Quay lại
Chọn:
`);

if (action === null) break;

    switch (action) {
      case "1":
        currentPage++;
        viewStudents(students);
        break;

      case "2":
        if (currentPage > 1) currentPage--;
        viewStudents(students);
        break;

      case "3":
        currentPage = 1;
        viewStudents(students);
        break;

      case "4":
        goToLastPage();
        viewStudents(students);
        break;

      case "0":
        break;

      default:
        alert("Chọn sai!");
    }
  } while (action !== "0");
}

// ===== TÍNH LAST PAGE =====
function goToLastPage() {
  let temp = [...students];

  if (searchName) {
    temp = temp.filter((p) =>
      p.name.toLowerCase().includes(searchName.toLowerCase()),
    );
  }

  if (filterStatus !== "all") {
    temp = temp.filter((p) => p.status === filterStatus);
  }

  const totalPages = Math.ceil(temp.length / pageSize) || 1;
  currentPage = totalPages;
}

//==== CASE 6 ====
function analyticsDashboard(obj) {
  // ===== Dashboard Overview =====
  const overview = obj.reduce(
    (acc, cur) => {
      acc.total++;
      if (cur.status === "active") acc.active++;
      if (cur.status === "inactive") acc.inactive++;
      return acc;
    },
    { total: 0, active: 0, inactive: 0 },
  );

  const activePercent = ((overview.active / overview.total) * 100).toFixed(2);
  const inactivePercent = ((overview.inactive / overview.total) * 100).toFixed(
    2,
  );

  // ===== GPA Metrics =====
  const gpaMetrics = obj.reduce(
    (acc, cur) => {
      acc.totalGpa += cur.gpa;

      if (!acc.statusGpa[cur.status]) {
        acc.statusGpa[cur.status] = { sum: 0, count: 0 };
      }

      acc.statusGpa[cur.status].sum += cur.gpa;
      acc.statusGpa[cur.status].count++;

      return acc;
    },
    { totalGpa: 0, statusGpa: {} },
  );

  const avgGpa = (gpaMetrics.totalGpa / overview.total).toFixed(2);

  // ===== Leaderboard =====
  const topGpa = [...obj].sort((a, b) => b.gpa - a.gpa).slice(0, 5);

  const youngest = [...obj].sort((a, b) => a.age - b.age).slice(0, 5);

  // ===== Risk Report =====
  const risk = obj.reduce(
    (acc, cur) => {
      if (cur.gpa === 0) acc.zeroGpa.push(cur);
      if (cur.gpa < 3.0) acc.lowGpa.push(cur);
      return acc;
    },
    { zeroGpa: [], lowGpa: [] },
  );

  const totalRisk = risk.lowGpa.length;

  // ===== Academic Distribution =====
  const distribution = obj.reduce((acc, cur) => {
    let level = "";

    if (cur.gpa >= 8) level = "Giỏi";
    else if (cur.gpa >= 6.5) level = "Khá";
    else if (cur.gpa >= 5) level = "Trung bình";
    else level = "Yếu";

    acc[level] = (acc[level] || 0) + 1;

    return acc;
  }, {});

  // ===== HIỂN THỊ =====
  console.clear();
  console.log("===== ANALYTICS DASHBOARD =====");

  console.log("---- Dashboard Overview ----");
  console.log("Tổng sinh viên:", overview.total);
  console.log("Active:", overview.active, `(${activePercent}%)`);
  console.log("Inactive:", overview.inactive, `(${inactivePercent}%)`);

  console.log("---- GPA Metrics ----");
  console.log("GPA trung bình toàn hệ thống:", avgGpa);
  for (let status in gpaMetrics.statusGpa) {
    let avg = (
      gpaMetrics.statusGpa[status].sum / gpaMetrics.statusGpa[status].count
    ).toFixed(2);
    console.log(`GPA trung bình (${status}):`, avg);
  }

  console.log("---- Leaderboard (Top 5 GPA cao nhất) ----");
  console.table(topGpa);

  console.log("---- Top 5 nhỏ tuổi nhất ----");
  console.table(youngest);

  console.log("---- Risk Report ----");
  console.log("Sinh viên GPA = 0:");
  console.table(risk.zeroGpa);
  console.log("Sinh viên GPA < 3.0:");
  console.table(risk.lowGpa);
  console.log("Tổng số sinh viên có nguy cơ:", totalRisk);

  console.log("---- Academic Distribution ----");
  console.log(distribution);

  alert("Xem kết quả trong Console (F12)");
}

const now = new Date();
console.log(now);
