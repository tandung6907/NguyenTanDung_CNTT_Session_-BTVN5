const STORAGE_KEY = "tet_todos";

const defaultTodos = [
  { id: 1, text: "Mua bánh chưng", done: false },
  { id: 2, text: "Dọn nhà đón Tết", done: false },
  { id: 3, text: "Gói bánh chưng", done: false },
  { id: 4, text: "Trang trí nhà cửa", done: false },
];

function loadTodos() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) return JSON.parse(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultTodos));
  return defaultTodos;
}

function saveTodos(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function render(todos) {
  const list = document.getElementById("todoList");
  list.innerHTML = todos
    .map(
      (todo) => `
        <div class="todo-item ${todo.done ? "done" : ""}" onclick="toggle(${todo.id})">
          <div class="todo-left">
            <span class="todo-icon">🌸</span>
            <span class="todo-text">${todo.text}</span>
          </div>
          <span class="todo-status">${todo.done ? "Đã xong" : "Chưa làm"}</span>
        </div>
      `,
    )
    .join("");
}

let todos = loadTodos();
render(todos);

function toggle(id) {
  todos = todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
  saveTodos(todos);
  render(todos);
}
