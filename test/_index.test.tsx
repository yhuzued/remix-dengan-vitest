import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { createRemixStub } from "@remix-run/testing";
import userEvent from "@testing-library/user-event";
import Index from "~/routes/_index";
import { json } from "@remix-run/node";

describe("App component", () => {
  const RemixStub = createRemixStub([
    {
      path: "/",
      Component: Index,
      loader() {
        return json({ umur: 30, namaTombol: "Login" });
      },
      action() {
        return json({ w: "Hidup" });
      },
    },
  ]);

  it("renders correct heading", async () => {
    render(<RemixStub />);
    await waitFor(() =>
      expect(screen.getByRole("heading").textContent).toBe("Login")
    );
  });

  it("renders login button", async () => {
    render(<RemixStub />);
    await waitFor(() =>
      expect(screen.getByRole("button").textContent).toBe("Login")
    );
  });

  it("renders correct umur", async () => {
    render(<RemixStub />);
    await waitFor(() => expect(screen.getByText("Umur: 30").textContent).exist);
  });

  it("ketika tombol login diklik, tombol login jadi 'Memproses' ", async () => {
    render(<RemixStub />);
    const user = userEvent.setup();

    await waitFor(() => {
      const tombolLogin = screen.getByRole("button");
      user.click(tombolLogin);

      return expect(screen.getByRole("button").textContent).toBe("Hidup");
    });
  });
});
