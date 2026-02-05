let arr = [];
let choice;

do {
  console.log("================== MENU ===================");
  console.log("1. Nhập số phần tử và giá trị");
  console.log("2. In ra giá trị mảng");
  console.log("3. In số chẵn, tính tổng và sắp xếp giảm dần");
  console.log("4. In Max, Min và vị trí");
  console.log("5. In số nguyên tố và tính tổng");
  console.log("6. Đếm số lần xuất hiện của một số");
  console.log("7. Thêm phần tử vào vị trí chỉ định");
  console.log("8. Xóa phần tử theo giá trị");
  console.log("9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần");
  console.log("10. Thoát");
  console.log("============================================");

  choice = parseInt(prompt("Lựa chọn của bạn:"));

  switch (choice) {
    case 1:
      let n = parseInt(prompt("Nhập số lượng phần tử:"));
      if (n < 0 || isNaN(n)) {
        console.log("Số lượng không hợp lệ!");
      } else {
        arr = [];
        for (let i = 0; i < n; i++) {
          let val = parseFloat(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
          if (!isNaN(val)) {
            arr[arr.length] = val;
          }
        }
        console.log("Nhập mảng thành công!");
      }
      break;
    case 2:
      if (arr.length === 0) {
        console.log("Mảng rỗng!");
      } else {
        for (let i = 0; i < arr.length; i++) {
          console.log("arr[" + i + "] = " + arr[i]);
        }
      }
      break;
    case 3:
      let evenArr = [];
      let sumEven = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
          evenArr[evenArr.length] = arr[i];
          sumEven = sumEven + arr[i];
        }
      }
      if (evenArr.length === 0) {
        console.log("Không có số chẵn!");
      } else {
        for (let i = 0; i < evenArr.length - 1; i++) {
          for (let j = i + 1; j < evenArr.length; j++) {
            if (evenArr[i] < evenArr[j]) {
              let temp = evenArr[i];
              evenArr[i] = evenArr[j];
              evenArr[j] = temp;
            }
          }
        }
        console.log("Số chẵn giảm dần: " + evenArr);
        console.log("Tổng chẵn: " + sumEven);
      }
      break;
    case 4:
      if (arr.length === 0) {
        console.log("Mảng rỗng!");
      } else {
        let maxVal = arr[0];
        let minVal = arr[0];
        let maxIdx = "0";
        let minIdx = "0";
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > maxVal) {
            maxVal = arr[i];
            maxIdx = i + "";
          } else if (arr[i] === maxVal) {
            maxIdx = maxIdx + ", " + i;
          }
          if (arr[i] < minVal) {
            minVal = arr[i];
            minIdx = i + "";
          } else if (arr[i] === minVal) {
            minIdx = minIdx + ", " + i;
          }
        }
        console.log("Giá trị lớn nhất: " + maxVal + " tại vị trí: " + maxIdx);
        console.log("Giá trị nhỏ nhất: " + minVal + " tại vị trí: " + minIdx);
      }
      break;
    case 5:
      let sumPrime = 0;
      let resPrime = "";
      for (let i = 0; i < arr.length; i++) {
        let isPrime = true;
        if (arr[i] < 2 || arr[i] !== Math.floor(arr[i])) {
          isPrime = false;
        } else {
          for (let j = 2; j * j <= arr[i]; j++) {
            if (arr[i] % j === 0) {
              isPrime = false;
              break;
            }
          }
        }
        if (isPrime === true) {
          resPrime = resPrime + arr[i] + " ";
          sumPrime = sumPrime + arr[i];
        }
      }
      if (resPrime !== "") {
        console.log("Các số nguyên tố: " + resPrime);
      } else {
        console.log("Không có số nguyên tố");
      }
      console.log("Tổng số nguyên tố: " + sumPrime);
      break;
    case 6:
      let findNum = parseFloat(prompt("Nhập số cần đếm:"));
      let countFind = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === findNum) {
          countFind = countFind + 1;
        }
      }
      console.log("Số " + findNum + " xuất hiện " + countFind + " lần");
      break;
    case 7:
      let addPos = parseInt(
        prompt("Nhập vị trí muốn thêm (0-" + arr.length + "):"),
      );
      if (addPos >= 0 && addPos <= arr.length) {
        let addVal = parseFloat(prompt("Nhập giá trị:"));
        let tempAdd = [];
        for (let i = 0; i < addPos; i++) {
          tempAdd[tempAdd.length] = arr[i];
        }
        tempAdd[tempAdd.length] = addVal;
        for (let i = addPos; i < arr.length; i++) {
          tempAdd[tempAdd.length] = arr[i];
        }
        arr = tempAdd;
        console.log("Đã thêm thành công!");
      } else {
        console.log("Vị trí không hợp lệ!");
      }
      break;
    case 8:
      let delVal = parseFloat(prompt("Giá trị cần xóa:"));
      let tempDel = [];
      let isDel = false;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== delVal) {
          tempDel[tempDel.length] = arr[i];
        } else {
          isDel = true;
        }
      }
      arr = tempDel;
      if (isDel === true) {
        console.log("Đã xóa tất cả phần tử có giá trị " + delVal);
      } else {
        console.log("Không tìm thấy giá trị cần xóa!");
      }
      break;
    case 9:
      let sortType = prompt(
        "Nhập 1 để sắp xếp Tăng dần, nhập 2 để sắp xếp Giảm dần:",
      );
      if (sortType === "1") {
        for (let i = 0; i < arr.length - 1; i++) {
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
              let tmp = arr[i];
              arr[i] = arr[j];
              arr[j] = tmp;
            }
          }
        }
        console.log("Đã sắp xếp tăng dần!");
      } else if (sortType === "2") {
        for (let i = 0; i < arr.length - 1; i++) {
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
              let tmp = arr[i];
              arr[i] = arr[j];
              arr[j] = tmp;
            }
          }
        }
        console.log("Đã sắp xếp giảm dần!");
      } else {
        console.log("Lựa chọn sắp xếp không hợp lệ!");
      }
      break;
    case 10:
      console.log("Thoát chương trình. Tạm biệt!");
      break;
    default:
      console.log("Lựa chọn không hợp lệ!");
  }
} while (choice !== 0);
