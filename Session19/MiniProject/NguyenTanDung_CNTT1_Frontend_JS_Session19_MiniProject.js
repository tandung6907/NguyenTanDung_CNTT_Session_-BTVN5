// ── 1. DỮ LIỆU SẢN PHẨM ────────────────────────────────────
const products = [
  {
    id: 1,
    name: "Tai nghe Bluetooth TWS",
    price: 320000,
    image:
      "https://media.istockphoto.com/id/1311027353/photo/wireless-headphones.webp?a=1&b=1&s=612x612&w=0&k=20&c=2RDM0ssz-AhAYFFFmUXcCxy4lbzb-LN-DA1i39RbnLY=",
    description: "Chống ồn nhẹ, pin 20h, kết nối ổn định.",
  },
  {
    id: 2,
    name: "Bàn phím cơ 87 phím",
    price: 790000,
    image:
      "https://images.unsplash.com/photo-1672292086075-aa75f03ed2a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YiVDMyVBMG4lMjBwaCVDMyVBRG0lMjBjJUM2JUExJTIwODclMjBwaCVDMyVBRG18ZW58MHx8MHx8fDA%3D",
    description: "Switch blue, led trắng, gõ sướng tay.",
  },
  {
    id: 3,
    name: "Chuột không dây công thái học",
    price: 450000,
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&q=60",
    description: "Thiết kế ergonomic, sạc USB-C.",
  },
  {
    id: 4,
    name: "USB 64GB",
    price: 120000,
    image:
      "https://media.istockphoto.com/id/173868900/photo/active-usb-stick.webp?a=1&b=1&s=612x612&w=0&k=20&c=gL8j6X-GI6GjG8fftXjZJksXCtFCkeyjOpM11DpQFpQ=",
    description: "Nhỏ gọn, tốc độ đọc/ghi ổn định.",
  },
  {
    id: 5,
    name: "Đế tản nhiệt laptop",
    price: 210000,
    image:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fHww",
    description: "2 quạt gió, đỡ mỏi cổ tay.",
  },
  {
    id: 6,
    name: "Cáp sạc Type-C 1m",
    price: 80000,
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/phu-kien/Cap_sac/sac-usb-type-c-1.jpg",
    description: "Bọc dù, hỗ trợ sạc nhanh.",
  },
];

// ── 2. CONSTANTS ─────────────────────────────────────────────
const STORAGE_KEY = "mini_shop_cart";

// ── 3. STATE ─────────────────────────────────────────────────
// cart: Array<{ productId: number, quantity: number }>
let cart = [];

// ── 4. LOCALSTORAGE HELPERS ──────────────────────────────────
function saveCart() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch (e) {
    console.error("Không thể lưu giỏ hàng:", e);
  }
}

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    // Validate: phải là mảng, mỗi phần tử có productId và quantity hợp lệ
    if (!Array.isArray(parsed)) throw new Error("Dữ liệu không hợp lệ");
    return parsed.filter(
      (item) =>
        typeof item.productId === "number" &&
        typeof item.quantity === "number" &&
        item.quantity > 0,
    );
  } catch (e) {
    console.warn("Dữ liệu giỏ hàng bị lỗi, reset về rỗng:", e);
    localStorage.removeItem(STORAGE_KEY);
    return [];
  }
}

// ── 5. FORMAT HELPERS ────────────────────────────────────────
function formatVND(amount) {
  return amount.toLocaleString("vi-VN") + " VNĐ";
}

// ── 6. CART LOGIC ────────────────────────────────────────────
function findCartItem(productId) {
  return cart.find((item) => item.productId === productId);
}

function addToCart(productId) {
  const existing = findCartItem(productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ productId, quantity: 1 });
  }
  saveCart();
  renderCart();
  renderStats();
}

function increaseQty(productId) {
  const item = findCartItem(productId);
  if (item) {
    item.quantity += 1;
    saveCart();
    renderCart();
    renderStats();
  }
}

function decreaseQty(productId) {
  const item = findCartItem(productId);
  if (!item) return;
  if (item.quantity <= 1) {
    // Tự động xóa khi về 0
    removeFromCart(productId, true);
  } else {
    item.quantity -= 1;
    saveCart();
    renderCart();
    renderStats();
  }
}

function removeFromCart(productId, skipConfirm = false) {
  const product = products.find((p) => p.id === productId);
  const name = product ? product.name : "sản phẩm này";

  if (!skipConfirm) {
    const confirmed = confirm(`Bạn có chắc muốn xóa "${name}" khỏi giỏ hàng?`);
    if (!confirmed) return;
  }

  cart = cart.filter((item) => item.productId !== productId);
  saveCart();
  renderCart();
  renderStats();
}

function clearCart() {
  if (cart.length === 0) {
    alert("Giỏ hàng đã trống rồi!");
    return;
  }
  const confirmed = confirm(
    "⚠️ Cảnh báo: Bạn có chắc chắn muốn xóa TOÀN BỘ giỏ hàng không?\nThao tác này không thể hoàn tác!",
  );
  if (!confirmed) return;
  cart = [];
  saveCart();
  renderCart();
  renderStats();
}

