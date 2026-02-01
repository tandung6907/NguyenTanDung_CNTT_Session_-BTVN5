// yêu cầu chọn từ case1 đến case6 case7 thì thoát
let choice =+ prompt("Mời bạn nhập lựa chọn: ");

do {
    switch (choice) {
        case 1: 
        console.log("chọn chức năng 1");
        break;
        case 2: 
        console.log("Chọn chức năng 2");
        break;

        default:
        break;
    }

} while (choice != 7)