const sum = require('./sum')

test("O resultado deve ser 3", () => {
    expect(sum(1, 2)).toBe(3);
})