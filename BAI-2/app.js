function numberOneTriangle(n) {
  if (n < 1 || n > 10) {
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

numberOneTriangle(6);