// ── 7. RENDER PRODUCTS ───────────────────────────────────────
function renderProducts() {
  const grid = document.getElementById("products-grid");
  const emptyEl = document.getElementById("products-empty");
  const badge = document.getElementById("product-count-badge");

  badge.textContent = `${products.length} sản phẩm`;

  if (products.length === 0) {
    grid.classList.add("hidden");
    emptyEl.classList.remove("hidden");
    return;
  }

  emptyEl.classList.add("hidden");
  grid.classList.remove("hidden");

  grid.innerHTML = products
    .map((product) => {
      const imgHtml = product.image
        ? `<img src="${product.image}" alt="${product.name}" loading="lazy" />`
        : `<div class="img-placeholder">${product.name}</div>`;

      return `
      <article class="card" data-product-id="${product.id}">
        <div class="card-img">${imgHtml}</div>
        <div class="card-body">
          <h3 class="card-title" title="${product.name}">${product.name}</h3>
          ${product.description ? `<p class="card-desc">${product.description}</p>` : ""}
          <div class="card-footer">
            <div class="price">${formatVND(product.price)}</div>
            <button
              class="btn btn-primary add-to-cart-btn"
              data-product-id="${product.id}"
              aria-label="Thêm ${product.name} vào giỏ"
            >Thêm vào giỏ</button>
          </div>
        </div>
      </article>
    `;
    })
    .join("");
}

// ── 8. RENDER CART ───────────────────────────────────────────
function renderCart() {
  const tbody = document.getElementById("cart-tbody");
  const emptyEl = document.getElementById("cart-empty");
  const tableWrap = document.querySelector(".table-wrap");

  if (cart.length === 0) {
    emptyEl.classList.remove("hidden");
    tableWrap.classList.add("hidden");
    return;
  }

  emptyEl.classList.add("hidden");
  tableWrap.classList.remove("hidden");

  tbody.innerHTML = cart
    .map((item) => {
      const product = products.find((p) => p.id === item.productId);
      if (!product) return ""; // sản phẩm không còn tồn tại
      const subtotal = product.price * item.quantity;

      return `
      <tr>
        <td>${product.name}</td>
        <td class="right">${formatVND(product.price)}</td>
        <td class="center">
          <div class="qty-controls">
            <button
              class="btn btn-ghost btn-icon decrease-btn"
              data-product-id="${item.productId}"
              aria-label="Giảm số lượng ${product.name}"
            >−</button>
            <span class="qty">${item.quantity}</span>
            <button
              class="btn btn-ghost btn-icon increase-btn"
              data-product-id="${item.productId}"
              aria-label="Tăng số lượng ${product.name}"
            >+</button>
          </div>
        </td>
        <td class="right">${formatVND(subtotal)}</td>
        <td class="center">
          <button
            class="btn btn-danger remove-btn"
            data-product-id="${item.productId}"
            aria-label="Xóa ${product.name} khỏi giỏ"
          >Xóa</button>
        </td>
      </tr>
    `;
    })
    .join("");
}

// ── 9. RENDER STATS ──────────────────────────────────────────
function renderStats() {
  const totalLines = cart.length;
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  // Badges ở header giỏ hàng
  const linesBadge = document.getElementById("cart-lines-badge");
  const qtyBadge = document.getElementById("cart-qty-badge");
  linesBadge.textContent = `${totalLines} dòng`;
  qtyBadge.textContent = `${totalQty} món`;

  // Stats box
  document.getElementById("stat-lines").textContent = totalLines;
  document.getElementById("stat-qty").textContent = totalQty;
  document.getElementById("stat-total").textContent =
    totalAmount > 0 ? formatVND(totalAmount) : "0 VNĐ";
}

// ── 10. EVENT DELEGATION ─────────────────────────────────────
function setupEvents() {
  // Thêm vào giỏ (event delegation trên grid)
  document.getElementById("products-grid").addEventListener("click", (e) => {
    const btn = e.target.closest(".add-to-cart-btn");
    if (!btn) return;
    const productId = Number(btn.dataset.productId);
    addToCart(productId);
  });

  // Các nút trong giỏ hàng (event delegation trên tbody)
  document.getElementById("cart-tbody").addEventListener("click", (e) => {
    const increaseBtn = e.target.closest(".increase-btn");
    const decreaseBtn = e.target.closest(".decrease-btn");
    const removeBtn = e.target.closest(".remove-btn");

    if (increaseBtn) {
      increaseQty(Number(increaseBtn.dataset.productId));
    } else if (decreaseBtn) {
      decreaseQty(Number(decreaseBtn.dataset.productId));
    } else if (removeBtn) {
      removeFromCart(Number(removeBtn.dataset.productId));
    }
  });

  // Xóa toàn bộ giỏ hàng
  document
    .getElementById("clear-cart-btn")
    .addEventListener("click", clearCart);
}

// ── 11. INIT ─────────────────────────────────────────────────
function init() {
  cart = loadCart();
  renderProducts();
  renderCart();
  renderStats();
  setupEvents();
}

// Chạy khi DOM sẵn sàng
document.addEventListener("DOMContentLoaded", init);
