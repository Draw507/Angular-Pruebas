import { obtenerRobots } from './arreglos';

describe('Pruebas de Arreglos', () => {
    it('Debe retornar al menos 3 robots', () => {
        const resp = obtenerRobots();

        expect(resp.length).toBeGreaterThanOrEqual(3);
    });

    it('Debe retornar existir Megaman y Ultron', () => {
        const resp = obtenerRobots();

        expect(resp).toContain('Megaman');
        expect(resp).toContain('Ultron');
    });
});