import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
      ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
      : "",
  },
});

export const searchUsers = async ({
  query,
  location,
  minRepos,
  page = 1,
}) => {
  let q = query;

  if (location) q += ` location:${location}`;
  if (minRepos) q += ` repos:>=${minRepos}`;

  const response = await githubApi.get("/search/users", {
    params: {
      q,
      page,
      per_page: 10,
    },
  });

  return response.data;
};
