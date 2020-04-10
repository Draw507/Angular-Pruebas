import { mensaje } from './string';

describe('Pruebas de strings', () => {
    it('Debe de regresar un string', () => {
        const resp = mensaje('David');

        expect(typeof resp).toBe('string');
    });

    it('Debe de regresar un salud con el nombre enviado', () => {
        const nombre = 'Susana';
        const resp = mensaje(nombre);

        expect(resp).toContain(nombre);
    });
});
