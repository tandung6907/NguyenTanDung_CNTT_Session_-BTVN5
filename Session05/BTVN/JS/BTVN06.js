let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];

let required;
do {
  required = parseInt(prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?"));
} while (isNaN(required) || required <= 0);

for (let i=0 ; i<required ; i++) {
  let cardId, name, books, days;

  do {
    cardId = prompt(`Nhập mã thẻ bạn đọc thứ ${i + 1}:`);
    if (!cardId) continue;

    let duplicated = false;
    for (let j=0 ; j<readerCardIds.length ; j++) {
      if (readerCardIds[j] === cardId) {
        duplicated = true;
        alert("Mã thẻ đã tồn tại, vui lòng nhập mã khác!");
        break;
      }
    }

    if (!duplicated) break;
  } while (true);
  do {
    name = prompt(`Nhập tên bạn đọc (${cardId}):`);
  } while (!name);
  do {
    books = prompt(
      'Nhập các mã sách đang mượn (cách nhau bởi dấu phẩy, ví dụ: "JS001,PYT002"):',
    );
  } while (!books);
  do {
    days = parseInt(prompt(`Nhập số ngày quá hạn của ${name}:`));
  } while (isNaN(days) || days < 0);

  readerCardIds.push(cardId);
  readerNames.push(name);
  borrowedBookCodes.push(books);
  overdueDays.push(days);
}

let countOver10 = 0;
for (let i=0 ; i<overdueDays.length ; i++) {
  if (overdueDays[i] >= 10) {
    countOver10++;
  }
}

let jsPytReaders = [];
for (let i=0 ; i<borrowedBookCodes.length ; i++) {
  let codes = borrowedBookCodes[i].split(",");
  let hasJS = false;
  let hasPYT = false;

  for (let j=0 ; j<codes.length ; j++) {
    let code = codes[j].trim().toUpperCase();
    if (code.startsWith("JS")) hasJS = true;
    if (code.startsWith("PYT")) hasPYT = true;
  }

  if (hasJS && hasPYT) {
    jsPytReaders.push(readerCardIds[i]);
  }
}

let maxIndex = 0;
for (let i=1 ; i<overdueDays.length ; i++) {
  if (overdueDays[i] > overdueDays[maxIndex]) {
    maxIndex = i;
  }
}

let countOver7 = 0;
for (let i=0 ;  i<overdueDays.length ; i++) {
  if (overdueDays[i] >= 7) {
    countOver7++;
  }
}

let warningMessage = "";
if (countOver7 === 0) {
  warningMessage = "Tình hình trả sách hôm nay khá tốt!";
} else if (countOver7 >= 1 && countOver7 <= 4) {
  warningMessage = "Cần gửi nhắc nhở cho một số bạn đọc!";
} else {
  warningMessage = "Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!";
}

console.log("===== BÁO CÁO QUÁ HẠN (Mốc 13/01/2026) =====");

console.log(`a. Tổng số bạn đọc quá hạn ≥ 10 ngày: ${countOver10}`);

if (jsPytReaders.length > 0) {
  console.log(
    `b. Mã thẻ bạn đọc mượn cả sách JS và PYT: ${jsPytReaders.join(", ")}`,
  );
} else {
  console.log("b. Không có bạn đọc nào mượn đồng thời sách JS và PYT");
}

console.log(
  `c. Bạn đọc quá hạn nhiều nhất: ${readerNames[maxIndex]} ` +
    `(${overdueDays[maxIndex]} ngày)`,
);

console.log(`d. Cảnh báo: ${warningMessage}`);
