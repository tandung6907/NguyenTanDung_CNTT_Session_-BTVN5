/*
Các phương thức làm việc với mảng: 
    + indexOf(): Kiểm tra xem phần tử có tồn tại trong mảng hay không
        + nếu tồn tại trả về vị trí
        + nếu không tồn tại thì trả về -1
    + includes(): Kiểm tra phần tử có tồn tại hay không
        + Trả về true || false
    + slice(): Cắt, sao chép ra một mảng mới không liên quan đến mảng ban đầu
    + reserve(): Đảo ngược phần tử trong mảng
    + join(): Chuyển mảng thành String
    + split(): Chuyển String sang mảng
*/

let students = ["NA", "TRANG", "HIỂN", "MINH", "ĐỨC"];
// Thầy muốn kiểm tra lớp mình xem có bạn nào tên TRANG hay không
let flag = true;
for (let i=0 ; students.length ; i++) {
    if (students[i] === "TRANG") {
        flag = false;
        break;
    }
}

if (!(flag)) {
    console.log("CÓ");
} else {
    console.log("KHÔNG CÓ");
}

let result = students.includes("TRANG");
// if (result != -1) {
//     console.log("CÓ");
// }
console.log(result);
console.log("Cắt sao chép: ", students.slice(2));

let courses = ["HTML", "CSS", "JS"]; // HTML CSS JS
courses.reverse();
console.log(courses.join(" "));

let fullName = "Nguyễn Tấn Dũng";
console.log(fullName.split(" "));


