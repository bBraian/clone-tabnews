const calculadora = require("../models/calculadora.js");

test("2 + 2 = 4", () => {
  const result = calculadora.somar(2, 2);
  expect(result).toBe(4);
});
