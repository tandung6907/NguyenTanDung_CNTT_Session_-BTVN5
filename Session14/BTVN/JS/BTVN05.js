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
      </li>
    `;
  }

  document.getElementById("product-list").innerHTML = str;
}

renderProducts();
const form = document.getElementById("product-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const keyword = document
    .getElementById("search-input")
    .value.trim()
    .toLowerCase();

  const productItems = document.querySelectorAll(".product");
  const notFound = document.getElementById("not-found");

  let matchCount = 0;

  productItems.forEach((item) => {
    const productName = item.querySelector("h3").textContent.toLowerCase();

    if (productName.includes(keyword)) {
      item.style.display = "block";
      matchCount++;
    } else {
      item.style.display = "none";
    }
  });

  // Nếu không có sản phẩm nào khớp
  if (matchCount === 0) {
    notFound.style.display = "block";
  } else {
    notFound.style.display = "none";
  }

  form.reset();
});
