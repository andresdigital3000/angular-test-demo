import { greet } from "app/02-arrays-and-strings/greet";

describe('greet', () => {
    it('Debe incluir el nombre en e mensaje', () => {
        expect(greet('mosh')).toContain('mosh');
    })
})