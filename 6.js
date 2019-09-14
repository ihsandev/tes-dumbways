const button6 = document.querySelector('#enam')

function isPrima(n) {
  if (n === 1) {
    return false;
  }
  else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

function segitigaSiku(params) {
  for (let i = 1; i <= params; i++) {
    for (let j = 1; j <= i; j++) {
      // if (isPrima(i)) {
      document.write('*')
      // }
      document.write('</br>')
    }
  }
}

button6.addEventListener('click', () => segitigaSiku(5))