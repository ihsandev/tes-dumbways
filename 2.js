const button2 = document.querySelector('#dua')

function is_username_valid(username) {
  const firstChar = username.charAt(0)
  const isSpecial = /^[A-Za-z0-9 ]+$/;
  const isNum = /^\d+$/;
  if (username.length <= 5) {
    console.log('false terlalu pendek')
  } else if (username.length >= 9) {
    console.log('false terlalu panjang')
  }

  if (isNum.test(firstChar)) {
    console.log('Character pertama tidak boleh angka')
  }

  if (!isSpecial.test(firstChar)) {
    console.log('Huruf Pertama Tidak Boleh Special Character')
  }
}

function is_password_valid(password) {
  const isUpperCaseCount = password.length - password.replace(/[A-Z]/g, '').length
  const isNumCount = password.replace(/[^0-9]/g, "").length
  const isSpecialCount = password.match(/[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g)
  if (password.length > 8) {
    console.log('Password Terlalu Panjang max 8 Character')
  }
  if (isUpperCaseCount > 1) {
    console.log('Huruf Besar Tidak boleh lebih dari 1')
  }
  if (isNumCount > 1) {
    console.log('Angka Tidak boleh lebih dari 1')
  }

  if (isSpecialCount.length > 1) {
    console.log('Special Character Tidak boleh lebih dari 1')
  }

  if (!isSpecialCount.includes('@')) {
    console.log('Character @ wajib Ada')
  }
}

function validatonForm() {
  is_username_valid('ssfnddf')
  is_password_valid('a1c@ds#s')
}

button2.addEventListener('click', () => validatonForm())