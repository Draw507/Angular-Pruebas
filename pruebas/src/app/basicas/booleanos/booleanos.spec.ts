import { usuarioIngresado } from './booleanos';

describe('Pruebas de Booleanos', () => {
    it('Debe retornar true', () => {
        const resp = usuarioIngresado();

        expect(resp).toBeTruthy();
    });

    it('Debe retornar false', () => {
        const resp = usuarioIngresado();

        expect(!resp).toBeFalsy();
    });
});