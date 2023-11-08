import { generateRandomColor } from "./../generateRandomColor";

describe(generateRandomColor, () => {
  it("should return a hexadecimal color", () => {
    const color = generateRandomColor();
    const regex = /^#[0-9A-F]{6}$/i;
    expect(regex.test(color)).toEqual(true);
  });
});
