let booksId = [];
let booksName = [];
let bookStatus = [];

function getStatus(choice) {
    switch (choice) {
        case 1: return "Hỏng nhẹ";
        case 2: return "Hỏng nặng";
        case 3: return "Cần sửa gấp";
        case 4: return "Đã sửa xong";
        case 5: return "Loại bỏ";
        default: return "";
    }
}

function printList() {
    if (booksId.length === 0) {
        console.log("Danh sách hiện đang trống.");
        return;
    }

    console.log("Danh sách sách hiện tại:");
    for (let i=0 ; i<booksId.length ; i++) {
        console.log(
            `${i + 1}. Mã: ${booksId[i]} - Tên: ${booksName[i]} - Tình trạng: ${bookStatus[i]}`
        );
    }
}

let required;
do {
    required = parseInt(prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?"));
} while (isNaN(required) || required <= 0);

for (let i=0; i<required ; i++) {
    let id, name, statusChoice;

    do {
        id = prompt(`Nhập mã sách thứ ${i + 1}:`);
    } while (!id);
    do {
        name = prompt(`Nhập tên sách cho mã ${id}:`);
    } while (!name);
    do {
        statusChoice = parseInt(
            prompt(
                "Chọn tình trạng ban đầu:\n" +
                "1. Hỏng nhẹ\n" +
                "2. Hỏng nặng\n" +
                "3. Cần sửa gấp"
            )
        );
    } while (![1, 2, 3].includes(statusChoice));

    booksId.push(id);
    booksName.push(name);
    bookStatus.push(getStatus(statusChoice));
}

console.log("\n--- DANH SÁCH BAN ĐẦU ---");
printList();

let choice;
do {
    choice = parseInt(
        prompt(
            "\nBạn muốn làm gì?\n" +
            "1. Sửa tình trạng một cuốn sách\n" +
            "2. Loại bỏ (xóa) một cuốn sách\n" +
            "0. Kết thúc và in báo cáo cuối"
        )
    );

    if (choice === 1) {
        let editId = prompt("Nhập mã sách cần sửa:");
        let index = -1;

        for (let i=0 ; i<booksId.length ; i++) {
            if (booksId[i] === editId) {
                index = i;
                break;
            }
        }

        if (index !== -1) {
            let newStatus;
            do {
                newStatus = parseInt(
                    prompt(
                        "Chọn tình trạng mới:\n" +
                        "1. Hỏng nhẹ\n" +
                        "2. Hỏng nặng\n" +
                        "3. Cần sửa gấp\n" +
                        "4. Đã sửa xong\n" +
                        "5. Loại bỏ"
                    )
                );
            } while (![1, 2, 3, 4, 5].includes(newStatus));

            bookStatus[index] = getStatus(newStatus);
            console.log("\nĐã cập nhật tình trạng.");
        } else {
            console.log("Không tìm thấy mã sách.");
        }

        printList();
    }

    else if (choice === 2) {
        let deleteId = prompt("Nhập mã sách cần xóa:");
        let index = -1;

        for (let i=0 ; i<booksId.length ; i++) {
            if (booksId[i] === deleteId) {
                index = i;
                break;
            }
        }

        if (index !== -1) {
            booksId.splice(index, 1);
            booksName.splice(index, 1);
            bookStatus.splice(index, 1);
            console.log("\n✔ Đã xóa sách khỏi danh sách.");
        } else {
            console.log("❌ Không tìm thấy mã sách.");
        }

        printList();
    }

} while (choice !== 0);

let repairedCount = 0;
let removedCount = 0;

for (let i=0 ; i<bookStatus.length ; i++) {
    if (bookStatus[i] === "Đã sửa xong") repairedCount++;
    if (bookStatus[i] === "Loại bỏ") removedCount++;
}

console.log("\n===== BÁO CÁO CUỐI =====");
console.log(`Tổng số sách còn lại: ${booksId.length}`);
console.log(`Số sách đã sửa xong: ${repairedCount}`);
console.log(`Số sách loại bỏ: ${removedCount}`);

console.log("\nDanh sách sách còn lại:");
printList();
