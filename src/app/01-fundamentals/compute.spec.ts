import { compute } from "app/01-fundamentals/compute";

describe('compute4', () => {
    it('debe retornar 0 si input es negativo', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    })
    it('debe incrementar el input si es positivo', () => {
        const result = compute(1);
        expect(result).toBe(2);
    })
}) //suite
