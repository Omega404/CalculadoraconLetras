import { expect } from 'chai';
import C from '../src/Calculadora';

describe('calcular', function() {
  it('sumar', function() {
    let result = C.Suma(5, 2);
    expect(result).equal(7);
  });

  it('restar', function() {
    let result = C.Resta(5, 2);
    expect(result).equal(3);
  });

  it('mult', function() {
    let result = C.Mult(2, 10);
    expect(result).equal(20);
  })
  
  it('div', function() {
    let result = C.Div(4,2);
    expect(result).equal(2);
  })
});
