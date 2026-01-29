let bookQuatity =+ prompt("Nhập số lượng sách: ");

if (bookQuatity < 10) {
    console.log("Thư viện có ít sách");
} else if (bookQuatity < 20) {
    console.log("Thư viện có số lượng sách vừa đủ");
} else {
    console.log("Thư viện có nhiều sách");
}