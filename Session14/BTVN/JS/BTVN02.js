const products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Cành Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Bao Lì Xì", price: 25000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

const formattedVND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

function renderProducts() {
  let str = "";
  for (let i = 0; i < products.length; i++) {
    str += `<li class="product">
    <h3>${products[i].name}</h3>
    <p class="price">
    ${formattedVND.format(products[i].price)}
    </p>
    </li>`;
  }
  document.getElementById("product-list").innerHTML = str;
}

renderProducts();

const form = document.getElementById("product-form");

form.addEventListener("submit", function (e) {
  // ngăn chặn hành vi mặc định của form
  e.preventDefault();
  // lấy giá trị
  const name = document.getElementById("product-name").value.trim();
  const price = document.getElementById("product-price").value.trim();
  // kiểm tra tên hoặc giá kh được rỗng
  if (!name || !price) return;
  // tạo object mới
  let addProduct = {
    id: products.length + 1,
    name: name,
    price: Number(price),
  };
  // thêm vào object ban đầu
  products.push(addProduct);
  // render lại sản phẩm
  renderProducts();
  // xóa input
  form.reset();
});
