const products = [
  { id: 1, name: "Bánh Chưng", price: 150000, img: "./IMAGE/banhchung.webp" },
  { id: 2, name: "Giò Lụa", price: 180000, img: "./IMAGE/giolua.jpg" },
  { id: 3, name: "Cành Đào", price: 500000, img: "./IMAGE/canhdao.webp" },
  { id: 4, name: "Mứt Tết", price: 120000, img: "./IMAGE/muttet.webp" },
  { id: 5, name: "Lì Xì (Tệp)", price: 20000, img: "./IMAGE/lixi.webp" },
  { id: 6, name: "Dưa Hấu", price: 60000, img: "./IMAGE/duahau.jpg" },
];

// Lưu danh sách sản phẩm vào localStorage (nếu chưa có)
if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(products));
}

const formattedVND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

// ===== CHỨC NĂNG 1: Khởi tạo dữ liệu từ localStorage =====
let cart = [];
const savedCart = localStorage.getItem("cart");
if (savedCart) {
  cart = JSON.parse(savedCart);
} else {
  cart = [];
}

let total = 0;
const list = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");

// ===== Render sản phẩm =====
function renderProducts() {
  list.innerHTML = "";
  products.forEach((item) => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p class="price">${formattedVND.format(item.price)}</p>
      <button class="btn-add" id="btn-add-${item.id}">Thêm vào giỏ</button>
    `;
    list.appendChild(div);
  });
}

// ===== Render giỏ hàng =====
function renderCart() {
  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = '<li class="empty-msg">Chưa có món nào...</li>';
    document.querySelector(".cart-summary").innerHTML = `
      <p>Tổng cộng:</p>
      <h3 id="total-price">${formattedVND.format(0)}</h3>
      <button class="btn-checkout" id="btn-checkout" disabled>Thanh Toán</button>
    `;
    // Gắn lại sự kiện cho nút thanh toán (dù disabled)
    bindCheckoutButton();
    return;
  }

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.className = "cart-item";
    li.dataset.id = item.id;
    li.innerHTML = `
      <span class="cart-item-name">${item.name}</span>
      <div>
        <span class="cart-item-price">${formattedVND.format(item.price * item.quantity)}</span>
        <span class="cart-item-qty">SL: ${item.quantity}</span>
        <button class="btn-remove">X</button>
      </div>
    `;
    cartList.appendChild(li);
  });

  // Tính và hiển thị tổng tiền
  updateTotal();

  document.querySelector(".cart-summary").innerHTML = `
    <p>Tổng cộng:</p>
    <h3 id="total-price">${formattedVND.format(total)}</h3>
    <button class="btn-checkout" id="btn-checkout">Thanh Toán</button>
  `;

  bindCheckoutButton();
}

// ===== Gắn sự kiện nút Thanh Toán =====
function bindCheckoutButton() {
  const btn = document.getElementById("btn-checkout");
  if (btn) {
    btn.addEventListener("click", checkout);
  }
}

// ===== Tính tổng tiền =====
function updateTotal() {
  total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalEl = document.getElementById("total-price");
  if (totalEl) {
    totalEl.innerText = formattedVND.format(total);
  }
}

// ===== CHỨC NĂNG 2: Thêm sản phẩm vào giỏ + Lưu vào localStorage =====
function addToCart(id) {
  const item = products.find((p) => p.id === id);
  if (!item) return;

  const existing = cart.find((p) => p.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  // Lưu vào localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  renderCart();
}

// Sự kiện click nút "Thêm vào giỏ"
list.addEventListener("click", (e) => {
  if (e.target.matches(".btn-add")) {
    const id = Number(e.target.id.replace("btn-add-", ""));
    addToCart(id);
  }
});

// ===== CHỨC NĂNG 3: Xóa sản phẩm trong giỏ + Cập nhật localStorage =====
cartList.addEventListener("click", (e) => {
  if (e.target.matches(".btn-remove")) {
    const id = Number(e.target.closest(".cart-item").dataset.id);

    // Xóa khỏi mảng
    cart = cart.filter((item) => item.id !== id);

    // Lưu lại vào localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    renderCart();
  }
});

// ===== CHỨC NĂNG 4: Thanh toán - Xóa localStorage =====
function checkout() {
  if (cart.length === 0) {
    alert("Giỏ hàng đang trống");
    return;
  }

  // Xóa key cart khỏi localStorage
  localStorage.removeItem("cart");

  // Reset mảng giỏ hàng
  cart = [];
  total = 0;

  // Re-render giao diện
  renderCart();

  alert("Đã thanh toán thành công");
}

// ===== Khởi chạy =====
renderProducts();
renderCart();
