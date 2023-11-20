import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Yusuf from "~/components/Yusuf";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<Yusuf />);
    expect(screen.getByRole("heading").textContent).toBe("Yusuf Subastian");
  });
});
