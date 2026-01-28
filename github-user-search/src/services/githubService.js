import axios from "axios";
import { fetchUserData } from "./githubService";
import { vi } from "vitest";

vi.mock("axios");

describe("fetchUserData", () => {
  it("calls the correct GitHub API endpoint", async () => {
    const mockUser = { login: "octocat" };

    axios.get.mockResolvedValueOnce({ data: mockUser });

    const username = "octocat";
    const result = await fetchUserData(username);

    expect(axios.get).toHaveBeenCalledWith(
      `https://api.github.com/users/${username}`,
      expect.any(Object)
    );

    expect(result).toEqual(mockUser);
  });
});
