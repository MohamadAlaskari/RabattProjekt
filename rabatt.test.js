const berechneRabatt = require('./rabatt');

test('30 Jahre alt, kein Mitglied → 0%', () => {
  expect(berechneRabatt(30, false)).toBe(0);
});

test('15 Jahre alt, Mitglied → 35%', () => {
  expect(berechneRabatt(15, true)).toBe(35);
});

test('65 Jahre alt, Mitglied → 45%', () => {
  expect(berechneRabatt(65, true)).toBe(45);
});
