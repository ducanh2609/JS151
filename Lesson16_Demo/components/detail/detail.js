let currentLogin = localStorage.getItem("currentLogin");
console.log(currentLogin);
const btnAcount = document.getElementById("btn-acount");
if (currentLogin) {
    currentLogin = JSON.parse(currentLogin);
    btnAcount.innerHTML = `
            <div class="card-icon" onclick="gotoCard()">
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
    window.location.href = "../../index.html"
}

function gotoCard() {
    window.location.href = "../card/card.html"
}

const detail = document.getElementById("detail");
const productNumber = +localStorage.getItem("productNumber");
const productArr = JSON.parse(localStorage.getItem("productArr") || "[]");
const findProduct = productArr.find((item) => +item.Id === productNumber);
if (findProduct) {
    detail.innerHTML = `
            <div class="product-img">
                <img src="${findProduct.Img.replace('Image', 'Lesson16_Demo/Image')}" alt="">
            </div>
            <div class="detail-info">
                <p class="product-name">${findProduct.Name}</p>
                <p class="product-price">${findProduct.Price}</p>
                <div class="diff-detail"></div>
            </div>
    `;
}
