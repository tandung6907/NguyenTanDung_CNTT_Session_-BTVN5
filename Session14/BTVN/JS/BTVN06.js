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

function renderProducts(list = products) {
  let str = "";

  for (let i = 0; i < list.length; i++) {
    str += `
      <li class="product">
        <h3>${list[i].name}</h3>
        <p class="price">
          ${formattedVND.format(list[i].price)}
        </p>
      </li>
    `;
  }

  document.getElementById("product-list").innerHTML = str;
}

renderProducts();

document.getElementById("sort-asc").addEventListener("click", function () {
  const sorted = [...products].sort((a, b) => a.price - b.price);
  renderProducts(sorted);
});

document.getElementById("sort-desc").addEventListener("click", function () {
  const sorted = [...products].sort((a, b) => b.price - a.price);
  renderProducts(sorted);
});
