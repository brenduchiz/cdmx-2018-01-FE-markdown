const {route, regularExp, data, mdLinks} = require('../src/index');


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
  