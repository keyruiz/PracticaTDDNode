function fibonacci(n) {
  if (n < 0) {
      throw new RangeError("solo números enteros ≥ 0");
    }
    
    if (n === 0) return 0;
    if (n === 1) return 1;
  
    let numAnterior2 = 0;
    let numAnterior1 = 1;
    let numero = numAnterior2 + numAnterior1;
    for (let i = 2; i < n; i++) {
        numAnterior2 = numAnterior1;
        numAnterior1 = numero;
        numero = numAnterior2 + numAnterior1;
    }
    return numero;
  }

function esPinValido(pin) {
  if (pin == null || pin === '') return false

  if (![4, 6].includes(pin.length)) return false

  if (!/^\d+$/.test(pin)) return false

  if (/^(\d)\1+$/.test(pin)) return false

  return true
}

export {
  fibonacci,
  esPinValido
}