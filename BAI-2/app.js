function numberOneTriangle(n) {
  if (n < 1 || n > 10) {
    document.write(`<div>Vui long nhap so tu 1 den 10</div>`);
    return;
  }
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 0; j < i; j++) {
      row += '* ';
    }
    document.write(`<div>${row}</div>`);
  }
}

numberOneTriangle(5);
