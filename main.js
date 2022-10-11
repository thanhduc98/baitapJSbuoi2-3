//BÀI TẬP 1
document.getElementById('bai1').onclick = function () {
    var luong1Ngay = document.getElementById('luong1Ngay').value;
    var soNgayLam = document.getElementById('soNgayLam').value;
    var tongLuong = luong1Ngay * soNgayLam;
    var currentFormat = new Intl.NumberFormat("vn-VN");
    document.getElementById('ketQua1').innerHTML = 'Tổng số tiền lương trong ' + currentFormat.format(soNgayLam) + ' ngày làm là: ' + currentFormat.format(tongLuong) + 'vnđ';
}
//BÀI TẬP 2
document.getElementById('bai2').onclick = function () {
    var num1 = Number(document.getElementById('numb1').value);
    var num2 = Number(document.getElementById('numb2').value);
    var num3 = Number(document.getElementById('numb3').value);
    var num4 = Number(document.getElementById('numb4').value);
    var num5 = Number(document.getElementById('numb5').value);
    var giaTriTrungBinh = (num1 + num2 + num3 + num4 + num5) / 5;
    document.getElementById('ketQua2').innerHTML = 'Giá trị trung bình của 5 số trên = ' + giaTriTrungBinh;
}

//Bài tập 3
document.getElementById('bai3').onclick = function () {
    var soTienUSD = document.getElementById('soTienUSD').value;
    var soTienQuyDoi = 23500 * soTienUSD;
    var currentFormat = new Intl.NumberFormat("vn-VN");
    document.getElementById('ketQua3').innerHTML = "Số tiền quy đổi = " + currentFormat.format(soTienQuyDoi) + "vnđ";
}

//Bài tập 4
document.getElementById('bai4').onclick = function () {
    var chieuDai = Number(document.getElementById('nhapChieuDai').value);
    var chieuRong = Number(document.getElementById('nhapChieuRong').value);
    dienTich = chieuDai * chieuRong;
    chuVi = (chieuDai + chieuRong) * 2;
    document.getElementById('ketQua4').innerHTML = "Diện tích: " + dienTich + '<br>' + " Chu vi: " + chuVi;
}

//BÀI TẬP 5
document.getElementById('bai5').onclick = function () {
    var num = document.getElementById('nhapSo').value;
    hangChuc = Math.floor(num / 10);
    hangDonVi = num % 10;
    tong = hangChuc + hangDonVi;
    document.getElementById('ketQua5').innerHTML = "Tổng 2 chữ số = " + tong;
}