const button = document.getElementById('button');
const result = document.getElementById('result');

function checkSNT(number) {
  if (number < 2) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}
button.addEventListener('click', () => {
  const number1 = Number.parseInt(document.getElementById('number1').value);
  const number2 = Number.parseInt(document.getElementById('number2').value);

  if (!Number.isInteger(number1) || !Number.isInteger(number2)) {
    result.innerHTML = 'Bạn nhập chưa đúng, vui lòng nhập lại!';
    return;
  }

  if (number1 > number2) {
    result.innerHTML =
      'Số thứ nhất không được nhỏ hơn số thứ hai, vui lòng nhập lại!';
    return;
  }

  let sum = 0;
  for (let i = number1; i <= number2; i++) {
    if (checkSNT(i)) sum += i;
  }

  result.innerHTML = `Tổng các số nguyên tố trong đoạn từ ${number1} đến ${number2} là: ${sum}`;
});
