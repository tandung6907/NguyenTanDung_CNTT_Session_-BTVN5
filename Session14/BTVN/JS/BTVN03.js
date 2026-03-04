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
        <button onclick="removeItem(${products[i].id})">Xóa</button>
      </li>
    `;
  }

  document.getElementById("product-list").innerHTML = str;
}

renderProducts();

function removeItem(id) {
  const index = products.findIndex((item) => item.id === id);

  if (index === -1) return;

  products.splice(index, 1);

  renderProducts();
}
