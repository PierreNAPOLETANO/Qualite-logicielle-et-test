// Créez également estMort.test.js avec dedans :
const estMort = require('./estMort');

/* test('le joueur doit être mort si pv: 0', () => {
  const joueur = {pv: 0}
  expect(estMort(joueur)).toBe(true);
});

test('le joueur ne doit pas être mort si pv: 10', () => {
    const joueur = {pv: 10}
    expect(estMort(joueur)).toBe(false);
});

test('le joueur doit être mort si pv: -1', () => {
    const joueur = {pv: -1};
    expect(estMort(joueur)).toBe(true);
});

test('Dieu doit être immortel', () => {
    const joueur = {pv: -1, dieu: true};
    expect(estMort(joueur)).toBe(false);
}); */

describe("estMort", () => {
    test('le joueur doit être mort si pv: 0', () => {
        const joueur = {pv: 0}
        expect(estMort(joueur)).toBe(true);
    });
      
    test('le joueur ne doit pas être mort si pv: 10', () => {
        const joueur = {pv: 10}
        expect(estMort(joueur)).toBe(false);
    });
      
    test('le joueur doit être mort si pv: -1', () => {
        const joueur = {pv: -1};
        expect(estMort(joueur)).toBe(true);
    });
      
    test('Dieu doit être immortel', () => {
        const joueur = {pv: -1, dieu: true};
        expect(estMort(joueur)).toBe(false);
    });
});