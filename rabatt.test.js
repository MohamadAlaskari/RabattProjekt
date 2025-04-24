const berechneRabatt = require('./rabatt');

test('Alter 12, kein Mitglied → Rabatt 0%', () => {
  expect(berechneRabatt(12, false)).toBe(0);
});

test('Alter 30, kein Mitglied → Rabatt 0%', () => {
  expect(berechneRabatt(30, false)).toBe(0);
});

test('Alter 30, Mitglied → Rabatt 15%', () => {
  expect(berechneRabatt(30, true)).toBe(15);
});

test('Alter 15, kein Mitglied → Rabatt 20%', () => {
  expect(berechneRabatt(15, false)).toBe(20);
});

test('Alter 65, kein Mitglied → Rabatt 30%', () => {
  expect(berechneRabatt(65, false)).toBe(30);
});

test('Alter 15, Mitglied → Rabatt 35%', () => {
  expect(berechneRabatt(15, true)).toBe(35);
});

test('Alter 65, Mitglied → Rabatt 45%', () => {
  expect(berechneRabatt(65, true)).toBe(45);
});
