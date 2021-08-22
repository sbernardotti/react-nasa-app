import getDateType from "../helpers/getDateType";
import shouldRender from "../helpers/shouldRender";

test("getDateType(2021-08-24) should return earth", () => {
  const result = getDateType("2021-08-24");
  expect(result).toBe("earth");
});

test("getDateType(1) should return sol", () => {
  const result = getDateType(1);
  expect(result).toBe("sol");
});

test("getDateType('1') should return sol", () => {
  const result = getDateType("1");
  expect(result).toBe("sol");
});

test("shouldRender should return true with 25 elements", () => {
  const testArray = new Array(25);
  const result = shouldRender(testArray);
  expect(result).toBe(true);
});

test("shouldRender should return false with 49 elements", () => {
  const testArray = new Array(49);
  const result = shouldRender(testArray);
  expect(result).toBe(false);
});

test("shouldRender should return false with 0 elements", () => {
  const result = shouldRender([]);
  expect(result).toBe(false);
});
