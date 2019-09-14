const button = document.querySelector('#satu')

function getBiodata(biodata) {
  console.log(JSON.stringify(biodata))
}

const biodata = {
  name: 'ihsan',
  age: 24,
  address: 'Jalan Perintis',
  hobbies: ['membaca', 'mengaji', 'ngoding'],
  is_married: true ? 'sudah' : 'belum',
  list_of_school: [
    {
      name: 'SD 214 Lolisang',
      year_in: '2000',
      year_out: '2006',
      major: null
    }
  ],
  interest_in_coding: true ? 'Iya' : 'Tidak'
}

button.addEventListener('click', () => getBiodata(biodata))