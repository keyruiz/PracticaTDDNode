import { describe, it, expect } from 'vitest'
import { fibonacci } from '../src/funciones.js'

describe('Función fibonacci(n)', () => {
    it('Debe lanzar RangeError si n ≤ 0', () => {
      expect(() => fibonacci(0)).toThrowError(new RangeError('solo números enteros ≥ 0'))
      expect(() => fibonacci(-3)).toThrowError(new RangeError('solo números enteros ≥ 0'))
    })

    it('Debe devolver 0 si n = 0', () => {
        expect(fibonacci(0)).toBe(0)
      })
})