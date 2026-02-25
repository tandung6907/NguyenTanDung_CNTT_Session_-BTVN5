let names = ["Apples", "Oranges", "Grapes", "Peaches", "Blueberry", "Bananas"];
let prices = [220, 200, 800, 550, 690, 120];
let stocks = [23, 15, 57, 0, 16, 36];

function main() {
  let choice;
  do {
    choice = 
      prompt(`--- HỆ THỐNG QUẢN LÝ KHO HÀNG ---
1. Lọc sản phẩm cao cấp (>500)
2. Kiểm định trạng thái dữ liệu (Hết hàng/Giá sàn)
3. Phân tích giá trị vốn hóa (Tổng tài sản)
4. Triển khai chiến dịch chiết khấu (Giảm 10%)
5. Truy vấn sản phẩm theo từ khóa
6. Báo cáo tình trạng tồn kho
7. Thoát chương trình

Vui lòng nhập lựa chọn của bạn (1-7): `);
if (choice === null) break;

    switch (choice) {
      case "1":
        filterPremiumProducts();
        break;
      case "2":
        checkDataStatus();
        break;
      case "3":
        totalPrices();
        break;
      case "4":
        applyDiscount();
        break;
      case "5":
        findProductsByWord();
        break;
      case "6":
        stocksStatus();
        break;
      case "7":
        alert("Chương trình đang đăng xuất... Hẹn gặp lại!!!");
        break;
      default:
        alert("Vui lòng nhập lựa chọn từ 1 đến 7!!!");
        break;
    }
  } while (choice !== "7");
}

// CASE 1
function filterPremiumProducts() {
  let premiumList = names
    .map((name, index) => {
      if (prices[index] > 500) {
        return name + " - " + prices[index];
      }
      return null;
    })
    .filter(Boolean);

  if (premiumList.length === 0) {
    alert("Không có sản phẩm cao cấp nào.");
  } else {
    alert("Danh sách sản phẩm cao cấp:\n" + premiumList.join("\n"));
  }
}

// CASE 2
function checkDataStatus() {
  let hasZero = stocks.some((p) => p === 0);
  let allPrices100 = prices.length > 0 && (prices.every((p) => p > 100));

  let result = `Kết quả kiểm định: 
- Sản phẩm hết hàng: ${hasZero ? "Có" : "Không"}
- Tất cả sản phẩm có giá sàn trên 100: ${allPrices100 ? "Đúng" : "Sai"}`

  alert(result);
}

// CASE 3
function totalPrices() {
  let totalPrices = prices.reduce((sum, price, index) => {
    return sum + price * stocks[index];
  })
  alert("Tổng giá trị các sảng phẩm đang có là: " + totalPrices + "k VND");
}

// CASE 4
function applyDiscount() {
  prices = prices.map((price) => Math.round(price * 0.9));
  
  let updatedList = names.map(
    (name, index) => name + " - Giá mới: " + prices[index],
  );
  
  alert("Đã áp dụng giảm giá 10%!\n\n" + updatedList.join("\n"));
}

// CASE 5
function findProductsByWord() {
  let searchWord = prompt("Nhập từ khóa muốn tìm kiếm: ").toLowerCase();
  let searchArr = names.filter((p) => 
    p.toLowerCase().includes(searchWord)
  );
  if(searchArr.length > 0) {
    alert("Sản phẩm gợi ý: \n" + searchArr.join("\n"));
  } else {
    alert("Không có hàng!!!");
  }
}

// CASE 6 
function stocksStatus() {
  let statusReport = stocks.map((qty, index) => {
      let status = qty > 0 ? " Còn hàng" : " Hết hàng" 
      return `${names[index]} - Trạng thái:${status}`
  });
  alert("Trạng thái hàng hóa: \n" + statusReport.join("\n"));
}

main();
