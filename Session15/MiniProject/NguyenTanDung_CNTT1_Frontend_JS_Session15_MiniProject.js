let tasks = [{ id: 1, name: "Housework", completed: false }];
let listHtml = document.getElementById("taskList");

function renderTasks() {
  if (tasks.length === 0) {
    listHtml.innerHTML = `<div class="empty-state">
      <div class="empty-state-icon">📋</div>
      <div class="empty-state-text">Chưa có công việc nào. Hãy thêm công việc mới!</div>
    </div>`;
    updateFooter();
    return;
  }

  let str = "";
  for (let i = 0; i < tasks.length; i++) {
    str += `<div class="task-item ${tasks[i].completed ? "completed" : ""}" data-id="${tasks[i].id}">
      <input type="checkbox" class="task-checkbox"
        ${tasks[i].completed ? "checked" : ""}
        onclick="toggleTask(${tasks[i].id})">
      <span class="task-text ${tasks[i].completed ? "completed" : ""}">
        ${tasks[i].name}
      </span>
      <div class="task-actions">
        <button class="btn-edit" onclick="startEdit(${tasks[i].id})">✏️ Sửa</button>
        <button class="btn-delete" onclick="delTask(${tasks[i].id})">🗑️ Xóa</button>
      </div>
    </div>`;
  }

  listHtml.innerHTML = str;
  updateFooter();
}

function updateFooter() {
  const total = tasks.length;
  const done = tasks.filter((t) => t.completed).length;

  document.getElementById("totalCount").textContent = total;
  document.getElementById("completedCount").textContent = done;

  const badge = document.getElementById("allDoneBadge");
  if (total > 0 && done === total) {
    badge.classList.add("show");
  } else {
    badge.classList.remove("show");
  }
}

function startEdit(id) {
  const task = tasks.find((p) => p.id === id);
  if (!task) return;

  const item = listHtml.querySelector(`.task-item[data-id="${id}"]`);
  if (!item) return;

  // Thêm class editing CSS tự ẩn .task-text bên trong
  item.classList.add("editing");

  const actions = item.querySelector(".task-actions");

  // Tạo input edit đúng class CSS đã định nghĩa
  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.className = "task-edit-input";
  editInput.value = task.name;

  // Chèn input vào sau checkbox
  const checkbox = item.querySelector(".task-checkbox");
  checkbox.insertAdjacentElement("afterend", editInput);

  // Đổi nút
  actions.innerHTML = `
    <button class="btn-save"   onclick="saveEdit(${id})">💾 Lưu</button>
    <button class="btn-cancel" onclick="cancelEdit(${id})">✖ Hủy</button>
  `;

  editInput.focus();
  editInput.select();

  editInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") saveEdit(id);
    if (e.key === "Escape") cancelEdit(id);
  });
}

function saveEdit(id) {
  const item = listHtml.querySelector(`.task-item[data-id="${id}"]`);
  if (!item) return;

  const newName = item.querySelector(".task-edit-input")?.value.trim();
  if (!newName) return;

  const task = tasks.find((p) => p.id === id);
  if (task) task.name = newName;

  renderTasks();
}

function cancelEdit(id) {
  renderTasks();
}

function toggleTask(id) {
  let index = tasks.findIndex((p) => p.id === id);
  if (index === -1) return;
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function addNewTask() {
  const input = document.getElementById("taskInput");
  const value = input.value.trim();
  if (!value) return;

  tasks.push({ id: Date.now(), name: value, completed: false });
  renderTasks();
  input.value = "";
}

function delTask(id) {
  let findIndex = tasks.findIndex((p) => p.id === id);
  if (findIndex === -1) return;
  tasks.splice(findIndex, 1);
  renderTasks();
}

renderTasks();
