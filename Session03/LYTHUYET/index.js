/*
Vòng lặp là gì? công việc hay đoạn logic thực hiện lặp đi lặp lại

1. for
    - dùng khi biết trước số lần lặp
    - gồm 3 phần: 
        + giá trị khởi tạo
        + điều kiện
        + bước nhảy
    - đầu tiên lấy giá trị khởi tạo để kiểm tra điều kiện
        + nếu sai thì dừng vòng lặp
        + nếu đúng -> thực hiện thân for -> quay về bước nhảy -> kiểm tra điều kiện
2. while
    - dùng khi không biết trước số lần lặp
    - cú pháp: while (điều kiện) {}
    - luồng hoạt động: 
        + kiểm tra điều kiện đúng thì chạy sai thì dừng
        + phải có điều kiện dừng không thì vòng lặp sẽ chạy vô hạn
3. do ... while
    - khi cần lặp ít nhất 1 lần trước khi xét điều kiện
    - cú pháp: do {code} while (điều kiện)
    - luồng thực thi: khi điều kiện trong while đúng còn sai thì dừng

    + khi nào dùng
    + cú pháp
    + luồng hoạt động
*/
/*
Nam làm thêm bằng công việc phát tờ rơi
mỗi lần gặp 1 người thì đưa 1 tờ báo
giả sử Nam có 100 tờ thì điều kiện dừng là 100
*/

// for (i=0; i<100; i++) {
//     console.log(`Số tờ đã phát: ${i}`);
// }

// let i; 
// for ( i = 1; i < 10; i+= 3) {
// }
// console.log("i", i);
for (let i = 1; i <= 10; i++) {
    document.write("Bảng " + i + "<br>");
        for (let j = 1; j <= 10; j++) {
            document.write(i + " x " + j + " = " + (i * j) + "<br>");
        }
    document.write("<hr>");
}