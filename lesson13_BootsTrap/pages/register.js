const register = document.getElementById('register')
const userErr = document.getElementById('username-err')
const passErr = document.getElementById('pass-err')
const confirmErr = document.getElementById('confirm-err')

const submit = document.getElementById('submit')
register.addEventListener('submit', (e) => {
    e.preventDefault()
    const listUsers = JSON.parse(localStorage.getItem('users') || '[]')
    const { username, password, confirm } = register
    if (!username.value) {
        userErr.innerHTML = '<i>username is required</i>'
        return
    } else if (username.value.length < 6) {
        userErr.innerHTML = '<i>usename phải lớn hơn 6 kí tự</i>'
        return
    } else {
        userErr.innerHTML = ''
    }
    if (!password.value) {
        passErr.innerHTML = '<i>password is required</i>'
        return
    } else if (password.value.length < 8) {
        passErr.innerHTML = '<i>password phải hơn 8 kí tự</i>'
        return
    } else {
        passErr.innerHTML = ''
    }
    if (password.value !== confirm.value) {
        confirmErr.innerHTML = '<i>password nhập lại không đúng</i>'
        return
    } else {
        confirmErr.innerHTML = ''
    }
    const findUser = listUsers.find((item) => item.username === username.value)
    if (findUser) {
        confirmErr.innerHTML = '<i>username exits</i>'
        return
    }
    const data = {
        userId: listUsers.length + 1,
        username: username.value,
        password: password.value,
    }
    listUsers.push(data)
    localStorage.setItem('users', JSON.stringify(listUsers))
    username.value = ''
    password.value = ''
    confirm.value = ''
    window.location.href = '/lesson13_BootsTrap/pages/login.html'
})

// (() => {
//     'use strict'

//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     const forms = document.querySelectorAll('.needs-validation')
//     console.log(forms);

//     // Loop over them and prevent submission
//     Array.from(forms).forEach(form => {
//         form.addEventListener('submit', event => {
//             console.log('event', event);
//             if (!form.checkValidity()) {
//                 event.preventDefault()
//                 event.stopPropagation()
//             }

//             form.classList.add('was-validated')
//         }, false)
//     })
// })()