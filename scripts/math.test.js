const { somar } = require("./math");

test("Soma de 2 + 2 deve ser 4", () => {
  expect(somar(2, 4)).toBe(4);
});

test("Soma de números negativos", () => {
  expect(somar(-5, -3)).toBe(-8);
});
