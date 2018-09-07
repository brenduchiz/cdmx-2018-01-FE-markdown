const {route, regularExp, data, mdLinks} = require('../src/index');

describe('regularExp', () => {
  test('Deberia ser una funcion', ()=>{
    expect(typeof regularExp).toEqual('function');
  });
});

describe('data', () => {
    test('Deberia ser una funcion', ()=>{
      expect(typeof data).toEqual('function');
    });
  });

  describe('mdLinks', () => {
    test('Deberia ser una funcion', ()=>{
      expect(typeof mdLinks).toEqual('function');
    });
  });
  