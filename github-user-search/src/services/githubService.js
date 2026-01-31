import axios from "axios";

export const searchUsers = ({ query, location, minRepos, page = 1 }) => {
  let searchQuery = query;

  if (location) {
    searchQuery += `+location:${location}`;
  }

  if (minRepos) {
    searchQuery += `+repos:>=${minRepos}`;
  }

  return axios.get(
    `https://api.github.com/search/users?q=${searchQuery}&per_page=10&page=${page}`,
    {
      headers: {
        Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
          ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
          : undefined,
      },
    }
  );
};
