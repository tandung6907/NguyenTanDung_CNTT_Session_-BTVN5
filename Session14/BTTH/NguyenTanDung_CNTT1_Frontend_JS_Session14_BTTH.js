const products = [
  { id: 1, name: "Bánh Chưng", img: "./Image/banhchung.webp", price: 150000 },
  { id: 2, name: "Giò Lụa", img: "./Image/giolua.jpg", price: 180000 },
  { id: 3, name: "Cành Đào", img: "./Image/canhdao.webp", price: 500000 },
  { id: 4, name: "Mứt Tết", img: "./Image/muttet.webp", price: 120000 },
  { id: 5, name: "Lì Xì (Tệp)", img: "./Image/lixi.webp", price: 20000 },
  { id: 6, name: "Dưa Hấu", img: "./Image/duahau.jpg", price: 60000 },
];

// Format tiền VND
const formattedVND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

let cart = [];

// render sản phẩm
function renderProducts() {
  let str = "";

  for (let i = 0; i < products.length; i++) {
    str += `
      <div class="product-card">
        <img src="${products[i].img}" alt="${products[i].name}" class="product-img">
        <h3>${products[i].name}</h3>
        <p class="price">
          ${formattedVND.format(products[i].price)}
        </p>
        <button class="btn-add" onclick="addToCart(${i})">
          Thêm vào giỏ
        </button>
      </div>
    `;
  }

  document.getElementById("product-list").innerHTML = str;
}

// render hàng + tiền
function renderCart() {
  let str = "";
  let total = 0;

  if (cart.length === 0) {
    document.getElementById("cart-list").innerHTML =
      '<li class="empty-msg">Chưa có món nào...</li>';

    document.getElementById("cart-summary").innerHTML = `
      <p>Tổng cộng:</p>
      <h3>0 ₫</h3>
      <button class="btn-checkout" disabled>
        Thanh Toán
      </button>
    `;
    return;
  }

  for (let i = 0; i < cart.length; i++) {
    let itemTotal = cart[i].price * cart[i].quantity;
    total += itemTotal;

    str += `
      <li>
        <span>${cart[i].name}</span>
        <span>Số lượng: ${cart[i].quantity}</span>
        <span>${formattedVND.format(itemTotal)}</span>
        <button class="btn-remove" onclick="removeItem(${cart[i].id})">
          X
        </button>
      </li>
    `;
  }

  // Render danh sách sản phẩm trong giỏ
  document.getElementById("cart-list").innerHTML = str;

  // Render tổng tiền
  document.getElementById("cart-summary").innerHTML = `
      <p>Tổng cộng:</p>
      <h3 id="total-price">
        ${formattedVND.format(total)}
      </h3>
      <button
        class="btn-checkout"
        onclick="alert('Cảm ơn bạn đã mua hàng! Chúc mừng năm mới!')"
        ${cart.length === 0 ? "disabled" : ""}
      >
        Thanh Toán
      </button>
  `;
}

// Thêm vào giỏ hàng
function addToCart(index) {
  const product = products[index];
  if (!product) return;

  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  renderCart();
}

// Xóa sản phẩm
function removeItem(id) {
  const index = cart.findIndex((item) => item.id === id);

  if (index === -1) return;

  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    cart.splice(index, 1);
  }

  renderCart();
}

renderProducts();
renderCart();
