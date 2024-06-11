// Bài 1: Thay đổi nội dung thẻ qua DOM
// const title = document.getElementsByClassName('title')
// Khi gọi theo class thì nó luôn có dạng giống với 1 mảng
// title[0].innerHTML = 'Đây là nội dung đã được thay đổi'
// const title = document.getElementById('title')
// console.log('title', title)

// title.innerHTML = 'Đây là nội dung đã được thay đổi'
// Khi gọi theo id thì nó gọi chính xác 1 thẻ
// title.innerHTML = 'Đây là nội dung'

// Bài 2: Thay đổi css 1 thẻ qua DOM
// title.style.fontSize = '40px'
// title.style.color = 'red'
// title.style.backgroundColor = 'blue'

// Bài 3: Click button chuyển đổi 2 trạng thái
// const title = document.getElementById('title')

// const originStyle = {
//     color: title.style.color,
//     backgroundColor: title.style.backgroundColor
// }
// const changeColor = {
//     color: 'red',
//     backgroundColor: 'blue',
// }
// let isNewStyle = false
// function changeStyle(element) {
//     console.log('isNewStyle', isNewStyle)
//     if (!isNewStyle) {
//         element.style.color = changeColor.color
//         element.style.backgroundColor = changeColor.backgroundColor
//     } else {
//         element.style.color = originStyle.color
//         element.style.backgroundColor = originStyle.backgroundColor
//     }

//     isNewStyle = !isNewStyle
// }
// const btnClick = document.getElementById('btnClick')
// btnClick.addEventListener('click', () => {
//     changeStyle(title)
// })

// Bài 4 - 5: 
const input = document.getElementById('input')
const button = document.getElementById('button')
const todoList = document.getElementById('todo-list')

let todos = localStorage.getItem('todos') // get data trên local storage theo key
console.log(todos)
if (todos) {
    todos = JSON.parse(todos)
} else {
    todos = []
}
for (let i = 0; i < todos.length; i++) {
    todoList.innerHTML += `
                <div>
                    <input type="checkbox">
                    <span>${todos[i]}</span>
                </div>
        `
}

button.addEventListener('click', () => {
    todos.push(input.value)
    localStorage.setItem('todos', JSON.stringify(todos))
    if (input.value?.trim()) {
        todoList.innerHTML += `
                <div>
                    <input type="checkbox">
                    <span>${input.value}</span>
                </div>
        `
        input.value = ''
    }
})

// const arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr);
// console.log(JSON.stringify(arr))
// console.log(JSON.parse(JSON.stringify(arr)))

// setTimeout(() => {
//     console.log('time-out');
// }, 5000)

// const interval = setInterval(() => {
//     console.log('setInterval')
//     clearInterval(interval)
// }, 1000)
const listImg = ['./img/img1.jpg', './img/img2.jpg', './img/img3.jpg']
const slide = document.getElementById('slide')
slide.innerHTML = `
        <img src="${listImg[0]}" alt="">

`
let i = 1
const renderImg = setInterval(() => {
    if (i >= listImg.length) i = 0
    slide.innerHTML = `
        <img src="${listImg[i]}" alt="">
`
    i++
}, 1000)

