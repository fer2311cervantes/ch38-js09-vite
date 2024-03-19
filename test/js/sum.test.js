// paso 1, importar
import { sum } from "../../src/js/sum";

//paso 2, crear una función de prueba unitaria
// test("Mensaje de prueba", ()=>{}  );
//expect( funcionAProbar()   ).toBe( ResultdoEsperado );
test("Suma de 2 + 2 igual a 4", ()=>{
    expect( sum(2,2) ).toBe( 4 );
});

/**suma de numeros negativos */
test("Suma de numeros negativos: ", ()=>{
    expect( sum(-6,-3) ).toBe( -9 );
    expect( sum(-100,10) ).toBe( -90 );
    expect( sum(-10,0) ).toBe( -10 );
});

/**numeros decimales */
test("Suma de números decimales", ()=>{
    //en caso de que la perdida de precisión no se un problema
    expect( sum(.1, .1) ).toBeCloseTo( .2 );
    expect( sum(.1, .2) ).toBeCloseTo( .3 );
    expect( sum(.1, .3) ).toBeCloseTo( .4 );
    expect( sum(.1, .4) ).toBeCloseTo( .5 );
    expect( sum(.1, .5) ).toBeCloseTo( .6 );
    expect( sum(.1, .6) ).toBeCloseTo( .7 );
    expect( sum(.1, .7) ).toBeCloseTo( .8 );
    expect( sum(.1, .8) ).toBeCloseTo( .9 );
    expect( sum(.1, .9) ).toBeCloseTo(  1 );
});