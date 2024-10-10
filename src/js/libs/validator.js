import validator from 'validator'

export const validatorFunc = () => {
  const loginForm = document.getElementById('loginForm')
  const inputLogin = document.getElementById('login')
  const inputPassword = document.getElementById('password')
  const loginErrorElement = document.getElementById('loginError')
  const passwordErrorElement = document.getElementById('passwordError')
  const inputRepeatPassword = document.getElementById('repeatPassword')
  const repeatPasswordErrorElement = document.getElementById('repeatPasswordError')

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault()

    const login = inputLogin.value
    const password = inputPassword.value
    let isValid = true

    if (validator.isEmpty(login)) {
      loginErrorElement.textContent = 'Логин не может быть пуст.'

      isValid = false
    } else if (!validator.isLength(login, { min: 4, max: 20 })) {
      loginErrorElement.textContent = 'Логин должен быть от 4 до 20 символов.'
      isValid = false
    } else {
      loginErrorElement.textContent = ''
    }

    if (validator.isEmpty(password)) {
      passwordErrorElement.textContent = 'Пароль не может быть пуст.'
      isValid = false
    } else if (!validator.isLength(password, { min: 8 })) {
      passwordErrorElement.textContent = 'Пароль должен быть не менее 8 символов.'
      isValid = false
    } else {
      passwordErrorElement.textContent = ''
    }

    if (inputRepeatPassword) {
      const repeatPassword = inputRepeatPassword.value

      if (repeatPassword !== password) {
        repeatPasswordErrorElement.textContent = 'Пароли не совпадают.'
        isValid = false
      } else {
        repeatPasswordErrorElement.textContent = ''
      }
    }

    if (isValid) {
      alert('Форма отправлена.')

      inputLogin.value = ''

      inputPassword.value = ''

      inputRepeatPassword.value = ''
    }
  })
}

export const emailValidator = () => {
  const loginForm = document.getElementById('loginForm')
  const inputLogin = document.getElementById('login')
  const loginErrorElement = document.getElementById('loginError')

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault()

    const login = inputLogin.value
    let isValid = true

    if (validator.isEmpty(login)) {
      loginErrorElement.textContent = 'Логин не может быть пуст.'

      isValid = false
    } else if (!validator.isLength(login, { min: 4, max: 20 })) {
      loginErrorElement.textContent = 'Логин должен быть от 4 до 20 символов.'
      isValid = false
    } else {
      loginErrorElement.textContent = ''
    }

    if (isValid) {
      alert('Лист отправлен на пошту.')

      inputLogin.value = ''
    }
  })
}

export const contactValidator = () => {
  const loginForm = document.getElementById('loginForm')
  const inputLogin = document.getElementById('login')
  const loginErrorElement = document.getElementById('loginError')
  const inputPhone = document.getElementById('phone')
  const phoneErrorElement = document.getElementById('phoneError')

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault()

    const login = inputLogin.value
    const phone = inputPhone.value
    let isValid = true

    if (validator.isEmpty(login)) {
      loginErrorElement.textContent = 'Логин не может быть пуст.'

      isValid = false
    } else if (!validator.isLength(login, { min: 4, max: 20 })) {
      loginErrorElement.textContent = 'Логин должен быть от 4 до 20 символов.'
      isValid = false
    } else {
      loginErrorElement.textContent = ''
    }

    if (validator.isEmpty(phone)) {
      phoneErrorElement.textContent = 'Номер телефона не может быть пуст.'
      isValid = false
    } else if (!validator.isMobilePhone(phone, 'uk-UA')) {
      phoneErrorElement.textContent = 'Неправильный формат телефонного номера.'
      isValid = false
    } else {
      phoneErrorElement.textContent = ''
    }

    if (isValid) {
      alert('Заявка отправлена')

      inputLogin.value = ''
      inputPhone.value = ''
    }
  })
}

export const tourValidator = () => {
  const inputName = document.getElementById('input-name')
  const nameErrorElement = document.getElementById('tourNameError')
  const inputPhone = document.getElementById('input-tel')
  const phoneErrorElement = document.getElementById('tourPhoneError')
  const inputEmail = document.getElementById('input-mail')
  const emailErrorElement = document.getElementById('tourMailError')

  const adviserInputPhone = document.getElementById('adviser-inp')
  const adviserPhoneErrorElement = document.querySelector('.adviser__input-error')

  const submitButton = document.querySelector('.form__btn-three-state')
  submitButton.addEventListener('click', function () {
    const name = inputName.value
    const phone = inputPhone.value
    const email = inputEmail.value
    const adviserPhone = adviserInputPhone.value
    let isValid = true

    if (validator.isEmpty(name)) {
      nameErrorElement.textContent = 'Имя не может быть пустым.'
      isValid = false
    } else if (!validator.isLength(name, { min: 2, max: 50 })) {
      nameErrorElement.textContent = 'Имя должно содержать от 2 до 50 символов.'
      isValid = false
    } else {
      nameErrorElement.textContent = ''
    }

    if (validator.isEmpty(phone)) {
      phoneErrorElement.textContent = 'Телефон не может быть пустым.'
      isValid = false
    } else if (!validator.isMobilePhone(phone, 'any', { strictMode: false })) {
      phoneErrorElement.textContent = 'Неверный формат телефона.'
      isValid = false
    } else {
      phoneErrorElement.textContent = ''
    }

    if (validator.isEmpty(adviserPhone)) {
      adviserPhoneErrorElement.textContent = 'Телефон советника не может быть пустым.'
      isValid = false
    } else if (!validator.isMobilePhone(adviserPhone, 'any', { strictMode: false })) {
      adviserPhoneErrorElement.textContent = 'Неверный формат телефона советника.'
      isValid = false
    } else {
      adviserPhoneErrorElement.textContent = ''
    }

    if (validator.isEmpty(email)) {
      emailErrorElement.textContent = 'Эл. почта не может быть пустой.'
      isValid = false
    } else if (!validator.isEmail(email)) {
      emailErrorElement.textContent = 'Неверный формат электронной почты.'
      isValid = false
    } else {
      emailErrorElement.textContent = ''
    }

    if (isValid) {
      alert('Заявка отправлена')

      inputName.value = ''
      inputPhone.value = ''
      inputEmail.value = ''
      adviserInputPhone.value = ''
    }
  })
}
