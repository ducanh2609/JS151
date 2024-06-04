// const arr1 = [2, 3, 4, 5]
// const arr2 = ['Quân', 'Huy', 'Phương', 'Trung']
// // const arr3 = [[], []]
// // const arr4 = [{}, {}]


// const QuangInfo = {
//     Name: 'Quang',
//     Age: 20,
//     City: 'Hà Nội',
//     Love: ['Yến', 'Linh'],
//     Car: {
//         Name: 'Mescerdes',
//         Level: 'S',
//     }
// }

//1. Các method sử dụng với array
// + Lấy độ dài: <arr>.length
// console.log(arr2.length)
// + Thứ tự (index): từ 0 đến arr.length - 1
// + Lấy phần tử trong array: arr[index]
// console.log(arr2[0])
// Khởi tạo arr: arr = new Array(3)
// const arrA = new Array(3)
// console.log(arrA)
// + Gán giá trị cho 1 phần tử: arr[index] = <value>
// arrA[1] = 'Conan'
// console.log(arrA)
// + Thêm phần tử: arr.push(<value>)
// arr2.push('Phương')
// console.log(arr2)
// + Xóa phần tử đầu tiên của mảng: arr.shift()
// arr2.shift()
// console.log(arr2)
// + Xóa phân tử cuối: arr.pop()
// arr2.pop()
// console.log(arr2)
// + Thêm phần tử vào đầu mảng: arr.unshift(<value>)
// arr2.unshift("Quân")
// console.log(arr2)
// + Copy 1 mảng nhỏ trong 1 mảng: arr.slice(<gt đầu>, <gt cuối>)
// => luôn tạo ra 1 mảng mới và k thay đổi mảng ban đầu
// const arrCopy = arr2.slice(0, 0) // lấy từ thằng đầu đến thằng cuối nhưng k bao gồm thằng cuối
// console.log('arrCopy', arrCopy)
// console.log('arr2', arr2)
// + Cắt mảng: arr.splice(<index>, sô phân tử bị xóa) - bao gồm cả thằng index
// => thay đổi mảng ban đầu thành mảng mới
// arr2.splice(0, 3) // lấy từ thằng đầu đến thằng cuối nhưng k bao gồm thằng cuối
// console.log('arrCopy', arrCopy)
// console.log('arr2', arr2)
// + Nối mảng: arr1.concat(arr2) => tạo 1 mảng mới
// const arrConCat = arr1.concat(arr2)
// console.log(arrConCat)
// C2: [...arr1, arr2]
// const arrConCat = [...arr1, ...arr2]
// console.log(arrConCat)

// * 1 số phương thức của object
// + Gọi giá trị (value) của 1 thuộc tính (key) trong object
// obj.<tên key>
// console.log(QuangInfo.Age)
// obj['<key>']
// const key = ['Name', 'Age']
// console.log(QuangInfo[key[1]])


// BT:
// Bài 1: Đếm Số Lần Xuất Hiện trong Mảng:
// const numbers = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];
// const targetCounting = 2;
// let count = 0
// for (let i = 0; i < numbers.length; i++) {
//     if (targetCounting === numbers[i]) {
//         count++
//     }
// }
// console.log(count)
// console.log(numbers.includes(6)) // kiểm tra xem 1 gtri có là phần tử của 1 mảng hay k
// console.log(numbers.indexOf(6)) // tìm index của 1 phần tử trong mảng, nếu k tìm thấy trả về -1

// Bài 2: Tìm Số Lớn Nhất Trong Mảng:
// const numbers = [5, 2, 9, 3, 7, 11, 8];
// let max = 0
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i]
//     }
// }

// console.log(max)
// Bài 3: Đảo Ngược Mảng:
// const array = [1, 2, 3, 4, 5];
// const newArr = []
// for (let i = array.length - 1; i >= 0; i--) {
//     newArr.push(array[i])
// }
// console.log(newArr)
// const array2 = [1, 2, 3, 10, 8, 4, 5];
// const arrSort = array2.sort((a, b) => b - a)
// console.log(arrSort)


// Bài 4: Xóa Phần Tử Trùng Nhau Khỏi Mảng:
// const duplicatesArray = [1, 2, 3, 2, 4, 4, 5];
// C1:
// const newArr = []
// for (let i = 0; i < duplicatesArray.length; i++) {
//     if (!newArr.includes(duplicatesArray[i])) {
//         newArr.push(duplicatesArray[i])
//     }
// }
// console.log(newArr)
// C2:
// for (let i = 0; i < duplicatesArray.length - 1; i++) {
//     for (let j = i + 1; j < duplicatesArray.length; j++) {
//         if (duplicatesArray[i] === duplicatesArray[j]) {
//             duplicatesArray.splice(j, 1)
//             j--
//         }
//     }
// }

// console.log(duplicatesArray);

// Bài 5: Tính Điểm Trung Bình từ Mảng Đối Tượng:
// const students = [
//     { name: "Alice", age: 20, grades: [80, 85, 90] },
//     { name: "Bob", age: 21, grades: [75, 88, 95] }
// ];

// const avgArr = []
// for (let i = 0; i < students.length; i++) {
//     const grades = students[i].grades
//     let sum = 0
//     for (let j = 0; j < grades.length; j++) {
//         sum += grades[j]
//     }
//     const avg = sum / grades.length
//     avgArr.push({
//         name: students[i].name,
//         avg,
//     })
// }

// console.log(avgArr)

// Bài 6: Tìm Sản Phẩm Rẻ Nhất Trong Mảng Đối Tượng:
// const products = [
//     { name: "Áo", price: 20 },
//     { name: "Quần", price: 30 },
//     { name: "Giày", price: 10 }
// ];

// let minPrice = products[0].price
// let minProduct = products[0]
// for (let i = 1; i < products.length; i++) {
//     if (products[i].price < minPrice) {
//         minPrice = products[i].price
//         minProduct = products[i]
//     }
// }

// console.log(minProduct);


// Bài 7: Thực hiện nhóm các điểm số của các học sinh lại thành đối tượng: tên môn học, danh sách điểm
// const students = [
//     { name: "Alice", age: 20, grades: { math: 90, english: 85, science: 88 } },
//     { name: "Bob", age: 21, grades: { math: 80, english: 75, science: 78 } }
// ]

// const pointTable = {
//     math: [],
//     english: [],
//     science: []
// }
// for (let i = 0; i < students.length; i++) {
//     const grades = students[i].grades
//     pointTable.math.push(grades.math)
//     pointTable.english.push(grades.english)
//     pointTable.science.push(grades.science)
// }


// console.log(pointTable)
