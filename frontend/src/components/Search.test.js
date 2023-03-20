import { render, screen } from "@testing-library/react";
import Search from "./Search";

// Unit test that tests that the Search component is rendered successfully on the page
test("renders Search component", () => {
  render(<Search />);
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
});
