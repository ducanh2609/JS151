const arr1 = [2, 3, 4, 5]
const arr2 = ['Quân', 'Huy', 'Phương', 'Trung']
// const arr3 = [[], []]
// const arr4 = [{}, {}]


const QuangInfo = {
    Name: 'Quang',
    Age: 20,
    City: 'Hà Nội',
    Love: ['Yến', 'Linh'],
    Car: {
        Name: 'Mescerdes',
        Level: 'S',
    }
}

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
