//if (<điều kiện>) {
//khối lệnh
// }
// let d = 17
// let c = 16
// {
//     var a = 10
//     let b = 15
//     c = 17
//     // let, const có phạm vi scope
//     // var có phạm vi là global
//     console.log('b1', b)
//     console.log('c1', c)

// }
// console.log(c)
// let b = 18
// console.log(a)
// console.log('b2', b)
// console.log(c)
// let sum = 0
// for (let i = 1; i <= 100; i++) {
//     sum = sum + i
// }
// console.log(sum)
// let i = 0
// let sum = 0
// while (i <= 100) {
//     sum = sum + i
//     i++
// }
// console.log(sum)

// BT:
// 1. Sử dụng vòng lặp, tính tổng các chữ số từ 1 đến 100
// let sum = 0
// for (let i = 0; i <= 100; i++) {
//     sum += i
// }
// console.log(sum)
// for (let i = 0; i <= 100; i += 5) {
//     sum += i
// }
// for thiếu: k có điểm bắt đầu
// for (let i ; i <= 100; i+= 5) {
//     sum += i
// }
// for thiếu: k có điểm kết thúc
// for (let i ; ; i+= 5) {
//     sum += i
// }
// for thiếu: k có bước nhảy
// for (let i ; i <= 100 ; ) {
//     sum += i
// }
// for biến chạy là hắng số
// for (let i = 0 ; i = 100 ; i + 5 ) {
//     sum += i
// }
// 2. Các số từ 0 đến 100, in ra các số chia hết cho 3 và 5
// for (let i = 0; i <= 100; i++) {
//     if ((i % 3) === 0 && !(i % 5)) {
//         console.log(i);
//     }
// }
// Trong js thì số 0 cũng là 1 kết quả của phủ định
// 3. Tính giai thừa của một số nguyên bất kỳ

// const num = +prompt('Nhập 1 số:')
// let n = 1
// for (let i = 1; i <= num; i++) {
//     n *= i // n = n * i
// }

// console.log(n)
// 4. Sử dụng vòng lặp for để in ra bảng cửu chương từ 2 đến 9
// for (let i = 2; i <= 9; i++) {
//     console.log(`Bảng cửu chương ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//         // console.log(i, 'x', j, '=', i*j);
//     }
// }
// 5. Thực hiện đưa một số nguyên về dạng nhị phân 0,1
// let num = 11
// let str = ''
// let i = 1
// while (num >= 1) {
//     str += (num % 2)
//     num = Math.floor(num / 2)
//     i++
// }
// let newStr = ''
// // Với kiểu dữ liệu là str thì có 1 số phương thức tham chiếu
// // + lấy độ dài: <str>.length
// // + lấy phần tử của string: index - là số thứ tự của các phần tử trong str và nó bắt đầu từ 0
// // let str = 'MindX' M có index = 0 và X có index là 4
// // lấy "X" thì gọi str[4]

// for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i]
// }
// console.log(newStr)

// 6. Sử dụng vòng lặp, thực hiện tính phép tính sau
// let s = 0
// let n = 10
// for (let i = 1; i <= n; i++) {
//     s = Math.sqrt(s + i)
// }

// console.log(s)

// 7. Sử dụng vòng lặp, thực hiện tính phép tính sau
// let s = 0
// let n = 2
// for (let i = n; i >= 1; i--) {
//     s = Math.sqrt(s + i)
// }

// console.log(s)