let arr = [];
let choice = 0;

do {
  console.log("================== MENU ===================");
  console.log("1. Nhập số phần tử cần nhập và giá trị các phần tử");
  console.log("2. In ra giá trị các phần tử dạng quản lý");
  console.log("3. In ra giá trị các phần tử chẵn và tính tổng");
  console.log("4. In ra giá trị lớn nhất và nhỏ nhất trong mảng");
  console.log("5. In ra các phần tử là số nguyên tố trong mảng và tính tổng");
  console.log(
    "6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó",
  );
  console.log("7. Thêm một phần tử vào vị trí chỉ định");
  console.log("8. Thoát");
  console.log("============================================");

  choice = parseInt(prompt("Lựa chọn của bạn:"));

  switch (choice) {
    case 1:
      let n = parseInt(prompt("Nhập số phần tử:"));
      if (n < 0) {
        console.log("Số phần tử không hợp lệ!");
      } else {
        arr = [];
        for (let i = 0; i < n; i++) {
          let value = parseFloat(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
          arr[arr.length] = value;
        }
        console.log("Đã nhập mảng thành công!");
      }
      break;
    case 2:
      if (arr.length === 0) {
        console.log("Mảng rỗng!");
      } else {
        console.log("Các phần tử trong mảng:");
        for (let i = 0; i < arr.length; i++) {
          console.log("arr[" + i + "] = " + arr[i]);
        }
      }
      break;
    case 3:
      if (arr.length === 0) {
        console.log("Mảng rỗng!");
      } else {
        let sumEven = 0;
        let resEven = "";
        let hasEven = false;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] % 2 === 0) {
            hasEven = true;
            resEven = resEven + arr[i] + " ";
            sumEven = sumEven + arr[i];
          }
        }
        if (hasEven) {
          console.log("Các phần tử chẵn: " + resEven.trim());
          console.log("Tổng: " + sumEven);
        } else {
          console.log("Không có phần tử chẵn!");
        }
      }
      break;
    case 4:
      if (arr.length === 0) {
        console.log("Mảng rỗng!");
      } else {
        let maxVal = arr[0];
        let minVal = arr[0];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > maxVal) maxVal = arr[i];
          if (arr[i] < minVal) minVal = arr[i];
        }
        console.log("Giá trị lớn nhất: " + maxVal);
        console.log("Giá trị nhỏ nhất: " + minVal);
      }
      break;
    case 5:
      if (arr.length === 0) {
        console.log("Mảng rỗng!");
      } else {
        let sumPrime = 0;
        let resPrime = "";
        let hasPrime = false;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] >= 2 && arr[i] === Math.floor(arr[i])) {
            let isPrime = true;
            for (let j = 2; j * j <= arr[i]; j++) {
              if (arr[i] % j === 0) {
                isPrime = false;
                break;
              }
            }
            if (isPrime) {
              hasPrime = true;
              resPrime = resPrime + arr[i] + " ";
              sumPrime = sumPrime + arr[i];
            }
          }
        }
        if (hasPrime) {
          console.log("Các số nguyên tố: " + resPrime.trim());
          console.log("Tổng: " + sumPrime);
        } else {
          console.log("Không có số nguyên tố!");
        }
      }
      break;
    case 6:
      if (arr.length === 0) {
        console.log("Mảng rỗng!");
      } else {
        let searchNum = parseFloat(prompt("Nhập số cần thống kê:"));
        let countNum = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === searchNum) countNum++;
        }
        console.log("Số " + searchNum + " xuất hiện " + countNum + " lần");
      }
      break;
    case 7:
      let posInsert = parseInt(
        prompt("Nhập vị trí muốn thêm (0-" + arr.length + "):"),
      );

      if (posInsert < 0 || posInsert > arr.length) {
        console.log("Vị trí không hợp lệ!");
      } else {
        let valInsert = parseFloat(prompt("Nhập giá trị:"));
        arr.splice(posInsert, 0, valInsert);

        console.log("Đã thêm phần tử thành công!");
      }
      break;
    case 8:
      console.log("Thoát chương trình!");
      break;
    default:
      console.log("Lựa chọn không hợp lệ!");
      break;
  }
} while (choice !== 8);
