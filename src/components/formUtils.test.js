import { isFormValid } from "./formUtils";

describe("isFormValid", () => {
  test("returns true for valid form data", () => {
    const validData = {
      date: "2025-05-10",
      time: "18:00",
      guests: 3,
      occasion: "Birthday",
    };
    expect(isFormValid(validData)).toBe(true);
  });

  test("returns false when any field is missing", () => {
    const invalidData = {
      date: "",
      time: "18:00",
      guests: 3,
      occasion: "Birthday",
    };
    expect(isFormValid(invalidData)).toBe(false);
  });

  test("returns false when guests are out of range", () => {
    const invalidData = {
      date: "2025-05-10",
      time: "18:00",
      guests: 11, // more than 10
      occasion: "Birthday",
    };
    expect(isFormValid(invalidData)).toBe(false);
  });
});
