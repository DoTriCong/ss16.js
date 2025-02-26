let math = +prompt("Nhap vao so diem mon math");
let physics = +prompt("Nhap vao so mon physics");
let chemistry = +prompt("Nhap vao so mon chemistry");
let avg = (math + physics + chemistry) / 3;
document.write(`Trung binh cong 3 mon la: ${avg}`);