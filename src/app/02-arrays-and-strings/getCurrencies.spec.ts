import { getCurrencies } from "app/02-arrays-and-strings/getCurrencies";

describe('getCurrencies', () => {
    it('Debe retornar las monedas soportadas', () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('USD');
    })
})