let bookName = prompt("Nhập tên sách mượn: ");
let borrowerName = prompt("Nhập tên người mượn: ");
let favoriteLevel =+ prompt("Mức độ yêu thích (từ 1 đến 5): ");

if (favoriteLevel < 1 || favoriteLevel > 5) {
    console.log("Vui lòng nhập mức độ yêu thích trong khoảng 1 đến 5!!");
} else {
    if (favoriteLevel === 4 || favoriteLevel === 5) {
        console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");  
    } else if (favoriteLevel === 2 || favoriteLevel === 3) {
        console.log("Sách này khá ổn, có thể mượn");
    } else {
        console.log("Sách này bạn có thể cân nhắc mượn lại sau");
    }
}
