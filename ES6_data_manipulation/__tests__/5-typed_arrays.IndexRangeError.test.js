import createInt8TypedArray from "./5-typed_arrays.js";

test("createInt8TypedArray throws an error with `Position outside range` statement", () => {
  expect(() => {
    array = createInt8TypedArray(10, 100, 5);
  }).toThrow('Position outside range');
});
