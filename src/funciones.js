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
  if (pin === null || pin === undefined) {
    return false
  }

  if (pin === '') {
    return false
  }

  const longitud = pin.length
  if (longitud !== 4 && longitud !== 6) {
    return false
  }

  // Verificar que todos los caracteres sean dígitos
  for (let i = 0; i < pin.length; i++) {
    const c = pin[i]
    if (c < '0' || c > '9') {
      return false
    }
  }

  // Comprobar si todos los dígitos son iguales
  let todosIguales = true
  for (let i = 1; i < pin.length; i++) {
    if (pin[i] !== pin[0]) {
      todosIguales = false
      break
    }
  }
  if (todosIguales) return false

  return true
}

export {
  fibonacci,
  esPinValido
}