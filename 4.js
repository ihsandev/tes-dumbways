const button4 = document.querySelector('#empat')

function findFrasa(string, frasa) {
  var x = 0, y = 0;

  for (i = 0; i < string.length; i++) {
    if (string[i] == frasa[0]) {
      for (j = i; j < i + frasa.length; j++) {
        if (string[j] == frasa[j - i]) {
          y++;
        }
        if (y == frasa.length) {
          x++;
        }
      }
      y = 0;
    }
  }
  console.log("'" + frasa + "' ditemukan " + x + " kali")
}

button4.addEventListener('click', () => findFrasa('bandanadana', 'dana'))