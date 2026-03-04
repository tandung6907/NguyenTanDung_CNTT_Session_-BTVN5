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
    str += `
      <li class="product">
        <h3>${products[i].name}</h3>
        <p class="price">
          ${formattedVND.format(products[i].price)}
        </p>
        <button onclick="updatePrice(${products[i].id})">Sửa giá</button>
      </li>
    `;
  }

  document.getElementById("product-list").innerHTML = str;
}

renderProducts();

function updatePrice(id) {
  const index = products.findIndex((item) => item.id === id);

  if (index === -1) return;
  const product = products[index];
  let newPrice;
  while (true) {
    newPrice = Number(prompt("Nhập giá sản phẩm mới: "));
    if (!isNaN(newPrice) && newPrice > 0) break;
    alert("Nhập số tiền lớn hơn 0!");
  }
  let isConfirm = window.confirm(
    `Bạn có muộn cập nhật giá sản phẩm có ID: ${product.id}`,
  );
  if (!isConfirm) {
    alert("Bạn đã hủy cập nhật giá sản phẩm");
  }
  product.price = newPrice;
  alert("Bạn đã cập nhật thành công");
  renderProducts();
}
