let employees = [];
let editId = null;

const form = document.querySelector("form");
const tableBody = document.querySelector("tbody");
const badge = document.querySelector(".badge");
const footerCount = document.querySelector(".footer span");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const dateOfBirth = document.getElementById("dateOfBirth");
const position = document.getElementById("position");

const submitBtn = document.querySelector(".btn-primary");

const formTitle = document.querySelector(".header h1");

const cancelBtn = document.createElement("button");
cancelBtn.textContent = "Hủy";
cancelBtn.type = "button";
cancelBtn.className = "btn btn-secondary";
cancelBtn.style.display = "none";

document.querySelector(".form-actions").appendChild(cancelBtn);

form.addEventListener("submit", handleSubmit);

cancelBtn.addEventListener("click", cancelEdit);

function handleSubmit(e) {
  e.preventDefault();

  const name = fullName.value.trim();
  const mail = email.value.trim();
  const dob = dateOfBirth.value;
  const pos = position.value;

  if (!name || !mail || !dob || !pos) {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  const emailRegex = /^\S+@\S+\.\S+$/;

  if (!emailRegex.test(mail)) {
    alert("Email không đúng định dạng");
    return;
  }

  if (editId) {
    updateEmployee(name, mail, dob, pos);
  } else {
    addEmployee(name, mail, dob, pos);
  }

  renderEmployees();
  form.reset();
}

function addEmployee(name, mail, dob, pos) {
  const employee = {
    id: Date.now(),
    name,
    email: mail,
    dob,
    position: pos,
  };

  employees.push(employee);
}

function updateEmployee(name, mail, dob, pos) {
  const emp = employees.find((e) => e.id === editId);

  emp.name = name;
  emp.email = mail;
  emp.dob = dob;
  emp.position = pos;

  editId = null;

  submitBtn.textContent = "Thêm Nhân Viên";
  formTitle.textContent = "Quản Lý Nhân Viên";
  cancelBtn.style.display = "none";
}

function renderEmployees() {
  tableBody.innerHTML = "";

  employees.forEach((emp, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${emp.name}</td>
        <td>${emp.email}</td>
        <td>${formatDate(emp.dob)}</td>
        <td>${emp.position}</td>
        <td>
          <button onclick="editEmployee(${emp.id})">Sửa</button>
          <button onclick="deleteEmployee(${emp.id})">Xóa</button>
        </td>
      `;

    tableBody.appendChild(tr);
  });

  updateStats();
}

function formatDate(date) {
  const d = new Date(date);

  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();

  return `${day}/${month}/${year}`;
}

function editEmployee(id) {
  const emp = employees.find((e) => e.id === id);

  fullName.value = emp.name;
  email.value = emp.email;
  dateOfBirth.value = emp.dob;
  position.value = emp.position;

  editId = id;

  submitBtn.textContent = "Cập Nhật";
  formTitle.textContent = "Chỉnh Sửa Nhân Viên";
  cancelBtn.style.display = "inline-block";

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function deleteEmployee(id) {
  const emp = employees.find((e) => e.id === id);

  const confirmDelete = confirm(`Bạn có chắc muốn xóa ${emp.name}?`);

  if (!confirmDelete) return;

  employees = employees.filter((e) => e.id !== id);

  if (editId === id) {
    cancelEdit();
  }

  renderEmployees();
}

function cancelEdit() {
  editId = null;

  form.reset();

  submitBtn.textContent = "Thêm Nhân Viên";
  formTitle.textContent = "Quản Lý Nhân Viên";

  cancelBtn.style.display = "none";
}

function updateStats() {
  const total = employees.length;

  badge.textContent = `${total} nhân viên`;

  footerCount.textContent = `Tổng số nhân viên: ${total}`;
}

renderEmployees();
