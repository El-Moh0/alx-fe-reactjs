import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Search from "./Search";
import * as githubService from "../services/githubService";

vi.spyOn(githubService, "fetchUserData");

describe("Search Component", () => {
  it("calls fetchUserData when form is submitted", async () => {
    githubService.fetchUserData.mockResolvedValueOnce({
      login: "octocat",
      avatar_url: "test.png",
      html_url: "https://github.com/octocat",
    });

    render(<Search />);

    fireEvent.change(screen.getByPlaceholderText(/enter github username/i), {
      target: { value: "octocat" },
    });

    fireEvent.click(screen.getByText(/search/i));

    expect(githubService.fetchUserData).toHaveBeenCalledWith("octocat");
  });
});
