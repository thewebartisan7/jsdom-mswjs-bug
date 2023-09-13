import * as React from "react";
import { render, screen, act } from "@testing-library/react";
import { Users } from "../src/Users";

it("fetch user", async () => {
  act(() => {
    render(<Users />);
  });

  expect(await screen.findByText("Leanne Graham")).toBeInTheDocument();
});
