const STORAGE_KEY = "products_data";

let products = [];
let productIdCounter = 1;
let editingProductId = null;

// DOM elements
const productForm = document.getElementById("productForm");
const formTitle = document.getElementById("formTitle");
const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const productName = document.getElementById("productName");
const productCategory = document.getElementById("productCategory");
const productPrice = document.getElementById("productPrice");
const productQuantity = document.getElementById("productQuantity");
const productDescription = document.getElementById("productDescription");
const productTableBody = document.getElementById("productTableBody"); // ✅ Fix: đúng id
const emptyState = document.getElementById("emptyState"); // ✅ Fix: có trong HTML
const searchInput = document.getElementById("searchInput");
const filterCategory = document.getElementById("filterCategory");
const totalProducts = document.getElementById("totalProducts");
const totalValue = document.getElementById("totalValue");
const totalQuantity = document.getElementById("totalQuantity");

// ===== LOCALSTORAGE =====
function saveToLocalStorage() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ products, idCounter: productIdCounter }),
  );
}

function loadFromLocalStorage() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    try {
      const parsed = JSON.parse(data);
      products = parsed.products || [];
      productIdCounter = parsed.idCounter || 1;
    } catch (e) {
      products = [];
      productIdCounter = 1;
    }
  }
}

function clearAllData() {
  if (
    window.confirm(
      "Bạn có chắc chắn muốn xóa TẤT CẢ sản phẩm? Hành động này không thể hoàn tác!",
    )
  ) {
    products = [];
    productIdCounter = 1;
    saveToLocalStorage();
    renderProducts();
    updateStats();
    alert("Đã xóa tất cả sản phẩm!");
  }
}

// ===== INIT =====
function main() {
  loadFromLocalStorage();
  renderProducts();
  updateStats();
  productForm.addEventListener("submit", handleFormSubmit);
  cancelBtn.addEventListener("click", cancelEdit);
  clearAllBtn.addEventListener("click", clearAllData);
  searchInput.addEventListener("input", handleSearch);
  filterCategory.addEventListener("change", handleFilter);
}

// ===== FORM =====
function handleFormSubmit(e) {
  e.preventDefault();
  const name = productName.value.trim();
  const category = productCategory.value;
  const price = parseFloat(productPrice.value);
  const quantity = parseInt(productQuantity.value);
  const description = productDescription.value.trim();

  if (!name || !category || isNaN(price) || isNaN(quantity)) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }
  if (price < 0) {
    alert("Giá không được âm!");
    return;
  }
  if (quantity < 0) {
    alert("Số lượng không được âm!");
    return;
  }

  if (editingProductId) {
    updateProduct(
      editingProductId,
      name,
      category,
      price,
      quantity,
      description,
    );
  } else {
    addProduct(name, category, price, quantity, description);
  }
  resetForm();
}

// ===== CRUD =====
function addProduct(name, category, price, quantity, description) {
  products.push({
    id: productIdCounter++,
    name,
    category,
    price,
    quantity,
    description,
    createdAt: new Date().toISOString(),
  });
  saveToLocalStorage();
  renderProducts();
  updateStats();
}

function updateProduct(id, name, category, price, quantity, description) {
  const product = products.find((p) => p.id === id);
  if (product) {
    Object.assign(product, {
      name,
      category,
      price,
      quantity,
      description,
      updatedAt: new Date().toISOString(),
    });
    saveToLocalStorage();
    renderProducts();
    updateStats();
  }
}

function deleteProduct(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;
  if (confirm(`Bạn có chắc chắn muốn xóa sản phẩm "${product.name}"?`)) {
    products = products.filter((p) => p.id !== id);
    saveToLocalStorage();
    renderProducts();
    updateStats();
    if (editingProductId === id) resetForm();
  }
}

function editProduct(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;
  productName.value = product.name;
  productCategory.value = product.category;
  productPrice.value = product.price;
  productQuantity.value = product.quantity;
  productDescription.value = product.description || "";
  formTitle.textContent = "Chỉnh Sửa Sản Phẩm";
  submitBtn.innerHTML = "💾 Cập Nhật";
  cancelBtn.style.display = "block";
  editingProductId = id;
  document
    .querySelector(".form-section")
    .scrollIntoView({ behavior: "smooth" });
  productName.focus();
}

function cancelEdit() {
  resetForm();
}

function resetForm() {
  productForm.reset();
  formTitle.textContent = "Thêm Sản Phẩm Mới";
  submitBtn.innerHTML = "➕ Thêm Sản Phẩm";
  cancelBtn.style.display = "none";
  editingProductId = null;
}

// ===== RENDER =====
function renderProducts(filteredProducts = null) {
  const list = filteredProducts || products;
  productTableBody.innerHTML = ""; // ✅ Fix: append vào <tbody> đúng chuẩn

  if (list.length === 0) {
    emptyState.classList.add("show");
    return;
  }
  emptyState.classList.remove("show");
  list.forEach((product) => {
    productTableBody.appendChild(createProductRow(product));
  });
}

function createProductRow(product) {
  const tr = document.createElement("tr");
  const quantityClass = product.quantity < 10 ? "low-stock" : "";
  tr.innerHTML = `
          <td>${product.id}</td>
          <td><strong>${product.name}</strong></td>
          <td>${product.category}</td>
          <td class="price">${formatPrice(product.price)}</td>
          <td class="quantity ${quantityClass}">${product.quantity}</td>
          <td class="description">${product.description || "Không có mô tả"}</td>
          <td>
            <div class="action-buttons">
              <button class="btn-edit" onclick="editProduct(${product.id})">✏️ Sửa</button>
              <button class="btn-delete" onclick="deleteProduct(${product.id})">🗑️ Xóa</button>
            </div>
          </td>`;
  return tr;
}

function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
}

// ===== SEARCH & FILTER =====
function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const categoryFilter = filterCategory.value;
  let filtered = products;
  if (searchTerm) {
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm) ||
        (p.description && p.description.toLowerCase().includes(searchTerm)),
    );
  }
  if (categoryFilter) {
    filtered = filtered.filter((p) => p.category === categoryFilter);
  }
  renderProducts(filtered);
}

function handleFilter() {
  handleSearch();
}

// ===== STATS =====
function updateStats() {
  totalProducts.textContent = products.length;
  totalValue.textContent = formatPrice(
    products.reduce((sum, p) => sum + p.price * p.quantity, 0),
  );
  totalQuantity.textContent = products.reduce((sum, p) => sum + p.quantity, 0);
}

main();
