import Button from "./index.js";
import { describe, test, jest, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";

test("Check that the name of props being passed down through the Home button are are correct", function () {
  const props = {
    text: "Home",
    className: "HomePageButton",
    handleClick: jest.fn(),
    handleClickArgument: `HomePage`,
  };
  render(
    <Button
      text={props.text}
      className={props.className}
      handleClick={props.handleClick}
      handleClickArgument={props.handleClickArgument}
    />
  );
  screen.debug();
  const button = screen.getByRole("button", { name: props.text });
  expect(button).toBeInTheDocument();
});
