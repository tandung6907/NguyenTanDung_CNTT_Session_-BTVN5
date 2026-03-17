const STORAGE_KEY = "tet_todos_v5";

const defaultTodos = [
  { id: 1, text: "Mua bánh chưng", done: true },
  { id: 2, text: "Dọn nhà đón Tết", done: true },
  { id: 3, text: "Gói bánh chưng", done: false },
  { id: 4, text: "Trang trí nhà cửa bằng hoa mai, hoa đào", done: false },
  { id: 5, text: "Mua phong bao lì xì", done: false },
  { id: 6, text: "Chuẩn bị mâm ngũ quả", done: false },
];

function loadTodos() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) return JSON.parse(data);
  saveTodos(defaultTodos);
  return defaultTodos;
}

function saveTodos(todos) {
  const clean = todos.map(({ editing, ...rest }) => rest);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(clean));
}

function render(todos) {
  const list = document.getElementById("todoList");

  if (todos.length === 0) {
    list.innerHTML = '<div class="empty">Chưa có công việc nào 🎋</div>';
    return;
  }

  list.innerHTML = todos
    .map((todo) => {
      if (todo.editing) {
        return `
          <div class="todo-item editing">
            <div class="check-icon">${todo.done ? "✓" : ""}</div>
            <input class="edit-input" id="edit-${todo.id}" value="${todo.text}" maxlength="80" />
            <button class="btn-save"    onclick="saveEdit(${todo.id})">Lưu</button>
            <button class="btn-discard" onclick="cancelEdit(${todo.id})">Hủy</button>
          </div>
        `;
      }
      return `
        <div class="todo-item ${todo.done ? "done" : ""}" onclick="toggle(${todo.id})">
          <div class="check-icon">${todo.done ? "✓" : ""}</div>
          <span class="todo-text">${todo.text}</span>
          <span class="todo-status">${todo.done ? "Đã xong" : "Chưa làm"}</span>
          <button class="edit-btn" onclick="startEdit(event, ${todo.id})" title="Sửa">✏️</button>
          <button class="del-btn"  onclick="deleteTodo(event, ${todo.id})" title="Xóa">✕</button>
        </div>
      `;
    })
    .join("");
}

function toggle(id) {
  todos = todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
  saveTodos(todos);
  render(todos);
}

function startEdit(e, id) {
  e.stopPropagation();
  todos = todos.map((t) => ({ ...t, editing: t.id === id }));
  render(todos);
  const input = document.getElementById(`edit-${id}`);
  if (input) {
    input.focus();
    input.select();
  }
}

function saveEdit(id) {
  const input = document.getElementById(`edit-${id}`);
  const newText = input.value.trim();
  if (!newText) return;
  todos = todos.map((t) =>
    t.id === id
      ? { ...t, text: newText, editing: false }
      : { ...t, editing: false },
  );
  saveTodos(todos);
  render(todos);
}

function cancelEdit(id) {
  todos = todos.map((t) => ({ ...t, editing: false }));
  render(todos);
}

function deleteTodo(e, id) {
  e.stopPropagation();
  showConfirm(
    "Bạn có muốn xóa công việc này không?",
    // Callback khi bấm "Xóa"
    () => {
      todos = todos.filter((t) => t.id !== id);
      saveTodos(todos);
      render(todos);
    },
    // Callback khi bấm "Hủy"
    () => {
      showToast("Đã hủy thao tác xóa!");
    },
  );
}

function addTodo() {
  const input = document.getElementById("newInput");
  const text = input.value.trim();
  if (!text) return;

  const newTodo = { id: Date.now(), text, done: false };
  todos = [...todos, newTodo];
  saveTodos(todos);
  render(todos);
  input.value = "";
  input.focus();
}

// Hàm hiện confirm box tự làm
function showConfirm(message, onOk, onCancel) {
  const overlay = document.createElement("div");
  overlay.className = "confirm-overlay";
  overlay.innerHTML = `
      <div class="confirm-box">
        <p>${message}</p>
        <div class="btn-row">
          <button class="btn-ok">Xóa</button>
          <button class="btn-cancel">Hủy</button>
        </div>
      </div>
    `;
  document.body.appendChild(overlay);

  overlay.querySelector(".btn-ok").onclick = () => {
    overlay.remove();
    onOk();
  };
  overlay.querySelector(".btn-cancel").onclick = () => {
    overlay.remove();
    if (onCancel) onCancel();
  };
  // Click ra ngoài = hủy
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.remove();
      if (onCancel) onCancel();
    }
  });
}

// Toast nhỏ thay cho alert
function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.cssText = `
      position:fixed; bottom:24px; left:50%; transform:translateX(-50%);
      background:#3d2b1f; color:#fff; padding:10px 20px;
      border-radius:10px; font-size:.85rem; z-index:9999;
      animation: fadeIn .2s ease;
    `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2200);
}

document.getElementById("newInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodo();
});

// Enter trong ô edit = Lưu, Escape = Hủy
document.addEventListener("keydown", (e) => {
  const editing = todos.find((t) => t.editing);
  if (!editing) return;
  if (e.key === "Enter") saveEdit(editing.id);
  if (e.key === "Escape") cancelEdit(editing.id);
});

let todos = loadTodos();
render(todos);
