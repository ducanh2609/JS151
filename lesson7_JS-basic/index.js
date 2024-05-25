// console.log('log lần 1', a)


// let a = 5
// var a = 6
// const a = 7
// var a = 8
// console.log('log lần 2', a)

// let, const k có hoisting; var thì có
// const là hằng sô -> k thể gán lại được; let - var thì có thể được gán lại
// let const thì k thể khai báo lại được;  var thì có thể

// Trong JS có 2 nhóm kiểu dữ liệu:
// + Kiểu dữ liệu nguyên thủy: string, number, null, undefined, boolean
// + Kiểu dữ liệu kiểu phức tạp: object, array, function

// let string = 'string'
// let number = 12
// let _null = null
// let _undefined = undefined
// let _boolean = true || false

// let object = {
//     key: 'value',
// }

// let arr = [1, 2, 3, 4]
// let _function = (num) => { }

// console.log(typeof _function)

// = , + , - , * , / , ** , % , mod 
//  && , || , ! , !! , < , > , <= , <== , >= , >== , != , !== , == , === : luôn trả ra kiểu dữ liệu true hoặc false (boolean)
let x1 = 5
let x2 = 7
// console.log(((x1 > x2) || (x1 == 5)))

// >= , <= , == :  Chỉ so sánh về giá trị
x1 = 5
x2 = '5'
// console.log(x1 == x2)

// >== , <== , === :  Chỉ so sánh về cả giá trị và kiểu dữ liệu
console.log(x1 === x2)
// + Toán tử tính toán (+, - , *, /):
// console.log('1.', x1 + x2) // "55"
// console.log('2.', x1 - x2) // 0
// console.log('3.', x1 * x2) // 25
// console.log('4.', x1 / x2) // 1
// Bài 1: Diện tích, chu vi hình chữ nhật
let a = 4
let b = 7
let s = a * b
let c = 2 * (a + b)
console.log('Diện tích: ', s)
console.log('Chu vi: ', c)

// Bài 2: Chuyển đổi giây sang phút
let sc = 6000
let hour = (sc - (sc % 3600)) / 3600
let minute = ((sc % 3600) - (sc % 3600) % 60) / 60
let g = sc - minute * 60 - hour * 3600
console.log(`${hour}h ${minute}m ${g}s`)

// Bài 3: Nhập 1 số và tính lũy thừa của nó
// let number = 10
// let lt = 4
// console.log(bt)
// let number = prompt('Nhập 1 số') // cho nhập 1 dữ liệu
// let lt = prompt('Nhập 1 số lũy thừa')
// let bt = number ** lt
// alert(`lũy thừa của số bạn vừa nhập là: ${bt}`) // in ra dữ liệu

// Bài 4: Tính trung bình cộng của 3 số

let num1 = +prompt('Nhập số thứ nhất')
let num2 = +prompt('Nhập số thứ hai')
let num3 = +prompt('Nhập số thứ ba')
let tb = (num1 + num2 + num3) / 3
alert(`TBC của 3 số bạn vừa nhập là: ${tb}`)









