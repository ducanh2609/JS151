let currentLogin = localStorage.getItem("currentLogin");
console.log(currentLogin);
const btnAcount = document.getElementById("btn-acount");
if (currentLogin) {
    currentLogin = JSON.parse(currentLogin);
    btnAcount.innerHTML = `
            <div class="card-icon">
                <i class="fa-solid fa-cart-plus"></i>
                <div class="count" id="total">0</div>
            </div>
            <div class="acount">
                <i class="fa-solid fa-user"></i>
                <span>${currentLogin.username}</span>
            </div>
    `;
} else {
    window.location.href = "../../index.html";
}
function goHomePage() {
    window.location.href = "../../index.html";
}
const tbody = document.getElementById("tbody");
const content = document.getElementById("content");
const productChoice = JSON.parse(
    localStorage.getItem("product-choice") || "[]"
);
if (!productChoice.length) {
    content.innerHTML += `
        <div class="no-product">Bạn chưa chọn sản phẩm</div>
    `;
} else {
    productChoice.forEach((item, index) => {
        tbody.innerHTML += `
                    <tr>
                        <td>
                            <img src="${item.Img.replace(
            "Image",
            "Lesson16_Demo/Image"
        )}" />
                        </td>
                        <td>${item.Name}</td>
                        <td class="price" id="price-${index}">${item.Price}</td>
                        <td>
                            <input class="quantity" type="number" id="quan-${index}" value="${item.count}" min="0"/>
                        </td>
                        <td><span class="amount" id="amount-${index}">${convertToStr(convertToNum(item.Price, true) * item.count)}</span> đ</td>
                        <td>
                            <i class="fa-solid fa-trash"></i>
                        </td>
                    </tr>
        `;
    });
}
setTotal()
function convertToStr(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function convertToNum(value, isChart) {
    return isChart ? value.slice(0, -1).trim().replaceAll(".", "") : value.trim().replaceAll(".", "")
}
const quantity = document.getElementsByClassName('quantity')
const amount = document.getElementsByClassName('amount')
const price = document.getElementsByClassName('price')

console.log(quantity);
for (let i = 0; i < quantity.length; i++) {
    quantity[i].addEventListener('change', (e) => {
        const index = +e.target.id.slice(-1)
        console.log(price[index]);
        amount[index].innerHTML = `${convertToStr(convertToNum(price[index].innerHTML, true) * e.target.value)}`
        // update xong phải update lại gtri trong localStorage
        productChoice[index].count = e.target.value
        localStorage.setItem('product-choice', JSON.stringify(productChoice))
        setTotal()
    })
}

function setTotal() {
    const totalAmount = document.getElementById('totalAmount')
    const amount = document.getElementsByClassName('amount')
    console.log('amount', amount);
    let totalPrice = 0
    for (let i = 0; i < amount.length; i++) {
        console.log(amount[i].innerHTML)
        totalPrice += +convertToNum(amount[i].innerHTML)
    }
    console.log(totalPrice);
    totalAmount.innerHTML = `${convertToStr(totalPrice)} đ`
}

// Làm hàm xóa sản phẩm tính lại tổng tiền và update sản phẩm đã chọn lên localStorage