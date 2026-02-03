let booksId = [];
let booksName = [];
let booksCategory = [];
let inventoryQuantity = [];

let required;
do {
  required = parseInt(
    prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay?"),
  );
} while (isNaN(required) || required <= 0);

for (let i = 0; i < required; i++) {
  let id, name, category, quantity;

  do {
    id = prompt(`Nhập mã sách thứ ${i + 1}:`);
    if (!id) continue;

    let isDuplicate = false;
    for (let j = 0; j < booksId.length; j++) {
      if (booksId[j] === id) {
        isDuplicate = true;
        alert("Mã sách đã tồn tại, vui lòng nhập mã khác!");
        break;
      }
    }

    if (!isDuplicate) break;
  } while (true);

  do {
    name = prompt(`Nhập tên sách cho mã ${id}:`);
  } while (!name);
  do {
    category = prompt(
      'Nhập các thể loại (cách nhau bởi dấu phẩy, ví dụ: "Lập trình,JavaScript,Web"):',
    );
  } while (!category);
  do {
    quantity = parseInt(prompt(`Nhập số lượng tồn kho của "${name}":`));
  } while (isNaN(quantity) || quantity < 0);

  booksId.push(id);
  booksName.push(name);
  booksCategory.push(category);
  inventoryQuantity.push(quantity);
}

let programmingCount = 0;
for (let i = 0; i < booksCategory.length; i++) {
  if (booksCategory[i].toLowerCase().includes("lập trình")) {
    programmingCount++;
  }
}

let jsWebBooks = [];
for (let i = 0; i < booksCategory.length; i++) {
  let categoryLower = booksCategory[i].toLowerCase();
  if (categoryLower.includes("javascript") && categoryLower.includes("web")) {
    jsWebBooks.push(booksId[i]);
  }
}

let minIndex = 0;
for (let i = 1; i < inventoryQuantity.length; i++) {
  if (inventoryQuantity[i] < inventoryQuantity[minIndex]) {
    minIndex = i;
  }
}

console.log("\n===== KẾT QUẢ THỐNG KÊ =====");

console.log(`a. Tổng số sách thuộc thể loại "Lập trình": ${programmingCount}`);

if (jsWebBooks.length > 0) {
  console.log(
    `b. Các mã sách thuộc cả "JavaScript" và "Web": ${jsWebBooks.join(", ")}`,
  );
} else {
  console.log('b. Không có sách nào thuộc đồng thời "JavaScript" và "Web"');
}

console.log(
  `c. Sách có tồn kho thấp nhất:\n` +
    `   - Mã: ${booksId[minIndex]}\n` +
    `   - Tên: ${booksName[minIndex]}\n` +
    `   - Thể loại: ${booksCategory[minIndex]}\n` +
    `   - Số lượng tồn kho: ${inventoryQuantity[minIndex]}`,
);
