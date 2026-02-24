/*
BÀI 1: 
    1. Biến
        + let, const, var: phân biệt
    2. Kiểu dữ liệu
        + Kiểu 1: Kiểu dữ liệu đơn giản (primitive type, tham trị)
            - number, string, boolean, underfined, null, NaN
        + Kiểu 2: Kiểu dữ liệu phức tạp (reference type, tham chiếu)
            - array, function, object
    3. Toán tử _ operator
        + Toán tử số học: +, -, *, /, %, **
        + Toán tử logic: &&, ||
        + Toán tử so sánh: <, >, ===, ==, <=, >=, !=, !==
        + Toán tử tăng giảm: ++a, a++
        + Toán tử ba ngôi: ? :
BÀI 2: câu điều kiện & vòng lặp
    condition: 
        + if_else
        + if_else: lồng
        + if_else: bậc thang
        + switch_case
    loop:
        + for
        + while
        + do_while
BÀi 3: 
    + Cách khai báo: let, const, var + tên mảng = []
    + Thao tác với mảng
        - CRUD
            C: Create
            _ push(): thêm vào cuối
            _ unshift(): thêm vào đầu
            _ splice(): thêm vào vị trí bất kỳ
            R: Read
            _ for, for-in, for-of ...
            U: Update
            _ arr[index] = giá trị mới
            _ splice(index, số lượng phần tử muốn xóa, giá trị thay đổi)
            D: Delete
            _ pop(): xóa ở cuối
            _ shift(): xóa ở đầu
            _ splice(): xóa ở vị trí bất kỳ

            CÁC PHƯƠNG THỨC LÀM VIỆC VỚI MẢNG
                1. slice(): cắt sao chép ra mảng mới
                2. concat(): nuối mảng
                3. reverse(): đảo ngược mảng
                4. split(): chuyển từ string sang mảng
                5. join(): chuyển từ mảng sang string
                6. indexOf(): trả về vị trí - không có trả về -1
                7. include(): trả về true fasle
                8. sort(): sắp xếp theo bảng mã ASC
BÀI 4: Hàm 
    1. DECLARATION
        function name() {}
    2. EXPRESSION
        const fn = function() {}
    3. ARROW 
        () => {}

    _ THAM SỐ (parameter): phần định nghĩa trong hàm
    _ ĐỐI SỐ (argument): giá trị truyền vào khi gọi hàm
    _ PHẢI GỌI HÀM THÌ HÀM MỚI ĐƯỢC THỰC THI
BÀI 5: Array Methods
    _ map()
    _ forEach()
    _ filter()
    _ find()
    _ findIndex()
    _ some/every
    - dùng for có thể giải quyết được hết bài toán của mảng nhưng mất thời gian => các methods được sinh ra
    _ HOF (higher order function) HÀM BẬC CAO
    _ một function bình thường muốn trở thành HOF thì phải thỏa mãn 1 trong 2 điều kiện 
    1. HÀM NHẬN HÀM KHÁC LÀM 
    2. HÀM TRẢ VỀ MỘT HÀM KHÁC
*/

function sayHello() {
  console.log("XIN CHAO");
}

const fn = (call) => {
  call();
};
fn(sayHello);
// fn được gọi là HOF

let numbers = [5, 55, 56, 45, 16];
// lấy ra các phần tử lớn hơn 30
let result = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 30) {
    result.push(numbers[i]);
  }
}
// lấy ra phần tử chẵn
let result2 = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    result.push(numbers[i]);
  }
}

// dùng filter 
let result3 = numbers.filter(p => p % 2 === 0);
let result4 = numbers.filter(p => p > 30);