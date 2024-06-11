const register = document.getElementById('register')
const submit = document.getElementById('submit')
const listUser = JSON.parse(localStorage.getItem('users') || '[]')
console.log(listUser)
register.addEventListener('submit', (e) => {
    e.preventDefault()
    const { username, password, confirm } = register
    if (!username.value || username.value.length < 6) {
        console.log('username error');
        return
    }
    if (!password.value || password.value !== confirm.value) {
        console.log('password error');
        return
    }
    const data = {
        username: username.value,
        password: password.value,
        confirm: confirm.value,
    }
    console.log(data)
    listUser.push(data)
    localStorage.setItem('users', JSON.stringify(listUser))
    username.value = ''
    password.value = ''
    confirm.value = ''
})