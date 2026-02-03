/*
I. Mảng là gì: 1 biến lưu nhiều giá trị khác nhau
    1. Khai báo mảng: 
    TỪ KHÓA KHAI BÁO BIẾN + TÊN MẢNG = [];
    let student = [];
    2. Truy cập phần tử trong mảng
    + Mảng có chỉ số index bắt đầu là: 0
    + Truy cập theo chỉ số index;
    3. Đếm số lượng phần tử trong mảng: tên mảng. length
    4. Thao tác với mảng: 
        CRUD
        + C(Create): Thêm phần tử
            + push(): thêm phần tử vào cuối mảng
            + unshift(): thêm phần tử vào đầu mảng
            + splice(): thêm phần tử vào vị trí bất kỳ
                splice(index, deleteCount, item);
        + R(Read): Đọc
        + U(Update): Cập nhật phần tử
            + index: Cập nhật theo index
            + splice(): Cập nhật phần tử bất kỳ: splice(index, deleteCount, item);
        + D(Delete): Xóa phần tử
            pop(): Xóa phần tử cuối của mảng
            shift(): Xóa phần tử đầu mảng
            splice(): Xóa phần tử bất kỳ: splice(index, deleteCount, item);
*/

let numbers = [1, 5 ,4, 9];
let students = ["Minh", "Thu", "Lan", "Hồng"];
students.splice(2, 0, "Phương");
students.splice(3, 1, "Hoa");
console.log(students);
console.log("Số lượng phần tử trong mảng students: ", students.length);

let goal = [];
goal.push(6); // [6]
goal.push(9); // [6, 9]
goal.unshift(6) // [6, 6, 9] ==> [6, 8, 6, 9]
goal.splice(1, 0, 8);
console.log("Mảng goal: ", goal);

let courses = ["JS", "HTML", "CSS", "Python"];
courses[1] = "C++";
courses.splice(3, 1, "JAVA");
courses.splice(1, 1);
for(let i=0 ; i<courses.length ; i++) {
    console.log("Danh sách các khóa học: ", courses[i]);
}



