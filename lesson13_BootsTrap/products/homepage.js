const productInfor = [
    {
        id: 1,
        src: '../image/background.jpg',
        price: 1000,
        description: 'abc'
    },
    {
        id: 2,
        src: '../image/background.jpg',

        price: 1000,
        description: 'abcabc'
    },
    {
        id: 3,
        src: '../image/background.jpg',
        price: 1000,
        description: 'abc'
    },
    {
        id: 4,
        src: '../image/background.jpg',
        price: 1000,
        description: 'abc'
    },
    {
        id: 5,
        src: '../image/background.jpg',
        price: 1000,
        description: 'abc'
    },
    {
        id: 'CM2000',
        src: '../image/background.jpg',
        price: 1000,
        description: 'abc'
    },
]

const product = document.getElementById('product')
for (let i = 0; i < productInfor.length; i++) {
    product.innerHTML += `
        <div class="product-item ${productInfor[i].id}">
            <img class="image" src=${productInfor[i].src} alt="">
            <div class="infor-box">
                <div class="price"><span>${productInfor[i].price}</span></div>
                <div class="description">${productInfor[i].description}
                </div>
                <div class="add-card" id=${productInfor[i].id}>Thêm vào giỏ hàng</div>
            </div>
        </div>
    `
}

const addCart = document.getElementsByClassName('add-card')

console.log(addCart);
for (let i = 0; i < addCart.length; i++) {
    addCart[i].addEventListener('click', () => {
        const data = JSON.parse(localStorage.getItem('product-choice') || '[]')
        console.log('card', addCart[i].id)
        console.log('data', data)
        const findProduct = data.findIndex(item => item.id === addCart[i].id)
        console.log(findProduct);
        if (findProduct === -1) {
            data.push({
                id: addCart[i].id,
                count: 1,
            })
        } else {
            data[findProduct].count++
        }
        localStorage.setItem('product-choice', JSON.stringify(data))
    })
}
