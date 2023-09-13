import { describe, it, expect } from 'vitest';
import * as React from "react";
import { render, screen, act } from "@testing-library/react";
import { Test } from "../src/Test";

it("render test", async () => {
  // const { getByText } = render(<Test />);
  // expect(getByText(/uncomment to reproduce issue/i)).toBeInTheDocument();

  act(() => {
    render(<Test />);
  });

  expect(await screen.findByText("uncomment to reproduce issue")).toBeInTheDocument();
});
