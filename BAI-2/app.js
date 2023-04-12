function numberOneTriangle(n) {
  var n = parseInt(document.getElementById('number').value);
  if (n < 1 || n > 10) {
    document.getElementById('result').innerHTML =
      'Bạn đã nhập sai, vui lòng nhập lại!';
  } else {
    let row = '';
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        row += '* ';
      }
      row += '<br>';
      document.getElementById('result').innerHTML = row;
    }
  }
}
