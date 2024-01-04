import { getByText, render, screen } from "@testing-library/react";
import App from "./App";

test("renders 'john' image", () => {
  render(<App />);
  const johnImage = document.querySelector("#header-john");
  expect(johnImage).toBeInTheDocument();
});

test("renders header info", () => {
  render(<App />);
  const headerInfo = screen.getByText(/imperdiet metus./);
  expect(headerInfo).toBeInTheDocument();
});

test("renders work cards", () => {
  render(<App />);
  const workCardHeader = screen.getByText(/Classy/);
  expect(workCardHeader).toBeInTheDocument();
});
