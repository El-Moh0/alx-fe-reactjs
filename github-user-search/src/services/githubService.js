import axios from "axios";

const BASE_URL = "https://api.github.com";

// Advanced search function using GitHub's Search API
export const fetchAdvancedUsers = async ({ username, location, minRepos, page = 1 }) => {
  // Build the query string for GitHub Search API
  let query = "";
  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;
  
  const searchUrl = `${BASE_URL}/search/users?q=${encodeURIComponent(query.trim())}`;

  // Call GitHub Search API
  const response = await axios.get(searchUrl, {
    params: {
      per_page: 10,
      page: page,
    },
    headers: {
      Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
    },
  });

  // Fetch detailed info for each user
  const detailedUsers = await Promise.all(
    response.data.items.map(async (user) => {
      const userDetails = await axios.get(`${BASE_URL}/users/${user.login}`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}
