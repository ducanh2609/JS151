const login = document.getElementById('login')
login.addEventListener('submit', (e) => {
    e.preventDefault()
    const listUser = JSON.parse(localStorage.getItem('users') || '[]')
    const { username, password } = login
    if (!username.value || username.value.length < 6) {
        return
    }
    if (!password.value) {
        console.log('password required');
        return
    }
    const findUser = listUser.find(item => item.username === username.value && item.password === password.value)
    if (!findUser) {
        console.log('Tài khoản k đúng');
        return
    }
    const loginUser = {
        userId: findUser.userId,
        username: findUser.username,
    }
    localStorage.setItem('currentLogin', JSON.stringify(loginUser))
    window.location.href = '../index.html'
})