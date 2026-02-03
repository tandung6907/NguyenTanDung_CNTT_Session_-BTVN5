let booksId = [];
let booksName = [];
let inventoryQuantity = [];

let required;
do {
    required = parseInt(prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?"));
} while (isNaN(required) || required <= 0);

for (let i=0 ; i<required ; i++) {
    let id, name, quantity;

    do {
        id = prompt(`Nhập mã sách thứ ${i + 1}:`);
    } while (!id);
    do {
        name = prompt(`Nhập tên sách cho mã ${id}:`);
    } while (!name);
    do {
        quantity = parseInt(prompt(`Nhập số lượng tồn kho của "${name}":`));
    } while (isNaN(quantity) || quantity < 0);

    booksId.push(id);
    booksName.push(name);
    inventoryQuantity.push(quantity);
}
console.log(`Danh sách sách cần xem xét bổ sung (${booksId.length} loại):`);

for (let i=0 ; i<booksId.length ; i++) {
    console.log(
        `${i + 1}. Mã: ${booksId[i]} - Tên: ${booksName[i]} - Còn: ${inventoryQuantity[i]} bản`
    );
}

let lowStockCount = 0;
for (let i = 0; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] <= 5) {
        lowStockCount++;
    }
}
console.log(`\nSố sách có tồn kho ≤ 5 bản: ${lowStockCount} loại`);

let outOfStockIds = [];
for (let i = 0; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] === 0) {
        outOfStockIds.push(booksId[i]);
    }
}

if (outOfStockIds.length > 0) {
    console.log(`Các mã sách đã hết hàng (0 bản): ${outOfStockIds.join(", ")}`);
} else {
    console.log("Không có sách nào đã hết hàng.");
}

