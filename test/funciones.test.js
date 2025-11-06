import { describe, it, expect } from 'vitest'
import { fibonacci, esPinValido } from '../src/funciones.js'

describe('Función fibonacci(n)', () => {
    it('Debe lanzar RangeError si n ≤ 0', () => {
      expect(() => fibonacci(-7)).toThrowError(new RangeError('solo números enteros ≥ 0'))
      expect(() => fibonacci(-3)).toThrowError(new RangeError('solo números enteros ≥ 0'))
    })

    it('Debe devolver 0 si n = 0', () => {
        expect(fibonacci(0)).toBe(0)
      })
    
      it('Debe devolver 1 si n = 1', () => {
        expect(fibonacci(1)).toBe(1)
      })

      it('Debe devolver la suma de los dos anteriores para n ≥ 2', () => {
        expect(fibonacci(2)).toBe(1)
        expect(fibonacci(3)).toBe(2)
        expect(fibonacci(4)).toBe(3)
        expect(fibonacci(5)).toBe(5)
        expect(fibonacci(6)).toBe(8)
      })
});

describe('Función esPinValido(pin)', () => {
  it('Debe devolver false si pin es null o undefined', () => {
    expect(esPinValido(null)).toBe(false)
    expect(esPinValido(undefined)).toBe(false)
  });
  
  it('Debe devolver false si pin está vacío', () => {
    expect(esPinValido('')).toBe(false)
  });

  it('Debe devolver false si la longitud no es 4 ni 6', () => {
    expect(esPinValido('123')).toBe(false)
    expect(esPinValido('12345')).toBe(false)
    expect(esPinValido('1234567')).toBe(false)
  });

  it('Debe devolver false si contiene caracteres no numéricos', () => {
    expect(esPinValido('12a4')).toBe(false)
    expect(esPinValido('12 4')).toBe(false)
    expect(esPinValido('abcd')).toBe(false)
    expect(esPinValido('1234.')).toBe(false)
  });
});