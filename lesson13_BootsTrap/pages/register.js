const register = document.getElementById('register')
const submit = document.getElementById('submit')
const listUser = JSON.parse(localStorage.getItem('users') || '[]')
console.log(listUser)
register.addEventListener('submit', (e) => {
    e.preventDefault()
    const { username, password, confirm } = register
    if (!username.value || username.value.length < 6) {
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
    register.classList.add('was-validated')
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