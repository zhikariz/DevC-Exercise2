document.getElementById('tambah').addEventListener('click', () => {
  var num1 = document.querySelector('#num1').value
  var num2 = document.querySelector('#num2').value
  if (isNaN(num1) || isNaN(num2)) {
    alert('Masukkan Angka Aja Yaaa..')
  } else {
    var hasil = parseInt(num1) + parseInt(num2)
    document.querySelector('#hasil').textContent = hasil
  }
})

document.getElementById('kurang').addEventListener('click', () => {
  var num1 = document.querySelector('#num1').value
  var num2 = document.querySelector('#num2').value
  if (isNaN(num1) || isNaN(num2)) {
    alert('Masukkan Angka Aja Yaaa..')
  } else {
    var hasil = parseInt(num1) - parseInt(num2)
    document.querySelector('#hasil').textContent = hasil
  }
})

document.getElementById('kali').addEventListener('click', () => {
  var num1 = document.querySelector('#num1').value
  var num2 = document.querySelector('#num2').value
  if (isNaN(num1) || isNaN(num2)) {
    alert('Masukkan Angka Aja Yaaa..')
  } else {
    var hasil = parseInt(num1) * parseInt(num2)
    document.querySelector('#hasil').textContent = hasil
  }
})

document.getElementById('bagi').addEventListener('click', () => {
  var num1 = document.querySelector('#num1').value
  var num2 = document.querySelector('#num2').value
  if (isNaN(num1) || isNaN(num2)) {
    alert('Masukkan Angka Aja Yaaa..')
  } else {
    var hasil = parseInt(num1) / parseInt(num2)
    document.querySelector('#hasil').textContent = hasil
  }
})
