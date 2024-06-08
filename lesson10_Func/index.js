// const arr = [1, 2, 3]
// function logArr(arrIn, isTest) {
//     console.log('arrIn', arrIn)
//     console.log('isTest', isTest)

//     if (isTest) console.log(isTest)
//     for (let i = 0; i < arrIn.length; i++) {
//         console.log(arrIn[i])
//     }
//     return 'change'
// }
// const testStr = logArr(arr, 'test')
// console.log(testStr)

// BT:
// Bài 2:
// Viết một hàm nhận vào một mảng số nguyên và một số k, trả về số lớn thứ k trong mảng đó.
// Điều kiện: k phải <= số lượng phần tử của mảng sau khi loại bỏ phần tử trùng nhau
// const arr = [2, 5, 2, 7, 9, 10]
// const k = 3
// const arr2 = [2, 5, 2, 7, 9, 10, 2, 5, 2, 7, 9, 10]

// function choiceValue(numberArr, key) {
//     const arrDupli = delDup(numberArr)
//     arrDupli.sort((a, b) => a - b)
//     console.log(arrDupli[key - 1]);
//     return arrDupli[key - 1]
// }

// function delDup(arrDup) {
//     for (let i = 0; i < arrDup.length - 1; i++) {
//         for (let j = i + 1; j < arrDup.length; j++) {
//             if (arrDup[i] === arrDup[j]) {
//                 arrDup.splice(j, 1)
//                 j--
//             }
//         }
//     }
//     return arrDup
// }

// choiceValue(arr, k)
// const arrDel2 = delDup(arr2)
// console.log(delDup(arr))

// Bài 3: Viết một hàm nhận vào một mảng các số nguyên và trả về số lần xuất hiện nhiều nhất của một số trong mảng đó. Trường hợp có các số có số lần lặp giống nhau thì sẽ in ra số lớn nhất
// const arr = [1, 2, 3, 2, 2, 1, 4, 4, 4, 5, 10, 10, 10]


// function countMax(arrItem) {
//     const arrCountItem = []
//     let maxObj = {
//         value: arr[0],
//         count: 1,
//     }
//     for (let i = 0; i < arrItem.length - 1; i++) {
//         let count = 1
//         if (!arrCountItem.includes(arrItem[i])) {
//             arrCountItem.push(arrItem[i])
//             for (let j = i + 1; j < arrItem.length; j++) {
//                 if (arrItem[i] === arrItem[j]) {
//                     count++
//                 }
//             }
//             if (count > maxObj.count) {
//                 maxObj = {
//                     value: arrItem[i],
//                     count,
//                 }
//             }
//             if (count === maxObj.count) {
//                 if (arrItem[i] > maxObj.value) {
//                     maxObj = {
//                         value: arrItem[i],
//                         count,
//                     }
//                 }
//             }
//         }
//     }
//     return maxObj
// }

// console.log(countMax(arr))
// const arr2 = [1, 2, 3, 2, 2, 1, 4, 4, 4, 5, 10, 10, 10]
// countMax(arr2)
// Bài 4: Tách các từ trong một chuỗi thành một mảng các chuỗi.
// function splitWords(str) {
//     return str.split(' ')
// }
// console.log(splitWords("This is a test"));

// Bài 5: Tính tổng của tất cả các giá trị là số trong đối tượng
// const data = { a: 1, b: 'hello', c: 3, d: 'world' }

// function sumNumber(obj) {
//     const valueList = Object.values(obj)
//     let sum = 0
//     for (let i = 0; i < valueList.length; i++) {
//         if (typeof valueList[i] === 'number') {
//             sum += valueList[i]
//         }
//     }
//     return sum
// }

// const sum = sumNumber(data)
// console.log(sum)