let currentLogin = localStorage.getItem('currentLogin')
console.log(currentLogin)
const btnAcount = document.getElementById('btn-acount')
if (currentLogin) {
    currentLogin = JSON.parse(currentLogin)
    btnAcount.innerHTML = `
            <div class="card-icon" onclick="gotoCard()">
                <i class="fa-solid fa-cart-plus"></i>
                <div class="count" id="total">0</div>
            </div>
            <div class="acount">
                <i class="fa-solid fa-user"></i>
                <span>${currentLogin.username}</span>
            </div>
    `
} else {
    btnAcount.innerHTML = `
            <button class="register" id="register">
                <a href="./pages/register.html">Register</a>
            </button>
            <button class="login" id="login">
                <a href="./pages/login.html">Login</a>
            </button>
    `
}
function gotoCard() {
    window.location.href = "./components/card/card.html"
}
const product = document.getElementById('product')
let productArr = localStorage.getItem('productArr')
productArr = productArr ? JSON.parse(productArr) : []
for (let i = 0; i < productArr.length; i++) {
    product.innerHTML += `
        <div class="product-item ${productArr[i].Id}">
            <img class="image" onClick="getDetail(${productArr[i].Id})" src=${productArr[i].Img.replace('Image', 'Lesson16_Demo/Image')} alt="">
            <div class="infor-box">
                <div class="price"><span>${productArr[i].Price}</span></div>
                <div class="description" onClick="getDetail(${productArr[i].Id})">${productArr[i].Name}
                </div>
                <div class="add-card" id=${productArr[i].Id}>Thêm vào giỏ hàng</div>
            </div>
        </div>
    `
}

function getTotal() {
    const total = document.getElementById('total')
    const products = JSON.parse(localStorage.getItem('product-choice') || '[]')
    const productCount = products.reduce((number, item) => {
        number += item.count
        return number
    }, 0)
    total.innerHTML = `${productCount}`
}
const addCart = document.getElementsByClassName('add-card')
getTotal()
for (let i = 0; i < addCart.length; i++) {
    addCart[i].addEventListener('click', () => {
        const currentLogin = localStorage.getItem('currentLogin')
        if (!currentLogin) {
            alert('Bạn chưa đăng nhập')
            window.location.href = '/lesson13_BootsTrap/pages/login.html'
            return
        }
        const data = JSON.parse(localStorage.getItem('product-choice') || '[]')
        const findProduct = data.findIndex(item => item.Id === addCart[i].id)
        console.log(findProduct);
        if (findProduct === -1) {
            const product = productArr.find(item => item.Id === addCart[i].id)
            if (product) {
                data.push({
                    ...product,
                    count: 1,
                })
            }
        } else {
            data[findProduct].count++
        }
        localStorage.setItem('product-choice', JSON.stringify(data))
        getTotal()
    })
}

function getDetail(id) {
    localStorage.setItem('productNumber', `${id}`)
    window.location.href = './components/detail/detail.html'
}
