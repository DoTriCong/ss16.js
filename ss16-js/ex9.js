function arr(string) {
    return string.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
let inputString = prompt("Nhập vào một đoạn :");
let capitalizedString = arr(inputString);
alert("Đoạn sau khi in hoa chữ cái đầu tiên của mỗi từ là: " + capitalizedString);
