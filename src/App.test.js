import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "./Main";

beforeEach(() => {
  global.fetchAPI = jest.fn();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders date input with required attribute", () => {
  render(<BookingForm availableTimes={[]} submitForm={() => {}} />);
  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toHaveAttribute("required");
});

test("renders number of guests input with min and max attributes", () => {
  render(<BookingForm availableTimes={[]} submitForm={() => {}} />);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
  expect(guestsInput).toHaveAttribute("required");
});

test("renders occasion select with required attribute", () => {
  render(<BookingForm availableTimes={[]} submitForm={() => {}} />);
  const occasionSelect = screen.getByLabelText(/occasion/i);
  expect(occasionSelect).toHaveAttribute("required");
});

test("renders 'Choose date' label in BookingForm", () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  const labelElement = screen.getByLabelText(/choose date/i);
  expect(labelElement).toBeInTheDocument();
});


test("initializeTimes should return available times from fetchAPI", () => {
  const mockTimes = ["17:00", "18:00", "19:00"];
  global.fetchAPI.mockReturnValue(mockTimes);

  const result = initializeTimes();
  expect(result).toEqual(mockTimes);
});

test("updateTimes should return available times for selected date", () => {
  const mockTimes = ["17:00", "18:00"];
  global.fetchAPI.mockReturnValue(mockTimes);

  const action = { type: "UPDATE_TIMES", payload: "2024-04-30" };
  const result = updateTimes([], action);

  expect(global.fetchAPI).toHaveBeenCalledWith(new Date("2024-04-30"));
  expect(result).toEqual(mockTimes);
});